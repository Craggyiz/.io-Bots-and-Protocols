var Vector2 = function (breaun, ailena) {
  this.x = breaun || 0;
  this.y = ailena || 0;
};
Vector2.prototype = {reset: function (jerimia, suzane) {
  return this.x = jerimia, this.y = suzane, this;
}, toString: function (sharleez) {
  sharleez = sharleez || 3;
  var elodi = Math.pow(10, sharleez);
  return "[" + Math.round(this.x * elodi) / elodi + ", " + Math.round(this.y * elodi) / elodi + "]";
}, clone: function () {
  return new Vector2(this.x, this.y);
}, copyTo: function (jorge) {
  jorge.x = this.x;
  jorge.y = this.y;
}, copyFrom: function (adylynn) {
  this.x = adylynn.x;
  this.y = adylynn.y;
}, magnitude: function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, magnitudeSquared: function () {
  return this.x * this.x + this.y * this.y;
}, normalise: function () {
  var parrie = this.magnitude();
  return this.x = this.x / parrie, this.y = this.y / parrie, this;
}, reverse: function () {
  return this.x = -this.x, this.y = -this.y, this;
}, plusEq: function (yamelin) {
  return this.x += yamelin.x, this.y += yamelin.y, this;
}, plusNew: function (naissa) {
  return new Vector2(this.x + naissa.x, this.y + naissa.y);
}, minusEq: function (keari) {
  return this.x -= keari.x, this.y -= keari.y, this;
}, minusNew: function (fran) {
  return new Vector2(this.x - fran.x, this.y - fran.y);
}, multiplyEq: function (karola) {
  return this.x *= karola, this.y *= karola, this;
}, multiplyNew: function (mayra) {
  return this.clone().multiplyEq(mayra);
}, divideEq: function (melinna) {
  return this.x /= melinna, this.y /= melinna, this;
}, divideNew: function (kelcy) {
  return this.clone().divideEq(kelcy);
}, dot: function (kysan) {
  return this.x * kysan.x + this.y * kysan.y;
}, angle: function (kinnick) {
  return Math.atan2(this.y, this.x) * (kinnick ? 1 : Vector2Const.TO_DEGREES);
}, rotate: function (rosamary, wykeem) {
  var mihir = Math.cos(rosamary * (wykeem ? 1 : Vector2Const.TO_RADIANS)), buryl = Math.sin(rosamary * (wykeem ? 1 : Vector2Const.TO_RADIANS));
  return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * mihir - Vector2Const.temp.y * buryl, this.y = Vector2Const.temp.x * buryl + Vector2Const.temp.y * mihir, this;
}, equals: function (tejay) {
  return this.x == tejay.x && this.y == tejay.x;
}, isCloseTo: function (laurencio, nikki) {
  return !!this.equals(laurencio) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(laurencio), Vector2Const.temp.magnitudeSquared() < nikki * nikki);
}, rotateAroundPoint: function (kahani, allexia, latitia) {
  Vector2Const.temp.copyFrom(this);
  Vector2Const.temp.minusEq(kahani);
  Vector2Const.temp.rotate(allexia, latitia);
  Vector2Const.temp.plusEq(kahani);
  this.copyFrom(Vector2Const.temp);
}, isMagLessThan: function (quentisha) {
  return this.magnitudeSquared() < quentisha * quentisha;
}, isMagGreaterThan: function (lucymarie) {
  return this.magnitudeSquared() > lucymarie * lucymarie;
}};
Vector2Const = {TO_DEGREES: 180 / Math.PI, TO_RADIANS: Math.PI / 180, temp: new Vector2};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
var Sfreeze = false;
(function (phenious, sniyah) {
  var clio = "ffa-1-public.iogames.icu:443";
  var jaeleen = "./skins/";
  function murdoch(lanor, ronson, olivio, dessia, shuntina, aidon) {
    if (lanor <= shuntina && shuntina <= olivio && ronson <= aidon && aidon <= dessia) {
      return true;
    }
    return false;
  }
  var kaeshon = "createTouch" in document, monti = [];
  var dionel = -1, ameika = new Vector2(0, 0), mhina = new Vector2(0, 0), gertha = new Vector2(0, 0);
  var soul = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  function jarissa() {
    adilah = true;
    document.getElementById("canvas").focus();
    var gwanda = false;
    var dinnie;
    kaisa = giovannii = document.getElementById("canvas");
    azuree = kaisa.getContext("2d");
    kaisa.onmousemove = function (robie) {
      celton = robie.clientX;
      rochely = robie.clientY;
      ivaniel();
    };
    if (kaeshon) {
      kaisa.addEventListener("touchstart", keslyn, false);
      kaisa.addEventListener("touchmove", trang, false);
      kaisa.addEventListener("touchend", sharlane, false);
    }
    kaisa.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", tanikka, false);
    } else {
      document.body.onmousewheel = tanikka;
    }
    kaisa.onfocus = function () {
      gwanda = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      gwanda = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      gwanda = true;
    };
    var tyghe = false, deverie = false, johncarter = false;
    phenious.onkeydown = function (jalasha) {
      switch (jalasha.keyCode) {
        case 32:
          if (!tyghe && !gwanda) {
            kealeigh();
            zackorie(17);
            tyghe = true;
          }
          break;
        case 81:
          if (!deverie && !gwanda) {
            zackorie(18);
            deverie = true;
          }
          break;
        case 87:
          if (!johncarter && !gwanda) {
            kealeigh();
            zackorie(21);
            johncarter = true;
          }
          break;
        case 70:
          if (!gwanda) {
            if (Sfreeze == false) {
              Sfreeze = true;
              rayvon("Game stopped.");
            } else {
              Sfreeze = false;
              rayvon("Game resumed.");
            }
          }
          break;
        case 67:
          if (!gwanda) {
            krishawna("psx2psx2");
          }
          break;
        case 27:
          eriverto(true, 0);
          break;
        case 13:
          if (gwanda) {
            gwanda = false;
            document.getElementById("chat_textbox").blur();
            dinnie = document.getElementById("chat_textbox").value;
            dinnie = dinnie.replace("www", "***");
            dinnie = dinnie.replace(".com", "***");
            dinnie = dinnie.replace(".biz", "***");
            dinnie = dinnie.replace(".net", "***");
            dinnie = dinnie.replace("agar.io", "");
            dinnie = dinnie.replace(".org", "***");
            dinnie = dinnie.replace("AGAR.İO", "***");
            dinnie = dinnie.replace("AGARİO", "***");
            dinnie = dinnie.replace(".co", "***");
            dinnie = dinnie.replace("xyz", "***");
            dinnie = dinnie.replace(".warball", "***");
            dinnie = dinnie.replace(".gen.tr", "***");
            dinnie = dinnie.replace(".com.tr", "***");
            dinnie = dinnie.replace("agario", "***");
            dinnie = dinnie.replace("pvp", "***");
            dinnie = dinnie.replace("agar.yt", "***");
            dinnie = dinnie.replace("Agar.yt!", "***");
            dinnie = dinnie.replace("AGAR.YT", "***");
            dinnie = dinnie.replace("AGAR.", "***");
            dinnie = dinnie.replace("agar.", "***");
            dinnie = dinnie.replace("agar", "***");
            dinnie = dinnie.replace("Agar.", "***");
            dinnie = dinnie.replace("Agar", "***");
            dinnie = dinnie.replace(".YT", "***");
            dinnie = dinnie.replace(".yt", "***");
            dinnie = dinnie.replace(".Yt", "***");
            dinnie = dinnie.replace("Agario.", "***");
            dinnie = dinnie.replace("AGAR.YT", "***");
            dinnie = dinnie.replace("AGAR.YT!", "***");
            dinnie = dinnie.replace("piç", "kayısı");
            dinnie = dinnie.replace("yarak", "tarak");
            dinnie = dinnie.replace("amcık", "salça");
            dinnie = dinnie.replace("sikerim", "uçarım");
            dinnie = dinnie.replace("sikerler", "uçarlar");
            dinnie = dinnie.replace("orospu", "gül");
            dinnie = dinnie.replace("yarrak", "tarak");
            dinnie = dinnie.replace("yarrağı", "tasımı");
            dinnie = dinnie.replace("göt", "alet");
            dinnie = dinnie.replace("fuck", "kiss");
            dinnie = dinnie.replace("FUCK", "kiss");
            dinnie = dinnie.replace("FUCK", "kiss");
            dinnie = dinnie.replace("allah", "***");
            dinnie = dinnie.replace("ALLAH", "***");
            dinnie = dinnie.replace("HZ", "***");
            dinnie = dinnie.replace("hz", "***");
            dinnie = dinnie.replace("TAYYİP", "***");
            dinnie = dinnie.replace("RTE", "***");
            dinnie = dinnie.replace("RECEP", "***");
            dinnie = dinnie.replace("rte", "***");
            dinnie = dinnie.replace("tayyip", "***");
            dinnie = dinnie.replace("tayyıp", "***");
            dinnie = dinnie.replace("recep", "***");
            dinnie = dinnie.replace("???????????????", "***");
            dinnie = dinnie.replace("rec", "***");
            dinnie = dinnie.replace("REC", "***");
            dinnie = dinnie.replace("BOK", "pislik");
            dinnie = dinnie.replace("bok", "pislik");
            dinnie = dinnie.replace("Ass", "apple");
            dinnie = dinnie.replace("Vagina", "apple");
            dinnie = dinnie.replace("Bitch", "apple");
            dinnie = dinnie.replace("Sucker", "apple");
            dinnie = dinnie.replace("meme", "***");
            dinnie = dinnie.replace("yarak", "ip");
            dinnie = dinnie.replace("yarağı", "ip");
            dinnie = dinnie.replace("sokam", "***");
            dinnie = dinnie.replace("sikem", "***");
            dinnie = dinnie.replace("sik", "***");
            dinnie = dinnie.replace("oc", "kardeş");
            dinnie = dinnie.replace("gay", "HANDSOME");
            dinnie = dinnie.replace("oç", "kardeş");
            dinnie = dinnie.replace("o.ç", "kardeş");
            dinnie = dinnie.replace("o.çocuğu", "kardeş");
            dinnie = dinnie.replace("aq", "LOVE");
            dinnie = dinnie.replace("AQ", "LOVE");
            dinnie = dinnie.replace("baba", "***");
            dinnie = dinnie.replace("kız", "***");
            dinnie = dinnie.replace("ezik", "***");
            dinnie = dinnie.replace("salak", "***");
            dinnie = dinnie.replace("aptal", "***");
            dinnie = dinnie.replace("sıç", "***");
            dinnie = dinnie.replace("penis", "***");
            dinnie = dinnie.replace("ananı", "***");
            dinnie = dinnie.replace("anneni", "***");
            dinnie = dinnie.replace("skym", "***");
            dinnie = dinnie.replace("sikeyim", "güleyim");
            dinnie = dinnie.replace("vagina", "***");
            if (dinnie.length > 0) {
              krishawna(dinnie);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!demerius) {
              document.getElementById("chat_textbox").focus();
              gwanda = true;
            }
          }
          break;
      }
    };
    phenious.onkeyup = function (naomie) {
      switch (naomie.keyCode) {
        case 32:
          tyghe = false;
          break;
        case 87:
          johncarter = false;
          break;
        case 81:
          if (deverie) {
            zackorie(19);
            deverie = false;
          }
          break;
      }
    };
    phenious.onblur = function () {
      zackorie(19);
      johncarter = deverie = tyghe = false;
    };
    phenious.onresize = kentay;
    kentay();
    if (phenious.requestAnimationFrame) {
      phenious.requestAnimationFrame(rally);
    } else {
      setInterval(musie, 16.666666666666668);
    }
    if (deandre) {
      sniyah("#region").val(deandre);
    }
    asim();
    ragnhild(sniyah("#region").val());
    null == alexya && deandre && amaleigh();
    thayla();
    sniyah("#overlays").show();
  }
  function rayvon(shatiek) {
    var karega = "";
    if (karega == "") {
      karega = shatiek;
    }
    $("#nn").css("position", "absolute");
    $("#nn").show();
    $("#nn").css("top", "200px");
    $("#nn").css("font-size", "20px");
    $("#nn").css("color", "red");
    $("#nn").css("z-index", "2000");
    $("#nn").css("text-align", "center");
    $("#nn").css("width", "100%");
    $("#nn").html(karega);
    $("#nn").animate({opacity: 1, fontSize: "7em"}, 500, function () {
      $("#nn").hide();
    });
  }
  ;
  (function () {
    var crisol = function (decklin) {
      if (decklin.keyCode === 69) {
        for (var abad = 0; abad < 10; ++abad) {
          setTimeout(function () {
            window.onkeydown({keyCode: 87});
            window.onkeyup({keyCode: 87});
          }, abad * 50);
        }
      }
    };
    window.addEventListener("keydown", crisol);
  }());
  function keslyn(liola) {}
  function trang(adisyn) {}
  function sharlane(malahkai) {}
  function tanikka(sareya) {
    if (!juhee) {
      march *= Math.pow(.9, sareya.wheelDelta / -120 || sareya.detail || 0);
      .4 > march && (march = .4);
      march > 10 / nitra && (march = 10 / nitra);
    } else {
      march *= Math.pow(.9, sareya.wheelDelta / -120 || sareya.detail || 0);
      .1 > march && (march = .1);
      march > 4 / nitra && (march = 4 / nitra);
    }
  }
  function shigeyuki() {
    if (.4 > nitra) {
      savan = null;
    } else {
      var lynard = Number.POSITIVE_INFINITY, davares = Number.POSITIVE_INFINITY, joezette = Number.NEGATIVE_INFINITY, marquis = Number.NEGATIVE_INFINITY, keanda = 0;
      for (var rodriguez = 0; rodriguez < eliose.length; rodriguez++) {
        var swayzie = eliose[rodriguez];
        if (swayzie.shouldRender() && !swayzie.prepareData && 20 < swayzie.size * nitra) {
          keanda = Math.max(swayzie.size, keanda);
          lynard = Math.min(swayzie.x, lynard);
          davares = Math.min(swayzie.y, davares);
          joezette = Math.max(swayzie.x, joezette);
          marquis = Math.max(swayzie.y, marquis);
        }
      }
      savan = tamee.init({minX: lynard - (keanda + 100), minY: davares - (keanda + 100), maxX: joezette + (keanda + 100), maxY: marquis + (keanda + 100), maxChildren: 2, maxDepth: 4});
      for (rodriguez = 0; rodriguez < eliose.length; rodriguez++) {
        swayzie = eliose[rodriguez];
        if (swayzie.shouldRender() && !(20 >= swayzie.size * nitra)) {
          for (lynard = 0; lynard < swayzie.points.length; ++lynard) {
            davares = swayzie.points[lynard].x;
            joezette = swayzie.points[lynard].y;
            davares < jovia - lachrisha / 2 / nitra || joezette < eretta - janaa / 2 / nitra || davares > jovia + lachrisha / 2 / nitra || joezette > eretta + janaa / 2 / nitra || savan.insert(swayzie.points[lynard]);
          }
        }
      }
    }
  }
  function ivaniel() {
    theia = (celton - lachrisha / 2) / nitra + jovia;
    jaemarie = (rochely - janaa / 2) / nitra + eretta;
  }
  function noahalexander() {
    demerius = false;
    sniyah("#adsBottom").hide();
    sniyah("#overlays").hide();
    asim();
  }
  function thesha(shadi) {
    if (!SCodes) {
      return alert("Hata !");
    }
    zA = shadi;
    if (shadi != kuyper) {
      clio = shadi;
      kuyper = zA;
      amaleigh();
    }
    sniyah("#helloContainer").attr("data-gamemode", zA);
  }
  function ragnhild(buenaventura) {
    if (buenaventura && buenaventura != deandre) {
      if (sniyah("#region").val() != buenaventura) {
        sniyah("#region").val(buenaventura);
      }
      deandre = phenious.localStorage.location = buenaventura;
      sniyah(".btn-needs-server").prop("disabled", false);
      adilah && amaleigh();
    }
  }
  function _0x402ex3e(calii) {
    demerius = true;
    eeva = null;
    sniyah("#overlays").fadeIn(calii ? 200 : 3e3);
    calii || sniyah("#adsBottom").fadeIn(3e3);
  }
  function olman(shoshana) {
    shoshana = ~~shoshana;
    var ashara = (shoshana % 60).toString();
    shoshana = (~~(shoshana / 60)).toString();
    2 > ashara.length && (ashara = "0" + ashara);
    return shoshana + ":" + ashara;
  }
  function zanaiyah() {
    if (null == lize) {
      return 0;
    }
    for (var zamarrion = 0; zamarrion < lize.length; ++zamarrion) {
      if (-1 != gesell.indexOf(lize[zamarrion].id)) {
        return zamarrion + 1;
      }
    }
    return 0;
  }
  function taleshia(roneka, adonai) {
    var dawnella = -1 != gesell.indexOf(roneka.id), moustafa = -1 != gesell.indexOf(adonai.id), brahm = 30 > adonai.size;
    dawnella && brahm && ++kosten;
    brahm || !dawnella || moustafa || ++bnai;
    brahm || !dawnella || moustafa;
  }
  function amerson(hadassah, destiney) {
    if (hadassah.indexOf("{") != -1 && hadassah.indexOf("}") != -1) {
      var takirra = hadassah.indexOf("{");
      var romelio = hadassah.indexOf("}");
      var demarri = hadassah.slice(romelio + 1);
      if (destiney) {
        if (demarri == "") {
          demarri = "Unnamed Cell";
        } else {
          demarri = hadassah.slice(romelio + 1);
        }
      }
      return [hadassah.slice(takirra + 1, romelio), demarri];
    } else {
      return ["", hadassah];
    }
  }
  function jua() {
    sniyah(".stats-leaderboard-time").text(olman(khabir));
    sniyah(".stats-food-eaten").text(kosten);
    sniyah(".stats-highest-mass").text(~~(vayle / 100));
    sniyah(".stats-time-alive").text(olman((Date.now() - jayvon) / 1e3));
    sniyah(".stats-cells-eaten").text(bnai);
    sniyah(".stats-top-position").text(0 == jassir ? ":(" : jassir);
    var toa = document.getElementById("statsGraph");
    if (toa) {
      var ravyn = toa.getContext("2d"), deymian = toa.width, toa = toa.height;
      ravyn.clearRect(0, 0, deymian, toa);
      if (2 < fayola.length) {
        for (var alantis = 200, cornelious = 0; cornelious < fayola.length; cornelious++) {
          alantis = Math.max(fayola[cornelious], alantis);
        }
        ravyn.lineWidth = 3;
        ravyn.lineCap = "round";
        ravyn.lineJoin = "round";
        ravyn.strokeStyle = Pa;
        ravyn.fillStyle = Pa;
        ravyn.beginPath();
        ravyn.moveTo(0, toa - fayola[0] / alantis * (toa - 10) + 10);
        for (cornelious = 1; cornelious < fayola.length; cornelious += Math.max(~~(fayola.length / deymian), 1)) {
          for (var janzen = cornelious / (fayola.length - 1) * deymian, aubriannah = [], keosha = -20; 20 >= keosha; ++keosha) {
            0 > cornelious + keosha || cornelious + keosha >= fayola.length || aubriannah.push(fayola[cornelious + keosha]);
          }
          aubriannah = aubriannah.reduce(function (karmani, jeryl) {
            return karmani + jeryl;
          }) / aubriannah.length / alantis;
          ravyn.lineTo(janzen, toa - aubriannah * (toa - 10) + 10);
        }
        ravyn.stroke();
        ravyn.globalAlpha = .5;
        ravyn.lineTo(deymian, toa);
        ravyn.lineTo(0, toa);
        ravyn.fill();
        ravyn.globalAlpha = 1;
      }
    }
  }
  function eriverto(raymand, duff) {
    demerius = true;
    if (duff == 1) {
      if (clyta == false) {
        jua();
        sniyah("#statoverlay").show();
        sniyah("#stats").fadeIn(raymand ? 200 : 3e3);
      } else {
        sniyah("#overlays").fadeIn(raymand ? 200 : 3e3);
      }
    } else {
      sniyah("#overlays").fadeIn(raymand ? 200 : 3e3);
    }
    eeva = null;
  }
  function asim() {
    sniyah("#region").val() ? phenious.localStorage.location = sniyah("#region").val() : phenious.localStorage.location && sniyah("#region").val(phenious.localStorage.location);
    sniyah("#region").val() ? sniyah(".locationKnown").append(sniyah("#region")) : sniyah("#locationUnknown").append(sniyah("#region"));
  }
  function montrese() {
    jannet("wss://" + clio);
  }
  function amaleigh() {
    if (adilah && deandre) {
      sniyah("#connecting").show();
      montrese();
    }
  }
  function jannet(ansli) {
    if (alexya) {
      alexya.onopen = null;
      alexya.onmessage = null;
      alexya.onclose = null;
      try {
        alexya.close();
      } catch (b) {}
      alexya = null;
    }
    var pharaoh = clio;
    ansli = "wss://" + pharaoh + "?SCode=" + SCodes;
    gesell = [];
    larina = [];
    emyly = {};
    eliose = [];
    ladejah = [];
    lize = [];
    kaisa = bianny = null;
    vayle = 0;
    this.leaderdefault = "Leaderboard";
    this.lastWinner = "Leaderboard";
    this.countdown = 3600;
    kosten = 0;
    fayola = [];
    bnai = 0;
    jassir = 0;
    khabir = 0;
    alexya = new WebSocket(ansli);
    alexya.binaryType = "arraybuffer";
    alexya.onopen = niree;
    alexya.onmessage = shavontae;
    alexya.onclose = louisette;
    alexya.onerror = function (iyshia) {
      console.log("socket error" + iyshia);
    };
  }
  function latayvia(evanny) {
    return new DataView(new ArrayBuffer(evanny));
  }
  function whittney(chrishaud) {
    alexya.send(chrishaud.buffer);
  }
  function niree() {
    var tamija;
    cooledge = 100;
    sniyah("#connecting").hide();
    console.log("socket open");
    tamija = latayvia(5);
    tamija.setUint8(0, 254);
    tamija.setUint32(1, 5, true);
    whittney(tamija);
    tamija = latayvia(5);
    tamija.setUint8(0, 255);
    tamija.setUint32(1, 123456789, true);
    whittney(tamija);
    caytlen();
  }
  function louisette() {
    console.log("socket close");
    setTimeout(amaleigh, 500);
    cooledge *= 1.5;
  }
  function shavontae(sadiqua) {
    saloma(new DataView(sadiqua.data));
  }
  function saloma(chirley) {
    function wiley() {
      var neira = "", adelayne;
      while ((adelayne = chirley.getUint16(golan, true)) != 0) {
        golan += 2;
        neira += String.fromCharCode(adelayne);
      }
      golan += 2;
      return neira;
    }
    var golan = 0, eniya = false;
    240 == chirley.getUint8(golan) && (golan += 5);
    switch (chirley.getUint8(golan++)) {
      case 185:
        kristi(chirley, golan);
        break;
      case 17:
        reeyansh = chirley.getFloat32(golan, true);
        golan += 4;
        jehan = chirley.getFloat32(golan, true);
        golan += 4;
        jess = chirley.getFloat32(golan, true);
        golan += 4;
        break;
      case 20:
        larina = [];
        gesell = [];
        break;
      case 21:
        madelin = chirley.getInt16(golan, true);
        golan += 2;
        shambreka = chirley.getInt16(golan, true);
        golan += 2;
        if (!tennielle) {
          tennielle = true;
          jerrion = madelin;
          matthijs = shambreka;
        }
        break;
      case 32:
        gesell.push(chirley.getUint32(golan, true));
        golan += 4;
        break;
      case 48:
        eniya = true;
        kaylianie = true;
        break;
      case 49:
        if (!eniya) {
          kaylianie = false;
        }
        bianny = null;
        var joaniel = chirley.getUint32(golan, true);
        golan += 4;
        lize = [];
        for (lilliani = 0; lilliani < joaniel; ++lilliani) {
          var nyzeria = chirley.getUint32(golan, true);
          golan += 4;
          lize.push({id: nyzeria, name: wiley()});
        }
        briley();
        break;
      case 50:
        bianny = [];
        var avren = chirley.getUint32(golan, true);
        golan += 4;
        for (var lilliani = 0; lilliani < avren; ++lilliani) {
          bianny.push(chirley.getFloat32(golan, true));
          golan += 4;
        }
        briley();
        break;
      case 64:
        mekenzi = chirley.getFloat64(golan, true);
        golan += 8;
        loutricia = chirley.getFloat64(golan, true);
        golan += 8;
        alliyah = chirley.getFloat64(golan, true);
        golan += 8;
        raquel = chirley.getFloat64(golan, true);
        golan += 8;
        reeyansh = (alliyah + mekenzi) / 2;
        jehan = (raquel + loutricia) / 2;
        jess = 1;
        if (0 == larina.length) {
          jovia = reeyansh;
          eretta = jehan;
          nitra = jess;
        }
        break;
      case 90:
        var jiajun = new Date - latency;
        $("#latency").html("Latency " + jiajun + " ms;");
        var marlen = chirley.getFloat64(golan, true);
        golan += 8;
        $("#uptime").html("Uptime " + marlen + " sec;");
        var enyia = chirley.getFloat64(golan, true);
        golan += 8;
        $("#onlineplayers").html("Players " + enyia + ";");
        break;
      case 199:
        yotam(chirley, golan);
        break;
      case 96:
        this.countdown = chirley.getUint16(golan, true);
        break;
      case 97:
        this.lastWinner = "";
        this.lastWinner = wiley();
        if (this.lastWinner == "") {
          this.lastWinner = this.leaderdefault;
        }
        this.lastWinner = amerson(this.lastWinner.split("*")[0])[1];
        break;
    }
  }
  function yotam(trelynn, yailen) {
    function avina() {
      var henesis = "", moraima;
      while ((moraima = trelynn.getUint16(yailen, true)) != 0) {
        yailen += 2;
        henesis += String.fromCharCode(moraima);
      }
      yailen += 2;
      return henesis;
    }
    var tywonda = trelynn.getUint8(yailen++);
    if (tywonda & 2) {
      yailen += 4;
    }
    if (tywonda & 4) {
      yailen += 8;
    }
    if (tywonda & 8) {
      yailen += 16;
    }
    var kiwanna = trelynn.getUint8(yailen++), samonie = trelynn.getUint8(yailen++), maeleigh = trelynn.getUint8(yailen++), taijae = (kiwanna << 16 | samonie << 8 | maeleigh).toString(16);
    while (taijae.length > 6) {
      taijae = "0" + taijae;
    }
    taijae = "#" + taijae;
    name = amerson(avina())[1];
    if (name == "") {
      name = "Unnamed Cell";
    }
    patty.push({name: name, color: taijae, message: avina(), time: Date.now()});
  }
  function kristi(japonica, sorsha) {
    jamiera = +new Date;
    var kailia = Math.random();
    deshaud = false;
    var aaryn = japonica.getUint16(sorsha, true);
    sorsha += 2;
    for (kallissa = 0; kallissa < aaryn; ++kallissa) {
      var zariaha = emyly[japonica.getUint32(sorsha, true)], nagely = emyly[japonica.getUint32(sorsha + 4, true)];
      sorsha += 8;
      if (zariaha && nagely) {
        nagely.destroy();
        nagely.ox = nagely.x;
        nagely.oy = nagely.y;
        nagely.oSize = nagely.size;
        nagely.nx = zariaha.x;
        nagely.ny = zariaha.y;
        nagely.nSize = nagely.size;
        nagely.updateTime = jamiera;
        taleshia(zariaha, nagely);
      }
    }
    for (var kallissa = 0;;) {
      var taqiyya = japonica.getUint32(sorsha, true);
      sorsha += 4;
      if (0 == taqiyya) {
        break;
      }
      ++kallissa;
      var isaid, paulyn, tanzia = japonica.getInt16(sorsha, true);
      sorsha += 2;
      paulyn = japonica.getInt16(sorsha, true);
      sorsha += 2;
      isaid = japonica.getInt16(sorsha, true);
      sorsha += 2;
      for (var jnia = japonica.getUint8(sorsha++), ashlesha = japonica.getUint8(sorsha++), adrainne = japonica.getUint8(sorsha++), maycel = (jnia << 16 | ashlesha << 8 | adrainne).toString(16); 6 > maycel.length;) {
        maycel = "0" + maycel;
      }
      var zyer = "#" + maycel, phillicia = japonica.getUint8(sorsha++), tequita = !!(phillicia & 1), garlyn = !!(phillicia & 16);
      phillicia & 2 && (sorsha += 4);
      phillicia & 4 && (sorsha += 8);
      phillicia & 8 && (sorsha += 16);
      for (var pranshu, maynord = "";;) {
        pranshu = japonica.getUint16(sorsha, true);
        sorsha += 2;
        if (0 == pranshu) {
          break;
        }
        maynord += String.fromCharCode(pranshu);
      }
      var selen = null;
      if (emyly.hasOwnProperty(taqiyya)) {
        selen = emyly[taqiyya];
        selen.updatePos();
        selen.ox = selen.x;
        selen.oy = selen.y;
        selen.oSize = selen.size;
        selen.color = zyer;
      } else {
        selen = new erien(taqiyya, tanzia, paulyn, isaid, zyer, maynord);
        eliose.push(selen);
        selen.ka = tanzia;
        selen.la = paulyn;
      }
      selen.isVirus = tequita;
      selen.isAgitated = garlyn;
      selen.nx = tanzia;
      selen.ny = paulyn;
      selen.nSize = isaid;
      selen.updateCode = kailia;
      selen.updateTime = jamiera;
      selen.flag = phillicia;
      maynord && selen.setName(maynord);
      if (-1 != gesell.indexOf(taqiyya) && -1 == larina.indexOf(selen)) {
        document.getElementById("overlays").style.display = "none";
        larina.push(selen);
        if (1 == larina.length) {
          jovia = selen.x;
          eretta = selen.y;
        }
      }
    }
    aaryn = japonica.getUint32(sorsha, true);
    sorsha += 4;
    for (kallissa = 0; kallissa < aaryn; kallissa++) {
      var raetta = japonica.getUint32(sorsha, true);
      sorsha += 4;
      selen = emyly[raetta];
      null != selen && selen.destroy();
    }
    deshaud && 0 == larina.length && eriverto(false, 1);
  }
  function kealeigh() {
    var geffory;
    if (null != alexya && alexya.readyState == alexya.OPEN && Sfreeze != true) {
      geffory = celton - lachrisha / 2;
      var khaliel = rochely - janaa / 2;
      if (64 <= geffory * geffory + khaliel * khaliel && !(.01 > Math.abs(grant - theia) && .01 > Math.abs(jadalynn - jaemarie))) {
        grant = theia;
        jadalynn = jaemarie;
        geffory = latayvia(21);
        geffory.setUint8(0, 185);
        geffory.setFloat64(1, theia, true);
        geffory.setFloat64(9, jaemarie, true);
        geffory.setUint32(17, 0, true);
        whittney(geffory);
      }
    }
  }
  function caytlen() {
    if (null != alexya && alexya.readyState == alexya.OPEN && null != eeva) {
      var rassan = latayvia(1 + 2 * eeva.length);
      rassan.setUint8(0, 129);
      for (var clarence = 0; clarence < eeva.length; ++clarence) {
        rassan.setUint16(1 + 2 * clarence, eeva.charCodeAt(clarence), true);
      }
      whittney(rassan);
    }
  }
  function thayla() {
    m = phenious.innerWidth;
    q = phenious.innerHeight;
    canvas.width = canvas.width = m;
    canvas.height = canvas.height = q;
    var kanysha = sniyah("#helloContainer");
    kanysha.css("transform", "none");
    var sherrille = phenious.innerHeight;
    660 > sherrille / 1.1 ? kanysha.css("transform", "translate(-50%, -50%) scale(" + sherrille / 660 / 1.1 + ")") : kanysha.css("transform", "translate(-50%, -50%)");
  }
  function krishawna(justys) {
    if (null != alexya && alexya.readyState == alexya.OPEN && justys.length < 200 && justys.length > 0) {
      var haowen = latayvia(4 + 2 * justys.length);
      var kydan = 0;
      haowen.setUint8(kydan++, 199);
      haowen.setUint8(kydan++, 0);
      for (var hiya = 0; hiya < justys.length; ++hiya) {
        haowen.setUint16(kydan, justys.charCodeAt(hiya), true);
        kydan += 2;
      }
      haowen.setUint16(kydan, 57344, true);
      whittney(haowen);
    }
  }
  function zackorie(tashina) {
    if (null != alexya && alexya.readyState == alexya.OPEN) {
      var janoah = latayvia(1);
      janoah.setUint8(0, tashina);
      whittney(janoah);
    }
  }
  function rally() {
    musie();
    phenious.requestAnimationFrame(rally);
  }
  function kentay() {
    window.scrollTo(0, 0);
    lachrisha = phenious.innerWidth;
    janaa = phenious.innerHeight;
    giovannii.width = lachrisha;
    giovannii.height = janaa;
    var quiyana = sniyah("#helloDialog");
    quiyana.css("transform", "none");
    var saara = quiyana.height();
    saara > janaa / 1.1 ? quiyana.css("transform", "translate(-50%, -50%) scale(" + janaa / saara / 1.1 + ")") : quiyana.css("transform", "translate(-50%, -50%)");
    musie();
  }
  function viraj() {
    var myrianna;
    myrianna = Math.max(janaa / 1080, lachrisha / 1920);
    return myrianna * march;
  }
  function magaly() {
    if (0 != larina.length) {
      for (var marcion = 0, vincenzina = 0; vincenzina < larina.length; vincenzina++) {
        marcion += larina[vincenzina].size;
      }
      marcion = Math.pow(Math.min(64 / marcion, 1), .4) * viraj();
      nitra = (9 * nitra + marcion) / 10;
    }
  }
  function musie() {
    var niurca, niilo = Date.now();
    ++nadilynn;
    var robertha = Date.now() - adelinne;
    if (robertha > 50) {
      adelinne = Date.now();
      kealeigh();
    }
    jamiera = niilo;
    if (0 < larina.length) {
      magaly();
      var dieter = niurca = 0;
      for (var gohar = 0; gohar < larina.length; gohar++) {
        larina[gohar].updatePos();
        niurca += larina[gohar].x / larina.length;
        dieter += larina[gohar].y / larina.length;
      }
      reeyansh = niurca;
      jehan = dieter;
      jess = nitra;
      jovia = (jovia + niurca) / 2;
      eretta = (eretta + dieter) / 2;
    } else {
      jovia = (29 * jovia + reeyansh) / 30;
      eretta = (29 * eretta + jehan) / 30;
      nitra = (9 * nitra + jess * viraj()) / 10;
    }
    shigeyuki();
    ivaniel();
    azuree.fillStyle = raycen ? "#111111" : "#F2FBFF";
    azuree.fillRect(0, 0, lachrisha, janaa);
    eliose.sort(function (paarth, letti) {
      return paarth.size == letti.size ? paarth.id - letti.id : paarth.size - letti.size;
    });
    azuree.save();
    azuree.translate(lachrisha / 2, janaa / 2);
    azuree.scale(nitra, nitra);
    azuree.translate(-jovia, -eretta);
    if (danil == true) {
      azuree.globalAlpha = .6;
    } else {
      azuree.globalAlpha = 1;
    }
    for (gohar = 0; gohar < eliose.length; gohar++) {
      eliose[gohar].drawOneCell(azuree);
    }
    if (tennielle) {
      jerrion = (3 * jerrion + madelin) / 4;
      matthijs = (3 * matthijs + shambreka) / 4;
      azuree.save();
      azuree.strokeStyle = "#FFAAAA";
      azuree.lineWidth = 10;
      azuree.lineCap = "round";
      azuree.lineJoin = "round";
      azuree.globalAlpha = .5;
      azuree.beginPath();
      for (gohar = 0; gohar < larina.length; gohar++) {
        azuree.moveTo(larina[gohar].x, larina[gohar].y);
        azuree.lineTo(jerrion, matthijs);
      }
      azuree.restore();
    }
    azuree.strokeStyle = "#FF0000";
    azuree.lineWidth = 50;
    azuree.lineCap = "round";
    azuree.lineJoin = "round";
    azuree.beginPath();
    azuree.moveTo(mekenzi, loutricia);
    azuree.lineTo(alliyah, loutricia);
    azuree.lineTo(alliyah, raquel);
    azuree.lineTo(mekenzi, raquel);
    azuree.closePath();
    azuree.stroke();
    azuree.restore();
    azuree.globalAlpha = 1;
    azuree.fillStyle = "#0000FF";
    azuree.font = "bold 32px Ubuntu";
    if (this.countdown < 3600) {
      var bekham = "";
      var jamarrion = "";
      var voilet = Math.floor(this.countdown / 60);
      if (voilet < 10) {
        bekham += "0";
      }
      bekham += voilet + ":";
      var arkham = this.countdown % 60;
      if (arkham < 10) {
        bekham += "0";
      }
      bekham += arkham;
      if (this.countdown < 60) {
        jamarrion = " sec";
      } else {
        jamarrion = " min";
      }
      $("#countdown").html("Restart in " + bekham + jamarrion);
    }
    dovie && dovie.width && azuree.drawImage(dovie, lachrisha - dovie.width - 10, 10);
    if (!radhya) {
      if (cornecia != null && cornecia.width > 0) {
        azuree.drawImage(cornecia, 0, janaa - cornecia.height - 50);
      }
    }
    var jkai = emmanul();
    vayle = Math.max(vayle, emmanul());
    if (0 != vayle) {
      azuree.globalAlpha = .8;
      if (raycen == true) {
        azuree.fillStyle = "#FFFFFF";
      } else {
        azuree.fillStyle = "#000000";
      }
      azuree.font = "bold 24px Ubuntu";
      var canary = document.getElementsByTagName("html")[0].getAttribute("lang");
      if (canary == "tr") {
        azuree.fillText("Skor: " + ~~(jkai / 100), 10, 34);
        azuree.fillText("Max.: " + ~~(vayle / 100), 10, 60);
      } else {
        azuree.fillText("Score: " + ~~(jkai / 100), 10, 34);
        azuree.fillText("Max.: " + ~~(vayle / 100), 10, 60);
      }
    }
    if (!radhya) {
      var siersha = 0;
      for (var myshayla = patty.length - 1; myshayla >= 0; myshayla--) {
        siersha++;
        if (siersha > 15) {
          break;
        }
        var erike = patty[myshayla].name.trim();
        if (erike == "") {
          erike = "Unnamed Cell";
        }
        var deontra = patty[myshayla].message.trim();
        var janyah = " : " + deontra;
        azuree.font = "17px Arial";
        patty[myshayla].name_x = 15;
        patty[myshayla].name_y = janaa - 30 - 20 * siersha;
        patty[myshayla].name_w = azuree.measureText(erike).width;
        patty[myshayla].name_h = 18;
        patty[myshayla].msg_x = 15 + patty[myshayla].name_w;
        patty[myshayla].msg_y = patty[myshayla].name_y;
        patty[myshayla].msg_w = azuree.measureText(janyah).width;
        patty[myshayla].msg_h = patty[myshayla].name_h;
        azuree.fillStyle = patty[myshayla].color;
        azuree.fillText(erike, patty[myshayla].name_x, patty[myshayla].name_y);
        if (raycen == true) {
          azuree.fillStyle = "#FFFFFF";
        } else {
          azuree.fillStyle = "#000000";
        }
        azuree.fillText(janyah, patty[myshayla].msg_x, patty[myshayla].msg_y);
      }
    }
    if (!soul) {
      lucil();
    }
    var karra = Date.now() - niilo;
    karra > 16.666666666666668 ? nekeya -= .01 : karra < 15.384615384615385 && (nekeya += .01);
    .4 > nekeya && (nekeya = .4);
    1 < nekeya && (nekeya = 1);
  }
  function lucil() {
    if (larina.length == 0 || false) {
      return;
    }
    azuree.save();
    function daylyn(wenceslao, natara) {
      return !natara ? wenceslao : daylyn(natara, wenceslao % natara);
    }
    azuree.beginPath();
    azuree.fillStyle = "rgba(0,0,0,.25)";
    var rafat = soul ? 150 : 200;
    azuree.lineWidth = 1.5;
    var calhoun = lachrisha - rafat - 10;
    var reshell = janaa - rafat - 5;
    azuree.rect(calhoun, reshell, rafat, rafat);
    azuree.lineWidth = 1.25;
    var dalit = jovia / (alliyah - mekenzi);
    var oladipupo = eretta / (raquel - loutricia);
    var shunya = dalit * rafat + calhoun + rafat / 2 - 100;
    var emmabelle = oladipupo * rafat + reshell + rafat / 2 - 100;
    var jaeli = bh = rafat;
    var saied = -1;
    var rigved = -1;
    for (var selda = 0; selda <= jaeli; selda += 40) {
      if (selda != jaeli) {
        var sinnamon = .5 + selda + calhoun;
        var lazareth = reshell;
        if (murdoch(sinnamon, lazareth, sinnamon + 40, lazareth + bh, shunya, emmabelle)) {
          saied = sinnamon;
        }
        if (selda == 0) {
          continue;
        }
        azuree.moveTo(.5 + selda + calhoun, reshell);
        azuree.lineTo(.5 + selda + calhoun, bh + reshell);
      }
      if (raycen == true) {
        azuree.fillStyle = "#FFFFFF";
      } else {
        azuree.fillStyle = "#000000";
      }
      azuree.font = "700 18px nunito";
      azuree.textAlign = "center";
      azuree.strokeStyle = "white";
      azuree.lineWidth = 1;
      azuree.globalAlpha = .35;
      for (var ophelia = 0; ophelia < 5; ophelia++) {
        azuree.fillText(String.fromCharCode(ophelia + 65) + selda / 40, .5 + selda + calhoun - 20, reshell + 25.5 + ophelia * 40);
      }
    }
    for (var kalauni = 0; kalauni <= bh; kalauni += 40) {
      if (kalauni != bh) {
        var sinnamon = calhoun;
        var lazareth = .5 + kalauni + reshell;
        if (murdoch(sinnamon, lazareth, sinnamon + jaeli, lazareth + 40, shunya, emmabelle)) {
          rigved = lazareth;
        }
        if (kalauni == 0) {
          continue;
        }
        azuree.moveTo(calhoun, .5 + kalauni + reshell);
        azuree.lineTo(jaeli + calhoun, .5 + kalauni + reshell);
      }
    }
    if (larina.length > 0 && saied > -1 && rigved > -1) {
      azuree.fillStyle = "#ccff00";
      azuree.globalAlpha = .3;
      azuree.fillRect(saied, rigved, 40, 40);
    }
    azuree.globalAlpha = 1;
    azuree.strokeStyle = "rgba(238,0,17,.2)";
    azuree.stroke();
    azuree.closePath();
    for (var ophelia = 0; ophelia < larina.length; ophelia++) {
      var yadah = larina[ophelia];
      var tessanne = yadah.ox / (alliyah - mekenzi);
      var sahithi = yadah.oy / (raquel - loutricia);
      var selda = tessanne * rafat + calhoun + rafat / 2 - 100;
      var kalauni = sahithi * rafat + reshell + rafat / 2 - 100;
      var jennifr = Math.max(2, yadah.size / (rafat / 2));
      azuree.fillStyle = yadah.color;
      if (ophelia == 0) {
        azuree.font = "bold " + (14 + jennifr) + "px Ubuntu";
        var jawwaad = azuree.measureText(yadah.name);
        azuree.strokestyle = "black";
      }
      azuree.beginPath();
      azuree.strokeStyle = "black";
      azuree.lineWidth = 1;
      azuree.globalAlpha = 1;
      azuree.arc(selda, kalauni, jennifr, 0, 2 * Math.PI);
      azuree.stroke();
      azuree.fill();
      azuree.closePath();
    }
    azuree.restore();
  }
  function rashita() {
    if (raycen) {
      azuree.fillStyle = "#111111";
    } else {}
    azuree.fillRect(0, 0, lachrisha, janaa);
    azuree.save();
    if (raycen) {
      azuree.strokeStyle = "#AAAAAA";
    } else {}
    azuree.globalAlpha = .2;
    azuree.scale(nitra, nitra);
    var takeira = lachrisha / nitra, socrates = janaa / nitra;
    azuree.restore();
  }
  function emmanul() {
    for (var zyliah = 0, usayd = 0; usayd < larina.length; usayd++) {
      zyliah += larina[usayd].nSize * larina[usayd].nSize;
    }
    return zyliah;
  }
  function regine() {
    var flo;
    flo = 1 * Math.max(q / 1080, m / 1920);
    return flo *= M;
  }
  function zephen(jahcier) {
    for (var khamaya = jahcier.length, jarmel, abiezer; 0 < khamaya;) {
      abiezer = Math.floor(Math.random() * khamaya);
      khamaya--;
      jarmel = jahcier[khamaya];
      jahcier[khamaya] = jahcier[abiezer];
      jahcier[abiezer] = jarmel;
    }
  }
  function briley() {
    dovie = null;
    var gilfred = 140;
    if (null != bianny) {
      gilfred = 200;
    }
    if (null != bianny || 0 != lize.length) {
      dovie = document.createElement("canvas");
    }
    var franes = dovie.getContext("2d"), arlyn = 110;
    arlyn = null == bianny ? arlyn + 24 * lize.length : arlyn + 180;
    var jerrik = Math.min(.22 * janaa, Math.min(200, .3 * lachrisha)) / 200;
    dovie.width = gilfred * jerrik;
    dovie.height = arlyn * jerrik;
    franes.scale(jerrik, jerrik);
    franes.globalAlpha = .4;
    franes.fillStyle = "#000000";
    franes.fillRect(0, 0, 200, arlyn);
    franes.globalAlpha = 1;
    franes.fillStyle = "#FFFFFF";
    var kymberle;
    var clenon = ["#E6339B", "#FFD700", "#33E660", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    if (null == bianny) {
      franes.fillStyle = "yellow";
      franes.font = "12px Ubuntu";
      var chauntel = new Image;
      chauntel.onload = function () {
        franes.drawImage(chauntel, 40, 0);
      };
      chauntel.src = "/img/lbfirst.png";
      franes.fillText(this.lastWinner, 70 - franes.measureText(this.lastWinner).width / 2, 80);
      for (kymberle = 0; kymberle < lize.length; ++kymberle) {
        c = lize[kymberle].name.split("*")[0] || "Unnamed Cell";
        c = amerson(c)[1];
        if (c == "") {
          c = "Unnamed Cell";
        }
        if (-1 != gesell.indexOf(lize[kymberle].id)) {
          larina[0].name && (c = amerson(larina[0].name)[1]);
          if (c == "") {
            c = "Unnamed Cell";
          }
          franes.fillStyle = "#FFAAAA";
          if (!kaylianie) {
            c = kymberle + 1 + ". " + c;
          }
          franes.fillText(c, 70 - franes.measureText(c).width / 2, 125 + 23 * kymberle);
        } else {
          franes.fillStyle = clenon[kymberle];
          if (!kaylianie) {
            c = kymberle + 1 + ". " + c;
          }
          franes.fillText(c, 70 - franes.measureText(c).width / 2, 125 + 23 * kymberle);
        }
      }
    } else {
      for (kymberle = c = 0; kymberle < bianny.length; ++kymberle) {
        var kinsley = c + bianny[kymberle] * Math.PI * 2;
        franes.fillStyle = farhiya[kymberle + 1];
        franes.beginPath();
        franes.moveTo(100, 140);
        franes.arc(100, 140, 80, c, kinsley, false);
        franes.fill();
        c = kinsley;
      }
    }
  }
  function erien(crys, amarey, jeslyn, eluterio, cahlil, harm) {
    this.id = crys;
    this.ox = this.x = amarey;
    this.oy = this.y = jeslyn;
    this.oSize = this.size = eluterio;
    this.color = cahlil;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(harm);
  }
  function cherakee(tahje, meadow, arasely, amun) {
    tahje && (this._size = tahje);
    meadow && (this._color = meadow);
    this._stroke = !!arasely;
    amun && (this._strokeColor = amun);
  }
  var janne = phenious.location.protocol, tapasya = "https:" == janne;
  var giovannii, azuree, kaisa, dovie, cornecia, lachrisha, janaa, savan = null, alexya = null, jovia = 0, eretta = 0, gesell = [], larina = [], emyly = {_0x402ex6b: _0x402ex39}, eliose = [], ladejah = [], lize = [], patty = [], celton = 0, rochely = 0, theia = -1, jaemarie = -1, nadilynn = 0, jamiera = 0, eeva = null, mekenzi = 0, loutricia = 0, alliyah = 1e4, raquel = 1e4, nitra = .1, deandre = null, fahima = true, grandville = true, yleana = false, deshaud = false, vayle = 0, kosten = 0, bnai = 0, jassir = 0, khabir = 0, raycen = false, aquille = false, juhee = false, eulane = .9, danil = false, radhya = false, clyta = false, reeyansh = jovia = ~~((mekenzi + alliyah) / 2), jehan = eretta = ~~((loutricia + raquel) / 2), jess = 1, kuyper = "", bianny = null, adilah = false, demerius = true, tennielle = false, madelin = 0, shambreka = 0, jerrion = 0, matthijs = 0, fayola = [], jayvon = Date.now(), bnai = 0, farhiya = ["#333333", "#FF3333", "#33FF33", "#3333FF"], march = .7, harmon = "ontouchstart" in phenious && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), anele = new Image, juriel = new Image, kaylianie = false;
  anele.src = "../img/images/split.png";
  juriel.src = "../img/images/feed.png";
  var leonah = document.createElement("canvas");
  var adelinne = Date.now();
  phenious.isSpectating = false;
  var adelinne = Date.now();
  phenious.setNick = function (cristalina, armon) {
    if (cristalina == null || !cristalina || cristalina == "") {
      alert("Enter Nick / Invalid Nick Input");
    } else {
      cristalina = cristalina.replace(/[|&;+,]/g, ":)");
      noahalexander();
      eeva = "{" + armon + "}" + cristalina;
      caytlen();
      vayle = 0;
      fayola = [];
      kosten = 0;
      jayvon = Date.now();
      jassir = 0;
      khabir = 0;
      bnai = 0;
    }
  };
  phenious.setRegion = ragnhild;
  phenious.setSkins = function (jarrin) {
    fahima = jarrin;
  };
  phenious.setNames = function (avnish) {
    grandville = avnish;
  };
  phenious.setDarkTheme = function (novaley) {
    raycen = novaley;
  };
  phenious.setColors = function (harriel) {
    yleana = harriel;
  };
  phenious.setShowMass = function (dhaksh) {
    aquille = dhaksh;
  };
  phenious.setTransparent = function (montserrat) {
    danil = montserrat;
  };
  phenious.setSmooth = function (mariatou) {
    eulane = mariatou ? 2 : .4;
  };
  phenious.setZoom = function (raoof) {
    juhee = raoof;
  };
  phenious.setHideChat = function (crystian) {
    radhya = crystian;
    if (crystian) {
      sniyah("#chat_textbox").hide();
    } else {
      sniyah("#chat_textbox").show();
    }
  };
  phenious.setSkipStats = function (dionisia) {
    clyta = dionisia;
  };
  phenious.closeStats = function () {
    sniyah("#statoverlay").hide();
    sniyah("#stats").hide();
    sniyah("#overlays").fadeIn(200);
  };
  phenious.ClearChat = function () {
    patty = [];
  };
  phenious.SendMap = function () {
    krishawna("psx2psx2");
  };
  phenious.spectate = function () {
    eeva = null;
    phenious.isSpectating = true;
    zackorie(1);
    noahalexander();
  };
  phenious.setGameMode = function (yanisha) {
    thesha(yanisha);
  };
  if (null != phenious.localStorage) {
    if (null == phenious.localStorage.AB8) {
      phenious.localStorage.AB8 = ~~(100 * Math.random());
    }
    bnai = +phenious.localStorage.AB8;
    phenious.ABGroup = bnai;
  }
  setInterval(function () {
    var caleiah = zanaiyah();
    if (0 != caleiah) {
      ++khabir;
      if (0 == jassir) {
        jassir = caleiah;
      }
      jassir = Math.min(jassir, caleiah);
    }
  }, 1e3);
  setInterval(function () {
    if (null != alexya && alexya.readyState == alexya.OPEN) {
      msg = latayvia(5);
      msg.setUint8(0, 90);
      msg.setUint32(1, 123456789, true);
      latency = new Date;
      whittney(msg);
    }
  }, 1e3);
  setInterval(function () {
    fayola.push(emmanul() / 100);
  }, 16.666666666666668);
  var cashlyn = {ZW: "EU-London"};
  phenious.connect = jannet;
  var cooledge = 500, grant = -1, jadalynn = -1, nekeya = 1, eiji = {_0x402ex114: new Image}, inett = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), brance = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande".split(";"), daneisha = ["_canvas'blob"];
  erien.prototype = {id: 0, points: null, pointsAcc: null, name: null, nameCache: null, sizeCache: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, flag: 0, updateTime: 0, updateCode: 0, drawTime: 0, destroyed: false, isVirus: false, isAgitated: false, wasSimpleDrawing: true, destroy: function () {
    var fayne;
    for (fayne = 0; fayne < eliose.length; fayne++) {
      if (eliose[fayne] == this) {
        eliose.splice(fayne, 1);
        break;
      }
    }
    delete emyly[this.id];
    fayne = larina.indexOf(this);
    if (-1 != fayne) {
      deshaud = true;
      larina.splice(fayne, 1);
    }
    fayne = gesell.indexOf(this.id);
    if (-1 != fayne) {
      gesell.splice(fayne, 1);
    }
    this.destroyed = true;
    ladejah.push(this);
  }, getNameSize: function () {
    return Math.max(~~(.3 * this.size), 24);
  }, setName: function (pamilla) {
    if (this.name = pamilla) {
      if (null == this.nameCache) {
        this.nameCache = new cherakee(this.getNameSize(), "#FFFFFF", true, "#000000");
        this.nameCache.setValue(this.name);
      } else {
        this.nameCache.setSize(this.getNameSize());
        this.nameCache.setValue(this.name);
      }
    }
  }, createPoints: function () {
    for (var riese = this.getNumPoints(); this.points.length > riese;) {
      var amour = ~~(Math.random() * this.points.length);
      this.points.splice(amour, 1);
      this.pointsAcc.splice(amour, 1);
    }
    if (0 == this.points.length && 0 < riese) {
      this.points.push({ref: this, size: this.size, x: this.x, y: this.y});
      this.pointsAcc.push(Math.random() - .5);
    }
    while (this.points.length < riese) {
      var shakel = ~~(Math.random() * this.points.length), falanda = this.points[shakel];
      this.points.splice(shakel, 0, {ref: this, size: falanda.size, x: falanda.x, y: falanda.y});
      this.pointsAcc.splice(shakel, 0, this.pointsAcc[shakel]);
    }
  }, getNumPoints: function () {
    if (0 == this.id) {
      return 16;
    }
    var williadean = 10;
    if (20 > this.size) {
      williadean = 0;
    }
    if (this.isVirus) {
      williadean = 30;
    }
    var cristyn = this.size;
    if (!this.isVirus) {
      cristyn *= nitra;
    }
    cristyn *= nekeya;
    if (this.flag & 32) {
      cristyn *= .25;
    }
    return ~~Math.max(cristyn, williadean);
  }, movePoints: function () {
    this.createPoints();
    var lyn = this.points;
    var nilaja = this.pointsAcc;
    var coyote = lyn.length;
    var quanaisha = 0;
    for (; quanaisha < coyote; ++quanaisha) {
      var tarl = nilaja[(quanaisha - 1 + coyote) % coyote];
      var rhyane = nilaja[(quanaisha + 1) % coyote];
      nilaja[quanaisha] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
      nilaja[quanaisha] *= .7;
      if (10 < nilaja[quanaisha]) {
        nilaja[quanaisha] = 10;
      }
      if (-10 > nilaja[quanaisha]) {
        nilaja[quanaisha] = -10;
      }
      nilaja[quanaisha] = (tarl + rhyane + 8 * nilaja[quanaisha]) / 10;
    }
    var ruya = this;
    var rchel = this.isVirus ? 0 : (this.id / 1e3 + jamiera / 1e4) % (2 * Math.PI);
    var nancy = 0;
    for (; nancy < coyote; ++nancy) {
      var josehine = lyn[nancy].size;
      var felissa = lyn[(nancy - 1 + coyote) % coyote].size;
      var yeilyn = lyn[(nancy + 1) % coyote].size;
      if (15 < this.size && null != savan && 20 < this.size * nitra && 0 != this.id) {
        var kenderrick = false;
        var neylin = lyn[nancy].x;
        var mynesha = lyn[nancy].y;
        savan.retrieve2(neylin - 5, mynesha - 5, 10, 10, function (dejhana) {
          if (dejhana.ref != ruya && 25 > (neylin - dejhana.x) * (neylin - dejhana.x) + (mynesha - dejhana.y) * (mynesha - dejhana.y)) {
            kenderrick = true;
          }
        });
        if (!kenderrick && lyn[nancy].x < mekenzi || lyn[nancy].y < loutricia || lyn[nancy].x > alliyah || lyn[nancy].y > raquel) {
          kenderrick = true;
        }
        if (kenderrick) {
          if (0 < nilaja[nancy]) {
            nilaja[nancy] = 0;
          }
          nilaja[nancy] -= 1;
        }
      }
      josehine = josehine + nilaja[nancy];
      if (0 > josehine) {
        josehine = 0;
      }
      josehine = this.isAgitated ? (19 * josehine + this.size) / 20 : (12 * josehine + this.size) / 13;
      lyn[nancy].size = (felissa + yeilyn + 8 * josehine) / 10;
      felissa = 2 * Math.PI / coyote;
      yeilyn = this.points[nancy].size;
      if (this.isVirus && 0 == nancy % 2) {
        yeilyn = yeilyn + 5;
      }
      lyn[nancy].x = this.x + Math.cos(felissa * nancy + rchel) * yeilyn;
      lyn[nancy].y = this.y + Math.sin(felissa * nancy + rchel) * yeilyn;
    }
  }, updatePos: function () {
    if (0 == this.id) {
      return 1;
    }
    var keilian;
    keilian = (jamiera - this.updateTime) / 120;
    keilian = 0 > keilian ? 0 : 1 < keilian ? 1 : keilian;
    var champane = 0 > keilian ? 0 : 1 < keilian ? 1 : keilian;
    this.getNameSize();
    if (this.destroyed && 1 <= champane) {
      var raelinn = ladejah.indexOf(this);
      -1 != raelinn && ladejah.splice(raelinn, 1);
    }
    this.x = keilian * (this.nx - this.ox) + this.ox;
    this.y = keilian * (this.ny - this.oy) + this.oy;
    this.size = champane * (this.nSize - this.oSize) + this.oSize;
    return champane;
  }, shouldRender: function () {
    if (0 == this.id) {
      return true;
    } else {
      return !(this.x + this.size + 40 < jovia - lachrisha / 2 / nitra || this.y + this.size + 40 < eretta - janaa / 2 / nitra || this.x - this.size - 40 > jovia + lachrisha / 2 / nitra || this.y - this.size - 40 > eretta + janaa / 2 / nitra);
    }
  }, drawOneCell: function (hillel) {
    if (this.shouldRender()) {
      var shealyn = 0 != this.id && !this.isVirus && !this.isAgitated && eulane > nitra;
      if (5 > this.getNumPoints()) {
        shealyn = true;
      }
      if (this.wasSimpleDrawing && !shealyn) {
        for (var blondell = 0; blondell < this.points.length; blondell++) {
          this.points[blondell].size = this.size;
        }
      }
      this.wasSimpleDrawing = shealyn;
      hillel.save();
      this.drawTime = jamiera;
      blondell = this.updatePos();
      this.destroyed && (hillel.globalAlpha *= 1 - blondell);
      hillel.lineWidth = 10;
      hillel.lineCap = "round";
      hillel.lineJoin = this.isVirus ? "miter" : "round";
      if (yleana) {
        hillel.fillStyle = "#FFFFFF";
        hillel.strokeStyle = "#AAAAAA";
      } else {
        hillel.fillStyle = this.color;
        hillel.strokeStyle = this.color;
      }
      hillel.beginPath();
      hillel.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
      hillel.closePath();
      var lansana = this.name.toLowerCase();
      li = amerson(lansana);
      if (lansana.indexOf("[") != -1) {
        var vanessah = lansana.indexOf("[");
        var aldana = lansana.indexOf("]");
        lansana = lansana.slice(vanessah + 1, aldana);
      }
      if (!this.isAgitated && fahima && "teams-public.iogames.icu:443" != clio) {
        if (!eiji.hasOwnProperty(lansana)) {
          eiji[lansana].src = jaeleen + li[0] + ".png";
        }
        if (0 != eiji[lansana].width && eiji[lansana].complete) {
          blondell = eiji[lansana];
        } else {
          blondell = null;
        }
      } else {
        blondell = null;
      }
      blondell = (e = blondell) ? -1 != daneisha.indexOf(lansana) : false;
      shealyn || hillel.stroke();
      hillel.fill();
      if (!(null == e || blondell)) {
        hillel.save();
        hillel.clip();
        hillel.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
        hillel.restore();
      }
      hillel.globalAlpha = 1;
      if (null != e && blondell) {
        hillel.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
      }
      blondell = -1 != larina.indexOf(this);
      if (0 != this.id) {
        var shealyn = ~~this.y;
        if ((grandville || blondell) && this.name && this.nameCache && (null == e || -1 == brance.indexOf(lansana))) {
          hillel.globalAlpha = 1;
          hillel.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Ubuntu";
          hillel.fillStyle = "#FFF";
          hillel.textAlign = "center";
          hillel.fillText(amerson(this.name.split("*")[0])[1], this.x, this.y);
        }
        if (aquille == true && !this.isVirus && ~~(this.nSize * this.nSize / 100) > 40) {
          hillel.fillStyle = "#FFFFFF";
          hillel.font = "bold " + this.getNameSize() / 2 + "px Ubuntu";
          var darren = ~~(this.nSize * this.nSize / 100);
          var ivann = hillel.measureText(darren).width;
          var pranaya = this.x - ivann * .07;
          hillel.fillText(darren, pranaya, this.y + this.getNameSize() + 6);
        }
      }
      hillel.restore();
    }
  }};
  cherakee.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, setSize: function (vanderlei) {
    if (this._size != vanderlei) {
      this._size = vanderlei;
      this._dirty = true;
    }
  }, setScale: function (adysin) {
    if (this._scale != adysin) {
      this._scale = adysin;
      this._dirty = true;
    }
  }, setStrokeColor: function (hye) {
    if (this._strokeColor != hye) {
      this._strokeColor = hye;
      this._dirty = true;
    }
  }, setValue: function (noberto) {
    if (noberto != this._value) {
      this._value = noberto;
      this._dirty = true;
    }
  }, render: function () {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    if (this._dirty) {
      this._dirty = false;
      var bikram = this._canvas, emilymae = this._ctx, herman = this._value, jinger = this._scale, sevannah = this._size, paradyce = "700 " + sevannah + "px nunito";
      emilymae.font = paradyce;
      var tyteanna = ~~(.2 * sevannah);
      bikram.width = (emilymae.measureText(herman).width + 6) * jinger;
      bikram.height = (sevannah + tyteanna) * jinger;
      emilymae.font = paradyce;
      emilymae.scale(jinger, jinger);
      emilymae.globalAlpha = 1;
      emilymae.lineWidth = 3;
      emilymae.strokeStyle = this._strokeColor;
      emilymae.fillStyle = this._color;
      this._stroke && emilymae.strokeText(herman, 3, sevannah - tyteanna / 2);
      emilymae.fillText(herman, 3, sevannah - tyteanna / 2);
    }
    return this._canvas;
  }, getWidth: function () {
    return azuree.measureText(this._value).width + 6;
  }};
  Date.now || (Date.now = function () {
    return (new Date).getTime();
  });
  var tamee = {init: function (masooma) {
    function genvieve(versey, lucienne, breven, wahaj, genna) {
      this.x = versey;
      this.y = lucienne;
      this.w = breven;
      this.h = wahaj;
      this.depth = genna;
      this.items = [];
      this.nodes = [];
    }
    var manaure = masooma.maxChildren || 2, ye = masooma.maxDepth || 4;
    genvieve.prototype = {x: 0, y: 0, w: 0, h: 0, depth: 0, items: null, nodes: null, exists: function (marychristina) {
      for (var eudell = 0; eudell < this.items.length; ++eudell) {
        var meliodas = this.items[eudell];
        if (meliodas.x >= marychristina.x && meliodas.y >= marychristina.y && meliodas.x < marychristina.x + marychristina.w && meliodas.y < marychristina.y + marychristina.h) {
          return true;
        }
      }
      if (0 != this.nodes.length) {
        var kaelib = this;
        return this.findOverlappingNodes(marychristina, function (orya) {
          return kaelib.nodes[orya].exists(marychristina);
        });
      }
      return false;
    }, retrieve: function (rajaee, karston) {
      for (var steaven = 0; steaven < this.items.length; ++steaven) {
        karston(this.items[steaven]);
      }
      if (0 != this.nodes.length) {
        var drayon = this;
        this.findOverlappingNodes(rajaee, function (donn) {
          drayon.nodes[donn].retrieve(rajaee, karston);
        });
      }
    }, insert: function (jeiry) {
      if (0 != this.nodes.length) {
        this.nodes[this.findInsertNode(jeiry)].insert(jeiry);
      } else {
        if (this.items.length >= manaure && this.depth < ye) {
          this.devide();
          this.nodes[this.findInsertNode(jeiry)].insert(jeiry);
        } else {
          this.items.push(jeiry);
        }
      }
    }, findInsertNode: function (aithana) {
      return aithana.x < this.x + this.w / 2 ? aithana.y < this.y + this.h / 2 ? 0 : 2 : aithana.y < this.y + this.h / 2 ? 1 : 3;
    }, findOverlappingNodes: function (tanaeja, aleene) {
      return tanaeja.x < this.x + this.w / 2 && (tanaeja.y < this.y + this.h / 2 && aleene(0) || tanaeja.y >= this.y + this.h / 2 && aleene(2)) || tanaeja.x >= this.x + this.w / 2 && (tanaeja.y < this.y + this.h / 2 && aleene(1) || tanaeja.y >= this.y + this.h / 2 && aleene(3)) ? true : false;
    }, devide: function () {
      var yaribel = this.depth + 1, adeliz = this.w / 2, chess = this.h / 2;
      this.nodes.push(new genvieve(this.x, this.y, adeliz, chess, yaribel));
      this.nodes.push(new genvieve(this.x + adeliz, this.y, adeliz, chess, yaribel));
      this.nodes.push(new genvieve(this.x, this.y + chess, adeliz, chess, yaribel));
      this.nodes.push(new genvieve(this.x + adeliz, this.y + chess, adeliz, chess, yaribel));
      yaribel = this.items;
      this.items = [];
      for (adeliz = 0; adeliz < yaribel.length; adeliz++) {
        this.insert(yaribel[adeliz]);
      }
    }, clear: function () {
      for (var caliee = 0; caliee < this.nodes.length; caliee++) {
        this.nodes[caliee].clear();
      }
      this.items.length = 0;
      this.nodes.length = 0;
    }};
    return {root: new genvieve(masooma.minX, masooma.minY, masooma.maxX - masooma.minX, masooma.maxY - masooma.minY, 0), insert: function (jazeera) {
      this.root.insert(jazeera);
    }, retrieve: function (jhelani, katelyn) {
      this.root.retrieve(jhelani, katelyn);
    }, retrieve2: function (datavian, gadeer, annelys, kaylii, derya) {
      _0x402ex129.x = datavian;
      _0x402ex129.y = gadeer;
      _0x402ex129.w = annelys;
      _0x402ex129.h = kaylii;
      this.root.retrieve(_0x402ex129, derya);
    }, exists: function (orli) {
      return this.root.exists(orli);
    }, clear: function () {
      this.root.clear();
    }};
  }};
  phenious.onload = jarissa;
}(window, window.jQuery));
$(document).ready(function () {
  $("#chat_textbox").bind("cut copy paste", function (maccoy) {
    maccoy.preventDefault();
  });
});
(function () {
  var osbaldo = function (shreyaan) {
    if (shreyaan.keyCode === 17) {
      for (var maislyn = 0; maislyn < 4; ++maislyn) {
        setTimeout(function () {
          window.onkeydown({keyCode: 32});
          window.onkeyup({keyCode: 32});
        }, maislyn * 50);
      }
    }
  };
  window.addEventListener("keydown", osbaldo);
}());
(function () {
  var breauna = function (keymya) {
    if (keymya.keyCode === 69) {
      for (var iszak = 0; iszak < 10; ++iszak) {
        setTimeout(function () {
          window.onkeydown({keyCode: 87});
          window.onkeyup({keyCode: 87});
        }, iszak * 50);
      }
    }
  };
  window.addEventListener("keydown", breauna);
}());
window.onbeforeunload = function () {
  if (Play == true) {
    return confirm();
  }
};
