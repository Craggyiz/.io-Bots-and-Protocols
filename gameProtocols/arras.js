import crypto from "node:crypto";
import WebSocket from "ws";

// Fully connects, you can make bots if you desire.

// This is a simple mockup node.js client for the Arras.io handshake protocol.
// Works as normal when sent with non-stubbed packets.
// But, will disconnect if the server does not receive a valid "self" and "fingerprint" packet after the handshake, or if you do not send the ping packet after handshake (not included).

// Node crypto only, unless you bundle for browser with polyfill.

// Handshake:
//   1. Send 12-byte open packet: [00 01 00 01] + first-64-bits-of-`b` (LE).
//   2. Receive 96-byte challenge: M(32) + R(32) + S(32).
//        M = server ephemeral X25519 pubkey; R+S = Ed25519 signature over M.
//   3. Send our 32-byte response = X25519(ephemeralScalar, base).
//   4. key = X25519(ephemeralScalar, M)  — used directly as the ChaCha key.
//   5. Each packet: ChaCha20(key, nonce, plaintext) + SHA256(ct+key+nonce)[0:6];
//      nonce = 8-byte LE per-message counter (separate in/out, both start 0).

const P25519 = (1n << 255n) - 19n;
const modP = a => { a %= P25519; return a >= 0n ? a : a + P25519; };
const powP = (b, e) => { b = modP(b); let r = 1n; while (e > 0n) { if (e & 1n) r = modP(r * b); b = modP(b * b); e >>= 1n; } return r; };
const invP = a => powP(a, P25519 - 2n);
const rotl32 = (x, n) => ((x << n) | (x >>> (32 - n))) >>> 0;
const u32le = (b, o) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;

const X25519_BASE = (() => { const u = new Uint8Array(32); u[0] = 9; return u; })();

let nCrypto = null;
try { nCrypto = require("crypto"); } catch { /* browser */ }

function chachaBlock(key32, counter, nonce12) {
    const base = [0x61707865, 0x3320646e, 0x79622d32, 0x6b206574];
    for (let i = 0; i < 8; i++) base.push(u32le(key32, i * 4));
    base.push(counter >>> 0, u32le(nonce12, 0), u32le(nonce12, 4), u32le(nonce12, 8));
    const x = base.slice();
    const qr = (a, b, c, d) => {
        x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl32(x[d] ^ x[a], 16);
        x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl32(x[b] ^ x[c], 12);
        x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl32(x[d] ^ x[a], 8);
        x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl32(x[b] ^ x[c], 7);
    };
    for (let i = 0; i < 10; i++) { qr(0, 4, 8, 12); qr(1, 5, 9, 13); qr(2, 6, 10, 14); qr(3, 7, 11, 15); qr(0, 5, 10, 15); qr(1, 6, 11, 12); qr(2, 7, 8, 13); qr(3, 4, 9, 14); }
    const out = new Uint8Array(64), dv = new DataView(out.buffer);
    for (let i = 0; i < 16; i++) dv.setUint32(i * 4, (x[i] + base[i]) >>> 0, true);
    return out;
}

function sha256Pure(msg) {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    let h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const l = msg.length, bitLen = l * 8;
    const buf = new Uint8Array((((l + 8) >> 6) + 1) << 6); buf.set(msg); buf[l] = 0x80;
    const dv = new DataView(buf.buffer);
    dv.setUint32(buf.length - 4, bitLen >>> 0, false);
    dv.setUint32(buf.length - 8, Math.floor(bitLen / 0x100000000), false);
    const w = new Uint32Array(64), rr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let off = 0; off < buf.length; off += 64) {
        for (let i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4, false);
        for (let i = 16; i < 64; i++) { const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3); const s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10); w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0; }
        let [a, b, c, d, e, f, g, hh] = h;
        for (let i = 0; i < 64; i++) { const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25); const ch = (e & f) ^ (~e & g); const t1 = (hh + S1 + ch + K[i] + w[i]) >>> 0; const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22); const maj = (a & b) ^ (a & c) ^ (b & c); const t2 = (S0 + maj) >>> 0; hh = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0; }
        h = h.map((v, i) => (v + [a, b, c, d, e, f, g, hh][i]) >>> 0);
    }
    const out = new Uint8Array(32), odv = new DataView(out.buffer);
    h.forEach((v, i) => odv.setUint32(i * 4, v >>> 0, false));
    return out;
}

class Crypto {
    x25519(scalarBytes, uBytes) {
        const a24 = 121665n;
        const k = (() => { const s = Uint8Array.from(scalarBytes); s[0] &= 248; s[31] &= 127; s[31] |= 64; let v = 0n; for (let i = 31; i >= 0; i--) v = (v << 8n) | BigInt(s[i]); return v; })();
        const u = (() => { const b = Uint8Array.from(uBytes); b[31] &= 127; let v = 0n; for (let i = 31; i >= 0; i--) v = (v << 8n) | BigInt(b[i]); return modP(v); })();
        let x1 = u, x2 = 1n, z2 = 0n, x3 = u, z3 = 1n, swap = 0n;
        for (let t = 254; t >= 0; t--) {
            const kt = (k >> BigInt(t)) & 1n;
            swap ^= kt;
            if (swap === 1n) { [x2, x3] = [x3, x2];[z2, z3] = [z3, z2]; }
            swap = kt;
            const A = modP(x2 + z2), AA = modP(A * A), B = modP(x2 - z2), BB = modP(B * B), E = modP(AA - BB);
            const C = modP(x3 + z3), D = modP(x3 - z3), DA = modP(D * A), CB = modP(C * B);
            x3 = modP((DA + CB) * (DA + CB)); z3 = modP(x1 * modP((DA - CB) * (DA - CB)));
            x2 = modP(AA * BB); z2 = modP(E * (AA + modP(a24 * E)));
        }
        if (swap === 1n) { [x2, x3] = [x3, x2];[z2, z3] = [z3, z2]; }
        const out = new Uint8Array(32); let r = modP(x2 * invP(z2));
        for (let i = 0; i < 32; i++) { out[i] = Number(r & 0xffn); r >>= 8n; }
        return out;
    }

    x25519Base(scalarBytes) { return this.x25519(scalarBytes, X25519_BASE); }

    chacha20(key32, nonce12, input) {
        const out = new Uint8Array(input.length);
        for (let off = 0, blk = 0; off < input.length; off += 64, blk++) {
            const ks = chachaBlock(key32, blk, nonce12);
            for (let i = 0; i < 64 && off + i < input.length; i++) out[off + i] = input[off + i] ^ ks[i];
        }
        return out;
    }

    sha256(...parts) {
        if (nCrypto) { const h = nCrypto.createHash("sha256"); for (const p of parts) h.update(Buffer.from(p)); return new Uint8Array(h.digest()); }
        let n = 0; for (const p of parts) n += p.length; const buf = new Uint8Array(n); let o = 0; for (const p of parts) { buf.set(p, o); o += p.length; } return sha256Pure(buf);
    }

    randomBytes(n) {
        if (nCrypto) return new Uint8Array(nCrypto.randomBytes(n));
        if (typeof crypto !== "undefined" && crypto.getRandomValues) return crypto.getRandomValues(new Uint8Array(n));
        throw new Error("No secure RNG available");
    }

    verifyEd25519(message, signature, publicKey) {
        if (!(nCrypto && nCrypto.verify)) return true;
        try {
            const spki = concatBytes([fromHex("302a300506032b6570032100"), publicKey]);
            const key = nCrypto.createPublicKey({ key: Buffer.from(spki), format: "der", type: "spki" });
            return nCrypto.verify(null, Buffer.from(message), key, Buffer.from(signature));
        } catch { return true; }
    }
}

function concatBytes(list) { let n = 0; for (const b of list) n += b.length; const out = new Uint8Array(n); let o = 0; for (const b of list) { out.set(b, o); o += b.length; } return out; }
function toBytes(v) {
    if (v instanceof Uint8Array) return v;
    if (v instanceof ArrayBuffer) return new Uint8Array(v);
    if (ArrayBuffer.isView(v)) return new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
    if (typeof v === "string") return new TextEncoder().encode(v);
    throw new TypeError("expected bytes or string");
}
function fromHex(h) { const o = new Uint8Array(h.length / 2); for (let i = 0; i < o.length; i++) o[i] = parseInt(h.slice(i * 2, i * 2 + 2), 16); return o; }

function encodeCommand(commandChar, fields) {
    const parts = [new Uint8Array([commandChar.charCodeAt(0)])];
    for (const f of (fields || [])) {
        if (typeof f === "string") {
            const b = new TextEncoder().encode(f);
            if (b.length <= 15) parts.push(new Uint8Array([0xc0 | b.length]), b);
            else parts.push(new Uint8Array([0xfe, b.length & 0xff, (b.length >> 8) & 0xff]), b);
        } else if (typeof f === "number") parts.push(new Uint8Array([f & 0xff]));
        else if (f && f.raw) parts.push(toBytes(f.raw));
        else if (f instanceof Uint8Array) parts.push(f);
        else throw new TypeError("unsupported command field");
    }
    return concatBytes(parts);
}

class Fingerprint {
    static CAPTURED = {
        // Hardcoded values generated in case canvas or unicode cannot be generated normally.
        ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36",
        hc: 24,
        rtc: "good", wt: true, sw: true, gpu: true, credentialless: true,
        renderer: "WebKit WebGL\nWebKit\nANGLE (NVIDIA, NVIDIA GeForce RTX 5090 (0x00002B85) Direct3D11 vs_5_0 ps_5_0, D3D11)\nGoogle Inc. (AMD)",
        canvas: "v0:wP4jk0qKgbokGbFmMdPWwurUW+6kNPmMMCfOWbjN4/M=",
        unicode: "v0:UmVElDEuBHKmqHEiZPEkdMU6Gfj2grq241pseekLrPQ=",
        innerWidth: 1280, innerHeight: 720
    };

    report(canvasEl) {
        const g = (typeof window !== "undefined") ? window : globalThis;
        const canvas = canvasEl || (typeof document !== "undefined" ? document.createElement("canvas") : { addEventListener() { } });
        const lines = [
            ["window.addEventListener", g.addEventListener],
            ["canvas.addEventListener", canvas.addEventListener],
            ["WebAssembly.instantiate", typeof WebAssembly !== "undefined" ? WebAssembly.instantiate : undefined],
            ["WebAssembly.instantiateStreaming", typeof WebAssembly !== "undefined" ? WebAssembly.instantiateStreaming : undefined],
            ["requestAnimationFrame", g.requestAnimationFrame],
            ["Function", g.Function || Function]
        ].map(([label, fn]) => `${label} = ${fn ? Function.prototype.toString.call(fn) : "undefined"}`);
        lines.push(`stack = ${new Error().stack}`);
        return lines.join("\n");
    }

    wasmFeatures() {
        return ["base", "bigInt", "bulkMemory", "exceptions", "exceptionsFinal", "extendedConst", "gc", "jsStringBuiltins", "jspi", "memory64", "multiMemory", "multiValue", "mutableGlobals", "referenceTypes", "relaxedSimd", "saturatedFloatToInt", "signExtensions", "simd", "streaming", "tailCall", "threads", "typedFunctionReferences"];
    }

    renderer() {
        if (typeof document === "undefined") return "";
        try {
            const gl = document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl");
            if (!gl) return "";
            const ext = gl.getExtension("WEBGL_debug_renderer_info");
            const parts = ["WebKit WebGL", "WebKit",
                ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
                ext ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR)];
            return parts.join("\n");
        } catch { return ""; }
    }

    collect(overrides = {}) {
        const g = (typeof window !== "undefined") ? window : {};
        const nav = (typeof navigator !== "undefined") ? navigator : {};
        const inBrowser = typeof window !== "undefined";
        const has = (o, k) => { try { return !!o[k]; } catch { return false; } };
        const C = Fingerprint.CAPTURED;
        const pick = (ovKey, live, cap) => overrides[ovKey] ?? (inBrowser ? live() : cap);
        const ua = overrides.ua ?? (inBrowser ? (nav.userAgent || "") : C.ua);
        return {
            adblock: overrides.adblock ?? (inBrowser ? !g.arrasAdDone : false),
            mobile: overrides.mobile ?? /Mobi|Android|iPhone|iPad/i.test(ua),
            storage: overrides.storage ?? {},
            overseer: {
                features: {
                    wasm: overrides.wasm || this.wasmFeatures(),
                    rtc: pick("rtc", () => has(g, "RTCPeerConnection") ? "good" : "none", C.rtc),
                    wt: pick("wt", () => has(g, "WebTransport"), C.wt),
                    sw: pick("sw", () => has(nav, "serviceWorker"), C.sw),
                    gpu: pick("gpu", () => has(nav, "gpu"), C.gpu),
                    credentialless: pick("credentialless", () => typeof g.credentialless === "boolean", C.credentialless),
                    ua,
                    hc: pick("hc", () => nav.hardwareConcurrency || -1, C.hc),
                    renderer: overrides.renderer ?? (this.renderer() || C.renderer),
                    webgl: overrides.webgl ?? "good",
                    "experimental-webgl": overrides["experimental-webgl"] ?? "good",
                    webgl2: overrides.webgl2 ?? "good"
                },
                window: {
                    innerWidth: pick("innerWidth", () => g.innerWidth || 1280, C.innerWidth),
                    innerHeight: pick("innerHeight", () => g.innerHeight || 720, C.innerHeight)
                },
                fingerprints: {
                    //   canvas  = "v0:" + base64(SHA256(<96x32 canvas>.toDataURL()
                    //             PNG bytes))
                    //   unicode = "v0:" + base64(SHA256(text)) text is
                    //             a font-glyph metrics table: 6 fonts x 43 probe
                    //             glyphs of "<measureText advanceWidth> <fontMetric>"
                    //             lines.
                    canvas: overrides.canvas ?? C.canvas,
                    unicode: overrides.unicode ?? C.unicode
                },
                report: overrides.report ?? this.report()
            }
        };
    }
}

class Connection {
    constructor(socketUrl) {
        this.socketUrl = socketUrl;

        this.state = "idle";

        this.fingerprint = new Fingerprint();
        this.crypto = new Crypto();
        this.verifySignature = true;
        this.serverIdentityKeyHex = '98dcbf48d0d78d81d339a2d80bbe85c5d32d7a79eb7223ee9b7c4a54e101d57c';

        this.key = null;
        this.ephemeralScalar = null;
        this.responsePublicKey = null;
        this.challenge = null;
        this.outboundCounter = 0;
        this.inboundCounter = 0;
        this.handlers = {};

        this.connect();
    }

    connect() {
        this.state = "opening";

        this.socket = new WebSocket(this.socketUrl, ['arras.io#v1.4+sls+et0', 'arras.io'], {
            headers: {
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "origin": "https://arras.io",
                "pragma": "no-cache",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36"
            },
            rejectUnauthorized: false
        });
        this.socket.binaryType = 'arraybuffer';
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onerror.bind(this);
    }

    onOpen() {
        this.state = "awaiting-challenge";

        this.sendRaw(this.buildOpenPacket());
    }

    // 12-byte first packet: [00 01 00 01] + LE64(first 64 bits of `b`).
    buildOpenPacket() {
        const b = new URL(this.socketUrl).searchParams.get("b");
        if (!b || !/^[0-9a-fA-F]{16,}$/.test(b)) throw new Error("URL has no valid 64-bit `b` token");
        const packet = new Uint8Array(12);
        packet.set([0x00, 0x01, 0x00, 0x01], 0);
        let token = BigInt("0x" + b.slice(0, 16));
        for (let i = 0; i < 8; i++) { packet[4 + i] = Number(token & 0xffn); token >>= 8n; }
        return packet;
    }

    onMessage(message) {
        this.handleMessage(message);
    }

    handleMessage(event) {
        const bytes = toBytes(event && event.data !== undefined ? event.data : event);
        try {
            if (this.state === "awaiting-challenge" && bytes.length === 96) {
                this.completeHandshake(bytes);
                return;
            }
            if (this.state === "ready") {
                const plaintext = this.decrypt(bytes);
                const byte = plaintext[0];

                const char = (byte >= 0x20 && byte < 0x7f) ? String.fromCharCode(byte) : null;

                console.log("Decrypted packet:", plaintext);

                switch (char) {
                    case 'u':
                        // Stub.
                        break;
                    case 'J':
                        // Stub.
                        break;
                    case 'K':
                        // Stub.
                        break;
                    case 'P':
                        // Stub.
                        break;
                    default:
                        console.log("Received packet with command:", char);
                        break;
                }

                // Not doing the rest of the protocol cases, don't care for them besides handshake.
                return;
            }
        } catch (err) {
            this.state = "error";
            this.close();
        }
    }

    completeHandshake(challenge) {
        this.challenge = challenge;

        const M = challenge.subarray(0, 32);

        if (this.verifySignature) {
            const ok = this.crypto.verifyEd25519(challenge.subarray(0, 32), challenge.subarray(32, 96), fromHex(this.serverIdentityKeyHex));
            if (!ok) {
                new Error("challenge signature verification failed");
                this.close();
                return;
            }
        }

        this.ephemeralScalar = this.crypto.randomBytes(32);
        this.ephemeralScalar[0] &= 248; this.ephemeralScalar[31] &= 127; this.ephemeralScalar[31] |= 64;
        this.responsePublicKey = this.crypto.x25519Base(this.ephemeralScalar);

        this.key = this.crypto.x25519(this.ephemeralScalar, M);
        this.sendRaw(this.responsePublicKey);

        this.initProtectionState();

        // Change fingerprint to your liking, it is currently hardcoded.
        this.sendPacket(this.buildSelfPacket());
        this.sendPacket(this.buildFingerprintPacket());
    }

    // The "self" packet: talk('k', '', '', '') = bytes 6b c0 c0 c0.
    // Command 'k' + three empty-string fields (clientkey/name/party, all blank
    // for a default connection).
    buildSelfPacket(fields) {
        const packet = encodeCommand("k", fields || ["", "", ""]);
        return packet;
    }

    // The anti-tamper / fingerprint packet: [0x54,0xfe,len_LE16] + JSON.
    buildFingerprintPacket(fingerprint, overrides) {
        const value = fingerprint != null ? fingerprint : this.fingerprint.collect(overrides || {});
        const jsonStr = typeof value === "string" ? value : JSON.stringify(value);
        const body = new TextEncoder().encode(jsonStr);
        const header = new Uint8Array([0x54, 0xfe, body.length & 0xff, (body.length >> 8) & 0xff]);
        const packet = concatBytes([header, body]);
        return packet;
    }

    // 'p' — ping / heartbeat. Just the bare command byte. The real client sends
    // this on a steady interval; call it yourself or on a timer.
    sendPing() {
        this.sendPacket(new Uint8Array([0x70]));
    }

    // 's' — spawn. Fields: [name, party/room, flag]. name/party are strings
    // (empty = anonymous / public), flag is a small int (observed 1).
    sendSpawn(name = "", party = "", flag = 1) {
        this.sendPacket(encodeCommand("s", [name, party, flag]));
    }

    // 'U' — upgrade a stat by its index (e.g. 1,3,5…).
    sendUpgrade(statIndex) {
        this.sendPacket(encodeCommand("U", [statIndex & 0xff]));
    }

    // 't' — a boolean toggle (autofire/autospin-style): 74 00 / 74 01.
    sendToggle(on) {
        this.sendPacket(encodeCommand("t", [on ? 1 : 0]));
    }

    initProtectionState() {
        this.outboundCounter = 0;
        this.inboundCounter = 0;
        this.state = "ready";
    }

    close() {
        if (this.socket) {
            this.socket.close();
        }
    }

    onClose() {
        this.state = "closed";

        console.log("WebSocket connection closed");
    }

    onerror(error) {
        this.state = "error";

        console.error("WebSocket error:", error);
    }

    counterNonce(counter, inbound = false) {
        const n = new Uint8Array(8);
        let v = BigInt(counter);
        for (let i = 0; i < 8; i++) {
            n[i] = Number(v & 0xffn); v >>= 8n;
        }
        if (inbound) n[7] |= 0x80;
        return n;
    }

    chachaNonce(nonce8) {
        const n = new Uint8Array(12);
        n.set(nonce8, 4);
        return n;
    }

    decrypt(wire) {
        if (wire.length < 6) throw new Error("truncated frame");
        const ciphertext = wire.subarray(0, wire.length - 6);
        const receivedTag = wire.subarray(wire.length - 6);
        // Inbound (server->client) sets bit 63 of the nonce as the direction flag.
        const nonce8 = this.counterNonce(this.inboundCounter, true);
        const expected = this.crypto.sha256(ciphertext, this.key, nonce8).subarray(0, 6);
        let diff = 0; for (let i = 0; i < 6; i++) diff |= expected[i] ^ receivedTag[i];
        if (diff !== 0) throw new Error("bad inbound tag (key or nonce desync)");
        const plaintext = this.crypto.chacha20(this.key, this.chachaNonce(nonce8), ciphertext);
        this.inboundCounter++;
        return plaintext;
    }

    sendPacket(data) {
        if (this.state !== "ready") throw new Error("Socket not ready");
        const plaintext = toBytes(data);
        const nonce8 = this.counterNonce(this.outboundCounter);
        const ciphertext = this.crypto.chacha20(this.key, this.chachaNonce(nonce8), plaintext);
        const tag = this.crypto.sha256(ciphertext, this.key, nonce8).subarray(0, 6);
        this.outboundCounter++;
        this.sendRaw(concatBytes([ciphertext, tag]));
    }

    sendRaw(bytes) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(bytes);
            return true;
        } return false;
    }
}

const connection = new Connection('wss://qrp6ujau11f36bnm-c.uvwx.xyz:8443/5004/?a=3&b=2c170ae5c3f70dd0&t=1782809002');
