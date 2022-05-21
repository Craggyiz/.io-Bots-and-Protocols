import WebSocket from "ws";
import { grabConfig } from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer } from "smart-buffer";
import { generateHeaders } from '../utils/headers.js';


var __buf = new DataView(new ArrayBuffer(8));
  function Writer(littleEndian) {
    this._e = littleEndian;
    this.reset();
    return this;
  }
  Writer.prototype = {
    writer: true,
    reset: function (littleEndian) {
      this._b = [];
      this._o = 0;
    },
    setUint8: function (a) {
      if (a >= 0 && a < 256) this._b.push(a);
      return this;
    },
    setInt8: function (a) {
      if (a >= -128 && a < 128) this._b.push(a);
      return this;
    },
    setUint16: function (a) {
      __buf.setUint16(0, a, this._e);
      this._move(2);
      return this;
    },
    setInt16: function (a) {
      __buf.setInt16(0, a, this._e);
      this._move(2);
      return this;
    },
    setUint32: function (a) {
      __buf.setUint32(0, a, this._e);
      this._move(4);
      return this;
    },
    setInt32: function (a) {
      __buf.setInt32(0, a, this._e);
      this._move(4);
      return this;
    },
    setFloat32: function (a) {
      __buf.setFloat32(0, a, this._e);
      this._move(4);
      return this;
    },
    setFloat64: function (a) {
      __buf.setFloat64(0, a, this._e);
      this._move(8);
      return this;
    },
    _move: function (b) {
      for (var i = 0; i < b; i++) this._b.push(__buf.getUint8(i));
    },
    setStringUTF8: function (s) {
      var bytesStr = unescape(encodeURIComponent(s));
      for (var i = 0, l = bytesStr.length; i < l; i++)
        this._b.push(bytesStr.charCodeAt(i));
      this._b.push(0);
      return this;
    },
    build: function () {
      return new Uint8Array(this._b);
    },
  };

class WasmInstance {
  constructor() {
    this.Hooks = [];
  }
  run_hooks(encrypted, decryptionKey, rotBits, rotLBits, genBits) {
    this.Hooks = [
      encrypted, decryptionKey, rotBits, rotLBits, genBits
    ];
  }
  rotateKeys() {
    this.Hooks[0] = this.Hooks[0] - this.Hooks[1];
    this.Hooks[1] = this.Hooks[1] + 999045;
    var findHash = this.step(this.Hooks[1], this.Hooks[2], this.Hooks[3], this.Hooks[4]);
    let tandem = (this.Hooks[2] + this.Hooks[3]) * 2;
    this.Hooks[0] = this.Hooks[0] - tandem - findHash;
    tandem = tandem ^ 10;
    if (this.Hooks[2] < this.Hooks[3]) {
      for (var i = 0; i < tandem; i++) {
        this.Hooks[0] = (this.Hooks[0] - tandem) - ((0xff ^ i) + i);
      }
    }
    return this.Hooks[0];
  }
  step() {
    let rotate = this._rotr();
    if (rotate <= 0) {
      rotate = this.run_0(rotate);
      if (rotate <= 0) {
        rotate = this.run_1(this.Hooks[1]);
      }
    }
    return rotate;
  }
  _rotr() {
    return (this.Hooks[1] >> this.Hooks[2]) | (this.Hooks[1] << ((this.Hooks[4]) * 8 - this.Hooks[3]));
  }
  run_0(key) {
    return ((key * (0x10000) - 1) >> 0) + (key * 2);
  }
  run_1(key) {
    return (key + 19) + (key * 5) - 1;
  }
}

export class Minion {
  constructor() {
    this.agent = getAgent();
    this.startedBots = false;
  }

  async connect(url) {
    this.serverUrl = url;

    this.ws = new WebSocket(url, {
      agent: this.agent,
      rejectUnauthorized: false,
      headers: generateHeaders('http://cirlzgame.tk/')
    });

    this.ws.binaryType = 'arraybuffer';

    this.ws.on('message', this.onMessage.bind(this));
    this.ws.on('open', this.onOpen.bind(this));
    this.ws.on('close', this.onClose.bind(this));
    this.ws.on('error', this.onError.bind(this));

    this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
    this.name = grabConfig().getName() + ' | ' + this.id;
    this.wasm = new WasmInstance();
  }

  onMessage(message) {
    let view = new DataView(message);
    var offset = 0;
    240 == view.getUint8(offset) && (offset += 5);
    switch (view.getUint8(offset++)) {
      case 0x56:
        this.wasm.run_hooks(
          view.getUint32(1, true),
          view.getUint16(6, true),
          view.getUint16(9, true),
          view.getUint16(13, true),
          view.getUint32(16, true)
        )
        this.solveWasm();
        break;
        case 0x40:
          this.pingInterval = setInterval(()=> {
            this.sendUint8(254);
          }, 2000)
          break;
    }
  }

  solveWasm() {
    let xorkey = this.Buffer(15),
      decrypted = this.wasm.rotateKeys(),
      index12 = [126, 57, 139, 92, 347, 36],
      cirlzkey = (Math.random() * 0x10000000 - 1) >>> 0;

    xorkey.setUint8(0, 247);
    xorkey.setUint32(1, decrypted, true);
    xorkey.setUint16(6, index12[0], true);
    xorkey.setUint32(8, cirlzkey, true);
    xorkey.setUint8(13, 0xFF, true);
    this.send(xorkey);

    this.spawn();
    this.spawnTimeout = setInterval(()=> {
      this.spawn.bind(this);
    }, 5000)
  }

  onOpen() {
    const init = this.Buffer(5);
    init.setUint8(0, 119, true);
    init.setUint16(1, 75, true);
    init.setUint16(3, 18, true);
    this.send(init);
  }

  onClose() {
    clearInterval(this.pingInterval);

    clearTimeout(this.spawnTimeout);

    if (this.serverUrl) setTimeout(() => {
      this.connect(this.serverUrl);
    }, 1100);
  }

  onError() { }

  disconnect() {
    if (this.ws) {
      this.ws.terminate();
      delete this.ws;
    }

    clearInterval(this.pingInterval);

    clearTimeout(this.spawnTimeout);
  }

  spawn() {
    var writer = new Writer(true);
    writer.setUint8(0x00);
    writer.setStringUTF8(this.name);
    this.send(writer);
  }

  split() {
    this.sendUint8(17);
  }

  eject() {
    this.sendUint8(21);
  }

  sendUint8(offset) {
    let onebyte = this.Buffer(1);
    onebyte.setUint8(0, offset)
    this.send(onebyte);
  }

  sendMove(x, y) {
    const moveBuffer = this.Buffer(21);
    moveBuffer.setUint8(0, 16);
    moveBuffer.setFloat64(1, x, true);
    moveBuffer.setFloat64(9, y, true);
    moveBuffer.setUint32(17, 0, true);
    this.send(moveBuffer)
  }

  sendChat(message) {
  }

  get wsOPEN() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  Buffer(buf) {
    return new DataView(new ArrayBuffer(!buf ? 1 : buf))
  }

  send(data) {
    if (this.wsOPEN) {
      this.ws.send(data.buffer);
    }
  }
};
