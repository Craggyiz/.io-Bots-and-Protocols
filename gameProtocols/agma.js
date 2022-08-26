import WebSocket from "ws";
import { grabConfig } from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer } from "smart-buffer";
import { generateHeaders } from '../utils/headers.js';
import request from "request";
import qs from "qs";

class _0xbf382a {
    constructor(_0x49b3c8) {
        this.buffer = new DataView(new ArrayBuffer(_0x49b3c8)), this.position = 0, this.littleEndian = true;
    }
    setUint16(_0x3e649f) {
        for (let _0x39f7f4 = 0; _0x39f7f4 < _0x3e649f.length; _0x39f7f4++) this.setUint16(_0x3e649f.charCodeAt(_0x39f7f4));
        return this;
    }
    setInt8(_0x528300) {
        return this.buffer.setInt8(this.position++, _0x528300), this;
    }
    setUint8(_0x5e955a) {
        return this.buffer.setUint8(this.position++, _0x5e955a), this;
    }
    setInt16(_0xd78b84) {
        return this.buffer.setInt16((this.position += 2) - 2, _0xd78b84, this.littleEndian), this;
    }
    setUint16(_0x55b25e) {
        return this.buffer.setUint16((this.position += 2) - 2, _0x55b25e, this.littleEndian), this;
    }
    setInt32(_0x47023d) {
        return this.buffer.setInt32((this.position += 4) - 4, _0x47023d, this.littleEndian), this;
    }
    setUint32(t) {
        return t % 1 != 0 && 88 == t.toString().slice(-2) && (t += 10), this.buffer.setUint32((this.position += 4) - 4, t, this.littleEndian), this;
    }
    setFloat32(_0x35d010) {
        return this.buffer.setFloat32((this.position += 4) - 4, _0x35d010, this.littleEndian), this;
    }
    setFloat64(_0x2fc9a7) {
        return this.buffer.setFloat64((this.position += 8) - 8, _0x2fc9a7, this.littleEndian), this;
    }
}
class Reader {
    constructor(t, i) {
        this.buffer = new DataView(t), this.position = i || 0, this.littleEndian = !0
    }
    getString() {
        let t = "";
        for (; ;) {
            var i = this.getUint16();
            if (!i) break;
            t += String.fromCharCode(i)
        }
        return t
    }
    getInt8() {
        return this.buffer.getInt8(this.position++)
    }
    getUint8() {
        return this.buffer.getUint8(this.position++)
    }
    getInt16() {
        return this.buffer.getInt16((this.position += 2) - 2, this.littleEndian)
    }
    getUint16() {
        return this.buffer.getUint16((this.position += 2) - 2, this.littleEndian)
    }
    getInt32() {
        return this.buffer.getInt32((this.position += 4) - 4, this.littleEndian)
    }
    getUint32() {
        return this.buffer.getUint32((this.position += 4) - 4, this.littleEndian)
    }
    getFloat32() {
        return this.buffer.getFloat32((this.position += 4) - 4, this.littleEndian)
    }
    getFloat64() {
        return this.buffer.getFloat64((this.position += 8) - 8, this.littleEndian)
    }
}


export class Minion {
    constructor() {
        this.agent = getAgent();
        this.startedBots = false;
        this.readyToSpawn = false;
    }

    async connect(url) {
        this.serverUrl = url;

        const cookie = await this.requestCookie().catch(() => null);
        if (!cookie) return this.onClose();

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: {
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-CA,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Origin: 'https://agma.io',
                Cookie: cookie,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
            }
        });

        this.ws.binaryType = 'arraybuffer';

        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().getName() + ' | ' + this.id;
    }

    requestCookie() {
        return new Promise(async (resolve, reject) => {
            let jar = request.jar();
            request.get(
                'https://agma.io/',
                {
                    jar,
                    gzip: true,
                    //agent: proxy,
                    headers: {
                        authority: 'agma.io',
                        'cache-control': 'max-age=0',
                        'upgrade-insecure-requests': '1',
                        'user-agent':
                            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
                        accept:
                            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                        'sec-fetch-site': 'none',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-user': '?1',
                        'sec-fetch-dest': 'document',
                        'accept-language': 'en-US,en;q=0.9',
                    },
                },
                (err, req, res) => {
                    if (err) return reject();
                    let form = qs.stringify({ cv: 4 * 51341, ch: 50, ccv: (51341 - 2), vv: 136 });

                    request.post(
                        'https://agma.io/client.php',
                        {
                            jar,
                            gzip: true,
                            //agent: proxy,
                            headers: {
                                accept: 'text/plain, */*; q=0.01',
                                'accept-encoding': 'gzip, deflate',
                                'accept-language': 'en-US,en;q=0.9',
                                'content-type':
                                    'application/x-www-form-urlencoded; charset=UTF-8',
                                origin: 'https://agma.io',
                                referer: 'https://agma.io/',
                                'sec-fetch-dest': 'empty',
                                'sec-fetch-mode': 'cors',
                                'sec-fetch-site': 'same-origin',
                                'user-agent':
                                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
                                'x-requested-with': 'XMLHttpRequest',
                            },
                            form,
                        },
                        (err, req, body) => {
                            if (err) return reject();
                            let cookie = req.request.headers.cookie;
                            console.log(cookie);
                            console.log(body);
                            resolve(cookie);
                        }
                    );
                }
            );
        });
    }

    onMessage(message) {
        const msg = new Reader(message, 0);

        switch (240 === msg.buffer.getUint8(0) && (msg.position += 5), msg.getUint8()) {
            case 64:
                var yn;

                yn = 33 < 34 ? (

                    msg.getUint32(),

                    msg.getUint32(),

                    msg.getUint32(),

                    msg.getUint32()) : (console.log('???')),

                    msg.getInt16();

                var x = msg.getUint32();

                var y = msg.getUint32();
                console.log(x, y);

                if (x === y) {
                    if (70 > 50) {
                        this.Fn = x;
                        this.Fn -= 10;
                        this.Generate64Key();
                    }
                } else {
                    this.ws.terminate();
                    console.log("Error in packet 64.")
                }
                break;
            case 0x20:
                this.sendUint8(13);
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

    Generate64Key() {
        const _0x483f7a = new _0xbf382a(13);
        _0x483f7a.setUint8(2 * (_0x36bcdf + 30) - (_0x150d35 - 5) % 10 - 5), _0x3debb6(_0x483f7a, _0x1a882e, _0x459b43), _0x483f7a.setUint32(_0x2c883d(2) + function () {
            for (var _0x270b65 = 0, _0x77410 = 1; _0x77410 < _0x473720.length; _0x77410++) _0x270b65 += ~~(_0x150d35 / _0x473720[_0x77410] - _0x473720[_0x77410] % _0x28083f);
            return _0x270b65;
        }() + _0x28083f), (_0x1a882e = _0x483f7a).setUint32(_0x3a91f2(_0x1a882e.buffer, 0, 9, 255) + 1), _0x483f7a.send(true);
    }

    offsetkey() {
        for (var _0xc4a40 = 0, _0x42b88d = 0; _0x42b88d < this._0x30c7cd.length; _0x42b88d++) {
            _0xc4a40 += ~~(this.Fn / this._0x30c7cd[_0x42b88d] - this._0x30c7cd[_0x42b88d] % 173);
        }
        return _0xc4a40;
    }

    get _0x30c7cd() {
        return [126, 57, 139, 92, 346, 36];
    }

    sendState(id, data) {
        if (this.readyToSpawn) this.send([4, id, data]);
    }

    onOpen() {

        const _0x5c94d3 = new _0xbf382a(14);
        _0x5c94d3.setUint8(245).setUint16(41).setUint16(136).setUint32(51341).setUint32(this._0x3a91f2(_0x5c94d3.buffer, 0, 9, 245));
        this.send(_0x5c94d3);

        this.pingInterval = setInterval(() => {
            if (this.readyToSpawn) this.sendUint8(95);
        }, 18e3);

        this.spawnTimeout = setInterval(this.spawn.bind(this), 1000);
    }

    _0x3a91f2(_0x39bde1, _0x162c7a, _0x1e83f0, _0x386229) {
        _0x162c7a + _0x1e83f0 > _0x39bde1.byteLength && (_0x1e83f0 = 0);
        for (var _0x50e93f = 12345678 + _0x386229, _0x172e74 = 1; _0x172e74 < _0x1e83f0; _0x172e74++) _0x50e93f += _0x39bde1.getUint8(_0x162c7a + _0x172e74) * (_0x172e74 + 1);
        return _0x50e93f;
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
        this.sendUint8(29);
        this.sendUint8(13);
        this.send(spawnBuffer);
    }

    split() {
        if (!this.readyToSpawn) return;
        this.sendUint8([0x11]);
    }

    eject() {
        if (!this.readyToSpawn) return;
        this.sendUint8([0x15]);
        this.sendUint8([0x24]);
    }

    sendUint8(offset) {
        if (!this.readyToSpawn) return;
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
        if (!this.readyToSpawn) return;
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