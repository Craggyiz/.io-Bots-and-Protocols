import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { SmartBuffer } from "smart-buffer";
import { generateHeaders } from '../utils/headers.js';
import { grab_proxy } from "../utils/proxys.js";

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.needPing = false
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
        this.reconnectionAttempts = 0;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: true,
            headers: generateHeaders('http://slither.io')
        });

        this.ws.binaryType = "nodebuffer";
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = grabConfig().botOptions.getName() + ' | ' + this.id;
    }

    onMessage(msg) {
        var view = new Uint8Array(msg.data);
        var decodeView = String.fromCharCode(view[2]);
        var snakeSpeed, lastPacket;
        if (2 <= view.length) {
            if ("6" == decodeView) {
                var e = 165;
                var c = 3;
                var h = "";
                for (h = ""; c < e;) {
                    h += String.fromCharCode(view[c]), c++;
                }
                this.send(this.rotateKey(view));
                this.send([115, 10, 7, 5, 108, 117, 107, 97, 115]);
            } else if ("p" == decodeView) {
                this.needPing = true;
            } else if ("a" == decodeView) {
                this.spawnTimeout = setInterval(() => {
                    this.moveTo(this.xPos, this.yPos);
                }, 100);
                this.pingInterval = setInterval(() => {
                    this.send([251]);
                }, 250);
            } else if ("v" == decodeView) {
                this.haveSnakeID = false;
                this.onClose();
            } else if ("g" == decodeView) {
                if ((view[3] << 8 | view[4]) == this.snakeID) {
                    this.snakeX = view[5] << 8 | view[6];
                    this.snakeY = view[7] << 8 | view[8];
                }
            } else if ("n" == decodeView) {
                if ((view[3] << 8 | view[4]) == this.snakeID) {
                    this.snakeX = view[5] << 8 | view[6];
                    this.snakeY = view[7] << 8 | view[8];
                }
            } else if ("G" == decodeView) {
                if ((view[3] << 8 | view[4]) == this.snakeID) {
                    this.snakeX = this.snakeX + view[5] - 128;
                    this.snakeY = this.snakeY + view[6] - 128;
                }
            } else if ("N" == decodeView) {
                if ((view[3] << 8 | view[4]) == this.snakeID) {
                    this.snakeX = this.snakeX + view[5] - 128;
                    this.snakeY = this.snakeY + view[6] - 128;
                }

            } else if ("s" == decodeView) {
                if (!this.haveSnakeID) {
                    this.snakeID = view[3] << 8 | view[4];
                    this.haveSnakeID = true;
                }
                if ((view[3] << 8 | view[4]) == this.snakeID) {
                    if (view.length >= 31) {
                        snakeSpeed = (view[12] << 8 | view[13]) / 1e3;

                    }
                    if (view.length >= 31 && (((((view[18] << 16) | (view[19] << 8) | view[20]) / 5.0) > 99) || ((((view[21] << 16) | (view[22] << 8) | view[23]) / 5.0) > 99))) {
                        this.snakeX = ((view[18] << 16) | (view[19] << 8) | view[20]) / 5.0;
                        this.snakeY = ((view[21] << 16) | (view[22] << 8) | view[23]) / 5.0;
                    }
                }

            } else if ("g" || "n" || "G" || "N" && (view[3] << 8 | view[4]) === this.snakeID) {

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

    rotateKey(secret) {
        var result = new Uint8Array(24);
        var globalValue = 0;
        for (var i = 0; i < 24; i++) {
            var value1 = secret[17 + i * 2];
            if (value1 <= 96) {
                value1 += 32;
            }
            value1 = (value1 - 98 - i * 34) % 26;
            if (value1 < 0) {
                value1 += 26;
            }

            var value2 = secret[18 + i * 2];
            if (value2 <= 96) {
                value2 += 32;
            }
            value2 = (value2 - 115 - i * 34) % 26;
            if (value2 < 0) {
                value2 += 26;
            }

            var interimResult = (value1 << 4) | value2;
            var offset = interimResult >= 97 ? 97 : 65;
            interimResult -= offset;
            if (i == 0) {
                globalValue = 2 + interimResult;
            }
            result[i] = ((interimResult + globalValue) % 26 + offset);
            globalValue += 3 + interimResult;
        }

        return result;
    }

    moveTo(x, y) {
        var value = this.getValue(this.snakeX, this.snakeY, x, y);
        this.snakeAngle = value;

        if (value < 0 || value > 250) {
            console.log("Error!");
        }

        this.send([~~value]);
    }

    getValue(originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;

        var theta = Math.atan2(-dy, -dx);

        theta *= 125 / Math.PI;

        if (theta < 0) theta += 250;

        return theta;
    }

    onOpen() {
        this.send([99]);
    }

    onClose() {
        clearInterval(this.pingInterval);

        clearTimeout(this.spawnTimeout);

        this.reconnectionAttempts++;

        //if (this.reconnectionAttempts >= 1) {
        this.agent = grab_proxy();
        //}

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

    spawn() { }

    split() {
        this.send([253]);
    }

    eject() {
        this.send([254]);
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

    Buffer(buf) {
        return new DataView(new ArrayBuffer(!buf ? 1 : buf))
    }

    send(data) {
        if (this.wsOPEN) {
            this.ws.send(data);
        }
    }
};
