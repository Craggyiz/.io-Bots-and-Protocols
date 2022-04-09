// ==UserScript==
// @name         Xero-Bots | .io Bots 2022
// @namespace    https://discord.com/invite/bAstbAfem9
// @version      30.0.3
// @description  The best bots for popular agar.io clone games.
// @author       Tatsuya & Enes
// @match        *.oceanar.io/*
// @match        *.aquar.io/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cellcraft.io
// @grant        none
// ==/UserScript==
 
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
 
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
 
var _00601 = new (function () {
    function _00401() {
        _classCallCheck(this, _00401);
    }
    _createClass(_00401, [{
        key: '_00801',
        value: function _00801() {
            this._00201 = [];
            this._00202 = this._00802;
            this._00203 = '';
            this._00204 = {
                'x': 0,
                'y': 0
            };
            this._00205 = null;
            this._00206 = false;
            this._00207 = _00602._00810();
            this._00804();
        }
    }, {
        key: '_00802',
        get: function _00802() {
            let _00300 = /(\w+)\:\/\/(\w+.\w+)/gi.exec(window.location.origin)[2];
            if (_00300 == "agma.io" || _00300 == "cellcraft.io" || _00300 == "oceanar.io" || _00300 == "aquar.io") {
                return 50;
            } else {
                return 15;
            }
        }
    }, {
        key: '_00803',
        get: function _00803() {
            return this._00201.filter(b => b._00218 && b._00218.readyState === WebSocket.OPEN).length;
        }
    }, {
        key: '_00804',
        value: function _00804() {
            for (let _00301 = 0; _00301 < this._00202; _00301++) {
                this._00201.push(new _00603())
            };
            this._00805();
        }
    }, {
        key: '_00805',
        value: function _00805() {
            this._00302 = setInterval(() => {
                _00602._00816(this._00803, this._00202)
            }, 1000)
        }
    }, {
        key: '_00806',
        value: function _00806() {
            this._00201.forEach((bot) => {
                bot._00828()
            })
        }
    }, {
        key: '_00807',
        value: function _00807() {
            this._00201.forEach((bot) => {
                bot._00829()
            })
        }
    }, {
        key: '_00808',
        value: function _00808() {
            if (this._00206 || !this._00203) return;
            if (this._00203 == undefined) return;
            this._00201.forEach((bot) => {
                bot._00818(this._00203)
            });
            this._00206 = true
        }
    }, {
        key: '_00809',
        value: function _00809() {
            if (!this._00206) return;
            this._00201.forEach((bot) => {
                bot._00819()
            });
            this._00206 = false
        }
    }]);
    return _00401;
}())();
 
var _00602 = new (function () {
    function _00402() {
        _classCallCheck(this, _00402);
    }
    _createClass(_00402, [{
        key: '_00810',
        value: function _00810(start, stop, split, eject) {
            this._00208 = {
                'startButton': 'startB',
                'stopButton': 'stopB',
                'botCount': 'casteramount',
                'DiscordURL': 'title'
            };
            this._00209 = false;
            this._00811();
            this._00814();
        }
    }, {
        key: '_00811',
        value: async function _00811() {
            this._00214 = await this._00812();
            if (!this._00214) {
                return alert('Failed to load bot GUI. If this keeps happening, contact a developer.');
            }
            this._00813(this._00214);
        }
    }, {
        key: '_00812',
        value: async function _00812() {
            const _00303 = await fetch('https://uttermost-inky-aardvark.glitch.me/');
            if (!_00303.ok) {
                return console.log('[GUI STATUS]', _00303);
            }
            return await _00303.text();
        }
    }, {
        key: '_00813',
        value: function _00813(html) {
            const _00304 = document.createElement('div');
            _00304.innerHTML = html;
            document.body.appendChild(_00304);
            this._00209 = true;
            this._00815('startB', 'startButton');
            this._00815('stopB', 'stopButton');
            this._00815('casteramount', 'botCount');
            this._00815('title', 'DiscordURL');
            document.getElementById(this._00208.startButton).onclick = () => {
                _00601._00808();
                this.getQueryMethod(this._00208.stopButton, 'block', this._00208.startButton, 'none');
            };
            document.getElementById(this._00208.stopButton).onclick = () => {
                _00601._00809();
                this.getQueryMethod(this._00208.stopButton, 'none', this._00208.startButton, 'block');
            };
            document.getElementById(this._00208.DiscordURL).onclick = () => {
                window.location.href = 'https://discord.gg/bAstbAfem9'
            };
            document.getElementById("okbtn").onclick = () => {
                this.getQueryMethod('popup', 'none', 'blackout', 'none');
            };
            this._00817(
                "Webpack Module Successfully initiated, bypass injected. 𝙉𝙞𝙘𝙚 𝙥𝙖𝙩𝙘𝙝 𝘼𝙜𝙖𝙧.𝙡𝙞𝙫𝙚 𝙙𝙚𝙫𝙨, 𝙩𝙧𝙮 𝙩𝙤 𝙗𝙡𝙤𝙘𝙠 𝙢𝙮 𝙂𝙐𝙄 𝙖𝙜𝙖𝙞𝙣 :)"
            );
        }
    }, {
        key: '_00814',
        value: function _00814() {
            window.addEventListener('keypress', (event) => {
                switch (event.key) {
                    case 'q':
                        _00601._00806();
                        break;
                    case 'w':
                        _00601._00807();
                        break;
                }
            });
        }
    }, {
        key: '_00815',
        value: function _00815(div, callback) {
            const _00305 = (((1 + Math.random()) * 0x10000) | 0);
            document.getElementById(div).id = _00305;
            this._00208[callback] = _00305;
        }
    }, {
        key: 'getQueryMethod',
        value: function _00500(div1, style1, div2, style2) {
            document.getElementById(div1).style.display = style1;
            document.getElementById(div2).style.display = style2;
        }
    }, {
        key: '_00816',
        value: function _00816(spawned, max) {
            document.getElementById(this._00208.botCount).innerText = spawned + " / " + max
        }
    }, {
        key: '_00817',
        value: function _00817(msg) {
            document.getElementById("msgpop").innerHTML = msg;
            document.querySelector("#popup").style.display = "block";
            document.querySelector("#blackout").style.display = "block";
        }
    }]);
    return _00402;
}())();
 
class _00603 {
    constructor() {
        this._00215 = /(\w+)\:\/\/(\w+.\w+)/gi.exec(window.location.origin)[2];
        this._00216 = {
            _00306: ["discord.gg/bAstbAfem9", "rb.gy/kafgsw", "Xero-Bots", "Nice try devs!"],
            _00307() {
                return this._00306[Math.floor(Math.random() * this._00306.length)]
            }
        }
    }
    _00818(url) {
        this._00217 = url;
 
        this._00218 = new WebSocket(url);
 
        this._00218.binaryType = "arraybuffer";
 
        this._00218.onmessage = this._00820.bind(this);
        this._00218.onopen = this._00821.bind(this);
        this._00218.onclose = this._00822.bind(this);
        this._00218.onerror = this._00823.bind(this);
 
        this._00219 = false;
 
        this._00220 = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this._00221 = this._00216._00307() + ' | ' + this._00220;
    }
    _00819() {
        if (this._00218) {
            this._00218.close();
            delete this._00218;
        }
        clearInterval(this._00902);
 
        clearInterval(this._00900);
 
        clearTimeout(this._00901);
    }
    _00820(message) { }
    _00821() {
        if (this._00834 == 1) {
            this._00824();
            this._00827();
        }
        this._00901 = setInterval(this._00824.bind(this), 3000);
        this._00902 = setInterval(this._00831.bind(this), 150);
    }
    _00822() {
        clearInterval(this._00902);
 
        clearInterval(this._00900);
 
        clearTimeout(this._00901);
    }
    _00823() { }
    _00824() {
        if (this._00834 == 1) {
            let _00309 = this._00832(52);
            _00309.setUint8(0, 22);
            var o = 0;
            for (; o < 25; ++o) {
                _00309.setUint16(1 + 2 * o, o < this._00221.length ? this._00221.charCodeAt(o) : 0, true);
            }
            _00309.setUint8(51, 255)
            this._00835(_00309);
        }
    }
    _00825(offset) {
        var _00311 = this._00832(1);
        _00311.setUint8(0, offset);
        this._00835(_00311);
    }
    _00827() {
        let _00313 = 268435455 & Date.now();
        let _00314 = this._00832(0x5);
        _00314.setUint8(0x0, 0x1);
        _00314.setUint32(0x1, _00313);
        this._00835(_00314);
    }
    _00828() {
    }
    _00829() {
    }
    _00830(message) {
    }
    _00831() {
        if (this._00834 == 1) {
            this._00835(_00601._00205)
        }
    }
    _00832(buf) {
        return new DataView(new ArrayBuffer(!buf ? 1 : buf))
    }
    get _00833() {
        return this._00218 && this._00218.readyState === WebSocket.OPEN;
    }
    get _00834() {
        switch (true) {
            case /oceanar.io/.test(this._00215):
            case /aquar.io/.test(this._00215):
                return 1;
            case /cellcraft.io/.test(this._00215):
                return 3;
        }
        return 0;
    }
    _00835(data, encrypt) {
        if (this._00833) {
            if (encrypt) {
                this._00218.send(data.buffer);
            } else this._00218.send(data);
        }
    }
}
 
if (location.host.includes('agma.io') || location.host.includes('cellcraft.io')) {
    window.WebSocket = class extends WebSocket {
        constructor() {
            let ws = super(...arguments);
            window.sockets?.push(this);
 
            setTimeout(() => {
                ws.onmessage = new Proxy(ws.onmessage, {
                    apply(target, thisArg, argArray) {
                        let data = argArray[0].data;
                        return target.apply(thisArg, argArray);
                    }
                });
            });
        }
    }
 
    WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, thisArg, argArray) {
            var res = target.apply(thisArg, argArray);
            let pkt = argArray[0];
            if (typeof pkt == 'string') return res;
            if (pkt instanceof ArrayBuffer) pkt = new DataView(pkt);
            else if (pkt instanceof DataView) pkt = pkt;
            else pkt = new DataView(pkt.buffer);
            switch (pkt.getUint8(0, true)) {
                case 0:
                    switch (pkt.byteLength) {
                        case 9:
                            _00601._00205 = pkt;
                            break;
                    }
                    break;
            }
            if (_00601._00203 !== thisArg.url) {
                _00601._00203 = thisArg.url;
            }
            return res;
        }
    });
    window.addEventListener('load', () => {
        _00601._00801();
    });
} else {
    window.addEventListener('load', () => {
        _00601._00801();
        WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
            apply(target, thisArg, argArray) {
                var res = target.apply(thisArg, argArray);
                let pkt = argArray[0];
                if (!_00601) return;
                if (typeof pkt == 'string') return res;
                if (pkt instanceof ArrayBuffer) pkt = new DataView(pkt);
                else if (pkt instanceof DataView) pkt = pkt;
                else pkt = new DataView(pkt.buffer);
                switch (pkt.getUint8(0, true)) {
                    case 16:
                    case 185:
                        _00601._00204.x = pkt.getFloat64(1, true);
                        _00601._00204.y = pkt.getFloat64(9, true);
                        break;
                    case 5:
                    case 14:
                    case 239:
                        _00601._00205 = pkt.buffer;
                        break;
                }
                if (_00601._00203 !== thisArg.url) {
                    _00601._00203 = thisArg.url;
                }
                return res;
            }
        });
    })
}
