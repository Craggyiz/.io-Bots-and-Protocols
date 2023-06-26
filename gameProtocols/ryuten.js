import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys.js";
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

        this.Writer = class {
            constructor(bufferSize) {
                const buffer = new ArrayBuffer(bufferSize);
                this.dataView = new DataView(buffer);
                this.currentOffset = 0;
                this.bufferSize = bufferSize;
            }
            writeUint8(value) {
                this.dataView.setUint8(this.currentOffset, value), this.currentOffset += 1;
            }
            writeInt8(value) {
                this.dataView.setInt8(this.currentOffset, value), this.currentOffset += 1;
            }
            writeUint16(value) {
                this.dataView.setUint16(this.currentOffset, value, !0), this.currentOffset += 2;
            }
            writeInt16(value) {
                this.dataView.setInt16(this.currentOffset, value, !0), this.currentOffset += 2;
            }
            writeUint32(value) {
                this.dataView.setUint32(this.currentOffset, value, !0), this.currentOffset += 4;
            }
            writeInt32(value) {
                this.dataView.setInt32(this.currentOffset, value, !0), this.currentOffset += 4;
            }
            writeFloat32(value) {
                this.dataView.setFloat32(this.currentOffset, value, !0), this.currentOffset += 4;
            }
            writeFloat64(value) {
                this.dataView.setFloat64(this.currentOffset, value, !0), this.currentOffset += 8;
            }
            writeShortString(value) {
                const length = value.length;
                this.writeUint8(length);
                for (let i = 0; i < length; i++) {
                    const code = value.charCodeAt(i);
                    this.writeUint8(code);
                }
            }
            writeString(value) {
                const length = value.length;
                this.writeUint16(length);
                for (let i = 0; i < length; i++) {
                    const code = value.charCodeAt(i);
                    this.writeUint8(code);
                }
            }
            writeShortWideString(value) {
                const length = value.length;
                this.writeUint8(length);
                for (let i = 0; i < length; i++) {
                    const code = value.charCodeAt(i);
                    this.writeUint16(code);
                }
            }
            writeWideString(value) {
                const length = value.length;
                this.writeUint16(length);
                for (let i = 0; i < length; i++) {
                    const code = value.charCodeAt(i);
                    this.writeUint16(code);
                }
            }
            resetOffset() {
                this.currentOffset = 0;
            }
            get buffer() {
                return this.currentOffset < this.bufferSize ? this.dataView.buffer.slice(0, this.currentOffset) : this.dataView.buffer;
            }
        };
    }

    connect(url) {
        this.gotKeys = false;

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

        const packet = new this.Writer(2);
        packet.writeUint8(isDocumentHiddenOpcode);
        packet.writeUint8(normalizeTrueFalse ? 1 : 0);

        return packet.buffer;
    }

    sendTeamName(teamName) {
        var teamNameOpcode = 21;

        const packet = new this.Writer(1 + 2 * (1 + teamName.length));
        packet.writeUint8(teamNameOpcode);
        packet.writeShortWideString(teamName);

        return packet.buffer;
    }

    sendPin(pin) {
        var sendPinOpcode = 23;

        const packet = new this.Writer(1 + 2 * (1 + pin.length));
        packet.writeUint8(sendPinOpcode);
        packet.writeShortWideString(pin);

        return packet.buffer;
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

        const packet = new this.Writer(3 + (1 + matchedString.length));
        packet.writeUint8(sendSkinDataOpcode);
        packet.writeUint8(skinIndex);
        packet.writeUint8(hasMatch);
        packet.writeShortString(matchedString);

        return packet.buffer;
    }

    sendPing() {
        var sendPingOpcode = 52;

        const packet = new this.Writer(1);
        packet.writeUint8(sendPingOpcode);

        return packet.buffer;
    }

    sendSpawn(setActivePlayer = 0) {
        var sendSpawnOpcode = 10;

        const packet = new this.Writer(2);
        packet.writeUint8(sendSpawnOpcode);
        packet.writeUint8(setActivePlayer);

        return packet.buffer;
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
        this.send(this.sendSpawn());
    }

    split() {
        this.sendSplit();
    }

    eject() {
        this.sendEject();
    }

    sendSplit(setActivePlayer = 0, multiplier = 1) {
        // Multiplier = split types: 1, 2, 3, 4, 6x
        var sendSplitOpcode = 31;

        const packet = new this.Writer(3);
        packet.writeUint8(sendSplitOpcode);
        packet.writeUint8(setActivePlayer);
        packet.writeUint8(multiplier);
        this.send(packet);
    }

    sendEject(setActivePlayer = 0) {
        var sendEjectOpcode = 32;

        const packet = new this.Writer(2);
        packet.writeUint8(sendEjectOpcode);
        packet.writeUint8(setActivePlayer);
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

        const packet = new this.Writer(6);
        packet.writeUint8(sendMouseOpcode);
        packet.writeUint8(setActivePlayer);
        packet.writeUint16(x);
        packet.writeUint16(y);

        return packet.buffer;
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
