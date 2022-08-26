import WebSocket from "ws";
import {grabConfig} from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer} from "smart-buffer";
import {generateHeaders} from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = getAgent();
        this.startedBots = false;
        this.readyToSpawn = false;
    }

    connect(url) {
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://cellcraft.io/')
        });

        this.ws.binaryType = 'buffer';

        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().getName() + ' | ' + this.id;

        this.Definitions = {
            currentTime: -1,
            c: 54295,
            to: 60,
        };
    }

    onMessage(message) {
        const reader = SmartBuffer.fromBuffer(message);
        let offset = 0;
        switch (reader.readUInt8()) {
            case 64:
                offset += 35;
                var thirtyFourKey = reader.readUInt32LE(offset, true);
                offset += 4;
                var fourKey = reader.readUInt32LE(offset, true);

                if (thirtyFourKey === fourKey) {
                    if (70 > this.Definitions.to) {
                        this.Definitions.to += 40;
                        this.Definitions.currentTime = thirtyFourKey;
                        this.shiftSixtyFourKey(33000);
                    }
                } else {
                    this.ws.close();
                    console.log("Err in 64!");
                }
                break;
            case 244:
                this.readyToSpawn = true;

                var isManualMouseBR = true;
                var tooltip = true;
                var isCMBkR = false;

                this.sendState(7, ~~isManualMouseBR);
                this.sendState(8, ~~isCMBkR);
                this.sendState(3, ~~tooltip);
                break;
        }
    }

    sendState(id, data) {
        if (this.readyToSpawn) this.send([4, id, data]);
    }

    onOpen() {
        const Init = this.Buffer(13);
        Init.setUint8(0, 245);
        Init.setUint16(1, 22, true);
        Init.setUint16(3, 118, true);
        Init.setUint32(5, this.Definitions.c, true);
        Init.setUint32(9, this.writeIndex(Init, 0, 9, 245), true);
        this.send(Init);
        this.pingInterval = setInterval(() => {
            if (this.readyToSpawn) this.send([0x5f]);
        }, 18e3);
        this.spawnTimeout = setInterval(this.spawn.bind(this), 1000);

        setInterval(() => {
            this.sendChat("Xero-Bots the best! | " + "discord.gg/bAstbAfem9");
        }, 15000);
    }

    writeIndex(data, offset, length, callback) {
        if (offset + length > data.byteLength) {
            length = 0;
        }
        var source = 12345678 + callback;
        var i = 0;
        for (; length > i; i++) {
            source = source + data.getUint8(offset + i) * (i + 1);
        }
        return source;
    }

    get KeyShifter() {
        var expressLE = "~9B\\x$";
        return [
            expressLE.charCodeAt(0),
            expressLE.charCodeAt(1),
            expressLE.charCodeAt(2) + 73,
            expressLE.charCodeAt(3),
            expressLE.charCodeAt(4) + 227,
            expressLE.charCodeAt(5)
        ];
    }
    getUpValue() {
        var op = 0;
        var ii = 0;
        for (; ii < this.KeyShifter.length; ii++) {
            op = op + ~~(this.Definitions.currentTime / this.KeyShifter[ii] - this.KeyShifter[ii] % 103);
        }
        return op;
    }

    shiftSixtyFourKey(authkey) {
        const xorKey = this.Buffer(13);
        xorKey.setUint8(0, 2 * (100 + 30) - (this.Definitions.currentTime - 5) % 10 - 5);
        xorKey.setUint32(1, ~~(this.Definitions.currentTime / 1.84 + 100 / 2 - 2 * (0 ? 0.5 : 1)) 
        + ~~(~~(21.2 * (~~(this.Definitions.currentTime + 4.42 * this.Definitions.c + 555) % --authkey + 36360)) / 4.2), true)
        xorKey.setUint32(5, this.getUpValue() + 103, true);
        xorKey.setUint32(9, this.writeIndex(xorKey, 0, 9, 255), true);
        this.send(xorKey);
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
        if (!this.readyToSpawn) return;
        let spawnBuffer = Buffer.alloc(4 + Buffer.byteLength(this.name, 'ucs2'));
        spawnBuffer[0] = 0x01;
        spawnBuffer.write(this.name, 4, 'ucs2');
        this.sendUint8(34);
        this.send(spawnBuffer);
    }

    split() {
        this.sendUint8([0x11]);
    }

    eject() {
        this.sendUint8([0x15]);
        this.sendUint8([0x24]);
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
        if (!this.readyToSpawn) return;
        let buffer = Buffer.alloc(9);
        buffer.writeInt32LE(x, 1);
        buffer.writeInt32LE(y, 5);
        this.send(buffer);
    }

    sendChat(message) {
        let chatBuffer = Buffer.alloc(2 + Buffer.byteLength(message, 'ucs2'));
        chatBuffer.writeUInt8(0x62, 0);
        chatBuffer[1] = 0x01;
        chatBuffer.write(message, 2, 'ucs2');
        this.send(chatBuffer);
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