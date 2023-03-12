import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';

class Reader {
    constructor(buffer) {
        this.dataView = null;
        this.offset = 0;
        this.maxOffset = 0;
        this.dataView = new DataView(buffer);
        this.maxOffset = this.dataView.byteLength;
    }

    readUInt8() {
        const value = this.dataView.getUint8(this.offset);
        this.offset++;
        return value;
    }

    readInt8() {
        const value = this.dataView.getInt8(this.offset);
        this.offset++;
        return value;
    }

    readUInt16() {
        const value = this.dataView.getUint16(this.offset, true);
        this.offset += 2;
        return value;
    }

    readInt16() {
        const value = this.dataView.getInt16(this.offset, true);
        this.offset += 2;
        return value;
    }

    readUInt32() {
        const value = this.dataView.getUint32(this.offset, true);
        this.offset += 4;
        return value;
    }

    readInt32() {
        const value = this.dataView.getInt32(this.offset, true);
        this.offset += 4;
        return value;
    }

    readFloat32() {
        const value = this.dataView.getFloat32(this.offset, true);
        this.offset += 4;
        return value;
    }

    readFloat64() {
        const value = this.dataView.getFloat64(this.offset, true);
        this.offset += 8;
        return value;
    }

    readUTF8string() {
        let value = "";
        while (!this.endOfBuffer()) {
            const charCode = this.readUInt8();
            if (charCode === 0) {
                break;
            }
            value += String.fromCharCode(charCode);
        }
        return value;
    }

    readEscapedUTF8string() {
        return this.readUTF8string();
    }

    readUTF16string() {
        let value = "";
        while (true) {
            const charCode = this.readUInt16();
            if (charCode === 0) {
                break;
            }
            value += String.fromCharCode(charCode);
        }
        return value;
    }

    readEscapedUTF16string() {
        const value = this.readUTF16string();
        return decodeURIComponent(escape(value));
    }

    endOfBuffer() {
        return this.offset >= this.maxOffset;
    }
}

class Writer {
    constructor(size, endian = true) {
        this.size = size;
        this.Endian = endian;
        this.Buffer = new DataView(new ArrayBuffer(size));
        this.Offset = 0;
    }

    writeInt8(val) {
        this.Buffer.setInt8(this.Offset, val);
    }

    writeInt16(val) {
        this.Buffer.setInt16(this.Offset, val, true);
        this.Offset += 2;
    }

    writeInt32(val) {
        this.Buffer.setInt32(this.Offset, val, true);
        this.Offset += 4;
    }

    writeUint8(val) {
        this.Buffer.setUint8(this.Offset++, val);
    }

    writeUint16(val) {
        this.Buffer.setUint16(this.Offset, val, true);
        this.Offset += 2;
    }

    writeUint32(val) {
        this.Buffer.setUint32(this.Offset, val, true);
        this.Offset += 4;
    }

    writeFloat32(val) {
        this.Buffer.setFloat32(this.Offset, val, true);
        this.Offset += 4;
    }

    writeFloat64(val) {
        this.Buffer.setFloat64(this.Offset, val, true);
        this.Offset += 8;
    }

    writeUTF8String(str) {
        for (let i = 0; i < str.length; i++) {
            this.writeUint8(str.charCodeAt(i));
        }
        this.Offset++;
    }

    writeUTF16String(str) {
        for (let i = 0; i < str.length; i++) {
            this.writeUint16(String.fromCharCode(i));
        }
        this.Offset += 2;
    }

    get getBuffer() {
        return this.Buffer.buffer;
    }
}

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = true;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://tricksplit.io')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + (this.useID ? ' | ' + this.id : '');
    }

    onMessage(msg) {
        var reader = new Reader(msg.data);

        switch (reader.readUInt8(0x0)) {
            case 91:
                this.sendUint8(91);
                break;

            case 0x10:
                for (var EatenNodes = reader.readUInt16(); EatenNodes--;) {
                    reader.readUInt32(), reader.readUInt32();
                }

                for (; ;) {
                    var NodeID = reader.readUInt32();

                    if (NodeID == 0) break;

                    reader.readInt32();
                    reader.readInt32();
                    reader.readUInt16();
                    reader.readUInt8();
                    reader.readUInt8();
                    reader.readUInt8();

                    var x = reader.readUInt8();

                    if (4 & x) {
                        reader.readUTF16string();
                    }
                    reader.readUTF16string();
                }

                for (var _0x5796d3 = reader.readUInt32(); _0x5796d3--;) {
                    reader.readUInt32();
                }

                if (reader.offset < reader.maxOffset - 1) {
                    // elementChildFactory eval & CanvasCaptureMediaStreamTrack.contextBufferFactory
                    var AES_256_SECRET = new Uint8Array(reader.dataView.buffer).slice(reader.offset, reader.maxOffset);
                    this.sendDecodedOutput(this.$vm(AES_256_SECRET));
                }
                break;
        }
    }

    sendDecodedOutput(key) {
        // "sendMouseMove"
        var packet = new Writer(13);
        packet.writeUint8(0x10);
        packet.writeInt32(key);
        packet.writeInt32((100000000 * Math.random() + 20000000));
        packet.writeUint32(0x0);
        this.send(packet.Buffer);
    }

    onOpen() {
        var _0xFE = this.Buffer(5);
        _0xFE.setUint8(0, 0xfe);
        _0xFE.setUint32(1, 0x05);
        this.send(_0xFE);

        var _0xFF = this.Buffer(5);
        _0xFF.setUint8(0, 0xff);
        this.send(_0xFF);

        // Auth from WASM
        this.send(this.$first());

        var _0x20 = this.Buffer(2);
        _0x20.setUint8(0, 0x20);
        _0x20.setUint8(1, 0x00);
        this.send(_0x20);

        var _0x1E = this.Buffer(2);
        _0x1E.setUint8(0, 0x1e);
        _0x1E.setUint8(1, 0x00);
        this.send(_0x1E);

        this.spawnInterval = setInterval(() => {
            this.spawn();
        }, 3000);
    }

    $first() {
        var currentSeconds = Date.now() / 1.0e3;
        var seededValue = Math.abs(currentSeconds) < 2147483648 ? Math.trunc(currentSeconds) : -2147483648;

        return new Uint32Array([
            seededValue ^ 267506326,
            (this.$generateCryptoKey() ^ ((seededValue ^ 267501985) / 2)) ^ 420, // Nice :V
            (this.$generateCryptoKey() ^ ((seededValue ^ 267501985) / 4)) ^ 69 // Nice :V
        ]);
    }

    $generateCryptoKey(length = 1) {
        const secureKey = crypto.getRandomValues(new Uint32Array(length))[0];
        return (secureKey < 4294967296 && secureKey >= 0) ? Math.trunc(secureKey) >>> 0 : 0;
    }

    $vm(AES_256_SECRET) {
        /* You thought I would post the most important part of the code fully?
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⢶⡖⠒⠂⠒⠒⠶⢦⣀⠀⠀⠀⠀⠀⠀⣠⣤⠴⠤⠶⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⡿⠙⠋⠉⠀⠀⠀⠀⠀⠈⠀⠪⣵⣤⣤⠖⡺⠿⠋⠀⠀⠀⠀⠀⠺⣝⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡝⣦⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣯⠟⠁⠀⠀⠀⠀⠀⡀⠄⠀⠀⠀⠀⠢⠤⣤⡀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠹⣠⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⣻⠏⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⢾⡦⠐⠂⠀⠀⠀⠀⠀⠀⠐⠂⠀⠆⢻⣛⠦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣰⢿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠤⠄⠀⠐⠲⠀⠹⢦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢼⠷⣄⠀⠀
⠀⠀⠀⢠⣴⣿⢧⡞⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⢞⡯⠕⠒⠂⠉⠁⠀⠀⠒⠒⠢⢿⣷⣶⡮⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢾⠳⡄
⠀⠀⢰⣟⠞⠁⠘⠁⠀⠀⠀⠀⠀⢀⣀⠚⠋⠁⠚⠋⢁⣀⣠⣤⣤⣤⣤⣤⣤⣀⣀⠀⠈⠙⠀⠀⢀⣠⣤⣤⡤⠤⠤⠤⣤⠀⠤⢬⣦⢳
⠀⣴⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠰⢀⣤⠶⠛⠋⠉⠉⣠⣤⣤⣼⣷⣤⣬⣽⠷⠂⠀⠛⠛⠛⠓⠒⠒⠲⠒⠒⠚⠛⠛⢣⡀⠈⣿
⣼⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡃⠀⠠⠐⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⢠⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡽⣳⣿
⠋⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢳⡶⣤⣀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡴⠛⠉⠀⠀⠀⠀⠀⠀⢀⠠⠄⠂⠀⣰⢾⣿⠙⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢆⡀⠀⠀⠀⠀⠾⠛⠁⣾⡟⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣮⣿⡛⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠴⠞⠉⠐⠋⠁⠀⠀⠀⠉⠙⠯⢲⠖⠂⠉⠉⠉⠙⣮⢿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣾⠤⠤⠤⠤⡶⠶⣶⣶⣶⣖⣒⣒⣛⠛⡛⣛⣲⣶⣶⣦⣬⠿⣼⣻⣦⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⠀⠀⣾⠛⣩⣵⠿⣶⠶⠿⢾⠛⠛⢻⡟⠛⠻⣏⠙⠻⣿⡟⠛⡻⣿⠉⠙⣿⢿⠀⠀⣿⢾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⣿⡀⢻⡄⠀⢸⡆⠀⠸⡆⣤⣘⣷⣆⣀⣿⣀⣀⣁⣿⣒⣁⣸⡄⠀⣿⠞⠀⣠⣿⡾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⡙⢷⣄⡙⢦⣼⣿⠃⠀⣿⡟⠁⢿⡍⠉⠉⡏⠉⠉⣾⠁⠉⢹⢇⣴⠃⠀⣤⣯⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣦⠉⠻⣦⡉⠙⣦⣤⡟⠀⠀⢸⠀⠀⣼⠃⠀⢀⣟⣀⣴⣿⠟⢁⣠⣾⣷⠟⠁⠀⠀⠀
⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣄⠀⠀⠀⠀⠀⠈⠙⠆⠀⠉⠻⠷⢯⣭⣭⣭⣼⣿⣯⣽⣶⣿⣿⣿⣿⣿⠿⢛⣿⢿⡿⠋⠀⠀⠀⠀⠀
⣻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣟⡿⠋⠀⠀⠀⠀⠀⠀⠀
⠋⠙⠿⣯⣟⣶⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣶⣯⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠙⠻⠷⢦⣌⣉⣉⠙⠓⠒⠶⠦⠤⠤⠤⠀⠀⠀⠀⠀⢀⢀⣀⣀⣀⣀⢠⣤⣤⣞⣻⣿⡿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⠷⠶⠶⠶⠤⠤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠶⠟⠛⠉⠛⢷⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⡀⠀⠀⣀⠀⠀⠀⠀⠙⠳⣼⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        */


        var __salted_key = "Snip ;)";
        var __salted_input = "Snip ;)";

        var _AES = CryptoJS.AES.decrypt(__salted_key, __salted_input);
        var _normalize = CryptoJS.enc.Utf8;

        let key;
        /*
        Snip ;P
        */

        return key;
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
        /*
        Snip
        */
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
        var spawnBuffer = new Writer(13);
        spawnBuffer.writeUint8(16);
        spawnBuffer.writeInt32(x);
        spawnBuffer.writeInt32(y);
        spawnBuffer.writeUint32(0);
        this.send(spawnBuffer.Buffer);
    }

    sendChat(message) {
        /*
        Snip
        */
    }

    get wsOPEN() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    Buffer(buf = 1) {
        return new DataView(new ArrayBuffer(buf));
    }

    send(data) {
        if (this.wsOPEN) {
            this.ws.send(data['buffer']);
        }
    }
};
