import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys/proxyHandler.js";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.useID = false;
        this.RCrypt = {
            // Set the encryption keys
            // keys: array of 64 bytes representing the encryption keys
            set_keys(keys) {
                this.encryptionKeys = keys || [];
            },

            // Private method to perform bitwise shift and AND operations
            // var0: value to be transformed
            $func165(var0) {
                // Perform bitwise shift and logical AND operations
                return ((var0 << 4) | (var0 >> 4)) & 255;
            },

            // Private method to encrypt or decrypt data
            // packet: array of bytes representing the data to be encrypted or decrypted
            encrypt(packet) {
                // Create a new array to hold the transformed bytes
                var HEAPU8subarray = [];

                // Loop through each byte in the packet array
                for (var i = 0; i < packet.length; i++) {
                    // Perform a bitwise XOR operation between the byte and the corresponding key byte
                    var xorResult = packet[i] ^ this.encryptionKeys[(i & 63)];
                    // Pass the result of the XOR operation to the $func165 method
                    var transformedByte = this.$func165(xorResult);
                    // Add the transformed byte to the new array
                    HEAPU8subarray[i] = transformedByte;
                }

                // Update the encryption keys
                for (var i = 0; i < 64; i++) {
                    // Perform bitwise and mathematical operations on each byte of the key
                    this.encryptionKeys[i] = this.$func165((this.encryptionKeys[i] * -17) & 255);
                }

                // Return the transformed byte array
                return new Uint8Array(HEAPU8subarray) instanceof Uint8Array ? HEAPU8subarray : new Uint8Array(HEAPU8subarray);
            }
        };

        this.c_ = class {
            constructor(t) {
                const _ = new ArrayBuffer(t);
                this._1500 = new DataView(_), this._5092 = 0, this._5038 = t
            }
            _6055(t) {
                this._1500.setUint8(this._5092, t), this._5092 += 1
            }
            _9525(t) {
                this._1500.setInt8(this._5092, t), this._5092 += 1
            }
            _6100(t) {
                this._1500.setUint16(this._5092, t, !0), this._5092 += 2
            }
            _3071(t) {
                this._1500.setInt16(this._5092, t, !0), this._5092 += 2
            }
            _2780(t) {
                this._1500.setUint32(this._5092, t, !0), this._5092 += 4
            }
            _9027(t) {
                this._1500.setInt32(this._5092, t, !0), this._5092 += 4
            }
            _8042(t) {
                this._1500.setFloat32(this._5092, t, !0), this._5092 += 4
            }
            _1250(t) {
                this._1500.setFloat64(this._5092, t, !0), this._5092 += 8
            }
            _8976(t) {
                const _ = t.length;
                this._6055(_);
                for (let e = 0; e < _; e++) {
                    const _ = t.charCodeAt(e);
                    this._6055(_)
                }
            }
            _2126(t) {
                const _ = t.length;
                this._6100(_);
                for (let e = 0; e < _; e++) {
                    const _ = t.charCodeAt(e);
                    this._6055(_)
                }
            }
            _4803(t) {
                const _ = t.length;
                this._6055(_);
                for (let e = 0; e < _; e++) {
                    const _ = t.charCodeAt(e);
                    this._6100(_)
                }
            }
            _3399(t) {
                const _ = t.length;
                this._6100(_);
                for (let e = 0; e < _; e++) {
                    const _ = t.charCodeAt(e);
                    this._6100(_)
                }
            }
            _7060() {
                this._5092 = 0
            }
            get _7441() {
                return this._5092 < this._5038 ? this._1500.buffer.slice(0, this._5092) : this._1500.buffer
            }
        };
    }

    connect(url) {
        this.gotKeys = false;

        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: false, // Do not reject the server's certificate even if it fails verification.
            headers: generateHeaders('https://ryuten.io')
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
        if (!this.gotKeys) {
            this.gotKeys = true;
            this.RCrypt.set_keys(new Uint8Array(message.data));
            return;
        }

        var reader = new Uint8Array(message.data);

        switch (reader[0]) {
            case 10:
                this.send(this.sendDocumentStatus());
                this.send(this.sendTeamName(""));
                this.send(this.sendPin(''));

                this.send(this.sendPing());

                this.pingInterval = setInterval(() => {
                    this.send(this.sendPing());
                }, 5e3);

                this.spawn();

                // Check if it truly does need to be random, if yes then keep but to make sure
                // that it's not a anti-bot bypass thing
                this.spawnInterval = setInterval(() => {
                    this.spawn();
                }, Math.max(500, Math.random() * 1000));

                break;

            case 20:
                this.send(this.sendSkinData(0, "https://i.imgur.com/PzkMI5S.jpg"));
                this.send(this.sendSkinData(1, "https://i.imgur.com/Du8bCMR.png"));
                break;
        }
    }

    onOpen() { }

    sendDocumentStatus(isDocumentHidden = false) {
        var normalizeTrueFalse = isDocumentHidden ? 1 : 0;
        var isDocumentHiddenOpcode = 42;

        const packet = new this.c_(2);
        packet._6055(isDocumentHiddenOpcode);
        packet._6055(normalizeTrueFalse ? 1 : 0);

        return packet._7441;
    }

    sendTeamName(teamName) {
        var teamNameOpcode = 21;

        const packet = new this.c_(1 + 2 * (1 + teamName.length));
        packet._6055(teamNameOpcode);
        packet._4803(teamName);

        return packet._7441;
    }

    sendPin(pin) {
        var sendPinOpcode = 23;

        const packet = new this.c_(1 + 2 * (1 + pin.length));
        packet._6055(sendPinOpcode);
        packet._4803(pin);

        return packet._7441;
    }

    sendSkinData(skinIndex, ImgurSkinUrl) {
        let hasMatch = 0;
        var matchedString = "";
        var sendSkinDataOpcode = 22;

        var extractedImageIdentifier = /https:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg)/.exec(ImgurSkinUrl);

        if (extractedImageIdentifier !== null) {
            hasMatch = 1;
            matchedString = extractedImageIdentifier[1];
        }

        const packet = new this.c_(3 + (1 + matchedString.length));
        packet._6055(sendSkinDataOpcode);
        packet._6055(skinIndex);
        packet._6055(hasMatch);
        packet._8976(matchedString);

        return packet._7441;
    }

    sendPing() {
        var sendPingOpcode = 52;

        const packet = new this.c_(1);
        packet._6055(sendPingOpcode);

        return packet._7441;
    }

    sendSpawn(setActivePlayer = 0) {
        var sendSpawnOpcode = 10;

        const packet = new this.c_(2);
        packet._6055(sendSpawnOpcode);
        packet._6055(setActivePlayer);

        return packet._7441;
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
        this.send(this.sendSpawn(0));
        this.send(this.sendSpawn(1));
    }

    split() {
        //this.send([31, 0, 1])
        //this.send([31, 1, 1])
        this.sendSplit(0, 1);
        this.sendSplit(1, 1);
    }

    eject() {
        //this.send([32, 0])
        //this.send([32, 1])
        this.sendEject(0);
        this.sendEject(1);
    }

    sendSplit(setActivePlayer = 0, multiplier = 1) {
        // Multiplier = split types: 1, 2, 3, 4, 6x
        var sendSplitOpcode = 31;

        const packet = new this.c_(3);
        packet._6055(sendSplitOpcode);
        packet._6055(setActivePlayer);
        packet._6055(multiplier);
        this.send(packet);
    }

    sendEject(setActivePlayer = 0) {
        var sendEjectOpcode = 32;

        const packet = new this.c_(2);
        packet._6055(sendEjectOpcode);
        packet._6055(setActivePlayer);
        this.send(packet);
    }

    sendUint8(offset) {
        let onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset)
        this.send(onebyte);
    }

    sendMove(x, y) {
        this.send(this.sendMouse(0, x, y));
        this.send(this.sendMouse(1, x, y));
    }

    sendMouse(setActivePlayer = 0, x, y) {
        var sendMouseOpcode = 30;

        const packet = new this.c_(6);
        packet._6055(sendMouseOpcode);
        packet._6055(setActivePlayer);
        packet._6100(x);
        packet._6100(y);

        return packet._7441;
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
            this.ws.send(this.RCrypt.encrypt(new Uint8Array(data)));
        }
    }
};
