import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';
import request from "request";

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
    }

    async connect(url) {
        this.startedBots = true;

        var newUrl = await this.requestBody(url).catch(() => null);
        if (!newUrl) return this.onClose();

        url = newUrl;

        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://agar.cc')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.randSkin = Math.floor(Math.random() * 704);
        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = "{" + this.randSkin + "}" + grabConfig().botOptions.getName()// + ' | ' + this.id;
    }

    requestBody(serverIP) {
        return new Promise(async (resolve, reject) => {
            request.get('https://agar.cc/', {
                agent: this.agent,
                timeout: 1500
            }, (err, req, body) => {
                if (err | !body) return reject();
                const regex = new RegExp('key\\=((.*?)")', 'gm');
                var parseKey = body.match(regex);
                if (parseKey == null) return reject();
                var parseKey2 = parseKey[0].split('"')[0];
                var clientWSS = serverIP.split('key')[0];
                var resolveIP = clientWSS + parseKey2;
                console.log(resolveIP)
                resolve(resolveIP)
            })
        })
    }

    onMessage(message) { }

    onOpen() {
        var msg = this.Buffer(5);
        msg.setUint8(0, 254);
        msg.setUint32(1, 5, true);
        this.send(msg);
        msg = this.Buffer(5);
        msg.setUint8(0, 255);
        msg.setUint32(1, 123456789, true);
        this.send(msg);
        this.spawn();
        this.sendHand();
        this.spawnTimeout = setInterval(this.spawn.bind(this), 3000);
        setTimeout(() => {
            this.sendChat('Too easy!')
        }, 10000);
    }

    sendHand() {
        var hash = '12321321';
        var msg = this.Buffer(1 + 2 * hash.length);
        msg.setUint8(0, 56);
        for (var i = 0; i < hash.length; ++i) msg.setUint16(1 + 2 * i, hash.charCodeAt(i), true);
        this.send(msg);
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);

        this.agent = grab_proxy();

        if (this.serverUrl && this.startedBots) this.connect(this.serverUrl);
    }

    onError() { }

    disconnect() {
        if (this.ws) {
            delete this.startedBots;
            this.ws.close();
            delete this.ws;
        }

        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);
    }

    spawn() {
        var msg = this.Buffer(1 + 2 * this.name.length);
        msg.setUint8(0, 192);
        for (var i = 0; i < this.name.length; ++i) msg.setUint16(1 + 2 * i, this.name.charCodeAt(i), true);
        this.send(msg);
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
        var msg = this.Buffer(21);
        msg.setUint8(0, 16);
        msg.setFloat64(1, x, true);
        msg.setFloat64(9, y, true);
        msg.setUint32(17, 0, true);
        this.send(msg);
    }

    sendChat(str) {
        var msg = this.Buffer(2 + 2 * str.length);
        var offset = 0;
        var flags = 0;
        msg.setUint8(offset++, 206);
        msg.setUint8(offset++, flags); // flags (0 for now)
        for (var i = 0; i < str.length; ++i) {
            msg.setUint16(offset, str.charCodeAt(i), true);
            offset += 2;
        }
        this.send(msg)
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
