class Connection {
  static MURMUR = 0x5bd1e995;

  static OPCODE = {
    SPAWN: 0x00,
    SPECTATE: 0x01,
    FACEBOOK_DATA: 0x05,
    MOVE: 0x10,
    SPLIT: 0x11,
    SPECIAL_ON: 0x12,
    SPECIAL_OFF: 0x13,
    CLEAR_CELLS: 0x14,
    EJECT: 0x15,
    SPAWN_ACK: 0x20,
    WORLD_UPDATE: 0x10,
    LEADERBOARD: 0x35,
    BORDER: 0x40,
    RADAR: 0x45,
    PING: 0xa1,
    RTT_REPORT: 0xe2,
    HELLO: 0xf1,
    PROMPT_SPAWN: 0xf2,
    BATCH: 0xff,
  };

  constructor(socket, url = "") {
    this.socket = socket;
    this.host = Connection.hostFromUrl(url);
    this.protocolKey = 31129;
    this.decryptionKey = 0;
    this.helloKey = 0;
    this.outboundCounter = null;
    this.messageIndex = 0;
    this.fragments = [];
    this.handlers = {};
    this.cellsIDs = [];
    this.isAlive = false;
    this.entities = new Map();
    this.offsetX = 0;
    this.offsetY = 0;
    this.frameKnown = false;
  }

  static hostFromUrl(url) {
    return String(url || "").replace(/^wss?:\/\//, "").split(":")[0];
  }

  static murmur2(bytes, seed) {
    const m = Connection.MURMUR;
    let len = bytes.length;
    let h = (seed ^ len) >>> 0;
    let i = 0;
    while (len >= 4) {
      let k = (bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24)) >>> 0;
      k = Math.imul(k, m) >>> 0;
      k ^= k >>> 24;
      k = Math.imul(k, m) >>> 0;
      h = Math.imul(h, m) >>> 0;
      h ^= k;
      i += 4;
      len -= 4;
    }
    if (len === 3) h ^= bytes[i + 2] << 16;
    if (len >= 2) h ^= bytes[i + 1] << 8;
    if (len >= 1) {
      h ^= bytes[i];
      h = Math.imul(h, m) >>> 0;
    }
    h ^= h >>> 13;
    h = Math.imul(h, m) >>> 0;
    h ^= h >>> 15;
    return h >>> 0;
  }

  static decompress(input, output) {
    let ip = 0;
    let op = 0;
    const ext = (nibble) => {
      let length = nibble;
      if (nibble === 15) {
        let e;
        do {
          e = input[ip++];
          length += e;
        } while (e === 255);
      }
      return length;
    };
    while (ip < input.length) {
      const token = input[ip++];
      const literals = ext(token >> 4);
      for (let n = 0; n < literals; n++) output[op++] = input[ip++];
      if (ip >= input.length) break;
      const offset = input[ip] | (input[ip + 1] << 8);
      ip += 2;
      if (offset === 0 || offset > op) return -(ip - 2);
      const matchLen = ext(token & 0xf) + 4;
      let src = op - offset;
      for (let n = 0; n < matchLen; n++) output[op++] = output[src++];
    }
    return output;
  }

  static parseSpawnAck(bytes) {
    return { cellId: new DataView(bytes.buffer, bytes.byteOffset, bytes.length).getUint32(1, true) };
  }

  static parseBorder(bytes) {
    if (bytes.length < 33) return null;
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    const x0 = v.getFloat64(1, true);
    const y0 = v.getFloat64(9, true);
    const x1 = v.getFloat64(17, true);
    const y1 = v.getFloat64(25, true);
    return {
      minX: Math.min(x0, x1),
      minY: Math.min(y0, y1),
      maxX: Math.max(x0, x1),
      maxY: Math.max(y0, y1),
      centerX: (x0 + x1) / 2,
      centerY: (y0 + y1) / 2,
      width: Math.abs(x1 - x0),
      height: Math.abs(y1 - y0),
    };
  }

  static parseWorldUpdate(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    const decoder = new TextDecoder();
    let off = 1;
    off += 2 + view.getUint16(off, true) * 8;
    const readString = () => {
      const start = off;
      while (off < bytes.length && bytes[off] !== 0) off++;
      const str = decoder.decode(bytes.slice(start, off));
      off += 1;
      return str;
    };
    const entities = [];
    let truncated = false;
    while (off + 4 <= bytes.length) {
      const id = view.getUint32(off, true);
      if (id === 0) {
        off += 4;
        break;
      }
      if (off + 15 > bytes.length) {
        truncated = true;
        break;
      }
      off += 4;
      const e = { id };
      e.x = view.getInt32(off, true);
      off += 4;
      e.y = view.getInt32(off, true);
      off += 4;
      e.size = view.getUint16(off, true);
      off += 2;
      const flags = bytes[off];
      off += 1;
      let extFlags = 0;
      if (flags & 0x80) {
        extFlags = bytes[off];
        off += 1;
      }
      if (flags & 0x02) off += 3;
      if (flags & 0x04) e.name = readString();
      if (flags & 0x08) e.skin = readString();
      e.isVirus = !!(flags & 0x01);
      e.isFood = !!(extFlags & 0x01);
      if (extFlags & 0x04) off += 4;
      entities.push(e);
      if (off > bytes.length) {
        truncated = true;
        break;
      }
    }
    if (truncated) return { entities, removedIds: [] };
    const removeCount = view.getUint16(off, true);
    off += 2;
    const removedIds = [];
    for (let i = 0; i < removeCount && off + 4 <= bytes.length; i++) {
      removedIds.push(view.getUint32(off, true));
      off += 4;
    }
    return { entities, removedIds };
  }

  static parseLeaderboard(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    const decoder = new TextDecoder();
    let off = 2;
    const entries = [];
    while (off + 5 <= bytes.length) {
      const score = view.getUint32(off, true);
      off += 4;
      const type = bytes[off];
      off += 1;
      let name = null;
      if (type === 6) {
        const start = off;
        while (off < bytes.length && bytes[off] !== 0) off++;
        if (off >= bytes.length) break;
        name = decoder.decode(bytes.slice(start, off));
        off += 1;
      }
      entries.push({ score, type, name });
    }
    return entries;
  }

  static parseRadar(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    const count = view.getUint16(1, true);
    const records = [];
    let off = 3;
    for (let i = 0; i < count && off + 13 <= bytes.length; i++) {
      records.push({
        dx: view.getInt32(off, true),
        dy: view.getInt32(off + 4, true),
        size: view.getInt32(off + 8, true),
        flag: bytes[off + 12],
      });
      off += 13;
    }
    return records;
  }

  static parse(opcode, bytes) {
    switch (opcode) {
      case Connection.OPCODE.WORLD_UPDATE:
        return Connection.parseWorldUpdate(bytes);
      case Connection.OPCODE.SPAWN_ACK:
        return Connection.parseSpawnAck(bytes);
      case Connection.OPCODE.BORDER:
        return Connection.parseBorder(bytes);
      case Connection.OPCODE.LEADERBOARD:
        return Connection.parseLeaderboard(bytes);
      case Connection.OPCODE.RADAR:
        return Connection.parseRadar(bytes);
      default:
        return null;
    }
  }

  on(opcode, handler) {
    this.handlers[opcode] = handler;
  }

  open() {
    this.messageIndex = 0;
    this.fragments = [];
    this.sendProtocolVersion();
    this.sendHandshakeKey();
  }

  send(bytes) {
    if (!this.socket || this.socket.readyState !== 1) return false;
    this.socket.send(new Uint8Array(bytes).buffer);
    return true;
  }

  seedOutbound(hello) {
    const nul = hello.indexOf(0, 5);
    const version = hello.slice(5, nul === -1 ? hello.length : nul);
    return Connection.murmur2([...new TextEncoder().encode(this.host), ...version], 255);
  }

  nextPad() {
    const h = this.outboundCounter;
    const pad = [h & 0xff, (h >>> 8) & 0xff, (h >>> 16) & 0xff, (h >>> 24) & 0xff];
    this.outboundCounter = Connection.murmur2(pad, 255);
    return pad;
  }

  sendObfuscated(bytes) {
    if (this.outboundCounter == null) return false;
    const pad = this.nextPad();
    return this.send(bytes.map((b, i) => b ^ pad[i & 3]));
  }

  sendProtocolVersion(version = 23) {
    return this.send([0xfe, version & 0xff, (version >>> 8) & 0xff, (version >>> 16) & 0xff, (version >>> 24) & 0xff]);
  }

  sendHandshakeKey(key = this.protocolKey) {
    const bytes = [0xff];
    let k = BigInt(key);
    for (let i = 0; i < 8; i++) {
      bytes.push(Number(k & 0xffn));
      k >>= 8n;
    }
    return this.send(bytes);
  }

  sendSpawn(name) {
    return this.sendObfuscated([Connection.OPCODE.SPAWN, ...new TextEncoder().encode(name), 0x00]);
  }

  sendMove(x, y) {
    const b = new Uint8Array(13);
    const v = new DataView(b.buffer);
    b[0] = Connection.OPCODE.MOVE;
    v.setInt32(1, x | 0, true);
    v.setInt32(5, y | 0, true);
    v.setUint32(9, this.helloKey >>> 0, true);
    return this.sendObfuscated([...b]);
  }

  sendSplit() {
    return this.sendObfuscated([Connection.OPCODE.SPLIT]);
  }

  sendEject() {
    return this.sendObfuscated([Connection.OPCODE.EJECT]);
  }

  sendSpectate() {
    return this.sendObfuscated([Connection.OPCODE.SPECTATE]);
  }

  sendSpecialOn() {
    return this.sendObfuscated([Connection.OPCODE.SPECIAL_ON]);
  }

  sendSpecialOff() {
    return this.sendObfuscated([Connection.OPCODE.SPECIAL_OFF]);
  }

  sendFacebookData(data) {
    return this.sendObfuscated([Connection.OPCODE.FACEBOOK_DATA, ...new TextEncoder().encode(data), 0x00]);
  }

  onMessage(data) {
    const raw = new Uint8Array(data);
    if (this.messageIndex === 0) {
      this.decryptionKey = new DataView(raw.buffer, raw.byteOffset).getUint32(1, true);
      this.helloKey = this.decryptionKey;
      this.outboundCounter = this.seedOutbound(raw);
      this.messageIndex++;
      return this.dispatch(raw);
    }
    this.messageIndex++;
    this.fragments.push(raw);
    if (raw.length === 64) return null;
    let bytes;
    if (this.fragments.length === 1) {
      bytes = this.fragments[0];
    } else {
      const total = this.fragments.reduce((n, f) => n + f.length, 0);
      bytes = new Uint8Array(total);
      let off = 0;
      for (const f of this.fragments) {
        bytes.set(f, off);
        off += f.length;
      }
    }
    this.fragments = [];
    const k = (this.decryptionKey ^ this.protocolKey) >>> 0;
    const key = [k & 0xff, (k >>> 8) & 0xff, (k >>> 16) & 0xff, (k >>> 24) & 0xff];
    for (let i = 0; i < bytes.length; i++) bytes[i] ^= key[i & 3];
    return this.dispatch(bytes);
  }

  dispatch(bytes) {
    let opcode = bytes[0];
    let payload = bytes;
    if (opcode === Connection.OPCODE.BATCH && bytes.length >= 5) {
      const declen = new DataView(bytes.buffer, bytes.byteOffset).getUint32(1, true);
      const out = Connection.decompress(bytes.slice(5), new Uint8Array(declen));
      if (typeof out === "number") return { opcode, decompressFailed: true };
      payload = out;
      opcode = out[0];
    }
    const parsed = Connection.parse(opcode, payload);
    this.updateState(opcode, parsed);
    const handler = this.handlers[opcode];
    if (handler) handler(payload, parsed);
    return { opcode, payload, parsed };
  }

  updateState(opcode, parsed) {
    if (opcode === Connection.OPCODE.SPAWN_ACK && parsed) {
      this.cellsIDs.push(parsed.cellId);
      this.isAlive = true;
    } else if (opcode === Connection.OPCODE.CLEAR_CELLS) {
      const wasAlive = this.isAlive;
      this.cellsIDs = [];
      this.isAlive = false;
      if (wasAlive) this.onDeath();
    } else if (opcode === Connection.OPCODE.BORDER && parsed && parsed.width > 14000 && parsed.height > 14000) {
      this.offsetX = parsed.centerX;
      this.offsetY = parsed.centerY;
      this.frameKnown = true;
    } else if (opcode === Connection.OPCODE.WORLD_UPDATE && parsed) {
      const now = Date.now();
      for (const e of parsed.entities) {
        e.lastSeen = now;
        this.entities.set(e.id, e);
      }
      for (const id of parsed.removedIds) {
        this.entities.delete(id);
        const idx = this.cellsIDs.indexOf(id);
        if (idx !== -1) this.cellsIDs.splice(idx, 1);
      }
      if (this.isAlive && this.cellsIDs.length === 0) {
        this.isAlive = false;
        this.onDeath();
      }
    }
  }

  onDeath() {}
}
