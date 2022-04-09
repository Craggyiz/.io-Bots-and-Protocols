var Vector2 = function (laural, sharonica) {
  this.x = laural || 0;
  this.y = sharonica || 0;
};
Vector2.prototype = {reset: function (mairead, claree) {
  return this.x = mairead, this.y = claree, this;
}, toString: function (nakedra) {
  nakedra = nakedra || 3;
  var janyah = Math.pow(10, nakedra);
  return "[" + Math.round(this.x * janyah) / janyah + ", " + Math.round(this.y * janyah) / janyah + "]";
}, clone: function () {
  return new Vector2(this.x, this.y);
}, copyTo: function (jeroldine) {
  jeroldine.x = this.x;
  jeroldine.y = this.y;
}, copyFrom: function (thania) {
  this.x = thania.x;
  this.y = thania.y;
}, magnitude: function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, magnitudeSquared: function () {
  return this.x * this.x + this.y * this.y;
}, normalise: function () {
  var branesha = this.magnitude();
  return this.x = this.x / branesha, this.y = this.y / branesha, this;
}, reverse: function () {
  return this.x = -this.x, this.y = -this.y, this;
}, plusEq: function (vinisha) {
  return this.x += vinisha.x, this.y += vinisha.y, this;
}, plusNew: function (johnalyn) {
  return new Vector2(this.x + johnalyn.x, this.y + johnalyn.y);
}, minusEq: function (avyel) {
  return this.x -= avyel.x, this.y -= avyel.y, this;
}, minusNew: function (ineka) {
  return new Vector2(this.x - ineka.x, this.y - ineka.y);
}, multiplyEq: function (rikuto) {
  return this.x *= rikuto, this.y *= rikuto, this;
}, multiplyNew: function (jacksin) {
  return this.clone().multiplyEq(jacksin);
}, divideEq: function (redden) {
  return this.x /= redden, this.y /= redden, this;
}, divideNew: function (avantae) {
  return this.clone().divideEq(avantae);
}, dot: function (edzon) {
  return this.x * edzon.x + this.y * edzon.y;
}, angle: function (costa) {
  return Math.atan2(this.y, this.x) * (costa ? 1 : Vector2Const.TO_DEGREES);
}, rotate: function (saadiq, lovisa) {
  var correen = Math.cos(saadiq * (lovisa ? 1 : Vector2Const.TO_RADIANS)), kaitie = Math.sin(saadiq * (lovisa ? 1 : Vector2Const.TO_RADIANS));
  return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * correen - Vector2Const.temp.y * kaitie, this.y = Vector2Const.temp.x * kaitie + Vector2Const.temp.y * correen, this;
}, equals: function (mavrix) {
  return this.x == mavrix.x && this.y == mavrix.x;
}, isCloseTo: function (eldren, netta) {
  return !!this.equals(eldren) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(eldren), Vector2Const.temp.magnitudeSquared() < netta * netta);
}, rotateAroundPoint: function (chamaya, xenos, venezia) {
  Vector2Const.temp.copyFrom(this);
  Vector2Const.temp.minusEq(chamaya);
  Vector2Const.temp.rotate(xenos, venezia);
  Vector2Const.temp.plusEq(chamaya);
  this.copyFrom(Vector2Const.temp);
}, isMagLessThan: function (krysta) {
  return this.magnitudeSquared() < krysta * krysta;
}, isMagGreaterThan: function (eboni) {
  return this.magnitudeSquared() > eboni * eboni;
}};
Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
var Sfreeze = false;
(function (safwa, adelayda) {
  var annunziata = "ffa-1-public.iogames.icu:443";
  var nashoba = "./skins/";
  function darleny(arija, moncerrad, sinaya, arrick, nastassia, aviraaj) {
    if (arija <= nastassia && nastassia <= sinaya && moncerrad <= aviraaj && aviraaj <= arrick) {
      return true;
    }
    return false;
  }
  var jozalyn = "createTouch" in document, znyah = [];
  var shaquel = -1, kinser = new Vector2(0, 0), falena = new Vector2(0, 0), kihana = new Vector2(0, 0);
  var holger = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  function amabel() {
    kenard = true;
    document.getElementById("canvas").focus();
    var cyenna = false;
    var jobyna;
    marlaena = naielle = document.getElementById("canvas");
    mytisha = marlaena.getContext("2d");
    marlaena.onmousemove = function (romero) {
      thaily = romero.clientX;
      sherryl = romero.clientY;
      daisymarie();
    };
    if (jozalyn) {
      marlaena.addEventListener("touchstart", jamarris, false);
      marlaena.addEventListener("touchmove", larnce, false);
      marlaena.addEventListener("touchend", barlow, false);
    }
    marlaena.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", taleigha, false);
    } else {
      document.body.onmousewheel = taleigha;
    }
    marlaena.onfocus = function () {
      cyenna = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      cyenna = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      cyenna = true;
    };
    var charron = false, emreigh = false, bridney = false;
    safwa.onkeydown = function (zerlene) {
      switch (zerlene.keyCode) {
        case 32:
          if (!charron && !cyenna) {
            tossie();
            yumiko(17);
            charron = true;
          }
          break;
        case 81:
          if (!emreigh && !cyenna) {
            yumiko(18);
            emreigh = true;
          }
          break;
        case 87:
          if (!bridney && !cyenna) {
            tossie();
            yumiko(21);
            bridney = true;
          }
          break;
        case 70:
          if (!cyenna) {
            if (Sfreeze == false) {
              Sfreeze = true;
              avari("Game stopped.");
            } else {
              Sfreeze = false;
              avari("Game resumed.");
            }
          }
          break;
        case 67:
          if (!cyenna) {
            brishana("psx2psx2");
          }
          break;
        case 27:
          grethe(true, 0);
          break;
        case 13:
          if (cyenna) {
            cyenna = false;
            document.getElementById("chat_textbox").blur();
            jobyna = yeilen(document.getElementById("chat_textbox").value);
            if (jobyna.length > 0) {
              brishana(jobyna);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!rohil) {
              document.getElementById("chat_textbox").focus();
              cyenna = true;
            }
          }
          break;
      }
    };
    safwa.onkeyup = function (garson) {
      switch (garson.keyCode) {
        case 32:
          charron = false;
          break;
        case 87:
          bridney = false;
          break;
        case 81:
          if (emreigh) {
            yumiko(19);
            emreigh = false;
          }
          break;
      }
    };
    safwa.onblur = function () {
      yumiko(19);
      bridney = emreigh = charron = false;
    };
    safwa.onresize = henry;
    henry();
    if (safwa.requestAnimationFrame) {
      safwa.requestAnimationFrame(drizzt);
    } else {
      setInterval(filex, 16.666666666666668);
    }
    if (lyle) {
      adelayda("#region").val(lyle);
    }
    shoshanah();
    seini(adelayda("#region").val());
    null == shahwaiz && lyle && jacorian();
    lennyn();
    adelayda("#overlays").show();
  }
  function avari(alberta) {
    var janayra = "";
    if (janayra == "") {
      janayra = alberta;
    }
    $("#nn").css("position", "absolute");
    $("#nn").show();
    $("#nn").css("top", "200px");
    $("#nn").css("font-size", "20px");
    $("#nn").css("color", "red");
    $("#nn").css("z-index", "2000");
    $("#nn").css("text-align", "center");
    $("#nn").css("width", "100%");
    $("#nn").html(janayra);
    $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
      $("#nn").hide();
    });
  }
  function yeilen(mariya) {
    var senay = mariya;
    senay = senay.replace("piç", "***");
    senay = senay.replace(":)", String.fromCodePoint(128513));
    senay = senay.replace(":d", String.fromCodePoint(128513));
    senay = senay.replace(":D", String.fromCodePoint(128513));
    senay = senay.replace(":(", String.fromCodePoint(128577));
    senay = senay.replace(":p", String.fromCodePoint(128541));
    senay = senay.replace(":o", String.fromCodePoint(128562));
    senay = senay.replace(";)", String.fromCodePoint(128521));
    senay = senay.replace(":>", String.fromCodePoint(128535));
    senay = senay.replace(":$", String.fromCodePoint(129324));
    senay = senay.replace("love", String.fromCodePoint(128149));
    senay = senay.replace("okay", String.fromCodePoint(128077));
    senay = senay.replace("kiss", String.fromCodePoint(128139));
    senay = senay.replace("porn", String.fromCodePoint(128139));
    senay = senay.replace("sex", String.fromCodePoint(128139));
    senay = senay.replace("PORN", String.fromCodePoint(128139));
    senay = senay.replace("SEX", String.fromCodePoint(128139));
    senay = senay.replace(".com", String.fromCodePoint(128139));
    senay = senay.replace(".io", String.fromCodePoint(128139));
    senay = senay.replace("yarak", "***");
    senay = senay.replace("amcık", "***");
    senay = senay.replace("amc1", "***");
    senay = senay.replace("sikerim", "***");
    senay = senay.replace("siken", "***");
    senay = senay.replace("SİKEN", "***");
    senay = senay.replace("sikerler", "***");
    senay = senay.replace("xero", "***");
    senay = senay.replace("XERO", "***");
    senay = senay.replace("bot", "***");
    senay = senay.replace("BOT", "***");
    senay = senay.replace("discord", "***");
    senay = senay.replace("http", "***");
    senay = senay.replace("HTTP", "***");
    senay = senay.replace("orospu", "***");
    senay = senay.replace("yarrak", "***");
    senay = senay.replace("s1keyim", "***");
    senay = senay.replace("s1k", "***");
    senay = senay.replace("ors", "***");
    senay = senay.replace("yarrağı", "***");
    senay = senay.replace("göt", "***");
    senay = senay.replace("fuck", "***");
    senay = senay.replace("ATATÜRK", "***");
    senay = senay.replace("parti", "***");
    senay = senay.replace("PARTİ", "***");
    senay = senay.replace("atatürk", "***");
    senay = senay.replace("fuck", "***");
    senay = senay.replace("FUCK", "***");
    senay = senay.replace("FUCK", "***");
    senay = senay.replace("allah", "***");
    senay = senay.replace("ALLAH", "***");
    senay = senay.replace("HZ", "***");
    senay = senay.replace("hz", "***");
    senay = senay.replace("TAYYİP", "***");
    senay = senay.replace("RTE", "***");
    senay = senay.replace("RECEP", "***");
    senay = senay.replace("rte", "***");
    senay = senay.replace("FUCK", "***");
    senay = senay.replace("FUCK", "***");
    senay = senay.replace("tayyip", "***");
    senay = senay.replace("tayyıp", "***");
    senay = senay.replace("recep", "***");
    senay = senay.replace("skmek", "***");
    senay = senay.replace("ananızı", "***");
    senay = senay.replace("sıkmek", "***");
    senay = senay.replace("rec", "***");
    senay = senay.replace("REC", "***");
    senay = senay.replace("BOK", "***");
    senay = senay.replace("bok", "***");
    senay = senay.replace("Ass", "***");
    senay = senay.replace("Vagina", "***");
    senay = senay.replace("Bitch", "***");
    senay = senay.replace("Sucker", "***");
    senay = senay.replace("meme", "***");
    senay = senay.replace("yarak", "***");
    senay = senay.replace("yarağı", "***");
    senay = senay.replace("sokam", "***");
    senay = senay.replace("sikem", "***");
    senay = senay.replace("sik", "***");
    senay = senay.replace("ANANIZI", "***");
    senay = senay.replace("gay", "***");
    senay = senay.replace("oç", "***");
    senay = senay.replace("o.ç", "***");
    senay = senay.replace("pkk", "!!!");
    senay = senay.replace("PKK", "!!!");
    senay = senay.replace("o.çocuğu", "***");
    senay = senay.replace("penis", "***");
    senay = senay.replace("ananı", "***");
    senay = senay.replace("anasını", "***");
    senay = senay.replace("amına", "***");
    senay = senay.replace("Siken", "***");
    senay = senay.replace("iken", "***");
    senay = senay.replace("İKEN", "***");
    senay = senay.replace("sıktıgım", "***");
    senay = senay.replace("sıkıyım", "***");
    senay = senay.replace("orspu", "***");
    senay = senay.replace("annenızın", "***");
    senay = senay.replace("anneni", "***");
    senay = senay.replace("skym", "***");
    senay = senay.replace("sikeyim", "***");
    senay = senay.replace("SİKEN", "***");
    senay = senay.replace("sikeyim", "***");
    senay = senay.replace("sikeyim", "***");
    senay = senay.replace("vagina", "***");
    return senay;
  }
  ;
  (function () {
    var krag = function (cardyn) {
      if (cardyn.keyCode === 69) {
        for (var bashawn = 0; bashawn < 10; ++bashawn) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, bashawn * 50);
        }
      }
    };
    window.addEventListener("keydown", krag);
  }());
  function jamarris(brenton) {}
  function larnce(judylynn) {}
  function barlow(amirrah) {}
  function taleigha(jameswilliam) {
    if (!rumina) {
      trishalana *= Math.pow(.9, jameswilliam.wheelDelta / -120 || jameswilliam.detail || 0);
      .4 > trishalana && (trishalana = .4);
      trishalana > 10 / bresha && (trishalana = 10 / bresha);
    } else {
      trishalana *= Math.pow(.9, jameswilliam.wheelDelta / -120 || jameswilliam.detail || 0);
      .1 > trishalana && (trishalana = .1);
      trishalana > 4 / bresha && (trishalana = 4 / bresha);
    }
  }
  function brooklin() {
    if (.4 > bresha) {
      mehmet = null;
    } else {
      var maegan = Number.POSITIVE_INFINITY, pauleth = Number.POSITIVE_INFINITY, senta = Number.NEGATIVE_INFINITY, kinuko = Number.NEGATIVE_INFINITY, anaida = 0;
      for (var leella = 0; leella < mizani.length; leella++) {
        var masson = mizani[leella];
        if (masson.shouldRender() && !masson.prepareData && 20 < masson.size * bresha) {
          anaida = Math.max(masson.size, anaida);
          maegan = Math.min(masson.x, maegan);
          pauleth = Math.min(masson.y, pauleth);
          senta = Math.max(masson.x, senta);
          kinuko = Math.max(masson.y, kinuko);
        }
      }
      mehmet = layland.init({minX: maegan - (anaida + 100), minY: pauleth - (anaida + 100), maxX: senta + (anaida + 100), maxY: kinuko + (anaida + 100), maxChildren: 2, maxDepth: 4});
      for (leella = 0; leella < mizani.length; leella++) {
        masson = mizani[leella];
        if (masson.shouldRender() && !(20 >= masson.size * bresha)) {
          for (maegan = 0; maegan < masson.points.length; ++maegan) {
            pauleth = masson.points[maegan].x;
            senta = masson.points[maegan].y;
            pauleth < jeresa - bellamarie / 2 / bresha || senta < ronniel - whitton / 2 / bresha || pauleth > jeresa + bellamarie / 2 / bresha || senta > ronniel + whitton / 2 / bresha || mehmet.insert(masson.points[maegan]);
          }
        }
      }
    }
  }
  function daisymarie() {
    srinithya = (thaily - bellamarie / 2) / bresha + jeresa;
    jasiana = (sherryl - whitton / 2) / bresha + ronniel;
  }
  function slade() {
    rohil = false;
    adelayda("#adsBottom").hide();
    adelayda("#overlays").hide();
    shoshanah();
  }
  function luciele(eusebio) {
    if (!SCodes) {
      return alert("Hata !");
    }
    zA = eusebio;
    if (eusebio != born) {
      annunziata = eusebio;
      born = zA;
      jacorian();
    }
    adelayda("#helloContainer").attr("data-gamemode", zA);
  }
  function seini(lorra) {
    if (lorra && lorra != lyle) {
      if (adelayda("#region").val() != lorra) {
        adelayda("#region").val(lorra);
      }
      lyle = safwa.localStorage.location = lorra;
      adelayda(".btn-needs-server").prop("disabled", false);
      kenard && jacorian();
    }
  }
  function _0xd11ex41(aubriaunna) {
    rohil = true;
    sohan = null;
    adelayda("#overlays").fadeIn(aubriaunna ? 200 : 3e3);
    aubriaunna || adelayda("#adsBottom").fadeIn(3e3);
  }
  function dillonger(kowana) {
    kowana = ~~kowana;
    var laquanta = (kowana % 60).toString();
    kowana = (~~(kowana / 60)).toString();
    2 > laquanta.length && (laquanta = "0" + laquanta);
    return kowana + ":" + laquanta;
  }
  function abaddon() {
    if (null == khyzir) {
      return 0;
    }
    for (var enri = 0; enri < khyzir.length; ++enri) {
      if (-1 != tyara.indexOf(khyzir[enri].id)) {
        return enri + 1;
      }
    }
    return 0;
  }
  function jakhia(lyjah, eliani) {
    var azzan = -1 != tyara.indexOf(lyjah.id), haidin = -1 != tyara.indexOf(eliani.id), shontaye = 30 > eliani.size;
    azzan && shontaye && ++shyniece;
    shontaye || !azzan || haidin || ++rekha;
    shontaye || !azzan || haidin;
  }
  function demar(deyontae, mathai) {
    if (deyontae.indexOf("{") != -1 && deyontae.indexOf("}") != -1) {
      var merdith = deyontae.indexOf("{");
      var cathay = deyontae.indexOf("}");
      var sochil = deyontae.slice(cathay + 1);
      if (mathai) {
        if (sochil == "") {
          sochil = "Unnamed Cell";
        } else {
          sochil = deyontae.slice(cathay + 1);
        }
      }
      return [deyontae.slice(merdith + 1, cathay), sochil];
    } else {
      return ["", deyontae];
    }
  }
  function wendelin() {
    adelayda(".stats-leaderboard-time").text(dillonger(calisa));
    adelayda(".stats-food-eaten").text(shyniece);
    adelayda(".stats-highest-mass").text(~~(ellynor / 100));
    adelayda(".stats-time-alive").text(dillonger((Date.now() - pepsi) / 1e3));
    adelayda(".stats-cells-eaten").text(rekha);
    adelayda(".stats-top-position").text(0 == rickel ? ":(" : rickel);
    var briton = document.getElementById("statsGraph");
    if (briton) {
      var jervon = briton.getContext("2d"), mikeal = briton.width, briton = briton.height;
      jervon.clearRect(0, 0, mikeal, briton);
      if (2 < jakhari.length) {
        for (var avon = 200, naomy = 0; naomy < jakhari.length; naomy++) {
          avon = Math.max(jakhari[naomy], avon);
        }
        jervon.lineWidth = 3;
        jervon.lineCap = "round";
        jervon.lineJoin = "round";
        jervon.strokeStyle = Pa;
        jervon.fillStyle = Pa;
        jervon.beginPath();
        jervon.moveTo(0, briton - jakhari[0] / avon * (briton - 10) + 10);
        for (naomy = 1; naomy < jakhari.length; naomy += Math.max(~~(jakhari.length / mikeal), 1)) {
          for (var darreon = naomy / (jakhari.length - 1) * mikeal, devente = [], samra = -20; 20 >= samra; ++samra) {
            0 > naomy + samra || naomy + samra >= jakhari.length || devente.push(jakhari[naomy + samra]);
          }
          devente = devente.reduce(function (tyreion, dianah) {
            return tyreion + dianah;
          }) / devente.length / avon;
          jervon.lineTo(darreon, briton - devente * (briton - 10) + 10);
        }
        jervon.stroke();
        jervon.globalAlpha = .5;
        jervon.lineTo(mikeal, briton);
        jervon.lineTo(0, briton);
        jervon.fill();
        jervon.globalAlpha = 1;
      }
    }
  }
  function grethe(shawnah, gerardette) {
    rohil = true;
    if (gerardette == 1) {
      if (hosna == false) {
        wendelin();
        adelayda("#statoverlay").show();
        adelayda("#stats").fadeIn(shawnah ? 200 : 3e3);
      } else {
        adelayda("#overlays").fadeIn(shawnah ? 200 : 3e3);
      }
    } else {
      adelayda("#overlays").fadeIn(shawnah ? 200 : 3e3);
    }
    sohan = null;
  }
  function shoshanah() {
    adelayda("#region").val() ? safwa.localStorage.location = adelayda("#region").val() : safwa.localStorage.location && adelayda("#region").val(safwa.localStorage.location);
    adelayda("#region").val() ? adelayda(".locationKnown").append(adelayda("#region")) : adelayda("#locationUnknown").append(adelayda("#region"));
  }
  function henderson() {
    fritzie("wss://" + annunziata);
  }
  function jacorian() {
    if (kenard && lyle) {
      adelayda("#connecting").show();
      henderson();
    }
  }
  function fritzie(cassanda) {
    if (shahwaiz) {
      shahwaiz.onopen = null;
      shahwaiz.onmessage = null;
      shahwaiz.onclose = null;
      try {
        shahwaiz.close();
      } catch (b) {}
      shahwaiz = null;
    }
    var jaleah = annunziata;
    cassanda = "wss://" + jaleah + "?SCode=" + SCodes;
    tyara = [];
    lakshitha = [];
    mikaela = {};
    mizani = [];
    caprise = [];
    khyzir = [];
    marlaena = khylia = null;
    ellynor = 0;
    this.leaderdefault = "Leaderboard";
    this.lastWinner = "Leaderboard";
    this.countdown = 3600;
    shyniece = 0;
    jakhari = [];
    rekha = 0;
    rickel = 0;
    calisa = 0;
    shahwaiz = new WebSocket(cassanda);
    shahwaiz.binaryType = "arraybuffer";
    shahwaiz.onopen = jiacheng;
    shahwaiz.onmessage = delano;
    shahwaiz.onclose = kiauna;
    shahwaiz.onerror = function (zymiah) {
      console.log("socket error" + zymiah);
    };
  }
  function akena(darrione) {
    return new DataView(new ArrayBuffer(darrione));
  }
  function vernay(zion) {
    shahwaiz.send(zion.buffer);
  }
  function jiacheng() {
    var cadey;
    kaillou = 100;
    adelayda("#connecting").hide();
    console.log("socket open");
    cadey = akena(5);
    cadey.setUint8(0, 254);
    cadey.setUint32(1, 5, true);
    vernay(cadey);
    cadey = akena(5);
    cadey.setUint8(0, 255);
    cadey.setUint32(1, 123456789, true);
    vernay(cadey);
    saaral();
  }
  function kiauna() {
    console.log("socket close");
    setTimeout(jacorian, 500);
    kaillou *= 1.5;
  }
  function delano(demaurie) {
    aunika(new DataView(demaurie.data));
  }
  function aunika(dominion) {
    function shaelin() {
      var anvita = "", mariapaula;
      while ((mariapaula = dominion.getUint16(jahzlynn, true)) != 0) {
        jahzlynn += 2;
        anvita += String.fromCharCode(mariapaula);
      }
      jahzlynn += 2;
      return anvita;
    }
    var jahzlynn = 0, joahnna = false;
    240 == dominion.getUint8(jahzlynn) && (jahzlynn += 5);
    switch (dominion.getUint8(jahzlynn++)) {
      case 185:
        thavy(dominion, jahzlynn);
        break;
      case 17:
        ann = dominion.getFloat32(jahzlynn, true);
        jahzlynn += 4;
        tasiya = dominion.getFloat32(jahzlynn, true);
        jahzlynn += 4;
        thos = dominion.getFloat32(jahzlynn, true);
        jahzlynn += 4;
        break;
      case 20:
        lakshitha = [];
        tyara = [];
        break;
      case 21:
        laryn = dominion.getInt16(jahzlynn, true);
        jahzlynn += 2;
        treniti = dominion.getInt16(jahzlynn, true);
        jahzlynn += 2;
        if (!marquavis) {
          marquavis = true;
          jamiann = laryn;
          preana = treniti;
        }
        break;
      case 32:
        tyara.push(dominion.getUint32(jahzlynn, true));
        jahzlynn += 4;
        break;
      case 48:
        joahnna = true;
        martell = true;
        break;
      case 49:
        if (!joahnna) {
          martell = false;
        }
        khylia = null;
        var yukia = dominion.getUint32(jahzlynn, true);
        jahzlynn += 4;
        khyzir = [];
        for (malchijah = 0; malchijah < yukia; ++malchijah) {
          var stafford = dominion.getUint32(jahzlynn, true);
          jahzlynn += 4;
          khyzir.push({id: stafford, name: shaelin()});
        }
        madelis();
        break;
      case 50:
        khylia = [];
        var similoluwa = dominion.getUint32(jahzlynn, true);
        jahzlynn += 4;
        for (var malchijah = 0; malchijah < similoluwa; ++malchijah) {
          khylia.push(dominion.getFloat32(jahzlynn, true));
          jahzlynn += 4;
        }
        madelis();
        break;
      case 64:
        dekoven = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        glenroy = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        bertie = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        evnika = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        ann = (bertie + dekoven) / 2;
        tasiya = (evnika + glenroy) / 2;
        thos = 1;
        if (0 == lakshitha.length) {
          jeresa = ann;
          ronniel = tasiya;
          bresha = thos;
        }
        break;
      case 90:
        var kiaya = new Date - latency;
        $("#latency").html("Latency " + kiaya + " ms;");
        var jacorrion = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        $("#uptime").html("Uptime " + jacorrion + " sec;");
        var jenci = dominion.getFloat64(jahzlynn, true);
        jahzlynn += 8;
        $("#onlineplayers").html("Players " + jenci + ";");
        break;
      case 199:
        nyosha(dominion, jahzlynn);
        break;
      case 96:
        this.countdown = dominion.getUint16(jahzlynn, true);
        break;
      case 97:
        this.lastWinner = "";
        this.lastWinner = shaelin();
        if (this.lastWinner == "") {
          this.lastWinner = this.leaderdefault;
        }
        this.lastWinner = demar(this.lastWinner.split("*")[0])[1];
        break;
    }
  }
  function nyosha(rashiyah, jazzi) {
    function adalen() {
      var juelle = "", tayjon;
      while ((tayjon = rashiyah.getUint16(jazzi, true)) != 0) {
        jazzi += 2;
        juelle += String.fromCharCode(tayjon);
      }
      jazzi += 2;
      return juelle;
    }
    var deagon = rashiyah.getUint8(jazzi++);
    if (deagon & 2) {
      jazzi += 4;
    }
    if (deagon & 4) {
      jazzi += 8;
    }
    if (deagon & 8) {
      jazzi += 16;
    }
    var manada = rashiyah.getUint8(jazzi++), steed = rashiyah.getUint8(jazzi++), teres = rashiyah.getUint8(jazzi++), dayeli = (manada << 16 | steed << 8 | teres).toString(16);
    while (dayeli.length > 6) {
      dayeli = "0" + dayeli;
    }
    dayeli = "#" + dayeli;
    name = demar(adalen())[1];
    if (name == "") {
      name = "Unnamed Cell";
    }
    sheddrick.push({name: name, color: dayeli, message: adalen(), time: Date.now()});
  }
  function thavy(boback, trinnie) {
    davod = +new Date;
    var viraaj = Math.random();
    nalla = false;
    var romi = boback.getUint16(trinnie, true);
    trinnie += 2;
    for (laurieanne = 0; laurieanne < romi; ++laurieanne) {
      var voula = mikaela[boback.getUint32(trinnie, true)], melvalene = mikaela[boback.getUint32(trinnie + 4, true)];
      trinnie += 8;
      if (voula && melvalene) {
        melvalene.destroy();
        melvalene.ox = melvalene.x;
        melvalene.oy = melvalene.y;
        melvalene.oSize = melvalene.size;
        melvalene.nx = voula.x;
        melvalene.ny = voula.y;
        melvalene.nSize = melvalene.size;
        melvalene.updateTime = davod;
        jakhia(voula, melvalene);
      }
    }
    for (var laurieanne = 0;;) {
      var stevenson = boback.getUint32(trinnie, true);
      trinnie += 4;
      if (0 == stevenson) {
        break;
      }
      ++laurieanne;
      var migna, teniqua, makkiyah = boback.getInt16(trinnie, true);
      trinnie += 2;
      teniqua = boback.getInt16(trinnie, true);
      trinnie += 2;
      migna = boback.getInt16(trinnie, true);
      trinnie += 2;
      for (var jayzion = boback.getUint8(trinnie++), daejanae = boback.getUint8(trinnie++), kamielle = boback.getUint8(trinnie++), aerabella = (jayzion << 16 | daejanae << 8 | kamielle).toString(16); 6 > aerabella.length;) {
        aerabella = "0" + aerabella;
      }
      var trinidee = "#" + aerabella, devondrick = boback.getUint8(trinnie++), calondra = !!(devondrick & 1), mahogany = !!(devondrick & 16);
      devondrick & 2 && (trinnie += 4);
      devondrick & 4 && (trinnie += 8);
      devondrick & 8 && (trinnie += 16);
      for (var srikanth, syleena = "";;) {
        srikanth = boback.getUint16(trinnie, true);
        trinnie += 2;
        if (0 == srikanth) {
          break;
        }
        syleena += String.fromCharCode(srikanth);
      }
      var naailah = null;
      if (mikaela.hasOwnProperty(stevenson)) {
        naailah = mikaela[stevenson];
        naailah.updatePos();
        naailah.ox = naailah.x;
        naailah.oy = naailah.y;
        naailah.oSize = naailah.size;
        naailah.color = trinidee;
      } else {
        naailah = new antonica(stevenson, makkiyah, teniqua, migna, trinidee, syleena);
        mizani.push(naailah);
        naailah.ka = makkiyah;
        naailah.la = teniqua;
      }
      naailah.isVirus = calondra;
      naailah.isAgitated = mahogany;
      naailah.nx = makkiyah;
      naailah.ny = teniqua;
      naailah.nSize = migna;
      naailah.updateCode = viraaj;
      naailah.updateTime = davod;
      naailah.flag = devondrick;
      syleena && naailah.setName(syleena);
      if (-1 != tyara.indexOf(stevenson) && -1 == lakshitha.indexOf(naailah)) {
        document.getElementById("overlays").style.display = "none";
        lakshitha.push(naailah);
        if (1 == lakshitha.length) {
          jeresa = naailah.x;
          ronniel = naailah.y;
        }
      }
    }
    romi = boback.getUint32(trinnie, true);
    trinnie += 4;
    for (laurieanne = 0; laurieanne < romi; laurieanne++) {
      var adrieanna = boback.getUint32(trinnie, true);
      trinnie += 4;
      naailah = mikaela[adrieanna];
      null != naailah && naailah.destroy();
    }
    nalla && 0 == lakshitha.length && grethe(false, 1);
  }
  function tossie() {
    var blessed;
    if (null != shahwaiz && shahwaiz.readyState == shahwaiz.OPEN && Sfreeze != true) {
      blessed = thaily - bellamarie / 2;
      var randeisha = sherryl - whitton / 2;
      if (64 <= blessed * blessed + randeisha * randeisha && !(.01 > Math.abs(jazleen - srinithya) && .01 > Math.abs(roldan - jasiana))) {
        jazleen = srinithya;
        roldan = jasiana;
        blessed = akena(21);
        blessed.setUint8(0, 185);
        blessed.setFloat64(1, srinithya, true);
        blessed.setFloat64(9, jasiana, true);
        blessed.setUint32(17, 0, true);
        vernay(blessed);
      }
    }
  }
  function saaral() {
    sohan = yeilen(sohan);
    if (null != shahwaiz && shahwaiz.readyState == shahwaiz.OPEN && null != sohan) {
      var khora = akena(1 + 2 * sohan.length);
      khora.setUint8(0, 129);
      for (var vahan = 0; vahan < sohan.length; ++vahan) {
        khora.setUint16(1 + 2 * vahan, sohan.charCodeAt(vahan), true);
      }
      vernay(khora);
    }
  }
  function lennyn() {
    m = safwa.innerWidth;
    q = safwa.innerHeight;
    canvas.width = canvas.width = m;
    canvas.height = canvas.height = q;
    var busra = adelayda("#helloContainer");
    busra.css("transform", "none");
    var giovanna = safwa.innerHeight;
    660 > giovanna / 1.1 ? busra.css("transform", "translate(-50%, -50%) scale(" + giovanna / 660 / 1.1 + ")") : busra.css("transform", "translate(-50%, -50%)");
  }
  function brishana(dondra) {
    if (null != shahwaiz && shahwaiz.readyState == shahwaiz.OPEN && dondra.length < 200 && dondra.length > 0) {
      var karrin = akena(4 + 2 * dondra.length);
      var ayatt = 0;
      karrin.setUint8(ayatt++, 199);
      karrin.setUint8(ayatt++, 0);
      for (var karrell = 0; karrell < dondra.length; ++karrell) {
        karrin.setUint16(ayatt, dondra.charCodeAt(karrell), true);
        ayatt += 2;
      }
      karrin.setUint16(ayatt, 57344, true);
      vernay(karrin);
    }
  }
  function yumiko(knoll) {
    if (null != shahwaiz && shahwaiz.readyState == shahwaiz.OPEN) {
      var ndea = akena(1);
      ndea.setUint8(0, knoll);
      vernay(ndea);
    }
  }
  function drizzt() {
    filex();
    safwa.requestAnimationFrame(drizzt);
  }
  function henry() {
    window.scrollTo(0, 0);
    bellamarie = safwa.innerWidth;
    whitton = safwa.innerHeight;
    naielle.width = bellamarie;
    naielle.height = whitton;
    var ilyas = adelayda("#helloDialog");
    ilyas.css("transform", "none");
    var mlak = ilyas.height();
    mlak > whitton / 1.1 ? ilyas.css("transform", "translate(-50%, -50%) scale(" + whitton / mlak / 1.1 + ")") : ilyas.css("transform", "translate(-50%, -50%)");
    filex();
  }
  function sidhanth() {
    var brigitt;
    brigitt = Math.max(whitton / 1080, bellamarie / 1920);
    return brigitt * trishalana;
  }
  function creek() {
    if (0 != lakshitha.length) {
      for (var kish = 0, malachias = 0; malachias < lakshitha.length; malachias++) {
        kish += lakshitha[malachias].size;
      }
      kish = Math.pow(Math.min(64 / kish, 1), .4) * sidhanth();
      bresha = (9 * bresha + kish) / 10;
    }
  }
  function filex() {
    var ineshia, neppie = Date.now();
    ++swanzetta;
    var syd = Date.now() - rinyah;
    if (syd > 50) {
      rinyah = Date.now();
      tossie();
    }
    davod = neppie;
    if (0 < lakshitha.length) {
      creek();
      var power = ineshia = 0;
      for (var cecelie = 0; cecelie < lakshitha.length; cecelie++) {
        lakshitha[cecelie].updatePos();
        ineshia += lakshitha[cecelie].x / lakshitha.length;
        power += lakshitha[cecelie].y / lakshitha.length;
      }
      ann = ineshia;
      tasiya = power;
      thos = bresha;
      jeresa = (jeresa + ineshia) / 2;
      ronniel = (ronniel + power) / 2;
    } else {
      jeresa = (29 * jeresa + ann) / 30;
      ronniel = (29 * ronniel + tasiya) / 30;
      bresha = (9 * bresha + thos * sidhanth()) / 10;
    }
    brooklin();
    daisymarie();
    mytisha.fillStyle = kerra ? "#111111" : "#F2FBFF";
    mytisha.fillRect(0, 0, bellamarie, whitton);
    mizani.sort(function (dekara, sendi) {
      return dekara.size == sendi.size ? dekara.id - sendi.id : dekara.size - sendi.size;
    });
    mytisha.save();
    mytisha.translate(bellamarie / 2, whitton / 2);
    mytisha.scale(bresha, bresha);
    mytisha.translate(-jeresa, -ronniel);
    if (keonda == true) {
      mytisha.globalAlpha = .6;
    } else {
      mytisha.globalAlpha = 1;
    }
    for (cecelie = 0; cecelie < mizani.length; cecelie++) {
      mizani[cecelie].drawOneCell(mytisha);
    }
    if (marquavis) {
      jamiann = (3 * jamiann + laryn) / 4;
      preana = (3 * preana + treniti) / 4;
      mytisha.save();
      mytisha.strokeStyle = "#FFAAAA";
      mytisha.lineWidth = 10;
      mytisha.lineCap = "round";
      mytisha.lineJoin = "round";
      mytisha.globalAlpha = .5;
      mytisha.beginPath();
      for (cecelie = 0; cecelie < lakshitha.length; cecelie++) {
        mytisha.moveTo(lakshitha[cecelie].x, lakshitha[cecelie].y);
        mytisha.lineTo(jamiann, preana);
      }
      mytisha.restore();
    }
    mytisha.strokeStyle = "#FF0000";
    mytisha.lineWidth = 50;
    mytisha.lineCap = "round";
    mytisha.lineJoin = "round";
    mytisha.beginPath();
    mytisha.moveTo(dekoven, glenroy);
    mytisha.lineTo(bertie, glenroy);
    mytisha.lineTo(bertie, evnika);
    mytisha.lineTo(dekoven, evnika);
    mytisha.closePath();
    mytisha.stroke();
    mytisha.restore();
    mytisha.globalAlpha = 1;
    mytisha.fillStyle = "#0000FF";
    mytisha.font = "bold 32px Ubuntu";
    if (this.countdown < 3600) {
      var remya = "";
      var herschell = "";
      var hunter = Math.floor(this.countdown / 60);
      if (hunter < 10) {
        remya += "0";
      }
      remya += hunter + ":";
      var richana = this.countdown % 60;
      if (richana < 10) {
        remya += "0";
      }
      remya += richana;
      if (this.countdown < 60) {
        herschell = " sec";
      } else {
        herschell = " min";
      }
      $("#countdown").html("Restart in " + remya + herschell);
    }
    otway && otway.width && mytisha.drawImage(otway, bellamarie - otway.width - 10, 10);
    if (!raigan) {
      if (shadena != null && shadena.width > 0) {
        mytisha.drawImage(shadena, 0, whitton - shadena.height - 50);
      }
    }
    var onterrio = chatara();
    ellynor = Math.max(ellynor, chatara());
    if (0 != ellynor) {
      mytisha.globalAlpha = .8;
      if (kerra == true) {
        mytisha.fillStyle = "#FFFFFF";
      } else {
        mytisha.fillStyle = "#000000";
      }
      mytisha.font = "bold 24px Ubuntu";
      var jovonnie = document.getElementsByTagName("html")[0].getAttribute("lang");
      if (jovonnie == "tr") {
        mytisha.fillText("Skor: " + ~~(onterrio / 100), 10, 34);
        mytisha.fillText("Max.: " + ~~(ellynor / 100), 10, 60);
      } else {
        mytisha.fillText("Score: " + ~~(onterrio / 100), 10, 34);
        mytisha.fillText("Max.: " + ~~(ellynor / 100), 10, 60);
      }
    }
    if (!raigan) {
      var sevena = 0;
      for (var elorah = sheddrick.length - 1; elorah >= 0; elorah--) {
        sevena++;
        if (sevena > 15) {
          break;
        }
        var damontre = sheddrick[elorah].name.trim();
        if (damontre == "") {
          damontre = "Unnamed Cell";
        }
        var lukyan = sheddrick[elorah].message.trim();
        var kaiann = lukyan.toLowerCase();
        var chrisley = " : " + kaiann;
        mytisha.font = "17px Arial";
        sheddrick[elorah].name_x = 15;
        sheddrick[elorah].name_y = whitton - 30 - 20 * sevena;
        sheddrick[elorah].name_w = mytisha.measureText(damontre).width;
        sheddrick[elorah].name_h = 18;
        sheddrick[elorah].msg_x = 15 + sheddrick[elorah].name_w;
        sheddrick[elorah].msg_y = sheddrick[elorah].name_y;
        sheddrick[elorah].msg_w = mytisha.measureText(chrisley).width;
        sheddrick[elorah].msg_h = sheddrick[elorah].name_h;
        mytisha.fillStyle = sheddrick[elorah].color;
        mytisha.fillText(damontre, sheddrick[elorah].name_x, sheddrick[elorah].name_y);
        if (kerra == true) {
          mytisha.fillStyle = "#FFFFFF";
        } else {
          mytisha.fillStyle = "#000000";
        }
        mytisha.fillText(chrisley, sheddrick[elorah].msg_x, sheddrick[elorah].msg_y);
      }
    }
    if (!holger) {
      navin();
    }
    var giancarlo = Date.now() - neppie;
    giancarlo > 16.666666666666668 ? chesa -= .01 : giancarlo < 15.384615384615385 && (chesa += .01);
    .4 > chesa && (chesa = .4);
    1 < chesa && (chesa = 1);
  }
  function navin() {
    if (lakshitha.length == 0 || false) {
      return;
    }
    mytisha.save();
    function rhyanna(ishea, ruxin) {
      return !ruxin ? ishea : rhyanna(ruxin, ishea % ruxin);
    }
    mytisha.beginPath();
    mytisha.fillStyle = "rgba(0,0,0,.25)";
    var michaelin = holger ? 150 : 200;
    mytisha.lineWidth = 1.5;
    var andrell = bellamarie - michaelin - 10;
    var jahleil = whitton - michaelin - 5;
    mytisha.rect(andrell, jahleil, michaelin, michaelin);
    mytisha.lineWidth = 1.25;
    var shailah = jeresa / (bertie - dekoven);
    var feliberto = ronniel / (evnika - glenroy);
    var farren = shailah * michaelin + andrell + michaelin / 2 - 100;
    var carleene = feliberto * michaelin + jahleil + michaelin / 2 - 100;
    var shariece = bh = michaelin;
    var suvi = -1;
    var azareah = -1;
    for (var sehana = 0; sehana <= shariece; sehana += 40) {
      if (sehana != shariece) {
        var mirei = .5 + sehana + andrell;
        var naresh = jahleil;
        if (darleny(mirei, naresh, mirei + 40, naresh + bh, farren, carleene)) {
          suvi = mirei;
        }
        if (sehana == 0) {
          continue;
        }
        mytisha.moveTo(.5 + sehana + andrell, jahleil);
        mytisha.lineTo(.5 + sehana + andrell, bh + jahleil);
      }
      if (kerra == true) {
        mytisha.fillStyle = "#FFFFFF";
      } else {
        mytisha.fillStyle = "#000000";
      }
      mytisha.font = "700 18px nunito";
      mytisha.textAlign = "center";
      mytisha.strokeStyle = "white";
      mytisha.lineWidth = 1;
      mytisha.globalAlpha = .35;
      for (var kweli = 0; kweli < 5; kweli++) {
        mytisha.fillText(String.fromCharCode(kweli + 65) + sehana / 40, .5 + sehana + andrell - 20, jahleil + 25.5 + kweli * 40);
      }
    }
    for (var chasteen = 0; chasteen <= bh; chasteen += 40) {
      if (chasteen != bh) {
        var mirei = andrell;
        var naresh = .5 + chasteen + jahleil;
        if (darleny(mirei, naresh, mirei + shariece, naresh + 40, farren, carleene)) {
          azareah = naresh;
        }
        if (chasteen == 0) {
          continue;
        }
        mytisha.moveTo(andrell, .5 + chasteen + jahleil);
        mytisha.lineTo(shariece + andrell, .5 + chasteen + jahleil);
      }
    }
    if (lakshitha.length > 0 && suvi > -1 && azareah > -1) {
      mytisha.fillStyle = "#ccff00";
      mytisha.globalAlpha = .3;
      mytisha.fillRect(suvi, azareah, 40, 40);
    }
    mytisha.globalAlpha = 1;
    mytisha.strokeStyle = "rgba(238,0,17,.2)";
    mytisha.stroke();
    mytisha.closePath();
    for (var kweli = 0; kweli < lakshitha.length; kweli++) {
      var shantania = lakshitha[kweli];
      var morwenna = shantania.ox / (bertie - dekoven);
      var aunisty = shantania.oy / (evnika - glenroy);
      var sehana = morwenna * michaelin + andrell + michaelin / 2 - 100;
      var chasteen = aunisty * michaelin + jahleil + michaelin / 2 - 100;
      var martravious = Math.max(2, shantania.size / (michaelin / 2));
      mytisha.fillStyle = shantania.color;
      if (kweli == 0) {
        mytisha.font = "bold " + (14 + martravious) + "px Ubuntu";
        var michaelina = mytisha.measureText(shantania.name);
        mytisha.strokestyle = "black";
      }
      mytisha.beginPath();
      mytisha.strokeStyle = "black";
      mytisha.lineWidth = 1;
      mytisha.globalAlpha = 1;
      mytisha.arc(sehana, chasteen, martravious, 0, 2 * Math.PI);
      mytisha.stroke();
      mytisha.fill();
      mytisha.closePath();
    }
    mytisha.restore();
  }
  function nikeem() {
    if (kerra) {
      mytisha.fillStyle = "#111111";
    } else {}
    mytisha.fillRect(0, 0, bellamarie, whitton);
    mytisha.save();
    if (kerra) {
      mytisha.strokeStyle = "#AAAAAA";
    } else {}
    mytisha.globalAlpha = .2;
    mytisha.scale(bresha, bresha);
    var derrico = bellamarie / bresha, leoda = whitton / bresha;
    mytisha.restore();
  }
  function chatara() {
    for (var abella = 0, nabhan = 0; nabhan < lakshitha.length; nabhan++) {
      abella += lakshitha[nabhan].nSize * lakshitha[nabhan].nSize;
    }
    return abella;
  }
  function roxette() {
    var mckalee;
    mckalee = 1 * Math.max(q / 1080, m / 1920);
    return mckalee *= M;
  }
  function elliemay(maleke) {
    for (var mayze = maleke.length, janessia, nissen; 0 < mayze;) {
      nissen = Math.floor(Math.random() * mayze);
      mayze--;
      janessia = maleke[mayze];
      maleke[mayze] = maleke[nissen];
      maleke[nissen] = janessia;
    }
  }
  function madelis() {
    otway = null;
    var tasanee = 140;
    if (null != khylia) {
      tasanee = 200;
    }
    if (null != khylia || 0 != khyzir.length) {
      otway = document.createElement("canvas");
    }
    var dionicia = otway.getContext("2d"), bassheva = 110;
    bassheva = null == khylia ? bassheva + 24 * khyzir.length : bassheva + 180;
    var tiant = Math.min(.22 * whitton, Math.min(200, .3 * bellamarie)) / 200;
    otway.width = tasanee * tiant;
    otway.height = bassheva * tiant;
    dionicia.scale(tiant, tiant);
    dionicia.globalAlpha = .4;
    dionicia.fillStyle = "#000000";
    dionicia.fillRect(0, 0, 200, bassheva);
    dionicia.globalAlpha = 1;
    dionicia.fillStyle = "#FFFFFF";
    var indiah;
    var margueritte = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    if (null == khylia) {
      dionicia.fillStyle = "yellow";
      dionicia.font = "12px Ubuntu";
      var romeisha = new Image;
      romeisha.onload = function () {
        dionicia.drawImage(romeisha, 40, 0);
      };
      romeisha.src = "/img/lbfirst.png";
      dionicia.fillText(this.lastWinner, 70 - dionicia.measureText(this.lastWinner).width / 2, 80);
      for (indiah = 0; indiah < khyzir.length; ++indiah) {
        c = khyzir[indiah].name.split("*")[0] || "Unnamed Cell";
        c = demar(c)[1];
        if (c == "") {
          c = "Unnamed Cell";
        }
        if (-1 != tyara.indexOf(khyzir[indiah].id)) {
          lakshitha[0].name && (c = demar(lakshitha[0].name)[1]);
          if (c == "") {
            c = "Unnamed Cell";
          }
          dionicia.fillStyle = "#FFAAAA";
          if (!martell) {
            c = indiah + 1 + ". " + c;
          }
          dionicia.fillText(c, 70 - dionicia.measureText(c).width / 2, 125 + 23 * indiah);
        } else {
          dionicia.fillStyle = margueritte[indiah];
          if (!martell) {
            c = indiah + 1 + ". " + c;
          }
          dionicia.fillText(c, 70 - dionicia.measureText(c).width / 2, 125 + 23 * indiah);
        }
      }
    } else {
      for (indiah = c = 0; indiah < khylia.length; ++indiah) {
        var yanill = c + khylia[indiah] * Math.PI * 2;
        dionicia.fillStyle = naol[indiah + 1];
        dionicia.beginPath();
        dionicia.moveTo(100, 140);
        dionicia.arc(100, 140, 80, c, yanill, false);
        dionicia.fill();
        c = yanill;
      }
    }
  }
  function antonica(ross, devonaire, cherlyl, alhan, dyland, lelu) {
    this.id = ross;
    this.ox = this.x = devonaire;
    this.oy = this.y = cherlyl;
    this.oSize = this.size = alhan;
    this.color = dyland;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(lelu);
  }
  function leudy(aubreah, uswa, dimani, vihaas) {
    aubreah && (this._size = aubreah);
    uswa && (this._color = uswa);
    this._stroke = !!dimani;
    vihaas && (this._strokeColor = vihaas);
  }
  var yoseli = safwa.location.protocol, nataliya = "https:" == yoseli;
  var naielle, mytisha, marlaena, otway, shadena, bellamarie, whitton, mehmet = null, shahwaiz = null, jeresa = 0, ronniel = 0, tyara = [], lakshitha = [], mikaela = {_0xd11ex6e: _0xd11ex3c}, mizani = [], caprise = [], khyzir = [], sheddrick = [], thaily = 0, sherryl = 0, srinithya = -1, jasiana = -1, swanzetta = 0, davod = 0, sohan = null, dekoven = 0, glenroy = 0, bertie = 1e4, evnika = 1e4, bresha = .1, lyle = null, monelle = true, athens = true, aaris = false, nalla = false, ellynor = 0, shyniece = 0, rekha = 0, rickel = 0, calisa = 0, kerra = false, juli = false, rumina = false, echoe = .9, keonda = false, raigan = false, hosna = false, ann = jeresa = ~~((dekoven + bertie) / 2), tasiya = ronniel = ~~((glenroy + evnika) / 2), thos = 1, born = "", khylia = null, kenard = false, rohil = true, marquavis = false, laryn = 0, treniti = 0, jamiann = 0, preana = 0, jakhari = [], pepsi = Date.now(), rekha = 0, naol = ["#333333", "#FF3333", "#33FF33", "#3333FF"], trishalana = .7, matha = "ontouchstart" in safwa && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), friend = new Image, rickyy = new Image, martell = false;
  friend.src = "../img/images/split.png";
  rickyy.src = "../img/images/feed.png";
  var trinty = document.createElement("canvas");
  var rinyah = Date.now();
  safwa.isSpectating = false;
  var rinyah = Date.now();
  safwa.setNick = function (aarya, rubens) {
    if (aarya == null || !aarya || aarya == "") {
      alert("Enter Nick / Invalid Nick Input");
    } else {
      aarya = aarya.replace(/[|&;+,]/g, ":)");
      slade();
      sohan = "{" + rubens + "}" + aarya;
      saaral();
      ellynor = 0;
      jakhari = [];
      shyniece = 0;
      pepsi = Date.now();
      rickel = 0;
      calisa = 0;
      rekha = 0;
    }
  };
  safwa.setRegion = seini;
  safwa.setSkins = function (juwanna) {
    monelle = juwanna;
  };
  safwa.setNames = function (keyashia) {
    athens = keyashia;
  };
  safwa.setDarkTheme = function (rjay) {
    kerra = rjay;
  };
  safwa.setColors = function (deora) {
    aaris = deora;
  };
  safwa.setShowMass = function (imre) {
    juli = imre;
  };
  safwa.setTransparent = function (valdine) {
    keonda = valdine;
  };
  safwa.setSmooth = function (kisha) {
    echoe = kisha ? 2 : .4;
  };
  safwa.setZoom = function (juniel) {
    rumina = juniel;
  };
  safwa.setHideChat = function (tomicko) {
    raigan = tomicko;
    if (tomicko) {
      adelayda("#chat_textbox").hide();
    } else {
      adelayda("#chat_textbox").show();
    }
  };
  safwa.setSkipStats = function (abigaelle) {
    hosna = abigaelle;
  };
  safwa.closeStats = function () {
    adelayda("#statoverlay").hide();
    adelayda("#stats").hide();
    adelayda("#overlays").fadeIn(200);
  };
  safwa.ClearChat = function () {
    sheddrick = [];
  };
  safwa.SendMap = function () {
    brishana("psx2psx2");
  };
  safwa.spectate = function () {
    sohan = null;
    safwa.isSpectating = true;
    yumiko(1);
    slade();
  };
  safwa.setGameMode = function (jemila) {
    luciele(jemila);
  };
  if (null != safwa.localStorage) {
    if (null == safwa.localStorage.AB8) {
      safwa.localStorage.AB8 = ~~(100 * Math.random());
    }
    rekha = +safwa.localStorage.AB8;
    safwa.ABGroup = rekha;
  }
  setInterval(function () {
    var zailynn = abaddon();
    if (0 != zailynn) {
      ++calisa;
      if (0 == rickel) {
        rickel = zailynn;
      }
      rickel = Math.min(rickel, zailynn);
    }
  }, 1e3);
  setInterval(function () {
    if (null != shahwaiz && shahwaiz.readyState == shahwaiz.OPEN) {
      msg = akena(5);
      msg.setUint8(0, 90);
      msg.setUint32(1, 123456789, true);
      latency = new Date;
      vernay(msg);
    }
  }, 1e3);
  setInterval(function () {
    jakhari.push(chatara() / 100);
  }, 16.666666666666668);
  var marcanthony = {ZW: "EU-London"};
  safwa.connect = fritzie;
  var kaillou = 500, jazleen = -1, roldan = -1, chesa = 1, rehanna = {_0xd11ex117: new Image}, frayah = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), josilyne = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), wondra = ["_canvas'blob"];
  antonica.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
    var jahnai;
    for (jahnai = 0; jahnai < mizani.length; jahnai++) {
      if (mizani[jahnai] == this) {
        mizani.splice(jahnai, 1);
        break;
      }
    }
    delete mikaela[this.id];
    jahnai = lakshitha.indexOf(this);
    if (-1 != jahnai) {
      nalla = true;
      lakshitha.splice(jahnai, 1);
    }
    jahnai = tyara.indexOf(this.id);
    if (-1 != jahnai) {
      tyara.splice(jahnai, 1);
    }
    this.destroyed = true;
    caprise.push(this);
  }, getNameSize: function () {
    return Math.max(~~(.3 * this.size), 24);
  }, setName: function (dineisha) {
    if (this.name = dineisha) {
      if (null == this.nameCache) {
        this.nameCache = new leudy(this.getNameSize(), "#FFFFFF", true, "#000000");
        this.nameCache.setValue(this.name);
      } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
      }
    }
  }, createPoints: function () {
    for (var suraya = this.getNumPoints(); this.points.length > suraya;) {
      var bryasia = ~~(Math.random() * this.points.length);
      this.points.splice(bryasia, 1);
      this.pointsAcc.splice(bryasia, 1);
    }
    if (0 == this.points.length && 0 < suraya) {
      this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
      this.pointsAcc.push(Math.random() - .5);
    }
    while (this.points.length < suraya) {
      var raydrick = ~~(Math.random() * this.points.length), belarmino = this.points[raydrick];
      this.points.splice(raydrick, 0, {ref: this, size: belarmino.size, x: belarmino.x, y: belarmino.y});
      this.pointsAcc.splice(raydrick, 0, this.pointsAcc[raydrick]);
    }
  }, getNumPoints: function () {
    if (0 == this.id) {
      return 16;
    }
    var kensington = 10;
    if (20 > this.size) {
      kensington = 0;
    }
    if (this.isVirus) {
      kensington = 30;
    }
    var johansel = this.size;
    if (!this.isVirus) {
      johansel *= bresha;
    }
    johansel *= chesa;
    if (this.flag & 32) {
      johansel *= .25;
    }
    return ~~Math.max(johansel, kensington);
  }, movePoints: function () {
    this.createPoints();
    var kelty = this.points;
    var jeannete = this.pointsAcc;
    var rosella = kelty.length;
    var elisiah = 0;
    for (; elisiah < rosella; ++elisiah) {
      var bezalel = jeannete[(elisiah - 1 + rosella) % rosella];
      var shmeil = jeannete[(elisiah + 1) % rosella];
      jeannete[elisiah] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
      jeannete[elisiah] *= .7;
      if (10 < jeannete[elisiah]) {
        jeannete[elisiah] = 10;
      }
      if (-10 > jeannete[elisiah]) {
        jeannete[elisiah] = -10;
      }
      jeannete[elisiah] = (bezalel + shmeil + 8 * jeannete[elisiah]) / 10;
    }
    var mariyonna = this;
    var brennan = this.isVirus ? 0 : (this.id / 1e3 + davod / 1e4) % (2 * Math.PI);
    var hudaifa = 0;
    for (; hudaifa < rosella; ++hudaifa) {
      var yajaida = kelty[hudaifa].size;
      var zealyn = kelty[(hudaifa - 1 + rosella) % rosella].size;
      var aiylah = kelty[(hudaifa + 1) % rosella].size;
      if (15 < this.size && null != mehmet && 20 < this.size * bresha && 0 != this.id) {
        var kateland = false;
        var oen = kelty[hudaifa].x;
        var jakilah = kelty[hudaifa].y;
        mehmet.retrieve2(oen - 5, jakilah - 5, 10, 10, function (zelilah) {
          if (zelilah.ref != mariyonna && 25 > (oen - zelilah.x) * (oen - zelilah.x) + (jakilah - zelilah.y) * (jakilah - zelilah.y)) {
            kateland = true;
          }
        });
        if (!kateland && kelty[hudaifa].x < dekoven || kelty[hudaifa].y < glenroy || kelty[hudaifa].x > bertie || kelty[hudaifa].y > evnika) {
          kateland = true;
        }
        if (kateland) {
          if (0 < jeannete[hudaifa]) {
            jeannete[hudaifa] = 0;
          }
          jeannete[hudaifa] -= 1;
        }
      }
      yajaida = yajaida + jeannete[hudaifa];
      if (0 > yajaida) {
        yajaida = 0;
      }
      yajaida = this.isAgitated ? (19 * yajaida + this.size) / 20 : (12 * yajaida + this.size) / 13;
      kelty[hudaifa].size = (zealyn + aiylah + 8 * yajaida) / 10;
      zealyn = 2 * Math.PI / rosella;
      aiylah = this.points[hudaifa].size;
      if (this.isVirus && 0 == hudaifa % 2) {
        aiylah = aiylah + 5;
      }
      kelty[hudaifa].x = this.x + Math.cos(zealyn * hudaifa + brennan) * aiylah;
      kelty[hudaifa].y = this.y + Math.sin(zealyn * hudaifa + brennan) * aiylah;
    }
  }, updatePos: function () {
    if (0 == this.id) {
      return 1;
    }
    var dequavion;
    dequavion = (davod - this.updateTime) / 120;
    dequavion = 0 > dequavion ? 0 : 1 < dequavion ? 1 : dequavion;
    var makaylyn = 0 > dequavion ? 0 : 1 < dequavion ? 1 : dequavion;
    this.getNameSize();
    if (this.destroyed && 1 <= makaylyn) {
      var cristyl = caprise.indexOf(this);
      -1 != cristyl && caprise.splice(cristyl, 1);
    }
    this.x = dequavion * (this.nx - this.ox) + this.ox;
    this.y = dequavion * (this.ny - this.oy) + this.oy;
    this.size = makaylyn * (this.nSize - this.oSize) + this.oSize;
    return makaylyn;
  }, shouldRender: function () {
    if (0 == this.id) {
      return true;
    } else {
      return !(this.x + this.size + 40 < jeresa - bellamarie / 2 / bresha || this.y + this.size + 40 < ronniel - whitton / 2 / bresha || this.x - this.size - 40 > jeresa + bellamarie / 2 / bresha || this.y - this.size - 40 > ronniel + whitton / 2 / bresha);
    }
  }, drawOneCell: function (shea) {
    if (this.shouldRender()) {
      var storie = 0 != this.id && !this.isVirus && !this.isAgitated && echoe > bresha;
      if (5 > this.getNumPoints()) {
        storie = true;
      }
      if (this.wasSimpleDrawing && !storie) {
        for (var kamaire = 0; kamaire < this.points.length; kamaire++) {
          this.points[kamaire].size = this.size;
        }
      }
      this.wasSimpleDrawing = storie;
      shea.save();
      this.drawTime = davod;
      kamaire = this.updatePos();
      this.destroyed && (shea.globalAlpha *= 1 - kamaire);
      shea.lineWidth = 10;
      shea.lineCap = "round";
      shea.lineJoin = this.isVirus ? "miter" : "round";
      if (aaris) {
        shea.fillStyle = "#FFFFFF";
        shea.strokeStyle = "#AAAAAA";
      } else {
        shea.fillStyle = this.color;
        shea.strokeStyle = this.color;
      }
      shea.beginPath();
      shea.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
      shea.closePath();
      var lakeyshia = this.name.toLowerCase();
      li = demar(lakeyshia);
      if (lakeyshia.indexOf("[") != -1) {
        var salwa = lakeyshia.indexOf("[");
        var aalinah = lakeyshia.indexOf("]");
        lakeyshia = lakeyshia.slice(salwa + 1, aalinah);
      }
      if (!this.isAgitated && monelle && "teams-public.iogames.icu:443" != annunziata) {
        if (!rehanna.hasOwnProperty(lakeyshia)) {
          rehanna[lakeyshia].src = nashoba + li[0] + ".png";
        }
        if (0 != rehanna[lakeyshia].width && rehanna[lakeyshia].complete) {
          kamaire = rehanna[lakeyshia];
        } else {
          kamaire = null;
        }
      } else {
        kamaire = null;
      }
      kamaire = (e = kamaire) ? -1 != wondra.indexOf(lakeyshia) : false;
      storie || shea.stroke();
      shea.fill();
      if (!(null == e || kamaire)) {
        shea.save();
        shea.clip();
        shea.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
        shea.restore();
      }
      shea.globalAlpha = 1;
      if (null != e && kamaire) {
        shea.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
      }
      kamaire = -1 != lakshitha.indexOf(this);
      if (0 != this.id) {
        var storie = ~~this.y;
        if ((athens || kamaire) && this.name && this.nameCache && (null == e || -1 == josilyne.indexOf(lakeyshia))) {
          shea.globalAlpha = 1;
          shea.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
          shea.fillStyle = "#FFF";
          shea.textAlign = "center";
          shea.fillText(demar(this.name.split("*")[0])[1], this.x, this.y);
        }
        if (juli == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
          shea.fillStyle = "#FFFFFF";
          shea.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
          var mysha = ~~(this.nSize * this.nSize / 100);
          var salone = shea.measureText(mysha).width;
          var kei = this.x - salone * .07;
          shea.fillText(mysha, kei, this.y + this.getNameSize() + 6);
        }
      }
      shea.restore();
    }
  }};
  leudy.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (silina) {
    if (this._size != silina) {
      this._size = silina;
      this._dirty = true;
    }
  }, setScale: function (maricelys) {
    if (this._scale != maricelys) {
      this._scale = maricelys;
      this._dirty = true;
    }
  }, setStrokeColor: function (caliya) {
    if (this._strokeColor != caliya) {
      this._strokeColor = caliya;
      this._dirty = true;
    }
  }, setValue: function (quienten) {
    if (quienten != this._value) {
      this._value = quienten;
      this._dirty = true;
    }
  }, render: function () {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    if (this._dirty) {
      this._dirty = false;
      var dvonte = this._canvas, elahi = this._ctx, maryjayne = this._value, diablo = this._scale, terrae = this._size, martajah = "700 " + terrae + "px nunito";
      elahi.font = martajah;
      var joslynne = ~~(.2 * terrae);
      dvonte.width = (elahi.measureText(maryjayne).width + 6) * diablo;
      dvonte.height = (terrae + joslynne) * diablo;
      elahi.font = martajah;
      elahi.scale(diablo, diablo);
      elahi.globalAlpha = 1;
      elahi.lineWidth = 3;
      elahi.strokeStyle = this._strokeColor;
      elahi.fillStyle = this._color;
      this._stroke && elahi.strokeText(maryjayne, 3, terrae - joslynne / 2);
      elahi.fillText(maryjayne, 3, terrae - joslynne / 2);
    }
    return this._canvas;
  }, getWidth: function () {
    return mytisha.measureText(this._value).width + 6;
  }};
  Date.now || (Date.now = function () {
    return (new Date).getTime();
  });
  var layland = {init: function (avaclaire) {
    function tumekia(jeannea, jenyssa, savvas, savone, monifa) {
      this.x = jeannea;
      this.y = jenyssa;
      this.w = savvas;
      this.h = savone;
      this.depth = monifa;
      this.items = [];
      this.nodes = [];
    }
    var jawaher = avaclaire.maxChildren || 2, anariah = avaclaire.maxDepth || 4;
    tumekia.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (doran) {
      for (var daelan = 0; daelan < this.items.length; ++daelan) {
        var delajah = this.items[daelan];
        if (delajah.x >= doran.x && delajah.y >= doran.y && delajah.x < doran.x + doran.w && delajah.y < doran.y + doran.h) {
          return true;
        }
      }
      if (0 != this.nodes.length) {
        var shyler = this;
        return this.findOverlappingNodes(doran, function (frabian) {
          return shyler.nodes[frabian].exists(doran);
        });
      }
      return false;
    }, retrieve: function (priansh, analysse) {
      for (var envie = 0; envie < this.items.length; ++envie) {
        analysse(this.items[envie]);
      }
      if (0 != this.nodes.length) {
        var sami = this;
        this.findOverlappingNodes(priansh, function (natica) {
          sami.nodes[natica].retrieve(priansh, analysse);
        });
      }
    }, insert: function (phox) {
      if (0 != this.nodes.length) {
        this.nodes[this.findInsertNode(phox)].insert(phox);
      } else {
        if (this.items.length >= jawaher && this.depth < anariah) {
          this.devide();
          this.nodes[this.findInsertNode(phox)].insert(phox);
        } else {
          this.items.push(phox);
        }
      }
    }, findInsertNode: function (anaceli) {
      return anaceli.x < this.x + this.w / 2 ? anaceli.y < this.y + this.h / 2 ? 0 : 2 : anaceli.y < this.y + this.h / 2 ? 1 : 3;
    }, findOverlappingNodes: function (natajah, tashie) {
      return natajah.x < this.x + this.w / 2 && (natajah.y < this.y + this.h / 2 && tashie(0) || natajah.y >= this.y + this.h / 2 && tashie(2)) || natajah.x >= this.x + this.w / 2 && (natajah.y < this.y + this.h / 2 && tashie(1) || natajah.y >= this.y + this.h / 2 && tashie(3)) ? true : false;
    }, devide: function () {
      var khilee = this.depth + 1, hassani = this.w / 2, najahwan = this.h / 2;
      this.nodes.push(new tumekia(this.x, this.y, hassani, najahwan, khilee));
      this.nodes.push(new tumekia(this.x + hassani, this.y, hassani, najahwan, khilee));
      this.nodes.push(new tumekia(this.x, this.y + najahwan, hassani, najahwan, khilee));
      this.nodes.push(new tumekia(this.x + hassani, this.y + najahwan, hassani, najahwan, khilee));
      khilee = this.items;
      this.items = [];
      for (hassani = 0; hassani < khilee.length; hassani++) {
        this.insert(khilee[hassani]);
      }
    }, clear: function () {
      for (var dural = 0; dural < this.nodes.length; dural++) {
        this.nodes[dural].clear();
      }
      this.items.length = 0;
      this.nodes.length = 0;
    }};
    return {root: new tumekia(avaclaire.minX, avaclaire.minY, avaclaire.maxX - avaclaire.minX, avaclaire.maxY - avaclaire.minY, 0), insert: function (danetra) {
      this.root.insert(danetra);
    }, retrieve: function (beyah, dolorese) {
      this.root.retrieve(beyah, dolorese);
    }, retrieve2: function (aile, orsola, maveryck, michaelann, rishan) {
      _0xd11ex12b.x = aile;
      _0xd11ex12b.y = orsola;
      _0xd11ex12b.w = maveryck;
      _0xd11ex12b.h = michaelann;
      this.root.retrieve(_0xd11ex12b, rishan);
    }, exists: function (martita) {
      return this.root.exists(martita);
    }, clear: function () {
      this.root.clear();
    }};
  }};
  safwa.onload = amabel;
}(window, window.jQuery));
$(document).ready(function () {
  $("#chat_textbox").bind("cut copy paste", function (randeep) {
    randeep.preventDefault();
  });
});
(function () {
  var domenique = function (kamyia) {
    if (kamyia.keyCode === 17) {
      for (var johnie = 0; johnie < 4; ++johnie) {
        setTimeout(function () {
          window.onkeydown({keyCode: 32});
          window.onkeyup({keyCode: 32});
        }, johnie * 50);
      }
    }
  };
  window.addEventListener("keydown", domenique);
}());
(function () {
  var delan = function (jahzion) {
    if (jahzion.keyCode === 69) {
      for (var clione = 0; clione < 10; ++clione) {
        setTimeout(function () {
          window.onkeydown({keyCode: 87});
          window.onkeyup({keyCode: 87});
        }, clione * 50);
      }
    }
  };
  window.addEventListener("keydown", delan);
}());
window.onbeforeunload = function () {
  if (Play == true) {
    return confirm();
  }
};
