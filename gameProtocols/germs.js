import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';
import { _solveCaptchaInvisible } from "../utils/recaptcha.js";

class nn {
    constructor(no) {
        if (!no || no <= 0) {
            no = Buffer.poolSize / 2;
        }
        this._length = 0;
        this._buffer = Buffer.alloc(no);
    }
    writeUInt8(np) {
        this.checkAlloc(1);
        this._buffer[this._length++] = np;
    }
    writeInt8(nq) {
        this.checkAlloc(1);
        this._buffer[this._length++] = nq;
    }
    writeUInt16(nr) {
        this.checkAlloc(2);
        this._buffer[this._length++] = nr;
        this._buffer[this._length++] = nr >> 8;
    }
    writeInt16(ns) {
        this.checkAlloc(2);
        this._buffer[this._length++] = ns;
        this._buffer[this._length++] = ns >> 8;
    }
    writeUInt32(nt) {
        this.checkAlloc(4);
        this._buffer[this._length++] = nt;
        this._buffer[this._length++] = nt >> 8;
        this._buffer[this._length++] = nt >> 16;
        this._buffer[this._length++] = nt >> 24;
    }
    writeInt32(nu) {
        this.checkAlloc(4);
        this._buffer[this._length++] = nu;
        this._buffer[this._length++] = nu >> 8;
        this._buffer[this._length++] = nu >> 16;
        this._buffer[this._length++] = nu >> 24;
    }
    writeFloat(nv) {
        this.checkAlloc(4);
        this._buffer.writeFloatLE(nv, this._length);
        this._length += 4;
    }
    writeDouble(nw) {
        this.checkAlloc(8);
        this._buffer.writeDoubleLE(nw, this._length);
        this._length += 8;
    }
    writeBytes(nz) {
        this.checkAlloc(nz.length);
        nz.copy(this._buffer, this._length, 0, nz.length);
        this._length += nz.length;
    }
    writeStringUtf8(nA) {
        var nB = Buffer.byteLength(nA, 'utf8');
        this.checkAlloc(nB);
        this._buffer.write(nA, this._length, 'utf8');
        this._length += nB;
    }
    writeStringUnicode(nC) {
        var nD = Buffer.byteLength(nC, 'ucs2');
        this.checkAlloc(nD);
        this._buffer.write(nC, this._length, 'ucs2');
        this._length += nD;
    }
    writeStringZeroUtf8(nE) {
        this.writeStringUtf8(nE);
        this.writeUInt8(0);
    }
    writeStringZeroUnicode(nF) {
        this.writeStringUnicode(nF);
        this.writeUInt16(0);
    }
    getLength() {
        return this._length;
    }
    reset() {
        this._length = 0;
    }
    toBuffer() {
        return Buffer.concat([this._buffer.slice(0, this._length)]);
    }
    checkAlloc(nG) {
        let nH = this._length + nG;
        if (this._buffer.length >= nH) return;
        let nI = Math.max(Buffer.poolSize / 2, 1024);
        let nJ = nH / nI >>> 0;
        if (nH % nI > 0) {
            nJ += 1;
        }
        let nK = Buffer.alloc(nJ * nI);
        this._buffer.copy(nK, 0, 0, this._length);
        this._buffer = nK;
    }
}

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, 'g-h', {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://germs.io')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = this.id + 'takeseffort'//grabConfig().botOptions.getName() + (this.useID ? ' | ' + this.id : '');
    }

    Login(account) {
        const writer = new nn();
        writer.writeUInt8(255);
        writer.writeStringZeroUnicode(account);
        return writer.toBuffer();
    }

    Protocol(nP) {
        const writer = new nn();
        writer.writeUInt8(123);
        writer.writeUInt8(6);
        writer.writeStringZeroUtf8(nP);
        return writer.toBuffer();
    }

    Ping() {
        const writer = new nn();
        writer.writeUInt8(100);
        return writer.toBuffer();
    }

    Name(nX) {
        const writer = new nn();
        writer.writeUInt8(0);
        writer.writeStringZeroUtf8(nX);
        return writer.toBuffer();
    }

    onMessage(message) { }

    async onOpen() {
        this.send(this.Login(''));

        const oj = ["6", "9"];
        const ok = ["4", "2", "0"];
        const ol = (om, oo, op) => {
            return oj[om] + ok[oo] + oj[op];
        }

        var finnaNut = await _solveCaptchaInvisible('6LfRVZ8UAAAAAEgD_Zaf5L8XItSFUqsFjOXfVBlT', '', 'https://germs.io', this.agent.proxyUri);

        this.token = finnaNut.token;
        this.cfToken = finnaNut.cf_token;

        if (!this.token || !this.cfToken) return this.onClose();

        this.send(this.Protocol(ol(0, 2, 1) + 'TbU2&9b$4eRq' + this.token + "TbU2&9b$4eRq" + this.cfToken));

        this.pingInterval = setInterval(() => {
            this.send(this.Ping());
        }, 1000);

        this.spawn();

        this.spawnInterval = setInterval(() => {
            this.spawn();
        }, 3000);
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnInterval);

        this.agent = grab_proxy();

        if (this.serverUrl && this.startedBots) this.connect(this.serverUrl);
    }

    onError() { }

    disconnect() {
        if (this.ws) {
            delete this.startedBots;
            this.ws.terminate();
            delete this.ws;
        }

        clearInterval(this.pingInterval);

        clearTimeout(this.spawnInterval);
    }

    spawn() {
        this.send(this.Name(this.name));
    }

    split() {
        const writer = new nn();
        writer.writeUInt8(17);
        this.send(writer.toBuffer());
    }

    eject() {
        const writer = new nn();
        writer.writeUInt8(21);
        this.send(writer.toBuffer());
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
        const writer = new nn();
        writer.writeUInt8(16);
        writer.writeDouble(~~x);
        writer.writeDouble(~~y);
        this.send(writer.toBuffer());
    }

    sendChat(message) { }

    get wsOPEN() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    Buffer(buf = 1) {
        return new DataView(new ArrayBuffer(buf));
    }

    send(data) {
        if (this.wsOPEN) {
            this.ws.send(data);
        }
    }
};
