import nCrypto from "node:crypto";
import WebSocket from "ws";

// v2.4.1 Runtime deobfuscator done in 5.6s

// Cool easter eggs (anti-tamper anti-debug for VM)
// return SZ.toString().search("(((.+)+)+)+$").toString().constructor(SZ).search("(((.+)+)+)+$");
// if (!("KgFfB2" in __p_oUbs_dummyFunction) && !G) { ... base64 self-decode ... }
// VM has its own RC4-style string-array rotator plus Object.preventExtensions(kv) and Object.freeze(...)
// Did not observe any debugger traps in limited debugging, so careful...

// Fully connects, you can make bots if you desire.
// Node crypto only, unless you bundle for browser with polyfill.

const TURNSTILE_SITEKEY = "0x4AAAAAAA3uTRWohU0f4ROb";

function concatBytes(list) {
    let n = 0;
    for (const b of list) n += b.length;
    const out = new Uint8Array(n);
    let o = 0;
    for (const b of list) {
        out.set(b, o);
        o += b.length;
    }
    return out;
}

function toBytes(v) {
    if (v instanceof Uint8Array) return v;
    if (v instanceof ArrayBuffer) return new Uint8Array(v);
    if (ArrayBuffer.isView(v))
        return new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
    if (typeof v === "string") return new TextEncoder().encode(v);
    throw new TypeError("expected bytes or string");
}

function fromHex(h) {
    const o = new Uint8Array(h.length / 2);
    for (let i = 0; i < o.length; i++)
        o[i] = parseInt(h.slice(i * 2, i * 2 + 2), 16);
    return o;
}

function toHex(b) {
    return Array.from(b)
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("");
}

function u32leBytes(v) {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setUint32(0, v >>> 0, true);
    return b;
}

function u16leBytes(v) {
    const b = new Uint8Array(2);
    new DataView(b.buffer).setUint16(0, v & 0xffff, true);
    return b;
}

function utf16le(str) {
    const out = new Uint8Array(str.length * 2);
    const dv = new DataView(out.buffer);
    for (let i = 0; i < str.length; i++)
        dv.setUint16(i * 2, str.charCodeAt(i), true);
    return out;
}

function readUtf16le(buf) {
    let s = "";
    for (let i = 0; i + 1 < buf.length; i += 2) {
        const cp = buf[i] | (buf[i + 1] << 8);
        if (cp === 0) break;
        s += String.fromCharCode(cp);
    }
    return s;
}

function sha256Pure(msg) {
    const K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
        0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
        0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
        0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ];
    let h = [
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
    ];
    const l = msg.length,
        bitLen = l * 8;
    const buf = new Uint8Array((((l + 8) >> 6) + 1) << 6);
    buf.set(msg);
    buf[l] = 0x80;
    const dv = new DataView(buf.buffer);
    dv.setUint32(buf.length - 4, bitLen >>> 0, false);
    dv.setUint32(buf.length - 8, Math.floor(bitLen / 0x100000000), false);
    const w = new Uint32Array(64),
        rr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let off = 0; off < buf.length; off += 64) {
        for (let i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4, false);
        for (let i = 16; i < 64; i++) {
            const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
            const s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
            w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
        }
        let [a, b, c, d, e, f, g, hh] = h;
        for (let i = 0; i < 64; i++) {
            const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
            const ch = (e & f) ^ (~e & g);
            const t1 = (hh + S1 + ch + K[i] + w[i]) >>> 0;
            const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const t2 = (S0 + maj) >>> 0;
            hh = g;
            g = f;
            f = e;
            e = (d + t1) >>> 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) >>> 0;
        }
        h = h.map((v, i) => (v + [a, b, c, d, e, f, g, hh][i]) >>> 0);
    }
    const out = new Uint8Array(32),
        odv = new DataView(out.buffer);
    h.forEach((v, i) => odv.setUint32(i * 4, v >>> 0, false));
    return out;
}

function hmacSha256Pure(key, msg) {
    let k = key.length > 64 ? sha256Pure(key) : key;
    const pad = new Uint8Array(64);
    pad.set(k);
    const ipad = new Uint8Array(64),
        opad = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
        ipad[i] = pad[i] ^ 0x36;
        opad[i] = pad[i] ^ 0x5c;
    }
    const inner = sha256Pure(concatBytes([ipad, msg]));
    return sha256Pure(concatBytes([opad, inner]));
}

class Crypto {
    sha256(...parts) {
        if (nCrypto) {
            const h = nCrypto.createHash("sha256");
            for (const p of parts) h.update(Buffer.from(p));
            return new Uint8Array(h.digest());
        }
        return sha256Pure(concatBytes(parts));
    }

    hmacSha256(key, ...parts) {
        if (nCrypto) {
            const h = nCrypto.createHmac("sha256", Buffer.from(key));
            for (const p of parts) h.update(Buffer.from(p));
            return new Uint8Array(h.digest());
        }
        return hmacSha256Pure(key, concatBytes(parts));
    }

    randomBytes(n) {
        if (nCrypto) return new Uint8Array(nCrypto.randomBytes(n));
        if (typeof crypto !== "undefined" && crypto.getRandomValues)
            return crypto.getRandomValues(new Uint8Array(n));
        throw new Error("No secure RNG available");
    }
}

class Fingerprint {
    visitorId(override) {
        if (override) return String(override).slice(0, 32).toLowerCase();
        return toHex(new Crypto().randomBytes(16));
    }

    bytes(visitorId) {
        const out = new Uint8Array(16);
        const s = String(visitorId || "");
        for (let i = 0; i < 16; i++) {
            const v = parseInt(s.substr(i * 2, 2), 16);
            out[i] = Number.isNaN(v) ? 0 : v;
        }
        return out;
    }
}

class Connection {
    constructor(socketUrl, options = {}) {
        this.socketUrl = socketUrl;
        this.nick = options.nick ?? "";

        this.state = "idle";

        this.fingerprint = new Fingerprint();
        this.crypto = new Crypto();

        this.token = this.newSessionToken();
        this.visitorId = this.fingerprint.visitorId(
            options.visitorId ?? options.fingerprint,
        );
        this.clientNonce = this.crypto.randomBytes(16);
        this.counter = this.deriveCounter(this.token);

        this.serverNonce = null;
        this.inKey = null;
        this.outKey = null;
        this.keyByte = null;

        this.pingTimer = null;
        this.handlers = {};

        this.opcodes = {
            nick: 0x03,
            serverHello: 0xab,
            clientHello: 0xbc,
            clientAuth: 0xbf,
            confirm: 0xa7,
            captcha: 0xa8,
        };

        this.outCanonical = [
            0x06, 0x05, 0x04, 0x07, 0x0b, 0x0c, 0x10, 0x02, 0x00, 0x0e, 0x0f,
        ];

        this.slots = {
            ping: 6,
            captcha: 9,
            captchaLate: 10,
        };

        this.inCanonical = {
            0x00: "pong",
            0x01: "probe",
            0xa3: "snapshot",
            0xa5: "leaderboard",
            0xa7: "confirm",
            0xab: "hello",
            0xae: "unknown145",
            0xaf: "unknown87",
        };

        this.entity = { 1: "collider", 4: "item", 5: "player" };

        this.proof = {
            keyHex:
                "58e6b595439bf5cf5b17ae9ffd5f06a2d28a04949a9d1ed9a0fa725822aa2749",
            label: "pl:foxy:proof:1",
        };

        this.connect();
    }

    newSessionToken() {
        const TOKEN_SPAN = 1980189;
        const TOKEN_MIN = 394795;
        return String(Math.floor(Math.random() * TOKEN_SPAN) + TOKEN_MIN);
    }

    deriveCounter(token) {
        return ((Number(token) % 1024000) % 132177) % 65536;
    }

    connect() {
        this.state = "opening";

        this.socket = new WebSocket(this.socketUrl, [this.token], {
            headers: {
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "origin": "https://powerline.io",
                "pragma": "no-cache",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
            },
            rejectUnauthorized: false,
        });
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onerror.bind(this);
    }

    onOpen() {
        console.log("WebSocket connection opened");

        this.state = "awaiting-hello";

        this.sendRaw(this.buildHelloPacket());
        if (this.nick) this.sendRaw(this.buildNickPacket(this.nick));
    }

    buildHelloPacket() {
        return concatBytes([
            new Uint8Array([this.opcodes.clientHello, 0x01, 0x01]),
            this.clientNonce,
        ]);
    }

    buildNickPacket(name) {
        return concatBytes([
            new Uint8Array([this.opcodes.nick]),
            utf16le(String(name)),
            new Uint8Array([0x00, 0x00]),
        ]);
    }

    onMessage(message) {
        this.handleMessage(message);
    }

    handleMessage(event) {
        const bytes = toBytes(
            event && event.data !== undefined ? event.data : event,
        );

        try {
            if (this.state === "awaiting-hello" && bytes[0] === this.opcodes.serverHello) {
                this.completeHandshake(bytes);
                return;
            }
            if (this.state === "awaiting-confirm") {
                if (bytes[0] === this.opcodes.captcha) {
                    this.turnstileChallenge(bytes, false);
                    return;
                }
                if (bytes[0] === this.opcodes.confirm) {
                    this.acceptSession(bytes);
                    return;
                }
                return;
            }
            if (this.state === "ready") {
                const canonical = bytes[0] ^ this.inKey;
                const name = this.inCanonical[canonical];

                switch (name) {
                    case "snapshot":
                        this.onSnapshot(bytes.subarray(1));
                        break;
                    case "leaderboard":
                        this.onLeaderboard(bytes.subarray(1));
                        break;
                    case "pong":
                        this.onPong(bytes);
                        break;
                    case "probe":
                        console.log("Probe received");
                        break;
                    default:
                        if (canonical === 54) this.turnstileChallenge(bytes, true);
                        break;
                }
                return;
            }
        } catch (err) {
            console.error("handleMessage failed:", err);
            this.state = "error";
            this.close();
        }
    }

    completeHandshake(hello) {
        this.serverNonce = hello.subarray(3, 19);

        this.state = "awaiting-confirm";
        this.sendRaw(this.buildAuthPacket());
    }

    authPrefix() {
        return concatBytes([
            new Uint8Array([
                this.opcodes.clientAuth,
                0x80,
                0x00,
                0x50,
                0x00,
                0x00,
                (this.counter >> 8) & 0xff,
                this.counter & 0xff,
                0x5f,
                0x88,
                0x01,
            ]),
            this.fingerprint.bytes(this.visitorId),
            new Uint8Array([0x01]),
        ]);
    }

    authTag(prefix) {
        const token = toBytes(String(this.token));
        return this.crypto
            .hmacSha256(
                fromHex(this.proof.keyHex),
                toBytes(this.proof.label),
                this.serverNonce,
                this.clientNonce,
                u32leBytes(prefix.length),
                prefix,
                u16leBytes(token.length),
                token,
            )
            .subarray(0, 16);
    }

    buildAuthPacket() {
        const prefix = this.authPrefix();
        return concatBytes([
            prefix,
            new Uint8Array([0xd3, 0x71, 0x01, 0x01]),
            this.clientNonce,
            this.authTag(prefix),
        ]);
    }

    acceptSession(confirm) {
        this.keyByte = confirm[13];
        this.outKey = (this.keyByte + 0x5f) & 0xff;
        this.inKey = (2 * this.keyByte + 0x5f) & 0xff;

        this.state = "ready";
        this.startPing();
    }

    turnstileChallenge(bytes, masked) {
        console.log("Turnstile challenge... Solve with your own solver...");

        if (typeof this.handlers.turnstile !== "function") {
            this.state = "error";
            this.close();
            return;
        }

        Promise.resolve(this.handlers.turnstile(TURNSTILE_SITEKEY)).then(
            (token) => {
                const slot = masked ? this.slots.captchaLate : this.slots.captcha;
                const op = masked
                    ? this.outCanonical[slot] ^ this.outKey
                    : this.outCanonical[slot];
                this.sendRaw(
                    concatBytes([
                        new Uint8Array([op]),
                        toBytes(String(token)),
                        new Uint8Array([0x00]),
                    ]),
                );
            },
        );
    }

    onSnapshot(body) {
        const entities = [];
        for (let o = 0; o + 17 <= body.length; o += 17) {
            const dv = new DataView(body.buffer, body.byteOffset + o, 17);
            entities.push({
                id: dv.getUint16(0, true),
                flags: body[o + 2],
                type: this.entity[body[o + 3]] || body[o + 3],
                x: dv.getFloat32(7, true),
                y: dv.getFloat32(11, true),
                tail: dv.getUint16(15, true),
            });
        }
        if (this.handlers.snapshot) this.handlers.snapshot(entities);
    }

    onLeaderboard(body) {
        const names = [];
        let cur = [];
        for (let i = 0; i + 1 < body.length; i += 2) {
            const cp = body[i] | (body[i + 1] << 8);
            if (cp >= 32 && cp < 0x3000) cur.push(String.fromCharCode(cp));
            else {
                if (cur.length > 1) names.push(cur.join(""));
                cur = [];
            }
        }
        if (this.handlers.leaderboard) this.handlers.leaderboard(names);
    }

    onPong(bytes) {
        const rtt = bytes[1] | (bytes[2] << 8);
        if (this.handlers.pong) this.handlers.pong(rtt);
    }

    sendPing() {
        this.sendPacket(this.slots.ping);
    }

    sendNick(name) {
        this.sendRaw(this.buildNickPacket(name));
    }

    startPing(intervalMs = 1000) {
        this.stopPing();
        this.pingTimer = setInterval(() => {
            if (this.state === "ready") this.sendPing();
        }, intervalMs);
    }

    stopPing() {
        if (this.pingTimer) clearInterval(this.pingTimer);
        this.pingTimer = null;
    }

    on(name, fn) {
        this.handlers[name] = fn;
        return this;
    }

    close() {
        this.stopPing();
        if (this.socket) {
            this.socket.close();
        }
    }

    onClose() {
        this.state = "closed";
        this.stopPing();

        console.log("WebSocket connection closed");
    }

    onerror(error) {
        this.state = "error";

        console.error("WebSocket error:", error);
    }

    sendPacket(slot, payload) {
        if (this.state !== "ready") throw new Error("Socket not ready");
        const op = this.outCanonical[slot] ^ this.outKey;
        const head = new Uint8Array([op]);
        this.sendRaw(payload ? concatBytes([head, toBytes(payload)]) : head);
    }

    sendRaw(bytes) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(bytes);
            return true;
        }
        return false;
    }
}

const connection = new Connection("wss://172-105-125-88.powerline.io:9080/", {
    nick: "casper the friendly ghost ong ong fr fr",
    fingerprint: "4a8657fc89fe47687bb59281efd58e15",
});

connection
    .on("snapshot", (e) => console.log("snapshot:", e.length, "entities"))
    .on("leaderboard", (n) => console.log("leaderboard:", n.slice(0, 5)))
    .on("pong", (rtt) => console.log("pong:", rtt, "ms"));
