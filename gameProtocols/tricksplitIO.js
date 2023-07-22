import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys/proxyHandler.js";
import { generateHeaders } from '../utils/headers.js';
import CryptoJS from "crypto-js";
import { webcrypto } from 'node:crypto';

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
        this.isReconnecting = false;
        this.useID = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: true,
            headers: generateHeaders('https://tricksplit.io'),
            timeout: 5000
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

                for (var i = reader.readUInt32(); i--;) {
                    reader.readUInt32();
                }

                if (reader.offset < reader.maxOffset - 1) {
                    var AES_256_SECRET = new Uint8Array(reader.dataView.buffer).slice(reader.offset, reader.maxOffset);
                    var CipherText = this.extractMessage(AES_256_SECRET);
                    this.sendDecodedOutput(this.$vm(CipherText));
                }
                break;
        }
    }

    $vm(secret) {
        var key;
        var decrypt = CryptoJS.AES.decrypt(secret, this.sessionEncryptionKey); 
        // Not open sourcing the rest, since it took a long time to figure out, mainly because I'm stupid... 
        // Just use CryptoJS.enc.Utf8.stringify() and string methods like FromCharcode.
        // You'll be able to form the true decrypted output, and then get the two elementChildFactory functions from them.
        // run the two functions by the key and send the output of both functions to the server, and you can spawn.

        return key;
    }

    extractMessage(buffer) {
        const offset = 4;
        let markerIndex = offset;
        while (buffer[markerIndex] !== 0x55) {
            markerIndex++;
        }
        const message = buffer.slice(markerIndex);
        return message;
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
        // Server checks validity of the packet via a certain time disparity in the Date.now(), then the wasm forms the AES key via the two random values.
        const dateNow = Date.now();
        let uVar2 = (dateNow / 0x3E8) < 0x80000000 ? Math.floor(dateNow / 0x3E8) : 0x80000000;

        const getRandomValue = () => webcrypto.getRandomValues(new Uint32Array(1))[0];
        let xorKeyPairOne = getRandomValue();
        let xorKeyPairTwo = getRandomValue();

        this.sessionEncryptionKey = xorKeyPairTwo ^ xorKeyPairOne;

        return new Uint32Array([
            uVar2 ^ 0xff1d296,
            xorKeyPairOne ^ ((uVar2 ^ 0xff1d296) / 0x2) ^ 0x1a4, // 0x1a4 = 420, Nice :V.
            xorKeyPairTwo ^ ((uVar2 ^ 0xff1d296) / 0x4) ^ 0x45 // 0x45 = 69, Nice :V.
        ]).buffer;
    }

    onClose() {
        this.handleReconnection();
    }

    onError(error) {
        // No error handling for now.
        // console.error(error);
        this.handleReconnection();
    }

    disconnect() {
        this.startedBots = false;
        this.clearIntervals();

        if (this.ws) {
            this.ws.terminate();
            this.ws = null;
        }
    }

    reconnect() {
        this.clearIntervals();
        this.agent = grab_proxy();

        if (this.serverUrl && this.startedBots) {
            this.connect(this.serverUrl);
        }
    }

    clearIntervals() {
        clearInterval(this.pingInterval);
        clearTimeout(this.spawnInterval);
    }

    handleReconnection() {
        if (!this.isReconnecting) {
            this.isReconnecting = true;
            this.reconnect();
        }
    }

    spawn() { }

    split() { }

    eject() { }

    sendUint8(offset) {
        const onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset);
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

    sendDecodedOutput(key) {
        var packet = new Writer(13);
        packet.writeUint8(0x10);
        packet.writeInt32(key);
        packet.writeInt32((100000000 * Math.random() + 20000000));
        packet.writeUint32(0x0);
        this.send(packet.Buffer);
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
            this.ws.send(data['buffer']);
        }
    }
};
