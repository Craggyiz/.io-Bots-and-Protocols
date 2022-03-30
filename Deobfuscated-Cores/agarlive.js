var Vector2 = function (avriel, pariz) {
  this.x = avriel || 0;
  this.y = pariz || 0;
};
Vector2.prototype = {reset: function (liola, heavenley) {
  return this.x = liola, this.y = heavenley, this;
}, toString: function (annalin) {
  annalin = annalin || 3;
  var muhamadou = Math.pow(10, annalin);
  return "[" + Math.round(this.x * muhamadou) / muhamadou + ", " + Math.round(this.y * muhamadou) / muhamadou + "]";
}, clone: function () {
  return new Vector2(this.x, this.y);
}, copyTo: function (tennley) {
  tennley.x = this.x;
  tennley.y = this.y;
}, copyFrom: function (alely) {
  this.x = alely.x;
  this.y = alely.y;
}, magnitude: function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, magnitudeSquared: function () {
  return this.x * this.x + this.y * this.y;
}, normalise: function () {
  var almaas = this.magnitude();
  return this.x = this.x / almaas, this.y = this.y / almaas, this;
}, reverse: function () {
  return this.x = -this.x, this.y = -this.y, this;
}, plusEq: function (amea) {
  return this.x += amea.x, this.y += amea.y, this;
}, plusNew: function (mikeyah) {
  return new Vector2(this.x + mikeyah.x, this.y + mikeyah.y);
}, minusEq: function (brinlea) {
  return this.x -= brinlea.x, this.y -= brinlea.y, this;
}, minusNew: function (arieyana) {
  return new Vector2(this.x - arieyana.x, this.y - arieyana.y);
}, multiplyEq: function (yasheka) {
  return this.x *= yasheka, this.y *= yasheka, this;
}, multiplyNew: function (makaylah) {
  return this.clone().multiplyEq(makaylah);
}, divideEq: function (marcilla) {
  return this.x /= marcilla, this.y /= marcilla, this;
}, divideNew: function (tiant) {
  return this.clone().divideEq(tiant);
}, dot: function (danilynn) {
  return this.x * danilynn.x + this.y * danilynn.y;
}, angle: function (mikhaila) {
  return Math.atan2(this.y, this.x) * (mikhaila ? 1 : Vector2Const.TO_DEGREES);
}, rotate: function (taslin, yanieliz) {
  var trinida = Math.cos(taslin * (yanieliz ? 1 : Vector2Const.TO_RADIANS)), taio = Math.sin(taslin * (yanieliz ? 1 : Vector2Const.TO_RADIANS));
  return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * trinida - Vector2Const.temp.y * taio, this.y = Vector2Const.temp.x * taio + Vector2Const.temp.y * trinida, this;
}, equals: function (roxxi) {
  return this.x == roxxi.x && this.y == roxxi.x;
}, isCloseTo: function (davean, raeana) {
  return !!this.equals(davean) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(davean), Vector2Const.temp.magnitudeSquared() < raeana * raeana);
}, rotateAroundPoint: function (chuma, khmari, jenrry) {
  Vector2Const.temp.copyFrom(this);
  Vector2Const.temp.minusEq(chuma);
  Vector2Const.temp.rotate(khmari, jenrry);
  Vector2Const.temp.plusEq(chuma);
  this.copyFrom(Vector2Const.temp);
}, isMagLessThan: function (nnaemeka) {
  return this.magnitudeSquared() < nnaemeka * nnaemeka;
}, isMagGreaterThan: function (deryk) {
  return this.magnitudeSquared() > deryk * deryk;
}};
Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
var Sfreeze = false;
(function (dimani, verbie) {
  var kathleena = "ffa-1-public.iogames.icu:443";
  var stiven = "./skins/";
  function maymuna(krishiv, jawann, holleigh, robson, taion, eliyanna) {
    if (krishiv <= taion && taion <= holleigh && jawann <= eliyanna && eliyanna <= robson) {
      return true;
    }
    return false;
  }
  var maxis = "createTouch" in document, liczy = [];
  var gale = -1, chidima = new Vector2(0, 0), christianah = new Vector2(0, 0), qunesha = new Vector2(0, 0);
  var aiydan = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  function veronicia() {
    yesenio = true;
    document.getElementById("canvas").focus();
    var zadyn = false;
    var fabiola;
    deveron = yogi = document.getElementById("canvas");
    laronica = deveron.getContext("2d");
    deveron.onmousemove = function (vlasta) {
      aralis = vlasta.clientX;
      elisabet = vlasta.clientY;
      crissy();
    };
    if (maxis) {
      deveron.addEventListener("touchstart", blayn, false);
      deveron.addEventListener("touchmove", doryan, false);
      deveron.addEventListener("touchend", arelis, false);
    }
    deveron.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", omni, false);
    } else {
      document.body.onmousewheel = omni;
    }
    deveron.onfocus = function () {
      zadyn = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      zadyn = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      zadyn = true;
    };
    var sherene = false, praneeth = false, jernard = false;
    dimani.onkeydown = function (antwanisha) {
      switch (antwanisha.keyCode) {
        case 32:
          if (!sherene && !zadyn) {
            jaydenjames();
            jessejames(17);
            sherene = true;
          }
          break;
        case 81:
          if (!praneeth && !zadyn) {
            jessejames(18);
            praneeth = true;
          }
          break;
        case 87:
          if (!jernard && !zadyn) {
            jaydenjames();
            jessejames(21);
            jernard = true;
          }
          break;
        case 70:
          if (!zadyn) {
            if (Sfreeze == false) {
              Sfreeze = true;
              tabrisha("Game stopped.");
            } else {
              Sfreeze = false;
              tabrisha("Game resumed.");
            }
          }
          break;
        case 67:
          if (!zadyn) {
            jarail("psx2psx2");
          }
          break;
        case 27:
          ariauna(true, 0);
          break;
        case 13:
          if (zadyn) {
            zadyn = false;
            document.getElementById("chat_textbox").blur();
            fabiola = document.getElementById("chat_textbox").value;
            fabiola = fabiola.replace("www", "***");
            fabiola = fabiola.replace(".com", "***");
            fabiola = fabiola.replace(".biz", "***");
            fabiola = fabiola.replace(".net", "***");
            fabiola = fabiola.replace("agar.io", "");
            fabiola = fabiola.replace(".org", "***");
            fabiola = fabiola.replace("AGAR", "***");
            fabiola = fabiola.replace("AGAR.İO", "***");
            fabiola = fabiola.replace("AGARİO", "***");
            fabiola = fabiola.replace(".co", "***");
            fabiola = fabiola.replace("xyz", "***");
            fabiola = fabiola.replace(".warball", "***");
            fabiola = fabiola.replace(".gen.tr", "***");
            fabiola = fabiola.replace(".com.tr", "***");
            fabiola = fabiola.replace("agario", "***");
            fabiola = fabiola.replace("pvp", "***");
            fabiola = fabiola.replace("agar.yt", "***");
            fabiola = fabiola.replace("Agar.yt!", "***");
            fabiola = fabiola.replace("AGAR.YT", "***");
            fabiola = fabiola.replace("AGAR.", "***");
            fabiola = fabiola.replace("agar.", "***");
            fabiola = fabiola.replace("agar", "***");
            fabiola = fabiola.replace("Agar.", "***");
            fabiola = fabiola.replace("Agar", "***");
            fabiola = fabiola.replace(".YT", "***");
            fabiola = fabiola.replace(".yt", "***");
            fabiola = fabiola.replace(".Yt", "***");
            fabiola = fabiola.replace("Agario.", "***");
            fabiola = fabiola.replace("AGAR.YT", "***");
            fabiola = fabiola.replace("AGAR.YT!", "***");
            fabiola = fabiola.replace("piç", "***");
            fabiola = fabiola.replace("yarak", "***");
            fabiola = fabiola.replace("amcık", "***");
            fabiola = fabiola.replace("sikerim", "***");
            fabiola = fabiola.replace("sikerler", "***");
            fabiola = fabiola.replace("orospu", "***");
            fabiola = fabiola.replace("çocuğu", "***");
            fabiola = fabiola.replace("göt", "***");
            fabiola = fabiola.replace("fuck", "***");
            fabiola = fabiola.replace("FUCK", "***");
            fabiola = fabiola.replace("FUCK", "***");
            fabiola = fabiola.replace("allah", "***");
            fabiola = fabiola.replace("ALLAH", "***");
            fabiola = fabiola.replace("HZ", "***");
            fabiola = fabiola.replace("hz", "***");
            fabiola = fabiola.replace("TAYYİP", "***");
            fabiola = fabiola.replace("RTE", "***");
            fabiola = fabiola.replace("RECEP", "***");
            fabiola = fabiola.replace("rte", "***");
            fabiola = fabiola.replace("tayyip", "***");
            fabiola = fabiola.replace("tayyıp", "***");
            fabiola = fabiola.replace("recep", "***");
            fabiola = fabiola.replace("???????????????", "***");
            fabiola = fabiola.replace("rec", "***");
            fabiola = fabiola.replace("REC", "***");
            fabiola = fabiola.replace("sık", "***");
            fabiola = fabiola.replace("SIK", "***");
            fabiola = fabiola.replace("BOK", "***");
            fabiola = fabiola.replace("bok", "***");
            fabiola = fabiola.replace("Ass", "***");
            fabiola = fabiola.replace("Vagina", "***");
            fabiola = fabiola.replace("Bitch", "***");
            fabiola = fabiola.replace("Sucker", "***");
            fabiola = fabiola.replace("meme", "***");
            fabiola = fabiola.replace("yarak", "***");
            fabiola = fabiola.replace("yarağı", "***");
            fabiola = fabiola.replace("sokam", "***");
            fabiola = fabiola.replace("sikem", "***");
            fabiola = fabiola.replace("sik", "***");
            fabiola = fabiola.replace("oç", "***");
            fabiola = fabiola.replace("o.ç", "***");
            fabiola = fabiola.replace("o.çocuğu", "***");
            fabiola = fabiola.replace("kaşar", "***");
            fabiola = fabiola.replace("anne", "***");
            fabiola = fabiola.replace("AMK", "***");
            fabiola = fabiola.replace("amk", "***");
            fabiola = fabiola.replace("aq", "***");
            fabiola = fabiola.replace("AQ", "***");
            fabiola = fabiola.replace("baba", "***");
            fabiola = fabiola.replace("kız", "***");
            fabiola = fabiola.replace("ezik", "***");
            fabiola = fabiola.replace("salak", "***");
            fabiola = fabiola.replace("aptal", "***");
            fabiola = fabiola.replace("sıç", "***");
            fabiola = fabiola.replace("penis", "***");
            fabiola = fabiola.replace("ananı", "***");
            fabiola = fabiola.replace("anneni", "***");
            fabiola = fabiola.replace("skym", "***");
            fabiola = fabiola.replace("sikeyim", "***");
            fabiola = fabiola.replace("sik", "***");
            fabiola = fabiola.replace("vagina", "***");
            if (fabiola.length > 0) {
              jarail(fabiola);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!tracy) {
              document.getElementById("chat_textbox").focus();
              zadyn = true;
            }
          }
          break;
      }
    };
    dimani.onkeyup = function (chevone) {
      switch (chevone.keyCode) {
        case 32:
          sherene = false;
          break;
        case 87:
          jernard = false;
          break;
        case 81:
          if (praneeth) {
            jessejames(19);
            praneeth = false;
          }
          break;
      }
    };
    dimani.onblur = function () {
      jessejames(19);
      jernard = praneeth = sherene = false;
    };
    dimani.onresize = wuendy;
    wuendy();
    if (dimani.requestAnimationFrame) {
      dimani.requestAnimationFrame(gabryelle);
    } else {
      setInterval(kahlen, 16.666666666666668);
    }
    if (dasjia) {
      verbie("#region").val(dasjia);
    }
    rafael();
    vadhir(verbie("#region").val());
    null == myrth && dasjia && hodan();
    jave();
    verbie("#overlays").show();
  }
  function tabrisha(embry) {
    var jeaniene = "";
    if (jeaniene == "") {
      jeaniene = embry;
    }
    $("#nn").css("position", "absolute");
    $("#nn").show();
    $("#nn").css("top", "200px");
    $("#nn").css("font-size", "20px");
    $("#nn").css("color", "red");
    $("#nn").css("z-index", "2000");
    $("#nn").css("text-align", "center");
    $("#nn").css("width", "100%");
    $("#nn").html(jeaniene);
    $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
      $("#nn").hide();
    });
  }
  ;
  (function () {
    var meraris = function (jozalyn) {
      if (jozalyn.keyCode === 69) {
        for (var gere = 0; gere < 10; ++gere) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, gere * 50);
        }
      }
    };
    window.addEventListener("keydown", meraris);
  }());
  function blayn(daquasha) {}
  function doryan(bear) {}
  function arelis(annese) {}
  function omni(neasa) {
    if (!tency) {
      som *= Math.pow(.9, neasa.wheelDelta / -120 || neasa.detail || 0);
      .4 > som && (som = .4);
      som > 10 / franshesca && (som = 10 / franshesca);
    } else {
      som *= Math.pow(.9, neasa.wheelDelta / -120 || neasa.detail || 0);
      .1 > som && (som = .1);
      som > 4 / franshesca && (som = 4 / franshesca);
    }
  }
  function zaylei() {
    if (.4 > franshesca) {
      emmary = null;
    } else {
      var briona = Number.POSITIVE_INFINITY, carsynn = Number.POSITIVE_INFINITY, orlie = Number.NEGATIVE_INFINITY, kalyx = Number.NEGATIVE_INFINITY, leandre = 0;
      for (var lakendrick = 0; lakendrick < zari.length; lakendrick++) {
        var leeanthony = zari[lakendrick];
        if (leeanthony.shouldRender() && !leeanthony.prepareData && 20 < leeanthony.size * franshesca) {
          leandre = Math.max(leeanthony.size, leandre);
          briona = Math.min(leeanthony.x, briona);
          carsynn = Math.min(leeanthony.y, carsynn);
          orlie = Math.max(leeanthony.x, orlie);
          kalyx = Math.max(leeanthony.y, kalyx);
        }
      }
      emmary = taysean.init({minX: briona - (leandre + 100), minY: carsynn - (leandre + 100), maxX: orlie + (leandre + 100), maxY: kalyx + (leandre + 100), maxChildren: 2, maxDepth: 4});
      for (lakendrick = 0; lakendrick < zari.length; lakendrick++) {
        leeanthony = zari[lakendrick];
        if (leeanthony.shouldRender() && !(20 >= leeanthony.size * franshesca)) {
          for (briona = 0; briona < leeanthony.points.length; ++briona) {
            carsynn = leeanthony.points[briona].x;
            orlie = leeanthony.points[briona].y;
            carsynn < baia - gwen / 2 / franshesca || orlie < jaynesha - leane / 2 / franshesca || carsynn > baia + gwen / 2 / franshesca || orlie > jaynesha + leane / 2 / franshesca || emmary.insert(leeanthony.points[briona]);
          }
        }
      }
    }
  }
  function crissy() {
    lyell = (aralis - gwen / 2) / franshesca + baia;
    kyshawna = (elisabet - leane / 2) / franshesca + jaynesha;
  }
  function liborio() {
    tracy = false;
    verbie("#adsBottom").hide();
    verbie("#overlays").hide();
    rafael();
  }
  function lawerence(badi) {
    if (!SCodes) {
      return alert("Hata !");
    }
    zA = badi;
    if (badi != elec) {
      kathleena = badi;
      elec = zA;
      hodan();
    }
    verbie("#helloContainer").attr("data-gamemode", zA);
  }
  function vadhir(macalah) {
    if (macalah && macalah != dasjia) {
      if (verbie("#region").val() != macalah) {
        verbie("#region").val(macalah);
      }
      dasjia = dimani.localStorage.location = macalah;
      verbie(".btn-needs-server").prop("disabled", false);
      yesenio && hodan();
    }
  }
  function _0x9fbcx3e(jaylanis) {
    tracy = true;
    duice = null;
    verbie("#overlays").fadeIn(jaylanis ? 200 : 3e3);
    jaylanis || verbie("#adsBottom").fadeIn(3e3);
  }
  function coma(zakkery) {
    zakkery = ~~zakkery;
    var tuyet = (zakkery % 60).toString();
    zakkery = (~~(zakkery / 60)).toString();
    2 > tuyet.length && (tuyet = "0" + tuyet);
    return zakkery + ":" + tuyet;
  }
  function haysten() {
    if (null == jolani) {
      return 0;
    }
    for (var jashala = 0; jashala < jolani.length; ++jashala) {
      if (-1 != chaislyn.indexOf(jolani[jashala].id)) {
        return jashala + 1;
      }
    }
    return 0;
  }
  function torianno(anaile, marissia) {
    var mystee = -1 != chaislyn.indexOf(anaile.id), janmichael = -1 != chaislyn.indexOf(marissia.id), majdi = 30 > marissia.size;
    mystee && majdi && ++bertran;
    majdi || !mystee || janmichael || ++kerionna;
    majdi || !mystee || janmichael;
  }
  function elizabel(runell, rashanique) {
    if (runell.indexOf("{") != -1 && runell.indexOf("}") != -1) {
      var lorren = runell.indexOf("{");
      var jacara = runell.indexOf("}");
      var vernecia = runell.slice(jacara + 1);
      if (rashanique) {
        if (vernecia == "") {
          vernecia = "Unnamed Cell";
        } else {
          vernecia = runell.slice(jacara + 1);
        }
      }
      return [runell.slice(lorren + 1, jacara), vernecia];
    } else {
      return ["", runell];
    }
  }
  function donzell() {
    verbie(".stats-leaderboard-time").text(coma(arhonda));
    verbie(".stats-food-eaten").text(bertran);
    verbie(".stats-highest-mass").text(~~(ruthlene / 100));
    verbie(".stats-time-alive").text(coma((Date.now() - horrace) / 1e3));
    verbie(".stats-cells-eaten").text(kerionna);
    verbie(".stats-top-position").text(0 == jennevie ? ":(" : jennevie);
    var anaisha = document.getElementById("statsGraph");
    if (anaisha) {
      var lafreda = anaisha.getContext("2d"), frieda = anaisha.width, anaisha = anaisha.height;
      lafreda.clearRect(0, 0, frieda, anaisha);
      if (2 < gera.length) {
        for (var zula = 200, kenenna = 0; kenenna < gera.length; kenenna++) {
          zula = Math.max(gera[kenenna], zula);
        }
        lafreda.lineWidth = 3;
        lafreda.lineCap = "round";
        lafreda.lineJoin = "round";
        lafreda.strokeStyle = Pa;
        lafreda.fillStyle = Pa;
        lafreda.beginPath();
        lafreda.moveTo(0, anaisha - gera[0] / zula * (anaisha - 10) + 10);
        for (kenenna = 1; kenenna < gera.length; kenenna += Math.max(~~(gera.length / frieda), 1)) {
          for (var zahkai = kenenna / (gera.length - 1) * frieda, wyvonia = [], akhil = -20; 20 >= akhil; ++akhil) {
            0 > kenenna + akhil || kenenna + akhil >= gera.length || wyvonia.push(gera[kenenna + akhil]);
          }
          wyvonia = wyvonia.reduce(function (tamirra, miyali) {
            return tamirra + miyali;
          }) / wyvonia.length / zula;
          lafreda.lineTo(zahkai, anaisha - wyvonia * (anaisha - 10) + 10);
        }
        lafreda.stroke();
        lafreda.globalAlpha = .5;
        lafreda.lineTo(frieda, anaisha);
        lafreda.lineTo(0, anaisha);
        lafreda.fill();
        lafreda.globalAlpha = 1;
      }
    }
  }
  function ariauna(gordan, deija) {
    tracy = true;
    if (deija == 1) {
      if (odis == false) {
        donzell();
        verbie("#statoverlay").show();
        verbie("#stats").fadeIn(gordan ? 200 : 3e3);
      } else {
        verbie("#overlays").fadeIn(gordan ? 200 : 3e3);
      }
    } else {
      verbie("#overlays").fadeIn(gordan ? 200 : 3e3);
    }
    duice = null;
  }
  function rafael() {
    verbie("#region").val() ? dimani.localStorage.location = verbie("#region").val() : dimani.localStorage.location && verbie("#region").val(dimani.localStorage.location);
    verbie("#region").val() ? verbie(".locationKnown").append(verbie("#region")) : verbie("#locationUnknown").append(verbie("#region"));
  }
  function antonay() {
    huntyr("wss://" + kathleena);
  }
  function hodan() {
    if (yesenio && dasjia) {
      verbie("#connecting").show();
      antonay();
    }
  }
  function huntyr(karenda) {
    if (myrth) {
      myrth.onopen = null;
      myrth.onmessage = null;
      myrth.onclose = null;
      try {
        myrth.close();
      } catch (b) {}
      myrth = null;
    }
    var shevella = kathleena;
    karenda = "wss://" + shevella + "?SCode=" + SCodes;
    chaislyn = [];
    jmia = [];
    zayvion = {};
    zari = [];
    louetta = [];
    jolani = [];
    deveron = rexanna = null;
    ruthlene = 0;
    this.leaderdefault = "Leaderboard";
    this.lastWinner = "Leaderboard";
    this.countdown = 3600;
    bertran = 0;
    gera = [];
    kerionna = 0;
    jennevie = 0;
    arhonda = 0;
    myrth = new WebSocket(karenda);
    myrth.binaryType = "arraybuffer";
    myrth.onopen = amirh;
    myrth.onmessage = mirae;
    myrth.onclose = lunnie;
    myrth.onerror = function (kelena) {
      console.log("socket error" + kelena);
    };
  }
  function sherlie(loubelle) {
    return new DataView(new ArrayBuffer(loubelle));
  }
  function nickey(dorry) {
    myrth.send(dorry.buffer);
  }
  function amirh() {
    var elliemay;
    kaycen = 100;
    verbie("#connecting").hide();
    console.log("socket open");
    elliemay = sherlie(5);
    elliemay.setUint8(0, 254);
    elliemay.setUint32(1, 5, true);
    nickey(elliemay);
    elliemay = sherlie(5);
    elliemay.setUint8(0, 255);
    elliemay.setUint32(1, 123456789, true);
    nickey(elliemay);
    daesha();
  }
  function lunnie() {
    console.log("socket close");
    setTimeout(hodan, 500);
    kaycen *= 1.5;
  }
  function mirae(celestte) {
    calleen(new DataView(celestte.data));
  }
  function calleen(jeresa) {
    function ashtin() {
      var decie = "", tyce;
      while ((tyce = jeresa.getUint16(alexsia, true)) != 0) {
        alexsia += 2;
        decie += String.fromCharCode(tyce);
      }
      alexsia += 2;
      return decie;
    }
    var alexsia = 0, gabrielangelo = false;
    240 == jeresa.getUint8(alexsia) && (alexsia += 5);
    switch (jeresa.getUint8(alexsia++)) {
      case 185:
        senecca(jeresa, alexsia);
        break;
      case 17:
        tequesta = jeresa.getFloat32(alexsia, true);
        alexsia += 4;
        eyon = jeresa.getFloat32(alexsia, true);
        alexsia += 4;
        rayvonn = jeresa.getFloat32(alexsia, true);
        alexsia += 4;
        break;
      case 20:
        jmia = [];
        chaislyn = [];
        break;
      case 21:
        valjean = jeresa.getInt16(alexsia, true);
        alexsia += 2;
        rylieann = jeresa.getInt16(alexsia, true);
        alexsia += 2;
        if (!pavle) {
          pavle = true;
          amarianna = valjean;
          cleveland = rylieann;
        }
        break;
      case 32:
        chaislyn.push(jeresa.getUint32(alexsia, true));
        alexsia += 4;
        break;
      case 48:
        gabrielangelo = true;
        chanyia = true;
        break;
      case 49:
        if (!gabrielangelo) {
          chanyia = false;
        }
        rexanna = null;
        var osmon = jeresa.getUint32(alexsia, true);
        alexsia += 4;
        jolani = [];
        for (denysse = 0; denysse < osmon; ++denysse) {
          var estafania = jeresa.getUint32(alexsia, true);
          alexsia += 4;
          jolani.push({id: estafania, name: ashtin()});
        }
        kijana();
        break;
      case 50:
        rexanna = [];
        var jaysun = jeresa.getUint32(alexsia, true);
        alexsia += 4;
        for (var denysse = 0; denysse < jaysun; ++denysse) {
          rexanna.push(jeresa.getFloat32(alexsia, true));
          alexsia += 4;
        }
        kijana();
        break;
      case 64:
        hedieh = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        zara = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        leoncio = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        crystiana = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        tequesta = (leoncio + hedieh) / 2;
        eyon = (crystiana + zara) / 2;
        rayvonn = 1;
        if (0 == jmia.length) {
          baia = tequesta;
          jaynesha = eyon;
          franshesca = rayvonn;
        }
        break;
      case 90:
        var marson = new Date - latency;
        $("#latency").html("Latency " + marson + " ms;");
        var eloyce = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        $("#uptime").html("Uptime " + eloyce + " sec;");
        var mackynzie = jeresa.getFloat64(alexsia, true);
        alexsia += 8;
        $("#onlineplayers").html("Players " + mackynzie + ";");
        break;
      case 199:
        thala(jeresa, alexsia);
        break;
      case 96:
        this.countdown = jeresa.getUint16(alexsia, true);
        break;
      case 97:
        this.lastWinner = "";
        this.lastWinner = ashtin();
        if (this.lastWinner == "") {
          this.lastWinner = this.leaderdefault;
        }
        this.lastWinner = elizabel(this.lastWinner.split("*")[0])[1];
        break;
    }
  }
  function thala(chakka, abdihamid) {
    function aeriella() {
      var iyland = "", rahil;
      while ((rahil = chakka.getUint16(abdihamid, true)) != 0) {
        abdihamid += 2;
        iyland += String.fromCharCode(rahil);
      }
      abdihamid += 2;
      return iyland;
    }
    var ancy = chakka.getUint8(abdihamid++);
    if (ancy & 2) {
      abdihamid += 4;
    }
    if (ancy & 4) {
      abdihamid += 8;
    }
    if (ancy & 8) {
      abdihamid += 16;
    }
    var nashally = chakka.getUint8(abdihamid++), rahman = chakka.getUint8(abdihamid++), lynnetta = chakka.getUint8(abdihamid++), corde = (nashally << 16 | rahman << 8 | lynnetta).toString(16);
    while (corde.length > 6) {
      corde = "0" + corde;
    }
    corde = "#" + corde;
    name = elizabel(aeriella())[1];
    if (name == "") {
      name = "Unnamed Cell";
    }
    areona.push({name: name, color: corde, message: aeriella(), time: Date.now()});
  }
  function senecca(creolia, aley) {
    lexis = +new Date;
    var anuradha = Math.random();
    sulinda = false;
    var konnie = creolia.getUint16(aley, true);
    aley += 2;
    for (roberick = 0; roberick < konnie; ++roberick) {
      var lorentz = zayvion[creolia.getUint32(aley, true)], loria = zayvion[creolia.getUint32(aley + 4, true)];
      aley += 8;
      if (lorentz && loria) {
        loria.destroy();
        loria.ox = loria.x;
        loria.oy = loria.y;
        loria.oSize = loria.size;
        loria.nx = lorentz.x;
        loria.ny = lorentz.y;
        loria.nSize = loria.size;
        loria.updateTime = lexis;
        torianno(lorentz, loria);
      }
    }
    for (var roberick = 0;;) {
      var lamonta = creolia.getUint32(aley, true);
      aley += 4;
      if (0 == lamonta) {
        break;
      }
      ++roberick;
      var modibo, devona, nikhila = creolia.getInt16(aley, true);
      aley += 2;
      devona = creolia.getInt16(aley, true);
      aley += 2;
      modibo = creolia.getInt16(aley, true);
      aley += 2;
      for (var saniy = creolia.getUint8(aley++), itohan = creolia.getUint8(aley++), akilan = creolia.getUint8(aley++), zekai = (saniy << 16 | itohan << 8 | akilan).toString(16); 6 > zekai.length;) {
        zekai = "0" + zekai;
      }
      var easa = "#" + zekai, jearldine = creolia.getUint8(aley++), tremonte = !!(jearldine & 1), halena = !!(jearldine & 16);
      jearldine & 2 && (aley += 4);
      jearldine & 4 && (aley += 8);
      jearldine & 8 && (aley += 16);
      for (var makhii, zimbabwe = "";;) {
        makhii = creolia.getUint16(aley, true);
        aley += 2;
        if (0 == makhii) {
          break;
        }
        zimbabwe += String.fromCharCode(makhii);
      }
      var eronda = null;
      if (zayvion.hasOwnProperty(lamonta)) {
        eronda = zayvion[lamonta];
        eronda.updatePos();
        eronda.ox = eronda.x;
        eronda.oy = eronda.y;
        eronda.oSize = eronda.size;
        eronda.color = easa;
      } else {
        eronda = new yannet(lamonta, nikhila, devona, modibo, easa, zimbabwe);
        zari.push(eronda);
        eronda.ka = nikhila;
        eronda.la = devona;
      }
      eronda.isVirus = tremonte;
      eronda.isAgitated = halena;
      eronda.nx = nikhila;
      eronda.ny = devona;
      eronda.nSize = modibo;
      eronda.updateCode = anuradha;
      eronda.updateTime = lexis;
      eronda.flag = jearldine;
      zimbabwe && eronda.setName(zimbabwe);
      if (-1 != chaislyn.indexOf(lamonta) && -1 == jmia.indexOf(eronda)) {
        document.getElementById("overlays").style.display = "none";
        jmia.push(eronda);
        if (1 == jmia.length) {
          baia = eronda.x;
          jaynesha = eronda.y;
        }
      }
    }
    konnie = creolia.getUint32(aley, true);
    aley += 4;
    for (roberick = 0; roberick < konnie; roberick++) {
      var daion = creolia.getUint32(aley, true);
      aley += 4;
      eronda = zayvion[daion];
      null != eronda && eronda.destroy();
    }
    sulinda && 0 == jmia.length && ariauna(false, 1);
  }
  function jaydenjames() {
    var fox;
    if (null != myrth && myrth.readyState == myrth.OPEN && Sfreeze != true) {
      fox = aralis - gwen / 2;
      var dalal = elisabet - leane / 2;
      if (64 <= fox * fox + dalal * dalal && !(.01 > Math.abs(ghia - lyell) && .01 > Math.abs(tracie - kyshawna))) {
        ghia = lyell;
        tracie = kyshawna;
        fox = sherlie(21);
        fox.setUint8(0, 185);
        fox.setFloat64(1, lyell, true);
        fox.setFloat64(9, kyshawna, true);
        fox.setUint32(17, 0, true);
        nickey(fox);
      }
    }
  }
  function daesha() {
    if (null != myrth && myrth.readyState == myrth.OPEN && null != duice) {
      var cheriah = sherlie(1 + 2 * duice.length);
      cheriah.setUint8(0, 129);
      for (var dijohn = 0; dijohn < duice.length; ++dijohn) {
        cheriah.setUint16(1 + 2 * dijohn, duice.charCodeAt(dijohn), true);
      }
      nickey(cheriah);
    }
  }
  function jave() {
    m = dimani.innerWidth;
    q = dimani.innerHeight;
    canvas.width = canvas.width = m;
    canvas.height = canvas.height = q;
    var sossity = verbie("#helloContainer");
    sossity.css("transform", "none");
    var skanda = dimani.innerHeight;
    660 > skanda / 1.1 ? sossity.css("transform", "translate(-50%, -50%) scale(" + skanda / 660 / 1.1 + ")") : sossity.css("transform", "translate(-50%, -50%)");
  }
  function jarail(zachriah) {
    if (null != myrth && myrth.readyState == myrth.OPEN && zachriah.length < 500 && zachriah.length > 0) {
      var doni = sherlie(2 + 2 * zachriah.length);
      var corry = 0;
      doni.setUint8(corry++, 199);
      doni.setUint8(corry++, 0);
      for (var koury = 0; koury < zachriah.length; ++koury) {
        doni.setUint16(corry, zachriah.charCodeAt(koury), true);
        corry += 2;
      }
      nickey(doni);
    }
  }
  function jessejames(juandiego) {
    if (null != myrth && myrth.readyState == myrth.OPEN) {
      var aesir = sherlie(1);
      aesir.setUint8(0, juandiego);
      nickey(aesir);
    }
  }
  function gabryelle() {
    kahlen();
    dimani.requestAnimationFrame(gabryelle);
  }
  function wuendy() {
    window.scrollTo(0, 0);
    gwen = dimani.innerWidth;
    leane = dimani.innerHeight;
    yogi.width = gwen;
    yogi.height = leane;
    var yara = verbie("#helloDialog");
    yara.css("transform", "none");
    var ziqi = yara.height();
    ziqi > leane / 1.1 ? yara.css("transform", "translate(-50%, -50%) scale(" + leane / ziqi / 1.1 + ")") : yara.css("transform", "translate(-50%, -50%)");
    kahlen();
  }
  function leayla() {
    var tazuko;
    tazuko = Math.max(leane / 1080, gwen / 1920);
    return tazuko * som;
  }
  function dinita() {
    if (0 != jmia.length) {
      for (var caelia = 0, williford = 0; williford < jmia.length; williford++) {
        caelia += jmia[williford].size;
      }
      caelia = Math.pow(Math.min(64 / caelia, 1), .4) * leayla();
      franshesca = (9 * franshesca + caelia) / 10;
    }
  }
  function kahlen() {
    var shivesh, ajwan = Date.now();
    ++benuel;
    var kevonne = Date.now() - rystal;
    if (kevonne > 50) {
      rystal = Date.now();
      jaydenjames();
    }
    lexis = ajwan;
    if (0 < jmia.length) {
      dinita();
      var velma = shivesh = 0;
      for (var artreus = 0; artreus < jmia.length; artreus++) {
        jmia[artreus].updatePos();
        shivesh += jmia[artreus].x / jmia.length;
        velma += jmia[artreus].y / jmia.length;
      }
      tequesta = shivesh;
      eyon = velma;
      rayvonn = franshesca;
      baia = (baia + shivesh) / 2;
      jaynesha = (jaynesha + velma) / 2;
    } else {
      baia = (29 * baia + tequesta) / 30;
      jaynesha = (29 * jaynesha + eyon) / 30;
      franshesca = (9 * franshesca + rayvonn * leayla()) / 10;
    }
    zaylei();
    crissy();
    laronica.fillStyle = irving ? "#111111" : "#F2FBFF";
    laronica.fillRect(0, 0, gwen, leane);
    zari.sort(function (lamonda, mursalin) {
      return lamonda.size == mursalin.size ? lamonda.id - mursalin.id : lamonda.size - mursalin.size;
    });
    laronica.save();
    laronica.translate(gwen / 2, leane / 2);
    laronica.scale(franshesca, franshesca);
    laronica.translate(-baia, -jaynesha);
    if (sequila == true) {
      laronica.globalAlpha = .6;
    } else {
      laronica.globalAlpha = 1;
    }
    for (artreus = 0; artreus < zari.length; artreus++) {
      zari[artreus].drawOneCell(laronica);
    }
    if (pavle) {
      amarianna = (3 * amarianna + valjean) / 4;
      cleveland = (3 * cleveland + rylieann) / 4;
      laronica.save();
      laronica.strokeStyle = "#FFAAAA";
      laronica.lineWidth = 10;
      laronica.lineCap = "round";
      laronica.lineJoin = "round";
      laronica.globalAlpha = .5;
      laronica.beginPath();
      for (artreus = 0; artreus < jmia.length; artreus++) {
        laronica.moveTo(jmia[artreus].x, jmia[artreus].y);
        laronica.lineTo(amarianna, cleveland);
      }
      laronica.restore();
    }
    laronica.strokeStyle = "#FF0000";
    laronica.lineWidth = 50;
    laronica.lineCap = "round";
    laronica.lineJoin = "round";
    laronica.beginPath();
    laronica.moveTo(hedieh, zara);
    laronica.lineTo(leoncio, zara);
    laronica.lineTo(leoncio, crystiana);
    laronica.lineTo(hedieh, crystiana);
    laronica.closePath();
    laronica.stroke();
    laronica.restore();
    laronica.globalAlpha = 1;
    laronica.fillStyle = "#0000FF";
    laronica.font = "bold 32px Ubuntu";
    if (this.countdown < 3600) {
      var dwanye = "";
      var shabd = "";
      var travor = Math.floor(this.countdown / 60);
      if (travor < 10) {
        dwanye += "0";
      }
      dwanye += travor + ":";
      var davide = this.countdown % 60;
      if (davide < 10) {
        dwanye += "0";
      }
      dwanye += davide;
      if (this.countdown < 60) {
        shabd = " sec";
      } else {
        shabd = " min";
      }
      $("#countdown").html("Restart in " + dwanye + shabd);
    }
    vicenzo && vicenzo.width && laronica.drawImage(vicenzo, gwen - vicenzo.width - 10, 10);
    if (!matsuo) {
      if (iylan != null && iylan.width > 0) {
        laronica.drawImage(iylan, 0, leane - iylan.height - 50);
      }
    }
    var jahri = maleak();
    ruthlene = Math.max(ruthlene, maleak());
    if (0 != ruthlene) {
      laronica.globalAlpha = .8;
      if (irving == true) {
        laronica.fillStyle = "#FFFFFF";
      } else {
        laronica.fillStyle = "#000000";
      }
      laronica.font = "bold 24px Ubuntu";
      var doneta = document.getElementsByTagName("html")[0].getAttribute("lang");
      if (doneta == "tr") {
        laronica.fillText("Skor: " + ~~(jahri / 100), 10, 34);
        laronica.fillText("Max.: " + ~~(ruthlene / 100), 10, 60);
      } else {
        laronica.fillText("Score: " + ~~(jahri / 100), 10, 34);
        laronica.fillText("Max.: " + ~~(ruthlene / 100), 10, 60);
      }
    }
    if (!matsuo) {
      var charma = 0;
      for (var atara = areona.length - 1; atara >= 0; atara--) {
        charma++;
        if (charma > 15) {
          break;
        }
        var wyler = areona[atara].name.trim();
        if (wyler == "") {
          wyler = "Unnamed Cell";
        }
        var meredeth = areona[atara].message.trim();
        var barrie = " : " + meredeth;
        laronica.font = "17px Arial";
        areona[atara].name_x = 15;
        areona[atara].name_y = leane - 30 - 20 * charma;
        areona[atara].name_w = laronica.measureText(wyler).width;
        areona[atara].name_h = 18;
        areona[atara].msg_x = 15 + areona[atara].name_w;
        areona[atara].msg_y = areona[atara].name_y;
        areona[atara].msg_w = laronica.measureText(barrie).width;
        areona[atara].msg_h = areona[atara].name_h;
        laronica.fillStyle = areona[atara].color;
        laronica.fillText(wyler, areona[atara].name_x, areona[atara].name_y);
        if (irving == true) {
          laronica.fillStyle = "#FFFFFF";
        } else {
          laronica.fillStyle = "#000000";
        }
        laronica.fillText(barrie, areona[atara].msg_x, areona[atara].msg_y);
      }
    }
    if (!aiydan) {
      warees();
    }
    var levolia = Date.now() - ajwan;
    levolia > 16.666666666666668 ? fion -= .01 : levolia < 15.384615384615385 && (fion += .01);
    .4 > fion && (fion = .4);
    1 < fion && (fion = 1);
  }
  function warees() {
    if (jmia.length == 0 || false) {
      return;
    }
    laronica.save();
    function jarquavius(baldomero, christey) {
      return !christey ? baldomero : jarquavius(christey, baldomero % christey);
    }
    laronica.beginPath();
    laronica.fillStyle = "rgba(0,0,0,.25)";
    var loriah = aiydan ? 150 : 200;
    laronica.lineWidth = 1.5;
    var amarante = gwen - loriah - 10;
    var paycen = leane - loriah - 5;
    laronica.rect(amarante, paycen, loriah, loriah);
    laronica.lineWidth = 1.25;
    var soula = baia / (leoncio - hedieh);
    var tinlee = jaynesha / (crystiana - zara);
    var chevee = soula * loriah + amarante + loriah / 2 - 100;
    var andreas = tinlee * loriah + paycen + loriah / 2 - 100;
    var billiejean = bh = loriah;
    var chaisty = -1;
    var zackariah = -1;
    for (var marialyce = 0; marialyce <= billiejean; marialyce += 40) {
      if (marialyce != billiejean) {
        var kenidee = .5 + marialyce + amarante;
        var loic = paycen;
        if (maymuna(kenidee, loic, kenidee + 40, loic + bh, chevee, andreas)) {
          chaisty = kenidee;
        }
        if (marialyce == 0) {
          continue;
        }
        laronica.moveTo(.5 + marialyce + amarante, paycen);
        laronica.lineTo(.5 + marialyce + amarante, bh + paycen);
      }
      if (irving == true) {
        laronica.fillStyle = "#FFFFFF";
      } else {
        laronica.fillStyle = "#000000";
      }
      laronica.font = "700 18px nunito";
      laronica.textAlign = "center";
      laronica.strokeStyle = "white";
      laronica.lineWidth = 1;
      laronica.globalAlpha = .35;
      for (var renika = 0; renika < 5; renika++) {
        laronica.fillText(String.fromCharCode(renika + 65) + marialyce / 40, .5 + marialyce + amarante - 20, paycen + 25.5 + renika * 40);
      }
    }
    for (var maliyha = 0; maliyha <= bh; maliyha += 40) {
      if (maliyha != bh) {
        var kenidee = amarante;
        var loic = .5 + maliyha + paycen;
        if (maymuna(kenidee, loic, kenidee + billiejean, loic + 40, chevee, andreas)) {
          zackariah = loic;
        }
        if (maliyha == 0) {
          continue;
        }
        laronica.moveTo(amarante, .5 + maliyha + paycen);
        laronica.lineTo(billiejean + amarante, .5 + maliyha + paycen);
      }
    }
    if (jmia.length > 0 && chaisty > -1 && zackariah > -1) {
      laronica.fillStyle = "#ccff00";
      laronica.globalAlpha = .3;
      laronica.fillRect(chaisty, zackariah, 40, 40);
    }
    laronica.globalAlpha = 1;
    laronica.strokeStyle = "rgba(238,0,17,.2)";
    laronica.stroke();
    laronica.closePath();
    for (var renika = 0; renika < jmia.length; renika++) {
      var thaya = jmia[renika];
      var petros = thaya.ox / (leoncio - hedieh);
      var kolia = thaya.oy / (crystiana - zara);
      var marialyce = petros * loriah + amarante + loriah / 2 - 100;
      var maliyha = kolia * loriah + paycen + loriah / 2 - 100;
      var jayandre = Math.max(2, thaya.size / (loriah / 2));
      laronica.fillStyle = thaya.color;
      if (renika == 0) {
        laronica.font = "bold " + (14 + jayandre) + "px Ubuntu";
        var alician = laronica.measureText(thaya.name);
        laronica.strokestyle = "black";
      }
      laronica.beginPath();
      laronica.strokeStyle = "black";
      laronica.lineWidth = 1;
      laronica.globalAlpha = 1;
      laronica.arc(marialyce, maliyha, jayandre, 0, 2 * Math.PI);
      laronica.stroke();
      laronica.fill();
      laronica.closePath();
    }
    laronica.restore();
  }
  function madiana() {
    if (irving) {
      laronica.fillStyle = "#111111";
    } else {}
    laronica.fillRect(0, 0, gwen, leane);
    laronica.save();
    if (irving) {
      laronica.strokeStyle = "#AAAAAA";
    } else {}
    laronica.globalAlpha = .2;
    laronica.scale(franshesca, franshesca);
    var cadedra = gwen / franshesca, beta = leane / franshesca;
    laronica.restore();
  }
  function maleak() {
    for (var quaron = 0, elize = 0; elize < jmia.length; elize++) {
      quaron += jmia[elize].nSize * jmia[elize].nSize;
    }
    return quaron;
  }
  function zuleyca() {
    var melburn;
    melburn = 1 * Math.max(q / 1080, m / 1920);
    return melburn *= M;
  }
  function dyante(murdoc) {
    for (var antwun = murdoc.length, mahasin, thomasina; 0 < antwun;) {
      thomasina = Math.floor(Math.random() * antwun);
      antwun--;
      mahasin = murdoc[antwun];
      murdoc[antwun] = murdoc[thomasina];
      murdoc[thomasina] = mahasin;
    }
  }
  function kijana() {
    vicenzo = null;
    var jerimia = 140;
    if (null != rexanna) {
      jerimia = 200;
    }
    if (null != rexanna || 0 != jolani.length) {
      vicenzo = document.createElement("canvas");
    }
    var joury = vicenzo.getContext("2d"), abygale = 110;
    abygale = null == rexanna ? abygale + 24 * jolani.length : abygale + 180;
    var keraun = Math.min(.22 * leane, Math.min(200, .3 * gwen)) / 200;
    vicenzo.width = jerimia * keraun;
    vicenzo.height = abygale * keraun;
    joury.scale(keraun, keraun);
    joury.globalAlpha = .4;
    joury.fillStyle = "#000000";
    joury.fillRect(0, 0, 200, abygale);
    joury.globalAlpha = 1;
    joury.fillStyle = "#FFFFFF";
    var conde;
    var jasyra = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    if (null == rexanna) {
      joury.fillStyle = "yellow";
      joury.font = "12px Ubuntu";
      var alaejah = new Image;
      alaejah.onload = function () {
        joury.drawImage(alaejah, 40, 0);
      };
      alaejah.src = "/img/lbfirst.png";
      joury.fillText(this.lastWinner, 70 - joury.measureText(this.lastWinner).width / 2, 80);
      for (conde = 0; conde < jolani.length; ++conde) {
        c = jolani[conde].name.split("*")[0] || "Unnamed Cell";
        c = elizabel(c)[1];
        if (c == "") {
          c = "Unnamed Cell";
        }
        if (-1 != chaislyn.indexOf(jolani[conde].id)) {
          jmia[0].name && (c = elizabel(jmia[0].name)[1]);
          if (c == "") {
            c = "Unnamed Cell";
          }
          joury.fillStyle = "#FFAAAA";
          if (!chanyia) {
            c = conde + 1 + ". " + c;
          }
          joury.fillText(c, 70 - joury.measureText(c).width / 2, 125 + 23 * conde);
        } else {
          joury.fillStyle = jasyra[conde];
          if (!chanyia) {
            c = conde + 1 + ". " + c;
          }
          joury.fillText(c, 70 - joury.measureText(c).width / 2, 125 + 23 * conde);
        }
      }
    } else {
      for (conde = c = 0; conde < rexanna.length; ++conde) {
        var sandar = c + rexanna[conde] * Math.PI * 2;
        joury.fillStyle = dorsi[conde + 1];
        joury.beginPath();
        joury.moveTo(100, 140);
        joury.arc(100, 140, 80, c, sandar, false);
        joury.fill();
        c = sandar;
      }
    }
  }
  function yannet(janiese, jenniferr, khamiah, rohan, lemel, suren) {
    this.id = janiese;
    this.ox = this.x = jenniferr;
    this.oy = this.y = khamiah;
    this.oSize = this.size = rohan;
    this.color = lemel;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(suren);
  }
  function adhan(brityn, kass, rayjay, vondal) {
    brityn && (this._size = brityn);
    kass && (this._color = kass);
    this._stroke = !!rayjay;
    vondal && (this._strokeColor = vondal);
  }
  var montanez = dimani.location.protocol, kimberlyann = "https:" == montanez;
  var yogi, laronica, deveron, vicenzo, iylan, gwen, leane, emmary = null, myrth = null, baia = 0, jaynesha = 0, chaislyn = [], jmia = [], zayvion = {_0x9fbcx6b: _0x9fbcx39}, zari = [], louetta = [], jolani = [], areona = [], aralis = 0, elisabet = 0, lyell = -1, kyshawna = -1, benuel = 0, lexis = 0, duice = null, hedieh = 0, zara = 0, leoncio = 1e4, crystiana = 1e4, franshesca = .1, dasjia = null, reinier = true, lakken = true, jonh = false, sulinda = false, ruthlene = 0, bertran = 0, kerionna = 0, jennevie = 0, arhonda = 0, irving = false, elanore = false, tency = false, joeanna = .9, sequila = false, matsuo = false, odis = false, tequesta = baia = ~~((hedieh + leoncio) / 2), eyon = jaynesha = ~~((zara + crystiana) / 2), rayvonn = 1, elec = "", rexanna = null, yesenio = false, tracy = true, pavle = false, valjean = 0, rylieann = 0, amarianna = 0, cleveland = 0, gera = [], horrace = Date.now(), kerionna = 0, dorsi = ["#333333", "#FF3333", "#33FF33", "#3333FF"], som = .7, zuleidy = "ontouchstart" in dimani && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), dynisha = new Image, renezme = new Image, chanyia = false;
  dynisha.src = "../img/images/split.png";
  renezme.src = "../img/images/feed.png";
  var yaquelin = document.createElement("canvas");
  var rystal = Date.now();
  dimani.isSpectating = false;
  var rystal = Date.now();
  dimani.setNick = function (dieatra, telor) {
    if (dieatra == null || !dieatra || dieatra == "") {
      alert("Enter Nick / Invalid Nick Input");
    } else {
      dieatra = dieatra.replace(/[|&;+,]/g, ":)");
      liborio();
      duice = "{" + telor + "}" + dieatra;
      daesha();
      ruthlene = 0;
      gera = [];
      bertran = 0;
      horrace = Date.now();
      jennevie = 0;
      arhonda = 0;
      kerionna = 0;
    }
  };
  dimani.setRegion = vadhir;
  dimani.setSkins = function (auric) {
    reinier = auric;
  };
  dimani.setNames = function (morry) {
    lakken = morry;
  };
  dimani.setDarkTheme = function (ineze) {
    irving = ineze;
  };
  dimani.setColors = function (ivey) {
    jonh = ivey;
  };
  dimani.setShowMass = function (elisio) {
    elanore = elisio;
  };
  dimani.setTransparent = function (hartleigh) {
    sequila = hartleigh;
  };
  dimani.setSmooth = function (aamna) {
    joeanna = aamna ? 2 : .4;
  };
  dimani.setZoom = function (leegan) {
    tency = leegan;
  };
  dimani.setHideChat = function (sheleah) {
    matsuo = sheleah;
    if (sheleah) {
      verbie("#chat_textbox").hide();
    } else {
      verbie("#chat_textbox").show();
    }
  };
  dimani.setSkipStats = function (maylia) {
    odis = maylia;
  };
  dimani.closeStats = function () {
    verbie("#statoverlay").hide();
    verbie("#stats").hide();
    verbie("#overlays").fadeIn(200);
  };
  dimani.ClearChat = function () {
    areona = [];
  };
  dimani.SendMap = function () {
    jarail("psx2psx2");
  };
  dimani.spectate = function () {
    duice = null;
    dimani.isSpectating = true;
    jessejames(1);
    liborio();
  };
  dimani.setGameMode = function (kairy) {
    lawerence(kairy);
  };
  if (null != dimani.localStorage) {
    if (null == dimani.localStorage.AB8) {
      dimani.localStorage.AB8 = ~~(100 * Math.random());
    }
    kerionna = +dimani.localStorage.AB8;
    dimani.ABGroup = kerionna;
  }
  setInterval(function () {
    var yaritsa = haysten();
    if (0 != yaritsa) {
      ++arhonda;
      if (0 == jennevie) {
        jennevie = yaritsa;
      }
      jennevie = Math.min(jennevie, yaritsa);
    }
  }, 1e3);
  setInterval(function () {
    if (null != myrth && myrth.readyState == myrth.OPEN) {
      msg = sherlie(5);
      msg.setUint8(0, 90);
      msg.setUint32(1, 123456789, true);
      latency = new Date;
      nickey(msg);
    }
  }, 1e3);
  setInterval(function () {
    gera.push(maleak() / 100);
  }, 16.666666666666668);
  var levelle = {ZW: "EU-London"};
  dimani.connect = huntyr;
  var kaycen = 500, ghia = -1, tracie = -1, fion = 1, mariaguadalupe = {_0x9fbcx114: new Image}, mikki = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), jasella = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), coralynne = ["_canvas'blob"];
  yannet.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
    var avalin;
    for (avalin = 0; avalin < zari.length; avalin++) {
      if (zari[avalin] == this) {
        zari.splice(avalin, 1);
        break;
      }
    }
    delete zayvion[this.id];
    avalin = jmia.indexOf(this);
    if (-1 != avalin) {
      sulinda = true;
      jmia.splice(avalin, 1);
    }
    avalin = chaislyn.indexOf(this.id);
    if (-1 != avalin) {
      chaislyn.splice(avalin, 1);
    }
    this.destroyed = true;
    louetta.push(this);
  }, getNameSize: function () {
    return Math.max(~~(.3 * this.size), 24);
  }, setName: function (janiqua) {
    if (this.name = janiqua) {
      if (null == this.nameCache) {
        this.nameCache = new adhan(this.getNameSize(), "#FFFFFF", true, "#000000");
        this.nameCache.setValue(this.name);
      } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
      }
    }
  }, createPoints: function () {
    for (var kimbery = this.getNumPoints(); this.points.length > kimbery;) {
      var sharona = ~~(Math.random() * this.points.length);
      this.points.splice(sharona, 1);
      this.pointsAcc.splice(sharona, 1);
    }
    if (0 == this.points.length && 0 < kimbery) {
      this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
      this.pointsAcc.push(Math.random() - .5);
    }
    while (this.points.length < kimbery) {
      var remingtin = ~~(Math.random() * this.points.length), berthalee = this.points[remingtin];
      this.points.splice(remingtin, 0, {ref: this, size: berthalee.size, x: berthalee.x, y: berthalee.y});
      this.pointsAcc.splice(remingtin, 0, this.pointsAcc[remingtin]);
    }
  }, getNumPoints: function () {
    if (0 == this.id) {
      return 16;
    }
    var cianan = 10;
    if (20 > this.size) {
      cianan = 0;
    }
    if (this.isVirus) {
      cianan = 30;
    }
    var saralou = this.size;
    if (!this.isVirus) {
      saralou *= franshesca;
    }
    saralou *= fion;
    if (this.flag & 32) {
      saralou *= .25;
    }
    return ~~Math.max(saralou, cianan);
  }, movePoints: function () {
    this.createPoints();
    var daci = this.points;
    var yolani = this.pointsAcc;
    var akeesha = daci.length;
    var nikya = 0;
    for (; nikya < akeesha; ++nikya) {
      var twanya = yolani[(nikya - 1 + akeesha) % akeesha];
      var cyrille = yolani[(nikya + 1) % akeesha];
      yolani[nikya] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
      yolani[nikya] *= .7;
      if (10 < yolani[nikya]) {
        yolani[nikya] = 10;
      }
      if (-10 > yolani[nikya]) {
        yolani[nikya] = -10;
      }
      yolani[nikya] = (twanya + cyrille + 8 * yolani[nikya]) / 10;
    }
    var deriana = this;
    var curissa = this.isVirus ? 0 : (this.id / 1e3 + lexis / 1e4) % (2 * Math.PI);
    var lavetra = 0;
    for (; lavetra < akeesha; ++lavetra) {
      var kaillou = daci[lavetra].size;
      var alger = daci[(lavetra - 1 + akeesha) % akeesha].size;
      var joes = daci[(lavetra + 1) % akeesha].size;
      if (15 < this.size && null != emmary && 20 < this.size * franshesca && 0 != this.id) {
        var jasmonique = false;
        var bacilia = daci[lavetra].x;
        var remeigh = daci[lavetra].y;
        emmary.retrieve2(bacilia - 5, remeigh - 5, 10, 10, function (shamia) {
          if (shamia.ref != deriana && 25 > (bacilia - shamia.x) * (bacilia - shamia.x) + (remeigh - shamia.y) * (remeigh - shamia.y)) {
            jasmonique = true;
          }
        });
        if (!jasmonique && daci[lavetra].x < hedieh || daci[lavetra].y < zara || daci[lavetra].x > leoncio || daci[lavetra].y > crystiana) {
          jasmonique = true;
        }
        if (jasmonique) {
          if (0 < yolani[lavetra]) {
            yolani[lavetra] = 0;
          }
          yolani[lavetra] -= 1;
        }
      }
      kaillou = kaillou + yolani[lavetra];
      if (0 > kaillou) {
        kaillou = 0;
      }
      kaillou = this.isAgitated ? (19 * kaillou + this.size) / 20 : (12 * kaillou + this.size) / 13;
      daci[lavetra].size = (alger + joes + 8 * kaillou) / 10;
      alger = 2 * Math.PI / akeesha;
      joes = this.points[lavetra].size;
      if (this.isVirus && 0 == lavetra % 2) {
        joes = joes + 5;
      }
      daci[lavetra].x = this.x + Math.cos(alger * lavetra + curissa) * joes;
      daci[lavetra].y = this.y + Math.sin(alger * lavetra + curissa) * joes;
    }
  }, updatePos: function () {
    if (0 == this.id) {
      return 1;
    }
    var eder;
    eder = (lexis - this.updateTime) / 120;
    eder = 0 > eder ? 0 : 1 < eder ? 1 : eder;
    var sharel = 0 > eder ? 0 : 1 < eder ? 1 : eder;
    this.getNameSize();
    if (this.destroyed && 1 <= sharel) {
      var shahwaiz = louetta.indexOf(this);
      -1 != shahwaiz && louetta.splice(shahwaiz, 1);
    }
    this.x = eder * (this.nx - this.ox) + this.ox;
    this.y = eder * (this.ny - this.oy) + this.oy;
    this.size = sharel * (this.nSize - this.oSize) + this.oSize;
    return sharel;
  }, shouldRender: function () {
    if (0 == this.id) {
      return true;
    } else {
      return !(this.x + this.size + 40 < baia - gwen / 2 / franshesca || this.y + this.size + 40 < jaynesha - leane / 2 / franshesca || this.x - this.size - 40 > baia + gwen / 2 / franshesca || this.y - this.size - 40 > jaynesha + leane / 2 / franshesca);
    }
  }, drawOneCell: function (heli) {
    if (this.shouldRender()) {
      var vihaana = 0 != this.id && !this.isVirus && !this.isAgitated && joeanna > franshesca;
      if (5 > this.getNumPoints()) {
        vihaana = true;
      }
      if (this.wasSimpleDrawing && !vihaana) {
        for (var juandalynn = 0; juandalynn < this.points.length; juandalynn++) {
          this.points[juandalynn].size = this.size;
        }
      }
      this.wasSimpleDrawing = vihaana;
      heli.save();
      this.drawTime = lexis;
      juandalynn = this.updatePos();
      this.destroyed && (heli.globalAlpha *= 1 - juandalynn);
      heli.lineWidth = 10;
      heli.lineCap = "round";
      heli.lineJoin = this.isVirus ? "miter" : "round";
      if (jonh) {
        heli.fillStyle = "#FFFFFF";
        heli.strokeStyle = "#AAAAAA";
      } else {
        heli.fillStyle = this.color;
        heli.strokeStyle = this.color;
      }
      heli.beginPath();
      heli.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
      heli.closePath();
      var javiel = this.name.toLowerCase();
      li = elizabel(javiel);
      if (javiel.indexOf("[") != -1) {
        var deahna = javiel.indexOf("[");
        var josleny = javiel.indexOf("]");
        javiel = javiel.slice(deahna + 1, josleny);
      }
      if (!this.isAgitated && reinier && "teams-public.iogames.icu:443" != kathleena) {
        if (!mariaguadalupe.hasOwnProperty(javiel)) {
          mariaguadalupe[javiel].src = stiven + li[0] + ".png";
        }
        if (0 != mariaguadalupe[javiel].width && mariaguadalupe[javiel].complete) {
          juandalynn = mariaguadalupe[javiel];
        } else {
          juandalynn = null;
        }
      } else {
        juandalynn = null;
      }
      juandalynn = (e = juandalynn) ? -1 != coralynne.indexOf(javiel) : false;
      vihaana || heli.stroke();
      heli.fill();
      if (!(null == e || juandalynn)) {
        heli.save();
        heli.clip();
        heli.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
        heli.restore();
      }
      heli.globalAlpha = 1;
      if (null != e && juandalynn) {
        heli.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
      }
      juandalynn = -1 != jmia.indexOf(this);
      if (0 != this.id) {
        var vihaana = ~~this.y;
        if ((lakken || juandalynn) && this.name && this.nameCache && (null == e || -1 == jasella.indexOf(javiel))) {
          heli.globalAlpha = 1;
          heli.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
          heli.fillStyle = "#FFF";
          heli.textAlign = "center";
          heli.fillText(elizabel(this.name.split("*")[0])[1], this.x, this.y);
        }
        if (elanore == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
          heli.fillStyle = "#FFFFFF";
          heli.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
          var ivymarie = ~~(this.nSize * this.nSize / 100);
          var crytal = heli.measureText(ivymarie).width;
          var milaun = this.x - crytal * .07;
          heli.fillText(ivymarie, milaun, this.y + this.getNameSize() + 6);
        }
      }
      heli.restore();
    }
  }};
  adhan.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (norvin) {
    if (this._size != norvin) {
      this._size = norvin;
      this._dirty = true;
    }
  }, setScale: function (elimelec) {
    if (this._scale != elimelec) {
      this._scale = elimelec;
      this._dirty = true;
    }
  }, setStrokeColor: function (ibhan) {
    if (this._strokeColor != ibhan) {
      this._strokeColor = ibhan;
      this._dirty = true;
    }
  }, setValue: function (nodra) {
    if (nodra != this._value) {
      this._value = nodra;
      this._dirty = true;
    }
  }, render: function () {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    if (this._dirty) {
      this._dirty = false;
      var delorese = this._canvas, natasia = this._ctx, braydan = this._value, wyatte = this._scale, dayquan = this._size, oluwamayomikun = "700 " + dayquan + "px nunito";
      natasia.font = oluwamayomikun;
      var memory = ~~(.2 * dayquan);
      delorese.width = (natasia.measureText(braydan).width + 6) * wyatte;
      delorese.height = (dayquan + memory) * wyatte;
      natasia.font = oluwamayomikun;
      natasia.scale(wyatte, wyatte);
      natasia.globalAlpha = 1;
      natasia.lineWidth = 3;
      natasia.strokeStyle = this._strokeColor;
      natasia.fillStyle = this._color;
      this._stroke && natasia.strokeText(braydan, 3, dayquan - memory / 2);
      natasia.fillText(braydan, 3, dayquan - memory / 2);
    }
    return this._canvas;
  }, getWidth: function () {
    return laronica.measureText(this._value).width + 6;
  }};
  Date.now || (Date.now = function () {
    return (new Date).getTime();
  });
  var taysean = {init: function (nyeemah) {
    function reyaansh(gaelyn, bronislava, phillipe, gaea, auner) {
      this.x = gaelyn;
      this.y = bronislava;
      this.w = phillipe;
      this.h = gaea;
      this.depth = auner;
      this.items = [];
      this.nodes = [];
    }
    var ia = nyeemah.maxChildren || 2, alagie = nyeemah.maxDepth || 4;
    reyaansh.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (kycen) {
      for (var sanjan = 0; sanjan < this.items.length; ++sanjan) {
        var wanye = this.items[sanjan];
        if (wanye.x >= kycen.x && wanye.y >= kycen.y && wanye.x < kycen.x + kycen.w && wanye.y < kycen.y + kycen.h) {
          return true;
        }
      }
      if (0 != this.nodes.length) {
        var ritzy = this;
        return this.findOverlappingNodes(kycen, function (kristabelle) {
          return ritzy.nodes[kristabelle].exists(kycen);
        });
      }
      return false;
    }, retrieve: function (jaclynne, lael) {
      for (var anieya = 0; anieya < this.items.length; ++anieya) {
        lael(this.items[anieya]);
      }
      if (0 != this.nodes.length) {
        var krithika = this;
        this.findOverlappingNodes(jaclynne, function (elijahwon) {
          krithika.nodes[elijahwon].retrieve(jaclynne, lael);
        });
      }
    }, insert: function (tryan) {
      if (0 != this.nodes.length) {
        this.nodes[this.findInsertNode(tryan)].insert(tryan);
      } else {
        if (this.items.length >= ia && this.depth < alagie) {
          this.devide();
          this.nodes[this.findInsertNode(tryan)].insert(tryan);
        } else {
          this.items.push(tryan);
        }
      }
    }, findInsertNode: function (maryem) {
      return maryem.x < this.x + this.w / 2 ? maryem.y < this.y + this.h / 2 ? 0 : 2 : maryem.y < this.y + this.h / 2 ? 1 : 3;
    }, findOverlappingNodes: function (janyth, austie) {
      return janyth.x < this.x + this.w / 2 && (janyth.y < this.y + this.h / 2 && austie(0) || janyth.y >= this.y + this.h / 2 && austie(2)) || janyth.x >= this.x + this.w / 2 && (janyth.y < this.y + this.h / 2 && austie(1) || janyth.y >= this.y + this.h / 2 && austie(3)) ? true : false;
    }, devide: function () {
      var georgian = this.depth + 1, sela = this.w / 2, verlen = this.h / 2;
      this.nodes.push(new reyaansh(this.x, this.y, sela, verlen, georgian));
      this.nodes.push(new reyaansh(this.x + sela, this.y, sela, verlen, georgian));
      this.nodes.push(new reyaansh(this.x, this.y + verlen, sela, verlen, georgian));
      this.nodes.push(new reyaansh(this.x + sela, this.y + verlen, sela, verlen, georgian));
      georgian = this.items;
      this.items = [];
      for (sela = 0; sela < georgian.length; sela++) {
        this.insert(georgian[sela]);
      }
    }, clear: function () {
      for (var dashelle = 0; dashelle < this.nodes.length; dashelle++) {
        this.nodes[dashelle].clear();
      }
      this.items.length = 0;
      this.nodes.length = 0;
    }};
    return {root: new reyaansh(nyeemah.minX, nyeemah.minY, nyeemah.maxX - nyeemah.minX, nyeemah.maxY - nyeemah.minY, 0), insert: function (harald) {
      this.root.insert(harald);
    }, retrieve: function (roopal, eldyn) {
      this.root.retrieve(roopal, eldyn);
    }, retrieve2: function (rayniya, tanai, branco, hesper, madine) {
      _0x9fbcx129.x = rayniya;
      _0x9fbcx129.y = tanai;
      _0x9fbcx129.w = branco;
      _0x9fbcx129.h = hesper;
      this.root.retrieve(_0x9fbcx129, madine);
    }, exists: function (hollylynn) {
      return this.root.exists(hollylynn);
    }, clear: function () {
      this.root.clear();
    }};
  }};
  dimani.onload = veronicia;
}(window, window.jQuery));
$(document).ready(function () {
  $("#chat_textbox").bind("cut copy paste", function (ronin) {
    ronin.preventDefault();
  });
});
(function () {
  var cianna = function (petty) {
    if (petty.keyCode === 17) {
      for (var verena = 0; verena < 4; ++verena) {
        setTimeout(function () {
          window.onkeydown({keyCode: 32});
          window.onkeyup({keyCode: 32});
        }, verena * 50);
      }
    }
  };
  window.addEventListener("keydown", cianna);
}());
(function () {
  var khoury = function (ambellina) {
    if (ambellina.keyCode === 69) {
      for (var opalee = 0; opalee < 10; ++opalee) {
        setTimeout(function () {
          window.onkeydown({keyCode: 87});
          window.onkeyup({keyCode: 87});
        }, opalee * 50);
      }
    }
  };
  window.addEventListener("keydown", khoury);
}());
window.onbeforeunload = function () {
  if (Play == true) {
    return confirm();
  }
};
