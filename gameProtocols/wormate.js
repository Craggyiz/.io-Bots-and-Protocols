import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { getAgent } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = getAgent();
        this.startedBots = false;
        this.clientMouse = 0;
        this.isBoost = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://wormate.io')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + ' | ' + this.id;
    }

    onMessage(message) { }

    onOpen() {
        var mathen = Math.min(32, this.name.length);
        var arr = new ArrayBuffer(7 + 2 * mathen);
        var arrData = new DataView(arr);
        var secretKey = 35;
        var offset = 0;
        arrData.setInt8(offset, 129);
        (offset += 1)
        arrData.setInt16(offset, 2800);
        (offset += 2)
        arrData.setInt8(offset, 0);
        (offset += 1)
        arrData.setInt16(offset, secretKey);
        (offset += 2)
        arrData.setInt8(offset, mathen);
        offset++;
        for (var i = 0; i < mathen; i++) {
            arrData.setInt16(offset, this.name.charCodeAt(i)), (offset += 2);
        }
        this.send(arr);
        this.pingInterval = setInterval(() => {
            this.normalizeMouse(this.clientMouse, this.isBoost)
        }, 100);
        this.spawnTimeout = this.spawn.bind(this);
    }

    normalizeMouse(t, i) {
        var _2PI = 6.283185307179586;
        var o = i ? 128 : 0;
        var n = ((this.normDir(t) / _2PI) * 128) & 127;
        var r = 255 & (o | n);
        //if (e.fb !== r) {
        var s = new ArrayBuffer(1);
        var mouseMove = new DataView(s);
        mouseMove.setInt8(0, r);
        this.send(s);
        //}
    }

    normDir(t) {
        var _2PI = 6.283185307179586;
        return (t %= _2PI), t < 0 ? t + _2PI : t;
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);

        this.agent = getAgent();

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

    sendChat(message) { }

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
