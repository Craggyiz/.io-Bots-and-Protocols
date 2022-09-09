import WebSocket from "ws";
import {grabConfig} from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer} from "smart-buffer";
import {generateHeaders} from '../utils/headers.js';

class Writer {
    constructor(size) {
        this.buffer = Buffer.allocUnsafe(size)
        this.byteOffset = 0
    }
    Uint8(value) {
        this.buffer.writeUInt8(value, this.byteOffset++)
    }
    Int8(value) {
        this.buffer.writeInt8(value, this.byteOffset++)
    }
    Uint16(value) {
        this.buffer.writeUInt16LE(value, this.byteOffset)
        this.byteOffset += 2
    }
    Int16(value) {
        this.buffer.writeInt16LE(value, this.byteOffset)
        this.byteOffset += 2
    }
    Uint32(value) {
        this.buffer.writeUInt32LE(value, this.byteOffset)
        this.byteOffset += 4
    }
    Int32(value) {
        this.buffer.writeInt32LE(value, this.byteOffset)
        this.byteOffset += 4
    }
    string8(string, zero) {
        for (let i = 0; i < string.length; i++) {
            this.Uint8(string.charCodeAt(i))
            if (zero) this.Uint8(0)
        }
    }
    string16(string, zero) {
        for (let i = 0; i < string.length; i++) {
            this.Uint16(string.charCodeAt(i))
            if (zero) this.Uint8(0)
        }
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
            headers: generateHeaders('https://agarix.ru')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().getName() + ' | ' + this.id;

        this.Essentials = {
            userID: this.userID,
            clientVersion : '3.01.2',
            encryptionKey : 1929635592,
            decryptionKey : 1335596,
            num: 0,
            bytes: 0,
            Ek: 0
        }
    }

    onMessage(message) {
        this.runDecryptor(message);
    }

    onOpen() {
        const init = new Writer(4 + this.Essentials.userID.length + this.Essentials.clientVersion.length)
        init.Uint8(2)
        init.Uint8(0x0)
        init.string8(this.Essentials.userID)
        init.Uint8(0x0)
        init.string8(this.Essentials.clientVersion)
        init.Uint8(0x0)
        this.send(this.encryptMessage(init.buffer))
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);

        if (this.serverUrl) this.connect(this.serverUrl);
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
    }

    split() {
    }

    eject() {
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
    }

    sendChat(message) {
    }

    get wsOPEN() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    get userID() {
        for(var alpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`, id = '', i = 0; i < 3; i++) {
            for(var z = 0; z < 7; z++) {
                 id += alpha.charAt(parseInt(Math.random() * alpha.length))
            }
            id += '-'
        }
        return id.substring(0, id.length - 1)
    }

    Buffer(buf) {
        return new DataView(new ArrayBuffer(!buf ? 1 : buf))
    }

    encryptMessage(data) {
        var encryptedData = new DataView(new Uint8Array(data).buffer);
        this.Essentials.num++
        this.Essentials.bytes += new Uint8Array(encryptedData).byteLength;

        for (var i = 0; i < encryptedData.byteLength; i++) {
            encryptedData.setUint8(i, encryptedData.getUint8(i) ^ this.Essentials.encryptionKey >> i % 4 * 8 & 0xFF);
        };

        this.Essentials.encryptionKey = this.rotateKey(this.Essentials.encryptionKey);
        return encryptedData;
    }

    runDecryptor(buf) {
        var msg = new DataView(new Uint8Array(buf.data).buffer);

        for (var i = 0; i < msg.byteLength; i++) {
            msg.setUint8(i, msg.getUint8(i) ^ this.Essentials.decryptionKey >> i % 4 * 8 & 0xFF);
        };

        this.Essentials.decryptionKey = this.rotateKey(this.Essentials.decryptionKey);

        var boolBuf = msg.getUint8();
        boolBuf = 16 === boolBuf ? 14 : 78 === boolBuf ? 16 : 18 === boolBuf ? 22 : 20 === boolBuf ? 24 :
        21 === boolBuf ? 26 : 22 === boolBuf ? 28 : 48 === boolBuf ? 30 : 49 === boolBuf ? 36 : 50 === boolBuf ?
        42 : 64 === boolBuf ? 48 : 51 === boolBuf ? 63 : 104 === boolBuf ? 76 : 105 === boolBuf ? 77 : 112 === boolBuf ?
        88 : 254 === boolBuf ? 92 : 113 === boolBuf ? 96 : 114 === boolBuf ? 100 : 105

        switch (boolBuf) {
            case 88:
                var offset = 1;
                for (var charCode, string = ''; (charCode = msg.getUint8(offset++)) !== 0;) {
                    string += String.fromCharCode(charCode)
                };
                if (string === 'true') {
                    const spawn = new Writer(2  + this.name.length)
                    spawn.Uint8(112)
                    spawn.string8(this.name)
                    spawn.Uint8(0)
                    this.send(this.encryptMessage(spawn.buffer))
                }
                break;
            default:
                break;
        }
    }

    rotateKey(key) {
        key = Math.imul(key, 562342742) >> 0;
        key = Math.imul(key >>> 24 ^ key, 562342742) >> 0 ^ key;
        key = Math.imul(key >>> 13 ^ key, 562342742) >> 0;
        key ^= key >>> 57;
        key ^= 23 >>> key, (key = Math.imul(key ^ key >>> key) ^ key) ^ key[0] >>> key;
        return key;
    }

    send(data) {
        if (this.wsOPEN) {
            this.ws.send(data);
        }
    }
};
