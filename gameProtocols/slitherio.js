import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = false;

        this.snakeID = null
        this.snakeX = 0
        this.snakeY = 0
        this.headX = 0
        this.headY = 0
        this.snakeAngle = 0
        this.haveSnakeID = false
        this.isBoost = false
        this.hasConnected = false
        this.xPos = 0;
        this.yPos = 0;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false,
            headers: generateHeaders('http://slither.io')
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
        var snakeSpeed, lastPacket;
        var b = new Uint8Array(message.data);
        if (2 <= b.length) {
            var f = String.fromCharCode(b[2]);
            if ("6" == f) {
                var h;
                var c = 3;
                var e = 165;
                for (h = ""; c < e;) h += String.fromCharCode(b[c]), c++;
                //console.log('Hell yea brother: ' + h);
                this.gotServerVersion(h);
            } else if ("p" == f) {
                this.pingNeeded = true;
                this.pingInterval = setInterval(() => {
                    this.send(new Uint8Array([251]));
                }, 250);
                this.spawnTimeout = setInterval(() => {
                    //this.moveTo(this.xPos, this.yPos);
                }, 100);
            } else if ("v" == f) {
                this.haveSnakeID = false;
                this.onClose();
            } else if ("g" == f) {
                if ((b[3] << 8 | b[4]) == this.snakeID) {
                    this.snakeX = b[5] << 8 | b[6];
                    this.snakeY = b[7] << 8 | b[8];
                }
            } else if ("n" == f) {
                if ((b[3] << 8 | b[4]) == this.snakeID) {
                    this.snakeX = b[5] << 8 | b[6];
                    this.snakeY = b[7] << 8 | b[8];
                }
            } else if ("G" == f) {
                if ((b[3] << 8 | b[4]) == this.snakeID) {
                    this.snakeX = this.snakeX + b[5] - 128;
                    this.snakeY = this.snakeY + b[6] - 128;
                }
            } else if ("N" == f) {
                if ((b[3] << 8 | b[4]) == this.snakeID) {
                    this.snakeX = this.snakeX + b[5] - 128;
                    this.snakeY = this.snakeY + b[6] - 128;
                }

            } else if ("s" == f) {
                if (!this.haveSnakeID) {
                    this.snakeID = b[3] << 8 | b[4];
                    this.haveSnakeID = true;
                }
                if ((b[3] << 8 | b[4]) == this.snakeID) {
                    if (b.length >= 31) {
                        snakeSpeed = (b[12] << 8 | b[13]) / 1e3;

                    }
                    if (b.length >= 31 && (((((b[18] << 16) | (b[19] << 8) | b[20]) / 5.0) > 99) || ((((b[21] << 16) | (b[22] << 8) | b[23]) / 5.0) > 99))) {
                        this.snakeX = ((b[18] << 16) | (b[19] << 8) | b[20]) / 5.0;
                        this.snakeY = ((b[21] << 16) | (b[22] << 8) | b[23]) / 5.0;
                    }
                }

            } else if ("g" || "n" || "G" || "N" && (b[3] << 8 | b[4]) === this.snakeID) {

                if (lastPacket != null) {
                    var deltaTime = Date.now() - lastPacket;


                    var distance = snakeSpeed * deltaTime / 4.0;
                    this.snakeX += Math.cos(this.snakeAngle) * distance;
                    this.snakeY += Math.sin(this.snakeAngle) * distance;
                }
                lastPacket = Date.now();

            }
        }
    }

    moveTo(x, y) {
        var value = this.getValue(this.snakeX, this.snakeY, x, y);
        this.snakeAngle = value;

        if (value < 0 || value > 250) {
            console.log("Error!");
        }

        this.send(new Uint8Array([~~value]));
    }

    getValue(originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;

        var theta = Math.atan2(-dy, -dx);

        theta *= 125 / Math.PI;

        if (theta < 0) theta += 250;

        return theta;
    }

    _isValidVersion(versionString) {
        var versionNumber = 0;
        var addend = 23;
        var characterCode;
        var digitsSoFar = 0;
        var versionChars = '';

        for (var index = 0; index < versionString.length; index++) {
            characterCode = versionString.charCodeAt(index);
            if (characterCode <= 96) {
                characterCode += 32;
            }
            characterCode = (characterCode - 97 - addend) % 26;
            if (characterCode < 0) {
                characterCode += 26;
            }
            versionNumber *= 16;
            versionNumber += characterCode;
            addend += 17;
            if (1 === digitsSoFar) {
                versionChars += String.fromCharCode(versionNumber);
                digitsSoFar = versionNumber = 0;
            } else {
                digitsSoFar++;
            }
        }

        var extractedToken = versionChars.slice(versionChars.indexOf("'") + 1, versionChars.lastIndexOf("'"));
        //console.log('Got Token: ' + extractedToken);
        for (var i = 0; i < 24; i++) {
            this.idba[i] = extractedToken.charCodeAt(i);
        }

        if (this.idba.length > 0) {
            var base = 0;
            for (var charCode, encodedCode, shiftAmount, i = 0; i < this.idba.length; i++) {
                charCode = 65;
                encodedCode = this.idba[i];
                if (97 <= encodedCode) {
                    charCode += 32;
                    encodedCode -= 32;
                }
                encodedCode -= 65;
                if (0 === i) {
                    base = 2 + encodedCode;
                }
                shiftAmount = encodedCode + base;
                shiftAmount %= 26;
                base += 3 + encodedCode;
                this.idba[i] = shiftAmount + charCode;
            }
        }

        for (index = 0; index < versionString.length; index++) {
            characterCode = versionString.charCodeAt(index);
            if (characterCode < 65 || characterCode > 122) {
                return false;
            }
        }

        return true;
    }

    gotServerVersion(versionKey) {
        var random_id = "";
        for (var c = 0; 24 > c; c++) {
            random_id += String.fromCharCode(65 + (.5 > Math.random() ? 0 : 32) + Math.floor(26 * Math.random()));
        }
        this.idba = new Uint8Array(random_id.length);
        for (c = 0; c < random_id.length; c++) {
            this.idba[c] = random_id.charCodeAt(c);
        }
        if (this._isValidVersion(versionKey)) {
            this.send(this.idba);
            this.send(this.sendName());

        } else this.onClose();
    };

    sendName() {
        var c = 10; // Color
        var e = [];
        var b = 'AUUUUUUUUGHHHHHHHHHH' // Name
        var q = new Uint8Array(4 + b.length + e.length);
        q[0] = 115;
        q[1] = 10;
        q[2] = c;
        q[3] = b.length;
        c = 4;
        for (var f = 0; f < b.length; f++) q[c] = b.charCodeAt(f), c++;
        for (var f = 0; f < e.length; f++) q[c] = e[f], c++;
        return q;
    }

    onOpen() {
        this.startLogin();
    }

    startLogin() {
        var cstr = 'c';
        var b = new Uint8Array(cstr.length);
        for (var c = 0; c < cstr.length; c++) {
            b[c] = cstr.charCodeAt(c);
        }
        this.send(b)
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
        this.xPos = x;
        this.yPos = y;
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
            this.ws.send(data);
        }
    }
};
