import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { generateHeaders } from '../utils/headers.js';
import { grab_proxy } from "../utils/proxys.js";

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.readytoSpawn = false;
    }

    async connect(url) {
        this.startedBots = true;
        this.useID = false;
        this.serverUrl = url;

        // I gave up on request lol:
        const bruteForce = Math.floor(Math.random() * 11) + 240;
        this.authKeys = [
            210, 32, 532, 400,
            bruteForce, 111, 43, 58
        ];

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('http://62.68.75.115:90')
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
        message = new DataView(message.data);
        var offset = 0;
        switch (message.getUint8(0)) {
            case 42:
                this.VerifyKey(message, offset, this.globVerfID)
                break;
            case 71:
                var _0x5b59ea = 3;
                var offset = 1;
                let _0xd424a3 = message.getUint32(offset, true);
                offset += 4;
                let _0x46915a = this.Buffer(33);
                _0x46915a.setUint8(0, 10);
                for (let _0x57b5bf = 0; _0x57b5bf < 8; _0x57b5bf++) {
                    if (_0x5b59ea > 7) {
                        _0x5b59ea = 0;
                    }
                    _0x46915a.setUint32(_0x57b5bf * 4 + 1, ~~(this.authKeys[_0x5b59ea] / 1600 * _0xd424a3), true);
                    _0x5b59ea++;
                }
                this.send(_0x46915a);
                this.globVerfID = message.getUint8(offset++);
                this.readytoSpawn = true;
                break;
        }
    }

    VerifyKey(_0x4f5a17, _0x233e50, _0x3707cf) {
        _0x233e50 = 1;
        let _0x493c07 = [],
            _0x39ec99 = (_0x37d018, _0x2f1116) => {
                return _0x37d018 + _0x2f1116
            },
            _0x1465a2 = (_0x6a1589, _0x174ca1) => {
                return _0x6a1589 - _0x174ca1
            },
            _0x1c3c08 = (_0x4f5e8b, _0x4fbf07) => {
                return _0x4f5e8b * _0x4fbf07
            },
            _0x2a53f9 = (_0x463f54, _0x2b9e29) => {
                return _0x463f54 / _0x2b9e29
            },
            _0x2a0572 = [_0x39ec99, _0x1465a2, _0x1c3c08, _0x2a53f9],
            _0x4b0449 = _0x4f5a17.getUint32(_0x233e50, true)
        _0x233e50 += 4
        let _0x2bb16d = _0x4f5a17.getUint8(_0x233e50++),
            _0x1ec415 = _0x4f5a17.getUint8(_0x233e50++),
            _0x4d14f5 = _0x4f5a17.getUint16(_0x233e50, true)
        _0x233e50 += 2
        let _0x2a01b4 = _0x4f5a17.getUint32(_0x233e50, true)
        _0x233e50 += 4
        let _0x57d642 = _0x4f5a17.getUint8(_0x233e50++)
        for (
            let _0x2922ea = ~~(_0x4b0449 - _0x4b0449); _0x2922ea < _0x1ec415; _0x2922ea++
        ) {
            _0x493c07[_0x2922ea] = _0x4f5a17.getUint8(_0x233e50++)
        }
        for (let _0x56c5ae = 0; _0x56c5ae < _0x493c07.length; _0x56c5ae++) {
            _0x4d14f5 = Math.ceil(
                _0x2a0572[_0x493c07[_0x56c5ae]](
                    _0x4d14f5,
                    _0x4f5a17.getUint8(_0x233e50++)
                )
            )
        }
        let _0x3a1725 = new DataView(new ArrayBuffer(3 + _0x2bb16d * 4 + _0x57d642))
        _0x3a1725.setUint8(0, 43)
        _0x3a1725.setUint16(1, _0x2a01b4 + this.globVerfID, true)
        for (let _0x1db780 = 0; _0x1db780 < _0x2bb16d; _0x1db780++) {
            _0x3a1725.setInt32(3 + _0x1db780 * 4, _0x4d14f5 + _0x1db780, true)
        }
        this.send(_0x3a1725);
    }

    onOpen() {
        let Init = this.Buffer(5);
        Init.setUint8(0, 254);
        Init.setUint32(1, 5, true);
        this.send(Init);

        Init = this.Buffer(5);
        Init.setUint8(0, 255);
        Init.setUint32(1, 0, true);
        this.send(Init);

        let _0x2f8e23 = this.Buffer(5);
        _0x2f8e23.setUint8(0, 70);
        _0x2f8e23.setUint32(1, 0, true);
        this.send(_0x2f8e23);

        //this.sendRegister();
        this.spawn();

        this.pingInterval = setInterval(() => {
            this.sendUint8(98);
        }, 5000)

        this.spawnTimeout = setInterval(this.spawn.bind(this), 3000);
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);

        this.agent = grab_proxy();

        if (this.serverUrl && this.startedBots) this.connect(this.serverUrl);
    }

    onError() { }

    sendRegister() {
        this.userName = this.generateUsername();
        this.eMail = this.generateEmail();
        this.passWord = this.generatePassword();

        var userName = this.userName;
        var eMail = this.eMail;
        var passWord = this.passWord;

        userName += ';';
        eMail += ';';

        var _0x11d6ce = this.Buffer(1 + 2 * userName.length + 2 * eMail.length + 2 * passWord.length);
        _0x11d6ce.setUint8(0, 120);
        for (var _0x51afcd = 0; _0x51afcd < userName.length; ++_0x51afcd) {
            _0x11d6ce.setUint16(1 + 2 * _0x51afcd, userName.charCodeAt(_0x51afcd), true);
        }
        for (var _0x51afcd = 0; _0x51afcd < eMail.length; ++_0x51afcd) {
            _0x11d6ce.setUint16(1 + 2 * userName.length + 2 * _0x51afcd, eMail.charCodeAt(_0x51afcd), true);
        }
        for (var _0x51afcd = 0; _0x51afcd < passWord.length; ++_0x51afcd) {
            _0x11d6ce.setUint16(1 + 2 * userName.length + 2 * eMail.length + 2 * _0x51afcd, passWord.charCodeAt(_0x51afcd), true);
        }
        this.send(_0x11d6ce);

        setTimeout(() => {
            this.sendLogin();
        }, 2000);
    }

    sendLogin() {
        let userName = this.userName;
        var passWord = this.passWord;
        userName += ';';
        var _0x4e118e = this.Buffer(1 + 2 * userName.length + 2 * passWord.length);
        _0x4e118e.setUint8(0, 121);
        for (var _0x15875a = 0; _0x15875a < userName.length; ++_0x15875a) {
            _0x4e118e.setUint16(1 + 2 * _0x15875a, userName.charCodeAt(_0x15875a), true);
        }
        for (var _0x15875a = 0; _0x15875a < passWord.length; ++_0x15875a) {
            _0x4e118e.setUint16(1 + 2 * userName.length + 2 * _0x15875a, passWord.charCodeAt(_0x15875a), true);
        }
        this.send(_0x4e118e);

        setInterval(() => {
            this.sendChat('Too Easy! | Xero-Bots')
        }, 5000);
    }

    generateRandomString(length, chars) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    generateUsername() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return this.generateRandomString(8, chars);
    }

    generateEmail() {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        const domain = ["gmail.com", "yahoo.com", "hotmail.com", "aol.com", "outlook.com"];
        return `${this.generateRandomString(8, chars)}@${domain[Math.floor(Math.random() * domain.length)]}`;
    }

    generatePassword() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < 8; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    disconnect() {
        if (this.ws) {
            delete this.startedBots;
            this.ws.terminate();
            delete this.ws;
        }

        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);
    }

    spawn() {
        if (!this.readytoSpawn) return;
        var spawnBuf = this.Buffer(1 + 2 * this.name.length);
        spawnBuf.setUint8(0, 5);
        for (var i = 0; i < this.name.length; ++i) {
            spawnBuf.setUint16(1 + 2 * i, this.name.charCodeAt(i), true);
        }
        this.send(spawnBuf);
    }

    split() {
        var [x, y] = this.getRandomCoordinate(60000, 60000);
        this.placeObject(44, x, y); // SLOW MO
    }

    eject() {
        this.placeObject(30, this.playerPosX, this.playerPosY); // ADD MASS
    }

    getRandomCoordinate(height, width) {
        var x = Math.floor(Math.random() * width);
        var y = Math.floor(Math.random() * height);
        return [x, y];
    }

    placeObject(numID, placeX, placeY) {
        let _0x12acdd = this.Buffer(17);
        _0x12acdd.setUint8(0, numID);
        _0x12acdd.setFloat64(1, placeX, true);
        _0x12acdd.setFloat64(9, placeY, true);
        this.send(_0x12acdd);
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
        var _0x391c61 = this.Buffer(21)
        _0x391c61.setUint8(0, 16)
        _0x391c61.setFloat64(1, x, true)
        _0x391c61.setFloat64(9, y, true)
        _0x391c61.setUint32(17, 0, true)
        this.send(_0x391c61)
        this.playerPosX = x;
        this.playerPosY = y;
    }

    sendChat(message) {
        if (!this.readytoSpawn) return;
        var _0x118101 = this.Buffer(2 + 2 * message.length), _0x4c8406 = 0;
        _0x118101.setUint8(_0x4c8406++, 99);
        _0x118101.setUint8(_0x4c8406++, 0);
        for (var _0x5b3000 = 0; _0x5b3000 < message.length; ++_0x5b3000) {
            _0x118101.setUint16(_0x4c8406, message.charCodeAt(_0x5b3000), true);
            _0x4c8406 += 2;
        }
        this.send(_0x118101);
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
