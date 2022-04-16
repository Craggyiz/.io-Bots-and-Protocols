var Vector2 = function (steevie, karenza) {
  this.x = steevie || 0, this.y = karenza || 0;
};
Vector2.prototype = {reset: function (efrem, myrtha) {
  return this.x = efrem, this.y = myrtha, this;
}, toString: function (shelbyjo) {
  shelbyjo = shelbyjo || 3;
  var sheleta = Math.pow(10, shelbyjo);
  return "[" + Math.round(this.x * sheleta) / sheleta + ", " + Math.round(this.y * sheleta) / sheleta + "]";
}, clone: function () {
  return new Vector2(this.x, this.y);
}, copyTo: function (linnea) {
  linnea.x = this.x, linnea.y = this.y;
}, copyFrom: function (tahlea) {
  this.x = tahlea.x, this.y = tahlea.y;
}, magnitude: function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, magnitudeSquared: function () {
  return this.x * this.x + this.y * this.y;
}, normalise: function () {
  var theren = this.magnitude();
  return this.x = this.x / theren, this.y = this.y / theren, this;
}, reverse: function () {
  return this.x = -this.x, this.y = -this.y, this;
}, plusEq: function (reisha) {
  return this.x += reisha.x, this.y += reisha.y, this;
}, plusNew: function (virdell) {
  return new Vector2(this.x + virdell.x, this.y + virdell.y);
}, minusEq: function (pressly) {
  return this.x -= pressly.x, this.y -= pressly.y, this;
}, minusNew: function (shah) {
  return new Vector2(this.x - shah.x, this.y - shah.y);
}, multiplyEq: function (jsamine) {
  return this.x *= jsamine, this.y *= jsamine, this;
}, multiplyNew: function (ladaesha) {
  return this.clone().multiplyEq(ladaesha);
}, divideEq: function (damari) {
  return this.x /= damari, this.y /= damari, this;
}, divideNew: function (durane) {
  return this.clone().divideEq(durane);
}, dot: function (shadya) {
  return this.x * shadya.x + this.y * shadya.y;
}, angle: function (tomiah) {
  return Math.atan2(this.y, this.x) * (tomiah ? 1 : Vector2Const.TO_DEGREES);
}, rotate: function (jaelynne, milt) {
  var aneel = Math.cos(jaelynne * (milt ? 1 : Vector2Const.TO_RADIANS)), lorik = Math.sin(jaelynne * (milt ? 1 : Vector2Const.TO_RADIANS));
  return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * aneel - Vector2Const.temp.y * lorik, this.y = Vector2Const.temp.x * lorik + Vector2Const.temp.y * aneel, this;
}, equals: function (lia) {
  return this.x == lia.x && this.y == lia.x;
}, isCloseTo: function (jameelah, caleiah) {
  return !!this.equals(jameelah) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(jameelah), Vector2Const.temp.magnitudeSquared() < caleiah * caleiah);
}, rotateAroundPoint: function (gwennette, nouf, demicheal) {
  Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(gwennette), Vector2Const.temp.rotate(nouf, demicheal), Vector2Const.temp.plusEq(gwennette), this.copyFrom(Vector2Const.temp);
}, isMagLessThan: function (hassane) {
  return this.magnitudeSquared() < hassane * hassane;
}, isMagGreaterThan: function (romaisa) {
  return this.magnitudeSquared() > romaisa * romaisa;
}}, Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
var Sfreeze = false;
(function (kimara, carnes) {
  var bethan = "ffa-1-public.iogames.icu:443";
  var windie = "./skins/";
  function kenzia(jonte, maklin, dasai, janayiah, pansy, tuere) {
    if (jonte <= pansy && pansy <= dasai && maklin <= tuere && tuere <= janayiah) {
      return true;
    }
    ;
    return false;
  }
  var kaelo, tracer, jamonie = "createTouch" in document, tatton = [];
  var valicia = -1, loueen = new Vector2(0, 0), kshawn = new Vector2(0, 0), sheletha = new Vector2(0, 0);
  var mussa = 0;
  var jonnye = true;
  var beresford = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  function rebecka() {
    ajahnae = true;
    document.getElementById("canvas").focus();
    var kimbla = false;
    var claudius;
    shaquira = doletha = document.getElementById("canvas");
    jovonie = shaquira.getContext("2d");
    shaquira.onmousemove = function (abigai) {
      oluwatamilore = abigai.clientX;
      onel = abigai.clientY;
      chelsee();
    };
    if (jamonie) {
      shaquira.addEventListener("touchstart", jessicca, false);
      shaquira.addEventListener("touchmove", alhaji, false);
      shaquira.addEventListener("touchend", quita, false);
    }
    ;
    shaquira.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", shantiana, false);
    } else {
      document.body.onmousewheel = shantiana;
    }
    ;
    shaquira.onfocus = function () {
      kimbla = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      kimbla = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      kimbla = true;
    };
    var grayland = false, markevious = false, taquita = false, vonshae = false;
    kimara.onkeydown = function (ulesses) {
      switch (ulesses.keyCode) {
        case 32:
          if (!grayland && !kimbla) {
            rhodena();
            aleander(17);
            grayland = true;
          }
          ;
          break;
        case 81:
          if (!markevious && !kimbla) {
            aleander(18);
            markevious = true;
          }
          ;
          break;
        case 87:
          if (!taquita && !kimbla) {
            rhodena();
            aleander(21);
            taquita = true;
          }
          ;
          break;
        case 70:
          if (!kimbla) {
            if (Sfreeze == false) {
              Sfreeze = true;
              estie("Game stopped.");
            } else {
              Sfreeze = false;
              estie("Game resumed.");
            }
          }
          ;
          break;
        case 67:
          if (!kimbla) {
            jacelin("psx2psx2");
          }
          ;
          break;
        case 27:
          altamae(true, 0);
          break;
        case 13:
          if (kimbla) {
            kimbla = false;
            document.getElementById("chat_textbox").blur();
            claudius = drashawn(document.getElementById("chat_textbox").value);
            if (claudius.length > 0) {
              jacelin(claudius);
            }
            ;
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!zaynab) {
              document.getElementById("chat_textbox").focus();
              kimbla = true;
            }
          }
          ;
          break;
      }
    };
    kimara.onkeyup = function (zavdiel) {
      switch (zavdiel.keyCode) {
        case 32:
          grayland = false;
          break;
        case 87:
          taquita = false;
          break;
        case 81:
          if (markevious) {
            aleander(19);
            markevious = false;
          }
          ;
          break;
      }
    };
    kimara.onblur = function () {
      aleander(19);
      taquita = markevious = grayland = false;
    };
    kimara.onresize = adrielys;
    adrielys();
    if (kimara.requestAnimationFrame) {
      kimara.requestAnimationFrame(deantrae);
    } else {
      setInterval(marasia, 16.666666666666668);
    }
    ;
    if (olline) {
      carnes("#region").val(olline);
    }
    ;
    sheza();
    jove(carnes("#region").val());
    null == valentim && olline && genysis();
    paulina();
    carnes("#overlays").show();
  }
  function estie(garrik) {
    var hjordis = "";
    if (hjordis == "") {
      hjordis = garrik;
    }
    ;
    $("#nn").css("position", "absolute");
    $("#nn").show();
    $("#nn").css("top", "200px");
    $("#nn").css("font-size", "20px");
    $("#nn").css("color", "red");
    $("#nn").css("z-index", "2000");
    $("#nn").css("text-align", "center");
    $("#nn").css("width", "100%");
    $("#nn").html(hjordis);
    $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
      $("#nn").hide();
    });
  }
  function drashawn(kimaria) {
    var hydi = kimaria;
    hydi = hydi.replace("piç", "***");
    hydi = hydi.replace(":)", String.fromCodePoint(128513));
    hydi = hydi.replace(":d", String.fromCodePoint(128513));
    hydi = hydi.replace(":D", String.fromCodePoint(128513));
    hydi = hydi.replace(":(", String.fromCodePoint(128577));
    hydi = hydi.replace(":p", String.fromCodePoint(128541));
    hydi = hydi.replace(":o", String.fromCodePoint(128562));
    hydi = hydi.replace(";)", String.fromCodePoint(128521));
    hydi = hydi.replace(":>", String.fromCodePoint(128535));
    hydi = hydi.replace(":$", String.fromCodePoint(129324));
    hydi = hydi.replace("love", String.fromCodePoint(128149));
    hydi = hydi.replace("okay", String.fromCodePoint(128077));
    hydi = hydi.replace("kiss", String.fromCodePoint(128139));
    hydi = hydi.replace("porn", String.fromCodePoint(128139));
    hydi = hydi.replace("sex", String.fromCodePoint(128139));
    hydi = hydi.replace("PORN", String.fromCodePoint(128139));
    hydi = hydi.replace("SEX", String.fromCodePoint(128139));
    hydi = hydi.replace(".com", String.fromCodePoint(128139));
    hydi = hydi.replace(".io", String.fromCodePoint(128139));
    hydi = hydi.replace("yarak", "***");
    hydi = hydi.replace("amcık", "***");
    hydi = hydi.replace("amc1", "***");
    hydi = hydi.replace("sikerim", "***");
    hydi = hydi.replace("siken", "***");
    hydi = hydi.replace("SİKEN", "***");
    hydi = hydi.replace("sikerler", "***");
    hydi = hydi.replace("xero", "***");
    hydi = hydi.replace("XERO", "***");
    hydi = hydi.replace("bot", "***");
    hydi = hydi.replace("BOT", "***");
    hydi = hydi.replace("discord", "***");
    hydi = hydi.replace("http", "***");
    hydi = hydi.replace("HTTP", "***");
    hydi = hydi.replace("orospu", "***");
    hydi = hydi.replace("yarrak", "***");
    hydi = hydi.replace("s1keyim", "***");
    hydi = hydi.replace("s1k", "***");
    hydi = hydi.replace("ors", "***");
    hydi = hydi.replace("yarrağı", "***");
    hydi = hydi.replace("göt", "***");
    hydi = hydi.replace("fuck", "***");
    hydi = hydi.replace("ATATÜRK", "***");
    hydi = hydi.replace("parti", "***");
    hydi = hydi.replace("PARTİ", "***");
    hydi = hydi.replace("atatürk", "***");
    hydi = hydi.replace("fuck", "***");
    hydi = hydi.replace("FUCK", "***");
    hydi = hydi.replace("FUCK", "***");
    hydi = hydi.replace("allah", "***");
    hydi = hydi.replace("ALLAH", "***");
    hydi = hydi.replace("HZ", "***");
    hydi = hydi.replace("hz", "***");
    hydi = hydi.replace("TAYYİP", "***");
    hydi = hydi.replace("RTE", "***");
    hydi = hydi.replace("RECEP", "***");
    hydi = hydi.replace("rte", "***");
    hydi = hydi.replace("FUCK", "***");
    hydi = hydi.replace("FUCK", "***");
    hydi = hydi.replace("tayyip", "***");
    hydi = hydi.replace("tayyıp", "***");
    hydi = hydi.replace("recep", "***");
    hydi = hydi.replace("skmek", "***");
    hydi = hydi.replace("ananızı", "***");
    hydi = hydi.replace("sıkmek", "***");
    hydi = hydi.replace("rec", "***");
    hydi = hydi.replace("REC", "***");
    hydi = hydi.replace("BOK", "***");
    hydi = hydi.replace("bok", "***");
    hydi = hydi.replace("Ass", "***");
    hydi = hydi.replace("Vagina", "***");
    hydi = hydi.replace("Bitch", "***");
    hydi = hydi.replace("Sucker", "***");
    hydi = hydi.replace("meme", "***");
    hydi = hydi.replace("yarak", "***");
    hydi = hydi.replace("yarağı", "***");
    hydi = hydi.replace("sokam", "***");
    hydi = hydi.replace("sikem", "***");
    hydi = hydi.replace("sik", "***");
    hydi = hydi.replace("ANANIZI", "***");
    hydi = hydi.replace("gay", "***");
    hydi = hydi.replace("oç", "***");
    hydi = hydi.replace("o.ç", "***");
    hydi = hydi.replace("pkk", "!!!");
    hydi = hydi.replace("PKK", "!!!");
    hydi = hydi.replace("o.çocuğu", "***");
    hydi = hydi.replace("penis", "***");
    hydi = hydi.replace("ananı", "***");
    hydi = hydi.replace("anasını", "***");
    hydi = hydi.replace("amına", "***");
    hydi = hydi.replace("Siken", "***");
    hydi = hydi.replace("iken", "***");
    hydi = hydi.replace("İKEN", "***");
    hydi = hydi.replace("sıktıgım", "***");
    hydi = hydi.replace("sıkıyım", "***");
    hydi = hydi.replace("orspu", "***");
    hydi = hydi.replace("annenızın", "***");
    hydi = hydi.replace("anneni", "***");
    hydi = hydi.replace("skym", "***");
    hydi = hydi.replace("sikeyim", "***");
    hydi = hydi.replace("SİKEN", "***");
    hydi = hydi.replace("sikeyim", "***");
    hydi = hydi.replace("sikeyim", "***");
    hydi = hydi.replace("vagina", "***");
    return hydi;
  }
  (function () {
    var laurisa = 10;
    var henoch = 50;
    var linnell = function (gwinevere) {
      if (gwinevere.keyCode === 69) {
        for (var maryon = 0; maryon < laurisa; ++maryon) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, maryon * henoch);
        }
      }
    };
    window.addEventListener("keydown", linnell);
  }());
  function jessicca(hashir) {}
  function alhaji(bobak) {}
  function quita(ery) {}
  function shantiana(lodine) {
    if (!bryndon) {
      lareena *= Math.pow(.9, lodine.wheelDelta / -120 || lodine.detail || 0);
      .4 > lareena && (lareena = .4);
      lareena > 10 / neketa && (lareena = 10 / neketa);
    } else {
      lareena *= Math.pow(.9, lodine.wheelDelta / -120 || lodine.detail || 0);
      .1 > lareena && (lareena = .1);
      lareena > 4 / neketa && (lareena = 4 / neketa);
    }
  }
  function kolade() {
    if (.4 > neketa) {
      yerly = null;
    } else {
      var cheyenne = Number.POSITIVE_INFINITY, quentisha = Number.POSITIVE_INFINITY, hussam = Number.NEGATIVE_INFINITY, inna = Number.NEGATIVE_INFINITY, casmir = 0;
      for (var mylz = 0; mylz < floki.length; mylz++) {
        var jenevieve = floki[mylz];
        if (jenevieve.shouldRender() && !jenevieve.prepareData && 20 < jenevieve.size * neketa) {
          casmir = Math.max(jenevieve.size, casmir);
          cheyenne = Math.min(jenevieve.x, cheyenne);
          quentisha = Math.min(jenevieve.y, quentisha);
          hussam = Math.max(jenevieve.x, hussam);
          inna = Math.max(jenevieve.y, inna);
        }
      }
      ;
      yerly = zacorey.init({minX: cheyenne - (casmir + 100), minY: quentisha - (casmir + 100), maxX: hussam + (casmir + 100), maxY: inna + (casmir + 100), maxChildren: 2, maxDepth: 4});
      for (mylz = 0; mylz < floki.length; mylz++) {
        jenevieve = floki[mylz];
        if (jenevieve.shouldRender() && !(20 >= jenevieve.size * neketa)) {
          for (cheyenne = 0; cheyenne < jenevieve.points.length; ++cheyenne) {
            quentisha = jenevieve.points[cheyenne].x;
            hussam = jenevieve.points[cheyenne].y;
            quentisha < azad - danyette / 2 / neketa || hussam < rickelle - orland / 2 / neketa || quentisha > azad + danyette / 2 / neketa || hussam > rickelle + orland / 2 / neketa || yerly.insert(jenevieve.points[cheyenne]);
          }
        }
      }
    }
  }
  function chelsee() {
    setayesh = (oluwatamilore - danyette / 2) / neketa + azad;
    syniah = (onel - orland / 2) / neketa + rickelle;
  }
  function comer() {
    zaynab = false;
    carnes("#adsBottom").hide();
    carnes("#overlays").hide();
    sheza();
  }
  function britteni(earvin) {
    if (!SCodes) {
      return alert("Hata !");
    }
    ;
    zA = earvin;
    if (earvin != kode) {
      bethan = earvin;
      kode = zA;
      genysis();
    }
    ;
    carnes("#helloContainer").attr("data-gamemode", zA);
  }
  function jove(jodhveer) {
    if (jodhveer && jodhveer != olline) {
      if (carnes("#region").val() != jodhveer) {
        carnes("#region").val(jodhveer);
      }
      ;
      olline = kimara.localStorage.location = jodhveer;
      carnes(".btn-needs-server").prop("disabled", false);
      ajahnae && genysis();
    }
  }
  function _0x524dx41(rystal) {
    zaynab = true;
    winnifred = null;
    carnes("#overlays").fadeIn(rystal ? 200 : 3e3);
    rystal || carnes("#adsBottom").fadeIn(3e3);
  }
  function sebaztian(lauretta) {
    lauretta = ~~lauretta;
    var janeka = (lauretta % 60).toString();
    lauretta = (~~(lauretta / 60)).toString();
    2 > janeka.length && (janeka = "0" + janeka);
    return lauretta + ":" + janeka;
  }
  function kyelin() {
    if (null == aaronda) {
      return 0;
    }
    ;
    for (var odester = 0; odester < aaronda.length; ++odester) {
      if (-1 != regan.indexOf(aaronda[odester].id)) {
        return odester + 1;
      }
    }
    ;
    return 0;
  }
  function quashun(lakecha, regenal) {
    var jasly = -1 != regan.indexOf(lakecha.id), alwin = -1 != regan.indexOf(regenal.id), kupaa = 30 > regenal.size;
    jasly && kupaa && ++zinachimdi;
    kupaa || !jasly || alwin || ++usha;
    kupaa || !jasly || alwin;
  }
  function taleaha(malonie, shetera) {
    if (malonie.indexOf("{") != -1 && malonie.indexOf("}") != -1) {
      var ginae = malonie.indexOf("{");
      var jaielle = malonie.indexOf("}");
      var meah = malonie.slice(jaielle + 1);
      if (shetera) {
        if (meah == "") {
          meah = "Unnamed Cell";
        } else {
          meah = malonie.slice(jaielle + 1);
        }
      }
      ;
      return [malonie.slice(ginae + 1, jaielle), meah];
    } else {
      return ["", malonie];
    }
  }
  function reydon() {
    carnes(".stats-leaderboard-time").text(sebaztian(jovar));
    carnes(".stats-food-eaten").text(zinachimdi);
    carnes(".stats-highest-mass").text(~~(antrese / 100));
    carnes(".stats-time-alive").text(sebaztian((Date.now() - izai) / 1e3));
    carnes(".stats-cells-eaten").text(usha);
    carnes(".stats-top-position").text(0 == alysiah ? ":(" : alysiah);
    var fayte = document.getElementById("statsGraph");
    if (fayte) {
      var sofian = fayte.getContext("2d"), tagen = fayte.width, fayte = fayte.height;
      sofian.clearRect(0, 0, tagen, fayte);
      if (2 < ichard.length) {
        for (var hazelmae = 200, nazeem = 0; nazeem < ichard.length; nazeem++) {
          hazelmae = Math.max(ichard[nazeem], hazelmae);
        }
        ;
        sofian.lineWidth = 3;
        sofian.lineCap = "round";
        sofian.lineJoin = "round";
        sofian.strokeStyle = Pa;
        sofian.fillStyle = Pa;
        sofian.beginPath();
        sofian.moveTo(0, fayte - ichard[0] / hazelmae * (fayte - 10) + 10);
        for (nazeem = 1; nazeem < ichard.length; nazeem += Math.max(~~(ichard.length / tagen), 1)) {
          for (var onolee = nazeem / (ichard.length - 1) * tagen, dynalee = [], tynasia = -20; 20 >= tynasia; ++tynasia) {
            0 > nazeem + tynasia || nazeem + tynasia >= ichard.length || dynalee.push(ichard[nazeem + tynasia]);
          }
          ;
          dynalee = dynalee.reduce(function (marina, kaleena) {
            return marina + kaleena;
          }) / dynalee.length / hazelmae;
          sofian.lineTo(onolee, fayte - dynalee * (fayte - 10) + 10);
        }
        ;
        sofian.stroke();
        sofian.globalAlpha = .5;
        sofian.lineTo(tagen, fayte);
        sofian.lineTo(0, fayte);
        sofian.fill();
        sofian.globalAlpha = 1;
      }
    }
  }
  function altamae(coleby, drako) {
    zaynab = true;
    if (drako == 1) {
      if (jahbari == false) {
        reydon();
        carnes("#statoverlay").show();
        carnes("#stats").fadeIn(coleby ? 200 : 3e3);
      } else {
        carnes("#overlays").fadeIn(coleby ? 200 : 3e3);
      }
    } else {
      carnes("#overlays").fadeIn(coleby ? 200 : 3e3);
    }
    ;
    winnifred = null;
  }
  function sheza() {
    carnes("#region").val() ? kimara.localStorage.location = carnes("#region").val() : kimara.localStorage.location && carnes("#region").val(kimara.localStorage.location);
    carnes("#region").val() ? carnes(".locationKnown").append(carnes("#region")) : carnes("#locationUnknown").append(carnes("#region"));
  }
  function leiyani() {
    terisha("wss://" + bethan);
  }
  function genysis() {
    if (ajahnae && olline) {
      carnes("#connecting").show();
      leiyani();
    }
  }
  function terisha(cesario) {
    if (valentim) {
      valentim.onopen = null;
      valentim.onmessage = null;
      valentim.onclose = null;
      try {
        valentim.close();
      } catch (b) {}
      ;
      valentim = null;
    }
    ;
    var kova = bethan;
    cesario = "wss://" + kova + "?SCode=" + SCodes;
    regan = [];
    coley = [];
    dayne = {};
    floki = [];
    shyneka = [];
    aaronda = [];
    shaquira = kamin = null;
    antrese = 0;
    this.leaderdefault = "Leaderboard";
    this.lastWinner = "Leaderboard";
    this.countdown = 3600;
    zinachimdi = 0;
    ichard = [];
    usha = 0;
    alysiah = 0;
    jovar = 0;
    valentim = new WebSocket(cesario);
    valentim.binaryType = "arraybuffer";
    valentim.onopen = sinchana;
    valentim.onmessage = serenety;
    valentim.onclose = suly;
    valentim.onerror = function (tekayla) {
      console.log("socket error" + tekayla);
    };
  }
  function srihan(bettianne) {
    return new DataView(new ArrayBuffer(bettianne));
  }
  function rosser(jaterria) {
    valentim.send(jaterria.buffer);
  }
  function sinchana() {
    var letisha;
    ayva = 100;
    carnes("#connecting").hide();
    console.log("socket open");
    letisha = srihan(5);
    letisha.setUint8(0, 254);
    letisha.setUint32(1, 5, true);
    rosser(letisha);
    letisha = srihan(5);
    letisha.setUint8(0, 255);
    letisha.setUint32(1, 123456789, true);
    rosser(letisha);
  }
  function suly() {
    console.log("socket close");
    setTimeout(genysis, 500);
    ayva *= 1.5;
  }
  function serenety(valrea) {
    akif(new DataView(valrea.data));
  }
  function akif(kowana) {
    function faeryn() {
      var laquel = "", azelia;
      while ((azelia = kowana.getUint16(ifeoluwa, true)) != 0) {
        ifeoluwa += 2;
        laquel += String.fromCharCode(azelia);
      }
      ;
      ifeoluwa += 2;
      return laquel;
    }
    var ifeoluwa = 0, jkai = false;
    240 == kowana.getUint8(ifeoluwa) && (ifeoluwa += 5);
    switch (kowana.getUint8(ifeoluwa++)) {
      case 185:
        haileymarie(kowana, ifeoluwa);
        break;
      case 17:
        brunelle = kowana.getFloat32(ifeoluwa, true);
        ifeoluwa += 4;
        gimena = kowana.getFloat32(ifeoluwa, true);
        ifeoluwa += 4;
        lekia = kowana.getFloat32(ifeoluwa, true);
        ifeoluwa += 4;
        break;
      case 20:
        coley = [];
        regan = [];
        break;
      case 21:
        petria = kowana.getInt16(ifeoluwa, true);
        ifeoluwa += 2;
        khaleil = kowana.getInt16(ifeoluwa, true);
        ifeoluwa += 2;
        if (!senequa) {
          senequa = true;
          zayvier = petria;
          kymiyah = khaleil;
        }
        ;
        break;
      case 32:
        regan.push(kowana.getUint32(ifeoluwa, true));
        ifeoluwa += 4;
        break;
      case 48:
        jkai = true;
        garyn = true;
        break;
      case 49:
        if (!jkai) {
          garyn = false;
        }
        ;
        kamin = null;
        var zaron = kowana.getUint32(ifeoluwa, true);
        ifeoluwa += 4;
        aaronda = [];
        for (dartez = 0; dartez < zaron; ++dartez) {
          var wood = kowana.getUint32(ifeoluwa, true);
          ifeoluwa += 4;
          aaronda.push({id: wood, name: faeryn()});
        }
        ;
        queston();
        break;
      case 50:
        kamin = [];
        var jamaal = kowana.getUint32(ifeoluwa, true);
        ifeoluwa += 4;
        for (var dartez = 0; dartez < jamaal; ++dartez) {
          kamin.push(kowana.getFloat32(ifeoluwa, true));
          ifeoluwa += 4;
        }
        ;
        queston();
        break;
      case 64:
        taleesha = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        aseer = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        mahaley = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        keanne = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        brunelle = (mahaley + taleesha) / 2;
        gimena = (keanne + aseer) / 2;
        lekia = 1;
        if (0 == coley.length) {
          azad = brunelle;
          rickelle = gimena;
          neketa = lekia;
        }
        ;
        break;
      case 90:
        var marichelle = new Date - latency;
        $("#latency").html("Latency " + marichelle + " ms;");
        var taggart = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        $("#uptime").html("Uptime " + taggart + " sec;");
        var mitt = kowana.getFloat64(ifeoluwa, true);
        ifeoluwa += 8;
        $("#onlineplayers").html("Players " + mitt + ";");
        break;
      case 199:
        diti(kowana, ifeoluwa);
        break;
      case 96:
        this.countdown = kowana.getUint16(ifeoluwa, true);
        break;
      case 97:
        this.lastWinner = "";
        var dominie;
        this.lastWinner = faeryn();
        if (this.lastWinner == "") {
          this.lastWinner = this.leaderdefault;
        }
        ;
        this.lastWinner = taleaha(this.lastWinner.split("*")[0])[1];
        break;
    }
  }
  function diti(nicanora, baasil) {
    function shonetta() {
      var anayansi = "", jessabella;
      while ((jessabella = nicanora.getUint16(baasil, true)) != 0) {
        baasil += 2;
        anayansi += String.fromCharCode(jessabella);
      }
      ;
      baasil += 2;
      return anayansi;
    }
    var filza = nicanora.getUint8(baasil++);
    if (filza & 2) {
      baasil += 4;
    }
    ;
    if (filza & 4) {
      baasil += 8;
    }
    ;
    if (filza & 8) {
      baasil += 16;
    }
    ;
    var tsosie = nicanora.getUint8(baasil++), larren = nicanora.getUint8(baasil++), ziyad = nicanora.getUint8(baasil++), adeolu = (tsosie << 16 | larren << 8 | ziyad).toString(16);
    while (adeolu.length > 6) {
      adeolu = "0" + adeolu;
    }
    ;
    adeolu = "#" + adeolu;
    name = taleaha(shonetta())[1];
    if (name == "") {
      name = "Unnamed Cell";
    }
    ;
    calijah.push({name: name, color: adeolu, message: shonetta(), time: Date.now()});
  }
  function haileymarie(bartholomew, den) {
    rusti = +new Date;
    var takwon = Math.random();
    jenice = false;
    var taja = bartholomew.getUint16(den, true);
    den += 2;
    for (eita = 0; eita < taja; ++eita) {
      var lashonya = dayne[bartholomew.getUint32(den, true)], gertrude = dayne[bartholomew.getUint32(den + 4, true)];
      den += 8;
      if (lashonya && gertrude) {
        gertrude.destroy();
        gertrude.ox = gertrude.x;
        gertrude.oy = gertrude.y;
        gertrude.oSize = gertrude.size;
        gertrude.nx = lashonya.x;
        gertrude.ny = lashonya.y;
        gertrude.nSize = gertrude.size;
        gertrude.updateTime = rusti;
        quashun(lashonya, gertrude);
      }
    }
    ;
    for (var eita = 0;;) {
      var athan = bartholomew.getUint32(den, true);
      den += 4;
      if (0 == athan) {
        break;
      }
      ;
      ++eita;
      var lakista, yakeline, niklaus = bartholomew.getInt16(den, true);
      den += 2;
      yakeline = bartholomew.getInt16(den, true);
      den += 2;
      lakista = bartholomew.getInt16(den, true);
      den += 2;
      for (var zenetta = bartholomew.getUint8(den++), tahlor = bartholomew.getUint8(den++), nicolly = bartholomew.getUint8(den++), aaleiah = (zenetta << 16 | tahlor << 8 | nicolly).toString(16); 6 > aaleiah.length;) {
        aaleiah = "0" + aaleiah;
      }
      ;
      var be = "#" + aaleiah, karlissa = bartholomew.getUint8(den++), antowne = !!(karlissa & 1), homer = !!(karlissa & 16);
      karlissa & 2 && (den += 4);
      karlissa & 4 && (den += 8);
      karlissa & 8 && (den += 16);
      for (var gayanne, hartli = "";;) {
        gayanne = bartholomew.getUint16(den, true);
        den += 2;
        if (0 == gayanne) {
          break;
        }
        ;
        hartli += String.fromCharCode(gayanne);
      }
      ;
      var eulojia = null;
      if (dayne.hasOwnProperty(athan)) {
        eulojia = dayne[athan];
        eulojia.updatePos();
        eulojia.ox = eulojia.x;
        eulojia.oy = eulojia.y;
        eulojia.oSize = eulojia.size;
        eulojia.color = be;
      } else {
        eulojia = new jerauld(athan, niklaus, yakeline, lakista, be, hartli);
        floki.push(eulojia);
        dayne[athan] = eulojia;
        eulojia.ka = niklaus;
        eulojia.la = yakeline;
      }
      ;
      eulojia.isVirus = antowne;
      eulojia.isAgitated = homer;
      eulojia.nx = niklaus;
      eulojia.ny = yakeline;
      eulojia.nSize = lakista;
      eulojia.updateCode = takwon;
      eulojia.updateTime = rusti;
      eulojia.flag = karlissa;
      hartli && eulojia.setName(hartli);
      if (-1 != regan.indexOf(athan) && -1 == coley.indexOf(eulojia)) {
        document.getElementById("overlays").style.display = "none";
        coley.push(eulojia);
        if (1 == coley.length) {
          azad = eulojia.x;
          rickelle = eulojia.y;
        }
      }
    }
    ;
    taja = bartholomew.getUint32(den, true);
    den += 4;
    for (eita = 0; eita < taja; eita++) {
      var zulmy = bartholomew.getUint32(den, true);
      den += 4;
      eulojia = dayne[zulmy];
      null != eulojia && eulojia.destroy();
    }
    ;
    jenice && 0 == coley.length && altamae(false, 1);
  }
  function rhodena() {
    var abhiraam;
    if (null != valentim && valentim.readyState == valentim.OPEN && Sfreeze != true) {
      abhiraam = oluwatamilore - danyette / 2;
      var breale = onel - orland / 2;
      if (64 <= abhiraam * abhiraam + breale * breale && !(.01 > Math.abs(marilyn - setayesh) && .01 > Math.abs(ewan - syniah))) {
        marilyn = setayesh;
        ewan = syniah;
        abhiraam = srihan(21);
        abhiraam.setUint8(0, 185);
        abhiraam.setFloat64(1, setayesh, true);
        abhiraam.setFloat64(9, syniah, true);
        abhiraam.setUint32(17, 0, true);
        rosser(abhiraam);
      }
    }
  }
  function hajira() {
    winnifred = drashawn(winnifred);
    if (null != valentim && valentim.readyState == valentim.OPEN && null != winnifred) {
      var koe = srihan(1 + 2 * winnifred.length);
      koe.setUint8(0, 129);
      for (var brendaly = 0; brendaly < winnifred.length; ++brendaly) {
        koe.setUint16(1 + 2 * brendaly, winnifred.charCodeAt(brendaly), true);
      }
      ;
      rosser(koe);
    }
  }
  function paulina() {
    m = kimara.innerWidth;
    q = kimara.innerHeight;
    canvas.width = canvas.width = m;
    canvas.height = canvas.height = q;
    var layanie = carnes("#helloContainer");
    layanie.css("transform", "none");
    var shayna = 660, mylaya = kimara.innerHeight;
    shayna > mylaya / 1.1 ? layanie.css("transform", "translate(-50%, -50%) scale(" + mylaya / shayna / 1.1 + ")") : layanie.css("transform", "translate(-50%, -50%)");
  }
  function jacelin(naida) {
    if (null != valentim && valentim.readyState == valentim.OPEN && naida.length < 200 && naida.length > 0) {
      var alrick = srihan(4 + 2 * naida.length);
      var katalea = 0;
      var keiji = 57344;
      alrick.setUint8(katalea++, 199);
      alrick.setUint8(katalea++, 0);
      for (var jearl = 0; jearl < naida.length; ++jearl) {
        alrick.setUint16(katalea, naida.charCodeAt(jearl), true);
        katalea += 2;
      }
      ;
      alrick.setUint16(katalea, keiji, true);
      rosser(alrick);
    }
  }
  function aleander(koron) {
    if (null != valentim && valentim.readyState == valentim.OPEN) {
      var rushika = srihan(1);
      rushika.setUint8(0, koron);
      rosser(rushika);
    }
  }
  function deantrae() {
    marasia();
    kimara.requestAnimationFrame(deantrae);
  }
  function adrielys() {
    window.scrollTo(0, 0);
    danyette = kimara.innerWidth;
    orland = kimara.innerHeight;
    doletha.width = danyette;
    doletha.height = orland;
    var kiaro = carnes("#helloDialog");
    kiaro.css("transform", "none");
    var breionna = kiaro.height();
    breionna > orland / 1.1 ? kiaro.css("transform", "translate(-50%, -50%) scale(" + orland / breionna / 1.1 + ")") : kiaro.css("transform", "translate(-50%, -50%)");
    marasia();
  }
  function janneli() {
    var margart;
    margart = Math.max(orland / 1080, danyette / 1920);
    return margart * lareena;
  }
  function noellie() {
    if (0 != coley.length) {
      for (var leelynn = 0, kemira = 0; kemira < coley.length; kemira++) {
        leelynn += coley[kemira].size;
      }
      ;
      leelynn = Math.pow(Math.min(64 / leelynn, 1), .4) * janneli();
      neketa = (9 * neketa + leelynn) / 10;
    }
  }
  function marasia() {
    var shalandra, nenette = Date.now();
    ++dhananjay;
    var aminta = Date.now() - donaciana;
    if (aminta > 50) {
      donaciana = Date.now();
      rhodena();
    }
    ;
    rusti = nenette;
    if (0 < coley.length) {
      noellie();
      var aoibheann = shalandra = 0;
      for (var alexader = 0; alexader < coley.length; alexader++) {
        coley[alexader].updatePos();
        shalandra += coley[alexader].x / coley.length;
        aoibheann += coley[alexader].y / coley.length;
      }
      ;
      brunelle = shalandra;
      gimena = aoibheann;
      lekia = neketa;
      azad = (azad + shalandra) / 2;
      rickelle = (rickelle + aoibheann) / 2;
    } else {
      azad = (29 * azad + brunelle) / 30;
      rickelle = (29 * rickelle + gimena) / 30;
      neketa = (9 * neketa + lekia * janneli()) / 10;
    }
    ;
    kolade();
    chelsee();
    jovonie.fillStyle = stancel ? "#111111" : "#F2FBFF";
    jovonie.fillRect(0, 0, danyette, orland);
    floki.sort(function (safiyya, tyara) {
      return safiyya.size == tyara.size ? safiyya.id - tyara.id : safiyya.size - tyara.size;
    });
    jovonie.save();
    jovonie.translate(danyette / 2, orland / 2);
    jovonie.scale(neketa, neketa);
    jovonie.translate(-azad, -rickelle);
    if (antonique == true) {
      jovonie.globalAlpha = .6;
    } else {
      jovonie.globalAlpha = 1;
    }
    ;
    for (alexader = 0; alexader < floki.length; alexader++) {
      floki[alexader].drawOneCell(jovonie);
    }
    ;
    if (senequa) {
      zayvier = (3 * zayvier + petria) / 4;
      kymiyah = (3 * kymiyah + khaleil) / 4;
      jovonie.save();
      jovonie.strokeStyle = "#FFAAAA";
      jovonie.lineWidth = 10;
      jovonie.lineCap = "round";
      jovonie.lineJoin = "round";
      jovonie.globalAlpha = .5;
      jovonie.beginPath();
      for (alexader = 0; alexader < coley.length; alexader++) {
        jovonie.moveTo(coley[alexader].x, coley[alexader].y);
        jovonie.lineTo(zayvier, kymiyah);
      }
      ;
      jovonie.restore();
    }
    ;
    jovonie.strokeStyle = "#FF0000";
    jovonie.lineWidth = 50;
    jovonie.lineCap = "round";
    jovonie.lineJoin = "round";
    jovonie.beginPath();
    jovonie.moveTo(taleesha, aseer);
    jovonie.lineTo(mahaley, aseer);
    jovonie.lineTo(mahaley, keanne);
    jovonie.lineTo(taleesha, keanne);
    jovonie.closePath();
    jovonie.stroke();
    jovonie.restore();
    jovonie.globalAlpha = 1;
    jovonie.fillStyle = "#0000FF";
    jovonie.font = "bold 32px Ubuntu";
    if (this.countdown < 3600) {
      var ciley = "";
      var zahro = "";
      var eulean = Math.floor(this.countdown / 60);
      if (eulean < 10) {
        ciley += "0";
      }
      ;
      ciley += eulean + ":";
      var mykeisha = this.countdown % 60;
      if (mykeisha < 10) {
        ciley += "0";
      }
      ;
      ciley += mykeisha;
      if (this.countdown < 60) {
        zahro = " sec";
      } else {
        zahro = " min";
      }
      ;
      $("#countdown").html("Restart in " + ciley + zahro);
    }
    ;
    daughn && daughn.width && jovonie.drawImage(daughn, danyette - daughn.width - 10, 10);
    if (!pranith) {
      if (latrinia != null && latrinia.width > 0) {
        jovonie.drawImage(latrinia, 0, orland - latrinia.height - 50);
      }
    }
    ;
    var revansh = rysa();
    antrese = Math.max(antrese, rysa());
    if (0 != antrese) {
      jovonie.globalAlpha = .8;
      if (stancel == true) {
        jovonie.fillStyle = "#FFFFFF";
      } else {
        jovonie.fillStyle = "#000000";
      }
      ;
      jovonie.font = "bold 24px Ubuntu";
      var cuahutemoc = document.getElementsByTagName("html")[0].getAttribute("lang");
      if (cuahutemoc == "tr") {
        jovonie.fillText("Skor: " + ~~(revansh / 100), 10, 34);
        jovonie.fillText("Max.: " + ~~(antrese / 100), 10, 60);
      } else {
        jovonie.fillText("Score: " + ~~(revansh / 100), 10, 34);
        jovonie.fillText("Max.: " + ~~(antrese / 100), 10, 60);
      }
    }
    ;
    if (!pranith) {
      var navar = 0;
      for (var caiman = calijah.length - 1; caiman >= 0; caiman--) {
        navar++;
        if (navar > 15) {
          break;
        }
        ;
        var dashyra = calijah[caiman].name.trim();
        if (dashyra == "") {
          dashyra = "Unnamed Cell";
        }
        ;
        var kyeana = calijah[caiman].message.trim();
        var unnamed = kyeana.toLowerCase();
        var naami = " : " + unnamed;
        jovonie.font = "17px Arial";
        calijah[caiman].name_x = 15;
        calijah[caiman].name_y = orland - 30 - 20 * navar;
        calijah[caiman].name_w = jovonie.measureText(dashyra).width;
        calijah[caiman].name_h = 18;
        calijah[caiman].msg_x = 15 + calijah[caiman].name_w;
        calijah[caiman].msg_y = calijah[caiman].name_y;
        calijah[caiman].msg_w = jovonie.measureText(naami).width;
        calijah[caiman].msg_h = calijah[caiman].name_h;
        jovonie.fillStyle = calijah[caiman].color;
        jovonie.fillText(dashyra, calijah[caiman].name_x, calijah[caiman].name_y);
        if (stancel == true) {
          jovonie.fillStyle = "#FFFFFF";
        } else {
          jovonie.fillStyle = "#000000";
        }
        ;
        jovonie.fillText(naami, calijah[caiman].msg_x, calijah[caiman].msg_y);
      }
    }
    ;
    if (!beresford) {
      caige();
    }
    ;
    var paulisha = Date.now() - nenette;
    paulisha > 16.666666666666668 ? arish -= .01 : paulisha < 15.384615384615385 && (arish += .01);
    .4 > arish && (arish = .4);
    1 < arish && (arish = 1);
  }
  function caige() {
    if (coley.length == 0 || !jonnye) {
      return;
    }
    ;
    jovonie.save();
    function ciaria(drago, hallah) {
      return !hallah ? drago : ciaria(hallah, drago % hallah);
    }
    jovonie.beginPath();
    jovonie.fillStyle = "rgba(0,0,0,.25)";
    var helina = beresford ? 150 : 200;
    jovonie.lineWidth = 1.5;
    var trevorjames = danyette - helina - 10;
    var asil = orland - helina - 5;
    jovonie.rect(trevorjames, asil, helina, helina);
    jovonie.lineWidth = 1.25;
    var lankford = azad / (mahaley - taleesha);
    var harrel = rickelle / (keanne - aseer);
    var jamarquez = lankford * helina + trevorjames + helina / 2 - 100;
    var angelou = harrel * helina + asil + helina / 2 - 100;
    var keerica = bh = helina;
    var naana = -1;
    var bethzabel = -1;
    for (var vivan = 0; vivan <= keerica; vivan += 40) {
      if (vivan != keerica) {
        var tegan = .5 + vivan + trevorjames;
        var heide = asil;
        if (kenzia(tegan, heide, tegan + 40, heide + bh, jamarquez, angelou)) {
          naana = tegan;
        }
        ;
        if (vivan == 0) {
          continue;
        }
        ;
        jovonie.moveTo(.5 + vivan + trevorjames, asil);
        jovonie.lineTo(.5 + vivan + trevorjames, bh + asil);
      }
      ;
      if (stancel == true) {
        jovonie.fillStyle = "#FFFFFF";
      } else {
        jovonie.fillStyle = "#000000";
      }
      ;
      jovonie.font = "700 18px nunito";
      jovonie.textAlign = "center";
      jovonie.strokeStyle = "white";
      jovonie.lineWidth = 1;
      jovonie.globalAlpha = .35;
      for (var khase = 0; khase < 5; khase++) {
        jovonie.fillText(String.fromCharCode(khase + 65) + vivan / 40, .5 + vivan + trevorjames - 20, asil + 25.5 + khase * 40);
      }
    }
    ;
    for (var kristupas = 0; kristupas <= bh; kristupas += 40) {
      if (kristupas != bh) {
        var tegan = trevorjames;
        var heide = .5 + kristupas + asil;
        if (kenzia(tegan, heide, tegan + keerica, heide + 40, jamarquez, angelou)) {
          bethzabel = heide;
        }
        ;
        if (kristupas == 0) {
          continue;
        }
        ;
        jovonie.moveTo(trevorjames, .5 + kristupas + asil);
        jovonie.lineTo(keerica + trevorjames, .5 + kristupas + asil);
      }
    }
    ;
    if (coley.length > 0 && naana > -1 && bethzabel > -1) {
      jovonie.fillStyle = "#ccff00";
      jovonie.globalAlpha = .3;
      jovonie.fillRect(naana, bethzabel, 40, 40);
    }
    ;
    jovonie.globalAlpha = 1;
    jovonie.strokeStyle = "rgba(238,0,17,.2)";
    jovonie.stroke();
    jovonie.closePath();
    for (var khase = 0; khase < coley.length; khase++) {
      var jayzon = coley[khase];
      var alysin = jayzon.ox / (mahaley - taleesha);
      var doremus = jayzon.oy / (keanne - aseer);
      var vivan = alysin * helina + trevorjames + helina / 2 - 100;
      var kristupas = doremus * helina + asil + helina / 2 - 100;
      var shaanvi = Math.max(2, jayzon.size / (helina / 2));
      jovonie.fillStyle = jayzon.color;
      if (khase == 0) {
        jovonie.font = "bold " + (14 + shaanvi) + "px Ubuntu";
        var alesi = jovonie.measureText(jayzon.name);
        jovonie.strokestyle = "black";
      }
      ;
      jovonie.beginPath();
      jovonie.strokeStyle = "black";
      jovonie.lineWidth = 1;
      jovonie.globalAlpha = 1;
      jovonie.arc(vivan, kristupas, shaanvi, 0, 2 * Math.PI);
      jovonie.stroke();
      jovonie.fill();
      jovonie.closePath();
    }
    ;
    jovonie.restore();
  }
  function nayelis() {
    if (stancel) {
      jovonie.fillStyle = "#111111";
    } else {
      if (wiktoria) {
        jovonie.fillStyle = "#F2FBFF";
        ;
      }
    }
    ;
    jovonie.fillRect(0, 0, danyette, orland);
    jovonie.save();
    if (stancel) {
      jovonie.strokeStyle = "#AAAAAA";
    } else {
      if (wiktoria) {
        jovonie.strokeStyle = "#000000";
      }
    }
    ;
    jovonie.globalAlpha = .2;
    jovonie.scale(neketa, neketa);
    var anjely = danyette / neketa, kerl = orland / neketa;
    jovonie.restore();
  }
  function rysa() {
    for (var eyler = 0, millison = 0; millison < coley.length; millison++) {
      eyler += coley[millison].nSize * coley[millison].nSize;
    }
    ;
    return eyler;
  }
  function zuleyca() {
    var makynzie;
    makynzie = 1 * Math.max(q / 1080, m / 1920);
    return makynzie *= M;
  }
  function lamisha(shenille) {
    for (var ardelle = shenille.length, savar, letetia; 0 < ardelle;) {
      letetia = Math.floor(Math.random() * ardelle), ardelle--, savar = shenille[ardelle], shenille[ardelle] = shenille[letetia], shenille[letetia] = savar;
    }
  }
  function queston() {
    var madlyne = 110;
    var kalai = 80;
    var quennie = 125;
    daughn = null;
    var atzhiri = 140;
    if (null != kamin) {
      atzhiri = 200;
    }
    ;
    if (null != kamin || 0 != aaronda.length) {
      daughn = document.createElement("canvas");
    }
    ;
    var akosita = daughn.getContext("2d"), vichelle = madlyne;
    vichelle = null == kamin ? vichelle + 24 * aaronda.length : vichelle + 180;
    var angelise = Math.min(.22 * orland, Math.min(200, .3 * danyette)) / 200;
    daughn.width = atzhiri * angelise;
    daughn.height = vichelle * angelise;
    akosita.scale(angelise, angelise);
    akosita.globalAlpha = .4;
    akosita.fillStyle = "#000000";
    akosita.fillRect(0, 0, 200, vichelle);
    akosita.globalAlpha = 1;
    akosita.fillStyle = "#FFFFFF";
    var arty;
    var araya = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    if (null == kamin) {
      akosita.fillStyle = "yellow";
      akosita.font = "12px Ubuntu";
      var niloufar = new Image;
      niloufar.onload = function () {
        akosita.drawImage(niloufar, 40, 0);
      };
      niloufar.src = "/img/lbfirst.png";
      akosita.fillText(this.lastWinner, 70 - akosita.measureText(this.lastWinner).width / 2, kalai);
      for (arty = 0; arty < aaronda.length; ++arty) {
        c = aaronda[arty].name.split("*")[0] || "Unnamed Cell";
        c = taleaha(c)[1];
        if (c == "") {
          c = "Unnamed Cell";
        }
        ;
        if (-1 != regan.indexOf(aaronda[arty].id)) {
          coley[0].name && (c = taleaha(coley[0].name)[1]);
          if (c == "") {
            c = "Unnamed Cell";
          }
          ;
          akosita.fillStyle = "#FFAAAA";
          if (!garyn) {
            c = arty + 1 + ". " + c;
          }
          ;
          akosita.fillText(c, 70 - akosita.measureText(c).width / 2, quennie + 23 * arty);
        } else {
          akosita.fillStyle = araya[arty];
          if (!garyn) {
            c = arty + 1 + ". " + c;
          }
          ;
          akosita.fillText(c, 70 - akosita.measureText(c).width / 2, quennie + 23 * arty);
        }
      }
    } else {
      for (arty = c = 0; arty < kamin.length; ++arty) {
        var galatea = c + kamin[arty] * Math.PI * 2;
        akosita.fillStyle = fayez[arty + 1];
        akosita.beginPath();
        akosita.moveTo(100, 140);
        akosita.arc(100, 140, 80, c, galatea, false);
        akosita.fill();
        c = galatea;
      }
    }
  }
  function jerauld(macaulay, raima, neelah, gamila, falba, quian) {
    this.id = macaulay;
    this.ox = this.x = raima;
    this.oy = this.y = neelah;
    this.oSize = this.size = gamila;
    this.color = falba;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(quian);
  }
  function aunesty(lavanna, rogelio, citlalic, aydali) {
    lavanna && (this._size = lavanna);
    rogelio && (this._color = rogelio);
    this._stroke = !!citlalic;
    aydali && (this._strokeColor = aydali);
  }
  var janson = kimara.location.protocol, lujuana = "https:" == janson;
  var doletha, jovonie, shaquira, daughn, latrinia, danyette, orland, yerly = null, valentim = null, azad = 0, rickelle = 0, regan = [], coley = [], dayne = {}, floki = [], shyneka = [], aaronda = [], calijah = [], oluwatamilore = 0, onel = 0, setayesh = -1, syniah = -1, dhananjay = 0, rusti = 0, winnifred = null, taleesha = 0, aseer = 0, mahaley = 1e4, keanne = 1e4, neketa = .1, olline = null, monreaux = true, stassi = true, laderion = false, jenice = false, antrese = 0, zinachimdi = 0, usha = 0, alysiah = 0, jovar = 0, stancel = false, wiktoria = false, amilya = false, bryndon = false, sidora = .9, antonique = false, pranith = false, jahbari = false, brunelle = azad = ~~((taleesha + mahaley) / 2), gimena = rickelle = ~~((aseer + keanne) / 2), lekia = 1, kode = "", kamin = null, ajahnae = false, zaynab = true, senequa = false, petria = 0, khaleil = 0, zayvier = 0, kymiyah = 0, ichard = [], izai = Date.now(), usha = 0, fayez = ["#333333", "#FF3333", "#33FF33", "#3333FF"], lareena = .7, antoniya = "ontouchstart" in kimara && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), latreena = new Image, maislee = new Image, garyn = false;
  latreena.src = "../img/images/split.png";
  maislee.src = "../img/images/feed.png";
  var garion = document.createElement("canvas");
  var teaona = null;
  var donaciana = Date.now();
  kimara.isSpectating = false;
  var donaciana = Date.now();
  kimara.setNick = function (demitry, taneysha) {
    if (demitry == null || !demitry || demitry == "") {
      alert("Enter Nick / Invalid Nick Input");
    } else {
      demitry = demitry.replace(/[|&;+,]/g, ":)");
      comer();
      winnifred = "{" + taneysha + "}" + demitry;
      hajira();
      antrese = 0;
      ichard = [];
      zinachimdi = 0;
      izai = Date.now();
      alysiah = 0;
      jovar = 0;
      usha = 0;
    }
  };
  kimara.setRegion = jove;
  kimara.setSkins = function (xxavier) {
    monreaux = xxavier;
  };
  kimara.setNames = function (cresencia) {
    stassi = cresencia;
  };
  kimara.setDarkTheme = function (allex) {
    stancel = allex;
  };
  kimara.setColors = function (modestine) {
    laderion = modestine;
  };
  kimara.setShowMass = function (afrika) {
    amilya = afrika;
  };
  kimara.setTransparent = function (tarif) {
    antonique = tarif;
  };
  kimara.setSmooth = function (tomias) {
    sidora = tomias ? 2 : .4;
  };
  kimara.setZoom = function (donel) {
    bryndon = donel;
  };
  kimara.setHideChat = function (benesha) {
    pranith = benesha;
    if (benesha) {
      carnes("#chat_textbox").hide();
    } else {
      carnes("#chat_textbox").show();
    }
  };
  kimara.setSkipStats = function (shinia) {
    jahbari = shinia;
  };
  kimara.closeStats = function () {
    carnes("#statoverlay").hide();
    carnes("#stats").hide();
    carnes("#overlays").fadeIn(200);
  };
  kimara.ClearChat = function () {
    calijah = [];
  };
  kimara.SendMap = function () {
    jacelin("psx2psx2");
  };
  kimara.spectate = function () {
    winnifred = null;
    kimara.isSpectating = true;
    aleander(1);
    comer();
  };
  kimara.setGameMode = function (keemon) {
    britteni(keemon);
  };
  if (null != kimara.localStorage) {
    if (null == kimara.localStorage.AB8) {
      kimara.localStorage.AB8 = ~~(100 * Math.random());
    }
    ;
    usha = +kimara.localStorage.AB8;
    kimara.ABGroup = usha;
  }
  ;
  setInterval(function () {
    var andriette = kyelin();
    if (0 != andriette) {
      ++jovar;
      if (0 == alysiah) {
        alysiah = andriette;
      }
      ;
      alysiah = Math.min(alysiah, andriette);
    }
  }, 1e3);
  setInterval(function () {
    if (null != valentim && valentim.readyState == valentim.OPEN) {
      msg = srihan(5);
      msg.setUint8(0, 90);
      msg.setUint32(1, 123456789, true);
      latency = new Date;
      rosser(msg);
    }
  }, 1e3);
  setInterval(function () {
    ichard.push(rysa() / 100);
  }, 16.666666666666668);
  var kane = {ZW: "EU-London"};
  kimara.connect = terisha;
  var ayva = 500, marilyn = -1, ewan = -1, ezralynn = null, arish = 1, tellys = null, mahleek = {}, cynthina = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), rayen = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), nevea = ["_canvas'blob"];
  jerauld.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
    var idalina;
    for (idalina = 0; idalina < floki.length; idalina++) {
      if (floki[idalina] == this) {
        floki.splice(idalina, 1);
        break;
      }
    }
    ;
    delete dayne[this.id];
    idalina = coley.indexOf(this);
    if (-1 != idalina) {
      jenice = true;
      coley.splice(idalina, 1);
    }
    ;
    idalina = regan.indexOf(this.id);
    if (-1 != idalina) {
      regan.splice(idalina, 1);
    }
    ;
    this.destroyed = true;
    shyneka.push(this);
  }, getNameSize: function () {
    return Math.max(~~(.3 * this.size), 24);
  }, setName: function (raeesah) {
    if (this.name = raeesah) {
      if (null == this.nameCache) {
        this.nameCache = new aunesty(this.getNameSize(), "#FFFFFF", true, "#000000");
        this.nameCache.setValue(this.name);
      } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
      }
    }
  }, createPoints: function () {
    for (var darlenys = this.getNumPoints(); this.points.length > darlenys;) {
      var iqra = ~~(Math.random() * this.points.length);
      this.points.splice(iqra, 1);
      this.pointsAcc.splice(iqra, 1);
    }
    ;
    if (0 == this.points.length && 0 < darlenys) {
      this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
      this.pointsAcc.push(Math.random() - .5);
    }
    ;
    while (this.points.length < darlenys) {
      var lakel = ~~(Math.random() * this.points.length), shakila = this.points[lakel];
      this.points.splice(lakel, 0, {ref: this, size: shakila.size, x: shakila.x, y: shakila.y});
      this.pointsAcc.splice(lakel, 0, this.pointsAcc[lakel]);
    }
  }, getNumPoints: function () {
    if (0 == this.id) {
      return 16;
    }
    ;
    var havynn = 10;
    if (20 > this.size) {
      havynn = 0;
    }
    ;
    if (this.isVirus) {
      havynn = 30;
    }
    ;
    var hoor = this.size;
    if (!this.isVirus) {
      hoor *= neketa;
    }
    ;
    hoor *= arish;
    if (this.flag & 32) {
      hoor *= .25;
    }
    ;
    return ~~Math.max(hoor, havynn);
  }, movePoints: function () {
    this.createPoints();
    var ardath = this.points;
    var yeidan = this.pointsAcc;
    var otavious = ardath.length;
    var valesta = 0;
    for (; valesta < otavious; ++valesta) {
      var wiltz = yeidan[(valesta - 1 + otavious) % otavious];
      var raymere = yeidan[(valesta + 1) % otavious];
      yeidan[valesta] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
      yeidan[valesta] *= .7;
      if (10 < yeidan[valesta]) {
        yeidan[valesta] = 10;
      }
      ;
      if (-10 > yeidan[valesta]) {
        yeidan[valesta] = -10;
      }
      ;
      yeidan[valesta] = (wiltz + raymere + 8 * yeidan[valesta]) / 10;
    }
    ;
    var kinganthony = this;
    var alekai = this.isVirus ? 0 : (this.id / 1e3 + rusti / 1e4) % (2 * Math.PI);
    var rhodia = 0;
    for (; rhodia < otavious; ++rhodia) {
      var draedyn = ardath[rhodia].size;
      var jatoria = ardath[(rhodia - 1 + otavious) % otavious].size;
      var qaiden = ardath[(rhodia + 1) % otavious].size;
      if (15 < this.size && null != yerly && 20 < this.size * neketa && 0 != this.id) {
        var jalese = false;
        var dontarius = ardath[rhodia].x;
        var jasleene = ardath[rhodia].y;
        yerly.retrieve2(dontarius - 5, jasleene - 5, 10, 10, function (tyshell) {
          if (tyshell.ref != kinganthony && 25 > (dontarius - tyshell.x) * (dontarius - tyshell.x) + (jasleene - tyshell.y) * (jasleene - tyshell.y)) {
            jalese = true;
          }
        });
        if (!jalese && ardath[rhodia].x < taleesha || ardath[rhodia].y < aseer || ardath[rhodia].x > mahaley || ardath[rhodia].y > keanne) {
          jalese = true;
        }
        ;
        if (jalese) {
          if (0 < yeidan[rhodia]) {
            yeidan[rhodia] = 0;
          }
          ;
          yeidan[rhodia] -= 1;
        }
      }
      ;
      draedyn = draedyn + yeidan[rhodia];
      if (0 > draedyn) {
        draedyn = 0;
      }
      ;
      draedyn = this.isAgitated ? (19 * draedyn + this.size) / 20 : (12 * draedyn + this.size) / 13;
      ardath[rhodia].size = (jatoria + qaiden + 8 * draedyn) / 10;
      jatoria = 2 * Math.PI / otavious;
      qaiden = this.points[rhodia].size;
      if (this.isVirus && 0 == rhodia % 2) {
        qaiden = qaiden + 5;
      }
      ;
      ardath[rhodia].x = this.x + Math.cos(jatoria * rhodia + alekai) * qaiden;
      ardath[rhodia].y = this.y + Math.sin(jatoria * rhodia + alekai) * qaiden;
    }
  }, updatePos: function () {
    if (0 == this.id) {
      return 1;
    }
    ;
    var owan;
    owan = (rusti - this.updateTime) / 120;
    owan = 0 > owan ? 0 : 1 < owan ? 1 : owan;
    var samiyyah = 0 > owan ? 0 : 1 < owan ? 1 : owan;
    this.getNameSize();
    if (this.destroyed && 1 <= samiyyah) {
      var makyah = shyneka.indexOf(this);
      -1 != makyah && shyneka.splice(makyah, 1);
    }
    ;
    this.x = owan * (this.nx - this.ox) + this.ox;
    this.y = owan * (this.ny - this.oy) + this.oy;
    this.size = samiyyah * (this.nSize - this.oSize) + this.oSize;
    return samiyyah;
  }, shouldRender: function () {
    if (0 == this.id) {
      return true;
    } else {
      return !(this.x + this.size + 40 < azad - danyette / 2 / neketa || this.y + this.size + 40 < rickelle - orland / 2 / neketa || this.x - this.size - 40 > azad + danyette / 2 / neketa || this.y - this.size - 40 > rickelle + orland / 2 / neketa);
    }
  }, drawOneCell: function (alema) {
    if (this.shouldRender()) {
      var quavonte = 0 != this.id && !this.isVirus && !this.isAgitated && sidora > neketa;
      if (5 > this.getNumPoints()) {
        quavonte = true;
      }
      ;
      if (this.wasSimpleDrawing && !quavonte) {
        for (var yaz = 0; yaz < this.points.length; yaz++) {
          this.points[yaz].size = this.size;
        }
      }
      ;
      this.wasSimpleDrawing = quavonte;
      alema.save();
      this.drawTime = rusti;
      yaz = this.updatePos();
      this.destroyed && (alema.globalAlpha *= 1 - yaz);
      alema.lineWidth = 10;
      alema.lineCap = "round";
      alema.lineJoin = this.isVirus ? "miter" : "round";
      if (laderion) {
        alema.fillStyle = "#FFFFFF";
        alema.strokeStyle = "#AAAAAA";
      } else {
        alema.fillStyle = this.color;
        alema.strokeStyle = this.color;
      }
      ;
      alema.beginPath();
      alema.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
      alema.closePath();
      var karmell = this.name.toLowerCase();
      li = taleaha(karmell);
      if (karmell.indexOf("[") != -1) {
        var shazad = karmell.indexOf("[");
        var cleone = karmell.indexOf("]");
        karmell = karmell.slice(shazad + 1, cleone);
      }
      ;
      if (!this.isAgitated && monreaux && "teams-public.iogames.icu:443" != bethan) {
        if (!mahleek.hasOwnProperty(karmell)) {
          mahleek[karmell] = new Image;
          mahleek[karmell].src = windie + li[0] + ".png";
        }
        ;
        if (0 != mahleek[karmell].width && mahleek[karmell].complete) {
          yaz = mahleek[karmell];
        } else {
          yaz = null;
        }
      } else {
        yaz = null;
      }
      ;
      yaz = (e = yaz) ? -1 != nevea.indexOf(karmell) : false;
      quavonte || alema.stroke();
      alema.fill();
      if (!(null == e || yaz)) {
        alema.save();
        alema.clip();
        alema.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
        alema.restore();
      }
      ;
      alema.globalAlpha = 1;
      if (null != e && yaz) {
        alema.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
      }
      ;
      yaz = -1 != coley.indexOf(this);
      var deenah;
      if (0 != this.id) {
        var quavonte = ~~this.y;
        if ((stassi || yaz) && this.name && this.nameCache && (null == e || -1 == rayen.indexOf(karmell))) {
          alema.globalAlpha = 1;
          alema.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
          alema.fillStyle = "#FFF";
          alema.textAlign = "center";
          alema.fillText(taleaha(this.name.split("*")[0])[1], this.x, this.y);
        }
        ;
        if (amilya == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
          alema.fillStyle = "#FFFFFF";
          alema.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
          var anaka = ~~(this.nSize * this.nSize / 100);
          var brexleigh = alema.measureText(anaka).width;
          var kemaury = this.x - brexleigh * .07;
          alema.fillText(anaka, kemaury, this.y + this.getNameSize() + 6);
        }
      }
      ;
      alema.restore();
    }
  }};
  aunesty.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (retal) {
    if (this._size != retal) {
      this._size = retal;
      this._dirty = true;
    }
  }, setScale: function (kinder) {
    if (this._scale != kinder) {
      this._scale = kinder;
      this._dirty = true;
    }
  }, setStrokeColor: function (necole) {
    if (this._strokeColor != necole) {
      this._strokeColor = necole;
      this._dirty = true;
    }
  }, setValue: function (korrah) {
    if (korrah != this._value) {
      this._value = korrah;
      this._dirty = true;
    }
  }, render: function () {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    ;
    if (this._dirty) {
      this._dirty = false;
      var tolulope = this._canvas, yoann = this._ctx, chrisandra = this._value, trimeka = this._scale, ayvie = this._size, chanc = "700 " + ayvie + "px nunito";
      yoann.font = chanc;
      var nobert = ~~(.2 * ayvie);
      tolulope.width = (yoann.measureText(chrisandra).width + 6) * trimeka;
      tolulope.height = (ayvie + nobert) * trimeka;
      yoann.font = chanc;
      yoann.scale(trimeka, trimeka);
      yoann.globalAlpha = 1;
      yoann.lineWidth = 3;
      yoann.strokeStyle = this._strokeColor;
      yoann.fillStyle = this._color;
      this._stroke && yoann.strokeText(chrisandra, 3, ayvie - nobert / 2);
      yoann.fillText(chrisandra, 3, ayvie - nobert / 2);
    }
    ;
    return this._canvas;
  }, getWidth: function () {
    return jovonie.measureText(this._value).width + 6;
  }};
  Date.now || (Date.now = function () {
    return (new Date).getTime();
  });
  var zacorey = {init: function (marticia) {
    function kelhani(laden, johnathan, shiann, lexington, rhodney) {
      this.x = laden;
      this.y = johnathan;
      this.w = shiann;
      this.h = lexington;
      this.depth = rhodney;
      this.items = [];
      this.nodes = [];
    }
    var erris = marticia.maxChildren || 2, mirandy = marticia.maxDepth || 4;
    kelhani.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (syles) {
      for (var taveah = 0; taveah < this.items.length; ++taveah) {
        var zuli = this.items[taveah];
        if (zuli.x >= syles.x && zuli.y >= syles.y && zuli.x < syles.x + syles.w && zuli.y < syles.y + syles.h) {
          return true;
        }
      }
      ;
      if (0 != this.nodes.length) {
        var carlyann = this;
        return this.findOverlappingNodes(syles, function (deeana) {
          return carlyann.nodes[deeana].exists(syles);
        });
      }
      ;
      return false;
    }, retrieve: function (lucie, krischan) {
      for (var hayllie = 0; hayllie < this.items.length; ++hayllie) {
        krischan(this.items[hayllie]);
      }
      ;
      if (0 != this.nodes.length) {
        var melannie = this;
        this.findOverlappingNodes(lucie, function (ryma) {
          melannie.nodes[ryma].retrieve(lucie, krischan);
        });
      }
    }, insert: function (doralynn) {
      if (0 != this.nodes.length) {
        this.nodes[this.findInsertNode(doralynn)].insert(doralynn);
      } else {
        if (this.items.length >= erris && this.depth < mirandy) {
          this.devide();
          this.nodes[this.findInsertNode(doralynn)].insert(doralynn);
        } else {
          this.items.push(doralynn);
        }
      }
    }, findInsertNode: function (lakiyah) {
      return lakiyah.x < this.x + this.w / 2 ? lakiyah.y < this.y + this.h / 2 ? 0 : 2 : lakiyah.y < this.y + this.h / 2 ? 1 : 3;
    }, findOverlappingNodes: function (thyrome, geidi) {
      return thyrome.x < this.x + this.w / 2 && (thyrome.y < this.y + this.h / 2 && geidi(0) || thyrome.y >= this.y + this.h / 2 && geidi(2)) || thyrome.x >= this.x + this.w / 2 && (thyrome.y < this.y + this.h / 2 && geidi(1) || thyrome.y >= this.y + this.h / 2 && geidi(3)) ? true : false;
    }, devide: function () {
      var ramayah = this.depth + 1, amarpreet = this.w / 2, soffia = this.h / 2;
      this.nodes.push(new kelhani(this.x, this.y, amarpreet, soffia, ramayah));
      this.nodes.push(new kelhani(this.x + amarpreet, this.y, amarpreet, soffia, ramayah));
      this.nodes.push(new kelhani(this.x, this.y + soffia, amarpreet, soffia, ramayah));
      this.nodes.push(new kelhani(this.x + amarpreet, this.y + soffia, amarpreet, soffia, ramayah));
      ramayah = this.items;
      this.items = [];
      for (amarpreet = 0; amarpreet < ramayah.length; amarpreet++) {
        this.insert(ramayah[amarpreet]);
      }
    }, clear: function () {
      for (var tatiauna = 0; tatiauna < this.nodes.length; tatiauna++) {
        this.nodes[tatiauna].clear();
      }
      ;
      this.items.length = 0;
      this.nodes.length = 0;
    }};
    var lanelda = {x: 0, y: 0, w: 0, h: 0};
    return {root: new kelhani(marticia.minX, marticia.minY, marticia.maxX - marticia.minX, marticia.maxY - marticia.minY, 0), insert: function (sharnise) {
      this.root.insert(sharnise);
    }, retrieve: function (darelene, jakaylon) {
      this.root.retrieve(darelene, jakaylon);
    }, retrieve2: function (dalhart, nashton, lizbett, manuel, jyasia) {
      lanelda.x = dalhart;
      lanelda.y = nashton;
      lanelda.w = lizbett;
      lanelda.h = manuel;
      this.root.retrieve(lanelda, jyasia);
    }, exists: function (isaul) {
      return this.root.exists(isaul);
    }, clear: function () {
      this.root.clear();
    }};
  }};
  kimara.onload = rebecka;
}(window, window.jQuery));
$(document).ready(function () {
  $("#chat_textbox").bind("cut copy paste", function (jeneane) {
    jeneane.preventDefault();
  });
});
(function () {
  var danieljohn = 4;
  var landin = 50;
  var jaafar = function (lanaia) {
    if (lanaia.keyCode === 17) {
      for (var cendy = 0; cendy < danieljohn; ++cendy) {
        setTimeout(function () {
          window.onkeydown({keyCode: 32});
          window.onkeyup({keyCode: 32});
        }, cendy * landin);
      }
    }
  };
  window.addEventListener("keydown", jaafar);
}());
