import WebSocket from "ws";
import {grabConfig} from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer} from "smart-buffer";
import {generateHeaders} from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = getAgent();
        this.startedBots = false;
    }

    async connect(url) {
        this.serverUrl = url;

        const serverIp = await this.getKey(this.agent).catch(() => null);
        if (!serverIp) return this.disconnect();

        this.ws = new WebSocket(serverIp, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('http://agar.cc/')
        });

        this.ws.binaryType = 'buffer';

        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().getName() + ' | ' + this.id;

    }

    getKey(proxy) {
        return new Promise(async (resolve, reject) => {
            let jar = request.jar()
            request.get('https://agar.cc/', {
                agent: proxy,
                gzip: true,
                jar,
            }, (err, req, body) => {
                if (err) return reject();
                body = body.text();
                const clientVersionString = body.match(/(?<=hash = ")[^"]+/)[0]; 
                const serverIp = this.serverUrl.replace(/\?.*$/g, "") + '?' + clientVersionString
                resolve(serverIp);
            })
        });
    }

    onMessage(message) { }

    onOpen() {
        let Init = this.Buffer(5);
        Init.setUint8(0, 254);
        Init.setUint32(1, 5, true);
        this.send(Init);
        Init = this.Buffer(5);
        Init.setUint8(0, 255);
        Init.setUint32(1, 123456789, true);
        this.send(Init);

        this.spawn();
        this.sendKey();

        this.spawnTimeout = setInterval(this.spawn.bind(this), 3000);
        this.pingInterval = setInterval(() => {this.sendChat('discord.gg/bAstbAfem9')}, 5000);
    }

    sendKey() {
        // Truly amazing: https://prnt.sc/O2xW-u6G-Z3s

        this.hash = "12321321";

        var sendHash = this.Buffer(1 + 2 * this.hash.length);
        sendHash.setUint8(0, 56);
        for (var i = 0; i < this.hash.length; ++i) {
            sendHash.setUint16(1 + 2 * i, this.hash.charCodeAt(i), true);
        }
        this.send(sendHash);
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
        var spawnBuf = this.Buffer(1 + 2 * this.name.length);
        spawnBuf.setUint8(0, 192);
        for (var i = 0; i < this.name.length; ++i) {
            spawnBuf.setUint16(1 + 2 * i, this.name.charCodeAt(i), true);
        }
        this.send(spawnBuf);
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
        const mouseBuffer = this.Buffer(21);
        mouseBuffer.setUint8(0, 16);
        mouseBuffer.setFloat64(1, x, true);
        mouseBuffer.setFloat64(9, y, true);
        mouseBuffer.setUint32(17, 0, true);
        this.send(mouseBuffer);
    }

    sendChat(message) {
        var msgBuffer = this.Buffer(2 + 2 * message.length);
        var offset = 0;
        var flags = 0;
        msgBuffer.setUint8(offset++, 206);
        msgBuffer.setUint8(offset++, flags);
        for (var i = 0; i < message.length; ++i) {
            msgBuffer.setUint16(offset, message.charCodeAt(i), true);
            offset += 2;
        }

        this.send(msgBuffer);
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
