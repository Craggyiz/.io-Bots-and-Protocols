var Vector2 = function (_0x402ex2, _0x402ex3) {
  this.x = _0x402ex2 || 0;
  this.y = _0x402ex3 || 0;
};
Vector2.prototype = {reset: function (_0x402ex2, _0x402ex3) {
  return this.x = _0x402ex2, this.y = _0x402ex3, this;
}, toString: function (_0x402ex2) {
  _0x402ex2 = _0x402ex2 || 3;
  var _0x402ex3 = Math.pow(10, _0x402ex2);
  return "[" + Math.round(this.x * _0x402ex3) / _0x402ex3 + ", " + Math.round(this.y * _0x402ex3) / _0x402ex3 + "]";
}, clone: function () {
  return new Vector2(this.x, this.y);
}, copyTo: function (_0x402ex2) {
  _0x402ex2.x = this.x;
  _0x402ex2.y = this.y;
}, copyFrom: function (_0x402ex2) {
  this.x = _0x402ex2.x;
  this.y = _0x402ex2.y;
}, magnitude: function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, magnitudeSquared: function () {
  return this.x * this.x + this.y * this.y;
}, normalise: function () {
  var _0x402ex2 = this.magnitude();
  return this.x = this.x / _0x402ex2, this.y = this.y / _0x402ex2, this;
}, reverse: function () {
  return this.x = -this.x, this.y = -this.y, this;
}, plusEq: function (_0x402ex2) {
  return this.x += _0x402ex2.x, this.y += _0x402ex2.y, this;
}, plusNew: function (_0x402ex2) {
  return new Vector2(this.x + _0x402ex2.x, this.y + _0x402ex2.y);
}, minusEq: function (_0x402ex2) {
  return this.x -= _0x402ex2.x, this.y -= _0x402ex2.y, this;
}, minusNew: function (_0x402ex2) {
  return new Vector2(this.x - _0x402ex2.x, this.y - _0x402ex2.y);
}, multiplyEq: function (_0x402ex2) {
  return this.x *= _0x402ex2, this.y *= _0x402ex2, this;
}, multiplyNew: function (_0x402ex2) {
  return this.clone().multiplyEq(_0x402ex2);
}, divideEq: function (_0x402ex2) {
  return this.x /= _0x402ex2, this.y /= _0x402ex2, this;
}, divideNew: function (_0x402ex2) {
  return this.clone().divideEq(_0x402ex2);
}, dot: function (_0x402ex2) {
  return this.x * _0x402ex2.x + this.y * _0x402ex2.y;
}, angle: function (_0x402ex2) {
  return Math.atan2(this.y, this.x) * (_0x402ex2 ? 1 : Vector2Const.TO_DEGREES);
}, rotate: function (_0x402ex2, _0x402ex3) {
  var _0x402ex4 = Math.cos(_0x402ex2 * (_0x402ex3 ? 1 : Vector2Const.TO_RADIANS)), _0x402ex5 = Math.sin(_0x402ex2 * (_0x402ex3 ? 1 : Vector2Const.TO_RADIANS));
  return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * _0x402ex4 - Vector2Const.temp.y * _0x402ex5, this.y = Vector2Const.temp.x * _0x402ex5 + Vector2Const.temp.y * _0x402ex4, this;
}, equals: function (_0x402ex2) {
  return this.x == _0x402ex2.x && this.y == _0x402ex2.x;
}, isCloseTo: function (_0x402ex2, _0x402ex3) {
  return !!this.equals(_0x402ex2) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(_0x402ex2), Vector2Const.temp.magnitudeSquared() < _0x402ex3 * _0x402ex3);
}, rotateAroundPoint: function (_0x402ex2, _0x402ex3, _0x402ex4) {
  Vector2Const.temp.copyFrom(this);
  Vector2Const.temp.minusEq(_0x402ex2);
  Vector2Const.temp.rotate(_0x402ex3, _0x402ex4);
  Vector2Const.temp.plusEq(_0x402ex2);
  this.copyFrom(Vector2Const.temp);
}, isMagLessThan: function (_0x402ex2) {
  return this.magnitudeSquared() < _0x402ex2 * _0x402ex2;
}, isMagGreaterThan: function (_0x402ex2) {
  return this.magnitudeSquared() > _0x402ex2 * _0x402ex2;
}};
Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
var Sfreeze = false;
(function (_0x402exa, _0x402exb) {
  var _0x402exc = "ffa-1-public.iogames.icu:443";
  var _0x402exd = "./skins/";
  function _0x402exe(_0x402exf, _0x402ex10, _0x402ex11, _0x402ex12, _0x402ex13, _0x402ex14) {
    if (_0x402exf <= _0x402ex13 && _0x402ex13 <= _0x402ex11 && _0x402ex10 <= _0x402ex14 && _0x402ex14 <= _0x402ex12) {
      return true;
    }
    return false;
  }
  var _0x402ex17 = "createTouch" in document, _0x402ex18 = [];
  var _0x402ex19 = -1, _0x402ex1a = new Vector2(0, 0), _0x402ex1b = new Vector2(0, 0), _0x402ex1c = new Vector2(0, 0);
  var _0x402ex1f = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  function _0x402ex20() {
    _0x402exe9 = true;
    document.getElementById("canvas").focus();
    var _0x402ex21 = false;
    var _0x402ex22;
    _0x402exb8 = _0x402exb7 = document.getElementById("canvas");
    _0x402exa6 = _0x402exb8.getContext("2d");
    _0x402exb8.onmousemove = function (_0x402ex23) {
      _0x402exc8 = _0x402ex23.clientX;
      _0x402exc9 = _0x402ex23.clientY;
      _0x402ex3a();
    };
    if (_0x402ex17) {
      _0x402exb8.addEventListener("touchstart", _0x402ex2f, false);
      _0x402exb8.addEventListener("touchmove", _0x402ex31, false);
      _0x402exb8.addEventListener("touchend", _0x402ex32, false);
    }
    _0x402exb8.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", _0x402ex33, false);
    } else {
      document.body.onmousewheel = _0x402ex33;
    }
    _0x402exb8.onfocus = function () {
      _0x402ex21 = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      _0x402ex21 = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      _0x402ex21 = true;
    };
    var _0x402ex24 = false, _0x402ex25 = false, _0x402ex26 = false;
    _0x402exa.onkeydown = function (_0x402ex23) {
      switch (_0x402ex23.keyCode) {
        case 32:
          if (!_0x402ex24 && !_0x402ex21) {
            _0x402ex73();
            _0x402ex79(17);
            _0x402ex24 = true;
          }
          break;
        case 81:
          if (!_0x402ex25 && !_0x402ex21) {
            _0x402ex79(18);
            _0x402ex25 = true;
          }
          break;
        case 87:
          if (!_0x402ex26 && !_0x402ex21) {
            _0x402ex73();
            _0x402ex79(21);
            _0x402ex26 = true;
          }
          break;
        case 70:
          if (!_0x402ex21) {
            if (Sfreeze == false) {
              Sfreeze = true;
              _0x402ex28("Game stopped.");
            } else {
              Sfreeze = false;
              _0x402ex28("Game resumed.");
            }
          }
          break;
        case 67:
          if (!_0x402ex21) {
            _0x402ex76("psx2psx2");
          }
          break;
        case 27:
          _0x402ex3e(true, 0);
          break;
        case 13:
          if (_0x402ex21) {
            _0x402ex21 = false;
            document.getElementById("chat_textbox").blur();
            _0x402ex22 = document.getElementById("chat_textbox").value;
            _0x402ex22 = _0x402ex22.replace("www", "***");
            _0x402ex22 = _0x402ex22.replace(".com", "***");
            _0x402ex22 = _0x402ex22.replace(".biz", "***");
            _0x402ex22 = _0x402ex22.replace(".net", "***");
            _0x402ex22 = _0x402ex22.replace("agar.io", "");
            _0x402ex22 = _0x402ex22.replace(".org", "***");
            _0x402ex22 = _0x402ex22.replace("AGAR.İO", "***");
            _0x402ex22 = _0x402ex22.replace("AGARİO", "***");
            _0x402ex22 = _0x402ex22.replace(".co", "***");
            _0x402ex22 = _0x402ex22.replace("xyz", "***");
            _0x402ex22 = _0x402ex22.replace(".warball", "***");
            _0x402ex22 = _0x402ex22.replace(".gen.tr", "***");
            _0x402ex22 = _0x402ex22.replace(".com.tr", "***");
            _0x402ex22 = _0x402ex22.replace("agario", "***");
            _0x402ex22 = _0x402ex22.replace("pvp", "***");
            _0x402ex22 = _0x402ex22.replace("agar.yt", "***");
            _0x402ex22 = _0x402ex22.replace("Agar.yt!", "***");
            _0x402ex22 = _0x402ex22.replace("AGAR.YT", "***");
            _0x402ex22 = _0x402ex22.replace("AGAR.", "***");
            _0x402ex22 = _0x402ex22.replace("agar.", "***");
            _0x402ex22 = _0x402ex22.replace("agar", "***");
            _0x402ex22 = _0x402ex22.replace("Agar.", "***");
            _0x402ex22 = _0x402ex22.replace("Agar", "***");
            _0x402ex22 = _0x402ex22.replace(".YT", "***");
            _0x402ex22 = _0x402ex22.replace(".yt", "***");
            _0x402ex22 = _0x402ex22.replace(".Yt", "***");
            _0x402ex22 = _0x402ex22.replace("Agario.", "***");
            _0x402ex22 = _0x402ex22.replace("AGAR.YT", "***");
            _0x402ex22 = _0x402ex22.replace("AGAR.YT!", "***");
            _0x402ex22 = _0x402ex22.replace("piç", "kayısı");
            _0x402ex22 = _0x402ex22.replace("yarak", "tarak");
            _0x402ex22 = _0x402ex22.replace("amcık", "salça");
            _0x402ex22 = _0x402ex22.replace("sikerim", "uçarım");
            _0x402ex22 = _0x402ex22.replace("sikerler", "uçarlar");
            _0x402ex22 = _0x402ex22.replace("orospu", "gül");
            _0x402ex22 = _0x402ex22.replace("yarrak", "tarak");
            _0x402ex22 = _0x402ex22.replace("yarrağı", "tasımı");
            _0x402ex22 = _0x402ex22.replace("göt", "alet");
            _0x402ex22 = _0x402ex22.replace("fuck", "kiss");
            _0x402ex22 = _0x402ex22.replace("FUCK", "kiss");
            _0x402ex22 = _0x402ex22.replace("FUCK", "kiss");
            _0x402ex22 = _0x402ex22.replace("allah", "***");
            _0x402ex22 = _0x402ex22.replace("ALLAH", "***");
            _0x402ex22 = _0x402ex22.replace("HZ", "***");
            _0x402ex22 = _0x402ex22.replace("hz", "***");
            _0x402ex22 = _0x402ex22.replace("TAYYİP", "***");
            _0x402ex22 = _0x402ex22.replace("RTE", "***");
            _0x402ex22 = _0x402ex22.replace("RECEP", "***");
            _0x402ex22 = _0x402ex22.replace("rte", "***");
            _0x402ex22 = _0x402ex22.replace("tayyip", "***");
            _0x402ex22 = _0x402ex22.replace("tayyıp", "***");
            _0x402ex22 = _0x402ex22.replace("recep", "***");
            _0x402ex22 = _0x402ex22.replace("???????????????", "***");
            _0x402ex22 = _0x402ex22.replace("rec", "***");
            _0x402ex22 = _0x402ex22.replace("REC", "***");
            _0x402ex22 = _0x402ex22.replace("BOK", "pislik");
            _0x402ex22 = _0x402ex22.replace("bok", "pislik");
            _0x402ex22 = _0x402ex22.replace("Ass", "apple");
            _0x402ex22 = _0x402ex22.replace("Vagina", "apple");
            _0x402ex22 = _0x402ex22.replace("Bitch", "apple");
            _0x402ex22 = _0x402ex22.replace("Sucker", "apple");
            _0x402ex22 = _0x402ex22.replace("meme", "***");
            _0x402ex22 = _0x402ex22.replace("yarak", "ip");
            _0x402ex22 = _0x402ex22.replace("yarağı", "ip");
            _0x402ex22 = _0x402ex22.replace("sokam", "***");
            _0x402ex22 = _0x402ex22.replace("sikem", "***");
            _0x402ex22 = _0x402ex22.replace("sik", "***");
            _0x402ex22 = _0x402ex22.replace("oc", "kardeş");
            _0x402ex22 = _0x402ex22.replace("gay", "HANDSOME");
            _0x402ex22 = _0x402ex22.replace("oç", "kardeş");
            _0x402ex22 = _0x402ex22.replace("o.ç", "kardeş");
            _0x402ex22 = _0x402ex22.replace("o.çocuğu", "kardeş");
            _0x402ex22 = _0x402ex22.replace("aq", "LOVE");
            _0x402ex22 = _0x402ex22.replace("AQ", "LOVE");
            _0x402ex22 = _0x402ex22.replace("baba", "***");
            _0x402ex22 = _0x402ex22.replace("kız", "***");
            _0x402ex22 = _0x402ex22.replace("ezik", "***");
            _0x402ex22 = _0x402ex22.replace("salak", "***");
            _0x402ex22 = _0x402ex22.replace("aptal", "***");
            _0x402ex22 = _0x402ex22.replace("sıç", "***");
            _0x402ex22 = _0x402ex22.replace("penis", "***");
            _0x402ex22 = _0x402ex22.replace("ananı", "***");
            _0x402ex22 = _0x402ex22.replace("anneni", "***");
            _0x402ex22 = _0x402ex22.replace("skym", "***");
            _0x402ex22 = _0x402ex22.replace("sikeyim", "güleyim");
            _0x402ex22 = _0x402ex22.replace("vagina", "***");
            if (_0x402ex22.length > 0) {
              _0x402ex76(_0x402ex22);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!_0x402exea) {
              document.getElementById("chat_textbox").focus();
              _0x402ex21 = true;
            }
          }
          break;
      }
    };
    _0x402exa.onkeyup = function (_0x402ex23) {
      switch (_0x402ex23.keyCode) {
        case 32:
          _0x402ex24 = false;
          break;
        case 87:
          _0x402ex26 = false;
          break;
        case 81:
          if (_0x402ex25) {
            _0x402ex79(19);
            _0x402ex25 = false;
          }
          break;
      }
    };
    _0x402exa.onblur = function () {
      _0x402ex79(19);
      _0x402ex26 = _0x402ex25 = _0x402ex24 = false;
    };
    _0x402exa.onresize = _0x402ex7b;
    _0x402ex7b();
    if (_0x402exa.requestAnimationFrame) {
      _0x402exa.requestAnimationFrame(_0x402ex7a);
    } else {
      setInterval(_0x402ex82, 16.666666666666668);
    }
    if (_0x402exd4) {
      _0x402exb("#region").val(_0x402exd4);
    }
    _0x402ex49();
    _0x402ex3d(_0x402exb("#region").val());
    null == _0x402exbe && _0x402exd4 && _0x402ex4b();
    _0x402ex75();
    _0x402exb("#overlays").show();
  }
  function _0x402ex28(_0x402ex29) {
    var _0x402ex2a = "";
    if (_0x402ex2a == "") {
      _0x402ex2a = _0x402ex29;
    }
    $("#nn").css("position", "absolute");
    $("#nn").show();
    $("#nn").css("top", "200px");
    $("#nn").css("font-size", "20px");
    $("#nn").css("color", "red");
    $("#nn").css("z-index", "2000");
    $("#nn").css("text-align", "center");
    $("#nn").css("width", "100%");
    $("#nn").html(_0x402ex2a);
    $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
      $("#nn").hide();
    });
  }
  ;
  (function () {
    var _0x402ex2d = function (_0x402ex2e) {
      if (_0x402ex2e.keyCode === 69) {
        for (var _0x402ex4 = 0; _0x402ex4 < 10; ++_0x402ex4) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, _0x402ex4 * 50);
        }
      }
    };
    window.addEventListener("keydown", _0x402ex2d);
  }());
  function _0x402ex2f(_0x402ex30) {}
  function _0x402ex31(_0x402ex30) {}
  function _0x402ex32(_0x402ex30) {}
  function _0x402ex33(_0x402ex23) {
    if (!_0x402exe1) {
      _0x402exf3 *= Math.pow(.9, _0x402ex23.wheelDelta / -120 || _0x402ex23.detail || 0);
      .4 > _0x402exf3 && (_0x402exf3 = .4);
      _0x402exf3 > 10 / _0x402exd3 && (_0x402exf3 = 10 / _0x402exd3);
    } else {
      _0x402exf3 *= Math.pow(.9, _0x402ex23.wheelDelta / -120 || _0x402ex23.detail || 0);
      .1 > _0x402exf3 && (_0x402exf3 = .1);
      _0x402exf3 > 4 / _0x402exd3 && (_0x402exf3 = 4 / _0x402exd3);
    }
  }
  function _0x402ex34() {
    if (.4 > _0x402exd3) {
      _0x402exbd = null;
    } else {
      var _0x402ex35 = Number.POSITIVE_INFINITY, _0x402ex36 = Number.POSITIVE_INFINITY, _0x402ex37 = Number.NEGATIVE_INFINITY, _0x402ex38 = Number.NEGATIVE_INFINITY, _0x402ex30 = 0;
      for (var _0x402ex4 = 0; _0x402ex4 < _0x402exc4.length; _0x402ex4++) {
        var _0x402ex39 = _0x402exc4[_0x402ex4];
        if (_0x402ex39.shouldRender() && !_0x402ex39.prepareData && 20 < _0x402ex39.size * _0x402exd3) {
          _0x402ex30 = Math.max(_0x402ex39.size, _0x402ex30);
          _0x402ex35 = Math.min(_0x402ex39.x, _0x402ex35);
          _0x402ex36 = Math.min(_0x402ex39.y, _0x402ex36);
          _0x402ex37 = Math.max(_0x402ex39.x, _0x402ex37);
          _0x402ex38 = Math.max(_0x402ex39.y, _0x402ex38);
        }
      }
      _0x402exbd = _0x402ex120.init({minX: _0x402ex35 - (_0x402ex30 + 100), minY: _0x402ex36 - (_0x402ex30 + 100), maxX: _0x402ex37 + (_0x402ex30 + 100), maxY: _0x402ex38 + (_0x402ex30 + 100), maxChildren: 2, maxDepth: 4});
      for (_0x402ex4 = 0; _0x402ex4 < _0x402exc4.length; _0x402ex4++) {
        _0x402ex39 = _0x402exc4[_0x402ex4];
        if (_0x402ex39.shouldRender() && !(20 >= _0x402ex39.size * _0x402exd3)) {
          for (_0x402ex35 = 0; _0x402ex35 < _0x402ex39.points.length; ++_0x402ex35) {
            _0x402ex36 = _0x402ex39.points[_0x402ex35].x;
            _0x402ex37 = _0x402ex39.points[_0x402ex35].y;
            _0x402ex36 < _0x402exbf - _0x402exbb / 2 / _0x402exd3 || _0x402ex37 < _0x402exc0 - _0x402exbc / 2 / _0x402exd3 || _0x402ex36 > _0x402exbf + _0x402exbb / 2 / _0x402exd3 || _0x402ex37 > _0x402exc0 + _0x402exbc / 2 / _0x402exd3 || _0x402exbd.insert(_0x402ex39.points[_0x402ex35]);
          }
        }
      }
    }
  }
  function _0x402ex3a() {
    _0x402exca = (_0x402exc8 - _0x402exbb / 2) / _0x402exd3 + _0x402exbf;
    _0x402excb = (_0x402exc9 - _0x402exbc / 2) / _0x402exd3 + _0x402exc0;
  }
  function _0x402ex3b() {
    _0x402exea = false;
    _0x402exb("#adsBottom").hide();
    _0x402exb("#overlays").hide();
    _0x402ex49();
  }
  function _0x402ex3c(_0x402ex35) {
    if (!SCodes) {
      return alert("Hata !");
    }
    zA = _0x402ex35;
    if (_0x402ex35 != _0x402exe7) {
      _0x402exc = _0x402ex35;
      _0x402exe7 = zA;
      _0x402ex4b();
    }
    _0x402exb("#helloContainer").attr("data-gamemode", zA);
  }
  function _0x402ex3d(_0x402ex35) {
    if (_0x402ex35 && _0x402ex35 != _0x402exd4) {
      if (_0x402exb("#region").val() != _0x402ex35) {
        _0x402exb("#region").val(_0x402ex35);
      }
      _0x402exd4 = _0x402exa.localStorage.location = _0x402ex35;
      _0x402exb(".btn-needs-server").prop("disabled", false);
      _0x402exe9 && _0x402ex4b();
    }
  }
  function _0x402ex3e(_0x402ex3f) {
    _0x402exea = true;
    _0x402exce = null;
    _0x402exb("#overlays").fadeIn(_0x402ex3f ? 200 : 3e3);
    _0x402ex3f || _0x402exb("#adsBottom").fadeIn(3e3);
  }
  function _0x402ex40(_0x402ex35) {
    _0x402ex35 = ~~_0x402ex35;
    var _0x402ex36 = (_0x402ex35 % 60).toString();
    _0x402ex35 = (~~(_0x402ex35 / 60)).toString();
    2 > _0x402ex36.length && (_0x402ex36 = "0" + _0x402ex36);
    return _0x402ex35 + ":" + _0x402ex36;
  }
  function _0x402ex41() {
    if (null == _0x402exc6) {
      return 0;
    }
    for (var _0x402ex35 = 0; _0x402ex35 < _0x402exc6.length; ++_0x402ex35) {
      if (-1 != _0x402exc1.indexOf(_0x402exc6[_0x402ex35].id)) {
        return _0x402ex35 + 1;
      }
    }
    return 0;
  }
  function _0x402ex42(_0x402ex35, _0x402ex36) {
    var _0x402ex37 = -1 != _0x402exc1.indexOf(_0x402ex35.id), _0x402ex38 = -1 != _0x402exc1.indexOf(_0x402ex36.id), _0x402ex30 = 30 > _0x402ex36.size;
    _0x402ex37 && _0x402ex30 && ++_0x402exda;
    _0x402ex30 || !_0x402ex37 || _0x402ex38 || ++_0x402exdb;
    _0x402ex30 || !_0x402ex37 || _0x402ex38;
  }
  function _0x402ex43(_0x402ex3, _0x402ex35) {
    if (_0x402ex3.indexOf("{") != -1 && _0x402ex3.indexOf("}") != -1) {
      var _0x402ex5 = _0x402ex3.indexOf("{");
      var _0x402ex30 = _0x402ex3.indexOf("}");
      var _0x402ex37 = _0x402ex3.slice(_0x402ex30 + 1);
      if (_0x402ex35) {
        if (_0x402ex37 == "") {
          _0x402ex37 = "Unnamed Cell";
        } else {
          _0x402ex37 = _0x402ex3.slice(_0x402ex30 + 1);
        }
      }
      return [_0x402ex3.slice(_0x402ex5 + 1, _0x402ex30), _0x402ex37];
    } else {
      return ["", _0x402ex3];
    }
  }
  function _0x402ex44() {
    _0x402exb(".stats-leaderboard-time").text(_0x402ex40(_0x402exdd));
    _0x402exb(".stats-food-eaten").text(_0x402exda);
    _0x402exb(".stats-highest-mass").text(~~(_0x402exd9 / 100));
    _0x402exb(".stats-time-alive").text(_0x402ex40((Date.now() - _0x402exf1) / 1e3));
    _0x402exb(".stats-cells-eaten").text(_0x402exdb);
    _0x402exb(".stats-top-position").text(0 == _0x402exdc ? ":(" : _0x402exdc);
    var _0x402ex35 = document.getElementById("statsGraph");
    if (_0x402ex35) {
      var _0x402ex36 = _0x402ex35.getContext("2d"), _0x402ex37 = _0x402ex35.width, _0x402ex35 = _0x402ex35.height;
      _0x402ex36.clearRect(0, 0, _0x402ex37, _0x402ex35);
      if (2 < _0x402exf0.length) {
        for (var _0x402ex38 = 200, _0x402ex45 = 0; _0x402ex45 < _0x402exf0.length; _0x402ex45++) {
          _0x402ex38 = Math.max(_0x402exf0[_0x402ex45], _0x402ex38);
        }
        _0x402ex36.lineWidth = 3;
        _0x402ex36.lineCap = "round";
        _0x402ex36.lineJoin = "round";
        _0x402ex36.strokeStyle = Pa;
        _0x402ex36.fillStyle = Pa;
        _0x402ex36.beginPath();
        _0x402ex36.moveTo(0, _0x402ex35 - _0x402exf0[0] / _0x402ex38 * (_0x402ex35 - 10) + 10);
        for (_0x402ex45 = 1; _0x402ex45 < _0x402exf0.length; _0x402ex45 += Math.max(~~(_0x402exf0.length / _0x402ex37), 1)) {
          for (var _0x402ex3 = _0x402ex45 / (_0x402exf0.length - 1) * _0x402ex37, _0x402ex46 = [], _0x402ex47 = -20; 20 >= _0x402ex47; ++_0x402ex47) {
            0 > _0x402ex45 + _0x402ex47 || _0x402ex45 + _0x402ex47 >= _0x402exf0.length || _0x402ex46.push(_0x402exf0[_0x402ex45 + _0x402ex47]);
          }
          _0x402ex46 = _0x402ex46.reduce(function (_0x402ex35, _0x402ex36) {
            return _0x402ex35 + _0x402ex36;
          }) / _0x402ex46.length / _0x402ex38;
          _0x402ex36.lineTo(_0x402ex3, _0x402ex35 - _0x402ex46 * (_0x402ex35 - 10) + 10);
        }
        _0x402ex36.stroke();
        _0x402ex36.globalAlpha = .5;
        _0x402ex36.lineTo(_0x402ex37, _0x402ex35);
        _0x402ex36.lineTo(0, _0x402ex35);
        _0x402ex36.fill();
        _0x402ex36.globalAlpha = 1;
      }
    }
  }
  function _0x402ex3e(_0x402ex3f, _0x402ex48) {
    _0x402exea = true;
    if (_0x402ex48 == 1) {
      if (_0x402exe5 == false) {
        _0x402ex44();
        _0x402exb("#statoverlay").show();
        _0x402exb("#stats").fadeIn(_0x402ex3f ? 200 : 3e3);
      } else {
        _0x402exb("#overlays").fadeIn(_0x402ex3f ? 200 : 3e3);
      }
    } else {
      _0x402exb("#overlays").fadeIn(_0x402ex3f ? 200 : 3e3);
    }
    _0x402exce = null;
  }
  function _0x402ex49() {
    _0x402exb("#region").val() ? _0x402exa.localStorage.location = _0x402exb("#region").val() : _0x402exa.localStorage.location && _0x402exb("#region").val(_0x402exa.localStorage.location);
    _0x402exb("#region").val() ? _0x402exb(".locationKnown").append(_0x402exb("#region")) : _0x402exb("#locationUnknown").append(_0x402exb("#region"));
  }
  function _0x402ex4a() {
    _0x402ex4c("wss://" + _0x402exc);
  }
  function _0x402ex4b() {
    if (_0x402exe9 && _0x402exd4) {
      _0x402exb("#connecting").show();
      _0x402ex4a();
    }
  }
  function _0x402ex4c(_0x402ex4d) {
    if (_0x402exbe) {
      _0x402exbe.onopen = null;
      _0x402exbe.onmessage = null;
      _0x402exbe.onclose = null;
      try {
        _0x402exbe.close();
      } catch (b) {}
      _0x402exbe = null;
    }
    var _0x402ex37 = _0x402exc;
    _0x402ex4d = "wss://" + _0x402ex37 + "?SCode=" + SCodes;
    _0x402exc1 = [];
    _0x402exc2 = [];
    _0x402exc3 = {};
    _0x402exc4 = [];
    _0x402exc5 = [];
    _0x402exc6 = [];
    _0x402exb8 = _0x402exe8 = null;
    _0x402exd9 = 0;
    this.leaderdefault = "Leaderboard";
    this.lastWinner = "Leaderboard";
    this.countdown = 3600;
    _0x402exda = 0;
    _0x402exf0 = [];
    _0x402exdb = 0;
    _0x402exdc = 0;
    _0x402exdd = 0;
    _0x402exbe = new WebSocket(_0x402ex4d);
    _0x402exbe.binaryType = "arraybuffer";
    _0x402exbe.onopen = _0x402ex51;
    _0x402exbe.onmessage = _0x402ex54;
    _0x402exbe.onclose = _0x402ex53;
    _0x402exbe.onerror = function (_0x402ex4e) {
      console.log("socket error" + _0x402ex4e);
    };
  }
  function _0x402ex4f(_0x402ex35) {
    return new DataView(new ArrayBuffer(_0x402ex35));
  }
  function _0x402ex50(_0x402ex35) {
    _0x402exbe.send(_0x402ex35.buffer);
  }
  function _0x402ex51() {
    var _0x402ex52;
    _0x402exfb = 100;
    _0x402exb("#connecting").hide();
    console.log("socket open");
    _0x402ex52 = _0x402ex4f(5);
    _0x402ex52.setUint8(0, 254);
    _0x402ex52.setUint32(1, 5, true);
    _0x402ex50(_0x402ex52);
    _0x402ex52 = _0x402ex4f(5);
    _0x402ex52.setUint8(0, 255);
    _0x402ex52.setUint32(1, 123456789, true);
    _0x402ex50(_0x402ex52);
    _0x402ex74();
  }
  function _0x402ex53() {
    console.log("socket close");
    setTimeout(_0x402ex4b, 500);
    _0x402exfb *= 1.5;
  }
  function _0x402ex54(_0x402ex52) {
    _0x402ex55(new DataView(_0x402ex52.data));
  }
  function _0x402ex55(_0x402ex52) {
    function _0x402ex56() {
      var _0x402ex29 = "", _0x402ex57;
      while ((_0x402ex57 = _0x402ex52.getUint16(_0x402ex58, true)) != 0) {
        _0x402ex58 += 2;
        _0x402ex29 += String.fromCharCode(_0x402ex57);
      }
      _0x402ex58 += 2;
      return _0x402ex29;
    }
    var _0x402ex58 = 0, _0x402ex59 = false;
    240 == _0x402ex52.getUint8(_0x402ex58) && (_0x402ex58 += 5);
    switch (_0x402ex52.getUint8(_0x402ex58++)) {
      case 185:
        _0x402ex66(_0x402ex52, _0x402ex58);
        break;
      case 17:
        _0x402ex6e = _0x402ex52.getFloat32(_0x402ex58, true);
        _0x402ex58 += 4;
        _0x402ex6d = _0x402ex52.getFloat32(_0x402ex58, true);
        _0x402ex58 += 4;
        _0x402exe6 = _0x402ex52.getFloat32(_0x402ex58, true);
        _0x402ex58 += 4;
        break;
      case 20:
        _0x402exc2 = [];
        _0x402exc1 = [];
        break;
      case 21:
        _0x402exec = _0x402ex52.getInt16(_0x402ex58, true);
        _0x402ex58 += 2;
        _0x402exed = _0x402ex52.getInt16(_0x402ex58, true);
        _0x402ex58 += 2;
        if (!_0x402exeb) {
          _0x402exeb = true;
          _0x402exee = _0x402exec;
          _0x402exef = _0x402exed;
        }
        break;
      case 32:
        _0x402exc1.push(_0x402ex52.getUint32(_0x402ex58, true));
        _0x402ex58 += 4;
        break;
      case 48:
        _0x402ex59 = true;
        _0x402exf7 = true;
        break;
      case 49:
        if (!_0x402ex59) {
          _0x402exf7 = false;
        }
        _0x402exe8 = null;
        var _0x402ex5a = _0x402ex52.getUint32(_0x402ex58, true);
        _0x402ex58 += 4;
        _0x402exc6 = [];
        for (_0x402ex4 = 0; _0x402ex4 < _0x402ex5a; ++_0x402ex4) {
          var _0x402ex5b = _0x402ex52.getUint32(_0x402ex58, true);
          _0x402ex58 += 4;
          _0x402exc6.push({id: _0x402ex5b, name: _0x402ex56()});
        }
        _0x402exa1();
        break;
      case 50:
        _0x402exe8 = [];
        var _0x402ex5c = _0x402ex52.getUint32(_0x402ex58, true);
        _0x402ex58 += 4;
        for (var _0x402ex4 = 0; _0x402ex4 < _0x402ex5c; ++_0x402ex4) {
          _0x402exe8.push(_0x402ex52.getFloat32(_0x402ex58, true));
          _0x402ex58 += 4;
        }
        _0x402exa1();
        break;
      case 64:
        _0x402excf = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        _0x402exd0 = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        _0x402exd1 = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        _0x402exd2 = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        _0x402ex6e = (_0x402exd1 + _0x402excf) / 2;
        _0x402ex6d = (_0x402exd2 + _0x402exd0) / 2;
        _0x402exe6 = 1;
        if (0 == _0x402exc2.length) {
          _0x402exbf = _0x402ex6e;
          _0x402exc0 = _0x402ex6d;
          _0x402exd3 = _0x402exe6;
        }
        break;
      case 90:
        var _0x402ex5d = new Date - latency;
        $("#latency").html("Latency " + _0x402ex5d + " ms;");
        var _0x402ex5e = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        $("#uptime").html("Uptime " + _0x402ex5e + " sec;");
        var _0x402ex5f = _0x402ex52.getFloat64(_0x402ex58, true);
        _0x402ex58 += 8;
        $("#onlineplayers").html("Players " + _0x402ex5f + ";");
        break;
      case 199:
        _0x402ex61(_0x402ex52, _0x402ex58);
        break;
      case 96:
        this.countdown = _0x402ex52.getUint16(_0x402ex58, true);
        break;
      case 97:
        this.lastWinner = "";
        this.lastWinner = _0x402ex56();
        if (this.lastWinner == "") {
          this.lastWinner = this.leaderdefault;
        }
        this.lastWinner = _0x402ex43(this.lastWinner.split("*")[0])[1];
        break;
    }
  }
  function _0x402ex61(_0x402ex62, _0x402ex58) {
    function _0x402ex56() {
      var _0x402ex29 = "", _0x402ex57;
      while ((_0x402ex57 = _0x402ex62.getUint16(_0x402ex58, true)) != 0) {
        _0x402ex58 += 2;
        _0x402ex29 += String.fromCharCode(_0x402ex57);
      }
      _0x402ex58 += 2;
      return _0x402ex29;
    }
    var _0x402ex63 = _0x402ex62.getUint8(_0x402ex58++);
    if (_0x402ex63 & 2) {
      _0x402ex58 += 4;
    }
    if (_0x402ex63 & 4) {
      _0x402ex58 += 8;
    }
    if (_0x402ex63 & 8) {
      _0x402ex58 += 16;
    }
    var _0x402ex46 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex64 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex36 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex65 = (_0x402ex46 << 16 | _0x402ex64 << 8 | _0x402ex36).toString(16);
    while (_0x402ex65.length > 6) {
      _0x402ex65 = "0" + _0x402ex65;
    }
    _0x402ex65 = "#" + _0x402ex65;
    name = _0x402ex43(_0x402ex56())[1];
    if (name == "") {
      name = "Unnamed Cell";
    }
    _0x402exc7.push({name: name, color: _0x402ex65, message: _0x402ex56(), time: Date.now()});
  }
  function _0x402ex66(_0x402ex62, _0x402ex58) {
    _0x402excd = +new Date;
    var _0x402ex67 = Math.random();
    _0x402exd8 = false;
    var _0x402ex68 = _0x402ex62.getUint16(_0x402ex58, true);
    _0x402ex58 += 2;
    for (_0x402ex4 = 0; _0x402ex4 < _0x402ex68; ++_0x402ex4) {
      var _0x402ex69 = _0x402exc3[_0x402ex62.getUint32(_0x402ex58, true)], _0x402ex6a = _0x402exc3[_0x402ex62.getUint32(_0x402ex58 + 4, true)];
      _0x402ex58 += 8;
      if (_0x402ex69 && _0x402ex6a) {
        _0x402ex6a.destroy();
        _0x402ex6a.ox = _0x402ex6a.x;
        _0x402ex6a.oy = _0x402ex6a.y;
        _0x402ex6a.oSize = _0x402ex6a.size;
        _0x402ex6a.nx = _0x402ex69.x;
        _0x402ex6a.ny = _0x402ex69.y;
        _0x402ex6a.nSize = _0x402ex6a.size;
        _0x402ex6a.updateTime = _0x402excd;
        _0x402ex42(_0x402ex69, _0x402ex6a);
      }
    }
    for (var _0x402ex4 = 0;;) {
      var _0x402ex6b = _0x402ex62.getUint32(_0x402ex58, true);
      _0x402ex58 += 4;
      if (0 == _0x402ex6b) {
        break;
      }
      ++_0x402ex4;
      var _0x402ex6c, _0x402ex6d, _0x402ex6e = _0x402ex62.getInt16(_0x402ex58, true);
      _0x402ex58 += 2;
      _0x402ex6d = _0x402ex62.getInt16(_0x402ex58, true);
      _0x402ex58 += 2;
      _0x402ex6c = _0x402ex62.getInt16(_0x402ex58, true);
      _0x402ex58 += 2;
      for (var _0x402ex46 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex64 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex36 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex65 = (_0x402ex46 << 16 | _0x402ex64 << 8 | _0x402ex36).toString(16); 6 > _0x402ex65.length;) {
        _0x402ex65 = "0" + _0x402ex65;
      }
      var _0x402ex6f = "#" + _0x402ex65, _0x402ex63 = _0x402ex62.getUint8(_0x402ex58++), _0x402ex70 = !!(_0x402ex63 & 1), _0x402ex71 = !!(_0x402ex63 & 16);
      _0x402ex63 & 2 && (_0x402ex58 += 4);
      _0x402ex63 & 4 && (_0x402ex58 += 8);
      _0x402ex63 & 8 && (_0x402ex58 += 16);
      for (var _0x402ex57, _0x402ex72 = "";;) {
        _0x402ex57 = _0x402ex62.getUint16(_0x402ex58, true);
        _0x402ex58 += 2;
        if (0 == _0x402ex57) {
          break;
        }
        _0x402ex72 += String.fromCharCode(_0x402ex57);
      }
      var _0x402ex39 = null;
      if (_0x402exc3.hasOwnProperty(_0x402ex6b)) {
        _0x402ex39 = _0x402exc3[_0x402ex6b];
        _0x402ex39.updatePos();
        _0x402ex39.ox = _0x402ex39.x;
        _0x402ex39.oy = _0x402ex39.y;
        _0x402ex39.oSize = _0x402ex39.size;
        _0x402ex39.color = _0x402ex6f;
      } else {
        _0x402ex39 = new _0x402exab(_0x402ex6b, _0x402ex6e, _0x402ex6d, _0x402ex6c, _0x402ex6f, _0x402ex72);
        _0x402exc4.push(_0x402ex39);
        _0x402ex39.ka = _0x402ex6e;
        _0x402ex39.la = _0x402ex6d;
      }
      _0x402ex39.isVirus = _0x402ex70;
      _0x402ex39.isAgitated = _0x402ex71;
      _0x402ex39.nx = _0x402ex6e;
      _0x402ex39.ny = _0x402ex6d;
      _0x402ex39.nSize = _0x402ex6c;
      _0x402ex39.updateCode = _0x402ex67;
      _0x402ex39.updateTime = _0x402excd;
      _0x402ex39.flag = _0x402ex63;
      _0x402ex72 && _0x402ex39.setName(_0x402ex72);
      if (-1 != _0x402exc1.indexOf(_0x402ex6b) && -1 == _0x402exc2.indexOf(_0x402ex39)) {
        document.getElementById("overlays").style.display = "none";
        _0x402exc2.push(_0x402ex39);
        if (1 == _0x402exc2.length) {
          _0x402exbf = _0x402ex39.x;
          _0x402exc0 = _0x402ex39.y;
        }
      }
    }
    _0x402ex68 = _0x402ex62.getUint32(_0x402ex58, true);
    _0x402ex58 += 4;
    for (_0x402ex4 = 0; _0x402ex4 < _0x402ex68; _0x402ex4++) {
      var _0x402ex5b = _0x402ex62.getUint32(_0x402ex58, true);
      _0x402ex58 += 4;
      _0x402ex39 = _0x402exc3[_0x402ex5b];
      null != _0x402ex39 && _0x402ex39.destroy();
    }
    _0x402exd8 && 0 == _0x402exc2.length && _0x402ex3e(false, 1);
  }
  function _0x402ex73() {
    var _0x402ex52;
    if (null != _0x402exbe && _0x402exbe.readyState == _0x402exbe.OPEN && Sfreeze != true) {
      _0x402ex52 = _0x402exc8 - _0x402exbb / 2;
      var _0x402ex36 = _0x402exc9 - _0x402exbc / 2;
      if (64 <= _0x402ex52 * _0x402ex52 + _0x402ex36 * _0x402ex36 && !(.01 > Math.abs(_0x402exfc - _0x402exca) && .01 > Math.abs(_0x402exfd - _0x402excb))) {
        _0x402exfc = _0x402exca;
        _0x402exfd = _0x402excb;
        _0x402ex52 = _0x402ex4f(21);
        _0x402ex52.setUint8(0, 185);
        _0x402ex52.setFloat64(1, _0x402exca, true);
        _0x402ex52.setFloat64(9, _0x402excb, true);
        _0x402ex52.setUint32(17, 0, true);
        _0x402ex50(_0x402ex52);
      }
    }
  }
  function _0x402ex74() {
    if (null != _0x402exbe && _0x402exbe.readyState == _0x402exbe.OPEN && null != _0x402exce) {
      var _0x402ex52 = _0x402ex4f(1 + 2 * _0x402exce.length);
      _0x402ex52.setUint8(0, 129);
      for (var _0x402ex4 = 0; _0x402ex4 < _0x402exce.length; ++_0x402ex4) {
        _0x402ex52.setUint16(1 + 2 * _0x402ex4, _0x402exce.charCodeAt(_0x402ex4), true);
      }
      _0x402ex50(_0x402ex52);
    }
  }
  function _0x402ex75() {
    m = _0x402exa.innerWidth;
    q = _0x402exa.innerHeight;
    canvas.width = canvas.width = m;
    canvas.height = canvas.height = q;
    var _0x402ex35 = _0x402exb("#helloContainer");
    _0x402ex35.css("transform", "none");
    var _0x402ex37 = _0x402exa.innerHeight;
    660 > _0x402ex37 / 1.1 ? _0x402ex35.css("transform", "translate(-50%, -50%) scale(" + _0x402ex37 / 660 / 1.1 + ")") : _0x402ex35.css("transform", "translate(-50%, -50%)");
  }
  function _0x402ex76(_0x402ex77) {
    if (null != _0x402exbe && _0x402exbe.readyState == _0x402exbe.OPEN && _0x402ex77.length < 200 && _0x402ex77.length > 0) {
      var _0x402ex52 = _0x402ex4f(4 + 2 * _0x402ex77.length);
      var _0x402ex58 = 0;
      _0x402ex52.setUint8(_0x402ex58++, 199);
      _0x402ex52.setUint8(_0x402ex58++, 0);
      for (var _0x402ex4 = 0; _0x402ex4 < _0x402ex77.length; ++_0x402ex4) {
        _0x402ex52.setUint16(_0x402ex58, _0x402ex77.charCodeAt(_0x402ex4), true);
        _0x402ex58 += 2;
      }
      _0x402ex52.setUint16(_0x402ex58, 57344, true);
      _0x402ex50(_0x402ex52);
    }
  }
  function _0x402ex79(_0x402ex35) {
    if (null != _0x402exbe && _0x402exbe.readyState == _0x402exbe.OPEN) {
      var _0x402ex52 = _0x402ex4f(1);
      _0x402ex52.setUint8(0, _0x402ex35);
      _0x402ex50(_0x402ex52);
    }
  }
  function _0x402ex7a() {
    _0x402ex82();
    _0x402exa.requestAnimationFrame(_0x402ex7a);
  }
  function _0x402ex7b() {
    window.scrollTo(0, 0);
    _0x402exbb = _0x402exa.innerWidth;
    _0x402exbc = _0x402exa.innerHeight;
    _0x402exb7.width = _0x402exbb;
    _0x402exb7.height = _0x402exbc;
    var _0x402ex7c = _0x402exb("#helloDialog");
    _0x402ex7c.css("transform", "none");
    var _0x402ex7d = _0x402ex7c.height();
    _0x402ex7d > _0x402exbc / 1.1 ? _0x402ex7c.css("transform", "translate(-50%, -50%) scale(" + _0x402exbc / _0x402ex7d / 1.1 + ")") : _0x402ex7c.css("transform", "translate(-50%, -50%)");
    _0x402ex82();
  }
  function _0x402ex7e() {
    var _0x402ex7f;
    _0x402ex7f = Math.max(_0x402exbc / 1080, _0x402exbb / 1920);
    return _0x402ex7f * _0x402exf3;
  }
  function _0x402ex80() {
    if (0 != _0x402exc2.length) {
      for (var _0x402ex81 = 0, _0x402ex4 = 0; _0x402ex4 < _0x402exc2.length; _0x402ex4++) {
        _0x402ex81 += _0x402exc2[_0x402ex4].size;
      }
      _0x402ex81 = Math.pow(Math.min(64 / _0x402ex81, 1), .4) * _0x402ex7e();
      _0x402exd3 = (9 * _0x402exd3 + _0x402ex81) / 10;
    }
  }
  function _0x402ex82() {
    var _0x402ex35, _0x402ex83 = Date.now();
    ++_0x402excc;
    var _0x402ex84 = Date.now() - _0x402exf9;
    if (_0x402ex84 > 50) {
      _0x402exf9 = Date.now();
      _0x402ex73();
    }
    _0x402excd = _0x402ex83;
    if (0 < _0x402exc2.length) {
      _0x402ex80();
      var _0x402ex37 = _0x402ex35 = 0;
      for (var _0x402ex38 = 0; _0x402ex38 < _0x402exc2.length; _0x402ex38++) {
        _0x402exc2[_0x402ex38].updatePos();
        _0x402ex35 += _0x402exc2[_0x402ex38].x / _0x402exc2.length;
        _0x402ex37 += _0x402exc2[_0x402ex38].y / _0x402exc2.length;
      }
      _0x402ex6e = _0x402ex35;
      _0x402ex6d = _0x402ex37;
      _0x402exe6 = _0x402exd3;
      _0x402exbf = (_0x402exbf + _0x402ex35) / 2;
      _0x402exc0 = (_0x402exc0 + _0x402ex37) / 2;
    } else {
      _0x402exbf = (29 * _0x402exbf + _0x402ex6e) / 30;
      _0x402exc0 = (29 * _0x402exc0 + _0x402ex6d) / 30;
      _0x402exd3 = (9 * _0x402exd3 + _0x402exe6 * _0x402ex7e()) / 10;
    }
    _0x402ex34();
    _0x402ex3a();
    _0x402exa6.fillStyle = _0x402exde ? "#111111" : "#F2FBFF";
    _0x402exa6.fillRect(0, 0, _0x402exbb, _0x402exbc);
    _0x402exc4.sort(function (_0x402ex35, _0x402ex36) {
      return _0x402ex35.size == _0x402ex36.size ? _0x402ex35.id - _0x402ex36.id : _0x402ex35.size - _0x402ex36.size;
    });
    _0x402exa6.save();
    _0x402exa6.translate(_0x402exbb / 2, _0x402exbc / 2);
    _0x402exa6.scale(_0x402exd3, _0x402exd3);
    _0x402exa6.translate(-_0x402exbf, -_0x402exc0);
    if (_0x402exe3 == true) {
      _0x402exa6.globalAlpha = .6;
    } else {
      _0x402exa6.globalAlpha = 1;
    }
    for (_0x402ex38 = 0; _0x402ex38 < _0x402exc4.length; _0x402ex38++) {
      _0x402exc4[_0x402ex38].drawOneCell(_0x402exa6);
    }
    if (_0x402exeb) {
      _0x402exee = (3 * _0x402exee + _0x402exec) / 4;
      _0x402exef = (3 * _0x402exef + _0x402exed) / 4;
      _0x402exa6.save();
      _0x402exa6.strokeStyle = "#FFAAAA";
      _0x402exa6.lineWidth = 10;
      _0x402exa6.lineCap = "round";
      _0x402exa6.lineJoin = "round";
      _0x402exa6.globalAlpha = .5;
      _0x402exa6.beginPath();
      for (_0x402ex38 = 0; _0x402ex38 < _0x402exc2.length; _0x402ex38++) {
        _0x402exa6.moveTo(_0x402exc2[_0x402ex38].x, _0x402exc2[_0x402ex38].y);
        _0x402exa6.lineTo(_0x402exee, _0x402exef);
      }
      _0x402exa6.restore();
    }
    _0x402exa6.strokeStyle = "#FF0000";
    _0x402exa6.lineWidth = 50;
    _0x402exa6.lineCap = "round";
    _0x402exa6.lineJoin = "round";
    _0x402exa6.beginPath();
    _0x402exa6.moveTo(_0x402excf, _0x402exd0);
    _0x402exa6.lineTo(_0x402exd1, _0x402exd0);
    _0x402exa6.lineTo(_0x402exd1, _0x402exd2);
    _0x402exa6.lineTo(_0x402excf, _0x402exd2);
    _0x402exa6.closePath();
    _0x402exa6.stroke();
    _0x402exa6.restore();
    _0x402exa6.globalAlpha = 1;
    _0x402exa6.fillStyle = "#0000FF";
    _0x402exa6.font = "bold 32px Ubuntu";
    if (this.countdown < 3600) {
      var _0x402ex85 = "";
      var _0x402ex86 = "";
      var _0x402ex87 = Math.floor(this.countdown / 60);
      if (_0x402ex87 < 10) {
        _0x402ex85 += "0";
      }
      _0x402ex85 += _0x402ex87 + ":";
      var _0x402ex88 = this.countdown % 60;
      if (_0x402ex88 < 10) {
        _0x402ex85 += "0";
      }
      _0x402ex85 += _0x402ex88;
      if (this.countdown < 60) {
        _0x402ex86 = " sec";
      } else {
        _0x402ex86 = " min";
      }
      $("#countdown").html("Restart in " + _0x402ex85 + _0x402ex86);
    }
    _0x402exb9 && _0x402exb9.width && _0x402exa6.drawImage(_0x402exb9, _0x402exbb - _0x402exb9.width - 10, 10);
    if (!_0x402exe4) {
      if (_0x402exba != null && _0x402exba.width > 0) {
        _0x402exa6.drawImage(_0x402exba, 0, _0x402exbc - _0x402exba.height - 50);
      }
    }
    var _0x402ex89 = _0x402ex9d();
    _0x402exd9 = Math.max(_0x402exd9, _0x402ex9d());
    if (0 != _0x402exd9) {
      _0x402exa6.globalAlpha = .8;
      if (_0x402exde == true) {
        _0x402exa6.fillStyle = "#FFFFFF";
      } else {
        _0x402exa6.fillStyle = "#000000";
      }
      _0x402exa6.font = "bold 24px Ubuntu";
      var _0x402ex8a = document.getElementsByTagName("html")[0].getAttribute("lang");
      if (_0x402ex8a == "tr") {
        _0x402exa6.fillText("Skor: " + ~~(_0x402ex89 / 100), 10, 34);
        _0x402exa6.fillText("Max.: " + ~~(_0x402exd9 / 100), 10, 60);
      } else {
        _0x402exa6.fillText("Score: " + ~~(_0x402ex89 / 100), 10, 34);
        _0x402exa6.fillText("Max.: " + ~~(_0x402exd9 / 100), 10, 60);
      }
    }
    if (!_0x402exe4) {
      var _0x402ex8b = 0;
      for (var _0x402ex4 = _0x402exc7.length - 1; _0x402ex4 >= 0; _0x402ex4--) {
        _0x402ex8b++;
        if (_0x402ex8b > 15) {
          break;
        }
        var _0x402ex72 = _0x402exc7[_0x402ex4].name.trim();
        if (_0x402ex72 == "") {
          _0x402ex72 = "Unnamed Cell";
        }
        var _0x402ex8c = _0x402exc7[_0x402ex4].message.trim();
        var _0x402ex8d = " : " + _0x402ex8c;
        _0x402exa6.font = "17px Arial";
        _0x402exc7[_0x402ex4].name_x = 15;
        _0x402exc7[_0x402ex4].name_y = _0x402exbc - 30 - 20 * _0x402ex8b;
        _0x402exc7[_0x402ex4].name_w = _0x402exa6.measureText(_0x402ex72).width;
        _0x402exc7[_0x402ex4].name_h = 18;
        _0x402exc7[_0x402ex4].msg_x = 15 + _0x402exc7[_0x402ex4].name_w;
        _0x402exc7[_0x402ex4].msg_y = _0x402exc7[_0x402ex4].name_y;
        _0x402exc7[_0x402ex4].msg_w = _0x402exa6.measureText(_0x402ex8d).width;
        _0x402exc7[_0x402ex4].msg_h = _0x402exc7[_0x402ex4].name_h;
        _0x402exa6.fillStyle = _0x402exc7[_0x402ex4].color;
        _0x402exa6.fillText(_0x402ex72, _0x402exc7[_0x402ex4].name_x, _0x402exc7[_0x402ex4].name_y);
        if (_0x402exde == true) {
          _0x402exa6.fillStyle = "#FFFFFF";
        } else {
          _0x402exa6.fillStyle = "#000000";
        }
        _0x402exa6.fillText(_0x402ex8d, _0x402exc7[_0x402ex4].msg_x, _0x402exc7[_0x402ex4].msg_y);
      }
    }
    if (!_0x402ex1f) {
      _0x402ex8f();
    }
    var _0x402ex8e = Date.now() - _0x402ex83;
    _0x402ex8e > 16.666666666666668 ? _0x402exff -= .01 : _0x402ex8e < 15.384615384615385 && (_0x402exff += .01);
    .4 > _0x402exff && (_0x402exff = .4);
    1 < _0x402exff && (_0x402exff = 1);
  }
  function _0x402ex8f() {
    if (_0x402exc2.length == 0 || false) {
      return;
    }
    _0x402exa6.save();
    function _0x402ex90(_0x402ex35, _0x402ex36) {
      return !_0x402ex36 ? _0x402ex35 : _0x402ex90(_0x402ex36, _0x402ex35 % _0x402ex36);
    }
    _0x402exa6.beginPath();
    _0x402exa6.fillStyle = "rgba(0,0,0,.25)";
    var _0x402ex6c = _0x402ex1f ? 150 : 200;
    _0x402exa6.lineWidth = 1.5;
    var _0x402ex91 = _0x402exbb - _0x402ex6c - 10;
    var _0x402ex92 = _0x402exbc - _0x402ex6c - 5;
    _0x402exa6.rect(_0x402ex91, _0x402ex92, _0x402ex6c, _0x402ex6c);
    _0x402exa6.lineWidth = 1.25;
    var _0x402ex93 = _0x402exbf / (_0x402exd1 - _0x402excf);
    var _0x402ex94 = _0x402exc0 / (_0x402exd2 - _0x402exd0);
    var _0x402ex6e = _0x402ex93 * _0x402ex6c + _0x402ex91 + _0x402ex6c / 2 - 100;
    var _0x402ex6d = _0x402ex94 * _0x402ex6c + _0x402ex92 + _0x402ex6c / 2 - 100;
    var _0x402ex95 = bh = _0x402ex6c;
    var _0x402ex96 = -1;
    var _0x402ex97 = -1;
    for (var _0x402ex13 = 0; _0x402ex13 <= _0x402ex95; _0x402ex13 += 40) {
      if (_0x402ex13 != _0x402ex95) {
        var _0x402exf = .5 + _0x402ex13 + _0x402ex91;
        var _0x402ex10 = _0x402ex92;
        if (_0x402exe(_0x402exf, _0x402ex10, _0x402exf + 40, _0x402ex10 + bh, _0x402ex6e, _0x402ex6d)) {
          _0x402ex96 = _0x402exf;
        }
        if (_0x402ex13 == 0) {
          continue;
        }
        _0x402exa6.moveTo(.5 + _0x402ex13 + _0x402ex91, _0x402ex92);
        _0x402exa6.lineTo(.5 + _0x402ex13 + _0x402ex91, bh + _0x402ex92);
      }
      if (_0x402exde == true) {
        _0x402exa6.fillStyle = "#FFFFFF";
      } else {
        _0x402exa6.fillStyle = "#000000";
      }
      _0x402exa6.font = "700 18px nunito";
      _0x402exa6.textAlign = "center";
      _0x402exa6.strokeStyle = "white";
      _0x402exa6.lineWidth = 1;
      _0x402exa6.globalAlpha = .35;
      for (var _0x402ex4 = 0; _0x402ex4 < 5; _0x402ex4++) {
        _0x402exa6.fillText(String.fromCharCode(_0x402ex4 + 65) + _0x402ex13 / 40, .5 + _0x402ex13 + _0x402ex91 - 20, _0x402ex92 + 25.5 + _0x402ex4 * 40);
      }
    }
    for (var _0x402ex14 = 0; _0x402ex14 <= bh; _0x402ex14 += 40) {
      if (_0x402ex14 != bh) {
        var _0x402exf = _0x402ex91;
        var _0x402ex10 = .5 + _0x402ex14 + _0x402ex92;
        if (_0x402exe(_0x402exf, _0x402ex10, _0x402exf + _0x402ex95, _0x402ex10 + 40, _0x402ex6e, _0x402ex6d)) {
          _0x402ex97 = _0x402ex10;
        }
        if (_0x402ex14 == 0) {
          continue;
        }
        _0x402exa6.moveTo(_0x402ex91, .5 + _0x402ex14 + _0x402ex92);
        _0x402exa6.lineTo(_0x402ex95 + _0x402ex91, .5 + _0x402ex14 + _0x402ex92);
      }
    }
    if (_0x402exc2.length > 0 && _0x402ex96 > -1 && _0x402ex97 > -1) {
      _0x402exa6.fillStyle = "#ccff00";
      _0x402exa6.globalAlpha = .3;
      _0x402exa6.fillRect(_0x402ex96, _0x402ex97, 40, 40);
    }
    _0x402exa6.globalAlpha = 1;
    _0x402exa6.strokeStyle = "rgba(238,0,17,.2)";
    _0x402exa6.stroke();
    _0x402exa6.closePath();
    for (var _0x402ex4 = 0; _0x402ex4 < _0x402exc2.length; _0x402ex4++) {
      var _0x402ex98 = _0x402exc2[_0x402ex4];
      var _0x402ex99 = _0x402ex98.ox / (_0x402exd1 - _0x402excf);
      var _0x402ex9a = _0x402ex98.oy / (_0x402exd2 - _0x402exd0);
      var _0x402ex13 = _0x402ex99 * _0x402ex6c + _0x402ex91 + _0x402ex6c / 2 - 100;
      var _0x402ex14 = _0x402ex9a * _0x402ex6c + _0x402ex92 + _0x402ex6c / 2 - 100;
      var _0x402ex89 = Math.max(2, _0x402ex98.size / (_0x402ex6c / 2));
      _0x402exa6.fillStyle = _0x402ex98.color;
      if (_0x402ex4 == 0) {
        _0x402exa6.font = "bold " + (14 + _0x402ex89) + "px Ubuntu";
        var _0x402ex9b = _0x402exa6.measureText(_0x402ex98.name);
        _0x402exa6.strokestyle = "black";
      }
      _0x402exa6.beginPath();
      _0x402exa6.strokeStyle = "black";
      _0x402exa6.lineWidth = 1;
      _0x402exa6.globalAlpha = 1;
      _0x402exa6.arc(_0x402ex13, _0x402ex14, _0x402ex89, 0, 2 * Math.PI);
      _0x402exa6.stroke();
      _0x402exa6.fill();
      _0x402exa6.closePath();
    }
    _0x402exa6.restore();
  }
  function _0x402ex9c() {
    if (_0x402exde) {
      _0x402exa6.fillStyle = "#111111";
    } else {}
    _0x402exa6.fillRect(0, 0, _0x402exbb, _0x402exbc);
    _0x402exa6.save();
    if (_0x402exde) {
      _0x402exa6.strokeStyle = "#AAAAAA";
    } else {}
    _0x402exa6.globalAlpha = .2;
    _0x402exa6.scale(_0x402exd3, _0x402exd3);
    var _0x402ex35 = _0x402exbb / _0x402exd3, _0x402ex36 = _0x402exbc / _0x402exd3;
    _0x402exa6.restore();
  }
  function _0x402ex9d() {
    for (var _0x402ex9e = 0, _0x402ex4 = 0; _0x402ex4 < _0x402exc2.length; _0x402ex4++) {
      _0x402ex9e += _0x402exc2[_0x402ex4].nSize * _0x402exc2[_0x402ex4].nSize;
    }
    return _0x402ex9e;
  }
  function _0x402ex9f() {
    var _0x402ex35;
    _0x402ex35 = 1 * Math.max(q / 1080, m / 1920);
    return _0x402ex35 *= M;
  }
  function _0x402exa0(_0x402ex35) {
    for (var _0x402ex36 = _0x402ex35.length, _0x402ex37, _0x402ex38; 0 < _0x402ex36;) {
      _0x402ex38 = Math.floor(Math.random() * _0x402ex36);
      _0x402ex36--;
      _0x402ex37 = _0x402ex35[_0x402ex36];
      _0x402ex35[_0x402ex36] = _0x402ex35[_0x402ex38];
      _0x402ex35[_0x402ex38] = _0x402ex37;
    }
  }
  function _0x402exa1() {
    _0x402exb9 = null;
    var _0x402exa5 = 140;
    if (null != _0x402exe8) {
      _0x402exa5 = 200;
    }
    if (null != _0x402exe8 || 0 != _0x402exc6.length) {
      _0x402exb9 = document.createElement("canvas");
    }
    var _0x402exa6 = _0x402exb9.getContext("2d"), _0x402exa7 = 110;
    _0x402exa7 = null == _0x402exe8 ? _0x402exa7 + 24 * _0x402exc6.length : _0x402exa7 + 180;
    var _0x402exa8 = Math.min(.22 * _0x402exbc, Math.min(200, .3 * _0x402exbb)) / 200;
    _0x402exb9.width = _0x402exa5 * _0x402exa8;
    _0x402exb9.height = _0x402exa7 * _0x402exa8;
    _0x402exa6.scale(_0x402exa8, _0x402exa8);
    _0x402exa6.globalAlpha = .4;
    _0x402exa6.fillStyle = "#000000";
    _0x402exa6.fillRect(0, 0, 200, _0x402exa7);
    _0x402exa6.globalAlpha = 1;
    _0x402exa6.fillStyle = "#FFFFFF";
    var _0x402ex36;
    var _0x402exa9 = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    if (null == _0x402exe8) {
      _0x402exa6.fillStyle = "yellow";
      _0x402exa6.font = "12px Ubuntu";
      var _0x402exaa = new Image;
      _0x402exaa.onload = function () {
        _0x402exa6.drawImage(_0x402exaa, 40, 0);
      };
      _0x402exaa.src = "/img/lbfirst.png";
      _0x402exa6.fillText(this.lastWinner, 70 - _0x402exa6.measureText(this.lastWinner).width / 2, 80);
      for (_0x402ex36 = 0; _0x402ex36 < _0x402exc6.length; ++_0x402ex36) {
        c = _0x402exc6[_0x402ex36].name.split("*")[0] || "Unnamed Cell";
        c = _0x402ex43(c)[1];
        if (c == "") {
          c = "Unnamed Cell";
        }
        if (-1 != _0x402exc1.indexOf(_0x402exc6[_0x402ex36].id)) {
          _0x402exc2[0].name && (c = _0x402ex43(_0x402exc2[0].name)[1]);
          if (c == "") {
            c = "Unnamed Cell";
          }
          _0x402exa6.fillStyle = "#FFAAAA";
          if (!_0x402exf7) {
            c = _0x402ex36 + 1 + ". " + c;
          }
          _0x402exa6.fillText(c, 70 - _0x402exa6.measureText(c).width / 2, 125 + 23 * _0x402ex36);
        } else {
          _0x402exa6.fillStyle = _0x402exa9[_0x402ex36];
          if (!_0x402exf7) {
            c = _0x402ex36 + 1 + ". " + c;
          }
          _0x402exa6.fillText(c, 70 - _0x402exa6.measureText(c).width / 2, 125 + 23 * _0x402ex36);
        }
      }
    } else {
      for (_0x402ex36 = c = 0; _0x402ex36 < _0x402exe8.length; ++_0x402ex36) {
        var _0x402ex38 = c + _0x402exe8[_0x402ex36] * Math.PI * 2;
        _0x402exa6.fillStyle = _0x402exf2[_0x402ex36 + 1];
        _0x402exa6.beginPath();
        _0x402exa6.moveTo(100, 140);
        _0x402exa6.arc(100, 140, 80, c, _0x402ex38, false);
        _0x402exa6.fill();
        c = _0x402ex38;
      }
    }
  }
  function _0x402exab(_0x402exac, _0x402exad, _0x402exae, _0x402exaf, _0x402exb0, _0x402exb1) {
    this.id = _0x402exac;
    this.ox = this.x = _0x402exad;
    this.oy = this.y = _0x402exae;
    this.oSize = this.size = _0x402exaf;
    this.color = _0x402exb0;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(_0x402exb1);
  }
  function _0x402exb2(_0x402exaf, _0x402exb0, _0x402exb3, _0x402exb4) {
    _0x402exaf && (this._size = _0x402exaf);
    _0x402exb0 && (this._color = _0x402exb0);
    this._stroke = !!_0x402exb3;
    _0x402exb4 && (this._strokeColor = _0x402exb4);
  }
  var _0x402exb5 = _0x402exa.location.protocol, _0x402exb6 = "https:" == _0x402exb5;
  var _0x402exb7, _0x402exa6, _0x402exb8, _0x402exb9, _0x402exba, _0x402exbb, _0x402exbc, _0x402exbd = null, _0x402exbe = null, _0x402exbf = 0, _0x402exc0 = 0, _0x402exc1 = [], _0x402exc2 = [], _0x402exc3 = {_0x402ex6b: _0x402ex39}, _0x402exc4 = [], _0x402exc5 = [], _0x402exc6 = [], _0x402exc7 = [], _0x402exc8 = 0, _0x402exc9 = 0, _0x402exca = -1, _0x402excb = -1, _0x402excc = 0, _0x402excd = 0, _0x402exce = null, _0x402excf = 0, _0x402exd0 = 0, _0x402exd1 = 1e4, _0x402exd2 = 1e4, _0x402exd3 = .1, _0x402exd4 = null, _0x402exd5 = true, _0x402exd6 = true, _0x402exd7 = false, _0x402exd8 = false, _0x402exd9 = 0, _0x402exda = 0, _0x402exdb = 0, _0x402exdc = 0, _0x402exdd = 0, _0x402exde = false, _0x402exe0 = false, _0x402exe1 = false, _0x402exe2 = .9, _0x402exe3 = false, _0x402exe4 = false, _0x402exe5 = false, _0x402ex6e = _0x402exbf = ~~((_0x402excf + _0x402exd1) / 2), _0x402ex6d = _0x402exc0 = ~~((_0x402exd0 + _0x402exd2) / 2), _0x402exe6 = 1, _0x402exe7 = "", _0x402exe8 = null, _0x402exe9 = false, _0x402exea = true, _0x402exeb = false, _0x402exec = 0, _0x402exed = 0, _0x402exee = 0, _0x402exef = 0, _0x402exf0 = [], _0x402exf1 = Date.now(), _0x402exdb = 0, _0x402exf2 = ["#333333", "#FF3333", "#33FF33", "#3333FF"], _0x402exf3 = .7, _0x402exf4 = "ontouchstart" in _0x402exa && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), _0x402exf5 = new Image, _0x402exf6 = new Image, _0x402exf7 = false;
  _0x402exf5.src = "../img/images/split.png";
  _0x402exf6.src = "../img/images/feed.png";
  var _0x402exf8 = document.createElement("canvas");
  var _0x402exf9 = Date.now();
  _0x402exa.isSpectating = false;
  var _0x402exf9 = Date.now();
  _0x402exa.setNick = function (_0x402ex3f, _0x402ex36) {
    if (_0x402ex3f == null || !_0x402ex3f || _0x402ex3f == "") {
      alert("Enter Nick / Invalid Nick Input");
    } else {
      _0x402ex3f = _0x402ex3f.replace(/[|&;+,]/g, ":)");
      _0x402ex3b();
      _0x402exce = "{" + _0x402ex36 + "}" + _0x402ex3f;
      _0x402ex74();
      _0x402exd9 = 0;
      _0x402exf0 = [];
      _0x402exda = 0;
      _0x402exf1 = Date.now();
      _0x402exdc = 0;
      _0x402exdd = 0;
      _0x402exdb = 0;
    }
  };
  _0x402exa.setRegion = _0x402ex3d;
  _0x402exa.setSkins = function (_0x402ex3f) {
    _0x402exd5 = _0x402ex3f;
  };
  _0x402exa.setNames = function (_0x402ex3f) {
    _0x402exd6 = _0x402ex3f;
  };
  _0x402exa.setDarkTheme = function (_0x402ex3f) {
    _0x402exde = _0x402ex3f;
  };
  _0x402exa.setColors = function (_0x402ex3f) {
    _0x402exd7 = _0x402ex3f;
  };
  _0x402exa.setShowMass = function (_0x402ex3f) {
    _0x402exe0 = _0x402ex3f;
  };
  _0x402exa.setTransparent = function (_0x402ex3f) {
    _0x402exe3 = _0x402ex3f;
  };
  _0x402exa.setSmooth = function (_0x402ex3f) {
    _0x402exe2 = _0x402ex3f ? 2 : .4;
  };
  _0x402exa.setZoom = function (_0x402ex3f) {
    _0x402exe1 = _0x402ex3f;
  };
  _0x402exa.setHideChat = function (_0x402ex3f) {
    _0x402exe4 = _0x402ex3f;
    if (_0x402ex3f) {
      _0x402exb("#chat_textbox").hide();
    } else {
      _0x402exb("#chat_textbox").show();
    }
  };
  _0x402exa.setSkipStats = function (_0x402ex3f) {
    _0x402exe5 = _0x402ex3f;
  };
  _0x402exa.closeStats = function () {
    _0x402exb("#statoverlay").hide();
    _0x402exb("#stats").hide();
    _0x402exb("#overlays").fadeIn(200);
  };
  _0x402exa.ClearChat = function () {
    _0x402exc7 = [];
  };
  _0x402exa.SendMap = function () {
    _0x402ex76("psx2psx2");
  };
  _0x402exa.spectate = function () {
    _0x402exce = null;
    _0x402exa.isSpectating = true;
    _0x402ex79(1);
    _0x402ex3b();
  };
  _0x402exa.setGameMode = function (_0x402ex3f) {
    _0x402ex3c(_0x402ex3f);
  };
  if (null != _0x402exa.localStorage) {
    if (null == _0x402exa.localStorage.AB8) {
      _0x402exa.localStorage.AB8 = ~~(100 * Math.random());
    }
    _0x402exdb = +_0x402exa.localStorage.AB8;
    _0x402exa.ABGroup = _0x402exdb;
  }
  setInterval(function () {
    var _0x402ex35 = _0x402ex41();
    if (0 != _0x402ex35) {
      ++_0x402exdd;
      if (0 == _0x402exdc) {
        _0x402exdc = _0x402ex35;
      }
      _0x402exdc = Math.min(_0x402exdc, _0x402ex35);
    }
  }, 1e3);
  setInterval(function () {
    if (null != _0x402exbe && _0x402exbe.readyState == _0x402exbe.OPEN) {
      msg = _0x402ex4f(5);
      msg.setUint8(0, 90);
      msg.setUint32(1, 123456789, true);
      latency = new Date;
      _0x402ex50(msg);
    }
  }, 1e3);
  setInterval(function () {
    _0x402exf0.push(_0x402ex9d() / 100);
  }, 16.666666666666668);
  var _0x402exfa = {ZW: "EU-London"};
  _0x402exa.connect = _0x402ex4c;
  var _0x402exfb = 500, _0x402exfc = -1, _0x402exfd = -1, _0x402exff = 1, _0x402ex101 = {_0x402ex114: new Image}, _0x402ex102 = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), _0x402ex103 = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), _0x402ex104 = ["_canvas'blob"];
  _0x402exab.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
    var _0x402ex105;
    for (_0x402ex105 = 0; _0x402ex105 < _0x402exc4.length; _0x402ex105++) {
      if (_0x402exc4[_0x402ex105] == this) {
        _0x402exc4.splice(_0x402ex105, 1);
        break;
      }
    }
    delete _0x402exc3[this.id];
    _0x402ex105 = _0x402exc2.indexOf(this);
    if (-1 != _0x402ex105) {
      _0x402exd8 = true;
      _0x402exc2.splice(_0x402ex105, 1);
    }
    _0x402ex105 = _0x402exc1.indexOf(this.id);
    if (-1 != _0x402ex105) {
      _0x402exc1.splice(_0x402ex105, 1);
    }
    this.destroyed = true;
    _0x402exc5.push(this);
  }, getNameSize: function () {
    return Math.max(~~(.3 * this.size), 24);
  }, setName: function (_0x402ex35) {
    if (this.name = _0x402ex35) {
      if (null == this.nameCache) {
        this.nameCache = new _0x402exb2(this.getNameSize(), "#FFFFFF", true, "#000000");
        this.nameCache.setValue(this.name);
      } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
      }
    }
  }, createPoints: function () {
    for (var _0x402ex106 = this.getNumPoints(); this.points.length > _0x402ex106;) {
      var _0x402ex107 = ~~(Math.random() * this.points.length);
      this.points.splice(_0x402ex107, 1);
      this.pointsAcc.splice(_0x402ex107, 1);
    }
    if (0 == this.points.length && 0 < _0x402ex106) {
      this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
      this.pointsAcc.push(Math.random() - .5);
    }
    while (this.points.length < _0x402ex106) {
      var _0x402ex108 = ~~(Math.random() * this.points.length), _0x402ex109 = this.points[_0x402ex108];
      this.points.splice(_0x402ex108, 0, {ref: this, size: _0x402ex109.size, x: _0x402ex109.x, y: _0x402ex109.y});
      this.pointsAcc.splice(_0x402ex108, 0, this.pointsAcc[_0x402ex108]);
    }
  }, getNumPoints: function () {
    if (0 == this.id) {
      return 16;
    }
    var _0x402ex35 = 10;
    if (20 > this.size) {
      _0x402ex35 = 0;
    }
    if (this.isVirus) {
      _0x402ex35 = 30;
    }
    var _0x402ex36 = this.size;
    if (!this.isVirus) {
      _0x402ex36 *= _0x402exd3;
    }
    _0x402ex36 *= _0x402exff;
    if (this.flag & 32) {
      _0x402ex36 *= .25;
    }
    return ~~Math.max(_0x402ex36, _0x402ex35);
  }, movePoints: function () {
    this.createPoints();
    var _0x402ex10a = this.points;
    var _0x402ex10b = this.pointsAcc;
    var _0x402ex10c = _0x402ex10a.length;
    var _0x402ex4 = 0;
    for (; _0x402ex4 < _0x402ex10c; ++_0x402ex4) {
      var _0x402ex10d = _0x402ex10b[(_0x402ex4 - 1 + _0x402ex10c) % _0x402ex10c];
      var _0x402ex10e = _0x402ex10b[(_0x402ex4 + 1) % _0x402ex10c];
      _0x402ex10b[_0x402ex4] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
      _0x402ex10b[_0x402ex4] *= .7;
      if (10 < _0x402ex10b[_0x402ex4]) {
        _0x402ex10b[_0x402ex4] = 10;
      }
      if (-10 > _0x402ex10b[_0x402ex4]) {
        _0x402ex10b[_0x402ex4] = -10;
      }
      _0x402ex10b[_0x402ex4] = (_0x402ex10d + _0x402ex10e + 8 * _0x402ex10b[_0x402ex4]) / 10;
    }
    var _0x402ex10f = this;
    var _0x402ex110 = this.isVirus ? 0 : (this.id / 1e3 + _0x402excd / 1e4) % (2 * Math.PI);
    var _0x402ex111 = 0;
    for (; _0x402ex111 < _0x402ex10c; ++_0x402ex111) {
      var _0x402ex45 = _0x402ex10a[_0x402ex111].size;
      var _0x402ex30 = _0x402ex10a[(_0x402ex111 - 1 + _0x402ex10c) % _0x402ex10c].size;
      var _0x402ex112 = _0x402ex10a[(_0x402ex111 + 1) % _0x402ex10c].size;
      if (15 < this.size && null != _0x402exbd && 20 < this.size * _0x402exd3 && 0 != this.id) {
        var _0x402ex8a = false;
        var _0x402ex3 = _0x402ex10a[_0x402ex111].x;
        var _0x402ex113 = _0x402ex10a[_0x402ex111].y;
        _0x402exbd.retrieve2(_0x402ex3 - 5, _0x402ex113 - 5, 10, 10, function (_0x402ex35) {
          if (_0x402ex35.ref != _0x402ex10f && 25 > (_0x402ex3 - _0x402ex35.x) * (_0x402ex3 - _0x402ex35.x) + (_0x402ex113 - _0x402ex35.y) * (_0x402ex113 - _0x402ex35.y)) {
            _0x402ex8a = true;
          }
        });
        if (!_0x402ex8a && _0x402ex10a[_0x402ex111].x < _0x402excf || _0x402ex10a[_0x402ex111].y < _0x402exd0 || _0x402ex10a[_0x402ex111].x > _0x402exd1 || _0x402ex10a[_0x402ex111].y > _0x402exd2) {
          _0x402ex8a = true;
        }
        if (_0x402ex8a) {
          if (0 < _0x402ex10b[_0x402ex111]) {
            _0x402ex10b[_0x402ex111] = 0;
          }
          _0x402ex10b[_0x402ex111] -= 1;
        }
      }
      _0x402ex45 = _0x402ex45 + _0x402ex10b[_0x402ex111];
      if (0 > _0x402ex45) {
        _0x402ex45 = 0;
      }
      _0x402ex45 = this.isAgitated ? (19 * _0x402ex45 + this.size) / 20 : (12 * _0x402ex45 + this.size) / 13;
      _0x402ex10a[_0x402ex111].size = (_0x402ex30 + _0x402ex112 + 8 * _0x402ex45) / 10;
      _0x402ex30 = 2 * Math.PI / _0x402ex10c;
      _0x402ex112 = this.points[_0x402ex111].size;
      if (this.isVirus && 0 == _0x402ex111 % 2) {
        _0x402ex112 = _0x402ex112 + 5;
      }
      _0x402ex10a[_0x402ex111].x = this.x + Math.cos(_0x402ex30 * _0x402ex111 + _0x402ex110) * _0x402ex112;
      _0x402ex10a[_0x402ex111].y = this.y + Math.sin(_0x402ex30 * _0x402ex111 + _0x402ex110) * _0x402ex112;
    }
  }, updatePos: function () {
    if (0 == this.id) {
      return 1;
    }
    var _0x402ex35;
    _0x402ex35 = (_0x402excd - this.updateTime) / 120;
    _0x402ex35 = 0 > _0x402ex35 ? 0 : 1 < _0x402ex35 ? 1 : _0x402ex35;
    var _0x402ex36 = 0 > _0x402ex35 ? 0 : 1 < _0x402ex35 ? 1 : _0x402ex35;
    this.getNameSize();
    if (this.destroyed && 1 <= _0x402ex36) {
      var _0x402ex37 = _0x402exc5.indexOf(this);
      -1 != _0x402ex37 && _0x402exc5.splice(_0x402ex37, 1);
    }
    this.x = _0x402ex35 * (this.nx - this.ox) + this.ox;
    this.y = _0x402ex35 * (this.ny - this.oy) + this.oy;
    this.size = _0x402ex36 * (this.nSize - this.oSize) + this.oSize;
    return _0x402ex36;
  }, shouldRender: function () {
    if (0 == this.id) {
      return true;
    } else {
      return !(this.x + this.size + 40 < _0x402exbf - _0x402exbb / 2 / _0x402exd3 || this.y + this.size + 40 < _0x402exc0 - _0x402exbc / 2 / _0x402exd3 || this.x - this.size - 40 > _0x402exbf + _0x402exbb / 2 / _0x402exd3 || this.y - this.size - 40 > _0x402exc0 + _0x402exbc / 2 / _0x402exd3);
    }
  }, drawOneCell: function (_0x402exa6) {
    if (this.shouldRender()) {
      var _0x402ex36 = 0 != this.id && !this.isVirus && !this.isAgitated && _0x402exe2 > _0x402exd3;
      if (5 > this.getNumPoints()) {
        _0x402ex36 = true;
      }
      if (this.wasSimpleDrawing && !_0x402ex36) {
        for (var _0x402ex37 = 0; _0x402ex37 < this.points.length; _0x402ex37++) {
          this.points[_0x402ex37].size = this.size;
        }
      }
      this.wasSimpleDrawing = _0x402ex36;
      _0x402exa6.save();
      this.drawTime = _0x402excd;
      _0x402ex37 = this.updatePos();
      this.destroyed && (_0x402exa6.globalAlpha *= 1 - _0x402ex37);
      _0x402exa6.lineWidth = 10;
      _0x402exa6.lineCap = "round";
      _0x402exa6.lineJoin = this.isVirus ? "miter" : "round";
      if (_0x402exd7) {
        _0x402exa6.fillStyle = "#FFFFFF";
        _0x402exa6.strokeStyle = "#AAAAAA";
      } else {
        _0x402exa6.fillStyle = this.color;
        _0x402exa6.strokeStyle = this.color;
      }
      _0x402exa6.beginPath();
      _0x402exa6.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
      _0x402exa6.closePath();
      var _0x402ex114 = this.name.toLowerCase();
      li = _0x402ex43(_0x402ex114);
      if (_0x402ex114.indexOf("[") != -1) {
        var _0x402ex115 = _0x402ex114.indexOf("[");
        var _0x402ex116 = _0x402ex114.indexOf("]");
        _0x402ex114 = _0x402ex114.slice(_0x402ex115 + 1, _0x402ex116);
      }
      if (!this.isAgitated && _0x402exd5 && "teams-public.iogames.icu:443" != _0x402exc) {
        if (!_0x402ex101.hasOwnProperty(_0x402ex114)) {
          _0x402ex101[_0x402ex114].src = _0x402exd + li[0] + ".png";
        }
        if (0 != _0x402ex101[_0x402ex114].width && _0x402ex101[_0x402ex114].complete) {
          _0x402ex37 = _0x402ex101[_0x402ex114];
        } else {
          _0x402ex37 = null;
        }
      } else {
        _0x402ex37 = null;
      }
      _0x402ex37 = (e = _0x402ex37) ? -1 != _0x402ex104.indexOf(_0x402ex114) : false;
      _0x402ex36 || _0x402exa6.stroke();
      _0x402exa6.fill();
      if (!(null == e || _0x402ex37)) {
        _0x402exa6.save();
        _0x402exa6.clip();
        _0x402exa6.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
        _0x402exa6.restore();
      }
      _0x402exa6.globalAlpha = 1;
      if (null != e && _0x402ex37) {
        _0x402exa6.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
      }
      _0x402ex37 = -1 != _0x402exc2.indexOf(this);
      if (0 != this.id) {
        var _0x402ex36 = ~~this.y;
        if ((_0x402exd6 || _0x402ex37) && this.name && this.nameCache && (null == e || -1 == _0x402ex103.indexOf(_0x402ex114))) {
          _0x402exa6.globalAlpha = 1;
          _0x402exa6.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
          _0x402exa6.fillStyle = "#FFF";
          _0x402exa6.textAlign = "center";
          _0x402exa6.fillText(_0x402ex43(this.name.split("*")[0])[1], this.x, this.y);
        }
        if (_0x402exe0 == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
          _0x402exa6.fillStyle = "#FFFFFF";
          _0x402exa6.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
          var _0x402ex77 = ~~(this.nSize * this.nSize / 100);
          var _0x402ex118 = _0x402exa6.measureText(_0x402ex77).width;
          var _0x402ex119 = this.x - _0x402ex118 * .07;
          _0x402exa6.fillText(_0x402ex77, _0x402ex119, this.y + this.getNameSize() + 6);
        }
      }
      _0x402exa6.restore();
    }
  }};
  _0x402exb2.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (_0x402ex35) {
    if (this._size != _0x402ex35) {
      this._size = _0x402ex35;
      this._dirty = true;
    }
  }, setScale: function (_0x402ex35) {
    if (this._scale != _0x402ex35) {
      this._scale = _0x402ex35;
      this._dirty = true;
    }
  }, setStrokeColor: function (_0x402ex35) {
    if (this._strokeColor != _0x402ex35) {
      this._strokeColor = _0x402ex35;
      this._dirty = true;
    }
  }, setValue: function (_0x402ex35) {
    if (_0x402ex35 != this._value) {
      this._value = _0x402ex35;
      this._dirty = true;
    }
  }, render: function () {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    if (this._dirty) {
      this._dirty = false;
      var _0x402ex11a = this._canvas, _0x402exa6 = this._ctx, _0x402ex11b = this._value, _0x402ex11c = this._scale, _0x402ex11d = this._size, _0x402ex11e = "700 " + _0x402ex11d + "px nunito";
      _0x402exa6.font = _0x402ex11e;
      var _0x402ex11f = ~~(.2 * _0x402ex11d);
      _0x402ex11a.width = (_0x402exa6.measureText(_0x402ex11b).width + 6) * _0x402ex11c;
      _0x402ex11a.height = (_0x402ex11d + _0x402ex11f) * _0x402ex11c;
      _0x402exa6.font = _0x402ex11e;
      _0x402exa6.scale(_0x402ex11c, _0x402ex11c);
      _0x402exa6.globalAlpha = 1;
      _0x402exa6.lineWidth = 3;
      _0x402exa6.strokeStyle = this._strokeColor;
      _0x402exa6.fillStyle = this._color;
      this._stroke && _0x402exa6.strokeText(_0x402ex11b, 3, _0x402ex11d - _0x402ex11f / 2);
      _0x402exa6.fillText(_0x402ex11b, 3, _0x402ex11d - _0x402ex11f / 2);
    }
    return this._canvas;
  }, getWidth: function () {
    return _0x402exa6.measureText(this._value).width + 6;
  }};
  Date.now || (Date.now = function () {
    return (new Date).getTime();
  });
  var _0x402ex120 = {init: function (_0x402ex121) {
    function _0x402ex122(_0x402ex13, _0x402ex14, _0x402exd4, _0x402ex11f, _0x402ex123) {
      this.x = _0x402ex13;
      this.y = _0x402ex14;
      this.w = _0x402exd4;
      this.h = _0x402ex11f;
      this.depth = _0x402ex123;
      this.items = [];
      this.nodes = [];
    }
    var _0x402ex37 = _0x402ex121.maxChildren || 2, _0x402ex38 = _0x402ex121.maxDepth || 4;
    _0x402ex122.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (_0x402ex124) {
      for (var _0x402ex4 = 0; _0x402ex4 < this.items.length; ++_0x402ex4) {
        var _0x402ex125 = this.items[_0x402ex4];
        if (_0x402ex125.x >= _0x402ex124.x && _0x402ex125.y >= _0x402ex124.y && _0x402ex125.x < _0x402ex124.x + _0x402ex124.w && _0x402ex125.y < _0x402ex124.y + _0x402ex124.h) {
          return true;
        }
      }
      if (0 != this.nodes.length) {
        var _0x402ex126 = this;
        return this.findOverlappingNodes(_0x402ex124, function (_0x402ex127) {
          return _0x402ex126.nodes[_0x402ex127].exists(_0x402ex124);
        });
      }
      return false;
    }, retrieve: function (_0x402ex125, _0x402ex128) {
      for (var _0x402ex4 = 0; _0x402ex4 < this.items.length; ++_0x402ex4) {
        _0x402ex128(this.items[_0x402ex4]);
      }
      if (0 != this.nodes.length) {
        var _0x402ex126 = this;
        this.findOverlappingNodes(_0x402ex125, function (_0x402ex127) {
          _0x402ex126.nodes[_0x402ex127].retrieve(_0x402ex125, _0x402ex128);
        });
      }
    }, insert: function (_0x402ex35) {
      if (0 != this.nodes.length) {
        this.nodes[this.findInsertNode(_0x402ex35)].insert(_0x402ex35);
      } else {
        if (this.items.length >= _0x402ex37 && this.depth < _0x402ex38) {
          this.devide();
          this.nodes[this.findInsertNode(_0x402ex35)].insert(_0x402ex35);
        } else {
          this.items.push(_0x402ex35);
        }
      }
    }, findInsertNode: function (_0x402ex35) {
      return _0x402ex35.x < this.x + this.w / 2 ? _0x402ex35.y < this.y + this.h / 2 ? 0 : 2 : _0x402ex35.y < this.y + this.h / 2 ? 1 : 3;
    }, findOverlappingNodes: function (_0x402ex35, _0x402ex36) {
      return _0x402ex35.x < this.x + this.w / 2 && (_0x402ex35.y < this.y + this.h / 2 && _0x402ex36(0) || _0x402ex35.y >= this.y + this.h / 2 && _0x402ex36(2)) || _0x402ex35.x >= this.x + this.w / 2 && (_0x402ex35.y < this.y + this.h / 2 && _0x402ex36(1) || _0x402ex35.y >= this.y + this.h / 2 && _0x402ex36(3)) ? true : false;
    }, devide: function () {
      var _0x402ex35 = this.depth + 1, _0x402ex37 = this.w / 2, _0x402ex38 = this.h / 2;
      this.nodes.push(new _0x402ex122(this.x, this.y, _0x402ex37, _0x402ex38, _0x402ex35));
      this.nodes.push(new _0x402ex122(this.x + _0x402ex37, this.y, _0x402ex37, _0x402ex38, _0x402ex35));
      this.nodes.push(new _0x402ex122(this.x, this.y + _0x402ex38, _0x402ex37, _0x402ex38, _0x402ex35));
      this.nodes.push(new _0x402ex122(this.x + _0x402ex37, this.y + _0x402ex38, _0x402ex37, _0x402ex38, _0x402ex35));
      _0x402ex35 = this.items;
      this.items = [];
      for (_0x402ex37 = 0; _0x402ex37 < _0x402ex35.length; _0x402ex37++) {
        this.insert(_0x402ex35[_0x402ex37]);
      }
    }, clear: function () {
      for (var _0x402ex35 = 0; _0x402ex35 < this.nodes.length; _0x402ex35++) {
        this.nodes[_0x402ex35].clear();
      }
      this.items.length = 0;
      this.nodes.length = 0;
    }};
    return {root: new _0x402ex122(_0x402ex121.minX, _0x402ex121.minY, _0x402ex121.maxX - _0x402ex121.minX, _0x402ex121.maxY - _0x402ex121.minY, 0), insert: function (_0x402ex35) {
      this.root.insert(_0x402ex35);
    }, retrieve: function (_0x402ex35, _0x402ex36) {
      this.root.retrieve(_0x402ex35, _0x402ex36);
    }, retrieve2: function (_0x402ex35, _0x402ex36, _0x402ex37, _0x402ex38, _0x402ex128) {
      _0x402ex129.x = _0x402ex35;
      _0x402ex129.y = _0x402ex36;
      _0x402ex129.w = _0x402ex37;
      _0x402ex129.h = _0x402ex38;
      this.root.retrieve(_0x402ex129, _0x402ex128);
    }, exists: function (_0x402ex35) {
      return this.root.exists(_0x402ex35);
    }, clear: function () {
      this.root.clear();
    }};
  }};
  _0x402exa.onload = _0x402ex20;
}(window, window.jQuery));
$(document).ready(function () {
  $("#chat_textbox").bind("cut copy paste", function (_0x402ex30) {
    _0x402ex30.preventDefault();
  });
});
(function () {
  var _0x402ex12a = function (_0x402ex2e) {
    if (_0x402ex2e.keyCode === 17) {
      for (var _0x402ex4 = 0; _0x402ex4 < 4; ++_0x402ex4) {
        setTimeout(function () {
          window.onkeydown({keyCode: 32});
          window.onkeyup({keyCode: 32});
        }, _0x402ex4 * 50);
      }
    }
  };
  window.addEventListener("keydown", _0x402ex12a);
}());
(function () {
  var _0x402ex2d = function (_0x402ex2e) {
    if (_0x402ex2e.keyCode === 69) {
      for (var _0x402ex4 = 0; _0x402ex4 < 10; ++_0x402ex4) {
        setTimeout(function () {
          window.onkeydown({keyCode: 87});
          window.onkeyup({keyCode: 87});
        }, _0x402ex4 * 50);
      }
    }
  };
  window.addEventListener("keydown", _0x402ex2d);
}());
window.onbeforeunload = function () {
  if (Play == true) {
    return confirm();
  }
};
