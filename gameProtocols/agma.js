class _0x55c9cc {
  constructor(_0x3a2a3c) {
    this.buffer = new DataView(new ArrayBuffer(_0x3a2a3c));
    this.position = 0;
    this.littleEndian = true;
  }
  setString(_0x5d3a3a) {
    for (let _0x4783fe = 0; _0x4783fe < _0x5d3a3a.length; _0x4783fe++) {
      this.setUint16(_0x5d3a3a.charCodeAt(_0x4783fe));
    }
    return this;
  }
  setInt8(_0x7b4553) {
    this.buffer.setInt8(this.position++, _0x7b4553);
    return this;
  }
  setUint8(_0x336b7d) {
    this.buffer.setUint8(this.position++, _0x336b7d);
    return this;
  }
  setInt16(_0x3c4555) {
    this.buffer.setInt16((this.position += 2) - 2, _0x3c4555, this.littleEndian);
    return this;
  }
  setUint16(_0xe442d6) {
    this.buffer.setUint16((this.position += 2) - 2, _0xe442d6, this.littleEndian);
    return this;
  }
  setInt32(_0x22b848) {
    this.buffer.setInt32((this.position += 4) - 4, _0x22b848, this.littleEndian);
    return this;
  }
  setUint32(_0x436cf5) {
    if (_0x436cf5 % 1 != 0 && _0x436cf5.toString().slice(-2) == 88) {
      _0x436cf5 += 4;
    }
    this.buffer.setUint32((this.position += 4) - 4, _0x436cf5, this.littleEndian);
    return this;
  }
  setFloat32(_0x579e92) {
    this.buffer.setFloat32((this.position += 4) - 4, _0x579e92, this.littleEndian);
    return this;
  }
  setFloat64(_0x39141b) {
    this.buffer.setFloat64((this.position += 8) - 8, _0x39141b, this.littleEndian);
    return this;
  }
}

class _0x24031a {
  constructor(_0x44da73, _0x4075be) {
    this.buffer = new DataView(_0x44da73.data);
    this.position = _0x4075be || 0;
    this.littleEndian = true;
  }
  getColorTags() {
    var _0x4c0e06 = this.getUint8();
    var _0x39bdd3 = this.getUint8();
    var _0x3e83e8 = this.getUint8();
    //
  }
  getWearables() {
    var _0xb4bb2b = this.getUint8();
    if (_0xb4bb2b === 0) {
      return null;
    }
    const _0x18dead = [];
    for (let _0x459d36 = 0; _0x459d36 < _0xb4bb2b; _0x459d36++) {
      _0x18dead.push({
        wearId: this.getUint16(),
        N: this.getUint8()
      });
    }
    return _0x18dead;
  }
  getString() {
    let _0x269add = "";
    while (true) {
      var _0x420055 = this.getUint16();
      if (!_0x420055) {
        break;
      }
      _0x269add += String.fromCharCode(_0x420055);
    }
    return _0x269add;
  }
  getInt8() {
    return this.buffer.getInt8(this.position++);
  }
  getUint8() {
    return this.buffer.getUint8(this.position++);
  }
  getInt16() {
    return this.buffer.getInt16((this.position += 2) - 2, this.littleEndian);
  }
  getUint16() {
    return this.buffer.getUint16((this.position += 2) - 2, this.littleEndian);
  }
  getInt32() {
    return this.buffer.getInt32((this.position += 4) - 4, this.littleEndian);
  }
  getUint32() {
    return this.buffer.getUint32((this.position += 4) - 4, this.littleEndian);
  }
  getFloat32() {
    return this.buffer.getFloat32((this.position += 4) - 4, this.littleEndian);
  }
  getFloat64() {
    return this.buffer.getFloat64((this.position += 8) - 8, this.littleEndian);
  }
}

class Bot {
  constructor(ip) {
    this.init(ip);
  }

  reset() {
    if (this.socket) {
      this.socket.close();
      this.socket.onopen = null;  // Remove event handlers
      this.socket.onmessage = null;
      this.socket.onclose = null;
      this.socket.onerror = null;
    }
    this.socket = null;
    this.socketIP = null;
  }

  init(ip) {
    this.reset();

    this.initialize();

    this.socketIP = ip;
    this.socket = new WebSocket(this.socketIP);

    this.socket.binaryType = 'arraybuffer';

    this.socket.onopen = this.handleOpen.bind(this);
    this.socket.onmessage = this.handleMessage.bind(this);
    this.socket.onclose = this.handleClose.bind(this);
    this.socket.onerror = this.handleError.bind(this);
  }

  initialize() {
    this.maxLimitl = 1;

    this.ag219_2 = "";

    if (localStorage.getItem("crcx2").length > 5) {
      this.ag219_2 = window.localStorage.getItem("crcx2") || "";
    }

    let rc3 = null;
    if (typeof Storage != "undefined") {
      rc3 = localStorage.getItem("ag218");
    }
    if (!rc3) {
      grecaptcha.execute("6LfOcVMhAAAAAIzR2aCZX5fTjD8HUYYnntFzKqcA", {
        action: "homepage"
      }).then(function (_) {
        $.post("ag218.php", {
          cvcb: JSON.stringify({
            cvcb: _
          })
        }, function (_) {
          if (_) {
            if (typeof Storage != "undefined") {
              localStorage.setItem("ag218", _);
            }
            window.AG.gcvbb = _;
            if (typeof t == "function") {
              t(_);
            }
          }
        }, "text");
      });
    } else {
      $.post("ag218.php", {
        cvc: JSON.stringify({
          cvc: rc3
        })
      }, function (_) {
        if (_) {
          if (((_ = JSON.parse(_)).needRefresh || _.error) && (typeof Storage != "undefined" && localStorage.removeItem("ag218"), window.AG.gcvbb = "", this.maxLimitl < 4)) {
            this.maxLimitl++;
            console.log("Re fetch?!??!!?");
            return;
          }
          if (typeof Storage != "undefined") {
            localStorage.setItem("ag218", _);
          }
          window.AG.gcvbb = _;
          if (typeof t == "function") {
            t(_);
          }
        }
      }, "text");
    }
  }

  handleMessage(_0x457bef) {
    console.log('Message received:', _0x457bef);

    const _0x4ed0fb = new _0x24031a(_0x457bef, 0);
    if (_0x4ed0fb.buffer.getUint8(0) === 240) {
      _0x4ed0fb.position += 5;
    }
    switch (_0x4ed0fb.getUint8()) {
      case 112:
        console.log("CRX");
        var _0x158c81;
        var _0x44e567 = _0x4ed0fb.getUint8();
        this.ag219_2 = _0x44e567 == 2 ? (_0x158c81 = _0x4ed0fb.getString(), typeof Storage != "undefined" && localStorage.setItem("crcx2", _0x158c81), _0x158c81) : _0x4ed0fb.getString();
        break
      case 64:
        if (this._0x201178 > 33) {
          _0x4ed0fb.getUint32();
          _0x4ed0fb.getUint32();
          _0x4ed0fb.getUint32();
          _0x4ed0fb.getUint32();
        }

        _0x4ed0fb.getInt16();

        var _0x13079f = _0x4ed0fb.getUint32();
        var _0x4b30e0 = _0x4ed0fb.getUint32();

        var _0x2dbff5 = _0x4ed0fb.getUint8();

        _0x4ed0fb.getUint32() * 2;
        _0x4ed0fb.getUint32() * 2;

        _0x4ed0fb.getUint16();
        _0x4ed0fb.getUint16();

        if (_0x13079f === _0x4b30e0) { // _0x437f19 = 60, at this point
          //
          this._0x437f19 = 60;
          //
          if (this._0x437f19 < 70) {
            this._0x437f19 += 40;
            this._0x40887a = _0x13079f;
            this._0x40887a += 1;
            this._0x3eab37(0);
          }
        } else {
          console.log("you did something wrong");
        }
        break;


      case 104:

        console.log("request to 219");

        //this._0x4b96cd(1);
        break;

      case 244:
        if (_0x4ed0fb.buffer.byteLength === 1) {
          if (this.ag219_2.length > 0) {
            if (/*_0xea2544(true) && */this.ag219_2.length > 0) {
              var g = new _0x55c9cc(3 + this.ag219_2.length * 2).setUint8(102).setUint16(this.ag219_2.length).setString(this.ag219_2);

              console.log(g.buffer);
            }
          } else {
            //_0x297529();

            console.log("request to 219.php")
          }

          // rest...
        }
        break;
    }
  }

  _0x297529() {
    if (_0xea2544(true)) {
      if (ag219.length > 0) {
        new _0x55c9cc(3 + ag219.length * 2).setUint8(101).setUint16(ag219.length).setString(ag219).send();
        rq219done = false;
        sentFirstTime = true;
      } else if (!rq219done) {
        setTimeout(function () {
          _0x297529();
        }, 3000);
      }
    }
  }

  _0x3eab37(_0x503b61) {
    if (this._0x40887a != -1 && !_0x503b61) {
      let _0x3cda3b = "";
      var _0x2b55ef = localStorage.getItem("ag218");
      if (_0x2b55ef) {
        _0x3cda3b = _0x2b55ef;
      }
      if (!_0x2b55ef) {
        if (window.AG && window.AG.gccvb !== "Co+kQI2/U7Fto3imGgDcp9qAhFyQqE047lMrIoJkj4yKGzNjC+R4ZX" && window.AG.gccvb !== "" && window.AG.gccvb !== undefined) {
          _0x3cda3b = window.AG.gccvb;
        }
      }
      _0x3cda3b;
      window.iesg ||= ""; // window.iesg = serve dynamic, key from GET body
      let _0xd0ce50 = new _0x55c9cc(1 + _0x3cda3b.length * 2 + window.iesg.length * 2 + 2);
      _0xd0ce50.setUint8(244);
      _0xd0ce50.setString(_0x3cda3b);
      _0xd0ce50.setUint16(0);
      _0xd0ce50.setString(window.iesg);
      console.log(_0xd0ce50.buffer);
      if ((_0x2b55ef = 0) < this.ag219_2.length) {
        _0x2b55ef = this.ag219_2.length * 2;
      }
      const _0x2cfd16 = new _0x55c9cc(14 + _0x2b55ef);
      _0x2cfd16.setUint8((_0x437f19 + 30) * 2 - (_0x40887a - 5) % 10 - 5);
      var _0x73e3f8; // client.php key
      this._0x25446f(_0x2cfd16, _0x503b61, _0x73e3f8);
      var _0x42f3c2 = [126, 57, 139, 92, 346, 36];
      var _0x2b0a12 = 162;
      /**
       * _0xd587c2(2)
4.88
       */
      _0x2cfd16.setUint32(/*_0xd587c2(2)*/ 4.88 + function () {
        var _0x19549a = 0;
        for (var _0x2d00e7 = 2; _0x2d00e7 < _0x42f3c2.length; _0x2d00e7++) {
          _0x19549a += ~~(this._0x40887a / _0x42f3c2[_0x2d00e7] - _0x42f3c2[_0x2d00e7] % _0x2b0a12);
        }
        return _0x19549a;
      }() + _0x2b0a12);
      this._0x5ec562(_0x2cfd16);
      if (this.ag219_2.length > 0) {
        _0x2cfd16.setString(this.ag219_2);
      }
      console.log(_0x2cfd16.buffer);
    }
  }

  _0x4b96cd(_0x409415) {
    $.post("ag219.php", {
      data: JSON.stringify({
        cv: _0x274bf6 * 2,
        ch: _0x437f19,
        ccv2: _0x37924b - 2,
        abl: encodeURIComponent(_0x5ec562).length,
        cp: _0x201178,
        vv: _0x34ee54
      })
    }, function (_0x51121d) {
      if (_0x51121d) {
        rq219done = true;
        ag219 = _0x51121d;
        if (!sentFirstTime || !!_0x409415) {
          //_0x297529();
        }
      } else {
        _0xa29ac1("Unable to connect. Please refresh your browser and try again. If this persists, please send an email to hello@agma.io to inform", false, true, 0, 0);
      }
    }, "text");
  }

  _0x5ec562(_0x175aad) {
    _0x175aad.setUint32(this._0x2e5b54(_0x175aad.buffer, 0, 9, 255));
  }

  _0x25446f(_0x2e6ca3, _0x55e4c5, _0x337b7f) {
    //_0xd587c2(2);
    _0x2e6ca3.setUint32(1 + ~~(this._0x40887a / 1.41 + this._0x437f19 / 2 - (_0x55e4c5 ? 0.5 : 1) * 2) + ~~(~~((~~(this._0x40887a + this._0x274bf6 * 4.81 - 559) % --_0x337b7f - 36360) * 22.29) / 4.2 + 0.4));
  }

  handleOpen() {
    console.log('WebSocket connection opened');

    this._0x201178 = 58;
    this._0x34ee54 = 155;
    this._0x5ba5e7 = 12;

    this._0x437f19 = 50;

    this._0x40887a = -1;

    this._0x274bf6 = 1 + ~~(53550 + Math.random() * 600000);

    const _0x2dc5c2 = new _0x55c9cc(14);
    _0x2dc5c2.setUint8(245).setUint16(this._0x201178).setUint16(this._0x34ee54).setUint32(this._0x274bf6).setUint32(this._0x2e5b54(_0x2dc5c2.buffer, 0, 9, 245));

    console.log(_0x2dc5c2.buffer);
  }

  _0x2e5b54(_0x45dc53, _0x52e53c, _0x3695ef, _0x59a586) { // checksum
    if (_0x45dc53.byteLength < _0x52e53c + _0x3695ef) {
      _0x3695ef = 0;
    }
    var _0xeeb418 = 12354678 + _0x59a586;
    var _0x21f283 = window.altDynamicModule || undefined;
    for (var _0x531fea = 0; _0x531fea < _0x3695ef; _0x531fea++) {
      _0xeeb418 += _0x45dc53.getUint8(_0x52e53c + _0x531fea) * (_0x531fea + 4);
    }
    for (_0x21f283 = 1; _0x21f283 < 1; _0x21f283++) {
      _0x21f283++;
    }
    return _0xeeb418 + (Math.floor(Math.random() * 10), _0x59a586 = Math.floor(Math.random() * 10), 3);
  }

  handleClose(event) {
    console.log('WebSocket connection closed:', event.code, event.reason);
  }

  handleError(error) {
    console.error('WebSocket error:', error);
  }

  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
      console.log("Message sent:", data);
    } else {
      console.log("WebSocket is not open. Cannot send message:", data);
    }
  }
}
