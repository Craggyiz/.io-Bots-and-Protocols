import WebSocket from "ws";
import { grabConfig } from "../server/index.js";
import { grab_proxy } from "../utils/proxys/proxyHandler.js";
import { generateHeaders } from '../utils/headers.js';
import { TricksplitWasmInstance, Writer, Reader } from '../utils/authentication/tricksplit.js';

export class Minion {
    constructor() {
        this.agent = grab_proxy();
        this.startedBots = false;
        this.isReconnecting = false;
        this.useID = false;
    }

    connect(url) {
        this.startedBots = true;
        this.serverUrl = url;

        this.ws = new WebSocket(url, {
            agent: this.agent,
            rejectUnauthorized: true,
            headers: generateHeaders('https://tricksplit.io'),
            timeout: 5000
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
        var reader = new Reader(message.data);

        switch (reader.readUInt8(0x0)) {
            case 91:
                this.sendPong();
                break;

            case 0x10:
                for (var EatenNodes = reader.readUInt16(); EatenNodes--;) {
                    reader.readUInt32(), reader.readUInt32();
                }

                for (; ;) {
                    var NodeID = reader.readUInt32();

                    if (NodeID == 0) break;

                    reader.readInt32();
                    reader.readInt32();
                    reader.readUInt16();
                    reader.readUInt8();
                    reader.readUInt8();
                    reader.readUInt8();

                    var x = reader.readUInt8();

                    if (4 & x) {
                        reader.readUTF16string();
                    }
                    reader.readUTF16string();
                }

                for (var i = reader.readUInt32(); i--;) {
                    reader.readUInt32();
                }

                if (reader.offset < reader.maxOffset - 1) {
                    this.solveSecret(new Uint8Array(reader.dataView.buffer).slice(reader.offset, reader.maxOffset));
                }
        }
    }

    solveSecret(VMbyteCode) {
        VMbyteCode = this.wasmInstance.decrypt(VMbyteCode);

        this.wasmInstance.processVMBytecode(VMbyteCode);

        this.sendAuthentication = setInterval(() => {
            if (this.wasmInstance.CanvasCaptureMediaStreamTrack.contextBufferFactory !== 0) {
                this.sendMouseMove(
                    this.wasmInstance.final(),
                    this.wasmInstance.randomSeed()
                );
                this.wasmInstance.CanvasCaptureMediaStreamTrack.contextBufferFactory = 0;
                this.readyToSpawn = true;
                this.startupSpawn();
            }
        }, 40);
    }

    sendPong() {
        this.sendUint8(91);
    }

    sendFeed() {
        this.sendUint8(21);
    }

    sendSplit() {
        this.sendUint8(17);
    }

    sendSpawn(json) {
        json = JSON.stringify(json);
        const spawnBuffer = new Writer(3 + 2 * json.length);
        spawnBuffer.writeUint8(0);
        spawnBuffer.writeUTF16String(json);
        this.send(spawnBuffer.getBuffer);
    }

    startupSpawn() {
        if (!this.readyToSpawn) return;
        // Removed.
    }

    onOpen() {
        this.wasmInstance = new TricksplitWasmInstance();

        this.readyToSpawn = false;

        this.sendHandshake();
        this.send(this.wasmInstance.first());
        this.sendVerifyToken();
        this.sendJWTToken();
    }

    sendHandshake(protocol = 5) {
        var Init = this.Buffer(5);
        Init.setUint8(0, 254)
        Init.setUint32(1, protocol, true);
        this.send(Init.buffer);

        Init = this.Buffer(5);
        Init.setUint8(0, 255);
        Init.setUint32(1, 0, true);
        this.send(Init.buffer);
    }

    sendJWTToken(token = '') {
        const tokenBuffer = new Writer(2 + token.length);
        tokenBuffer.writeUint8(30);
        tokenBuffer.writeUTF8String(token);
        this.send(tokenBuffer.getBuffer);
    }

    sendVerifyToken(token = '') {
        const tokenBuffer = new Writer(2);
        tokenBuffer.writeUint8(32);
        tokenBuffer.writeUTF8String(token);
        this.send(tokenBuffer.getBuffer);
    }

    onClose() {
        this.handleReconnection();
    }

    onError(error) {
        // No error handling for now.
        // console.error(error);
        this.handleReconnection();
    }

    disconnect() {
        this.startedBots = false;
        this.clearIntervals();

        if (this.ws) {
            this.ws.terminate();
            this.ws = null;
        }
    }

    reconnect() {
        this.clearIntervals();
        this.agent = grab_proxy();

        if (this.serverUrl && this.startedBots) {
            this.connect(this.serverUrl);
        }
    }

    clearIntervals() {
        clearInterval(this.pingInterval);
        clearTimeout(this.spawnInterval);
        clearInterval(this.sendAuthentication);
    }

    handleReconnection() {
        if (!this.isReconnecting) {
            this.isReconnecting = true;
            this.reconnect();
        }
    }

    spawn() { }

    split() {
        if (!this.readyToSpawn) return;
        this.sendSplit();
    }

    eject() {
        if (!this.readyToSpawn) return;
        this.sendFeed();
    }

    sendUint8(offset) {
        const onebyte = this.Buffer(1);
        onebyte.setUint8(0, offset);
        this.send(onebyte);
    }

    sendMove(x, y) {
        if (!this.readyToSpawn) return;
        this.sendMouseMove(x, y);
    }

    sendMouseMove(x, y) {
        const mouseBuffer = new Writer(13);
        mouseBuffer.writeUint8(16);
        mouseBuffer.writeInt32(x);
        mouseBuffer.writeInt32(y);
        mouseBuffer.writeUint32(0);
        this.send(mouseBuffer.getBuffer);
    }

    sendChat(message) {
        // Need login.
    }

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
