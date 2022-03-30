!function (d, b) {
    function x() {
      function x(d) {
        d.addEventListener("mousemove", Y, false), d.addEventListener("mouseenter", Y, false), d.addEventListener("touchstart", Y, false), d.addEventListener("touchmove", Y, false), d.addEventListener("touchend", Y, false);
      }
      function r(d) {
        ub(), Sb(17), d && (Ud = d), Ud--, Ad && (clearTimeout(Ad), Ad = 0), Ud > 0 && (Ad = setTimeout(r, 60));
      }
      na = true, Bb(), Cx(), Mc(Cx, 0), Mc(Cx, 3e4), Bt = Pt = document.getElementById("canvas"), Dt = Bt.getContext("2d"), Rt = document.getElementById("minimap"), Lt = Rt.getContext("2d"), zt = document.getElementById("chtCanvas"), Ot = zt.getContext("2d"), $t = document.getElementById("leaderboard"), Et = $t.getContext("2d"), Wt = document.getElementById("gamemodeCanvas"), Yt = Wt.getContext("2d"), Jt = document.getElementById("infoBox"), Vt = Jt.getContext("2d"), Xt = document.getElementById("partyCanvas"), jt = Xt.getContext("2d"), ci = document.getElementById("chtScrollbar"), li = document.getElementById("chtScrollbarThumb"), Bt.focus(), _(), t();
      var h = false, m = false;
      C_ && (b("#chtbox").css({"font-size": "11px", width: "115px", padding: "0px"}), b("#minimap").css({width: "90px", height: "90px", "border-radius": "5px", right: "103px"}), b("#emojiBtn").css({left: "163px"}), b("#emojiDropdown").css({left: "163px"}), b(".innerBoxDashboard2").css({transform: "scale(0.7)", "transform-origin": "left top"}), b("#fpsBox").addClass("touch-device"), b("#fpsBox").is(":visible") && b("#respawnTouch").addClass("fpsShow"), b("#respawnTouch").show(), b("#btnFriends").addClass("touch-device"), setResponsiveMenu(), b("#cellExampleMenu").hide(), b("#cellExampleShop").hide(), !M_ && b("#sliderRangeZoomMob").show(), qt = document.getElementById("touchSplit"), Kt = qt.getContext("2d"), di = document.getElementById("touchEject"), bi = di.getContext("2d"), xi = document.getElementById("touchEjectLock"), _i = xi.getContext("2d"), ei = document.getElementById("touchMoveOrigin"), ti = ei.getContext("2d"), ii = document.getElementById("touchMove"), ni = ii.getContext("2d"), Lb(), b("#touch").show(), b("#brGame").addClass("touch-device"), b("#infBar").addClass("touch-device"), b("#inventory").hide(), Kr.sSkins = qr.sSkins = false, Kr.sWearables = qr.sWearables = false, Kr.sFancyGrid = qr.sFancyGrid = false, Kr.sMinimap = qr.sMinimap = false, Kr.sMinionNames = qr.sMinionNames = false, Kr.sNameOutlines = qr.sNameOutlines = false), A_ = !!Kx("agf"), N_ = !!Kx("zombies"), A_ && (Kr.sDark = true);
      var S;
      null != d.localStorage.settings && (S = JSON.parse(d.localStorage.settings), typeof S.nickName !== "undefined" && (Kr.nickName = S.nickName), typeof S.user !== "undefined" && S.user == "" && (typeof S.skinId !== "undefined" && (Kr.skinId = S.skinId), typeof S.wearablesSelected !== "undefined" && (Kr.wearablesSelected = S.wearablesSelected.slice(0)), Kr.user = ""), typeof S.sSkins !== "undefined" && (Kr.sSkins = S.sSkins), typeof S.sWearables !== "undefined" && (Kr.sWearables = S.sWearables), typeof S.sColors !== "undefined" && (Kr.sColors = S.sColors), typeof S.sNames !== "undefined" && (Kr.sNames = S.sNames), typeof S.sMinionNames !== "undefined" && (Kr.sMinionNames = S.sMinionNames), typeof S.sMass !== "undefined" && (Kr.sMass = S.sMass), typeof S.sFood !== "undefined" && (Kr.sFood = S.sFood), typeof S.sCellAnimations !== "undefined" && (Kr.sCellAnimations = S.sCellAnimations), typeof S.sSkinAnimations !== "undefined" && (Kr.sSkinAnimations = S.sSkinAnimations), typeof S.sMapBorder !== "undefined" && (Kr.sMapBorder = S.sMapBorder), typeof S.sFancyGrid !== "undefined" && (Kr.sFancyGrid = S.sFancyGrid), typeof S.sSectionGrid !== "undefined" && (Kr.sSectionGrid = S.sSectionGrid), typeof S.sGrid !== "undefined" && (Kr.sGrid = S.sGrid && !Kr.sFancyGrid), typeof S.sDark !== "undefined" && (Kr.sDark = S.sDark), typeof S.sAcid !== "undefined" && (Kr.sAcid = S.sAcid), typeof S.sSlowMotion !== "undefined" && (Kr.sSlowMotion = S.sSlowMotion), typeof S.sFPS !== "undefined" && (Kr.sFPS = S.sFPS), typeof S.sZoom !== "undefined" && (Kr.sZoom = S.sZoom), typeof S.sFixedZoom !== "undefined" && (Kr.sFixedZoom = S.sFixedZoom), typeof S.fixedZoomScale !== "undefined" && (Kr.fixedZoomScale = S.fixedZoomScale), typeof S.sMinionUi !== "undefined" && (Kr.sMinionUi = S.sMinionUi), typeof S.sLeaderboard !== "undefined" && (Kr.sLeaderboard = S.sLeaderboard), typeof S.sChat !== "undefined" && (Kr.sChat = S.sChat), typeof S.sMinimap !== "undefined" && (Kr.sMinimap = S.sMinimap), typeof S.sCellBorders !== "undefined" && (Kr.sCellBorders = S.sCellBorders), typeof S.sLargeNames !== "undefined" && (Kr.sLargeNames = S.sLargeNames), typeof S.sNameOutlines !== "undefined" && (Kr.sNameOutlines = S.sNameOutlines), typeof S.sCellSpikes !== "undefined" && (Kr.sCellSpikes = S.sCellSpikes), typeof S.sTransparentViruses !== "undefined" && (Kr.sTransparentViruses = S.sTransparentViruses), typeof S.sClassicViruses !== "undefined" && (Kr.sClassicViruses = S.sClassicViruses), typeof S.sPolygonShapes !== "undefined" && (Kr.sPolygonShapes = S.sPolygonShapes), typeof S.sLineShapes !== "undefined" && (Kr.sLineShapes = S.sLineShapes), typeof S.sBubbleCells !== "undefined" && (Kr.sBubbleCells = S.sBubbleCells)), ds = false, Kr.nickName && b("#nick").prop("value", Kr.nickName), Rd(Kr.skinId), Xd(Kr.wearablesSelected), b("#cSkins").prop("checked", Kr.sSkins).change(), b("#cWearables").prop("checked", Kr.sWearables).change(), b("#cColors").prop("checked", Kr.sColors).change(), b("#cNames").prop("checked", Kr.sNames).change(), b("#cMinionNames").prop("checked", Kr.sMinionNames).change(), b("#cMass").prop("checked", Kr.sMass).change(), b("#cFood").prop("checked", Kr.sFood).change(), b("#cCellAnimations").prop("checked", Kr.sCellAnimations).change(), b("#cSkinAnimations").prop("checked", Kr.sSkinAnimations).change(), b("#cMapBorder").prop("checked", Kr.sMapBorder).change(), b("#cFancyGrid").prop("checked", Kr.sFancyGrid).change(), b("#cSectionGrid").prop("checked", Kr.sSectionGrid).change(), b("#cGrid").prop("checked", Kr.sGrid).change(), b("#cDark").prop("checked", Kr.sDark).change(), b("#cSlowMotion").prop("checked", Kr.sSlowMotion).change(), b("#cFPS").prop("checked", Kr.sFPS).change(), b("#cZoom").prop("checked", Kr.sZoom).change(), Kr.sFixedZoom && (Ms = Wn = Kr.fixedZoomScale), b("#cFixedZoom").prop("checked", Kr.sFixedZoom).change(), b("#cMinionUi").prop("checked", Kr.sMinionUi).change(), b("#cLeaderboard").prop("checked", Kr.sLeaderboard).change(), b("#cChat").prop("checked", Kr.sChat).change(), b("#cMinimap").prop("checked", Kr.sMinimap).change(), b("#cCellBorders").prop("checked", Kr.sCellBorders).change(), b("#cLargeNames").prop("checked", Kr.sLargeNames).change(), b("#cNameOutlines").prop("checked", Kr.sNameOutlines).change(), b("#cCellSpikes").prop("checked", Kr.sCellSpikes).change(), b("#cClassicViruses").prop("checked", Kr.sClassicViruses).change(), b("#cPolygonShapes").prop("checked", Kr.sPolygonShapes).change(), b("#cLineShapes").prop("checked", Kr.sLineShapes).change(), b("#cBubbleCells").prop("checked", Kr.sBubbleCells).change(), ds = true, o_(), Ex(), eb();
      var M = document.body, C = document.getElementById("chtbox"), U = document.getElementById("chtControls"), F = document.getElementById("emojiDropdown"), P = document.getElementById("skinExampleMenu"), B = document.getElementById("cellExampleShop"), E = document.getElementById("btnFriends"), z = document.getElementById("friendDialog"), W = document.getElementById("friendAddInput"), Y = function (d) {
        d.stopPropagation();
      };
      if (b("#loginMobile").click(nd), b("#serverMobile").click(ad), b(".mainPanelNavMob").click(od), Bt.onfocus = C.onblur = function () {
        h = false, C.placeholder = "Press Enter To Chat";
      }, C.onfocus = function () {
        h = true, C.placeholder = "";
      }, M.ondragstart = M.ondrop = function (d) {
        d.preventDefault();
      }, M.ondragenter = M.ondragover = function (d) {
        d.preventDefault(), U_ && d.dataTransfer && (d.dataTransfer.dropEffect = "none");
      }, M.onmousedown = function (d) {
        T(), 2 == d.button && Wa && xx(d);
      }, U.onmousedown = function (d) {
        T(1), d.stopPropagation();
      }, document.getElementById("emojiBtn").onclick = function (d) {
        i(), d.stopPropagation();
      }, F.onclick = function (d) {
        a(d.target), d.stopPropagation();
      }, document.getElementById("curser").onclick = function (d) {
        I(), d.stopPropagation();
      }, document.getElementById("chtTabs").onclick = function (d) {
        A(d.target), d.stopPropagation();
      }, E.onclick = document.getElementById("friendDialogClose").onclick = Id, document.getElementById("friendHeader").onmousedown = Fd, document.getElementById("friendResizer").onmousedown = Pd, W.onblur = function () {
        m = false;
      }, W.onfocus = function () {
        m = true;
      }, b("#skinsTab").on("click", function (d) {
        Ro && Od();
      }), b("#wearablesTab").on("click", function (d) {
        Yo && Gd();
      }), P.onclick = function (d) {
        showSkin(_s, false), d.stopPropagation();
      }, P.onmousedown = function (d) {
        2 == d.button && (Rd(0), Vd(), Fx());
      }, P.oncontextmenu = B.oncontextmenu = function (d) {
        d.preventDefault(), d.stopPropagation();
      }, B.onmousemove = Hd, B.onmouseleave = qd, B.onclick = Kd, B.onmousedown = db, document.getElementById("megaholder").onclick = function (d) {
        b("#megaholder").hide();
      }, b(".hotkey-input").click(hotkeySelect).contextmenu(hotkeyClear), b('input[type="checkbox"]').click(function (d) {
        d && d.originalEvent && typeof d.originalEvent.isTrusted !== "undefined" && !d.originalEvent.isTrusted && d.originalEvent.preventDefault();
      }), document.getElementById("invisibleOverlay").onclick = Y, C_) {
        var J = document.getElementById("sliderRangeZoomMob");
        M.addEventListener("touchstart", O, false), M.addEventListener("touchmove", R, false), M.addEventListener("touchend", L, false), qt.addEventListener("touchstart", function (d) {
          Vr = true, r(1), Ax(), qt.style.opacity = .6, d.stopPropagation();
        }, false), qt.addEventListener("touchend", function (d) {
          Vr = false, Sb(38), Nx(), qt.style.opacity = 1, d.stopPropagation();
        }, false), di.addEventListener("touchstart", function (d) {
          Xr = true, 1 == jr && (jr = false, xi.style.opacity = 1), ub(), Sb(21), Vr && Ax(), di.style.opacity = .6, d.stopPropagation();
        }, false), di.addEventListener("touchend", function (d) {
          Xr = false, Sb(36), di.style.opacity = 1, d.stopPropagation();
        }, false), xi.addEventListener("touchstart", function (d) {
          jr = !jr, 0 == jr ? (jr = false, Sb(36), xi.style.opacity = 1) : (ub(), Sb(21), Vr && Ax(), xi.style.opacity = .6), d.stopPropagation();
        }, false), xi.addEventListener("touchend", function (d) {
          d.stopPropagation();
        }, false), J.oninput = function () {
          Br = (ws ? 3.95 : 3) * (this.value / 100) * (this.value / 100) + (ws ? .05 : 1), G();
        }, x(U), x(E), x(z), x(J);
      } else {
        var V, X = document.getElementById("inventory"), j = document.getElementById("contextMenu"), Z = document.getElementById("contextSubMenu");
        M.onmousemove = M.onmouseenter = ex, V = document.getElementById("invRecombine"), V.onmouseenter = V.onmousedown = function () {
          Hb(1);
        }, V = document.getElementById("invSpeed"), V.onmouseenter = V.onmousedown = function () {
          Hb(2);
        }, V = document.getElementById("invGrowth"), V.onmouseenter = V.onmousedown = function () {
          Hb(3);
        }, V = document.getElementById("invSpawnVirus"), V.onmouseenter = V.onmousedown = function () {
          Hb(4);
        }, V = document.getElementById("invSpawnMothercell"), V.onmouseenter = V.onmousedown = function () {
          Hb(5);
        }, V = document.getElementById("invSpawnPortal"), V.onmouseenter = V.onmousedown = function () {
          Hb(6);
        }, V = document.getElementById("invSpawnGoldOre"), V.onmouseenter = V.onmousedown = function () {
          Hb(9);
        }, V = document.getElementById("invWall"), V.onmouseenter = V.onmousedown = function () {
          Hb(10);
        }, V = document.getElementById("inv360Shot"), V.onmouseenter = function () {
          Hb(7);
        }, V.onmousedown = function (d) {
          Hb(7), 0 == d.button && qb(1);
        }, V = document.getElementById("invFreeze"), V.onmouseenter = V.onmousedown = function () {
          Hb(8);
        }, V = document.getElementById("invAntiFreeze"), V.onmouseenter = V.onmousedown = function () {
          Hb(11);
        }, V = document.getElementById("invAntiRecombine"), V.onmouseenter = V.onmousedown = function () {
          Hb(12);
        }, V = document.getElementById("invFrozenVirus"), V.onmouseenter = function () {
          Hb(13);
        }, V.onmousedown = function (d) {
          Hb(13), 0 == d.button && Ws.W.c && qb(3);
        }, X.onmouseleave = function () {
          Hb(0);
        }, X.onmousedown = function (d) {
          0 == d.button && Kb(d);
        }, X.onmouseup = function (d) {
          0 == d.button && (dx(), d.stopPropagation());
        }, M.onmouseup = function (d) {
          0 == d.button && bx(d);
        }, M.addEventListener("contextmenu", f, false), zt.oncontextmenu = s, zt.onmouseover = zt.onmousemove = function (d) {
          so && so !== o(d.clientX, d.clientY) && (so = null, Ti = true), ro = yn + 200;
        }, zt.onmousedown = function (b) {
          0 == b.button && !oa && (d.isSpectating && !o(b.clientX, b.clientY) && l(b), !so && (ro = yn));
        }, zt.onmouseout = function (d) {
          so && (so = null, Ti = true), ro = 0;
        }, zt.ondblclick = c, C.oncontextmenu = F.oncontextmenu = z.oncontextmenu = Y, j.oncontextmenu = Z.oncontextmenu = function (d) {
          d.preventDefault(), d.stopPropagation();
        }, j.onmouseover = Z.onmouseover = j.onmousemove = Z.onmousemove = v, j.onmousedown = Z.onmousedown = function (d) {
          v(d), d.stopPropagation();
        }, j.onmouseleave = Z.onmouseleave = g, j.onclick = function (d) {
          k(), d.stopPropagation();
        }, Z.onclick = function (d) {
          mx(d), w(), d.stopPropagation();
        }, li.onmousedown = N, ci.onmousedown = D, Bt.onmousedown = function (d) {
          1 == za && u(d), 0 == d.button && l(d);
        };
      }
      S_ ? document.addEventListener("DOMMouseScroll", Q, false) : M.onmousewheel = Q, C.value = "";
      var H = false, q = false, K = false, dd = false, bd = false, xd = false, _d = false, ed = false, td = false, id = false, rd = false, sd = false, cd = false, ld = false, ud = 0, fd = 0, hd = 0, md = 0, pd = 0, vd = 0, gd = 0, yd = 0, kd = 0, wd = 0, Sd = 0, Md = 0, Td = 0, Cd = 0, Ud = 0, Ad = 0, Nd = 0;
      d.addEventListener("change", mx, true), d.addEventListener("mousedown", function (d) {
        zr = Or, Ys && (!b(d.target).hasClass("hotkey-input") || !b(d.target).hasClass("selected")) && t_();
      }, true), d.addEventListener("keydown", function (d) {
        zr = Or, (typeof d.isTrusted === "undefined" || d.isTrusted) && (Nd = d.keyCode), Ys && (i_(d), d.stopImmediatePropagation());
      }, true), d.onkeydown = function (x) {
        if (!h && !m) {
          var _ = Date.now();
          if (!oa && (x.keyCode == Ws.Space.c && !H && _ - 50 >= ud && (ud = _, r(1), H = true), x.keyCode == Ws.W.c && !q && _ - 50 >= fd && (fd = _, 1 == za && Ws.W.c != Ws.W360.c && qb(1, true), ub(), Sb(21), q = true), x.keyCode == Ws.Z.c && !K && _ - 50 >= hd && (hd = _, ub(), Sb(37), K = true), x.keyCode == Ws.F.c && !dd && _ - 50 >= md && (md = _, Sb(35), dd = true), x.keyCode == Ws.Q.c && !bd && _ - 50 >= pd && (pd = _, Sb(18), bd = true), x.keyCode == Ws.E.c && !xd && _ - 50 >= vd && (vd = _, Sb(30), xd = true), x.keyCode == Ws.S.c && !_d && _ - 50 >= gd && (gd = _, Sb(31), _d = true), x.keyCode == Ws.A.c && !ed && _ - 50 >= yd && (yd = _, ub(), Sb(32), ed = true), x.keyCode == Ws.X.c && !td && _ - 50 >= kd && (kd = _, ub(), Sb(39), td = true), x.keyCode == Ws.I.c && !id && _ - 50 >= wd && (wd = _, Sb(28), id = true), x.keyCode != Ws.C.c || mn || (pn = Xs, vn = js, mn = true), x.keyCode == Ws.D.c && !rd && _ - 50 >= Sd && (Sd = _, r(2), rd = true), x.keyCode == Ws.T.c && !sd && _ - 50 >= Md && (Md = _, r(3), sd = true), x.keyCode == Ws.W360.c && !ld && _ - 50 >= Cd && !q && Ws.W.c != Ws.W360.c && (Cd = _, 1 != za && qb(1, true), 1 == za && (ub(), Sb(21), Sb(36)), ld = true), x.keyCode == Ws.DW.c)) {
            Hb(10);
            var e = {clientX: ln, clientY: un};
            Kb(e), Hb(0), vi && dx(), vi = !vi;
          }
          x.keyCode == Ws.M.c && !cd && _ - 50 >= Td && (oa && (x.target.tagName == "INPUT" && x.target.type != "checkbox" || x.target.tagName == "TEXTAREA" || x.target.tagName == "SELECT" || 0 != b("div.modal.in:visible").length) || (Td = _, rspwn(document.getElementById("nick").value), cd = true));
        }
        switch (x.keyCode) {
          case 27:
            var t = b("div.modal.in:visible");
            At || 0 == t.length ? h || er || Mr || Wa || m || Ar ? (C.blur(), W.blur(), T(), dx()) : Ae ? d.closeAdvert() : (!b("#dashPanel").is(":visible") && b("#loginForm").is(":visible") && (V_ = 0), azad(true)) : t.last().modal("hide"), ($n || S_) && x.preventDefault();
            break;
          case 13:
            Mr ? Tr ? (mx(x), w()) : k() : h ? (n(), 13 == Nd && kb(C.value), C.value = xo, C.selectionStart = C.selectionEnd = xo.length, C.blur(), h = false) : Is || 0 != b("div.modal.in:visible").length || (C.focus(), h = true);
            break;
          case 38:
            Mr && y(-1);
            break;
          case 40:
            Mr && y(1);
            break;
          case 37:
            Tr && p();
            break;
          case 39:
            if (Mr) {
              var t = b("#contextMenu").find("li.context-has-submenu.hover");
              t && t.length && t[0] !== mo && (p(), k(), Tr && b("#contextSubMenu").find("li.enabled").first().addClass("hover"));
            }
        }
        Nd = 0;
      }, d.onkeyup = function (d) {
        d.keyCode == Ws.Space.c && H && (H = false), d.keyCode == Ws.W.c && q && (Sb(36), q = false), d.keyCode == Ws.Z.c && K && (Sb(38), K = false), d.keyCode == Ws.F.c && dd && (dd = false), d.keyCode == Ws.Q.c && bd && (bd = false), d.keyCode == Ws.E.c && xd && (xd = false), d.keyCode == Ws.S.c && _d && (_d = false), d.keyCode == Ws.A.c && ed && (ed = false), d.keyCode == Ws.X.c && td && (Sb(40), td = false), d.keyCode == Ws.I.c && id && (id = false), d.keyCode == Ws.C.c && mn && (mn = false, ub(true)), d.keyCode == Ws.D.c && rd && (rd = false), d.keyCode == Ws.T.c && sd && (sd = false), d.keyCode == Ws.M.c && cd && (cd = false), d.keyCode == Ws.W360.c && ld && (ld = false), d.keycode == Ws.DW.c && vi && (vi = false);
      }, d.onblur = function () {
        q && Sb(36), K && Sb(38), td && Sb(40), H = q = K = dd = bd = xd = _d = ed = td = id = mn = rd = sd = cd = ld = vi = false;
      }, d.onresize = Mb, d.requestAnimationFrame(mi), Wr = setTimeout(function () {
        Wr = 0;
      }, 0), setInterval(ub, 50), setInterval(ib, 1e3), setInterval(function () {
        sr && (Ai = true);
      }, 4500), setInterval(function () {
        Cr && (Ni = true);
      }, 3500), setInterval(function () {
        Sb(95);
      }, 18e3), setInterval(Ab, 1e3), setInterval(Pb, 6500), e(), -1 !== ("" + d[[Sc[2]] + [Sc[22]]]).indexOf(Sc[23]) && setInterval(function () {
        ia && wb() && (document.getElementById(Sc[10])[Sc[11]][Sc[16]][Sc[7]][Sc[17]][Sc[21]](Bi, new d[Sc[19]]([104, 0, 104])[Sc[20]]), ub(true));
      }, 1e3), function () {
        var d = window.swal.close, b = window.onkeydown, x = window.onfocus;
        window.swal.close = function () {
          $("div.modal").css("overflow-y", ""), d(), window.onkeydown = b, window.onfocus = x;
        };
      }(), Wr ? (clearTimeout(Wr), Wr = 0) : Gr = true, (parseInt(d.localStorage.serverlistVersion) || 0) <= 6 && d.localStorage.removeItem("gameservers");
      var Dd = "";
      if (null != d.localStorage.gameservers) {
        Co = JSON.parse(d.localStorage.gameservers);
        for (var Bd = 0, Ed = 0; Ed < Co.length; ++Ed) {
          var zd = Co[Ed];
          zd.players = 0, zd.isCurrent && (zd.address && (Dd = zd.address, Uo = zd.name, Io = zd.id), !isNaN(zd.location) && (Bd = zd.location));
        }
        $d(Bd);
      }
      Dd != "" ? setserver(Dd, Uo) : connectDefault(), b("#overlays").show(), ++gn, Mb(), It = false;
    }
    function _(d) {
      Dt.font = "18px CarterOne, sans-serif";
      var b = "QW@HhsXJ", x = Dt.measureText(b).width;
      if (Dt.font = "18px CarterOne", x == Dt.measureText(b).width) {
        for (x = 1; 1500 >= x; x++) Dt.font = x + "px CarterOne";
        setTimeout(function () {
          aa = true;
        }, 500);
      } else !d && (d = 1), 300 > d ? setTimeout(function () {
        _(d + 1);
      }, 10) : aa = true;
    }
    function e() {}
    function t() {
      for (var d, b = "<table><tbody>", x = 0, _ = 0; _ < emoList.length; _++) d = emoList[_], 0 == x && (b += "<tr>"), b += "<td title='" + d + "'><div class='emo-img' style='background-position:" + ("" + -20 * x) + "px " + ("" + -20 * ~~(_ / 8)) + "px;'></div></td>", x++, x >= 8 && (x = 0, b += "</tr>");
      0 != x && (b += "</tr>"), b += "</tbody></table><p style='padding:10px 5px 0px;color:#444444;font-size:9px;font-weight:bold;'>Emoji art provided by <a target='_blank' href='http://emojione.com'>EmojiOne</a></p>", document.getElementById("emojiDropdown").innerHTML = b;
    }
    function i() {
      if (er) {
        b("#emojiDropdown").slideUp(50), er = false;
        var d = document.getElementById("chtbox");
        0 != d.value.length && d.focus();
      } else b("#emojiDropdown").slideDown(50), er = true;
    }
    function n() {
      er && (b("#emojiDropdown").hide(), er = false);
    }
    function a(d) {
      if (d && d.tagName == "TD") {
        var b = d.title;
        if (b) {
          var x = document.getElementById("chtbox"), _ = x.value, e = x.selectionEnd, t = (e > 0 && _.length > 0 && _.substr(e - 1, 1) != " " ? " " : "") + b + " ";
          _.length + t.length <= x.maxLength && (x.value = _.substring(0, e) + t + _.substring(e), x.selectionStart = x.selectionEnd = e + t.length, x.focus());
        }
      }
    }
    function o(d, x) {
      var _ = null;
      if (!oa) {
        var e = b("#chtCanvas").offset();
        e && (d -= e.left, x -= e.top);
        for (var t = 0; t < lo.length; t++) {
          var i = lo[t];
          if (d >= i.x0 && x >= i.y0 && d <= i.x1 && x <= i.y1) {
            _ = i.ch;
            break;
          }
        }
      }
      return _;
    }
    function r(d, b) {
      oa || so || co || (so = o(d, b), so && (Ti = true));
    }
    function s(d) {
      if (!oa) {
        var b = co;
        co = o(d.clientX, d.clientY), (b || co) && (so = null, Ti = true);
      }
    }
    function c(d) {
      oa || Wa || (s(d), co && (f(d), b("#contextMenu").find("li.hover").removeClass("hover"), b("#contextUserProfile.enabled").addClass("hover"), k(), m()));
    }
    function l(x) {
      oa || Wa || !d.isSpectating || 0 != Xi.length || (m(), f(x), b("#contextMenu").find("li.hover").removeClass("hover"), b("#contextSpectate.enabled").addClass("hover"), k(), m());
    }
    function u(d) {
      if (!oa && !Wa && Xi.length > 0) {
        var b = null;
        if (!co) for (var x = (d.pageX - ai / 2) / Gn + Ji, _ = (d.pageY - oi / 2) / Gn + Vi, e = Hi.length - 1; e >= 0; e--) {
          var t = Hi[e];
          if (0 == t.cellType) {
            var i = t.x - x, n = t.y - _;
            if (i * i + n * n < t.size * t.size) {
              b = t;
              break;
            }
          }
        }
        if (b) {
          var a = Xi.indexOf(b.id), o = fd(6);
          o.setUint8(0, 162), o.setUint8(1, a), o.setUint32(2, b.pid, true), hd(o);
        }
      }
    }
    function f(x) {
      if (!oa) {
        if (x.preventDefault(), Wa) return;
        document.getElementById("chtbox").blur();
        var _ = null;
        if (!co) for (var e = (x.pageX - ai / 2) / Gn + Ji, t = (x.pageY - oi / 2) / Gn + Vi, i = Hi.length - 1; i >= 0; i--) {
          var n = Hi[i];
          if (0 == n.cellType) {
            var a = n.x - e, o = n.y - t;
            if (a * a + o * o < n.size * n.size) {
              _ = n;
              break;
            }
          }
        }
        if (co || _) if (co) {
          if (wb() && co.sid == Io && 0 != co.pid) {
            var r = fd(6);
            r.setUint8(0, 60), r.setUint8(1, 0), r.setUint32(2, co.pid, true), hd(r);
          }
          b("#contextPlayerSkin").css({"background-image": "", "background-color": co.color}), b(".context-player-wear").css("background-image", "").hide(), b("#contextPlayerName").text(co.name).css("color", "").removeClass("gold black"), co.goldMember && b("#contextPlayerName").addClass("gold"), co.sid == Io && 0 != co.pid ? (b("#contextPartyInvite").addClass("enabled"), b("#contextFriendAdd").addClass("enabled"), b("#contextUserProfile").addClass("enabled"), b("#contextPrivateMessage").addClass("enabled"), b("#contextModerate").addClass("enabled"), d.isSpectating && 0 == Xi.length ? b("#contextSpectate").addClass("enabled") : b("#contextSpectate").removeClass("enabled")) : (b("#contextModerate").removeClass("enabled"), b("#contextPartyInvite").removeClass("enabled"), b("#contextUserProfile").removeClass("enabled"), 2 == co.category ? (b("#contextFriendAdd").addClass("enabled"), b("#contextPrivateMessage").addClass("enabled")) : (b("#contextFriendAdd").removeClass("enabled"), b("#contextPrivateMessage").removeClass("enabled")), b("#contextSpectate").removeClass("enabled")), b("#contextMute").addClass("enabled");
        } else {
          if (wb()) {
            var r = fd(6);
            r.setUint8(0, 60), r.setUint8(1, 1), r.setUint32(2, _.pid, true), hd(r);
          }
          b("#contextPlayerSkin").css("background-color", _.color), _.hasImage && ts && (0 != _.skinId && !An || 0 != _.imageId) ? 0 == _.skinId || An ? b("#contextPlayerSkin").css("background-image", "url(" + O_ + ("" + _.imageId) + "_lo.png?v=" + ("" + Q_) + ")") : b("#contextPlayerSkin").css("background-image", "url(" + z_ + ("" + _.skinId) + "_lo.png?u=" + ($o[_.skinId] || 0) + ")") : b("#contextPlayerSkin").css("background-image", "");
          for (var r = 1; 5 >= r; r++) if (_.wears && is && r <= _.wears.length) {
            var s = _.wears[r - 1], c = rc[s.wearArea] || "";
            b("#contextPlayerWear" + r).css("background-image", "url(" + R_ + ("" + s.wearId) + "_lo.png?v=" + ("" + L_) + ")").removeClass("center top bottom left right max".replace(c, "")).addClass(c).show();
          } else b("#contextPlayerWear" + r).css("background-image", "").hide();
          b("#contextPlayerName").text(_.name ? _.name : nc).css("color", _.name && _.colorIndexName > 1 ? sc[_.colorIndexName] : "").removeClass("gold black"), _.name && (1 == _.colorIndexName ? b("#contextPlayerName").addClass("gold") : 6 == _.colorIndexName && b("#contextPlayerName").addClass("black")), b("#contextPartyInvite").addClass("enabled"), b("#contextFriendAdd").addClass("enabled"), b("#contextUserProfile").addClass("enabled"), b("#contextPrivateMessage").addClass("enabled"), b("#contextMute").addClass("enabled"), b("#contextModerate").addClass("enabled"), d.isSpectating && 0 == Xi.length ? b("#contextSpectate").addClass("enabled") : b("#contextSpectate").removeClass("enabled");
        } else b("#contextPlayerSkin").css({"background-image": "", "background-color": ""}), b(".context-player-wear").css("background-image", "").hide(), b("#contextPlayerName").text("(NO PLAYER SELECTED)").css("color", "").removeClass("gold black"), b("#contextPartyInvite").removeClass("enabled"), b("#contextFriendAdd").removeClass("enabled"), b("#contextUserProfile").removeClass("enabled"), b("#contextPrivateMessage").removeClass("enabled"), b("#contextMute").removeClass("enabled"), b("#contextSpectate").removeClass("enabled"), b("#contextModerate").removeClass("enabled");
        Ha.length > 0 ? (b("#contextPartyMessage").addClass("enabled"), b("#contextPartyLeave").addClass("enabled")) : (b("#contextPartyMessage").removeClass("enabled"), b("#contextPartyLeave").removeClass("enabled")), uo.length > 0 ? b("#contextUnmute").addClass("enabled") : b("#contextUnmute").removeClass("enabled");
        var l = b("#contextMenu"), u = l.outerHeight(), f = l.outerWidth(), h = x.pageY, m = x.pageX;
        h = Math.max(h + u > oi && h - u >= 0 ? h - u : Math.min(h, oi - u), 0), m = Math.max(Math.min(m, ai - f), 0), l.show(), l.css({top: h, left: m}), Mr = true;
      }
    }
    function h(d) {
      var x = b("#contextSubMenu"), _ = b(d), e = _.outerHeight(), t = _.outerWidth(), i = _.offset(), n = i.top, a = i.left, o = x.outerHeight(), r = x.outerWidth(), s = Math.max(n - 4 + o > oi && n + 4 + e - o >= 0 ? n + 4 + e - o : Math.min(n - 4, oi - o), 0), c = Math.max(a - 4 + t + r > ai && a + 4 - r >= 0 ? a + 4 - r : Math.min(a - 4 + t, ai - r), 0);
      x.show(), x.css({top: s, left: c}), ne && (clearTimeout(ne), ne = 0), ae && (clearTimeout(ae), ae = 0), mo = d, Tr = true;
    }
    function m() {
      if (Mr) {
        if (wb()) {
          var d = fd(6);
          d.setUint8(0, 60), d.setUint8(1, 0), d.setUint32(2, 0, true), hd(d);
        }
        p(), b("#contextMenu").hide().find("li.hover").removeClass("hover"), co && (co = null, Ti = true), Mr = false;
      }
    }
    function p() {
      Tr && (b("#contextSubMenu").hide().find("li.hover").removeClass("hover"), mo = null, po = {}, Tr = false);
    }
    function v(d) {
      var x = null;
      if (d) {
        if (d.currentTarget) {
          var _ = b(d.currentTarget), e = _.outerHeight();
          e > oi && (d.pageY > oi - 10 && d.pageY < oi ? !_.is(":animated") && _.animate({top: oi - e}, 1e3) : d.pageY < 10 && d.pageY > 0 ? !_.is(":animated") && _.animate({top: 0}, 1e3) : _.stop(true, false));
        }
        d.target && d.target.tagName == "LI" && (x = b(d.target), x.hasClass("enabled") || (x = null));
      }
      ne && (clearTimeout(ne), ne = 0), d && d.currentTarget && d.currentTarget.id == "contextSubMenu" ? (ae && (clearTimeout(ae), ae = 0), b(".contextmenu").find("li.hover").removeClass("hover"), x && x.addClass("hover"), mo && b(mo).addClass("hover")) : (b("#contextMenu").find("li.hover").removeClass("hover"), x && (x.addClass("hover"), x[0] !== mo && x.hasClass("context-has-submenu") && (ne = setTimeout(function () {
        x[0] !== mo && x.hasClass("hover") && (p(), k()), ne = 0;
      }, 400))), ae || !Tr || x && x[0] === mo || (ae = setTimeout(function () {
        p(), ae = 0;
      }, 400)));
    }
    function g(d) {
      d && d.currentTarget && b(d.currentTarget).stop(true, false).find("li.hover").removeClass("hover"), ne && (clearTimeout(ne), ne = 0), ae || !Tr || d && d.currentTarget && d.currentTarget.id == "contextSubMenu" || (ae = setTimeout(function () {
        p(), ae = 0;
      }, 400));
    }
    function y(d) {
      if (d) {
        var x = b(Tr ? "#contextSubMenu" : "#contextMenu"), _ = x.find("li.enabled");
        if (_ && _.length) {
          var e = _.filter(".hover"), t = (e && e.length ? _.index(e[0]) : -1) + parseInt(d);
          t = 0 > t ? _.length - 1 : t >= _.length ? 0 : t, x.find("li.hover").removeClass("hover");
          var i = _.eq(t);
          i.addClass("hover");
          var n = x.outerHeight();
          if (n > oi && i) {
            var a = i.offset().top, o = i.outerHeight();
            a + o > oi - 2 ? x.stop(true, false).css({top: "-=" + (a + o - oi + 2)}) : 2 > a && x.stop(true, false).css({top: "-=" + (a - 2)});
          }
        }
      }
    }
    function k() {
      var d = b("#contextMenu").find("li.enabled.hover");
      if (d && d.length) {
        var x = d[0];
        switch (x.id) {
          case "contextPartyInvite":
            Sb(61), m();
            break;
          case "contextFriendAdd":
            co && 2 == co.category ? mb(81, co.name) : Sb(84), m();
            break;
          case "contextUserProfile":
            Sb(88), m();
            break;
          case "contextPrivateMessage":
            co && 2 == co.category ? insertPMText(co.name) : Sb(45), m();
            break;
          case "contextMute":
            window.testD = [], co ? S(co.uid, co.iid, co.name) : Sb(109), m();
            break;
          case "contextSpectate":
            Sb(92), m();
            break;
          case "contextPartyMessage":
            if (!Is) {
              var _ = document.getElementById("chtbox"), e = "/party ";
              _.value = e, _.selectionStart = _.selectionEnd = e.length, _.focus();
            }
            m();
            break;
          case "contextPartyLeave":
            Sb(64), m();
            break;
          case "contextUnmute":
            po = {};
            for (var t = "", _ = uo.length - 1; _ >= 0; _--) {
              var i = "contextUnmute" + ("" + _);
              t += '<li id="' + i + '" class="contextmenu-item enabled"><p></p></li>';
            }
            t += "<hr>", t += '<li id="contextUnmuteAll" class="contextmenu-item enabled"><p>Unmute All</p></li>', po.contextUnmuteAll = null, b("#contextSubMenu > ul").html(t);
            for (var _ = 0; _ < uo.length; _++) {
              var n = uo[_], i = "contextUnmute" + ("" + _);
              po[i] = n, b("#" + i + " > p").text(n.name ? n.name : nc);
            }
            b("#contextSubMenu").removeClass("compact"), h(x);
            break;
          case "contextModerate":
            po = {};
            var t = "";
            t += "<hr>", t += '<li id="contextWarn" class="contextmenu-item enabled"><p>Warn User</p></li>', t += "<hr>", t += '<li id="contextWarnFreeze" class="contextmenu-item enabled"><p>Warn+Freeze Teamer</p></li>', t += "<hr>", t += '<li id="contextBanUser" class="contextmenu-item enabled"><p>Ban User 24H</p></li>', po.contextWarn = 0, po.contextWarnFreeze = 1, po.contextBanUser = 2, b("#contextSubMenu > ul").html(t), b("#contextSubMenu").removeClass("compact"), h(x);
            break;
          case "contextSettings":
            po = {};
            var t = "";
            t += '<hr><li id="contextSettingControls" class="contextmenu-item enabled"><p>Controls...</p></li>', b("#contextSubMenu > ul").html(t), b("#contextSubMenu").addClass("compact"), h(x);
            break;
          case "contextScreenshot":
            E(), m();
        }
      }
    }
    function w() {
      if (mo) {
        var d = b("#contextSubMenu").find("li.enabled.hover");
        if (d && d.length) {
          var x = d[0];
          switch (mo.id) {
            case "contextUnmute":
              M(po[x.id]), m();
              break;
            case "contextModerate":
              0 == po[x.id] ? pb(93) : 1 == po[x.id] ? Sb(89) : 2 == po[x.id] && Sb(94), m();
              break;
            case "contextSettings":
              if (x.id == "contextSettingControls") az(0, 3), b("#gameSettingsTab a").tab("show"), openSettingPage(2), m(); else {
                var _ = po[x.id];
                if (_ && !_.is(":disabled") && _.prop("checked", !_.is(":checked")).change(), mo && b(mo).filter(".enabled").hasClass("hover")) {
                  var e = x.id;
                  k(), b("#" + e + ".enabled").addClass("hover");
                } else m();
              }
          }
        }
      }
    }
    function S(d, b, x) {
      var _ = d != Oi && !fo[d], e = b != Oi && !ho[b];
      _ || e ? (uo.push({uid: d, iid: b, name: x}), fo[d] = (fo[d] || 0) + 1, ho[b] = (ho[b] || 0) + 1, Ti = true, C("Muted " + x, false, false, 0, 10)) : d != Oi || b != Oi ? C("That player is already muted", false, false, 0, 10) : C("You cannot mute that player", false, false, 0, 10);
    }
    function M(d) {
      if (d) {
        var b = uo.indexOf(d);
        -1 != b && uo.splice(b, 1), fo[d.uid] && (fo[d.uid]--, fo[d.uid] <= 0 && delete fo[d.uid]), ho[d.iid] && (ho[d.iid]--, ho[d.iid] <= 0 && delete ho[d.iid]), C("Unmuted " + d.name, false, false, 1, 10);
      } else uo = [], fo = {}, ho = {}, C("Unmuted all players", false, false, 1, 10);
      Ti = true;
    }
    function T(d) {
      typeof d === "undefined" && (d = 0), 1 !== d && n(), 2 !== d && m(), 3 !== d && Bd();
    }
    function C(d, x, _, e, t) {
      var i = b("#curser");
      G_ && (clearTimeout(G_), G_ = 0), x ? i.html(d) : i.text(d), i.css({fontSize: _ ? "24px" : "18px", color: 2 == e ? "#999999" : 1 == e ? "#00C000" : "#FF0000"}), !_r && (i.finish().slideDown(50), _r = true), t > 0 && (G_ = setTimeout(function () {
        I(true);
      }, 1e3 * t));
    }
    function I(d) {
      G_ && (clearTimeout(G_), G_ = 0), d ? b("#curser").fadeOut(400) : b("#curser").text("").hide(), _r = false;
    }
    function U(d) {
      if (d) {
        var x = d.toLowerCase();
        if (!qa[x] && x != gi.toLowerCase()) {
          var _ = document.createElement("div");
          _.setAttribute("class", "chat-tab"), _.setAttribute("data-category", "2"), _.setAttribute("data-username", "" + d), _.setAttribute("data-insert", "/pm " + d + " "), _.setAttribute("data-tooltip", "/pm username ..."), _.innerHTML = d, (0 == Ka || 2 == Ka && bo == "") && b(_).addClass("semi-selected"), document.getElementById("chtTabs").appendChild(_), qa[x] = _;
        }
      }
    }
    function A(d) {
      if (d) {
        var x = b(d);
        if (x && x.hasClass("chat-tab")) {
          var _ = document.getElementById("chtbox");
          if (!x.hasClass("selected")) {
            b("#chtTabs").find("div.selected").removeClass("selected"), b("#chtTabs").find("div.semi-selected").removeClass("semi-selected"), x.removeClass("blink").addClass("selected"), Ka = parseInt(d.getAttribute("data-category")), isNaN(Ka) && (Ka = 0), bo = d.getAttribute("data-username"), !bo && (bo = ""), xo = d.getAttribute("data-insert"), !xo && (xo = "");
            var e = d.getAttribute("data-tooltip");
            !e && (e = ""), _.title = e, 0 == Ka ? b("#chtTabs").find("div").not("#chtTabPublic").removeClass("blink").addClass("semi-selected") : 2 == Ka && bo == "" && b("#chtTabs").find('[data-username!=""]').removeClass("blink").addClass("semi-selected"), Ti = true;
          }
          1 != no && (no = 1, Ti = true), _.value = xo, _.focus(), _.selectionStart = _.selectionEnd = xo.length, _.blur();
        }
      }
    }
    function N(d) {
      0 == d.button && (_o = true, ao = d.pageY, document.body.addEventListener("mousemove", F, false), document.body.addEventListener("mouseup", P, false));
    }
    function F(d) {
      _o && B(io + ao - d.pageY);
    }
    function P(d) {
      0 == d.button && _o && (_o = false, B(io + ao - d.pageY), document.body.removeEventListener("mousemove", F, false), document.body.removeEventListener("mouseup", P, false));
    }
    function D(d) {
      0 != d.button || _o || (d.offsetY < eo - to - io ? B(io + oo) : d.offsetY > eo - io && B(io - oo));
    }
    function B(d) {
      var b = eo - to - 2;
      d = Math.max(Math.min(d, b), 0), no = b > 0 ? 1 - d / b : 1, li.style.bottom = d + "px", Ti = true;
    }
    function E() {
      var d, b, x, _ = document.createElement("canvas"), e = _.getContext("2d");
      if (_.width = Pt.width, _.height = Pt.height, e.drawImage(Pt, 0, 0), nr && $t && (d = window.getComputedStyle($t), b = ai - $t.width - parseInt(d.getPropertyValue("right")), x = parseInt(d.getPropertyValue("top")), e.drawImage($t, b, x)), !Us && Rt && (d = window.getComputedStyle(Rt), b = ai - Rt.width - parseInt(d.getPropertyValue("right")), x = oi - Rt.height - parseInt(d.getPropertyValue("bottom")), e.drawImage(Rt, b, x)), tr && zt && (d = window.getComputedStyle(zt), b = parseInt(d.getPropertyValue("left")), x = oi - zt.height - parseInt(d.getPropertyValue("bottom")), e.drawImage(zt, b, x)), rr && Wt) {
        var t = document.getElementById("gamemodeBox");
        d = window.getComputedStyle(t), b = parseInt(d.getPropertyValue("left")), x = parseInt(d.getPropertyValue("top")), e.drawImage(Wt, b, x);
      }
      if (sr && Jt && (d = window.getComputedStyle(Jt), b = parseInt(d.getPropertyValue("left")), x = parseInt(d.getPropertyValue("top")), e.drawImage(Jt, b, x)), Cr && Xt) {
        var i = document.getElementById("partyBox");
        d = window.getComputedStyle(i), b = parseInt(d.getPropertyValue("left")), x = parseInt(d.getPropertyValue("top")), e.drawImage(Xt, b, x);
      }
      var n = _.toDataURL(), a = Math.max(~~(_.width / 5), 100), o = Math.max(~~(_.height / 5), 100), r = "width=" + a + ",height=" + o + ",menubar=0,toolbar=0,status=0,resizable=1,scrollbars=1";
      if (S_) window.open(n, "_blank", r); else {
        var s = window.open("", "_blank", r);
        s && (s.document.writeln("<html><head><title>Screenshot</title><style>@media(min-width:" + Math.max(_.width - 200, 100) + "px){img{width:" + _.width + 'px;}}</style></head><body style="margin:0px;background:#000;"><img width="100%" src="' + n + '" style="max-width:' + _.width + "px;max-height:" + _.height + 'px;"></body></html>'), s.document.location.href = "#", s.document.close());
      }
    }
    function z() {
      if (D_++, (3 == D_ || 4 == D_ || 7 == D_ || 9 == D_ || 11 == D_ || 12 == D_ || 16 == D_) && !pi) {
        var d = "";
        d = 3 == D_ || 11 == D_ ? "Hey you! You really should register a cellcraft account! It will let you save your progress, level up, and lots of more features and benefits!" : 'To register an account, press esc (main menu) and on the left side of the screen press "register". It takes 1 minute, and you will have loads of benefits!', C(d, false, false, 1, 20);
      }
    }
    function O(d) {
      if (zr = Or, T(), $("#news").hide(), $("#about").hide(), d.changedTouches.length > 0 && 0 > P_ && !oa) {
        var x = d.changedTouches[0];
        P_ = x.identifier, $_.reset(x.clientX, x.clientY), B_.copyFrom($_), E_.reset(0, 0), ei.style.left = $_.x - ei.width / 2 + "px", ei.style.top = $_.y - ei.height / 2 + "px", ii.style.left = B_.x - ii.width / 2 + "px", ii.style.top = B_.y - ii.height / 2 + "px", b("#touchMoveOrigin").show(), b("#touchMove").show();
      }
    }
    function R(d) {
      zr = Or, d.preventDefault();
      for (var b = 0; b < d.changedTouches.length; b++) {
        var x = d.changedTouches[b];
        if (P_ == x.identifier) {
          B_.reset(x.clientX, x.clientY), E_.copyFrom(B_), E_.minusEq($_), ii.style.left = B_.x - ii.width / 2 + "px", ii.style.top = B_.y - ii.height / 2 + "px", ln = 3 * E_.x + ai / 2, un = 3 * E_.y + oi / 2, Y(), ub();
          break;
        }
      }
    }
    function L(d) {
      zr = Or;
      for (var x = 0; x < d.changedTouches.length; x++) {
        var _ = d.changedTouches[x];
        if (P_ == _.identifier) {
          P_ = -1, E_.reset(0, 0), b("#touchMoveOrigin").hide(), b("#touchMove").hide();
          break;
        }
      }
    }
    function Q(d) {
      oa || (Br *= Math.pow(.9, d.wheelDelta / -120 || d.detail || 0), G(), W());
    }
    function G() {
      var d = ws ? .001 : 1;
      d > Br && (Br = d), Br > 4 / Gn && (Br = 4 / Gn), Ss && gn > 0 && (Ms = ea * Tb(), Fx());
    }
    function W() {
      if (C_) {
        var d = ~~(Math.sqrt((Br - (ws ? .05 : 1)) * (1e4 / (ws ? 3.95 : 3))) + .5);
        0 > d && (d = 0), d > 100 && (d = 100), document.getElementById("sliderRangeZoomMob").value = d;
      }
    }
    function Y() {
      fn = (ln - ai / 2) / Gn + Ji, hn = (un - oi / 2) / Gn + Vi;
    }
    function J() {
      wb() && (b("#overlays").finish().fadeOut(200), b("#avModal").hide(), b("#invisibleOverlay").hide(), Ae = false, $r = true, gb(), oa = false, xd(), Dr && b("#minionUi").removeClass("minimized"), C_ && V());
    }
    function V() {
      var d = document.documentElement;
      d.requestFullscreen ? d.requestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen ? d.webkitRequestFullscreen() : d.msRequestFullscreen && d.msRequestFullscreen();
    }
    function X() {
      document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
    }
    function j() {
      ye = Date.now(), window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.display("cellcraft-io_300x250");
      }), Z(), Ne = false, Te = true;
    }
    function Z() {
      ke = Date.now(), window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.display("cellcraft-io_728x90");
      });
    }
    function H() {
      we = Date.now(), window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.display("cellcraft-io_728x90_2");
      });
    }
    function q() {
      Se = Date.now(), window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.display("agma-io_160x600");
      });
    }
    function K() {
      Me = Date.now(), window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.display("cellcraft-io_970x250");
      }), Ce = true;
    }
    function dd() {
      !window.aiptag.adplayer && gt && (window.aiptag.adplayer = gt), aiptag.adplayer.startPreRoll();
    }
    function bd() {
      we = 0, window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.clear("cellcraft-io_728x90_2");
      });
    }
    function xd() {
      Se = 0, window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.clear("agma-io_160x600");
      });
    }
    function _d() {
      Me = 0, window.aiptag && aiptag.cmd.display.push(function () {
        aipDisplayTag.clear("cellcraft-io_970x250");
      });
    }
    function ed() {
      K(), H(), Ce && !Ue && (Ie && (wt = St = Mt = Tt = 0, td()), Ue = true, Sx(), b("#advertContinue").prop("disabled", true).html('Continue<br><i class="fa fa-spin" style="animation-duration:1s; margin:0px 0px -2px; opacity:0.7;"><img src="img/loading3.png" style="width:20px;"></i>').css("opacity", "0.7"), fe = he = false, wt = St = gn, Mt = Tt = Date.now(), ve = 100, ge = 300, me = setTimeout(function () {
        he = true, fe && id();
      }, ve), pe = setTimeout(id, ge)), Ne = true, setTimeout(function () {
        Ne && j();
      }, 1e3), T(), dx(), z(), b("#avModal").fadeIn(600), b("#overlays").hide(), Ae = true, oa = true, xs = null, Sb(14);
    }
    function td() {
      Ie && (wt > 0 && (St = wt + 5, Tt = Mt + (fe ? ve : ge) - 50, St > gn || Date.now() < Tt) || (b("#playBtn").prop("disabled", false).text("Play").css("opacity", ""), Te = Ie = false, Ue || (me && (clearTimeout(me), me = 0), pe && (clearTimeout(pe), pe = 0))));
    }
    function id() {
      Ue && (wt > 0 && (St = wt + 5, Tt = Mt + (fe ? ve : ge) - 50, St > gn || Date.now() < Tt) || (b("#advertContinue").prop("disabled", false).text("Continue").css("opacity", ""), Ce = Ue = false, Ie || (me && (clearTimeout(me), me = 0), pe && (clearTimeout(pe), pe = 0))));
    }
    function nd() {
      !b("#loginPanel").is(":visible") && b("#overlaysContent").fadeOut(100), setTimeout(function () {
        b("#mainPanel,#serverPanel").hide(), b("#overlaysContent").show(), b("#loginPanel").fadeIn(150);
      }, 150);
    }
    function ad() {
      !b("#serverPanel").is(":visible") && b("#overlaysContent").fadeOut(100), setTimeout(function () {
        b("#loginPanel,#mainPanel").hide(), b("#overlaysContent").show(), b("#serverPanel").fadeIn(150);
      }, 150);
    }
    function od() {
      !b("#mainPanel").is(":visible") && b("#overlaysContent").fadeOut(100), setTimeout(function () {
        b("#loginPanel,#serverPanel").hide(), b("#overlaysContent").show(), b("#mainPanel").fadeIn(150);
      }, 150);
    }
    function rd() {
      na && null != g_ && sd();
    }
    function sd() {
      if (cd(), null != g_ && 0 != Qr) {
        if (!Db()) return !W_ && ud(), Y_ = setTimeout(rd, Js), void (Js *= 1.5);
        var x = "wss://" + g_;
        $i = false, Lr = 60, Xi = [], ji = [], Zi = {}, Hi = [], qi = [], Ki = [], dn = {}, bn = {}, xn = [], _n = {}, en = {}, tn = {}, nn = [], an = [], on = [], D_ = 0, Fe = 0, Pe = 0, Bt = null, ta = null, ua = null, fa = -1, va = 0, ga = 0, ki = "", wi = "", Jx(), ya = false, ka = false, wa = false, Ma = false, Ta = false, Ca = 0, mn = false, Ia = 0, Ua = 0, Aa = 0, Na = 0, Fa = 0, Pa = 0, Da = 0, Ba = 0, $a = 0, Ea = true, za = 0, b("#inv360Shot").removeClass("activatedInv"), b("#invFrozenVirus").removeClass("activatedInv"), Oa = 0, Ra = 0, La = 0, Qa = 0, Ga = 0, Za = false, Ha = [], d.isSpectating = false, Mi = true, Ci = true, Wb(), Yb(), Jb(), Vb(), Xb(), Zb(), dx(), jn = 0, $r = false, px(Lr), !W_ && ud(), Y_ && (clearTimeout(Y_), Y_ = 0), Vs = false, ld(), WebSocket = Uc, WebSocket.prototype.send = Ac, Bi = new WebSocket(x), Object.defineProperty ? Object.defineProperty(Bi, "aSocket", {value: true}) : Bi.aSocket = true, Bi.send = function () {}, WebSocket.prototype.send = Nc, Bi.binaryType = "arraybuffer", Bi.onopen = md, Bi.onmessage = kd, Bi.onclose = yd, d.sckt = true;
      }
    }
    function cd() {
      if (Bi) {
        Bi.onopen = null, Bi.onmessage = null, Bi.onclose = null;
        try {
          Bi.close();
        } catch (b) {}
        Bi = null, d.sckt = false, hx();
      }
    }
    function ld() {
      $n = true, ie && (clearTimeout(ie), ie = 0), ie = setTimeout(function () {
        $n = false, ie = 0;
      }, 3e3);
    }
    function ud(d) {
      if (W_ && (clearTimeout(W_), W_ = 0), wb()) I(); else {
        !d && (d = 0);
        for (var b = d > 3 ? 6 - d : d, x = "", _ = 0; b > _; _++) x += ".";
        C("<span style='opacity:0;'>." + x + "</span>Connecting" + x + "<span style='opacity:0;'>.</span>", true, true, 2, 0), W_ = setTimeout(function () {
          ud((d + 1) % 6);
        }, 400);
      }
    }
    function fd(d) {
      return new DataView(new ArrayBuffer(d));
    }
    function hd(d, b) {
      ($i || !!b) && Ac.call(Bi, d.buffer);
    }
    function md() {
      cn.push({selectable: false, sid: 0, pid: 0, uid: Oi, iid: Oi, name: "Cellcraft.io", receiver: "", color: "#0AFF0A", message: "Connected to server " + Uo, category: 0, goldMember: 0, moderator: 0, donator: 0, yt: 0, shout: 0, time: Date.now(), cache: null}), Ti = true;
      var d;
      Js = 2e3;
      var b = +new Date;
      Er = b, W_ && (clearTimeout(W_), W_ = 0), I(), (!oa || Ae) && az(), ld(), d = fd(13), d.setUint8(0, 245), d.setUint16(1, y_, true), d.setUint16(3, k_, true), d.setUint32(5, zn, true), d.setUint32(9, vd(d, 0, 9, 245), true), hd(d, true);
    }
    function pd() {
      var d = (new Date).toDateString(), b = localStorage.getItem("username");
      if (null == localStorage.getItem("newv") && null == b) {
        localStorage.setItem("newv", d);
        var x = fd(2);
        x.setUint8(0, 160, true), x.setUint8(1, Ga, true), hd(x);
      } else if (null == localStorage.getItem("newv")) ; else if (localStorage.getItem("newv") == d) {
        var x = fd(2);
        x.setUint8(0, 160, true), x.setUint8(1, Ga, true), hd(x);
      }
    }
    function vd(d, b, x, _) {
      b + x > d.byteLength && (x = 0);
      for (var e = 12345678 + _, t = 0; x > t; t++) e += d.getUint8(b + t) * (t + 1);
      return e;
    }
    function gd(d) {
      En = d, px(0);
    }
    function yd() {
      if (cn.push({selectable: false, sid: 0, pid: 0, uid: Oi, iid: Oi, name: "Cellcraft.io", receiver: "", color: "#FF0A0A", message: "Disconnected from server", category: 0, goldMember: 0, moderator: 0, donator: 0, yt: 0, shout: 0, time: Date.now(), cache: null}), Ti = true, hx(), jx(), 0 != Fo.length) {
        var b = Fo.shift();
        $(".serversList").removeClass("active"), $("#serverRow" + b.id).addClass("active"), setserver(b.address, b.name);
      } else Vs || (typeof Storage !== "undefined" && d.localStorage.gameservers && d.localStorage.serverlistVersion != w_ ? (g_ = null, Ao = "", connectDefault()) : (Y_ = setTimeout(rd, Js), Js *= 1.5));
    }
    function kd(d) {
      wd(new DataView(d.data));
    }
    function wd(x) {
      function _() {
        for (var d, b = ""; 0 != (d = x.getUint16(t, true));) t += 2, b += String.fromCharCode(d);
        return t += 2, b;
      }
      function e(d) {
        d = +d;
        var b = Math.floor(d / 3600), x = Math.floor(d % 3600 / 60);
        Math.floor(d % 3600 % 60);
        return (b > 0 ? b + " Hours & " + (10 > x ? "0" : "") : "") + x + " Minutes";
      }
      var t = 0;
      switch (240 == x.getUint8(t) && (t += 5), x.getUint8(t++)) {
        case 16:
          ab(x, t);
          break;
        case 17:
          var i = x.getFloat32(t, true);
          t += 4;
          var n = x.getFloat32(t, true);
          t += 4, _a = x.getFloat32(t, true), t += 4;
          var a = Date.now();
          ux(a), qn = Zn, Kn = Hn, da = i, ba = n, xa = a;
          break;
        case 20:
          ji = [], Xi = [], Zi = {}, Hi = [], qi = [], Ki = [], dn = {}, bn = {}, yn = +new Date, Er = yn, Ci = true;
          break;
        case 32:
          Xi.push(x.getUint32(t, true)), t += 4;
          break;
        case 33:
          var o, a, r = x.getUint8(t++, true), s = 1 & r ? 1 : 2 & r ? 2 : 0, c = !!(8 & r), l = 0, u = 0, f = [];
          if (!!(16 & r) && (l = x.getUint16(t, true), t += 2), 0 != s) u = x.getUint32(t, true), t += 4; else {
            o = [], a = 1, !!(4 & r) && (a = x.getUint16(t, true), t += 2);
            for (var h = 0; a > h; h++) o.push(x.getUint32(t, true)), t += 4;
          }
          a = x.getUint8(t++, true);
          for (var h = 0; a > h; h++) f.push(x.getUint8(t++, true));
          ob(s, u, o, f, c, l), Er = +new Date;
          break;
        case 45:
          insertPMText(_());
          break;
        case 48:
          Hr = true;
        case 49:
          49 == x.getUint8(t - 1) && (Hr = false), ta = null;
          var a = x.getUint16(t, true);
          t += 2, xn = [];
          for (var h = 0; a > h; ++h) {
            var r = x.getUint8(t++), m = 0, p = 0;
            !!(1 & r) && (p = x.getUint8(t++)), !!(2 & r) && (m = x.getUint16(t, true), t += 2);
            var v = _(), g = null;
            if (8 & r) {
              for (var y = x.getUint8(t++), k = x.getUint8(t++), w = x.getUint8(t++), M = (y << 16 | k << 8 | w).toString(16); 6 > M.length;) M = "0" + M;
              for (M = "#" + M, b8 = (~~(y * vs) << 16 | ~~(k * vs) << 8 | ~~(w * vs)).toString(16); 6 > b8.length;) b8 = "0" + b8;
              b8 = "#" + b8;
              var T = x.getUint16(t, true), U = null, A = x.getUint8(t + 2);
              if (t += 3, 0 != A) {
                U = [];
                for (var N = 0; A > N; N++) U.push({wearId: x.getUint16(t, true), wearArea: x.getUint8(t + 2)}), t += 3;
              }
              g = {cellcolor: M, dimcolor: b8, skinId: T, wears: U};
            }
            xn.push({name: v, textcolor: p, pos: m, empty: !!(4 & r), cell: g});
          }
          Mi = true;
          break;
        case 50:
          ta = [];
          var F = x.getUint16(t, true);
          t += 2;
          for (var h = 0; F > h; ++h) ta.push(x.getFloat32(t, true)), t += 4;
          Mi = true;
          break;
        case 53:
          var a = x.getUint16(t, true);
          t += 2;
          var P = x.getUint8(t++, true);
          ot = 1 == a && P, b("#remainingSpins").text(a);
          break;
        case 54:
          var D = x.getUint8(t, true);
          myWheel.stopAnimation(false), myWheel.rotationAngle = 0, myWheel.draw(), drawTriangle(), calculatePrize(D), t += 1;
          break;
        case 56:
          x.getUint8(t, true);
          t += 1, pt = 2;
          try {
            dd(), Wx(true);
          } catch (B) {
            pt = 0, console.log("Really? AdBlocker bruh?"), console.log(B), swal("Please turn off your adblock extension");
          }
          break;
        case 64:
          Sn = In.left = In.oLeft = In.nLeft = x.getFloat64(t, true), t += 8, Mn = In.top = In.oTop = In.nTop = x.getFloat64(t, true), t += 8, Tn = In.right = In.oRight = In.nRight = x.getFloat64(t, true), t += 8, Cn = In.bottom = In.oBottom = In.nBottom = x.getFloat64(t, true), t += 8, In.draw = false, Zn = qn = da = (Tn + Sn) / 2, Hn = Kn = ba = (Cn + Mn) / 2, _a = 1, 0 == ji.length && (Ji = Zn, Vi = Hn, !Ss && (Gn = Wn = 1)), Un = x.getInt16(t, true), t += 2;
          var a = x.getUint32(t, true);
          t += 4;
          var E = x.getUint32(t, true);
          t += 4;
          var r = x.getUint8(t++);
          if (Nn = !!(1 & r), Ea = !!(2 & r), An = !!(4 & r), Fn = 2 * x.getUint32(t, true), t += 4, Pn = 2 * x.getUint32(t, true), t += 4, Dn = x.getUint16(t, true), t += 2, Bn = x.getUint16(t, true), t += 2, Er = +new Date, Ci = true, 17 == Un) {
            for (var h = 15; 19 >= h; h++) !tc[h] && h_(h);
            for (var h = 100; 103 >= h; h++) !tc[h] && h_(h);
            for (var h = 110; 112 >= h; h++) !tc[h] && h_(h);
          }
          Ss && (Ib(), W()), a === E ? 70 > Lr && (Lr += 40, gd(a)) : (cd(), yd());
          break;
        case 65:
          Sn = In.left = In.oLeft = In.nLeft = x.getFloat64(t, true), t += 8, Mn = In.top = In.oTop = In.nTop = x.getFloat64(t, true), t += 8, Tn = In.right = In.oRight = In.nRight = x.getFloat64(t, true), t += 8, Cn = In.bottom = In.oBottom = In.nBottom = x.getFloat64(t, true), t += 8, In.draw = false, Er = +new Date, Ci = true;
          break;
        case 66:
          var z = x.getFloat64(t, true);
          t += 8;
          var O = x.getFloat64(t, true);
          t += 8;
          var R = x.getFloat64(t, true);
          t += 8;
          var L = x.getFloat64(t, true);
          t += 8;
          var a = Date.now();
          !In.draw || a - In.updateTime > 3600 ? (In.left = In.oLeft = In.nLeft = z, In.top = In.oTop = In.nTop = O, In.right = In.oRight = In.nRight = R, In.bottom = In.oBottom = In.nBottom = L, In.ga = 0, In.createTime = a) : (lx(a), In.oLeft = In.left, In.oTop = In.top, In.oRight = In.right, In.oBottom = In.bottom, In.nLeft = z, In.nTop = O, In.nRight = R, In.nBottom = L), In.updateTime = a, In.draw = true, Ci = true;
          break;
        case 75:
          if (15 == Un) {
            var r = x.getUint8(t++, true);
            ua = {phase: x.getUint8(t, true), runningTime: Bx(x.getUint32(t + 1, true)), phaseTimer: x.getUint32(t + 5, true), isShrinking: !!(1 & r), shrinkTimer: x.getUint16(t + 9, true), players: x.getUint16(t + 11, true), maxPlayers: x.getUint16(t + 13, true), spectators: x.getUint16(t + 15, true), coinRewards: [x.getUint32(t + 17, true), x.getUint32(t + 21, true), x.getUint32(t + 25, true)], isParticipant: !!(2 & r), isEliminated: !!(4 & r), finishPosition: x.getUint16(t + 29, true), kills: x.getUint16(t + 31, true), isGhosted: !!(8 & r), ghostedTimer: x.getUint16(t + 33, true), totalMatches: x.getUint16(t + 35, true), totalWins: x.getUint16(t + 37, true), totalPoints: x.getUint32(t + 39, true), totalKills: x.getUint32(t + 43, true)}, t += 47, Wb(), -1 == ma && __(typeof d.localStorage !== "undefined" ? d.localStorage.gmbCollapsed || 0 : 0), Ui = true;
          } else if (17 == Un) {
            var r = x.getUint8(t++);
            ua = {timeLeft: Dx(x.getUint32(t, true)), infected: x.getUint16(t + 4, true), uninfected: x.getUint16(t + 6, true), isParticipant: !!(1 & r), kills: x.getUint16(t + 8, true), othersInfected: x.getUint16(t + 10, true)}, t += 12, -1 == ma && __(typeof d.localStorage !== "undefined" ? d.localStorage.gmbCollapsed || 0 : 0), Ui = true;
          }
          break;
        case 76:
          fa = x.getFloat32(t, true), t += 4, Yb();
          break;
        case 80:
          va = x.getUint16(t, true), t += 2, ga = x.getUint32(t, true), t += 4;
          var Q = x.getUint8(t++);
          ya = !!(1 & Q), ka = !!(2 & Q), wa = !!(4 & Q), Ma = !!(8 & Q), Ta = !!(16 & Q), Ca = x.getUint16(t, true), t += 2;
          var G = x.getUint16(t, true);
          t += 2;
          var Y = x.getUint16(t, true);
          t += 2;
          var J = x.getUint16(t, true);
          t += 2;
          var V = x.getUint16(t, true);
          t += 2;
          var X = x.getUint16(t, true);
          t += 2;
          var j = x.getUint16(t, true);
          t += 2;
          var Z = x.getUint16(t, true);
          t += 2;
          var H = 0;
          128 & Q && (H = x.getUint16(t, true), t += 2);
          var q = x.getUint16(t, true);
          t += 2;
          var K = x.getUint16(t, true);
          t += 2;
          var bd = x.getUint16(t, true);
          t += 2;
          var xd = x.getUint16(t, true);
          t += 2;
          var _d = x.getUint16(t, true);
          t += 2;
          var ed = x.getUint32(t, true);
          t += 4, Ai = true, (Ia != G || Ua != Y || Aa != J || Na != V || Fa != X || Pa != j || Da != Z || Ba != H || $a != q || Oa != K || Ra != bd || La != xd || Qa != _d) && (Ia = G, Ua = Y, Aa = J, Na = V, Fa = X, Pa = j, Da = Z, Ba = H, $a = q, 0 == $a && 1 == za && (za = 0, b("#inv360Shot").removeClass("activatedInv")), Oa = K, Ra = bd, La = xd, Qa = _d, 0 == Qa && 3 == za && (za = 0, b("#invFrozenVirus").removeClass("activatedInv")), Zb()), va > 0 ? (b("#startBots").hide(), b("#stopBots").show(), Ga = 1) : b("#stopBots").is(":visible") && strMon(), xb(ed);
          break;
        case 82:
          var Q = x.getUint8(t++);
          Xa = x.getUint16(t, true), t += 2, Wa && Va != !!(1 & Q) && (Va = !!(1 & Q), document.body.style.cursor = Va ? "default" : "not-allowed");
          break;
        case 85:
          var r = x.getUint8(t++), a = x.getUint16(t, true);
          t += 2, Za = !!(1 & r), Ha = [];
          for (var h = 0; a > h; ++h) r = x.getUint8(t++), Ha.push({name: _(), accepted: !!(1 & r), showPos: false, cx: 0, cy: 0, pp: null});
          Ni = true;
          break;
        case 86:
          var a = x.getUint16(t, true);
          t += 2;
          for (var h = 0; a > h && h < Ha.length; ++h) {
            var td = Ha[h], r = x.getUint8(t++);
            td.showPos = !!(1 & r), td.cx = x.getInt32(t, true), t += 4, td.cy = x.getInt32(t, true), t += 4;
          }
          break;
        case 88:
          var id = _(), r = x.getUint8(t++), nd = !!(2 & r), ad = 4 & r ? 1 : 8 & r ? 2 : 0, od = !!(1 & r), rd = 16 & r ? 1 : 32 & r ? 2 : 64 & r ? 3 : 0, sd = !!(128 & r), ld = x.getUint16(t, true), ud = x.getUint32(t + 2, true), fd = x.getUint16(t + 6, true);
          t += 8, swal({title: '<img src="' + (fd ? z_ + ("" + fd) + "_lo.png?u=" + ("" + ($o[fd] || 0)) : "img/userprofile.png") + '" width="64" height="64" style="border-radius:50%;"><br><br><span style="' + (od ? "color:#f22;" : "") + '">' + id + '</span><span style="display:block;min-width: 125px; margin:-10px 0px 15px; font-size:12px; line-height:normal;">' + (sd ? '<br><span style="padding:2px 5px; font-size:10px; background:#999; color:#000; border-radius:10px;">Hidden</span><br>' : "") + (ad ? '<br><span style="color:#f9f;">&#9734;&#9734; Staff &#9734;&#9734;</span>' : "") + (od ? '<br><span style="color:#f22;">&#9734;&#9734; YouTuber &#9734;&#9734;</span>' : "") + (nd ? '<br><span style="color:#ffd700;">&#9734;&#9734; Gold Member &#9734;&#9734;</span>' : "") + (rd ? '<br><span style="color:#4f4;">&#9734;&#9734; <img src="img/navpage/' + (1 == rd ? "super" : 2 == rd ? "legendary" : "hot") + '_donator_ico.png" width="16" height="16"> Donator &#9734;&#9734;</span>' : "") + "</span>", text: '<span style="color:#ffa;"><br>Level: ' + ld + "<br>Rank: " + (ud > 5e4 ? ">50000" : ud) + "<br><br></span>", type: "", customClass: nd ? "swal-title-gold" : "swal-title-white", html: true});
          break;
        case 89:
          var hd = _(), r = x.getUint8(t++), md = !!(1 & r), vd = x.getUint8(t++), kd = x.getUint16(t, true);
          t += 2, hd == "" ? I() : C(hd, false, md, vd, kd);
          break;
        case 91:
          var hd = _(), r = x.getUint8(t++), md = !!(1 & r), wd = x.getUint8(t++), kd = x.getUint16(t, true);
          if (t += 2, hd == "sFX_nuke") {
            var Md = new Audio("sounds/infection_nuke.mp3?v=2");
            Md.volume = .07, Md.play(), b("#canvas").css("animation", "shake 0.5s"), b("#canvas").css("animation-iteration-count", "infinite"), setTimeout(function () {
              b("#canvas").css("animation-iteration-count", "unset");
            }, 7e3);
          } else if (hd == "sFX_iceFrozen") {
            var Md = new Audio("sounds/Ice_barrage_sound.mp3");
            Md.volume = .06, Md.currentTime = 1, Md.play();
          } else if (hd == "sFX_fx_powerup_block.mp3") {
            var Id = new Audio("sounds/fx_powerup_block.mp3");
            Id.volume = .2, Id.currentTime = 1.05, Id.play();
          } else if (hd == "sFX_fx_teleport") {
            var Id = new Audio("sounds/fx_teleport.mp3");
            Id.volume = .3, Id.currentTime = 1.05, Id.play();
          } else if (hd == "sFX_fx_mothercell_blast") {
            var Id = new Audio("sounds/fx_mothercell_blast.mp3");
            Id.volume = .15, Id.currentTime = 1.05, Id.play();
          } else if (hd == "tutorial_infoholderInventory") b("#infoHolderInventory").show(), setTimeout(function () {
            b("#infoHolderInventory").fadeOut("slow");
          }, 2e4); else if (hd == "tutorial_infoholderBots_showIn5Sec") setTimeout(function () {
            b("#infoHolderBots").show(), setMinionUi(true);
          }, 2e4), setTimeout(function () {
            b("#infoHolderBots").fadeOut("slow"), b("#infoHolderFriends").fadeIn("slow");
          }, 85e3), setTimeout(function () {
            b("#infoHolderFriends").fadeOut("slow");
          }, 14e4); else if (hd == "fb_username_choose_succ") $(".alerts").hide(); else {
            b("#infection-text").html(hd), b("#zombieRemain1").attr("onclick", "zombieRemain(1," + wd + "); return false;"), b("#zombieRemain2").attr("onclick", "zombieRemain(2," + wd + "); return false;"), b("#infection_remain_zombie").addClass("visible");
            var Ad = new Audio("sounds/popup.ogg");
            Ad.volume = .5, Ad.play(), timerInfectionModal = setTimeout(function () {
              b("#infection_remain_zombie").removeClass("visible");
            }, 1e3 * kd);
          }
          break;
        case 92:
          var Nd = _(), Fd = x.getUint8(t++);
          console.log("Type Login: " + Fd), $(".alerts .alert .header").text("Choose username for your account"), $(".alerts .alert .body").html('<p>Please enter a username for your account. It must be available (not taken) and less than 20 characters. Username cannot be changed again.</p><div style="display: flex;margin: 1px;padding: 10px;border: 2px solid black;font-size: 12px;"><div><p>Suggested username: <span id="suggestedUsername">' + Nd + '</span></p><div class="checkbox" style="font-size: 12px;"><input type="checkbox" id="fbSuggUsername" onchange="fbUseUsernameSuggested($(this));"><label for="fbSuggUsername"><span></span>Use suggested username</label></div></div><input type="text" placeholder="Username" id="fbUsernameTry"></div>'), 1 == Fd ? $(".alerts .alert .footer .buttons").html('<button class="btn small success" onclick="facebookChooseUsername()">Confirm</button>') : 2 == Fd && $(".alerts .alert .footer .buttons").html('<button class="btn small success" onclick="googleChooseUsername()">Confirm</button>'), $(".alerts").show(), $(".alerts .overlay").fadeIn(200), $(".alerts .alert").removeClass("hide").addClass("show").css({transform: "translate(-50%, -50%) scale(" + zoomScale + ")"});
          break;
        case 93:
          var Pd = _(), Fd = x.getUint8(t++);
          console.log("Type Login: " + Fd), 1 == Fd ? localStorage.setItem("fbAcT", Pd) : 2 == Fd && localStorage.setItem("geAcT", Pd), b("#loginError").fadeOut(), pi && (b("#loginForm").hide(), b("#dashPanel").show(), b("#btnLoginDash").hide());
          break;
        case 94:
          var r = x.getUint8(t++), hd = _(), Dd = x.getUint8(t++), vd = x.getUint8(t++), Bd = 1 & r ? _() : 2 >= vd ? ["Oops...", "Success!", "Info"][vd] : "", Od = 2 & r ? x.getUint8(t++) : 0, Gd = null, Wd = null, Yd = "", Jd = 0;
          if (0 != Dd) switch (Dd) {
            case 1:
              zd();
              break;
            case 2:
              Qd();
              break;
            case 3:
              az(0, 0);
              break;
            case 4:
              Gd = "img/victory_goldencup2.gif", Wd = "200x150", Jd = 1e3;
              break;
            case 5:
              $("#abilityFreeze").addClass("has-ability");
              break;
            case 6:
              $("#abilityCloak").addClass("has-ability");
              break;
            case 7:
              $("#abilityDoubleSpawnSize").addClass("has-ability");
              break;
            case 8:
              $("#abilityDoubleExp").addClass("has-ability");
              break;
            case 9:
              Te = true, az(0, 2);
          }
          if (0 != Od) switch (Od) {
            case 1:
              Yd = "swal-title-red";
              break;
            case 2:
              Yd = "swal-title-green";
              break;
            case 3:
              Yd = "swal-title-orange";
              break;
            case 4:
              Yd = "swal-title-yellow";
          }
          var Vd = {title: Bd, text: hd, type: 0 == vd ? "error" : 1 == vd ? "success" : "", imageUrl: Gd, imageSize: Wd, customClass: Yd};
          Jd ? setTimeout(function () {
            swal(Vd);
          }, Jd) : swal(Vd);
          break;
        case 95:
          var jd = x.getUint8(t++, true);
          if (b("#registerSuccess").finish().hide(), 1 == jd) {
            if ($("#loginForm").fadeOut("slow", function () {}), pi = true, gi = ki, V_ = 0, gi.toLowerCase() != Go.toLowerCase() && zd(), gi.toLowerCase() != Xo.toLowerCase() && Qd(), typeof Storage !== "undefined") {
              if (ki.length > 1 && (localStorage.setItem("username", ki), localStorage.setItem("password", v_(md5(ki)))), null != d.localStorage.settings) {
                var Zd = JSON.parse(d.localStorage.settings);
                typeof Zd.user !== "undefined" && Zd.user.toLowerCase() == gi.toLowerCase() && (typeof Zd.skinId !== "undefined" && 0 != Zd.skinId && Rd(Zd.skinId), typeof Zd.wearablesSelected !== "undefined" && 0 != Zd.wearablesSelected.length && Xd(Zd.wearablesSelected));
              }
              wx();
            }
            gi.toLowerCase() != wo.toLowerCase() && b("#friendDialogMessage").text("Loading..."), Ur && (xe && (clearInterval(xe), xe = 0), xe = setInterval(Ud, 28e3), gi.toLowerCase() != wo.toLowerCase() ? Ud() : (_e && (clearInterval(_e), _e = 0), _e = setTimeout(function () {
              Ur && pi && Date.now() - ee > 5e3 && Ud();
            }, 5e3))), Fr && Sb(57), px(Lr), $("#loginError").finish().hide();
          } else 0 == jd ? ($("#loginError p").replaceWith("<p>Incorrect login <br> Wrong username or password.</p>"), $("#loginError").fadeIn()) : 2 == jd ? !pi && Date.now() < V_ ? X_ = setTimeout(function () {
            Yx(ki, wi);
          }, 500) : ($("#loginError p").replaceWith("<p>Your account is already logged in... <br>Please wait a couple seconds. Make sure you're not logged in on another tab.</p>"), $("#loginError").finish().fadeIn(), b("#sent").removeAttr("disabled")) : 13 == jd ? ($("#loginError p").replaceWith("<p>Failed login <br> Login Server is down. Please try again later.</p>"), $("#loginError").fadeIn()) : 14 == jd && ($("#loginError p").replaceWith("<p>Failed login</p>"), $("#loginError").fadeIn());
          if (3 == jd && ($("#loginError p").replaceWith("<p>Username too long... <br> Maximum is 20 characters</p>"), $("#loginError").fadeIn()), 4 == jd && ($("#loginError p").replaceWith("<p>Something went wrong with the encryption of your password. Please try again</p>"), $("#loginError").fadeIn()), 5 == jd && ($("#loginError p").replaceWith("<p>Email too long... <br> Maximum is 40 characters</p>"), $("#loginError").fadeIn()), 6 == jd && ($("#loginError p").replaceWith("<p>Wow that's a short username!<br> Please type a longer username</p>"), $("#loginError").fadeIn()), 7 == jd && ($("#loginError p").replaceWith("<p>Please enter a password<p>"), $("#loginError").fadeIn()), 8 == jd && ($("#loginError p").replaceWith("<p>Wow, that's a short email!<br> Did you forget to type an email?</p>"), $("#loginError").fadeIn()), 11 == jd && ($("#loginError p").replaceWith("<p>Username or Email contains invalid characters! Please try a different username or email.</p>"), $("#loginError").fadeIn()), 9 == jd) {
            b("#loginError").finish().hide(), b('a[href="#home"]').trigger("click"), b("#registerSuccess").fadeIn("slow").delay(1e4).fadeOut("slow"), b("#register-form").hide(), b("#login-form").show(), b("#password").val(""), b("#email").val("");
            var Hd = $("#regUsername").val();
            b("#username").val(Hd);
          }
          10 == jd && ($("#loginError p").replaceWith("<p>Username or email already exists.<br> Please try a different username or email</p>"), $("#loginError").fadeIn()), 12 == jd && ($("#loginError p").replaceWith("<p>Are you a robot?<br> You did not verify the captcha challenge. Please verify 'Im not a robot'</p>"), $("#loginError").fadeIn());
          break;
        case 96:
          var r = x.getUint8(t++), qd = 128 & r ? x.getUint8(t++) : 0;
          ze = !(1 & r), je = !!(32 & r), Ze = !!(64 & r), He = !!(1 & qd), qe = !!(2 & qd), Ke = !!(4 & qd), dt = !!(8 & qd), bt = !!(16 & qd);
          var Kd = !!(2 & r), db = !!(4 & r), bb = !!(8 & r), eb = !!(16 & r), ib = x.getUint32(t, true);
          t += 4;
          var nb = x.getUint32(t, true);
          t += 4;
          var rb = x.getUint32(t, true);
          t += 4, Oe = x.getUint8(t, true), t++, Re = x.getUint8(t, true), t++, Re > 0 ? b("#contextModerate").show() : b("#contextModerate").hide(), nb > 1e6 ? b(".progress-bar-coins").css("color", "#98ff98") : nb > 1e7 ? b(".progress-bar-coins").css("color", "#83ebfb") : b(".progress-bar-coins").css("color", "#fff");
          var sb = x.getUint16(t, true);
          t += 2;
          var cb = x.getUint32(t, true);
          t += 4, yi = x.getUint32(t, true), t += 4;
          var lb = x.getUint32(t, true);
          t += 4;
          for (var ub, hd = ""; 0 != (ub = x.getUint16(t, true));) t += 2, hd += String.fromCharCode(ub);
          t += 2, It = true, gi = hd, Ex(), Wi = true, Rx(), 2 == Oe ? ($(".username").hasClass("goldBar") || ($(".username").addClass("goldBar"), setTimeout(function () {
            $(".username").hasClass("goldBar") && !$(".username").hasClass("shine") && ($(".username").addClass("shine"), setTimeout(function () {
              $(".username").removeClass("shine");
            }, 2e3));
          }, 600)), $(".memberType").html('<p style="margin: 0 auto;text-align: center;color: #fffe12; text-shadow: 0px 0px 10px #c7920d; /*background: transparent url(img/particles.gif);*/">GOLD MEMBER</p>')) : ($(".username").removeClass("goldBar"), $(".memberType").html('<a href="member.php?camp=3" target="_blank"><p style="margin: 0 auto;text-align: center;color: white; font-size: 12px; font-weight: bold; text-shadow: 0px 0px 10px #2196F3;">NOT A GOLD MEMBER</p></a>')), b("#visibilityStatus").show(), b("#cVisibilityStatus").prop("disabled", false), b("#cVisibilityStatus2").prop("disabled", false), setFriendlistOnline(ze, true), b("#cGoldName").prop("disabled", 2 != Oe), b("#cGoldName2").prop("disabled", 2 != Oe), b("#cGoldCrownChat").prop("disabled", 2 != Oe), b("#cGoldCrownChat2").prop("disabled", 2 != Oe), b("#cMinionSkinsStatus").prop("disabled", 2 != Oe), b("#cVideoAds").prop("disabled", 2 != Oe), 2 == Oe && (setGoldNickname(Ge), setGoldCrownChat(We), setMinionSkins(Je), setVideoAds(Ve)), b('#roleSettings input[type="checkbox"]').prop("disabled", true), b("#roleSettings .role-setting").hide(), Re > 0 || je || Ze || He || qe || Ke || dt || bt ? (b("#roleSettings").show(), Re > 0 && (b("#cModeratorIconChat").prop("disabled", false).parents("div.role-setting").show(), setModeratorIconChat(Xe)), je && (b("#cIconDRank").prop("disabled", false).parents("div.role-setting").show(), setIconDRank(xt)), Ze && (b("#cIconYT").prop("disabled", false).parents("div.role-setting").show(), setIconYT(_t)), He && (b("#cGreenName").prop("disabled", false).parents("div.role-setting").show(), setGreenName(et)), qe && (b("#cBlueName").prop("disabled", false).parents("div.role-setting").show(), setBlueName(tt)), Ke && (b("#cOrangeName").prop("disabled", false).parents("div.role-setting").show(), setOrangeName(it)), dt && (b("#cRedName").prop("disabled", false).parents("div.role-setting").show(), setRedName(nt)), bt && (b("#cBlackName").prop("disabled", false).parents("div.role-setting").show(), setBlackName(at))) : b("#roleSettings").hide(), $(".username").replaceWith("<p class='username'>" + gi + "</p>"), $("#coinsUserId2").val(yi), $("#userCoins2").text(gi), $("#referral").val(window.location.protocol + "//agma.io/?ref=" + lb), console.log("userLoggedIn"), Ee || (Math.random() < .1 && setTimeout(function () {
            $(".bs-example-modal-lg5").modal("show");
          }, 2500), Ee = true), px(Lr), cb > 5e4 && (cb = ">50000"), $(".timePlayed span").text("Time played: " + e(rb)), $(".ranking span").text("Your rank: " + cb), xb(nb), _b(sb, ib), $("#dashPanel").fadeIn("slow"), $("#loginForm").hide(), $("#dashTab").show(), $("#btnLoginDash").hide(), $("#loginRegisterTab").hide(), Kd ? $("#abilityFreeze").addClass("has-ability") : $("#abilityFreeze").removeClass("has-ability"), db ? $("#abilityCloak").addClass("has-ability") : $("#abilityCloak").removeClass("has-ability"), bb ? $("#abilityDoubleSpawnSize").addClass("has-ability") : $("#abilityDoubleSpawnSize").removeClass("has-ability"), eb ? $("#abilityDoubleExp").addClass("has-ability") : $("#abilityDoubleExp").removeClass("has-ability"), It = false;
          break;
        case 97:
          var fb = x.getUint8(t, true);
          t++;
          for (var ub, hd = ""; 0 != (ub = x.getUint16(t, true));) hd += String.fromCharCode(ub), t += 2;
          t += 2;
          for (var hb, mb = ""; 0 != (hb = x.getUint16(t, true));) mb += String.fromCharCode(hb), t += 2;
          t += 2;
          var pb = x.getUint8(t++, true), vb = x.getUint16(t, true);
          t += 2;
          for (var gb = x.getUint8(t++), yb = [], a = 0; gb > a; a++) yb.push({wearId: x.getUint16(t, true), wearArea: x.getUint8(t + 2)}), t += 3;
          switch ($("#megaphone_name").text(mb).css("color", pb > 1 ? sc[pb] : "").removeClass("gold black"), 1 == pb ? b("#megaphone_name").addClass("gold") : 6 == pb && b("#megaphone_name").addClass("black"), $("#megaphone_text").text(hd), fb) {
            case 1:
              $("#skinMegaWidget").css("background-color", "#25a599");
              break;
            case 2:
              $("#skinMegaWidget").css("background-color", "#ff7043");
              break;
            case 3:
              $("#skinMegaWidget").css("background-color", "#ab47bc");
              break;
            case 4:
              $("#skinMegaWidget").css("background-color", "#ec407a");
              break;
            case 5:
              $("#skinMegaWidget").css("background-color", "#8ac249");
              break;
            case 6:
              $("#skinMegaWidget").css("background-color", "rgb(6, 187, 211)");
              break;
            case 7:
              $("#skinMegaWidget").css("background-color", "rgb(239, 84, 85)");
          }
          0 != vb ? b("#skinMegaWidget").css("background-image", "url('" + z_ + ("" + vb) + "_lo.png?u=" + ($o[vb] || 0) + "')") : b("#skinMegaWidget").css("background-image", "none");
          for (var a = 1; 5 >= a; a++) if (a <= yb.length) {
            var kb = yb[a - 1], wb = rc[kb.wearArea] || "";
            b("#wearMegaWidget" + a).css("background-image", "url('" + R_ + ("" + kb.wearId) + "_lo.png?v=" + ("" + L_) + "')").removeClass("center top bottom left right max".replace(wb, "")).addClass(wb).show();
          } else b("#wearMegaWidget" + a).css("background-image", "none").hide();
          re && (clearTimeout(re), re = 0), $("#megaholder").stop(true, false).show(0), $("#megaphone").animate({"margin-right": "10px"}, function () {
            re = setTimeout(function () {
              $("#megaphone").animate({"margin-right": "-350px"}), $("#megaholder").delay(900).hide(0);
            }, 3e4);
          });
          break;
        case 98:
          var sb = x.getUint16(t, true);
          t += 2;
          var ib = x.getUint32(t, true);
          t += 4, pi && _b(sb, ib);
          break;
        case 99:
          tb(x, t);
          break;
        case 100:
          var Mb = [], Tb = 0, Cb = 0, Ub = 0, a = x.getUint16(t, true);
          t += 2;
          for (var h = 0; a > h; ++h) {
            var r = x.getUint8(t++);
            Mb.push({name: _(), accepted: !!(1 & r), isRequester: !!(2 & r), loginStatus: !!(4 & r), goldMember: !!(16 & r), serverName: 4 & r ? _() : ""});
            var ub = Mb[h];
            ub.accepted || !ub.isRequester ? (ub.loginStatus && Tb++, Cb++) : Ub++;
          }
          ee = Date.now();
          var Ab = Mb.length != vo.length || go != pi || gi.toLowerCase() != wo.toLowerCase();
          if (!Ab) for (var h = 0; h < vo.length; ++h) {
            var Nb = vo[h], Fb = Mb[h];
            if (Nb.name != Fb.name || Nb.accepted != Fb.accepted || Nb.isRequester != Fb.isRequester || Nb.loginStatus != Fb.loginStatus || Nb.goldMember != Fb.goldMember || Nb.serverName != Fb.serverName) {
              Ab = true;
              break;
            }
          }
          Ab && (vo = Mb, go = pi, wo = gi, So = Tb, Mo = Cb, To = Ub, Cd());
          break;
        case 101:
          window.AG && window.AG.showCaptcha && (window.AG.showCaptcha("bt"), az());
          break;
        case 103:
          var Pb = x.getUint16(t, true);
          t += 2, b("#refCount").text(Pb);
          break;
        case 105:
          Jx(), Vx(true);
          break;
        case 106:
          Vs = true, Y_ && (clearTimeout(Y_), Y_ = 0);
          var m = +new Date, Db = true;
          if (typeof d.localStorage === "undefined") Db = false; else if (null != d.localStorage.reloadTime) {
            var p = JSON.parse(d.localStorage.reloadTime) + 36e5;
            p > m && (Db = false);
          }
          if (Db) {
            d.localStorage.reloadTime = JSON.stringify(m);
            try {
              window.location.reload(true);
            } catch (a) {}
          }
          break;
        case 107:
          Vs = true, Y_ && (clearTimeout(Y_), Y_ = 0);
          break;
        case 108:
          for (var r = x.getUint8(t++), a = 1 & r ? x.getUint8(t++) : 1, ub = [], h = 0; a > h; ++h) {
            var Bb = x.getUint32(t, true);
            t += 4;
            var $b = x.getUint32(t, true);
            if (t += 4, Bb !== $b) {
              ub = null;
              break;
            }
            ub.push(Bb);
          }
          typeof localStorage !== "undefined" && ub && ub.length > 0 && (localStorage.cdbi4 = a > 1 || ub[0] ? v_(1 == a ? "" + ub[0] : JSON.stringify(ub)) : 0, localStorage.cdbi3 = 0, localStorage.cdbi2 = 0, localStorage.cdbi = 0);
          break;
        case 109:
          var r = x.getUint8(t++), Eb = Oi;
          2 & r && (Eb = md5((((x.getUint32(t, true) ^ zi) + 4294967296) % 4294967296).toString(36)), t += 4);
          for (var a = 1 & r ? x.getUint8(t++) : 1, zb = [], h = 0; a > h; ++h) zb.push((((x.getUint32(t, true) ^ zi) + 4294967296) % 4294967296).toString(36)), t += 4;
          zb = md5(zb.length > 1 ? JSON.stringify(zb) : zb[0]), S(Eb, zb, _());
          break;
        case 110:
          var Ob = 0, a = x.getUint16(t, true);
          if (t += 2, a > 0) {
            for (var Rb = [], h = 0; a > h; ++h) {
              var r = x.getUint8(t++), Lb = x.getUint16(t, true);
              t += 2, Rb.push({id: Lb, name: _(), description: _(), address: _(), location: x.getUint8(t++), gamemode: Sd(x.getUint8(t++)), players: x.getUint16(t, true), maxPlayers: x.getUint16(t + 2, true), isCurrent: !!(1 & r)}), t += 4, Rb[h].isCurrent && (Ob = Rb[h].location, Td(Rb[h].gamemode), Io = Lb);
            }
            if (!Po) {
              var Ab = Rb.length != Co.length;
              if (!Ab) for (var h = 0; h < Co.length; ++h) {
                var Qb = Co[h], Gb = Rb[h];
                if (Qb.id != Gb.id || Qb.name != Gb.name || Qb.description != Gb.description || Qb.address != Gb.address || Qb.location != Gb.location || Qb.gamemode != Gb.gamemode || Qb.maxPlayers != Gb.maxPlayers) {
                  Ab = true;
                  break;
                }
              }
              Po = Ab;
            }
            Co = Rb, null != d.localStorage.gameservers && (Ob = void 0), d.localStorage.gameservers = JSON.stringify(Co), d.localStorage.serverlistVersion = w_, Po && ($d(Ob), Po = false, px(Lr)), Fo = [];
          }
          break;
        case 111:
          var a = x.getUint16(t, true);
          t += 2;
          for (var h = 0; a > h; ++h) {
            var Lb = x.getUint16(t, true), Jb = x.getUint16(t + 2, true), Vb = x.getUint16(t + 4, true);
            t += 6, b("#serverPlayers" + Lb).text(Jb + "/" + Vb);
          }
          break;
        case 114:
          var a = x.getUint16(t, true);
          if (t += 2, a > 0) {
            Wo = [];
            for (var h = 0; a > h; ++h) {
              var r = x.getUint8(t++), Xb = x.getUint16(t, true), jb = x.getUint8(t + 2);
              t += 3, Wo.push({id: Xb, type: jb, name: _(), area: x.getUint8(t), zIndex: x.getUint16(t + 1, true), group: x.getUint16(t + 3, true), levelRequired: 0, vipLevelRequired: 0, price: 0, approved: !!(2 & r), pendingApproval: !!(4 & r), enabled: !!(1 & r)}), t += 5, 1 == jb ? (Wo[Wo.length - 1].levelRequired = x.getUint16(t, true), t += 2) : 3 == jb ? Wo[Wo.length - 1].vipLevelRequired = x.getUint8(t++) : 2 == jb && (Wo[Wo.length - 1].price = x.getUint32(t, true), t += 4);
            }
            Ld(), Yo = false, Xo = gi;
          }
          break;
        case 115:
          var a = x.getUint16(t, true);
          if (t += 2, a > 0) {
            Oo = [];
            for (var h = 0; a > h; ++h) {
              var r = x.getUint8(t++), Xb = x.getUint16(t, true), jb = x.getUint8(t + 2), Hb = x.getUint32(t + 3, true);
              t += 7, Oo.push({id: Xb, type: jb, name: _(), levelRequired: 0, vipLevelRequired: 0, price: 0, approved: !!(2 & r), pendingApproval: 0, userAssigned: !!(8 & r), sharedPublic: !!(16 & r), changedUnix: Hb, changedDaysAgo: 0, changeAllowed: !!(32 & r), popularity: 0, enabled: !!(1 & r)}), 1 == jb ? (Oo[Oo.length - 1].levelRequired = x.getUint16(t, true), t += 2) : 3 == jb ? Oo[Oo.length - 1].vipLevelRequired = x.getUint8(t++) : 2 == jb ? (Oo[Oo.length - 1].price = x.getUint32(t, true), t += 4) : 4 == jb && (8 & r ? (Oo[Oo.length - 1].pendingApproval = x.getUint8(t), Oo[Oo.length - 1].changedDaysAgo = x.getUint16(t + 1, true), t += 3) : 16 & r && 1 & r && (Oo[Oo.length - 1].popularity = x.getUint16(t, true), t += 2)), $o[Xb] = Hb;
            }
            var m = x.getUint32(t, true);
            t += 4, m > 0 && (zo = m), Ed(), Ro = false, Go = gi;
          }
          break;
        case 116:
          var a = x.getUint16(t, true);
          if (t += 2, a > 0) {
            $o = {};
            for (var h = 0; a > h; ++h) {
              var Xb = x.getUint16(t, true);
              $o[Xb] = x.getUint32(t + 2, true), t += 6;
            }
            a = x.getUint16(t, true), t += 2, Eo = {};
            for (var h = 0; a > h; ++h) Eo[x.getUint16(t, true)] = true, t += 2;
          }
          break;
        case 130:
          var qb = x.getUint16(t, true);
          t += 2, ue = false, ks && b("#ping").html('<span style="color:' + (qb > 150 ? "#f44" : qb > 100 ? "#fa4" : "#2d2") + ';">' + qb + '<span style="font-size:12px;">ms</span></span>');
          break;
        case 244:
          if (1 == x.byteLength) {
            $i = true, Hx(), showPartyInvite(Le), setPartyAnimations(Qe), setAutoFeedEnabled(Ye);
            var Kb = +new Date;
            Er = Kb, V_ = Kb + 6e3, Yx(), te && (clearTimeout(te), te = 0), se && (clearInterval(se), se = 0), se = setInterval(Rx, 1e4), Ro && zd(), Yo && Qd(), fx(), pd();
          }
      }
    }
    function Sd(d) {
      var b = oc[d];
      return b ? b : "";
    }
    function Md(d) {
      for (var b = 0; b < Co.length; ++b) {
        var x = Co[b];
        if (x.address == d) return x;
      }
      return null;
    }
    function Td(d) {
      d != Sd(17) && b(".agma-logo").hasClass("agma_corona-simulator") && b(".agma-logo").removeClass("agma_corona-simulator"), d == Sd(15) ? b(".agma-logo").attr("src", "img/agma_royale_lo.png") : d == Sd(17) ? (b(".agma-logo").attr("src", "img/coronavirus_simulator_game.png"), b(".agma-logo").addClass("agma_corona-simulator")) : b(".agma-logo").attr("src", "img/agmalogo_a.png");
    }
    function Cd() {
      var d = b("#requestList").css("display") !== "none" ? 1 : 0, x = {friendlist: vo, activeTab: d, loggedIn: go};
      if (1 == d) var _ = b("#requestList"); else var _ = b("#friendList");
      scrollDiv = _.length > 0 ? _[0].id : "", jo++;
      var e = jo;
      b.post("friendlist.php", {data: JSON.stringify(x)}, function (d) {
        if (e > Zo) {
          var x = scrollDiv ? b("#" + scrollDiv).scrollTop() : 0;
          document.getElementById("phpFriendlist").innerHTML = d, b("#friendsLoggedInAmt").text(So), b("#friendsTotalAmt").text(" / " + Mo), b("#friendsRequestsAmt").text(To > 0 ? To : "");
          var _ = b(b("#friendDialog li.active a").attr("href"));
          _ && !_.hasClass("active") && (b("#friendDialog div.friend-list").removeClass("active"), _.addClass("active")), scrollDiv && b("#" + scrollDiv).scrollTop(x), Zo = e;
        }
      }, "html");
      for (var t = false, i = 0; i < vo.length; ++i) {
        var _ = vo[i];
        if (!_.accepted && _.isRequester) {
          t = true;
          break;
        }
      }
      t ? b("#friendRequestsBell").addClass("red") : b("#friendRequestsBell").removeClass("red");
    }
    function Id() {
      Ur ? (document.getElementById("friendAddInput").blur(), Ur = false, xe && (clearInterval(xe), xe = 0)) : (Ur = true, xe || ((Date.now() - ee > 5e3 || go != pi || gi.toLowerCase() != wo.toLowerCase()) && Ud(), xe = setInterval(Ud, 28e3)));
    }
    function Ud() {
      wb() && pi ? Sb(80) : Ad();
    }
    function Ad() {
      0 != vo.length || go || wo != "" ? (vo = [], go = false, wo = "", So = 0, Mo = 0, To = 0, Cd()) : b("#friendDialogMessage").text("Login to see your friendlist");
    }
    function Nd() {
      var d = (Cs && $t ? $t.width + 20 : 10, b("#friendDialog"));
      if (Ur) {
        var x = d.outerHeight(), _ = d.outerWidth(), e = d.offset(), t = e.top, i = e.left;
        Math.max(Math.min(t, oi - x), 0), ai - Math.max(Math.min(i, ai - _), 0) - _;
      } else {
        b("#btnFriends").hasClass("touch-device") ? 28 : 40;
      }
    }
    function Fd(d) {
      function x(d) {
        Ur ? t.css({right: ai - (d.pageX - n) + "px", top: d.pageY - a + "px"}) : e();
      }
      function _(d) {
        0 == d.button && e();
      }
      function e() {
        t.removeClass("actives"), document.body.removeEventListener("mousemove", x, false), document.body.removeEventListener("mouseup", _, false), document.body.removeEventListener("mouseleave", e, false);
      }
      var t = b("#friendDialog");
      if (0 == d.button && !t.hasClass("actives")) {
        var i = t.offset(), n = d.pageX - i.left - t.width(), a = d.pageY - i.top;
        t.addClass("actives"), document.body.addEventListener("mousemove", x, false), document.body.addEventListener("mouseup", _, false), document.body.addEventListener("mouseleave", e, false);
      }
    }
    function Pd(d) {
      function x(d) {
        Ur ? (yo = Math.max(Math.min(o + d.clientX - n, ai), 200), ko = Math.max(Math.min(r + d.clientY - a, oi), 240), t.css({width: yo + "px", height: ko + "px", right: s - (yo - o) + "px"})) : e();
      }
      function _(d) {
        0 == d.button && e();
      }
      function e() {
        t.removeClass("actives"), document.body.removeEventListener("mousemove", x, false), document.body.removeEventListener("mouseup", _, false), document.body.removeEventListener("mouseleave", e, false);
      }
      var t = b("#friendDialog");
      if (0 == d.button && !t.hasClass("actives")) {
        var i = window.getComputedStyle(document.getElementById("friendDialog")), n = d.clientX, a = d.clientY, o = parseInt(i.width), r = parseInt(i.height), s = parseInt(i.right);
        t.addClass("actives"), document.body.addEventListener("mousemove", x, false), document.body.addEventListener("mouseup", _, false), document.body.addEventListener("mouseleave", e, false);
      }
    }
    function Dd() {
      Ar ? (b("#settingsDialog").stop(true, false).removeClass("shown").delay(200).hide(0), Ar = false) : (b("#settingsDialog").stop(true, false).show(0).addClass("shown"), Ar = true);
    }
    function Bd() {
      Ar && Dd();
    }
    function $d(d) {
      var x = typeof d !== "undefined", _ = x ? d : b("#tabAS").is(":checked") ? 2 : b("#tabNA").is(":checked") ? 1 : 0, _ = 0;
      x ? _ = d : b(".serverlist:visible").attr("serverlist") == "eu" ? _ = x = 0 : b(".serverlist:visible").attr("serverlist") == "na" ? _ = x = 1 : b(".serverlist:visible").attr("serverlist") == "na" && (_ = x = 2);
      var e = {gameservers: Co, activeTab: _};
      Ho++;
      var t = Ho;
      b.post("gameservers.php", {data: JSON.stringify(e)}, function (d) {
        if (t > qo) {
          var x = b(".regions .active");
          x.length > 0 ? x[0].id : "";
          document.getElementById("serv").innerHTML = d, qo = t;
          var _ = Md(g_);
          _ && ($(".serversList").removeClass("active"), $("#serverRow" + _.id).addClass("active")), b("[region]").click(function () {
            if (!$(this).hasClass("active")) {
              $("[region].active").removeClass("active"), $(this).addClass("active"), $("[serverlist]").hide();
              var d = $(this).attr("region");
              $("[serverlist=" + d + "]").css("display", "block");
            }
          });
        }
      }, "html");
    }
    function Ed() {
      var d = b("#skinsCustomTab").hasClass("active") ? 4 : b("#skinsVIPTab").hasClass("active") ? 3 : b("#skinsBuyTab").hasClass("active") ? 2 : b("#skinsLevelTab").hasClass("active") ? 1 : 0, x = {skins: Oo, activeTab: d, currentSkin: _s, customSkinPrice: zo, supportFileDragAndDrop: U_};
      Ko++;
      var _ = Ko;
      b.post("skins.php", {data: JSON.stringify(x)}, function (d) {
        if (_ > dr) {
          if (document.getElementById("phpSkins").innerHTML = d, typeof Storage !== "undefined") {
            !localStorage.fbSkin && b("#skinUseBtn73").text("Facebook Like").attr("onclick", "fbLikeSkin();"), !localStorage.ytSkin && b("#skinUseBtn71").text("YouTube Subscribe").attr("onclick", "YouTubeSubSkin(71);");
            for (var x = 0; x < F_.length; x++) {
              var e = F_[x];
              !localStorage["ytSkin" + e.s] && b("#skinUseBtn" + e.s).text("YouTube Subscribe").attr("onclick", "YouTubeSubSkin(" + e.s + ", '" + e.c + "');"), b("#skinContainer" + e.s).append('<a href="https://www.youtube.com/channel/' + e.c + '" target="_blank" title="YouTuber Skin"><div class="skin-tag skin-tag-yt"></div>' + (e.cc ? '<div title="Agma.io Content Creator" class="skin-tag skin-tag-star"></div>' : "") + "</a>");
            }
          }
          var t = b(b("#menugold li.active a").attr("href"));
          t && !t.hasClass("in active") && (b("#skinBrowser div.tab-pane").removeClass("in active"), t.addClass("in active")), Lo = true, dr = _, Qo && (Qo(), Qo = null);
        }
      }, "html");
    }
    function zd() {
      Ro = true, Lo = false, Nr && b("#skinsTab").hasClass("active") && Od();
    }
    function Od() {
      wb() ? Sb(115) : Oo.length > 0 && (Oo = [], Ed());
    }
    function Rd(d) {
      _s != d && (0 != _s && (b("#skinContainer" + _s).removeClass("selected"), b("#skinUseBtn" + _s).removeClass("btn-default").addClass("btn-primary").text("Use")), _s = d, 0 != _s && (b("#skinContainer" + _s).addClass("selected"), b("#skinUseBtn" + _s).removeClass("btn-primary").addClass("btn-default").text("Cancel")), Zd());
    }
    function Ld() {
      for (var d = [], x = 0; x < es.length; x++) d.push(es[x].wearId);
      var _ = {wearables: Wo, currentWearables: d, version: L_};
      br++;
      var e = br;
      b.post("wearables.php", {data: JSON.stringify(_)}, function (d) {
        e > xr && (document.getElementById("phpWearables").innerHTML = d, resetMasterTooltips("#phpWearables"), Jo = true, xr = e, Vo && (Vo(), Vo = null));
      }, "html");
    }
    function Qd() {
      Yo = true, Jo = false, Nr && b("#wearablesTab").hasClass("active") && Gd();
    }
    function Gd() {
      wb() ? Sb(114) : Wo.length > 0 && (Wo = [], Ld());
    }
    function Wd(d, x, _, e, t) {
      t = !!t;
      for (var i = 0; i < es.length; i++) if (es[i].wearId == d) {
        es.splice(i, 1);
        break;
      }
      b("#wearableContainer" + d).addClass("selected"), b("#wearableUseBtn" + d).removeClass("btn-primary").addClass("btn-default").text("Cancel"), b("#wearableTryBtn" + d).removeClass("btn-primary").addClass("btn-default").text("Cancel");
      for (var n = 0, i = es.length - 1; i >= 0; i--) if (es[i].zIndex <= _) {
        n = i + 1;
        break;
      }
      es.splice(n, 0, {wearId: d, wearArea: x, zIndex: _, wearGroup: e, wearTry: t}), Zd();
    }
    function Yd(d) {
      for (var x = 0; x < es.length; x++) if (es[x].wearId == d) {
        b("#wearableContainer" + d).removeClass("selected"), b("#wearableUseBtn" + d).removeClass("btn-default").addClass("btn-primary").text("Use"), b("#wearableTryBtn" + d).removeClass("btn-default").addClass("btn-primary").text("Try"), es.splice(x, 1), Zd();
        break;
      }
    }
    function Jd(d) {
      for (var b = es.length, x = 0; b > x; x++) es[x].wearGroup == d && (Yd(es[x].wearId), es.length < b && (b--, x--));
    }
    function Vd() {
      for (; es.length > 0;) Yd(es[0].wearId);
    }
    function Xd(d) {
      Vd();
      for (var b = 0; b < d.length; b++) Wd(d[b].wearId, d[b].wearArea, d[b].zIndex, d[b].wearGroup, d[b].wearTry);
    }
    function jd() {
      for (var d = es.length, b = 0; d > b; b++) es[b].wearTry && (Yd(es[b].wearId), es.length < d && (d--, b--));
    }
    function Zd() {
      0 != _s ? b(".cell-example .skin-example").css("background-image", "url('" + z_ + ("" + _s) + "_lo.png?u=" + ($o[_s] || 0) + "')") : (b(".cell-example .skin-example").css("background-image", "none"), b("#skinExampleMenu").css("background-image", "url('" + z_ + "0_lo.png?u=0')"));
      for (var d = 1; 5 >= d; d++) if (d <= es.length) {
        var x = es[d - 1], _ = rc[x.wearArea] || "";
        b(".cell-example .wear-example-" + d).css("background-image", "url('" + R_ + ("" + x.wearId) + "_lo.png?v=" + ("" + L_) + "')").removeClass("center top bottom left right max".replace(_, "")).addClass(_).show();
      } else b(".cell-example .wear-example-" + d).css("background-image", "none").hide();
    }
    function Hd(d) {
      var x = bb(d);
      if (x.skinId >= 0) b("#cellExampleShop div").addClass("faded"), b("#skinExampleShop").removeClass("faded"), document.body.style.cursor = "pointer"; else if (x.wearId > 0) {
        for (var _ = 0; _ < es.length; _++) if (es[_].wearId == x.wearId) {
          b("#cellExampleShop div").addClass("faded"), b("#wearExampleShop" + (_ + 1)).removeClass("faded"), document.body.style.cursor = "pointer";
          break;
        }
      } else qd();
    }
    function qd() {
      b("#cellExampleShop div").removeClass("faded"), document.body.style.cursor = "default";
    }
    function Kd(d) {
      var b = bb(d);
      b.skinId >= 0 ? showSkin(b.skinId, false) : b.wearId > 0 && showWearable(b.wearId, false), d.stopPropagation();
    }
    function db(d) {
      if (2 == d.button) {
        var b = bb(d);
        (b.skinId > 0 || b.wearId > 0) && (b.skinId > 0 ? Rd(0) : Yd(b.wearId), Fx(), Hd(d));
      }
      d.stopPropagation();
    }
    function bb(d) {
      var x = 204, _ = b("#cellExampleShop").offset(), e = ~~(d.pageX - _.left), t = ~~(d.pageY - _.top);
      es.length > 0 && (!Zt && (Zt = document.createElement("canvas"), Ht = Zt.getContext("2d")), Zt.width = Zt.height = x);
      for (var i = es.length; i >= 0; i--) if (0 != i) {
        var n = es[i - 1], a = tc["W" + n.wearId + "_lo"];
        if (!a && (m_(n.wearId), a = tc["W" + n.wearId + "_lo"]), a && a.complete && 0 != a.width) {
          var o = n.wearArea, r = 5 == o ? x : ~~(.6 * x);
          Ht.drawImage(a, ~~(.5 * x - (3 == o || 5 == o ? 2.5 : 4 == o ? .5 : 1.5) * x * .2), ~~(.5 * x - (1 == o || 5 == o ? 2.5 : 2 == o ? .5 : 1.5) * x * .2), r, r);
          for (var s = Ht.getImageData(e - 2, t - 2, 5, 5).data, c = 0; 25 > c; c++) if (s[4 * c + 3] > 24) return {skinId: -1, wearId: n.wearId};
        }
      } else {
        var l = ~~(.5 * x) - e, u = ~~(.5 * x) - t, f = ~~(.2 * x) + 2;
        if (f * f >= l * l + u * u) return {skinId: _s, wearId: -1};
      }
      return {skinId: -1, wearId: -1};
    }
    function xb(d) {
      if (Si.coins != d) {
        var x = ("" + d).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        b("#coinsDash").text(x), b(".progress-bar-coins").text(x), Si.coins = d;
      }
    }
    function _b(d, b) {
      if (Si.level != d || Si.exp != b) {
        var x = 0 >= d ? 0 : Math.min(100 * b / (1e3 * d), 100);
        if ($(".progress-bar").css("width", "" + x + "%"), $(".exp-bar").text(~~x + "%"), Si.level != d) {
          var _ = $("#level,#level2");
          _.text(d), zd(), Qd();
        }
        Si.level = d, Si.exp = b;
      }
    }
    function eb() {
      if (b("#level2").is(":visible")) {
        var d = p_("Zm9yY2UtaGlkZQ==");
        b("#level2").addClass(d), !b("#level2").is(":visible") && (Qn = true), b("#level2").removeClass(d);
      }
    }
    function tb(d, x) {
      function _() {
        for (var b, _ = ""; 0 != (b = d.getUint16(x, true));) x += 2, _ += String.fromCharCode(b);
        return x += 2, _;
      }
      var e = d.getUint8(x++), t = d.getUint8(x++), i = !!(4 & e), n = 0, a = Oi, o = Oi;
      if (i && (n = d.getUint32(x, true), x += 4, 128 & e && (a = md5((((d.getUint32(x, true) ^ zi) + 4294967296) % 4294967296).toString(36)), x += 4), !(2 & e))) {
        for (var r = 16 & t ? d.getUint8(x++) : 1, s = [], c = 0; r > c; c++) s.push((((d.getUint32(x, true) ^ zi) + 4294967296) % 4294967296).toString(36)), x += 4;
        o = md5(s.length > 1 ? JSON.stringify(s) : s[0]);
      }
      for (var c = d.getUint8(x++), l = d.getUint8(x++), r = d.getUint8(x++), u = (c << 16 | l << 8 | r).toString(16); u.length < 6;) u = "0" + u;
      u = "#" + u;
      var f = _(), h = 2 & e ? _() : "", m = null;
      if (cn.push({selectable: i, sid: Io, pid: n, uid: a, iid: o, name: f, receiver: h, color: u, message: _(), category: 1 & e ? 1 : 2 & e ? 2 : 0, goldMember: !!(16 & e), moderator: 32 & e ? 1 : 64 & e ? 2 : 0, donator: 1 & t ? 1 : 2 & t ? 2 : 4 & t ? 3 : 0, yt: !!(8 & t), shout: !!(8 & e), time: Date.now(), cache: null}), 1 & e) m = document.getElementById("chtTabParty"); else if (2 & e) {
        if (U(f), U(h), f.toLowerCase() != gi.toLowerCase()) {
          var p = new Audio("sounds/bleep.mp3");
          p.volume = .1, p.play();
        }
        m = f.toLowerCase() != gi.toLowerCase() ? qa[f.toLowerCase()] : qa[h.toLowerCase()];
      }
      m && (m = b(m), !m || m.hasClass("selected") || m.hasClass("semi-selected") || (m.addClass("blink"), be && (clearTimeout(be), be = 0), be = setTimeout(function () {
        b("#chtTabs").find("div.blink").removeClass("blink"), be = 0;
      }, 6e4))), Ti = true;
    }
    function ib() {
      for (var d = 200, b = 180, x = Date.now(); cn.length > 0 && (x >= 1e3 * b + cn[0].time || cn.length > d);) cn.splice(0, 1);
      Ti = true;
    }
    function nb() {
      var d, x, _ = Math.max(Math.min(1.8 * oi, ai, 1e3) / 1e3, .5), e = Math.min(12, Math.max(~~((oi - 72 - 60) / (20 * _)), 2)), t = [], i = cn.length, n = 0, a = 0, o = 0, r = 0, s = ps ? "#F5F6CE" : "#444444";
      if (!Is && i > 0) {
        Ot.font = "15px CarterOne, serif";
        for (var c = 0; i > c; c++) {
          var l = cn[c];
          if (l.filter = !(0 != Ka && (Ka != l.category || 1 != Ka && bo != "" && bo.toLowerCase() != l.name.toLowerCase() && bo.toLowerCase() != l.receiver.toLowerCase()) || l.uid != Oi && fo[l.uid] || l.iid != Oi && ho[l.iid]), l.filter && a++, null == l.cache) {
            var u = [], f = [], h = 0, m = ": ", p = m.length;
            m += l.shout ? l.message : l.message.replace(emoRegExp, function (d, b) {
              return u.push({pos: b + p, index: emoMapIndex[d]}), p += 5 - d.length, "     ";
            });
            for (var v = 0; v < u.length; v++) u[v].pos = Ot.measureText(m.substring(0, u[v].pos)).width;
            l.shout && (f.push(0), h += l.name ? 22 : 20), (1 == l.category || 2 == l.category) && (f.push(1 == l.category ? 1 : 2), h += 22), (1 == l.moderator || 2 == l.moderator) && (f.push(1 == l.moderator ? 4 : 3), h += 22), l.goldMember && (f.push(5), h += 22), l.donator && (f.push(1 == l.donator ? 6 : 2 == l.donator ? 7 : 8), h += 22), l.yt && (f.push(9), h += 22), l.cache = {displayName: l.name, parsedMessage: m, emo: u, icons: f, width0: h, width1: 0, width2: 0, clip1: false, color2: "", hovered: false, selected: false, complete: false, canvas: null, ctx: null, drawn: 0, needsRedraw: true};
          }
        }
        a > e ? r = (1 - no) * (a - e) : (no = 1, r = 0);
        for (var c = i - 1; c >= 0; c--) {
          var l = cn[c];
          if (l.filter && (o++, o - 1 >= ~~r)) {
            var g = l.cache;
            if (d = g.hovered, x = g.selected, g.hovered = l === so, g.selected = l === co, null == g.canvas ? (g.canvas = document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), g.canvas.height = 23, g.needsRedraw = true) : g.needsRedraw = g.drawn < 3 || !g.complete || g.color2 != s || g.drawn % 30 == 0 || g.hovered != d || g.selected != x || g.canvas.width < ~~Math.min(g.width0 + g.width1 + g.width2, ai / _), g.needsRedraw && (g.width1 = Ot.measureText(g.displayName).width + 6, g.width1 > 400 && (g.width1 = 400, g.clip1 = true), g.width2 = Ot.measureText(g.parsedMessage).width + 6, g.color2 = s), g.width0 + g.width1 + g.width2 > n && (n = g.width0 + g.width1 + g.width2), t.push(l), t.length >= e + (r > 0 ? 1 : 0)) break;
          }
        }
        o = t.length;
      }
      if (lo = [], o > 0) {
        zt.width = Math.max(Math.min(n * _, ai - 25), 1);
        var y = 20 * Math.min(o, e);
        if (zt.height = Math.max((y + 4) * _, 1), r %= 1, a > e && !C_) {
          var k = eo, w = to, S = io;
          eo = zt.height, to = Math.min(Math.max(e / a * eo - 2, 20), Math.max(eo - 2, 0)), io = Math.max((1 - no) * (eo - to - 2), 0), _o && (ao += S - io - (1 - no) * (to - w)), oo = (e - 1) / a * eo, k != eo && (ci.style.height = eo + "px"), w != to && (li.style.height = to + "px"), S != io && (li.style.bottom = io + "px"), !ir && (b("#chtContent").addClass("scrollbar"), ir = true);
        } else ir && (b("#chtContent").removeClass("scrollbar"), ir = false);
        Ot.scale(_, _), Ot.globalAlpha = ps ? .8 : .95;
        for (var c = 0; o > c; c++) {
          var l = t[c], g = l.cache;
          if (g.needsRedraw) {
            g.canvas.width = Math.max(Math.min(g.width0 + g.width1 + g.width2, ai / _), 1), g.complete = true;
            var M = g.ctx, h = 0;
            if ((g.hovered || g.selected) && (M.fillStyle = "#999999", M.globalAlpha = g.selected ? .9 : .4, M.fillRect(0, 0, Math.max(g.width0 + g.width1 + 1, 10), 23)), M.font = "15px CarterOne", M.globalAlpha = 1, g.icons.length > 0) {
              var T = mc;
              if (T && T.complete && 0 != T.width) for (var C = 0, f = g.icons; C < f.length; C++) M.drawImage(T, 20 * f[C], 0, 20, 20, ~~(2 + h + .5), 0, 20, 20), h += 22; else g.complete = false;
            }
            if (g.clip1 && (M.save(), M.beginPath(), M.rect(g.width0, 0, g.width1, 23), M.clip()), M.lineWidth = 3, M.strokeStyle = "#000000", M.strokeText(g.displayName, g.width0 + 3, 17), M.fillStyle = l.color, M.fillText(g.displayName, g.width0 + 3, 17), g.clip1 && M.restore(), M.fillStyle = g.color2, M.fillText(g.parsedMessage, g.width0 + g.width1 + 3, 17), g.emo.length > 0) {
              var T = pc;
              if (T && T.complete && 0 != T.width) for (var C = 0, I = g.emo; C < I.length; C++) {
                var U = I[C];
                M.drawImage(T, 20 * (U.index % 8), 20 * ~~(U.index / 8), 20, 20, ~~(g.width0 + g.width1 + 2 + U.pos + .5), 0, 20, 20);
              } else g.complete = false;
            }
          }
          g.drawn++, d = y - 20 * (c + 1 - r), Ot.drawImage(g.canvas, 0, d), l.selectable && !C_ && lo.push({ch: l, x0: 0, y0: (d + 1) * _, x1: Math.max(g.width0 + g.width1 + 1, 10) * _, y1: (d + 21) * _});
        }
        Ot.globalAlpha = .1, Ot.fillStyle = "#000000", Ot.fillRect(0, 0, Ot.canvas.width / _, Ot.canvas.height / _), Ot.globalAlpha = .1, Ot.lineWidth = 2, Ot.strokeStyle = "#000000", Ot.strokeRect(0, 0, Ot.canvas.width / _, Ot.canvas.height / _), !tr && (b("#chtContent").show(), tr = true);
      } else tr && (b("#chtContent").hide(), tr = false);
    }
    function ab(d, b) {
      yn = +new Date, Er = yn, Xn = false, Ci = true;
      var x, _, e = d.getUint16(b, true), t = [];
      b += 2;
      for (var i = 0; e > i; i++) {
        var n = d.getUint8(b++), a = 2 & n ? d.getUint8(b++) : 0, o = 32 & n ? d.getUint8(b++) : 0, r = d.getUint32(b, true), s = r;
        b += 4, !!(1 & n) && (s = d.getUint32(b, true), b += 4);
        for (var c = ""; _ = d.getUint16(b, true), b += 2, 0 != _;) c += String.fromCharCode(_);
        var l = d.getUint16(b, true);
        b += 2, _ = d.getUint8(b++);
        var u = null;
        if (0 != _) {
          u = [];
          for (var f = 0; _ > f; f++) u.push({wearId: d.getUint16(b, true), wearArea: d.getUint8(b + 2), imgLoadedLo: null, imgLoaded: null}), b += 3;
        }
        t.push({pid: r, oid: s, n: c, s: l, w: u, colorIndexName: a, isMinion: !!(1 & n), isGhosted: !!(4 & n), isCloaked: !!(8 & n), coronaSpikes: !!(16 & n), stars: o});
      }
      for (i = 0;;) {
        var r = d.getUint32(b, true);
        if (b += 4, 0 == r) break;
        ++i;
        var h, m, s;
        s = d.getInt32(b, true), b += 4, m = d.getInt32(b, true), b += 4, h = d.getUint16(b, true), b += 2;
        var n = d.getUint8(b++), p = !!(1 & n);
        if (p) {
          for (var v = !!(2 & n), g = d.getUint8(b++), y = 8 & n ? d.getUint8(b++) : 0, k = d.getUint8(b++), w = d.getUint8(b++), S = d.getUint8(b++), M = (k << 16 | w << 8 | S).toString(16); 6 > M.length;) M = "0" + M;
          var T = "#" + M;
          if (0 == g) {
            var C = t[d.getUint16(b, true)];
            b += 2;
          }
        }
        if (x = !p || Zi.hasOwnProperty(r) ? Zi[r] : null) x.shouldUpdate && x.updatePos(), x.shouldUpdate = true, x.ox = x.x, x.oy = x.y, x.oSize = x.size; else {
          if (x = new Ix(r, s, m, h), Zi[r] = x, p) if (1 == g) Bn >= h ? (x.smallFood = true, qi.push(x)) : Hi.push(x); else {
            if (Hi.push(x), _ = _n[r]) for (e = 0; e < _.length; e++) x.setAnimation(_[e]);
            if (0 == g) {
              if (x.pid = C.pid, x.oid = C.oid, e = C.isMinion ? bn : dn, !(_ = e[C.oid]) && (_ = e[C.oid] = []), _.push(x), _ = en[x.pid]) for (e = 0; e < _.length; e++) x.setAnimation(_[e]);
              if (C.isMinion && (_ = tn[x.oid])) for (e = 0; e < _.length; e++) x.setAnimation(_[e]);
            } else 13 == g ? x.setAnimation({animId: 7, animStartTime: kc[7].time(-~~(2e3 * Math.random())), received: ++sn}) : 4 == g && (x.strokeSize = .83 * h);
            ($s || Es) && (0 == g || 3 == g) && (x.shape = Es ? 2 : xc[r % 100], x.rotation = (2 * Math.random() - 1) * Math.PI), ys && (x.ga = 0, x.shouldUpdate = true);
          }
          x.createTime = yn;
        }
        if (x.nx = s, x.ny = m, x.nSize = h, x.updateTime = yn, p) {
          if (x.color = T, x.smallFood) x.colorDimmed = T; else {
            for (M = (~~(k * vs) << 16 | ~~(w * vs) << 8 | ~~(S * vs)).toString(16); 6 > M.length;) M = "0" + M;
            x.colorDimmed = "#" + M;
          }
          if (x.spiked = v ? 2 == g || 9 == g ? 2 : 1 : 0, x.cellType = g, 1 != g) {
            if (x.imageId = y, 0 == g && (x.ownCell || -1 == Xi.indexOf(r) || -1 != ji.indexOf(x) || (ji.push(x), x.ownCell = true, 1 == ji.length && (Ji = (.1 * Ji + x.x) / 1.1, Vi = (.1 * Vi + x.y) / 1.1, Sb(13), yb())), (C.n || x.name) && x.setName(C.n), x.skinId = C.s, x.colorIndexName = C.colorIndexName, x.isMinion = C.isMinion, x.isGhosted = C.isGhosted, x.isCloaked = C.isCloaked, x.coronaSpikes = C.coronaSpikes, x.stars = C.stars, x.wears = C.w, x.wears)) for (var f = 0; f < x.wears.length; f++) x.reloadWear(x.wears[f]);
            x.reloadImage(), x.orientation = 16 & n ? 1 : 0;
          }
        }
        0 == x.cellType && (x.singleCellPlayer = !!(4 & n), x.sameParty = !!(64 & n));
      }
      for (e = d.getUint16(b, true), b += 2, _ = {}, i = 0; e > i; ++i) {
        var r = d.getUint32(b, true), I = Zi[r] || _[r], U = Zi[d.getUint32(b + 4, true)];
        b += 8, U && (I ? (U.destroy(true), U.ox = U.x, U.oy = U.y, U.oSize = U.size, I != U && (U.nx = I.x, U.ny = I.y), U.nSize = U.size, U.updateTime = yn, I.isCloaked && !I.ownCell && 0 == U.cellType && U.pid != I.pid && (I.clearAnimation(16), I.setAnimation({animId: 16, animStartTime: kc[16].time(), received: ++sn}))) : U.destroy(false), 1 != U.cellType && (_[r] = U));
      }
      for (_ = null, e = d.getUint32(b, true), b += 4, i = 0; e > i; i++) x = Zi[d.getUint32(b, true)], b += 4, null != x && x.destroy(false);
      Xn && 0 == ji.length && ed();
    }
    function ob(d, b, x, _, e, t) {
      if (sn++, 0 == d) for (var i = 0; i < x.length; i++) for (var n = x[i], a = Zi[n], o = 0; o < _.length; o++) {
        var r = _[o];
        if (0 == r || e) a && a.clearAnimation(r), sb(d, n, r); else {
          var s = kc[r], c = {animId: r, animStartTime: s.time(-t), received: sn};
          s.time() < c.animStartTime + s.duration && (a && a.setAnimation(c), rb(d, n, c));
        }
      } else {
        for (var i = 0; i < Hi.length; i++) {
          var a = Hi[i];
          if (0 == a.cellType && (1 == d && a.pid == b || 2 == d && a.isMinion && a.oid == b)) for (var o = 0; o < _.length; o++) {
            var r = _[o];
            if (0 == r || e) a.clearAnimation(r); else {
              var s = kc[r], c = {animId: r, animStartTime: s.time(-t), received: sn};
              s.time() < c.animStartTime + s.duration && a.setAnimation(c);
            }
          }
        }
        for (var o = 0; o < _.length; o++) {
          var r = _[o];
          if (0 == r || e) sb(d, b, r); else {
            var s = kc[r], c = {animId: r, animStartTime: s.time(-t), received: sn};
            s.time() < c.animStartTime + s.duration && rb(d, b, c);
          }
        }
      }
    }
    function rb(d, b, x) {
      var _ = [_n, en, tn][d][b];
      !_ && (_ = [_n, en, tn][d][b] = [], [nn, an, on][d].push(b)), _.length < rn ? _.push(x) : _[_.length - 1] = x;
    }
    function sb(d, b, x) {
      var _ = [_n, en, tn][d][b];
      if (_) if (0 == x) cb(d, b); else {
        for (var e = 0; e < _.length; e++) _[e].animId == x && (_.splice(e, 1), e--);
        0 == _.length && cb(d, b);
      }
    }
    function cb(d, b) {
      0 == d ? delete _n[b] : 1 == d ? delete en[b] : delete tn[b];
    }
    function lb() {
      for (var d = 0; 3 > d; d++) for (var b = [nn, an, on][d], x = [_n, en, tn][d], _ = 0; _ < b.length; _++) {
        var e = b[_], t = x[e];
        if (t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i], a = kc[n.animId];
            a.time() >= n.animStartTime + a.duration && (t.splice(i, 1), i--);
          }
          0 == t.length && (cb(d, e), t = null);
        }
        t || (b.splice(_, 1), _--);
      }
    }
    function ub(d) {
      if (wb() && (!mn || Wa)) {
        var b = ln - ai / 2, x = un - oi / 2;
        (b * b + x * x >= 64 && !(.01 > Math.abs(Xs - fn) && .01 > Math.abs(js - hn)) || d) && (Xs = fn, js = hn, Wa ? (b = fd(10), b.setUint8(0, 73), b.setUint8(1, (mn ? 0 : 1) + (ja && 1 == ja.orientation ? 2 : 0)), b.setInt32(2, fn, true), b.setInt32(6, hn, true)) : (b = fd(9), b.setUint8(0, 0), b.setInt32(1, fn, true), b.setInt32(5, hn, true)), hd(b));
      }
    }
    function fb(d, b) {
      if (wb()) {
        var x = fd(5 + 2 * d.length + 2 * b.length), _ = 0;
        x.setUint8(_++, 2);
        for (var e = 0; e < d.length; ++e) x.setUint16(_, d.charCodeAt(e), true), _ += 2;
        x.setUint16(_, 0, true), _ += 2;
        for (var e = 0; e < b.length; ++e) x.setUint16(_, b.charCodeAt(e), true), _ += 2;
        x.setUint16(_, 0, true), _ += 2, hd(x);
      }
    }
    function hb(d, b, x, _, e) {
      if (wb()) {
        var t = fd(15 + 2 * d.length + 2 * b.length + 2 * x.length), i = 0;
        t.setUint8(i++, 3);
        for (var n = 0; n < d.length; ++n) t.setUint16(i, d.charCodeAt(n), true), i += 2;
        t.setUint16(i, 0, true), i += 2;
        for (var n = 0; n < b.length; ++n) t.setUint16(i, b.charCodeAt(n), true), i += 2;
        t.setUint16(i, 0, true), i += 2;
        for (var n = 0; n < x.length; ++n) t.setUint16(i, x.charCodeAt(n), true), i += 2;
        t.setUint16(i, 0, true), i += 2, _ = parseInt(_) || 0, 0 > _ && (_ = 0), t.setUint32(i, _, true), i += 4, e = parseInt(e) || 0, 0 > e && (e = 0), t.setUint32(i, e, true), i += 4, hd(t);
      }
    }
    function mb(d, b) {
      if (wb()) {
        var x = fd(1 + 2 * b.length), _ = 0;
        x.setUint8(_++, d);
        for (var e = 0; e < b.length; ++e) x.setUint16(_, b.charCodeAt(e), true), _ += 2;
        hd(x);
      }
    }
    function pb(d) {
      var b = "", x = prompt("Enter a note for this skin:", x);
      null != x && x != "" && (b = "" + x + "", vb(d, b));
    }
    function vb(d, b) {
      if (wb()) {
        var x = fd(1 + 2 * b.length), _ = 0;
        x.setUint8(_++, d);
        for (var e = 0; e < b.length; ++e) x.setUint16(_, b.charCodeAt(e), true), _ += 2;
        hd(x);
      }
    }
    function gb() {
      if (wb() && $r && null != xs) {
        var d = fd(4 + 2 * es.length + 2 * xs.length);
        d.setUint8(0, 1), d.setUint16(1, _s, true), d.setUint8(3, es.length);
        for (var b = 4, x = 0; x < es.length; x++) d.setUint16(b, es[x].wearId, true), b += 2;
        for (var x = 0; x < xs.length; ++x) d.setUint16(b + 2 * x, xs.charCodeAt(x), true);
        hd(d), 0 == ji.length && (De = false, Be && (clearTimeout(Be), Be = 0), Be = setTimeout(yb, 300));
      }
    }
    function yb() {
      Be && (clearTimeout(Be), Be = 0), De = true;
    }
    function kb(d) {
      if (wb() && d.length < 200 && d.length > 0 && d.toLowerCase() != xo.toLowerCase()) {
        var b = fd(2 + 2 * d.length), x = 0;
        b.setUint8(x++, 98), b.setUint8(x++, 1);
        for (var _ = 0; _ < d.length; ++_) b.setUint16(x, d.charCodeAt(_), true), x += 2;
        hd(b);
      }
    }
    function wb(d) {
      return null != Bi && Bi.readyState == Bi.OPEN && ($i && Bi.bufferedAmount < 8192 || !!d);
    }
    function Sb(d) {
      if (wb()) {
        var b = fd(1);
        b.setUint8(0, d), hd(b);
      }
    }
    function Mb() {
      window.scrollTo(0, 0), ai = d.innerWidth, oi = d.innerHeight, 1 > ai && (ai = 1), 1 > oi && (oi = 1), Pt.width = ai, Pt.height = oi;
      var x = b("#advertDialogs"), _ = Math.min(ai / 970, oi / 800);
      if (1 > _ ? x.css("transform", "translate(-50%, -50%) scale(" + _ + ")") : x.css("transform", "translate(-50%, -50%)"), x = b("#adWrapper728x90_2"), _ = ai / 728, 1 > _ ? x.css("transform", "translate(-50%, 0%) scale(" + _ + ")") : x.css("transform", "translate(-50%, 0%)"), x = b("#overlaysContent"), _ = Math.max(oi / 920, .7), 1 > _ ? x.css("transform", "scale(" + _ + ")") : x.css("transform", "none"), x = b("#adWrapper728x90"), _ = ai / (728 * Math.min(_, 1)), 1 > _ ? x.css("transform", "translate(-50%, 0%) scale(" + _ + ")") : x.css("transform", "translate(-50%, 0%)"), x = b("#adWrapper160x600"), Pr = ai >= 830 && yt, Pr ? (_ = Math.max((ai >= 992 ? ai - 930 : ai - 770) / 160, .5), 1 > _ ? x.css("transform", "scale(" + _ + ")") : x.css("transform", "none"), Nr && !x.is(":visible") && Se < Date.now() - 4e4 && q(), x.show()) : x.hide(), x = b("#shopModalDialog"), Pr && 1260 > ai ? x.css("transform", "translate(-" + (80 * Math.min(_, 1) + 5) + "px, 0px)") : x.css("transform", "none"), x = b("#coinsModalDialog"), _ = Math.max(ai / 1e3, .5), 1 > _ ? x.css("transform", "scale(" + _ + ")") : x.css("transform", "none"), I_ = 909 >= ai, I_ || (b("#loginPanel").css("display", ""), b("#serverPanel").css("display", ""), b("#mainPanel").css("display", "")), C_) {
        Ob(), zb(), Rb();
        var e = 2 * ~~(ai / 8) + 20;
        b("#brGameContainer").css("bottom", e + "px"), b("#infGameContainer").css("bottom", e + "px");
      }
      var t = Math.max(~~Math.min(.22 * oi, .14 * ai, 200) / 200, .6);
      b("#brGameContainer").css("transform", "scale(" + t + ")"), b("#infGameContainer").css("transform", "scale(" + t + ")"), m(), (yo > 0 || ko > 0) && (yo = Math.max(Math.min(yo, ai), 200), ko = Math.max(Math.min(ko, oi), 240), Ur && b("#friendDialog").css({width: yo + "px", height: ko + "px"})), Ti = Mi = Ui = Ai = Ni = Fi = Ii = Ci = Pi = true, Ub();
    }
    function Tb() {
      var d = Math.max(oi / Pn, ai / Fn);
      return C_ ? oi >= ai ? d * Br * .85 : d * Br * .9 : d * Br * .7;
    }
    function Cb() {
      if (Ss) Wn = Ms; else {
        if (0 != ji.length) {
          for (var d = 0, b = 0; b < ji.length; b++) d += ji[b].size;
          _a = Math.pow(Math.min(64 / d, 1), .4);
        }
        Wn = _a * Tb();
      }
    }
    function Ib() {
      if (Ss) Ms = Wn, Br *= Wn / (ea * Tb()); else {
        Ms = 1;
        var d = Wn;
        Cb(), Br *= d / Wn, Wn = d;
      }
    }
    function Ub() {
      var b, x, _, e, t, i, n = Date.now();
      if (yn = n, wn = 16.666666666666668 / Math.min(Math.max(yn - kn, 1), 1e3), kn = yn, Ab(), lb(), Jn = Vn, Vn = null, Cb(), _ = 9 * wn, Gn = (_ * Gn + Wn) / (_ + 1), ri = ai / 2 / Gn, si = oi / 2 / Gn, i = ji.length, i > 0) {
        x = b = 0;
        var a;
        for (t = 0; i > t; t++) a = ji[t], a.shouldUpdate && a.updatePos(), b += a.x, x += a.y;
        Zn = qn = da = b / i, Hn = Kn = ba = x / i, _ = 3 * wn;
      } else ux(yn), _ = 3 * wn;
      Ji = (_ * Ji + Zn) / (_ + 1), Vi = (_ * Vi + Hn) / (_ + 1), _ = Math.ceil(10 * Gn) / 10, Math.abs(Yn - _) > .5 * Math.abs(Yn - Wn) && (Yn = _), Y(), Mi && (Gb(), Mi = false), 0 != ro && yn >= ro && (r(ln, un), ro = 0), Ti && aa && (nb(), Ti = false, so && so !== o(ln, un) && (so = null, Ti = true)), gs ? (Dt.fillStyle = ps ? "#111111" : "#F2FBFF", Dt.globalAlpha = .05, Dt.fillRect(0, 0, ai, oi)) : Fb(), Hi.sort(function (d, b) {
        return d.size == b.size ? d.id - b.id : d.size - b.size;
      }), Dt.lineCap = "round", Dt.save(), In.draw && (lx(yn), e = In.top > Vi - si || In.right < Ji + ri || In.bottom < Vi + si || In.left > Ji - ri, e && (Dt.beginPath(), Dt.rect(0, 0, ai, oi), Dt.rect(Math.max(In.left - Ji + ri, 0) * Gn, Math.max(In.top - Vi + si, 0) * Gn, (Math.min(In.right, Ji + ri) - Math.max(In.left, Ji - ri)) * Gn, (Math.min(In.bottom, Vi + si) - Math.max(In.top, Vi - si)) * Gn), Dt.globalAlpha = .3 * In.ga, Dt.fillStyle = "#CC3030", Dt.fill("evenodd"))), Dt.scale(Gn, Gn), Dt.translate(-Ji + ri, -Vi + si);
      var s = hs && _;
      if (s && Nb(), !us) {
        _ = Math.max(20, 1 / Gn), Dt.lineWidth = _, Dt.globalAlpha = 1;
        var c = Math.max(Math.min(5 * Gn, 1), In.draw && e ? .5 : .2);
        if (ps) for (var l = ~~(17 + 187 * c), u = ~~(17 + 31 * c), f = u, h = (l << 16 | u << 8 | f).toString(16); 6 > h.length;) h = "0" + h; else for (var l = ~~(242 + -38 * c), u = ~~(251 + -203 * c), f = ~~(255 + -207 * c), h = (l << 16 | u << 8 | f).toString(16); 6 > h.length;) h = "0" + h;
        Dt.strokeStyle = "#" + h, In.top + _ / 2 > Vi - si && (Dt.beginPath(), Dt.moveTo(In.left, In.top), Dt.lineTo(In.right, In.top), Dt.stroke()), In.right - _ / 2 < Ji + ri && (Dt.beginPath(), Dt.moveTo(In.right, In.top), Dt.lineTo(In.right, In.bottom), Dt.stroke()), In.bottom - _ / 2 < Vi + si && (Dt.beginPath(), Dt.moveTo(In.right, In.bottom), Dt.lineTo(In.left, In.bottom), Dt.stroke()), In.left + _ / 2 > Ji - ri && (Dt.beginPath(), Dt.moveTo(In.left, In.bottom), Dt.lineTo(In.left, In.top), Dt.stroke());
      }
      for (i = Ki.length, t = 0; i > t; t++) Ki[t].drawCell(Dt), Ki.length < i && (i--, t--);
      for (i = qi.length, t = 0; i > t; t++) qi[t].drawCell(Dt);
      for (i = Hi.length, t = 0; i > t; t++) Hi[t].drawCell(Dt);
      Dt.restore(), t = Math.max(Math.min(1.8 * oi, ai, 1e3) / 1e3, .8), x = Qb(), jn = x;
      var m = false, p = true;
      if (0 != jn && aa && p && (null == qs ? qs = new Ux(24, ps ? "#FFFFFF" : "#626262") : qs.setColor(ps ? "#FFFFFF" : "#626262"), qs.setValue("Mass: " + ~~(jn / 100)), x = qs.render(), Dt.globalAlpha = 1, Dt.drawImage(x, 25, 70, x.width * t, x.height * t)), (0 < ji.length || d.isSpectating) && aa && m && (!Ks && (Ks = new Ux(15, "#FFFFFF")), Ks.setValue("x : " + Ji.toFixed(0) + " / y : " + Vi.toFixed(0)), x = Ks.render(), b = (x.width + 20) * t, _ = (x.height + 2) * t, e = 8 * t, Dt.beginPath(), Dt.moveTo(10 + e, 50), Dt.arcTo(10 + b, 50, 10 + b, 50 + _, e), Dt.arcTo(10 + b, 50 + _, 10, 50 + _, e), Dt.arcTo(10, 50 + _, 10, 50, e), Dt.arcTo(10, 50, 10 + b, 50, e), Dt.closePath(), Dt.globalAlpha = .7, Dt.fillStyle = "#000000", Dt.fill(), Dt.globalAlpha = 1, Dt.drawImage(x, 10 + 10 * t, 51, x.width * t, x.height * t)), Ui && aa && (Jb(), Ui = false), Ai && aa && (Vb(), Ai = false), Ni && aa && (Xb(), Ni = false), Fi && (jb(true, true), Fi = false), mn && (Dt.globalAlpha = 1, Dt.drawImage(vc, (pn - Ji + ri) * Gn - 20, (vn - Vi + si) * Gn - 10, 50, 50)), Wa && (ja && (ja.x = ja.ox = ja.nx = ln / Gn + Ji - ri, ja.y = ja.oy = ja.ny = un / Gn + Vi - si, ja.nSize != Xa && 0 != Xa && (ja.size = ja.oSize = ja.nSize = ja.strokeSize = Xa, ja.pinsCache = null, ja.sizeScale = 0), t = 4 == ja.cellType ? .83 * ja.size : ja.size, b = 0 == Ja && Va && 0 != Xa && ja.sizeScale ? 4 > t * Gn ? 4 / t : Gn : 14 / t, _ = 1 * wn, ja.sizeScale = ja.sizeScale ? (_ * ja.sizeScale + b) / (_ + 1) : b, e = ja.getTransform(), e.t = e.s = true, e.sx = e.sy = ja.sizeScale / Gn, Dt.save(), Dt.scale(Gn, Gn), Dt.translate(-Ji + ri, -Vi + si), ja.drawCell(Dt), Dt.restore()), !oa && 0 == Ja && Va)) {
        for (x = null, t = Hi.length - 1; t >= 0; t--) if (e = Hi[t], 0 == e.cellType) {
          var v = e.x - fn, g = e.y - hn;
          if (v * v + g * g < e.size * e.size) {
            x = e;
            break;
          }
        }
        x && x.setAnimation({animId: 13, animStartTime: kc[13].time(), received: ++sn});
      }
      if (Ci && !Us && Rt) {
        if (t = Math.max(~~Math.min(.22 * oi, .14 * ai, 200) / 200, .6), b = ~~(200 * t), !Qt && (Qt = document.createElement("canvas"), Gt = Qt.getContext("2d")), Ii || !Qt.complete) {
          Qt.width = Qt.height = b, Gt.globalAlpha = .9, Gt.fillStyle = "#000000", Gt.fillRect(0, 0, b, b);
          var y = tc.minimap;
          null == y && (y = tc.minimap = c_("img/minimap.png")), y && y.complete && 0 != y.width && (Gt.globalAlpha = 1, Gt.drawImage(y, 0, 0, b, b), Qt.complete = true);
        }
        Rt.width = Rt.height = b, Lt.globalAlpha = 1, Lt.drawImage(Qt, 0, 0), In.draw && (Lt.beginPath(), Lt.rect(0, 0, b, b)), b /= Math.max(Tn - Sn, Cn - Mn), In.draw && (Lt.rect((In.left - Sn) * b, (In.top - Mn) * b, (In.right - In.left) * b, (In.bottom - In.top) * b), Lt.globalAlpha = .4, Lt.fillStyle = "#CC3030", Lt.fill("evenodd")), Lt.scale(b, b), Lt.translate(-Sn, -Mn), e = b * b * ai * oi / (Gn * Gn * 200 * 200 * t * t), ps ? (Lt.globalAlpha = e >= .4 ? .04 : .06 * (1 - e / .4) + .04, Lt.fillStyle = "#CCCCCC") : (Lt.globalAlpha = e >= .4 ? .02 : .04 * (1 - e / .4) + .02, Lt.fillStyle = "#FFFFFF"), Lt.fillRect(Ji - ri, Vi - si, ai / Gn, oi / Gn), Eb(Lt, b);
        var k;
        for (i = qi.length, k = 0; i > k; k++) _ = qi[k], _.shouldUpdate && (_.x != _.nx || _.y != _.ny) && _.drawMinimapCell(Lt, b);
        for (i = Hi.length, k = 0; i > k; k++) _ = Hi[k], (3 != _.cellType && 1 != _.cellType || _.shouldUpdate && (_.x != _.nx || _.y != _.ny)) && _.drawMinimapCell(Lt, b);
        if (i = Ha.length, i > 0 && aa) {
          var w = Rt.width, S = Rt.height;
          for (k = 0; i > k; k++) if (_ = Ha[k], _.showPos) {
            var M = _.pp;
            !M && (_.pp = new Ux(15, "#FFFFFF", true, "#000000", 3), M = _.pp, M.setScale(1.1)), M.setValue(k + 1), x = M.render(), e = M.getAppliedScale();
            var T = Math.max(Math.min(_.cx + 1 * t / b, (w - (x.width - 4) * t / e) / b + Sn), -4 / b + Sn), C = Math.max(Math.min(_.cy - 15 * t / b, (S - (x.height - 4) * t / e) / b + Mn), -4 / b + Mn);
            Lt.drawImage(x, T, C, x.width * t / e / b, x.height * t / e / b);
          }
        }
      }
      Ci = Ii = false, Pi && (Nd(), Pi = false);
      var I = 16.666666666666668, U = Date.now() - n;
      U > .9 * I ? Zs -= .01 : .75 * I > U && (Zs += .01), .4 > Zs && (Zs = .4), Zs > 1 && (Zs = 1), U > .8 * I ? Hs += .1 : .7 * I > U && (Hs -= .01), 0 > Hs && (Hs = 0), Hs > 1 && (Hs = 1);
    }
    function Ab() {
      Or = Date.now(), 0 == zr && (zr = Or);
      var d = Or - zr;
      d > 3e5 && 0 == ji.length || d > 6e5 ? Rr || 0 == Qr || (Rr = true, Vs = true, cd(), yd(), W_ && (clearTimeout(W_), W_ = 0), Y_ && (clearTimeout(Y_), Y_ = 0), C("You have been disconnected for inactivity.  Click anywhere to reconnect...", false, true, 0, 0)) : Rr && (Rr = false, Js = 500, rd());
    }
    function Nb() {
      Dt.save();
      var d = 5, b = ["ABCDE", "12345"], x = In.right / d, _ = In.bottom / d;
      Dt.fillStyle = ps ? "#807d7d" : "#111111", Dt.textBaseline = "middle", Dt.textAlign = "center", Dt.font = (x / 3 | 0) + "px Ubuntu";
      for (var e = 0; d > e; e++) for (var t = 0; d > t; t++) {
        var i = b[0][e] + b[1][t], n = (t + .5) * x, a = (e + .5) * _;
        Dt.fillText(i, n, a);
      }
      Dt.restore();
    }
    function Fb() {
      Dt.globalAlpha = 1;
      var d = fs || hs || ms, b = 1;
      if (d) if (fs) b = Gn > .4 ? 1 : Gn > .2 ? 2 : Gn > .1 ? 4 : Gn > .05 ? 8 : 16, d = Gn > .025; else if (hs) {
        var x = Math.max(Tn - Sn, Cn - Mn) * Gn;
        b = x > 2e3 ? 1 : x > 1e3 ? 2 : x > 500 ? 4 : 8;
      } else ms && (d = Gn > .12);
      var _ = fs && d, e = hs && d, t = ms && d;
      if (d) if (_) {
        var i = ps ? "grid_cc_dark" : "grid_cc_white", n = ic[i + b], a = ac[i + b];
        null == n && (ic[i + "1"] = l_("img/" + i + "1.png"), ic[i + "2"] = l_("img/" + i + "2.png"), ic[i + "4"] = l_("img/" + i + "4.png"), ic[i + "8"] = l_("img/" + i + "8.png"), ic[i + "16"] = l_("img/" + i + "16.png"), n = ic[i + b]), _ = d = n && n.complete, null == a && _ && (a = ac[i + b] = Dt.createPattern(n, "repeat"));
      } else if (e) {
        var i = "grid_sections_new", n = ic[i + b];
        null == n && (ic[i + "1"] = l_("img/" + i + "1.png"), ic[i + "2"] = l_("img/" + i + "2.png"), ic[i + "4"] = l_("img/" + i + "4.png"), ic[i + "8"] = l_("img/" + i + "8.png"), n = ic[i + b]), e = d = n && n.complete;
      }
      if ((!_ || .05 > Gn) && (Dt.fillStyle = fs ? ps ? "#131313" : "#F7FCFE" : ps ? "#111111" : "#F2FBFF", Dt.fillRect(0, 0, ai, oi)), d) {
        if (Dt.save(), _) {
          var o = 2 * b;
          .05 > Gn && (Dt.globalAlpha = Math.max((Gn - .025) / .025, 0)), Dt.fillStyle = a, Dt.scale(o * Gn, o * Gn);
          var x = (-Ji + ri) % (n.width * o), r = (-Vi + si) % (n.height * o);
          x > 0 && (x -= n.width * o), r > 0 && (r -= n.height * o), sx = (Ji - ri - Sn) * n.width / r, sy = (Vi - si - Mn) * n.height / r, Dt.translate(x / o, r / o), Dt.fillRect(0, 0, (ai / Gn - x) / o, (oi / Gn - r) / o);
        } else if (e) ; else if (t) {
          Dt.lineWidth = 1 / Gn;
          var s = Math.min(.2 * Gn, .3);
          if (ps) for (var c = ~~(17 + 153 * s), l = c, u = c, f = (c << 16 | l << 8 | u).toString(16); 6 > f.length;) f = "0" + f; else for (var c = ~~(242 + -242 * s), l = ~~(251 + -251 * s), u = ~~(255 + -255 * s), f = (c << 16 | l << 8 | u).toString(16); 6 > f.length;) f = "0" + f;
          Dt.strokeStyle = "#" + f, Dt.scale(Gn, Gn);
          for (var x = ai / Gn, r = oi / Gn, h = 200 * b, o = -0.5 + (-Ji + ri) % h; x > o; o += h) Dt.beginPath(), Dt.moveTo(o, 0), Dt.lineTo(o, r), Dt.stroke();
          for (o = -0.5 + (-Vi + si) % h; r > o; o += h) Dt.beginPath(), Dt.moveTo(0, o), Dt.lineTo(x, o), Dt.stroke();
        }
        Dt.restore();
      }
    }
    function Pb() {
      if (typeof Storage !== "undefined" && Ri) {
        var d = Date.now();
        localStorage["wc" + Ri] = d;
      }
    }
    function Db() {
      if (!Ri) if (typeof Storage !== "undefined") for (var b = Date.now(), x = 0; 5 > x; x++) {
        var _ = parseInt(localStorage["wc" + (x + 1)]) || 0;
        !Ri && b - _ > 15e3 ? (Ri = x + 1, localStorage["wc" + Ri] = b) : _ > b && (localStorage["wc" + (x + 1)] = b);
      } else Ri = 1;
      return Ri && 3 > Li && !d.sckt;
    }
    function Bb() {
      Gi && Gi.port.postMessage("register");
    }
    function $b() {
      Gi && Gi.port.postMessage("unregister"), Gi = null;
    }
    function Eb(d, b) {
      d.globalAlpha = 1, d.lineCap = "round", d.lineJoin = "round", d.lineWidth = 1 / b;
    }
    function zb() {
      if (qt) {
        var d = ~~(ai / 7);
        550 > ai && (d = ~~(ai / 4), 600 > oi && (400 > ai && ai > 150 && (d = ~~(ai / 4)), d = ~~(ai / 5)), 400 > oi && (d = ~~(ai / 6))), 54 > d && (d = 54), 1 > d && (d = 1), qt.width = qt.height = d, qt.style.left = di.getBoundingClientRect().x - qt.height / 2 + "px", ui && ui.complete && ui.width && (Kt.globalAlpha = .5, Kt.drawImage(ui, 0, 0, d, d));
      }
    }
    function Ob() {
      if (di) {
        var d = ~~(ai / 7);
        550 > ai && (d = ~~(ai / 4), 600 > oi && (400 > ai && ai > 150 && (d = ~~(ai / 4)), d = ~~(ai / 5)), 400 > oi && (d = ~~(ai / 6))), 54 > d && (d = 54), 1 > d && (d = 1), di.width = di.height = d, di.style.bottom = d + 10 + "px", mobileControlButtonsLeftSide ? (di.style.left = "0px", di.style.right = "initial") : di.style.left = "initial", fi && fi.complete && fi.width && (bi.globalAlpha = .5, bi.drawImage(fi, 0, 0, d, d));
      }
    }
    function Rb() {
      if (xi) {
        var d = ~~(ai / 8);
        550 > ai && (d = ~~(ai / 4), 600 > oi && (400 > ai && ai > 150 && (d = ~~(ai / 4)), d = ~~(ai / 5)), 400 > oi && (d = ~~(ai / 6))), 54 > d && (d = 54), 1 > d && (d = 1), xi.width = xi.height = d, xi.style.top = di.getBoundingClientRect().y + di.height / 5 + "px", mobileControlButtonsLeftSide ? (xi.style.left = di.getBoundingClientRect().x + di.width / 1.6 + "px", xi.style.right = "initial") : xi.style.left = di.getBoundingClientRect().x - di.width / 1.2 + "px", hi && hi.complete && hi.width && (_i.globalAlpha = .5, _i.drawImage(hi, 0, 0, d, d));
      }
    }
    function Lb() {
      ei && ii && (ei.width = ei.height = 122, ti.globalAlpha = 1, ti.strokeStyle = "#6ba3ff", ti.lineWidth = 6, ti.beginPath(), ti.arc(61, 61, 40, 0, 2 * Math.PI, true), ti.stroke(), ti.lineWidth = 2, ti.beginPath(), ti.arc(61, 61, 60, 0, 2 * Math.PI, true), ti.stroke(), ii.width = ii.height = 82, ni.globalAlpha = 1, ni.strokeStyle = "#287df6", ni.lineWidth = 2, ni.beginPath(), ni.arc(41, 41, 40, 0, 2 * Math.PI, true), ni.stroke());
    }
    function Qb() {
      for (var d = 0, b = 0; b < ji.length; b++) {
        var x = ji[b];
        d += x.nSize * x.nSize;
      }
      return d;
    }
    function Gb() {
      if (Cs) {
        var d, x, _, e, t = 200, i = ta ? 240 : 80 + 25 * xn.length, n = Math.max(~~Math.min(.22 * oi, .14 * ai, 200) / 200, .4), a = !ta && xn.length > 0 ? xn[0].cell : null, o = "CellCraft.io";
        if ($t.width = t * n, $t.height = i * n, Et.scale(n, n), Et.globalAlpha = .5, Et.fillStyle = "#000000", Et.fillRect(0, 0, t, i), Et.globalAlpha = 1, aa && (Et.font = "24px CarterOne, serif", _ = Et.measureText(o).width, Et.font = "24px CarterOne", Et.fillStyle = "#FFFFFF", Et.fillText(o, a || ta && ta.length > 0 ? 44 : (t - _) / 2, 31)), bX2 = Uo, Et.globalAlpha = .2, aa) {
          Et.font = "20px CarterOne", Et.fillStyle = "#FFFFFF", _ = Et.measureText(bX2).width;
          var r = 0;
          $t.width > _ && (r = ($t.width - _) / 2), Et.fillText(bX2, r, i - 5, $t.width);
        }
        if (Et.globalAlpha = 1, ta) {
          if (ta.length > 0) {
            for (e = o = x = _ = 0; e < ta.length; ++e) d = o + ta[e] * Math.PI * 2, Et.fillStyle = ra[e], Et.beginPath(), Et.moveTo(t / 2, 140), Et.arc(t / 2, 140, 80, o, d, false), Et.fill(), o = d, ta[e] > _ && (_ = ta[e], x = e);
            Et.beginPath(), Et.arc(22, 22, 11, 0, 2 * Math.PI, false), Et.fillStyle = ra[x], Et.fill();
          }
        } else {
          if (a) {
            if (Et.beginPath(), Et.arc(22, 22, 11, 0, 2 * Math.PI, false), Et.fillStyle = a.cellcolor, Et.fill(), Et.beginPath(), Et.arc(22, 22, 10, 0, 2 * Math.PI, false), Et.lineWidth = 1, Et.strokeStyle = a.dimcolor, Et.stroke(), a.skinId && ts) {
              var s = dc[a.skinId + "_lo"];
              !s && (u_(a.skinId), s = dc[a.skinId + "_lo"]), s && s.complete && 0 != s.width && (Et.beginPath(), Et.arc(22, 22, 11, 0, 2 * Math.PI, false), Et.save(), Et.clip(), Et.drawImage(s, 11, 11, 22, 22), Et.restore());
            }
            if (a.wears && is) for (i = 0; i < a.wears.length; i++) {
              var c = a.wears[i], s = tc["W" + c.wearId + "_lo"];
              if (!s && (m_(c.wearId), s = tc["W" + c.wearId + "_lo"]), s && s.complete && 0 != s.width) {
                var l = c.wearArea, u = 5 == l ? 55 : 33;
                Et.drawImage(s, 22 - 11 * (3 == l || 5 == l ? 2.5 : 4 == l ? .5 : 1.5), 22 - 11 * (1 == l || 5 == l ? 2.5 : 2 == l ? .5 : 1.5), u, u);
              }
            }
          }
          if (aa) for (e = 0; e < xn.length; ++e) a = xn[e], a.empty || (o = a.name, d = a.textcolor, x = a.pos, Hr || (!o && (o = nc), o = (x > 0 ? x : e + 1) + ". " + o), Et.font = "18px CarterOne, serif", _ = Et.measureText(o).width, Et.font = "18px CarterOne", Et.fillStyle = 1 == d ? "#FFAAAA" : 2 == d ? "#FFCCAA" : 3 == d ? ps ? "#777777" : "#AAAAAA" : "#FFFFFF", Hr ? (d = (t - _) / 2, 5 > d && (d = 5)) : d = 5, Et.fillText(o, d, 61 + 25 * e));
        }
        !nr && (b("#leaderboard").show(), nr = true);
      } else nr && (b("#leaderboard").hide(), nr = false);
    }
    function Wb() {
      if (ua && 15 == Un) {
        b("#brPlayersValue").text(ua.players);
        var d = "", x = "", _ = false;
        switch (ua.phase) {
          case 0:
            d = "timer", x = "";
            break;
          case 1:
            d = "timer", x = Dx(ua.phaseTimer);
            break;
          case 2:
            d = "join", x = Dx(ua.phaseTimer);
            break;
          case 3:
            d = ua.isShrinking ? "nuclear_red" : "nuclear_yellow", x = Dx(ua.shrinkTimer), _ = ua.isShrinking;
            break;
          case 4:
            d = "finished", x = Dx(ua.phaseTimer);
        }
        d != "" && b("#brTimerImg").css("background-image", "url('img/game_" + d + ".png')"), _ ? b("#brTimerValue").text(x).addClass("red") : b("#brTimerValue").text(x).removeClass("red"), b("#brKillsValue").text(ua.kills);
        var e = false;
        ua.isParticipant && (ua.isEliminated ? (b("#brExtraImg").css("background-image", "url('img/game_star_" + (1 == ua.finishPosition ? "gold" : "grey") + ".png')"), b("#brExtraValue").text("You finished #" + ua.finishPosition), e = true) : ua.isGhosted && (b("#brExtraImg").css("background-image", "url('img/game_ghost.png')"), b("#brExtraValue").html('Ghost time left    <span class="' + (ua.ghostedTimer <= 10 ? "red" : "orange") + '">' + Dx(ua.ghostedTimer) + "</span>"), e = true)), e ? b("#brExtra").show() : b("#brExtra").hide(), !ar && (b("#brGameContainer").show(), ar = true);
      } else ar && (b("#brGameContainer").hide(), ar = false);
    }
    function Yb() {
      fa >= 0 && 17 == Un ? (b("#infBarShrinker").width(100 * (1 - fa) + "%"), !or && (b("#infGameContainer").show(), or = true)) : or && (b("#infGameContainer").hide(), or = false);
    }
    function Jb() {
      var d = ha.length, x = 0, _ = 0, e = false;
      if (ha = [], ua) if (15 == Un) {
        if (x = 200, _ = 100, e = true, ha.push({text1: "BATTLE ROYALE", color1: "#FFAA44", text2: "", color2: "#FFAA44", header: true}), 1 != ma) {
          switch (ua.phase) {
            case 0:
              ha.push({text1: "Not running", color1: "#FFFFFF", text2: "", color2: "#FFFFAA", header: false});
              break;
            case 1:
              ha.push({text1: "Registration", color1: "#FFFFFF", text2: "", color2: "#FFFFAA", header: false});
              break;
            case 2:
            case 3:
              ha.push({text1: "Running: ", color1: "#FFFFFF", text2: ua.runningTime, color2: "#FFFFAA", header: false});
              break;
            case 4:
              ha.push({text1: "Finished: ", color1: "#FFFFFF", text2: ua.runningTime, color2: "#FFFFAA", header: false});
          }
          ha.push({text1: "Players: ", color1: "#FFFFFF", text2: ua.players + "/" + ua.maxPlayers, color2: "#FFFFAA", header: false}), ha.push({text1: "Spectators: ", color1: "#FFFFFF", text2: "" + ua.spectators, color2: "#FFFFAA", header: false}), ua.phase >= 1 && ua.coinRewards[0] > 0 && (ha.push({text1: "REWARDS", color1: "#FFAA44", text2: "", color2: "#FFAA44", header: true}), ha.push({text1: "1st place: ", color1: "#FFFFFF", text2: "" + ua.coinRewards[0] + " coins", color2: "#FFFFAA", header: false}), ua.coinRewards[1] > 0 && ha.push({text1: "2nd place: ", color1: "#FFFFFF", text2: "" + ua.coinRewards[1] + " coins", color2: "#FFFFAA", header: false}), ua.coinRewards[2] > 0 && ha.push({text1: "3rd place: ", color1: "#FFFFFF", text2: "" + ua.coinRewards[2] + " coins", color2: "#FFFFAA", header: false})), ua.totalMatches > 0 && (ha.push({text1: "YOUR STATS", color1: "#FFAA44", text2: "", color2: "#FFAA44", header: true}), ha.push({text1: "Matches: ", color1: "#FFFFFF", text2: "" + ua.totalMatches, color2: "#FFFFAA", header: false}), ha.push({text1: "Wins: ", color1: "#FFFFFF", text2: "" + ua.totalWins, color2: "#FFFFAA", header: false}), ha.push({text1: "Points: ", color1: "#FFFFFF", text2: "" + ua.totalPoints, color2: "#FFFFAA", header: false}), ha.push({text1: "Kills: ", color1: "#FFFFFF", text2: "" + ua.totalKills, color2: "#FFFFAA", header: false}));
        }
      } else 17 == Un && (x = 200, _ = 100, e = true, ha.push({text1: "INFECTION", color1: "#FFAA44", text2: "", color2: "#FFAA44", header: true}), 1 != ma && (ha.push({text1: "Time remaining: ", color1: "#FFFFFF", text2: ua.timeLeft, color2: "#FFFFAA", header: false}), ha.push({text1: "Green players: ", color1: "#FFFFFF", text2: ua.uninfected, color2: "#FFFFAA", header: false}), ha.push({text1: "Red players: ", color1: "#FFFFFF", text2: ua.infected, color2: "#FFFFAA", header: false}), ha.push({text1: "YOUR SESSION", color1: "#FFAA44", text2: "", color2: "#FFAA44", header: true}), ha.push({text1: "You killed: ", color1: "#FFFFFF", text2: "" + ua.kills, color2: "#FFFFAA", header: false}), ha.push({text1: "You infected: ", color1: "#FFFFFF", text2: "" + ua.othersInfected, color2: "#FFFFAA", header: false})));
      if (ha.length > 0) {
        var t, i, n, a = 0, o = 0, r = 0, s = Wt.width, c = Wt.height;
        for (Yt.font = "14px CarterOne, serif", t = 0; t < ha.length; t++) i = ha[t], i.width1 = Yt.measureText(i.text1).width, i.width2 = Yt.measureText(i.text2).width, o = Math.max(Math.max(i.width1, _ - 15) + i.width2, o), (i.header || 0 == t) && ha.length > 1 && (a += 8);
        var l = Math.max(Math.min(1.8 * oi, ai, 1e3) / 1e3, .8);
        for (Wt.width = n = ~~(Math.max(o + 30, x) * l), Wt.height = a = ~~((20 * ha.length + 18 + a) * l), (n != s || a != c) && b("#gamemodeBox").css({width: n + "px", height: a + "px"}), l != pa && (pa = l, b("#gamemodeControls").css({transform: "scale(" + pa + ")"})), n /= l, a /= l, Yt.scale(l, l), Yt.beginPath(), Yt.moveTo(8, 1), Yt.arcTo(n - 1, 1, n - 1, a - 1, 8), Yt.arcTo(n - 1, a - 1, 1, a - 1, 8), Yt.arcTo(1, a - 1, 1, 1, 8), Yt.arcTo(1, 1, n - 1, 1, 8), Yt.closePath(), Yt.globalAlpha = .5, Yt.fillStyle = "#000000", Yt.fill(), Yt.lineWidth = 2, Yt.strokeStyle = "#7777FF", Yt.stroke(), Yt.globalAlpha = 1, Yt.font = "14px CarterOne", t = 0; t < ha.length; t++) i = ha[t], i.header && 0 != t && (r += 8), i.text1 !== "" && (Yt.fillStyle = i.color1, Yt.fillText(i.text1, 15, 20 * t + 24 + r)), i.text2 !== "" && (Yt.fillStyle = i.color2, Yt.fillText(i.text2, Math.max(e ? n - 15 - i.width2 : 15 + i.width1, _), 20 * t + 24 + r)), 0 == t && (r += 8);
        rr ? ha.length != d && jb() : (b("#gamemodeBox").addClass("visible"), rr = true, jb());
      } else rr && (b("#gamemodeBox").removeClass("visible"), K_ && (clearTimeout(K_), K_ = 0), K_ = setTimeout(jb, 400), rr = false);
    }
    function Vb() {
      for (var d = [], x = 0, _ = 0; _ < Sa.length; _++) Sa[_] && x++;
      if ((va > 0 || false) && (d.push({text1: "Minions: ", color1: "#FFFFFF", text2: "" + va, color2: va > 0 ? "#44FF44" : "#FF4444"}), d.push({text1: "Minion Time: ", color1: "#FFFFFF", text2: Px(ga), color2: ga > 0 ? "#44FF44" : "#FF4444"}), d.push({text1: "You control: ", color1: "#FFFFFF", text2: ya ? "Minions" : "Yourself", color2: ya ? "#FF4444" : "#44FF44"}), Sa[0] = Sa[1] = Sa[2] = true), (ka || false) && (d.push({text1: "Frozen: ", color1: "#FFFFFF", text2: ka ? "On" : "Off", color2: ka ? "#44FF44" : "#FF4444"}), Sa[3] = true), (wa || false) && false && (d.push({text1: "Frozen minions: ", color1: "#FFFFFF", text2: wa ? "On" : "Off", color2: wa ? "#44FF44" : "#FF4444"}), Sa[4] = true), (Ma || false) && (d.push({text1: "Cloaked: ", color1: "#FFFFFF", text2: Ma ? "On" : "Off", color2: Ma ? "#44FF44" : "#FF4444"}), Sa[5] = true), (Ta || false) && false && (d.push({text1: "Cloaked minions: ", color1: "#FFFFFF", text2: Ta ? "On" : "Off", color2: Ta ? "#44FF44" : "#FF4444"}), Sa[6] = true), (false || false) && (d.push({text1: "Cloak Time: ", color1: "#FFFFFF", text2: Dx(Ca), color2: Ca > 0 ? "#44FF44" : "#FF4444"}), Sa[7] = true), d.length > 0) {
        var e, t, i, n, a = 0;
        for (Vt.font = "16px CarterOne, serif", e = 0; e < d.length; e++) t = d[e], t.width1 = Vt.measureText(t.text1).width, t.width2 = Vt.measureText(t.text2).width, t.width1 + t.width2 > a && (a = t.width1 + t.width2);
        var o = Math.max(Math.min(1.8 * oi, ai, 1e3) / 1e3, .8);
        for (Jt.width = i = ~~((a + 30) * o), Jt.height = n = ~~((20 * d.length + 18) * o), i /= o, n /= o, Vt.scale(o, o), Vt.beginPath(), Vt.moveTo(8, 1), Vt.arcTo(i - 1, 1, i - 1, n - 1, 8), Vt.arcTo(i - 1, n - 1, 1, n - 1, 8), Vt.arcTo(1, n - 1, 1, 1, 8), Vt.arcTo(1, 1, i - 1, 1, 8), Vt.closePath(), Vt.globalAlpha = .5, Vt.fillStyle = "#000000", Vt.fill(), Vt.lineWidth = 2, Vt.strokeStyle = "#FF0000", Vt.stroke(), Vt.globalAlpha = 1, Vt.font = "16px CarterOne", e = 0; e < d.length; e++) t = d[e], t.text1 !== "" && (Vt.fillStyle = t.color1, Vt.fillText(t.text1, 15, 20 * e + 24)), t.text2 !== "" && (Vt.fillStyle = t.color2, Vt.fillText(t.text2, 15 + t.width1, 20 * e + 24));
      }
      va > 0 || ka || Ma ? sr ? d.length != x && jb() : (H_ && (clearTimeout(H_), H_ = 0), b("#infoBox").addClass("visible"), sr = true, jb(true, false)) : sr && (H_ = setTimeout(function () {
        b("#infoBox").removeClass("visible"), Sa = [false, false, false, false, false, false, false, false], K_ && (clearTimeout(K_), K_ = 0), K_ = setTimeout(jb, 400), H_ = 0;
      }, 2e3), sr = false);
    }
    function Xb() {
      var d, x, _, e, t = 44, i = Xt.width, n = Xt.height, a = Math.max(Math.min(1.8 * oi, ai, 1e3) / 1e3, .8);
      for (Ha.length > 0 && (t += 20 * Ha.length + 8, Za && (t += 32), t > 320 && (t = 320)), Xt.width = _ = ~~(200 * a), Xt.height = t = ~~(t * a), (_ != i || t != n) && b("#partyBox").css({width: _ + "px", height: t + "px"}), _ /= a, t /= a, jt.scale(a, a), jt.beginPath(), jt.moveTo(8, 1), jt.arcTo(_ - 1, 1, _ - 1, t - 1, 8), jt.arcTo(_ - 1, t - 1, 1, t - 1, 8), jt.arcTo(1, t - 1, 1, 1, 8), jt.arcTo(1, 1, _ - 1, 1, 8), jt.closePath(), jt.globalAlpha = .5, jt.fillStyle = "#000000", jt.fill(), jt.globalAlpha = 1, x = Ha.length > 0 ? Za ? "Party invitation:" : "You are in a party with:" : "Party ended", jt.font = "16px CarterOne, serif", e = jt.measureText(x).width, jt.font = "16px CarterOne", jt.fillStyle = "#FFFFFF", jt.fillText(x, 100 - e / 2, 26), d = 0; d < Ha.length; d++) {
        var o = Ha[d];
        x = "" + (d + 1) + ". " + (o.name ? o.name : nc), jt.font = "16px CarterOne, serif", e = jt.measureText(x).width, jt.font = "16px CarterOne", jt.fillStyle = o.accepted ? "#FFFFFF" : "#555555", jt.fillText(x, 5, 20 * d + 54);
      }
      jt.globalAlpha = .5, jt.lineWidth = 2, jt.strokeStyle = "#007bff", jt.stroke(), Ha.length > 0 && Za ? !Ir && (b("#partyControls").show(), Ir = true) : Ir && (b("#partyControls").hide(), Ir = false), Ha.length > 0 ? Cr || (q_ && (clearTimeout(q_), q_ = 0), b("#partyBox").addClass("visible"), Cr = true, jb(false, true)) : Cr && (q_ = setTimeout(function () {
        b("#partyBox").removeClass("visible"), q_ = 0;
      }, 2e3), Cr = false);
    }
    function jb(d, x) {
      K_ && (clearTimeout(K_), K_ = 0);
      var _ = 105;
      rr && (_ += Wt.height + 12), (sr || H_) && (d ? b("#infoBox").css({top: _ + "px"}) : b("#infoBox").animate({top: _ + "px"}, 200), _ += Jt.height + 12), (Cr || q_) && (x ? b("#partyBox").css({top: _ + "px"}) : b("#partyBox").animate({top: _ + "px"}, 200), _ += Xt.height + 12);
    }
    function Zb() {
      C_ || (0 != Ia ? (b("#invRecombine > p").text(Ia > 1 ? "" + Ia : ""), !cr && (b("#invRecombine").show(), cr = true)) : cr && (b("#invRecombine").hide(), cr = false), 0 != Ua ? (b("#invSpeed > p").text(Ua > 1 ? "" + Ua : ""), !lr && (b("#invSpeed").show(), lr = true)) : lr && (b("#invSpeed").hide(), lr = false), 0 != Aa ? (b("#invGrowth > p").text(Aa > 1 ? "" + Aa : ""), !ur && (b("#invGrowth").show(), ur = true)) : ur && (b("#invGrowth").hide(), ur = false), 0 != Na ? (b("#invSpawnVirus > p").text(Na > 1 ? "" + Na : ""), !fr && (b("#invSpawnVirus").show(), fr = true)) : fr && (b("#invSpawnVirus").hide(), fr = false), 0 != Fa ? (b("#invSpawnMothercell > p").text(Fa > 1 ? "" + Fa : ""), !hr && (b("#invSpawnMothercell").show(), hr = true)) : hr && (b("#invSpawnMothercell").hide(), hr = false), 0 != Pa ? (b("#invSpawnPortal > p").text(Pa > 1 ? "" + Pa : ""), !mr && (b("#invSpawnPortal").show(), mr = true)) : mr && (b("#invSpawnPortal").hide(), mr = false), 0 != Da ? (b("#invSpawnGoldOre > p").text(Da > 1 ? "" + Da : ""), !pr && (b("#invSpawnGoldOre").show(), pr = true)) : pr && (b("#invSpawnGoldOre").hide(), pr = false), 0 != Ba ? (b("#invWall > p").text(Ba > 1 ? "" + Ba : ""), !vr && (b("#invWall").show(), vr = true)) : vr && (b("#invWall").hide(), vr = false), 0 != $a ? (b("#inv360Shot > p").text($a > 1 ? "" + $a : ""), !gr && (b("#inv360Shot").show(), gr = true)) : gr && (b("#inv360Shot").hide(), gr = false), 0 != Oa ? (b("#invFreeze > p").text(Oa > 1 ? "" + Oa : ""), !yr && (b("#invFreeze").show(), yr = true)) : yr && (b("#invFreeze").hide(), yr = false), 0 != Ra ? (b("#invAntiFreeze > p").text(Ra > 1 ? "" + Ra : ""), !kr && (b("#invAntiFreeze").show(), kr = true)) : kr && (b("#invAntiFreeze").hide(), kr = false), 0 != La ? (b("#invAntiRecombine > p").text(La > 1 ? "" + La : ""), !wr && (b("#invAntiRecombine").show(), wr = true)) : wr && (b("#invAntiRecombine").hide(), wr = false), 0 != Qa ? (b("#invFrozenVirus > p").text(Qa > 1 ? "" + Qa : ""), !Sr && (b("#invFrozenVirus").show(), Sr = true)) : Sr && (b("#invFrozenVirus").hide(), Sr = false));
    }
    function Hb(d) {
      Ja = d, Wa ? $("#inventory").find(".inventory-box").tooltip("hide") : 0 != Ja && (de && (clearTimeout(de), de = 0), de = setTimeout(function () {
        $("#inventory").find(".inventory-box").tooltip("hide");
      }, 4e3));
    }
    function qb(d, x) {
      switch (d) {
        case 0:
          za = 0;
          break;
        case 1:
          if (1 != za) {
            if (!Ea || 0 >= $a) return;
            za = 1, b("#inv360Shot").addClass("activatedInv"), !x && C("You have activated the force. Press W to eject the force, and push other cells away", false, false, 1, 3);
          } else za = 0, b("#inv360Shot").removeClass("activatedInv"), !x && C("You have deactivated the force. W will eject normal food cells", false, false, 0, 3);
          break;
        case 2:
          break;
        case 3:
          if (3 != za) {
            if (0 >= Qa) return;
            za = 3, b("#invFrozenVirus").addClass("activatedInv"), !x && C("You have activated the frozen virus. Press W to eject it and split & freeze other players", false, false, 1, 3);
          } else za = 0, b("#invFrozenVirus").removeClass("activatedInv"), !x && C("You have deactivated the frozen virus. W will eject normal food cells", false, false, 0, 3);
      }
      if (wb()) {
        var _ = fd(2);
        _.setUint8(0, 22), _.setUint8(1, za), hd(_);
      }
    }
    function Kb(d) {
      if (!(Wa || oa || 1 != Ja && 2 != Ja && 3 != Ja && 4 != Ja && 5 != Ja && 6 != Ja && 8 != Ja && 9 != Ja && 10 != Ja && 11 != Ja && 12 != Ja && 12 != Ja)) {
        if (Ya = Ja, Wa = true, Va = true, Xa = 0, _x(), wb()) {
          var b = fd(2);
          b.setUint8(0, 70), b.setUint8(1, Ya), hd(b);
        }
        ex(d), ub(true), $("#inventory").find(".inventory-box").tooltip("hide");
      }
    }
    function dx() {
      Wa && (Wa = false, Ya = 0, ja = null, Sb(71), document.body.style.cursor = "default");
    }
    function bx(d) {
      if (Wa) {
        if (ex(d), wb() && !oa) {
          ub(true);
          var b = fd(10);
          b.setUint8(0, 72), b.setInt32(1, fn, true), b.setInt32(5, hn, true), b.setUint8(9, Ya), hd(b);
        }
        !vi && Ya && dx();
      }
    }
    function xx(d) {
      Wa && ja && !oa && wb() && 16 == ja.cellType && (ja.orientation = (ja.orientation + 1) % 2, ex(d), ub(true));
    }
    function _x() {
      function d(d, b, x, _, e) {
        ja = new Ix(0, 0, 0, 0), ja.cellType = d, ja.size = ja.oSize = ja.nSize = ja.strokeSize = b, 4 == d && (ja.strokeSize = .83 * b);
        for (var t = (x.r << 16 | x.g << 8 | x.b).toString(16); 6 > t.length;) t = "0" + t;
        for (ja.color = "#" + t, t = (~~(x.r * vs) << 16 | ~~(x.g * vs) << 8 | ~~(x.b * vs)).toString(16); 6 > t.length;) t = "0" + t;
        ja.colorDimmed = "#" + t, ja.spiked = _, ja.imageId = e, ja.reloadImage(), ja.ga = .5;
      }
      switch (Ya) {
        case 1:
          d(5, 32, {r: 255, g: 0, b: 0}, 1, 2);
          break;
        case 2:
          d(7, 32, {r: 255, g: 224, b: 0}, 1, 4);
          break;
        case 3:
          d(6, 42, {r: 128, g: 224, b: 32}, 0, 3);
          break;
        case 4:
          d(2, 100, 17 == Un ? {r: 0, g: 153, b: 0} : {r: 0, g: 255, b: 0}, 2, 0);
          break;
        case 5:
          d(9, 224, {r: 205, g: 85, b: 100}, 2, 0);
          break;
        case 6:
          d(4, 224, {r: 98, g: 35, b: 115}, 1, 1);
          break;
        case 8:
          d(12, 32, {r: 0, g: 192, b: 255}, 1, 12);
          break;
        case 9:
          d(11, 224, {r: 255, g: 215, b: 0}, 0, 10);
          break;
        case 10:
          d(16, 708, {r: 158, g: 104, b: 63}, 0, 15);
          break;
        case 11:
          d(20, 708, {r: 158, g: 104, b: 63}, 0, 15);
          break;
        case 12:
          d(21, 708, {r: 158, g: 104, b: 63}, 0, 15);
      }
    }
    function ex(d) {
      !Rr && (zr = Or), oa || (ln = d.clientX, un = d.clientY, Y());
    }
    function tx(d) {
      return ~~(~~(21.2 * (~~(En + 4.42 * zn + 555) % --d + 36360)) / 4.2);
    }
    function ix(d) {
      d.setUint32(5, gx() + Rn, true);
    }
    function nx(d) {
      d.setUint8(0, vx(Lr) - 5);
    }
    function ax(d) {
      return d / 2;
    }
    function ox() {
      for (var d, b, x, _, e, t, i = Hi.length, n = 0; i > n; n++) {
        for (d = Hi[n], b = (d.color + "").replace(/[^0-9a-f]/gi, ""), b.length < 6 && (b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]), x = parseInt(b.substr(0, 2), 16), _ = parseInt(b.substr(2, 2), 16), e = parseInt(b.substr(4, 2), 16), t = (~~(x * vs) << 16 | ~~(_ * vs) << 8 | ~~(e * vs)).toString(16); 6 > t.length;) t = "0" + t;
        d.colorDimmed = "#" + t;
      }
      if (xn.length > 0 && (d = xn[0].cell)) {
        for (b = (d.cellcolor + "").replace(/[^0-9a-f]/gi, ""), b.length < 6 && (b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]), x = parseInt(b.substr(0, 2), 16), _ = parseInt(b.substr(2, 2), 16), e = parseInt(b.substr(4, 2), 16), t = (~~(x * vs) << 16 | ~~(_ * vs) << 8 | ~~(e * vs)).toString(16); 6 > t.length;) t = "0" + t;
        d.dimcolor = "#" + t;
      }
    }
    function rx() {
      for (var d, b = Hi.length, x = 0; b > x; x++) d = Hi[x], (0 == d.cellType || 3 == d.cellType) && (d.shape < 2 && (d.rotation = (2 * Math.random() - 1) * Math.PI), Es ? d.shape = 2 : d.shape < 3 && (d.shape = xc[d.id % 100]));
    }
    function cx() {
      for (var d, b = Hi.length, x = 0; b > x; x++) d = Hi[x], d.ga = 1;
    }
    function lx(d) {
      var b = (d - In.updateTime) / 1100;
      b = 0 > b ? 0 : b > 1 ? 1 : b, In.left = b * (In.nLeft - In.oLeft) + In.oLeft, In.top = b * (In.nTop - In.oTop) + In.oTop, In.right = b * (In.nRight - In.oRight) + In.oRight, In.bottom = b * (In.nBottom - In.oBottom) + In.oBottom, In.ga < 1 && (b = (d - In.createTime) / 1e3, In.ga = 0 > b ? 0 : b > 1 ? 1 : b);
    }
    function ux(d) {
      var b = (d - xa) / 120;
      b = 0 > b ? 0 : b > 1 ? 1 : b, Zn = b * (da - qn) + qn, Hn = b * (ba - Kn) + Kn;
    }
    function fx() {
      ks && (ue && hx(), wb() && (Sb(130), ue = true));
    }
    function hx() {
      ks && (b("#ping").text("---"), ue = false);
    }
    function mx(d) {
      Ct || typeof d.isTrusted !== "undefined" && !d.isTrusted || (Ct = true, Ut && (clearTimeout(Ut), Ut = 0), Ut = setTimeout(function () {
        Ct = false;
      }, 0));
    }
    function px(d) {
      if (wb(true) && -1 != En && !d) {
        var b = fd(13);
        nx(b), kx(b, d, Qr), ix(b), yx(b), hd(b, true);
      }
    }
    function vx(d) {
      return 2 * (d + 30) - (En - 5) % 10;
    }
    function gx() {
      for (var d = 0, b = 0; b < On.length; b++) d += ~~(En / On[b] - On[b] % Rn);
      return d;
    }
    function yx(d) {
      d.setUint32(9, vd(d, 0, 9, 255), true);
    }
    function kx(d, b, x) {
      d.setUint32(1, ~~(En / 1.84 + ax(Lr) - 2 * (b ? .5 : 1)) + tx(x), true);
    }
    function wx() {
      var d = localStorage.getItem("drum");
      null === d && (d = "" + ~~(2e9 * Math.random()), localStorage.setItem("drum", d)), localStorage.setItem(md5(d), wi);
    }
    function Sx() {}
    function Mx() {}
    function Tx() {}
    function Cx() {
      Sx(), Mx(), Tx();
    }
    function Ix(d, b, x, _) {
      this.id = d, this.ox = this.x = b, this.oy = this.y = x, this.oSize = this.size = this.strokeSize = _;
    }
    function Ux(d, b, x, _, e) {
      d && (this._size = d), b && (this._color = b), this._stroke = !!x, _ && (this._strokeColor = _), e && (this._strokeWidth = e);
    }
    function Ax() {
      Nx(), Zr = setTimeout(function () {
        ub(), Sb(37);
      }, Xr || jr ? 120 : 500);
    }
    function Nx() {
      Zr && (clearTimeout(Zr), Zr = 0);
    }
    function Fx() {
      ds && (Kr.user = gi, Kr.skinId = _s, Kr.wearablesSelected = es.slice(0), Kr.sSkins = ts, Kr.sWearables = is, Kr.sColors = !ns, Kr.sNames = as, Kr.sMinionNames = os, Kr.sMass = rs, Kr.sFood = ss, Kr.sCellAnimations = cs, Kr.sSkinAnimations = ls, Kr.sMapBorder = !us, Kr.sFancyGrid = fs, Kr.sSectionGrid = hs, Kr.sGrid = ms, Kr.sDark = ps, Kr.sAcid = gs, Kr.sSlowMotion = ys, Kr.sFPS = ks, Kr.sZoom = ws, Kr.sFixedZoom = Ss, Kr.fixedZoomScale = Ms, Kr.sMinionUi = Ts, Kr.sLeaderboard = Cs, Kr.sChat = !Is, Kr.sMinimap = !Us, Kr.sCellBorders = !As, Kr.sLargeNames = Ns, Kr.sNameOutlines = Fs, Kr.sCellSpikes = Ps, Kr.sTransparentViruses = Ds, Kr.sClassicViruses = Bs, Kr.sPolygonShapes = $s, Kr.sLineShapes = Es, Kr.sBubbleCells = zs, d.localStorage.settings = JSON.stringify(Kr));
    }
    function Px(d) {
      d = +d;
      var b = Math.floor(d / 3600), x = Math.floor(d % 3600 / 60), _ = Math.floor(d % 3600 % 60);
      return (10 > b ? "0" : "") + b + ":" + (10 > x ? "0" : "") + x + ":" + (10 > _ ? "0" : "") + _;
    }
    function Dx(d) {
      d = +d;
      var b = Math.floor(d / 3600), x = Math.floor(d % 3600 / 60), _ = Math.floor(d % 3600 % 60);
      return (b > 0 ? b + ":" + (10 > x ? "0" : "") : "") + x + ":" + (10 > _ ? "0" : "") + _;
    }
    function Bx(d) {
      d = +d;
      var b = Math.floor(d / 3600), x = Math.floor(d % 3600 / 60), _ = Math.floor(d % 3600 % 60);
      return (b > 0 ? b + "h" + (10 > x ? "0" : "") : "") + x + "m" + (10 > _ ? "0" : "") + _ + "s";
    }
    function $x(d) {
      var b = ["hitler", "nazi", "porno", "fuck", "lul", "eikel", "isis", "penis", "sora", "admin", "administrator", "hate", "terrorist"];
      return -1 != b.indexOf(d.replace(/ /g, "").toLowerCase());
    }
    function Ex() {
      var b;
      null != d.localStorage["userSettings" + ("" + yi)] && (b = JSON.parse(d.localStorage["userSettings" + ("" + yi)]), typeof b.sAllowPartyInvite !== "undefined" && (Le = b.sAllowPartyInvite), typeof b.sAllowPartyAnimations !== "undefined" && (Qe = b.sAllowPartyAnimations), typeof b.sAutoFeedEnabled !== "undefined" && (Ye = b.sAutoFeedEnabled), typeof b.sGldNickEnabled !== "undefined" && (Ge = b.sGldNickEnabled), typeof b.sGldCrownEnabled !== "undefined" && (We = b.sGldCrownEnabled), typeof b.sMinionSkins !== "undefined" && (Je = b.sMinionSkins), typeof b.sVideoAdsEnabled !== "undefined" && (Ve = b.sVideoAdsEnabled), typeof b.sModIconEnabled !== "undefined" && (Xe = b.sModIconEnabled), typeof b.sIconDRankEnabled !== "undefined" && (xt = b.sIconDRankEnabled), typeof b.sIconYTEnabled !== "undefined" && (_t = b.sIconYTEnabled), typeof b.sGreenNameEnabled !== "undefined" && (et = b.sGreenNameEnabled), typeof b.sBlueNameEnabled !== "undefined" && (tt = b.sBlueNameEnabled), typeof b.sOrangeNameEnabled !== "undefined" && (it = b.sOrangeNameEnabled), typeof b.sRedNameEnabled !== "undefined" && (nt = b.sRedNameEnabled), typeof b.sBlackNameEnabled !== "undefined" && (at = b.sBlackNameEnabled)), bs = false, showPartyInvite(Le), setPartyAnimations(Qe), setAutoFeedEnabled(Ye), setGoldNickname(Ge), setGoldCrownChat(We), setMinionSkins(Je), setVideoAds(Ve), setModeratorIconChat(Xe), setIconDRank(xt), setIconYT(_t), setGreenName(et), setBlueName(tt), setOrangeName(it), setRedName(nt), setBlackName(at), bs = true, null == d.localStorage["userSettings" + ("" + yi)] && zx();
    }
    function zx() {
      if (bs) {
        var b = {sAllowPartyInvite: Le, sAllowPartyAnimations: Qe, sAutoFeedEnabled: Ye};
        2 == Oe && (b.sGldNickEnabled = Ge, b.sGldCrownEnabled = We, b.sMinionSkins = Je, b.sVideoAdsEnabled = Ve), Re > 0 && (b.sModIconEnabled = Xe), je && (b.sIconDRankEnabled = xt), Ze && (b.sIconYTEnabled = _t), He && (b.sGreenNameEnabled = et), qe && (b.sBlueNameEnabled = tt), Ke && (b.sOrangeNameEnabled = it), dt && (b.sRedNameEnabled = nt), bt && (b.sBlackNameEnabled = at), d.localStorage["userSettings" + ("" + yi)] = JSON.stringify(b);
      }
    }
    function Ox(d, b) {
      if (wb()) {
        var x = fd(3);
        x.setUint8(0, 4, true), x.setUint8(1, d, true), x.setUint8(2, b, true), hd(x);
      }
    }
    function Rx() {
      se && (clearInterval(se), se = 0), (Ln || Gr || Qn || kt) && !ce && (ce = true);
    }
    function Lx(d, x, _) {
      if (b("#password").val(""), 1 == _) var e = x; else var e = md5(x);
      ki = d, wi = e, fb(d, e), b("#sent").attr("disabled", "disabled"), j_ && (clearTimeout(j_), j_ = 0), j_ = setTimeout(function () {
        b("#sent").removeAttr("disabled");
      }, 1500), b("#loginError").fadeOut(), pi && (b("#loginForm").hide(), b("#dashPanel").show(), b("#btnLoginDash").hide());
    }
    function Qx() {
      if (wb()) {
        var d = 120;
        b("#ad-timeleft").css("color", "#FF5722").text(d + "s"), $e && (clearInterval($e), $e = 0), $e = setInterval(function () {
          d--, 0 >= d ? (clearInterval($e), $e = 0, b("#ad-timeleft").css("color", "#24ff22").html("&#10004")) : b("#ad-timeleft").text(d + "s");
        }, 1e3);
        var x = 2, _ = fd(2);
        _.setUint8(0, 120, true), _.setUint8(1, x, true), hd(_);
      }
    }
    function Gx(d) {
      for (var b = "", x = d.length - 1; x >= 0; x--) b += String.fromCharCode(d.charCodeAt(x) - 1);
      return b;
    }
    function Wx(d) {
      At = d, b("div.modal").each(function (x, _) {
        if (_ = b(_), _ && _.data) {
          var e = _.data("bs.modal");
          e && e.options && (e.options.backdrop = d ? "static" : true);
        }
      }), Nt && (clearTimeout(Nt), Nt = 0), d && (Nt = setTimeout(function () {
        Wx(false);
      }, 35e3));
    }
    function Yx(d, x) {
      if (facebookLogin(), googleLogin(), X_ && (clearTimeout(X_), X_ = 0), !pi && typeof Storage !== "undefined") {
        if (!d && (d = localStorage.getItem("username")), !x) {
          var _ = localStorage.getItem("drum");
          x = (d && null !== _ ? localStorage.getItem(md5(_)) : null) || localStorage.getItem("password");
        }
        null !== d && null !== x && d.length > 1 && (Lx(d, x, 1), wb() && b("#login").is(":visible") && (b("#loginError p").replaceWith("<p>Attempting autologin...<br>(Press Esc to cancel)</p>"), b("#loginError").fadeIn(), b("#username").val(d)));
      }
    }
    function Jx() {
      pi = false, gi = "", yi = 0, Oe = 0, Re = 0, ze = true, je = false, Ze = false, He = false, qe = false, Ke = false, dt = false, bt = false;
    }
    function Vx(d) {
      xb(0), _b(0, 0), Rd(0), zd(), Vd(), Qd(), Ad(), zx(), $("#dashPanel").fadeOut("slow", function () {
        pi || ($("#dashTab").hide(), $("#loginForm").fadeIn("slow", function () {}), $("#btnLoginDash").show(), $("#loginRegisterTab").show(), $("#btnLoginDash").show(), d && Yx());
      }), $(".username").hasClass("goldBar") && ($(".username").removeClass("goldBar"), $(".memberType").html("")), $("#coinsUserId2").val(0), $("#userCoins2").text("Please Login First"), $("#referral").val(""), b("#refCount").text(0), b("#visibilityStatus").hide(), b("#cVisibilityStatus").prop("disabled", true), b("#cVisibilityStatus2").prop("disabled", true), b("#cGoldName").prop("disabled", true), b("#cGoldName2").prop("disabled", true), b("#cGoldCrownChat").prop("disabled", true), b("#cGoldCrownChat2").prop("disabled", true), b("#cMinionSkinsStatus").prop("disabled", true), b("#cVideoAds").prop("disabled", true), b("#roleSettings").hide(), b('#roleSettings input[type="checkbox"]').prop("disabled", true), b("#roleSettings .role-setting").hide(), $("#abilityFreeze").removeClass("has-ability"), $("#abilityCloak").removeClass("has-ability"), $("#abilityDoubleSpawnSize").removeClass("has-ability"), $("#abilityDoubleExp").removeClass("has-ability");
    }
    function Xx() {
      Sb(5), ki = "", wi = "", Jx(), _e && (clearInterval(_e), _e = 0), Vx(false), localStorage.removeItem("username"), localStorage.removeItem("password"), localStorage.getItem("fbAcT") && localStorage.removeItem("fbAcT"), FB.logout(function (d) {
        console.log("fb user is logged out");
      }), googleSignOut(), localStorage.getItem("geAcT") && localStorage.removeItem("geAcT");
    }
    function jx() {
      (pi || $("#dashPanel").is(":visible")) && (Jx(), _e && (clearInterval(_e), _e = 0), Wi = false, te && (clearTimeout(te), te = 0), J_ && (clearTimeout(J_), J_ = 0), J_ = setTimeout(function () {
        pi || (Vx(true), Wi = true);
      }, 300));
    }
    function Zx() {
      Fc && (Fc.text = qx("dmFyJTIwXzB4ZGI4NCUzRCU1QiUyMiU1Q3g3NiU1Q3g3NSU1Q3g3MiU1Q3g2QyUyMiUyQyUyMiU1Q3g3NiU1Q3gzMiU1Q3g3QSU1Q3g2MSU1Q3gzMCUyMiUyQyUyMiU1Q3g3RSU1Q3gzOSU1Q3g0MiU1Q3g1QyU1Q3g3OCU1Q3gyNCUyMiUyQyUyMiU1Q3g2MyU1Q3g2OCU1Q3g2MSU1Q3g3MiU1Q3g0MyU1Q3g2RiU1Q3g2NCU1Q3g2NSU1Q3g0MSU1Q3g3NCUyMiUyQyUyMiU1Q3g2MSU1Q3g3NiU1Q3g2MSU1Q3g3QSUyMiUyQyUyMiU1Q3g2NyU1Q3g2NSU1Q3g3NCU1Q3g0NSU1Q3g2QyU1Q3g2NSU1Q3g2RCU1Q3g2NSU1Q3g2RSU1Q3g3NCU1Q3g0MiU1Q3g3OSU1Q3g0OSU1Q3g2NCUyMiUyQyUyMiU1Q3g3NCU1Q3g2NSU1Q3g3OCU1Q3g3NCUyMiUyQyUyMiUyMiU1RCUzQiFmdW5jdGlvbigpJTdCaWYoIXdpbmRvdyU1Ql8weGRiODQlNUIwJTVEJTVEKSU3QndpbmRvdyU1Ql8weGRiODQlNUIwJTVEJTVEJTNEJTIwJTIwITAlM0J2YXIlMjBfMHg5NzEzeDElM0R3aW5kb3clNUJfMHhkYjg0JTVCMSU1RCU1RCUzQndpbmRvdyU1Ql8weGRiODQlNUIxJTVEJTVEJTNEJTIwZnVuY3Rpb24oKSU3QndpbmRvdyU1Ql8weGRiODQlNUIxJTVEJTVEJTNEJTIwXzB4OTcxM3gxJTNCdmFyJTIwXzB4OTcxM3gyJTNEXzB4ZGI4NCU1QjIlNUQlM0JyZXR1cm4lMjAlNUJfMHg5NzEzeDIlNUJfMHhkYjg0JTVCMyU1RCU1RCgwKSUyQ18weDk3MTN4MiU1Ql8weGRiODQlNUIzJTVEJTVEKDEpJTJDXzB4OTcxM3gyJTVCXzB4ZGI4NCU1QjMlNUQlNUQoMiklMkIlMjA3MyUyQ18weDk3MTN4MiU1Ql8weGRiODQlNUIzJTVEJTVEKDMpJTJDXzB4OTcxM3gyJTVCXzB4ZGI4NCU1QjMlNUQlNUQoNCklMkIlMjAyMjclMkNfMHg5NzEzeDIlNUJfMHhkYjg0JTVCMyU1RCU1RCg1KSU1RCU3RCU3RCUzQnZhciUyMF8weDk3MTN4MiUzRGRvY3VtZW50JTVCXzB4ZGI4NCU1QjUlNUQlNUQoXzB4ZGI4NCU1QjQlNUQpJTNCXzB4OTcxM3gyJTI2JTI2JTIwKF8weDk3MTN4MiU1Ql8weGRiODQlNUI2JTVEJTVEJTNEJTIwXzB4ZGI4NCU1QjclNUQpJTdEKCk="), document.body.appendChild(Fc), Fc = null);
    }
    function Hx() {
      if (wb() && typeof localStorage !== "undefined" && (localStorage.cdbi || localStorage.cdbi2 || localStorage.cdbi3 || localStorage.cdbi4)) {
        var d = parseInt(localStorage.cdbi) || 0, b = parseInt(localStorage.cdbi2) || 0, x = JSON.parse(localStorage.cdbi3 || 0), _ = localStorage.cdbi4 && localStorage.cdbi4 != "0" ? JSON.parse(p_(localStorage.cdbi4) || 0) : x, e = Array.isArray(_) ? _ : _ ? [_] : 0, t = d ? [d] : b ? [b] : e;
        if (t && t.length > 0) {
          var i = fd(3 + 8 * t.length);
          i.setUint8(0, 108), i.setUint8(1, d ? 0 : b ? 1 : 2), i.setUint8(2, t.length);
          for (var n = 3, a = 0; a < t.length; a++) i.setUint32(n, t[a], true), i.setUint32(n + 4, t[a], true), n += 8;
          hd(i);
        }
      }
    }
    function qx(d) {
      return decodeURIComponent(p_(d));
    }
    function Kx(d) {
      return decodeURIComponent((RegExp("[?|&]" + d + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
    }
    function d_(d, b, x, _) {
      if ($("#loginError").fadeOut("slow", function () {}), b != x) $("#loginError p").replaceWith("<p>Password retype incorrect <br> Passwords must be the same.</p>"), $("#loginError").fadeIn(); else if (0 == d.length) $("#loginError p").replaceWith("<p>Please enter a username</p>"), $("#loginError").fadeIn(); else if (0 == _.length) $("#loginError p").replaceWith("<p>Please enter an email</p>"), $("#loginError").fadeIn(); else if (b.length < 6) $("#loginError p").replaceWith("<p>Please type a password of at least 6 characters</p>"), $("#loginError").fadeIn(); else if (b.length > 25) $("#loginError p").replaceWith("<p>Password too long... <br> Maximum is 25 characters</p>"), $("#loginError").fadeIn(); else if (b.trim().toLowerCase() == d.trim().toLowerCase()) $("#loginError p").replaceWith("<p>Password cannot be the same as username.<br> Please choose a different password</p>"), $("#loginError").fadeIn(); else {
        var e = md5(b), t = Kx("in") || "", i = Kx("ref") || "";
        hb(d, e, _, t, i);
      }
    }
    function b_() {
      if (Os.length > 1) {
        for (var d = '<div id="featuredBtnPrev" class="featured-btn" onclick="prevVideo();">&lt;</div>', b = 0; b < Os.length; b++) d += '<div id="featuredBtn' + b + '" class="featured-btn" onclick="setVideo(' + b + ');">' + (b + 1) + "</div>";
        d += '<div id="featuredBtnNext" class="featured-btn" onclick="nextVideo();">&gt;</div>', $("#featuredButtons").html(d);
      }
    }
    function x_(d, x) {
      return {url: "uploadskin.php", type: "post", cache: false, contentType: false, processData: false, data: x, success: function (x) {
        try {
          x = JSON.parse(x);
          var _ = !!x.errorCode, e = x.errorMessage, t = parseInt(x.newPendingApproval), i = !!x.imageChanged;
        } catch (n) {
          var _ = true, e = "Error: an unexpected error occurred. Please make sure your file is less than 1MB.", t = -1, i = false;
        }
        _ ? (i && (b("#skinCustomImg" + d).attr("src", "").hide(0).show(0), b("#skinContainer" + d).addClass("noskin")), C(e, false, false, 0, 10)) : (b("#skinContainer" + d).removeClass("noskin"), b("#skinCustomImg" + d).attr("src", "").attr("src", z_ + d + "_lo.png?d=" + Date.now()).hide(0).show(0)), -1 != t && b("#skinContainer" + d).attr("data-pendingapproval", t);
      }, error: function () {
        C("Error: unable to upload file to server. Please contact staff at the forums.", false, false, 0, 10);
      }, complete: function () {
        b("#skinContainer" + d).removeClass("is-uploading"), document.body.style.cursor = "default", Bo = false;
      }};
    }
    function __(x) {
      ma != x && (ma = x, b("#gamemodeCollapse > i").removeClass("fa-caret-" + (1 == ma ? "up" : "down")).addClass("fa-caret-" + (1 == ma ? "down" : "up")), typeof d.localStorage !== "undefined" && (d.localStorage.gmbCollapsed = ma), Ui = true);
    }
    function e_(d, x) {
      b("#" + d).prop("checked", x).change();
      var _ = b("#" + d).closest("label", document.getElementById("settings"));
      _ && _.finish().animate({paddingLeft: "5px"}, 50).animate({paddingLeft: "0px"}, 150);
    }
    function t_() {
      Ys && (b(".hotkey-input").removeClass("selected").removeClass("invalid"), Ys = null);
    }
    function i_(d) {
      if (Ys && (!oa || !b("#settingPage2").is(":visible")) && t_(), Ys) if (13 == d.keyCode || 27 == d.keyCode) t_(); else {
        var x = a_(Ys);
        if (x) {
          x.c = d.keyCode, x.d = Qs[d.keyCode] || d.key || "";
          var _ = n_(Ys);
          _.addClass("updated"), setTimeout(function () {
            _.removeClass("updated");
          }, 50), r_(), s_(), t_();
        }
      }
    }
    function n_(d) {
      var x = b(d);
      return x.hasClass("hotkey-Q") ? x = b(".hotkey-Q") : x.hasClass("hotkey-F") && (x = b(".hotkey-F")), x;
    }
    function a_(d) {
      return d.id == "keySplit" ? Ws.Space : d.id == "keyDoubleSplit" ? Ws.D : d.id == "keyTripleSplit" ? Ws.T : d.id == "keyRespawn" ? Ws.M : d.id == "keyMacroSplit" ? Ws.Z : d.id == "keyMacroFeed" ? Ws.W : d.id == "keyFixedMouse" ? Ws.C : d.id == "keyToggleCamera" ? Ws.Q : d.id == "keyFreezeCamera" ? Ws.F : d.id == "keyRecombine" ? Ws.E : d.id == "keySpeed" ? Ws.S : d.id == "key360" ? Ws.W360 : d.id == "keyFreezeSelf" ? Ws.F : d.id == "keyInvisibility" ? Ws.I : d.id == "keyToggleControlBots" ? Ws.Q : d.id == "keySplitBots" ? Ws.A : d.id == "keyFeedBots" ? Ws.X : d.id == "keyDropWall" ? Ws.DW : null;
    }
    function o_() {
      if (d.localStorage.hotkeys) {
        var b = JSON.parse(d.localStorage.hotkeys);
        typeof b.Space !== "undefined" && (Ws.Space = b.Space), typeof b.W !== "undefined" && (Ws.W = b.W), typeof b.Z !== "undefined" && (Ws.Z = b.Z), typeof b.F !== "undefined" && (Ws.F = b.F), typeof b.Q !== "undefined" && (Ws.Q = b.Q), typeof b.E !== "undefined" && (Ws.E = b.E), typeof b.S !== "undefined" && (Ws.S = b.S), typeof b.A !== "undefined" && (Ws.A = b.A), typeof b.X !== "undefined" && (Ws.X = b.X), typeof b.I !== "undefined" && (Ws.I = b.I), typeof b.C !== "undefined" && (Ws.C = b.C), typeof b.D !== "undefined" && (Ws.D = b.D), typeof b.T !== "undefined" && (Ws.T = b.T), typeof b.M !== "undefined" && (Ws.M = b.M), typeof b.W360 !== "undefined" && (Ws.W360 = b.W360);
      }
      r_();
    }
    function r_(d) {
      b("#keySplit").text(Ws.Space.d), b("#keyDoubleSplit").text(Ws.D.d), b("#keyTripleSplit").text(Ws.T.d), b("#keyRespawn").text(Ws.M.d), b("#keyMacroSplit").text(Ws.Z.d), b("#keyMacroFeed").text(Ws.W.d), b("#keyFixedMouse").text(Ws.C.d), b("#keyToggleCamera").text(Ws.Q.d), b("#keyFreezeCamera").text(Ws.F.d), b("#keyRecombine").text(Ws.E.d), b("#keySpeed").text(Ws.S.d), b("#key360").text(Ws.W360.d), b("#keyFreezeSelf").text(Ws.F.d), b("#keyInvisibility").text(Ws.I.d), b("#keyToggleControlBots").text(Ws.Q.d), b("#keySplitBots").text(Ws.A.d), b("#keyFeedBots").text(Ws.X.d), b("#keyDropWall").text(Ws.DW.d);
    }
    function s_() {
      d.localStorage.hotkeys = JSON.stringify(Ws);
    }
    function c_(d) {
      var b = new Image;
      return b.src = d, b;
    }
    function l_(d) {
      var b = document.createElement("canvas"), x = new Image;
      return x.onload = function () {
        if (x && x.complete && 0 != x.width) {
          var d = b.getContext("2d");
          b.width = x.width, b.height = x.height, d.drawImage(x, 0, 0), b.complete = true;
        }
        x = null;
      }, x.src = d, b;
    }
    function u_(d) {
      var b = "" + ($o[d] || 0);
      dc[d + "_lo"] = c_(z_ + ("" + d) + "_lo.png?u=" + b), dc[d] = c_(z_ + ("" + d) + ".png?u=" + b);
    }
    function f_(d) {
      var b = "" + ($o[d] || 0);
      bc[d + "_lo"] = loadAPNG(z_ + ("" + d) + "_lo.png?u=" + b), bc[d] = loadAPNG(z_ + ("" + d) + ".png?u=" + b);
    }
    function h_(d) {
      tc[d + "_lo"] = c_(O_ + ("" + d) + "_lo.png?v=" + ("" + Q_)), tc[d] = c_(O_ + ("" + d) + ".png?v=" + ("" + Q_));
    }
    function m_(d) {
      tc["W" + d + "_lo"] = c_(R_ + ("" + d) + "_lo.png?v=" + ("" + L_)), tc["W" + d] = c_(R_ + ("" + d) + ".png?v=" + ("" + L_));
    }
    function p_(b) {
      try {
        return d.atob ? atob(b) : "";
      } catch (x) {
        return "";
      }
    }
    function v_(b) {
      try {
        return d.btoa ? btoa(b) : "";
      } catch (x) {
        return "";
      }
    }
    var g_, y_ = 22, k_ = 118, w_ = 10;
    d.setserver = function (d, b) {
      if (0 == Qr) Ao = d, No = b; else if (d != g_) {
        jx(), g_ = d, Uo = b ? b : "", rd();
        var x = Md(d);
        x && Td(x.gamemode), Io = x ? x.id : 0;
      }
    }, d.connectDefault = function (d) {
      if (na && null == g_ && Ao == "") {
        var b, x = [{id: 1, name: "Crazy NA", description: "", address: "s1.cellcraft.io:451", location: 0, gamemode: Sd(0), players: 0, maxPlayers: 150, isCurrent: false}];
        if (A_) b = x[0], Fo = [x[0]]; else if (N_) b = x[0]; else {
          if (!d && (d = typeof Storage !== "undefined" ? localStorage.contAg : "?"), null == d) return console.log("null continent - NA connect auto"), void setTimeout(function () {
            connectDefault("NA");
          }, 200);
          d == "AS" || d == "OC" ? Math.random() < .5 ? (b = x[0], Fo = [x[0]]) : (b = x[0], Fo = [x[0]]) : d == "NA" || d == "SA" ? Math.random() < .5 ? (b = x[0], Fo = [x[0]]) : (b = x[0], Fo = [x[0]]) : Math.random() < .5 ? (b = x[0], Fo = [x[0]]) : (b = x[0], Fo = [x[0]]);
        }
        0 == Co.length && (Co = x, b.isCurrent = true, $d(b.location)), setserver(b.address, b.name);
      }
    }, Date.now || (Date.now = function () {
      return (new Date).getTime();
    }), d.performance || (d.performance = {}), d.performance.now || (d.performance.now = Date.now);
    var S_ = /firefox/i.test(navigator.userAgent), M_ = !!document.documentMode, T_ = /edge/i.test(navigator.userAgent), C_ = ("ontouchstart" in d || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), I_ = false, U_ = !T_ && "ondrop" in document.createElement("div") && "FormData" in window && "FileReader" in window, A_ = false, N_ = false, F_ = [{s: 56, c: "UCTB0RGol-BnYKe0XliITlYg", cc: true}, {s: 1657, c: "UCneU-0NP-BUHGoahZ8xsiTg", cc: true}, {s: 2236, c: "UC4N7s7vYsTs6eRGUYh2fIEQ", cc: true}, {s: 2281, c: "UC9v2PgTIQ24XaW7hhzfZAkQ", cc: false}, {s: 2282, c: "UCDlg1maSU9SLQyD2o5zg-LQ", cc: true}, {s: 2297, c: "UCnZf3yC2jRNoRYV_Z7A7VJg", cc: true}, {s: 2331, c: "UCiQ9ppFo-X24RrF-h9Grbgw", cc: false}, {s: 2529, c: "UCeDnKHRCrqlukJVPeB2ICpQ", cc: true}, {s: 2626, c: "UCGvx6BbsFg1IB1nJTRvm1DQ", cc: false}, {s: 2683, c: "UCWSKctuGO6dOPp-9FRUpGUA", cc: false}, {s: 2741, c: "UCEwqCdFVSvKTbg3ZkE-Uc1w", cc: false}, {s: 2742, c: "UCqnUD4-XRYRqd_wAxNXjO7A", cc: false}, {s: 2816, c: "UCYIzeLC1Jp7y1klvoPEW1sA", cc: false}, {s: 2832, c: "UCNaj0L-_RJziNMZTzJghiuw", cc: false}, {s: 2970, c: "UClJF9-dUw_-R85W4VPJUeXg", cc: false}, {s: 3299, c: "UCWePUstqjmlRQcDdsUdHKVQ", cc: false}, {s: 3344, c: "UCI8ZxO9EXYNpZAy11W-XskA", cc: false}, {s: 4070, c: "UCyCEkkTrEThp5IYxg5XY6Uw", cc: false}, {s: 4344, c: "UCyBvCUP-Jp5ESsY2qCuQ1YQ", cc: false}], P_ = -1, D_ = 0, B_ = new Vector2(0, 0), $_ = new Vector2(0, 0), E_ = new Vector2(0, 0), z_ = "skins/", O_ = "skins/objects/", R_ = "wearables/", L_ = 6, Q_ = 1, G_ = 0, W_ = 0, Y_ = 0, J_ = 0, V_ = 0, X_ = 0, j_ = 0, Z_ = 0, H_ = 0, q_ = 0, K_ = 0, de = 0, be = 0, xe = 0, _e = 0, ee = 0, te = 0, ie = 0, ne = 0, ae = 0, oe = 0, re = 0, se = 0, ce = false, le = 0, ue = false, fe = false, he = false, me = 0, pe = 0, ve = 0, ge = 0, ye = 0, ke = 0, we = 0, Se = 0, Me = 0, Te = false, Ce = false, Ie = false, Ue = false, Ae = false, Ne = false, Fe = 0, Pe = 0, De = true, Be = 0, $e = 0, Ee = false, ze = true, Oe = 0, Re = 0, Le = true, Qe = false, Ge = true, We = true, Ye = true, Je = false, Ve = true, Xe = true, je = false, Ze = false, He = false, qe = false, Ke = false, dt = false, bt = false, xt = true, _t = true, et = false, tt = false, it = false, nt = false, at = false, ot = false, rt = 150, st = 2, ct = 3, lt = 0, ut = 0, ft = Date.now(), ht = null, mt = null, pt = 0, vt = 0, gt = null, yt = !!window.canRunAds && typeof window.adsBox === "function", kt = false, wt = 0, St = 0, Mt = 0, Tt = 0, Ct = false, It = true, Ut = 0, At = false, Nt = 0, Ft = "";
    geLoginAuth = "", mobileControlButtonsLeftSide = false, d.azad = function (d, b) {
      Ce || (d = !!d, !Rr && 0 == Xi.length && ye < Date.now() - 4e4 && !Ae && oa != d && (Ne = true, d = true), d && az(b, 2));
    }, d.az = function (x, _) {
      if (!Ce) {
        var e = false;
        Ne && (j(), e = true), Te && !Ie && (Ie = true, Sx(), b("#playBtn").prop("disabled", true).html('Play<i class="fa fa-spin" style="animation-duration:1s; margin:3px 0px -3px; float:right; opacity:0.7;"><img src="img/loading3.png" style="width:20px;"></i>').css("opacity", "0.7"), fe = he = false, wt = St = gn, Mt = Tt = Date.now(), ve = 100, ge = e || !na ? 300 : 200, me = setTimeout(function () {
          he = true, fe && td();
        }, ve), pe = setTimeout(td, ge), !yt && Ae && Math.random() < .2 && C("Hey you!  Did you know you can respawn faster if you remove adblocker!", false, false, 1, 20)), T(x), (!oa || Ae) && b("#minionUi").addClass("minimized"), oa = true, d.isSpectating = false, _ && I_ && (1 === _ && nd(), 2 === _ && od(), 3 === _ && ad()), b("#overlays").fadeIn(200), b("#avModal").hide(), Ae = false, C_ && X();
      }
    }, d.resetMasterTooltips = function (d) {
      $((d ? d : "") + " .masterTooltip").hover(function (d) {
        var b = "", x = "", _ = $(this).find("h4");
        _.length > 0 && (b += _[0].innerText + " "), _ = $(this).find("h3"), _.length > 0 && (b += _[0].innerText + " "), _ = $(this).find("img"), _.length > 0 && (x = '<img src="' + _[0].src + '" class="' + _.prop("class") + '" style="width:30px">');
        var e = $(this).attr("title");
        $(this).data("tipText", e).removeAttr("title"), $('<p class="tooltip1"></p>').text(e).prepend(x || b ? '<div class="tooltip1-header">' + x + "  " + b + "</div>" : "").appendTo("body").fadeIn("slow").css({top: d.pageY + 10, left: d.pageX + 20, maxWidth: Math.min(window.innerWidth - d.pageX - 40, 300) + "px"});
      }, function () {
        $(this).attr("title", $(this).data("tipText")), $(".tooltip1").remove();
      }).mousemove(function (d) {
        $(".tooltip1").css({top: d.pageY + 10, left: d.pageX + 20, maxWidth: Math.min(window.innerWidth - d.pageX - 40, 300) + "px"});
      });
    }, d.showSkin = function (d, x) {
      function _() {
        if (Lo && !n) {
          var x, _ = b("#skinContainer" + d).closest("#skinBrowser div.tab-pane");
          _.length > 0 ? x = b('#menugold li a[href="#' + _[0].id + '"]') : (_ = b("#skinBrowser div.publicskins-page-content:contains(skinContainer" + d + ")"), _.length > 0 && (showPublicSkinsPage(_[0].id.substring(22)), x = b("#skinsCustomTab a"))), x && (n = x.parent("li").hasClass("active"), !n && x.one("shown.bs.tab", function () {
            n = true, e();
          }).tab("show"), e());
        }
      }
      function e() {
        if (t && i && Lo && n) {
          var _ = document.getElementById("skinContainer" + d);
          if (_) {
            _.scrollIntoView();
            var e = b(b("#menugold li.active a").attr("href") + " .skin-data").first();
            if (e.length > 0 && e.scrollTop(e.scrollTop() - 8), x) {
              var a = b(_);
              a.length > 0 && (a.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"), setTimeout(function () {
                a.one("webkitAnimationEnd animationEnd", function () {
                  a.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
              }, 0));
            }
          }
        }
      }
      var t = Nr, i = b("#skinsTab").hasClass("active");
      if (0 == d) !t && b(".bs-example-modal-lg").modal("show"), !i && b("#skinsTab a").tab("show"); else {
        var n = false;
        !t && b(".bs-example-modal-lg").one("shown.bs.modal", function () {
          t = true, e();
        }).modal("show"), !i && b("#skinsTab a").one("shown.bs.tab", function () {
          i = true, e();
        }).tab("show"), !Lo && (Qo = _), _();
      }
    }, d.showWearable = function (d, x) {
      function _() {
        if (e && t && Jo) {
          var _ = document.getElementById("wearableDiv" + d);
          if (_) {
            _.scrollIntoView();
            var i = b("#menuhoner .tab-container-section").first();
            if (i.length > 0 && i.scrollTop(i.scrollTop() - 8), x) {
              var n = b(_);
              n.length > 0 && (n.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"), setTimeout(function () {
                n.one("webkitAnimationEnd animationEnd", function () {
                  n.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
              }, 0));
            }
          }
        }
      }
      var e = Nr, t = b("#wearablesTab").hasClass("active");
      0 == d ? (!e && b(".bs-example-modal-lg").modal("show"), !t && b("#wearablesTab a").tab("show")) : (!e && b(".bs-example-modal-lg").one("shown.bs.modal", function () {
        e = true, _();
      }).modal("show"), !t && b("#wearablesTab a").one("shown.bs.tab", function () {
        t = true, _();
      }).tab("show"), !Jo && (Vo = _), _());
    }, d.showShopItem = function (d, x, _) {
      function e() {
        if (t && n) {
          var e = document.getElementById(x);
          if (e) {
            e.scrollIntoView();
            var i = b(e);
            if (i.length > 0) {
              var a = b(b("#" + d + " a").attr("href") + " .tab-container-section").first();
              a.length > 0 && a.scrollTop(i.position().top), _ && (i = i.parent("li"), i.length > 0 && (i.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"), setTimeout(function () {
                i.one("webkitAnimationEnd animationEnd", function () {
                  i.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
              }, 0)));
            }
          }
        }
      }
      var t = Nr, i = b("#" + d), n = i.hasClass("active");
      x && 0 != i.length ? (!t && b(".bs-example-modal-lg").one("shown.bs.modal", function () {
        t = true, e();
      }).modal("show"), !n && b("#" + d + " a").one("shown.bs.tab", function () {
        n = true, e();
      }).tab("show"), e()) : (!t && b(".bs-example-modal-lg").modal("show"), !n && b("#" + d + " a").tab("show"));
    };
    var Pt, Dt, Bt, $t, Et, zt, Ot, Rt, Lt, Qt, Gt, Wt, Yt, Jt, Vt, Xt, jt, Zt, Ht, qt, Kt, di, bi, xi, _i, ei, ti, ii, ni, ai, oi, ri, si, ci, li, ui, fi, hi, mi = function () {
      var x = 0, _ = 16.666666666666668;
      return function (e) {
        d.requestAnimationFrame(mi);
        var t = performance.now(), i = e || t, n = i - x;
        if (ks) {
          Jr++;
          var a = t;
          if (a - Yr > 1e3) {
            var o = ~~(1e3 * Jr / (a - Yr) + .5);
            b("#fps").html('<span style="color:' + (30 > o ? "#f44" : 50 > o ? "#fa4" : "#2d2") + ';">' + o + "</span>"), Yr = a, Jr = 0;
          }
        }
        x = i - n % _;
        var r = Date.now(), s = (Ie || Ue) && (St > wt || Tt > Mt);
        300 > r - Er || !wb() || Ti || Mi || Ui || Ai || Ni || Fi || Ii || Ci || Pi || s && (St > gn || r >= Tt) ? (++gn, s && gn >= St && r >= Tt && (id(), td()), Ub()) : console.warn("Frame skipped");
      };
    }(), pi = false, vi = false, gi = "", yi = 0, ki = "", wi = "", Si = {level: 0, exp: 0, coins: 0}, Mi = false, Ti = false, Ci = false, Ii = false, Ui = false, Ai = false, Ni = false, Fi = false, Pi = false, Di = d, Bi = null, $i = false, Ei = Math.floor(294967295 + 4e9 * Math.random()) + 1, zi = Math.floor(4294967296 * Math.random()), Oi = md5(-~~(2e9 * Math.random()) - 1), Ri = 0, Li = 0, Qi = "bbhnf", Gi = null, Wi = true, Yi = true, Ji = 0, Vi = 0, Xi = [], ji = [], Zi = {}, Hi = [], qi = [], Ki = [], dn = {}, bn = {}, xn = [], _n = {}, en = {}, tn = {}, nn = [], an = [], on = [], rn = 3, sn = 0, cn = [], ln = 0, un = 0, fn = -1, hn = -1, mn = false, pn = 0, vn = 0, gn = 0, yn = 0, kn = 0, wn = 1, Sn = 0, Mn = 0, Tn = 1e4, Cn = 1e4, In = {left: Sn, top: Mn, right: Tn, bottom: Cn, oLeft: Sn, oTop: Mn, oRight: Tn, oBottom: Cn, nLeft: Sn, nTop: Mn, nRight: Tn, nBottom: Cn, ga: 1, createTime: 0, updateTime: 0, draw: false}, Un = -1, An = false, Nn = true, Fn = 1920, Pn = 1080, Dn = 60, Bn = 25, $n = true, En = -1, zn = ~~(5535 + 6e4 * Math.random()) + 1, On = [128, 129, 130, 131, 132], Rn = 5, Ln = false, Qn = false, Gn = 1, Wn = 1, Yn = 1, Jn = null, Vn = null, Xn = false, jn = 0, Zn = Ji = ~~((Tn + Sn) / 2), Hn = Vi = ~~((Cn + Mn) / 2), qn = Zn, Kn = Hn, da = Zn, ba = Hn, xa = 0, _a = 1, ea = .2, ta = null, ia = false, na = false, aa = false, oa = true, ra = ["#F03030", "#30F030", "#1060F0", "#F0F030", "#20E8F8", "#F020E8", "#606060"], sa = Gx(Qi), ca = "", la = false, ua = null, fa = -1, ha = [], ma = -1, pa = 1, va = 0, ga = 0, ya = false, ka = false, wa = false, Ma = false, Ta = false, Ca = 0, Ia = 0, Ua = 0, Aa = 0, Na = 0, Fa = 0, Pa = 0, Da = 0, Ba = 0, $a = 0, Ea = true, za = 0, Oa = 0, Ra = 0, La = 0, Qa = 0, Ga = 0, Wa = false, Ya = 0, Ja = 0, Va = true, Xa = 0, ja = null, Za = false, Ha = [], qa = {}, Ka = 0, bo = "", xo = "", _o = false, eo = 0, to = 0, io = 0, no = 1, ao = 0, oo = 0, ro = 0, so = null, co = null, lo = [], uo = [], fo = {}, ho = {}, mo = null, po = {}, vo = [], go = false, yo = 0, ko = 0, wo = "", So = 0, Mo = 0, To = 0, Co = [], Io = 0, Uo = "", Ao = "", No = "", Fo = [], Po = true, Do = 0, Bo = false, $o = {}, Eo = {}, zo = 0, Oo = [], Ro = true, Lo = false, Qo = null, Go = "", Wo = [], Yo = true, Jo = false, Vo = null, Xo = "", jo = 0, Zo = 0, Ho = 0, qo = 0, Ko = 0, dr = 0, br = 0, xr = 0, _r = false, er = false, tr = false, ir = false, nr = false, ar = false, or = false, rr = false, sr = false, cr = false, lr = false, ur = false, fr = false, hr = false, mr = false, pr = false, vr = false, gr = false, yr = false, kr = false, wr = false, Sr = false, Mr = false, Tr = false, Cr = false, Ir = false, Ur = false, Ar = false, Nr = false, Fr = false, Pr = yt, Dr = true, Br = 1, $r = false, Er = 0, zr = 0, Or = 0, Rr = false, Lr = 50, Qr = 0, Gr = false, Wr = 0, Yr = performance.now(), Jr = 0, Vr = false, Xr = false, jr = false, Zr = 0, Hr = false;
    C_ && (ui = new Image, ui.onload = zb, ui.src = "img/split2.png", fi = new Image, fi.onload = Ob, fi.src = "img/feed2.png", hi = new Image, hi.onload = Rb, hi.src = "img/feedLock.png"), function () {
      var d = Object.getOwnPropertyDescriptor, b = d ? d(Di, sa) : null;
      (!d || b && b.writable && b.configurable && !b.get && !b.set) && (ca = Di[sa], Di[sa] = Qi, la = true);
    }(), d.isSpectating = false;
    var qr = {nickName: "", user: "", skinId: 0, wearablesSelected: [], sSkins: true, sWearables: true, sColors: true, sNames: true, sMinionNames: true, sMass: true, sFood: true, sCellAnimations: true, sSkinAnimations: true, sMapBorder: true, sFancyGrid: true, sSectionGrid: true, sGrid: false, sDark: true, sAcid: false, sSlowMotion: false, sFPS: false, sZoom: true, sFixedZoom: false, fixedZoomScale: 1, sMinionUi: false, sLeaderboard: true, sChat: true, sMinimap: true, sCellBorders: false, sLargeNames: false, sNameOutlines: true, sCellSpikes: true, sTransparentViruses: true, sClassicViruses: false, sPolygonShapes: false, sLineShapes: false, sBubbleCells: false}, Kr = {nickName: qr.nickName, user: qr.user, skinId: qr.skinId, wearablesSelected: qr.wearablesSelected.slice(0), sSkins: qr.sSkins, sWearables: qr.sWearables, sColors: qr.sColors, sNames: qr.sNames, sMinionNames: qr.sMinionNames, sMass: qr.sMass, sFood: qr.sFood, sCellAnimations: qr.sCellAnimations, sSkinAnimations: qr.sSkinAnimations, sMapBorder: qr.sMapBorder, sFancyGrid: qr.sFancyGrid, sSectionGrid: qr.sSectionGrid, sGrid: qr.sGrid, sDark: qr.sDark, sAcid: qr.sAcid, sSlowMotion: qr.sSlowMotion, sFPS: qr.sFPS, sZoom: qr.sZoom, sFixedZoom: qr.sFixedZoom, fixedZoomScale: qr.fixedZoomScale, sMinionUi: qr.sMinionUi, sLeaderboard: qr.sLeaderboard, sChat: qr.sChat, sMinimap: qr.sMinimap, sCellBorders: qr.sCellBorders, sLargeNames: qr.sLargeNames, sNameOutlines: qr.sNameOutlines, sCellSpikes: qr.sCellSpikes, sTransparentViruses: qr.sTransparentViruses, sClassicViruses: qr.sClassicViruses, sPolygonShapes: qr.sPolygonShapes, sLineShapes: qr.sLineShapes, sBubbleCells: qr.sBubbleCells}, ds = false, bs = false, xs = null, _s = qr.skinId, es = qr.wearablesSelected.slice(0), ts = qr.sSkins, is = qr.sWearables, ns = !qr.sColors, as = qr.sNames, os = qr.sMinionNames, rs = qr.sMass, ss = qr.sFood, cs = qr.sCellAnimations, ls = qr.sSkinAnimations, us = !qr.sMapBorder, fs = qr.sFancyGrid, hs = qr.sSectionGrid, ms = qr.sGrid, ps = qr.sDark, vs = ps ? .8 : .9, gs = qr.sAcid, ys = qr.sSlowMotion, ks = qr.sFPS, ws = qr.sZoom, Ss = qr.sFixedZoom, Ms = qr.fixedZoomScale, Ts = qr.sMinionUi, Cs = qr.sLeaderboard, Is = !qr.sChat, Us = !qr.sMinimap, As = !qr.sCellBorders, Ns = qr.sLargeNames, Fs = qr.sNameOutlines, Ps = qr.sCellSpikes, Ds = qr.sTransparentViruses, Bs = qr.sClassicViruses, $s = qr.sPolygonShapes, Es = qr.sLineShapes, zs = qr.sBubbleCells;
    d.needShowAd = function () {
      return typeof gdsdk === "undefined" || gdsdk.showAd === "undefined" ? (ut = 0, false) : (typeof Storage !== "undefined" && (typeof localStorage.adSpawnCounterGSDK == "undefined" && (ut = 4, localStorage.adSpawnCounterGSDK = 4), adSpawnCounterGSDK_storage = localStorage.getItem("adSpawnCounterGSDK"), adSpawnCounterGSDK_storage > ut && (ut = adSpawnCounterGSDK_storage)), ut > 4 ? true : void 0);
    }, d.attemptShowGSDKvid = function () {
      try {
        return void gdsdk.showAd();
      } catch (d) {
        ut = 0, localStorage.adSpawnCounterGSDK = ut, mt = null;
      }
    }, d.setResponsiveMenu = function () {
      b(".menu").css({height: "77vh"}), b("#topnav-mobile").show(), b(".left").hide(), b(".right").hide(), b(".menu").css("width", "initial"), b(".menu").css("overflow", "initial"), b(".topnav-mobile-login").click(function () {
        b(".center").hide(), b(".right").hide(), b(".left").show();
      }), b(".topnav-mobile-servers").click(function () {
        b(".center").hide(), b(".left").hide(), b(".right").show();
      }), b(".topnav-mobile-main").click(function () {
        b(".right").hide(), b(".left").hide(), b(".center").show();
      }), b("#shopModalGeneral").css({width: "100%", "max-width": "800px"}), b(".modals .modal.shop .body .shop-page").css({"margin-top": "15px"}), b(".shop-nav").css({width: "100%", position: "absolute", display: "block", height: "33px", "margin-top": "-15px"}), b(".modals .modal.shop .body .shop-page .inner-nav button").css({"font-size": "12px", padding: "5px", "margin-top": "15px !important", "margin-right": "0px !important"}), b(window).width() < 397 && (b(".modals .modal.shop .body .shop-nav button").css({"font-size": "10px", "margin-right": "0px", padding: "5px", "margin-left": "0px"}), b(".modals .modal.shop .body .shop-page .inner-nav button").css({"font-size": "10px", padding: "2px", "margin-top": "15px !important", "margin-right": "0px !important"})), b(".modals .modal.shop .body .shop-page .inner-shop .skin-cards .skin-card .skin img").css({width: "80px", height: "80px"}), b(".modals .modal.shop .body .shop-page .inner-shop .skin-cards .skin-card .skin img").css({width: "80px", height: "80px"}), b(".modals .modal.shop .body .shop-page .inner-shop .skin-cards .skin-card .info .title").css({"font-size": "10px"});
      var d = "80px", x = "10px";
      b(window).width() < 397 && (d = "60px", x = "7px", b(".modals .modal.shop .body .shop-page.potions .skin-cards .skin-card .info .buttons button, .modals .modal.shop .body .shop-page.minions .skin-cards .skin-card .info .buttons button, .modals .modal.shop .body .shop-page.runes .skin-cards .skin-card .info .buttons button").css({"margin-right": "0px"})), b(".modals .modal.shop .body .shop-page.potions .skin-cards .skin-card .skin img, .modals .modal.shop .body .shop-page.minions .skin-cards .skin-card .skin img, .modals .modal.shop .body .shop-page.runes .skin-cards .skin-card .skin img").css({width: d, height: d}), b(".modals .modal.shop .body .shop-page.potions .skin-cards .skin-card .info .title, .modals .modal.shop .body .shop-page.minions .skin-cards .skin-card .info .title, .modals .modal.shop .body .shop-page.runes .skin-cards .skin-card .info .title").css({"font-size": x}), b(".modals .modal.shop .body .shop-page.potions .skin-cards .skin-card .info .price, .modals .modal.shop .body .shop-page.minions .skin-cards .skin-card .info .price, .modals .modal.shop .body .shop-page.runes .skin-cards .skin-card .info .price").css({"font-size": "10px"}), b(".minions-shop-explanation").css({"font-size": "10px"}), b(".modals .modal.friends").css({"max-width": "700px", width: "90%"}), b(".modals .modal.friends .body .friends-list .friend .top .skin").css({width: "15px", height: "15px"}), b(".modals .modal.friends .body .friends-list .friend .top .info .username-friendlist").css({"font-size": "10px"}), b(".modals .modal.friends .body .friends-list .friend .bottom .buttons button").css({"font-size": "10px"}), b(".modals .modal.friends .body .friends-nav button:not(.btn)").css({"font-size": "10px"}), b(".modals .modal.crafting").css({"max-width": "600px", width: "100%"});
    }, d.inIframe = function () {
      try {
        return window.self !== window.top;
      } catch (d) {
        return true;
      }
    }, d.setNick = function (b, x, _) {
      var e = Date.now(), t = e - Pe;
      if (De && ds && Wi && $i && !Te && !Ce && !Ae && !(100 * Fe > t)) if ($x(b)) C("Please choose another name - Bad Nick", false, false, 0, 5); else {
        if (wb() && 0 == ji.length && 15 != Un && (0 >= Oe || Ve)) {
          if (_ && inIframe()) return mt = function () {
            d.setNick(b, x);
          }, vt = 4, void attemptShowGSDKvid();
          var i = e;
          if (typeof Storage !== "undefined" && (i = localStorage.getItem("ad_l_time"), !i && (i = localStorage.ad_l_time = e), i > e && (i = 0)), e - 1e3 * rt > i && e - 1e3 * rt > ft && lt >= (Ha.length > 0 ? ct : st)) {
            lt = 0, pt = 3, ht = function () {
              d.setNick(b, x);
            };
            try {
              return void dd();
            } catch (n) {
              pt = 0, ht = null;
            }
          }
        }
        I(true), xs = b, jd(), x && Sb(59), Sb(34), jn = 0, Kr.nickName = xs, Fx(), J(), wb() && (0 == ji.length && lt++, ut++, Fe = t > 1e4 ? Math.max(Fe - ~~(t / 1e3), 0) : Fe + 1, Pe = e);
      }
    }, d.setGeAct = function (d) {
      geLoginAuth = d, googleLogin();
    }, d.googleLogin = function () {
      var d = localStorage.getItem("geAcT"), x = "";
      if (d && (console.log("using savedGeAcT"), x = d), geLoginAuth.length > 3 && (console.log("using geLoginAuth"), x = geLoginAuth), x.length < 2) return console.log("no geauth set");
      if (wb() && x.length > 0) {
        var _ = fd(3 + 2 * x.length);
        _.setUint8(0, 174), _.setUint16(1, x.length, true);
        var e = 3;
        for (var t in x) _.setUint16(e, x.charCodeAt(t), true), e += 2;
        hd(_);
      }
      b("#loginError").fadeOut(), pi && (b("#loginForm").hide(), b("#dashPanel").show(), b("#btnLoginDash").hide());
    }, d.googleChooseUsername = function () {
      var d = document.getElementById("fbUsernameTry").value, b = Kx("in") || "", x = Kx("ref") || "", _ = geLoginAuth;
      if (geLoginAuth.length < 2) return alert("You must login via Google first"), void $(".alerts").hide();
      if (wb() && _.length > 0) {
        var e = fd(13 + 2 * _.length + 2 * d.length);
        e.setUint8(0, 175);
        var t = 1;
        for (var i in _) e.setUint16(t, _.charCodeAt(i), true), t += 2;
        e.setUint16(t, 0, true), t += 2;
        for (var i in d) e.setUint16(t, d.charCodeAt(i), true), t += 2;
        e.setUint16(t, 0, true), t += 2, b = parseInt(b) || 0, 0 > b && (b = 0), e.setUint32(t, b, true), t += 4, x = parseInt(x) || 0, 0 > x && (x = 0), e.setUint32(t, x, true), t += 4, hd(e);
      }
    }, d.setFbAct = function (d) {
      Ft = d, facebookLogin();
    }, d.facebookLogin = function () {
      var d = localStorage.getItem("fbAcT"), x = "";
      if (d && (x = d), Ft.length > 3 && (x = Ft), !(x.length < 2)) {
        if (wb() && x.length > 0) {
          var _ = fd(3 + 2 * x.length);
          _.setUint8(0, 170), _.setUint16(1, x.length, true);
          var e = 3;
          for (var t in x) _.setUint16(e, x.charCodeAt(t), true), e += 2;
          hd(_);
        }
        b("#loginError").fadeOut(), pi && (b("#loginForm").hide(), b("#dashPanel").show(), b("#btnLoginDash").hide());
      }
    }, d.facebookChooseUsername = function () {
      var d = document.getElementById("fbUsernameTry").value, b = Kx("in") || "", x = Kx("ref") || "";
      console.log("usernameChosen is: " + d);
      var _ = Ft;
      if (Ft.length < 2) return alert("You must login via facebook first"), $(".alerts").hide(), console.log("no fbauth set");
      if (wb() && _.length > 0) {
        var e = fd(13 + 2 * _.length + 2 * d.length);
        e.setUint8(0, 171);
        var t = 1;
        for (var i in _) e.setUint16(t, _.charCodeAt(i), true), t += 2;
        e.setUint16(t, 0, true), t += 2;
        for (var i in d) e.setUint16(t, d.charCodeAt(i), true), t += 2;
        e.setUint16(t, 0, true), t += 2, b = parseInt(b) || 0, 0 > b && (b = 0), e.setUint32(t, b, true), t += 4, x = parseInt(x) || 0, 0 > x && (x = 0), e.setUint32(t, x, true), t += 4, hd(e);
      }
    }, d.fbUseUsernameSuggested = function (d) {
      var b = document.getElementById("suggestedUsername").innerHTML;
      console.log("w is: ", d), d.is(":checked") ? $("#fbUsernameTry").val(b) : $("#fbUsernameTry").val("");
    }, d.sendCaptchaInput = function (d) {
      if (wb() && d.length > 0) {
        var b = fd(3 + 2 * d.length);
        b.setUint8(0, 100), b.setUint16(1, d.length, true);
        var x = 3;
        for (var _ in d) b.setUint16(x, d.charCodeAt(_), true), x += 2;
        hd(b);
      }
    }, d.purchaseItem = function (d, b) {
      if (wb()) {
        !b && (b = 1);
        var x = fd(3);
        x.setUint8(0, 41, true), x.setUint8(1, d, true), x.setUint8(2, b, true), hd(x);
      }
    }, d.setMegaphoneText = function () {
      var d = document.getElementById("nick").value;
      $x(d) && (d = Kr.nickName);
      var x = bt && at ? 6 : dt && nt ? 5 : Ke && it ? 4 : qe && tt ? 3 : He && et ? 2 : 2 == Oe && Ge ? 1 : 0;
      b("#megaphone_cell_name").text(d).css("color", x > 1 ? sc[x] : "").removeClass("gold black"), 1 == x ? b("#megaphone_cell_name").addClass("gold") : 6 == x && b("#megaphone_cell_name").addClass("black"), 0 != _s ? b("#skinMegaDialog").css("background-image", "url('" + z_ + ("" + _s) + "_lo.png?u=" + ($o[_s] || 0) + "')") : b("#skinMegaDialog").css("background-image", "none"), jd();
      for (var _ = 1; 5 >= _; _++) if (_ <= es.length) {
        var e = es[_ - 1], t = rc[e.wearArea] || "";
        b("#wearMegaDialog" + _).css("background-image", "url('" + R_ + ("" + e.wearId) + "_lo.png?v=" + ("" + L_) + "')").removeClass("center top bottom left right max".replace(t, "")).addClass(t).show();
      } else b("#wearMegaDialog" + _).css("background-image", "none").hide();
    }, d.purchaseMega = function (d, b) {
      if (wb()) {
        var x = document.getElementById("nick").value;
        $x(x) && (x = Kr.nickName);
        var _ = fd(11 + 2 * d.length + 2 * x.length + 2 * es.length), e = 0;
        _.setUint8(e++, 42), _.setUint8(e++, b, true), _.setUint8(e++, 0, true);
        for (var t = 0; t < d.length; ++t) _.setUint16(e, d.charCodeAt(t), true), e += 2;
        _.setUint16(e, 0, true), e += 2;
        for (var t = 0; t < x.length; ++t) _.setUint16(e, x.charCodeAt(t), true), e += 2;
        _.setUint16(e, 0, true), e += 2;
        var i = bt && at ? 6 : dt && nt ? 5 : Ke && it ? 4 : qe && tt ? 3 : He && et ? 2 : 2 == Oe && Ge ? 1 : 0;
        _.setUint8(e++, i, true), _.setUint16(e, _s, true), e += 2, _.setUint8(e++, es.length, true);
        for (var n = 0; n < es.length; n++) _.setUint16(e, es[n].wearId, true), e += 2;
        hd(_);
      }
    }, d.purchaseMinion = function (d) {
      if (wb()) {
        var b = fd(2);
        b.setUint8(0, 6, true), b.setUint8(1, d, true), hd(b);
      }
    }, d.toggleHideMinionUi = function () {
      b("#minionUi").toggleClass("minimized"), Dr = !b("#minionUi").hasClass("minimized");
    }, d.joinServerFriend = function (d) {
      var b = /setserver([\s\S]*?);/, x = $('.servermode .info .title:contains("' + d + '")').parent().parent().attr("onclick"), _ = x.match(b)[0], e = Function(_);
      return e();
    }, d.strMin = function () {
      Yi && (!Ye && setAutoFeedEnabled(true), Sb(7));
    }, d.strMon = function () {
      function d() {
        1 == x ? (clearInterval(oe), b("#startBots").attr("disabled", false), b("#startBots").text("Start Bots"), Yi = true) : (x--, b("#startBots").text(x + " Secs Left"));
      }
      Sb(8), b("#stopBots").hide(), b("#startBots").attr("disabled", true), b("#startBots").show(), Yi = false, oe && clearInterval(oe), oe = setInterval(d, 1e3);
      var x = 10;
    }, d.showNotification = function (d, b, x, _) {
      1 == x && itemInfoAlert(d, text);
    }, d.rfrc = function () {
      wb() && (pi ? (Sb(9), b("#loadBarRf").fadeIn().fadeOut(), b("#rfrcBtn").prop("disabled", true).css("opacity", "0.7"), setTimeout(function () {
        b("#rfrcBtn").prop("disabled", false).css("opacity", "");
      }, 1200)) : (swal("", "You must login to view your referral count!", "error"), b("#refCount").text(0)));
    }, d.clmFr = function (d) {
      swal({title: b("#freeReward" + d).text(), text: "Are you sure you want to claim this reward?", type: "warning", showCancelButton: true, confirmButtonColor: "#4CAF50", confirmButtonText: "Yes, claim now", cancelButtonText: "Cancel"}, function () {
        if (wb()) {
          var b = fd(2);
          b.setUint8(0, 10, true), b.setUint8(1, d, true), hd(b);
        }
      });
    }, d.setFriendlistOnline = function (d, x) {
      ze = d, b("#cVisibilityStatus").prop("checked", ze), b("#cVisibilityStatus2").prop("checked", ze), ze ? b("#visibilityStatus").css("color", "#8cff07").text("Your status: Online") : b("#visibilityStatus").css("color", "red").text("Your status: Invisible"), !x && Ox(4, ze ? 0 : 1);
    }, d.toggleFriendlistVisibility = function () {
      setFriendlistOnline(!ze);
    }, d.showPartyInvite = function (d) {
      Le = d, b("#cAllowPartyInvite").prop("checked", Le), b("#cAllowPartyInvite2").prop("checked", Le), Ox(7, Le ? 1 : 0), Le ? b("#party").show() : (b("#party").hide(), Za && partyDecline()), zx();
    }, d.setPartyAnimations = function (d) {
      Qe = d, b("#cAllowPartyAnimations").prop("checked", Qe), Ox(8, Qe ? 1 : 0), zx();
    }, d.setAutoFeedEnabled = function (d) {
      Ye = d, b("#cAutoFeed").prop("checked", Ye), b("#cAutoFeed2").prop("checked", Ye), Ox(3, Ye ? 1 : 0), zx();
    }, d.setGoldNickname = function (d) {
      (!bs || Ct || It) && (Ge = d, b("#cGoldName").prop("checked", Ge), b("#cGoldName2").prop("checked", Ge), bs && Ox(1, Ge ? 1 : 0), Ge && bs && (bs = false, He && e_("cGreenName", false), qe && e_("cBlueName", false), Ke && e_("cOrangeName", false), dt && e_("cRedName", false), bt && e_("cBlackName", false), bs = true), zx());
    }, d.setGoldCrownChat = function (d) {
      We = d, b("#cGoldCrownChat").prop("checked", We), b("#cGoldCrownChat2").prop("checked", We), bs && Ox(2, We ? 1 : 0), zx();
    }, d.setMinionSkins = function (d, x) {
      (!bs || Ct || It) && (Je = d, b("#cMinionSkinsStatus").prop("checked", Je), bs && (Ox(5, Je ? 1 : 0), x && va > 0 && (b(x).prop("disabled", true).css("cursor", "progress").parent().css("cursor", "progress"), b("#loadingMinionSkins").html('<i class="fa fa-spin" style="animation-duration:1s; margin:3px 0px -3px 10px; float:right; opacity:0.7;"><img src="img/loading3.png" style="width:16px;"></i>'), setTimeout(function () {
        b(x).prop("disabled", false).css("cursor", "").parent().css("cursor", ""), b("#loadingMinionSkins").text("");
      }, 2e3))), zx());
    }, d.setVideoAds = function (d) {
      Ve = d, b("#cVideoAds").prop("checked", Ve), zx();
    }, d.setModeratorIconChat = function (d) {
      Xe = d, b("#cModeratorIconChat").prop("checked", Xe), bs && Ox(6, Xe ? 1 : 0), zx();
    }, d.setIconDRank = function (d) {
      xt = d, b("#cIconDRank").prop("checked", xt), bs && Ox(9, xt ? 1 : 0), zx();
    }, d.setIconYT = function (d) {
      _t = d, b("#cIconYT").prop("checked", _t), bs && Ox(10, _t ? 1 : 0), zx();
    }, d.setGreenName = function (d) {
      (!bs || Ct || It) && (et = d, b("#cGreenName").prop("checked", et), bs && Ox(11, et ? 1 : 0), et && bs && (bs = false, 2 == Oe && e_("cGoldName", false), qe && e_("cBlueName", false), Ke && e_("cOrangeName", false), dt && e_("cRedName", false), bt && e_("cBlackName", false), bs = true), zx());
    }, d.setBlueName = function (d) {
      (!bs || Ct || It) && (tt = d, b("#cBlueName").prop("checked", tt), bs && Ox(12, tt ? 1 : 0), tt && bs && (bs = false, 2 == Oe && e_("cGoldName", false), He && e_("cGreenName", false), Ke && e_("cOrangeName", false), dt && e_("cRedName", false), bt && e_("cBlackName", false), bs = true), zx());
    }, d.setOrangeName = function (d) {
      (!bs || Ct || It) && (it = d, b("#cOrangeName").prop("checked", it), bs && Ox(13, it ? 1 : 0), it && bs && (bs = false, 2 == Oe && e_("cGoldName", false), He && e_("cGreenName", false), qe && e_("cBlueName", false), dt && e_("cRedName", false), bt && e_("cBlackName", false), bs = true), zx());
    }, d.setRedName = function (d) {
      (!bs || Ct || It) && (nt = d, b("#cRedName").prop("checked", nt), bs && Ox(14, nt ? 1 : 0), nt && bs && (bs = false, 2 == Oe && e_("cGoldName", false), He && e_("cGreenName", false), qe && e_("cBlueName", false), Ke && e_("cOrangeName", false), bt && e_("cBlackName", false), bs = true), zx());
    }, d.setBlackName = function (d) {
      (!bs || Ct || It) && (at = d, b("#cBlackName").prop("checked", at), bs && Ox(15, at ? 1 : 0), at && bs && (bs = false, 2 == Oe && e_("cGoldName", false), He && e_("cGreenName", false), qe && e_("cBlueName", false), Ke && e_("cOrangeName", false), dt && e_("cRedName", false), bs = true), zx());
    };
    d.spinTheWheel = function () {
      if (!pi) return swal("Login", "Please login to spin the wheel, or register an account if you do not have an account yet");
      if (ot) {
        if (!yt) return swal("", "Please Disable/Turn off your adblocker to Spin the Wheel");
        pt = 1, ht = function () {
          d.spinTheWheel();
        };
        try {
          return dd(), void Wx(true);
        } catch (b) {
          pt = 0, ht = null;
        }
      }
      Sb(58);
    }, d.watchAdvert = function () {
      if (!yt) return swal("", "Please Disable/Turn off your adblocker to receive free coins");
      if (pi) {
        if (typeof Storage !== "undefined") {
          var d = parseInt(localStorage.getItem("ad_l_time")) || 0;
          if (Date.now() - d < 12e4) return swal("", "Please wait at least 2 minutes before watching a new advert video and receiving coins");
        }
        if (wb()) {
          var b = 1, x = fd(2);
          x.setUint8(0, 120, true), x.setUint8(1, b, true), hd(x);
        }
      } else swal("Login", "Please login first, or register an account if you do not have an account yet");
    }, d.succAdvGSDK = function () {
      ut = 0, typeof Storage !== "undefined" && (localStorage.adSpawnCounterGSDK = ut), 4 == vt ? (setNick(document.getElementById("nick").value), mt && mt()) : (spectate(document.getElementById("nick").value), mt && mt()), vt = 0, mt = null;
    }, d.succAdv = function () {
      switch (Wx(false), window.focus(), typeof Storage !== "undefined" && (localStorage.ad_l_time = Date.now()), pt) {
        case 1:
          ot = false, ht && ht();
          break;
        case 2:
          Qx();
          break;
        case 3:
          ht && ht();
      }
      pt = 0, ht = null;
    }, d.rspwn = function (d) {
      setNick(d, true);
    }, d.closeAdvert = function () {
      Ce || (azad(true), b("#invisibleOverlay").finish().show(0).delay(400).hide(0), clearVideo(), _d(), bd());
    }, d.spectate = function (b, x) {
      if (Wi && $i && !Te && !Ce && !Ae) if (0 == Xi.length) {
        if (wb() && (0 >= Oe || Ve)) {
          var _ = Date.now(), e = _;
          if (typeof Storage !== "undefined" && (e = localStorage.getItem("ad_l_time"), !e && (e = localStorage.ad_l_time = _), e > _ && (e = 0)), _ - 1e3 * rt > e && _ - 1e3 * rt > ft) {
            pt = 3, ht = function () {
              d.spectate(b);
            };
            try {
              return void dd();
            } catch (t) {
              pt = 0, ht = null;
            }
          }
        }
        xs = null, wb() && (d.isSpectating = true, Sb(12)), J();
      } else setNick(b);
    }, d.toggleSkin = function (d) {
      oa && wb() && (_s == d ? Rd(0) : (Rd(d), !ts && e_("cSkins", true)), Fx());
    }, d.shareInfectionFb = function () {}, d.fbLikeSkin = function () {
      window.open("https://www.facebook.com/Agmaio-334028330371935"), b("#skinUseBtn73").text("Like on Facebook!"), setTimeout(function () {
        b("#skinUseBtn73").attr("onclick", "toggleSkin(73);").text("Use"), localStorage.setItem("fbSkin", 1);
      }, 22e3);
    }, d.YouTubeSubSkin = function (d, x) {
      !d && (d = 71), (71 == d || !x || x == "") && (x = "UCHHX_9Phr1Sio21b745Rfuw"), window.open("https://www.youtube.com/channel/" + x + "?sub_confirmation=1"), b("#skinUseBtn" + d).text("Click Subscribe!"), setTimeout(function () {
        b("#skinUseBtn" + d).attr("onclick", "toggleSkin(" + d + ");").text("Use"), localStorage.setItem("ytSkin" + (71 != d ? "" + d : ""), 1);
      }, 18e3);
    }, d.shuffleGameTips = function () {
      var d = ["You can type command /spin in the bottom left chat to spin your playercell in game", "You receive free coin rewards for every time you level up", "You can right-click any player in game or in chat for extra options", "You can feed a portal and it will spit out more mass than you fed it. Eat to grow!", "The gold blocks in agma spit out coins to farm when you feed them", "The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet", "In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit", "You can open your friendlist with the button on the top right corner", "You can drop items from your inventory (bottom of screen) and dragging the item onto the map", "You can purchase items/powerups from the shop. The item will appear in your inventory on the bottom of the screen", "In agma, you can invite friends to party/team by right clicking the player in game and selecting <Invite Player to Party>", "Collect coins in game to purchase powerups, portals, and more in the game shop", "You can submit your own CUSTOM skin in the shop -> skins -> custom skin section", "If you are experiencing lag, try turning off options with * in the game settings (settings are located in the right side of menu)", "Psst, most servers have secret rooms located somewhere in the bottom left corner, past the border. Shh.. keep it a secret", "You can still private message a friend who's online but shown as offline, type /pm <username> message", "You can press M to respawn, or change the keybind in the Settings->Controls (settings are in the right side of menu)", "Don't know how to use some powerups? Watch some Tutorials on the Agma Youtube-Channel!", "You can get tips on how to play agma on the agma discord. Link in the bottom of the main menu", "Gold Membership in agma has a lot of special benefits and rewards, exclusive skins and gold name. Check www.agma.io/member.php", "Did you find the secret room in agma, yet? But did you find the second one? Search for it, or ask players in chat for help!", "Agma is Agma'zing! If you disagree, go eat an agmapple upside down with a carrot on top!", "The max level on agma is 200, but levels are still counted when you surpass 200", "If you experience lag, try turning off skins and wearables in the settings. This will boost your FPS!", "You can enable FPS and PING in the settings, these will help you determine if you have lag", "INVISIBILITY: press i key in game if you are a gold member, and you can turn your cells invisible for 30 seconds", "You can right-click on your cell in the shop to remove skins or wearables from the cell", "You can level up quicker by eating players, mass pellets, viruses and mothercells", "You can use the 360 push powerup, or the freeze ability to prevent players from eating you"], x = ["You can type command /spin in the bottom left chat to spin your playercell in game", "You can right-click any player in game or in chat for extra options", "You can feed a portal and it will spit out more mass than you fed it. Eat to grow!", "The gold blocks in agma spit out coins to farm when you feed them", "The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet", "In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit", "You can still private message a friend who's online but shown as offline, type /pm <username> message", "You can press M to respawn, or change the keybind in the Settings->Controls (settings are in the right side of menu)", "You can Solotrick by holding down W and Z in certain servers like Gigantic/Giant/Giga. You need to be large enough for it to work.", "The max level on agma is 200, but levels are still counted when you surpass 200", "Agma is Agma'zing! If you disagree, go eat an agmapple upside down with a carrot on top!", "The max level on agma is 200, but levels are still counted when you surpass 200", "If you experience lag, try turning off skins and wearables in the settings. This will boost your FPS!", "You can enable FPS and PING in the settings, these will help you determine if you have lag", "You can press C-key to see invisible cells", "You can level up quicker by eating players, mass pellets, viruses and mothercells", "You can use the 360 push powerup, or the freeze ability to prevent players from eating you"], _ = ["You can type command /spin in the bottom left chat to spin your playercell in game", "You can feed a portal and it will spit out more mass than you fed it. Eat to grow!", "The gold blocks in agma spit out coins to farm when you feed them", "The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet", "In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit", "You can still private message a friend who's online but shown as offline, type /pm <username> message", "You can Solotrick by holding down W and Z in certain servers like Gigantic/Giant/Giga. You need to be large enough for it to work.", "You can reverse opponents by timing your split exactly when they are about to solotrick you. Search agma reverse on YouTube to learn more", "You can press C-key to see invisible cells", "You can level up quicker by eating players, mass pellets, viruses and mothercells"], e = "";
      e = Si.level <= 20 ? d[Math.floor(Math.random() * d.length)] : Si.level <= 60 ? x[Math.floor(Math.random() * x.length)] : _[Math.floor(Math.random() * _.length)], b("#game-tip").text(e);
    }, d.shuffleGameAds = function () {
      var d = Math.floor(4 * Math.random()) + 1, x = Math.floor(11 * Math.random()) + 1, _ = Math.floor(11 * Math.random()) + 1, e = Math.floor(15 * Math.random()) + 1, t = Math.floor(15 * Math.random()) + 1, i = Math.floor(11 * Math.random()) + 1, n = Math.floor(11 * Math.random()) + 1, a = Math.floor(6 * Math.random()) + 1, o = Math.floor(6 * Math.random()) + 1, r = "margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;";
      1 == d ? 2 > Oe ? (b("#agmaAdHref").attr("href", "member.php?c=" + x + ""), b("#zoomItem").attr("src", "img/agmaAd/gold/" + x + ".png?v=1"), yt || b("#cellcraft-io_300x250").html('<a href="member.php?d=' + _ + '" target="_blank"><img style="' + r + '" src="img/agmaAd/gold/' + _ + '.png"></a>')) : shuffleGameAds() : 2 == d ? (b("#agmaAdHref").attr("href", "coins.php?c=" + e + ""), b("#zoomItem").attr("src", "img/agmaAd/coins/" + e + ".png?v=1"), b("#cellcraft-io_300x250").html('<a href="coins.php?d=' + t + '" target="_blank"><img style="' + r + '" src="img/agmaAd/coins/' + t + '.png"></a>')) : 3 == d ? (b("#agmaAdHref").attr("href", "bots.php?clickId=" + i + ""), b("#zoomItem").attr("src", "img/agmaAd/bots/" + i + ".png?v=1"), yt || b("#cellcraft-io_300x250").html('<a href="bots.php?d=' + n + '" target="_blank"><img style="' + r + '" src="img/agmaAd/bots/' + n + '.png"></a>')) : (b("#agmaAdHref").attr("href", "items.php?clickId=" + a + ""), b("#zoomItem").attr("src", "img/agmaAd/items/" + a + ".png?v=1"), yt || b("#cellcraft-io_300x250").html('<a href="items.php?d=' + o + '" target="_blank"><img style="' + r + '" src="img/agmaAd/items/' + o + '.png"></a>'));
    };
    var Os = window.featureList || [], Rs = -1, Ls = -1;
    d.prevVideo = function () {
      Os.length > 0 && Rs > 0 && setVideo(Rs - 1);
    }, d.nextVideo = function () {
      Os.length > 0 && Rs < Os.length - 1 && setVideo(Rs + 1);
    }, d.setVideo = function (d) {
      if (Rs != d && d >= 0 && d <= Os.length - 1) {
        Rs = d, Ls = d;
        var b = Os[Rs];
        $("#featuredVideo").attr("src", "https://www.youtube.com/embed/" + encodeURIComponent(b.vid)), $("#featuredDescription").text(b.descr), $(".featured-btn").removeClass("selected"), $("#featuredBtn" + Rs).addClass("selected");
      }
    }, d.clearVideo = function () {
      $("#featuredVideo").attr("src", ""), $("#featuredDescription").text(""), Rs = -1;
    }, d.purchaseSkin = function (d, b) {
      Lo && wb() && swal({title: "Confirm", text: 'If you click "Buy", you will purchase this skin. It costs ' + d, type: "warning", showCancelButton: true, confirmButtonColor: "#4CAF50", confirmButtonText: "Yes, confirm purchase", cancelButtonText: "No, cancel purchase"}, function () {
        if (wb()) {
          var d = fd(3);
          d.setUint8(0, 44, true), d.setUint16(1, b, true), hd(d);
        }
      });
    }, d.purchaseCustomSkin = function (d) {
      Lo && wb() && swal({title: "Confirm", text: 'If you click "Yes", you will purchase a new custom skin slot. It costs ' + d + '<br><span style="font-size:13px;"><br>(click here for <a href="#customSkinInstructions" onclick="swal.close();">instructions</a>)</span><br><br>', type: "warning", html: true, showCancelButton: true, confirmButtonColor: "#4CAF50", confirmButtonText: "Yes, confirm purchase", cancelButtonText: "No, cancel purchase"}, function () {
        Sb(50);
      });
    }, d.editCustomSkin = function (d) {
      function x() {
        if (wb()) {
          var x = fd(3);
          x.setUint8(0, 51), x.setUint16(1, d, true), hd(x);
        }
        _s == d && Rd(0), b("#skinContainer" + d).removeClass("saved-mode approved-mode rejected-mode enabled-mode").addClass("edit-mode nonapproved-mode pending-mode disabled-mode");
      }
      Lo && wb() && pi && !Bo && (b("#skinContainer" + d).hasClass("enabled-mode") ? swal({title: "Confirm", text: "Are you sure you want to change this skin? Please be reminded if you press Yes, you cannot play with this skin anymore until it is re-approved by staff.", type: "warning", showCancelButton: true, confirmButtonColor: "#4CAF50", confirmButtonText: "Yes, change skin", cancelButtonText: "Cancel"}, x) : x());
    }, d.saveCustomSkin = function (d) {
      if (Lo && wb() && pi && !Bo) {
        if (parseInt(b("#skinContainer" + d).attr("data-pendingapproval")) >= 3) return void C("Please upload an image before saving", false, false, 0, 10);
        for (var x = ("" + b("#skinNameInput" + d).val()).substr(0, 30), _ = b("#skinSharedPublicInput" + d).is(":checked"), e = 0; e < x.length; e++) if (!/[\x20-\xff]/.test(x.charAt(e))) return void C("Please choose another skinname - unicode characters are not allowed", false, false, 0, 10);
        if (I(true), wb()) {
          var t = fd(4 + 2 * x.length);
          t.setUint8(0, 52), t.setUint16(1, d, true), t.setUint8(3, _ ? 1 : 0);
          for (var i = 4, e = 0; e < x.length; e++) t.setUint16(i, x.charCodeAt(e), true), i += 2;
          hd(t);
        }
        b("#skinName" + d).text(x), _ ? b("#skinSharedPublic" + d).removeClass("private-skin") : b("#skinSharedPublic" + d).addClass("private-skin"), b("#skinContainer" + d).removeClass("edit-mode approved-mode rejected-mode enabled-mode").addClass("saved-mode nonapproved-mode pending-mode disabled-mode");
      }
    }, d.uploadCustomSkin = function (d) {
      !(Lo && wb() && pi) || Bo || Do > Date.now() || (Do = Date.now() + 1e3, b("#skinUploadBtn" + d).blur(), b("#uploadFile").off("change").val("").attr("accept", ".png, .jpg, .jpeg").one("change", function () {
        if (pi) {
          Bo = true, I(true), b("#skinContainer" + d).addClass("is-uploading"), document.body.style.cursor = "progress", b("#uploadMaxFileSize").val(1048576);
          var x = {username: gi, password: wi, skinId: d};
          b("#uploadForm").ajaxSubmit(x_(d, x));
        }
      }).trigger("click"));
    }, d.dragFileOverSkin = function (d, x) {
      d.preventDefault(), d.stopPropagation(), U_ && (d.dataTransfer && (d.dataTransfer.dropEffect = "copy"), b("#skinContainer" + x).addClass("drag-over"));
    }, d.dragFileLeaveSkin = function (d, x) {
      d.preventDefault(), d.stopPropagation(), U_ && (d.dataTransfer && (d.dataTransfer.dropEffect = "none"), b("#skinContainer" + x).removeClass("drag-over"));
    }, d.dropFileOnSkin = function (d, x) {
      if (d.preventDefault(), d.stopPropagation(), U_ && (d.dataTransfer && (d.dataTransfer.dropEffect = "copy"), b("#skinContainer" + x).removeClass("drag-over"), Lo && wb() && pi && d.dataTransfer && d.dataTransfer.files && d.dataTransfer.files.length > 0)) {
        Bo = true, I(true), b("#skinContainer" + x).addClass("is-uploading"), document.body.style.cursor = "progress";
        var _ = d.dataTransfer.files[0], e = new FormData;
        e.append("MAX_FILE_SIZE", 1048576), e.append("uploadFile", _), e.append("username", gi), e.append("password", wi), e.append("skinId", x), b.ajax(x_(x, e));
      }
    }, d.showPublicSkinsPage = function (d) {
      Lo && wb() && (b("#skinsCustom .publicskins-nav-btn").addClass("btn-primary").filter(".publicskins-nav-btn-" + d.toLowerCase()).removeClass("btn-primary").addClass("btn-default"), document.getElementById("publicSkinsPage").innerHTML = document.getElementById("publicSkinsPageContent" + d).textContent, b("#publicSkinsPage .skin-container").removeClass("selected"), b("#publicSkinsPage .skinuse-btn").removeClass("btn-default").addClass("btn-primary").text("Use"), 0 != _s && (b("#skinContainer" + _s).addClass("selected"), b("#skinUseBtn" + _s).removeClass("btn-primary").addClass("btn-default").text("Cancel")), document.getElementById("publicSkinsHeader").scrollIntoView());
    }, d.toggleWearable = function (d, b, x, _, e) {
      if (oa && wb()) {
        for (var t = false, i = 0; i < es.length; i++) if (es[i].wearId == d) {
          t = true;
          break;
        }
        if (t) Yd(d); else {
          if (0 != _ && Jd(_), es.length >= 5) return void C("You cannot select more than 5 wearables. Please remove one before selecting another wearable.", false, false, 0, 10);
          Wd(d, b, x, _, e), !is && e_("cWearables", true);
        }
        Fx();
      }
    }, d.purchaseWearable = function (d, b) {
      Jo && wb() && (warnBeforeBuy("this wearable?", "usd", d, " wear"), swal({title: "Confirm", text: 'If you click "Buy", you will purchase this wearable. It costs ' + d, type: "warning", showCancelButton: true, confirmButtonColor: "#4CAF50", confirmButtonText: "Yes, confirm purchase", cancelButtonText: "No, cancel purchase"}, function () {
        if (wb()) {
          Yd(b);
          var d = fd(3);
          d.setUint8(0, 43, true), d.setUint16(1, b, true), hd(d);
        }
      }));
    }, d.toggleGamemodeCollapse = function () {
      __(1 == ma ? 0 : 1);
    }, d.checkUserLoggedIn = function () {
      return pi ? true : (swal("Login first", "Please log in or register a new user account to use this functionality"), false);
    }, d.coinsXopen = function (d) {
      d || (d = 1);
      var x = gi, _ = "cprd=" + d + "&cpn=" + x + "&cpcid=" + Ei;
      if (x == "") return swal("Login first", "Please log in or register a new user account to use this functionality");
      var e = "";
      b.ajax({type: "GET", url: "../xsl/gtk.php", data: _, beforeSend: function () {}, success: function (d) {
        d == "error" || (d == "noUser" ? swal("Login or Register", "Please log in or register a new user account to use this functionality") : (e = d, loadXPlayer(e)));
      }, complete: function (d) {}});
    }, d.logXOpn = function (d) {
      var x = "&cpn=" + gi;
      b.ajax({type: "GET", url: "../xsl/logXopen.php", data: x, beforeSend: function () {}, success: function (d) {}, complete: function (d) {}});
    }, d.logXd = function (d) {
      var x = "dt=" + d;
      b.ajax({type: "GET", url: "../xsl/logXd.php", data: x, beforeSend: function () {}, success: function (d) {}, complete: function (d) {}});
    }, d.isBloc = function () {
      function d(d) {
        b.ajax({type: "POST", url: "./xsl/abcount.php", data: {arr: d}, beforeSend: function () {}, success: function (d) {
          try {
            localStorage.setItem("adTrackSubbd", 0);
          } catch (b) {
            console.log("caught exception, no cookies enabled!");
          }
        }, complete: function (d) {}});
      }
      document.referrer, navigator.appName, navigator.userAgent, navigator.language, navigator.languages, navigator.platform, navigator.vendor;
      try {
        var x = window.screen.availWidth, _ = window.screen.availHeight;
      } catch (e) {
        var x = "", _ = "";
      }
      var t = 1, i = null, n = 0;
      if (typeof Storage !== "undefined") try {
        i = localStorage.getItem("username"), n = localStorage.getItem("adTrackSubbd");
      } catch (a) {
        console.log("caught exception, no cookies enabled!");
      }
      yt || (t = 0);
      var o = {canRun: t, user: i, referrer: document.referrer, navigatorName: navigator.appName, userAgent: navigator.userAgent, language: navigator.language, languages: navigator.languages, platform: navigator.platform, vendor: navigator.vendor, screenX: x, screenY: _};
      n || d(o);
    }, d.loadXPlayer = function (d) {
      var b = {access_token: d, sandbox: false}, x = document.createElement("script");
      x.type = "text/javascript", x.async = true, x.src = "//static.xsolla.com/embed/paystation/1.0.7/widget.min.js", x.addEventListener("load", function (d) {
        XPayStationWidget.init(b), XPayStationWidget.open(), $(".bs-example-modal-lg").modal("hide"), logXOpn(), XPayStationWidget.on(XPayStationWidget.eventTypes.STATUS, function (d, b) {
          logXd(b.paymentInfo);
        });
      }, false);
      var _ = document.getElementsByTagName("head")[0];
      _.appendChild(x);
    }, d.partyAccept = function () {
      Sb(62);
    }, d.partyDecline = function () {
      Sb(63);
    }, d.zombieRemain = function (d, x) {
      if (clearTimeout(timerInfectionModal), 152 == x) {
        var _ = new Audio("sounds/planting-c4.mp3");
        _.volume = .1, _.play();
      }
      if (d && wb()) {
        var e = fd(2);
        e.setUint8(0, x, true), e.setUint8(1, d, true), hd(e);
      }
      b("#infection_remain_zombie").removeClass("visible");
    }, d.friendAdd = function (d) {
      d = d.trim(), d == "" ? C("Please type a username first", false, false, 0, 5) : (mb(81, d), document.getElementById("friendAddInput").value = "", b("#friendAdd").prop("disabled", true).css("cursor", "progress"), setTimeout(function () {
        b("#friendAdd").prop("disabled", false).css("cursor", "");
      }, 2e3));
    }, d.friendRemove = function (d, x) {
      mb(82, d), x && (b(x).prop("disabled", true).css("cursor", "progress"), setTimeout(function () {
        b(x).prop("disabled", false).css("cursor", "");
      }, 2e3));
    }, d.friendAccept = function (d, x) {
      mb(83, d), x && (b(x).prop("disabled", true).css("cursor", "progress"), setTimeout(function () {
        b(x).prop("disabled", false).css("cursor", "");
      }, 2e3));
    }, d.friendAcceptAll = function () {
      Sb(85), b("#friendAcceptAll").prop("disabled", true).css("cursor", "progress"), setTimeout(function () {
        b("#friendAcceptAll").prop("disabled", false).css("cursor", "");
      }, 2e3);
    }, d.insertPMText = function (d) {
      if (!Is) {
        var x = document.getElementById("chtbox"), _ = b("#chtbox");
        cit = "/pm " + d + " ", U(d), x.value = cit, x.selectionStart = x.selectionEnd = cit.length, x.focus(), _.addClass("highlight"), setTimeout(function () {
          _.removeClass("highlight");
        }, 3e3);
      }
    }, d.v2za0 = function () {
      return [123, 124, ~~(128 * Math.random() + 4), 126, ~~(128 * Math.random() + 4)];
    }, d.displayInfoDialog = function (d) {
      var x = true, _ = true;
      if (!pi) {
        if (typeof Storage !== "undefined" || (x = false), localStorage.infoDialog && parseInt(localStorage.infoDialog) > 3 && parseInt(localStorage.infoDialog) % 3 != 0 && (_ = false), pi && d == "infoHolderRegister" && (_ = false), x && _) if (sessionStorage.getItem(d)) {
          if (+sessionStorage.getItem(d) < 4) {
            b("#" + d + "").show(), setTimeout(function () {
              b("#" + d + "").hide();
            }, 3e4);
            var e = parseInt(sessionStorage.getItem(d)) + 1;
            sessionStorage.setItem(d, e);
          }
        } else sessionStorage.setItem(d, 0), displayInfoDialog(d);
        if (0 == Z_) if (Z_ = 1, localStorage.infoDialog) {
          var t = parseInt(localStorage.getItem("infoDialog")) + 1;
          localStorage.setItem("infoDialog", t);
        } else localStorage.setItem("infoDialog", 0);
      }
    }, d.setSkins = function (d) {
      ts = d, b("#cSkins").prop("checked", ts), b("#cSkins2").prop("checked", ts), Mi = true, Fx();
    }, d.setWearables = function (d) {
      is = d, Mi = true, Fx();
    }, d.setColors = function (d) {
      ns = !d, Fx();
    }, d.setNames = function (d) {
      as = d, b("#cNames").prop("checked", as), b("#cNames2").prop("checked", as), Fx();
    }, d.setMinionNames = function (d) {
      os = d, Fx();
    }, d.setMass = function (d) {
      rs = d, Fx();
    }, d.setFood = function (d) {
      ss = d, Fx();
    }, d.setCellAnimations = function (d) {
      cs = d, Fx();
    }, d.setSkinAnimations = function (d) {
      ls = d, Fx();
    }, d.setMapBorder = function (d) {
      us = !d, Fx();
    }, d.setFancyGrid = function (d) {
      fs = d, b("#cFancyGrid").prop("checked", fs), b("#cFancyGrid2").prop("checked", fs), fs && ds && (ds = false, e_("cGrid", false), ds = true), Fx();
    }, d.setSectionGrid = function (d) {
      hs = d, b("#cSectionGrid").prop("checked", hs), b("#cSectionGrid2").prop("checked", hs), hs && ds && (ds = false, e_("cGrid", false), ds = true), Fx();
    }, d.setGrid = function (d) {
      ms = d, b("#cGrid").prop("checked", ms), b("#cGrid2").prop("checked", ms), ms && ds && (ds = false, e_("cFancyGrid", false), e_("cSectionGrid", false), ds = true), Fx();
    }, d.setDark = function (d) {
      ps = d, vs = ps ? .8 : .9, b("#cDark").prop("checked", ps), b("#cDark2").prop("checked", ps), ox(), Mi = true, Ti = true, Ci = true, Fx();
    }, d.setSlowMotion = function (d) {
      ys = d, !ys && cx(), Fx();
    }, d.setFPS = function (d) {
      var x = ks;
      ks = d, ks ? (x || (b("#fps").text("---"), b("#ping").text("---"), Yr = performance.now(), Jr = 0, fx()), !le && (le = setInterval(fx, 1e4)), b("#fpsBox").show(), b("#respawnTouch").addClass("fpsShow")) : (ue = false, le && (clearInterval(le), le = 0), b("#fpsBox").hide(), b("#respawnTouch").removeClass("fpsShow")), Fx();
    }, d.setZoom = function (d) {
      ws = d, !ws && ds && (ds = false, e_("cFixedZoom", false), ds = true), G(), W(), Fx();
    }, d.setFixedZoom = function (d) {
      var x = Ss != d;
      Ss = d, b("#cFixedZoom").prop("checked", Ss), b("#cFixedZoom2").prop("checked", Ss), Ss && ds && (ds = false, e_("cZoom", true), ds = true), x && gn > 0 && Ib(), Fx();
    }, d.setMinionUi = function (d) {
      Ts = d, b("#cMinionUi").prop("checked", Ts), b("#cMinionUi2").prop("checked", Ts), b("#cMinionUi3").prop("checked", Ts), Ts ? (ds && (b("#minionUi").removeClass("minimized"), Dr = true), b("#minionUi").show()) : b("#minionUi").hide(), Fx();
    }, d.setLeaderboard = function (d) {
      Cs = d, Mi = true, Pi = true, Fx();
    }, d.setChat = function (d) {
      Is = !d, Is ? b("#chat").hide() : (Ti = true, b("#chat").show()), Fx();
    }, d.setMinimap = function (d) {
      Us = !d, Us ? (b("#minimap").hide(), b("#brGame").addClass("no-minimap"), b("#infBar").addClass("no-minimap")) : (Ci = Ii = true, b("#minimap").show(), b("#brGame").removeClass("no-minimap"), b("#infBar").removeClass("no-minimap")), Fx();
    }, d.setLargeNames = function (d) {
      Ns = d, Fx();
    }, d.setNameOutlines = function (d) {
      Fs = d, Fx();
    }, d.setCellSpikes = function (d) {
      Ps = d, Fx();
    }, d.setCellBorders = function (d) {
      As = !d, b("#cCellBorders").prop("checked", !As), b("#cCellBorders2").prop("checked", !As), Fx();
    }, d.setClassicViruses = function (d) {
      Bs = d, Bs && ds && (ds = false, e_("cCellSpikes", true), ds = true), Fx();
    }, d.setPolygonShapes = function (d) {
      $s = d, $s && ds && (ds = false, e_("cLineShapes", false), ds = true), $s && rx(), Fx();
    }, d.setLineShapes = function (d) {
      Es = d, Es && ds && (ds = false, e_("cPolygonShapes", false), ds = true), Es && rx(), Fx();
    }, d.setBubbleCells = function (d) {
      zs = d, ds && (ds = false, e_("cCellBorders", zs), ds = true), Fx();
    }, d.setDefaults = function () {
      ds = false, e_("cSkins", qr.sSkins), e_("cWearables", qr.sWearables), e_("cColors", qr.sColors), e_("cNames", qr.sNames), e_("cMinionNames", qr.sMinionNames), e_("cMass", qr.sMass), e_("cFood", qr.sFood), e_("cCellAnimations", qr.sCellAnimations), e_("cSkinAnimations", qr.sSkinAnimations), e_("cMapBorder", qr.sMapBorder), e_("cFancyGrid", qr.sFancyGrid), e_("cSectionGrid", qr.sSectionGrid), e_("cGrid", qr.sGrid), e_("cDark", qr.sDark), e_("cSlowMotion", qr.sSlowMotion), e_("cFPS", qr.sFPS), e_("cZoom", qr.sZoom), e_("cFixedZoom", qr.sFixedZoom), e_("cMinionUi", qr.sMinionUi), e_("cLeaderboard", qr.sLeaderboard), e_("cChat", qr.sChat), e_("cMinimap", qr.sMinimap), e_("cCellBorders", qr.sCellBorders), e_("cLargeNames", qr.sLargeNames), e_("cNameOutlines", qr.sNameOutlines), e_("cCellSpikes", qr.sCellSpikes), e_("cClassicViruses", qr.sClassicViruses), e_("cPolygonShapes", qr.sPolygonShapes), e_("cLineShapes", qr.sLineShapes), e_("cBubbleCells", qr.sBubbleCells), ds = true, Fx();
    };
    var Qs = {8: "BACKSPACE", 9: "TAB", 12: "CLEAR", 13: "ENTER", 16: "SHIFT", 17: "CTRL", 18: "ALT", 19: "PAUSE", 20: "CAPSLOCK", 27: "ESC", 32: "SPACE", 33: "PAGEUP", 34: "PAGEDOWN", 35: "END", 36: "HOME", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN", 44: "PRTSCN", 45: "INS", 46: "DEL", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 91: "WIN", 92: "WIN", 93: "CONTEXTMENU", 96: "NUM 0", 97: "NUM 1", 98: "NUM 2", 99: "NUM 3", 100: "NUM 4", 101: "NUM 5", 102: "NUM 6", 103: "NUM 7", 104: "NUM 8", 105: "NUM 9", 106: "NUM *", 107: "NUM +", 109: "NUM -", 110: "NUM .", 111: "NUM /", 144: "NUMLOCK", 145: "SCROLLLOCK"}, Gs = {Space: {c: 32, d: "SPACE"}, W: {c: 87, d: "W"}, Z: {c: 90, d: "Z"}, F: {c: 70, d: "F"}, Q: {c: 81, d: "Q"}, E: {c: 69, d: "E"}, S: {c: 83, d: "S"}, A: {c: 65, d: "A"}, X: {c: 88, d: "X"}, I: {c: 73, d: "I"}, C: {c: 67, d: "C"}, D: {c: 68, d: "D"}, T: {c: 84, d: "T"}, M: {c: 77, d: "M"}, W360: {c: 87, d: "W"}, DW: {c: 66, d: "B"}}, Ws = {Space: {c: Gs.Space.c, d: Gs.Space.d}, W: {c: Gs.W.c, d: Gs.W.d}, Z: {c: Gs.Z.c, d: Gs.Z.d}, F: {c: Gs.F.c, d: Gs.F.d}, Q: {c: Gs.Q.c, d: Gs.Q.d}, E: {c: Gs.E.c, d: Gs.E.d}, S: {c: Gs.S.c, d: Gs.S.d}, A: {c: Gs.A.c, d: Gs.A.d}, X: {c: Gs.X.c, d: Gs.X.d}, I: {c: Gs.I.c, d: Gs.I.d}, C: {c: Gs.C.c, d: Gs.C.d}, D: {c: Gs.D.c, d: Gs.D.d}, T: {c: Gs.T.c, d: Gs.T.d}, M: {c: Gs.M.c, d: Gs.M.d}, W360: {c: Gs.W360.c, d: Gs.W360.d}, DW: {c: Gs.DW.c, d: Gs.DW.d}}, Ys = null;
    d.openSettingPage = function (d) {
      b(".setting-tablink").removeClass("active"), b("#settingTab" + d).addClass("active"), b(".setting-tabcontent").hide(), b("#settingPage" + d).show();
    }, d.hotkeySelect = function (d) {
      var x = d.currentTarget;
      Ys && (x && b(x).hasClass("selected") && (x = null), t_()), x && (Ys = x, n_(Ys).addClass("selected"));
    }, d.hotkeyClear = function (d) {
      var b = d.currentTarget, x = a_(b);
      if (x) {
        x.c = 0, x.d = "";
        var _ = n_(b);
        _.addClass("updated"), setTimeout(function () {
          _.removeClass("updated");
        }, 50), r_(), s_(), t_();
      }
      d.preventDefault();
    }, d.hotkeySetDefaults = function () {
      Ws.Space = {c: Gs.Space.c, d: Gs.Space.d}, Ws.W = {c: Gs.W.c, d: Gs.W.d}, Ws.Z = {c: Gs.Z.c, d: Gs.Z.d}, Ws.F = {c: Gs.F.c, d: Gs.F.d}, Ws.Q = {c: Gs.Q.c, d: Gs.Q.d}, Ws.E = {c: Gs.E.c, d: Gs.E.d}, Ws.S = {c: Gs.S.c, d: Gs.S.d}, Ws.A = {c: Gs.A.c, d: Gs.A.d}, Ws.X = {c: Gs.X.c, d: Gs.X.d}, Ws.I = {c: Gs.I.c, d: Gs.I.d}, Ws.C = {c: Gs.C.c, d: Gs.C.d}, Ws.D = {c: Gs.D.c, d: Gs.D.d}, Ws.T = {c: Gs.T.c, d: Gs.T.d}, Ws.M = {c: Gs.M.c, d: Gs.M.d}, Ws.W360 = {c: Gs.W360.c, d: Gs.W360.d}, Ws.DW = {c: Gs.DW.c, d: Gs.DW.d}, b(".hotkey-input").addClass("updated"), setTimeout(function () {
        b(".hotkey-input").removeClass("updated");
      }, 50), r_(), s_(), t_();
    };
    var Js = 500, Vs = false, Xs = -1, js = -1, Zs = 1, Hs = 0, qs = null, Ks = null, dc = {}, bc = {}, xc = [5, 3, 6, 6, 6, 3, 4, 6, 6, 3, 6, 5, 5, 4, 3, 6, 4, 6, 6, 5, 6, 6, 5, 4, 4, 5, 5, 6, 4, 5, 3, 5, 6, 5, 4, 6, 6, 5, 4, 6, 5, 5, 6, 4, 6, 5, 6, 5, 5, 4, 6, 6, 4, 4, 6, 4, 3, 5, 6, 4, 4, 3, 5, 4, 3, 4, 5, 3, 4, 6, 4, 3, 3, 3, 4, 5, 4, 6, 5, 6, 5, 5, 4, 3, 5, 6, 5, 5, 5, 5, 6, 6, 4, 3, 5, 4, 3, 4, 6, 5], _c = [1, 1, 1, 1.25, 1.12, 1.07, 1.05, 1.04, 1.03, 1.02, 1.02, 1.01, 1.01, 1.01, 1, 1], ec = [], tc = {}, ic = {}, nc = "Cellcraft.io", ac = {}, oc = {0: "Free For All", 1: "Teams", 2: "Experimental", 6: "Selffeed", 10: "Tournament", 11: "Hunger Games", 15: "Battle Royale", 16: "Domination", 17: "Infection"}, rc = {0: "center", 1: "top", 2: "bottom", 3: "left", 4: "right", 5: "max"}, sc = ["#FFFFFF", "#FFD700", "#22FF22", "#2299FF", "#FF9922", "#FF2222", "#000000"], cc = ["#000000", "#5C4D00", "#000000", "#000000", "#000000", "#000000", "#777777"], lc = c_("img/animations/flash.png"), uc = c_("img/animations/hit.png"), fc = c_("img/animations/speedlines.png"), hc = c_("img/animations/speedcircles.png"), mc = c_("img/chaticons2.png?v=2"), pc = c_("emotes/emojisheet.png"), vc = c_("img/mousecursor.png"), gc = function (d) {
      return gn + ~~(60 * (d || 0) / 1e3);
    }, yc = function (d) {
      return yn + (d || 0);
    }, kc = {1: {time: yc, duration: 800}, 2: {time: yc, duration: 800}, 3: {time: yc, duration: 2e3}, 4: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/360shot2.png"), nFrames: 6, nCols: 3, ticksPerFrame: 7, nLoops: 1, scale: 1.8, xOffset: 0, yOffset: 0, globalAlpha: .7, globalAlphaBub: .5}}, 5: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/levelUp2.png"), nFrames: 21, nCols: 7, ticksPerFrame: 7, nLoops: 1, scale: 2, xOffset: 0, yOffset: -70, globalAlpha: .9, globalAlphaBub: .9}}, 6: {time: yc, duration: 3e3}, 7: {time: yc, duration: 0}, 8: {time: yc, duration: 2e3}, 9: {time: yc, duration: 400}, 10: {time: yc, duration: 1, ignoreAnimSetting: true, sprites: {canvas: l_("img/animations/medal_1st.png"), nFrames: 1, nCols: 1, ticksPerFrame: 200, nLoops: 0, scale: .4, xOffset: 0, yOffset: -480, globalAlpha: .9, globalAlphaBub: .7}}, 11: {time: yc, duration: 2200}, 12: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/wacky2.png"), nFrames: 20, nCols: 5, ticksPerFrame: 2.4, nLoops: 2.75, scale: 1.1, xOffset: 0, yOffset: 0, globalAlpha: .9, globalAlphaBub: .7}}, 13: {time: gc, duration: 1}, 14: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/iced.png"), nFrames: 1, nCols: 1, ticksPerFrame: 200, nLoops: 1, scale: 1.45, xOffset: 0, yOffset: 41, globalAlpha: 1, globalAlphaBub: .7, fade: {tickFrom: 150, tickTo: 200, fadeFrom: 0, fadeTo: 1}}}, 15: {time: yc, duration: 10300}, 16: {time: yc, duration: 400}, 17: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/upgrade.png"), nFrames: 25, nCols: 5, ticksPerFrame: 3, nLoops: 1, scale: 1.5, xOffset: 0, yOffset: 0, globalAlpha: .7, globalAlphaBub: .5}}, 18: {time: yc, duration: 800}, 20: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/anti_iced.png"), nFrames: 1, nCols: 1, ticksPerFrame: 200, nLoops: 1, scale: 1.45, xOffset: 0, yOffset: 41, globalAlpha: 1, globalAlphaBub: .7, fade: {tickFrom: 150, tickTo: 200, fadeFrom: 0, fadeTo: 1}}}, 21: {time: yc, duration: 1, sprites: {canvas: l_("img/animations/anti_rec.png"), nFrames: 1, nCols: 1, ticksPerFrame: 250, nLoops: 1, scale: 1.35, xOffset: 0, yOffset: 41, globalAlpha: .5, globalAlphaBub: .2, fade: {tickFrom: 200, tickTo: 250, fadeFrom: 0, fadeTo: 1}}}};
    !function () {
      for (var d = 0; 255 >= d; d++) {
        var b = kc[d];
        if (b) {
          var x = b.sprites;
          x && (b.duration = x.nFrames * x.ticksPerFrame * x.nLoops * 1e3 / 60), 0 == b.duration && (b.duration = b.time === gc ? 1800 : 3e4);
        }
      }
    }(), function () {
      var d = Di[p_("T2JqZWN0")], b = d ? d[p_("Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y")] : null, x = b ? b(Di, p_("Y2FuUnVuQWRz")) : null;
      Ln = !b || x && !x[p_("d3JpdGFibGU=")] && !x[p_("Y29uZmlndXJhYmxl")];
    }(), function () {
      ec = [];
      for (var d = 2 * Math.PI / 1e4, b = 0; 1e4 > b; b++) ec.push({cos: Math.cos(b * d), sin: Math.sin(b * d)});
    }(), Ix.prototype = {id: 0, color: "", colorDimmed: "", pid: 0, oid: 0, name: null, skinId: 0, skinFrames: null, hasImage: false, imgLoadedLo: null, imgLoaded: null, wears: null, starsCache: null, rclanCache: null, nameCache: null, sizeCache: null, copyCell: null, x: 0, y: 0, size: 0, ox: 0, oy: 0, oSize: 0, nx: 0, ny: 0, nSize: 0, ga: 1, createTime: 0, updateTime: 0, shouldUpdate: false, destroyed: false, spiked: 0, pins: null, pinsCache: null, imageId: 0, strokeSize: 0, anim: null, transform: null, ownCell: false, singleCellPlayer: false, cellType: -1, smallFood: false, shape: 0, rotation: 0, orientation: 0, colorIndexName: 0, isMinion: false, sameParty: false, isGhosted: false, isCloaked: false, coronaSpikes: false, stars: 0, destroy: function (d) {
      var b;
      if (this.smallFood) {
        var x = qi.length;
        for (b = 0; x > b; b++) if (qi[b] == this) {
          qi.splice(b, 1);
          break;
        }
      } else {
        var x = Hi.length;
        for (b = 0; x > b; b++) if (Hi[b] == this) {
          Hi.splice(b, 1);
          break;
        }
        if (0 == this.cellType) {
          this.ownCell && (b = ji.indexOf(this), -1 != b && (Xn = true, ji.splice(b, 1))), b = Xi.indexOf(this.id), -1 != b && Xi.splice(b, 1);
          var _ = this.isMinion ? bn[this.oid] : dn[this.oid];
          _ && (b = _.indexOf(this), -1 != b && _.splice(b, 1), 0 == _.length && (this.isMinion ? delete bn[this.oid] : delete dn[this.oid])), this.starsCache = null, this.rclanCache = null, this.nameCache = null, this.sizeCache = null, this.copyCell = null;
        }
      }
      delete Zi[this.id], this.destroyed = true, this.shouldUpdate = true, d && (ss || !this.smallFood || mn) && Ki.push(this);
    }, getNameSize: function () {
      return Ns ? 50 + ~~(.3 * this.size) : Math.max(~~(.3 * this.size), 24);
    }, setName: function (d) {
      if (d !== this.name) if (this.name = d) {
        var b = "";
        if (d[0] == "[") {
          var x = d.indexOf("]");
          -1 != x && (b = d.slice(1, x), d = d.length > x + 1 ? d.slice(x + 1 + (d[x + 1] == " " ? 1 : 0)) : "", b != "" && (null == this.rclanCache ? this.rclanCache = new Ux(~~(this.getNameSize() / 2 + .5), "#FFFFFF", true, "#000000") : this.rclanCache.setSize(~~(this.getNameSize() / 2 + .5)), this.rclanCache.setValue(" " + b + " ")));
        }
        b == "" && (this.rclanCache = null), d != "" ? (null == this.nameCache ? this.nameCache = new Ux(this.getNameSize(), "#FFFFFF", true, "#000000") : this.nameCache.setSize(this.getNameSize()), this.nameCache.setValue(" " + d + " ")) : this.nameCache = null;
      } else this.rclanCache = null, this.nameCache = null;
    }, reloadImage: function () {
      if (0 == this.skinId || An) if (0 != this.imageId) {
        var d = null, b = null;
        (ts || 0 != this.cellType) && (d = tc[this.imageId + "_lo"], !d && (h_(this.imageId), d = tc[this.imageId + "_lo"]), b = tc[this.imageId]), this.hasImage = true, this.imgLoadedLo = d && d.complete && 0 != d.width ? d : null, this.imgLoaded = b && b.complete && 0 != b.width ? b : null, this.skinFrames = null;
      } else this.hasImage = false, this.imgLoadedLo = null, this.imgLoaded = null, this.skinFrames = null; else {
        var d = null, b = null;
        ts && (d = dc[this.skinId + "_lo"], !d && (u_(this.skinId), d = dc[this.skinId + "_lo"]), b = dc[this.skinId]), this.hasImage = true, this.imgLoadedLo = d && d.complete && 0 != d.width ? d : null, this.imgLoaded = b && b.complete && 0 != b.width ? b : null, Eo[this.skinId] ? (this.skinFrames && this.skinFrames.skinId == this.skinId || (this.skinFrames = {skinId: this.skinId, apngLoadedLo: null, apngLoaded: null, zeroTime: 0, runTime: 0, currentFrame: 0}), d = b = null, ts && ls && (d = bc[this.skinId + "_lo"], !d && (f_(this.skinId), d = bc[this.skinId + "_lo"]), b = bc[this.skinId]), this.skinFrames.apngLoadedLo = d && d.complete && 0 != d.width ? d : null, this.skinFrames.apngLoaded = b && b.complete && 0 != b.width ? b : null) : this.skinFrames = null;
      }
    }, reloadWear: function (d) {
      var b = null, x = null;
      is && (b = tc["W" + d.wearId + "_lo"], !b && (m_(d.wearId), b = tc["W" + d.wearId + "_lo"]), x = tc["W" + d.wearId]), d.imgLoadedLo = b && b.complete && 0 != b.width ? b : null, d.imgLoaded = x && x.complete && 0 != x.width ? x : null;
    }, calcPins: function () {
      var d = this.pinsCache, b = !Bs && 2 == this.spiked, x = 4 == this.cellType ? .83 * this.size : this.size, _ = this.size * Zs;
      if (b && (_ *= .3), _ = _ > 30 ? 1e3 > _ ? 2 * ~~(_ / 2) : 1e3 : 30, d.p != _ || 0 != ~~(d.s - x) || 0 != ~~(d.x - this.x) || 0 != ~~(d.y - this.y)) {
        9 == this.cellType && 0 != ~~(d.s - x) && 0 != this.id && (this.rotation += Math.PI / (this.size * wn), this.rotation > Math.PI && (this.rotation -= 2 * Math.PI));
        var e, t, i = this.pins, n = 2 == this.spiked ? 1e4 * (this.rotation / (2 * Math.PI) + 1) + .5 : .5, a = 1e4 / _, o = 12 * wn, r = (o * d.s + x) / (o + 1), s = r + (b ? this.size < 100 ? ~~(this.size / 5) : 20 : 5), c = b;
        for (d.x = this.x, d.y = this.y, d.s = r, d.p = _, i.length > _ && i.splice(_); i.length < _;) i.push({x: this.x, y: this.y});
        for (var l = 0; _ > l; ++l) e = i[l], o = c ? r : s, (!b || c) && (t = ec[~~(a * l + n) % 1e4]), c = !c, e.x = this.x + t.cos * o, e.y = this.y + t.sin * o;
        this.strokeSize = s;
      }
    }, updatePos: function () {
      var d = ys ? 480 : 120, b = (yn - this.updateTime) / d, x = 0 > b ? 0 : b > 1 ? 1 : b, _ = this.x, e = this.y;
      if (this.x = x * (this.nx - this.ox) + this.ox, this.y = x * (this.ny - this.oy) + this.oy, this.size = x * (this.nSize - this.oSize) + this.oSize, this.pinsCache && 2 == this.cellType) {
        var t = this.x - _, i = this.y - e;
        (0 != ~~t || 0 != ~~i) && (this.rotation += .2 * Math.sqrt(t * t + i * i) * Math.PI / this.size, this.rotation > Math.PI && (this.rotation -= 2 * Math.PI));
      }
      if (ys && this.ga < 1 && (b = (yn - this.createTime) / d, this.ga = 0 > b ? 0 : b > 1 ? 1 : b), x >= 1 && (this.shouldUpdate = false, this.destroyed)) {
        var n = Ki.indexOf(this);
        -1 != n && Ki.splice(n, 1);
      }
      return x;
    }, drawCell: function (d) {
      var b = (this.wears && is ? 2.5 * this.size : this.size) + 40;
      if (!ss && this.smallFood && (!this.shouldUpdate || this.x == this.nx && this.y == this.ny) && !mn || (this.x + b < Ji - ri || this.y + b < Vi - si || this.x - b > Ji + ri || this.y - b > Vi + si)) this.shouldUpdate && (this.updatePos(), 1 != this.cellType && (this.pinsCache = null, this.strokeSize = 4 == this.cellType ? .83 * this.size : this.size)); else {
        var x, _ = Es && 2 == this.shape, e = $s && this.shape >= 3 || _, t = !this.spiked || !Ps || e || Gn < .04 * (Bs || 2 != this.spiked ? 2 + 2 * Hs : 1 + Hs) && 0 != this.id, i = this.shouldUpdate ? this.updatePos() : 1, n = false, a = this.x, o = this.y;
        if (1 != this.cellType) {
          if (t ? this.pinsCache && (this.pinsCache = null) : this.pinsCache || (x = 4 == this.cellType ? .83 * this.size : this.size, this.pinsCache = {x: 0, y: 0, s: x, p: 0}, !this.pins && (this.pins = [])), this.anim) {
            for (x = 0; x < this.anim.length; x++) {
              switch (b = this.anim[x], b.animId) {
                case 3:
                  this.spin(b);
                  break;
                case 6:
                  this.flip(b);
                  break;
                case 7:
                  this.flipCoin(b);
                  break;
                case 8:
                  this.shake(b);
                  break;
                case 11:
                  this.jump(b);
              }
              0 == b.animId && (this.anim.splice(x, 1), x--);
            }
            for (x = 0; x < this.anim.length; x++) {
              switch (b = this.anim[x], b.animId) {
                case 15:
                  this.drawSpeed(b, d, a, o);
              }
              0 == b.animId && (this.anim.splice(x, 1), x--);
            }
            0 == this.anim.length && (this.anim = null);
          }
          (b = this.transform) && (b.t || b.s || b.r) && (d.save(), n = true, b.t && (b.tx += a, b.ty += o, d.translate(b.tx, b.ty), a = o = 0), b.s && d.scale(b.sx, b.sy), b.r && d.rotate(b.rz));
        }
        if (d.beginPath(), t) if (0 == this.cellType && Nn ? (x = wn * (.4 > Gn ? 15 * Gn : 6), this.size < this.strokeSize && (x /= 3), this.strokeSize = (x * this.strokeSize + this.size) / (x + 1)) : this.spiked ? (x = 12 * wn, this.strokeSize = (x * this.strokeSize + (4 == this.cellType ? .83 * this.size : this.size)) / (x + 1)) : this.strokeSize = this.size, e) {
          this.rotation -= Math.PI / (1e3 * wn), this.rotation < -Math.PI && (this.rotation += 2 * Math.PI), b = this.shape;
          var r = this.strokeSize * _c[b], s = 1e4 * (this.rotation / (2 * Math.PI) + 1) + .5, c = 1e4 / b, l = ec[~~s % 1e4];
          for (d.moveTo(a + r * l.cos, o - r * l.sin), x = 1; b > x; x++) l = ec[~~(c * x + s) % 1e4], d.lineTo(a + r * l.cos, o - r * l.sin);
          d.closePath();
        } else if (this.coronaSpikes && Ps) {
          b = 16;
          var u = this.strokeSize, f = yn % 1e3, s = 500 >= f ? f / 500 : 1 - (f - 500) / 500, c = 1e4 / b, l = ec[~~(.25 * c + .5) % 1e4];
          for (d.moveTo(a + u * l.cos, o - u * l.sin), x = 0; b > x; x++) f = x % 2 == 0 ? u * (1.2 + .15 * s) : u * (1.35 - .15 * s), l = ec[~~(c * (x + .5) + .5) % 1e4], d.lineTo(a + f * l.cos, o - f * l.sin), l = ec[~~(c * (x + .75) + .5) % 1e4], d.lineTo(a + u * l.cos, o - u * l.sin), b - 1 > x && (l = ec[~~(c * (x + 1.25) + .5) % 1e4], d.lineTo(a + u * l.cos, o - u * l.sin));
          d.closePath();
        } else if (11 == this.cellType) d.rect(a - this.strokeSize, o - this.strokeSize, 2 * this.strokeSize, 2 * this.strokeSize); else if (16 == this.cellType) {
          var s = this.strokeSize, c = this.strokeSize / 8;
          1 == this.orientation && (s = c, c = this.strokeSize), d.rect(a - s, o - c, 2 * s, 2 * c);
        } else d.arc(a, o, this.strokeSize, 0, 2 * Math.PI, false); else {
          this.calcPins(), b = this.pins.length;
          var s = this.pins[0], c = a - this.x, l = o - this.y;
          for (d.moveTo(s.x + c, s.y + l), x = 1; b > x; ++x) s = this.pins[x], d.lineTo(s.x + c, s.y + l);
          d.closePath();
        }
        if (b = ((this.spiked ? .03 : .05) < Gn || 0 == this.id) && (60 < this.size || this.spiked || !this.smallFood && 25 < this.size && Gn > .15 || zs && (Gn > .4 || 20 < this.size)), _ || (x = this.ga * (this.isCloaked ? .04 : this.isGhosted ? .2 : zs ? !b && this.smallFood ? 1 : this.spiked && !Ds ? .7 : .4 : this.smallFood ? 1 : this.spiked && Ds || 14 == this.cellType ? .7 : Gn > .4 || 60 < this.size ? .95 : 1), d.globalAlpha = this.destroyed ? x * (1 - i) : x, d.fillStyle = this.isGhosted ? "#AAAAAA" : ns ? "#FFFFFF" : this.color, d.fill()), ((b && (!As || this.spiked) || _) && !this.isCloaked || this.isCloaked && (this.ownCell || mn)) && (x = this.ga, d.globalAlpha = this.destroyed ? x * (1 - i) : x, d.lineWidth = this.isCloaked && (this.ownCell || mn) ? 30 : this.smallFood ? 4 : zs ? this.spiked || 25 < this.size ? 6 : 4 : this.spiked && 80 > this.size ? 8 : 10, d.lineJoin = this.spiked && (Bs || 2 != this.spiked || this.size < 70) ? "miter" : "round", d.strokeStyle = this.isCloaked && (this.ownCell || mn) ? ps ? "#333333" : "#DDDDDD" : this.isGhosted || ns ? "#AAAAAA" : zs ? this.color : this.colorDimmed, d.stroke()), 1 != this.cellType) {
          if (this.hasImage && (ts || 0 != this.cellType) && !_ && !this.isGhosted) {
            b = e ? this.strokeSize * _c[this.shape] : this.coronaSpikes ? this.strokeSize * (1.275 + .075 * Math.abs(yn % 500 / 250 - 1)) : 11 == this.cellType ? 1.28 * this.strokeSize : this.strokeSize, b < this.size && (b = this.size);
            var h;
            if (this.skinFrames && ls) {
              x = this.skinFrames;
              var m = 128 >= 2 * b * Gn ? x.apngLoadedLo : x.apngLoaded;
              if (!m && (this.reloadImage(), m = 128 >= 2 * b * Gn ? x.apngLoadedLo : x.apngLoaded), m) {
                0 == x.zeroTime && (x.zeroTime = yn), x.runTime = yn - x.zeroTime, x.runTime >= m.playTime && (x.zeroTime += ~~(x.runTime / m.playTime) * m.playTime, x.runTime %= m.playTime, x.currentFrame = 0), x.currentFrame >= m.frames.length && (x.currentFrame = 0);
                for (var p = m.frames[x.currentFrame]; x.runTime >= p.end && x.currentFrame < m.frames.length - 1;) p = m.frames[++x.currentFrame];
                h = p.canvas;
              }
            }
            if (!h && (h = 128 >= 2 * b * Gn ? this.imgLoadedLo : this.imgLoaded), !h && (this.reloadImage(), h = 128 >= 2 * b * Gn ? this.imgLoadedLo : this.imgLoaded), h) {
              d.save(), x = this.ga * (this.isCloaked ? .01 : zs ? 0 != this.imageId ? .5 : .3 : 0 != this.imageId ? .85 : 1), d.globalAlpha = this.destroyed ? x * (1 - i) : x;
              var c = b;
              16 == this.cellType ? (c = b / 8, 1 == this.orientation && (d.translate(a, o), d.rotate(Math.PI / 2), d.translate(-a, -o))) : 11 != this.cellType && d.clip(), d.drawImage(h, a - b, o - c, 2 * b, 2 * c), d.restore();
            }
          }
          if (this.wears && is && !this.isGhosted) {
            b = this.strokeSize;
            for (var v = 0; v < this.wears.length; v++) {
              var g = this.wears[v], y = g.wearArea, k = 5 == y ? 5 * b : 3 * b, h = 128 >= k * Gn ? g.imgLoadedLo : g.imgLoaded;
              !h && (this.reloadWear(g), h = 128 >= k * Gn ? g.imgLoadedLo : g.imgLoaded), h && (x = this.ga * (this.isCloaked ? .01 : zs ? .7 : .95), d.globalAlpha = this.destroyed ? x * (1 - i) : x, d.drawImage(h, a - (3 == y || 5 == y ? 2.5 : 4 == y ? .5 : 1.5) * b, o - (1 == y || 5 == y ? 2.5 : 2 == y ? .5 : 1.5) * b, k, k));
            }
          }
          if (this.anim) {
            for (x = 0; x < this.anim.length; x++) {
              switch (b = this.anim[x], b.animId) {
                case 2:
                  this.drawHighlight(b, d, a, o);
                  break;
                case 9:
                  this.drawHit(b, d, a, o);
                  break;
                case 13:
                  this.drawDragOver(b, d, a, o);
                  break;
                case 16:
                  this.drawCloakHighlight(b, d, a, o);
                  break;
                case 4:
                case 5:
                case 10:
                case 12:
                case 14:
                case 20:
                case 21:
                case 22:
                case 17:
                  this.drawSprites(b, d, a, o);
              }
              0 == b.animId && (this.anim.splice(x, 1), x--);
            }
            for (x = 0; x < this.anim.length; x++) {
              switch (b = this.anim[x], b.animId) {
                case 1:
                  this.drawFlash(b, d, a, o);
                  break;
                case 18:
                  this.drawBlast(b, d, a, o);
              }
              0 == b.animId && (this.anim.splice(x, 1), x--);
            }
            0 == this.anim.length && (this.anim = null);
          }
          0 == this.cellType && (this.singleCellPlayer ? 10 : 20) < this.size * Gn && (os || !this.isMinion || 125 < this.size) && (Dn < this.size || this.singleCellPlayer && 30 <= this.size) && !this.destroyed && aa && this.drawText(d, a, o);
        }
        n && ((b = this.transform) && (b.t && (b.t = false, b.tx = b.ty = 0), b.s && (b.s = false, b.sx = b.sy = 1), b.r && (b.r = false, b.rz = 0)), d.restore());
      }
    }, setAnimation: function (d) {
      if (1 != this.cellType) if (d = {animId: d.animId, animStartTime: d.animStartTime, received: d.received}, this.anim) {
        for (var b = 0; b < this.anim.length; b++) if (this.anim[b].received > d.received) return this.anim.splice(b, 0, d), void (this.anim.length > rn && this.anim.splice(this.anim.length - 2, 1));
        this.anim.length < rn ? this.anim.push(d) : this.anim[this.anim.length - 1] = d;
      } else this.anim = [d];
    }, clearAnimation: function (d) {
      if (this.anim) if (0 == d) this.anim = null; else {
        for (var b = 0; b < this.anim.length; b++) this.anim[b].animId == d && (this.anim.splice(b, 1), b--);
        0 == this.anim.length && (this.anim = null);
      }
    }, getTransform: function () {
      return !this.transform && (this.transform = {t: false, s: false, r: false, tx: 0, ty: 0, sx: 1, sy: 1, rz: 0}), this.transform;
    }, spin: function (d) {
      var b = (yn - d.animStartTime) / kc[d.animId].duration;
      if (b = 0 > b ? 0 : b > 1 ? 1 : b, b >= 1) d.animId = 0; else {
        var x = 1 - b, _ = this.getTransform();
        cs && (_.t = _.r = true), _.rz += ((1 + 4 * (1 - x * x)) % 2 - 1) * Math.PI;
      }
    }, flip: function (d) {
      var b = (yn - d.animStartTime) / kc[d.animId].duration;
      if (b = 0 > b ? 0 : b > 1 ? 1 : b, b >= 1) d.animId = 0; else {
        var x = 1 - b, _ = x * x, e = this.getTransform();
        cs && (e.t = e.s = e.r = true), e.sx *= ec[~~(1e4 * ((1 + 8 * (1 - _)) % 2 + 1) / 2 + .5) % 1e4].cos, e.rz += (_ > .75 ? _ - 1 : _ > .25 ? .5 - _ : _) * Math.PI;
      }
    }, flipCoin: function (d) {
      if (this.destroyed) d.animId = 0; else {
        var b = (yn - d.animStartTime) / 2e3;
        b >= 1 && (d.animStartTime += 2e3, b %= 1), b = 0 > b ? 0 : b > 1 ? 1 : b;
        var x = this.getTransform();
        cs && (x.t = x.s = true), x.sx *= ec[~~(1e4 * (b > .5 ? 1 - b : b) / 2 + .5)].cos;
      }
    }, shake: function (d) {
      var b = (yn - d.animStartTime) / kc[d.animId].duration;
      if (b = 0 > b ? 0 : b > 1 ? 1 : b, b >= 1) d.animId = 0; else {
        var x = 1 - b, _ = this.getTransform();
        cs && (_.t = _.r = true), _.tx += ~~((100 + .1 * this.size) * x * (Math.random() - .5)), _.ty += ~~((100 + .1 * this.size) * x * (Math.random() - .5)), _.rz += .5 * x * (Math.random() - .5) * Math.PI;
      }
    }, jump: function (d) {
      var b = (yn - d.animStartTime) / (kc[d.animId].duration - 20 * (this.id % 20));
      if (b = 0 > b ? 0 : b > 1 ? 1 : b, b >= 1) b = (yn - d.animStartTime) / kc[d.animId].duration, b >= 1 && (d.animId = 0); else {
        for (var x = 3, _ = 1e3, e = .5, t = .4, i = 2 * t * Math.max(_ / (_ + this.size), .2), n = i * this.size / (2 * (_ + this.size * (1 + i))), a = x * b, o = 1, r = this.getTransform(), s = (a + .70710678 * n) % 1, c = 0; ~~a > c; c++) o *= e;
        if (cs && (r.t = r.s = true), s > n && 1 - n > s) {
          s = (s - n) / (1 - 2 * n), s = 1 - 2 * (s > .5 ? 1 - s : s);
          var l = -0.5 * i * o, u = s * s;
          r.ty += l * this.size + (_ + this.size) * o * (u - 1), r.sx *= 1 + l * u, r.sy *= 1 - l * u;
        } else {
          s = n >= s ? s / n : 1 - (s - 1 + n) / n;
          var l = (.5 - s * s) * i * o;
          r.ty += l * this.size, r.sx *= 1 + l, r.sy *= 1 - l;
        }
      }
    }, drawHighlight: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1 || this.destroyed) d.animId = 0; else {
        var t = .05 > e ? e / .05 : .5 > e ? 1 : 1 - (e - .5) / .5;
        b.globalAlpha = (ps ? .25 : .18) * t, b.lineWidth = Math.min(30 + 30 * Math.max(1 - 2 * Gn, 0), this.size), b.lineJoin = this.spiked ? "miter" : "round", b.strokeStyle = ps ? "#FFFFFF" : "#000000", b.stroke();
      }
    }, drawCloakHighlight: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1 || this.destroyed || this.ownCell) d.animId = 0; else {
        var t = .5 > e ? 1 : 1 - (e - .5) / .5;
        b.globalAlpha = t, b.lineWidth = 30, b.lineJoin = this.spiked ? "miter" : "round", b.strokeStyle = ps ? "#333333" : "#DDDDDD", b.stroke();
      }
    }, drawDragOver: function (d, b, x, _) {
      d.animId = 0, b.globalAlpha = .5, b.fillStyle = "#FFFFFF", b.fill();
    }, drawFlash: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1 || this.destroyed) d.animId = 0; else if (cs) {
        var t = this.transform, i = t && (t.s || t.r);
        i && (b.restore(), b.save(), t.t && b.translate(t.tx, t.ty));
        var n, a = lc;
        if (a && a.complete && 0 != a.width) {
          n = .2 > e ? e / .2 : 1 - (e - .2) / .8;
          var o = this.size / 20, r = a.width * o * n, s = a.height * o * n;
          b.globalAlpha = .7 * n * n, b.drawImage(a, x - r / 2, _ - s / 2, r, s);
        }
        .9 > e && (n = e / .9, b.beginPath(), b.arc(x, _, 1.3 * this.size + 500 * n, 0, 2 * Math.PI, false), b.globalAlpha = .2 * (1 - n) * (1 - n), b.lineWidth = ~~(20 + .02 * this.size), b.strokeStyle = "#90A0FF", b.stroke()), i && (t.s && b.scale(t.sx, t.sy), t.r && b.rotate(t.rz));
      }
    }, drawBlast: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1) d.animId = 0; else if (cs) {
        !d.pos && (d.pos = {x: this.nx, y: this.ny}), x = d.pos.x, _ = d.pos.y;
        var t = this.transform, i = t && (t.t || t.s || t.r);
        i && (b.restore(), b.save()), b.beginPath(), b.arc(x, _, this.size + 1340 * e, 0, 2 * Math.PI, false), b.globalAlpha = .5 * (1 - e) * (1 - e), b.fillStyle = ps ? "#FFFFFF" : "#777777", b.fill(), i && (t.t && b.translate(t.tx, t.ty), t.s && b.scale(t.sx, t.sy), t.r && b.rotate(t.rz));
      }
    }, drawSprites: function (d, b, x, _) {
      var e = kc[d.animId].sprites, t = (yn - d.animStartTime) / kc[d.animId].duration;
      if (t = 0 > t ? 0 : t > 1 ? 1 : t, t >= 1 || this.destroyed || !e || e.nFrames < 1 || e.nCols < 1) d.animId = 0; else if (e.canvas && e.canvas.complete) {
        var i = ~~(60 * (yn - d.animStartTime) / 1e3 - 1);
        if (0 > i && (i = 0), frameIndex = ~~(i / e.ticksPerFrame), (e.nLoops <= 0 || e.nLoops > 1 && frameIndex < e.nFrames * e.nLoops) && (frameIndex %= e.nFrames), frameIndex > e.nFrames - 1) d.animId = 0; else if (cs || kc[d.animId].ignoreAnimSetting) {
          var n = e.canvas.width / e.nCols, a = e.canvas.height / Math.ceil(e.nFrames / e.nCols), o = 2 * e.scale * this.strokeSize / Math.max(n, a), r = n * o, s = a * o, c = e.fade, l = !c || i < c.tickFrom ? 0 : i >= c.tickTo ? c.fadeTo : c.fadeFrom + (c.fadeTo - c.fadeFrom) * (i - c.tickFrom) / (c.tickTo - c.tickFrom);
          b.globalAlpha = (zs ? e.globalAlphaBub : e.globalAlpha) * (1 - l), b.drawImage(e.canvas, frameIndex % e.nCols * n, ~~(frameIndex / e.nCols) * a, n, a, x - r / 2 + e.xOffset * o, _ - s / 2 + e.yOffset * o, r, s);
        }
      }
    }, drawHit: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1) d.animId = 0; else if (cs) {
        var t = uc;
        if (t && t.complete && 0 != t.width) {
          var i = 1 - e, n = this.strokeSize * e * .015, a = t.width * n, o = t.height * n;
          b.globalAlpha = Math.min(Math.max(100 / (this.strokeSize * Gn), .5), .9) * i * i * (this.destroyed ? .5 : 1), b.drawImage(t, x + (Math.random() - .5) * this.strokeSize * .05 - a / 2, _ + (Math.random() - .5) * this.strokeSize * .05 - o / 2, a, o);
        }
      }
    }, drawSpeed: function (d, b, x, _) {
      var e = (yn - d.animStartTime) / kc[d.animId].duration;
      if (e = 0 > e ? 0 : e > 1 ? 1 : e, e >= 1 || this.destroyed) d.animId = 0; else {
        !d.trail && (d.trail = []);
        var t, i = this.transform, n = 0 == d.trail.length, a = this.strokeSize, o = x - this.x, r = _ - this.y;
        if (x = this.x, _ = this.y, i && i.t && (o += i.tx, r += i.ty), !n) {
          t = d.trail[d.trail.length - 1];
          var s = x - t.x, c = _ - t.y;
          n = s * s + c * c > 2500;
        }
        if (n) d.trail.push({x: x, y: _, time: yn, rd: 0}); else if (d.trail.length > 1) {
          t = d.trail[0];
          var l = d.trail[1], u = t.rd + Math.min(l.time - t.time, 1e3);
          yn - d.trail[d.trail.length - 1].time > u && (l.rd = u, d.trail.splice(0, 1));
        }
        if (d.trail.length > ~~(5.5 - 2 * Hs) && d.trail.splice(0, 1), d.trail.length > 1 && cs) if (16 >= a * Gn) {
          var f = hc;
          if (f && f.complete && 0 != f.width) for (var h = 0; h < d.trail.length; h++) t = d.trail[h], b.globalAlpha = .02 * (h + 1), b.drawImage(f, t.x + o - a, t.y + r - a, 2 * a, 2 * a);
        } else {
          var f = fc;
          if (f && f.complete && 0 != f.width) {
            t = d.trail[0];
            for (var s = x - t.x, c = _ - t.y, m = Math.sqrt(s * s + c * c), p = 0 != m ? s / m : 0, v = 0 != m ? c / m : 0, h = 0; h < d.trail.length; h++) t = d.trail[h], b.save(), b.transform(p, v, -v, p, t.x + o, t.y + r), b.globalAlpha = .1 * (h + 1), b.drawImage(f, -a - 50, -a, a + 50, 2 * a), b.restore();
          }
        }
      }
    }, drawText: function (d, b, x) {
      var _ = as && (this.name || this.stars > 0), e = rs && (this.ownCell || 0 == ji.length || this.sameParty) && this.size * Gn > 60;
      if (_ || e) {
        d.globalAlpha = this.ga * (this.isCloaked ? .01 : 1);
        var t, i, n, a, o, r = this.getNameSize();
        if (_) {
          var s = this.stars > 0, c = this.stars > 6;
          if (s || (t = this.rclanCache)) if (s && !(t = this.starsCache) && (t = c ? this.starsCache = new Ux(~~(r / 1.5 + .5), "#5cff00", true, "#000000") : this.starsCache = new Ux(~~(r / 1.5 + .5), "#FFD700", true, "#AA6C39")), t.hasCanvas() || Jn == this) {
            var l = s ? "starsCache" : "rclanCache";
            if (s) {
              for (var u = " ", f = 0; f < this.stars; f++) u += "â˜… ";
              t.setValue(u);
            }
            if (t.setStroke(Fs), t.setScale(Yn), t.setSizeWhenDelta(~~(r / (s ? 1.5 : 2) + .5), .2), t.isDirty()) if ((i = this.copyCell) && (a = i[l]) && t.match(a, .2)) o = t.copy(a); else {
              if ((n = this.isMinion ? bn[this.oid] : dn[this.oid]) && n.length > 1) for (var u, f = 0; f < n.length; f++) if ((u = n[f]) && u != this && u != i && (a = u[l]) && t.match(a, .2)) {
                this.copyCell = u, o = t.copy(a);
                break;
              }
              t.isDirty() && (this.copyCell = null, o = t.render());
            } else o = t.render();
            i = t.getAppliedScale(), n = o.width / i, a = o.height / i, d.drawImage(o, b - n / 2, x - a / 2 - (a / .75 + 2), n, a);
          } else Vn = this;
          if (t = this.nameCache) {
            if (t.hasCanvas() || Jn == this) {
              if (t.setColor(sc[this.colorIndexName]), t.setStroke(Fs), Fs && t.setStrokeColor(cc[this.colorIndexName]), t.setScale(Yn), t.setSizeWhenDelta(r, .2), t.isDirty()) if ((i = this.copyCell) && (a = i.nameCache) && t.match(a, .2)) o = t.copy(a); else {
                if ((n = this.isMinion ? bn[this.oid] : dn[this.oid]) && n.length > 1) for (var u, f = 0; f < n.length; f++) if ((u = n[f]) && u != this && u != i && (a = u.nameCache) && t.match(a, .2)) {
                  this.copyCell = u, o = t.copy(a);
                  break;
                }
                t.isDirty() && (this.copyCell = null, o = t.render());
              } else o = t.render();
              i = t.getAppliedScale(), n = o.width / i, a = o.height / i, d.drawImage(o, b - n / 2, x - a / 2, n, a);
            } else Vn = this;
            x += a / 1.5 + 4;
          }
        }
        e && ((t = this.sizeCache) || (t = this.sizeCache = new Ux(~~(r / 2 + .5), "#FFFFFF", true, "#000000")), t.hasCanvas() || Jn == this ? (t.setValue(~~(this.size * this.size / 100)), t.setStroke(Fs), t.setScale(Yn), t.setSizeWhenDelta(~~(r / 2 + .5), .2), o = t.render(), i = t.getAppliedScale(), n = o.width / i, a = o.height / i, d.drawImage(o, b - n / 2, x - a / 2, n, a)) : Vn = this);
      }
    }, drawMinimapCell: function (d, b) {
      var x = this.nSize * b, _ = x > .6 ? this.nSize : ~~(.6 / b), e = Es && 2 == this.shape && x > 1, t = false, i = this.nx, n = this.ny;
      if (this.anim) {
        for (var a, o = 0; o < this.anim.length; o++) {
          switch (a = this.anim[o], a.animId) {
            case 3:
              this.spin(a);
              break;
            case 6:
              this.flip(a);
              break;
            case 7:
              this.flipCoin(a);
              break;
            case 8:
              this.shake(a);
              break;
            case 11:
              this.jump(a);
          }
          0 == a.animId && (this.anim.splice(o, 1), o--);
        }
        0 == this.anim.length && (this.anim = null), (a = this.transform) && (a.t || a.s || a.r) && (d.save(), t = true, a.t && (a.tx += i, a.ty += n, d.translate(a.tx, a.ty), i = n = 0), a.s && d.scale(a.sx, a.sy), a.r && d.rotate(a.rz));
      }
      if (d.beginPath(), $s && this.shape >= 3 && x > 2 || e) {
        var r = this.shape, s = _ * _c[r], c = 1e4 * (this.rotation / (2 * Math.PI) + 1) + .5, a = 1e4 / r, l = ec[~~c % 1e4];
        d.moveTo(i + s * l.cos, n - s * l.sin);
        for (var o = 1; r > o; o++) l = ec[~~(a * o + c) % 1e4], d.lineTo(i + s * l.cos, n - s * l.sin);
        d.closePath();
      } else if (11 == this.cellType) d.rect(i - _, n - _, 2 * _, 2 * _); else if (16 == this.cellType) {
        var c = _, a = _ / 8;
        1 == this.orientation && (c = a, a = _), d.rect(i - c, n - a, 2 * c, 2 * a);
      } else d.arc(i, n, _, 0, 2 * Math.PI, false);
      if (e || (d.fillStyle = this.isGhosted ? "#AAAAAA" : ns ? "#FFFFFF" : this.color, d.fill()), (this.spiked && x > 2 || e) && (d.strokeStyle = this.isGhosted || ns ? "#666666" : this.colorDimmed, d.stroke()), this.anim) {
        for (var a, o = 0; o < this.anim.length; o++) {
          switch (a = this.anim[o], a.animId) {
            case 9:
              this.drawHit(a, d, i, n), Eb(d, b);
              break;
            case 4:
            case 5:
            case 10:
            case 12:
            case 14:
            case 20:
            case 21:
            case 22:
            case 17:
              this.drawSprites(a, d, i, n), Eb(d, b);
          }
          0 == a.animId && (this.anim.splice(o, 1), o--);
        }
        for (o = 0; o < this.anim.length; o++) {
          switch (a = this.anim[o], a.animId) {
            case 1:
              this.drawFlash(a, d, i, n), Eb(d, b);
              break;
            case 18:
              this.drawBlast(a, d, i, n), Eb(d, b);
          }
          0 == a.animId && (this.anim.splice(o, 1), o--);
        }
        0 == this.anim.length && (this.anim = null);
      }
      t && ((a = this.transform) && (a.t && (a.t = false, a.tx = a.ty = 0), a.s && (a.s = false, a.sx = a.sy = 1), a.r && (a.r = false, a.rz = 0)), d.restore());
    }}, Ux.prototype = {_value: "", _color: "#000000", _stroke: false, _strokeColor: "#000000", _strokeWidth: 0, _size: 16, _canvas: null, _ctx: null, _dirty: false, _scale: 1, _appliedScale: 1, _correctionScale: 1, setSize: function (d) {
      this._size != d && (this._size = d, this._dirty = true), this._correctionScale = 1;
    }, setSizeWhenDelta: function (d, b) {
      (this._dirty || this._size * (1 + b) < d || this._size * (1 - b) > d) && (this._size = d, this._dirty = true), this._correctionScale = d > 0 ? this._size / d : 1;
    }, setScale: function (d) {
      this._scale != d && (this._scale = this._appliedScale = d, this._dirty = true);
    }, setColor: function (d) {
      this._color != d && (this._color = d, this._dirty = true);
    }, setStroke: function (d) {
      this._stroke != d && (this._stroke = d, this._dirty = true);
    }, setStrokeColor: function (d) {
      this._strokeColor != d && (this._strokeColor = d, this._dirty = true);
    }, setValue: function (d) {
      d != this._value && (this._value = d, this._dirty = true);
    }, render: function () {
      if (null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), !this._dirty && (this._canvas.width = this._canvas.height = 1)), this._dirty) {
        this._dirty = false;
        var d, b, x, _ = this._canvas, e = this._ctx, t = this._value, i = this._scale, n = this._size, a = this._stroke ? this._strokeWidth > 0 ? this._strokeWidth : 4 + ~~(.05 * n) : 3;
        e.font = n + "px CarterOne, serif", x = d = (e.measureText(t).width + 2 * a) * i, b = (n + ~~(.4 * n)) * i, b > x && (x = b), x > 3840 && (x = 3840 / x, i *= x, d *= x, b *= x), this._appliedScale = i, _.width = 1 > d ? 1 : d, _.height = 1 > b ? 1 : b, e.font = n + "px CarterOne", e.scale(i, i), e.globalAlpha = 1, this._stroke && (e.lineWidth = a, e.strokeStyle = this._strokeColor, e.strokeText(t, a, n)), e.fillStyle = this._color, e.fillText(t, a, n);
      }
      return this._canvas;
    }, isDirty: function () {
      return this._dirty;
    }, hasCanvas: function () {
      return !!this._canvas;
    }, match: function (d, b) {
      return d && d._canvas && !(d._size * (1 + b) < this._size || d._size * (1 - b) > this._size) && d._scale == this._scale && d._stroke == this._stroke && d._color == this._color && d._strokeColor == this._strokeColor && d._value == this._value && d._strokeWidth == this._strokeWidth && !d._dirty;
    }, copy: function (d) {
      if (null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), !this._dirty && (this._canvas.width = this._canvas.height = 1)), this._dirty && d && d._canvas) {
        this._dirty = false;
        var b = this._canvas, x = this._ctx, _ = d._canvas;
        b.width = _.width, b.height = _.height, x.globalAlpha = 1, x.drawImage(_, 0, 0), this._appliedScale = d._appliedScale, this._correctionScale = this._size > 0 ? d._size / this._size : 1, this._size = d._size;
      }
      return this._canvas;
    }, getAppliedScale: function () {
      return this._appliedScale * this._correctionScale;
    }};
    var wc = String.fromCharCode, Sc = [wc(69, 118, 101, 110, 116), wc(84, 97, 114, 103, 101, 116), wc(115, 101, 116), wc(97, 100, 100), wc(114, 101, 109, 111, 118, 101), wc(76, 105, 115, 116, 101, 110, 101, 114), wc(84, 105, 109, 101, 111, 117, 116), wc(112, 114, 111, 116, 111, 116, 121, 112, 101), wc(68, 111, 99, 117, 109, 101, 110, 116), wc(99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116), wc(105, 102, 119), wc(99, 111, 110, 116, 101, 110, 116, 87, 105, 110, 100, 111, 119), wc(102, 117, 115), wc(104, 111, 111, 107, 101, 100), wc(105, 102, 114, 97, 109, 101), wc(99, 97, 110, 82, 117, 110, 65, 100, 115), wc(87, 101, 98, 83, 111, 99, 107, 101, 116), wc(115, 101, 110, 100), wc(114, 101, 97, 108, 83, 101, 110, 100), wc(85, 105, 110, 116, 56, 65, 114, 114, 97, 121), wc(98, 117, 102, 102, 101, 114), wc(99, 97, 108, 108), wc(115, 101, 114, 118, 101, 114), wc(112, 117, 115, 104, 66, 111, 116, 115)], Mc = d[Sc[2] + Sc[6]], Tc = [wc(77, 117, 116, 97, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114), wc(111, 98, 115, 101, 114, 118, 101)], Cc = d[Tc[0]], Ic = function () {};
    Cc && Cc[Sc[7]] && (Cc[Sc[7]][Tc[1]] = Ic);
    var Uc = WebSocket, Ac = WebSocket.prototype.send, Nc = function (d) {
      var b = ["aSocket", "call"];
      !this[b[0]] && Ac[b[1]](this, d);
    };
    WebSocket.prototype.send = Nc, function () {
      if (d.emgaa) for (var b = 0; b < emgaa.length; b++) Rn += emgaa.charCodeAt(b) * (1 - (!b || b % 2 ? 0 : 2)) - 1 * (b ? 0 : 1);
    }();
    var Fc = document.createElement("script");
    Fc.id = "avaz", function () {
      d.requestAnimationFrame || (d.requestAnimationFrame = function (d) {
        return setTimeout(d, 16.666666666666668);
      });
    }(), la && (Di[sa] = ca), function () {
      var d = "https://cellcraft.io";
      "http://cellcraft.io";
      window.location.origin && window.location.origin.toLowerCase() === d;
    }(), b(function () {
      function x(d) {
        var b = 0;
        if (d && !isNaN(d)) if (d = "" + d, d.length > 5) {
          var x = d.substr(0, 5), _ = d.substr(5);
          if (!isNaN(x) && !isNaN(_)) {
            for (var e = 0, t = 0; t < x.length; t++) e += (parseInt(x.substr(t, 1)) + 30) * (t + 1);
            e == parseInt(_) && (b = Math.max(parseInt(x) - 1e4, 0));
          }
        } else b = parseInt(d);
        return b;
      }
      ia = true, function () {
        if ("SharedWorker" in window) try {
          Gi = new SharedWorker("js/worker.js"), Gi.port.onmessage = function (d) {
            Li = d.data;
          }, Gi.port.postMessage("broadcast");
        } catch (d) {
          Gi = null;
        }
      }(), Cx(), Mc(Cx, 0), function () {
        function d(d) {
          var b = d.onclick || d.onmousedown || d.onmouseup || d.onkeydown || d.onkeyup || d.onkeypress || d.oninput || d.onchange || d.onfocus || d.onblur || d.onfocusin || d.onfocusout;
          return b && (d.onclick = d.onmousedown = d.onmouseup = d.onkeydown = d.onkeyup = d.onkeypress = d.oninput = d.onchange = d.onfocus = d.onblur = d.onfocusin = d.onfocusout = function () {}), b;
        }
        function b(b) {
          (d(_) || d(e) || d(t)) && (_.value = e.value = ""), b.stopImmediatePropagation();
        }
        function x(d) {
          d.stopImmediatePropagation();
        }
        var _ = document.getElementById("username"), e = document.getElementById("password"), t = document.getElementById("sent"), i = document.getElementById("register-btn"), n = document.getElementById("logoutBtn"), a = document.getElementById("login-form");
        _.addEventListener("input", b, true), e.addEventListener("input", b, true), t.addEventListener("click", function (b) {
          !d(t) && Lx(_.value, e.value, 0), b.stopImmediatePropagation();
        }, true), i.addEventListener("click", function (b) {
          return !d(i) && d_(document.getElementById("regUsername").value, document.getElementById("regPassword").value, document.getElementById("regPassword").value, document.getElementById("regEmail").value), b.stopImmediatePropagation(), false;
        }, true), n.addEventListener("click", function (b) {
          !d(n) && Xx(), b.stopImmediatePropagation();
        }, true), _.addEventListener("keydown", x, true), _.addEventListener("keyup", x, true), _.addEventListener("keypress", x, true), _.addEventListener("change", x, true), _.addEventListener("blur", x, true), _.addEventListener("focusout", x, true), e.addEventListener("keydown", x, true), e.addEventListener("keyup", x, true), e.addEventListener("keypress", x, true), e.addEventListener("change", x, true), e.addEventListener("blur", x, true), e.addEventListener("focusout", x, true), t.addEventListener("mousedown", x, true), t.addEventListener("mouseup", x, true), t.addEventListener("focus", x, true), t.addEventListener("focusin", x, true), a.addEventListener("keydown", function (d) {
          27 == d.keyCode && (V_ = 0);
        }, true);
      }(), b(".bs-example-modal-lg").on("show.bs.modal", function () {
        Nr = true, Pr && Se < Date.now() - 4e4 && q(), na && (Ro && b("#skinsTab").hasClass("active") && Od(), Yo && b("#wearablesTab").hasClass("active") && Gd());
      }).on("hide.bs.modal", function () {
        Nr = false, na && 0 == b("div.modal.in:visible").not(this).length && azad(false);
      }), b(".bs-example-modal-lg3").on("show.bs.modal", function () {
        Fr = true, b("#remainingSpins").text(0), pi && Sb(57), loadSpinWheelAudio();
      }).on("hide.bs.modal", function () {
        Fr = false, na && 0 == b("div.modal.in:visible").not(this).length && azad(false);
      }), b(".pass-reset-modal").on("show.bs.modal", function () {
        b("#reset-pw-row").show(), b(".pwresetalertdanger,.pwresetalert").hide();
      }), $("#overlays").fadeIn(1e3), function () {
        function b() {
          window.aiptag.adplayer ? gt = window.aiptag.adplayer : setTimeout(b, 1e3);
        }
        var x = document.getElementById("cellcraft-io_300x250"), _ = document.getElementById("cellcraft-io_970x250"), e = document.getElementById("adWrapper300x250"), t = document.getElementById("advertDialog1"), i = $(".featured-yt")[0], n = document.getElementById("cellcraft-io_728x90"), a = document.getElementById("agma-io_160x600"), o = document.getElementById("adWrapper728x90"), r = document.getElementById("adWrapper160x600"), s = document.getElementById("cellcraft-io_728x90_2"), c = document.getElementById("adWrapper728x90_2");
        x && (x.remove = x.parentNode.removeChild = function () {}), _ && (_.remove = _.parentNode.removeChild = function () {}), e && (e.remove = e.parentNode.removeChild = function () {}), t && (t.remove = t.parentNode.removeChild = function () {}), i && (i.remove = i.parentNode.removeChild = function () {}), n && (n.remove = n.parentNode.removeChild = function () {}), a && (a.remove = a.parentNode.removeChild = function () {}), o && (o.remove = o.parentNode.removeChild = function () {}), r && (r.remove = r.parentNode.removeChild = function () {}), s && (s.remove = s.parentNode.removeChild = function () {}), c && (c.remove = c.parentNode.removeChild = function () {}), b();
        var l = "addTimeoutListener";
        d[l] && delete d[l];
      }(), ye = Date.now(), ke = Date.now(), Ne = false, Te = true, az(0, 2), Zx(), typeof Storage !== "undefined" && (localStorage.cid ? Ei = localStorage.cid : localStorage.cid = Ei), $("#inventory").find(".inventory-box").tooltip({delay: {show: 500, hide: 0}}), b_(), --Rn, On = v2za0() || On;
      var _ = zn;
      b.post("client.php", {data: JSON.stringify({cv: 4 * zn, ch: Lr, ccv: _, vv: k_})}, function (b) {
        d.emgaa && d.btoa && d.vurl && zn == _ && b && !isNaN(b) && (Qr = x(b)) ? Ao != "" && setserver(Ao, No) : C("Unable to connect!  Please refresh your browser and try again.", false, true, 0, 0);
      }, "text"), window.googletag && googletag.cmd.push(function () {
        googletag.pubads().addEventListener("impressionViewable", function (d) {
          if (yt) {
            var b = d.slot.getSlotElementId();
            b == "cellcraft-io_970x250" ? Ue && (fe = true, he && id()) : b == "cellcraft-io_300x250" && Ie && (fe = true, he && td());
          }
        });
      });
    }), d.addEventListener("cut", function (d) {
      d.target && d.target.id === "chtbox" && (d.preventDefault(), d.stopImmediatePropagation());
    }, true), d.addEventListener("copy", function (d) {
      d.target && d.target.id === "chtbox" && (d.preventDefault(), d.stopImmediatePropagation());
    }, true), d.addEventListener("paste", function (d) {
      d.target && d.target.id === "chtbox" && (d.preventDefault(), d.stopImmediatePropagation());
    }, true), d.onload = x, d.addEventListener("beforeunload", function (d) {
      na = false, cd(), $b();
    });
  }(window, window.jQuery);
  
