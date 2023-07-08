import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys/proxyHandler.js";
import { generateHeaders } from '../utils/headers.js';
import solver from '../utils/solvers/recaptcha/recaptcha-solver-wrapper.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, [
            'protocol1',
            'protocol2'
        ], {
            agent: this.agent,
            rejectUnauthorized: false, // Do not reject the server's certificate even if it fails verification.
            headers: generateHeaders('https://agar.live')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + (this.useID ? ' | ' + this.id : '');
    }

    onMessage(message) { }

    async onOpen() {
        console.log('Connected to the game');

        var Init = this.Buffer(5);
        Init.setUint8(0, 254);
        Init.setUint32(1, 4, true);
        this.send(Init);

        var Init = this.Buffer(5);
        Init.setUint8(0, 255);
        Init.setUint32(1, 1332175218, true);
        this.send(Init);

        var reCaptchaToken = await solver.solveRecaptchaV2(
            'https://agar.live',
            '6LfwbtgjAAAAAP8YD09J3OsD04rVKSl63RJLr2M0',
            'play_game',
            this.agent // Better to use the current proxy to solve for tokens.
        );

        if (!reCaptchaToken) return this.onClose();

        this.sendCaptchaToken(reCaptchaToken);

        this.sendPlayInput();

        this.sendChat('psx2psx2');

        this.pingInterval = setInterval(this.ping.bind(this), 1000);
        this.spawnInterval = setInterval(this.sendPlayInput.bind(this), 3000);
    }

    sendCaptchaToken(token) {
        var recaptchaBuffer = this.Buffer(1 + 2 * token.length);
        recaptchaBuffer.setUint8(0, 50);
        for (var i = 0; i < token.length; ++i) {
            recaptchaBuffer.setUint16(1 + 2 * i, token.charCodeAt(i), true);
        }
        this.send(recaptchaBuffer);
    }

    ping() {
        var ping = this.Buffer(5);
        ping.setUint8(0, 90);
        ping.setUint32(1, 123456789, true);
        this.send(ping);
    }

    sendPlayInput() {
        this.spawn();
        this.sendUint8(27);
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
        var spawnBuffer = this.Buffer(1 + 2 * this.name.length);
        spawnBuffer.setUint8(0, 197);
        for (var i = 0; i < this.name.length; ++i) {
            spawnBuffer.setUint16(1 + 2 * i, this.name.charCodeAt(i), true);
        }
        this.send(spawnBuffer);
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
        var mouseBuffer = this.Buffer(21);
        mouseBuffer.setUint8(0, 16);
        mouseBuffer.setFloat64(1, x, true);
        mouseBuffer.setFloat64(9, y, true);
        mouseBuffer.setUint32(17, 0, true);
        this.send(mouseBuffer);
    }

    sendChat(message) {
        var messageBuffer = this.Buffer(2 + 2 * message.length);
        var i = 0;
        messageBuffer.setUint8(i++, 199);
        messageBuffer.setUint8(i++, 0);
        for (var ii = 0; ii < message.length; ++ii) {
            messageBuffer.setUint16(i, message.charCodeAt(ii), true);
            i += 2;
        }
        this.send(messageBuffer);
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
