import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.gotKeys = false;
        this.encryption_keys = [];
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://ryuten.io')
        });

        this.ws.binaryType = 'arraybuffer';
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + ' | ' + this.id;
    }

    onMessage(message) {

        // First onmessage
        if (!this.gotKeys) {
            this.encryption_keys = new Uint8Array(message.data);
            this.gotKeys = true;
        }

        var Opcode = new DataView(message.data).getUint8(0);

        switch (Opcode) {
            // do the rest
        }
    }

    onOpen() {
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
            this.ws.close();
            delete this.ws;
        }

        clearTimeout(this.pingInterval);

        clearTimeout(this.spawnInterval);

        clearTimeout(this.splitInterval);
    }

    spawn() {
    }

    split() {
    }

    eject() {
    }

    ping() {
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

    Buffer(buf = 1) {
        return new DataView(new ArrayBuffer(buf));
    }

    send(data) {
        if (this.wsOPEN) {
            // $func165 & $func212
            function $func165(var0) {
                return ((var0 << 4) | (var0 >> 4)) & 255;
            }

            var HEAPU8subarray = [];
            for (var i = 0; i < data.length; i++) {
                HEAPU8subarray[i] = $func165(data[i] ^ this.encryption_keys[(i & 63)]);
            }

            for (var i = 0; i < 64; i++) {
                this.encryption_keys[i] = $func165((this.encryption_keys[i] * -17) & 255);
            }

            var normalize = new Uint8Array(HEAPU8subarray).buffer;

            this.ws.send(normalize);
        }
    }
};
