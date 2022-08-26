import WebSocket from "ws";
import { grabConfig } from "../index.js";
import { getAgent } from "../utils/proxys.js";
import { SmartBuffer } from "smart-buffer";
import { generateHeaders } from '../utils/headers.js';

export class Minion {
  constructor() {
    this.agent = getAgent();
    this.startedBots = false;
  }

  async connect(url) {
    this.serverUrl = url;

    this.ws = new WebSocket(url, {
      agent: this.agent,
      rejectUnauthorized: false,
      headers: generateHeaders('http://62.68.75.115:90')
    });

    this.ws.binaryType = 'arraybuffer';

    this.ws.on('message', this.onMessage.bind(this));
    this.ws.on('open', this.onOpen.bind(this));
    this.ws.on('close', this.onClose.bind(this));
    this.ws.on('error', this.onError.bind(this));

    this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
    //this.name = grabConfig().getName() + ' | ' + this.id;
    this.name = this.id + 'uwqeh91212je';
  }

  onMessage(message) {
    var view = new DataView(message);
    var offset = 0;
    switch (240 == view.getUint8(offset) && (offset = offset + 5), view.getUint8(offset++)) {
      case 71:
        let _0x489c91 = view.getUint32(offset, true);
        offset += 4;
        let _0xda2ab6 = this.Buffer(33);
        var _0x598944 = 3;
        _0xda2ab6.setUint8(0, 10);
        for (let _0x21dd64 = 0; _0x21dd64 < 8; _0x21dd64++) {
          if (_0x598944 > 7) {
            _0x598944 = 0;
          }
          var _0x45a026 = [
            210,
            32,
            532,
            400,
            243,
            111,
            43,
            58
          ];
          _0xda2ab6.setUint32(_0x21dd64 * 4 + 1, ~~(_0x45a026[_0x598944] / 1600 * _0x489c91), true);
          _0x598944++;
        }
        this.send(_0xda2ab6);
        this.spawn();
        this.spawnTimeout = setInterval(() => {
          this.spawn.bind(this);
        }, 5000);
        break;
      case 101:
        let _0x4877c7 = view.getUint8(offset++);
        let _0x39f210 = this.Buffer(2);
        _0x39f210.setUint8(0, 9), _0x39f210.setUint8(1, _0x4877c7 * 2), this.send(_0x39f210);
        break;
    }
  }

  onOpen() {
    console.log("onopen!");
    var _0x501e3f = this.Buffer(5);
    _0x501e3f.setUint8(0, 254);
    _0x501e3f.setUint32(1, 5, true);
    this.send(_0x501e3f);
    _0x501e3f = this.Buffer(5);
    _0x501e3f.setUint8(0, 255);
    _0x501e3f.setUint32(1, 0, true);
    this.send(_0x501e3f);
    //this.spawn();
  }

  onClose() {
    clearInterval(this.pingInterval);

    clearTimeout(this.spawnTimeout);

    if (this.serverUrl) setTimeout(() => {
      this.connect(this.serverUrl);
    }, 1100);
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
    var _0x28b207 = this.Buffer(1 + 2 * this.name.length);
    _0x28b207.setUint8(0, 5);
    for (var _0xf51912 = 0; _0xf51912 < this.name.length; ++_0xf51912) {
      _0x28b207.setUint16(1 + 2 * _0xf51912, this.name.charCodeAt(_0xf51912), true);
    }
    this.send(_0x28b207);
  }

  split() {
    this.sendUint8(17);
  }

  eject() {
    this.sendUint8(21);
  }

  sendUint8(offset) {
    let onebyte = this.Buffer(1);
    onebyte.setUint8(0, offset)
    this.send(onebyte);
  }

  sendMove(x, y) {
    const moveBuffer = this.Buffer(21);
    moveBuffer.setUint8(0, 16);
    moveBuffer.setFloat64(1, x, true);
    moveBuffer.setFloat64(9, y, true);
    moveBuffer.setUint32(17, 0, true);
    this.send(moveBuffer)
  }

  sendChat(message) {
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