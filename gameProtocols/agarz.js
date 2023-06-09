import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('https://agarz.com')
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + (this.useID ? ' | ' + this.id : '');
    }

    onMessage(message) {
        var reader = new DataView(message.data);
        var offset = 0;
        var opcode = reader.getUint8(offset);

        switch (opcode) {
            case 16:
                // Emit food stop: 
                this.sendUint8(23);
                this.sendStart();
                break;
            case 109:
                this.sendStart()
                break;
            case 111:
                var info = reader.getInt32(1, true);
                switch (info) {
                    case 1:
                        this.sendSoundOnOff(0x1);
                        this.sendTeam();
                        this.sendSkinName();
                        this.sendScopeAround();
                        this.sendUserName();
                        this.sendSpawnPlayer();
                        break;
                }
                break;
        }
    }

    sendSpawnPlayer() {
        var _0x5ec1be = this.Buffer(1);
        _0x5ec1be.setUint8(0, 0x9)
        this.send(_0x5ec1be)
    }

    sendUserName() {
        var _0x5a698a = 'sukka bllyyart';
        var _0x21d087 = this.Buffer(1 + 2 * _0x5a698a.length)
        _0x21d087.setUint8(0, 0x7);
        for (var _0x316c41 = 0; _0x316c41 < _0x5a698a.length; ++_0x316c41) {
            _0x21d087.setUint16(
                1 + 2 * _0x316c41,
                _0x5a698a.charCodeAt(_0x316c41),
                true
            )
        }
        this.send(_0x21d087);
    }

    sendScopeAround() {
        this.sendUint8(0x5);
    }

    sendSkinName() {
        var _0x46d282 = '';
        var _0x8e2f4f = _0x46d282.toLowerCase();
        var _0xd37a26 = this.Buffer(1 + 2 * _0x8e2f4f.length);
        _0xd37a26.setUint8(0, 2);
        for (var _0xe77703 = 0; _0xe77703 < _0x8e2f4f.length; ++_0xe77703) {
            _0xd37a26.setUint16(
                1 + 2 * _0xe77703,
                _0x8e2f4f.charCodeAt(_0xe77703),
                true
            )
        }
        this.send(_0xd37a26)
    }

    sendTeam() {
        var _0x1424c0 = '';
        var _0x17477e = this.Buffer(1 + 2 * _0x1424c0.length);
        var _0x118282 = 0;
        _0x17477e.setUint8(_0x118282++, 26);
        for (var _0x86ba00 = 0; _0x86ba00 < _0x1424c0.length; ++_0x86ba00) {
            var _0x29c3a7 = _0x1424c0.charCodeAt(_0x86ba00)
            _0x17477e.setUint16(_0x118282, _0x29c3a7, true)
            _0x118282 += 2
        }
        this.send(_0x17477e);
    }

    sendSoundOnOff(_0x28c61a) {
        var _0x51ca50 = this.Buffer(2)
        _0x51ca50.setUint8(0, 53)
        _0x51ca50.setUint8(1, _0x28c61a)
        this.send(_0x51ca50)
    }

    sendStart() {
        this.sendLang();
        this.send_play_as_guest();
    }

    send_play_as_guest() {
        this.sendUint8(0x8);
    }

    sendLang() {
        var _0x4b0a5a = this.Buffer(2);
        _0x4b0a5a.setUint8(0, 25);
        _0x4b0a5a.setUint8(1, 2);
        this.send(_0x4b0a5a);
    }

    onOpen() {
        var _0x3269a6 = this.Buffer(5);
        _0x3269a6.setUint8(0, 255);
        _0x3269a6.setUint32(1, 10000, true);
        this.send(_0x3269a6);

        this.js_load_time = new Date().getTime();

        this.pingInterval = setInterval(() => {
            this.ping();
        }, 3000)

        this.spawnInterval = setInterval(() => {
            this.sendStart()
        }, 3000);
    }

    ping() {
        var _0x40e7ee = new Date().getTime() - this.js_load_time;
        var _0x9b3e8 = this.Buffer(5);
        _0x9b3e8.setUint8(0, 13);
        _0x9b3e8.setInt32(1, _0x40e7ee, true);
        this.send(_0x9b3e8)
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

    spawn() { }

    split() {
        this.sendUint8(0x11)
    }

    eject() {
        this.sendUint8(0x15)
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
        var _0x5caccd = this.Buffer(21)
        _0x5caccd.setUint8(0, 16)
        _0x5caccd.setFloat64(1, x, true)
        _0x5caccd.setFloat64(9, y, true)
        _0x5caccd.setUint32(17, 0, true)
        this.send(_0x5caccd);
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
