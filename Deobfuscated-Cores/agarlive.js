var Vector2 = function (_0x47ddx2, _0x47ddx3) {
    this.x = _0x47ddx2 || 0;
    this.y = _0x47ddx3 || 0;
  };
  Vector2.prototype = {reset: function (_0x47ddx2, _0x47ddx3) {
    return this.x = _0x47ddx2, this.y = _0x47ddx3, this;
  }, toString: function (_0x47ddx2) {
    _0x47ddx2 = _0x47ddx2 || 3;
    var _0x47ddx3 = Math.pow(10, _0x47ddx2);
    return "[" + Math.round(this.x * _0x47ddx3) / _0x47ddx3 + ", " + Math.round(this.y * _0x47ddx3) / _0x47ddx3 + "]";
  }, clone: function () {
    return new Vector2(this.x, this.y);
  }, copyTo: function (_0x47ddx2) {
    _0x47ddx2.x = this.x;
    _0x47ddx2.y = this.y;
  }, copyFrom: function (_0x47ddx2) {
    this.x = _0x47ddx2.x;
    this.y = _0x47ddx2.y;
  }, magnitude: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, magnitudeSquared: function () {
    return this.x * this.x + this.y * this.y;
  }, normalise: function () {
    var _0x47ddx2 = this.magnitude();
    return this.x = this.x / _0x47ddx2, this.y = this.y / _0x47ddx2, this;
  }, reverse: function () {
    return this.x = -this.x, this.y = -this.y, this;
  }, plusEq: function (_0x47ddx2) {
    return this.x += _0x47ddx2.x, this.y += _0x47ddx2.y, this;
  }, plusNew: function (_0x47ddx2) {
    return new Vector2(this.x + _0x47ddx2.x, this.y + _0x47ddx2.y);
  }, minusEq: function (_0x47ddx2) {
    return this.x -= _0x47ddx2.x, this.y -= _0x47ddx2.y, this;
  }, minusNew: function (_0x47ddx2) {
    return new Vector2(this.x - _0x47ddx2.x, this.y - _0x47ddx2.y);
  }, multiplyEq: function (_0x47ddx2) {
    return this.x *= _0x47ddx2, this.y *= _0x47ddx2, this;
  }, multiplyNew: function (_0x47ddx2) {
    return this.clone().multiplyEq(_0x47ddx2);
  }, divideEq: function (_0x47ddx2) {
    return this.x /= _0x47ddx2, this.y /= _0x47ddx2, this;
  }, divideNew: function (_0x47ddx2) {
    return this.clone().divideEq(_0x47ddx2);
  }, dot: function (_0x47ddx2) {
    return this.x * _0x47ddx2.x + this.y * _0x47ddx2.y;
  }, angle: function (_0x47ddx2) {
    return Math.atan2(this.y, this.x) * (_0x47ddx2 ? 1 : Vector2Const.TO_DEGREES);
  }, rotate: function (_0x47ddx2, _0x47ddx3) {
    var _0x47ddx4 = Math.cos(_0x47ddx2 * (_0x47ddx3 ? 1 : Vector2Const.TO_RADIANS)), _0x47ddx5 = Math.sin(_0x47ddx2 * (_0x47ddx3 ? 1 : Vector2Const.TO_RADIANS));
    return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * _0x47ddx4 - Vector2Const.temp.y * _0x47ddx5, this.y = Vector2Const.temp.x * _0x47ddx5 + Vector2Const.temp.y * _0x47ddx4, this;
  }, equals: function (_0x47ddx2) {
    return this.x == _0x47ddx2.x && this.y == _0x47ddx2.x;
  }, isCloseTo: function (_0x47ddx2, _0x47ddx3) {
    return !!this.equals(_0x47ddx2) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(_0x47ddx2), Vector2Const.temp.magnitudeSquared() < _0x47ddx3 * _0x47ddx3);
  }, rotateAroundPoint: function (_0x47ddx2, _0x47ddx3, _0x47ddx4) {
    Vector2Const.temp.copyFrom(this);
    Vector2Const.temp.minusEq(_0x47ddx2);
    Vector2Const.temp.rotate(_0x47ddx3, _0x47ddx4);
    Vector2Const.temp.plusEq(_0x47ddx2);
    this.copyFrom(Vector2Const.temp);
  }, isMagLessThan: function (_0x47ddx2) {
    return this.magnitudeSquared() < _0x47ddx2 * _0x47ddx2;
  }, isMagGreaterThan: function (_0x47ddx2) {
    return this.magnitudeSquared() > _0x47ddx2 * _0x47ddx2;
  }};
  Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
  var Pa = "#000000";
  var c_bildiri_ar = [];
  var c_bildiri_id = [];
  var Sfreeze = false;
  (function (_0x47ddxa, _0x47ddxb) {
    var _0x47ddxc = "ffa-1-public.iogames.icu:443";
    var _0x47ddxd = "./skins/";
    function _0x47ddxe(_0x47ddxf, _0x47ddx10, _0x47ddx11, _0x47ddx12, _0x47ddx13, _0x47ddx14) {
      if (_0x47ddxf <= _0x47ddx13 && _0x47ddx13 <= _0x47ddx11 && _0x47ddx10 <= _0x47ddx14 && _0x47ddx14 <= _0x47ddx12) {
        return true;
      }
      return false;
    }
    var _0x47ddx17 = "createTouch" in document, _0x47ddx18 = [];
    var _0x47ddx19 = -1, _0x47ddx1a = new Vector2(0, 0), _0x47ddx1b = new Vector2(0, 0), _0x47ddx1c = new Vector2(0, 0);
    var _0x47ddx1f = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    function _0x47ddx20() {
      _0x47ddxec = true;
      document.getElementById("canvas").focus();
      var _0x47ddx21 = false;
      var _0x47ddx22;
      _0x47ddxbb = _0x47ddxba = document.getElementById("canvas");
      _0x47ddxa9 = _0x47ddxbb.getContext("2d");
      _0x47ddxbb.onmousemove = function (_0x47ddx23) {
        _0x47ddxcb = _0x47ddx23.clientX;
        _0x47ddxcc = _0x47ddx23.clientY;
        _0x47ddx3d();
      };
      if (_0x47ddx17) {
        _0x47ddxbb.addEventListener("touchstart", _0x47ddx32, false);
        _0x47ddxbb.addEventListener("touchmove", _0x47ddx34, false);
        _0x47ddxbb.addEventListener("touchend", _0x47ddx35, false);
      }
      _0x47ddxbb.onmouseup = function () {};
      if (/firefox/i.test(navigator.userAgent)) {
        document.addEventListener("DOMMouseScroll", _0x47ddx36, false);
      } else {
        document.body.onmousewheel = _0x47ddx36;
      }
      _0x47ddxbb.onfocus = function () {
        _0x47ddx21 = false;
      };
      document.getElementById("chat_textbox").onblur = function () {
        _0x47ddx21 = false;
      };
      document.getElementById("chat_textbox").onfocus = function () {
        _0x47ddx21 = true;
      };
      var _0x47ddx24 = false, _0x47ddx25 = false, _0x47ddx26 = false;
      _0x47ddxa.onkeydown = function (_0x47ddx23) {
        switch (_0x47ddx23.keyCode) {
          case 32:
            if (!_0x47ddx24 && !_0x47ddx21) {
              _0x47ddx76();
              _0x47ddx7c(17);
              _0x47ddx24 = true;
            }
            break;
          case 81:
            if (!_0x47ddx25 && !_0x47ddx21) {
              _0x47ddx7c(18);
              _0x47ddx25 = true;
            }
            break;
          case 87:
            if (!_0x47ddx26 && !_0x47ddx21) {
              _0x47ddx76();
              _0x47ddx7c(21);
              _0x47ddx26 = true;
            }
            break;
          case 70:
            if (!_0x47ddx21) {
              if (Sfreeze == false) {
                Sfreeze = true;
                _0x47ddx28("Game stopped.");
              } else {
                Sfreeze = false;
                _0x47ddx28("Game resumed.");
              }
            }
            break;
          case 67:
            if (!_0x47ddx21) {
              _0x47ddx79("psx2psx2");
            }
            break;
          case 27:
            _0x47ddx41(true, 0);
            break;
          case 13:
            if (_0x47ddx21) {
              _0x47ddx21 = false;
              document.getElementById("chat_textbox").blur();
              _0x47ddx22 = _0x47ddx2b(document.getElementById("chat_textbox").value);
              if (_0x47ddx22.length > 0) {
                _0x47ddx79(_0x47ddx22);
              }
              document.getElementById("chat_textbox").value = "";
            } else {
              if (!_0x47ddxed) {
                document.getElementById("chat_textbox").focus();
                _0x47ddx21 = true;
              }
            }
            break;
        }
      };
      _0x47ddxa.onkeyup = function (_0x47ddx23) {
        switch (_0x47ddx23.keyCode) {
          case 32:
            _0x47ddx24 = false;
            break;
          case 87:
            _0x47ddx26 = false;
            break;
          case 81:
            if (_0x47ddx25) {
              _0x47ddx7c(19);
              _0x47ddx25 = false;
            }
            break;
        }
      };
      _0x47ddxa.onblur = function () {
        _0x47ddx7c(19);
        _0x47ddx26 = _0x47ddx25 = _0x47ddx24 = false;
      };
      _0x47ddxa.onresize = _0x47ddx7e;
      _0x47ddx7e();
      if (_0x47ddxa.requestAnimationFrame) {
        _0x47ddxa.requestAnimationFrame(_0x47ddx7d);
      } else {
        setInterval(_0x47ddx85, 16.666666666666668);
      }
      if (_0x47ddxd7) {
        _0x47ddxb("#region").val(_0x47ddxd7);
      }
      _0x47ddx4c();
      _0x47ddx40(_0x47ddxb("#region").val());
      null == _0x47ddxc1 && _0x47ddxd7 && _0x47ddx4e();
      _0x47ddx78();
      _0x47ddxb("#overlays").show();
    }
    function _0x47ddx28(_0x47ddx29) {
      var _0x47ddx2a = "";
      if (_0x47ddx2a == "") {
        _0x47ddx2a = _0x47ddx29;
      }
      $("#nn").css("position", "absolute");
      $("#nn").show();
      $("#nn").css("top", "200px");
      $("#nn").css("font-size", "20px");
      $("#nn").css("color", "red");
      $("#nn").css("z-index", "2000");
      $("#nn").css("text-align", "center");
      $("#nn").css("width", "100%");
      $("#nn").html(_0x47ddx2a);
      $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
        $("#nn").hide();
      });
    }
    function _0x47ddx2b(_0x47ddx2c) {
      var _0x47ddx2d = _0x47ddx2c;
      _0x47ddx2d = _0x47ddx2d.replace("piç", "***");
      _0x47ddx2d = _0x47ddx2d.replace(":)", String.fromCodePoint(128513));
      _0x47ddx2d = _0x47ddx2d.replace(":d", String.fromCodePoint(128513));
      _0x47ddx2d = _0x47ddx2d.replace(":D", String.fromCodePoint(128513));
      _0x47ddx2d = _0x47ddx2d.replace(":(", String.fromCodePoint(128577));
      _0x47ddx2d = _0x47ddx2d.replace(":p", String.fromCodePoint(128541));
      _0x47ddx2d = _0x47ddx2d.replace(":o", String.fromCodePoint(128562));
      _0x47ddx2d = _0x47ddx2d.replace(";)", String.fromCodePoint(128521));
      _0x47ddx2d = _0x47ddx2d.replace(":>", String.fromCodePoint(128535));
      _0x47ddx2d = _0x47ddx2d.replace(":$", String.fromCodePoint(129324));
      _0x47ddx2d = _0x47ddx2d.replace("love", String.fromCodePoint(128149));
      _0x47ddx2d = _0x47ddx2d.replace("okay", String.fromCodePoint(128077));
      _0x47ddx2d = _0x47ddx2d.replace("kiss", String.fromCodePoint(128139));
      _0x47ddx2d = _0x47ddx2d.replace("yarak", "***");
      _0x47ddx2d = _0x47ddx2d.replace("amcık", "***");
      _0x47ddx2d = _0x47ddx2d.replace("amc1", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikerim", "***");
      _0x47ddx2d = _0x47ddx2d.replace("siken", "***");
      _0x47ddx2d = _0x47ddx2d.replace("SİKEN", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikerler", "***");
      _0x47ddx2d = _0x47ddx2d.replace("xero", "***");
      _0x47ddx2d = _0x47ddx2d.replace("XERO", "***");
      _0x47ddx2d = _0x47ddx2d.replace("bot", "***");
      _0x47ddx2d = _0x47ddx2d.replace("BOT", "***");
      _0x47ddx2d = _0x47ddx2d.replace("discord", "***");
      _0x47ddx2d = _0x47ddx2d.replace("http", "***");
      _0x47ddx2d = _0x47ddx2d.replace("HTTP", "***");
      _0x47ddx2d = _0x47ddx2d.replace("orospu", "***");
      _0x47ddx2d = _0x47ddx2d.replace("yarrak", "***");
      _0x47ddx2d = _0x47ddx2d.replace("s1keyim", "***");
      _0x47ddx2d = _0x47ddx2d.replace("s1k", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ors", "***");
      _0x47ddx2d = _0x47ddx2d.replace("yarrağı", "***");
      _0x47ddx2d = _0x47ddx2d.replace("göt", "***");
      _0x47ddx2d = _0x47ddx2d.replace("fuck", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ATATÜRK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("parti", "***");
      _0x47ddx2d = _0x47ddx2d.replace("PARTİ", "***");
      _0x47ddx2d = _0x47ddx2d.replace("atatürk", "***");
      _0x47ddx2d = _0x47ddx2d.replace("fuck", "***");
      _0x47ddx2d = _0x47ddx2d.replace("FUCK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("FUCK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("allah", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ALLAH", "***");
      _0x47ddx2d = _0x47ddx2d.replace("HZ", "***");
      _0x47ddx2d = _0x47ddx2d.replace("hz", "***");
      _0x47ddx2d = _0x47ddx2d.replace("TAYYİP", "***");
      _0x47ddx2d = _0x47ddx2d.replace("RTE", "***");
      _0x47ddx2d = _0x47ddx2d.replace("RECEP", "***");
      _0x47ddx2d = _0x47ddx2d.replace("rte", "***");
      _0x47ddx2d = _0x47ddx2d.replace("FUCK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("FUCK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("tayyip", "***");
      _0x47ddx2d = _0x47ddx2d.replace("tayyıp", "***");
      _0x47ddx2d = _0x47ddx2d.replace("recep", "***");
      _0x47ddx2d = _0x47ddx2d.replace("skmek", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ananızı", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sıkmek", "***");
      _0x47ddx2d = _0x47ddx2d.replace("rec", "***");
      _0x47ddx2d = _0x47ddx2d.replace("REC", "***");
      _0x47ddx2d = _0x47ddx2d.replace("BOK", "***");
      _0x47ddx2d = _0x47ddx2d.replace("bok", "***");
      _0x47ddx2d = _0x47ddx2d.replace("Ass", "***");
      _0x47ddx2d = _0x47ddx2d.replace("Vagina", "***");
      _0x47ddx2d = _0x47ddx2d.replace("Bitch", "***");
      _0x47ddx2d = _0x47ddx2d.replace("Sucker", "***");
      _0x47ddx2d = _0x47ddx2d.replace("meme", "***");
      _0x47ddx2d = _0x47ddx2d.replace("yarak", "***");
      _0x47ddx2d = _0x47ddx2d.replace("yarağı", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sokam", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikem", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sik", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ANANIZI", "***");
      _0x47ddx2d = _0x47ddx2d.replace("gay", "***");
      _0x47ddx2d = _0x47ddx2d.replace("oç", "***");
      _0x47ddx2d = _0x47ddx2d.replace("o.ç", "***");
      _0x47ddx2d = _0x47ddx2d.replace("pkk", "!!!");
      _0x47ddx2d = _0x47ddx2d.replace("PKK", "!!!");
      _0x47ddx2d = _0x47ddx2d.replace("o.çocuğu", "***");
      _0x47ddx2d = _0x47ddx2d.replace("penis", "***");
      _0x47ddx2d = _0x47ddx2d.replace("ananı", "***");
      _0x47ddx2d = _0x47ddx2d.replace("anasını", "***");
      _0x47ddx2d = _0x47ddx2d.replace("amına", "***");
      _0x47ddx2d = _0x47ddx2d.replace("Siken", "***");
      _0x47ddx2d = _0x47ddx2d.replace("iken", "***");
      _0x47ddx2d = _0x47ddx2d.replace("İKEN", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sıktıgım", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sıkıyım", "***");
      _0x47ddx2d = _0x47ddx2d.replace("orspu", "***");
      _0x47ddx2d = _0x47ddx2d.replace("annenızın", "***");
      _0x47ddx2d = _0x47ddx2d.replace("anneni", "***");
      _0x47ddx2d = _0x47ddx2d.replace("skym", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikeyim", "***");
      _0x47ddx2d = _0x47ddx2d.replace("SİKEN", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikeyim", "***");
      _0x47ddx2d = _0x47ddx2d.replace("sikeyim", "***");
      _0x47ddx2d = _0x47ddx2d.replace("vagina", "***");
      return _0x47ddx2d;
    }
    ;
    (function () {
      var _0x47ddx30 = function (_0x47ddx31) {
        if (_0x47ddx31.keyCode === 69) {
          for (var _0x47ddx4 = 0; _0x47ddx4 < 10; ++_0x47ddx4) {
            setTimeout(function () {
              window.onkeydown({keyCode: 87});
              window.onkeyup({keyCode: 87});
            }, _0x47ddx4 * 50);
          }
        }
      };
      window.addEventListener("keydown", _0x47ddx30);
    }());
    function _0x47ddx32(_0x47ddx33) {}
    function _0x47ddx34(_0x47ddx33) {}
    function _0x47ddx35(_0x47ddx33) {}
    function _0x47ddx36(_0x47ddx23) {
      if (!_0x47ddxe4) {
        _0x47ddxf6 *= Math.pow(.9, _0x47ddx23.wheelDelta / -120 || _0x47ddx23.detail || 0);
        .4 > _0x47ddxf6 && (_0x47ddxf6 = .4);
        _0x47ddxf6 > 10 / _0x47ddxd6 && (_0x47ddxf6 = 10 / _0x47ddxd6);
      } else {
        _0x47ddxf6 *= Math.pow(.9, _0x47ddx23.wheelDelta / -120 || _0x47ddx23.detail || 0);
        .1 > _0x47ddxf6 && (_0x47ddxf6 = .1);
        _0x47ddxf6 > 4 / _0x47ddxd6 && (_0x47ddxf6 = 4 / _0x47ddxd6);
      }
    }
    function _0x47ddx37() {
      if (.4 > _0x47ddxd6) {
        _0x47ddxc0 = null;
      } else {
        var _0x47ddx38 = Number.POSITIVE_INFINITY, _0x47ddx39 = Number.POSITIVE_INFINITY, _0x47ddx3a = Number.NEGATIVE_INFINITY, _0x47ddx3b = Number.NEGATIVE_INFINITY, _0x47ddx33 = 0;
        for (var _0x47ddx4 = 0; _0x47ddx4 < _0x47ddxc7.length; _0x47ddx4++) {
          var _0x47ddx3c = _0x47ddxc7[_0x47ddx4];
          if (_0x47ddx3c.shouldRender() && !_0x47ddx3c.prepareData && 20 < _0x47ddx3c.size * _0x47ddxd6) {
            _0x47ddx33 = Math.max(_0x47ddx3c.size, _0x47ddx33);
            _0x47ddx38 = Math.min(_0x47ddx3c.x, _0x47ddx38);
            _0x47ddx39 = Math.min(_0x47ddx3c.y, _0x47ddx39);
            _0x47ddx3a = Math.max(_0x47ddx3c.x, _0x47ddx3a);
            _0x47ddx3b = Math.max(_0x47ddx3c.y, _0x47ddx3b);
          }
        }
        _0x47ddxc0 = _0x47ddx122.init({minX: _0x47ddx38 - (_0x47ddx33 + 100), minY: _0x47ddx39 - (_0x47ddx33 + 100), maxX: _0x47ddx3a + (_0x47ddx33 + 100), maxY: _0x47ddx3b + (_0x47ddx33 + 100), maxChildren: 2, maxDepth: 4});
        for (_0x47ddx4 = 0; _0x47ddx4 < _0x47ddxc7.length; _0x47ddx4++) {
          _0x47ddx3c = _0x47ddxc7[_0x47ddx4];
          if (_0x47ddx3c.shouldRender() && !(20 >= _0x47ddx3c.size * _0x47ddxd6)) {
            for (_0x47ddx38 = 0; _0x47ddx38 < _0x47ddx3c.points.length; ++_0x47ddx38) {
              _0x47ddx39 = _0x47ddx3c.points[_0x47ddx38].x;
              _0x47ddx3a = _0x47ddx3c.points[_0x47ddx38].y;
              _0x47ddx39 < _0x47ddxc2 - _0x47ddxbe / 2 / _0x47ddxd6 || _0x47ddx3a < _0x47ddxc3 - _0x47ddxbf / 2 / _0x47ddxd6 || _0x47ddx39 > _0x47ddxc2 + _0x47ddxbe / 2 / _0x47ddxd6 || _0x47ddx3a > _0x47ddxc3 + _0x47ddxbf / 2 / _0x47ddxd6 || _0x47ddxc0.insert(_0x47ddx3c.points[_0x47ddx38]);
            }
          }
        }
      }
    }
    function _0x47ddx3d() {
      _0x47ddxcd = (_0x47ddxcb - _0x47ddxbe / 2) / _0x47ddxd6 + _0x47ddxc2;
      _0x47ddxce = (_0x47ddxcc - _0x47ddxbf / 2) / _0x47ddxd6 + _0x47ddxc3;
    }
    function _0x47ddx3e() {
      _0x47ddxed = false;
      _0x47ddxb("#adsBottom").hide();
      _0x47ddxb("#overlays").hide();
      _0x47ddx4c();
    }
    function _0x47ddx3f(_0x47ddx38) {
      if (!SCodes) {
        return alert("Hata !");
      }
      zA = _0x47ddx38;
      if (_0x47ddx38 != _0x47ddxea) {
        _0x47ddxc = _0x47ddx38;
        _0x47ddxea = zA;
        _0x47ddx4e();
      }
      _0x47ddxb("#helloContainer").attr("data-gamemode", zA);
    }
    function _0x47ddx40(_0x47ddx38) {
      if (_0x47ddx38 && _0x47ddx38 != _0x47ddxd7) {
        if (_0x47ddxb("#region").val() != _0x47ddx38) {
          _0x47ddxb("#region").val(_0x47ddx38);
        }
        _0x47ddxd7 = _0x47ddxa.localStorage.location = _0x47ddx38;
        _0x47ddxb(".btn-needs-server").prop("disabled", false);
        _0x47ddxec && _0x47ddx4e();
      }
    }
    function _0x47ddx41(_0x47ddx42) {
      _0x47ddxed = true;
      _0x47ddxd1 = null;
      _0x47ddxb("#overlays").fadeIn(_0x47ddx42 ? 200 : 3e3);
      _0x47ddx42 || _0x47ddxb("#adsBottom").fadeIn(3e3);
    }
    function _0x47ddx43(_0x47ddx38) {
      _0x47ddx38 = ~~_0x47ddx38;
      var _0x47ddx39 = (_0x47ddx38 % 60).toString();
      _0x47ddx38 = (~~(_0x47ddx38 / 60)).toString();
      2 > _0x47ddx39.length && (_0x47ddx39 = "0" + _0x47ddx39);
      return _0x47ddx38 + ":" + _0x47ddx39;
    }
    function _0x47ddx44() {
      if (null == _0x47ddxc9) {
        return 0;
      }
      for (var _0x47ddx38 = 0; _0x47ddx38 < _0x47ddxc9.length; ++_0x47ddx38) {
        if (-1 != _0x47ddxc4.indexOf(_0x47ddxc9[_0x47ddx38].id)) {
          return _0x47ddx38 + 1;
        }
      }
      return 0;
    }
    function _0x47ddx45(_0x47ddx38, _0x47ddx39) {
      var _0x47ddx3a = -1 != _0x47ddxc4.indexOf(_0x47ddx38.id), _0x47ddx3b = -1 != _0x47ddxc4.indexOf(_0x47ddx39.id), _0x47ddx33 = 30 > _0x47ddx39.size;
      _0x47ddx3a && _0x47ddx33 && ++_0x47ddxdd;
      _0x47ddx33 || !_0x47ddx3a || _0x47ddx3b || ++_0x47ddxde;
      _0x47ddx33 || !_0x47ddx3a || _0x47ddx3b;
    }
    function _0x47ddx46(_0x47ddx3, _0x47ddx38) {
      if (_0x47ddx3.indexOf("{") != -1 && _0x47ddx3.indexOf("}") != -1) {
        var _0x47ddx5 = _0x47ddx3.indexOf("{");
        var _0x47ddx33 = _0x47ddx3.indexOf("}");
        var _0x47ddx3a = _0x47ddx3.slice(_0x47ddx33 + 1);
        if (_0x47ddx38) {
          if (_0x47ddx3a == "") {
            _0x47ddx3a = "Unnamed Cell";
          } else {
            _0x47ddx3a = _0x47ddx3.slice(_0x47ddx33 + 1);
          }
        }
        return [_0x47ddx3.slice(_0x47ddx5 + 1, _0x47ddx33), _0x47ddx3a];
      } else {
        return ["", _0x47ddx3];
      }
    }
    function _0x47ddx47() {
      _0x47ddxb(".stats-leaderboard-time").text(_0x47ddx43(_0x47ddxe0));
      _0x47ddxb(".stats-food-eaten").text(_0x47ddxdd);
      _0x47ddxb(".stats-highest-mass").text(~~(_0x47ddxdc / 100));
      _0x47ddxb(".stats-time-alive").text(_0x47ddx43((Date.now() - _0x47ddxf4) / 1e3));
      _0x47ddxb(".stats-cells-eaten").text(_0x47ddxde);
      _0x47ddxb(".stats-top-position").text(0 == _0x47ddxdf ? ":(" : _0x47ddxdf);
      var _0x47ddx38 = document.getElementById("statsGraph");
      if (_0x47ddx38) {
        var _0x47ddx39 = _0x47ddx38.getContext("2d"), _0x47ddx3a = _0x47ddx38.width, _0x47ddx38 = _0x47ddx38.height;
        _0x47ddx39.clearRect(0, 0, _0x47ddx3a, _0x47ddx38);
        if (2 < _0x47ddxf3.length) {
          for (var _0x47ddx3b = 200, _0x47ddx48 = 0; _0x47ddx48 < _0x47ddxf3.length; _0x47ddx48++) {
            _0x47ddx3b = Math.max(_0x47ddxf3[_0x47ddx48], _0x47ddx3b);
          }
          _0x47ddx39.lineWidth = 3;
          _0x47ddx39.lineCap = "round";
          _0x47ddx39.lineJoin = "round";
          _0x47ddx39.strokeStyle = Pa;
          _0x47ddx39.fillStyle = Pa;
          _0x47ddx39.beginPath();
          _0x47ddx39.moveTo(0, _0x47ddx38 - _0x47ddxf3[0] / _0x47ddx3b * (_0x47ddx38 - 10) + 10);
          for (_0x47ddx48 = 1; _0x47ddx48 < _0x47ddxf3.length; _0x47ddx48 += Math.max(~~(_0x47ddxf3.length / _0x47ddx3a), 1)) {
            for (var _0x47ddx3 = _0x47ddx48 / (_0x47ddxf3.length - 1) * _0x47ddx3a, _0x47ddx49 = [], _0x47ddx4a = -20; 20 >= _0x47ddx4a; ++_0x47ddx4a) {
              0 > _0x47ddx48 + _0x47ddx4a || _0x47ddx48 + _0x47ddx4a >= _0x47ddxf3.length || _0x47ddx49.push(_0x47ddxf3[_0x47ddx48 + _0x47ddx4a]);
            }
            _0x47ddx49 = _0x47ddx49.reduce(function (_0x47ddx38, _0x47ddx39) {
              return _0x47ddx38 + _0x47ddx39;
            }) / _0x47ddx49.length / _0x47ddx3b;
            _0x47ddx39.lineTo(_0x47ddx3, _0x47ddx38 - _0x47ddx49 * (_0x47ddx38 - 10) + 10);
          }
          _0x47ddx39.stroke();
          _0x47ddx39.globalAlpha = .5;
          _0x47ddx39.lineTo(_0x47ddx3a, _0x47ddx38);
          _0x47ddx39.lineTo(0, _0x47ddx38);
          _0x47ddx39.fill();
          _0x47ddx39.globalAlpha = 1;
        }
      }
    }
    function _0x47ddx41(_0x47ddx42, _0x47ddx4b) {
      _0x47ddxed = true;
      if (_0x47ddx4b == 1) {
        if (_0x47ddxe8 == false) {
          _0x47ddx47();
          _0x47ddxb("#statoverlay").show();
          _0x47ddxb("#stats").fadeIn(_0x47ddx42 ? 200 : 3e3);
        } else {
          _0x47ddxb("#overlays").fadeIn(_0x47ddx42 ? 200 : 3e3);
        }
      } else {
        _0x47ddxb("#overlays").fadeIn(_0x47ddx42 ? 200 : 3e3);
      }
      _0x47ddxd1 = null;
    }
    function _0x47ddx4c() {
      _0x47ddxb("#region").val() ? _0x47ddxa.localStorage.location = _0x47ddxb("#region").val() : _0x47ddxa.localStorage.location && _0x47ddxb("#region").val(_0x47ddxa.localStorage.location);
      _0x47ddxb("#region").val() ? _0x47ddxb(".locationKnown").append(_0x47ddxb("#region")) : _0x47ddxb("#locationUnknown").append(_0x47ddxb("#region"));
    }
    function _0x47ddx4d() {
      _0x47ddx4f("wss://" + _0x47ddxc);
    }
    function _0x47ddx4e() {
      if (_0x47ddxec && _0x47ddxd7) {
        _0x47ddxb("#connecting").show();
        _0x47ddx4d();
      }
    }
    function _0x47ddx4f(_0x47ddx50) {
      if (_0x47ddxc1) {
        _0x47ddxc1.onopen = null;
        _0x47ddxc1.onmessage = null;
        _0x47ddxc1.onclose = null;
        try {
          _0x47ddxc1.close();
        } catch (b) {}
        _0x47ddxc1 = null;
      }
      var _0x47ddx3a = _0x47ddxc;
      _0x47ddx50 = "wss://" + _0x47ddx3a + "?SCode=" + SCodes;
      _0x47ddxc4 = [];
      _0x47ddxc5 = [];
      _0x47ddxc6 = {};
      _0x47ddxc7 = [];
      _0x47ddxc8 = [];
      _0x47ddxc9 = [];
      _0x47ddxbb = _0x47ddxeb = null;
      _0x47ddxdc = 0;
      this.leaderdefault = "Leaderboard";
      this.lastWinner = "Leaderboard";
      this.countdown = 3600;
      _0x47ddxdd = 0;
      _0x47ddxf3 = [];
      _0x47ddxde = 0;
      _0x47ddxdf = 0;
      _0x47ddxe0 = 0;
      _0x47ddxc1 = new WebSocket(_0x47ddx50);
      _0x47ddxc1.binaryType = "arraybuffer";
      _0x47ddxc1.onopen = _0x47ddx54;
      _0x47ddxc1.onmessage = _0x47ddx57;
      _0x47ddxc1.onclose = _0x47ddx56;
      _0x47ddxc1.onerror = function (_0x47ddx51) {
        console.log("socket error" + _0x47ddx51);
      };
    }
    function _0x47ddx52(_0x47ddx38) {
      return new DataView(new ArrayBuffer(_0x47ddx38));
    }
    function _0x47ddx53(_0x47ddx38) {
      _0x47ddxc1.send(_0x47ddx38.buffer);
    }
    function _0x47ddx54() {
      var _0x47ddx55;
      _0x47ddxfe = 100;
      _0x47ddxb("#connecting").hide();
      console.log("socket open");
      _0x47ddx55 = _0x47ddx52(5);
      _0x47ddx55.setUint8(0, 254);
      _0x47ddx55.setUint32(1, 5, true);
      _0x47ddx53(_0x47ddx55);
      _0x47ddx55 = _0x47ddx52(5);
      _0x47ddx55.setUint8(0, 255);
      _0x47ddx55.setUint32(1, 123456789, true);
      _0x47ddx53(_0x47ddx55);
      _0x47ddx77();
    }
    function _0x47ddx56() {
      console.log("socket close");
      setTimeout(_0x47ddx4e, 500);
      _0x47ddxfe *= 1.5;
    }
    function _0x47ddx57(_0x47ddx55) {
      _0x47ddx58(new DataView(_0x47ddx55.data));
    }
    function _0x47ddx58(_0x47ddx55) {
      function _0x47ddx59() {
        var _0x47ddx29 = "", _0x47ddx5a;
        while ((_0x47ddx5a = _0x47ddx55.getUint16(_0x47ddx5b, true)) != 0) {
          _0x47ddx5b += 2;
          _0x47ddx29 += String.fromCharCode(_0x47ddx5a);
        }
        _0x47ddx5b += 2;
        return _0x47ddx29;
      }
      var _0x47ddx5b = 0, _0x47ddx5c = false;
      240 == _0x47ddx55.getUint8(_0x47ddx5b) && (_0x47ddx5b += 5);
      switch (_0x47ddx55.getUint8(_0x47ddx5b++)) {
        case 185:
          _0x47ddx69(_0x47ddx55, _0x47ddx5b);
          break;
        case 17:
          _0x47ddx71 = _0x47ddx55.getFloat32(_0x47ddx5b, true);
          _0x47ddx5b += 4;
          _0x47ddx70 = _0x47ddx55.getFloat32(_0x47ddx5b, true);
          _0x47ddx5b += 4;
          _0x47ddxe9 = _0x47ddx55.getFloat32(_0x47ddx5b, true);
          _0x47ddx5b += 4;
          break;
        case 20:
          _0x47ddxc5 = [];
          _0x47ddxc4 = [];
          break;
        case 21:
          _0x47ddxef = _0x47ddx55.getInt16(_0x47ddx5b, true);
          _0x47ddx5b += 2;
          _0x47ddxf0 = _0x47ddx55.getInt16(_0x47ddx5b, true);
          _0x47ddx5b += 2;
          if (!_0x47ddxee) {
            _0x47ddxee = true;
            _0x47ddxf1 = _0x47ddxef;
            _0x47ddxf2 = _0x47ddxf0;
          }
          break;
        case 32:
          _0x47ddxc4.push(_0x47ddx55.getUint32(_0x47ddx5b, true));
          _0x47ddx5b += 4;
          break;
        case 48:
          _0x47ddx5c = true;
          _0x47ddxfa = true;
          break;
        case 49:
          if (!_0x47ddx5c) {
            _0x47ddxfa = false;
          }
          _0x47ddxeb = null;
          var _0x47ddx5d = _0x47ddx55.getUint32(_0x47ddx5b, true);
          _0x47ddx5b += 4;
          _0x47ddxc9 = [];
          for (_0x47ddx4 = 0; _0x47ddx4 < _0x47ddx5d; ++_0x47ddx4) {
            var _0x47ddx5e = _0x47ddx55.getUint32(_0x47ddx5b, true);
            _0x47ddx5b += 4;
            _0x47ddxc9.push({id: _0x47ddx5e, name: _0x47ddx59()});
          }
          _0x47ddxa4();
          break;
        case 50:
          _0x47ddxeb = [];
          var _0x47ddx5f = _0x47ddx55.getUint32(_0x47ddx5b, true);
          _0x47ddx5b += 4;
          for (var _0x47ddx4 = 0; _0x47ddx4 < _0x47ddx5f; ++_0x47ddx4) {
            _0x47ddxeb.push(_0x47ddx55.getFloat32(_0x47ddx5b, true));
            _0x47ddx5b += 4;
          }
          _0x47ddxa4();
          break;
        case 64:
          _0x47ddxd2 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          _0x47ddxd3 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          _0x47ddxd4 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          _0x47ddxd5 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          _0x47ddx71 = (_0x47ddxd4 + _0x47ddxd2) / 2;
          _0x47ddx70 = (_0x47ddxd5 + _0x47ddxd3) / 2;
          _0x47ddxe9 = 1;
          if (0 == _0x47ddxc5.length) {
            _0x47ddxc2 = _0x47ddx71;
            _0x47ddxc3 = _0x47ddx70;
            _0x47ddxd6 = _0x47ddxe9;
          }
          break;
        case 90:
          var _0x47ddx60 = new Date - latency;
          $("#latency").html("Latency " + _0x47ddx60 + " ms;");
          var _0x47ddx61 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          $("#uptime").html("Uptime " + _0x47ddx61 + " sec;");
          var _0x47ddx62 = _0x47ddx55.getFloat64(_0x47ddx5b, true);
          _0x47ddx5b += 8;
          $("#onlineplayers").html("Players " + _0x47ddx62 + ";");
          break;
        case 199:
          _0x47ddx64(_0x47ddx55, _0x47ddx5b);
          break;
        case 96:
          this.countdown = _0x47ddx55.getUint16(_0x47ddx5b, true);
          break;
        case 97:
          this.lastWinner = "";
          this.lastWinner = _0x47ddx59();
          if (this.lastWinner == "") {
            this.lastWinner = this.leaderdefault;
          }
          this.lastWinner = _0x47ddx46(this.lastWinner.split("*")[0])[1];
          break;
      }
    }
    function _0x47ddx64(_0x47ddx65, _0x47ddx5b) {
      function _0x47ddx59() {
        var _0x47ddx29 = "", _0x47ddx5a;
        while ((_0x47ddx5a = _0x47ddx65.getUint16(_0x47ddx5b, true)) != 0) {
          _0x47ddx5b += 2;
          _0x47ddx29 += String.fromCharCode(_0x47ddx5a);
        }
        _0x47ddx5b += 2;
        return _0x47ddx29;
      }
      var _0x47ddx66 = _0x47ddx65.getUint8(_0x47ddx5b++);
      if (_0x47ddx66 & 2) {
        _0x47ddx5b += 4;
      }
      if (_0x47ddx66 & 4) {
        _0x47ddx5b += 8;
      }
      if (_0x47ddx66 & 8) {
        _0x47ddx5b += 16;
      }
      var _0x47ddx49 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx67 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx39 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx68 = (_0x47ddx49 << 16 | _0x47ddx67 << 8 | _0x47ddx39).toString(16);
      while (_0x47ddx68.length > 6) {
        _0x47ddx68 = "0" + _0x47ddx68;
      }
      _0x47ddx68 = "#" + _0x47ddx68;
      name = _0x47ddx46(_0x47ddx59())[1];
      if (name == "") {
        name = "Unnamed Cell";
      }
      _0x47ddxca.push({name: name, color: _0x47ddx68, message: _0x47ddx59(), time: Date.now()});
    }
    function _0x47ddx69(_0x47ddx65, _0x47ddx5b) {
      _0x47ddxd0 = +new Date;
      var _0x47ddx6a = Math.random();
      _0x47ddxdb = false;
      var _0x47ddx6b = _0x47ddx65.getUint16(_0x47ddx5b, true);
      _0x47ddx5b += 2;
      for (_0x47ddx4 = 0; _0x47ddx4 < _0x47ddx6b; ++_0x47ddx4) {
        var _0x47ddx6c = _0x47ddxc6[_0x47ddx65.getUint32(_0x47ddx5b, true)], _0x47ddx6d = _0x47ddxc6[_0x47ddx65.getUint32(_0x47ddx5b + 4, true)];
        _0x47ddx5b += 8;
        if (_0x47ddx6c && _0x47ddx6d) {
          _0x47ddx6d.destroy();
          _0x47ddx6d.ox = _0x47ddx6d.x;
          _0x47ddx6d.oy = _0x47ddx6d.y;
          _0x47ddx6d.oSize = _0x47ddx6d.size;
          _0x47ddx6d.nx = _0x47ddx6c.x;
          _0x47ddx6d.ny = _0x47ddx6c.y;
          _0x47ddx6d.nSize = _0x47ddx6d.size;
          _0x47ddx6d.updateTime = _0x47ddxd0;
          _0x47ddx45(_0x47ddx6c, _0x47ddx6d);
        }
      }
      for (var _0x47ddx4 = 0;;) {
        var _0x47ddx6e = _0x47ddx65.getUint32(_0x47ddx5b, true);
        _0x47ddx5b += 4;
        if (0 == _0x47ddx6e) {
          break;
        }
        ++_0x47ddx4;
        var _0x47ddx6f, _0x47ddx70, _0x47ddx71 = _0x47ddx65.getInt16(_0x47ddx5b, true);
        _0x47ddx5b += 2;
        _0x47ddx70 = _0x47ddx65.getInt16(_0x47ddx5b, true);
        _0x47ddx5b += 2;
        _0x47ddx6f = _0x47ddx65.getInt16(_0x47ddx5b, true);
        _0x47ddx5b += 2;
        for (var _0x47ddx49 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx67 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx39 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx68 = (_0x47ddx49 << 16 | _0x47ddx67 << 8 | _0x47ddx39).toString(16); 6 > _0x47ddx68.length;) {
          _0x47ddx68 = "0" + _0x47ddx68;
        }
        var _0x47ddx72 = "#" + _0x47ddx68, _0x47ddx66 = _0x47ddx65.getUint8(_0x47ddx5b++), _0x47ddx73 = !!(_0x47ddx66 & 1), _0x47ddx74 = !!(_0x47ddx66 & 16);
        _0x47ddx66 & 2 && (_0x47ddx5b += 4);
        _0x47ddx66 & 4 && (_0x47ddx5b += 8);
        _0x47ddx66 & 8 && (_0x47ddx5b += 16);
        for (var _0x47ddx5a, _0x47ddx75 = "";;) {
          _0x47ddx5a = _0x47ddx65.getUint16(_0x47ddx5b, true);
          _0x47ddx5b += 2;
          if (0 == _0x47ddx5a) {
            break;
          }
          _0x47ddx75 += String.fromCharCode(_0x47ddx5a);
        }
        var _0x47ddx3c = null;
        if (_0x47ddxc6.hasOwnProperty(_0x47ddx6e)) {
          _0x47ddx3c = _0x47ddxc6[_0x47ddx6e];
          _0x47ddx3c.updatePos();
          _0x47ddx3c.ox = _0x47ddx3c.x;
          _0x47ddx3c.oy = _0x47ddx3c.y;
          _0x47ddx3c.oSize = _0x47ddx3c.size;
          _0x47ddx3c.color = _0x47ddx72;
        } else {
          _0x47ddx3c = new _0x47ddxae(_0x47ddx6e, _0x47ddx71, _0x47ddx70, _0x47ddx6f, _0x47ddx72, _0x47ddx75);
          _0x47ddxc7.push(_0x47ddx3c);
          _0x47ddx3c.ka = _0x47ddx71;
          _0x47ddx3c.la = _0x47ddx70;
        }
        _0x47ddx3c.isVirus = _0x47ddx73;
        _0x47ddx3c.isAgitated = _0x47ddx74;
        _0x47ddx3c.nx = _0x47ddx71;
        _0x47ddx3c.ny = _0x47ddx70;
        _0x47ddx3c.nSize = _0x47ddx6f;
        _0x47ddx3c.updateCode = _0x47ddx6a;
        _0x47ddx3c.updateTime = _0x47ddxd0;
        _0x47ddx3c.flag = _0x47ddx66;
        _0x47ddx75 && _0x47ddx3c.setName(_0x47ddx75);
        if (-1 != _0x47ddxc4.indexOf(_0x47ddx6e) && -1 == _0x47ddxc5.indexOf(_0x47ddx3c)) {
          document.getElementById("overlays").style.display = "none";
          _0x47ddxc5.push(_0x47ddx3c);
          if (1 == _0x47ddxc5.length) {
            _0x47ddxc2 = _0x47ddx3c.x;
            _0x47ddxc3 = _0x47ddx3c.y;
          }
        }
      }
      _0x47ddx6b = _0x47ddx65.getUint32(_0x47ddx5b, true);
      _0x47ddx5b += 4;
      for (_0x47ddx4 = 0; _0x47ddx4 < _0x47ddx6b; _0x47ddx4++) {
        var _0x47ddx5e = _0x47ddx65.getUint32(_0x47ddx5b, true);
        _0x47ddx5b += 4;
        _0x47ddx3c = _0x47ddxc6[_0x47ddx5e];
        null != _0x47ddx3c && _0x47ddx3c.destroy();
      }
      _0x47ddxdb && 0 == _0x47ddxc5.length && _0x47ddx41(false, 1);
    }
    function _0x47ddx76() {
      var _0x47ddx55;
      if (null != _0x47ddxc1 && _0x47ddxc1.readyState == _0x47ddxc1.OPEN && Sfreeze != true) {
        _0x47ddx55 = _0x47ddxcb - _0x47ddxbe / 2;
        var _0x47ddx39 = _0x47ddxcc - _0x47ddxbf / 2;
        if (64 <= _0x47ddx55 * _0x47ddx55 + _0x47ddx39 * _0x47ddx39 && !(.01 > Math.abs(_0x47ddxff - _0x47ddxcd) && .01 > Math.abs(_0x47ddx100 - _0x47ddxce))) {
          _0x47ddxff = _0x47ddxcd;
          _0x47ddx100 = _0x47ddxce;
          _0x47ddx55 = _0x47ddx52(21);
          _0x47ddx55.setUint8(0, 185);
          _0x47ddx55.setFloat64(1, _0x47ddxcd, true);
          _0x47ddx55.setFloat64(9, _0x47ddxce, true);
          _0x47ddx55.setUint32(17, 0, true);
          _0x47ddx53(_0x47ddx55);
        }
      }
    }
    function _0x47ddx77() {
      _0x47ddxd1 = _0x47ddx2b(_0x47ddxd1);
      if (null != _0x47ddxc1 && _0x47ddxc1.readyState == _0x47ddxc1.OPEN && null != _0x47ddxd1) {
        var _0x47ddx55 = _0x47ddx52(1 + 2 * _0x47ddxd1.length);
        _0x47ddx55.setUint8(0, 129);
        for (var _0x47ddx4 = 0; _0x47ddx4 < _0x47ddxd1.length; ++_0x47ddx4) {
          _0x47ddx55.setUint16(1 + 2 * _0x47ddx4, _0x47ddxd1.charCodeAt(_0x47ddx4), true);
        }
        _0x47ddx53(_0x47ddx55);
      }
    }
    function _0x47ddx78() {
      m = _0x47ddxa.innerWidth;
      q = _0x47ddxa.innerHeight;
      canvas.width = canvas.width = m;
      canvas.height = canvas.height = q;
      var _0x47ddx38 = _0x47ddxb("#helloContainer");
      _0x47ddx38.css("transform", "none");
      var _0x47ddx3a = _0x47ddxa.innerHeight;
      660 > _0x47ddx3a / 1.1 ? _0x47ddx38.css("transform", "translate(-50%, -50%) scale(" + _0x47ddx3a / 660 / 1.1 + ")") : _0x47ddx38.css("transform", "translate(-50%, -50%)");
    }
    function _0x47ddx79(_0x47ddx7a) {
      if (null != _0x47ddxc1 && _0x47ddxc1.readyState == _0x47ddxc1.OPEN && _0x47ddx7a.length < 200 && _0x47ddx7a.length > 0) {
        var _0x47ddx55 = _0x47ddx52(4 + 2 * _0x47ddx7a.length);
        var _0x47ddx5b = 0;
        _0x47ddx55.setUint8(_0x47ddx5b++, 199);
        _0x47ddx55.setUint8(_0x47ddx5b++, 0);
        for (var _0x47ddx4 = 0; _0x47ddx4 < _0x47ddx7a.length; ++_0x47ddx4) {
          _0x47ddx55.setUint16(_0x47ddx5b, _0x47ddx7a.charCodeAt(_0x47ddx4), true);
          _0x47ddx5b += 2;
        }
        _0x47ddx55.setUint16(_0x47ddx5b, 57344, true);
        _0x47ddx53(_0x47ddx55);
      }
    }
    function _0x47ddx7c(_0x47ddx38) {
      if (null != _0x47ddxc1 && _0x47ddxc1.readyState == _0x47ddxc1.OPEN) {
        var _0x47ddx55 = _0x47ddx52(1);
        _0x47ddx55.setUint8(0, _0x47ddx38);
        _0x47ddx53(_0x47ddx55);
      }
    }
    function _0x47ddx7d() {
      _0x47ddx85();
      _0x47ddxa.requestAnimationFrame(_0x47ddx7d);
    }
    function _0x47ddx7e() {
      window.scrollTo(0, 0);
      _0x47ddxbe = _0x47ddxa.innerWidth;
      _0x47ddxbf = _0x47ddxa.innerHeight;
      _0x47ddxba.width = _0x47ddxbe;
      _0x47ddxba.height = _0x47ddxbf;
      var _0x47ddx7f = _0x47ddxb("#helloDialog");
      _0x47ddx7f.css("transform", "none");
      var _0x47ddx80 = _0x47ddx7f.height();
      _0x47ddx80 > _0x47ddxbf / 1.1 ? _0x47ddx7f.css("transform", "translate(-50%, -50%) scale(" + _0x47ddxbf / _0x47ddx80 / 1.1 + ")") : _0x47ddx7f.css("transform", "translate(-50%, -50%)");
      _0x47ddx85();
    }
    function _0x47ddx81() {
      var _0x47ddx82;
      _0x47ddx82 = Math.max(_0x47ddxbf / 1080, _0x47ddxbe / 1920);
      return _0x47ddx82 * _0x47ddxf6;
    }
    function _0x47ddx83() {
      if (0 != _0x47ddxc5.length) {
        for (var _0x47ddx84 = 0, _0x47ddx4 = 0; _0x47ddx4 < _0x47ddxc5.length; _0x47ddx4++) {
          _0x47ddx84 += _0x47ddxc5[_0x47ddx4].size;
        }
        _0x47ddx84 = Math.pow(Math.min(64 / _0x47ddx84, 1), .4) * _0x47ddx81();
        _0x47ddxd6 = (9 * _0x47ddxd6 + _0x47ddx84) / 10;
      }
    }
    function _0x47ddx85() {
      var _0x47ddx38, _0x47ddx86 = Date.now();
      ++_0x47ddxcf;
      var _0x47ddx87 = Date.now() - _0x47ddxfc;
      if (_0x47ddx87 > 50) {
        _0x47ddxfc = Date.now();
        _0x47ddx76();
      }
      _0x47ddxd0 = _0x47ddx86;
      if (0 < _0x47ddxc5.length) {
        _0x47ddx83();
        var _0x47ddx3a = _0x47ddx38 = 0;
        for (var _0x47ddx3b = 0; _0x47ddx3b < _0x47ddxc5.length; _0x47ddx3b++) {
          _0x47ddxc5[_0x47ddx3b].updatePos();
          _0x47ddx38 += _0x47ddxc5[_0x47ddx3b].x / _0x47ddxc5.length;
          _0x47ddx3a += _0x47ddxc5[_0x47ddx3b].y / _0x47ddxc5.length;
        }
        _0x47ddx71 = _0x47ddx38;
        _0x47ddx70 = _0x47ddx3a;
        _0x47ddxe9 = _0x47ddxd6;
        _0x47ddxc2 = (_0x47ddxc2 + _0x47ddx38) / 2;
        _0x47ddxc3 = (_0x47ddxc3 + _0x47ddx3a) / 2;
      } else {
        _0x47ddxc2 = (29 * _0x47ddxc2 + _0x47ddx71) / 30;
        _0x47ddxc3 = (29 * _0x47ddxc3 + _0x47ddx70) / 30;
        _0x47ddxd6 = (9 * _0x47ddxd6 + _0x47ddxe9 * _0x47ddx81()) / 10;
      }
      _0x47ddx37();
      _0x47ddx3d();
      _0x47ddxa9.fillStyle = _0x47ddxe1 ? "#111111" : "#F2FBFF";
      _0x47ddxa9.fillRect(0, 0, _0x47ddxbe, _0x47ddxbf);
      _0x47ddxc7.sort(function (_0x47ddx38, _0x47ddx39) {
        return _0x47ddx38.size == _0x47ddx39.size ? _0x47ddx38.id - _0x47ddx39.id : _0x47ddx38.size - _0x47ddx39.size;
      });
      _0x47ddxa9.save();
      _0x47ddxa9.translate(_0x47ddxbe / 2, _0x47ddxbf / 2);
      _0x47ddxa9.scale(_0x47ddxd6, _0x47ddxd6);
      _0x47ddxa9.translate(-_0x47ddxc2, -_0x47ddxc3);
      if (_0x47ddxe6 == true) {
        _0x47ddxa9.globalAlpha = .6;
      } else {
        _0x47ddxa9.globalAlpha = 1;
      }
      for (_0x47ddx3b = 0; _0x47ddx3b < _0x47ddxc7.length; _0x47ddx3b++) {
        _0x47ddxc7[_0x47ddx3b].drawOneCell(_0x47ddxa9);
      }
      if (_0x47ddxee) {
        _0x47ddxf1 = (3 * _0x47ddxf1 + _0x47ddxef) / 4;
        _0x47ddxf2 = (3 * _0x47ddxf2 + _0x47ddxf0) / 4;
        _0x47ddxa9.save();
        _0x47ddxa9.strokeStyle = "#FFAAAA";
        _0x47ddxa9.lineWidth = 10;
        _0x47ddxa9.lineCap = "round";
        _0x47ddxa9.lineJoin = "round";
        _0x47ddxa9.globalAlpha = .5;
        _0x47ddxa9.beginPath();
        for (_0x47ddx3b = 0; _0x47ddx3b < _0x47ddxc5.length; _0x47ddx3b++) {
          _0x47ddxa9.moveTo(_0x47ddxc5[_0x47ddx3b].x, _0x47ddxc5[_0x47ddx3b].y);
          _0x47ddxa9.lineTo(_0x47ddxf1, _0x47ddxf2);
        }
        _0x47ddxa9.restore();
      }
      _0x47ddxa9.strokeStyle = "#FF0000";
      _0x47ddxa9.lineWidth = 50;
      _0x47ddxa9.lineCap = "round";
      _0x47ddxa9.lineJoin = "round";
      _0x47ddxa9.beginPath();
      _0x47ddxa9.moveTo(_0x47ddxd2, _0x47ddxd3);
      _0x47ddxa9.lineTo(_0x47ddxd4, _0x47ddxd3);
      _0x47ddxa9.lineTo(_0x47ddxd4, _0x47ddxd5);
      _0x47ddxa9.lineTo(_0x47ddxd2, _0x47ddxd5);
      _0x47ddxa9.closePath();
      _0x47ddxa9.stroke();
      _0x47ddxa9.restore();
      _0x47ddxa9.globalAlpha = 1;
      _0x47ddxa9.fillStyle = "#0000FF";
      _0x47ddxa9.font = "bold 32px Ubuntu";
      if (this.countdown < 3600) {
        var _0x47ddx88 = "";
        var _0x47ddx89 = "";
        var _0x47ddx8a = Math.floor(this.countdown / 60);
        if (_0x47ddx8a < 10) {
          _0x47ddx88 += "0";
        }
        _0x47ddx88 += _0x47ddx8a + ":";
        var _0x47ddx8b = this.countdown % 60;
        if (_0x47ddx8b < 10) {
          _0x47ddx88 += "0";
        }
        _0x47ddx88 += _0x47ddx8b;
        if (this.countdown < 60) {
          _0x47ddx89 = " sec";
        } else {
          _0x47ddx89 = " min";
        }
        $("#countdown").html("Restart in " + _0x47ddx88 + _0x47ddx89);
      }
      _0x47ddxbc && _0x47ddxbc.width && _0x47ddxa9.drawImage(_0x47ddxbc, _0x47ddxbe - _0x47ddxbc.width - 10, 10);
      if (!_0x47ddxe7) {
        if (_0x47ddxbd != null && _0x47ddxbd.width > 0) {
          _0x47ddxa9.drawImage(_0x47ddxbd, 0, _0x47ddxbf - _0x47ddxbd.height - 50);
        }
      }
      var _0x47ddx8c = _0x47ddxa0();
      _0x47ddxdc = Math.max(_0x47ddxdc, _0x47ddxa0());
      if (0 != _0x47ddxdc) {
        _0x47ddxa9.globalAlpha = .8;
        if (_0x47ddxe1 == true) {
          _0x47ddxa9.fillStyle = "#FFFFFF";
        } else {
          _0x47ddxa9.fillStyle = "#000000";
        }
        _0x47ddxa9.font = "bold 24px Ubuntu";
        var _0x47ddx8d = document.getElementsByTagName("html")[0].getAttribute("lang");
        if (_0x47ddx8d == "tr") {
          _0x47ddxa9.fillText("Skor: " + ~~(_0x47ddx8c / 100), 10, 34);
          _0x47ddxa9.fillText("Max.: " + ~~(_0x47ddxdc / 100), 10, 60);
        } else {
          _0x47ddxa9.fillText("Score: " + ~~(_0x47ddx8c / 100), 10, 34);
          _0x47ddxa9.fillText("Max.: " + ~~(_0x47ddxdc / 100), 10, 60);
        }
      }
      if (!_0x47ddxe7) {
        var _0x47ddx8e = 0;
        for (var _0x47ddx4 = _0x47ddxca.length - 1; _0x47ddx4 >= 0; _0x47ddx4--) {
          _0x47ddx8e++;
          if (_0x47ddx8e > 15) {
            break;
          }
          var _0x47ddx75 = _0x47ddxca[_0x47ddx4].name.trim();
          if (_0x47ddx75 == "") {
            _0x47ddx75 = "Unnamed Cell";
          }
          var _0x47ddx8f = _0x47ddxca[_0x47ddx4].message.trim();
          var _0x47ddx7a = _0x47ddx8f.toLowerCase();
          var _0x47ddx90 = " : " + _0x47ddx7a;
          _0x47ddxa9.font = "17px Arial";
          _0x47ddxca[_0x47ddx4].name_x = 15;
          _0x47ddxca[_0x47ddx4].name_y = _0x47ddxbf - 30 - 20 * _0x47ddx8e;
          _0x47ddxca[_0x47ddx4].name_w = _0x47ddxa9.measureText(_0x47ddx75).width;
          _0x47ddxca[_0x47ddx4].name_h = 18;
          _0x47ddxca[_0x47ddx4].msg_x = 15 + _0x47ddxca[_0x47ddx4].name_w;
          _0x47ddxca[_0x47ddx4].msg_y = _0x47ddxca[_0x47ddx4].name_y;
          _0x47ddxca[_0x47ddx4].msg_w = _0x47ddxa9.measureText(_0x47ddx90).width;
          _0x47ddxca[_0x47ddx4].msg_h = _0x47ddxca[_0x47ddx4].name_h;
          _0x47ddxa9.fillStyle = _0x47ddxca[_0x47ddx4].color;
          _0x47ddxa9.fillText(_0x47ddx75, _0x47ddxca[_0x47ddx4].name_x, _0x47ddxca[_0x47ddx4].name_y);
          if (_0x47ddxe1 == true) {
            _0x47ddxa9.fillStyle = "#FFFFFF";
          } else {
            _0x47ddxa9.fillStyle = "#000000";
          }
          _0x47ddxa9.fillText(_0x47ddx90, _0x47ddxca[_0x47ddx4].msg_x, _0x47ddxca[_0x47ddx4].msg_y);
        }
      }
      if (!_0x47ddx1f) {
        _0x47ddx92();
      }
      var _0x47ddx91 = Date.now() - _0x47ddx86;
      _0x47ddx91 > 16.666666666666668 ? _0x47ddx102 -= .01 : _0x47ddx91 < 15.384615384615385 && (_0x47ddx102 += .01);
      .4 > _0x47ddx102 && (_0x47ddx102 = .4);
      1 < _0x47ddx102 && (_0x47ddx102 = 1);
    }
    function _0x47ddx92() {
      if (_0x47ddxc5.length == 0 || false) {
        return;
      }
      _0x47ddxa9.save();
      function _0x47ddx93(_0x47ddx38, _0x47ddx39) {
        return !_0x47ddx39 ? _0x47ddx38 : _0x47ddx93(_0x47ddx39, _0x47ddx38 % _0x47ddx39);
      }
      _0x47ddxa9.beginPath();
      _0x47ddxa9.fillStyle = "rgba(0,0,0,.25)";
      var _0x47ddx6f = _0x47ddx1f ? 150 : 200;
      _0x47ddxa9.lineWidth = 1.5;
      var _0x47ddx94 = _0x47ddxbe - _0x47ddx6f - 10;
      var _0x47ddx95 = _0x47ddxbf - _0x47ddx6f - 5;
      _0x47ddxa9.rect(_0x47ddx94, _0x47ddx95, _0x47ddx6f, _0x47ddx6f);
      _0x47ddxa9.lineWidth = 1.25;
      var _0x47ddx96 = _0x47ddxc2 / (_0x47ddxd4 - _0x47ddxd2);
      var _0x47ddx97 = _0x47ddxc3 / (_0x47ddxd5 - _0x47ddxd3);
      var _0x47ddx71 = _0x47ddx96 * _0x47ddx6f + _0x47ddx94 + _0x47ddx6f / 2 - 100;
      var _0x47ddx70 = _0x47ddx97 * _0x47ddx6f + _0x47ddx95 + _0x47ddx6f / 2 - 100;
      var _0x47ddx98 = bh = _0x47ddx6f;
      var _0x47ddx99 = -1;
      var _0x47ddx9a = -1;
      for (var _0x47ddx13 = 0; _0x47ddx13 <= _0x47ddx98; _0x47ddx13 += 40) {
        if (_0x47ddx13 != _0x47ddx98) {
          var _0x47ddxf = .5 + _0x47ddx13 + _0x47ddx94;
          var _0x47ddx10 = _0x47ddx95;
          if (_0x47ddxe(_0x47ddxf, _0x47ddx10, _0x47ddxf + 40, _0x47ddx10 + bh, _0x47ddx71, _0x47ddx70)) {
            _0x47ddx99 = _0x47ddxf;
          }
          if (_0x47ddx13 == 0) {
            continue;
          }
          _0x47ddxa9.moveTo(.5 + _0x47ddx13 + _0x47ddx94, _0x47ddx95);
          _0x47ddxa9.lineTo(.5 + _0x47ddx13 + _0x47ddx94, bh + _0x47ddx95);
        }
        if (_0x47ddxe1 == true) {
          _0x47ddxa9.fillStyle = "#FFFFFF";
        } else {
          _0x47ddxa9.fillStyle = "#000000";
        }
        _0x47ddxa9.font = "700 18px nunito";
        _0x47ddxa9.textAlign = "center";
        _0x47ddxa9.strokeStyle = "white";
        _0x47ddxa9.lineWidth = 1;
        _0x47ddxa9.globalAlpha = .35;
        for (var _0x47ddx4 = 0; _0x47ddx4 < 5; _0x47ddx4++) {
          _0x47ddxa9.fillText(String.fromCharCode(_0x47ddx4 + 65) + _0x47ddx13 / 40, .5 + _0x47ddx13 + _0x47ddx94 - 20, _0x47ddx95 + 25.5 + _0x47ddx4 * 40);
        }
      }
      for (var _0x47ddx14 = 0; _0x47ddx14 <= bh; _0x47ddx14 += 40) {
        if (_0x47ddx14 != bh) {
          var _0x47ddxf = _0x47ddx94;
          var _0x47ddx10 = .5 + _0x47ddx14 + _0x47ddx95;
          if (_0x47ddxe(_0x47ddxf, _0x47ddx10, _0x47ddxf + _0x47ddx98, _0x47ddx10 + 40, _0x47ddx71, _0x47ddx70)) {
            _0x47ddx9a = _0x47ddx10;
          }
          if (_0x47ddx14 == 0) {
            continue;
          }
          _0x47ddxa9.moveTo(_0x47ddx94, .5 + _0x47ddx14 + _0x47ddx95);
          _0x47ddxa9.lineTo(_0x47ddx98 + _0x47ddx94, .5 + _0x47ddx14 + _0x47ddx95);
        }
      }
      if (_0x47ddxc5.length > 0 && _0x47ddx99 > -1 && _0x47ddx9a > -1) {
        _0x47ddxa9.fillStyle = "#ccff00";
        _0x47ddxa9.globalAlpha = .3;
        _0x47ddxa9.fillRect(_0x47ddx99, _0x47ddx9a, 40, 40);
      }
      _0x47ddxa9.globalAlpha = 1;
      _0x47ddxa9.strokeStyle = "rgba(238,0,17,.2)";
      _0x47ddxa9.stroke();
      _0x47ddxa9.closePath();
      for (var _0x47ddx4 = 0; _0x47ddx4 < _0x47ddxc5.length; _0x47ddx4++) {
        var _0x47ddx9b = _0x47ddxc5[_0x47ddx4];
        var _0x47ddx9c = _0x47ddx9b.ox / (_0x47ddxd4 - _0x47ddxd2);
        var _0x47ddx9d = _0x47ddx9b.oy / (_0x47ddxd5 - _0x47ddxd3);
        var _0x47ddx13 = _0x47ddx9c * _0x47ddx6f + _0x47ddx94 + _0x47ddx6f / 2 - 100;
        var _0x47ddx14 = _0x47ddx9d * _0x47ddx6f + _0x47ddx95 + _0x47ddx6f / 2 - 100;
        var _0x47ddx8c = Math.max(2, _0x47ddx9b.size / (_0x47ddx6f / 2));
        _0x47ddxa9.fillStyle = _0x47ddx9b.color;
        if (_0x47ddx4 == 0) {
          _0x47ddxa9.font = "bold " + (14 + _0x47ddx8c) + "px Ubuntu";
          var _0x47ddx9e = _0x47ddxa9.measureText(_0x47ddx9b.name);
          _0x47ddxa9.strokestyle = "black";
        }
        _0x47ddxa9.beginPath();
        _0x47ddxa9.strokeStyle = "black";
        _0x47ddxa9.lineWidth = 1;
        _0x47ddxa9.globalAlpha = 1;
        _0x47ddxa9.arc(_0x47ddx13, _0x47ddx14, _0x47ddx8c, 0, 2 * Math.PI);
        _0x47ddxa9.stroke();
        _0x47ddxa9.fill();
        _0x47ddxa9.closePath();
      }
      _0x47ddxa9.restore();
    }
    function _0x47ddx9f() {
      if (_0x47ddxe1) {
        _0x47ddxa9.fillStyle = "#111111";
      } else {}
      _0x47ddxa9.fillRect(0, 0, _0x47ddxbe, _0x47ddxbf);
      _0x47ddxa9.save();
      if (_0x47ddxe1) {
        _0x47ddxa9.strokeStyle = "#AAAAAA";
      } else {}
      _0x47ddxa9.globalAlpha = .2;
      _0x47ddxa9.scale(_0x47ddxd6, _0x47ddxd6);
      var _0x47ddx38 = _0x47ddxbe / _0x47ddxd6, _0x47ddx39 = _0x47ddxbf / _0x47ddxd6;
      _0x47ddxa9.restore();
    }
    function _0x47ddxa0() {
      for (var _0x47ddxa1 = 0, _0x47ddx4 = 0; _0x47ddx4 < _0x47ddxc5.length; _0x47ddx4++) {
        _0x47ddxa1 += _0x47ddxc5[_0x47ddx4].nSize * _0x47ddxc5[_0x47ddx4].nSize;
      }
      return _0x47ddxa1;
    }
    function _0x47ddxa2() {
      var _0x47ddx38;
      _0x47ddx38 = 1 * Math.max(q / 1080, m / 1920);
      return _0x47ddx38 *= M;
    }
    function _0x47ddxa3(_0x47ddx38) {
      for (var _0x47ddx39 = _0x47ddx38.length, _0x47ddx3a, _0x47ddx3b; 0 < _0x47ddx39;) {
        _0x47ddx3b = Math.floor(Math.random() * _0x47ddx39);
        _0x47ddx39--;
        _0x47ddx3a = _0x47ddx38[_0x47ddx39];
        _0x47ddx38[_0x47ddx39] = _0x47ddx38[_0x47ddx3b];
        _0x47ddx38[_0x47ddx3b] = _0x47ddx3a;
      }
    }
    function _0x47ddxa4() {
      _0x47ddxbc = null;
      var _0x47ddxa8 = 140;
      if (null != _0x47ddxeb) {
        _0x47ddxa8 = 200;
      }
      if (null != _0x47ddxeb || 0 != _0x47ddxc9.length) {
        _0x47ddxbc = document.createElement("canvas");
      }
      var _0x47ddxa9 = _0x47ddxbc.getContext("2d"), _0x47ddxaa = 110;
      _0x47ddxaa = null == _0x47ddxeb ? _0x47ddxaa + 24 * _0x47ddxc9.length : _0x47ddxaa + 180;
      var _0x47ddxab = Math.min(.22 * _0x47ddxbf, Math.min(200, .3 * _0x47ddxbe)) / 200;
      _0x47ddxbc.width = _0x47ddxa8 * _0x47ddxab;
      _0x47ddxbc.height = _0x47ddxaa * _0x47ddxab;
      _0x47ddxa9.scale(_0x47ddxab, _0x47ddxab);
      _0x47ddxa9.globalAlpha = .4;
      _0x47ddxa9.fillStyle = "#000000";
      _0x47ddxa9.fillRect(0, 0, 200, _0x47ddxaa);
      _0x47ddxa9.globalAlpha = 1;
      _0x47ddxa9.fillStyle = "#FFFFFF";
      var _0x47ddx39;
      var _0x47ddxac = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      if (null == _0x47ddxeb) {
        _0x47ddxa9.fillStyle = "yellow";
        _0x47ddxa9.font = "12px Ubuntu";
        var _0x47ddxad = new Image;
        _0x47ddxad.onload = function () {
          _0x47ddxa9.drawImage(_0x47ddxad, 40, 0);
        };
        _0x47ddxad.src = "/img/lbfirst.png";
        _0x47ddxa9.fillText(this.lastWinner, 70 - _0x47ddxa9.measureText(this.lastWinner).width / 2, 80);
        for (_0x47ddx39 = 0; _0x47ddx39 < _0x47ddxc9.length; ++_0x47ddx39) {
          c = _0x47ddxc9[_0x47ddx39].name.split("*")[0] || "Unnamed Cell";
          c = _0x47ddx46(c)[1];
          if (c == "") {
            c = "Unnamed Cell";
          }
          if (-1 != _0x47ddxc4.indexOf(_0x47ddxc9[_0x47ddx39].id)) {
            _0x47ddxc5[0].name && (c = _0x47ddx46(_0x47ddxc5[0].name)[1]);
            if (c == "") {
              c = "Unnamed Cell";
            }
            _0x47ddxa9.fillStyle = "#FFAAAA";
            if (!_0x47ddxfa) {
              c = _0x47ddx39 + 1 + ". " + c;
            }
            _0x47ddxa9.fillText(c, 70 - _0x47ddxa9.measureText(c).width / 2, 125 + 23 * _0x47ddx39);
          } else {
            _0x47ddxa9.fillStyle = _0x47ddxac[_0x47ddx39];
            if (!_0x47ddxfa) {
              c = _0x47ddx39 + 1 + ". " + c;
            }
            _0x47ddxa9.fillText(c, 70 - _0x47ddxa9.measureText(c).width / 2, 125 + 23 * _0x47ddx39);
          }
        }
      } else {
        for (_0x47ddx39 = c = 0; _0x47ddx39 < _0x47ddxeb.length; ++_0x47ddx39) {
          var _0x47ddx3b = c + _0x47ddxeb[_0x47ddx39] * Math.PI * 2;
          _0x47ddxa9.fillStyle = _0x47ddxf5[_0x47ddx39 + 1];
          _0x47ddxa9.beginPath();
          _0x47ddxa9.moveTo(100, 140);
          _0x47ddxa9.arc(100, 140, 80, c, _0x47ddx3b, false);
          _0x47ddxa9.fill();
          c = _0x47ddx3b;
        }
      }
    }
    function _0x47ddxae(_0x47ddxaf, _0x47ddxb0, _0x47ddxb1, _0x47ddxb2, _0x47ddxb3, _0x47ddxb4) {
      this.id = _0x47ddxaf;
      this.ox = this.x = _0x47ddxb0;
      this.oy = this.y = _0x47ddxb1;
      this.oSize = this.size = _0x47ddxb2;
      this.color = _0x47ddxb3;
      this.points = [];
      this.pointsAcc = [];
      this.createPoints();
      this.setName(_0x47ddxb4);
    }
    function _0x47ddxb5(_0x47ddxb2, _0x47ddxb3, _0x47ddxb6, _0x47ddxb7) {
      _0x47ddxb2 && (this._size = _0x47ddxb2);
      _0x47ddxb3 && (this._color = _0x47ddxb3);
      this._stroke = !!_0x47ddxb6;
      _0x47ddxb7 && (this._strokeColor = _0x47ddxb7);
    }
    var _0x47ddxb8 = _0x47ddxa.location.protocol, _0x47ddxb9 = "https:" == _0x47ddxb8;
    var _0x47ddxba, _0x47ddxa9, _0x47ddxbb, _0x47ddxbc, _0x47ddxbd, _0x47ddxbe, _0x47ddxbf, _0x47ddxc0 = null, _0x47ddxc1 = null, _0x47ddxc2 = 0, _0x47ddxc3 = 0, _0x47ddxc4 = [], _0x47ddxc5 = [], _0x47ddxc6 = {_0x47ddx6e: _0x47ddx3c}, _0x47ddxc7 = [], _0x47ddxc8 = [], _0x47ddxc9 = [], _0x47ddxca = [], _0x47ddxcb = 0, _0x47ddxcc = 0, _0x47ddxcd = -1, _0x47ddxce = -1, _0x47ddxcf = 0, _0x47ddxd0 = 0, _0x47ddxd1 = null, _0x47ddxd2 = 0, _0x47ddxd3 = 0, _0x47ddxd4 = 1e4, _0x47ddxd5 = 1e4, _0x47ddxd6 = .1, _0x47ddxd7 = null, _0x47ddxd8 = true, _0x47ddxd9 = true, _0x47ddxda = false, _0x47ddxdb = false, _0x47ddxdc = 0, _0x47ddxdd = 0, _0x47ddxde = 0, _0x47ddxdf = 0, _0x47ddxe0 = 0, _0x47ddxe1 = false, _0x47ddxe3 = false, _0x47ddxe4 = false, _0x47ddxe5 = .9, _0x47ddxe6 = false, _0x47ddxe7 = false, _0x47ddxe8 = false, _0x47ddx71 = _0x47ddxc2 = ~~((_0x47ddxd2 + _0x47ddxd4) / 2), _0x47ddx70 = _0x47ddxc3 = ~~((_0x47ddxd3 + _0x47ddxd5) / 2), _0x47ddxe9 = 1, _0x47ddxea = "", _0x47ddxeb = null, _0x47ddxec = false, _0x47ddxed = true, _0x47ddxee = false, _0x47ddxef = 0, _0x47ddxf0 = 0, _0x47ddxf1 = 0, _0x47ddxf2 = 0, _0x47ddxf3 = [], _0x47ddxf4 = Date.now(), _0x47ddxde = 0, _0x47ddxf5 = ["#333333", "#FF3333", "#33FF33", "#3333FF"], _0x47ddxf6 = .7, _0x47ddxf7 = "ontouchstart" in _0x47ddxa && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), _0x47ddxf8 = new Image, _0x47ddxf9 = new Image, _0x47ddxfa = false;
    _0x47ddxf8.src = "../img/images/split.png";
    _0x47ddxf9.src = "../img/images/feed.png";
    var _0x47ddxfb = document.createElement("canvas");
    var _0x47ddxfc = Date.now();
    _0x47ddxa.isSpectating = false;
    var _0x47ddxfc = Date.now();
    _0x47ddxa.setNick = function (_0x47ddx42, _0x47ddx39) {
      if (_0x47ddx42 == null || !_0x47ddx42 || _0x47ddx42 == "") {
        alert("Enter Nick / Invalid Nick Input");
      } else {
        _0x47ddx42 = _0x47ddx42.replace(/[|&;+,]/g, ":)");
        _0x47ddx3e();
        _0x47ddxd1 = "{" + _0x47ddx39 + "}" + _0x47ddx42;
        _0x47ddx77();
        _0x47ddxdc = 0;
        _0x47ddxf3 = [];
        _0x47ddxdd = 0;
        _0x47ddxf4 = Date.now();
        _0x47ddxdf = 0;
        _0x47ddxe0 = 0;
        _0x47ddxde = 0;
      }
    };
    _0x47ddxa.setRegion = _0x47ddx40;
    _0x47ddxa.setSkins = function (_0x47ddx42) {
      _0x47ddxd8 = _0x47ddx42;
    };
    _0x47ddxa.setNames = function (_0x47ddx42) {
      _0x47ddxd9 = _0x47ddx42;
    };
    _0x47ddxa.setDarkTheme = function (_0x47ddx42) {
      _0x47ddxe1 = _0x47ddx42;
    };
    _0x47ddxa.setColors = function (_0x47ddx42) {
      _0x47ddxda = _0x47ddx42;
    };
    _0x47ddxa.setShowMass = function (_0x47ddx42) {
      _0x47ddxe3 = _0x47ddx42;
    };
    _0x47ddxa.setTransparent = function (_0x47ddx42) {
      _0x47ddxe6 = _0x47ddx42;
    };
    _0x47ddxa.setSmooth = function (_0x47ddx42) {
      _0x47ddxe5 = _0x47ddx42 ? 2 : .4;
    };
    _0x47ddxa.setZoom = function (_0x47ddx42) {
      _0x47ddxe4 = _0x47ddx42;
    };
    _0x47ddxa.setHideChat = function (_0x47ddx42) {
      _0x47ddxe7 = _0x47ddx42;
      if (_0x47ddx42) {
        _0x47ddxb("#chat_textbox").hide();
      } else {
        _0x47ddxb("#chat_textbox").show();
      }
    };
    _0x47ddxa.setSkipStats = function (_0x47ddx42) {
      _0x47ddxe8 = _0x47ddx42;
    };
    _0x47ddxa.closeStats = function () {
      _0x47ddxb("#statoverlay").hide();
      _0x47ddxb("#stats").hide();
      _0x47ddxb("#overlays").fadeIn(200);
    };
    _0x47ddxa.ClearChat = function () {
      _0x47ddxca = [];
    };
    _0x47ddxa.SendMap = function () {
      _0x47ddx79("psx2psx2");
    };
    _0x47ddxa.spectate = function () {
      _0x47ddxd1 = null;
      _0x47ddxa.isSpectating = true;
      _0x47ddx7c(1);
      _0x47ddx3e();
    };
    _0x47ddxa.setGameMode = function (_0x47ddx42) {
      _0x47ddx3f(_0x47ddx42);
    };
    if (null != _0x47ddxa.localStorage) {
      if (null == _0x47ddxa.localStorage.AB8) {
        _0x47ddxa.localStorage.AB8 = ~~(100 * Math.random());
      }
      _0x47ddxde = +_0x47ddxa.localStorage.AB8;
      _0x47ddxa.ABGroup = _0x47ddxde;
    }
    setInterval(function () {
      var _0x47ddx38 = _0x47ddx44();
      if (0 != _0x47ddx38) {
        ++_0x47ddxe0;
        if (0 == _0x47ddxdf) {
          _0x47ddxdf = _0x47ddx38;
        }
        _0x47ddxdf = Math.min(_0x47ddxdf, _0x47ddx38);
      }
    }, 1e3);
    setInterval(function () {
      if (null != _0x47ddxc1 && _0x47ddxc1.readyState == _0x47ddxc1.OPEN) {
        msg = _0x47ddx52(5);
        msg.setUint8(0, 90);
        msg.setUint32(1, 123456789, true);
        latency = new Date;
        _0x47ddx53(msg);
      }
    }, 1e3);
    setInterval(function () {
      _0x47ddxf3.push(_0x47ddxa0() / 100);
    }, 16.666666666666668);
    var _0x47ddxfd = {ZW: "EU-London"};
    _0x47ddxa.connect = _0x47ddx4f;
    var _0x47ddxfe = 500, _0x47ddxff = -1, _0x47ddx100 = -1, _0x47ddx102 = 1, _0x47ddx104 = {_0x47ddx117: new Image}, _0x47ddx105 = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), _0x47ddx106 = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), _0x47ddx107 = ["_canvas'blob"];
    _0x47ddxae.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
      var _0x47ddx108;
      for (_0x47ddx108 = 0; _0x47ddx108 < _0x47ddxc7.length; _0x47ddx108++) {
        if (_0x47ddxc7[_0x47ddx108] == this) {
          _0x47ddxc7.splice(_0x47ddx108, 1);
          break;
        }
      }
      delete _0x47ddxc6[this.id];
      _0x47ddx108 = _0x47ddxc5.indexOf(this);
      if (-1 != _0x47ddx108) {
        _0x47ddxdb = true;
        _0x47ddxc5.splice(_0x47ddx108, 1);
      }
      _0x47ddx108 = _0x47ddxc4.indexOf(this.id);
      if (-1 != _0x47ddx108) {
        _0x47ddxc4.splice(_0x47ddx108, 1);
      }
      this.destroyed = true;
      _0x47ddxc8.push(this);
    }, getNameSize: function () {
      return Math.max(~~(.3 * this.size), 24);
    }, setName: function (_0x47ddx38) {
      if (this.name = _0x47ddx38) {
        if (null == this.nameCache) {
          this.nameCache = new _0x47ddxb5(this.getNameSize(), "#FFFFFF", true, "#000000");
          this.nameCache.setValue(this.name);
        } else {
          this.nameCache.setSize(this.getNameSize());
          this.nameCache.setValue(this.name);
        }
      }
    }, createPoints: function () {
      for (var _0x47ddx109 = this.getNumPoints(); this.points.length > _0x47ddx109;) {
        var _0x47ddx10a = ~~(Math.random() * this.points.length);
        this.points.splice(_0x47ddx10a, 1);
        this.pointsAcc.splice(_0x47ddx10a, 1);
      }
      if (0 == this.points.length && 0 < _0x47ddx109) {
        this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
        this.pointsAcc.push(Math.random() - .5);
      }
      while (this.points.length < _0x47ddx109) {
        var _0x47ddx10b = ~~(Math.random() * this.points.length), _0x47ddx10c = this.points[_0x47ddx10b];
        this.points.splice(_0x47ddx10b, 0, {ref: this, size: _0x47ddx10c.size, x: _0x47ddx10c.x, y: _0x47ddx10c.y});
        this.pointsAcc.splice(_0x47ddx10b, 0, this.pointsAcc[_0x47ddx10b]);
      }
    }, getNumPoints: function () {
      if (0 == this.id) {
        return 16;
      }
      var _0x47ddx38 = 10;
      if (20 > this.size) {
        _0x47ddx38 = 0;
      }
      if (this.isVirus) {
        _0x47ddx38 = 30;
      }
      var _0x47ddx39 = this.size;
      if (!this.isVirus) {
        _0x47ddx39 *= _0x47ddxd6;
      }
      _0x47ddx39 *= _0x47ddx102;
      if (this.flag & 32) {
        _0x47ddx39 *= .25;
      }
      return ~~Math.max(_0x47ddx39, _0x47ddx38);
    }, movePoints: function () {
      this.createPoints();
      var _0x47ddx10d = this.points;
      var _0x47ddx10e = this.pointsAcc;
      var _0x47ddx10f = _0x47ddx10d.length;
      var _0x47ddx4 = 0;
      for (; _0x47ddx4 < _0x47ddx10f; ++_0x47ddx4) {
        var _0x47ddx110 = _0x47ddx10e[(_0x47ddx4 - 1 + _0x47ddx10f) % _0x47ddx10f];
        var _0x47ddx111 = _0x47ddx10e[(_0x47ddx4 + 1) % _0x47ddx10f];
        _0x47ddx10e[_0x47ddx4] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
        _0x47ddx10e[_0x47ddx4] *= .7;
        if (10 < _0x47ddx10e[_0x47ddx4]) {
          _0x47ddx10e[_0x47ddx4] = 10;
        }
        if (-10 > _0x47ddx10e[_0x47ddx4]) {
          _0x47ddx10e[_0x47ddx4] = -10;
        }
        _0x47ddx10e[_0x47ddx4] = (_0x47ddx110 + _0x47ddx111 + 8 * _0x47ddx10e[_0x47ddx4]) / 10;
      }
      var _0x47ddx112 = this;
      var _0x47ddx113 = this.isVirus ? 0 : (this.id / 1e3 + _0x47ddxd0 / 1e4) % (2 * Math.PI);
      var _0x47ddx114 = 0;
      for (; _0x47ddx114 < _0x47ddx10f; ++_0x47ddx114) {
        var _0x47ddx48 = _0x47ddx10d[_0x47ddx114].size;
        var _0x47ddx33 = _0x47ddx10d[(_0x47ddx114 - 1 + _0x47ddx10f) % _0x47ddx10f].size;
        var _0x47ddx115 = _0x47ddx10d[(_0x47ddx114 + 1) % _0x47ddx10f].size;
        if (15 < this.size && null != _0x47ddxc0 && 20 < this.size * _0x47ddxd6 && 0 != this.id) {
          var _0x47ddx8d = false;
          var _0x47ddx3 = _0x47ddx10d[_0x47ddx114].x;
          var _0x47ddx116 = _0x47ddx10d[_0x47ddx114].y;
          _0x47ddxc0.retrieve2(_0x47ddx3 - 5, _0x47ddx116 - 5, 10, 10, function (_0x47ddx38) {
            if (_0x47ddx38.ref != _0x47ddx112 && 25 > (_0x47ddx3 - _0x47ddx38.x) * (_0x47ddx3 - _0x47ddx38.x) + (_0x47ddx116 - _0x47ddx38.y) * (_0x47ddx116 - _0x47ddx38.y)) {
              _0x47ddx8d = true;
            }
          });
          if (!_0x47ddx8d && _0x47ddx10d[_0x47ddx114].x < _0x47ddxd2 || _0x47ddx10d[_0x47ddx114].y < _0x47ddxd3 || _0x47ddx10d[_0x47ddx114].x > _0x47ddxd4 || _0x47ddx10d[_0x47ddx114].y > _0x47ddxd5) {
            _0x47ddx8d = true;
          }
          if (_0x47ddx8d) {
            if (0 < _0x47ddx10e[_0x47ddx114]) {
              _0x47ddx10e[_0x47ddx114] = 0;
            }
            _0x47ddx10e[_0x47ddx114] -= 1;
          }
        }
        _0x47ddx48 = _0x47ddx48 + _0x47ddx10e[_0x47ddx114];
        if (0 > _0x47ddx48) {
          _0x47ddx48 = 0;
        }
        _0x47ddx48 = this.isAgitated ? (19 * _0x47ddx48 + this.size) / 20 : (12 * _0x47ddx48 + this.size) / 13;
        _0x47ddx10d[_0x47ddx114].size = (_0x47ddx33 + _0x47ddx115 + 8 * _0x47ddx48) / 10;
        _0x47ddx33 = 2 * Math.PI / _0x47ddx10f;
        _0x47ddx115 = this.points[_0x47ddx114].size;
        if (this.isVirus && 0 == _0x47ddx114 % 2) {
          _0x47ddx115 = _0x47ddx115 + 5;
        }
        _0x47ddx10d[_0x47ddx114].x = this.x + Math.cos(_0x47ddx33 * _0x47ddx114 + _0x47ddx113) * _0x47ddx115;
        _0x47ddx10d[_0x47ddx114].y = this.y + Math.sin(_0x47ddx33 * _0x47ddx114 + _0x47ddx113) * _0x47ddx115;
      }
    }, updatePos: function () {
      if (0 == this.id) {
        return 1;
      }
      var _0x47ddx38;
      _0x47ddx38 = (_0x47ddxd0 - this.updateTime) / 120;
      _0x47ddx38 = 0 > _0x47ddx38 ? 0 : 1 < _0x47ddx38 ? 1 : _0x47ddx38;
      var _0x47ddx39 = 0 > _0x47ddx38 ? 0 : 1 < _0x47ddx38 ? 1 : _0x47ddx38;
      this.getNameSize();
      if (this.destroyed && 1 <= _0x47ddx39) {
        var _0x47ddx3a = _0x47ddxc8.indexOf(this);
        -1 != _0x47ddx3a && _0x47ddxc8.splice(_0x47ddx3a, 1);
      }
      this.x = _0x47ddx38 * (this.nx - this.ox) + this.ox;
      this.y = _0x47ddx38 * (this.ny - this.oy) + this.oy;
      this.size = _0x47ddx39 * (this.nSize - this.oSize) + this.oSize;
      return _0x47ddx39;
    }, shouldRender: function () {
      if (0 == this.id) {
        return true;
      } else {
        return !(this.x + this.size + 40 < _0x47ddxc2 - _0x47ddxbe / 2 / _0x47ddxd6 || this.y + this.size + 40 < _0x47ddxc3 - _0x47ddxbf / 2 / _0x47ddxd6 || this.x - this.size - 40 > _0x47ddxc2 + _0x47ddxbe / 2 / _0x47ddxd6 || this.y - this.size - 40 > _0x47ddxc3 + _0x47ddxbf / 2 / _0x47ddxd6);
      }
    }, drawOneCell: function (_0x47ddxa9) {
      if (this.shouldRender()) {
        var _0x47ddx39 = 0 != this.id && !this.isVirus && !this.isAgitated && _0x47ddxe5 > _0x47ddxd6;
        if (5 > this.getNumPoints()) {
          _0x47ddx39 = true;
        }
        if (this.wasSimpleDrawing && !_0x47ddx39) {
          for (var _0x47ddx3a = 0; _0x47ddx3a < this.points.length; _0x47ddx3a++) {
            this.points[_0x47ddx3a].size = this.size;
          }
        }
        this.wasSimpleDrawing = _0x47ddx39;
        _0x47ddxa9.save();
        this.drawTime = _0x47ddxd0;
        _0x47ddx3a = this.updatePos();
        this.destroyed && (_0x47ddxa9.globalAlpha *= 1 - _0x47ddx3a);
        _0x47ddxa9.lineWidth = 10;
        _0x47ddxa9.lineCap = "round";
        _0x47ddxa9.lineJoin = this.isVirus ? "miter" : "round";
        if (_0x47ddxda) {
          _0x47ddxa9.fillStyle = "#FFFFFF";
          _0x47ddxa9.strokeStyle = "#AAAAAA";
        } else {
          _0x47ddxa9.fillStyle = this.color;
          _0x47ddxa9.strokeStyle = this.color;
        }
        _0x47ddxa9.beginPath();
        _0x47ddxa9.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        _0x47ddxa9.closePath();
        var _0x47ddx117 = this.name.toLowerCase();
        li = _0x47ddx46(_0x47ddx117);
        if (_0x47ddx117.indexOf("[") != -1) {
          var _0x47ddx118 = _0x47ddx117.indexOf("[");
          var _0x47ddx119 = _0x47ddx117.indexOf("]");
          _0x47ddx117 = _0x47ddx117.slice(_0x47ddx118 + 1, _0x47ddx119);
        }
        if (!this.isAgitated && _0x47ddxd8 && "teams-public.iogames.icu:443" != _0x47ddxc) {
          if (!_0x47ddx104.hasOwnProperty(_0x47ddx117)) {
            _0x47ddx104[_0x47ddx117].src = _0x47ddxd + li[0] + ".png";
          }
          if (0 != _0x47ddx104[_0x47ddx117].width && _0x47ddx104[_0x47ddx117].complete) {
            _0x47ddx3a = _0x47ddx104[_0x47ddx117];
          } else {
            _0x47ddx3a = null;
          }
        } else {
          _0x47ddx3a = null;
        }
        _0x47ddx3a = (e = _0x47ddx3a) ? -1 != _0x47ddx107.indexOf(_0x47ddx117) : false;
        _0x47ddx39 || _0x47ddxa9.stroke();
        _0x47ddxa9.fill();
        if (!(null == e || _0x47ddx3a)) {
          _0x47ddxa9.save();
          _0x47ddxa9.clip();
          _0x47ddxa9.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
          _0x47ddxa9.restore();
        }
        _0x47ddxa9.globalAlpha = 1;
        if (null != e && _0x47ddx3a) {
          _0x47ddxa9.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
        }
        _0x47ddx3a = -1 != _0x47ddxc5.indexOf(this);
        if (0 != this.id) {
          var _0x47ddx39 = ~~this.y;
          if ((_0x47ddxd9 || _0x47ddx3a) && this.name && this.nameCache && (null == e || -1 == _0x47ddx106.indexOf(_0x47ddx117))) {
            _0x47ddxa9.globalAlpha = 1;
            _0x47ddxa9.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
            _0x47ddxa9.fillStyle = "#FFF";
            _0x47ddxa9.textAlign = "center";
            _0x47ddxa9.fillText(_0x47ddx46(this.name.split("*")[0])[1], this.x, this.y);
          }
          if (_0x47ddxe3 == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
            _0x47ddxa9.fillStyle = "#FFFFFF";
            _0x47ddxa9.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
            var _0x47ddx7a = ~~(this.nSize * this.nSize / 100);
            var _0x47ddx11b = _0x47ddxa9.measureText(_0x47ddx7a).width;
            var _0x47ddx11c = this.x - _0x47ddx11b * .07;
            _0x47ddxa9.fillText(_0x47ddx7a, _0x47ddx11c, this.y + this.getNameSize() + 6);
          }
        }
        _0x47ddxa9.restore();
      }
    }};
    _0x47ddxb5.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (_0x47ddx38) {
      if (this._size != _0x47ddx38) {
        this._size = _0x47ddx38;
        this._dirty = true;
      }
    }, setScale: function (_0x47ddx38) {
      if (this._scale != _0x47ddx38) {
        this._scale = _0x47ddx38;
        this._dirty = true;
      }
    }, setStrokeColor: function (_0x47ddx38) {
      if (this._strokeColor != _0x47ddx38) {
        this._strokeColor = _0x47ddx38;
        this._dirty = true;
      }
    }, setValue: function (_0x47ddx38) {
      if (_0x47ddx38 != this._value) {
        this._value = _0x47ddx38;
        this._dirty = true;
      }
    }, render: function () {
      if (null == this._canvas) {
        this._canvas = document.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
      }
      if (this._dirty) {
        this._dirty = false;
        var _0x47ddx11d = this._canvas, _0x47ddxa9 = this._ctx, _0x47ddx2c = this._value, _0x47ddx11e = this._scale, _0x47ddx11f = this._size, _0x47ddx120 = "700 " + _0x47ddx11f + "px nunito";
        _0x47ddxa9.font = _0x47ddx120;
        var _0x47ddx121 = ~~(.2 * _0x47ddx11f);
        _0x47ddx11d.width = (_0x47ddxa9.measureText(_0x47ddx2c).width + 6) * _0x47ddx11e;
        _0x47ddx11d.height = (_0x47ddx11f + _0x47ddx121) * _0x47ddx11e;
        _0x47ddxa9.font = _0x47ddx120;
        _0x47ddxa9.scale(_0x47ddx11e, _0x47ddx11e);
        _0x47ddxa9.globalAlpha = 1;
        _0x47ddxa9.lineWidth = 3;
        _0x47ddxa9.strokeStyle = this._strokeColor;
        _0x47ddxa9.fillStyle = this._color;
        this._stroke && _0x47ddxa9.strokeText(_0x47ddx2c, 3, _0x47ddx11f - _0x47ddx121 / 2);
        _0x47ddxa9.fillText(_0x47ddx2c, 3, _0x47ddx11f - _0x47ddx121 / 2);
      }
      return this._canvas;
    }, getWidth: function () {
      return _0x47ddxa9.measureText(this._value).width + 6;
    }};
    Date.now || (Date.now = function () {
      return (new Date).getTime();
    });
    var _0x47ddx122 = {init: function (_0x47ddx123) {
      function _0x47ddx124(_0x47ddx13, _0x47ddx14, _0x47ddxd7, _0x47ddx121, _0x47ddx125) {
        this.x = _0x47ddx13;
        this.y = _0x47ddx14;
        this.w = _0x47ddxd7;
        this.h = _0x47ddx121;
        this.depth = _0x47ddx125;
        this.items = [];
        this.nodes = [];
      }
      var _0x47ddx3a = _0x47ddx123.maxChildren || 2, _0x47ddx3b = _0x47ddx123.maxDepth || 4;
      _0x47ddx124.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (_0x47ddx126) {
        for (var _0x47ddx4 = 0; _0x47ddx4 < this.items.length; ++_0x47ddx4) {
          var _0x47ddx127 = this.items[_0x47ddx4];
          if (_0x47ddx127.x >= _0x47ddx126.x && _0x47ddx127.y >= _0x47ddx126.y && _0x47ddx127.x < _0x47ddx126.x + _0x47ddx126.w && _0x47ddx127.y < _0x47ddx126.y + _0x47ddx126.h) {
            return true;
          }
        }
        if (0 != this.nodes.length) {
          var _0x47ddx128 = this;
          return this.findOverlappingNodes(_0x47ddx126, function (_0x47ddx129) {
            return _0x47ddx128.nodes[_0x47ddx129].exists(_0x47ddx126);
          });
        }
        return false;
      }, retrieve: function (_0x47ddx127, _0x47ddx12a) {
        for (var _0x47ddx4 = 0; _0x47ddx4 < this.items.length; ++_0x47ddx4) {
          _0x47ddx12a(this.items[_0x47ddx4]);
        }
        if (0 != this.nodes.length) {
          var _0x47ddx128 = this;
          this.findOverlappingNodes(_0x47ddx127, function (_0x47ddx129) {
            _0x47ddx128.nodes[_0x47ddx129].retrieve(_0x47ddx127, _0x47ddx12a);
          });
        }
      }, insert: function (_0x47ddx38) {
        if (0 != this.nodes.length) {
          this.nodes[this.findInsertNode(_0x47ddx38)].insert(_0x47ddx38);
        } else {
          if (this.items.length >= _0x47ddx3a && this.depth < _0x47ddx3b) {
            this.devide();
            this.nodes[this.findInsertNode(_0x47ddx38)].insert(_0x47ddx38);
          } else {
            this.items.push(_0x47ddx38);
          }
        }
      }, findInsertNode: function (_0x47ddx38) {
        return _0x47ddx38.x < this.x + this.w / 2 ? _0x47ddx38.y < this.y + this.h / 2 ? 0 : 2 : _0x47ddx38.y < this.y + this.h / 2 ? 1 : 3;
      }, findOverlappingNodes: function (_0x47ddx38, _0x47ddx39) {
        return _0x47ddx38.x < this.x + this.w / 2 && (_0x47ddx38.y < this.y + this.h / 2 && _0x47ddx39(0) || _0x47ddx38.y >= this.y + this.h / 2 && _0x47ddx39(2)) || _0x47ddx38.x >= this.x + this.w / 2 && (_0x47ddx38.y < this.y + this.h / 2 && _0x47ddx39(1) || _0x47ddx38.y >= this.y + this.h / 2 && _0x47ddx39(3)) ? true : false;
      }, devide: function () {
        var _0x47ddx38 = this.depth + 1, _0x47ddx3a = this.w / 2, _0x47ddx3b = this.h / 2;
        this.nodes.push(new _0x47ddx124(this.x, this.y, _0x47ddx3a, _0x47ddx3b, _0x47ddx38));
        this.nodes.push(new _0x47ddx124(this.x + _0x47ddx3a, this.y, _0x47ddx3a, _0x47ddx3b, _0x47ddx38));
        this.nodes.push(new _0x47ddx124(this.x, this.y + _0x47ddx3b, _0x47ddx3a, _0x47ddx3b, _0x47ddx38));
        this.nodes.push(new _0x47ddx124(this.x + _0x47ddx3a, this.y + _0x47ddx3b, _0x47ddx3a, _0x47ddx3b, _0x47ddx38));
        _0x47ddx38 = this.items;
        this.items = [];
        for (_0x47ddx3a = 0; _0x47ddx3a < _0x47ddx38.length; _0x47ddx3a++) {
          this.insert(_0x47ddx38[_0x47ddx3a]);
        }
      }, clear: function () {
        for (var _0x47ddx38 = 0; _0x47ddx38 < this.nodes.length; _0x47ddx38++) {
          this.nodes[_0x47ddx38].clear();
        }
        this.items.length = 0;
        this.nodes.length = 0;
      }};
      return {root: new _0x47ddx124(_0x47ddx123.minX, _0x47ddx123.minY, _0x47ddx123.maxX - _0x47ddx123.minX, _0x47ddx123.maxY - _0x47ddx123.minY, 0), insert: function (_0x47ddx38) {
        this.root.insert(_0x47ddx38);
      }, retrieve: function (_0x47ddx38, _0x47ddx39) {
        this.root.retrieve(_0x47ddx38, _0x47ddx39);
      }, retrieve2: function (_0x47ddx38, _0x47ddx39, _0x47ddx3a, _0x47ddx3b, _0x47ddx12a) {
        _0x47ddx12b.x = _0x47ddx38;
        _0x47ddx12b.y = _0x47ddx39;
        _0x47ddx12b.w = _0x47ddx3a;
        _0x47ddx12b.h = _0x47ddx3b;
        this.root.retrieve(_0x47ddx12b, _0x47ddx12a);
      }, exists: function (_0x47ddx38) {
        return this.root.exists(_0x47ddx38);
      }, clear: function () {
        this.root.clear();
      }};
    }};
    _0x47ddxa.onload = _0x47ddx20;
  }(window, window.jQuery));
  $(document).ready(function () {
    $("#chat_textbox").bind("cut copy paste", function (_0x47ddx33) {
      _0x47ddx33.preventDefault();
    });
  });
  (function () {
    var _0x47ddx12c = function (_0x47ddx31) {
      if (_0x47ddx31.keyCode === 17) {
        for (var _0x47ddx4 = 0; _0x47ddx4 < 4; ++_0x47ddx4) {
          setTimeout(function () {
            window.onkeydown({keyCode: 32});
            window.onkeyup({keyCode: 32});
          }, _0x47ddx4 * 50);
        }
      }
    };
    window.addEventListener("keydown", _0x47ddx12c);
  }());
  (function () {
    var _0x47ddx30 = function (_0x47ddx31) {
      if (_0x47ddx31.keyCode === 69) {
        for (var _0x47ddx4 = 0; _0x47ddx4 < 10; ++_0x47ddx4) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, _0x47ddx4 * 50);
        }
      }
    };
    window.addEventListener("keydown", _0x47ddx30);
  }());
  window.onbeforeunload = function () {
    if (Play == true) {
      return confirm();
    }
  };
  
