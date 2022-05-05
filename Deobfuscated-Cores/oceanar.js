'use strict';
!function(t$jscomp$0, e$jscomp$7) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = t$jscomp$0.document ? e$jscomp$7(t$jscomp$0, true) : function(t$jscomp$1) {
      if (!t$jscomp$1.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return e$jscomp$7(t$jscomp$1);
    };
  } else {
    e$jscomp$7(t$jscomp$0);
  }
}("undefined" != typeof window ? window : this, function(t$jscomp$2, e$jscomp$8) {
  function y$jscomp$59(t$jscomp$3) {
    var e$jscomp$9 = !!t$jscomp$3 && "length" in t$jscomp$3 && t$jscomp$3.length;
    var n$jscomp$4 = h$jscomp$6.type(t$jscomp$3);
    return "function" !== n$jscomp$4 && !h$jscomp$6.isWindow(t$jscomp$3) && ("array" === n$jscomp$4 || 0 === e$jscomp$9 || "number" == typeof e$jscomp$9 && e$jscomp$9 > 0 && e$jscomp$9 - 1 in t$jscomp$3);
  }
  function C$jscomp$0(t$jscomp$4, e$jscomp$10, n$jscomp$5) {
    if (h$jscomp$6.isFunction(e$jscomp$10)) {
      return h$jscomp$6.grep(t$jscomp$4, function(t$jscomp$5, i$jscomp$4) {
        return !!e$jscomp$10.call(t$jscomp$5, i$jscomp$4, t$jscomp$5) !== n$jscomp$5;
      });
    }
    if (e$jscomp$10.nodeType) {
      return h$jscomp$6.grep(t$jscomp$4, function(t$jscomp$6) {
        return t$jscomp$6 === e$jscomp$10 !== n$jscomp$5;
      });
    }
    if ("string" == typeof e$jscomp$10) {
      if (A$jscomp$0.test(e$jscomp$10)) {
        return h$jscomp$6.filter(e$jscomp$10, t$jscomp$4, n$jscomp$5);
      }
      e$jscomp$10 = h$jscomp$6.filter(e$jscomp$10, t$jscomp$4);
    }
    return h$jscomp$6.grep(t$jscomp$4, function(t$jscomp$7) {
      return h$jscomp$6.inArray(t$jscomp$7, e$jscomp$10) > -1 !== n$jscomp$5;
    });
  }
  function R$jscomp$0(t$jscomp$8, e$jscomp$11) {
    do {
      t$jscomp$8 = t$jscomp$8[e$jscomp$11];
    } while (t$jscomp$8 && 1 !== t$jscomp$8.nodeType);
    return t$jscomp$8;
  }
  function U$jscomp$0() {
    if (i$jscomp$3.addEventListener) {
      i$jscomp$3.removeEventListener("DOMContentLoaded", I$jscomp$0);
      t$jscomp$2.removeEventListener("load", I$jscomp$0);
    } else {
      i$jscomp$3.detachEvent("onreadystatechange", I$jscomp$0);
      t$jscomp$2.detachEvent("onload", I$jscomp$0);
    }
  }
  function I$jscomp$0() {
    if (i$jscomp$3.addEventListener || "load" === t$jscomp$2.event.type || "complete" === i$jscomp$3.readyState) {
      U$jscomp$0();
      h$jscomp$6.ready();
    }
  }
  function P$jscomp$0(t$jscomp$9, e$jscomp$12, n$jscomp$6) {
    if (void 0 === n$jscomp$6 && 1 === t$jscomp$9.nodeType) {
      var i$jscomp$5 = "data-" + e$jscomp$12.replace(O$jscomp$0, "-$1").toLowerCase();
      if ("string" == typeof(n$jscomp$6 = t$jscomp$9.getAttribute(i$jscomp$5))) {
        try {
          n$jscomp$6 = "true" === n$jscomp$6 || "false" !== n$jscomp$6 && ("null" === n$jscomp$6 ? null : +n$jscomp$6 + "" === n$jscomp$6 ? +n$jscomp$6 : B$jscomp$0.test(n$jscomp$6) ? h$jscomp$6.parseJSON(n$jscomp$6) : n$jscomp$6);
        } catch (t$jscomp$10) {
        }
        h$jscomp$6.data(t$jscomp$9, e$jscomp$12, n$jscomp$6);
      } else {
        n$jscomp$6 = void 0;
      }
    }
    return n$jscomp$6;
  }
  function z$jscomp$11(t$jscomp$11) {
    var e$jscomp$13;
    for (e$jscomp$13 in t$jscomp$11) {
      if (("data" !== e$jscomp$13 || !h$jscomp$6.isEmptyObject(t$jscomp$11[e$jscomp$13])) && "toJSON" !== e$jscomp$13) {
        return false;
      }
    }
    return true;
  }
  function j$jscomp$0(t$jscomp$12, e$jscomp$14, i$jscomp$6, o$jscomp$1) {
    if (F$jscomp$0(t$jscomp$12)) {
      var r$jscomp$2;
      var a$jscomp$1;
      var s$jscomp$3 = h$jscomp$6.expando;
      var u$jscomp$1 = t$jscomp$12.nodeType;
      var c$jscomp$1 = u$jscomp$1 ? h$jscomp$6.cache : t$jscomp$12;
      var l$jscomp$1 = u$jscomp$1 ? t$jscomp$12[s$jscomp$3] : t$jscomp$12[s$jscomp$3] && s$jscomp$3;
      if (l$jscomp$1 && c$jscomp$1[l$jscomp$1] && (o$jscomp$1 || c$jscomp$1[l$jscomp$1].data) || void 0 !== i$jscomp$6 || "string" != typeof e$jscomp$14) {
        return l$jscomp$1 || (l$jscomp$1 = u$jscomp$1 ? t$jscomp$12[s$jscomp$3] = n$jscomp$3.pop() || h$jscomp$6.guid++ : s$jscomp$3), c$jscomp$1[l$jscomp$1] || (c$jscomp$1[l$jscomp$1] = u$jscomp$1 ? {} : {
          toJSON : h$jscomp$6.noop
        }), "object" != typeof e$jscomp$14 && "function" != typeof e$jscomp$14 || (o$jscomp$1 ? c$jscomp$1[l$jscomp$1] = h$jscomp$6.extend(c$jscomp$1[l$jscomp$1], e$jscomp$14) : c$jscomp$1[l$jscomp$1].data = h$jscomp$6.extend(c$jscomp$1[l$jscomp$1].data, e$jscomp$14)), a$jscomp$1 = c$jscomp$1[l$jscomp$1], o$jscomp$1 || (a$jscomp$1.data || (a$jscomp$1.data = {}), a$jscomp$1 = a$jscomp$1.data), void 0 !== i$jscomp$6 && (a$jscomp$1[h$jscomp$6.camelCase(e$jscomp$14)] = i$jscomp$6), "string" == typeof e$jscomp$14 ? 
        null == (r$jscomp$2 = a$jscomp$1[e$jscomp$14]) && (r$jscomp$2 = a$jscomp$1[h$jscomp$6.camelCase(e$jscomp$14)]) : r$jscomp$2 = a$jscomp$1, r$jscomp$2;
      }
    }
  }
  function H$jscomp$0(t$jscomp$13, e$jscomp$15, n$jscomp$7) {
    if (F$jscomp$0(t$jscomp$13)) {
      var i$jscomp$7;
      var o$jscomp$2;
      var r$jscomp$3 = t$jscomp$13.nodeType;
      var a$jscomp$2 = r$jscomp$3 ? h$jscomp$6.cache : t$jscomp$13;
      var s$jscomp$4 = r$jscomp$3 ? t$jscomp$13[h$jscomp$6.expando] : h$jscomp$6.expando;
      if (a$jscomp$2[s$jscomp$4]) {
        if (e$jscomp$15 && (i$jscomp$7 = n$jscomp$7 ? a$jscomp$2[s$jscomp$4] : a$jscomp$2[s$jscomp$4].data)) {
          if (h$jscomp$6.isArray(e$jscomp$15)) {
            e$jscomp$15 = e$jscomp$15.concat(h$jscomp$6.map(e$jscomp$15, h$jscomp$6.camelCase));
          } else {
            if (e$jscomp$15 in i$jscomp$7) {
              e$jscomp$15 = [e$jscomp$15];
            } else {
              e$jscomp$15 = (e$jscomp$15 = h$jscomp$6.camelCase(e$jscomp$15)) in i$jscomp$7 ? [e$jscomp$15] : e$jscomp$15.split(" ");
            }
          }
          o$jscomp$2 = e$jscomp$15.length;
          for (; o$jscomp$2--;) {
            delete i$jscomp$7[e$jscomp$15[o$jscomp$2]];
          }
          if (n$jscomp$7 ? !z$jscomp$11(i$jscomp$7) : !h$jscomp$6.isEmptyObject(i$jscomp$7)) {
            return;
          }
        }
        if (n$jscomp$7 || (delete a$jscomp$2[s$jscomp$4].data, z$jscomp$11(a$jscomp$2[s$jscomp$4]))) {
          if (r$jscomp$3) {
            h$jscomp$6.cleanData([t$jscomp$13], true);
          } else {
            if (f$jscomp$1.deleteExpando || a$jscomp$2 != a$jscomp$2.window) {
              delete a$jscomp$2[s$jscomp$4];
            } else {
              a$jscomp$2[s$jscomp$4] = void 0;
            }
          }
        }
      }
    }
  }
  function G$jscomp$0(t$jscomp$14, e$jscomp$16, n$jscomp$8, i$jscomp$8) {
    var o$jscomp$3;
    var r$jscomp$4 = 1;
    var a$jscomp$3 = 20;
    var s$jscomp$5 = i$jscomp$8 ? function() {
      return i$jscomp$8.cur();
    } : function() {
      return h$jscomp$6.css(t$jscomp$14, e$jscomp$16, "");
    };
    var u$jscomp$2 = s$jscomp$5();
    var c$jscomp$2 = n$jscomp$8 && n$jscomp$8[3] || (h$jscomp$6.cssNumber[e$jscomp$16] ? "" : "px");
    var l$jscomp$2 = (h$jscomp$6.cssNumber[e$jscomp$16] || "px" !== c$jscomp$2 && +u$jscomp$2) && X$jscomp$0.exec(h$jscomp$6.css(t$jscomp$14, e$jscomp$16));
    if (l$jscomp$2 && l$jscomp$2[3] !== c$jscomp$2) {
      c$jscomp$2 = c$jscomp$2 || l$jscomp$2[3];
      n$jscomp$8 = n$jscomp$8 || [];
      l$jscomp$2 = +u$jscomp$2 || 1;
      do {
        l$jscomp$2 = l$jscomp$2 / (r$jscomp$4 = r$jscomp$4 || ".5");
        h$jscomp$6.style(t$jscomp$14, e$jscomp$16, l$jscomp$2 + c$jscomp$2);
      } while (r$jscomp$4 !== (r$jscomp$4 = s$jscomp$5() / u$jscomp$2) && 1 !== r$jscomp$4 && --a$jscomp$3);
    }
    return n$jscomp$8 && (l$jscomp$2 = +l$jscomp$2 || +u$jscomp$2 || 0, o$jscomp$3 = n$jscomp$8[1] ? l$jscomp$2 + (n$jscomp$8[1] + 1) * n$jscomp$8[2] : +n$jscomp$8[2], i$jscomp$8 && (i$jscomp$8.unit = c$jscomp$2, i$jscomp$8.start = l$jscomp$2, i$jscomp$8.end = o$jscomp$3)), o$jscomp$3;
  }
  function tt$jscomp$0(t$jscomp$15) {
    var e$jscomp$17 = Z$jscomp$0.split("|");
    var n$jscomp$9 = t$jscomp$15.createDocumentFragment();
    if (n$jscomp$9.createElement) {
      for (; e$jscomp$17.length;) {
        n$jscomp$9.createElement(e$jscomp$17.pop());
      }
    }
    return n$jscomp$9;
  }
  function nt$jscomp$0(t$jscomp$16, e$jscomp$18) {
    var n$jscomp$10;
    var i$jscomp$9;
    var o$jscomp$4 = 0;
    var r$jscomp$5 = void 0 !== t$jscomp$16.getElementsByTagName ? t$jscomp$16.getElementsByTagName(e$jscomp$18 || "*") : void 0 !== t$jscomp$16.querySelectorAll ? t$jscomp$16.querySelectorAll(e$jscomp$18 || "*") : void 0;
    if (!r$jscomp$5) {
      r$jscomp$5 = [];
      n$jscomp$10 = t$jscomp$16.childNodes || t$jscomp$16;
      for (; null != (i$jscomp$9 = n$jscomp$10[o$jscomp$4]); o$jscomp$4++) {
        if (!e$jscomp$18 || h$jscomp$6.nodeName(i$jscomp$9, e$jscomp$18)) {
          r$jscomp$5.push(i$jscomp$9);
        } else {
          h$jscomp$6.merge(r$jscomp$5, nt$jscomp$0(i$jscomp$9, e$jscomp$18));
        }
      }
    }
    return void 0 === e$jscomp$18 || e$jscomp$18 && h$jscomp$6.nodeName(t$jscomp$16, e$jscomp$18) ? h$jscomp$6.merge([t$jscomp$16], r$jscomp$5) : r$jscomp$5;
  }
  function it$jscomp$0(t$jscomp$17, e$jscomp$19) {
    var n$jscomp$11;
    var i$jscomp$10 = 0;
    for (; null != (n$jscomp$11 = t$jscomp$17[i$jscomp$10]); i$jscomp$10++) {
      h$jscomp$6._data(n$jscomp$11, "globalEval", !e$jscomp$19 || h$jscomp$6._data(e$jscomp$19[i$jscomp$10], "globalEval"));
    }
  }
  function at$jscomp$0(t$jscomp$18) {
    if (Y$jscomp$0.test(t$jscomp$18.type)) {
      t$jscomp$18.defaultChecked = t$jscomp$18.checked;
    }
  }
  function st$jscomp$0(t$jscomp$19, e$jscomp$20, n$jscomp$12, i$jscomp$11, o$jscomp$5) {
    var r$jscomp$6;
    var a$jscomp$4;
    var s$jscomp$6;
    var u$jscomp$3;
    var c$jscomp$3;
    var l$jscomp$3;
    var d$jscomp$1;
    var p$jscomp$1 = t$jscomp$19.length;
    var g$jscomp$1 = tt$jscomp$0(e$jscomp$20);
    var m$jscomp$1 = [];
    var v$jscomp$1 = 0;
    for (; p$jscomp$1 > v$jscomp$1; v$jscomp$1++) {
      if ((a$jscomp$4 = t$jscomp$19[v$jscomp$1]) || 0 === a$jscomp$4) {
        if ("object" === h$jscomp$6.type(a$jscomp$4)) {
          h$jscomp$6.merge(m$jscomp$1, a$jscomp$4.nodeType ? [a$jscomp$4] : a$jscomp$4);
        } else {
          if (ot$jscomp$0.test(a$jscomp$4)) {
            u$jscomp$3 = u$jscomp$3 || g$jscomp$1.appendChild(e$jscomp$20.createElement("div"));
            c$jscomp$3 = (K$jscomp$0.exec(a$jscomp$4) || ["", ""])[1].toLowerCase();
            d$jscomp$1 = et$jscomp$0[c$jscomp$3] || et$jscomp$0._default;
            u$jscomp$3.innerHTML = d$jscomp$1[1] + h$jscomp$6.htmlPrefilter(a$jscomp$4) + d$jscomp$1[2];
            r$jscomp$6 = d$jscomp$1[0];
            for (; r$jscomp$6--;) {
              u$jscomp$3 = u$jscomp$3.lastChild;
            }
            if (!f$jscomp$1.leadingWhitespace && Q$jscomp$0.test(a$jscomp$4) && m$jscomp$1.push(e$jscomp$20.createTextNode(Q$jscomp$0.exec(a$jscomp$4)[0])), !f$jscomp$1.tbody) {
              r$jscomp$6 = (a$jscomp$4 = "table" !== c$jscomp$3 || rt$jscomp$0.test(a$jscomp$4) ? "<table>" !== d$jscomp$1[1] || rt$jscomp$0.test(a$jscomp$4) ? 0 : u$jscomp$3 : u$jscomp$3.firstChild) && a$jscomp$4.childNodes.length;
              for (; r$jscomp$6--;) {
                if (h$jscomp$6.nodeName(l$jscomp$3 = a$jscomp$4.childNodes[r$jscomp$6], "tbody") && !l$jscomp$3.childNodes.length) {
                  a$jscomp$4.removeChild(l$jscomp$3);
                }
              }
            }
            h$jscomp$6.merge(m$jscomp$1, u$jscomp$3.childNodes);
            u$jscomp$3.textContent = "";
            for (; u$jscomp$3.firstChild;) {
              u$jscomp$3.removeChild(u$jscomp$3.firstChild);
            }
            u$jscomp$3 = g$jscomp$1.lastChild;
          } else {
            m$jscomp$1.push(e$jscomp$20.createTextNode(a$jscomp$4));
          }
        }
      }
    }
    if (u$jscomp$3) {
      g$jscomp$1.removeChild(u$jscomp$3);
    }
    if (!f$jscomp$1.appendChecked) {
      h$jscomp$6.grep(nt$jscomp$0(m$jscomp$1, "input"), at$jscomp$0);
    }
    v$jscomp$1 = 0;
    for (; a$jscomp$4 = m$jscomp$1[v$jscomp$1++];) {
      if (i$jscomp$11 && h$jscomp$6.inArray(a$jscomp$4, i$jscomp$11) > -1) {
        if (o$jscomp$5) {
          o$jscomp$5.push(a$jscomp$4);
        }
      } else {
        if (s$jscomp$6 = h$jscomp$6.contains(a$jscomp$4.ownerDocument, a$jscomp$4), u$jscomp$3 = nt$jscomp$0(g$jscomp$1.appendChild(a$jscomp$4), "script"), s$jscomp$6 && it$jscomp$0(u$jscomp$3), n$jscomp$12) {
          r$jscomp$6 = 0;
          for (; a$jscomp$4 = u$jscomp$3[r$jscomp$6++];) {
            if (J$jscomp$0.test(a$jscomp$4.type || "")) {
              n$jscomp$12.push(a$jscomp$4);
            }
          }
        }
      }
    }
    return u$jscomp$3 = null, g$jscomp$1;
  }
  function ht$jscomp$0() {
    return true;
  }
  function pt$jscomp$0() {
    return false;
  }
  function gt$jscomp$0() {
    try {
      return i$jscomp$3.activeElement;
    } catch (t$jscomp$20) {
    }
  }
  function mt$jscomp$0(t$jscomp$21, e$jscomp$21, n$jscomp$13, i$jscomp$12, o$jscomp$6, r$jscomp$7) {
    var a$jscomp$5;
    var s$jscomp$7;
    if ("object" == typeof e$jscomp$21) {
      for (s$jscomp$7 in "string" != typeof n$jscomp$13 && (i$jscomp$12 = i$jscomp$12 || n$jscomp$13, n$jscomp$13 = void 0), e$jscomp$21) {
        mt$jscomp$0(t$jscomp$21, s$jscomp$7, n$jscomp$13, i$jscomp$12, e$jscomp$21[s$jscomp$7], r$jscomp$7);
      }
      return t$jscomp$21;
    }
    if (null == i$jscomp$12 && null == o$jscomp$6 ? (o$jscomp$6 = n$jscomp$13, i$jscomp$12 = n$jscomp$13 = void 0) : null == o$jscomp$6 && ("string" == typeof n$jscomp$13 ? (o$jscomp$6 = i$jscomp$12, i$jscomp$12 = void 0) : (o$jscomp$6 = i$jscomp$12, i$jscomp$12 = n$jscomp$13, n$jscomp$13 = void 0)), false === o$jscomp$6) {
      o$jscomp$6 = pt$jscomp$0;
    } else {
      if (!o$jscomp$6) {
        return t$jscomp$21;
      }
    }
    return 1 === r$jscomp$7 && (a$jscomp$5 = o$jscomp$6, (o$jscomp$6 = function(t$jscomp$22) {
      return h$jscomp$6().off(t$jscomp$22), a$jscomp$5.apply(this, arguments);
    }).guid = a$jscomp$5.guid || (a$jscomp$5.guid = h$jscomp$6.guid++)), t$jscomp$21.each(function() {
      h$jscomp$6.event.add(this, e$jscomp$21, o$jscomp$6, i$jscomp$12, n$jscomp$13);
    });
  }
  function Ct$jscomp$0(t$jscomp$23, e$jscomp$22) {
    return h$jscomp$6.nodeName(t$jscomp$23, "table") && h$jscomp$6.nodeName(11 !== e$jscomp$22.nodeType ? e$jscomp$22 : e$jscomp$22.firstChild, "tr") ? t$jscomp$23.getElementsByTagName("tbody")[0] || t$jscomp$23.appendChild(t$jscomp$23.ownerDocument.createElement("tbody")) : t$jscomp$23;
  }
  function St$jscomp$0(t$jscomp$24) {
    return t$jscomp$24.type = (null !== h$jscomp$6.find.attr(t$jscomp$24, "type")) + "/" + t$jscomp$24.type, t$jscomp$24;
  }
  function _t$jscomp$0(t$jscomp$25) {
    var e$jscomp$23 = Et$jscomp$0.exec(t$jscomp$25.type);
    return e$jscomp$23 ? t$jscomp$25.type = e$jscomp$23[1] : t$jscomp$25.removeAttribute("type"), t$jscomp$25;
  }
  function Nt$jscomp$0(t$jscomp$26, e$jscomp$24) {
    if (1 === e$jscomp$24.nodeType && h$jscomp$6.hasData(t$jscomp$26)) {
      var n$jscomp$14;
      var i$jscomp$13;
      var o$jscomp$7;
      var r$jscomp$8 = h$jscomp$6._data(t$jscomp$26);
      var a$jscomp$6 = h$jscomp$6._data(e$jscomp$24, r$jscomp$8);
      var s$jscomp$8 = r$jscomp$8.events;
      if (s$jscomp$8) {
        for (n$jscomp$14 in delete a$jscomp$6.handle, a$jscomp$6.events = {}, s$jscomp$8) {
          i$jscomp$13 = 0;
          o$jscomp$7 = s$jscomp$8[n$jscomp$14].length;
          for (; o$jscomp$7 > i$jscomp$13; i$jscomp$13++) {
            h$jscomp$6.event.add(e$jscomp$24, n$jscomp$14, s$jscomp$8[n$jscomp$14][i$jscomp$13]);
          }
        }
      }
      if (a$jscomp$6.data) {
        a$jscomp$6.data = h$jscomp$6.extend({}, a$jscomp$6.data);
      }
    }
  }
  function Mt$jscomp$0(t$jscomp$27, e$jscomp$25) {
    var n$jscomp$15;
    var i$jscomp$14;
    var o$jscomp$8;
    if (1 === e$jscomp$25.nodeType) {
      if (n$jscomp$15 = e$jscomp$25.nodeName.toLowerCase(), !f$jscomp$1.noCloneEvent && e$jscomp$25[h$jscomp$6.expando]) {
        for (i$jscomp$14 in(o$jscomp$8 = h$jscomp$6._data(e$jscomp$25)).events) {
          h$jscomp$6.removeEvent(e$jscomp$25, i$jscomp$14, o$jscomp$8.handle);
        }
        e$jscomp$25.removeAttribute(h$jscomp$6.expando);
      }
      if ("script" === n$jscomp$15 && e$jscomp$25.text !== t$jscomp$27.text) {
        St$jscomp$0(e$jscomp$25).text = t$jscomp$27.text;
        _t$jscomp$0(e$jscomp$25);
      } else {
        if ("object" === n$jscomp$15) {
          if (e$jscomp$25.parentNode) {
            e$jscomp$25.outerHTML = t$jscomp$27.outerHTML;
          }
          if (f$jscomp$1.html5Clone && t$jscomp$27.innerHTML && !h$jscomp$6.trim(e$jscomp$25.innerHTML)) {
            e$jscomp$25.innerHTML = t$jscomp$27.innerHTML;
          }
        } else {
          if ("input" === n$jscomp$15 && Y$jscomp$0.test(t$jscomp$27.type)) {
            e$jscomp$25.defaultChecked = e$jscomp$25.checked = t$jscomp$27.checked;
            if (e$jscomp$25.value !== t$jscomp$27.value) {
              e$jscomp$25.value = t$jscomp$27.value;
            }
          } else {
            if ("option" === n$jscomp$15) {
              e$jscomp$25.defaultSelected = e$jscomp$25.selected = t$jscomp$27.defaultSelected;
            } else {
              if (!("input" !== n$jscomp$15 && "textarea" !== n$jscomp$15)) {
                e$jscomp$25.defaultValue = t$jscomp$27.defaultValue;
              }
            }
          }
        }
      }
    }
  }
  function Rt$jscomp$0(t$jscomp$28, e$jscomp$26, n$jscomp$16, i$jscomp$15) {
    e$jscomp$26 = r$jscomp$1.apply([], e$jscomp$26);
    var o$jscomp$9;
    var a$jscomp$7;
    var s$jscomp$9;
    var u$jscomp$4;
    var c$jscomp$4;
    var l$jscomp$4;
    var d$jscomp$2 = 0;
    var p$jscomp$2 = t$jscomp$28.length;
    var g$jscomp$2 = p$jscomp$2 - 1;
    var m$jscomp$2 = e$jscomp$26[0];
    var v$jscomp$2 = h$jscomp$6.isFunction(m$jscomp$2);
    if (v$jscomp$2 || p$jscomp$2 > 1 && "string" == typeof m$jscomp$2 && !f$jscomp$1.checkClone && wt$jscomp$0.test(m$jscomp$2)) {
      return t$jscomp$28.each(function(o$jscomp$10) {
        var r$jscomp$9 = t$jscomp$28.eq(o$jscomp$10);
        if (v$jscomp$2) {
          e$jscomp$26[0] = m$jscomp$2.call(this, o$jscomp$10, r$jscomp$9.html());
        }
        Rt$jscomp$0(r$jscomp$9, e$jscomp$26, n$jscomp$16, i$jscomp$15);
      });
    }
    if (p$jscomp$2 && (o$jscomp$9 = (l$jscomp$4 = st$jscomp$0(e$jscomp$26, t$jscomp$28[0].ownerDocument, false, t$jscomp$28, i$jscomp$15)).firstChild, 1 === l$jscomp$4.childNodes.length && (l$jscomp$4 = o$jscomp$9), o$jscomp$9 || i$jscomp$15)) {
      s$jscomp$9 = (u$jscomp$4 = h$jscomp$6.map(nt$jscomp$0(l$jscomp$4, "script"), St$jscomp$0)).length;
      for (; p$jscomp$2 > d$jscomp$2; d$jscomp$2++) {
        a$jscomp$7 = l$jscomp$4;
        if (d$jscomp$2 !== g$jscomp$2) {
          a$jscomp$7 = h$jscomp$6.clone(a$jscomp$7, true, true);
          if (s$jscomp$9) {
            h$jscomp$6.merge(u$jscomp$4, nt$jscomp$0(a$jscomp$7, "script"));
          }
        }
        n$jscomp$16.call(t$jscomp$28[d$jscomp$2], a$jscomp$7, d$jscomp$2);
      }
      if (s$jscomp$9) {
        c$jscomp$4 = u$jscomp$4[u$jscomp$4.length - 1].ownerDocument;
        h$jscomp$6.map(u$jscomp$4, _t$jscomp$0);
        d$jscomp$2 = 0;
        for (; s$jscomp$9 > d$jscomp$2; d$jscomp$2++) {
          a$jscomp$7 = u$jscomp$4[d$jscomp$2];
          if (J$jscomp$0.test(a$jscomp$7.type || "") && !h$jscomp$6._data(a$jscomp$7, "globalEval") && h$jscomp$6.contains(c$jscomp$4, a$jscomp$7)) {
            if (a$jscomp$7.src) {
              if (h$jscomp$6._evalUrl) {
                h$jscomp$6._evalUrl(a$jscomp$7.src);
              }
            } else {
              h$jscomp$6.globalEval((a$jscomp$7.text || a$jscomp$7.textContent || a$jscomp$7.innerHTML || "").replace(Tt$jscomp$0, ""));
            }
          }
        }
      }
      l$jscomp$4 = o$jscomp$9 = null;
    }
    return t$jscomp$28;
  }
  function kt$jscomp$0(t$jscomp$29, e$jscomp$27, n$jscomp$17) {
    var i$jscomp$16;
    var o$jscomp$11 = e$jscomp$27 ? h$jscomp$6.filter(e$jscomp$27, t$jscomp$29) : t$jscomp$29;
    var r$jscomp$10 = 0;
    for (; null != (i$jscomp$16 = o$jscomp$11[r$jscomp$10]); r$jscomp$10++) {
      if (!(n$jscomp$17 || 1 !== i$jscomp$16.nodeType)) {
        h$jscomp$6.cleanData(nt$jscomp$0(i$jscomp$16));
      }
      if (i$jscomp$16.parentNode) {
        if (n$jscomp$17 && h$jscomp$6.contains(i$jscomp$16.ownerDocument, i$jscomp$16)) {
          it$jscomp$0(nt$jscomp$0(i$jscomp$16, "script"));
        }
        i$jscomp$16.parentNode.removeChild(i$jscomp$16);
      }
    }
    return t$jscomp$29;
  }
  function Ut$jscomp$0(t$jscomp$30, e$jscomp$28) {
    var n$jscomp$18 = h$jscomp$6(e$jscomp$28.createElement(t$jscomp$30)).appendTo(e$jscomp$28.body);
    var i$jscomp$17 = h$jscomp$6.css(n$jscomp$18[0], "display");
    return n$jscomp$18.detach(), i$jscomp$17;
  }
  function It$jscomp$0(t$jscomp$31) {
    var e$jscomp$29 = i$jscomp$3;
    var n$jscomp$19 = Dt$jscomp$0[t$jscomp$31];
    return n$jscomp$19 || ("none" !== (n$jscomp$19 = Ut$jscomp$0(t$jscomp$31, e$jscomp$29)) && n$jscomp$19 || ((e$jscomp$29 = ((Lt$jscomp$0 = (Lt$jscomp$0 || h$jscomp$6("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e$jscomp$29.documentElement))[0].contentWindow || Lt$jscomp$0[0].contentDocument).document).write(), e$jscomp$29.close(), n$jscomp$19 = Ut$jscomp$0(t$jscomp$31, e$jscomp$29), Lt$jscomp$0.detach()), Dt$jscomp$0[t$jscomp$31] = n$jscomp$19), n$jscomp$19;
  }
  function qt$jscomp$0(t$jscomp$32, e$jscomp$30) {
    return {
      get : function() {
        return t$jscomp$32() ? void delete this.get : (this.get = e$jscomp$30).apply(this, arguments);
      }
    };
  }
  function Qt$jscomp$0(t$jscomp$33) {
    if (t$jscomp$33 in Jt$jscomp$0) {
      return t$jscomp$33;
    }
    var e$jscomp$31 = t$jscomp$33.charAt(0).toUpperCase() + t$jscomp$33.slice(1);
    var n$jscomp$20 = Kt$jscomp$0.length;
    for (; n$jscomp$20--;) {
      if ((t$jscomp$33 = Kt$jscomp$0[n$jscomp$20] + e$jscomp$31) in Jt$jscomp$0) {
        return t$jscomp$33;
      }
    }
  }
  function Zt$jscomp$0(t$jscomp$34, e$jscomp$32) {
    var n$jscomp$21;
    var i$jscomp$18;
    var o$jscomp$12;
    var r$jscomp$11 = [];
    var a$jscomp$8 = 0;
    var s$jscomp$10 = t$jscomp$34.length;
    for (; s$jscomp$10 > a$jscomp$8; a$jscomp$8++) {
      if ((i$jscomp$18 = t$jscomp$34[a$jscomp$8]).style) {
        r$jscomp$11[a$jscomp$8] = h$jscomp$6._data(i$jscomp$18, "olddisplay");
        n$jscomp$21 = i$jscomp$18.style.display;
        if (e$jscomp$32) {
          if (!(r$jscomp$11[a$jscomp$8] || "none" !== n$jscomp$21)) {
            i$jscomp$18.style.display = "";
          }
          if ("" === i$jscomp$18.style.display && W$jscomp$0(i$jscomp$18)) {
            r$jscomp$11[a$jscomp$8] = h$jscomp$6._data(i$jscomp$18, "olddisplay", It$jscomp$0(i$jscomp$18.nodeName));
          }
        } else {
          o$jscomp$12 = W$jscomp$0(i$jscomp$18);
          if (n$jscomp$21 && "none" !== n$jscomp$21 || !o$jscomp$12) {
            h$jscomp$6._data(i$jscomp$18, "olddisplay", o$jscomp$12 ? n$jscomp$21 : h$jscomp$6.css(i$jscomp$18, "display"));
          }
        }
      }
    }
    a$jscomp$8 = 0;
    for (; s$jscomp$10 > a$jscomp$8; a$jscomp$8++) {
      if ((i$jscomp$18 = t$jscomp$34[a$jscomp$8]).style) {
        if (!(e$jscomp$32 && "none" !== i$jscomp$18.style.display && "" !== i$jscomp$18.style.display)) {
          i$jscomp$18.style.display = e$jscomp$32 ? r$jscomp$11[a$jscomp$8] || "" : "none";
        }
      }
    }
    return t$jscomp$34;
  }
  function te$jscomp$0(t$jscomp$35, e$jscomp$33, n$jscomp$22) {
    var i$jscomp$19 = Gt$jscomp$0.exec(e$jscomp$33);
    return i$jscomp$19 ? Math.max(0, i$jscomp$19[1] - (n$jscomp$22 || 0)) + (i$jscomp$19[2] || "px") : e$jscomp$33;
  }
  function ee$jscomp$0(t$jscomp$36, e$jscomp$34, n$jscomp$23, i$jscomp$20, o$jscomp$13) {
    var r$jscomp$12 = n$jscomp$23 === (i$jscomp$20 ? "border" : "content") ? 4 : "width" === e$jscomp$34 ? 1 : 0;
    var a$jscomp$9 = 0;
    for (; 4 > r$jscomp$12; r$jscomp$12 = r$jscomp$12 + 2) {
      if ("margin" === n$jscomp$23) {
        a$jscomp$9 = a$jscomp$9 + h$jscomp$6.css(t$jscomp$36, n$jscomp$23 + $$jscomp$0[r$jscomp$12], true, o$jscomp$13);
      }
      if (i$jscomp$20) {
        if ("content" === n$jscomp$23) {
          a$jscomp$9 = a$jscomp$9 - h$jscomp$6.css(t$jscomp$36, "padding" + $$jscomp$0[r$jscomp$12], true, o$jscomp$13);
        }
        if ("margin" !== n$jscomp$23) {
          a$jscomp$9 = a$jscomp$9 - h$jscomp$6.css(t$jscomp$36, "border" + $$jscomp$0[r$jscomp$12] + "Width", true, o$jscomp$13);
        }
      } else {
        a$jscomp$9 = a$jscomp$9 + h$jscomp$6.css(t$jscomp$36, "padding" + $$jscomp$0[r$jscomp$12], true, o$jscomp$13);
        if ("padding" !== n$jscomp$23) {
          a$jscomp$9 = a$jscomp$9 + h$jscomp$6.css(t$jscomp$36, "border" + $$jscomp$0[r$jscomp$12] + "Width", true, o$jscomp$13);
        }
      }
    }
    return a$jscomp$9;
  }
  function ne$jscomp$0(t$jscomp$37, e$jscomp$35, n$jscomp$24) {
    var i$jscomp$21 = true;
    var o$jscomp$14 = "width" === e$jscomp$35 ? t$jscomp$37.offsetWidth : t$jscomp$37.offsetHeight;
    var r$jscomp$13 = zt$jscomp$0(t$jscomp$37);
    var a$jscomp$10 = f$jscomp$1.boxSizing && "border-box" === h$jscomp$6.css(t$jscomp$37, "boxSizing", false, r$jscomp$13);
    if (0 >= o$jscomp$14 || null == o$jscomp$14) {
      if ((0 > (o$jscomp$14 = jt$jscomp$0(t$jscomp$37, e$jscomp$35, r$jscomp$13)) || null == o$jscomp$14) && (o$jscomp$14 = t$jscomp$37.style[e$jscomp$35]), Bt$jscomp$0.test(o$jscomp$14)) {
        return o$jscomp$14;
      }
      i$jscomp$21 = a$jscomp$10 && (f$jscomp$1.boxSizingReliable() || o$jscomp$14 === t$jscomp$37.style[e$jscomp$35]);
      o$jscomp$14 = parseFloat(o$jscomp$14) || 0;
    }
    return o$jscomp$14 + ee$jscomp$0(t$jscomp$37, e$jscomp$35, n$jscomp$24 || (a$jscomp$10 ? "border" : "content"), i$jscomp$21, r$jscomp$13) + "px";
  }
  function ie$jscomp$0(t$jscomp$38, e$jscomp$36, n$jscomp$25, i$jscomp$22, o$jscomp$15) {
    return new ie$jscomp$0.prototype.init(t$jscomp$38, e$jscomp$36, n$jscomp$25, i$jscomp$22, o$jscomp$15);
  }
  function ue$jscomp$0() {
    return t$jscomp$2.setTimeout(function() {
      oe$jscomp$0 = void 0;
    }), oe$jscomp$0 = h$jscomp$6.now();
  }
  function ce$jscomp$0(t$jscomp$39, e$jscomp$37) {
    var n$jscomp$26;
    var i$jscomp$23 = {
      height : t$jscomp$39
    };
    var o$jscomp$16 = 0;
    e$jscomp$37 = e$jscomp$37 ? 1 : 0;
    for (; 4 > o$jscomp$16; o$jscomp$16 = o$jscomp$16 + (2 - e$jscomp$37)) {
      i$jscomp$23["margin" + (n$jscomp$26 = $$jscomp$0[o$jscomp$16])] = i$jscomp$23["padding" + n$jscomp$26] = t$jscomp$39;
    }
    return e$jscomp$37 && (i$jscomp$23.opacity = i$jscomp$23.width = t$jscomp$39), i$jscomp$23;
  }
  function le$jscomp$0(t$jscomp$40, e$jscomp$38, n$jscomp$27) {
    var i$jscomp$24;
    var o$jscomp$17 = (fe$jscomp$0.tweeners[e$jscomp$38] || []).concat(fe$jscomp$0.tweeners["*"]);
    var r$jscomp$14 = 0;
    var a$jscomp$11 = o$jscomp$17.length;
    for (; a$jscomp$11 > r$jscomp$14; r$jscomp$14++) {
      if (i$jscomp$24 = o$jscomp$17[r$jscomp$14].call(n$jscomp$27, e$jscomp$38, t$jscomp$40)) {
        return i$jscomp$24;
      }
    }
  }
  function fe$jscomp$0(t$jscomp$41, e$jscomp$39, n$jscomp$28) {
    var i$jscomp$25;
    var o$jscomp$18;
    var r$jscomp$15 = 0;
    var a$jscomp$12 = fe$jscomp$0.prefilters.length;
    var s$jscomp$11 = h$jscomp$6.Deferred().always(function() {
      delete u$jscomp$5.elem;
    });
    var u$jscomp$5 = function() {
      if (o$jscomp$18) {
        return false;
      }
      var e$jscomp$40 = oe$jscomp$0 || ue$jscomp$0();
      var n$jscomp$29 = Math.max(0, c$jscomp$5.startTime + c$jscomp$5.duration - e$jscomp$40);
      var i$jscomp$26 = 1 - (n$jscomp$29 / c$jscomp$5.duration || 0);
      var r$jscomp$16 = 0;
      var a$jscomp$13 = c$jscomp$5.tweens.length;
      for (; a$jscomp$13 > r$jscomp$16; r$jscomp$16++) {
        c$jscomp$5.tweens[r$jscomp$16].run(i$jscomp$26);
      }
      return s$jscomp$11.notifyWith(t$jscomp$41, [c$jscomp$5, i$jscomp$26, n$jscomp$29]), 1 > i$jscomp$26 && a$jscomp$13 ? n$jscomp$29 : (s$jscomp$11.resolveWith(t$jscomp$41, [c$jscomp$5]), false);
    };
    var c$jscomp$5 = s$jscomp$11.promise({
      elem : t$jscomp$41,
      props : h$jscomp$6.extend({}, e$jscomp$39),
      opts : h$jscomp$6.extend(true, {
        specialEasing : {},
        easing : h$jscomp$6.easing._default
      }, n$jscomp$28),
      originalProperties : e$jscomp$39,
      originalOptions : n$jscomp$28,
      startTime : oe$jscomp$0 || ue$jscomp$0(),
      duration : n$jscomp$28.duration,
      tweens : [],
      createTween : function(e$jscomp$41, n$jscomp$30) {
        var i$jscomp$27 = h$jscomp$6.Tween(t$jscomp$41, c$jscomp$5.opts, e$jscomp$41, n$jscomp$30, c$jscomp$5.opts.specialEasing[e$jscomp$41] || c$jscomp$5.opts.easing);
        return c$jscomp$5.tweens.push(i$jscomp$27), i$jscomp$27;
      },
      stop : function(e$jscomp$42) {
        var n$jscomp$31 = 0;
        var i$jscomp$28 = e$jscomp$42 ? c$jscomp$5.tweens.length : 0;
        if (o$jscomp$18) {
          return this;
        }
        o$jscomp$18 = true;
        for (; i$jscomp$28 > n$jscomp$31; n$jscomp$31++) {
          c$jscomp$5.tweens[n$jscomp$31].run(1);
        }
        return e$jscomp$42 ? (s$jscomp$11.notifyWith(t$jscomp$41, [c$jscomp$5, 1, 0]), s$jscomp$11.resolveWith(t$jscomp$41, [c$jscomp$5, e$jscomp$42])) : s$jscomp$11.rejectWith(t$jscomp$41, [c$jscomp$5, e$jscomp$42]), this;
      }
    });
    var l$jscomp$5 = c$jscomp$5.props;
    (function(t$jscomp$42, e$jscomp$43) {
      var n$jscomp$32;
      var i$jscomp$29;
      var o$jscomp$19;
      var r$jscomp$17;
      var a$jscomp$14;
      for (n$jscomp$32 in t$jscomp$42) {
        if (o$jscomp$19 = e$jscomp$43[i$jscomp$29 = h$jscomp$6.camelCase(n$jscomp$32)], r$jscomp$17 = t$jscomp$42[n$jscomp$32], h$jscomp$6.isArray(r$jscomp$17) && (o$jscomp$19 = r$jscomp$17[1], r$jscomp$17 = t$jscomp$42[n$jscomp$32] = r$jscomp$17[0]), n$jscomp$32 !== i$jscomp$29 && (t$jscomp$42[i$jscomp$29] = r$jscomp$17, delete t$jscomp$42[n$jscomp$32]), (a$jscomp$14 = h$jscomp$6.cssHooks[i$jscomp$29]) && "expand" in a$jscomp$14) {
          for (n$jscomp$32 in r$jscomp$17 = a$jscomp$14.expand(r$jscomp$17), delete t$jscomp$42[i$jscomp$29], r$jscomp$17) {
            if (!(n$jscomp$32 in t$jscomp$42)) {
              t$jscomp$42[n$jscomp$32] = r$jscomp$17[n$jscomp$32];
              e$jscomp$43[n$jscomp$32] = o$jscomp$19;
            }
          }
        } else {
          e$jscomp$43[i$jscomp$29] = o$jscomp$19;
        }
      }
    })(l$jscomp$5, c$jscomp$5.opts.specialEasing);
    for (; a$jscomp$12 > r$jscomp$15; r$jscomp$15++) {
      if (i$jscomp$25 = fe$jscomp$0.prefilters[r$jscomp$15].call(c$jscomp$5, t$jscomp$41, l$jscomp$5, c$jscomp$5.opts)) {
        return h$jscomp$6.isFunction(i$jscomp$25.stop) && (h$jscomp$6._queueHooks(c$jscomp$5.elem, c$jscomp$5.opts.queue).stop = h$jscomp$6.proxy(i$jscomp$25.stop, i$jscomp$25)), i$jscomp$25;
      }
    }
    return h$jscomp$6.map(l$jscomp$5, le$jscomp$0, c$jscomp$5), h$jscomp$6.isFunction(c$jscomp$5.opts.start) && c$jscomp$5.opts.start.call(t$jscomp$41, c$jscomp$5), h$jscomp$6.fx.timer(h$jscomp$6.extend(u$jscomp$5, {
      elem : t$jscomp$41,
      anim : c$jscomp$5,
      queue : c$jscomp$5.opts.queue
    })), c$jscomp$5.progress(c$jscomp$5.opts.progress).done(c$jscomp$5.opts.done, c$jscomp$5.opts.complete).fail(c$jscomp$5.opts.fail).always(c$jscomp$5.opts.always);
  }
  function Te$jscomp$0(t$jscomp$43) {
    return h$jscomp$6.attr(t$jscomp$43, "class") || "";
  }
  function Pe$jscomp$0(t$jscomp$44) {
    return function(e$jscomp$44, n$jscomp$33) {
      if ("string" != typeof e$jscomp$44) {
        n$jscomp$33 = e$jscomp$44;
        e$jscomp$44 = "*";
      }
      var i$jscomp$30;
      var o$jscomp$20 = 0;
      var r$jscomp$18 = e$jscomp$44.toLowerCase().match(D$jscomp$0) || [];
      if (h$jscomp$6.isFunction(n$jscomp$33)) {
        for (; i$jscomp$30 = r$jscomp$18[o$jscomp$20++];) {
          if ("+" === i$jscomp$30.charAt(0)) {
            i$jscomp$30 = i$jscomp$30.slice(1) || "*";
            (t$jscomp$44[i$jscomp$30] = t$jscomp$44[i$jscomp$30] || []).unshift(n$jscomp$33);
          } else {
            (t$jscomp$44[i$jscomp$30] = t$jscomp$44[i$jscomp$30] || []).push(n$jscomp$33);
          }
        }
      }
    };
  }
  function ze$jscomp$0(t$jscomp$45, e$jscomp$45, n$jscomp$34, i$jscomp$31) {
    function a$jscomp$15(s$jscomp$12) {
      var u$jscomp$6;
      return o$jscomp$21[s$jscomp$12] = true, h$jscomp$6.each(t$jscomp$45[s$jscomp$12] || [], function(t$jscomp$46, s$jscomp$13) {
        var c$jscomp$6 = s$jscomp$13(e$jscomp$45, n$jscomp$34, i$jscomp$31);
        return "string" != typeof c$jscomp$6 || r$jscomp$19 || o$jscomp$21[c$jscomp$6] ? r$jscomp$19 ? !(u$jscomp$6 = c$jscomp$6) : void 0 : (e$jscomp$45.dataTypes.unshift(c$jscomp$6), a$jscomp$15(c$jscomp$6), false);
      }), u$jscomp$6;
    }
    var o$jscomp$21 = {};
    var r$jscomp$19 = t$jscomp$45 === Ie$jscomp$0;
    return a$jscomp$15(e$jscomp$45.dataTypes[0]) || !o$jscomp$21["*"] && a$jscomp$15("*");
  }
  function je$jscomp$0(t$jscomp$47, e$jscomp$46) {
    var n$jscomp$35;
    var i$jscomp$32;
    var o$jscomp$22 = h$jscomp$6.ajaxSettings.flatOptions || {};
    for (i$jscomp$32 in e$jscomp$46) {
      if (void 0 !== e$jscomp$46[i$jscomp$32]) {
        (o$jscomp$22[i$jscomp$32] ? t$jscomp$47 : n$jscomp$35 || (n$jscomp$35 = {}))[i$jscomp$32] = e$jscomp$46[i$jscomp$32];
      }
    }
    return n$jscomp$35 && h$jscomp$6.extend(true, t$jscomp$47, n$jscomp$35), t$jscomp$47;
  }
  function He$jscomp$0(t$jscomp$48) {
    return t$jscomp$48.style && t$jscomp$48.style.display || h$jscomp$6.css(t$jscomp$48, "display");
  }
  function Ve$jscomp$0(t$jscomp$49, e$jscomp$47, n$jscomp$36, i$jscomp$33) {
    var o$jscomp$23;
    if (h$jscomp$6.isArray(e$jscomp$47)) {
      h$jscomp$6.each(e$jscomp$47, function(e$jscomp$48, o$jscomp$24) {
        if (n$jscomp$36 || Xe$jscomp$0.test(t$jscomp$49)) {
          i$jscomp$33(t$jscomp$49, o$jscomp$24);
        } else {
          Ve$jscomp$0(t$jscomp$49 + "[" + ("object" == typeof o$jscomp$24 && null != o$jscomp$24 ? e$jscomp$48 : "") + "]", o$jscomp$24, n$jscomp$36, i$jscomp$33);
        }
      });
    } else {
      if (n$jscomp$36 || "object" !== h$jscomp$6.type(e$jscomp$47)) {
        i$jscomp$33(t$jscomp$49, e$jscomp$47);
      } else {
        for (o$jscomp$23 in e$jscomp$47) {
          Ve$jscomp$0(t$jscomp$49 + "[" + o$jscomp$23 + "]", e$jscomp$47[o$jscomp$23], n$jscomp$36, i$jscomp$33);
        }
      }
    }
  }
  function Qe$jscomp$0() {
    try {
      return new t$jscomp$2.XMLHttpRequest;
    } catch (t$jscomp$50) {
    }
  }
  function Ze$jscomp$0() {
    try {
      return new t$jscomp$2.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t$jscomp$51) {
    }
  }
  function on$jscomp$0(t$jscomp$52) {
    return h$jscomp$6.isWindow(t$jscomp$52) ? t$jscomp$52 : 9 === t$jscomp$52.nodeType && (t$jscomp$52.defaultView || t$jscomp$52.parentWindow);
  }
  var n$jscomp$3 = [];
  var i$jscomp$3 = t$jscomp$2.document;
  var o$jscomp$0 = n$jscomp$3.slice;
  var r$jscomp$1 = n$jscomp$3.concat;
  var a$jscomp$0 = n$jscomp$3.push;
  var s$jscomp$2 = n$jscomp$3.indexOf;
  var u$jscomp$0 = {};
  var c$jscomp$0 = u$jscomp$0.toString;
  var l$jscomp$0 = u$jscomp$0.hasOwnProperty;
  var f$jscomp$1 = {};
  var d$jscomp$0 = "1.12.4";
  var h$jscomp$6 = function(t$jscomp$53, e$jscomp$49) {
    return new h$jscomp$6.fn.init(t$jscomp$53, e$jscomp$49);
  };
  var p$jscomp$0 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var g$jscomp$0 = /^-ms-/;
  var m$jscomp$0 = /-([\da-z])/gi;
  var v$jscomp$0 = function(t$jscomp$54, e$jscomp$50) {
    return e$jscomp$50.toUpperCase();
  };
  h$jscomp$6.fn = h$jscomp$6.prototype = {
    jquery : d$jscomp$0,
    constructor : h$jscomp$6,
    selector : "",
    length : 0,
    toArray : function() {
      return o$jscomp$0.call(this);
    },
    get : function(t$jscomp$55) {
      return null != t$jscomp$55 ? 0 > t$jscomp$55 ? this[t$jscomp$55 + this.length] : this[t$jscomp$55] : o$jscomp$0.call(this);
    },
    pushStack : function(t$jscomp$56) {
      var e$jscomp$51 = h$jscomp$6.merge(this.constructor(), t$jscomp$56);
      return e$jscomp$51.prevObject = this, e$jscomp$51.context = this.context, e$jscomp$51;
    },
    each : function(t$jscomp$57) {
      return h$jscomp$6.each(this, t$jscomp$57);
    },
    map : function(t$jscomp$58) {
      return this.pushStack(h$jscomp$6.map(this, function(e$jscomp$52, n$jscomp$37) {
        return t$jscomp$58.call(e$jscomp$52, n$jscomp$37, e$jscomp$52);
      }));
    },
    slice : function() {
      return this.pushStack(o$jscomp$0.apply(this, arguments));
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    eq : function(t$jscomp$59) {
      var e$jscomp$53 = this.length;
      var n$jscomp$38 = +t$jscomp$59 + (0 > t$jscomp$59 ? e$jscomp$53 : 0);
      return this.pushStack(n$jscomp$38 >= 0 && e$jscomp$53 > n$jscomp$38 ? [this[n$jscomp$38]] : []);
    },
    end : function() {
      return this.prevObject || this.constructor();
    },
    push : a$jscomp$0,
    sort : n$jscomp$3.sort,
    splice : n$jscomp$3.splice
  };
  h$jscomp$6.extend = h$jscomp$6.fn.extend = function() {
    var t$jscomp$60;
    var e$jscomp$54;
    var n$jscomp$39;
    var i$jscomp$34;
    var o$jscomp$25;
    var r$jscomp$20;
    var a$jscomp$16 = arguments[0] || {};
    var s$jscomp$14 = 1;
    var u$jscomp$7 = arguments.length;
    var c$jscomp$7 = false;
    if ("boolean" == typeof a$jscomp$16) {
      c$jscomp$7 = a$jscomp$16;
      a$jscomp$16 = arguments[s$jscomp$14] || {};
      s$jscomp$14++;
    }
    if (!("object" == typeof a$jscomp$16 || h$jscomp$6.isFunction(a$jscomp$16))) {
      a$jscomp$16 = {};
    }
    if (s$jscomp$14 === u$jscomp$7) {
      a$jscomp$16 = this;
      s$jscomp$14--;
    }
    for (; u$jscomp$7 > s$jscomp$14; s$jscomp$14++) {
      if (null != (o$jscomp$25 = arguments[s$jscomp$14])) {
        for (i$jscomp$34 in o$jscomp$25) {
          t$jscomp$60 = a$jscomp$16[i$jscomp$34];
          if (a$jscomp$16 !== (n$jscomp$39 = o$jscomp$25[i$jscomp$34])) {
            if (c$jscomp$7 && n$jscomp$39 && (h$jscomp$6.isPlainObject(n$jscomp$39) || (e$jscomp$54 = h$jscomp$6.isArray(n$jscomp$39)))) {
              if (e$jscomp$54) {
                e$jscomp$54 = false;
                r$jscomp$20 = t$jscomp$60 && h$jscomp$6.isArray(t$jscomp$60) ? t$jscomp$60 : [];
              } else {
                r$jscomp$20 = t$jscomp$60 && h$jscomp$6.isPlainObject(t$jscomp$60) ? t$jscomp$60 : {};
              }
              a$jscomp$16[i$jscomp$34] = h$jscomp$6.extend(c$jscomp$7, r$jscomp$20, n$jscomp$39);
            } else {
              if (void 0 !== n$jscomp$39) {
                a$jscomp$16[i$jscomp$34] = n$jscomp$39;
              }
            }
          }
        }
      }
    }
    return a$jscomp$16;
  };
  h$jscomp$6.extend({
    expando : "jQuery" + (d$jscomp$0 + Math.random()).replace(/\D/g, ""),
    isReady : true,
    error : function(t$jscomp$61) {
      throw new Error(t$jscomp$61);
    },
    noop : function() {
    },
    isFunction : function(t$jscomp$62) {
      return "function" === h$jscomp$6.type(t$jscomp$62);
    },
    isArray : Array.isArray || function(t$jscomp$63) {
      return "array" === h$jscomp$6.type(t$jscomp$63);
    },
    isWindow : function(t$jscomp$64) {
      return null != t$jscomp$64 && t$jscomp$64 == t$jscomp$64.window;
    },
    isNumeric : function(t$jscomp$65) {
      var e$jscomp$55 = t$jscomp$65 && t$jscomp$65.toString();
      return !h$jscomp$6.isArray(t$jscomp$65) && e$jscomp$55 - parseFloat(e$jscomp$55) + 1 >= 0;
    },
    isEmptyObject : function(t$jscomp$66) {
      var e$jscomp$56;
      for (e$jscomp$56 in t$jscomp$66) {
        return false;
      }
      return true;
    },
    isPlainObject : function(t$jscomp$67) {
      var e$jscomp$57;
      if (!t$jscomp$67 || "object" !== h$jscomp$6.type(t$jscomp$67) || t$jscomp$67.nodeType || h$jscomp$6.isWindow(t$jscomp$67)) {
        return false;
      }
      try {
        if (t$jscomp$67.constructor && !l$jscomp$0.call(t$jscomp$67, "constructor") && !l$jscomp$0.call(t$jscomp$67.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (t$jscomp$68) {
        return false;
      }
      if (!f$jscomp$1.ownFirst) {
        for (e$jscomp$57 in t$jscomp$67) {
          return l$jscomp$0.call(t$jscomp$67, e$jscomp$57);
        }
      }
      for (e$jscomp$57 in t$jscomp$67) {
      }
      return void 0 === e$jscomp$57 || l$jscomp$0.call(t$jscomp$67, e$jscomp$57);
    },
    type : function(t$jscomp$69) {
      return null == t$jscomp$69 ? t$jscomp$69 + "" : "object" == typeof t$jscomp$69 || "function" == typeof t$jscomp$69 ? u$jscomp$0[c$jscomp$0.call(t$jscomp$69)] || "object" : typeof t$jscomp$69;
    },
    globalEval : function(e$jscomp$58) {
      if (e$jscomp$58 && h$jscomp$6.trim(e$jscomp$58)) {
        (t$jscomp$2.execScript || function(e$jscomp$59) {
          t$jscomp$2.eval.call(t$jscomp$2, e$jscomp$59);
        })(e$jscomp$58);
      }
    },
    camelCase : function(t$jscomp$70) {
      return t$jscomp$70.replace(g$jscomp$0, "ms-").replace(m$jscomp$0, v$jscomp$0);
    },
    nodeName : function(t$jscomp$71, e$jscomp$60) {
      return t$jscomp$71.nodeName && t$jscomp$71.nodeName.toLowerCase() === e$jscomp$60.toLowerCase();
    },
    each : function(t$jscomp$72, e$jscomp$61) {
      var n$jscomp$40;
      var i$jscomp$35 = 0;
      if (y$jscomp$59(t$jscomp$72)) {
        n$jscomp$40 = t$jscomp$72.length;
        for (; n$jscomp$40 > i$jscomp$35 && false !== e$jscomp$61.call(t$jscomp$72[i$jscomp$35], i$jscomp$35, t$jscomp$72[i$jscomp$35]); i$jscomp$35++) {
        }
      } else {
        for (i$jscomp$35 in t$jscomp$72) {
          if (false === e$jscomp$61.call(t$jscomp$72[i$jscomp$35], i$jscomp$35, t$jscomp$72[i$jscomp$35])) {
            break;
          }
        }
      }
      return t$jscomp$72;
    },
    trim : function(t$jscomp$73) {
      return null == t$jscomp$73 ? "" : (t$jscomp$73 + "").replace(p$jscomp$0, "");
    },
    makeArray : function(t$jscomp$74, e$jscomp$62) {
      var n$jscomp$41 = e$jscomp$62 || [];
      return null != t$jscomp$74 && (y$jscomp$59(Object(t$jscomp$74)) ? h$jscomp$6.merge(n$jscomp$41, "string" == typeof t$jscomp$74 ? [t$jscomp$74] : t$jscomp$74) : a$jscomp$0.call(n$jscomp$41, t$jscomp$74)), n$jscomp$41;
    },
    inArray : function(t$jscomp$75, e$jscomp$63, n$jscomp$42) {
      var i$jscomp$36;
      if (e$jscomp$63) {
        if (s$jscomp$2) {
          return s$jscomp$2.call(e$jscomp$63, t$jscomp$75, n$jscomp$42);
        }
        i$jscomp$36 = e$jscomp$63.length;
        n$jscomp$42 = n$jscomp$42 ? 0 > n$jscomp$42 ? Math.max(0, i$jscomp$36 + n$jscomp$42) : n$jscomp$42 : 0;
        for (; i$jscomp$36 > n$jscomp$42; n$jscomp$42++) {
          if (n$jscomp$42 in e$jscomp$63 && e$jscomp$63[n$jscomp$42] === t$jscomp$75) {
            return n$jscomp$42;
          }
        }
      }
      return -1;
    },
    merge : function(t$jscomp$76, e$jscomp$64) {
      var n$jscomp$43 = +e$jscomp$64.length;
      var i$jscomp$37 = 0;
      var o$jscomp$26 = t$jscomp$76.length;
      for (; n$jscomp$43 > i$jscomp$37;) {
        t$jscomp$76[o$jscomp$26++] = e$jscomp$64[i$jscomp$37++];
      }
      if (n$jscomp$43 != n$jscomp$43) {
        for (; void 0 !== e$jscomp$64[i$jscomp$37];) {
          t$jscomp$76[o$jscomp$26++] = e$jscomp$64[i$jscomp$37++];
        }
      }
      return t$jscomp$76.length = o$jscomp$26, t$jscomp$76;
    },
    grep : function(t$jscomp$77, e$jscomp$65, n$jscomp$44) {
      var i$jscomp$38 = [];
      var o$jscomp$27 = 0;
      var r$jscomp$21 = t$jscomp$77.length;
      var a$jscomp$17 = !n$jscomp$44;
      for (; r$jscomp$21 > o$jscomp$27; o$jscomp$27++) {
        if (!e$jscomp$65(t$jscomp$77[o$jscomp$27], o$jscomp$27) !== a$jscomp$17) {
          i$jscomp$38.push(t$jscomp$77[o$jscomp$27]);
        }
      }
      return i$jscomp$38;
    },
    map : function(t$jscomp$78, e$jscomp$66, n$jscomp$45) {
      var i$jscomp$39;
      var o$jscomp$28;
      var a$jscomp$18 = 0;
      var s$jscomp$15 = [];
      if (y$jscomp$59(t$jscomp$78)) {
        i$jscomp$39 = t$jscomp$78.length;
        for (; i$jscomp$39 > a$jscomp$18; a$jscomp$18++) {
          if (null != (o$jscomp$28 = e$jscomp$66(t$jscomp$78[a$jscomp$18], a$jscomp$18, n$jscomp$45))) {
            s$jscomp$15.push(o$jscomp$28);
          }
        }
      } else {
        for (a$jscomp$18 in t$jscomp$78) {
          if (null != (o$jscomp$28 = e$jscomp$66(t$jscomp$78[a$jscomp$18], a$jscomp$18, n$jscomp$45))) {
            s$jscomp$15.push(o$jscomp$28);
          }
        }
      }
      return r$jscomp$1.apply([], s$jscomp$15);
    },
    guid : 1,
    proxy : function(t$jscomp$79, e$jscomp$67) {
      var n$jscomp$46;
      var i$jscomp$40;
      var r$jscomp$22;
      return "string" == typeof e$jscomp$67 && (r$jscomp$22 = t$jscomp$79[e$jscomp$67], e$jscomp$67 = t$jscomp$79, t$jscomp$79 = r$jscomp$22), h$jscomp$6.isFunction(t$jscomp$79) ? (n$jscomp$46 = o$jscomp$0.call(arguments, 2), (i$jscomp$40 = function() {
        return t$jscomp$79.apply(e$jscomp$67 || this, n$jscomp$46.concat(o$jscomp$0.call(arguments)));
      }).guid = t$jscomp$79.guid = t$jscomp$79.guid || h$jscomp$6.guid++, i$jscomp$40) : void 0;
    },
    now : function() {
      return +new Date;
    },
    support : f$jscomp$1
  });
  if ("function" == typeof Symbol) {
    h$jscomp$6.fn[Symbol.iterator] = n$jscomp$3[Symbol.iterator];
  }
  h$jscomp$6.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t$jscomp$80, e$jscomp$68) {
    u$jscomp$0["[object " + e$jscomp$68 + "]"] = e$jscomp$68.toLowerCase();
  });
  var x$jscomp$74 = function(t$jscomp$81) {
    function ot$jscomp$1(t$jscomp$82, e$jscomp$70, i$jscomp$42, o$jscomp$30) {
      var r$jscomp$24;
      var s$jscomp$17;
      var c$jscomp$9;
      var l$jscomp$7;
      var f$jscomp$3;
      var p$jscomp$4;
      var v$jscomp$4;
      var y$jscomp$61;
      var E$jscomp$2 = e$jscomp$70 && e$jscomp$70.ownerDocument;
      var T$jscomp$2 = e$jscomp$70 ? e$jscomp$70.nodeType : 9;
      if (i$jscomp$42 = i$jscomp$42 || [], "string" != typeof t$jscomp$82 || !t$jscomp$82 || 1 !== T$jscomp$2 && 9 !== T$jscomp$2 && 11 !== T$jscomp$2) {
        return i$jscomp$42;
      }
      if (!o$jscomp$30 && ((e$jscomp$70 ? e$jscomp$70.ownerDocument || e$jscomp$70 : w$jscomp$8) !== h$jscomp$7 && d$jscomp$3(e$jscomp$70), e$jscomp$70 = e$jscomp$70 || h$jscomp$7, g$jscomp$3)) {
        if (11 !== T$jscomp$2 && (p$jscomp$4 = Q$jscomp$1.exec(t$jscomp$82))) {
          if (r$jscomp$24 = p$jscomp$4[1]) {
            if (9 === T$jscomp$2) {
              if (!(c$jscomp$9 = e$jscomp$70.getElementById(r$jscomp$24))) {
                return i$jscomp$42;
              }
              if (c$jscomp$9.id === r$jscomp$24) {
                return i$jscomp$42.push(c$jscomp$9), i$jscomp$42;
              }
            } else {
              if (E$jscomp$2 && (c$jscomp$9 = E$jscomp$2.getElementById(r$jscomp$24)) && x$jscomp$75(e$jscomp$70, c$jscomp$9) && c$jscomp$9.id === r$jscomp$24) {
                return i$jscomp$42.push(c$jscomp$9), i$jscomp$42;
              }
            }
          } else {
            if (p$jscomp$4[2]) {
              return D$jscomp$1.apply(i$jscomp$42, e$jscomp$70.getElementsByTagName(t$jscomp$82)), i$jscomp$42;
            }
            if ((r$jscomp$24 = p$jscomp$4[3]) && n$jscomp$47.getElementsByClassName && e$jscomp$70.getElementsByClassName) {
              return D$jscomp$1.apply(i$jscomp$42, e$jscomp$70.getElementsByClassName(r$jscomp$24)), i$jscomp$42;
            }
          }
        }
        if (n$jscomp$47.qsa && !S$jscomp$1[t$jscomp$82 + " "] && (!m$jscomp$3 || !m$jscomp$3.test(t$jscomp$82))) {
          if (1 !== T$jscomp$2) {
            E$jscomp$2 = e$jscomp$70;
            y$jscomp$61 = t$jscomp$82;
          } else {
            if ("object" !== e$jscomp$70.nodeName.toLowerCase()) {
              if (l$jscomp$7 = e$jscomp$70.getAttribute("id")) {
                l$jscomp$7 = l$jscomp$7.replace(tt$jscomp$1, "\\$&");
              } else {
                e$jscomp$70.setAttribute("id", l$jscomp$7 = b$jscomp$1);
              }
              s$jscomp$17 = (v$jscomp$4 = a$jscomp$19(t$jscomp$82)).length;
              f$jscomp$3 = G$jscomp$1.test(l$jscomp$7) ? "#" + l$jscomp$7 : "[id='" + l$jscomp$7 + "']";
              for (; s$jscomp$17--;) {
                v$jscomp$4[s$jscomp$17] = f$jscomp$3 + " " + gt$jscomp$1(v$jscomp$4[s$jscomp$17]);
              }
              y$jscomp$61 = v$jscomp$4.join(",");
              E$jscomp$2 = Z$jscomp$1.test(t$jscomp$82) && ht$jscomp$1(e$jscomp$70.parentNode) || e$jscomp$70;
            }
          }
          if (y$jscomp$61) {
            try {
              return D$jscomp$1.apply(i$jscomp$42, E$jscomp$2.querySelectorAll(y$jscomp$61)), i$jscomp$42;
            } catch (t$jscomp$83) {
            } finally {
              if (l$jscomp$7 === b$jscomp$1) {
                e$jscomp$70.removeAttribute("id");
              }
            }
          }
        }
      }
      return u$jscomp$8(t$jscomp$82.replace(H$jscomp$1, "$1"), e$jscomp$70, i$jscomp$42, o$jscomp$30);
    }
    function rt$jscomp$1() {
      var t$jscomp$84 = [];
      return function e$jscomp$71(n$jscomp$48, o$jscomp$31) {
        return t$jscomp$84.push(n$jscomp$48 + " ") > i$jscomp$41.cacheLength && delete e$jscomp$71[t$jscomp$84.shift()], e$jscomp$71[n$jscomp$48 + " "] = o$jscomp$31;
      };
    }
    function at$jscomp$1(t$jscomp$85) {
      return t$jscomp$85[b$jscomp$1] = true, t$jscomp$85;
    }
    function st$jscomp$1(t$jscomp$86) {
      var e$jscomp$72 = h$jscomp$7.createElement("div");
      try {
        return !!t$jscomp$86(e$jscomp$72);
      } catch (t$jscomp$87) {
        return false;
      } finally {
        if (e$jscomp$72.parentNode) {
          e$jscomp$72.parentNode.removeChild(e$jscomp$72);
        }
        e$jscomp$72 = null;
      }
    }
    function ut$jscomp$1(t$jscomp$88, e$jscomp$73) {
      var n$jscomp$49 = t$jscomp$88.split("|");
      var o$jscomp$32 = n$jscomp$49.length;
      for (; o$jscomp$32--;) {
        i$jscomp$41.attrHandle[n$jscomp$49[o$jscomp$32]] = e$jscomp$73;
      }
    }
    function ct$jscomp$1(t$jscomp$89, e$jscomp$74) {
      var n$jscomp$50 = e$jscomp$74 && t$jscomp$89;
      var i$jscomp$43 = n$jscomp$50 && 1 === t$jscomp$89.nodeType && 1 === e$jscomp$74.nodeType && (~e$jscomp$74.sourceIndex || N$jscomp$1) - (~t$jscomp$89.sourceIndex || N$jscomp$1);
      if (i$jscomp$43) {
        return i$jscomp$43;
      }
      if (n$jscomp$50) {
        for (; n$jscomp$50 = n$jscomp$50.nextSibling;) {
          if (n$jscomp$50 === e$jscomp$74) {
            return -1;
          }
        }
      }
      return t$jscomp$89 ? 1 : -1;
    }
    function lt$jscomp$1(t$jscomp$90) {
      return function(e$jscomp$75) {
        return "input" === e$jscomp$75.nodeName.toLowerCase() && e$jscomp$75.type === t$jscomp$90;
      };
    }
    function ft$jscomp$1(t$jscomp$91) {
      return function(e$jscomp$76) {
        var n$jscomp$51 = e$jscomp$76.nodeName.toLowerCase();
        return ("input" === n$jscomp$51 || "button" === n$jscomp$51) && e$jscomp$76.type === t$jscomp$91;
      };
    }
    function dt$jscomp$1(t$jscomp$92) {
      return at$jscomp$1(function(e$jscomp$77) {
        return e$jscomp$77 = +e$jscomp$77, at$jscomp$1(function(n$jscomp$52, i$jscomp$44) {
          var o$jscomp$33;
          var r$jscomp$25 = t$jscomp$92([], n$jscomp$52.length, e$jscomp$77);
          var a$jscomp$20 = r$jscomp$25.length;
          for (; a$jscomp$20--;) {
            if (n$jscomp$52[o$jscomp$33 = r$jscomp$25[a$jscomp$20]]) {
              n$jscomp$52[o$jscomp$33] = !(i$jscomp$44[o$jscomp$33] = n$jscomp$52[o$jscomp$33]);
            }
          }
        });
      });
    }
    function ht$jscomp$1(t$jscomp$93) {
      return t$jscomp$93 && void 0 !== t$jscomp$93.getElementsByTagName && t$jscomp$93;
    }
    function pt$jscomp$1() {
    }
    function gt$jscomp$1(t$jscomp$94) {
      var e$jscomp$78 = 0;
      var n$jscomp$53 = t$jscomp$94.length;
      var i$jscomp$45 = "";
      for (; n$jscomp$53 > e$jscomp$78; e$jscomp$78++) {
        i$jscomp$45 = i$jscomp$45 + t$jscomp$94[e$jscomp$78].value;
      }
      return i$jscomp$45;
    }
    function mt$jscomp$1(t$jscomp$95, e$jscomp$79, n$jscomp$54) {
      var i$jscomp$46 = e$jscomp$79.dir;
      var o$jscomp$34 = n$jscomp$54 && "parentNode" === i$jscomp$46;
      var r$jscomp$26 = T$jscomp$1++;
      return e$jscomp$79.first ? function(e$jscomp$80, n$jscomp$55, r$jscomp$27) {
        for (; e$jscomp$80 = e$jscomp$80[i$jscomp$46];) {
          if (1 === e$jscomp$80.nodeType || o$jscomp$34) {
            return t$jscomp$95(e$jscomp$80, n$jscomp$55, r$jscomp$27);
          }
        }
      } : function(e$jscomp$81, n$jscomp$56, a$jscomp$21) {
        var s$jscomp$18;
        var u$jscomp$9;
        var c$jscomp$10;
        var l$jscomp$8 = [E$jscomp$1, r$jscomp$26];
        if (a$jscomp$21) {
          for (; e$jscomp$81 = e$jscomp$81[i$jscomp$46];) {
            if ((1 === e$jscomp$81.nodeType || o$jscomp$34) && t$jscomp$95(e$jscomp$81, n$jscomp$56, a$jscomp$21)) {
              return true;
            }
          }
        } else {
          for (; e$jscomp$81 = e$jscomp$81[i$jscomp$46];) {
            if (1 === e$jscomp$81.nodeType || o$jscomp$34) {
              if ((s$jscomp$18 = (u$jscomp$9 = (c$jscomp$10 = e$jscomp$81[b$jscomp$1] || (e$jscomp$81[b$jscomp$1] = {}))[e$jscomp$81.uniqueID] || (c$jscomp$10[e$jscomp$81.uniqueID] = {}))[i$jscomp$46]) && s$jscomp$18[0] === E$jscomp$1 && s$jscomp$18[1] === r$jscomp$26) {
                return l$jscomp$8[2] = s$jscomp$18[2];
              }
              if (u$jscomp$9[i$jscomp$46] = l$jscomp$8, l$jscomp$8[2] = t$jscomp$95(e$jscomp$81, n$jscomp$56, a$jscomp$21)) {
                return true;
              }
            }
          }
        }
      };
    }
    function vt$jscomp$1(t$jscomp$96) {
      return t$jscomp$96.length > 1 ? function(e$jscomp$82, n$jscomp$57, i$jscomp$47) {
        var o$jscomp$35 = t$jscomp$96.length;
        for (; o$jscomp$35--;) {
          if (!t$jscomp$96[o$jscomp$35](e$jscomp$82, n$jscomp$57, i$jscomp$47)) {
            return false;
          }
        }
        return true;
      } : t$jscomp$96[0];
    }
    function yt$jscomp$1(t$jscomp$97, e$jscomp$83, n$jscomp$58, i$jscomp$48, o$jscomp$36) {
      var r$jscomp$28;
      var a$jscomp$22 = [];
      var s$jscomp$19 = 0;
      var u$jscomp$10 = t$jscomp$97.length;
      var c$jscomp$11 = null != e$jscomp$83;
      for (; u$jscomp$10 > s$jscomp$19; s$jscomp$19++) {
        if (r$jscomp$28 = t$jscomp$97[s$jscomp$19]) {
          if (!(n$jscomp$58 && !n$jscomp$58(r$jscomp$28, i$jscomp$48, o$jscomp$36))) {
            a$jscomp$22.push(r$jscomp$28);
            if (c$jscomp$11) {
              e$jscomp$83.push(s$jscomp$19);
            }
          }
        }
      }
      return a$jscomp$22;
    }
    function xt$jscomp$1(t$jscomp$98, e$jscomp$84, n$jscomp$59, i$jscomp$49, o$jscomp$37, r$jscomp$29) {
      return i$jscomp$49 && !i$jscomp$49[b$jscomp$1] && (i$jscomp$49 = xt$jscomp$1(i$jscomp$49)), o$jscomp$37 && !o$jscomp$37[b$jscomp$1] && (o$jscomp$37 = xt$jscomp$1(o$jscomp$37, r$jscomp$29)), at$jscomp$1(function(r$jscomp$30, a$jscomp$23, s$jscomp$20, u$jscomp$11) {
        var c$jscomp$12;
        var l$jscomp$9;
        var f$jscomp$4;
        var d$jscomp$4 = [];
        var h$jscomp$8 = [];
        var p$jscomp$5 = a$jscomp$23.length;
        var g$jscomp$4 = r$jscomp$30 || function(t$jscomp$99, e$jscomp$85, n$jscomp$60) {
          var i$jscomp$50 = 0;
          var o$jscomp$38 = e$jscomp$85.length;
          for (; o$jscomp$38 > i$jscomp$50; i$jscomp$50++) {
            ot$jscomp$1(t$jscomp$99, e$jscomp$85[i$jscomp$50], n$jscomp$60);
          }
          return n$jscomp$60;
        }(e$jscomp$84 || "*", s$jscomp$20.nodeType ? [s$jscomp$20] : s$jscomp$20, []);
        var m$jscomp$4 = !t$jscomp$98 || !r$jscomp$30 && e$jscomp$84 ? g$jscomp$4 : yt$jscomp$1(g$jscomp$4, d$jscomp$4, t$jscomp$98, s$jscomp$20, u$jscomp$11);
        var v$jscomp$5 = n$jscomp$59 ? o$jscomp$37 || (r$jscomp$30 ? t$jscomp$98 : p$jscomp$5 || i$jscomp$49) ? [] : a$jscomp$23 : m$jscomp$4;
        if (n$jscomp$59 && n$jscomp$59(m$jscomp$4, v$jscomp$5, s$jscomp$20, u$jscomp$11), i$jscomp$49) {
          c$jscomp$12 = yt$jscomp$1(v$jscomp$5, h$jscomp$8);
          i$jscomp$49(c$jscomp$12, [], s$jscomp$20, u$jscomp$11);
          l$jscomp$9 = c$jscomp$12.length;
          for (; l$jscomp$9--;) {
            if (f$jscomp$4 = c$jscomp$12[l$jscomp$9]) {
              v$jscomp$5[h$jscomp$8[l$jscomp$9]] = !(m$jscomp$4[h$jscomp$8[l$jscomp$9]] = f$jscomp$4);
            }
          }
        }
        if (r$jscomp$30) {
          if (o$jscomp$37 || t$jscomp$98) {
            if (o$jscomp$37) {
              c$jscomp$12 = [];
              l$jscomp$9 = v$jscomp$5.length;
              for (; l$jscomp$9--;) {
                if (f$jscomp$4 = v$jscomp$5[l$jscomp$9]) {
                  c$jscomp$12.push(m$jscomp$4[l$jscomp$9] = f$jscomp$4);
                }
              }
              o$jscomp$37(null, v$jscomp$5 = [], c$jscomp$12, u$jscomp$11);
            }
            l$jscomp$9 = v$jscomp$5.length;
            for (; l$jscomp$9--;) {
              if ((f$jscomp$4 = v$jscomp$5[l$jscomp$9]) && (c$jscomp$12 = o$jscomp$37 ? I$jscomp$1(r$jscomp$30, f$jscomp$4) : d$jscomp$4[l$jscomp$9]) > -1) {
                r$jscomp$30[c$jscomp$12] = !(a$jscomp$23[c$jscomp$12] = f$jscomp$4);
              }
            }
          }
        } else {
          v$jscomp$5 = yt$jscomp$1(v$jscomp$5 === a$jscomp$23 ? v$jscomp$5.splice(p$jscomp$5, v$jscomp$5.length) : v$jscomp$5);
          if (o$jscomp$37) {
            o$jscomp$37(null, a$jscomp$23, v$jscomp$5, u$jscomp$11);
          } else {
            D$jscomp$1.apply(a$jscomp$23, v$jscomp$5);
          }
        }
      });
    }
    function bt$jscomp$1(t$jscomp$100) {
      var e$jscomp$86;
      var n$jscomp$61;
      var o$jscomp$39;
      var r$jscomp$31 = t$jscomp$100.length;
      var a$jscomp$24 = i$jscomp$41.relative[t$jscomp$100[0].type];
      var s$jscomp$21 = a$jscomp$24 || i$jscomp$41.relative[" "];
      var u$jscomp$12 = a$jscomp$24 ? 1 : 0;
      var l$jscomp$10 = mt$jscomp$1(function(t$jscomp$101) {
        return t$jscomp$101 === e$jscomp$86;
      }, s$jscomp$21, true);
      var f$jscomp$5 = mt$jscomp$1(function(t$jscomp$102) {
        return I$jscomp$1(e$jscomp$86, t$jscomp$102) > -1;
      }, s$jscomp$21, true);
      var d$jscomp$5 = [function(t$jscomp$103, n$jscomp$62, i$jscomp$51) {
        var o$jscomp$40 = !a$jscomp$24 && (i$jscomp$51 || n$jscomp$62 !== c$jscomp$8) || ((e$jscomp$86 = n$jscomp$62).nodeType ? l$jscomp$10(t$jscomp$103, n$jscomp$62, i$jscomp$51) : f$jscomp$5(t$jscomp$103, n$jscomp$62, i$jscomp$51));
        return e$jscomp$86 = null, o$jscomp$40;
      }];
      for (; r$jscomp$31 > u$jscomp$12; u$jscomp$12++) {
        if (n$jscomp$61 = i$jscomp$41.relative[t$jscomp$100[u$jscomp$12].type]) {
          d$jscomp$5 = [mt$jscomp$1(vt$jscomp$1(d$jscomp$5), n$jscomp$61)];
        } else {
          if ((n$jscomp$61 = i$jscomp$41.filter[t$jscomp$100[u$jscomp$12].type].apply(null, t$jscomp$100[u$jscomp$12].matches))[b$jscomp$1]) {
            o$jscomp$39 = ++u$jscomp$12;
            for (; r$jscomp$31 > o$jscomp$39 && !i$jscomp$41.relative[t$jscomp$100[o$jscomp$39].type]; o$jscomp$39++) {
            }
            return xt$jscomp$1(u$jscomp$12 > 1 && vt$jscomp$1(d$jscomp$5), u$jscomp$12 > 1 && gt$jscomp$1(t$jscomp$100.slice(0, u$jscomp$12 - 1).concat({
              value : " " === t$jscomp$100[u$jscomp$12 - 2].type ? "*" : ""
            })).replace(H$jscomp$1, "$1"), n$jscomp$61, o$jscomp$39 > u$jscomp$12 && bt$jscomp$1(t$jscomp$100.slice(u$jscomp$12, o$jscomp$39)), r$jscomp$31 > o$jscomp$39 && bt$jscomp$1(t$jscomp$100 = t$jscomp$100.slice(o$jscomp$39)), r$jscomp$31 > o$jscomp$39 && gt$jscomp$1(t$jscomp$100));
          }
          d$jscomp$5.push(n$jscomp$61);
        }
      }
      return vt$jscomp$1(d$jscomp$5);
    }
    function wt$jscomp$1(t$jscomp$104, e$jscomp$87) {
      var n$jscomp$63 = e$jscomp$87.length > 0;
      var o$jscomp$41 = t$jscomp$104.length > 0;
      var r$jscomp$32 = function(r$jscomp$33, a$jscomp$25, s$jscomp$22, u$jscomp$13, l$jscomp$11) {
        var f$jscomp$6;
        var p$jscomp$6;
        var m$jscomp$5;
        var v$jscomp$6 = 0;
        var y$jscomp$62 = "0";
        var x$jscomp$76 = r$jscomp$33 && [];
        var b$jscomp$2 = [];
        var w$jscomp$9 = c$jscomp$8;
        var T$jscomp$3 = r$jscomp$33 || o$jscomp$41 && i$jscomp$41.find.TAG("*", l$jscomp$11);
        var A$jscomp$2 = E$jscomp$1 = E$jscomp$1 + (null == w$jscomp$9 ? 1 : Math.random() || .1);
        var C$jscomp$2 = T$jscomp$3.length;
        if (l$jscomp$11) {
          c$jscomp$8 = a$jscomp$25 === h$jscomp$7 || a$jscomp$25 || l$jscomp$11;
        }
        for (; y$jscomp$62 !== C$jscomp$2 && null != (f$jscomp$6 = T$jscomp$3[y$jscomp$62]); y$jscomp$62++) {
          if (o$jscomp$41 && f$jscomp$6) {
            p$jscomp$6 = 0;
            if (!(a$jscomp$25 || f$jscomp$6.ownerDocument === h$jscomp$7)) {
              d$jscomp$3(f$jscomp$6);
              s$jscomp$22 = !g$jscomp$3;
            }
            for (; m$jscomp$5 = t$jscomp$104[p$jscomp$6++];) {
              if (m$jscomp$5(f$jscomp$6, a$jscomp$25 || h$jscomp$7, s$jscomp$22)) {
                u$jscomp$13.push(f$jscomp$6);
                break;
              }
            }
            if (l$jscomp$11) {
              E$jscomp$1 = A$jscomp$2;
            }
          }
          if (n$jscomp$63) {
            if (f$jscomp$6 = !m$jscomp$5 && f$jscomp$6) {
              v$jscomp$6--;
            }
            if (r$jscomp$33) {
              x$jscomp$76.push(f$jscomp$6);
            }
          }
        }
        if (v$jscomp$6 = v$jscomp$6 + y$jscomp$62, n$jscomp$63 && y$jscomp$62 !== v$jscomp$6) {
          p$jscomp$6 = 0;
          for (; m$jscomp$5 = e$jscomp$87[p$jscomp$6++];) {
            m$jscomp$5(x$jscomp$76, b$jscomp$2, a$jscomp$25, s$jscomp$22);
          }
          if (r$jscomp$33) {
            if (v$jscomp$6 > 0) {
              for (; y$jscomp$62--;) {
                if (!(x$jscomp$76[y$jscomp$62] || b$jscomp$2[y$jscomp$62])) {
                  b$jscomp$2[y$jscomp$62] = k$jscomp$1.call(u$jscomp$13);
                }
              }
            }
            b$jscomp$2 = yt$jscomp$1(b$jscomp$2);
          }
          D$jscomp$1.apply(u$jscomp$13, b$jscomp$2);
          if (l$jscomp$11 && !r$jscomp$33 && b$jscomp$2.length > 0 && v$jscomp$6 + e$jscomp$87.length > 1) {
            ot$jscomp$1.uniqueSort(u$jscomp$13);
          }
        }
        return l$jscomp$11 && (E$jscomp$1 = A$jscomp$2, c$jscomp$8 = w$jscomp$9), x$jscomp$76;
      };
      return n$jscomp$63 ? at$jscomp$1(r$jscomp$32) : r$jscomp$32;
    }
    var e$jscomp$69;
    var n$jscomp$47;
    var i$jscomp$41;
    var o$jscomp$29;
    var r$jscomp$23;
    var a$jscomp$19;
    var s$jscomp$16;
    var u$jscomp$8;
    var c$jscomp$8;
    var l$jscomp$6;
    var f$jscomp$2;
    var d$jscomp$3;
    var h$jscomp$7;
    var p$jscomp$3;
    var g$jscomp$3;
    var m$jscomp$3;
    var v$jscomp$3;
    var y$jscomp$60;
    var x$jscomp$75;
    var b$jscomp$1 = "sizzle" + 1 * new Date;
    var w$jscomp$8 = t$jscomp$81.document;
    var E$jscomp$1 = 0;
    var T$jscomp$1 = 0;
    var A$jscomp$1 = rt$jscomp$1();
    var C$jscomp$1 = rt$jscomp$1();
    var S$jscomp$1 = rt$jscomp$1();
    var _$jscomp$1 = function(t$jscomp$105, e$jscomp$88) {
      return t$jscomp$105 === e$jscomp$88 && (f$jscomp$2 = true), 0;
    };
    var N$jscomp$1 = 1 << 31;
    var M$jscomp$1 = {}.hasOwnProperty;
    var R$jscomp$1 = [];
    var k$jscomp$1 = R$jscomp$1.pop;
    var L$jscomp$1 = R$jscomp$1.push;
    var D$jscomp$1 = R$jscomp$1.push;
    var U$jscomp$1 = R$jscomp$1.slice;
    var I$jscomp$1 = function(t$jscomp$106, e$jscomp$89) {
      var n$jscomp$64 = 0;
      var i$jscomp$52 = t$jscomp$106.length;
      for (; i$jscomp$52 > n$jscomp$64; n$jscomp$64++) {
        if (t$jscomp$106[n$jscomp$64] === e$jscomp$89) {
          return n$jscomp$64;
        }
      }
      return -1;
    };
    var F$jscomp$1 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var B$jscomp$1 = "[\\x20\\t\\r\\n\\f]";
    var O$jscomp$1 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
    var P$jscomp$1 = "\\[" + B$jscomp$1 + "*(" + O$jscomp$1 + ")(?:" + B$jscomp$1 + "*([*^$|!~]?=)" + B$jscomp$1 + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O$jscomp$1 + "))|)" + B$jscomp$1 + "*\\]";
    var z$jscomp$12 = ":(" + O$jscomp$1 + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P$jscomp$1 + ")*)|.*)\\)|)";
    var j$jscomp$1 = new RegExp(B$jscomp$1 + "+", "g");
    var H$jscomp$1 = new RegExp("^" + B$jscomp$1 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B$jscomp$1 + "+$", "g");
    var q$jscomp$1 = new RegExp("^" + B$jscomp$1 + "*," + B$jscomp$1 + "*");
    var X$jscomp$1 = new RegExp("^" + B$jscomp$1 + "*([>+~]|" + B$jscomp$1 + ")" + B$jscomp$1 + "*");
    var $$jscomp$1 = new RegExp("=" + B$jscomp$1 + "*([^\\]'\"]*?)" + B$jscomp$1 + "*\\]", "g");
    var W$jscomp$1 = new RegExp(z$jscomp$12);
    var G$jscomp$1 = new RegExp("^" + O$jscomp$1 + "$");
    var V$jscomp$1 = {
      ID : new RegExp("^#(" + O$jscomp$1 + ")"),
      CLASS : new RegExp("^\\.(" + O$jscomp$1 + ")"),
      TAG : new RegExp("^(" + O$jscomp$1 + "|[*])"),
      ATTR : new RegExp("^" + P$jscomp$1),
      PSEUDO : new RegExp("^" + z$jscomp$12),
      CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B$jscomp$1 + "*(even|odd|(([+-]|)(\\d*)n|)" + B$jscomp$1 + "*(?:([+-]|)" + B$jscomp$1 + "*(\\d+)|))" + B$jscomp$1 + "*\\)|)", "i"),
      bool : new RegExp("^(?:" + F$jscomp$1 + ")$", "i"),
      needsContext : new RegExp("^" + B$jscomp$1 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B$jscomp$1 + "*((?:-\\d)?\\d*)" + B$jscomp$1 + "*\\)|)(?=[^-]|$)", "i")
    };
    var Y$jscomp$1 = /^(?:input|select|textarea|button)$/i;
    var K$jscomp$1 = /^h\d$/i;
    var J$jscomp$1 = /^[^{]+\{\s*\[native \w/;
    var Q$jscomp$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var Z$jscomp$1 = /[+~]/;
    var tt$jscomp$1 = /'|\\/g;
    var et$jscomp$1 = new RegExp("\\\\([\\da-f]{1,6}" + B$jscomp$1 + "?|(" + B$jscomp$1 + ")|.)", "ig");
    var nt$jscomp$1 = function(t$jscomp$107, e$jscomp$90, n$jscomp$65) {
      var i$jscomp$53 = "0x" + e$jscomp$90 - 65536;
      return i$jscomp$53 != i$jscomp$53 || n$jscomp$65 ? e$jscomp$90 : 0 > i$jscomp$53 ? String.fromCharCode(i$jscomp$53 + 65536) : String.fromCharCode(i$jscomp$53 >> 10 | 55296, 1023 & i$jscomp$53 | 56320);
    };
    var it$jscomp$1 = function() {
      d$jscomp$3();
    };
    try {
      D$jscomp$1.apply(R$jscomp$1 = U$jscomp$1.call(w$jscomp$8.childNodes), w$jscomp$8.childNodes);
      R$jscomp$1[w$jscomp$8.childNodes.length].nodeType;
    } catch (t$jscomp$108) {
      D$jscomp$1 = {
        apply : R$jscomp$1.length ? function(t$jscomp$109, e$jscomp$91) {
          L$jscomp$1.apply(t$jscomp$109, U$jscomp$1.call(e$jscomp$91));
        } : function(t$jscomp$110, e$jscomp$92) {
          var n$jscomp$66 = t$jscomp$110.length;
          var i$jscomp$54 = 0;
          for (; t$jscomp$110[n$jscomp$66++] = e$jscomp$92[i$jscomp$54++];) {
          }
          t$jscomp$110.length = n$jscomp$66 - 1;
        }
      };
    }
    for (e$jscomp$69 in n$jscomp$47 = ot$jscomp$1.support = {}, r$jscomp$23 = ot$jscomp$1.isXML = function(t$jscomp$111) {
      var e$jscomp$93 = t$jscomp$111 && (t$jscomp$111.ownerDocument || t$jscomp$111).documentElement;
      return !!e$jscomp$93 && "HTML" !== e$jscomp$93.nodeName;
    }, d$jscomp$3 = ot$jscomp$1.setDocument = function(t$jscomp$112) {
      var e$jscomp$94;
      var o$jscomp$42;
      var a$jscomp$26 = t$jscomp$112 ? t$jscomp$112.ownerDocument || t$jscomp$112 : w$jscomp$8;
      return a$jscomp$26 !== h$jscomp$7 && 9 === a$jscomp$26.nodeType && a$jscomp$26.documentElement ? (p$jscomp$3 = (h$jscomp$7 = a$jscomp$26).documentElement, g$jscomp$3 = !r$jscomp$23(h$jscomp$7), (o$jscomp$42 = h$jscomp$7.defaultView) && o$jscomp$42.top !== o$jscomp$42 && (o$jscomp$42.addEventListener ? o$jscomp$42.addEventListener("unload", it$jscomp$1, false) : o$jscomp$42.attachEvent && o$jscomp$42.attachEvent("onunload", it$jscomp$1)), n$jscomp$47.attributes = st$jscomp$1(function(t$jscomp$113) {
        return t$jscomp$113.className = "i", !t$jscomp$113.getAttribute("className");
      }), n$jscomp$47.getElementsByTagName = st$jscomp$1(function(t$jscomp$114) {
        return t$jscomp$114.appendChild(h$jscomp$7.createComment("")), !t$jscomp$114.getElementsByTagName("*").length;
      }), n$jscomp$47.getElementsByClassName = J$jscomp$1.test(h$jscomp$7.getElementsByClassName), n$jscomp$47.getById = st$jscomp$1(function(t$jscomp$115) {
        return p$jscomp$3.appendChild(t$jscomp$115).id = b$jscomp$1, !h$jscomp$7.getElementsByName || !h$jscomp$7.getElementsByName(b$jscomp$1).length;
      }), n$jscomp$47.getById ? (i$jscomp$41.find.ID = function(t$jscomp$116, e$jscomp$95) {
        if (void 0 !== e$jscomp$95.getElementById && g$jscomp$3) {
          var n$jscomp$67 = e$jscomp$95.getElementById(t$jscomp$116);
          return n$jscomp$67 ? [n$jscomp$67] : [];
        }
      }, i$jscomp$41.filter.ID = function(t$jscomp$117) {
        var e$jscomp$96 = t$jscomp$117.replace(et$jscomp$1, nt$jscomp$1);
        return function(t$jscomp$118) {
          return t$jscomp$118.getAttribute("id") === e$jscomp$96;
        };
      }) : (delete i$jscomp$41.find.ID, i$jscomp$41.filter.ID = function(t$jscomp$119) {
        var e$jscomp$97 = t$jscomp$119.replace(et$jscomp$1, nt$jscomp$1);
        return function(t$jscomp$120) {
          var n$jscomp$68 = void 0 !== t$jscomp$120.getAttributeNode && t$jscomp$120.getAttributeNode("id");
          return n$jscomp$68 && n$jscomp$68.value === e$jscomp$97;
        };
      }), i$jscomp$41.find.TAG = n$jscomp$47.getElementsByTagName ? function(t$jscomp$121, e$jscomp$98) {
        return void 0 !== e$jscomp$98.getElementsByTagName ? e$jscomp$98.getElementsByTagName(t$jscomp$121) : n$jscomp$47.qsa ? e$jscomp$98.querySelectorAll(t$jscomp$121) : void 0;
      } : function(t$jscomp$122, e$jscomp$99) {
        var n$jscomp$69;
        var i$jscomp$55 = [];
        var o$jscomp$43 = 0;
        var r$jscomp$34 = e$jscomp$99.getElementsByTagName(t$jscomp$122);
        if ("*" === t$jscomp$122) {
          for (; n$jscomp$69 = r$jscomp$34[o$jscomp$43++];) {
            if (1 === n$jscomp$69.nodeType) {
              i$jscomp$55.push(n$jscomp$69);
            }
          }
          return i$jscomp$55;
        }
        return r$jscomp$34;
      }, i$jscomp$41.find.CLASS = n$jscomp$47.getElementsByClassName && function(t$jscomp$123, e$jscomp$100) {
        return void 0 !== e$jscomp$100.getElementsByClassName && g$jscomp$3 ? e$jscomp$100.getElementsByClassName(t$jscomp$123) : void 0;
      }, v$jscomp$3 = [], m$jscomp$3 = [], (n$jscomp$47.qsa = J$jscomp$1.test(h$jscomp$7.querySelectorAll)) && (st$jscomp$1(function(t$jscomp$124) {
        p$jscomp$3.appendChild(t$jscomp$124).innerHTML = "<a id='" + b$jscomp$1 + "'></a><select id='" + b$jscomp$1 + "-\r\\' msallowcapture=''><option selected=''></option></select>";
        if (t$jscomp$124.querySelectorAll("[msallowcapture^='']").length) {
          m$jscomp$3.push("[*^$]=" + B$jscomp$1 + "*(?:''|\"\")");
        }
        if (!t$jscomp$124.querySelectorAll("[selected]").length) {
          m$jscomp$3.push("\\[" + B$jscomp$1 + "*(?:value|" + F$jscomp$1 + ")");
        }
        if (!t$jscomp$124.querySelectorAll("[id~=" + b$jscomp$1 + "-]").length) {
          m$jscomp$3.push("~=");
        }
        if (!t$jscomp$124.querySelectorAll(":checked").length) {
          m$jscomp$3.push(":checked");
        }
        if (!t$jscomp$124.querySelectorAll("a#" + b$jscomp$1 + "+*").length) {
          m$jscomp$3.push(".#.+[+~]");
        }
      }), st$jscomp$1(function(t$jscomp$125) {
        var e$jscomp$101 = h$jscomp$7.createElement("input");
        e$jscomp$101.setAttribute("type", "hidden");
        t$jscomp$125.appendChild(e$jscomp$101).setAttribute("name", "D");
        if (t$jscomp$125.querySelectorAll("[name=d]").length) {
          m$jscomp$3.push("name" + B$jscomp$1 + "*[*^$|!~]?=");
        }
        if (!t$jscomp$125.querySelectorAll(":enabled").length) {
          m$jscomp$3.push(":enabled", ":disabled");
        }
        t$jscomp$125.querySelectorAll("*,:x");
        m$jscomp$3.push(",.*:");
      })), (n$jscomp$47.matchesSelector = J$jscomp$1.test(y$jscomp$60 = p$jscomp$3.matches || p$jscomp$3.webkitMatchesSelector || p$jscomp$3.mozMatchesSelector || p$jscomp$3.oMatchesSelector || p$jscomp$3.msMatchesSelector)) && st$jscomp$1(function(t$jscomp$126) {
        n$jscomp$47.disconnectedMatch = y$jscomp$60.call(t$jscomp$126, "div");
        y$jscomp$60.call(t$jscomp$126, "[s!='']:x");
        v$jscomp$3.push("!=", z$jscomp$12);
      }), m$jscomp$3 = m$jscomp$3.length && new RegExp(m$jscomp$3.join("|")), v$jscomp$3 = v$jscomp$3.length && new RegExp(v$jscomp$3.join("|")), e$jscomp$94 = J$jscomp$1.test(p$jscomp$3.compareDocumentPosition), x$jscomp$75 = e$jscomp$94 || J$jscomp$1.test(p$jscomp$3.contains) ? function(t$jscomp$127, e$jscomp$102) {
        var n$jscomp$70 = 9 === t$jscomp$127.nodeType ? t$jscomp$127.documentElement : t$jscomp$127;
        var i$jscomp$56 = e$jscomp$102 && e$jscomp$102.parentNode;
        return t$jscomp$127 === i$jscomp$56 || !(!i$jscomp$56 || 1 !== i$jscomp$56.nodeType || !(n$jscomp$70.contains ? n$jscomp$70.contains(i$jscomp$56) : t$jscomp$127.compareDocumentPosition && 16 & t$jscomp$127.compareDocumentPosition(i$jscomp$56)));
      } : function(t$jscomp$128, e$jscomp$103) {
        if (e$jscomp$103) {
          for (; e$jscomp$103 = e$jscomp$103.parentNode;) {
            if (e$jscomp$103 === t$jscomp$128) {
              return true;
            }
          }
        }
        return false;
      }, _$jscomp$1 = e$jscomp$94 ? function(t$jscomp$129, e$jscomp$104) {
        if (t$jscomp$129 === e$jscomp$104) {
          return f$jscomp$2 = true, 0;
        }
        var i$jscomp$57 = !t$jscomp$129.compareDocumentPosition - !e$jscomp$104.compareDocumentPosition;
        return i$jscomp$57 || (1 & (i$jscomp$57 = (t$jscomp$129.ownerDocument || t$jscomp$129) === (e$jscomp$104.ownerDocument || e$jscomp$104) ? t$jscomp$129.compareDocumentPosition(e$jscomp$104) : 1) || !n$jscomp$47.sortDetached && e$jscomp$104.compareDocumentPosition(t$jscomp$129) === i$jscomp$57 ? t$jscomp$129 === h$jscomp$7 || t$jscomp$129.ownerDocument === w$jscomp$8 && x$jscomp$75(w$jscomp$8, t$jscomp$129) ? -1 : e$jscomp$104 === h$jscomp$7 || e$jscomp$104.ownerDocument === w$jscomp$8 && x$jscomp$75(w$jscomp$8, 
        e$jscomp$104) ? 1 : l$jscomp$6 ? I$jscomp$1(l$jscomp$6, t$jscomp$129) - I$jscomp$1(l$jscomp$6, e$jscomp$104) : 0 : 4 & i$jscomp$57 ? -1 : 1);
      } : function(t$jscomp$130, e$jscomp$105) {
        if (t$jscomp$130 === e$jscomp$105) {
          return f$jscomp$2 = true, 0;
        }
        var n$jscomp$71;
        var i$jscomp$58 = 0;
        var o$jscomp$44 = t$jscomp$130.parentNode;
        var r$jscomp$35 = e$jscomp$105.parentNode;
        var a$jscomp$27 = [t$jscomp$130];
        var s$jscomp$23 = [e$jscomp$105];
        if (!o$jscomp$44 || !r$jscomp$35) {
          return t$jscomp$130 === h$jscomp$7 ? -1 : e$jscomp$105 === h$jscomp$7 ? 1 : o$jscomp$44 ? -1 : r$jscomp$35 ? 1 : l$jscomp$6 ? I$jscomp$1(l$jscomp$6, t$jscomp$130) - I$jscomp$1(l$jscomp$6, e$jscomp$105) : 0;
        }
        if (o$jscomp$44 === r$jscomp$35) {
          return ct$jscomp$1(t$jscomp$130, e$jscomp$105);
        }
        n$jscomp$71 = t$jscomp$130;
        for (; n$jscomp$71 = n$jscomp$71.parentNode;) {
          a$jscomp$27.unshift(n$jscomp$71);
        }
        n$jscomp$71 = e$jscomp$105;
        for (; n$jscomp$71 = n$jscomp$71.parentNode;) {
          s$jscomp$23.unshift(n$jscomp$71);
        }
        for (; a$jscomp$27[i$jscomp$58] === s$jscomp$23[i$jscomp$58];) {
          i$jscomp$58++;
        }
        return i$jscomp$58 ? ct$jscomp$1(a$jscomp$27[i$jscomp$58], s$jscomp$23[i$jscomp$58]) : a$jscomp$27[i$jscomp$58] === w$jscomp$8 ? -1 : s$jscomp$23[i$jscomp$58] === w$jscomp$8 ? 1 : 0;
      }, h$jscomp$7) : h$jscomp$7;
    }, ot$jscomp$1.matches = function(t$jscomp$131, e$jscomp$106) {
      return ot$jscomp$1(t$jscomp$131, null, null, e$jscomp$106);
    }, ot$jscomp$1.matchesSelector = function(t$jscomp$132, e$jscomp$107) {
      if ((t$jscomp$132.ownerDocument || t$jscomp$132) !== h$jscomp$7 && d$jscomp$3(t$jscomp$132), e$jscomp$107 = e$jscomp$107.replace($$jscomp$1, "='$1']"), n$jscomp$47.matchesSelector && g$jscomp$3 && !S$jscomp$1[e$jscomp$107 + " "] && (!v$jscomp$3 || !v$jscomp$3.test(e$jscomp$107)) && (!m$jscomp$3 || !m$jscomp$3.test(e$jscomp$107))) {
        try {
          var i$jscomp$59 = y$jscomp$60.call(t$jscomp$132, e$jscomp$107);
          if (i$jscomp$59 || n$jscomp$47.disconnectedMatch || t$jscomp$132.document && 11 !== t$jscomp$132.document.nodeType) {
            return i$jscomp$59;
          }
        } catch (t$jscomp$133) {
        }
      }
      return ot$jscomp$1(e$jscomp$107, h$jscomp$7, null, [t$jscomp$132]).length > 0;
    }, ot$jscomp$1.contains = function(t$jscomp$134, e$jscomp$108) {
      return (t$jscomp$134.ownerDocument || t$jscomp$134) !== h$jscomp$7 && d$jscomp$3(t$jscomp$134), x$jscomp$75(t$jscomp$134, e$jscomp$108);
    }, ot$jscomp$1.attr = function(t$jscomp$135, e$jscomp$109) {
      if ((t$jscomp$135.ownerDocument || t$jscomp$135) !== h$jscomp$7) {
        d$jscomp$3(t$jscomp$135);
      }
      var o$jscomp$45 = i$jscomp$41.attrHandle[e$jscomp$109.toLowerCase()];
      var r$jscomp$36 = o$jscomp$45 && M$jscomp$1.call(i$jscomp$41.attrHandle, e$jscomp$109.toLowerCase()) ? o$jscomp$45(t$jscomp$135, e$jscomp$109, !g$jscomp$3) : void 0;
      return void 0 !== r$jscomp$36 ? r$jscomp$36 : n$jscomp$47.attributes || !g$jscomp$3 ? t$jscomp$135.getAttribute(e$jscomp$109) : (r$jscomp$36 = t$jscomp$135.getAttributeNode(e$jscomp$109)) && r$jscomp$36.specified ? r$jscomp$36.value : null;
    }, ot$jscomp$1.error = function(t$jscomp$136) {
      throw new Error("Syntax error, unrecognized expression: " + t$jscomp$136);
    }, ot$jscomp$1.uniqueSort = function(t$jscomp$137) {
      var e$jscomp$110;
      var i$jscomp$60 = [];
      var o$jscomp$46 = 0;
      var r$jscomp$37 = 0;
      if (f$jscomp$2 = !n$jscomp$47.detectDuplicates, l$jscomp$6 = !n$jscomp$47.sortStable && t$jscomp$137.slice(0), t$jscomp$137.sort(_$jscomp$1), f$jscomp$2) {
        for (; e$jscomp$110 = t$jscomp$137[r$jscomp$37++];) {
          if (e$jscomp$110 === t$jscomp$137[r$jscomp$37]) {
            o$jscomp$46 = i$jscomp$60.push(r$jscomp$37);
          }
        }
        for (; o$jscomp$46--;) {
          t$jscomp$137.splice(i$jscomp$60[o$jscomp$46], 1);
        }
      }
      return l$jscomp$6 = null, t$jscomp$137;
    }, o$jscomp$29 = ot$jscomp$1.getText = function(t$jscomp$138) {
      var e$jscomp$111;
      var n$jscomp$72 = "";
      var i$jscomp$61 = 0;
      var r$jscomp$38 = t$jscomp$138.nodeType;
      if (r$jscomp$38) {
        if (1 === r$jscomp$38 || 9 === r$jscomp$38 || 11 === r$jscomp$38) {
          if ("string" == typeof t$jscomp$138.textContent) {
            return t$jscomp$138.textContent;
          }
          t$jscomp$138 = t$jscomp$138.firstChild;
          for (; t$jscomp$138; t$jscomp$138 = t$jscomp$138.nextSibling) {
            n$jscomp$72 = n$jscomp$72 + o$jscomp$29(t$jscomp$138);
          }
        } else {
          if (3 === r$jscomp$38 || 4 === r$jscomp$38) {
            return t$jscomp$138.nodeValue;
          }
        }
      } else {
        for (; e$jscomp$111 = t$jscomp$138[i$jscomp$61++];) {
          n$jscomp$72 = n$jscomp$72 + o$jscomp$29(e$jscomp$111);
        }
      }
      return n$jscomp$72;
    }, (i$jscomp$41 = ot$jscomp$1.selectors = {
      cacheLength : 50,
      createPseudo : at$jscomp$1,
      match : V$jscomp$1,
      attrHandle : {},
      find : {},
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(t$jscomp$139) {
          return t$jscomp$139[1] = t$jscomp$139[1].replace(et$jscomp$1, nt$jscomp$1), t$jscomp$139[3] = (t$jscomp$139[3] || t$jscomp$139[4] || t$jscomp$139[5] || "").replace(et$jscomp$1, nt$jscomp$1), "~=" === t$jscomp$139[2] && (t$jscomp$139[3] = " " + t$jscomp$139[3] + " "), t$jscomp$139.slice(0, 4);
        },
        CHILD : function(t$jscomp$140) {
          return t$jscomp$140[1] = t$jscomp$140[1].toLowerCase(), "nth" === t$jscomp$140[1].slice(0, 3) ? (t$jscomp$140[3] || ot$jscomp$1.error(t$jscomp$140[0]), t$jscomp$140[4] = +(t$jscomp$140[4] ? t$jscomp$140[5] + (t$jscomp$140[6] || 1) : 2 * ("even" === t$jscomp$140[3] || "odd" === t$jscomp$140[3])), t$jscomp$140[5] = +(t$jscomp$140[7] + t$jscomp$140[8] || "odd" === t$jscomp$140[3])) : t$jscomp$140[3] && ot$jscomp$1.error(t$jscomp$140[0]), t$jscomp$140;
        },
        PSEUDO : function(t$jscomp$141) {
          var e$jscomp$112;
          var n$jscomp$73 = !t$jscomp$141[6] && t$jscomp$141[2];
          return V$jscomp$1.CHILD.test(t$jscomp$141[0]) ? null : (t$jscomp$141[3] ? t$jscomp$141[2] = t$jscomp$141[4] || t$jscomp$141[5] || "" : n$jscomp$73 && W$jscomp$1.test(n$jscomp$73) && (e$jscomp$112 = a$jscomp$19(n$jscomp$73, true)) && (e$jscomp$112 = n$jscomp$73.indexOf(")", n$jscomp$73.length - e$jscomp$112) - n$jscomp$73.length) && (t$jscomp$141[0] = t$jscomp$141[0].slice(0, e$jscomp$112), t$jscomp$141[2] = n$jscomp$73.slice(0, e$jscomp$112)), t$jscomp$141.slice(0, 3));
        }
      },
      filter : {
        TAG : function(t$jscomp$142) {
          var e$jscomp$113 = t$jscomp$142.replace(et$jscomp$1, nt$jscomp$1).toLowerCase();
          return "*" === t$jscomp$142 ? function() {
            return true;
          } : function(t$jscomp$143) {
            return t$jscomp$143.nodeName && t$jscomp$143.nodeName.toLowerCase() === e$jscomp$113;
          };
        },
        CLASS : function(t$jscomp$144) {
          var e$jscomp$114 = A$jscomp$1[t$jscomp$144 + " "];
          return e$jscomp$114 || (e$jscomp$114 = new RegExp("(^|" + B$jscomp$1 + ")" + t$jscomp$144 + "(" + B$jscomp$1 + "|$)")) && A$jscomp$1(t$jscomp$144, function(t$jscomp$145) {
            return e$jscomp$114.test("string" == typeof t$jscomp$145.className && t$jscomp$145.className || void 0 !== t$jscomp$145.getAttribute && t$jscomp$145.getAttribute("class") || "");
          });
        },
        ATTR : function(t$jscomp$146, e$jscomp$115, n$jscomp$74) {
          return function(i$jscomp$62) {
            var o$jscomp$47 = ot$jscomp$1.attr(i$jscomp$62, t$jscomp$146);
            return null == o$jscomp$47 ? "!=" === e$jscomp$115 : !e$jscomp$115 || (o$jscomp$47 = o$jscomp$47 + "", "=" === e$jscomp$115 ? o$jscomp$47 === n$jscomp$74 : "!=" === e$jscomp$115 ? o$jscomp$47 !== n$jscomp$74 : "^=" === e$jscomp$115 ? n$jscomp$74 && 0 === o$jscomp$47.indexOf(n$jscomp$74) : "*=" === e$jscomp$115 ? n$jscomp$74 && o$jscomp$47.indexOf(n$jscomp$74) > -1 : "$=" === e$jscomp$115 ? n$jscomp$74 && o$jscomp$47.slice(-n$jscomp$74.length) === n$jscomp$74 : "~=" === e$jscomp$115 ? 
            (" " + o$jscomp$47.replace(j$jscomp$1, " ") + " ").indexOf(n$jscomp$74) > -1 : "|=" === e$jscomp$115 && (o$jscomp$47 === n$jscomp$74 || o$jscomp$47.slice(0, n$jscomp$74.length + 1) === n$jscomp$74 + "-"));
          };
        },
        CHILD : function(t$jscomp$147, e$jscomp$116, n$jscomp$75, i$jscomp$63, o$jscomp$48) {
          var r$jscomp$39 = "nth" !== t$jscomp$147.slice(0, 3);
          var a$jscomp$28 = "last" !== t$jscomp$147.slice(-4);
          var s$jscomp$24 = "of-type" === e$jscomp$116;
          return 1 === i$jscomp$63 && 0 === o$jscomp$48 ? function(t$jscomp$148) {
            return !!t$jscomp$148.parentNode;
          } : function(e$jscomp$117, n$jscomp$76, u$jscomp$14) {
            var c$jscomp$13;
            var l$jscomp$12;
            var f$jscomp$7;
            var d$jscomp$6;
            var h$jscomp$9;
            var p$jscomp$7;
            var g$jscomp$5 = r$jscomp$39 !== a$jscomp$28 ? "nextSibling" : "previousSibling";
            var m$jscomp$6 = e$jscomp$117.parentNode;
            var v$jscomp$7 = s$jscomp$24 && e$jscomp$117.nodeName.toLowerCase();
            var y$jscomp$63 = !u$jscomp$14 && !s$jscomp$24;
            var x$jscomp$77 = false;
            if (m$jscomp$6) {
              if (r$jscomp$39) {
                for (; g$jscomp$5;) {
                  d$jscomp$6 = e$jscomp$117;
                  for (; d$jscomp$6 = d$jscomp$6[g$jscomp$5];) {
                    if (s$jscomp$24 ? d$jscomp$6.nodeName.toLowerCase() === v$jscomp$7 : 1 === d$jscomp$6.nodeType) {
                      return false;
                    }
                  }
                  p$jscomp$7 = g$jscomp$5 = "only" === t$jscomp$147 && !p$jscomp$7 && "nextSibling";
                }
                return true;
              }
              if (p$jscomp$7 = [a$jscomp$28 ? m$jscomp$6.firstChild : m$jscomp$6.lastChild], a$jscomp$28 && y$jscomp$63) {
                x$jscomp$77 = (h$jscomp$9 = (c$jscomp$13 = (l$jscomp$12 = (f$jscomp$7 = (d$jscomp$6 = m$jscomp$6)[b$jscomp$1] || (d$jscomp$6[b$jscomp$1] = {}))[d$jscomp$6.uniqueID] || (f$jscomp$7[d$jscomp$6.uniqueID] = {}))[t$jscomp$147] || [])[0] === E$jscomp$1 && c$jscomp$13[1]) && c$jscomp$13[2];
                d$jscomp$6 = h$jscomp$9 && m$jscomp$6.childNodes[h$jscomp$9];
                for (; d$jscomp$6 = ++h$jscomp$9 && d$jscomp$6 && d$jscomp$6[g$jscomp$5] || (x$jscomp$77 = h$jscomp$9 = 0) || p$jscomp$7.pop();) {
                  if (1 === d$jscomp$6.nodeType && ++x$jscomp$77 && d$jscomp$6 === e$jscomp$117) {
                    l$jscomp$12[t$jscomp$147] = [E$jscomp$1, h$jscomp$9, x$jscomp$77];
                    break;
                  }
                }
              } else {
                if (y$jscomp$63 && (x$jscomp$77 = h$jscomp$9 = (c$jscomp$13 = (l$jscomp$12 = (f$jscomp$7 = (d$jscomp$6 = e$jscomp$117)[b$jscomp$1] || (d$jscomp$6[b$jscomp$1] = {}))[d$jscomp$6.uniqueID] || (f$jscomp$7[d$jscomp$6.uniqueID] = {}))[t$jscomp$147] || [])[0] === E$jscomp$1 && c$jscomp$13[1]), false === x$jscomp$77) {
                  for (; (d$jscomp$6 = ++h$jscomp$9 && d$jscomp$6 && d$jscomp$6[g$jscomp$5] || (x$jscomp$77 = h$jscomp$9 = 0) || p$jscomp$7.pop()) && ((s$jscomp$24 ? d$jscomp$6.nodeName.toLowerCase() !== v$jscomp$7 : 1 !== d$jscomp$6.nodeType) || !++x$jscomp$77 || (y$jscomp$63 && ((l$jscomp$12 = (f$jscomp$7 = d$jscomp$6[b$jscomp$1] || (d$jscomp$6[b$jscomp$1] = {}))[d$jscomp$6.uniqueID] || (f$jscomp$7[d$jscomp$6.uniqueID] = {}))[t$jscomp$147] = [E$jscomp$1, x$jscomp$77]), d$jscomp$6 !== e$jscomp$117));) {
                  }
                }
              }
              return (x$jscomp$77 = x$jscomp$77 - o$jscomp$48) === i$jscomp$63 || x$jscomp$77 % i$jscomp$63 == 0 && x$jscomp$77 / i$jscomp$63 >= 0;
            }
          };
        },
        PSEUDO : function(t$jscomp$149, e$jscomp$118) {
          var n$jscomp$77;
          var o$jscomp$49 = i$jscomp$41.pseudos[t$jscomp$149] || i$jscomp$41.setFilters[t$jscomp$149.toLowerCase()] || ot$jscomp$1.error("unsupported pseudo: " + t$jscomp$149);
          return o$jscomp$49[b$jscomp$1] ? o$jscomp$49(e$jscomp$118) : o$jscomp$49.length > 1 ? (n$jscomp$77 = [t$jscomp$149, t$jscomp$149, "", e$jscomp$118], i$jscomp$41.setFilters.hasOwnProperty(t$jscomp$149.toLowerCase()) ? at$jscomp$1(function(t$jscomp$150, n$jscomp$78) {
            var i$jscomp$64;
            var r$jscomp$40 = o$jscomp$49(t$jscomp$150, e$jscomp$118);
            var a$jscomp$29 = r$jscomp$40.length;
            for (; a$jscomp$29--;) {
              t$jscomp$150[i$jscomp$64 = I$jscomp$1(t$jscomp$150, r$jscomp$40[a$jscomp$29])] = !(n$jscomp$78[i$jscomp$64] = r$jscomp$40[a$jscomp$29]);
            }
          }) : function(t$jscomp$151) {
            return o$jscomp$49(t$jscomp$151, 0, n$jscomp$77);
          }) : o$jscomp$49;
        }
      },
      pseudos : {
        not : at$jscomp$1(function(t$jscomp$152) {
          var e$jscomp$119 = [];
          var n$jscomp$79 = [];
          var i$jscomp$65 = s$jscomp$16(t$jscomp$152.replace(H$jscomp$1, "$1"));
          return i$jscomp$65[b$jscomp$1] ? at$jscomp$1(function(t$jscomp$153, e$jscomp$120, n$jscomp$80, o$jscomp$50) {
            var r$jscomp$41;
            var a$jscomp$30 = i$jscomp$65(t$jscomp$153, null, o$jscomp$50, []);
            var s$jscomp$25 = t$jscomp$153.length;
            for (; s$jscomp$25--;) {
              if (r$jscomp$41 = a$jscomp$30[s$jscomp$25]) {
                t$jscomp$153[s$jscomp$25] = !(e$jscomp$120[s$jscomp$25] = r$jscomp$41);
              }
            }
          }) : function(t$jscomp$154, o$jscomp$51, r$jscomp$42) {
            return e$jscomp$119[0] = t$jscomp$154, i$jscomp$65(e$jscomp$119, null, r$jscomp$42, n$jscomp$79), e$jscomp$119[0] = null, !n$jscomp$79.pop();
          };
        }),
        has : at$jscomp$1(function(t$jscomp$155) {
          return function(e$jscomp$121) {
            return ot$jscomp$1(t$jscomp$155, e$jscomp$121).length > 0;
          };
        }),
        contains : at$jscomp$1(function(t$jscomp$156) {
          return t$jscomp$156 = t$jscomp$156.replace(et$jscomp$1, nt$jscomp$1), function(e$jscomp$122) {
            return (e$jscomp$122.textContent || e$jscomp$122.innerText || o$jscomp$29(e$jscomp$122)).indexOf(t$jscomp$156) > -1;
          };
        }),
        lang : at$jscomp$1(function(t$jscomp$157) {
          return G$jscomp$1.test(t$jscomp$157 || "") || ot$jscomp$1.error("unsupported lang: " + t$jscomp$157), t$jscomp$157 = t$jscomp$157.replace(et$jscomp$1, nt$jscomp$1).toLowerCase(), function(e$jscomp$123) {
            var n$jscomp$81;
            do {
              if (n$jscomp$81 = g$jscomp$3 ? e$jscomp$123.lang : e$jscomp$123.getAttribute("xml:lang") || e$jscomp$123.getAttribute("lang")) {
                return (n$jscomp$81 = n$jscomp$81.toLowerCase()) === t$jscomp$157 || 0 === n$jscomp$81.indexOf(t$jscomp$157 + "-");
              }
            } while ((e$jscomp$123 = e$jscomp$123.parentNode) && 1 === e$jscomp$123.nodeType);
            return false;
          };
        }),
        target : function(e$jscomp$124) {
          var n$jscomp$82 = t$jscomp$81.location && t$jscomp$81.location.hash;
          return n$jscomp$82 && n$jscomp$82.slice(1) === e$jscomp$124.id;
        },
        root : function(t$jscomp$158) {
          return t$jscomp$158 === p$jscomp$3;
        },
        focus : function(t$jscomp$159) {
          return t$jscomp$159 === h$jscomp$7.activeElement && (!h$jscomp$7.hasFocus || h$jscomp$7.hasFocus()) && !!(t$jscomp$159.type || t$jscomp$159.href || ~t$jscomp$159.tabIndex);
        },
        enabled : function(t$jscomp$160) {
          return false === t$jscomp$160.disabled;
        },
        disabled : function(t$jscomp$161) {
          return true === t$jscomp$161.disabled;
        },
        checked : function(t$jscomp$162) {
          var e$jscomp$125 = t$jscomp$162.nodeName.toLowerCase();
          return "input" === e$jscomp$125 && !!t$jscomp$162.checked || "option" === e$jscomp$125 && !!t$jscomp$162.selected;
        },
        selected : function(t$jscomp$163) {
          return t$jscomp$163.parentNode && t$jscomp$163.parentNode.selectedIndex, true === t$jscomp$163.selected;
        },
        empty : function(t$jscomp$164) {
          t$jscomp$164 = t$jscomp$164.firstChild;
          for (; t$jscomp$164; t$jscomp$164 = t$jscomp$164.nextSibling) {
            if (t$jscomp$164.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent : function(t$jscomp$165) {
          return !i$jscomp$41.pseudos.empty(t$jscomp$165);
        },
        header : function(t$jscomp$166) {
          return K$jscomp$1.test(t$jscomp$166.nodeName);
        },
        input : function(t$jscomp$167) {
          return Y$jscomp$1.test(t$jscomp$167.nodeName);
        },
        button : function(t$jscomp$168) {
          var e$jscomp$126 = t$jscomp$168.nodeName.toLowerCase();
          return "input" === e$jscomp$126 && "button" === t$jscomp$168.type || "button" === e$jscomp$126;
        },
        text : function(t$jscomp$169) {
          var e$jscomp$127;
          return "input" === t$jscomp$169.nodeName.toLowerCase() && "text" === t$jscomp$169.type && (null == (e$jscomp$127 = t$jscomp$169.getAttribute("type")) || "text" === e$jscomp$127.toLowerCase());
        },
        first : dt$jscomp$1(function() {
          return [0];
        }),
        last : dt$jscomp$1(function(t$jscomp$170, e$jscomp$128) {
          return [e$jscomp$128 - 1];
        }),
        eq : dt$jscomp$1(function(t$jscomp$171, e$jscomp$129, n$jscomp$83) {
          return [0 > n$jscomp$83 ? n$jscomp$83 + e$jscomp$129 : n$jscomp$83];
        }),
        even : dt$jscomp$1(function(t$jscomp$172, e$jscomp$130) {
          var n$jscomp$84 = 0;
          for (; e$jscomp$130 > n$jscomp$84; n$jscomp$84 = n$jscomp$84 + 2) {
            t$jscomp$172.push(n$jscomp$84);
          }
          return t$jscomp$172;
        }),
        odd : dt$jscomp$1(function(t$jscomp$173, e$jscomp$131) {
          var n$jscomp$85 = 1;
          for (; e$jscomp$131 > n$jscomp$85; n$jscomp$85 = n$jscomp$85 + 2) {
            t$jscomp$173.push(n$jscomp$85);
          }
          return t$jscomp$173;
        }),
        lt : dt$jscomp$1(function(t$jscomp$174, e$jscomp$132, n$jscomp$86) {
          var i$jscomp$66 = 0 > n$jscomp$86 ? n$jscomp$86 + e$jscomp$132 : n$jscomp$86;
          for (; --i$jscomp$66 >= 0;) {
            t$jscomp$174.push(i$jscomp$66);
          }
          return t$jscomp$174;
        }),
        gt : dt$jscomp$1(function(t$jscomp$175, e$jscomp$133, n$jscomp$87) {
          var i$jscomp$67 = 0 > n$jscomp$87 ? n$jscomp$87 + e$jscomp$133 : n$jscomp$87;
          for (; ++i$jscomp$67 < e$jscomp$133;) {
            t$jscomp$175.push(i$jscomp$67);
          }
          return t$jscomp$175;
        })
      }
    }).pseudos.nth = i$jscomp$41.pseudos.eq, {
      radio : true,
      checkbox : true,
      file : true,
      password : true,
      image : true
    }) {
      i$jscomp$41.pseudos[e$jscomp$69] = lt$jscomp$1(e$jscomp$69);
    }
    for (e$jscomp$69 in{
      submit : true,
      reset : true
    }) {
      i$jscomp$41.pseudos[e$jscomp$69] = ft$jscomp$1(e$jscomp$69);
    }
    return pt$jscomp$1.prototype = i$jscomp$41.filters = i$jscomp$41.pseudos, i$jscomp$41.setFilters = new pt$jscomp$1, a$jscomp$19 = ot$jscomp$1.tokenize = function(t$jscomp$176, e$jscomp$134) {
      var n$jscomp$88;
      var o$jscomp$52;
      var r$jscomp$43;
      var a$jscomp$31;
      var s$jscomp$26;
      var u$jscomp$15;
      var c$jscomp$14;
      var l$jscomp$13 = C$jscomp$1[t$jscomp$176 + " "];
      if (l$jscomp$13) {
        return e$jscomp$134 ? 0 : l$jscomp$13.slice(0);
      }
      s$jscomp$26 = t$jscomp$176;
      u$jscomp$15 = [];
      c$jscomp$14 = i$jscomp$41.preFilter;
      for (; s$jscomp$26;) {
        for (a$jscomp$31 in n$jscomp$88 && !(o$jscomp$52 = q$jscomp$1.exec(s$jscomp$26)) || (o$jscomp$52 && (s$jscomp$26 = s$jscomp$26.slice(o$jscomp$52[0].length) || s$jscomp$26), u$jscomp$15.push(r$jscomp$43 = [])), n$jscomp$88 = false, (o$jscomp$52 = X$jscomp$1.exec(s$jscomp$26)) && (n$jscomp$88 = o$jscomp$52.shift(), r$jscomp$43.push({
          value : n$jscomp$88,
          type : o$jscomp$52[0].replace(H$jscomp$1, " ")
        }), s$jscomp$26 = s$jscomp$26.slice(n$jscomp$88.length)), i$jscomp$41.filter) {
          if (!(!(o$jscomp$52 = V$jscomp$1[a$jscomp$31].exec(s$jscomp$26)) || c$jscomp$14[a$jscomp$31] && !(o$jscomp$52 = c$jscomp$14[a$jscomp$31](o$jscomp$52)))) {
            n$jscomp$88 = o$jscomp$52.shift();
            r$jscomp$43.push({
              value : n$jscomp$88,
              type : a$jscomp$31,
              matches : o$jscomp$52
            });
            s$jscomp$26 = s$jscomp$26.slice(n$jscomp$88.length);
          }
        }
        if (!n$jscomp$88) {
          break;
        }
      }
      return e$jscomp$134 ? s$jscomp$26.length : s$jscomp$26 ? ot$jscomp$1.error(t$jscomp$176) : C$jscomp$1(t$jscomp$176, u$jscomp$15).slice(0);
    }, s$jscomp$16 = ot$jscomp$1.compile = function(t$jscomp$177, e$jscomp$135) {
      var n$jscomp$89;
      var i$jscomp$68 = [];
      var o$jscomp$53 = [];
      var r$jscomp$44 = S$jscomp$1[t$jscomp$177 + " "];
      if (!r$jscomp$44) {
        if (!e$jscomp$135) {
          e$jscomp$135 = a$jscomp$19(t$jscomp$177);
        }
        n$jscomp$89 = e$jscomp$135.length;
        for (; n$jscomp$89--;) {
          if ((r$jscomp$44 = bt$jscomp$1(e$jscomp$135[n$jscomp$89]))[b$jscomp$1]) {
            i$jscomp$68.push(r$jscomp$44);
          } else {
            o$jscomp$53.push(r$jscomp$44);
          }
        }
        (r$jscomp$44 = S$jscomp$1(t$jscomp$177, wt$jscomp$1(o$jscomp$53, i$jscomp$68))).selector = t$jscomp$177;
      }
      return r$jscomp$44;
    }, u$jscomp$8 = ot$jscomp$1.select = function(t$jscomp$178, e$jscomp$136, o$jscomp$54, r$jscomp$45) {
      var u$jscomp$16;
      var c$jscomp$15;
      var l$jscomp$14;
      var f$jscomp$8;
      var d$jscomp$7;
      var h$jscomp$10 = "function" == typeof t$jscomp$178 && t$jscomp$178;
      var p$jscomp$8 = !r$jscomp$45 && a$jscomp$19(t$jscomp$178 = h$jscomp$10.selector || t$jscomp$178);
      if (o$jscomp$54 = o$jscomp$54 || [], 1 === p$jscomp$8.length) {
        if ((c$jscomp$15 = p$jscomp$8[0] = p$jscomp$8[0].slice(0)).length > 2 && "ID" === (l$jscomp$14 = c$jscomp$15[0]).type && n$jscomp$47.getById && 9 === e$jscomp$136.nodeType && g$jscomp$3 && i$jscomp$41.relative[c$jscomp$15[1].type]) {
          if (!(e$jscomp$136 = (i$jscomp$41.find.ID(l$jscomp$14.matches[0].replace(et$jscomp$1, nt$jscomp$1), e$jscomp$136) || [])[0])) {
            return o$jscomp$54;
          }
          if (h$jscomp$10) {
            e$jscomp$136 = e$jscomp$136.parentNode;
          }
          t$jscomp$178 = t$jscomp$178.slice(c$jscomp$15.shift().value.length);
        }
        u$jscomp$16 = V$jscomp$1.needsContext.test(t$jscomp$178) ? 0 : c$jscomp$15.length;
        for (; u$jscomp$16-- && (l$jscomp$14 = c$jscomp$15[u$jscomp$16], !i$jscomp$41.relative[f$jscomp$8 = l$jscomp$14.type]);) {
          if ((d$jscomp$7 = i$jscomp$41.find[f$jscomp$8]) && (r$jscomp$45 = d$jscomp$7(l$jscomp$14.matches[0].replace(et$jscomp$1, nt$jscomp$1), Z$jscomp$1.test(c$jscomp$15[0].type) && ht$jscomp$1(e$jscomp$136.parentNode) || e$jscomp$136))) {
            if (c$jscomp$15.splice(u$jscomp$16, 1), !(t$jscomp$178 = r$jscomp$45.length && gt$jscomp$1(c$jscomp$15))) {
              return D$jscomp$1.apply(o$jscomp$54, r$jscomp$45), o$jscomp$54;
            }
            break;
          }
        }
      }
      return (h$jscomp$10 || s$jscomp$16(t$jscomp$178, p$jscomp$8))(r$jscomp$45, e$jscomp$136, !g$jscomp$3, o$jscomp$54, !e$jscomp$136 || Z$jscomp$1.test(t$jscomp$178) && ht$jscomp$1(e$jscomp$136.parentNode) || e$jscomp$136), o$jscomp$54;
    }, n$jscomp$47.sortStable = b$jscomp$1.split("").sort(_$jscomp$1).join("") === b$jscomp$1, n$jscomp$47.detectDuplicates = !!f$jscomp$2, d$jscomp$3(), n$jscomp$47.sortDetached = st$jscomp$1(function(t$jscomp$179) {
      return 1 & t$jscomp$179.compareDocumentPosition(h$jscomp$7.createElement("div"));
    }), st$jscomp$1(function(t$jscomp$180) {
      return t$jscomp$180.innerHTML = "<a href='#'></a>", "#" === t$jscomp$180.firstChild.getAttribute("href");
    }) || ut$jscomp$1("type|href|height|width", function(t$jscomp$181, e$jscomp$137, n$jscomp$90) {
      return n$jscomp$90 ? void 0 : t$jscomp$181.getAttribute(e$jscomp$137, "type" === e$jscomp$137.toLowerCase() ? 1 : 2);
    }), n$jscomp$47.attributes && st$jscomp$1(function(t$jscomp$182) {
      return t$jscomp$182.innerHTML = "<input/>", t$jscomp$182.firstChild.setAttribute("value", ""), "" === t$jscomp$182.firstChild.getAttribute("value");
    }) || ut$jscomp$1("value", function(t$jscomp$183, e$jscomp$138, n$jscomp$91) {
      return n$jscomp$91 || "input" !== t$jscomp$183.nodeName.toLowerCase() ? void 0 : t$jscomp$183.defaultValue;
    }), st$jscomp$1(function(t$jscomp$184) {
      return null == t$jscomp$184.getAttribute("disabled");
    }) || ut$jscomp$1(F$jscomp$1, function(t$jscomp$185, e$jscomp$139, n$jscomp$92) {
      var i$jscomp$69;
      return n$jscomp$92 ? void 0 : true === t$jscomp$185[e$jscomp$139] ? e$jscomp$139.toLowerCase() : (i$jscomp$69 = t$jscomp$185.getAttributeNode(e$jscomp$139)) && i$jscomp$69.specified ? i$jscomp$69.value : null;
    }), ot$jscomp$1;
  }(t$jscomp$2);
  h$jscomp$6.find = x$jscomp$74;
  h$jscomp$6.expr = x$jscomp$74.selectors;
  h$jscomp$6.expr[":"] = h$jscomp$6.expr.pseudos;
  h$jscomp$6.uniqueSort = h$jscomp$6.unique = x$jscomp$74.uniqueSort;
  h$jscomp$6.text = x$jscomp$74.getText;
  h$jscomp$6.isXMLDoc = x$jscomp$74.isXML;
  h$jscomp$6.contains = x$jscomp$74.contains;
  var b$jscomp$0 = function(t$jscomp$186, e$jscomp$140, n$jscomp$93) {
    var i$jscomp$70 = [];
    var o$jscomp$55 = void 0 !== n$jscomp$93;
    for (; (t$jscomp$186 = t$jscomp$186[e$jscomp$140]) && 9 !== t$jscomp$186.nodeType;) {
      if (1 === t$jscomp$186.nodeType) {
        if (o$jscomp$55 && h$jscomp$6(t$jscomp$186).is(n$jscomp$93)) {
          break;
        }
        i$jscomp$70.push(t$jscomp$186);
      }
    }
    return i$jscomp$70;
  };
  var w$jscomp$7 = function(t$jscomp$187, e$jscomp$141) {
    var n$jscomp$94 = [];
    for (; t$jscomp$187; t$jscomp$187 = t$jscomp$187.nextSibling) {
      if (1 === t$jscomp$187.nodeType && t$jscomp$187 !== e$jscomp$141) {
        n$jscomp$94.push(t$jscomp$187);
      }
    }
    return n$jscomp$94;
  };
  var E$jscomp$0 = h$jscomp$6.expr.match.needsContext;
  var T$jscomp$0 = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
  var A$jscomp$0 = /^.[^:#\[\.,]*$/;
  h$jscomp$6.filter = function(t$jscomp$188, e$jscomp$142, n$jscomp$95) {
    var i$jscomp$71 = e$jscomp$142[0];
    return n$jscomp$95 && (t$jscomp$188 = ":not(" + t$jscomp$188 + ")"), 1 === e$jscomp$142.length && 1 === i$jscomp$71.nodeType ? h$jscomp$6.find.matchesSelector(i$jscomp$71, t$jscomp$188) ? [i$jscomp$71] : [] : h$jscomp$6.find.matches(t$jscomp$188, h$jscomp$6.grep(e$jscomp$142, function(t$jscomp$189) {
      return 1 === t$jscomp$189.nodeType;
    }));
  };
  h$jscomp$6.fn.extend({
    find : function(t$jscomp$190) {
      var e$jscomp$143;
      var n$jscomp$96 = [];
      var i$jscomp$72 = this;
      var o$jscomp$56 = i$jscomp$72.length;
      if ("string" != typeof t$jscomp$190) {
        return this.pushStack(h$jscomp$6(t$jscomp$190).filter(function() {
          e$jscomp$143 = 0;
          for (; o$jscomp$56 > e$jscomp$143; e$jscomp$143++) {
            if (h$jscomp$6.contains(i$jscomp$72[e$jscomp$143], this)) {
              return true;
            }
          }
        }));
      }
      e$jscomp$143 = 0;
      for (; o$jscomp$56 > e$jscomp$143; e$jscomp$143++) {
        h$jscomp$6.find(t$jscomp$190, i$jscomp$72[e$jscomp$143], n$jscomp$96);
      }
      return (n$jscomp$96 = this.pushStack(o$jscomp$56 > 1 ? h$jscomp$6.unique(n$jscomp$96) : n$jscomp$96)).selector = this.selector ? this.selector + " " + t$jscomp$190 : t$jscomp$190, n$jscomp$96;
    },
    filter : function(t$jscomp$191) {
      return this.pushStack(C$jscomp$0(this, t$jscomp$191 || [], false));
    },
    not : function(t$jscomp$192) {
      return this.pushStack(C$jscomp$0(this, t$jscomp$192 || [], true));
    },
    is : function(t$jscomp$193) {
      return !!C$jscomp$0(this, "string" == typeof t$jscomp$193 && E$jscomp$0.test(t$jscomp$193) ? h$jscomp$6(t$jscomp$193) : t$jscomp$193 || [], false).length;
    }
  });
  var S$jscomp$0;
  var _$jscomp$0 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (h$jscomp$6.fn.init = function(t$jscomp$194, e$jscomp$144, n$jscomp$97) {
    var o$jscomp$57;
    var r$jscomp$46;
    if (!t$jscomp$194) {
      return this;
    }
    if (n$jscomp$97 = n$jscomp$97 || S$jscomp$0, "string" == typeof t$jscomp$194) {
      if (!(o$jscomp$57 = "<" === t$jscomp$194.charAt(0) && ">" === t$jscomp$194.charAt(t$jscomp$194.length - 1) && t$jscomp$194.length >= 3 ? [null, t$jscomp$194, null] : _$jscomp$0.exec(t$jscomp$194)) || !o$jscomp$57[1] && e$jscomp$144) {
        return !e$jscomp$144 || e$jscomp$144.jquery ? (e$jscomp$144 || n$jscomp$97).find(t$jscomp$194) : this.constructor(e$jscomp$144).find(t$jscomp$194);
      }
      if (o$jscomp$57[1]) {
        if (e$jscomp$144 = e$jscomp$144 instanceof h$jscomp$6 ? e$jscomp$144[0] : e$jscomp$144, h$jscomp$6.merge(this, h$jscomp$6.parseHTML(o$jscomp$57[1], e$jscomp$144 && e$jscomp$144.nodeType ? e$jscomp$144.ownerDocument || e$jscomp$144 : i$jscomp$3, true)), T$jscomp$0.test(o$jscomp$57[1]) && h$jscomp$6.isPlainObject(e$jscomp$144)) {
          for (o$jscomp$57 in e$jscomp$144) {
            if (h$jscomp$6.isFunction(this[o$jscomp$57])) {
              this[o$jscomp$57](e$jscomp$144[o$jscomp$57]);
            } else {
              this.attr(o$jscomp$57, e$jscomp$144[o$jscomp$57]);
            }
          }
        }
        return this;
      }
      if ((r$jscomp$46 = i$jscomp$3.getElementById(o$jscomp$57[2])) && r$jscomp$46.parentNode) {
        if (r$jscomp$46.id !== o$jscomp$57[2]) {
          return S$jscomp$0.find(t$jscomp$194);
        }
        this.length = 1;
        this[0] = r$jscomp$46;
      }
      return this.context = i$jscomp$3, this.selector = t$jscomp$194, this;
    }
    return t$jscomp$194.nodeType ? (this.context = this[0] = t$jscomp$194, this.length = 1, this) : h$jscomp$6.isFunction(t$jscomp$194) ? void 0 !== n$jscomp$97.ready ? n$jscomp$97.ready(t$jscomp$194) : t$jscomp$194(h$jscomp$6) : (void 0 !== t$jscomp$194.selector && (this.selector = t$jscomp$194.selector, this.context = t$jscomp$194.context), h$jscomp$6.makeArray(t$jscomp$194, this));
  }).prototype = h$jscomp$6.fn;
  S$jscomp$0 = h$jscomp$6(i$jscomp$3);
  var N$jscomp$0 = /^(?:parents|prev(?:Until|All))/;
  var M$jscomp$0 = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  h$jscomp$6.fn.extend({
    has : function(t$jscomp$195) {
      var e$jscomp$145;
      var n$jscomp$98 = h$jscomp$6(t$jscomp$195, this);
      var i$jscomp$73 = n$jscomp$98.length;
      return this.filter(function() {
        e$jscomp$145 = 0;
        for (; i$jscomp$73 > e$jscomp$145; e$jscomp$145++) {
          if (h$jscomp$6.contains(this, n$jscomp$98[e$jscomp$145])) {
            return true;
          }
        }
      });
    },
    closest : function(t$jscomp$196, e$jscomp$146) {
      var n$jscomp$99;
      var i$jscomp$74 = 0;
      var o$jscomp$58 = this.length;
      var r$jscomp$47 = [];
      var a$jscomp$32 = E$jscomp$0.test(t$jscomp$196) || "string" != typeof t$jscomp$196 ? h$jscomp$6(t$jscomp$196, e$jscomp$146 || this.context) : 0;
      for (; o$jscomp$58 > i$jscomp$74; i$jscomp$74++) {
        n$jscomp$99 = this[i$jscomp$74];
        for (; n$jscomp$99 && n$jscomp$99 !== e$jscomp$146; n$jscomp$99 = n$jscomp$99.parentNode) {
          if (n$jscomp$99.nodeType < 11 && (a$jscomp$32 ? a$jscomp$32.index(n$jscomp$99) > -1 : 1 === n$jscomp$99.nodeType && h$jscomp$6.find.matchesSelector(n$jscomp$99, t$jscomp$196))) {
            r$jscomp$47.push(n$jscomp$99);
            break;
          }
        }
      }
      return this.pushStack(r$jscomp$47.length > 1 ? h$jscomp$6.uniqueSort(r$jscomp$47) : r$jscomp$47);
    },
    index : function(t$jscomp$197) {
      return t$jscomp$197 ? "string" == typeof t$jscomp$197 ? h$jscomp$6.inArray(this[0], h$jscomp$6(t$jscomp$197)) : h$jscomp$6.inArray(t$jscomp$197.jquery ? t$jscomp$197[0] : t$jscomp$197, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add : function(t$jscomp$198, e$jscomp$147) {
      return this.pushStack(h$jscomp$6.uniqueSort(h$jscomp$6.merge(this.get(), h$jscomp$6(t$jscomp$198, e$jscomp$147))));
    },
    addBack : function(t$jscomp$199) {
      return this.add(null == t$jscomp$199 ? this.prevObject : this.prevObject.filter(t$jscomp$199));
    }
  });
  h$jscomp$6.each({
    parent : function(t$jscomp$200) {
      var e$jscomp$148 = t$jscomp$200.parentNode;
      return e$jscomp$148 && 11 !== e$jscomp$148.nodeType ? e$jscomp$148 : null;
    },
    parents : function(t$jscomp$201) {
      return b$jscomp$0(t$jscomp$201, "parentNode");
    },
    parentsUntil : function(t$jscomp$202, e$jscomp$149, n$jscomp$100) {
      return b$jscomp$0(t$jscomp$202, "parentNode", n$jscomp$100);
    },
    next : function(t$jscomp$203) {
      return R$jscomp$0(t$jscomp$203, "nextSibling");
    },
    prev : function(t$jscomp$204) {
      return R$jscomp$0(t$jscomp$204, "previousSibling");
    },
    nextAll : function(t$jscomp$205) {
      return b$jscomp$0(t$jscomp$205, "nextSibling");
    },
    prevAll : function(t$jscomp$206) {
      return b$jscomp$0(t$jscomp$206, "previousSibling");
    },
    nextUntil : function(t$jscomp$207, e$jscomp$150, n$jscomp$101) {
      return b$jscomp$0(t$jscomp$207, "nextSibling", n$jscomp$101);
    },
    prevUntil : function(t$jscomp$208, e$jscomp$151, n$jscomp$102) {
      return b$jscomp$0(t$jscomp$208, "previousSibling", n$jscomp$102);
    },
    siblings : function(t$jscomp$209) {
      return w$jscomp$7((t$jscomp$209.parentNode || {}).firstChild, t$jscomp$209);
    },
    children : function(t$jscomp$210) {
      return w$jscomp$7(t$jscomp$210.firstChild);
    },
    contents : function(t$jscomp$211) {
      return h$jscomp$6.nodeName(t$jscomp$211, "iframe") ? t$jscomp$211.contentDocument || t$jscomp$211.contentWindow.document : h$jscomp$6.merge([], t$jscomp$211.childNodes);
    }
  }, function(t$jscomp$212, e$jscomp$152) {
    h$jscomp$6.fn[t$jscomp$212] = function(n$jscomp$103, i$jscomp$75) {
      var o$jscomp$59 = h$jscomp$6.map(this, e$jscomp$152, n$jscomp$103);
      return "Until" !== t$jscomp$212.slice(-5) && (i$jscomp$75 = n$jscomp$103), i$jscomp$75 && "string" == typeof i$jscomp$75 && (o$jscomp$59 = h$jscomp$6.filter(i$jscomp$75, o$jscomp$59)), this.length > 1 && (M$jscomp$0[t$jscomp$212] || (o$jscomp$59 = h$jscomp$6.uniqueSort(o$jscomp$59)), N$jscomp$0.test(t$jscomp$212) && (o$jscomp$59 = o$jscomp$59.reverse())), this.pushStack(o$jscomp$59);
    };
  });
  var k$jscomp$0;
  var L$jscomp$0;
  var D$jscomp$0 = /\S+/g;
  for (L$jscomp$0 in h$jscomp$6.Callbacks = function(t$jscomp$213) {
    t$jscomp$213 = "string" == typeof t$jscomp$213 ? function(t$jscomp$214) {
      var e$jscomp$154 = {};
      return h$jscomp$6.each(t$jscomp$214.match(D$jscomp$0) || [], function(t$jscomp$215, n$jscomp$105) {
        e$jscomp$154[n$jscomp$105] = true;
      }), e$jscomp$154;
    }(t$jscomp$213) : h$jscomp$6.extend({}, t$jscomp$213);
    var e$jscomp$153;
    var n$jscomp$104;
    var i$jscomp$76;
    var o$jscomp$60;
    var r$jscomp$48 = [];
    var a$jscomp$33 = [];
    var s$jscomp$27 = -1;
    var u$jscomp$17 = function() {
      o$jscomp$60 = t$jscomp$213.once;
      i$jscomp$76 = e$jscomp$153 = true;
      for (; a$jscomp$33.length; s$jscomp$27 = -1) {
        n$jscomp$104 = a$jscomp$33.shift();
        for (; ++s$jscomp$27 < r$jscomp$48.length;) {
          if (false === r$jscomp$48[s$jscomp$27].apply(n$jscomp$104[0], n$jscomp$104[1]) && t$jscomp$213.stopOnFalse) {
            s$jscomp$27 = r$jscomp$48.length;
            n$jscomp$104 = false;
          }
        }
      }
      if (!t$jscomp$213.memory) {
        n$jscomp$104 = false;
      }
      e$jscomp$153 = false;
      if (o$jscomp$60) {
        r$jscomp$48 = n$jscomp$104 ? [] : "";
      }
    };
    var c$jscomp$16 = {
      add : function() {
        return r$jscomp$48 && (n$jscomp$104 && !e$jscomp$153 && (s$jscomp$27 = r$jscomp$48.length - 1, a$jscomp$33.push(n$jscomp$104)), function e$jscomp$155(n$jscomp$106) {
          h$jscomp$6.each(n$jscomp$106, function(n$jscomp$107, i$jscomp$77) {
            if (h$jscomp$6.isFunction(i$jscomp$77)) {
              if (!(t$jscomp$213.unique && c$jscomp$16.has(i$jscomp$77))) {
                r$jscomp$48.push(i$jscomp$77);
              }
            } else {
              if (i$jscomp$77 && i$jscomp$77.length && "string" !== h$jscomp$6.type(i$jscomp$77)) {
                e$jscomp$155(i$jscomp$77);
              }
            }
          });
        }(arguments), n$jscomp$104 && !e$jscomp$153 && u$jscomp$17()), this;
      },
      remove : function() {
        return h$jscomp$6.each(arguments, function(t$jscomp$216, e$jscomp$156) {
          var n$jscomp$108;
          for (; (n$jscomp$108 = h$jscomp$6.inArray(e$jscomp$156, r$jscomp$48, n$jscomp$108)) > -1;) {
            r$jscomp$48.splice(n$jscomp$108, 1);
            if (s$jscomp$27 >= n$jscomp$108) {
              s$jscomp$27--;
            }
          }
        }), this;
      },
      has : function(t$jscomp$217) {
        return t$jscomp$217 ? h$jscomp$6.inArray(t$jscomp$217, r$jscomp$48) > -1 : r$jscomp$48.length > 0;
      },
      empty : function() {
        return r$jscomp$48 && (r$jscomp$48 = []), this;
      },
      disable : function() {
        return o$jscomp$60 = a$jscomp$33 = [], r$jscomp$48 = n$jscomp$104 = "", this;
      },
      disabled : function() {
        return !r$jscomp$48;
      },
      lock : function() {
        return o$jscomp$60 = true, n$jscomp$104 || c$jscomp$16.disable(), this;
      },
      locked : function() {
        return !!o$jscomp$60;
      },
      fireWith : function(t$jscomp$218, n$jscomp$109) {
        return o$jscomp$60 || (n$jscomp$109 = [t$jscomp$218, (n$jscomp$109 = n$jscomp$109 || []).slice ? n$jscomp$109.slice() : n$jscomp$109], a$jscomp$33.push(n$jscomp$109), e$jscomp$153 || u$jscomp$17()), this;
      },
      fire : function() {
        return c$jscomp$16.fireWith(this, arguments), this;
      },
      fired : function() {
        return !!i$jscomp$76;
      }
    };
    return c$jscomp$16;
  }, h$jscomp$6.extend({
    Deferred : function(t$jscomp$219) {
      var e$jscomp$157 = [["resolve", "done", h$jscomp$6.Callbacks("once memory"), "resolved"], ["reject", "fail", h$jscomp$6.Callbacks("once memory"), "rejected"], ["notify", "progress", h$jscomp$6.Callbacks("memory")]];
      var n$jscomp$110 = "pending";
      var i$jscomp$78 = {
        state : function() {
          return n$jscomp$110;
        },
        always : function() {
          return o$jscomp$61.done(arguments).fail(arguments), this;
        },
        then : function() {
          var t$jscomp$220 = arguments;
          return h$jscomp$6.Deferred(function(n$jscomp$111) {
            h$jscomp$6.each(e$jscomp$157, function(e$jscomp$158, r$jscomp$49) {
              var a$jscomp$34 = h$jscomp$6.isFunction(t$jscomp$220[e$jscomp$158]) && t$jscomp$220[e$jscomp$158];
              o$jscomp$61[r$jscomp$49[1]](function() {
                var t$jscomp$221 = a$jscomp$34 && a$jscomp$34.apply(this, arguments);
                if (t$jscomp$221 && h$jscomp$6.isFunction(t$jscomp$221.promise)) {
                  t$jscomp$221.promise().progress(n$jscomp$111.notify).done(n$jscomp$111.resolve).fail(n$jscomp$111.reject);
                } else {
                  n$jscomp$111[r$jscomp$49[0] + "With"](this === i$jscomp$78 ? n$jscomp$111.promise() : this, a$jscomp$34 ? [t$jscomp$221] : arguments);
                }
              });
            });
            t$jscomp$220 = null;
          }).promise();
        },
        promise : function(t$jscomp$222) {
          return null != t$jscomp$222 ? h$jscomp$6.extend(t$jscomp$222, i$jscomp$78) : i$jscomp$78;
        }
      };
      var o$jscomp$61 = {};
      return i$jscomp$78.pipe = i$jscomp$78.then, h$jscomp$6.each(e$jscomp$157, function(t$jscomp$223, r$jscomp$50) {
        var a$jscomp$35 = r$jscomp$50[2];
        var s$jscomp$28 = r$jscomp$50[3];
        i$jscomp$78[r$jscomp$50[1]] = a$jscomp$35.add;
        if (s$jscomp$28) {
          a$jscomp$35.add(function() {
            n$jscomp$110 = s$jscomp$28;
          }, e$jscomp$157[1 ^ t$jscomp$223][2].disable, e$jscomp$157[2][2].lock);
        }
        o$jscomp$61[r$jscomp$50[0]] = function() {
          return o$jscomp$61[r$jscomp$50[0] + "With"](this === o$jscomp$61 ? i$jscomp$78 : this, arguments), this;
        };
        o$jscomp$61[r$jscomp$50[0] + "With"] = a$jscomp$35.fireWith;
      }), i$jscomp$78.promise(o$jscomp$61), t$jscomp$219 && t$jscomp$219.call(o$jscomp$61, o$jscomp$61), o$jscomp$61;
    },
    when : function(t$jscomp$224) {
      var e$jscomp$159;
      var n$jscomp$112;
      var i$jscomp$79;
      var r$jscomp$51 = 0;
      var a$jscomp$36 = o$jscomp$0.call(arguments);
      var s$jscomp$29 = a$jscomp$36.length;
      var u$jscomp$18 = 1 !== s$jscomp$29 || t$jscomp$224 && h$jscomp$6.isFunction(t$jscomp$224.promise) ? s$jscomp$29 : 0;
      var c$jscomp$17 = 1 === u$jscomp$18 ? t$jscomp$224 : h$jscomp$6.Deferred();
      var l$jscomp$15 = function(t$jscomp$225, n$jscomp$113, i$jscomp$80) {
        return function(r$jscomp$52) {
          n$jscomp$113[t$jscomp$225] = this;
          i$jscomp$80[t$jscomp$225] = arguments.length > 1 ? o$jscomp$0.call(arguments) : r$jscomp$52;
          if (i$jscomp$80 === e$jscomp$159) {
            c$jscomp$17.notifyWith(n$jscomp$113, i$jscomp$80);
          } else {
            if (!--u$jscomp$18) {
              c$jscomp$17.resolveWith(n$jscomp$113, i$jscomp$80);
            }
          }
        };
      };
      if (s$jscomp$29 > 1) {
        e$jscomp$159 = new Array(s$jscomp$29);
        n$jscomp$112 = new Array(s$jscomp$29);
        i$jscomp$79 = new Array(s$jscomp$29);
        for (; s$jscomp$29 > r$jscomp$51; r$jscomp$51++) {
          if (a$jscomp$36[r$jscomp$51] && h$jscomp$6.isFunction(a$jscomp$36[r$jscomp$51].promise)) {
            a$jscomp$36[r$jscomp$51].promise().progress(l$jscomp$15(r$jscomp$51, n$jscomp$112, e$jscomp$159)).done(l$jscomp$15(r$jscomp$51, i$jscomp$79, a$jscomp$36)).fail(c$jscomp$17.reject);
          } else {
            --u$jscomp$18;
          }
        }
      }
      return u$jscomp$18 || c$jscomp$17.resolveWith(i$jscomp$79, a$jscomp$36), c$jscomp$17.promise();
    }
  }), h$jscomp$6.fn.ready = function(t$jscomp$226) {
    return h$jscomp$6.ready.promise().done(t$jscomp$226), this;
  }, h$jscomp$6.extend({
    isReady : false,
    readyWait : 1,
    holdReady : function(t$jscomp$227) {
      if (t$jscomp$227) {
        h$jscomp$6.readyWait++;
      } else {
        h$jscomp$6.ready(true);
      }
    },
    ready : function(t$jscomp$228) {
      if (!(true === t$jscomp$228 ? --h$jscomp$6.readyWait : h$jscomp$6.isReady)) {
        h$jscomp$6.isReady = true;
        if (!(true !== t$jscomp$228 && --h$jscomp$6.readyWait > 0)) {
          k$jscomp$0.resolveWith(i$jscomp$3, [h$jscomp$6]);
          if (h$jscomp$6.fn.triggerHandler) {
            h$jscomp$6(i$jscomp$3).triggerHandler("ready");
            h$jscomp$6(i$jscomp$3).off("ready");
          }
        }
      }
    }
  }), h$jscomp$6.ready.promise = function(e$jscomp$160) {
    if (!k$jscomp$0) {
      if (k$jscomp$0 = h$jscomp$6.Deferred(), "complete" === i$jscomp$3.readyState || "loading" !== i$jscomp$3.readyState && !i$jscomp$3.documentElement.doScroll) {
        t$jscomp$2.setTimeout(h$jscomp$6.ready);
      } else {
        if (i$jscomp$3.addEventListener) {
          i$jscomp$3.addEventListener("DOMContentLoaded", I$jscomp$0);
          t$jscomp$2.addEventListener("load", I$jscomp$0);
        } else {
          i$jscomp$3.attachEvent("onreadystatechange", I$jscomp$0);
          t$jscomp$2.attachEvent("onload", I$jscomp$0);
          var n$jscomp$114 = false;
          try {
            n$jscomp$114 = null == t$jscomp$2.frameElement && i$jscomp$3.documentElement;
          } catch (t$jscomp$229) {
          }
          if (n$jscomp$114 && n$jscomp$114.doScroll) {
            (function e$jscomp$161() {
              if (!h$jscomp$6.isReady) {
                try {
                  n$jscomp$114.doScroll("left");
                } catch (n$jscomp$115) {
                  return t$jscomp$2.setTimeout(e$jscomp$161, 50);
                }
                U$jscomp$0();
                h$jscomp$6.ready();
              }
            })();
          }
        }
      }
    }
    return k$jscomp$0.promise(e$jscomp$160);
  }, h$jscomp$6.ready.promise(), h$jscomp$6(f$jscomp$1)) {
    break;
  }
  f$jscomp$1.ownFirst = "0" === L$jscomp$0;
  f$jscomp$1.inlineBlockNeedsLayout = false;
  h$jscomp$6(function() {
    var t$jscomp$230;
    var e$jscomp$162;
    var n$jscomp$116;
    var o$jscomp$62;
    if ((n$jscomp$116 = i$jscomp$3.getElementsByTagName("body")[0]) && n$jscomp$116.style) {
      e$jscomp$162 = i$jscomp$3.createElement("div");
      (o$jscomp$62 = i$jscomp$3.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
      n$jscomp$116.appendChild(o$jscomp$62).appendChild(e$jscomp$162);
      if (void 0 !== e$jscomp$162.style.zoom) {
        e$jscomp$162.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
        f$jscomp$1.inlineBlockNeedsLayout = t$jscomp$230 = 3 === e$jscomp$162.offsetWidth;
        if (t$jscomp$230) {
          n$jscomp$116.style.zoom = 1;
        }
      }
      n$jscomp$116.removeChild(o$jscomp$62);
    }
  });
  (function() {
    var t$jscomp$231 = i$jscomp$3.createElement("div");
    f$jscomp$1.deleteExpando = true;
    try {
      delete t$jscomp$231.test;
    } catch (t$jscomp$232) {
      f$jscomp$1.deleteExpando = false;
    }
    t$jscomp$231 = null;
  })();
  var F$jscomp$0 = function(t$jscomp$233) {
    var e$jscomp$163 = h$jscomp$6.noData[(t$jscomp$233.nodeName + " ").toLowerCase()];
    var n$jscomp$117 = +t$jscomp$233.nodeType || 1;
    return (1 === n$jscomp$117 || 9 === n$jscomp$117) && (!e$jscomp$163 || true !== e$jscomp$163 && t$jscomp$233.getAttribute("classid") === e$jscomp$163);
  };
  var B$jscomp$0 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var O$jscomp$0 = /([A-Z])/g;
  h$jscomp$6.extend({
    cache : {},
    noData : {
      "applet " : true,
      "embed " : true,
      "object " : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData : function(t$jscomp$234) {
      return !!(t$jscomp$234 = t$jscomp$234.nodeType ? h$jscomp$6.cache[t$jscomp$234[h$jscomp$6.expando]] : t$jscomp$234[h$jscomp$6.expando]) && !z$jscomp$11(t$jscomp$234);
    },
    data : function(t$jscomp$235, e$jscomp$164, n$jscomp$118) {
      return j$jscomp$0(t$jscomp$235, e$jscomp$164, n$jscomp$118);
    },
    removeData : function(t$jscomp$236, e$jscomp$165) {
      return H$jscomp$0(t$jscomp$236, e$jscomp$165);
    },
    _data : function(t$jscomp$237, e$jscomp$166, n$jscomp$119) {
      return j$jscomp$0(t$jscomp$237, e$jscomp$166, n$jscomp$119, true);
    },
    _removeData : function(t$jscomp$238, e$jscomp$167) {
      return H$jscomp$0(t$jscomp$238, e$jscomp$167, true);
    }
  });
  h$jscomp$6.fn.extend({
    data : function(t$jscomp$239, e$jscomp$168) {
      var n$jscomp$120;
      var i$jscomp$81;
      var o$jscomp$63;
      var r$jscomp$53 = this[0];
      var a$jscomp$37 = r$jscomp$53 && r$jscomp$53.attributes;
      if (void 0 === t$jscomp$239) {
        if (this.length && (o$jscomp$63 = h$jscomp$6.data(r$jscomp$53), 1 === r$jscomp$53.nodeType && !h$jscomp$6._data(r$jscomp$53, "parsedAttrs"))) {
          n$jscomp$120 = a$jscomp$37.length;
          for (; n$jscomp$120--;) {
            if (a$jscomp$37[n$jscomp$120]) {
              if (0 === (i$jscomp$81 = a$jscomp$37[n$jscomp$120].name).indexOf("data-")) {
                P$jscomp$0(r$jscomp$53, i$jscomp$81 = h$jscomp$6.camelCase(i$jscomp$81.slice(5)), o$jscomp$63[i$jscomp$81]);
              }
            }
          }
          h$jscomp$6._data(r$jscomp$53, "parsedAttrs", true);
        }
        return o$jscomp$63;
      }
      return "object" == typeof t$jscomp$239 ? this.each(function() {
        h$jscomp$6.data(this, t$jscomp$239);
      }) : arguments.length > 1 ? this.each(function() {
        h$jscomp$6.data(this, t$jscomp$239, e$jscomp$168);
      }) : r$jscomp$53 ? P$jscomp$0(r$jscomp$53, t$jscomp$239, h$jscomp$6.data(r$jscomp$53, t$jscomp$239)) : void 0;
    },
    removeData : function(t$jscomp$240) {
      return this.each(function() {
        h$jscomp$6.removeData(this, t$jscomp$240);
      });
    }
  });
  h$jscomp$6.extend({
    queue : function(t$jscomp$241, e$jscomp$169, n$jscomp$121) {
      var i$jscomp$82;
      return t$jscomp$241 ? (e$jscomp$169 = (e$jscomp$169 || "fx") + "queue", i$jscomp$82 = h$jscomp$6._data(t$jscomp$241, e$jscomp$169), n$jscomp$121 && (!i$jscomp$82 || h$jscomp$6.isArray(n$jscomp$121) ? i$jscomp$82 = h$jscomp$6._data(t$jscomp$241, e$jscomp$169, h$jscomp$6.makeArray(n$jscomp$121)) : i$jscomp$82.push(n$jscomp$121)), i$jscomp$82 || []) : void 0;
    },
    dequeue : function(t$jscomp$242, e$jscomp$170) {
      e$jscomp$170 = e$jscomp$170 || "fx";
      var n$jscomp$122 = h$jscomp$6.queue(t$jscomp$242, e$jscomp$170);
      var i$jscomp$83 = n$jscomp$122.length;
      var o$jscomp$64 = n$jscomp$122.shift();
      var r$jscomp$54 = h$jscomp$6._queueHooks(t$jscomp$242, e$jscomp$170);
      if ("inprogress" === o$jscomp$64) {
        o$jscomp$64 = n$jscomp$122.shift();
        i$jscomp$83--;
      }
      if (o$jscomp$64) {
        if ("fx" === e$jscomp$170) {
          n$jscomp$122.unshift("inprogress");
        }
        delete r$jscomp$54.stop;
        o$jscomp$64.call(t$jscomp$242, function() {
          h$jscomp$6.dequeue(t$jscomp$242, e$jscomp$170);
        }, r$jscomp$54);
      }
      if (!i$jscomp$83 && r$jscomp$54) {
        r$jscomp$54.empty.fire();
      }
    },
    _queueHooks : function(t$jscomp$243, e$jscomp$171) {
      var n$jscomp$123 = e$jscomp$171 + "queueHooks";
      return h$jscomp$6._data(t$jscomp$243, n$jscomp$123) || h$jscomp$6._data(t$jscomp$243, n$jscomp$123, {
        empty : h$jscomp$6.Callbacks("once memory").add(function() {
          h$jscomp$6._removeData(t$jscomp$243, e$jscomp$171 + "queue");
          h$jscomp$6._removeData(t$jscomp$243, n$jscomp$123);
        })
      });
    }
  });
  h$jscomp$6.fn.extend({
    queue : function(t$jscomp$244, e$jscomp$172) {
      var n$jscomp$124 = 2;
      return "string" != typeof t$jscomp$244 && (e$jscomp$172 = t$jscomp$244, t$jscomp$244 = "fx", n$jscomp$124--), arguments.length < n$jscomp$124 ? h$jscomp$6.queue(this[0], t$jscomp$244) : void 0 === e$jscomp$172 ? this : this.each(function() {
        var n$jscomp$125 = h$jscomp$6.queue(this, t$jscomp$244, e$jscomp$172);
        h$jscomp$6._queueHooks(this, t$jscomp$244);
        if ("fx" === t$jscomp$244 && "inprogress" !== n$jscomp$125[0]) {
          h$jscomp$6.dequeue(this, t$jscomp$244);
        }
      });
    },
    dequeue : function(t$jscomp$245) {
      return this.each(function() {
        h$jscomp$6.dequeue(this, t$jscomp$245);
      });
    },
    clearQueue : function(t$jscomp$246) {
      return this.queue(t$jscomp$246 || "fx", []);
    },
    promise : function(t$jscomp$247, e$jscomp$173) {
      var n$jscomp$126;
      var i$jscomp$84 = 1;
      var o$jscomp$65 = h$jscomp$6.Deferred();
      var r$jscomp$55 = this;
      var a$jscomp$38 = this.length;
      var s$jscomp$30 = function() {
        if (!--i$jscomp$84) {
          o$jscomp$65.resolveWith(r$jscomp$55, [r$jscomp$55]);
        }
      };
      if ("string" != typeof t$jscomp$247) {
        e$jscomp$173 = t$jscomp$247;
        t$jscomp$247 = void 0;
      }
      t$jscomp$247 = t$jscomp$247 || "fx";
      for (; a$jscomp$38--;) {
        if ((n$jscomp$126 = h$jscomp$6._data(r$jscomp$55[a$jscomp$38], t$jscomp$247 + "queueHooks")) && n$jscomp$126.empty) {
          i$jscomp$84++;
          n$jscomp$126.empty.add(s$jscomp$30);
        }
      }
      return s$jscomp$30(), o$jscomp$65.promise(e$jscomp$173);
    }
  });
  (function() {
    var t$jscomp$248;
    f$jscomp$1.shrinkWrapBlocks = function() {
      return null != t$jscomp$248 ? t$jscomp$248 : (t$jscomp$248 = false, (n$jscomp$127 = i$jscomp$3.getElementsByTagName("body")[0]) && n$jscomp$127.style ? (e$jscomp$174 = i$jscomp$3.createElement("div"), (o$jscomp$66 = i$jscomp$3.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n$jscomp$127.appendChild(o$jscomp$66).appendChild(e$jscomp$174), void 0 !== e$jscomp$174.style.zoom && (e$jscomp$174.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
      e$jscomp$174.appendChild(i$jscomp$3.createElement("div")).style.width = "5px", t$jscomp$248 = 3 !== e$jscomp$174.offsetWidth), n$jscomp$127.removeChild(o$jscomp$66), t$jscomp$248) : void 0);
      var e$jscomp$174;
      var n$jscomp$127;
      var o$jscomp$66;
    };
  })();
  var q$jscomp$0 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var X$jscomp$0 = new RegExp("^(?:([+-])=|)(" + q$jscomp$0 + ")([a-z%]*)$", "i");
  var $$jscomp$0 = ["Top", "Right", "Bottom", "Left"];
  var W$jscomp$0 = function(t$jscomp$249, e$jscomp$175) {
    return t$jscomp$249 = e$jscomp$175 || t$jscomp$249, "none" === h$jscomp$6.css(t$jscomp$249, "display") || !h$jscomp$6.contains(t$jscomp$249.ownerDocument, t$jscomp$249);
  };
  var V$jscomp$0 = function(t$jscomp$250, e$jscomp$176, n$jscomp$128, i$jscomp$85, o$jscomp$67, r$jscomp$56, a$jscomp$39) {
    var s$jscomp$31 = 0;
    var u$jscomp$19 = t$jscomp$250.length;
    var c$jscomp$18 = null == n$jscomp$128;
    if ("object" === h$jscomp$6.type(n$jscomp$128)) {
      for (s$jscomp$31 in o$jscomp$67 = true, n$jscomp$128) {
        V$jscomp$0(t$jscomp$250, e$jscomp$176, s$jscomp$31, n$jscomp$128[s$jscomp$31], true, r$jscomp$56, a$jscomp$39);
      }
    } else {
      if (void 0 !== i$jscomp$85 && (o$jscomp$67 = true, h$jscomp$6.isFunction(i$jscomp$85) || (a$jscomp$39 = true), c$jscomp$18 && (a$jscomp$39 ? (e$jscomp$176.call(t$jscomp$250, i$jscomp$85), e$jscomp$176 = null) : (c$jscomp$18 = e$jscomp$176, e$jscomp$176 = function(t$jscomp$251, e$jscomp$177, n$jscomp$129) {
        return c$jscomp$18.call(h$jscomp$6(t$jscomp$251), n$jscomp$129);
      })), e$jscomp$176)) {
        for (; u$jscomp$19 > s$jscomp$31; s$jscomp$31++) {
          e$jscomp$176(t$jscomp$250[s$jscomp$31], n$jscomp$128, a$jscomp$39 ? i$jscomp$85 : i$jscomp$85.call(t$jscomp$250[s$jscomp$31], s$jscomp$31, e$jscomp$176(t$jscomp$250[s$jscomp$31], n$jscomp$128)));
        }
      }
    }
    return o$jscomp$67 ? t$jscomp$250 : c$jscomp$18 ? e$jscomp$176.call(t$jscomp$250) : u$jscomp$19 ? e$jscomp$176(t$jscomp$250[0], n$jscomp$128) : r$jscomp$56;
  };
  var Y$jscomp$0 = /^(?:checkbox|radio)$/i;
  var K$jscomp$0 = /<([\w:-]+)/;
  var J$jscomp$0 = /^$|\/(?:java|ecma)script/i;
  var Q$jscomp$0 = /^\s+/;
  var Z$jscomp$0 = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  !function() {
    var t$jscomp$252 = i$jscomp$3.createElement("div");
    var e$jscomp$178 = i$jscomp$3.createDocumentFragment();
    var n$jscomp$130 = i$jscomp$3.createElement("input");
    t$jscomp$252.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    f$jscomp$1.leadingWhitespace = 3 === t$jscomp$252.firstChild.nodeType;
    f$jscomp$1.tbody = !t$jscomp$252.getElementsByTagName("tbody").length;
    f$jscomp$1.htmlSerialize = !!t$jscomp$252.getElementsByTagName("link").length;
    f$jscomp$1.html5Clone = "<:nav></:nav>" !== i$jscomp$3.createElement("nav").cloneNode(true).outerHTML;
    n$jscomp$130.type = "checkbox";
    n$jscomp$130.checked = true;
    e$jscomp$178.appendChild(n$jscomp$130);
    f$jscomp$1.appendChecked = n$jscomp$130.checked;
    t$jscomp$252.innerHTML = "<textarea>x</textarea>";
    f$jscomp$1.noCloneChecked = !!t$jscomp$252.cloneNode(true).lastChild.defaultValue;
    e$jscomp$178.appendChild(t$jscomp$252);
    (n$jscomp$130 = i$jscomp$3.createElement("input")).setAttribute("type", "radio");
    n$jscomp$130.setAttribute("checked", "checked");
    n$jscomp$130.setAttribute("name", "t");
    t$jscomp$252.appendChild(n$jscomp$130);
    f$jscomp$1.checkClone = t$jscomp$252.cloneNode(true).cloneNode(true).lastChild.checked;
    f$jscomp$1.noCloneEvent = !!t$jscomp$252.addEventListener;
    t$jscomp$252[h$jscomp$6.expando] = 1;
    f$jscomp$1.attributes = !t$jscomp$252.getAttribute(h$jscomp$6.expando);
  }();
  var et$jscomp$0 = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    legend : [1, "<fieldset>", "</fieldset>"],
    area : [1, "<map>", "</map>"],
    param : [1, "<object>", "</object>"],
    thead : [1, "<table>", "</table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default : f$jscomp$1.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  et$jscomp$0.optgroup = et$jscomp$0.option;
  et$jscomp$0.tbody = et$jscomp$0.tfoot = et$jscomp$0.colgroup = et$jscomp$0.caption = et$jscomp$0.thead;
  et$jscomp$0.th = et$jscomp$0.td;
  var ot$jscomp$0 = /<|&#?\w+;/;
  var rt$jscomp$0 = /<tbody/i;
  !function() {
    var e$jscomp$179;
    var n$jscomp$131;
    var o$jscomp$68 = i$jscomp$3.createElement("div");
    for (e$jscomp$179 in{
      submit : true,
      change : true,
      focusin : true
    }) {
      n$jscomp$131 = "on" + e$jscomp$179;
      if (!(f$jscomp$1[e$jscomp$179] = n$jscomp$131 in t$jscomp$2)) {
        o$jscomp$68.setAttribute(n$jscomp$131, "t");
        f$jscomp$1[e$jscomp$179] = false === o$jscomp$68.attributes[n$jscomp$131].expando;
      }
    }
    o$jscomp$68 = null;
  }();
  var ut$jscomp$0 = /^(?:input|select|textarea)$/i;
  var ct$jscomp$0 = /^key/;
  var lt$jscomp$0 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var ft$jscomp$0 = /^(?:focusinfocus|focusoutblur)$/;
  var dt$jscomp$0 = /^([^.]*)(?:\.(.+)|)/;
  h$jscomp$6.event = {
    global : {},
    add : function(t$jscomp$253, e$jscomp$180, n$jscomp$132, i$jscomp$86, o$jscomp$69) {
      var r$jscomp$57;
      var a$jscomp$40;
      var s$jscomp$32;
      var u$jscomp$20;
      var c$jscomp$19;
      var l$jscomp$16;
      var f$jscomp$9;
      var d$jscomp$8;
      var p$jscomp$9;
      var g$jscomp$6;
      var m$jscomp$7;
      var v$jscomp$8 = h$jscomp$6._data(t$jscomp$253);
      if (v$jscomp$8) {
        if (n$jscomp$132.handler) {
          n$jscomp$132 = (u$jscomp$20 = n$jscomp$132).handler;
          o$jscomp$69 = u$jscomp$20.selector;
        }
        if (!n$jscomp$132.guid) {
          n$jscomp$132.guid = h$jscomp$6.guid++;
        }
        if (!(a$jscomp$40 = v$jscomp$8.events)) {
          a$jscomp$40 = v$jscomp$8.events = {};
        }
        if (!(l$jscomp$16 = v$jscomp$8.handle)) {
          (l$jscomp$16 = v$jscomp$8.handle = function(t$jscomp$254) {
            return void 0 === h$jscomp$6 || t$jscomp$254 && h$jscomp$6.event.triggered === t$jscomp$254.type ? void 0 : h$jscomp$6.event.dispatch.apply(l$jscomp$16.elem, arguments);
          }).elem = t$jscomp$253;
        }
        s$jscomp$32 = (e$jscomp$180 = (e$jscomp$180 || "").match(D$jscomp$0) || [""]).length;
        for (; s$jscomp$32--;) {
          p$jscomp$9 = m$jscomp$7 = (r$jscomp$57 = dt$jscomp$0.exec(e$jscomp$180[s$jscomp$32]) || [])[1];
          g$jscomp$6 = (r$jscomp$57[2] || "").split(".").sort();
          if (p$jscomp$9) {
            c$jscomp$19 = h$jscomp$6.event.special[p$jscomp$9] || {};
            p$jscomp$9 = (o$jscomp$69 ? c$jscomp$19.delegateType : c$jscomp$19.bindType) || p$jscomp$9;
            c$jscomp$19 = h$jscomp$6.event.special[p$jscomp$9] || {};
            f$jscomp$9 = h$jscomp$6.extend({
              type : p$jscomp$9,
              origType : m$jscomp$7,
              data : i$jscomp$86,
              handler : n$jscomp$132,
              guid : n$jscomp$132.guid,
              selector : o$jscomp$69,
              needsContext : o$jscomp$69 && h$jscomp$6.expr.match.needsContext.test(o$jscomp$69),
              namespace : g$jscomp$6.join(".")
            }, u$jscomp$20);
            if (!(d$jscomp$8 = a$jscomp$40[p$jscomp$9])) {
              (d$jscomp$8 = a$jscomp$40[p$jscomp$9] = []).delegateCount = 0;
              if (!(c$jscomp$19.setup && false !== c$jscomp$19.setup.call(t$jscomp$253, i$jscomp$86, g$jscomp$6, l$jscomp$16))) {
                if (t$jscomp$253.addEventListener) {
                  t$jscomp$253.addEventListener(p$jscomp$9, l$jscomp$16, false);
                } else {
                  if (t$jscomp$253.attachEvent) {
                    t$jscomp$253.attachEvent("on" + p$jscomp$9, l$jscomp$16);
                  }
                }
              }
            }
            if (c$jscomp$19.add) {
              c$jscomp$19.add.call(t$jscomp$253, f$jscomp$9);
              if (!f$jscomp$9.handler.guid) {
                f$jscomp$9.handler.guid = n$jscomp$132.guid;
              }
            }
            if (o$jscomp$69) {
              d$jscomp$8.splice(d$jscomp$8.delegateCount++, 0, f$jscomp$9);
            } else {
              d$jscomp$8.push(f$jscomp$9);
            }
            h$jscomp$6.event.global[p$jscomp$9] = true;
          }
        }
        t$jscomp$253 = null;
      }
    },
    remove : function(t$jscomp$255, e$jscomp$181, n$jscomp$133, i$jscomp$87, o$jscomp$70) {
      var r$jscomp$58;
      var a$jscomp$41;
      var s$jscomp$33;
      var u$jscomp$21;
      var c$jscomp$20;
      var l$jscomp$17;
      var f$jscomp$10;
      var d$jscomp$9;
      var p$jscomp$10;
      var g$jscomp$7;
      var m$jscomp$8;
      var v$jscomp$9 = h$jscomp$6.hasData(t$jscomp$255) && h$jscomp$6._data(t$jscomp$255);
      if (v$jscomp$9 && (l$jscomp$17 = v$jscomp$9.events)) {
        c$jscomp$20 = (e$jscomp$181 = (e$jscomp$181 || "").match(D$jscomp$0) || [""]).length;
        for (; c$jscomp$20--;) {
          if (p$jscomp$10 = m$jscomp$8 = (s$jscomp$33 = dt$jscomp$0.exec(e$jscomp$181[c$jscomp$20]) || [])[1], g$jscomp$7 = (s$jscomp$33[2] || "").split(".").sort(), p$jscomp$10) {
            f$jscomp$10 = h$jscomp$6.event.special[p$jscomp$10] || {};
            d$jscomp$9 = l$jscomp$17[p$jscomp$10 = (i$jscomp$87 ? f$jscomp$10.delegateType : f$jscomp$10.bindType) || p$jscomp$10] || [];
            s$jscomp$33 = s$jscomp$33[2] && new RegExp("(^|\\.)" + g$jscomp$7.join("\\.(?:.*\\.|)") + "(\\.|$)");
            u$jscomp$21 = r$jscomp$58 = d$jscomp$9.length;
            for (; r$jscomp$58--;) {
              a$jscomp$41 = d$jscomp$9[r$jscomp$58];
              if (!(!o$jscomp$70 && m$jscomp$8 !== a$jscomp$41.origType || n$jscomp$133 && n$jscomp$133.guid !== a$jscomp$41.guid || s$jscomp$33 && !s$jscomp$33.test(a$jscomp$41.namespace) || i$jscomp$87 && i$jscomp$87 !== a$jscomp$41.selector && ("**" !== i$jscomp$87 || !a$jscomp$41.selector))) {
                d$jscomp$9.splice(r$jscomp$58, 1);
                if (a$jscomp$41.selector) {
                  d$jscomp$9.delegateCount--;
                }
                if (f$jscomp$10.remove) {
                  f$jscomp$10.remove.call(t$jscomp$255, a$jscomp$41);
                }
              }
            }
            if (u$jscomp$21 && !d$jscomp$9.length) {
              if (!(f$jscomp$10.teardown && false !== f$jscomp$10.teardown.call(t$jscomp$255, g$jscomp$7, v$jscomp$9.handle))) {
                h$jscomp$6.removeEvent(t$jscomp$255, p$jscomp$10, v$jscomp$9.handle);
              }
              delete l$jscomp$17[p$jscomp$10];
            }
          } else {
            for (p$jscomp$10 in l$jscomp$17) {
              h$jscomp$6.event.remove(t$jscomp$255, p$jscomp$10 + e$jscomp$181[c$jscomp$20], n$jscomp$133, i$jscomp$87, true);
            }
          }
        }
        if (h$jscomp$6.isEmptyObject(l$jscomp$17)) {
          delete v$jscomp$9.handle;
          h$jscomp$6._removeData(t$jscomp$255, "events");
        }
      }
    },
    trigger : function(e$jscomp$182, n$jscomp$134, o$jscomp$71, r$jscomp$59) {
      var a$jscomp$42;
      var s$jscomp$34;
      var u$jscomp$22;
      var c$jscomp$21;
      var f$jscomp$11;
      var d$jscomp$10;
      var p$jscomp$11;
      var g$jscomp$8 = [o$jscomp$71 || i$jscomp$3];
      var m$jscomp$9 = l$jscomp$0.call(e$jscomp$182, "type") ? e$jscomp$182.type : e$jscomp$182;
      var v$jscomp$10 = l$jscomp$0.call(e$jscomp$182, "namespace") ? e$jscomp$182.namespace.split(".") : [];
      if (u$jscomp$22 = d$jscomp$10 = o$jscomp$71 = o$jscomp$71 || i$jscomp$3, 3 !== o$jscomp$71.nodeType && 8 !== o$jscomp$71.nodeType && !ft$jscomp$0.test(m$jscomp$9 + h$jscomp$6.event.triggered) && (m$jscomp$9.indexOf(".") > -1 && (m$jscomp$9 = (v$jscomp$10 = m$jscomp$9.split(".")).shift(), v$jscomp$10.sort()), s$jscomp$34 = m$jscomp$9.indexOf(":") < 0 && "on" + m$jscomp$9, (e$jscomp$182 = e$jscomp$182[h$jscomp$6.expando] ? e$jscomp$182 : new h$jscomp$6.Event(m$jscomp$9, "object" == typeof e$jscomp$182 && 
      e$jscomp$182)).isTrigger = r$jscomp$59 ? 2 : 3, e$jscomp$182.namespace = v$jscomp$10.join("."), e$jscomp$182.rnamespace = e$jscomp$182.namespace ? new RegExp("(^|\\.)" + v$jscomp$10.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e$jscomp$182.result = void 0, e$jscomp$182.target || (e$jscomp$182.target = o$jscomp$71), n$jscomp$134 = null == n$jscomp$134 ? [e$jscomp$182] : h$jscomp$6.makeArray(n$jscomp$134, [e$jscomp$182]), f$jscomp$11 = h$jscomp$6.event.special[m$jscomp$9] || {}, r$jscomp$59 || 
      !f$jscomp$11.trigger || false !== f$jscomp$11.trigger.apply(o$jscomp$71, n$jscomp$134))) {
        if (!r$jscomp$59 && !f$jscomp$11.noBubble && !h$jscomp$6.isWindow(o$jscomp$71)) {
          c$jscomp$21 = f$jscomp$11.delegateType || m$jscomp$9;
          if (!ft$jscomp$0.test(c$jscomp$21 + m$jscomp$9)) {
            u$jscomp$22 = u$jscomp$22.parentNode;
          }
          for (; u$jscomp$22; u$jscomp$22 = u$jscomp$22.parentNode) {
            g$jscomp$8.push(u$jscomp$22);
            d$jscomp$10 = u$jscomp$22;
          }
          if (d$jscomp$10 === (o$jscomp$71.ownerDocument || i$jscomp$3)) {
            g$jscomp$8.push(d$jscomp$10.defaultView || d$jscomp$10.parentWindow || t$jscomp$2);
          }
        }
        p$jscomp$11 = 0;
        for (; (u$jscomp$22 = g$jscomp$8[p$jscomp$11++]) && !e$jscomp$182.isPropagationStopped();) {
          e$jscomp$182.type = p$jscomp$11 > 1 ? c$jscomp$21 : f$jscomp$11.bindType || m$jscomp$9;
          if (a$jscomp$42 = (h$jscomp$6._data(u$jscomp$22, "events") || {})[e$jscomp$182.type] && h$jscomp$6._data(u$jscomp$22, "handle")) {
            a$jscomp$42.apply(u$jscomp$22, n$jscomp$134);
          }
          if ((a$jscomp$42 = s$jscomp$34 && u$jscomp$22[s$jscomp$34]) && a$jscomp$42.apply && F$jscomp$0(u$jscomp$22)) {
            e$jscomp$182.result = a$jscomp$42.apply(u$jscomp$22, n$jscomp$134);
            if (false === e$jscomp$182.result) {
              e$jscomp$182.preventDefault();
            }
          }
        }
        if (e$jscomp$182.type = m$jscomp$9, !r$jscomp$59 && !e$jscomp$182.isDefaultPrevented() && (!f$jscomp$11._default || false === f$jscomp$11._default.apply(g$jscomp$8.pop(), n$jscomp$134)) && F$jscomp$0(o$jscomp$71) && s$jscomp$34 && o$jscomp$71[m$jscomp$9] && !h$jscomp$6.isWindow(o$jscomp$71)) {
          if (d$jscomp$10 = o$jscomp$71[s$jscomp$34]) {
            o$jscomp$71[s$jscomp$34] = null;
          }
          h$jscomp$6.event.triggered = m$jscomp$9;
          try {
            o$jscomp$71[m$jscomp$9]();
          } catch (t$jscomp$256) {
          }
          h$jscomp$6.event.triggered = void 0;
          if (d$jscomp$10) {
            o$jscomp$71[s$jscomp$34] = d$jscomp$10;
          }
        }
        return e$jscomp$182.result;
      }
    },
    dispatch : function(t$jscomp$257) {
      t$jscomp$257 = h$jscomp$6.event.fix(t$jscomp$257);
      var e$jscomp$183;
      var n$jscomp$135;
      var i$jscomp$88;
      var r$jscomp$60;
      var a$jscomp$43;
      var s$jscomp$35 = [];
      var u$jscomp$23 = o$jscomp$0.call(arguments);
      var c$jscomp$22 = (h$jscomp$6._data(this, "events") || {})[t$jscomp$257.type] || [];
      var l$jscomp$18 = h$jscomp$6.event.special[t$jscomp$257.type] || {};
      if (u$jscomp$23[0] = t$jscomp$257, t$jscomp$257.delegateTarget = this, !l$jscomp$18.preDispatch || false !== l$jscomp$18.preDispatch.call(this, t$jscomp$257)) {
        s$jscomp$35 = h$jscomp$6.event.handlers.call(this, t$jscomp$257, c$jscomp$22);
        e$jscomp$183 = 0;
        for (; (r$jscomp$60 = s$jscomp$35[e$jscomp$183++]) && !t$jscomp$257.isPropagationStopped();) {
          t$jscomp$257.currentTarget = r$jscomp$60.elem;
          n$jscomp$135 = 0;
          for (; (a$jscomp$43 = r$jscomp$60.handlers[n$jscomp$135++]) && !t$jscomp$257.isImmediatePropagationStopped();) {
            if (!(t$jscomp$257.rnamespace && !t$jscomp$257.rnamespace.test(a$jscomp$43.namespace))) {
              t$jscomp$257.handleObj = a$jscomp$43;
              t$jscomp$257.data = a$jscomp$43.data;
              if (void 0 !== (i$jscomp$88 = ((h$jscomp$6.event.special[a$jscomp$43.origType] || {}).handle || a$jscomp$43.handler).apply(r$jscomp$60.elem, u$jscomp$23)) && false === (t$jscomp$257.result = i$jscomp$88)) {
                t$jscomp$257.preventDefault();
                t$jscomp$257.stopPropagation();
              }
            }
          }
        }
        return l$jscomp$18.postDispatch && l$jscomp$18.postDispatch.call(this, t$jscomp$257), t$jscomp$257.result;
      }
    },
    handlers : function(t$jscomp$258, e$jscomp$184) {
      var n$jscomp$136;
      var i$jscomp$89;
      var o$jscomp$72;
      var r$jscomp$61;
      var a$jscomp$44 = [];
      var s$jscomp$36 = e$jscomp$184.delegateCount;
      var u$jscomp$24 = t$jscomp$258.target;
      if (s$jscomp$36 && u$jscomp$24.nodeType && ("click" !== t$jscomp$258.type || isNaN(t$jscomp$258.button) || t$jscomp$258.button < 1)) {
        for (; u$jscomp$24 != this; u$jscomp$24 = u$jscomp$24.parentNode || this) {
          if (1 === u$jscomp$24.nodeType && (true !== u$jscomp$24.disabled || "click" !== t$jscomp$258.type)) {
            i$jscomp$89 = [];
            n$jscomp$136 = 0;
            for (; s$jscomp$36 > n$jscomp$136; n$jscomp$136++) {
              if (void 0 === i$jscomp$89[o$jscomp$72 = (r$jscomp$61 = e$jscomp$184[n$jscomp$136]).selector + " "]) {
                i$jscomp$89[o$jscomp$72] = r$jscomp$61.needsContext ? h$jscomp$6(o$jscomp$72, this).index(u$jscomp$24) > -1 : h$jscomp$6.find(o$jscomp$72, this, null, [u$jscomp$24]).length;
              }
              if (i$jscomp$89[o$jscomp$72]) {
                i$jscomp$89.push(r$jscomp$61);
              }
            }
            if (i$jscomp$89.length) {
              a$jscomp$44.push({
                elem : u$jscomp$24,
                handlers : i$jscomp$89
              });
            }
          }
        }
      }
      return s$jscomp$36 < e$jscomp$184.length && a$jscomp$44.push({
        elem : this,
        handlers : e$jscomp$184.slice(s$jscomp$36)
      }), a$jscomp$44;
    },
    fix : function(t$jscomp$259) {
      if (t$jscomp$259[h$jscomp$6.expando]) {
        return t$jscomp$259;
      }
      var e$jscomp$185;
      var n$jscomp$137;
      var o$jscomp$73;
      var r$jscomp$62 = t$jscomp$259.type;
      var a$jscomp$45 = t$jscomp$259;
      var s$jscomp$37 = this.fixHooks[r$jscomp$62];
      if (!s$jscomp$37) {
        this.fixHooks[r$jscomp$62] = s$jscomp$37 = lt$jscomp$0.test(r$jscomp$62) ? this.mouseHooks : ct$jscomp$0.test(r$jscomp$62) ? this.keyHooks : {};
      }
      o$jscomp$73 = s$jscomp$37.props ? this.props.concat(s$jscomp$37.props) : this.props;
      t$jscomp$259 = new h$jscomp$6.Event(a$jscomp$45);
      e$jscomp$185 = o$jscomp$73.length;
      for (; e$jscomp$185--;) {
        t$jscomp$259[n$jscomp$137 = o$jscomp$73[e$jscomp$185]] = a$jscomp$45[n$jscomp$137];
      }
      return t$jscomp$259.target || (t$jscomp$259.target = a$jscomp$45.srcElement || i$jscomp$3), 3 === t$jscomp$259.target.nodeType && (t$jscomp$259.target = t$jscomp$259.target.parentNode), t$jscomp$259.metaKey = !!t$jscomp$259.metaKey, s$jscomp$37.filter ? s$jscomp$37.filter(t$jscomp$259, a$jscomp$45) : t$jscomp$259;
    },
    props : "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks : {},
    keyHooks : {
      props : "char charCode key keyCode".split(" "),
      filter : function(t$jscomp$260, e$jscomp$186) {
        return null == t$jscomp$260.which && (t$jscomp$260.which = null != e$jscomp$186.charCode ? e$jscomp$186.charCode : e$jscomp$186.keyCode), t$jscomp$260;
      }
    },
    mouseHooks : {
      props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter : function(t$jscomp$261, e$jscomp$187) {
        var n$jscomp$138;
        var o$jscomp$74;
        var r$jscomp$63;
        var a$jscomp$46 = e$jscomp$187.button;
        var s$jscomp$38 = e$jscomp$187.fromElement;
        return null == t$jscomp$261.pageX && null != e$jscomp$187.clientX && (r$jscomp$63 = (o$jscomp$74 = t$jscomp$261.target.ownerDocument || i$jscomp$3).documentElement, n$jscomp$138 = o$jscomp$74.body, t$jscomp$261.pageX = e$jscomp$187.clientX + (r$jscomp$63 && r$jscomp$63.scrollLeft || n$jscomp$138 && n$jscomp$138.scrollLeft || 0) - (r$jscomp$63 && r$jscomp$63.clientLeft || n$jscomp$138 && n$jscomp$138.clientLeft || 0), t$jscomp$261.pageY = e$jscomp$187.clientY + (r$jscomp$63 && r$jscomp$63.scrollTop || 
        n$jscomp$138 && n$jscomp$138.scrollTop || 0) - (r$jscomp$63 && r$jscomp$63.clientTop || n$jscomp$138 && n$jscomp$138.clientTop || 0)), !t$jscomp$261.relatedTarget && s$jscomp$38 && (t$jscomp$261.relatedTarget = s$jscomp$38 === t$jscomp$261.target ? e$jscomp$187.toElement : s$jscomp$38), t$jscomp$261.which || void 0 === a$jscomp$46 || (t$jscomp$261.which = 1 & a$jscomp$46 ? 1 : 2 & a$jscomp$46 ? 3 : 4 & a$jscomp$46 ? 2 : 0), t$jscomp$261;
      }
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          if (this !== gt$jscomp$0() && this.focus) {
            try {
              return this.focus(), false;
            } catch (t$jscomp$262) {
            }
          }
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          return this === gt$jscomp$0() && this.blur ? (this.blur(), false) : void 0;
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          return h$jscomp$6.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), false) : void 0;
        },
        _default : function(t$jscomp$263) {
          return h$jscomp$6.nodeName(t$jscomp$263.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(t$jscomp$264) {
          if (void 0 !== t$jscomp$264.result && t$jscomp$264.originalEvent) {
            t$jscomp$264.originalEvent.returnValue = t$jscomp$264.result;
          }
        }
      }
    },
    simulate : function(t$jscomp$265, e$jscomp$188, n$jscomp$139) {
      var i$jscomp$90 = h$jscomp$6.extend(new h$jscomp$6.Event, n$jscomp$139, {
        type : t$jscomp$265,
        isSimulated : true
      });
      h$jscomp$6.event.trigger(i$jscomp$90, null, e$jscomp$188);
      if (i$jscomp$90.isDefaultPrevented()) {
        n$jscomp$139.preventDefault();
      }
    }
  };
  h$jscomp$6.removeEvent = i$jscomp$3.removeEventListener ? function(t$jscomp$266, e$jscomp$189, n$jscomp$140) {
    if (t$jscomp$266.removeEventListener) {
      t$jscomp$266.removeEventListener(e$jscomp$189, n$jscomp$140);
    }
  } : function(t$jscomp$267, e$jscomp$190, n$jscomp$141) {
    var i$jscomp$91 = "on" + e$jscomp$190;
    if (t$jscomp$267.detachEvent) {
      if (void 0 === t$jscomp$267[i$jscomp$91]) {
        t$jscomp$267[i$jscomp$91] = null;
      }
      t$jscomp$267.detachEvent(i$jscomp$91, n$jscomp$141);
    }
  };
  h$jscomp$6.Event = function(t$jscomp$268, e$jscomp$191) {
    return this instanceof h$jscomp$6.Event ? (t$jscomp$268 && t$jscomp$268.type ? (this.originalEvent = t$jscomp$268, this.type = t$jscomp$268.type, this.isDefaultPrevented = t$jscomp$268.defaultPrevented || void 0 === t$jscomp$268.defaultPrevented && false === t$jscomp$268.returnValue ? ht$jscomp$0 : pt$jscomp$0) : this.type = t$jscomp$268, e$jscomp$191 && h$jscomp$6.extend(this, e$jscomp$191), this.timeStamp = t$jscomp$268 && t$jscomp$268.timeStamp || h$jscomp$6.now(), void(this[h$jscomp$6.expando] = 
    true)) : new h$jscomp$6.Event(t$jscomp$268, e$jscomp$191);
  };
  h$jscomp$6.Event.prototype = {
    constructor : h$jscomp$6.Event,
    isDefaultPrevented : pt$jscomp$0,
    isPropagationStopped : pt$jscomp$0,
    isImmediatePropagationStopped : pt$jscomp$0,
    preventDefault : function() {
      var t$jscomp$269 = this.originalEvent;
      this.isDefaultPrevented = ht$jscomp$0;
      if (t$jscomp$269) {
        if (t$jscomp$269.preventDefault) {
          t$jscomp$269.preventDefault();
        } else {
          t$jscomp$269.returnValue = false;
        }
      }
    },
    stopPropagation : function() {
      var t$jscomp$270 = this.originalEvent;
      this.isPropagationStopped = ht$jscomp$0;
      if (t$jscomp$270 && !this.isSimulated) {
        if (t$jscomp$270.stopPropagation) {
          t$jscomp$270.stopPropagation();
        }
        t$jscomp$270.cancelBubble = true;
      }
    },
    stopImmediatePropagation : function() {
      var t$jscomp$271 = this.originalEvent;
      this.isImmediatePropagationStopped = ht$jscomp$0;
      if (t$jscomp$271 && t$jscomp$271.stopImmediatePropagation) {
        t$jscomp$271.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  h$jscomp$6.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(t$jscomp$272, e$jscomp$192) {
    h$jscomp$6.event.special[t$jscomp$272] = {
      delegateType : e$jscomp$192,
      bindType : e$jscomp$192,
      handle : function(t$jscomp$273) {
        var n$jscomp$142;
        var i$jscomp$92 = t$jscomp$273.relatedTarget;
        var o$jscomp$75 = t$jscomp$273.handleObj;
        return i$jscomp$92 && (i$jscomp$92 === this || h$jscomp$6.contains(this, i$jscomp$92)) || (t$jscomp$273.type = o$jscomp$75.origType, n$jscomp$142 = o$jscomp$75.handler.apply(this, arguments), t$jscomp$273.type = e$jscomp$192), n$jscomp$142;
      }
    };
  });
  if (!f$jscomp$1.submit) {
    h$jscomp$6.event.special.submit = {
      setup : function() {
        return !h$jscomp$6.nodeName(this, "form") && void h$jscomp$6.event.add(this, "click._submit keypress._submit", function(t$jscomp$274) {
          var e$jscomp$193 = t$jscomp$274.target;
          var n$jscomp$143 = h$jscomp$6.nodeName(e$jscomp$193, "input") || h$jscomp$6.nodeName(e$jscomp$193, "button") ? h$jscomp$6.prop(e$jscomp$193, "form") : void 0;
          if (n$jscomp$143 && !h$jscomp$6._data(n$jscomp$143, "submit")) {
            h$jscomp$6.event.add(n$jscomp$143, "submit._submit", function(t$jscomp$275) {
              t$jscomp$275._submitBubble = true;
            });
            h$jscomp$6._data(n$jscomp$143, "submit", true);
          }
        });
      },
      postDispatch : function(t$jscomp$276) {
        if (t$jscomp$276._submitBubble) {
          delete t$jscomp$276._submitBubble;
          if (this.parentNode && !t$jscomp$276.isTrigger) {
            h$jscomp$6.event.simulate("submit", this.parentNode, t$jscomp$276);
          }
        }
      },
      teardown : function() {
        return !h$jscomp$6.nodeName(this, "form") && void h$jscomp$6.event.remove(this, "._submit");
      }
    };
  }
  if (!f$jscomp$1.change) {
    h$jscomp$6.event.special.change = {
      setup : function() {
        return ut$jscomp$0.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (h$jscomp$6.event.add(this, "propertychange._change", function(t$jscomp$277) {
          if ("checked" === t$jscomp$277.originalEvent.propertyName) {
            this._justChanged = true;
          }
        }), h$jscomp$6.event.add(this, "click._change", function(t$jscomp$278) {
          if (this._justChanged && !t$jscomp$278.isTrigger) {
            this._justChanged = false;
          }
          h$jscomp$6.event.simulate("change", this, t$jscomp$278);
        })), false) : void h$jscomp$6.event.add(this, "beforeactivate._change", function(t$jscomp$279) {
          var e$jscomp$194 = t$jscomp$279.target;
          if (ut$jscomp$0.test(e$jscomp$194.nodeName) && !h$jscomp$6._data(e$jscomp$194, "change")) {
            h$jscomp$6.event.add(e$jscomp$194, "change._change", function(t$jscomp$280) {
              if (!(!this.parentNode || t$jscomp$280.isSimulated || t$jscomp$280.isTrigger)) {
                h$jscomp$6.event.simulate("change", this.parentNode, t$jscomp$280);
              }
            });
            h$jscomp$6._data(e$jscomp$194, "change", true);
          }
        });
      },
      handle : function(t$jscomp$281) {
        var e$jscomp$195 = t$jscomp$281.target;
        return this !== e$jscomp$195 || t$jscomp$281.isSimulated || t$jscomp$281.isTrigger || "radio" !== e$jscomp$195.type && "checkbox" !== e$jscomp$195.type ? t$jscomp$281.handleObj.handler.apply(this, arguments) : void 0;
      },
      teardown : function() {
        return h$jscomp$6.event.remove(this, "._change"), !ut$jscomp$0.test(this.nodeName);
      }
    };
  }
  if (!f$jscomp$1.focusin) {
    h$jscomp$6.each({
      focus : "focusin",
      blur : "focusout"
    }, function(t$jscomp$282, e$jscomp$196) {
      var n$jscomp$144 = function(t$jscomp$283) {
        h$jscomp$6.event.simulate(e$jscomp$196, t$jscomp$283.target, h$jscomp$6.event.fix(t$jscomp$283));
      };
      h$jscomp$6.event.special[e$jscomp$196] = {
        setup : function() {
          var i$jscomp$93 = this.ownerDocument || this;
          var o$jscomp$76 = h$jscomp$6._data(i$jscomp$93, e$jscomp$196);
          if (!o$jscomp$76) {
            i$jscomp$93.addEventListener(t$jscomp$282, n$jscomp$144, true);
          }
          h$jscomp$6._data(i$jscomp$93, e$jscomp$196, (o$jscomp$76 || 0) + 1);
        },
        teardown : function() {
          var i$jscomp$94 = this.ownerDocument || this;
          var o$jscomp$77 = h$jscomp$6._data(i$jscomp$94, e$jscomp$196) - 1;
          if (o$jscomp$77) {
            h$jscomp$6._data(i$jscomp$94, e$jscomp$196, o$jscomp$77);
          } else {
            i$jscomp$94.removeEventListener(t$jscomp$282, n$jscomp$144, true);
            h$jscomp$6._removeData(i$jscomp$94, e$jscomp$196);
          }
        }
      };
    });
  }
  h$jscomp$6.fn.extend({
    on : function(t$jscomp$284, e$jscomp$197, n$jscomp$145, i$jscomp$95) {
      return mt$jscomp$0(this, t$jscomp$284, e$jscomp$197, n$jscomp$145, i$jscomp$95);
    },
    one : function(t$jscomp$285, e$jscomp$198, n$jscomp$146, i$jscomp$96) {
      return mt$jscomp$0(this, t$jscomp$285, e$jscomp$198, n$jscomp$146, i$jscomp$96, 1);
    },
    off : function(t$jscomp$286, e$jscomp$199, n$jscomp$147) {
      var i$jscomp$97;
      var o$jscomp$78;
      if (t$jscomp$286 && t$jscomp$286.preventDefault && t$jscomp$286.handleObj) {
        return i$jscomp$97 = t$jscomp$286.handleObj, h$jscomp$6(t$jscomp$286.delegateTarget).off(i$jscomp$97.namespace ? i$jscomp$97.origType + "." + i$jscomp$97.namespace : i$jscomp$97.origType, i$jscomp$97.selector, i$jscomp$97.handler), this;
      }
      if ("object" == typeof t$jscomp$286) {
        for (o$jscomp$78 in t$jscomp$286) {
          this.off(o$jscomp$78, e$jscomp$199, t$jscomp$286[o$jscomp$78]);
        }
        return this;
      }
      return false !== e$jscomp$199 && "function" != typeof e$jscomp$199 || (n$jscomp$147 = e$jscomp$199, e$jscomp$199 = void 0), false === n$jscomp$147 && (n$jscomp$147 = pt$jscomp$0), this.each(function() {
        h$jscomp$6.event.remove(this, t$jscomp$286, n$jscomp$147, e$jscomp$199);
      });
    },
    trigger : function(t$jscomp$287, e$jscomp$200) {
      return this.each(function() {
        h$jscomp$6.event.trigger(t$jscomp$287, e$jscomp$200, this);
      });
    },
    triggerHandler : function(t$jscomp$288, e$jscomp$201) {
      var n$jscomp$148 = this[0];
      return n$jscomp$148 ? h$jscomp$6.event.trigger(t$jscomp$288, e$jscomp$201, n$jscomp$148, true) : void 0;
    }
  });
  var vt$jscomp$0 = / jQuery\d+="(?:null|\d+)"/g;
  var yt$jscomp$0 = new RegExp("<(?:" + Z$jscomp$0 + ")[\\s/>]", "i");
  var xt$jscomp$0 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
  var bt$jscomp$0 = /<script|<style|<link/i;
  var wt$jscomp$0 = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var Et$jscomp$0 = /^true\/(.*)/;
  var Tt$jscomp$0 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  var At$jscomp$0 = tt$jscomp$0(i$jscomp$3).appendChild(i$jscomp$3.createElement("div"));
  h$jscomp$6.extend({
    htmlPrefilter : function(t$jscomp$289) {
      return t$jscomp$289.replace(xt$jscomp$0, "<$1></$2>");
    },
    clone : function(t$jscomp$290, e$jscomp$202, n$jscomp$149) {
      var i$jscomp$98;
      var o$jscomp$79;
      var r$jscomp$64;
      var a$jscomp$47;
      var s$jscomp$39;
      var u$jscomp$25 = h$jscomp$6.contains(t$jscomp$290.ownerDocument, t$jscomp$290);
      if (f$jscomp$1.html5Clone || h$jscomp$6.isXMLDoc(t$jscomp$290) || !yt$jscomp$0.test("<" + t$jscomp$290.nodeName + ">") ? r$jscomp$64 = t$jscomp$290.cloneNode(true) : (At$jscomp$0.innerHTML = t$jscomp$290.outerHTML, At$jscomp$0.removeChild(r$jscomp$64 = At$jscomp$0.firstChild)), !(f$jscomp$1.noCloneEvent && f$jscomp$1.noCloneChecked || 1 !== t$jscomp$290.nodeType && 11 !== t$jscomp$290.nodeType || h$jscomp$6.isXMLDoc(t$jscomp$290))) {
        i$jscomp$98 = nt$jscomp$0(r$jscomp$64);
        s$jscomp$39 = nt$jscomp$0(t$jscomp$290);
        a$jscomp$47 = 0;
        for (; null != (o$jscomp$79 = s$jscomp$39[a$jscomp$47]); ++a$jscomp$47) {
          if (i$jscomp$98[a$jscomp$47]) {
            Mt$jscomp$0(o$jscomp$79, i$jscomp$98[a$jscomp$47]);
          }
        }
      }
      if (e$jscomp$202) {
        if (n$jscomp$149) {
          s$jscomp$39 = s$jscomp$39 || nt$jscomp$0(t$jscomp$290);
          i$jscomp$98 = i$jscomp$98 || nt$jscomp$0(r$jscomp$64);
          a$jscomp$47 = 0;
          for (; null != (o$jscomp$79 = s$jscomp$39[a$jscomp$47]); a$jscomp$47++) {
            Nt$jscomp$0(o$jscomp$79, i$jscomp$98[a$jscomp$47]);
          }
        } else {
          Nt$jscomp$0(t$jscomp$290, r$jscomp$64);
        }
      }
      return (i$jscomp$98 = nt$jscomp$0(r$jscomp$64, "script")).length > 0 && it$jscomp$0(i$jscomp$98, !u$jscomp$25 && nt$jscomp$0(t$jscomp$290, "script")), i$jscomp$98 = s$jscomp$39 = o$jscomp$79 = null, r$jscomp$64;
    },
    cleanData : function(t$jscomp$291, e$jscomp$203) {
      var i$jscomp$99;
      var o$jscomp$80;
      var r$jscomp$65;
      var a$jscomp$48;
      var s$jscomp$40 = 0;
      var u$jscomp$26 = h$jscomp$6.expando;
      var c$jscomp$23 = h$jscomp$6.cache;
      var l$jscomp$19 = f$jscomp$1.attributes;
      var d$jscomp$11 = h$jscomp$6.event.special;
      for (; null != (i$jscomp$99 = t$jscomp$291[s$jscomp$40]); s$jscomp$40++) {
        if ((e$jscomp$203 || F$jscomp$0(i$jscomp$99)) && (a$jscomp$48 = (r$jscomp$65 = i$jscomp$99[u$jscomp$26]) && c$jscomp$23[r$jscomp$65])) {
          if (a$jscomp$48.events) {
            for (o$jscomp$80 in a$jscomp$48.events) {
              if (d$jscomp$11[o$jscomp$80]) {
                h$jscomp$6.event.remove(i$jscomp$99, o$jscomp$80);
              } else {
                h$jscomp$6.removeEvent(i$jscomp$99, o$jscomp$80, a$jscomp$48.handle);
              }
            }
          }
          if (c$jscomp$23[r$jscomp$65]) {
            delete c$jscomp$23[r$jscomp$65];
            if (l$jscomp$19 || void 0 === i$jscomp$99.removeAttribute) {
              i$jscomp$99[u$jscomp$26] = void 0;
            } else {
              i$jscomp$99.removeAttribute(u$jscomp$26);
            }
            n$jscomp$3.push(r$jscomp$65);
          }
        }
      }
    }
  });
  h$jscomp$6.fn.extend({
    domManip : Rt$jscomp$0,
    detach : function(t$jscomp$292) {
      return kt$jscomp$0(this, t$jscomp$292, true);
    },
    remove : function(t$jscomp$293) {
      return kt$jscomp$0(this, t$jscomp$293);
    },
    text : function(t$jscomp$294) {
      return V$jscomp$0(this, function(t$jscomp$295) {
        return void 0 === t$jscomp$295 ? h$jscomp$6.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i$jscomp$3).createTextNode(t$jscomp$295));
      }, null, t$jscomp$294, arguments.length);
    },
    append : function() {
      return Rt$jscomp$0(this, arguments, function(t$jscomp$296) {
        if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
          Ct$jscomp$0(this, t$jscomp$296).appendChild(t$jscomp$296);
        }
      });
    },
    prepend : function() {
      return Rt$jscomp$0(this, arguments, function(t$jscomp$297) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e$jscomp$204 = Ct$jscomp$0(this, t$jscomp$297);
          e$jscomp$204.insertBefore(t$jscomp$297, e$jscomp$204.firstChild);
        }
      });
    },
    before : function() {
      return Rt$jscomp$0(this, arguments, function(t$jscomp$298) {
        if (this.parentNode) {
          this.parentNode.insertBefore(t$jscomp$298, this);
        }
      });
    },
    after : function() {
      return Rt$jscomp$0(this, arguments, function(t$jscomp$299) {
        if (this.parentNode) {
          this.parentNode.insertBefore(t$jscomp$299, this.nextSibling);
        }
      });
    },
    empty : function() {
      var t$jscomp$300;
      var e$jscomp$205 = 0;
      for (; null != (t$jscomp$300 = this[e$jscomp$205]); e$jscomp$205++) {
        if (1 === t$jscomp$300.nodeType) {
          h$jscomp$6.cleanData(nt$jscomp$0(t$jscomp$300, false));
        }
        for (; t$jscomp$300.firstChild;) {
          t$jscomp$300.removeChild(t$jscomp$300.firstChild);
        }
        if (t$jscomp$300.options && h$jscomp$6.nodeName(t$jscomp$300, "select")) {
          t$jscomp$300.options.length = 0;
        }
      }
      return this;
    },
    clone : function(t$jscomp$301, e$jscomp$206) {
      return t$jscomp$301 = null != t$jscomp$301 && t$jscomp$301, e$jscomp$206 = null == e$jscomp$206 ? t$jscomp$301 : e$jscomp$206, this.map(function() {
        return h$jscomp$6.clone(this, t$jscomp$301, e$jscomp$206);
      });
    },
    html : function(t$jscomp$302) {
      return V$jscomp$0(this, function(t$jscomp$303) {
        var e$jscomp$207 = this[0] || {};
        var n$jscomp$150 = 0;
        var i$jscomp$100 = this.length;
        if (void 0 === t$jscomp$303) {
          return 1 === e$jscomp$207.nodeType ? e$jscomp$207.innerHTML.replace(vt$jscomp$0, "") : void 0;
        }
        if ("string" == typeof t$jscomp$303 && !bt$jscomp$0.test(t$jscomp$303) && (f$jscomp$1.htmlSerialize || !yt$jscomp$0.test(t$jscomp$303)) && (f$jscomp$1.leadingWhitespace || !Q$jscomp$0.test(t$jscomp$303)) && !et$jscomp$0[(K$jscomp$0.exec(t$jscomp$303) || ["", ""])[1].toLowerCase()]) {
          t$jscomp$303 = h$jscomp$6.htmlPrefilter(t$jscomp$303);
          try {
            for (; i$jscomp$100 > n$jscomp$150; n$jscomp$150++) {
              if (1 === (e$jscomp$207 = this[n$jscomp$150] || {}).nodeType) {
                h$jscomp$6.cleanData(nt$jscomp$0(e$jscomp$207, false));
                e$jscomp$207.innerHTML = t$jscomp$303;
              }
            }
            e$jscomp$207 = 0;
          } catch (t$jscomp$304) {
          }
        }
        if (e$jscomp$207) {
          this.empty().append(t$jscomp$303);
        }
      }, null, t$jscomp$302, arguments.length);
    },
    replaceWith : function() {
      var t$jscomp$305 = [];
      return Rt$jscomp$0(this, arguments, function(e$jscomp$208) {
        var n$jscomp$151 = this.parentNode;
        if (h$jscomp$6.inArray(this, t$jscomp$305) < 0) {
          h$jscomp$6.cleanData(nt$jscomp$0(this));
          if (n$jscomp$151) {
            n$jscomp$151.replaceChild(e$jscomp$208, this);
          }
        }
      }, t$jscomp$305);
    }
  });
  h$jscomp$6.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(t$jscomp$306, e$jscomp$209) {
    h$jscomp$6.fn[t$jscomp$306] = function(t$jscomp$307) {
      var n$jscomp$152;
      var i$jscomp$101 = 0;
      var o$jscomp$81 = [];
      var r$jscomp$66 = h$jscomp$6(t$jscomp$307);
      var s$jscomp$41 = r$jscomp$66.length - 1;
      for (; s$jscomp$41 >= i$jscomp$101; i$jscomp$101++) {
        n$jscomp$152 = i$jscomp$101 === s$jscomp$41 ? this : this.clone(true);
        h$jscomp$6(r$jscomp$66[i$jscomp$101])[e$jscomp$209](n$jscomp$152);
        a$jscomp$0.apply(o$jscomp$81, n$jscomp$152.get());
      }
      return this.pushStack(o$jscomp$81);
    };
  });
  var Lt$jscomp$0;
  var Dt$jscomp$0 = {
    HTML : "block",
    BODY : "block"
  };
  var Ft$jscomp$0 = /^margin/;
  var Bt$jscomp$0 = new RegExp("^(" + q$jscomp$0 + ")(?!px)[a-z%]+$", "i");
  var Ot$jscomp$0 = function(t$jscomp$308, e$jscomp$210, n$jscomp$153, i$jscomp$102) {
    var o$jscomp$82;
    var r$jscomp$67;
    var a$jscomp$49 = {};
    for (r$jscomp$67 in e$jscomp$210) {
      a$jscomp$49[r$jscomp$67] = t$jscomp$308.style[r$jscomp$67];
      t$jscomp$308.style[r$jscomp$67] = e$jscomp$210[r$jscomp$67];
    }
    for (r$jscomp$67 in o$jscomp$82 = n$jscomp$153.apply(t$jscomp$308, i$jscomp$102 || []), e$jscomp$210) {
      t$jscomp$308.style[r$jscomp$67] = a$jscomp$49[r$jscomp$67];
    }
    return o$jscomp$82;
  };
  var Pt$jscomp$0 = i$jscomp$3.documentElement;
  !function() {
    var e$jscomp$211;
    var n$jscomp$154;
    var o$jscomp$83;
    var r$jscomp$68;
    var a$jscomp$50;
    var s$jscomp$42;
    var u$jscomp$27 = i$jscomp$3.createElement("div");
    var c$jscomp$24 = i$jscomp$3.createElement("div");
    if (c$jscomp$24.style) {
      var l$jscomp$20 = function() {
        var l$jscomp$21;
        var f$jscomp$12;
        var d$jscomp$12 = i$jscomp$3.documentElement;
        d$jscomp$12.appendChild(u$jscomp$27);
        c$jscomp$24.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
        e$jscomp$211 = o$jscomp$83 = s$jscomp$42 = false;
        n$jscomp$154 = a$jscomp$50 = true;
        if (t$jscomp$2.getComputedStyle) {
          f$jscomp$12 = t$jscomp$2.getComputedStyle(c$jscomp$24);
          e$jscomp$211 = "1%" !== (f$jscomp$12 || {}).top;
          s$jscomp$42 = "2px" === (f$jscomp$12 || {}).marginLeft;
          o$jscomp$83 = "4px" === (f$jscomp$12 || {
            width : "4px"
          }).width;
          c$jscomp$24.style.marginRight = "50%";
          n$jscomp$154 = "4px" === (f$jscomp$12 || {
            marginRight : "4px"
          }).marginRight;
          (l$jscomp$21 = c$jscomp$24.appendChild(i$jscomp$3.createElement("div"))).style.cssText = c$jscomp$24.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
          l$jscomp$21.style.marginRight = l$jscomp$21.style.width = "0";
          c$jscomp$24.style.width = "1px";
          a$jscomp$50 = !parseFloat((t$jscomp$2.getComputedStyle(l$jscomp$21) || {}).marginRight);
          c$jscomp$24.removeChild(l$jscomp$21);
        }
        c$jscomp$24.style.display = "none";
        if (r$jscomp$68 = 0 === c$jscomp$24.getClientRects().length) {
          c$jscomp$24.style.display = "";
          c$jscomp$24.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
          c$jscomp$24.childNodes[0].style.borderCollapse = "separate";
          (l$jscomp$21 = c$jscomp$24.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none";
          if (r$jscomp$68 = 0 === l$jscomp$21[0].offsetHeight) {
            l$jscomp$21[0].style.display = "";
            l$jscomp$21[1].style.display = "none";
            r$jscomp$68 = 0 === l$jscomp$21[0].offsetHeight;
          }
        }
        d$jscomp$12.removeChild(u$jscomp$27);
      };
      c$jscomp$24.style.cssText = "float:left;opacity:.5";
      f$jscomp$1.opacity = "0.5" === c$jscomp$24.style.opacity;
      f$jscomp$1.cssFloat = !!c$jscomp$24.style.cssFloat;
      c$jscomp$24.style.backgroundClip = "content-box";
      c$jscomp$24.cloneNode(true).style.backgroundClip = "";
      f$jscomp$1.clearCloneStyle = "content-box" === c$jscomp$24.style.backgroundClip;
      (u$jscomp$27 = i$jscomp$3.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
      c$jscomp$24.innerHTML = "";
      u$jscomp$27.appendChild(c$jscomp$24);
      f$jscomp$1.boxSizing = "" === c$jscomp$24.style.boxSizing || "" === c$jscomp$24.style.MozBoxSizing || "" === c$jscomp$24.style.WebkitBoxSizing;
      h$jscomp$6.extend(f$jscomp$1, {
        reliableHiddenOffsets : function() {
          return null == e$jscomp$211 && l$jscomp$20(), r$jscomp$68;
        },
        boxSizingReliable : function() {
          return null == e$jscomp$211 && l$jscomp$20(), o$jscomp$83;
        },
        pixelMarginRight : function() {
          return null == e$jscomp$211 && l$jscomp$20(), n$jscomp$154;
        },
        pixelPosition : function() {
          return null == e$jscomp$211 && l$jscomp$20(), e$jscomp$211;
        },
        reliableMarginRight : function() {
          return null == e$jscomp$211 && l$jscomp$20(), a$jscomp$50;
        },
        reliableMarginLeft : function() {
          return null == e$jscomp$211 && l$jscomp$20(), s$jscomp$42;
        }
      });
    }
  }();
  var zt$jscomp$0;
  var jt$jscomp$0;
  var Ht$jscomp$0 = /^(top|right|bottom|left)$/;
  if (t$jscomp$2.getComputedStyle) {
    zt$jscomp$0 = function(e$jscomp$212) {
      var n$jscomp$155 = e$jscomp$212.ownerDocument.defaultView;
      return n$jscomp$155 && n$jscomp$155.opener || (n$jscomp$155 = t$jscomp$2), n$jscomp$155.getComputedStyle(e$jscomp$212);
    };
    jt$jscomp$0 = function(t$jscomp$309, e$jscomp$213, n$jscomp$156) {
      var i$jscomp$103;
      var o$jscomp$84;
      var r$jscomp$69;
      var a$jscomp$51;
      var s$jscomp$43 = t$jscomp$309.style;
      return "" !== (a$jscomp$51 = (n$jscomp$156 = n$jscomp$156 || zt$jscomp$0(t$jscomp$309)) ? n$jscomp$156.getPropertyValue(e$jscomp$213) || n$jscomp$156[e$jscomp$213] : void 0) && void 0 !== a$jscomp$51 || h$jscomp$6.contains(t$jscomp$309.ownerDocument, t$jscomp$309) || (a$jscomp$51 = h$jscomp$6.style(t$jscomp$309, e$jscomp$213)), n$jscomp$156 && !f$jscomp$1.pixelMarginRight() && Bt$jscomp$0.test(a$jscomp$51) && Ft$jscomp$0.test(e$jscomp$213) && (i$jscomp$103 = s$jscomp$43.width, o$jscomp$84 = 
      s$jscomp$43.minWidth, r$jscomp$69 = s$jscomp$43.maxWidth, s$jscomp$43.minWidth = s$jscomp$43.maxWidth = s$jscomp$43.width = a$jscomp$51, a$jscomp$51 = n$jscomp$156.width, s$jscomp$43.width = i$jscomp$103, s$jscomp$43.minWidth = o$jscomp$84, s$jscomp$43.maxWidth = r$jscomp$69), void 0 === a$jscomp$51 ? a$jscomp$51 : a$jscomp$51 + "";
    };
  } else {
    if (Pt$jscomp$0.currentStyle) {
      zt$jscomp$0 = function(t$jscomp$310) {
        return t$jscomp$310.currentStyle;
      };
      jt$jscomp$0 = function(t$jscomp$311, e$jscomp$214, n$jscomp$157) {
        var i$jscomp$104;
        var o$jscomp$85;
        var r$jscomp$70;
        var a$jscomp$52;
        var s$jscomp$44 = t$jscomp$311.style;
        return null == (a$jscomp$52 = (n$jscomp$157 = n$jscomp$157 || zt$jscomp$0(t$jscomp$311)) ? n$jscomp$157[e$jscomp$214] : void 0) && s$jscomp$44 && s$jscomp$44[e$jscomp$214] && (a$jscomp$52 = s$jscomp$44[e$jscomp$214]), Bt$jscomp$0.test(a$jscomp$52) && !Ht$jscomp$0.test(e$jscomp$214) && (i$jscomp$104 = s$jscomp$44.left, (r$jscomp$70 = (o$jscomp$85 = t$jscomp$311.runtimeStyle) && o$jscomp$85.left) && (o$jscomp$85.left = t$jscomp$311.currentStyle.left), s$jscomp$44.left = "fontSize" === e$jscomp$214 ? 
        "1em" : a$jscomp$52, a$jscomp$52 = s$jscomp$44.pixelLeft + "px", s$jscomp$44.left = i$jscomp$104, r$jscomp$70 && (o$jscomp$85.left = r$jscomp$70)), void 0 === a$jscomp$52 ? a$jscomp$52 : a$jscomp$52 + "" || "auto";
      };
    }
  }
  var Xt$jscomp$0 = /alpha\([^)]*\)/i;
  var $t$jscomp$0 = /opacity\s*=\s*([^)]*)/i;
  var Wt$jscomp$0 = /^(none|table(?!-c[ea]).+)/;
  var Gt$jscomp$0 = new RegExp("^(" + q$jscomp$0 + ")(.*)$", "i");
  var Vt$jscomp$0 = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var Yt$jscomp$0 = {
    letterSpacing : "0",
    fontWeight : "400"
  };
  var Kt$jscomp$0 = ["Webkit", "O", "Moz", "ms"];
  var Jt$jscomp$0 = i$jscomp$3.createElement("div").style;
  h$jscomp$6.extend({
    cssHooks : {
      opacity : {
        get : function(t$jscomp$312, e$jscomp$215) {
          if (e$jscomp$215) {
            var n$jscomp$158 = jt$jscomp$0(t$jscomp$312, "opacity");
            return "" === n$jscomp$158 ? "1" : n$jscomp$158;
          }
        }
      }
    },
    cssNumber : {
      animationIterationCount : true,
      columnCount : true,
      fillOpacity : true,
      flexGrow : true,
      flexShrink : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      order : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {
      float : f$jscomp$1.cssFloat ? "cssFloat" : "styleFloat"
    },
    style : function(t$jscomp$313, e$jscomp$216, n$jscomp$159, i$jscomp$105) {
      if (t$jscomp$313 && 3 !== t$jscomp$313.nodeType && 8 !== t$jscomp$313.nodeType && t$jscomp$313.style) {
        var o$jscomp$86;
        var r$jscomp$71;
        var a$jscomp$53;
        var s$jscomp$45 = h$jscomp$6.camelCase(e$jscomp$216);
        var u$jscomp$28 = t$jscomp$313.style;
        if (e$jscomp$216 = h$jscomp$6.cssProps[s$jscomp$45] || (h$jscomp$6.cssProps[s$jscomp$45] = Qt$jscomp$0(s$jscomp$45) || s$jscomp$45), a$jscomp$53 = h$jscomp$6.cssHooks[e$jscomp$216] || h$jscomp$6.cssHooks[s$jscomp$45], void 0 === n$jscomp$159) {
          return a$jscomp$53 && "get" in a$jscomp$53 && void 0 !== (o$jscomp$86 = a$jscomp$53.get(t$jscomp$313, false, i$jscomp$105)) ? o$jscomp$86 : u$jscomp$28[e$jscomp$216];
        }
        if ("string" === (r$jscomp$71 = typeof n$jscomp$159) && (o$jscomp$86 = X$jscomp$0.exec(n$jscomp$159)) && o$jscomp$86[1] && (n$jscomp$159 = G$jscomp$0(t$jscomp$313, e$jscomp$216, o$jscomp$86), r$jscomp$71 = "number"), null != n$jscomp$159 && n$jscomp$159 == n$jscomp$159 && ("number" === r$jscomp$71 && (n$jscomp$159 = n$jscomp$159 + (o$jscomp$86 && o$jscomp$86[3] || (h$jscomp$6.cssNumber[s$jscomp$45] ? "" : "px"))), f$jscomp$1.clearCloneStyle || "" !== n$jscomp$159 || 0 !== e$jscomp$216.indexOf("background") || 
        (u$jscomp$28[e$jscomp$216] = "inherit"), !(a$jscomp$53 && "set" in a$jscomp$53 && void 0 === (n$jscomp$159 = a$jscomp$53.set(t$jscomp$313, n$jscomp$159, i$jscomp$105))))) {
          try {
            u$jscomp$28[e$jscomp$216] = n$jscomp$159;
          } catch (t$jscomp$314) {
          }
        }
      }
    },
    css : function(t$jscomp$315, e$jscomp$217, n$jscomp$160, i$jscomp$106) {
      var o$jscomp$87;
      var r$jscomp$72;
      var a$jscomp$54;
      var s$jscomp$46 = h$jscomp$6.camelCase(e$jscomp$217);
      return e$jscomp$217 = h$jscomp$6.cssProps[s$jscomp$46] || (h$jscomp$6.cssProps[s$jscomp$46] = Qt$jscomp$0(s$jscomp$46) || s$jscomp$46), (a$jscomp$54 = h$jscomp$6.cssHooks[e$jscomp$217] || h$jscomp$6.cssHooks[s$jscomp$46]) && "get" in a$jscomp$54 && (r$jscomp$72 = a$jscomp$54.get(t$jscomp$315, true, n$jscomp$160)), void 0 === r$jscomp$72 && (r$jscomp$72 = jt$jscomp$0(t$jscomp$315, e$jscomp$217, i$jscomp$106)), "normal" === r$jscomp$72 && e$jscomp$217 in Yt$jscomp$0 && (r$jscomp$72 = Yt$jscomp$0[e$jscomp$217]), 
      "" === n$jscomp$160 || n$jscomp$160 ? (o$jscomp$87 = parseFloat(r$jscomp$72), true === n$jscomp$160 || isFinite(o$jscomp$87) ? o$jscomp$87 || 0 : r$jscomp$72) : r$jscomp$72;
    }
  });
  h$jscomp$6.each(["height", "width"], function(t$jscomp$316, e$jscomp$218) {
    h$jscomp$6.cssHooks[e$jscomp$218] = {
      get : function(t$jscomp$317, n$jscomp$161, i$jscomp$107) {
        return n$jscomp$161 ? Wt$jscomp$0.test(h$jscomp$6.css(t$jscomp$317, "display")) && 0 === t$jscomp$317.offsetWidth ? Ot$jscomp$0(t$jscomp$317, Vt$jscomp$0, function() {
          return ne$jscomp$0(t$jscomp$317, e$jscomp$218, i$jscomp$107);
        }) : ne$jscomp$0(t$jscomp$317, e$jscomp$218, i$jscomp$107) : void 0;
      },
      set : function(t$jscomp$318, n$jscomp$162, i$jscomp$108) {
        var o$jscomp$88 = i$jscomp$108 && zt$jscomp$0(t$jscomp$318);
        return te$jscomp$0(0, n$jscomp$162, i$jscomp$108 ? ee$jscomp$0(t$jscomp$318, e$jscomp$218, i$jscomp$108, f$jscomp$1.boxSizing && "border-box" === h$jscomp$6.css(t$jscomp$318, "boxSizing", false, o$jscomp$88), o$jscomp$88) : 0);
      }
    };
  });
  if (!f$jscomp$1.opacity) {
    h$jscomp$6.cssHooks.opacity = {
      get : function(t$jscomp$319, e$jscomp$219) {
        return $t$jscomp$0.test((e$jscomp$219 && t$jscomp$319.currentStyle ? t$jscomp$319.currentStyle.filter : t$jscomp$319.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e$jscomp$219 ? "1" : "";
      },
      set : function(t$jscomp$320, e$jscomp$220) {
        var n$jscomp$163 = t$jscomp$320.style;
        var i$jscomp$109 = t$jscomp$320.currentStyle;
        var o$jscomp$89 = h$jscomp$6.isNumeric(e$jscomp$220) ? "alpha(opacity=" + 100 * e$jscomp$220 + ")" : "";
        var r$jscomp$73 = i$jscomp$109 && i$jscomp$109.filter || n$jscomp$163.filter || "";
        n$jscomp$163.zoom = 1;
        if (!((e$jscomp$220 >= 1 || "" === e$jscomp$220) && "" === h$jscomp$6.trim(r$jscomp$73.replace(Xt$jscomp$0, "")) && n$jscomp$163.removeAttribute && (n$jscomp$163.removeAttribute("filter"), "" === e$jscomp$220 || i$jscomp$109 && !i$jscomp$109.filter))) {
          n$jscomp$163.filter = Xt$jscomp$0.test(r$jscomp$73) ? r$jscomp$73.replace(Xt$jscomp$0, o$jscomp$89) : r$jscomp$73 + " " + o$jscomp$89;
        }
      }
    };
  }
  h$jscomp$6.cssHooks.marginRight = qt$jscomp$0(f$jscomp$1.reliableMarginRight, function(t$jscomp$321, e$jscomp$221) {
    return e$jscomp$221 ? Ot$jscomp$0(t$jscomp$321, {
      display : "inline-block"
    }, jt$jscomp$0, [t$jscomp$321, "marginRight"]) : void 0;
  });
  h$jscomp$6.cssHooks.marginLeft = qt$jscomp$0(f$jscomp$1.reliableMarginLeft, function(t$jscomp$322, e$jscomp$222) {
    return e$jscomp$222 ? (parseFloat(jt$jscomp$0(t$jscomp$322, "marginLeft")) || (h$jscomp$6.contains(t$jscomp$322.ownerDocument, t$jscomp$322) ? t$jscomp$322.getBoundingClientRect().left - Ot$jscomp$0(t$jscomp$322, {
      marginLeft : 0
    }, function() {
      return t$jscomp$322.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  });
  h$jscomp$6.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(t$jscomp$323, e$jscomp$223) {
    h$jscomp$6.cssHooks[t$jscomp$323 + e$jscomp$223] = {
      expand : function(n$jscomp$164) {
        var i$jscomp$110 = 0;
        var o$jscomp$90 = {};
        var r$jscomp$74 = "string" == typeof n$jscomp$164 ? n$jscomp$164.split(" ") : [n$jscomp$164];
        for (; 4 > i$jscomp$110; i$jscomp$110++) {
          o$jscomp$90[t$jscomp$323 + $$jscomp$0[i$jscomp$110] + e$jscomp$223] = r$jscomp$74[i$jscomp$110] || r$jscomp$74[i$jscomp$110 - 2] || r$jscomp$74[0];
        }
        return o$jscomp$90;
      }
    };
    if (!Ft$jscomp$0.test(t$jscomp$323)) {
      h$jscomp$6.cssHooks[t$jscomp$323 + e$jscomp$223].set = te$jscomp$0;
    }
  });
  h$jscomp$6.fn.extend({
    css : function(t$jscomp$324, e$jscomp$224) {
      return V$jscomp$0(this, function(t$jscomp$325, e$jscomp$225, n$jscomp$165) {
        var i$jscomp$111;
        var o$jscomp$91;
        var r$jscomp$75 = {};
        var a$jscomp$55 = 0;
        if (h$jscomp$6.isArray(e$jscomp$225)) {
          i$jscomp$111 = zt$jscomp$0(t$jscomp$325);
          o$jscomp$91 = e$jscomp$225.length;
          for (; o$jscomp$91 > a$jscomp$55; a$jscomp$55++) {
            r$jscomp$75[e$jscomp$225[a$jscomp$55]] = h$jscomp$6.css(t$jscomp$325, e$jscomp$225[a$jscomp$55], false, i$jscomp$111);
          }
          return r$jscomp$75;
        }
        return void 0 !== n$jscomp$165 ? h$jscomp$6.style(t$jscomp$325, e$jscomp$225, n$jscomp$165) : h$jscomp$6.css(t$jscomp$325, e$jscomp$225);
      }, t$jscomp$324, e$jscomp$224, arguments.length > 1);
    },
    show : function() {
      return Zt$jscomp$0(this, true);
    },
    hide : function() {
      return Zt$jscomp$0(this);
    },
    toggle : function(t$jscomp$326) {
      return "boolean" == typeof t$jscomp$326 ? t$jscomp$326 ? this.show() : this.hide() : this.each(function() {
        if (W$jscomp$0(this)) {
          h$jscomp$6(this).show();
        } else {
          h$jscomp$6(this).hide();
        }
      });
    }
  });
  h$jscomp$6.Tween = ie$jscomp$0;
  ie$jscomp$0.prototype = {
    constructor : ie$jscomp$0,
    init : function(t$jscomp$327, e$jscomp$226, n$jscomp$166, i$jscomp$112, o$jscomp$92, r$jscomp$76) {
      this.elem = t$jscomp$327;
      this.prop = n$jscomp$166;
      this.easing = o$jscomp$92 || h$jscomp$6.easing._default;
      this.options = e$jscomp$226;
      this.start = this.now = this.cur();
      this.end = i$jscomp$112;
      this.unit = r$jscomp$76 || (h$jscomp$6.cssNumber[n$jscomp$166] ? "" : "px");
    },
    cur : function() {
      var t$jscomp$328 = ie$jscomp$0.propHooks[this.prop];
      return t$jscomp$328 && t$jscomp$328.get ? t$jscomp$328.get(this) : ie$jscomp$0.propHooks._default.get(this);
    },
    run : function(t$jscomp$329) {
      var e$jscomp$227;
      var n$jscomp$167 = ie$jscomp$0.propHooks[this.prop];
      return this.options.duration ? this.pos = e$jscomp$227 = h$jscomp$6.easing[this.easing](t$jscomp$329, this.options.duration * t$jscomp$329, 0, 1, this.options.duration) : this.pos = e$jscomp$227 = t$jscomp$329, this.now = (this.end - this.start) * e$jscomp$227 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n$jscomp$167 && n$jscomp$167.set ? n$jscomp$167.set(this) : ie$jscomp$0.propHooks._default.set(this), this;
    }
  };
  ie$jscomp$0.prototype.init.prototype = ie$jscomp$0.prototype;
  ie$jscomp$0.propHooks = {
    _default : {
      get : function(t$jscomp$330) {
        var e$jscomp$228;
        return 1 !== t$jscomp$330.elem.nodeType || null != t$jscomp$330.elem[t$jscomp$330.prop] && null == t$jscomp$330.elem.style[t$jscomp$330.prop] ? t$jscomp$330.elem[t$jscomp$330.prop] : (e$jscomp$228 = h$jscomp$6.css(t$jscomp$330.elem, t$jscomp$330.prop, "")) && "auto" !== e$jscomp$228 ? e$jscomp$228 : 0;
      },
      set : function(t$jscomp$331) {
        if (h$jscomp$6.fx.step[t$jscomp$331.prop]) {
          h$jscomp$6.fx.step[t$jscomp$331.prop](t$jscomp$331);
        } else {
          if (1 !== t$jscomp$331.elem.nodeType || null == t$jscomp$331.elem.style[h$jscomp$6.cssProps[t$jscomp$331.prop]] && !h$jscomp$6.cssHooks[t$jscomp$331.prop]) {
            t$jscomp$331.elem[t$jscomp$331.prop] = t$jscomp$331.now;
          } else {
            h$jscomp$6.style(t$jscomp$331.elem, t$jscomp$331.prop, t$jscomp$331.now + t$jscomp$331.unit);
          }
        }
      }
    }
  };
  ie$jscomp$0.propHooks.scrollTop = ie$jscomp$0.propHooks.scrollLeft = {
    set : function(t$jscomp$332) {
      if (t$jscomp$332.elem.nodeType && t$jscomp$332.elem.parentNode) {
        t$jscomp$332.elem[t$jscomp$332.prop] = t$jscomp$332.now;
      }
    }
  };
  h$jscomp$6.easing = {
    linear : function(t$jscomp$333) {
      return t$jscomp$333;
    },
    swing : function(t$jscomp$334) {
      return .5 - Math.cos(t$jscomp$334 * Math.PI) / 2;
    },
    _default : "swing"
  };
  h$jscomp$6.fx = ie$jscomp$0.prototype.init;
  h$jscomp$6.fx.step = {};
  var oe$jscomp$0;
  var re$jscomp$0;
  var ae$jscomp$0 = /^(?:toggle|show|hide)$/;
  var se$jscomp$0 = /queueHooks$/;
  h$jscomp$6.Animation = h$jscomp$6.extend(fe$jscomp$0, {
    tweeners : {
      "*" : [function(t$jscomp$335, e$jscomp$229) {
        var n$jscomp$168 = this.createTween(t$jscomp$335, e$jscomp$229);
        return G$jscomp$0(n$jscomp$168.elem, t$jscomp$335, X$jscomp$0.exec(e$jscomp$229), n$jscomp$168), n$jscomp$168;
      }]
    },
    tweener : function(t$jscomp$336, e$jscomp$230) {
      if (h$jscomp$6.isFunction(t$jscomp$336)) {
        e$jscomp$230 = t$jscomp$336;
        t$jscomp$336 = ["*"];
      } else {
        t$jscomp$336 = t$jscomp$336.match(D$jscomp$0);
      }
      var n$jscomp$169;
      var i$jscomp$113 = 0;
      var o$jscomp$93 = t$jscomp$336.length;
      for (; o$jscomp$93 > i$jscomp$113; i$jscomp$113++) {
        n$jscomp$169 = t$jscomp$336[i$jscomp$113];
        fe$jscomp$0.tweeners[n$jscomp$169] = fe$jscomp$0.tweeners[n$jscomp$169] || [];
        fe$jscomp$0.tweeners[n$jscomp$169].unshift(e$jscomp$230);
      }
    },
    prefilters : [function(t$jscomp$337, e$jscomp$231, n$jscomp$170) {
      var i$jscomp$114;
      var o$jscomp$94;
      var r$jscomp$77;
      var a$jscomp$56;
      var s$jscomp$47;
      var u$jscomp$29;
      var c$jscomp$25;
      var l$jscomp$22 = this;
      var d$jscomp$13 = {};
      var p$jscomp$12 = t$jscomp$337.style;
      var g$jscomp$9 = t$jscomp$337.nodeType && W$jscomp$0(t$jscomp$337);
      var m$jscomp$10 = h$jscomp$6._data(t$jscomp$337, "fxshow");
      for (i$jscomp$114 in n$jscomp$170.queue || (null == (s$jscomp$47 = h$jscomp$6._queueHooks(t$jscomp$337, "fx")).unqueued && (s$jscomp$47.unqueued = 0, u$jscomp$29 = s$jscomp$47.empty.fire, s$jscomp$47.empty.fire = function() {
        if (!s$jscomp$47.unqueued) {
          u$jscomp$29();
        }
      }), s$jscomp$47.unqueued++, l$jscomp$22.always(function() {
        l$jscomp$22.always(function() {
          s$jscomp$47.unqueued--;
          if (!h$jscomp$6.queue(t$jscomp$337, "fx").length) {
            s$jscomp$47.empty.fire();
          }
        });
      })), 1 === t$jscomp$337.nodeType && ("height" in e$jscomp$231 || "width" in e$jscomp$231) && (n$jscomp$170.overflow = [p$jscomp$12.overflow, p$jscomp$12.overflowX, p$jscomp$12.overflowY], "inline" === ("none" === (c$jscomp$25 = h$jscomp$6.css(t$jscomp$337, "display")) ? h$jscomp$6._data(t$jscomp$337, "olddisplay") || It$jscomp$0(t$jscomp$337.nodeName) : c$jscomp$25) && "none" === h$jscomp$6.css(t$jscomp$337, "float") && (f$jscomp$1.inlineBlockNeedsLayout && "inline" !== It$jscomp$0(t$jscomp$337.nodeName) ? 
      p$jscomp$12.zoom = 1 : p$jscomp$12.display = "inline-block")), n$jscomp$170.overflow && (p$jscomp$12.overflow = "hidden", f$jscomp$1.shrinkWrapBlocks() || l$jscomp$22.always(function() {
        p$jscomp$12.overflow = n$jscomp$170.overflow[0];
        p$jscomp$12.overflowX = n$jscomp$170.overflow[1];
        p$jscomp$12.overflowY = n$jscomp$170.overflow[2];
      })), e$jscomp$231) {
        if (o$jscomp$94 = e$jscomp$231[i$jscomp$114], ae$jscomp$0.exec(o$jscomp$94)) {
          if (delete e$jscomp$231[i$jscomp$114], r$jscomp$77 = r$jscomp$77 || "toggle" === o$jscomp$94, o$jscomp$94 === (g$jscomp$9 ? "hide" : "show")) {
            if ("show" !== o$jscomp$94 || !m$jscomp$10 || void 0 === m$jscomp$10[i$jscomp$114]) {
              continue;
            }
            g$jscomp$9 = true;
          }
          d$jscomp$13[i$jscomp$114] = m$jscomp$10 && m$jscomp$10[i$jscomp$114] || h$jscomp$6.style(t$jscomp$337, i$jscomp$114);
        } else {
          c$jscomp$25 = void 0;
        }
      }
      if (h$jscomp$6.isEmptyObject(d$jscomp$13)) {
        if ("inline" === ("none" === c$jscomp$25 ? It$jscomp$0(t$jscomp$337.nodeName) : c$jscomp$25)) {
          p$jscomp$12.display = c$jscomp$25;
        }
      } else {
        for (i$jscomp$114 in m$jscomp$10 ? "hidden" in m$jscomp$10 && (g$jscomp$9 = m$jscomp$10.hidden) : m$jscomp$10 = h$jscomp$6._data(t$jscomp$337, "fxshow", {}), r$jscomp$77 && (m$jscomp$10.hidden = !g$jscomp$9), g$jscomp$9 ? h$jscomp$6(t$jscomp$337).show() : l$jscomp$22.done(function() {
          h$jscomp$6(t$jscomp$337).hide();
        }), l$jscomp$22.done(function() {
          var e$jscomp$232;
          for (e$jscomp$232 in h$jscomp$6._removeData(t$jscomp$337, "fxshow"), d$jscomp$13) {
            h$jscomp$6.style(t$jscomp$337, e$jscomp$232, d$jscomp$13[e$jscomp$232]);
          }
        }), d$jscomp$13) {
          a$jscomp$56 = le$jscomp$0(g$jscomp$9 ? m$jscomp$10[i$jscomp$114] : 0, i$jscomp$114, l$jscomp$22);
          if (!(i$jscomp$114 in m$jscomp$10)) {
            m$jscomp$10[i$jscomp$114] = a$jscomp$56.start;
            if (g$jscomp$9) {
              a$jscomp$56.end = a$jscomp$56.start;
              a$jscomp$56.start = "width" === i$jscomp$114 || "height" === i$jscomp$114 ? 1 : 0;
            }
          }
        }
      }
    }],
    prefilter : function(t$jscomp$338, e$jscomp$233) {
      if (e$jscomp$233) {
        fe$jscomp$0.prefilters.unshift(t$jscomp$338);
      } else {
        fe$jscomp$0.prefilters.push(t$jscomp$338);
      }
    }
  });
  h$jscomp$6.speed = function(t$jscomp$339, e$jscomp$234, n$jscomp$171) {
    var i$jscomp$115 = t$jscomp$339 && "object" == typeof t$jscomp$339 ? h$jscomp$6.extend({}, t$jscomp$339) : {
      complete : n$jscomp$171 || !n$jscomp$171 && e$jscomp$234 || h$jscomp$6.isFunction(t$jscomp$339) && t$jscomp$339,
      duration : t$jscomp$339,
      easing : n$jscomp$171 && e$jscomp$234 || e$jscomp$234 && !h$jscomp$6.isFunction(e$jscomp$234) && e$jscomp$234
    };
    return i$jscomp$115.duration = h$jscomp$6.fx.off ? 0 : "number" == typeof i$jscomp$115.duration ? i$jscomp$115.duration : i$jscomp$115.duration in h$jscomp$6.fx.speeds ? h$jscomp$6.fx.speeds[i$jscomp$115.duration] : h$jscomp$6.fx.speeds._default, null != i$jscomp$115.queue && true !== i$jscomp$115.queue || (i$jscomp$115.queue = "fx"), i$jscomp$115.old = i$jscomp$115.complete, i$jscomp$115.complete = function() {
      if (h$jscomp$6.isFunction(i$jscomp$115.old)) {
        i$jscomp$115.old.call(this);
      }
      if (i$jscomp$115.queue) {
        h$jscomp$6.dequeue(this, i$jscomp$115.queue);
      }
    }, i$jscomp$115;
  };
  h$jscomp$6.fn.extend({
    fadeTo : function(t$jscomp$340, e$jscomp$235, n$jscomp$172, i$jscomp$116) {
      return this.filter(W$jscomp$0).css("opacity", 0).show().end().animate({
        opacity : e$jscomp$235
      }, t$jscomp$340, n$jscomp$172, i$jscomp$116);
    },
    animate : function(t$jscomp$341, e$jscomp$236, n$jscomp$173, i$jscomp$117) {
      var o$jscomp$95 = h$jscomp$6.isEmptyObject(t$jscomp$341);
      var r$jscomp$78 = h$jscomp$6.speed(e$jscomp$236, n$jscomp$173, i$jscomp$117);
      var a$jscomp$57 = function() {
        var e$jscomp$237 = fe$jscomp$0(this, h$jscomp$6.extend({}, t$jscomp$341), r$jscomp$78);
        if (o$jscomp$95 || h$jscomp$6._data(this, "finish")) {
          e$jscomp$237.stop(true);
        }
      };
      return a$jscomp$57.finish = a$jscomp$57, o$jscomp$95 || false === r$jscomp$78.queue ? this.each(a$jscomp$57) : this.queue(r$jscomp$78.queue, a$jscomp$57);
    },
    stop : function(t$jscomp$342, e$jscomp$238, n$jscomp$174) {
      var i$jscomp$118 = function(t$jscomp$343) {
        var e$jscomp$239 = t$jscomp$343.stop;
        delete t$jscomp$343.stop;
        e$jscomp$239(n$jscomp$174);
      };
      return "string" != typeof t$jscomp$342 && (n$jscomp$174 = e$jscomp$238, e$jscomp$238 = t$jscomp$342, t$jscomp$342 = void 0), e$jscomp$238 && false !== t$jscomp$342 && this.queue(t$jscomp$342 || "fx", []), this.each(function() {
        var e$jscomp$240 = true;
        var o$jscomp$96 = null != t$jscomp$342 && t$jscomp$342 + "queueHooks";
        var r$jscomp$79 = h$jscomp$6.timers;
        var a$jscomp$58 = h$jscomp$6._data(this);
        if (o$jscomp$96) {
          if (a$jscomp$58[o$jscomp$96] && a$jscomp$58[o$jscomp$96].stop) {
            i$jscomp$118(a$jscomp$58[o$jscomp$96]);
          }
        } else {
          for (o$jscomp$96 in a$jscomp$58) {
            if (a$jscomp$58[o$jscomp$96] && a$jscomp$58[o$jscomp$96].stop && se$jscomp$0.test(o$jscomp$96)) {
              i$jscomp$118(a$jscomp$58[o$jscomp$96]);
            }
          }
        }
        o$jscomp$96 = r$jscomp$79.length;
        for (; o$jscomp$96--;) {
          if (!(r$jscomp$79[o$jscomp$96].elem !== this || null != t$jscomp$342 && r$jscomp$79[o$jscomp$96].queue !== t$jscomp$342)) {
            r$jscomp$79[o$jscomp$96].anim.stop(n$jscomp$174);
            e$jscomp$240 = false;
            r$jscomp$79.splice(o$jscomp$96, 1);
          }
        }
        if (!(!e$jscomp$240 && n$jscomp$174)) {
          h$jscomp$6.dequeue(this, t$jscomp$342);
        }
      });
    },
    finish : function(t$jscomp$344) {
      return false !== t$jscomp$344 && (t$jscomp$344 = t$jscomp$344 || "fx"), this.each(function() {
        var e$jscomp$241;
        var n$jscomp$175 = h$jscomp$6._data(this);
        var i$jscomp$119 = n$jscomp$175[t$jscomp$344 + "queue"];
        var o$jscomp$97 = n$jscomp$175[t$jscomp$344 + "queueHooks"];
        var r$jscomp$80 = h$jscomp$6.timers;
        var a$jscomp$59 = i$jscomp$119 ? i$jscomp$119.length : 0;
        n$jscomp$175.finish = true;
        h$jscomp$6.queue(this, t$jscomp$344, []);
        if (o$jscomp$97 && o$jscomp$97.stop) {
          o$jscomp$97.stop.call(this, true);
        }
        e$jscomp$241 = r$jscomp$80.length;
        for (; e$jscomp$241--;) {
          if (r$jscomp$80[e$jscomp$241].elem === this && r$jscomp$80[e$jscomp$241].queue === t$jscomp$344) {
            r$jscomp$80[e$jscomp$241].anim.stop(true);
            r$jscomp$80.splice(e$jscomp$241, 1);
          }
        }
        e$jscomp$241 = 0;
        for (; a$jscomp$59 > e$jscomp$241; e$jscomp$241++) {
          if (i$jscomp$119[e$jscomp$241] && i$jscomp$119[e$jscomp$241].finish) {
            i$jscomp$119[e$jscomp$241].finish.call(this);
          }
        }
        delete n$jscomp$175.finish;
      });
    }
  });
  h$jscomp$6.each(["toggle", "show", "hide"], function(t$jscomp$345, e$jscomp$242) {
    var n$jscomp$176 = h$jscomp$6.fn[e$jscomp$242];
    h$jscomp$6.fn[e$jscomp$242] = function(t$jscomp$346, i$jscomp$120, o$jscomp$98) {
      return null == t$jscomp$346 || "boolean" == typeof t$jscomp$346 ? n$jscomp$176.apply(this, arguments) : this.animate(ce$jscomp$0(e$jscomp$242, true), t$jscomp$346, i$jscomp$120, o$jscomp$98);
    };
  });
  h$jscomp$6.each({
    slideDown : ce$jscomp$0("show"),
    slideUp : ce$jscomp$0("hide"),
    slideToggle : ce$jscomp$0("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(t$jscomp$347, e$jscomp$243) {
    h$jscomp$6.fn[t$jscomp$347] = function(t$jscomp$348, n$jscomp$177, i$jscomp$121) {
      return this.animate(e$jscomp$243, t$jscomp$348, n$jscomp$177, i$jscomp$121);
    };
  });
  h$jscomp$6.timers = [];
  h$jscomp$6.fx.tick = function() {
    var t$jscomp$349;
    var e$jscomp$244 = h$jscomp$6.timers;
    var n$jscomp$178 = 0;
    oe$jscomp$0 = h$jscomp$6.now();
    for (; n$jscomp$178 < e$jscomp$244.length; n$jscomp$178++) {
      if (!((t$jscomp$349 = e$jscomp$244[n$jscomp$178])() || e$jscomp$244[n$jscomp$178] !== t$jscomp$349)) {
        e$jscomp$244.splice(n$jscomp$178--, 1);
      }
    }
    if (!e$jscomp$244.length) {
      h$jscomp$6.fx.stop();
    }
    oe$jscomp$0 = void 0;
  };
  h$jscomp$6.fx.timer = function(t$jscomp$350) {
    h$jscomp$6.timers.push(t$jscomp$350);
    if (t$jscomp$350()) {
      h$jscomp$6.fx.start();
    } else {
      h$jscomp$6.timers.pop();
    }
  };
  h$jscomp$6.fx.interval = 13;
  h$jscomp$6.fx.start = function() {
    if (!re$jscomp$0) {
      re$jscomp$0 = t$jscomp$2.setInterval(h$jscomp$6.fx.tick, h$jscomp$6.fx.interval);
    }
  };
  h$jscomp$6.fx.stop = function() {
    t$jscomp$2.clearInterval(re$jscomp$0);
    re$jscomp$0 = null;
  };
  h$jscomp$6.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  h$jscomp$6.fn.delay = function(e$jscomp$245, n$jscomp$179) {
    return e$jscomp$245 = h$jscomp$6.fx && h$jscomp$6.fx.speeds[e$jscomp$245] || e$jscomp$245, n$jscomp$179 = n$jscomp$179 || "fx", this.queue(n$jscomp$179, function(n$jscomp$180, i$jscomp$122) {
      var o$jscomp$99 = t$jscomp$2.setTimeout(n$jscomp$180, e$jscomp$245);
      i$jscomp$122.stop = function() {
        t$jscomp$2.clearTimeout(o$jscomp$99);
      };
    });
  };
  (function() {
    var t$jscomp$351;
    var e$jscomp$246 = i$jscomp$3.createElement("input");
    var n$jscomp$181 = i$jscomp$3.createElement("div");
    var o$jscomp$100 = i$jscomp$3.createElement("select");
    var r$jscomp$81 = o$jscomp$100.appendChild(i$jscomp$3.createElement("option"));
    (n$jscomp$181 = i$jscomp$3.createElement("div")).setAttribute("className", "t");
    n$jscomp$181.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    t$jscomp$351 = n$jscomp$181.getElementsByTagName("a")[0];
    e$jscomp$246.setAttribute("type", "checkbox");
    n$jscomp$181.appendChild(e$jscomp$246);
    (t$jscomp$351 = n$jscomp$181.getElementsByTagName("a")[0]).style.cssText = "top:1px";
    f$jscomp$1.getSetAttribute = "t" !== n$jscomp$181.className;
    f$jscomp$1.style = /top/.test(t$jscomp$351.getAttribute("style"));
    f$jscomp$1.hrefNormalized = "/a" === t$jscomp$351.getAttribute("href");
    f$jscomp$1.checkOn = !!e$jscomp$246.value;
    f$jscomp$1.optSelected = r$jscomp$81.selected;
    f$jscomp$1.enctype = !!i$jscomp$3.createElement("form").enctype;
    o$jscomp$100.disabled = true;
    f$jscomp$1.optDisabled = !r$jscomp$81.disabled;
    (e$jscomp$246 = i$jscomp$3.createElement("input")).setAttribute("value", "");
    f$jscomp$1.input = "" === e$jscomp$246.getAttribute("value");
    e$jscomp$246.value = "t";
    e$jscomp$246.setAttribute("type", "radio");
    f$jscomp$1.radioValue = "t" === e$jscomp$246.value;
  })();
  var de$jscomp$0 = /\r/g;
  var he$jscomp$0 = /[\x20\t\r\n\f]+/g;
  h$jscomp$6.fn.extend({
    val : function(t$jscomp$352) {
      var e$jscomp$247;
      var n$jscomp$182;
      var i$jscomp$123;
      var o$jscomp$101 = this[0];
      return arguments.length ? (i$jscomp$123 = h$jscomp$6.isFunction(t$jscomp$352), this.each(function(n$jscomp$183) {
        var o$jscomp$102;
        if (1 === this.nodeType) {
          if (null == (o$jscomp$102 = i$jscomp$123 ? t$jscomp$352.call(this, n$jscomp$183, h$jscomp$6(this).val()) : t$jscomp$352)) {
            o$jscomp$102 = "";
          } else {
            if ("number" == typeof o$jscomp$102) {
              o$jscomp$102 = o$jscomp$102 + "";
            } else {
              if (h$jscomp$6.isArray(o$jscomp$102)) {
                o$jscomp$102 = h$jscomp$6.map(o$jscomp$102, function(t$jscomp$353) {
                  return null == t$jscomp$353 ? "" : t$jscomp$353 + "";
                });
              }
            }
          }
          if (!((e$jscomp$247 = h$jscomp$6.valHooks[this.type] || h$jscomp$6.valHooks[this.nodeName.toLowerCase()]) && "set" in e$jscomp$247 && void 0 !== e$jscomp$247.set(this, o$jscomp$102, "value"))) {
            this.value = o$jscomp$102;
          }
        }
      })) : o$jscomp$101 ? (e$jscomp$247 = h$jscomp$6.valHooks[o$jscomp$101.type] || h$jscomp$6.valHooks[o$jscomp$101.nodeName.toLowerCase()]) && "get" in e$jscomp$247 && void 0 !== (n$jscomp$182 = e$jscomp$247.get(o$jscomp$101, "value")) ? n$jscomp$182 : "string" == typeof(n$jscomp$182 = o$jscomp$101.value) ? n$jscomp$182.replace(de$jscomp$0, "") : null == n$jscomp$182 ? "" : n$jscomp$182 : void 0;
    }
  });
  h$jscomp$6.extend({
    valHooks : {
      option : {
        get : function(t$jscomp$354) {
          var e$jscomp$248 = h$jscomp$6.find.attr(t$jscomp$354, "value");
          return null != e$jscomp$248 ? e$jscomp$248 : h$jscomp$6.trim(h$jscomp$6.text(t$jscomp$354)).replace(he$jscomp$0, " ");
        }
      },
      select : {
        get : function(t$jscomp$355) {
          var e$jscomp$249;
          var n$jscomp$184;
          var i$jscomp$124 = t$jscomp$355.options;
          var o$jscomp$103 = t$jscomp$355.selectedIndex;
          var r$jscomp$82 = "select-one" === t$jscomp$355.type || 0 > o$jscomp$103;
          var a$jscomp$60 = r$jscomp$82 ? null : [];
          var s$jscomp$48 = r$jscomp$82 ? o$jscomp$103 + 1 : i$jscomp$124.length;
          var u$jscomp$30 = 0 > o$jscomp$103 ? s$jscomp$48 : r$jscomp$82 ? o$jscomp$103 : 0;
          for (; s$jscomp$48 > u$jscomp$30; u$jscomp$30++) {
            if (((n$jscomp$184 = i$jscomp$124[u$jscomp$30]).selected || u$jscomp$30 === o$jscomp$103) && (f$jscomp$1.optDisabled ? !n$jscomp$184.disabled : null === n$jscomp$184.getAttribute("disabled")) && (!n$jscomp$184.parentNode.disabled || !h$jscomp$6.nodeName(n$jscomp$184.parentNode, "optgroup"))) {
              if (e$jscomp$249 = h$jscomp$6(n$jscomp$184).val(), r$jscomp$82) {
                return e$jscomp$249;
              }
              a$jscomp$60.push(e$jscomp$249);
            }
          }
          return a$jscomp$60;
        },
        set : function(t$jscomp$356, e$jscomp$250) {
          var n$jscomp$185;
          var i$jscomp$125;
          var o$jscomp$104 = t$jscomp$356.options;
          var r$jscomp$83 = h$jscomp$6.makeArray(e$jscomp$250);
          var a$jscomp$61 = o$jscomp$104.length;
          for (; a$jscomp$61--;) {
            if (i$jscomp$125 = o$jscomp$104[a$jscomp$61], h$jscomp$6.inArray(h$jscomp$6.valHooks.option.get(i$jscomp$125), r$jscomp$83) > -1) {
              try {
                i$jscomp$125.selected = n$jscomp$185 = true;
              } catch (t$jscomp$357) {
                i$jscomp$125.scrollHeight;
              }
            } else {
              i$jscomp$125.selected = false;
            }
          }
          return n$jscomp$185 || (t$jscomp$356.selectedIndex = -1), o$jscomp$104;
        }
      }
    }
  });
  h$jscomp$6.each(["radio", "checkbox"], function() {
    h$jscomp$6.valHooks[this] = {
      set : function(t$jscomp$358, e$jscomp$251) {
        return h$jscomp$6.isArray(e$jscomp$251) ? t$jscomp$358.checked = h$jscomp$6.inArray(h$jscomp$6(t$jscomp$358).val(), e$jscomp$251) > -1 : void 0;
      }
    };
    if (!f$jscomp$1.checkOn) {
      h$jscomp$6.valHooks[this].get = function(t$jscomp$359) {
        return null === t$jscomp$359.getAttribute("value") ? "on" : t$jscomp$359.value;
      };
    }
  });
  var pe$jscomp$0;
  var ge$jscomp$0;
  var me$jscomp$0 = h$jscomp$6.expr.attrHandle;
  var ve$jscomp$0 = /^(?:checked|selected)$/i;
  var ye$jscomp$0 = f$jscomp$1.getSetAttribute;
  var xe$jscomp$0 = f$jscomp$1.input;
  h$jscomp$6.fn.extend({
    attr : function(t$jscomp$360, e$jscomp$252) {
      return V$jscomp$0(this, h$jscomp$6.attr, t$jscomp$360, e$jscomp$252, arguments.length > 1);
    },
    removeAttr : function(t$jscomp$361) {
      return this.each(function() {
        h$jscomp$6.removeAttr(this, t$jscomp$361);
      });
    }
  });
  h$jscomp$6.extend({
    attr : function(t$jscomp$362, e$jscomp$253, n$jscomp$186) {
      var i$jscomp$126;
      var o$jscomp$105;
      var r$jscomp$84 = t$jscomp$362.nodeType;
      if (3 !== r$jscomp$84 && 8 !== r$jscomp$84 && 2 !== r$jscomp$84) {
        return void 0 === t$jscomp$362.getAttribute ? h$jscomp$6.prop(t$jscomp$362, e$jscomp$253, n$jscomp$186) : (1 === r$jscomp$84 && h$jscomp$6.isXMLDoc(t$jscomp$362) || (e$jscomp$253 = e$jscomp$253.toLowerCase(), o$jscomp$105 = h$jscomp$6.attrHooks[e$jscomp$253] || (h$jscomp$6.expr.match.bool.test(e$jscomp$253) ? ge$jscomp$0 : pe$jscomp$0)), void 0 !== n$jscomp$186 ? null === n$jscomp$186 ? void h$jscomp$6.removeAttr(t$jscomp$362, e$jscomp$253) : o$jscomp$105 && "set" in o$jscomp$105 && void 0 !== 
        (i$jscomp$126 = o$jscomp$105.set(t$jscomp$362, n$jscomp$186, e$jscomp$253)) ? i$jscomp$126 : (t$jscomp$362.setAttribute(e$jscomp$253, n$jscomp$186 + ""), n$jscomp$186) : o$jscomp$105 && "get" in o$jscomp$105 && null !== (i$jscomp$126 = o$jscomp$105.get(t$jscomp$362, e$jscomp$253)) ? i$jscomp$126 : null == (i$jscomp$126 = h$jscomp$6.find.attr(t$jscomp$362, e$jscomp$253)) ? void 0 : i$jscomp$126);
      }
    },
    attrHooks : {
      type : {
        set : function(t$jscomp$363, e$jscomp$254) {
          if (!f$jscomp$1.radioValue && "radio" === e$jscomp$254 && h$jscomp$6.nodeName(t$jscomp$363, "input")) {
            var n$jscomp$187 = t$jscomp$363.value;
            return t$jscomp$363.setAttribute("type", e$jscomp$254), n$jscomp$187 && (t$jscomp$363.value = n$jscomp$187), e$jscomp$254;
          }
        }
      }
    },
    removeAttr : function(t$jscomp$364, e$jscomp$255) {
      var n$jscomp$188;
      var i$jscomp$127;
      var o$jscomp$106 = 0;
      var r$jscomp$85 = e$jscomp$255 && e$jscomp$255.match(D$jscomp$0);
      if (r$jscomp$85 && 1 === t$jscomp$364.nodeType) {
        for (; n$jscomp$188 = r$jscomp$85[o$jscomp$106++];) {
          i$jscomp$127 = h$jscomp$6.propFix[n$jscomp$188] || n$jscomp$188;
          if (h$jscomp$6.expr.match.bool.test(n$jscomp$188)) {
            if (xe$jscomp$0 && ye$jscomp$0 || !ve$jscomp$0.test(n$jscomp$188)) {
              t$jscomp$364[i$jscomp$127] = false;
            } else {
              t$jscomp$364[h$jscomp$6.camelCase("default-" + n$jscomp$188)] = t$jscomp$364[i$jscomp$127] = false;
            }
          } else {
            h$jscomp$6.attr(t$jscomp$364, n$jscomp$188, "");
          }
          t$jscomp$364.removeAttribute(ye$jscomp$0 ? n$jscomp$188 : i$jscomp$127);
        }
      }
    }
  });
  ge$jscomp$0 = {
    set : function(t$jscomp$365, e$jscomp$256, n$jscomp$189) {
      return false === e$jscomp$256 ? h$jscomp$6.removeAttr(t$jscomp$365, n$jscomp$189) : xe$jscomp$0 && ye$jscomp$0 || !ve$jscomp$0.test(n$jscomp$189) ? t$jscomp$365.setAttribute(!ye$jscomp$0 && h$jscomp$6.propFix[n$jscomp$189] || n$jscomp$189, n$jscomp$189) : t$jscomp$365[h$jscomp$6.camelCase("default-" + n$jscomp$189)] = t$jscomp$365[n$jscomp$189] = true, n$jscomp$189;
    }
  };
  h$jscomp$6.each(h$jscomp$6.expr.match.bool.source.match(/\w+/g), function(t$jscomp$366, e$jscomp$257) {
    var n$jscomp$190 = me$jscomp$0[e$jscomp$257] || h$jscomp$6.find.attr;
    if (xe$jscomp$0 && ye$jscomp$0 || !ve$jscomp$0.test(e$jscomp$257)) {
      me$jscomp$0[e$jscomp$257] = function(t$jscomp$367, e$jscomp$258, i$jscomp$128) {
        var o$jscomp$107;
        var r$jscomp$86;
        return i$jscomp$128 || (r$jscomp$86 = me$jscomp$0[e$jscomp$258], me$jscomp$0[e$jscomp$258] = o$jscomp$107, o$jscomp$107 = null != n$jscomp$190(t$jscomp$367, e$jscomp$258, i$jscomp$128) ? e$jscomp$258.toLowerCase() : null, me$jscomp$0[e$jscomp$258] = r$jscomp$86), o$jscomp$107;
      };
    } else {
      me$jscomp$0[e$jscomp$257] = function(t$jscomp$368, e$jscomp$259, n$jscomp$191) {
        return n$jscomp$191 ? void 0 : t$jscomp$368[h$jscomp$6.camelCase("default-" + e$jscomp$259)] ? e$jscomp$259.toLowerCase() : null;
      };
    }
  });
  if (!(xe$jscomp$0 && ye$jscomp$0)) {
    h$jscomp$6.attrHooks.value = {
      set : function(t$jscomp$369, e$jscomp$260, n$jscomp$192) {
        return h$jscomp$6.nodeName(t$jscomp$369, "input") ? void(t$jscomp$369.defaultValue = e$jscomp$260) : pe$jscomp$0 && pe$jscomp$0.set(t$jscomp$369, e$jscomp$260, n$jscomp$192);
      }
    };
  }
  if (!ye$jscomp$0) {
    pe$jscomp$0 = {
      set : function(t$jscomp$370, e$jscomp$261, n$jscomp$193) {
        var i$jscomp$129 = t$jscomp$370.getAttributeNode(n$jscomp$193);
        return i$jscomp$129 || t$jscomp$370.setAttributeNode(i$jscomp$129 = t$jscomp$370.ownerDocument.createAttribute(n$jscomp$193)), i$jscomp$129.value = e$jscomp$261 = e$jscomp$261 + "", "value" === n$jscomp$193 || e$jscomp$261 === t$jscomp$370.getAttribute(n$jscomp$193) ? e$jscomp$261 : void 0;
      }
    };
    me$jscomp$0.id = me$jscomp$0.name = me$jscomp$0.coords = function(t$jscomp$371, e$jscomp$262, n$jscomp$194) {
      var i$jscomp$130;
      return n$jscomp$194 ? void 0 : (i$jscomp$130 = t$jscomp$371.getAttributeNode(e$jscomp$262)) && "" !== i$jscomp$130.value ? i$jscomp$130.value : null;
    };
    h$jscomp$6.valHooks.button = {
      get : function(t$jscomp$372, e$jscomp$263) {
        var n$jscomp$195 = t$jscomp$372.getAttributeNode(e$jscomp$263);
        return n$jscomp$195 && n$jscomp$195.specified ? n$jscomp$195.value : void 0;
      },
      set : pe$jscomp$0.set
    };
    h$jscomp$6.attrHooks.contenteditable = {
      set : function(t$jscomp$373, e$jscomp$264, n$jscomp$196) {
        pe$jscomp$0.set(t$jscomp$373, "" !== e$jscomp$264 && e$jscomp$264, n$jscomp$196);
      }
    };
    h$jscomp$6.each(["width", "height"], function(t$jscomp$374, e$jscomp$265) {
      h$jscomp$6.attrHooks[e$jscomp$265] = {
        set : function(t$jscomp$375, n$jscomp$197) {
          return "" === n$jscomp$197 ? (t$jscomp$375.setAttribute(e$jscomp$265, "auto"), n$jscomp$197) : void 0;
        }
      };
    });
  }
  if (!f$jscomp$1.style) {
    h$jscomp$6.attrHooks.style = {
      get : function(t$jscomp$376) {
        return t$jscomp$376.style.cssText || void 0;
      },
      set : function(t$jscomp$377, e$jscomp$266) {
        return t$jscomp$377.style.cssText = e$jscomp$266 + "";
      }
    };
  }
  var be$jscomp$0 = /^(?:input|select|textarea|button|object)$/i;
  var we$jscomp$0 = /^(?:a|area)$/i;
  h$jscomp$6.fn.extend({
    prop : function(t$jscomp$378, e$jscomp$267) {
      return V$jscomp$0(this, h$jscomp$6.prop, t$jscomp$378, e$jscomp$267, arguments.length > 1);
    },
    removeProp : function(t$jscomp$379) {
      return t$jscomp$379 = h$jscomp$6.propFix[t$jscomp$379] || t$jscomp$379, this.each(function() {
        try {
          this[t$jscomp$379] = void 0;
          delete this[t$jscomp$379];
        } catch (t$jscomp$380) {
        }
      });
    }
  });
  h$jscomp$6.extend({
    prop : function(t$jscomp$381, e$jscomp$268, n$jscomp$198) {
      var i$jscomp$131;
      var o$jscomp$108;
      var r$jscomp$87 = t$jscomp$381.nodeType;
      if (3 !== r$jscomp$87 && 8 !== r$jscomp$87 && 2 !== r$jscomp$87) {
        return 1 === r$jscomp$87 && h$jscomp$6.isXMLDoc(t$jscomp$381) || (e$jscomp$268 = h$jscomp$6.propFix[e$jscomp$268] || e$jscomp$268, o$jscomp$108 = h$jscomp$6.propHooks[e$jscomp$268]), void 0 !== n$jscomp$198 ? o$jscomp$108 && "set" in o$jscomp$108 && void 0 !== (i$jscomp$131 = o$jscomp$108.set(t$jscomp$381, n$jscomp$198, e$jscomp$268)) ? i$jscomp$131 : t$jscomp$381[e$jscomp$268] = n$jscomp$198 : o$jscomp$108 && "get" in o$jscomp$108 && null !== (i$jscomp$131 = o$jscomp$108.get(t$jscomp$381, 
        e$jscomp$268)) ? i$jscomp$131 : t$jscomp$381[e$jscomp$268];
      }
    },
    propHooks : {
      tabIndex : {
        get : function(t$jscomp$382) {
          var e$jscomp$269 = h$jscomp$6.find.attr(t$jscomp$382, "tabindex");
          return e$jscomp$269 ? parseInt(e$jscomp$269, 10) : be$jscomp$0.test(t$jscomp$382.nodeName) || we$jscomp$0.test(t$jscomp$382.nodeName) && t$jscomp$382.href ? 0 : -1;
        }
      }
    },
    propFix : {
      for : "htmlFor",
      class : "className"
    }
  });
  if (!f$jscomp$1.hrefNormalized) {
    h$jscomp$6.each(["href", "src"], function(t$jscomp$383, e$jscomp$270) {
      h$jscomp$6.propHooks[e$jscomp$270] = {
        get : function(t$jscomp$384) {
          return t$jscomp$384.getAttribute(e$jscomp$270, 4);
        }
      };
    });
  }
  if (!f$jscomp$1.optSelected) {
    h$jscomp$6.propHooks.selected = {
      get : function(t$jscomp$385) {
        var e$jscomp$271 = t$jscomp$385.parentNode;
        return e$jscomp$271 && (e$jscomp$271.selectedIndex, e$jscomp$271.parentNode && e$jscomp$271.parentNode.selectedIndex), null;
      },
      set : function(t$jscomp$386) {
        var e$jscomp$272 = t$jscomp$386.parentNode;
        if (e$jscomp$272) {
          e$jscomp$272.selectedIndex;
          if (e$jscomp$272.parentNode) {
            e$jscomp$272.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  h$jscomp$6.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    h$jscomp$6.propFix[this.toLowerCase()] = this;
  });
  if (!f$jscomp$1.enctype) {
    h$jscomp$6.propFix.enctype = "encoding";
  }
  var Ee$jscomp$0 = /[\t\r\n\f]/g;
  h$jscomp$6.fn.extend({
    addClass : function(t$jscomp$387) {
      var e$jscomp$273;
      var n$jscomp$199;
      var i$jscomp$132;
      var o$jscomp$109;
      var r$jscomp$88;
      var a$jscomp$62;
      var s$jscomp$49;
      var u$jscomp$31 = 0;
      if (h$jscomp$6.isFunction(t$jscomp$387)) {
        return this.each(function(e$jscomp$274) {
          h$jscomp$6(this).addClass(t$jscomp$387.call(this, e$jscomp$274, Te$jscomp$0(this)));
        });
      }
      if ("string" == typeof t$jscomp$387 && t$jscomp$387) {
        e$jscomp$273 = t$jscomp$387.match(D$jscomp$0) || [];
        for (; n$jscomp$199 = this[u$jscomp$31++];) {
          if (o$jscomp$109 = Te$jscomp$0(n$jscomp$199), i$jscomp$132 = 1 === n$jscomp$199.nodeType && (" " + o$jscomp$109 + " ").replace(Ee$jscomp$0, " ")) {
            a$jscomp$62 = 0;
            for (; r$jscomp$88 = e$jscomp$273[a$jscomp$62++];) {
              if (i$jscomp$132.indexOf(" " + r$jscomp$88 + " ") < 0) {
                i$jscomp$132 = i$jscomp$132 + (r$jscomp$88 + " ");
              }
            }
            if (o$jscomp$109 !== (s$jscomp$49 = h$jscomp$6.trim(i$jscomp$132))) {
              h$jscomp$6.attr(n$jscomp$199, "class", s$jscomp$49);
            }
          }
        }
      }
      return this;
    },
    removeClass : function(t$jscomp$388) {
      var e$jscomp$275;
      var n$jscomp$200;
      var i$jscomp$133;
      var o$jscomp$110;
      var r$jscomp$89;
      var a$jscomp$63;
      var s$jscomp$50;
      var u$jscomp$32 = 0;
      if (h$jscomp$6.isFunction(t$jscomp$388)) {
        return this.each(function(e$jscomp$276) {
          h$jscomp$6(this).removeClass(t$jscomp$388.call(this, e$jscomp$276, Te$jscomp$0(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ("string" == typeof t$jscomp$388 && t$jscomp$388) {
        e$jscomp$275 = t$jscomp$388.match(D$jscomp$0) || [];
        for (; n$jscomp$200 = this[u$jscomp$32++];) {
          if (o$jscomp$110 = Te$jscomp$0(n$jscomp$200), i$jscomp$133 = 1 === n$jscomp$200.nodeType && (" " + o$jscomp$110 + " ").replace(Ee$jscomp$0, " ")) {
            a$jscomp$63 = 0;
            for (; r$jscomp$89 = e$jscomp$275[a$jscomp$63++];) {
              for (; i$jscomp$133.indexOf(" " + r$jscomp$89 + " ") > -1;) {
                i$jscomp$133 = i$jscomp$133.replace(" " + r$jscomp$89 + " ", " ");
              }
            }
            if (o$jscomp$110 !== (s$jscomp$50 = h$jscomp$6.trim(i$jscomp$133))) {
              h$jscomp$6.attr(n$jscomp$200, "class", s$jscomp$50);
            }
          }
        }
      }
      return this;
    },
    toggleClass : function(t$jscomp$389, e$jscomp$277) {
      var n$jscomp$201 = typeof t$jscomp$389;
      return "boolean" == typeof e$jscomp$277 && "string" === n$jscomp$201 ? e$jscomp$277 ? this.addClass(t$jscomp$389) : this.removeClass(t$jscomp$389) : h$jscomp$6.isFunction(t$jscomp$389) ? this.each(function(n$jscomp$202) {
        h$jscomp$6(this).toggleClass(t$jscomp$389.call(this, n$jscomp$202, Te$jscomp$0(this), e$jscomp$277), e$jscomp$277);
      }) : this.each(function() {
        var e$jscomp$278;
        var i$jscomp$134;
        var o$jscomp$111;
        var r$jscomp$90;
        if ("string" === n$jscomp$201) {
          i$jscomp$134 = 0;
          o$jscomp$111 = h$jscomp$6(this);
          r$jscomp$90 = t$jscomp$389.match(D$jscomp$0) || [];
          for (; e$jscomp$278 = r$jscomp$90[i$jscomp$134++];) {
            if (o$jscomp$111.hasClass(e$jscomp$278)) {
              o$jscomp$111.removeClass(e$jscomp$278);
            } else {
              o$jscomp$111.addClass(e$jscomp$278);
            }
          }
        } else {
          if (!(void 0 !== t$jscomp$389 && "boolean" !== n$jscomp$201)) {
            if (e$jscomp$278 = Te$jscomp$0(this)) {
              h$jscomp$6._data(this, "__className__", e$jscomp$278);
            }
            h$jscomp$6.attr(this, "class", e$jscomp$278 || false === t$jscomp$389 ? "" : h$jscomp$6._data(this, "__className__") || "");
          }
        }
      });
    },
    hasClass : function(t$jscomp$390) {
      var e$jscomp$279;
      var n$jscomp$203;
      var i$jscomp$135 = 0;
      e$jscomp$279 = " " + t$jscomp$390 + " ";
      for (; n$jscomp$203 = this[i$jscomp$135++];) {
        if (1 === n$jscomp$203.nodeType && (" " + Te$jscomp$0(n$jscomp$203) + " ").replace(Ee$jscomp$0, " ").indexOf(e$jscomp$279) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  h$jscomp$6.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t$jscomp$391, e$jscomp$280) {
    h$jscomp$6.fn[e$jscomp$280] = function(t$jscomp$392, n$jscomp$204) {
      return arguments.length > 0 ? this.on(e$jscomp$280, null, t$jscomp$392, n$jscomp$204) : this.trigger(e$jscomp$280);
    };
  });
  h$jscomp$6.fn.extend({
    hover : function(t$jscomp$393, e$jscomp$281) {
      return this.mouseenter(t$jscomp$393).mouseleave(e$jscomp$281 || t$jscomp$393);
    }
  });
  var Ae$jscomp$0 = t$jscomp$2.location;
  var Ce$jscomp$0 = h$jscomp$6.now();
  var Se$jscomp$0 = /\?/;
  var _e$jscomp$0 = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  h$jscomp$6.parseJSON = function(e$jscomp$282) {
    if (t$jscomp$2.JSON && t$jscomp$2.JSON.parse) {
      return t$jscomp$2.JSON.parse(e$jscomp$282 + "");
    }
    var n$jscomp$205;
    var i$jscomp$136 = null;
    var o$jscomp$112 = h$jscomp$6.trim(e$jscomp$282 + "");
    return o$jscomp$112 && !h$jscomp$6.trim(o$jscomp$112.replace(_e$jscomp$0, function(t$jscomp$394, e$jscomp$283, o$jscomp$113, r$jscomp$91) {
      return n$jscomp$205 && e$jscomp$283 && (i$jscomp$136 = 0), 0 === i$jscomp$136 ? t$jscomp$394 : (n$jscomp$205 = o$jscomp$113 || e$jscomp$283, i$jscomp$136 = i$jscomp$136 + (!r$jscomp$91 - !o$jscomp$113), "");
    })) ? Function("return " + o$jscomp$112)() : h$jscomp$6.error("Invalid JSON: " + e$jscomp$282);
  };
  h$jscomp$6.parseXML = function(e$jscomp$284) {
    var n$jscomp$206;
    if (!e$jscomp$284 || "string" != typeof e$jscomp$284) {
      return null;
    }
    try {
      if (t$jscomp$2.DOMParser) {
        n$jscomp$206 = (new t$jscomp$2.DOMParser).parseFromString(e$jscomp$284, "text/xml");
      } else {
        (n$jscomp$206 = new t$jscomp$2.ActiveXObject("Microsoft.XMLDOM")).async = "false";
        n$jscomp$206.loadXML(e$jscomp$284);
      }
    } catch (t$jscomp$395) {
      n$jscomp$206 = void 0;
    }
    return n$jscomp$206 && n$jscomp$206.documentElement && !n$jscomp$206.getElementsByTagName("parsererror").length || h$jscomp$6.error("Invalid XML: " + e$jscomp$284), n$jscomp$206;
  };
  var Ne$jscomp$0 = /#.*$/;
  var Me$jscomp$0 = /([?&])_=[^&]*/;
  var Re$jscomp$0 = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm;
  var ke$jscomp$0 = /^(?:GET|HEAD)$/;
  var Le$jscomp$0 = /^\/\//;
  var De$jscomp$0 = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
  var Ue$jscomp$0 = {};
  var Ie$jscomp$0 = {};
  var Fe$jscomp$0 = "*/".concat("*");
  var Be$jscomp$0 = Ae$jscomp$0.href;
  var Oe$jscomp$0 = De$jscomp$0.exec(Be$jscomp$0.toLowerCase()) || [];
  h$jscomp$6.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : Be$jscomp$0,
      type : "GET",
      isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Oe$jscomp$0[1]),
      global : true,
      processData : true,
      async : true,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : Fe$jscomp$0,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {
        xml : /\bxml\b/,
        html : /\bhtml/,
        json : /\bjson\b/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText",
        json : "responseJSON"
      },
      converters : {
        "* text" : String,
        "text html" : true,
        "text json" : h$jscomp$6.parseJSON,
        "text xml" : h$jscomp$6.parseXML
      },
      flatOptions : {
        url : true,
        context : true
      }
    },
    ajaxSetup : function(t$jscomp$396, e$jscomp$285) {
      return e$jscomp$285 ? je$jscomp$0(je$jscomp$0(t$jscomp$396, h$jscomp$6.ajaxSettings), e$jscomp$285) : je$jscomp$0(h$jscomp$6.ajaxSettings, t$jscomp$396);
    },
    ajaxPrefilter : Pe$jscomp$0(Ue$jscomp$0),
    ajaxTransport : Pe$jscomp$0(Ie$jscomp$0),
    ajax : function(e$jscomp$286, n$jscomp$207) {
      function T$jscomp$4(e$jscomp$287, n$jscomp$208, i$jscomp$138, o$jscomp$115) {
        var l$jscomp$24;
        var y$jscomp$65;
        var x$jscomp$79;
        var w$jscomp$11;
        var T$jscomp$5;
        var A$jscomp$3 = n$jscomp$208;
        if (2 !== b$jscomp$3) {
          b$jscomp$3 = 2;
          if (s$jscomp$51) {
            t$jscomp$2.clearTimeout(s$jscomp$51);
          }
          c$jscomp$26 = void 0;
          a$jscomp$64 = o$jscomp$115 || "";
          E$jscomp$3.readyState = e$jscomp$287 > 0 ? 4 : 0;
          l$jscomp$24 = e$jscomp$287 >= 200 && 300 > e$jscomp$287 || 304 === e$jscomp$287;
          if (i$jscomp$138) {
            w$jscomp$11 = function(t$jscomp$397, e$jscomp$288, n$jscomp$209) {
              var i$jscomp$139;
              var o$jscomp$116;
              var r$jscomp$93;
              var a$jscomp$65;
              var s$jscomp$52 = t$jscomp$397.contents;
              var u$jscomp$34 = t$jscomp$397.dataTypes;
              for (; "*" === u$jscomp$34[0];) {
                u$jscomp$34.shift();
                if (void 0 === o$jscomp$116) {
                  o$jscomp$116 = t$jscomp$397.mimeType || e$jscomp$288.getResponseHeader("Content-Type");
                }
              }
              if (o$jscomp$116) {
                for (a$jscomp$65 in s$jscomp$52) {
                  if (s$jscomp$52[a$jscomp$65] && s$jscomp$52[a$jscomp$65].test(o$jscomp$116)) {
                    u$jscomp$34.unshift(a$jscomp$65);
                    break;
                  }
                }
              }
              if (u$jscomp$34[0] in n$jscomp$209) {
                r$jscomp$93 = u$jscomp$34[0];
              } else {
                for (a$jscomp$65 in n$jscomp$209) {
                  if (!u$jscomp$34[0] || t$jscomp$397.converters[a$jscomp$65 + " " + u$jscomp$34[0]]) {
                    r$jscomp$93 = a$jscomp$65;
                    break;
                  }
                  if (!i$jscomp$139) {
                    i$jscomp$139 = a$jscomp$65;
                  }
                }
                r$jscomp$93 = r$jscomp$93 || i$jscomp$139;
              }
              return r$jscomp$93 ? (r$jscomp$93 !== u$jscomp$34[0] && u$jscomp$34.unshift(r$jscomp$93), n$jscomp$209[r$jscomp$93]) : void 0;
            }(f$jscomp$13, E$jscomp$3, i$jscomp$138);
          }
          w$jscomp$11 = function(t$jscomp$398, e$jscomp$289, n$jscomp$210, i$jscomp$140) {
            var o$jscomp$117;
            var r$jscomp$94;
            var a$jscomp$66;
            var s$jscomp$53;
            var u$jscomp$35;
            var c$jscomp$27 = {};
            var l$jscomp$25 = t$jscomp$398.dataTypes.slice();
            if (l$jscomp$25[1]) {
              for (a$jscomp$66 in t$jscomp$398.converters) {
                c$jscomp$27[a$jscomp$66.toLowerCase()] = t$jscomp$398.converters[a$jscomp$66];
              }
            }
            r$jscomp$94 = l$jscomp$25.shift();
            for (; r$jscomp$94;) {
              if (t$jscomp$398.responseFields[r$jscomp$94] && (n$jscomp$210[t$jscomp$398.responseFields[r$jscomp$94]] = e$jscomp$289), !u$jscomp$35 && i$jscomp$140 && t$jscomp$398.dataFilter && (e$jscomp$289 = t$jscomp$398.dataFilter(e$jscomp$289, t$jscomp$398.dataType)), u$jscomp$35 = r$jscomp$94, r$jscomp$94 = l$jscomp$25.shift()) {
                if ("*" === r$jscomp$94) {
                  r$jscomp$94 = u$jscomp$35;
                } else {
                  if ("*" !== u$jscomp$35 && u$jscomp$35 !== r$jscomp$94) {
                    if (!(a$jscomp$66 = c$jscomp$27[u$jscomp$35 + " " + r$jscomp$94] || c$jscomp$27["* " + r$jscomp$94])) {
                      for (o$jscomp$117 in c$jscomp$27) {
                        if ((s$jscomp$53 = o$jscomp$117.split(" "))[1] === r$jscomp$94 && (a$jscomp$66 = c$jscomp$27[u$jscomp$35 + " " + s$jscomp$53[0]] || c$jscomp$27["* " + s$jscomp$53[0]])) {
                          if (true === a$jscomp$66) {
                            a$jscomp$66 = c$jscomp$27[o$jscomp$117];
                          } else {
                            if (true !== c$jscomp$27[o$jscomp$117]) {
                              r$jscomp$94 = s$jscomp$53[0];
                              l$jscomp$25.unshift(s$jscomp$53[1]);
                            }
                          }
                          break;
                        }
                      }
                    }
                    if (true !== a$jscomp$66) {
                      if (a$jscomp$66 && t$jscomp$398.throws) {
                        e$jscomp$289 = a$jscomp$66(e$jscomp$289);
                      } else {
                        try {
                          e$jscomp$289 = a$jscomp$66(e$jscomp$289);
                        } catch (t$jscomp$399) {
                          return {
                            state : "parsererror",
                            error : a$jscomp$66 ? t$jscomp$399 : "No conversion from " + u$jscomp$35 + " to " + r$jscomp$94
                          };
                        }
                      }
                    }
                  }
                }
              }
            }
            return {
              state : "success",
              data : e$jscomp$289
            };
          }(f$jscomp$13, w$jscomp$11, E$jscomp$3, l$jscomp$24);
          if (l$jscomp$24) {
            if (f$jscomp$13.ifModified) {
              if (T$jscomp$5 = E$jscomp$3.getResponseHeader("Last-Modified")) {
                h$jscomp$6.lastModified[r$jscomp$92] = T$jscomp$5;
              }
              if (T$jscomp$5 = E$jscomp$3.getResponseHeader("etag")) {
                h$jscomp$6.etag[r$jscomp$92] = T$jscomp$5;
              }
            }
            if (204 === e$jscomp$287 || "HEAD" === f$jscomp$13.type) {
              A$jscomp$3 = "nocontent";
            } else {
              if (304 === e$jscomp$287) {
                A$jscomp$3 = "notmodified";
              } else {
                A$jscomp$3 = w$jscomp$11.state;
                y$jscomp$65 = w$jscomp$11.data;
                l$jscomp$24 = !(x$jscomp$79 = w$jscomp$11.error);
              }
            }
          } else {
            x$jscomp$79 = A$jscomp$3;
            if (!(!e$jscomp$287 && A$jscomp$3)) {
              A$jscomp$3 = "error";
              if (0 > e$jscomp$287) {
                e$jscomp$287 = 0;
              }
            }
          }
          E$jscomp$3.status = e$jscomp$287;
          E$jscomp$3.statusText = (n$jscomp$208 || A$jscomp$3) + "";
          if (l$jscomp$24) {
            g$jscomp$10.resolveWith(d$jscomp$14, [y$jscomp$65, A$jscomp$3, E$jscomp$3]);
          } else {
            g$jscomp$10.rejectWith(d$jscomp$14, [E$jscomp$3, A$jscomp$3, x$jscomp$79]);
          }
          E$jscomp$3.statusCode(v$jscomp$11);
          v$jscomp$11 = void 0;
          if (u$jscomp$33) {
            p$jscomp$13.trigger(l$jscomp$24 ? "ajaxSuccess" : "ajaxError", [E$jscomp$3, f$jscomp$13, l$jscomp$24 ? y$jscomp$65 : x$jscomp$79]);
          }
          m$jscomp$11.fireWith(d$jscomp$14, [E$jscomp$3, A$jscomp$3]);
          if (u$jscomp$33) {
            p$jscomp$13.trigger("ajaxComplete", [E$jscomp$3, f$jscomp$13]);
            if (!--h$jscomp$6.active) {
              h$jscomp$6.event.trigger("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof e$jscomp$286) {
        n$jscomp$207 = e$jscomp$286;
        e$jscomp$286 = void 0;
      }
      n$jscomp$207 = n$jscomp$207 || {};
      var i$jscomp$137;
      var o$jscomp$114;
      var r$jscomp$92;
      var a$jscomp$64;
      var s$jscomp$51;
      var u$jscomp$33;
      var c$jscomp$26;
      var l$jscomp$23;
      var f$jscomp$13 = h$jscomp$6.ajaxSetup({}, n$jscomp$207);
      var d$jscomp$14 = f$jscomp$13.context || f$jscomp$13;
      var p$jscomp$13 = f$jscomp$13.context && (d$jscomp$14.nodeType || d$jscomp$14.jquery) ? h$jscomp$6(d$jscomp$14) : h$jscomp$6.event;
      var g$jscomp$10 = h$jscomp$6.Deferred();
      var m$jscomp$11 = h$jscomp$6.Callbacks("once memory");
      var v$jscomp$11 = f$jscomp$13.statusCode || {};
      var y$jscomp$64 = {};
      var x$jscomp$78 = {};
      var b$jscomp$3 = 0;
      var w$jscomp$10 = "canceled";
      var E$jscomp$3 = {
        readyState : 0,
        getResponseHeader : function(t$jscomp$400) {
          var e$jscomp$290;
          if (2 === b$jscomp$3) {
            if (!l$jscomp$23) {
              l$jscomp$23 = {};
              for (; e$jscomp$290 = Re$jscomp$0.exec(a$jscomp$64);) {
                l$jscomp$23[e$jscomp$290[1].toLowerCase()] = e$jscomp$290[2];
              }
            }
            e$jscomp$290 = l$jscomp$23[t$jscomp$400.toLowerCase()];
          }
          return null == e$jscomp$290 ? null : e$jscomp$290;
        },
        getAllResponseHeaders : function() {
          return 2 === b$jscomp$3 ? a$jscomp$64 : null;
        },
        setRequestHeader : function(t$jscomp$401, e$jscomp$291) {
          var n$jscomp$211 = t$jscomp$401.toLowerCase();
          return b$jscomp$3 || (t$jscomp$401 = x$jscomp$78[n$jscomp$211] = x$jscomp$78[n$jscomp$211] || t$jscomp$401, y$jscomp$64[t$jscomp$401] = e$jscomp$291), this;
        },
        overrideMimeType : function(t$jscomp$402) {
          return b$jscomp$3 || (f$jscomp$13.mimeType = t$jscomp$402), this;
        },
        statusCode : function(t$jscomp$403) {
          var e$jscomp$292;
          if (t$jscomp$403) {
            if (2 > b$jscomp$3) {
              for (e$jscomp$292 in t$jscomp$403) {
                v$jscomp$11[e$jscomp$292] = [v$jscomp$11[e$jscomp$292], t$jscomp$403[e$jscomp$292]];
              }
            } else {
              E$jscomp$3.always(t$jscomp$403[E$jscomp$3.status]);
            }
          }
          return this;
        },
        abort : function(t$jscomp$404) {
          var e$jscomp$293 = t$jscomp$404 || w$jscomp$10;
          return c$jscomp$26 && c$jscomp$26.abort(e$jscomp$293), T$jscomp$4(0, e$jscomp$293), this;
        }
      };
      if (g$jscomp$10.promise(E$jscomp$3).complete = m$jscomp$11.add, E$jscomp$3.success = E$jscomp$3.done, E$jscomp$3.error = E$jscomp$3.fail, f$jscomp$13.url = ((e$jscomp$286 || f$jscomp$13.url || Be$jscomp$0) + "").replace(Ne$jscomp$0, "").replace(Le$jscomp$0, Oe$jscomp$0[1] + "//"), f$jscomp$13.type = n$jscomp$207.method || n$jscomp$207.type || f$jscomp$13.method || f$jscomp$13.type, f$jscomp$13.dataTypes = h$jscomp$6.trim(f$jscomp$13.dataType || "*").toLowerCase().match(D$jscomp$0) || [""], 
      null == f$jscomp$13.crossDomain && (i$jscomp$137 = De$jscomp$0.exec(f$jscomp$13.url.toLowerCase()), f$jscomp$13.crossDomain = !(!i$jscomp$137 || i$jscomp$137[1] === Oe$jscomp$0[1] && i$jscomp$137[2] === Oe$jscomp$0[2] && (i$jscomp$137[3] || ("http:" === i$jscomp$137[1] ? "80" : "443")) === (Oe$jscomp$0[3] || ("http:" === Oe$jscomp$0[1] ? "80" : "443")))), f$jscomp$13.data && f$jscomp$13.processData && "string" != typeof f$jscomp$13.data && (f$jscomp$13.data = h$jscomp$6.param(f$jscomp$13.data, 
      f$jscomp$13.traditional)), ze$jscomp$0(Ue$jscomp$0, f$jscomp$13, n$jscomp$207, E$jscomp$3), 2 === b$jscomp$3) {
        return E$jscomp$3;
      }
      for (o$jscomp$114 in(u$jscomp$33 = h$jscomp$6.event && f$jscomp$13.global) && 0 == h$jscomp$6.active++ && h$jscomp$6.event.trigger("ajaxStart"), f$jscomp$13.type = f$jscomp$13.type.toUpperCase(), f$jscomp$13.hasContent = !ke$jscomp$0.test(f$jscomp$13.type), r$jscomp$92 = f$jscomp$13.url, f$jscomp$13.hasContent || (f$jscomp$13.data && (r$jscomp$92 = f$jscomp$13.url += (Se$jscomp$0.test(r$jscomp$92) ? "&" : "?") + f$jscomp$13.data, delete f$jscomp$13.data), false === f$jscomp$13.cache && (f$jscomp$13.url = 
      Me$jscomp$0.test(r$jscomp$92) ? r$jscomp$92.replace(Me$jscomp$0, "$1_=" + Ce$jscomp$0++) : r$jscomp$92 + (Se$jscomp$0.test(r$jscomp$92) ? "&" : "?") + "_=" + Ce$jscomp$0++)), f$jscomp$13.ifModified && (h$jscomp$6.lastModified[r$jscomp$92] && E$jscomp$3.setRequestHeader("If-Modified-Since", h$jscomp$6.lastModified[r$jscomp$92]), h$jscomp$6.etag[r$jscomp$92] && E$jscomp$3.setRequestHeader("If-None-Match", h$jscomp$6.etag[r$jscomp$92])), (f$jscomp$13.data && f$jscomp$13.hasContent && false !== 
      f$jscomp$13.contentType || n$jscomp$207.contentType) && E$jscomp$3.setRequestHeader("Content-Type", f$jscomp$13.contentType), E$jscomp$3.setRequestHeader("Accept", f$jscomp$13.dataTypes[0] && f$jscomp$13.accepts[f$jscomp$13.dataTypes[0]] ? f$jscomp$13.accepts[f$jscomp$13.dataTypes[0]] + ("*" !== f$jscomp$13.dataTypes[0] ? ", " + Fe$jscomp$0 + "; q=0.01" : "") : f$jscomp$13.accepts["*"]), f$jscomp$13.headers) {
        E$jscomp$3.setRequestHeader(o$jscomp$114, f$jscomp$13.headers[o$jscomp$114]);
      }
      if (f$jscomp$13.beforeSend && (false === f$jscomp$13.beforeSend.call(d$jscomp$14, E$jscomp$3, f$jscomp$13) || 2 === b$jscomp$3)) {
        return E$jscomp$3.abort();
      }
      for (o$jscomp$114 in w$jscomp$10 = "abort", {
        success : 1,
        error : 1,
        complete : 1
      }) {
        E$jscomp$3[o$jscomp$114](f$jscomp$13[o$jscomp$114]);
      }
      if (c$jscomp$26 = ze$jscomp$0(Ie$jscomp$0, f$jscomp$13, n$jscomp$207, E$jscomp$3)) {
        if (E$jscomp$3.readyState = 1, u$jscomp$33 && p$jscomp$13.trigger("ajaxSend", [E$jscomp$3, f$jscomp$13]), 2 === b$jscomp$3) {
          return E$jscomp$3;
        }
        if (f$jscomp$13.async && f$jscomp$13.timeout > 0) {
          s$jscomp$51 = t$jscomp$2.setTimeout(function() {
            E$jscomp$3.abort("timeout");
          }, f$jscomp$13.timeout);
        }
        try {
          b$jscomp$3 = 1;
          c$jscomp$26.send(y$jscomp$64, T$jscomp$4);
        } catch (t$jscomp$405) {
          if (!(2 > b$jscomp$3)) {
            throw t$jscomp$405;
          }
          T$jscomp$4(-1, t$jscomp$405);
        }
      } else {
        T$jscomp$4(-1, "No Transport");
      }
      return E$jscomp$3;
    },
    getJSON : function(t$jscomp$406, e$jscomp$294, n$jscomp$212) {
      return h$jscomp$6.get(t$jscomp$406, e$jscomp$294, n$jscomp$212, "json");
    },
    getScript : function(t$jscomp$407, e$jscomp$295) {
      return h$jscomp$6.get(t$jscomp$407, void 0, e$jscomp$295, "script");
    }
  });
  h$jscomp$6.each(["get", "post"], function(t$jscomp$408, e$jscomp$296) {
    h$jscomp$6[e$jscomp$296] = function(t$jscomp$409, n$jscomp$213, i$jscomp$141, o$jscomp$118) {
      return h$jscomp$6.isFunction(n$jscomp$213) && (o$jscomp$118 = o$jscomp$118 || i$jscomp$141, i$jscomp$141 = n$jscomp$213, n$jscomp$213 = void 0), h$jscomp$6.ajax(h$jscomp$6.extend({
        url : t$jscomp$409,
        type : e$jscomp$296,
        dataType : o$jscomp$118,
        data : n$jscomp$213,
        success : i$jscomp$141
      }, h$jscomp$6.isPlainObject(t$jscomp$409) && t$jscomp$409));
    };
  });
  h$jscomp$6._evalUrl = function(t$jscomp$410) {
    return h$jscomp$6.ajax({
      url : t$jscomp$410,
      type : "GET",
      dataType : "script",
      cache : true,
      async : false,
      global : false,
      throws : true
    });
  };
  h$jscomp$6.fn.extend({
    wrapAll : function(t$jscomp$411) {
      if (h$jscomp$6.isFunction(t$jscomp$411)) {
        return this.each(function(e$jscomp$298) {
          h$jscomp$6(this).wrapAll(t$jscomp$411.call(this, e$jscomp$298));
        });
      }
      if (this[0]) {
        var e$jscomp$297 = h$jscomp$6(t$jscomp$411, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          e$jscomp$297.insertBefore(this[0]);
        }
        e$jscomp$297.map(function() {
          var t$jscomp$412 = this;
          for (; t$jscomp$412.firstChild && 1 === t$jscomp$412.firstChild.nodeType;) {
            t$jscomp$412 = t$jscomp$412.firstChild;
          }
          return t$jscomp$412;
        }).append(this);
      }
      return this;
    },
    wrapInner : function(t$jscomp$413) {
      return h$jscomp$6.isFunction(t$jscomp$413) ? this.each(function(e$jscomp$299) {
        h$jscomp$6(this).wrapInner(t$jscomp$413.call(this, e$jscomp$299));
      }) : this.each(function() {
        var e$jscomp$300 = h$jscomp$6(this);
        var n$jscomp$214 = e$jscomp$300.contents();
        if (n$jscomp$214.length) {
          n$jscomp$214.wrapAll(t$jscomp$413);
        } else {
          e$jscomp$300.append(t$jscomp$413);
        }
      });
    },
    wrap : function(t$jscomp$414) {
      var e$jscomp$301 = h$jscomp$6.isFunction(t$jscomp$414);
      return this.each(function(n$jscomp$215) {
        h$jscomp$6(this).wrapAll(e$jscomp$301 ? t$jscomp$414.call(this, n$jscomp$215) : t$jscomp$414);
      });
    },
    unwrap : function() {
      return this.parent().each(function() {
        if (!h$jscomp$6.nodeName(this, "body")) {
          h$jscomp$6(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  h$jscomp$6.expr.filters.hidden = function(t$jscomp$415) {
    return f$jscomp$1.reliableHiddenOffsets() ? t$jscomp$415.offsetWidth <= 0 && t$jscomp$415.offsetHeight <= 0 && !t$jscomp$415.getClientRects().length : function(t$jscomp$416) {
      if (!h$jscomp$6.contains(t$jscomp$416.ownerDocument || i$jscomp$3, t$jscomp$416)) {
        return true;
      }
      for (; t$jscomp$416 && 1 === t$jscomp$416.nodeType;) {
        if ("none" === He$jscomp$0(t$jscomp$416) || "hidden" === t$jscomp$416.type) {
          return true;
        }
        t$jscomp$416 = t$jscomp$416.parentNode;
      }
      return false;
    }(t$jscomp$415);
  };
  h$jscomp$6.expr.filters.visible = function(t$jscomp$417) {
    return !h$jscomp$6.expr.filters.hidden(t$jscomp$417);
  };
  var qe$jscomp$0 = /%20/g;
  var Xe$jscomp$0 = /\[\]$/;
  var $e$jscomp$0 = /\r?\n/g;
  var We$jscomp$0 = /^(?:submit|button|image|reset|file)$/i;
  var Ge$jscomp$0 = /^(?:input|select|textarea|keygen)/i;
  h$jscomp$6.param = function(t$jscomp$418, e$jscomp$302) {
    var n$jscomp$216;
    var i$jscomp$142 = [];
    var o$jscomp$119 = function(t$jscomp$419, e$jscomp$303) {
      e$jscomp$303 = h$jscomp$6.isFunction(e$jscomp$303) ? e$jscomp$303() : null == e$jscomp$303 ? "" : e$jscomp$303;
      i$jscomp$142[i$jscomp$142.length] = encodeURIComponent(t$jscomp$419) + "=" + encodeURIComponent(e$jscomp$303);
    };
    if (void 0 === e$jscomp$302 && (e$jscomp$302 = h$jscomp$6.ajaxSettings && h$jscomp$6.ajaxSettings.traditional), h$jscomp$6.isArray(t$jscomp$418) || t$jscomp$418.jquery && !h$jscomp$6.isPlainObject(t$jscomp$418)) {
      h$jscomp$6.each(t$jscomp$418, function() {
        o$jscomp$119(this.name, this.value);
      });
    } else {
      for (n$jscomp$216 in t$jscomp$418) {
        Ve$jscomp$0(n$jscomp$216, t$jscomp$418[n$jscomp$216], e$jscomp$302, o$jscomp$119);
      }
    }
    return i$jscomp$142.join("&").replace(qe$jscomp$0, "+");
  };
  h$jscomp$6.fn.extend({
    serialize : function() {
      return h$jscomp$6.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        var t$jscomp$420 = h$jscomp$6.prop(this, "elements");
        return t$jscomp$420 ? h$jscomp$6.makeArray(t$jscomp$420) : this;
      }).filter(function() {
        var t$jscomp$421 = this.type;
        return this.name && !h$jscomp$6(this).is(":disabled") && Ge$jscomp$0.test(this.nodeName) && !We$jscomp$0.test(t$jscomp$421) && (this.checked || !Y$jscomp$0.test(t$jscomp$421));
      }).map(function(t$jscomp$422, e$jscomp$304) {
        var n$jscomp$217 = h$jscomp$6(this).val();
        return null == n$jscomp$217 ? null : h$jscomp$6.isArray(n$jscomp$217) ? h$jscomp$6.map(n$jscomp$217, function(t$jscomp$423) {
          return {
            name : e$jscomp$304.name,
            value : t$jscomp$423.replace($e$jscomp$0, "\r\n")
          };
        }) : {
          name : e$jscomp$304.name,
          value : n$jscomp$217.replace($e$jscomp$0, "\r\n")
        };
      }).get();
    }
  });
  h$jscomp$6.ajaxSettings.xhr = void 0 !== t$jscomp$2.ActiveXObject ? function() {
    return this.isLocal ? Ze$jscomp$0() : i$jscomp$3.documentMode > 8 ? Qe$jscomp$0() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Qe$jscomp$0() || Ze$jscomp$0();
  } : Qe$jscomp$0;
  var Ye$jscomp$0 = 0;
  var Ke$jscomp$0 = {};
  var Je$jscomp$0 = h$jscomp$6.ajaxSettings.xhr();
  if (t$jscomp$2.attachEvent) {
    t$jscomp$2.attachEvent("onunload", function() {
      var t$jscomp$424;
      for (t$jscomp$424 in Ke$jscomp$0) {
        Ke$jscomp$0[t$jscomp$424](void 0, true);
      }
    });
  }
  f$jscomp$1.cors = !!Je$jscomp$0 && "withCredentials" in Je$jscomp$0;
  if (Je$jscomp$0 = f$jscomp$1.ajax = !!Je$jscomp$0) {
    h$jscomp$6.ajaxTransport(function(e$jscomp$305) {
      var n$jscomp$218;
      if (!e$jscomp$305.crossDomain || f$jscomp$1.cors) {
        return {
          send : function(i$jscomp$143, o$jscomp$120) {
            var r$jscomp$95;
            var a$jscomp$67 = e$jscomp$305.xhr();
            var s$jscomp$54 = ++Ye$jscomp$0;
            if (a$jscomp$67.open(e$jscomp$305.type, e$jscomp$305.url, e$jscomp$305.async, e$jscomp$305.username, e$jscomp$305.password), e$jscomp$305.xhrFields) {
              for (r$jscomp$95 in e$jscomp$305.xhrFields) {
                a$jscomp$67[r$jscomp$95] = e$jscomp$305.xhrFields[r$jscomp$95];
              }
            }
            for (r$jscomp$95 in e$jscomp$305.mimeType && a$jscomp$67.overrideMimeType && a$jscomp$67.overrideMimeType(e$jscomp$305.mimeType), e$jscomp$305.crossDomain || i$jscomp$143["X-Requested-With"] || (i$jscomp$143["X-Requested-With"] = "XMLHttpRequest"), i$jscomp$143) {
              if (void 0 !== i$jscomp$143[r$jscomp$95]) {
                a$jscomp$67.setRequestHeader(r$jscomp$95, i$jscomp$143[r$jscomp$95] + "");
              }
            }
            a$jscomp$67.send(e$jscomp$305.hasContent && e$jscomp$305.data || null);
            n$jscomp$218 = function(t$jscomp$425, i$jscomp$144) {
              var r$jscomp$96;
              var u$jscomp$36;
              var c$jscomp$28;
              if (n$jscomp$218 && (i$jscomp$144 || 4 === a$jscomp$67.readyState)) {
                if (delete Ke$jscomp$0[s$jscomp$54], n$jscomp$218 = void 0, a$jscomp$67.onreadystatechange = h$jscomp$6.noop, i$jscomp$144) {
                  if (4 !== a$jscomp$67.readyState) {
                    a$jscomp$67.abort();
                  }
                } else {
                  c$jscomp$28 = {};
                  r$jscomp$96 = a$jscomp$67.status;
                  if ("string" == typeof a$jscomp$67.responseText) {
                    c$jscomp$28.text = a$jscomp$67.responseText;
                  }
                  try {
                    u$jscomp$36 = a$jscomp$67.statusText;
                  } catch (t$jscomp$426) {
                    u$jscomp$36 = "";
                  }
                  if (r$jscomp$96 || !e$jscomp$305.isLocal || e$jscomp$305.crossDomain) {
                    if (1223 === r$jscomp$96) {
                      r$jscomp$96 = 204;
                    }
                  } else {
                    r$jscomp$96 = c$jscomp$28.text ? 200 : 404;
                  }
                }
              }
              if (c$jscomp$28) {
                o$jscomp$120(r$jscomp$96, u$jscomp$36, c$jscomp$28, a$jscomp$67.getAllResponseHeaders());
              }
            };
            if (e$jscomp$305.async) {
              if (4 === a$jscomp$67.readyState) {
                t$jscomp$2.setTimeout(n$jscomp$218);
              } else {
                a$jscomp$67.onreadystatechange = Ke$jscomp$0[s$jscomp$54] = n$jscomp$218;
              }
            } else {
              n$jscomp$218();
            }
          },
          abort : function() {
            if (n$jscomp$218) {
              n$jscomp$218(void 0, true);
            }
          }
        };
      }
    });
  }
  h$jscomp$6.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /\b(?:java|ecma)script\b/
    },
    converters : {
      "text script" : function(t$jscomp$427) {
        return h$jscomp$6.globalEval(t$jscomp$427), t$jscomp$427;
      }
    }
  });
  h$jscomp$6.ajaxPrefilter("script", function(t$jscomp$428) {
    if (void 0 === t$jscomp$428.cache) {
      t$jscomp$428.cache = false;
    }
    if (t$jscomp$428.crossDomain) {
      t$jscomp$428.type = "GET";
      t$jscomp$428.global = false;
    }
  });
  h$jscomp$6.ajaxTransport("script", function(t$jscomp$429) {
    if (t$jscomp$429.crossDomain) {
      var e$jscomp$306;
      var n$jscomp$219 = i$jscomp$3.head || h$jscomp$6("head")[0] || i$jscomp$3.documentElement;
      return {
        send : function(o$jscomp$121, r$jscomp$97) {
          (e$jscomp$306 = i$jscomp$3.createElement("script")).async = true;
          if (t$jscomp$429.scriptCharset) {
            e$jscomp$306.charset = t$jscomp$429.scriptCharset;
          }
          e$jscomp$306.src = t$jscomp$429.url;
          e$jscomp$306.onload = e$jscomp$306.onreadystatechange = function(t$jscomp$430, n$jscomp$220) {
            if (n$jscomp$220 || !e$jscomp$306.readyState || /loaded|complete/.test(e$jscomp$306.readyState)) {
              e$jscomp$306.onload = e$jscomp$306.onreadystatechange = null;
              if (e$jscomp$306.parentNode) {
                e$jscomp$306.parentNode.removeChild(e$jscomp$306);
              }
              e$jscomp$306 = null;
              if (!n$jscomp$220) {
                r$jscomp$97(200, "success");
              }
            }
          };
          n$jscomp$219.insertBefore(e$jscomp$306, n$jscomp$219.firstChild);
        },
        abort : function() {
          if (e$jscomp$306) {
            e$jscomp$306.onload(void 0, true);
          }
        }
      };
    }
  });
  var tn$jscomp$0 = [];
  var en$jscomp$0 = /(=)\?(?=&|$)|\?\?/;
  h$jscomp$6.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var t$jscomp$431 = tn$jscomp$0.pop() || h$jscomp$6.expando + "_" + Ce$jscomp$0++;
      return this[t$jscomp$431] = true, t$jscomp$431;
    }
  });
  h$jscomp$6.ajaxPrefilter("json jsonp", function(e$jscomp$307, n$jscomp$221, i$jscomp$145) {
    var o$jscomp$122;
    var r$jscomp$98;
    var a$jscomp$68;
    var s$jscomp$55 = false !== e$jscomp$307.jsonp && (en$jscomp$0.test(e$jscomp$307.url) ? "url" : "string" == typeof e$jscomp$307.data && 0 === (e$jscomp$307.contentType || "").indexOf("application/x-www-form-urlencoded") && en$jscomp$0.test(e$jscomp$307.data) && "data");
    return s$jscomp$55 || "jsonp" === e$jscomp$307.dataTypes[0] ? (o$jscomp$122 = e$jscomp$307.jsonpCallback = h$jscomp$6.isFunction(e$jscomp$307.jsonpCallback) ? e$jscomp$307.jsonpCallback() : e$jscomp$307.jsonpCallback, s$jscomp$55 ? e$jscomp$307[s$jscomp$55] = e$jscomp$307[s$jscomp$55].replace(en$jscomp$0, "$1" + o$jscomp$122) : false !== e$jscomp$307.jsonp && (e$jscomp$307.url += (Se$jscomp$0.test(e$jscomp$307.url) ? "&" : "?") + e$jscomp$307.jsonp + "=" + o$jscomp$122), e$jscomp$307.converters["script json"] = 
    function() {
      return a$jscomp$68 || h$jscomp$6.error(o$jscomp$122 + " was not called"), a$jscomp$68[0];
    }, e$jscomp$307.dataTypes[0] = "json", r$jscomp$98 = t$jscomp$2[o$jscomp$122], t$jscomp$2[o$jscomp$122] = function() {
      a$jscomp$68 = arguments;
    }, i$jscomp$145.always(function() {
      if (void 0 === r$jscomp$98) {
        h$jscomp$6(t$jscomp$2).removeProp(o$jscomp$122);
      } else {
        t$jscomp$2[o$jscomp$122] = r$jscomp$98;
      }
      if (e$jscomp$307[o$jscomp$122]) {
        e$jscomp$307.jsonpCallback = n$jscomp$221.jsonpCallback;
        tn$jscomp$0.push(o$jscomp$122);
      }
      if (a$jscomp$68 && h$jscomp$6.isFunction(r$jscomp$98)) {
        r$jscomp$98(a$jscomp$68[0]);
      }
      a$jscomp$68 = r$jscomp$98 = void 0;
    }), "script") : void 0;
  });
  h$jscomp$6.parseHTML = function(t$jscomp$432, e$jscomp$308, n$jscomp$222) {
    if (!t$jscomp$432 || "string" != typeof t$jscomp$432) {
      return null;
    }
    if ("boolean" == typeof e$jscomp$308) {
      n$jscomp$222 = e$jscomp$308;
      e$jscomp$308 = false;
    }
    e$jscomp$308 = e$jscomp$308 || i$jscomp$3;
    var o$jscomp$123 = T$jscomp$0.exec(t$jscomp$432);
    var r$jscomp$99 = !n$jscomp$222 && [];
    return o$jscomp$123 ? [e$jscomp$308.createElement(o$jscomp$123[1])] : (o$jscomp$123 = st$jscomp$0([t$jscomp$432], e$jscomp$308, r$jscomp$99), r$jscomp$99 && r$jscomp$99.length && h$jscomp$6(r$jscomp$99).remove(), h$jscomp$6.merge([], o$jscomp$123.childNodes));
  };
  var nn$jscomp$0 = h$jscomp$6.fn.load;
  h$jscomp$6.fn.load = function(t$jscomp$433, e$jscomp$309, n$jscomp$223) {
    if ("string" != typeof t$jscomp$433 && nn$jscomp$0) {
      return nn$jscomp$0.apply(this, arguments);
    }
    var i$jscomp$146;
    var o$jscomp$124;
    var r$jscomp$100;
    var a$jscomp$69 = this;
    var s$jscomp$56 = t$jscomp$433.indexOf(" ");
    return s$jscomp$56 > -1 && (i$jscomp$146 = h$jscomp$6.trim(t$jscomp$433.slice(s$jscomp$56, t$jscomp$433.length)), t$jscomp$433 = t$jscomp$433.slice(0, s$jscomp$56)), h$jscomp$6.isFunction(e$jscomp$309) ? (n$jscomp$223 = e$jscomp$309, e$jscomp$309 = void 0) : e$jscomp$309 && "object" == typeof e$jscomp$309 && (o$jscomp$124 = "POST"), a$jscomp$69.length > 0 && h$jscomp$6.ajax({
      url : t$jscomp$433,
      type : o$jscomp$124 || "GET",
      dataType : "html",
      data : e$jscomp$309
    }).done(function(t$jscomp$434) {
      r$jscomp$100 = arguments;
      a$jscomp$69.html(i$jscomp$146 ? h$jscomp$6("<div>").append(h$jscomp$6.parseHTML(t$jscomp$434)).find(i$jscomp$146) : t$jscomp$434);
    }).always(n$jscomp$223 && function(t$jscomp$435, e$jscomp$310) {
      a$jscomp$69.each(function() {
        n$jscomp$223.apply(this, r$jscomp$100 || [t$jscomp$435.responseText, e$jscomp$310, t$jscomp$435]);
      });
    }), this;
  };
  h$jscomp$6.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t$jscomp$436, e$jscomp$311) {
    h$jscomp$6.fn[e$jscomp$311] = function(t$jscomp$437) {
      return this.on(e$jscomp$311, t$jscomp$437);
    };
  });
  h$jscomp$6.expr.filters.animated = function(t$jscomp$438) {
    return h$jscomp$6.grep(h$jscomp$6.timers, function(e$jscomp$312) {
      return t$jscomp$438 === e$jscomp$312.elem;
    }).length;
  };
  h$jscomp$6.offset = {
    setOffset : function(t$jscomp$439, e$jscomp$313, n$jscomp$224) {
      var i$jscomp$147;
      var o$jscomp$125;
      var r$jscomp$101;
      var a$jscomp$70;
      var s$jscomp$57;
      var u$jscomp$37;
      var c$jscomp$29 = h$jscomp$6.css(t$jscomp$439, "position");
      var l$jscomp$26 = h$jscomp$6(t$jscomp$439);
      var f$jscomp$14 = {};
      if ("static" === c$jscomp$29) {
        t$jscomp$439.style.position = "relative";
      }
      s$jscomp$57 = l$jscomp$26.offset();
      r$jscomp$101 = h$jscomp$6.css(t$jscomp$439, "top");
      u$jscomp$37 = h$jscomp$6.css(t$jscomp$439, "left");
      if (("absolute" === c$jscomp$29 || "fixed" === c$jscomp$29) && h$jscomp$6.inArray("auto", [r$jscomp$101, u$jscomp$37]) > -1) {
        a$jscomp$70 = (i$jscomp$147 = l$jscomp$26.position()).top;
        o$jscomp$125 = i$jscomp$147.left;
      } else {
        a$jscomp$70 = parseFloat(r$jscomp$101) || 0;
        o$jscomp$125 = parseFloat(u$jscomp$37) || 0;
      }
      if (h$jscomp$6.isFunction(e$jscomp$313)) {
        e$jscomp$313 = e$jscomp$313.call(t$jscomp$439, n$jscomp$224, h$jscomp$6.extend({}, s$jscomp$57));
      }
      if (null != e$jscomp$313.top) {
        f$jscomp$14.top = e$jscomp$313.top - s$jscomp$57.top + a$jscomp$70;
      }
      if (null != e$jscomp$313.left) {
        f$jscomp$14.left = e$jscomp$313.left - s$jscomp$57.left + o$jscomp$125;
      }
      if ("using" in e$jscomp$313) {
        e$jscomp$313.using.call(t$jscomp$439, f$jscomp$14);
      } else {
        l$jscomp$26.css(f$jscomp$14);
      }
    }
  };
  h$jscomp$6.fn.extend({
    offset : function(t$jscomp$440) {
      if (arguments.length) {
        return void 0 === t$jscomp$440 ? this : this.each(function(e$jscomp$315) {
          h$jscomp$6.offset.setOffset(this, t$jscomp$440, e$jscomp$315);
        });
      }
      var e$jscomp$314;
      var n$jscomp$225;
      var i$jscomp$148 = {
        top : 0,
        left : 0
      };
      var o$jscomp$126 = this[0];
      var r$jscomp$102 = o$jscomp$126 && o$jscomp$126.ownerDocument;
      return r$jscomp$102 ? (e$jscomp$314 = r$jscomp$102.documentElement, h$jscomp$6.contains(e$jscomp$314, o$jscomp$126) ? (void 0 !== o$jscomp$126.getBoundingClientRect && (i$jscomp$148 = o$jscomp$126.getBoundingClientRect()), n$jscomp$225 = on$jscomp$0(r$jscomp$102), {
        top : i$jscomp$148.top + (n$jscomp$225.pageYOffset || e$jscomp$314.scrollTop) - (e$jscomp$314.clientTop || 0),
        left : i$jscomp$148.left + (n$jscomp$225.pageXOffset || e$jscomp$314.scrollLeft) - (e$jscomp$314.clientLeft || 0)
      }) : i$jscomp$148) : void 0;
    },
    position : function() {
      if (this[0]) {
        var t$jscomp$441;
        var e$jscomp$316;
        var n$jscomp$226 = {
          top : 0,
          left : 0
        };
        var i$jscomp$149 = this[0];
        return "fixed" === h$jscomp$6.css(i$jscomp$149, "position") ? e$jscomp$316 = i$jscomp$149.getBoundingClientRect() : (t$jscomp$441 = this.offsetParent(), e$jscomp$316 = this.offset(), h$jscomp$6.nodeName(t$jscomp$441[0], "html") || (n$jscomp$226 = t$jscomp$441.offset()), n$jscomp$226.top += h$jscomp$6.css(t$jscomp$441[0], "borderTopWidth", true), n$jscomp$226.left += h$jscomp$6.css(t$jscomp$441[0], "borderLeftWidth", true)), {
          top : e$jscomp$316.top - n$jscomp$226.top - h$jscomp$6.css(i$jscomp$149, "marginTop", true),
          left : e$jscomp$316.left - n$jscomp$226.left - h$jscomp$6.css(i$jscomp$149, "marginLeft", true)
        };
      }
    },
    offsetParent : function() {
      return this.map(function() {
        var t$jscomp$442 = this.offsetParent;
        for (; t$jscomp$442 && !h$jscomp$6.nodeName(t$jscomp$442, "html") && "static" === h$jscomp$6.css(t$jscomp$442, "position");) {
          t$jscomp$442 = t$jscomp$442.offsetParent;
        }
        return t$jscomp$442 || Pt$jscomp$0;
      });
    }
  });
  h$jscomp$6.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(t$jscomp$443, e$jscomp$317) {
    var n$jscomp$227 = /Y/.test(e$jscomp$317);
    h$jscomp$6.fn[t$jscomp$443] = function(i$jscomp$150) {
      return V$jscomp$0(this, function(t$jscomp$444, i$jscomp$151, o$jscomp$127) {
        var r$jscomp$103 = on$jscomp$0(t$jscomp$444);
        return void 0 === o$jscomp$127 ? r$jscomp$103 ? e$jscomp$317 in r$jscomp$103 ? r$jscomp$103[e$jscomp$317] : r$jscomp$103.document.documentElement[i$jscomp$151] : t$jscomp$444[i$jscomp$151] : void(r$jscomp$103 ? r$jscomp$103.scrollTo(n$jscomp$227 ? h$jscomp$6(r$jscomp$103).scrollLeft() : o$jscomp$127, n$jscomp$227 ? o$jscomp$127 : h$jscomp$6(r$jscomp$103).scrollTop()) : t$jscomp$444[i$jscomp$151] = o$jscomp$127);
      }, t$jscomp$443, i$jscomp$150, arguments.length, null);
    };
  });
  h$jscomp$6.each(["top", "left"], function(t$jscomp$445, e$jscomp$318) {
    h$jscomp$6.cssHooks[e$jscomp$318] = qt$jscomp$0(f$jscomp$1.pixelPosition, function(t$jscomp$446, n$jscomp$228) {
      return n$jscomp$228 ? (n$jscomp$228 = jt$jscomp$0(t$jscomp$446, e$jscomp$318), Bt$jscomp$0.test(n$jscomp$228) ? h$jscomp$6(t$jscomp$446).position()[e$jscomp$318] + "px" : n$jscomp$228) : void 0;
    });
  });
  h$jscomp$6.each({
    Height : "height",
    Width : "width"
  }, function(t$jscomp$447, e$jscomp$319) {
    h$jscomp$6.each({
      padding : "inner" + t$jscomp$447,
      content : e$jscomp$319,
      "" : "outer" + t$jscomp$447
    }, function(n$jscomp$229, i$jscomp$152) {
      h$jscomp$6.fn[i$jscomp$152] = function(i$jscomp$153, o$jscomp$128) {
        var r$jscomp$104 = arguments.length && (n$jscomp$229 || "boolean" != typeof i$jscomp$153);
        var a$jscomp$71 = n$jscomp$229 || (true === i$jscomp$153 || true === o$jscomp$128 ? "margin" : "border");
        return V$jscomp$0(this, function(e$jscomp$320, n$jscomp$230, i$jscomp$154) {
          var o$jscomp$129;
          return h$jscomp$6.isWindow(e$jscomp$320) ? e$jscomp$320.document.documentElement["client" + t$jscomp$447] : 9 === e$jscomp$320.nodeType ? (o$jscomp$129 = e$jscomp$320.documentElement, Math.max(e$jscomp$320.body["scroll" + t$jscomp$447], o$jscomp$129["scroll" + t$jscomp$447], e$jscomp$320.body["offset" + t$jscomp$447], o$jscomp$129["offset" + t$jscomp$447], o$jscomp$129["client" + t$jscomp$447])) : void 0 === i$jscomp$154 ? h$jscomp$6.css(e$jscomp$320, n$jscomp$230, a$jscomp$71) : h$jscomp$6.style(e$jscomp$320, 
          n$jscomp$230, i$jscomp$154, a$jscomp$71);
        }, e$jscomp$319, r$jscomp$104 ? i$jscomp$153 : void 0, r$jscomp$104, null);
      };
    });
  });
  h$jscomp$6.fn.extend({
    bind : function(t$jscomp$448, e$jscomp$321, n$jscomp$231) {
      return this.on(t$jscomp$448, null, e$jscomp$321, n$jscomp$231);
    },
    unbind : function(t$jscomp$449, e$jscomp$322) {
      return this.off(t$jscomp$449, null, e$jscomp$322);
    },
    delegate : function(t$jscomp$450, e$jscomp$323, n$jscomp$232, i$jscomp$155) {
      return this.on(e$jscomp$323, t$jscomp$450, n$jscomp$232, i$jscomp$155);
    },
    undelegate : function(t$jscomp$451, e$jscomp$324, n$jscomp$233) {
      return 1 === arguments.length ? this.off(t$jscomp$451, "**") : this.off(e$jscomp$324, t$jscomp$451 || "**", n$jscomp$233);
    }
  });
  h$jscomp$6.fn.size = function() {
    return this.length;
  };
  h$jscomp$6.fn.andSelf = h$jscomp$6.fn.addBack;
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function() {
      return h$jscomp$6;
    });
  }
  var rn$jscomp$0 = t$jscomp$2.jQuery;
  var an$jscomp$0 = t$jscomp$2.$;
  return h$jscomp$6.noConflict = function(e$jscomp$325) {
    return t$jscomp$2.$ === h$jscomp$6 && (t$jscomp$2.$ = an$jscomp$0), e$jscomp$325 && t$jscomp$2.jQuery === h$jscomp$6 && (t$jscomp$2.jQuery = rn$jscomp$0), h$jscomp$6;
  }, e$jscomp$8 || (t$jscomp$2.jQuery = t$jscomp$2.$ = h$jscomp$6), h$jscomp$6;
}), function(t$jscomp$452) {
  var e$jscomp$326 = false;
  if ("function" == typeof define && define.amd && (define(t$jscomp$452), e$jscomp$326 = true), "object" == typeof exports && (module.exports = t$jscomp$452(), e$jscomp$326 = true), !e$jscomp$326) {
    var n$jscomp$234 = window.Cookies;
    var i$jscomp$156 = window.Cookies = t$jscomp$452();
    i$jscomp$156.noConflict = function() {
      return window.Cookies = n$jscomp$234, i$jscomp$156;
    };
  }
}(function() {
  function t$jscomp$453() {
    var t$jscomp$454 = 0;
    var e$jscomp$327 = {};
    for (; t$jscomp$454 < arguments.length; t$jscomp$454++) {
      var n$jscomp$235 = arguments[t$jscomp$454];
      var i$jscomp$157;
      for (i$jscomp$157 in n$jscomp$235) {
        e$jscomp$327[i$jscomp$157] = n$jscomp$235[i$jscomp$157];
      }
    }
    return e$jscomp$327;
  }
  return function e$jscomp$328(n$jscomp$236) {
    function i$jscomp$158(e$jscomp$329, o$jscomp$130, r$jscomp$105) {
      var a$jscomp$72;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if ("number" == typeof(r$jscomp$105 = t$jscomp$453({
            path : "/"
          }, i$jscomp$158.defaults, r$jscomp$105)).expires) {
            var s$jscomp$58 = new Date;
            s$jscomp$58.setMilliseconds(s$jscomp$58.getMilliseconds() + 864E5 * r$jscomp$105.expires);
            r$jscomp$105.expires = s$jscomp$58;
          }
          r$jscomp$105.expires = r$jscomp$105.expires ? r$jscomp$105.expires.toUTCString() : "";
          try {
            a$jscomp$72 = JSON.stringify(o$jscomp$130);
            if (/^[\{\[]/.test(a$jscomp$72)) {
              o$jscomp$130 = a$jscomp$72;
            }
          } catch (t$jscomp$455) {
          }
          o$jscomp$130 = n$jscomp$236.write ? n$jscomp$236.write(o$jscomp$130, e$jscomp$329) : encodeURIComponent(String(o$jscomp$130)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          e$jscomp$329 = (e$jscomp$329 = (e$jscomp$329 = encodeURIComponent(String(e$jscomp$329))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
          var u$jscomp$38 = "";
          var c$jscomp$30;
          for (c$jscomp$30 in r$jscomp$105) {
            if (r$jscomp$105[c$jscomp$30]) {
              u$jscomp$38 = u$jscomp$38 + ("; " + c$jscomp$30);
              if (true !== r$jscomp$105[c$jscomp$30]) {
                u$jscomp$38 = u$jscomp$38 + ("=" + r$jscomp$105[c$jscomp$30]);
              }
            }
          }
          return document.cookie = e$jscomp$329 + "=" + o$jscomp$130 + u$jscomp$38;
        }
        if (!e$jscomp$329) {
          a$jscomp$72 = {};
        }
        var l$jscomp$27 = document.cookie ? document.cookie.split("; ") : [];
        var f$jscomp$15 = /(%[0-9A-Z]{2})+/g;
        var d$jscomp$15 = 0;
        for (; d$jscomp$15 < l$jscomp$27.length; d$jscomp$15++) {
          var h$jscomp$11 = l$jscomp$27[d$jscomp$15].split("=");
          var p$jscomp$14 = h$jscomp$11.slice(1).join("=");
          if (!(this.json || '"' !== p$jscomp$14.charAt(0))) {
            p$jscomp$14 = p$jscomp$14.slice(1, -1);
          }
          try {
            var g$jscomp$11 = h$jscomp$11[0].replace(f$jscomp$15, decodeURIComponent);
            if (p$jscomp$14 = n$jscomp$236.read ? n$jscomp$236.read(p$jscomp$14, g$jscomp$11) : n$jscomp$236(p$jscomp$14, g$jscomp$11) || p$jscomp$14.replace(f$jscomp$15, decodeURIComponent), this.json) {
              try {
                p$jscomp$14 = JSON.parse(p$jscomp$14);
              } catch (t$jscomp$456) {
              }
            }
            if (e$jscomp$329 === g$jscomp$11) {
              a$jscomp$72 = p$jscomp$14;
              break;
            }
            if (!e$jscomp$329) {
              a$jscomp$72[g$jscomp$11] = p$jscomp$14;
            }
          } catch (t$jscomp$457) {
          }
        }
        return a$jscomp$72;
      }
    }
    return i$jscomp$158.set = i$jscomp$158, i$jscomp$158.get = function(t$jscomp$458) {
      return i$jscomp$158.call(i$jscomp$158, t$jscomp$458);
    }, i$jscomp$158.getJSON = function() {
      return i$jscomp$158.apply({
        json : true
      }, [].slice.call(arguments));
    }, i$jscomp$158.defaults = {}, i$jscomp$158.remove = function(e$jscomp$330, n$jscomp$237) {
      i$jscomp$158(e$jscomp$330, "", t$jscomp$453(n$jscomp$237, {
        expires : -1
      }));
    }, i$jscomp$158.withConverter = e$jscomp$328, i$jscomp$158;
  }(function() {
  });
});
var HTML5AFG = function(t$jscomp$459) {
  this.show = function() {
    e$jscomp$331.initialize();
    e$jscomp$331.requestAds(t$jscomp$459.url);
  };
  let e$jscomp$331 = new google.outstream.AdsController(t$jscomp$459.container, function() {
    e$jscomp$331.showAd();
  }, t$jscomp$459.done.bind(t$jscomp$459.container));
};
var WebGLReport = {
  cookie : "ApexJSWebGLReport",
  webgl : function(t$jscomp$460) {
    const e$jscomp$332 = ["webgl2", "webgl", "experimental-webgl"];
    for (let n$jscomp$238 in e$jscomp$332) {
      let i$jscomp$159 = t$jscomp$460.getContext(e$jscomp$332[n$jscomp$238]);
      if (i$jscomp$159) {
        return {
          name : e$jscomp$332[n$jscomp$238],
          ctx : i$jscomp$159
        };
      }
    }
    return {
      name : "none"
    };
  },
  collect : function() {
    let t$jscomp$461 = {};
    let e$jscomp$333 = document.createElement("canvas");
    let n$jscomp$239 = this.webgl(e$jscomp$333);
    if (t$jscomp$461.webgl = n$jscomp$239.name, "none" != n$jscomp$239.name) {
      let e$jscomp$334 = n$jscomp$239.ctx;
      t$jscomp$461.extensions = e$jscomp$334.getSupportedExtensions();
      const i$jscomp$160 = ["RENDERER", "SHADING_LANGUAGE_VERSION", "VENDOR", "VERSION", "SAMPLE_BUFFERS", "SAMPLES", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MAX_3D_TEXTURE_SIZE", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", 
      "MAX_COLOR_ATTACHMENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_DRAW_BUFFERS", "MAX_ELEMENT_INDEX", "MAX_ELEMENTS_INDICES", "MAX_ELEMENTS_VERTICES", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_SAMPLES", "MAX_SERVER_WAIT_TIMEOUT", "MAX_TEXTURE_LOD_BIAS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", 
      "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_VARYING_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MIN_PROGRAM_TEXEL_OFFSET", "UNIFORM_BUFFER_OFFSET_ALIGNMENT", "UNPACK_IMAGE_HEIGHT", "UNPACK_ROW_LENGTH", "UNPACK_SKIP_IMAGES", "UNPACK_SKIP_PIXELS", "UNPACK_SKIP_ROWS"];
      t$jscomp$461.parameters = {};
      for (let n$jscomp$240 in i$jscomp$160) {
        let o$jscomp$131 = e$jscomp$334.getParameter(e$jscomp$334[i$jscomp$160[n$jscomp$240]]);
        if (null !== o$jscomp$131) {
          t$jscomp$461.parameters[i$jscomp$160[n$jscomp$240]] = o$jscomp$131;
        }
      }
    }
    return t$jscomp$461;
  },
  post : function(t$jscomp$462, e$jscomp$335) {
    if (Cookies.get(this.cookie) != e$jscomp$335) {
      Cookies.set(this.cookie, e$jscomp$335, {
        expires : 365
      });
      $.post(t$jscomp$462, {
        report : JSON.stringify(this.collect())
      });
    }
  }
};
if (void 0 === Apex) {
  var Apex = {};
}
function getString(t$jscomp$463) {
  var e$jscomp$336 = new DataView(t$jscomp$463);
  var n$jscomp$241 = t$jscomp$463.byteLength / 2;
  var i$jscomp$161 = "";
  var o$jscomp$132 = 0;
  for (; o$jscomp$132 < n$jscomp$241; ++o$jscomp$132) {
    var r$jscomp$106 = e$jscomp$336.getUint16(2 * o$jscomp$132, true);
    if (!r$jscomp$106) {
      return i$jscomp$161;
    }
    i$jscomp$161 = i$jscomp$161 + String.fromCharCode(r$jscomp$106);
  }
  return i$jscomp$161;
}
void 0 === Apex.Widgets && (Apex.Widgets = {}), Apex.Widgets.AdinPlay = {
  clear : function(t$jscomp$464) {
    let e$jscomp$337 = document.getElementById(t$jscomp$464);
    for (; e$jscomp$337 && e$jscomp$337.firstChild;) {
      e$jscomp$337.removeChild(e$jscomp$337.firstChild);
    }
  },
  update : function(t$jscomp$465) {
    if ("undefined" == typeof aiptag) {
      return;
    }
    let e$jscomp$338 = t$jscomp$465;
    if (void 0 === this.state[t$jscomp$465]) {
      this.state[t$jscomp$465] = true;
      aiptag.cmd.display.push(function() {
        aipDisplayTag.display(e$jscomp$338);
      });
    } else {
      aiptag.cmd.display.push(function() {
        aipDisplayTag.refresh(e$jscomp$338);
      });
    }
  },
  state : {}
};
var proto = {
  close : {
    send : function(t$jscomp$466, e$jscomp$339) {
      var n$jscomp$242 = new ArrayBuffer(1);
      (new DataView(n$jscomp$242)).setUint8(0, 0);
      t$jscomp$466.send(n$jscomp$242);
    }
  },
  ping : {
    send : function(t$jscomp$467, e$jscomp$340) {
      var n$jscomp$243 = new ArrayBuffer(5);
      var i$jscomp$162 = new DataView(n$jscomp$243);
      i$jscomp$162.setUint8(0, 1);
      i$jscomp$162.setUint32(1, e$jscomp$340.time, true);
      t$jscomp$467.send(n$jscomp$243);
    }
  },
  pong : {},
  join : {},
  self : {},
  move_to : {
    send : function(t$jscomp$468, e$jscomp$341) {
      var n$jscomp$244 = new ArrayBuffer(7);
      var i$jscomp$163 = new DataView(n$jscomp$244);
      i$jscomp$163.setUint8(0, 5);
      i$jscomp$163.setUint16(1, (e$jscomp$341.position.x - -101) / 202 * 65535, true);
      i$jscomp$163.setUint16(3, (e$jscomp$341.position.y - -101) / 202 * 65535, true);
      i$jscomp$163.setUint8(5, e$jscomp$341.follow);
      i$jscomp$163.setUint8(6, e$jscomp$341.merge);
      t$jscomp$468.send(n$jscomp$244);
    }
  },
  create_unit : {
    state : {
      bloated : 1,
      poisoned : 2,
      stunned : 4
    }
  },
  modify_unit : {
    state : {
      bloated : 1,
      poisoned : 2,
      stunned : 4
    }
  },
  alter_unit : {
    state : {
      consume : 0
    }
  },
  move_unit : {},
  touch_unit : {},
  spawn_unit : {},
  join_unit : {},
  merge_units : {},
  attack_unit : {},
  kill_unit : {},
  area_impulse : {},
  unit_impulse : {},
  show_bonus : {},
  hide_bonus : {},
  consume_bonus : {},
  bubble : {},
  hello : {
    send : function(t$jscomp$469, e$jscomp$342) {
      var n$jscomp$245 = new ArrayBuffer(52);
      var i$jscomp$164 = new DataView(n$jscomp$245);
      i$jscomp$164.setUint8(0, 22);
      var o$jscomp$133 = 0;
      for (; o$jscomp$133 < 25; ++o$jscomp$133) {
        i$jscomp$164.setUint16(1 + 2 * o$jscomp$133, o$jscomp$133 < e$jscomp$342.name.length ? e$jscomp$342.name.charCodeAt(o$jscomp$133) : 0, true);
      }
      i$jscomp$164.setUint8(51, e$jscomp$342.appearance);
      t$jscomp$469.send(n$jscomp$245);
    }
  },
  introduce : {},
  champions : {},
  leaderboard : {},
  minimap : {},
  game_over : {},
  system : {},
  dispatchOne : function(t$jscomp$470, e$jscomp$343) {
    var n$jscomp$246 = new DataView(t$jscomp$470.data);
    var i$jscomp$165 = n$jscomp$246.getUint8(0);
    this.dispatch(i$jscomp$165, n$jscomp$246, 1, dispatch);
  },
  dispatchGroup : function(t$jscomp$471, e$jscomp$344) {
    var n$jscomp$247 = new DataView(t$jscomp$471.data);
    var i$jscomp$166 = 0;
    e$jscomp$344.onBegin();
    for (; i$jscomp$166 < n$jscomp$247.byteLength;) {
      var o$jscomp$134 = n$jscomp$247.getUint8(i$jscomp$166++);
      var r$jscomp$107 = n$jscomp$247.getUint8(i$jscomp$166++);
      var a$jscomp$73 = 0;
      for (; a$jscomp$73 < o$jscomp$134; ++a$jscomp$73) {
        i$jscomp$166 = i$jscomp$166 + this.dispatch(r$jscomp$107, n$jscomp$247, i$jscomp$166, e$jscomp$344);
      }
    }
    e$jscomp$344.onCommit();
  },
  dispatch : function(t$jscomp$472, e$jscomp$345, n$jscomp$248, i$jscomp$167) {
    switch(t$jscomp$472) {
      case 2:
        return i$jscomp$167.onPong({
          time : e$jscomp$345.getUint32(0 + n$jscomp$248, true)
        }), 4;
      case 4:
        return i$jscomp$167.onSelf({
          room : getString(e$jscomp$345.buffer.slice(0 + n$jscomp$248, 8 + n$jscomp$248)),
          position : {
            x : e$jscomp$345.getUint16(8 + n$jscomp$248, true) / 65535 * 202 - 101,
            y : e$jscomp$345.getUint16(8 + n$jscomp$248 + 2, true) / 65535 * 202 - 101
          },
          velocity : {
            x : e$jscomp$345.getUint16(12 + n$jscomp$248, true) / 65535 * 100 - 50,
            y : e$jscomp$345.getUint16(12 + n$jscomp$248 + 2, true) / 65535 * 100 - 50
          },
          owner_id : e$jscomp$345.getUint16(16 + n$jscomp$248, true),
          queen_id : e$jscomp$345.getUint16(18 + n$jscomp$248, true)
        }), 20;
      case 6:
        return i$jscomp$167.onCreateUnit({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          owner_id : e$jscomp$345.getUint16(2 + n$jscomp$248, true),
          type : e$jscomp$345.getUint8(4 + n$jscomp$248),
          state : e$jscomp$345.getUint8(5 + n$jscomp$248),
          radius : e$jscomp$345.getUint8(6 + n$jscomp$248, true) / 255 * 1.5 + 0,
          position : {
            x : e$jscomp$345.getUint16(7 + n$jscomp$248, true) / 65535 * 202 - 101,
            y : e$jscomp$345.getUint16(7 + n$jscomp$248 + 2, true) / 65535 * 202 - 101
          },
          velocity : {
            x : e$jscomp$345.getUint8(11 + n$jscomp$248, true) / 255 * 1 + 0,
            y : e$jscomp$345.getUint8(11 + n$jscomp$248 + 1, true) / 255 * 6.283186 - 3.141593
          },
          angle : e$jscomp$345.getUint8(13 + n$jscomp$248, true) / 255 * 6.283186 - 3.141593,
          life : e$jscomp$345.getUint8(14 + n$jscomp$248, true) / 255 * 1 + 0
        }), 15;
      case 7:
        return i$jscomp$167.onModifyUnit({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          owner_id : e$jscomp$345.getUint16(2 + n$jscomp$248, true),
          type : e$jscomp$345.getUint8(4 + n$jscomp$248),
          state : e$jscomp$345.getUint8(5 + n$jscomp$248),
          radius : e$jscomp$345.getUint8(6 + n$jscomp$248, true) / 255 * 1.5 + 0,
          life : e$jscomp$345.getUint8(7 + n$jscomp$248, true) / 255 * 1 + 0
        }), 8;
      case 8:
        return i$jscomp$167.onAlterUnit({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          state : e$jscomp$345.getUint8(2 + n$jscomp$248)
        }), 3;
      case 9:
        return i$jscomp$167.onMoveUnit({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          position : {
            x : e$jscomp$345.getUint16(2 + n$jscomp$248, true) / 65535 * 202 - 101,
            y : e$jscomp$345.getUint16(2 + n$jscomp$248 + 2, true) / 65535 * 202 - 101
          },
          velocity : {
            x : e$jscomp$345.getUint8(6 + n$jscomp$248, true) / 255 * 1 + 0,
            y : e$jscomp$345.getUint8(6 + n$jscomp$248 + 1, true) / 255 * 6.283186 - 3.141593
          },
          angle : e$jscomp$345.getUint8(8 + n$jscomp$248, true) / 255 * 6.284 - 3.142
        }), 9;
      case 10:
        return i$jscomp$167.onTouchUnit({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true)
        }), 2;
      case 14:
        return i$jscomp$167.onAttackUnit({
          who_id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          whom_id : e$jscomp$345.getUint16(2 + n$jscomp$248, true)
        }), 4;
      case 18:
        return i$jscomp$167.onShowBonus({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          position : {
            x : e$jscomp$345.getUint16(2 + n$jscomp$248, true) / 65535 * 202 - 101,
            y : e$jscomp$345.getUint16(2 + n$jscomp$248 + 2, true) / 65535 * 202 - 101
          },
          radius : e$jscomp$345.getUint8(6 + n$jscomp$248, true) / 255 * .5 + 0
        }), 7;
      case 19:
        return i$jscomp$167.onHideBonus({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true)
        }), 2;
      case 21:
        return i$jscomp$167.onBubble({
          position : {
            x : e$jscomp$345.getUint16(0 + n$jscomp$248, true) / 65535 * 202 - 101,
            y : e$jscomp$345.getUint16(0 + n$jscomp$248 + 2, true) / 65535 * 202 - 101
          }
        }), 4;
      case 23:
        return i$jscomp$167.onIntroduce({
          id : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          name : getString(e$jscomp$345.buffer.slice(2 + n$jscomp$248, 52 + n$jscomp$248)),
          appearance : e$jscomp$345.getUint8(52 + n$jscomp$248)
        }), 53;
      case 24:
        return i$jscomp$167.onChampions({
          today : getString(e$jscomp$345.buffer.slice(0 + n$jscomp$248, 50 + n$jscomp$248)),
          today_score : e$jscomp$345.getUint32(50 + n$jscomp$248, true),
          week : getString(e$jscomp$345.buffer.slice(54 + n$jscomp$248, 104 + n$jscomp$248)),
          week_score : e$jscomp$345.getUint32(104 + n$jscomp$248, true),
          month : getString(e$jscomp$345.buffer.slice(108 + n$jscomp$248, 158 + n$jscomp$248)),
          month_score : e$jscomp$345.getUint32(158 + n$jscomp$248, true),
          year : getString(e$jscomp$345.buffer.slice(162 + n$jscomp$248, 212 + n$jscomp$248)),
          year_score : e$jscomp$345.getUint32(212 + n$jscomp$248, true)
        }), 216;
      case 25:
        return i$jscomp$167.onLeaderboard({
          score : e$jscomp$345.getUint32(0 + n$jscomp$248, true),
          position : e$jscomp$345.getUint16(4 + n$jscomp$248, true),
          total : e$jscomp$345.getUint16(6 + n$jscomp$248, true),
          best : function() {
            var t$jscomp$473 = [];
            var i$jscomp$168 = 0;
            for (; i$jscomp$168 < 20; ++i$jscomp$168) {
              t$jscomp$473.push(e$jscomp$345.getUint32(8 + n$jscomp$248 + 4 * i$jscomp$168, true));
            }
            return t$jscomp$473;
          }()
        }), 88;
      case 26:
        return i$jscomp$167.onMinimap({
          self : e$jscomp$345.getUint16(0 + n$jscomp$248, true),
          count : e$jscomp$345.getUint16(2 + n$jscomp$248, true),
          positions : function() {
            var t$jscomp$474 = [];
            var i$jscomp$169 = 0;
            for (; i$jscomp$169 < 250; ++i$jscomp$169) {
              t$jscomp$474.push({
                x : e$jscomp$345.getUint8(4 + n$jscomp$248 + 2 * i$jscomp$169, true) / 255 * 2.05 - 1.025,
                y : e$jscomp$345.getUint8(4 + n$jscomp$248 + 2 * i$jscomp$169 + 1, true) / 255 * 2.05 - 1.025
              });
            }
            return t$jscomp$474;
          }()
        }), 504;
      case 27:
        return i$jscomp$167.onGameOver({
          best : e$jscomp$345.getUint32(0 + n$jscomp$248, true),
          killed : e$jscomp$345.getUint32(4 + n$jscomp$248, true),
          queens : e$jscomp$345.getUint32(8 + n$jscomp$248, true),
          lost : e$jscomp$345.getUint32(12 + n$jscomp$248, true),
          consumed : e$jscomp$345.getUint32(16 + n$jscomp$248, true),
          played : e$jscomp$345.getUint32(20 + n$jscomp$248, true)
        }), 24;
      case 28:
        return i$jscomp$167.onSystem({
          message : getString(e$jscomp$345.buffer.slice(0 + n$jscomp$248, 200 + n$jscomp$248))
        }), 200;
    }
  }
};
function smoothStep(t$jscomp$475, e$jscomp$346, n$jscomp$249) {
  var i$jscomp$170 = (t$jscomp$475 - e$jscomp$346) / (n$jscomp$249 - e$jscomp$346);
  return 2 * i$jscomp$170 * i$jscomp$170 * (3 - 2 * i$jscomp$170) - 1;
}
function sgn(t$jscomp$476) {
  return t$jscomp$476 > 0 ? 1 : t$jscomp$476 < 0 ? -1 : 0;
}
var vec2 = function(t$jscomp$477, e$jscomp$347) {
  this.x = t$jscomp$477;
  this.y = e$jscomp$347;
};
vec2.copy = function(t$jscomp$478) {
  return new vec2(t$jscomp$478.x, t$jscomp$478.y);
}, vec2.parse = function(t$jscomp$479) {
  return new vec2(parseFloat(t$jscomp$479.x), parseFloat(t$jscomp$479.y));
}, vec2.norm = function(t$jscomp$480) {
  return Math.sqrt(t$jscomp$480.x * t$jscomp$480.x + t$jscomp$480.y * t$jscomp$480.y);
}, vec2.normalize = function(t$jscomp$481) {
  var e$jscomp$348 = vec2.norm(t$jscomp$481);
  t$jscomp$481.x /= e$jscomp$348;
  t$jscomp$481.y /= e$jscomp$348;
}, vec2.normalized = function(t$jscomp$482) {
  return t$jscomp$482 = vec2.copy(t$jscomp$482), vec2.normalize(t$jscomp$482), t$jscomp$482;
}, vec2.plus = function(t$jscomp$483, e$jscomp$349) {
  return new vec2(t$jscomp$483.x + e$jscomp$349.x, t$jscomp$483.y + e$jscomp$349.y);
}, vec2.minus = function(t$jscomp$484, e$jscomp$350) {
  return new vec2(t$jscomp$484.x - e$jscomp$350.x, t$jscomp$484.y - e$jscomp$350.y);
}, vec2.mul = function(t$jscomp$485, e$jscomp$351) {
  return new vec2(e$jscomp$351.x * t$jscomp$485, e$jscomp$351.y * t$jscomp$485);
}, vec2.dot = function(t$jscomp$486, e$jscomp$352) {
  return t$jscomp$486.x * e$jscomp$352.x + t$jscomp$486.y * e$jscomp$352.y;
};
var vec3 = function(t$jscomp$487, e$jscomp$353, n$jscomp$250) {
  this.x = t$jscomp$487;
  this.y = e$jscomp$353;
  this.z = n$jscomp$250;
};
vec3.copy = function(t$jscomp$488) {
  return new vec3(t$jscomp$488.x, t$jscomp$488.y, t$jscomp$488.z);
}, vec3.from2 = function(t$jscomp$489) {
  return new vec3(t$jscomp$489.x, t$jscomp$489.y, 0);
}, vec3.from4 = function(t$jscomp$490) {
  return new vec3(t$jscomp$490.x / t$jscomp$490.w, t$jscomp$490.y / t$jscomp$490.w, t$jscomp$490.z / t$jscomp$490.w);
}, vec3.norm = function(t$jscomp$491) {
  return Math.sqrt(t$jscomp$491.x * t$jscomp$491.x + t$jscomp$491.y * t$jscomp$491.y + t$jscomp$491.z * t$jscomp$491.z);
}, vec3.rotateX = function(t$jscomp$492, e$jscomp$354) {
  var n$jscomp$251 = vec3.copy(t$jscomp$492);
  return n$jscomp$251.y = t$jscomp$492.y * Math.cos(e$jscomp$354) - t$jscomp$492.z * Math.sin(e$jscomp$354), n$jscomp$251.z = t$jscomp$492.y * Math.sin(e$jscomp$354) + t$jscomp$492.z * Math.cos(e$jscomp$354), n$jscomp$251;
}, vec3.rotateY = function(t$jscomp$493, e$jscomp$355) {
  var n$jscomp$252 = vec3.copy(t$jscomp$493);
  return n$jscomp$252.x = t$jscomp$493.x * Math.cos(e$jscomp$355) + t$jscomp$493.z * Math.sin(e$jscomp$355), n$jscomp$252.z = -t$jscomp$493.x * Math.sin(e$jscomp$355) + t$jscomp$493.z * Math.cos(e$jscomp$355), n$jscomp$252;
}, vec3.rotateZ = function(t$jscomp$494) {
  var e$jscomp$356 = vec3.copy(a);
  return e$jscomp$356.x = a.x * Math.cos(t$jscomp$494) - a.y * Math.sin(t$jscomp$494), e$jscomp$356.y = a.x * Math.sin(t$jscomp$494) + a.y * Math.cos(t$jscomp$494), e$jscomp$356;
}, vec3.normalize = function(t$jscomp$495) {
  var e$jscomp$357 = vec3.norm(t$jscomp$495);
  t$jscomp$495.x /= e$jscomp$357;
  t$jscomp$495.y /= e$jscomp$357;
  t$jscomp$495.z /= e$jscomp$357;
}, vec3.normalized = function(t$jscomp$496) {
  var e$jscomp$358 = vec3.copy(t$jscomp$496);
  return vec3.normalize(e$jscomp$358), e$jscomp$358;
}, vec3.plus = function(t$jscomp$497, e$jscomp$359) {
  return new vec3(t$jscomp$497.x + e$jscomp$359.x, t$jscomp$497.y + e$jscomp$359.y, t$jscomp$497.z + e$jscomp$359.z);
}, vec3.minus = function(t$jscomp$498, e$jscomp$360) {
  return new vec3(t$jscomp$498.x - e$jscomp$360.x, t$jscomp$498.y - e$jscomp$360.y, t$jscomp$498.z - e$jscomp$360.z);
}, vec3.mul = function(t$jscomp$499, e$jscomp$361) {
  return new vec3(e$jscomp$361.x * t$jscomp$499, e$jscomp$361.y * t$jscomp$499, e$jscomp$361.z * t$jscomp$499);
}, vec3.dot = function(t$jscomp$500, e$jscomp$362) {
  return t$jscomp$500.x * e$jscomp$362.x + t$jscomp$500.y * e$jscomp$362.y + t$jscomp$500.z * e$jscomp$362.z;
}, vec3.cross = function(t$jscomp$501, e$jscomp$363) {
  return new vec3(t$jscomp$501.y * e$jscomp$363.z - t$jscomp$501.z * e$jscomp$363.y, t$jscomp$501.z * e$jscomp$363.x - t$jscomp$501.x * e$jscomp$363.z, t$jscomp$501.x * e$jscomp$363.y - t$jscomp$501.y * e$jscomp$363.x);
}, vec3.neg = function(t$jscomp$502) {
  return new vec3(-t$jscomp$502.x, -t$jscomp$502.y, -t$jscomp$502.z);
};
var vec4 = function(t$jscomp$503, e$jscomp$364, n$jscomp$253, i$jscomp$171) {
  if (t$jscomp$503 instanceof vec3) {
    this.x = t$jscomp$503.x;
    this.y = t$jscomp$503.y;
    this.z = t$jscomp$503.z;
    this.w = e$jscomp$364;
  } else {
    if (t$jscomp$503 instanceof vec2) {
      this.x = t$jscomp$503.x;
      this.y = t$jscomp$503.y;
      this.z = e$jscomp$364;
      this.w = n$jscomp$253;
    } else {
      this.x = t$jscomp$503;
      this.y = e$jscomp$364;
      this.z = n$jscomp$253;
      this.w = i$jscomp$171;
    }
  }
};
var mat4 = function() {
  this.a11 = 1;
  this.a12 = 0;
  this.a13 = 0;
  this.a14 = 0;
  this.a21 = 0;
  this.a22 = 1;
  this.a23 = 0;
  this.a24 = 0;
  this.a31 = 0;
  this.a32 = 0;
  this.a33 = 1;
  this.a34 = 0;
  this.a41 = 0;
  this.a42 = 0;
  this.a43 = 0;
  this.a44 = 1;
  this.loadIdentity = function() {
    this.a11 = 1;
    this.a12 = 0;
    this.a13 = 0;
    this.a14 = 0;
    this.a21 = 0;
    this.a22 = 1;
    this.a23 = 0;
    this.a24 = 0;
    this.a31 = 0;
    this.a32 = 0;
    this.a33 = 1;
    this.a34 = 0;
    this.a41 = 0;
    this.a42 = 0;
    this.a43 = 0;
    this.a44 = 1;
  };
  this.transpose = function() {
    var t$jscomp$504 = new mat4;
    return t$jscomp$504.a11 = this.a11, t$jscomp$504.a21 = this.a12, t$jscomp$504.a31 = this.a13, t$jscomp$504.a41 = this.a14, t$jscomp$504.a12 = this.a21, t$jscomp$504.a22 = this.a22, t$jscomp$504.a32 = this.a23, t$jscomp$504.a42 = this.a24, t$jscomp$504.a13 = this.a31, t$jscomp$504.a23 = this.a32, t$jscomp$504.a33 = this.a33, t$jscomp$504.a43 = this.a34, t$jscomp$504.a14 = this.a41, t$jscomp$504.a24 = this.a42, t$jscomp$504.a34 = this.a43, t$jscomp$504.a44 = this.a44, t$jscomp$504;
  };
  this.mul = function(t$jscomp$505) {
    return new vec4(t$jscomp$505.x * this.a11 + t$jscomp$505.y * this.a21 + t$jscomp$505.z * this.a31 + t$jscomp$505.w * this.a41, t$jscomp$505.x * this.a12 + t$jscomp$505.y * this.a22 + t$jscomp$505.z * this.a32 + t$jscomp$505.w * this.a42, t$jscomp$505.x * this.a13 + t$jscomp$505.y * this.a23 + t$jscomp$505.z * this.a33 + t$jscomp$505.w * this.a43, t$jscomp$505.x * this.a14 + t$jscomp$505.y * this.a24 + t$jscomp$505.z * this.a34 + t$jscomp$505.w * this.a44);
  };
  this.inverse = function() {
    new mat4;
    var t$jscomp$506 = [this.a33 * this.a44, this.a43 * this.a34, this.a23 * this.a44, this.a43 * this.a24, this.a23 * this.a34, this.a33 * this.a24, this.a13 * this.a44, this.a43 * this.a14, this.a13 * this.a34, this.a33 * this.a14, this.a13 * this.a24, this.a23 * this.a14, this.a31 * this.a42, this.a41 * this.a32, this.a21 * this.a42, this.a41 * this.a22, this.a21 * this.a32, this.a31 * this.a22, this.a11 * this.a42, this.a41 * this.a12, this.a11 * this.a32, this.a31 * this.a12, this.a11 * this.a22, 
    this.a21 * this.a12];
    var e$jscomp$365 = new mat4;
    e$jscomp$365.a11 = t$jscomp$506[0] * this.a22 + t$jscomp$506[3] * this.a32 + t$jscomp$506[4] * this.a42 - (t$jscomp$506[1] * this.a22 + t$jscomp$506[2] * this.a32 + t$jscomp$506[5] * this.a42);
    e$jscomp$365.a12 = t$jscomp$506[1] * this.a12 + t$jscomp$506[6] * this.a32 + t$jscomp$506[9] * this.a42 - (t$jscomp$506[0] * this.a12 + t$jscomp$506[7] * this.a32 + t$jscomp$506[8] * this.a42);
    e$jscomp$365.a13 = t$jscomp$506[2] * this.a12 + t$jscomp$506[7] * this.a22 + t$jscomp$506[10] * this.a42 - (t$jscomp$506[3] * this.a12 + t$jscomp$506[6] * this.a22 + t$jscomp$506[11] * this.a42);
    e$jscomp$365.a14 = t$jscomp$506[5] * this.a12 + t$jscomp$506[8] * this.a22 + t$jscomp$506[11] * this.a32 - (t$jscomp$506[4] * this.a12 + t$jscomp$506[9] * this.a22 + t$jscomp$506[10] * this.a32);
    e$jscomp$365.a21 = t$jscomp$506[1] * this.a21 + t$jscomp$506[2] * this.a31 + t$jscomp$506[5] * this.a41 - (t$jscomp$506[0] * this.a21 + t$jscomp$506[3] * this.a31 + t$jscomp$506[4] * this.a41);
    e$jscomp$365.a22 = t$jscomp$506[0] * this.a11 + t$jscomp$506[7] * this.a31 + t$jscomp$506[8] * this.a41 - (t$jscomp$506[1] * this.a11 + t$jscomp$506[6] * this.a31 + t$jscomp$506[9] * this.a41);
    e$jscomp$365.a23 = t$jscomp$506[3] * this.a11 + t$jscomp$506[6] * this.a21 + t$jscomp$506[11] * this.a41 - (t$jscomp$506[2] * this.a11 + t$jscomp$506[7] * this.a21 + t$jscomp$506[10] * this.a41);
    e$jscomp$365.a24 = t$jscomp$506[4] * this.a11 + t$jscomp$506[9] * this.a21 + t$jscomp$506[10] * this.a31 - (t$jscomp$506[5] * this.a11 + t$jscomp$506[8] * this.a21 + t$jscomp$506[11] * this.a31);
    e$jscomp$365.a31 = t$jscomp$506[12] * this.a24 + t$jscomp$506[15] * this.a34 + t$jscomp$506[16] * this.a44 - (t$jscomp$506[13] * this.a24 + t$jscomp$506[14] * this.a34 + t$jscomp$506[17] * this.a44);
    e$jscomp$365.a32 = t$jscomp$506[13] * this.a14 + t$jscomp$506[18] * this.a34 + t$jscomp$506[21] * this.a44 - (t$jscomp$506[12] * this.a14 + t$jscomp$506[19] * this.a34 + t$jscomp$506[20] * this.a44);
    e$jscomp$365.a33 = t$jscomp$506[14] * this.a14 + t$jscomp$506[19] * this.a24 + t$jscomp$506[22] * this.a44 - (t$jscomp$506[15] * this.a14 + t$jscomp$506[18] * this.a24 + t$jscomp$506[23] * this.a44);
    e$jscomp$365.a34 = t$jscomp$506[17] * this.a14 + t$jscomp$506[20] * this.a24 + t$jscomp$506[23] * this.a34 - (t$jscomp$506[16] * this.a14 + t$jscomp$506[21] * this.a24 + t$jscomp$506[22] * this.a34);
    e$jscomp$365.a41 = t$jscomp$506[14] * this.a33 + t$jscomp$506[17] * this.a43 + t$jscomp$506[13] * this.a23 - (t$jscomp$506[16] * this.a43 + t$jscomp$506[12] * this.a23 + t$jscomp$506[15] * this.a33);
    e$jscomp$365.a42 = t$jscomp$506[20] * this.a43 + t$jscomp$506[12] * this.a13 + t$jscomp$506[19] * this.a33 - (t$jscomp$506[18] * this.a33 + t$jscomp$506[21] * this.a43 + t$jscomp$506[13] * this.a13);
    e$jscomp$365.a43 = t$jscomp$506[18] * this.a23 + t$jscomp$506[23] * this.a43 + t$jscomp$506[15] * this.a13 - (t$jscomp$506[22] * this.a43 + t$jscomp$506[14] * this.a13 + t$jscomp$506[19] * this.a23);
    e$jscomp$365.a44 = t$jscomp$506[22] * this.a33 + t$jscomp$506[16] * this.a13 + t$jscomp$506[21] * this.a23 - (t$jscomp$506[20] * this.a23 + t$jscomp$506[23] * this.a33 + t$jscomp$506[17] * this.a13);
    var n$jscomp$254 = this.a11 * e$jscomp$365.a11 + this.a21 * e$jscomp$365.a12 + this.a31 * e$jscomp$365.a13 + this.a41 * e$jscomp$365.a14;
    return n$jscomp$254 ? (e$jscomp$365.a11 /= n$jscomp$254, e$jscomp$365.a12 /= n$jscomp$254, e$jscomp$365.a13 /= n$jscomp$254, e$jscomp$365.a14 /= n$jscomp$254, e$jscomp$365.a21 /= n$jscomp$254, e$jscomp$365.a22 /= n$jscomp$254, e$jscomp$365.a23 /= n$jscomp$254, e$jscomp$365.a24 /= n$jscomp$254, e$jscomp$365.a31 /= n$jscomp$254, e$jscomp$365.a32 /= n$jscomp$254, e$jscomp$365.a33 /= n$jscomp$254, e$jscomp$365.a34 /= n$jscomp$254, e$jscomp$365.a41 /= n$jscomp$254, e$jscomp$365.a42 /= n$jscomp$254, 
    e$jscomp$365.a43 /= n$jscomp$254, e$jscomp$365.a44 /= n$jscomp$254, e$jscomp$365) : new mat4;
  };
  this.array = function() {
    return [this.a11, this.a12, this.a13, this.a14, this.a21, this.a22, this.a23, this.a24, this.a31, this.a32, this.a33, this.a34, this.a41, this.a42, this.a43, this.a44];
  };
};
mat4.parse = function(t$jscomp$507) {
  var e$jscomp$366 = new mat4;
  return e$jscomp$366.a11 = t$jscomp$507.a11, e$jscomp$366.a12 = t$jscomp$507.a12, e$jscomp$366.a13 = t$jscomp$507.a13, e$jscomp$366.a14 = t$jscomp$507.a14, e$jscomp$366.a21 = t$jscomp$507.a21, e$jscomp$366.a22 = t$jscomp$507.a22, e$jscomp$366.a23 = t$jscomp$507.a23, e$jscomp$366.a24 = t$jscomp$507.a24, e$jscomp$366.a31 = t$jscomp$507.a31, e$jscomp$366.a32 = t$jscomp$507.a32, e$jscomp$366.a33 = t$jscomp$507.a33, e$jscomp$366.a34 = t$jscomp$507.a34, e$jscomp$366.a41 = t$jscomp$507.a41, e$jscomp$366.a42 = 
  t$jscomp$507.a42, e$jscomp$366.a43 = t$jscomp$507.a43, e$jscomp$366.a44 = t$jscomp$507.a44, e$jscomp$366;
}, mat4.copy = function(t$jscomp$508) {
  var e$jscomp$367 = new mat4;
  return e$jscomp$367.a11 = t$jscomp$508.a11, e$jscomp$367.a12 = t$jscomp$508.a12, e$jscomp$367.a13 = t$jscomp$508.a13, e$jscomp$367.a14 = t$jscomp$508.a14, e$jscomp$367.a21 = t$jscomp$508.a21, e$jscomp$367.a22 = t$jscomp$508.a22, e$jscomp$367.a23 = t$jscomp$508.a23, e$jscomp$367.a24 = t$jscomp$508.a24, e$jscomp$367.a31 = t$jscomp$508.a31, e$jscomp$367.a32 = t$jscomp$508.a32, e$jscomp$367.a33 = t$jscomp$508.a33, e$jscomp$367.a34 = t$jscomp$508.a34, e$jscomp$367.a41 = t$jscomp$508.a41, e$jscomp$367.a42 = 
  t$jscomp$508.a42, e$jscomp$367.a43 = t$jscomp$508.a43, e$jscomp$367.a44 = t$jscomp$508.a44, e$jscomp$367;
}, mat4.mul = function(t$jscomp$509, e$jscomp$368) {
  var n$jscomp$255 = new mat4;
  return n$jscomp$255.a11 = t$jscomp$509.a11 * e$jscomp$368.a11 + t$jscomp$509.a12 * e$jscomp$368.a21 + t$jscomp$509.a13 * e$jscomp$368.a31 + t$jscomp$509.a14 * e$jscomp$368.a41, n$jscomp$255.a12 = t$jscomp$509.a11 * e$jscomp$368.a12 + t$jscomp$509.a12 * e$jscomp$368.a22 + t$jscomp$509.a13 * e$jscomp$368.a32 + t$jscomp$509.a14 * e$jscomp$368.a42, n$jscomp$255.a13 = t$jscomp$509.a11 * e$jscomp$368.a13 + t$jscomp$509.a12 * e$jscomp$368.a23 + t$jscomp$509.a13 * e$jscomp$368.a33 + t$jscomp$509.a14 * 
  e$jscomp$368.a43, n$jscomp$255.a14 = t$jscomp$509.a11 * e$jscomp$368.a14 + t$jscomp$509.a12 * e$jscomp$368.a24 + t$jscomp$509.a13 * e$jscomp$368.a34 + t$jscomp$509.a14 * e$jscomp$368.a44, n$jscomp$255.a21 = t$jscomp$509.a21 * e$jscomp$368.a11 + t$jscomp$509.a22 * e$jscomp$368.a21 + t$jscomp$509.a23 * e$jscomp$368.a31 + t$jscomp$509.a24 * e$jscomp$368.a41, n$jscomp$255.a22 = t$jscomp$509.a21 * e$jscomp$368.a12 + t$jscomp$509.a22 * e$jscomp$368.a22 + t$jscomp$509.a23 * e$jscomp$368.a32 + t$jscomp$509.a24 * 
  e$jscomp$368.a42, n$jscomp$255.a23 = t$jscomp$509.a21 * e$jscomp$368.a13 + t$jscomp$509.a22 * e$jscomp$368.a23 + t$jscomp$509.a23 * e$jscomp$368.a33 + t$jscomp$509.a24 * e$jscomp$368.a43, n$jscomp$255.a24 = t$jscomp$509.a21 * e$jscomp$368.a14 + t$jscomp$509.a22 * e$jscomp$368.a24 + t$jscomp$509.a23 * e$jscomp$368.a34 + t$jscomp$509.a24 * e$jscomp$368.a44, n$jscomp$255.a31 = t$jscomp$509.a31 * e$jscomp$368.a11 + t$jscomp$509.a32 * e$jscomp$368.a21 + t$jscomp$509.a33 * e$jscomp$368.a31 + t$jscomp$509.a34 * 
  e$jscomp$368.a41, n$jscomp$255.a32 = t$jscomp$509.a31 * e$jscomp$368.a12 + t$jscomp$509.a32 * e$jscomp$368.a22 + t$jscomp$509.a33 * e$jscomp$368.a32 + t$jscomp$509.a34 * e$jscomp$368.a42, n$jscomp$255.a33 = t$jscomp$509.a31 * e$jscomp$368.a13 + t$jscomp$509.a32 * e$jscomp$368.a23 + t$jscomp$509.a33 * e$jscomp$368.a33 + t$jscomp$509.a34 * e$jscomp$368.a43, n$jscomp$255.a34 = t$jscomp$509.a31 * e$jscomp$368.a14 + t$jscomp$509.a32 * e$jscomp$368.a24 + t$jscomp$509.a33 * e$jscomp$368.a34 + t$jscomp$509.a34 * 
  e$jscomp$368.a44, n$jscomp$255.a41 = t$jscomp$509.a41 * e$jscomp$368.a11 + t$jscomp$509.a42 * e$jscomp$368.a21 + t$jscomp$509.a43 * e$jscomp$368.a31 + t$jscomp$509.a44 * e$jscomp$368.a41, n$jscomp$255.a42 = t$jscomp$509.a41 * e$jscomp$368.a12 + t$jscomp$509.a42 * e$jscomp$368.a22 + t$jscomp$509.a43 * e$jscomp$368.a32 + t$jscomp$509.a44 * e$jscomp$368.a42, n$jscomp$255.a43 = t$jscomp$509.a41 * e$jscomp$368.a13 + t$jscomp$509.a42 * e$jscomp$368.a23 + t$jscomp$509.a43 * e$jscomp$368.a33 + t$jscomp$509.a44 * 
  e$jscomp$368.a43, n$jscomp$255.a44 = t$jscomp$509.a41 * e$jscomp$368.a14 + t$jscomp$509.a42 * e$jscomp$368.a24 + t$jscomp$509.a43 * e$jscomp$368.a34 + t$jscomp$509.a44 * e$jscomp$368.a44, n$jscomp$255;
}, mat4.translate = function(t$jscomp$510) {
  var e$jscomp$369 = new mat4;
  return e$jscomp$369.a41 = t$jscomp$510.x, e$jscomp$369.a42 = t$jscomp$510.y, e$jscomp$369.a43 = t$jscomp$510.z, e$jscomp$369;
}, mat4.position = function(t$jscomp$511) {
  return new vec3(t$jscomp$511.a41, t$jscomp$511.a42, t$jscomp$511.a43);
}, mat4.rotateX = function(t$jscomp$512) {
  var e$jscomp$370 = new mat4;
  var n$jscomp$256 = Math.cos(t$jscomp$512);
  var i$jscomp$172 = Math.sin(t$jscomp$512);
  return e$jscomp$370.a22 = n$jscomp$256, e$jscomp$370.a23 = i$jscomp$172, e$jscomp$370.a32 = -i$jscomp$172, e$jscomp$370.a33 = n$jscomp$256, e$jscomp$370;
}, mat4.rotateZ = function(t$jscomp$513) {
  var e$jscomp$371 = new mat4;
  var n$jscomp$257 = Math.cos(t$jscomp$513);
  var i$jscomp$173 = Math.sin(t$jscomp$513);
  return e$jscomp$371.a11 = n$jscomp$257, e$jscomp$371.a12 = i$jscomp$173, e$jscomp$371.a21 = -i$jscomp$173, e$jscomp$371.a22 = n$jscomp$257, e$jscomp$371;
}, mat4.frustum = function(t$jscomp$514, e$jscomp$372, n$jscomp$258, i$jscomp$174, o$jscomp$135, r$jscomp$108) {
  var a$jscomp$74 = new mat4;
  var s$jscomp$59 = (e$jscomp$372 + t$jscomp$514) / (e$jscomp$372 - t$jscomp$514);
  var u$jscomp$39 = (i$jscomp$174 + n$jscomp$258) / (i$jscomp$174 - n$jscomp$258);
  var c$jscomp$31 = -(r$jscomp$108 + o$jscomp$135) / (r$jscomp$108 - o$jscomp$135);
  var l$jscomp$28 = -2 * r$jscomp$108 * o$jscomp$135 / (r$jscomp$108 - o$jscomp$135);
  return a$jscomp$74.a11 = 2 * o$jscomp$135 / (e$jscomp$372 - t$jscomp$514), a$jscomp$74.a12 = 0, a$jscomp$74.a13 = 0, a$jscomp$74.a14 = 0, a$jscomp$74.a21 = 0, a$jscomp$74.a22 = 2 * o$jscomp$135 / (i$jscomp$174 - n$jscomp$258), a$jscomp$74.a23 = 0, a$jscomp$74.a24 = 0, a$jscomp$74.a31 = s$jscomp$59, a$jscomp$74.a32 = u$jscomp$39, a$jscomp$74.a33 = c$jscomp$31, a$jscomp$74.a34 = -1, a$jscomp$74.a41 = 0, a$jscomp$74.a42 = 0, a$jscomp$74.a43 = l$jscomp$28, a$jscomp$74.a44 = 0, a$jscomp$74;
}, mat4.perspective = function(t$jscomp$515, e$jscomp$373, n$jscomp$259, i$jscomp$175) {
  var o$jscomp$136 = Math.tan(t$jscomp$515 * Math.PI / 360) * n$jscomp$259;
  var r$jscomp$109 = -o$jscomp$136;
  var a$jscomp$75 = e$jscomp$373 * r$jscomp$109;
  var s$jscomp$60 = e$jscomp$373 * o$jscomp$136;
  return mat4.frustum(a$jscomp$75, s$jscomp$60, r$jscomp$109, o$jscomp$136, n$jscomp$259, i$jscomp$175);
}, mat4.lookAt = function(t$jscomp$516, e$jscomp$374, n$jscomp$260) {
  var i$jscomp$176 = vec3.normalized(vec3.minus(t$jscomp$516, e$jscomp$374));
  var o$jscomp$137 = vec3.normalized(vec3.cross(n$jscomp$260, i$jscomp$176));
  var r$jscomp$110 = vec3.normalized(vec3.cross(i$jscomp$176, o$jscomp$137));
  var a$jscomp$76 = new mat4;
  return a$jscomp$76.a11 = o$jscomp$137.x, a$jscomp$76.a12 = r$jscomp$110.x, a$jscomp$76.a13 = i$jscomp$176.x, a$jscomp$76.a21 = o$jscomp$137.y, a$jscomp$76.a22 = r$jscomp$110.y, a$jscomp$76.a23 = i$jscomp$176.y, a$jscomp$76.a31 = o$jscomp$137.z, a$jscomp$76.a32 = r$jscomp$110.z, a$jscomp$76.a33 = i$jscomp$176.z, mat4.mul(mat4.translate(vec3.neg(t$jscomp$516)), a$jscomp$76);
};
var Random = {
  seed : 0,
  reset : function(t$jscomp$517) {
    seed = t$jscomp$517;
  },
  get : function() {
    var t$jscomp$518 = 4681 * Math.sin(3357 * seed++ + 7032);
    return t$jscomp$518 - Math.floor(t$jscomp$518);
  },
  range : function(t$jscomp$519, e$jscomp$375) {
    return t$jscomp$519 + this.get() * (e$jscomp$375 - t$jscomp$519);
  }
};
var Mesh = function(t$jscomp$520, e$jscomp$376, n$jscomp$261, i$jscomp$177, o$jscomp$138) {
  var r$jscomp$111 = t$jscomp$520.gl;
  this.buffer = e$jscomp$376;
  this.topology = n$jscomp$261;
  this.stride = i$jscomp$177;
  this.attributes = o$jscomp$138;
  this.data = function(t$jscomp$521) {
    r$jscomp$111.bindBuffer(r$jscomp$111.ARRAY_BUFFER, this.buffer);
    r$jscomp$111.bufferData(r$jscomp$111.ARRAY_BUFFER, t$jscomp$521, r$jscomp$111.STATIC_DRAW);
  };
};
var ArraysMesh = function(t$jscomp$522, e$jscomp$377, n$jscomp$262, i$jscomp$178, o$jscomp$139, r$jscomp$112) {
  this.buffer = e$jscomp$377;
  this.topology = n$jscomp$262;
  this.stride = i$jscomp$178;
  this.count = o$jscomp$139;
  this.attributes = r$jscomp$112;
  this.data = function(e$jscomp$378) {
    t$jscomp$522.gl.bindBuffer(t$jscomp$522.gl.ARRAY_BUFFER, this.buffer);
    t$jscomp$522.gl.bufferData(t$jscomp$522.gl.ARRAY_BUFFER, e$jscomp$378, t$jscomp$522.gl.STATIC_DRAW);
  };
};
var ElementsMesh = function(t$jscomp$523, e$jscomp$379, n$jscomp$263, i$jscomp$179, o$jscomp$140, r$jscomp$113, a$jscomp$77) {
  this.vertexBuffer = e$jscomp$379;
  this.indexBuffer = n$jscomp$263;
  this.topology = i$jscomp$179;
  this.stride = o$jscomp$140;
  this.indexCount = r$jscomp$113;
  this.attributes = a$jscomp$77;
};
var Model = function(t$jscomp$524, e$jscomp$380, n$jscomp$264) {
  this.draw = function(i$jscomp$180, o$jscomp$141, r$jscomp$114) {
    if (i$jscomp$180.bind(e$jscomp$380), void 0 !== r$jscomp$114) {
      var a$jscomp$78;
      for (a$jscomp$78 in r$jscomp$114) {
        i$jscomp$180.uniform(a$jscomp$78, r$jscomp$114[a$jscomp$78]);
      }
    }
    var s$jscomp$61 = 0;
    for (a$jscomp$78 in n$jscomp$264) {
      i$jscomp$180.bind(n$jscomp$264[a$jscomp$78], a$jscomp$78, s$jscomp$61++);
    }
    i$jscomp$180.draw(t$jscomp$524, o$jscomp$141);
  };
};
var Program = function(t$jscomp$525, e$jscomp$381) {
  this.po = e$jscomp$381;
  this.attributes = {};
  this.uniforms = {};
  this.attribute = function(e$jscomp$382) {
    return void 0 === this.attributes[e$jscomp$382] && (this.attributes[e$jscomp$382] = t$jscomp$525.getAttribLocation(this.po, e$jscomp$382)), this.attributes[e$jscomp$382];
  };
  this.uniform = function(e$jscomp$383) {
    return void 0 === this.uniforms[e$jscomp$383] && (this.uniforms[e$jscomp$383] = t$jscomp$525.getUniformLocation(this.po, e$jscomp$383)), this.uniforms[e$jscomp$383];
  };
};
var Renderer = function(t$jscomp$526, e$jscomp$384) {
  var n$jscomp$265 = t$jscomp$526.getContext("experimental-webgl");
  this.gl = n$jscomp$265;
  n$jscomp$265.disable(n$jscomp$265.DEPTH_TEST);
  n$jscomp$265.disable(n$jscomp$265.CULL_FACE);
  n$jscomp$265.clearColor(0, 0, 0, 0);
  var i$jscomp$181 = null;
  var o$jscomp$142 = null;
  var r$jscomp$115 = false;
  e$jscomp$384 = e$jscomp$384.bind(this);
  var a$jscomp$79 = {
    frames : 0,
    start : 0,
    now : 0
  };
  var s$jscomp$62 = false;
  var u$jscomp$40 = function(t$jscomp$527) {
    if (r$jscomp$115) {
      a$jscomp$79.frames++;
      a$jscomp$79.now = t$jscomp$527 / 1E3;
      e$jscomp$384(t$jscomp$527);
      window.requestAnimationFrame(u$jscomp$40);
    }
    s$jscomp$62 = r$jscomp$115;
  };
  this.addition = function() {
    n$jscomp$265.blendFunc(n$jscomp$265.SRC_ALPHA, n$jscomp$265.ONE);
    n$jscomp$265.enable(n$jscomp$265.BLEND);
  };
  this.blending = function() {
    n$jscomp$265.blendFunc(n$jscomp$265.SRC_ALPHA, n$jscomp$265.ONE_MINUS_SRC_ALPHA);
    n$jscomp$265.enable(n$jscomp$265.BLEND);
  };
  this.multiply = function() {
    n$jscomp$265.enable(n$jscomp$265.BLEND);
    n$jscomp$265.blendFunc(n$jscomp$265.DST_COLOR, n$jscomp$265.ZERO);
  };
  this.normal = function() {
    n$jscomp$265.disable(n$jscomp$265.BLEND);
  };
  this.resize = function() {
    var e$jscomp$385 = window.devicePixelRatio || 1;
    var i$jscomp$182 = t$jscomp$526.clientWidth;
    var o$jscomp$143 = t$jscomp$526.clientHeight;
    if (!(t$jscomp$526.width * e$jscomp$385 == i$jscomp$182 && t$jscomp$526.height * e$jscomp$385 == o$jscomp$143)) {
      t$jscomp$526.width = i$jscomp$182 * e$jscomp$385;
      t$jscomp$526.height = o$jscomp$143 * e$jscomp$385;
      n$jscomp$265.viewport(0, 0, i$jscomp$182 * e$jscomp$385, o$jscomp$143 * e$jscomp$385);
    }
  };
  this.aspect = function() {
    return t$jscomp$526.width / t$jscomp$526.height;
  };
  this.fps = function() {
    var t$jscomp$528 = a$jscomp$79.frames / (a$jscomp$79.now - a$jscomp$79.start);
    return a$jscomp$79.frames = 0, a$jscomp$79.start = a$jscomp$79.now, t$jscomp$528;
  };
  this.start = function() {
    a$jscomp$79.frames = 0;
    a$jscomp$79.start = 0;
    r$jscomp$115 = true;
    if (!s$jscomp$62) {
      window.requestAnimationFrame(u$jscomp$40);
    }
  };
  this.stop = function() {
    r$jscomp$115 = false;
  };
  this.view = function(t$jscomp$529) {
    o$jscomp$142 = t$jscomp$529;
  };
  this.bind = function(t$jscomp$530, e$jscomp$386, o$jscomp$144) {
    if (t$jscomp$530 instanceof Program) {
      i$jscomp$181 = t$jscomp$530;
      n$jscomp$265.useProgram(i$jscomp$181.po);
    } else {
      if (t$jscomp$530 instanceof WebGLTexture && null !== i$jscomp$181) {
        n$jscomp$265.activeTexture(n$jscomp$265.TEXTURE0 + o$jscomp$144);
        n$jscomp$265.bindTexture(n$jscomp$265.TEXTURE_2D, t$jscomp$530);
        this.uniformi(e$jscomp$386, o$jscomp$144);
      }
    }
  };
  this.clear = function() {
    n$jscomp$265.clear(n$jscomp$265.COLOR_BUFFER_BIT);
  };
  this.clearColor = function(t$jscomp$531, e$jscomp$387, i$jscomp$183, o$jscomp$145) {
    n$jscomp$265.clearColor(t$jscomp$531, e$jscomp$387, i$jscomp$183, o$jscomp$145);
  };
  this.createMesh = function(t$jscomp$532, e$jscomp$388) {
    var i$jscomp$184 = 0;
    var o$jscomp$146;
    for (o$jscomp$146 in e$jscomp$388) {
      i$jscomp$184 = i$jscomp$184 + e$jscomp$388[o$jscomp$146];
    }
    return new Mesh(this, n$jscomp$265.createBuffer(), t$jscomp$532, i$jscomp$184, e$jscomp$388);
  };
  this.createArrays = function(t$jscomp$533, e$jscomp$389, i$jscomp$185) {
    var o$jscomp$147 = 0;
    var r$jscomp$116;
    for (r$jscomp$116 in i$jscomp$185) {
      o$jscomp$147 = o$jscomp$147 + i$jscomp$185[r$jscomp$116];
    }
    var a$jscomp$80 = n$jscomp$265.createBuffer();
    return n$jscomp$265.bindBuffer(n$jscomp$265.ARRAY_BUFFER, a$jscomp$80), n$jscomp$265.bufferData(n$jscomp$265.ARRAY_BUFFER, t$jscomp$533, n$jscomp$265.STATIC_DRAW), new ArraysMesh(this, a$jscomp$80, e$jscomp$389, o$jscomp$147, t$jscomp$533.length, i$jscomp$185);
  };
  this.createElements = function(t$jscomp$534, e$jscomp$390, i$jscomp$186, o$jscomp$148) {
    var r$jscomp$117 = 0;
    var a$jscomp$81;
    for (a$jscomp$81 in o$jscomp$148) {
      r$jscomp$117 = r$jscomp$117 + o$jscomp$148[a$jscomp$81];
    }
    var s$jscomp$63 = n$jscomp$265.createBuffer();
    n$jscomp$265.bindBuffer(n$jscomp$265.ARRAY_BUFFER, s$jscomp$63);
    n$jscomp$265.bufferData(n$jscomp$265.ARRAY_BUFFER, new Float32Array(t$jscomp$534), n$jscomp$265.STATIC_DRAW);
    var u$jscomp$41 = n$jscomp$265.createBuffer();
    return n$jscomp$265.bindBuffer(n$jscomp$265.ELEMENT_ARRAY_BUFFER, u$jscomp$41), n$jscomp$265.bufferData(n$jscomp$265.ELEMENT_ARRAY_BUFFER, new Uint16Array(e$jscomp$390), n$jscomp$265.STATIC_DRAW), new ElementsMesh(this, s$jscomp$63, u$jscomp$41, i$jscomp$186, r$jscomp$117, e$jscomp$390.length, o$jscomp$148);
  };
  this.createProgram = function(t$jscomp$535, e$jscomp$391) {
    var o$jscomp$149 = n$jscomp$265.createShader(n$jscomp$265.VERTEX_SHADER);
    n$jscomp$265.shaderSource(o$jscomp$149, t$jscomp$535);
    n$jscomp$265.compileShader(o$jscomp$149);
    if (!n$jscomp$265.getShaderParameter(o$jscomp$149, n$jscomp$265.COMPILE_STATUS)) {
      alert("Vertex program log: " + n$jscomp$265.getShaderInfoLog(o$jscomp$149));
    }
    var r$jscomp$118 = n$jscomp$265.createShader(n$jscomp$265.FRAGMENT_SHADER);
    n$jscomp$265.shaderSource(r$jscomp$118, e$jscomp$391);
    n$jscomp$265.compileShader(r$jscomp$118);
    if (!n$jscomp$265.getShaderParameter(r$jscomp$118, n$jscomp$265.COMPILE_STATUS)) {
      alert("Fragment program log: " + n$jscomp$265.getShaderInfoLog(r$jscomp$118));
    }
    var a$jscomp$82 = n$jscomp$265.createProgram();
    return n$jscomp$265.attachShader(a$jscomp$82, o$jscomp$149), n$jscomp$265.attachShader(a$jscomp$82, r$jscomp$118), n$jscomp$265.linkProgram(a$jscomp$82), n$jscomp$265.getProgramParameter(a$jscomp$82, n$jscomp$265.LINK_STATUS) || alert("Program link log: " + n$jscomp$265.getProgramInfoLog(i$jscomp$181)), new Program(n$jscomp$265, a$jscomp$82);
  };
  this.createTexture = function(t$jscomp$536) {
    var e$jscomp$392 = n$jscomp$265.createTexture();
    return n$jscomp$265.bindTexture(n$jscomp$265.TEXTURE_2D, e$jscomp$392), n$jscomp$265.texImage2D(n$jscomp$265.TEXTURE_2D, 0, n$jscomp$265.RGBA, n$jscomp$265.RGBA, n$jscomp$265.UNSIGNED_BYTE, t$jscomp$536), n$jscomp$265.texParameteri(n$jscomp$265.TEXTURE_2D, n$jscomp$265.TEXTURE_MAG_FILTER, n$jscomp$265.LINEAR), n$jscomp$265.texParameteri(n$jscomp$265.TEXTURE_2D, n$jscomp$265.TEXTURE_MIN_FILTER, n$jscomp$265.LINEAR_MIPMAP_LINEAR), n$jscomp$265.generateMipmap(n$jscomp$265.TEXTURE_2D), e$jscomp$392;
  };
  this.drawMesh = function(t$jscomp$537, e$jscomp$393) {
    this.uniformMatrix("view", o$jscomp$142);
    n$jscomp$265.bindBuffer(n$jscomp$265.ARRAY_BUFFER, t$jscomp$537.buffer);
    var r$jscomp$119 = 0;
    var a$jscomp$83;
    for (a$jscomp$83 in t$jscomp$537.attributes) {
      var s$jscomp$64 = i$jscomp$181.attribute(a$jscomp$83);
      if (s$jscomp$64 >= 0) {
        n$jscomp$265.enableVertexAttribArray(s$jscomp$64);
        n$jscomp$265.vertexAttribPointer(s$jscomp$64, t$jscomp$537.attributes[a$jscomp$83], n$jscomp$265.FLOAT, false, t$jscomp$537.stride * Float32Array.BYTES_PER_ELEMENT, r$jscomp$119 * Float32Array.BYTES_PER_ELEMENT);
      }
      r$jscomp$119 = r$jscomp$119 + t$jscomp$537.attributes[a$jscomp$83];
    }
    n$jscomp$265.drawArrays(t$jscomp$537.topology, 0, e$jscomp$393);
  };
  this.draw = function(t$jscomp$538, e$jscomp$394) {
    var r$jscomp$120 = function() {
      var e$jscomp$395 = 0;
      var o$jscomp$150;
      for (o$jscomp$150 in t$jscomp$538.attributes) {
        var r$jscomp$121 = i$jscomp$181.attribute(o$jscomp$150);
        if (r$jscomp$121 >= 0) {
          n$jscomp$265.enableVertexAttribArray(r$jscomp$121);
          n$jscomp$265.vertexAttribPointer(r$jscomp$121, t$jscomp$538.attributes[o$jscomp$150], n$jscomp$265.FLOAT, false, 1 == t$jscomp$538.attributes.length ? 0 : t$jscomp$538.stride * Float32Array.BYTES_PER_ELEMENT, e$jscomp$395 * Float32Array.BYTES_PER_ELEMENT);
        }
        e$jscomp$395 = e$jscomp$395 + t$jscomp$538.attributes[o$jscomp$150];
      }
    }.bind(this);
    n$jscomp$265.useProgram(i$jscomp$181.po);
    this.uniformMatrix("view", o$jscomp$142);
    if (t$jscomp$538 instanceof ArraysMesh) {
      n$jscomp$265.bindBuffer(n$jscomp$265.ARRAY_BUFFER, t$jscomp$538.buffer);
      r$jscomp$120();
      n$jscomp$265.drawArrays(t$jscomp$538.topology, 0, void 0 === e$jscomp$394 ? t$jscomp$538.count / t$jscomp$538.stride : e$jscomp$394);
    } else {
      if (t$jscomp$538 instanceof ElementsMesh) {
        n$jscomp$265.bindBuffer(n$jscomp$265.ARRAY_BUFFER, t$jscomp$538.vertexBuffer);
        r$jscomp$120();
        n$jscomp$265.bindBuffer(n$jscomp$265.ELEMENT_ARRAY_BUFFER, t$jscomp$538.indexBuffer);
        n$jscomp$265.drawElements(t$jscomp$538.topology, void 0 === e$jscomp$394 ? t$jscomp$538.indexCount : e$jscomp$394, n$jscomp$265.UNSIGNED_SHORT, 0);
      }
    }
  };
  this.uniform = function(t$jscomp$539, e$jscomp$396) {
    var o$jscomp$151 = i$jscomp$181.uniform(t$jscomp$539);
    if (null != o$jscomp$151) {
      if (e$jscomp$396 instanceof vec2) {
        n$jscomp$265.uniform2f(o$jscomp$151, e$jscomp$396.x, e$jscomp$396.y);
      } else {
        if (e$jscomp$396 instanceof vec3) {
          n$jscomp$265.uniform3f(o$jscomp$151, e$jscomp$396.x, e$jscomp$396.y, e$jscomp$396.z);
        } else {
          if (e$jscomp$396 instanceof mat4) {
            n$jscomp$265.uniformMatrix4fv(o$jscomp$151, false, new Float32Array(e$jscomp$396.array()));
          } else {
            n$jscomp$265.uniform1f(o$jscomp$151, e$jscomp$396);
          }
        }
      }
    }
  };
  this.uniformMatrix = function(t$jscomp$540, e$jscomp$397) {
    var o$jscomp$152 = i$jscomp$181.uniform(t$jscomp$540);
    if (null != o$jscomp$152) {
      n$jscomp$265.uniformMatrix4fv(o$jscomp$152, false, e$jscomp$397);
    }
  };
  this.uniform2f = function(t$jscomp$541, e$jscomp$398) {
    n$jscomp$265.uniform2f(i$jscomp$181.uniform(t$jscomp$541), e$jscomp$398.x, e$jscomp$398.y);
  };
  this.uniform3f = function(t$jscomp$542, e$jscomp$399) {
    n$jscomp$265.uniform3f(i$jscomp$181.uniform(t$jscomp$542), e$jscomp$399.x, e$jscomp$399.y, e$jscomp$399.z);
  };
  this.uniformi = function(t$jscomp$543, e$jscomp$400) {
    var o$jscomp$153 = i$jscomp$181.uniform(t$jscomp$543);
    if (null != o$jscomp$153) {
      n$jscomp$265.uniform1i(o$jscomp$153, e$jscomp$400);
    }
  };
};
$.fn.joystick = function(t$jscomp$544) {
  function f$jscomp$16(n$jscomp$267, i$jscomp$188) {
    var o$jscomp$155 = n$jscomp$267 - a$jscomp$84.x;
    var s$jscomp$66 = i$jscomp$188 - a$jscomp$84.y;
    var u$jscomp$43 = Math.sqrt(o$jscomp$155 * o$jscomp$155 + s$jscomp$66 * s$jscomp$66);
    if (u$jscomp$43 > r$jscomp$122) {
      o$jscomp$155 = o$jscomp$155 / u$jscomp$43;
      s$jscomp$66 = s$jscomp$66 / u$jscomp$43;
    } else {
      o$jscomp$155 = o$jscomp$155 / r$jscomp$122;
      s$jscomp$66 = s$jscomp$66 / r$jscomp$122;
    }
    c$jscomp$32.setAttribute("cx", a$jscomp$84.x + r$jscomp$122 * o$jscomp$155);
    c$jscomp$32.setAttribute("cy", a$jscomp$84.y + r$jscomp$122 * s$jscomp$66);
    var f$jscomp$17 = e$jscomp$401.width / 2 + o$jscomp$155 * e$jscomp$401.width / 2;
    var d$jscomp$17 = e$jscomp$401.height / 2 + s$jscomp$66 * e$jscomp$401.height / 2;
    l$jscomp$29.setAttribute("x", f$jscomp$17);
    l$jscomp$29.setAttribute("y", d$jscomp$17);
    t$jscomp$544.move(f$jscomp$17, d$jscomp$17);
  }
  function d$jscomp$16() {
    e$jscomp$401 = s$jscomp$65.getBoundingClientRect();
    n$jscomp$266 = Math.min(e$jscomp$401.width, e$jscomp$401.height);
    i$jscomp$187 = t$jscomp$544.radius * n$jscomp$266 / 100;
    o$jscomp$154 = t$jscomp$544.size * n$jscomp$266 / 100;
    r$jscomp$122 = i$jscomp$187 - o$jscomp$154;
    a$jscomp$84 = {
      x : t$jscomp$544.left * n$jscomp$266 / 100,
      y : (100 * e$jscomp$401.height / n$jscomp$266 - t$jscomp$544.bottom) * n$jscomp$266 / 100
    };
    if (null === l$jscomp$29) {
      (l$jscomp$29 = document.createElementNS("http://www.w3.org/2000/svg", "text")).setAttribute("alignment-baseline", "middle");
      l$jscomp$29.setAttribute("text-anchor", "middle");
      l$jscomp$29.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
      l$jscomp$29.setAttribute("style", 'font-family: "Oceanar.io";');
      l$jscomp$29.textContent = "n";
      s$jscomp$65.appendChild(l$jscomp$29);
    }
    if (null === c$jscomp$32) {
      (c$jscomp$32 = document.createElementNS("http://www.w3.org/2000/svg", "circle")).setAttribute("fill", "rgba(255, 255, 255, 0.5)");
      s$jscomp$65.appendChild(c$jscomp$32);
    }
    if (null === u$jscomp$42) {
      (u$jscomp$42 = document.createElementNS("http://www.w3.org/2000/svg", "circle")).setAttribute("stroke", "rgba(255, 255, 255, 0.3)");
      u$jscomp$42.setAttribute("stroke-width", "4");
      u$jscomp$42.setAttribute("fill-opacity", "0");
      s$jscomp$65.appendChild(u$jscomp$42);
      u$jscomp$42.addEventListener("touchstart", function(t$jscomp$545) {
        f$jscomp$16((t$jscomp$545 = t$jscomp$545 || window.event).touches[0].clientX, t$jscomp$545.touches[0].clientY);
        t$jscomp$545.preventDefault();
      });
      u$jscomp$42.addEventListener("touchmove", function(t$jscomp$546) {
        f$jscomp$16((t$jscomp$546 = t$jscomp$546 || window.event).touches[0].clientX, t$jscomp$546.touches[0].clientY);
      });
    }
    u$jscomp$42.setAttribute("cx", a$jscomp$84.x);
    u$jscomp$42.setAttribute("cy", a$jscomp$84.y);
    u$jscomp$42.setAttribute("r", i$jscomp$187);
    c$jscomp$32.setAttribute("cx", a$jscomp$84.x);
    c$jscomp$32.setAttribute("cy", a$jscomp$84.y);
    c$jscomp$32.setAttribute("r", o$jscomp$154);
    l$jscomp$29.setAttribute("x", e$jscomp$401.width / 2);
    l$jscomp$29.setAttribute("y", e$jscomp$401.height / 2);
    l$jscomp$29.setAttribute("font-size", 2 * o$jscomp$154);
  }
  var e$jscomp$401;
  var n$jscomp$266;
  var i$jscomp$187;
  var o$jscomp$154;
  var r$jscomp$122;
  var a$jscomp$84;
  var s$jscomp$65 = this[0];
  var u$jscomp$42 = null;
  var c$jscomp$32 = null;
  var l$jscomp$29 = null;
  d$jscomp$16();
  $(window).resize(function() {
    d$jscomp$16();
  });
};
var Reporter = {
  reported : false,
  report : function(t$jscomp$547, e$jscomp$402) {
    $.post("/report", {
      message : t$jscomp$547.toString(),
      description : e$jscomp$402,
      stack : t$jscomp$547.stack.toString()
    });
  },
  reportOnce : function(t$jscomp$548, e$jscomp$403) {
    if (!Reporter.reported) {
      Reporter.report(t$jscomp$548, e$jscomp$403);
      Reporter.reported = true;
    }
  }
};
var ArrayPool = {
  pool : [null, null],
  get : function(t$jscomp$549) {
    if ((t$jscomp$549 = Math.ceil(Math.pow(t$jscomp$549, 1 / 3))) >= this.pool.length) {
      var e$jscomp$404 = this.pool.length;
      for (; e$jscomp$404 <= t$jscomp$549; ++e$jscomp$404) {
        this.pool.push(new Float32Array(e$jscomp$404 * e$jscomp$404 * e$jscomp$404));
      }
    }
    return this.pool[t$jscomp$549];
  }
};
ArrayPool.get(45E3);
const Quad = {
  positions : [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1],
  tiles : [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
  texCoords : [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]
};
function pad(t$jscomp$550, e$jscomp$405) {
  return ("000000000" + t$jscomp$550).substr(-e$jscomp$405);
}
var Game = function(t$jscomp$551) {
  function n$jscomp$268() {
    if (l$jscomp$30.attached()) {
      var t$jscomp$552;
      t$jscomp$552 = c$jscomp$33.tick();
      l$jscomp$30.update(t$jscomp$552);
      h$jscomp$12.update(c$jscomp$33.elapsed(), t$jscomp$552, s$jscomp$67);
      o$jscomp$156.view(l$jscomp$30.matrix());
      var e$jscomp$407 = c$jscomp$33.elapsed();
      h$jscomp$12.apply(h$jscomp$12.queen, function(t$jscomp$553) {
        f$jscomp$18.life = t$jscomp$553.life;
      });
      f$jscomp$18.draw(l$jscomp$30, e$jscomp$407);
      l$jscomp$30.aspect = this.aspect();
      this.view(l$jscomp$30.matrix());
      d$jscomp$18.draw(e$jscomp$407);
      h$jscomp$12.draw(e$jscomp$407, s$jscomp$67);
      g$jscomp$12.draw(e$jscomp$407);
      p$jscomp$15.draw(e$jscomp$407);
      v$jscomp$12.draw();
      m$jscomp$12.draw(l$jscomp$30, y$jscomp$66, e$jscomp$407);
    }
  }
  Math.clamp = function(t$jscomp$554, e$jscomp$408, n$jscomp$269) {
    return Math.max(e$jscomp$408, Math.min(t$jscomp$554, n$jscomp$269));
  };
  this.start = function() {
    o$jscomp$156.stop();
    a$jscomp$85.stop();
    if (null !== u$jscomp$44) {
      clearTimeout(u$jscomp$44);
    }
    a$jscomp$85 = new Session(t$jscomp$551.server, this);
    l$jscomp$30.reset();
    d$jscomp$18.clear();
    h$jscomp$12.clear();
    p$jscomp$15.clear();
    g$jscomp$12.clear();
    m$jscomp$12.clear();
    y$jscomp$66 = {};
    f$jscomp$18.life = 1;
    o$jscomp$156.start();
    a$jscomp$85.start();
    $(window).resize();
  };
  var e$jscomp$406 = 0;
  this.onConnect = function() {
    a$jscomp$85.hello(t$jscomp$551.name);
    u$jscomp$44 = setInterval(function() {
      if (l$jscomp$30.attached()) {
        if (++e$jscomp$406 > 9) {
          e$jscomp$406 = 0;
          document.getElementById("fps").innerHTML = o$jscomp$156.fps().toFixed(1);
        }
        s$jscomp$67.relative = i$jscomp$189 ? {
          x : Math.clamp(l$jscomp$30.position.x + (2 * s$jscomp$67.pointer.x / window.innerHeight - l$jscomp$30.aspect) * l$jscomp$30.z, -config.room.width, config.room.width),
          y : Math.clamp(l$jscomp$30.position.y + (2 * (window.innerHeight - s$jscomp$67.pointer.y) / window.innerHeight - 1) * l$jscomp$30.z, -config.room.height, config.room.height)
        } : {
          x : Math.clamp(l$jscomp$30.position.x, -config.room.width, config.room.width),
          y : Math.clamp(l$jscomp$30.position.y, -config.room.height, config.room.height)
        };
        a$jscomp$85.moveTo(s$jscomp$67.relative, s$jscomp$67.buttons.left ? 1 : 0, s$jscomp$67.buttons.right ? 1 : 0);
        if (s$jscomp$67.buttons.left) {
          g$jscomp$12.show(s$jscomp$67.relative, c$jscomp$33.elapsed());
        }
      }
    }, 100);
  };
  this.onBegin = function() {
    h$jscomp$12.begin();
  };
  this.onCommit = function() {
    var t$jscomp$555 = c$jscomp$33.elapsed();
    d$jscomp$18.purge(t$jscomp$555);
    d$jscomp$18.enroll();
    p$jscomp$15.purge(t$jscomp$555);
    p$jscomp$15.enroll();
    g$jscomp$12.purge(t$jscomp$555);
    g$jscomp$12.enroll();
    h$jscomp$12.commit(t$jscomp$555, function(t$jscomp$556) {
      m$jscomp$12.hide(t$jscomp$556);
    });
    h$jscomp$12.purge(t$jscomp$555);
  };
  this.onIntroduce = function(t$jscomp$557) {
    y$jscomp$66[t$jscomp$557.id] = t$jscomp$557.name;
  };
  this.onSelf = function(e$jscomp$409) {
    l$jscomp$30.sync(e$jscomp$409.position, e$jscomp$409.velocity);
    h$jscomp$12.owner = e$jscomp$409.owner_id;
    h$jscomp$12.queen = e$jscomp$409.queen_id;
    document.getElementById("roomURL").value = "http://oceanar.io/#" + t$jscomp$551.server.alias + "-" + t$jscomp$551.server.room + "-" + e$jscomp$409.room;
    a$jscomp$85.server.roomId = e$jscomp$409.room;
  };
  this.onCreateUnit = function(t$jscomp$558) {
    m$jscomp$12.hide(t$jscomp$558.id);
    var e$jscomp$410 = h$jscomp$12.create(t$jscomp$558.id, t$jscomp$558.owner_id, t$jscomp$558.type, t$jscomp$558.state, t$jscomp$558.radius, t$jscomp$558.life, t$jscomp$558.position, t$jscomp$558.velocity, t$jscomp$558.angle, c$jscomp$33.elapsed());
    if (0 == t$jscomp$558.type && h$jscomp$12.queen && h$jscomp$12.queen != t$jscomp$558.id) {
      m$jscomp$12.show(e$jscomp$410);
    }
  };
  this.onModifyUnit = function(t$jscomp$559) {
    h$jscomp$12.modify(t$jscomp$559.id, t$jscomp$559.owner_id, t$jscomp$559.type, t$jscomp$559.state, t$jscomp$559.radius, t$jscomp$559.life);
  };
  this.onAlterUnit = function(t$jscomp$560) {
    h$jscomp$12.alter(t$jscomp$560.id, ["consume"][t$jscomp$560.state], c$jscomp$33.elapsed());
  };
  this.onMoveUnit = function(t$jscomp$561) {
    h$jscomp$12.move(t$jscomp$561.id, t$jscomp$561.position, t$jscomp$561.velocity, t$jscomp$561.angle, c$jscomp$33.elapsed());
  };
  this.onTouchUnit = function(t$jscomp$562) {
    h$jscomp$12.touch(t$jscomp$562.id);
  };
  this.onAttackUnit = function(t$jscomp$563) {
    var e$jscomp$411 = c$jscomp$33.elapsed();
    h$jscomp$12.alter(t$jscomp$563.who_id, "attack", e$jscomp$411);
    h$jscomp$12.apply(t$jscomp$563.whom_id, function(n$jscomp$270) {
      if (t$jscomp$563.whom_id == h$jscomp$12.queen) {
        f$jscomp$18.attack(e$jscomp$411);
      }
      g$jscomp$12.show(n$jscomp$270.position, e$jscomp$411);
      p$jscomp$15.show(n$jscomp$270.position, 5 == n$jscomp$270.type ? 1 : 0, e$jscomp$411);
    });
  };
  this.onShowBonus = function(t$jscomp$564) {
    d$jscomp$18.show(t$jscomp$564.id, t$jscomp$564.position, t$jscomp$564.radius, c$jscomp$33.elapsed());
  };
  this.onHideBonus = function(t$jscomp$565) {
    d$jscomp$18.hide(t$jscomp$565.id, c$jscomp$33.elapsed());
  };
  this.onBubble = function(t$jscomp$566) {
    g$jscomp$12.show(t$jscomp$566.position, c$jscomp$33.elapsed());
  };
  this.onChampions = function(t$jscomp$567) {
    document.getElementById("lbrm").innerHTML = t$jscomp$567.month;
    document.getElementById("lbrms").innerHTML = t$jscomp$567.month_score;
    document.getElementById("lbrw").innerHTML = t$jscomp$567.week;
    document.getElementById("lbrws").innerHTML = t$jscomp$567.week_score;
    document.getElementById("lbrt").innerHTML = t$jscomp$567.today;
    document.getElementById("lbrts").innerHTML = t$jscomp$567.today_score;
  };
  this.onLeaderboard = function(t$jscomp$568) {
    $("#score").text(t$jscomp$568.score);
    if (65535 != t$jscomp$568.position) {
      $("#position").text(t$jscomp$568.position);
    }
    $("#total").text(t$jscomp$568.total);
    var e$jscomp$412 = 0;
    for (; e$jscomp$412 < 10; ++e$jscomp$412) {
      var n$jscomp$271 = t$jscomp$568.best[2 * e$jscomp$412];
      if (n$jscomp$271) {
        var i$jscomp$190 = y$jscomp$66[n$jscomp$271];
        if (n$jscomp$271 == h$jscomp$12.owner) {
          $("#lb" + e$jscomp$412 + "p").css("border-bottom", "2px solid #0f0");
        } else {
          $("#lb" + e$jscomp$412 + "p").css("border-bottom", "2px solid rgba(0, 0, 0, 0)");
        }
        $("#lbr" + e$jscomp$412).css({
          color : RGBToHex(config.colors[n$jscomp$271 % config.colors.length].color1)
        });
        $("#lb" + e$jscomp$412 + "p").text(e$jscomp$412 + 1 + ".");
        $("#lb" + e$jscomp$412 + "n").text(void 0 === i$jscomp$190 ? "" : i$jscomp$190);
        $("#lb" + e$jscomp$412 + "s").text(t$jscomp$568.best[2 * e$jscomp$412 + 1]);
      } else {
        $("#lb" + e$jscomp$412 + "p").css("border-bottom", "2px solid rgba(0, 0, 0, 0)");
        $("#lb" + e$jscomp$412 + "p").text("");
        $("#lb" + e$jscomp$412 + "n").text("");
        $("#lb" + e$jscomp$412 + "s").text("");
      }
    }
  };
  this.onMinimap = function(t$jscomp$569) {
    v$jscomp$12.enroll(t$jscomp$569);
  };
  this.onGameOver = function(e$jscomp$413) {
    $("#bestScore").text(e$jscomp$413.best);
    $("#unitsKilled").text(e$jscomp$413.killed);
    $("#queensKilled").text(e$jscomp$413.queens);
    $("#unitsLost").text(e$jscomp$413.lost);
    $("#foodConsumed").text(e$jscomp$413.consumed);
    $("#timePlayed").text(e$jscomp$413.played);
    var n$jscomp$272 = Math.floor(e$jscomp$413.played / 3600);
    var i$jscomp$191 = Math.floor((e$jscomp$413.played - 3600 * n$jscomp$272) / 60);
    var o$jscomp$157 = e$jscomp$413.played - 3600 * n$jscomp$272 - 60 * i$jscomp$191;
    $("#timePlayed").text(pad(n$jscomp$272, 2) + ":" + pad(i$jscomp$191, 2) + ":" + pad(o$jscomp$157, 2));
    let r$jscomp$124 = 5;
    setTimeout(function() {
      $("#gameOver").fadeIn(300, function() {
        let e$jscomp$414 = setInterval(function() {
          if (r$jscomp$124 > 1) {
            --r$jscomp$124;
            $("#retry-countdown").text(r$jscomp$124);
          } else {
            clearInterval(e$jscomp$414);
            $("#retry").hide();
            $("#playAgain").show();
          }
        }, 1E3);
        if (t$jscomp$551.ads) {
          Apex.Widgets.AdinPlay.update("oceanar-io_300x250");
          Apex.Widgets.AdinPlay.update("oceanar-io_300x250_2");
          Apex.Widgets.AdinPlay.update("oceanar-io_728x90");
        }
      });
    }, 1E3);
    $("#retry").show();
    $("#playAgain").hide();
    $("#retry-countdown").text(r$jscomp$124);
  };
  this.movePointer = function(t$jscomp$570, e$jscomp$415) {
    s$jscomp$67.pointer.x = t$jscomp$570;
    s$jscomp$67.pointer.y = e$jscomp$415;
  };
  var i$jscomp$189 = true;
  var o$jscomp$156 = new Renderer(t$jscomp$551.canvas, function(t$jscomp$571) {
    try {
      c$jscomp$33.now(t$jscomp$571);
      n$jscomp$268.bind(this)();
    } catch (t$jscomp$572) {
      alert("Renderer: " + t$jscomp$572);
    }
  });
  var r$jscomp$123 = new Resources(o$jscomp$156);
  var a$jscomp$85 = new Session(t$jscomp$551.server, this);
  var s$jscomp$67 = {
    pointer : new vec2(0, 0),
    relative : new vec2(0, 0),
    buttons : {
      left : false,
      middle : false,
      right : false
    }
  };
  var u$jscomp$44 = null;
  var c$jscomp$33 = new Clock;
  var l$jscomp$30 = new Camera(o$jscomp$156);
  var f$jscomp$18 = new Background(o$jscomp$156, r$jscomp$123, l$jscomp$30);
  var d$jscomp$18 = new Bonuses(o$jscomp$156, r$jscomp$123);
  var h$jscomp$12 = new Units(o$jscomp$156, r$jscomp$123);
  var p$jscomp$15 = new Blood(o$jscomp$156, r$jscomp$123);
  var g$jscomp$12 = new Bubbles(o$jscomp$156, r$jscomp$123);
  var m$jscomp$12 = new Labels;
  var v$jscomp$12 = new Minimap(o$jscomp$156, r$jscomp$123);
  var y$jscomp$66 = {};
  document.onselectstart = function() {
    return false;
  };
  $(window).resize(function() {
    o$jscomp$156.resize();
    l$jscomp$30.resize(o$jscomp$156.aspect());
  });
  $(window).keydown(function(t$jscomp$573) {
    switch(t$jscomp$573.which) {
      case 87:
        s$jscomp$67.buttons.left = true;
        $("html").css("cursor", "crosshair");
        break;
      case 32:
        s$jscomp$67.buttons.right = true;
        break;
      default:
        return;
    }
    t$jscomp$573.preventDefault();
  });
  $(window).keyup(function(t$jscomp$574) {
    switch(t$jscomp$574.which) {
      case 87:
        s$jscomp$67.buttons.left = false;
        $("html").css("cursor", "default");
        break;
      case 32:
        s$jscomp$67.buttons.right = false;
        break;
      default:
        return;
    }
    t$jscomp$574.preventDefault();
  });
  $(window).mousedown(function(t$jscomp$575) {
    switch(t$jscomp$575.which) {
      case 1:
        s$jscomp$67.buttons.left = true;
        $("html").css("cursor", "crosshair");
        break;
      case 2:
        s$jscomp$67.buttons.middle = true;
        break;
      case 3:
        s$jscomp$67.buttons.right = true;
    }
  });
  $(window).mouseup(function(t$jscomp$576) {
    switch(t$jscomp$576.which) {
      case 1:
        s$jscomp$67.buttons.left = false;
        $("html").css("cursor", "default");
        break;
      case 2:
        s$jscomp$67.buttons.middle = false;
        break;
      case 3:
        s$jscomp$67.buttons.right = false;
    }
  });
  window.addEventListener("mousemove", function(t$jscomp$577) {
    t$jscomp$577 = t$jscomp$577 || window.event;
    s$jscomp$67.pointer.x = t$jscomp$577.clientX;
    s$jscomp$67.pointer.y = t$jscomp$577.clientY;
  });
  document.getElementById("labels").addEventListener("touchmove", function(t$jscomp$578) {
    (t$jscomp$578 = t$jscomp$578 || window.event).preventDefault();
  });
  var x$jscomp$80 = document.getElementById("tablet-attack");
  if (x$jscomp$80) {
    x$jscomp$80.addEventListener("touchstart", function(t$jscomp$579) {
      t$jscomp$579 = t$jscomp$579 || window.event;
      s$jscomp$67.buttons.left = true;
      $(this).addClass("active");
    });
    x$jscomp$80.addEventListener("touchend", function(t$jscomp$580) {
      t$jscomp$580 = t$jscomp$580 || window.event;
      s$jscomp$67.buttons.left = false;
      $(this).removeClass("active");
    });
    x$jscomp$80.addEventListener("touchcancel", function(t$jscomp$581) {
      t$jscomp$581 = t$jscomp$581 || window.event;
      s$jscomp$67.buttons.left = false;
      $(this).removeClass("active");
    });
  }
  var b$jscomp$4 = document.getElementById("tablet-merge");
  if (b$jscomp$4) {
    b$jscomp$4.addEventListener("touchstart", function(t$jscomp$582) {
      t$jscomp$582 = t$jscomp$582 || window.event;
      s$jscomp$67.buttons.right = true;
      $(this).addClass("active");
    });
    b$jscomp$4.addEventListener("touchend", function(t$jscomp$583) {
      t$jscomp$583 = t$jscomp$583 || window.event;
      s$jscomp$67.buttons.right = false;
      $(this).removeClass("active");
    });
    b$jscomp$4.addEventListener("touchcancel", function(t$jscomp$584) {
      t$jscomp$584 = t$jscomp$584 || window.event;
      s$jscomp$67.buttons.right = false;
      $(this).removeClass("active");
    });
  }
  window.onfocus = function() {
    i$jscomp$189 = true;
  };
  window.onblur = function() {
    i$jscomp$189 = false;
  };
  $(window).resize();
};
var Resources = function(t$jscomp$585) {
  var e$jscomp$416;
  for (e$jscomp$416 in self = this, this.programs = {}, this.textures = {}, shaders) {
    this.programs[e$jscomp$416] = t$jscomp$585.createProgram(shaders[e$jscomp$416].vertex, shaders[e$jscomp$416].fragment);
  }
  for (e$jscomp$416 in config.textures) {
    this.textures[e$jscomp$416] = t$jscomp$585.createTexture(config.textures[e$jscomp$416]);
  }
};
Resources.preload = function(t$jscomp$586) {
  var e$jscomp$417 = Object.keys(config.textures).length;
  var n$jscomp$273;
  for (n$jscomp$273 in config.textures) {
    var i$jscomp$192 = new Image;
    i$jscomp$192.src = config.textures[n$jscomp$273];
    i$jscomp$192.onload = function(n$jscomp$274) {
      return function() {
        config.textures[n$jscomp$274] = this;
        if (!--e$jscomp$417) {
          t$jscomp$586();
        }
      };
    }(n$jscomp$273);
  }
};
var Session = function(t$jscomp$587, e$jscomp$418) {
  function i$jscomp$193() {
    proto.ping.send(o$jscomp$158, {
      time : 268435455 & Date.now()
    });
  }
  var n$jscomp$275 = this;
  this.server = t$jscomp$587;
  this.start = function() {
    var t$jscomp$588;
    t$jscomp$588 = "wss://" + n$jscomp$275.server.host + "/" + n$jscomp$275.server.room + "/";
    n$jscomp$275.server.roomId;
    console.log("Connecting to " + t$jscomp$588);
    sck = new WebSocket(t$jscomp$588);
    sck.binaryType = "arraybuffer";
    sck.onopen = function() {
      console.log("WebSocket Connected");
      e$jscomp$418.onConnect();
      i$jscomp$193();
    };
    sck.onclose = function(t$jscomp$589) {
      console.log("WebSocket Closed");
      e$jscomp$418.onClose();
    };
    sck.onerror = function(t$jscomp$590) {
      console.log("WebSocket Error");
      this.close();
    };
    sck.onmessage = function(t$jscomp$591) {
      try {
        if (t$jscomp$591.data instanceof ArrayBuffer) {
          proto.dispatchGroup(t$jscomp$591, n$jscomp$275);
        } else {
          alert("Text message: " + t$jscomp$591.data);
        }
      } catch (t$jscomp$592) {
        alert("Proto Dispatch: " + t$jscomp$592);
      }
    };
    o$jscomp$158 = sck;
  };
  this.stop = function() {
    try {
      o$jscomp$158.onclose = function() {
      };
      o$jscomp$158.close();
      if (null !== r$jscomp$125) {
        clearTimeout(r$jscomp$125);
      }
    } catch (t$jscomp$593) {
    }
    o$jscomp$158 = null;
  };
  this.onBegin = function() {
    e$jscomp$418.onBegin();
  };
  this.onCommit = function() {
    e$jscomp$418.onCommit();
  };
  this.onPong = function(t$jscomp$594) {
    $("#ping").text((268435455 & Date.now()) - t$jscomp$594.time);
    r$jscomp$125 = setTimeout(function() {
      i$jscomp$193();
    }, 1E3);
  };
  this.onIntroduce = function(t$jscomp$595) {
    e$jscomp$418.onIntroduce(t$jscomp$595);
  };
  this.onSelf = function(t$jscomp$596) {
    e$jscomp$418.onSelf(t$jscomp$596);
  };
  this.onCreateUnit = function(t$jscomp$597) {
    e$jscomp$418.onCreateUnit(t$jscomp$597);
  };
  this.onModifyUnit = function(t$jscomp$598) {
    e$jscomp$418.onModifyUnit(t$jscomp$598);
  };
  this.onMoveUnit = function(t$jscomp$599) {
    e$jscomp$418.onMoveUnit(t$jscomp$599);
  };
  this.onAlterUnit = function(t$jscomp$600) {
    e$jscomp$418.onAlterUnit(t$jscomp$600);
  };
  this.onTouchUnit = function(t$jscomp$601) {
    e$jscomp$418.onTouchUnit(t$jscomp$601);
  };
  this.onAttackUnit = function(t$jscomp$602) {
    e$jscomp$418.onAttackUnit(t$jscomp$602);
  };
  this.onShowBonus = function(t$jscomp$603) {
    e$jscomp$418.onShowBonus(t$jscomp$603);
  };
  this.onHideBonus = function(t$jscomp$604) {
    e$jscomp$418.onHideBonus(t$jscomp$604);
  };
  this.onBubble = function(t$jscomp$605) {
    e$jscomp$418.onBubble(t$jscomp$605);
  };
  this.hello = function(t$jscomp$606) {
    proto.hello.send(o$jscomp$158, {
      name : t$jscomp$606,
      appearance : 255
    });
  };
  this.moveTo = function(t$jscomp$607, e$jscomp$419, n$jscomp$276) {
    proto.move_to.send(o$jscomp$158, {
      position : t$jscomp$607,
      follow : e$jscomp$419,
      merge : n$jscomp$276
    });
  };
  this.onChampions = function(t$jscomp$608) {
    e$jscomp$418.onChampions(t$jscomp$608);
  };
  this.onLeaderboard = function(t$jscomp$609) {
    e$jscomp$418.onLeaderboard(t$jscomp$609);
  };
  this.onMinimap = function(t$jscomp$610) {
    e$jscomp$418.onMinimap(t$jscomp$610);
  };
  this.onGameOver = function(t$jscomp$611) {
    e$jscomp$418.onGameOver(t$jscomp$611);
  };
  this.onSystem = function(t$jscomp$612) {
    $("#system").text(t$jscomp$612.message);
  };
  var o$jscomp$158 = null;
  var r$jscomp$125 = null;
};
var Clock = function() {
  var t$jscomp$613 = 0;
  var e$jscomp$420 = t$jscomp$613;
  var n$jscomp$277 = t$jscomp$613;
  this.now = function(i$jscomp$194) {
    if (!t$jscomp$613) {
      e$jscomp$420 = t$jscomp$613 = i$jscomp$194;
    }
    n$jscomp$277 = i$jscomp$194;
  };
  this.elapsed = function() {
    return (n$jscomp$277 - t$jscomp$613) / 1E3;
  };
  this.tick = function() {
    var t$jscomp$614 = (n$jscomp$277 - e$jscomp$420) / 1E3;
    return e$jscomp$420 = n$jscomp$277, t$jscomp$614;
  };
};
var Camera = function() {
  function n$jscomp$278(e$jscomp$422, n$jscomp$279) {
    return t$jscomp$615[parseInt(4 * (e$jscomp$422 - 1) + n$jscomp$279 - 1)];
  }
  var t$jscomp$615 = new Float32Array(16);
  var e$jscomp$421 = new Float32Array(16);
  t$jscomp$615[0] = 1;
  t$jscomp$615[1] = 0;
  t$jscomp$615[2] = 0;
  t$jscomp$615[3] = 0;
  t$jscomp$615[4] = 0;
  t$jscomp$615[5] = 1;
  t$jscomp$615[6] = 0;
  t$jscomp$615[7] = 0;
  t$jscomp$615[8] = 0;
  t$jscomp$615[9] = 0;
  t$jscomp$615[10] = 1;
  t$jscomp$615[11] = 0;
  t$jscomp$615[12] = 0;
  t$jscomp$615[13] = 0;
  t$jscomp$615[14] = 0;
  t$jscomp$615[15] = 1;
  this.position = new vec2(0, 0);
  this.velocity = new vec2(0, 0);
  this.z = 7;
  this.aspect = 1;
  this.target = {
    position : null
  };
  this.reset = function() {
    this.target.position = null;
  };
  this.attached = function() {
    return null !== this.target.position;
  };
  this.sync = function(t$jscomp$616, e$jscomp$423) {
    if (null === this.target.position) {
      this.position.x = t$jscomp$616.x;
      this.position.y = t$jscomp$616.y;
      if (this.position.y > config.room.height - this.z + .125 + 3) {
        this.position.y = config.room.height - this.z + .125 + 3;
      }
      if (this.position.y < -config.room.height + this.z - 1) {
        this.position.y = -config.room.height + this.z - 1;
      }
    }
    this.velocity = e$jscomp$423;
    this.target.position = t$jscomp$616;
  };
  this.resize = function(t$jscomp$617) {
    this.aspect = t$jscomp$617;
    this.z = t$jscomp$617 > 1 ? 7 / t$jscomp$617 : 7;
  };
  this.update = function(t$jscomp$618) {
    if (t$jscomp$618 > 1) {
      this.position.x = this.target.position.x;
      this.position.y = this.target.position.y;
    } else {
      this.target.position.x += this.velocity.x * t$jscomp$618;
      this.target.position.y += this.velocity.y * t$jscomp$618;
      if (this.target.position.y > config.room.height - this.z + .125 + 3) {
        this.target.position.y = config.room.height - this.z + .125 + 3;
      }
      if (this.target.position.y < -config.room.height + this.z - 1) {
        this.target.position.y = -config.room.height + this.z - 1;
      }
      this.position.x = (31 * this.position.x + this.target.position.x) / 32;
      this.position.y = (31 * this.position.y + this.target.position.y) / 32;
    }
  };
  this.matrix = function() {
    var e$jscomp$424 = 1 / this.z;
    return t$jscomp$615[0] = e$jscomp$424 / this.aspect, t$jscomp$615[5] = e$jscomp$424, t$jscomp$615[12] = -this.position.x * e$jscomp$424 / this.aspect, t$jscomp$615[13] = -this.position.y * e$jscomp$424, t$jscomp$615;
  };
  this.inverted = function() {
    var t$jscomp$619 = [n$jscomp$278(3, 3) * n$jscomp$278(4, 4), n$jscomp$278(4, 3) * n$jscomp$278(3, 4), n$jscomp$278(2, 3) * n$jscomp$278(4, 4), n$jscomp$278(4, 3) * n$jscomp$278(2, 4), n$jscomp$278(2, 3) * n$jscomp$278(3, 4), n$jscomp$278(3, 3) * n$jscomp$278(2, 4), n$jscomp$278(1, 3) * n$jscomp$278(4, 4), n$jscomp$278(4, 3) * n$jscomp$278(1, 4), n$jscomp$278(1, 3) * n$jscomp$278(3, 4), n$jscomp$278(3, 3) * n$jscomp$278(1, 4), n$jscomp$278(1, 3) * n$jscomp$278(2, 4), n$jscomp$278(2, 3) * n$jscomp$278(1, 
    4), n$jscomp$278(3, 1) * n$jscomp$278(4, 2), n$jscomp$278(4, 1) * n$jscomp$278(3, 2), n$jscomp$278(2, 1) * n$jscomp$278(4, 2), n$jscomp$278(4, 1) * n$jscomp$278(2, 2), n$jscomp$278(2, 1) * n$jscomp$278(3, 2), n$jscomp$278(3, 1) * n$jscomp$278(2, 2), n$jscomp$278(1, 1) * n$jscomp$278(4, 2), n$jscomp$278(4, 1) * n$jscomp$278(1, 2), n$jscomp$278(1, 1) * n$jscomp$278(3, 2), n$jscomp$278(3, 1) * n$jscomp$278(1, 2), n$jscomp$278(1, 1) * n$jscomp$278(2, 2), n$jscomp$278(2, 1) * n$jscomp$278(1, 2)];
    e$jscomp$421[0] = t$jscomp$619[0] * n$jscomp$278(2, 2) + t$jscomp$619[3] * n$jscomp$278(3, 2) + t$jscomp$619[4] * n$jscomp$278(4, 2) - (t$jscomp$619[1] * n$jscomp$278(2, 2) + t$jscomp$619[2] * n$jscomp$278(3, 2) + t$jscomp$619[5] * n$jscomp$278(4, 2));
    e$jscomp$421[1] = t$jscomp$619[1] * n$jscomp$278(1, 2) + t$jscomp$619[6] * n$jscomp$278(3, 2) + t$jscomp$619[9] * n$jscomp$278(4, 2) - (t$jscomp$619[0] * n$jscomp$278(1, 2) + t$jscomp$619[7] * n$jscomp$278(3, 2) + t$jscomp$619[8] * n$jscomp$278(4, 2));
    e$jscomp$421[2] = t$jscomp$619[2] * n$jscomp$278(1, 2) + t$jscomp$619[7] * n$jscomp$278(2, 2) + t$jscomp$619[10] * n$jscomp$278(4, 2) - (t$jscomp$619[3] * n$jscomp$278(1, 2) + t$jscomp$619[6] * n$jscomp$278(2, 2) + t$jscomp$619[11] * n$jscomp$278(4, 2));
    e$jscomp$421[3] = t$jscomp$619[5] * n$jscomp$278(1, 2) + t$jscomp$619[8] * n$jscomp$278(2, 2) + t$jscomp$619[11] * n$jscomp$278(3, 2) - (t$jscomp$619[4] * n$jscomp$278(1, 2) + t$jscomp$619[9] * n$jscomp$278(2, 2) + t$jscomp$619[10] * n$jscomp$278(3, 2));
    e$jscomp$421[4] = t$jscomp$619[1] * n$jscomp$278(2, 1) + t$jscomp$619[2] * n$jscomp$278(3, 1) + t$jscomp$619[5] * n$jscomp$278(4, 1) - (t$jscomp$619[0] * n$jscomp$278(2, 1) + t$jscomp$619[3] * n$jscomp$278(3, 1) + t$jscomp$619[4] * n$jscomp$278(4, 1));
    e$jscomp$421[5] = t$jscomp$619[0] * n$jscomp$278(1, 1) + t$jscomp$619[7] * n$jscomp$278(3, 1) + t$jscomp$619[8] * n$jscomp$278(4, 1) - (t$jscomp$619[1] * n$jscomp$278(1, 1) + t$jscomp$619[6] * n$jscomp$278(3, 1) + t$jscomp$619[9] * n$jscomp$278(4, 1));
    e$jscomp$421[6] = t$jscomp$619[3] * n$jscomp$278(1, 1) + t$jscomp$619[6] * n$jscomp$278(2, 1) + t$jscomp$619[11] * n$jscomp$278(4, 1) - (t$jscomp$619[2] * n$jscomp$278(1, 1) + t$jscomp$619[7] * n$jscomp$278(2, 1) + t$jscomp$619[10] * n$jscomp$278(4, 1));
    e$jscomp$421[7] = t$jscomp$619[4] * n$jscomp$278(1, 1) + t$jscomp$619[9] * n$jscomp$278(2, 1) + t$jscomp$619[10] * n$jscomp$278(3, 1) - (t$jscomp$619[5] * n$jscomp$278(1, 1) + t$jscomp$619[8] * n$jscomp$278(2, 1) + t$jscomp$619[11] * n$jscomp$278(3, 1));
    e$jscomp$421[8] = t$jscomp$619[12] * n$jscomp$278(2, 4) + t$jscomp$619[15] * n$jscomp$278(3, 4) + t$jscomp$619[16] * n$jscomp$278(4, 4) - (t$jscomp$619[13] * n$jscomp$278(2, 4) + t$jscomp$619[14] * n$jscomp$278(3, 4) + t$jscomp$619[17] * n$jscomp$278(4, 4));
    e$jscomp$421[9] = t$jscomp$619[13] * n$jscomp$278(1, 4) + t$jscomp$619[18] * n$jscomp$278(3, 4) + t$jscomp$619[21] * n$jscomp$278(4, 4) - (t$jscomp$619[12] * n$jscomp$278(1, 4) + t$jscomp$619[19] * n$jscomp$278(3, 4) + t$jscomp$619[20] * n$jscomp$278(4, 4));
    e$jscomp$421[10] = t$jscomp$619[14] * n$jscomp$278(1, 4) + t$jscomp$619[19] * n$jscomp$278(2, 4) + t$jscomp$619[22] * n$jscomp$278(4, 4) - (t$jscomp$619[15] * n$jscomp$278(1, 4) + t$jscomp$619[18] * n$jscomp$278(2, 4) + t$jscomp$619[23] * n$jscomp$278(4, 4));
    e$jscomp$421[11] = t$jscomp$619[17] * n$jscomp$278(1, 4) + t$jscomp$619[20] * n$jscomp$278(2, 4) + t$jscomp$619[23] * n$jscomp$278(3, 4) - (t$jscomp$619[16] * n$jscomp$278(1, 4) + t$jscomp$619[21] * n$jscomp$278(2, 4) + t$jscomp$619[22] * n$jscomp$278(3, 4));
    e$jscomp$421[12] = t$jscomp$619[14] * n$jscomp$278(3, 3) + t$jscomp$619[17] * n$jscomp$278(4, 3) + t$jscomp$619[13] * n$jscomp$278(2, 3) - (t$jscomp$619[16] * n$jscomp$278(4, 3) + t$jscomp$619[12] * n$jscomp$278(2, 3) + t$jscomp$619[15] * n$jscomp$278(3, 3));
    e$jscomp$421[13] = t$jscomp$619[20] * n$jscomp$278(4, 3) + t$jscomp$619[12] * n$jscomp$278(1, 3) + t$jscomp$619[19] * n$jscomp$278(3, 3) - (t$jscomp$619[18] * n$jscomp$278(3, 3) + t$jscomp$619[21] * n$jscomp$278(4, 3) + t$jscomp$619[13] * n$jscomp$278(1, 3));
    e$jscomp$421[14] = t$jscomp$619[18] * n$jscomp$278(2, 3) + t$jscomp$619[23] * n$jscomp$278(4, 3) + t$jscomp$619[15] * n$jscomp$278(1, 3) - (t$jscomp$619[22] * n$jscomp$278(4, 3) + t$jscomp$619[14] * n$jscomp$278(1, 3) + t$jscomp$619[19] * n$jscomp$278(2, 3));
    e$jscomp$421[15] = t$jscomp$619[22] * n$jscomp$278(3, 3) + t$jscomp$619[16] * n$jscomp$278(1, 3) + t$jscomp$619[21] * n$jscomp$278(2, 3) - (t$jscomp$619[20] * n$jscomp$278(2, 3) + t$jscomp$619[23] * n$jscomp$278(3, 3) + t$jscomp$619[17] * n$jscomp$278(1, 3));
    var i$jscomp$195 = n$jscomp$278(1, 1) * e$jscomp$421[0] + n$jscomp$278(2, 1) * e$jscomp$421[1] + n$jscomp$278(3, 1) * e$jscomp$421[2] + n$jscomp$278(4, 1) * e$jscomp$421[3];
    if (i$jscomp$195) {
      var o$jscomp$159 = 0;
      for (; o$jscomp$159 < 16; ++o$jscomp$159) {
        e$jscomp$421[o$jscomp$159] /= i$jscomp$195;
      }
    } else {
      o$jscomp$159 = 0;
      for (; o$jscomp$159 < 16; ++o$jscomp$159) {
        e$jscomp$421[o$jscomp$159] = 0;
      }
    }
    return e$jscomp$421;
  };
};
var Background = function(t$jscomp$620, e$jscomp$425, n$jscomp$280) {
  function y$jscomp$67(t$jscomp$621) {
    var e$jscomp$426 = (t$jscomp$621 - o$jscomp$160.y) / (i$jscomp$196.y - o$jscomp$160.y);
    return {
      x : i$jscomp$196.color.x * e$jscomp$426 + o$jscomp$160.color.x * (1 - e$jscomp$426),
      y : i$jscomp$196.color.y * e$jscomp$426 + o$jscomp$160.color.y * (1 - e$jscomp$426),
      z : i$jscomp$196.color.z * e$jscomp$426 + o$jscomp$160.color.z * (1 - e$jscomp$426)
    };
  }
  const i$jscomp$196 = {
    y : config.room.height,
    color : hexToRGB("#538ac3")
  };
  const o$jscomp$160 = {
    y : -config.room.height,
    color : hexToRGB("#0e1720")
  };
  var r$jscomp$126 = [2 * -config.room.width, config.room.height + .125 + 3, .25 * -config.room.width, 0, 2 * config.room.width, config.room.height + .125 + 3, .25 * config.room.width, 0, 2 * -config.room.width, config.room.height + .125 + 1, .25 * -config.room.width, .99, 2 * config.room.width, config.room.height + .125 + 1, .25 * config.room.width, .99];
  r$jscomp$126 = new Float32Array(r$jscomp$126);
  var a$jscomp$86 = [-1, 1, config.room.height + 4, 1, 1, config.room.height + 4, -1, -1, config.room.height + 4, 1, -1, config.room.height + 4];
  a$jscomp$86 = new Float32Array(a$jscomp$86);
  var s$jscomp$68 = [2 * config.room.width, config.room.height + .125 + 1, config.room.width, .5, 2 * config.room.width, config.room.height - .125 + 1, config.room.width, -.5, 2 * -config.room.width, config.room.height + .125 + 1, -config.room.width, .5, 2 * -config.room.width, config.room.height - .125 + 1, -config.room.width, -.5];
  s$jscomp$68 = new Float32Array(s$jscomp$68);
  var u$jscomp$45 = [2 * config.room.width, 1 - config.room.height, .25 * config.room.width + .25, .005, 2 * config.room.width, -config.room.height - 1, .25 * config.room.width + .25, 1, 2 * -config.room.width, 1 - config.room.height, .25 * -config.room.width + .25, .005, 2 * -config.room.width, -config.room.height - 1, .25 * -config.room.width + .25, 1];
  u$jscomp$45 = new Float32Array(u$jscomp$45);
  var c$jscomp$34 = [1, 1, 0, 0, 0, 1, -1, 0, 0, 0, -1, 1, 0, 0, 0, -1, -1, 0, 0, 0];
  c$jscomp$34 = new Float32Array(c$jscomp$34);
  var l$jscomp$31 = t$jscomp$620.createArrays(c$jscomp$34, t$jscomp$620.gl.TRIANGLE_STRIP, {
    position : 2,
    color : 3
  });
  var f$jscomp$19 = t$jscomp$620.createArrays(r$jscomp$126, t$jscomp$620.gl.TRIANGLE_STRIP, {
    position : 2,
    texCoord : 2
  });
  var d$jscomp$19 = t$jscomp$620.createArrays(a$jscomp$86, t$jscomp$620.gl.TRIANGLE_STRIP, {
    position : 2,
    texCoord : 1
  });
  var h$jscomp$13 = t$jscomp$620.createArrays(s$jscomp$68, t$jscomp$620.gl.TRIANGLE_STRIP, {
    position : 2,
    texCoord : 2
  });
  var p$jscomp$16 = t$jscomp$620.createArrays(u$jscomp$45, t$jscomp$620.gl.TRIANGLE_STRIP, {
    position : 2,
    texCoord : 2
  });
  var g$jscomp$13 = new Scenery(t$jscomp$620, e$jscomp$425, n$jscomp$280);
  var m$jscomp$13 = new Debris(t$jscomp$620, e$jscomp$425, n$jscomp$280);
  var v$jscomp$13 = -1E3;
  this.life = 1;
  this.attack = function(t$jscomp$622) {
    v$jscomp$13 = t$jscomp$622;
  };
  this.draw = function(n$jscomp$281, i$jscomp$197) {
    var o$jscomp$161 = y$jscomp$67(n$jscomp$281.position.y + 50);
    var r$jscomp$127 = y$jscomp$67(n$jscomp$281.position.y - 50);
    var a$jscomp$87 = {
      x : 1,
      y : 0,
      z : 0
    };
    var s$jscomp$69 = 1 - this.life;
    if (o$jscomp$161.x = a$jscomp$87.x * s$jscomp$69 + o$jscomp$161.x * (1 - s$jscomp$69), o$jscomp$161.y = a$jscomp$87.y * s$jscomp$69 + o$jscomp$161.y * (1 - s$jscomp$69), o$jscomp$161.z = a$jscomp$87.z * s$jscomp$69 + o$jscomp$161.z * (1 - s$jscomp$69), r$jscomp$127.x = a$jscomp$87.x * s$jscomp$69 + r$jscomp$127.x * (1 - s$jscomp$69), r$jscomp$127.y = a$jscomp$87.y * s$jscomp$69 + r$jscomp$127.y * (1 - s$jscomp$69), r$jscomp$127.z = a$jscomp$87.z * s$jscomp$69 + r$jscomp$127.z * (1 - s$jscomp$69), 
    i$jscomp$197 - v$jscomp$13 < .5) {
      s$jscomp$69 = .5 * (1 - (i$jscomp$197 - v$jscomp$13) / .5);
      a$jscomp$87 = {
        x : 1,
        y : 0,
        z : 0
      };
      o$jscomp$161.x = a$jscomp$87.x * s$jscomp$69 + o$jscomp$161.x * (1 - s$jscomp$69);
      o$jscomp$161.y = a$jscomp$87.y * s$jscomp$69 + o$jscomp$161.y * (1 - s$jscomp$69);
      o$jscomp$161.z = a$jscomp$87.z * s$jscomp$69 + o$jscomp$161.z * (1 - s$jscomp$69);
      r$jscomp$127.x = a$jscomp$87.x * s$jscomp$69 + r$jscomp$127.x * (1 - s$jscomp$69);
      r$jscomp$127.y = a$jscomp$87.y * s$jscomp$69 + r$jscomp$127.y * (1 - s$jscomp$69);
      r$jscomp$127.z = a$jscomp$87.z * s$jscomp$69 + r$jscomp$127.z * (1 - s$jscomp$69);
    }
    c$jscomp$34[2] = o$jscomp$161.x;
    c$jscomp$34[3] = o$jscomp$161.y;
    c$jscomp$34[4] = o$jscomp$161.z;
    c$jscomp$34[7] = r$jscomp$127.x;
    c$jscomp$34[8] = r$jscomp$127.y;
    c$jscomp$34[9] = r$jscomp$127.z;
    c$jscomp$34[12] = o$jscomp$161.x;
    c$jscomp$34[13] = o$jscomp$161.y;
    c$jscomp$34[14] = o$jscomp$161.z;
    c$jscomp$34[17] = r$jscomp$127.x;
    c$jscomp$34[18] = r$jscomp$127.y;
    c$jscomp$34[19] = r$jscomp$127.z;
    l$jscomp$31.data(c$jscomp$34);
    var u$jscomp$46 = t$jscomp$620.gl;
    u$jscomp$46.disable(u$jscomp$46.BLEND);
    t$jscomp$620.bind(e$jscomp$425.programs.water);
    t$jscomp$620.bind(e$jscomp$425.textures.noise, "noise", 0);
    t$jscomp$620.bind(e$jscomp$425.textures.vignette, "vignette", 1);
    t$jscomp$620.uniform("aspect", t$jscomp$620.aspect());
    t$jscomp$620.draw(l$jscomp$31);
    t$jscomp$620.bind(e$jscomp$425.programs.ceil);
    t$jscomp$620.uniform("time", i$jscomp$197);
    t$jscomp$620.draw(h$jscomp$13);
    u$jscomp$46.enable(u$jscomp$46.BLEND);
    u$jscomp$46.blendFunc(u$jscomp$46.ONE, u$jscomp$46.ONE);
    t$jscomp$620.bind(e$jscomp$425.programs.lights);
    t$jscomp$620.bind(e$jscomp$425.textures.lights, "diffuse", 0);
    t$jscomp$620.uniform("time", i$jscomp$197);
    t$jscomp$620.uniform("camera", n$jscomp$281.position.x);
    t$jscomp$620.draw(d$jscomp$19);
    u$jscomp$46.blendFunc(u$jscomp$46.SRC_ALPHA, u$jscomp$46.ONE_MINUS_SRC_ALPHA);
    var x$jscomp$81 = n$jscomp$281.position.x;
    n$jscomp$281.position.x /= 5;
    t$jscomp$620.view(n$jscomp$281.matrix());
    t$jscomp$620.bind(e$jscomp$425.programs.border);
    t$jscomp$620.bind(e$jscomp$425.textures.ceil, "diffuse", 0);
    t$jscomp$620.draw(f$jscomp$19);
    n$jscomp$281.position.x = x$jscomp$81;
    g$jscomp$13.draw();
    n$jscomp$281.position.x = x$jscomp$81 / 1.25;
    t$jscomp$620.view(n$jscomp$281.matrix());
    t$jscomp$620.bind(e$jscomp$425.programs.floor);
    t$jscomp$620.bind(e$jscomp$425.textures.floor, "diffuse", 0);
    t$jscomp$620.bind(e$jscomp$425.textures.vignette, "radial", 1);
    t$jscomp$620.draw(p$jscomp$16);
    m$jscomp$13.draw();
    n$jscomp$281.position.x = x$jscomp$81;
    t$jscomp$620.view(n$jscomp$281.matrix());
  };
};
var Scenery = function(t$jscomp$623, e$jscomp$427, n$jscomp$282) {
  function o$jscomp$162(t$jscomp$624, e$jscomp$428, n$jscomp$283, o$jscomp$163) {
    if (void 0 === i$jscomp$198[o$jscomp$163]) {
      i$jscomp$198[o$jscomp$163] = [];
    }
    i$jscomp$198[o$jscomp$163].push(-1, -1, t$jscomp$624, e$jscomp$428, n$jscomp$283, -1, 1, t$jscomp$624, e$jscomp$428, n$jscomp$283, 1, -1, t$jscomp$624, e$jscomp$428, n$jscomp$283, 1, -1, t$jscomp$624, e$jscomp$428, n$jscomp$283, 1, 1, t$jscomp$624, e$jscomp$428, n$jscomp$283, -1, 1, t$jscomp$624, e$jscomp$428, n$jscomp$283);
  }
  var i$jscomp$198 = {};
  Random.reset(0);
  var r$jscomp$128 = -config.room.width;
  for (; r$jscomp$128 < config.room.width; r$jscomp$128 = r$jscomp$128 + 3) {
    var a$jscomp$88 = r$jscomp$128 + Random.range(-1, 1);
    var s$jscomp$70 = -config.room.height / 2.5 + +Random.range(-4, 4);
    var u$jscomp$47 = Random.range(.5, 1);
    o$jscomp$162(a$jscomp$88, s$jscomp$70, u$jscomp$47, (c$jscomp$35 = Math.round(a$jscomp$88 / 8)) - 1);
    o$jscomp$162(a$jscomp$88, s$jscomp$70, u$jscomp$47, c$jscomp$35);
    o$jscomp$162(a$jscomp$88, s$jscomp$70, u$jscomp$47, c$jscomp$35 + 1);
  }
  var c$jscomp$35;
  for (c$jscomp$35 in i$jscomp$198) {
    var l$jscomp$32 = t$jscomp$623.createMesh(t$jscomp$623.gl.TRIANGLES, {
      position : 2,
      offset : 2,
      scale : 1
    });
    l$jscomp$32.count = i$jscomp$198[c$jscomp$35].length / 5;
    l$jscomp$32.data(new Float32Array(i$jscomp$198[c$jscomp$35]));
    i$jscomp$198[c$jscomp$35] = l$jscomp$32;
  }
  this.draw = function() {
    var o$jscomp$164 = Math.round(n$jscomp$282.position.x / 16);
    if (void 0 !== i$jscomp$198[o$jscomp$164]) {
      n$jscomp$282.position.x /= 2;
      n$jscomp$282.position.y /= 2;
      t$jscomp$623.bind(e$jscomp$427.programs.scenery);
      t$jscomp$623.bind(e$jscomp$427.textures.seaplants, "diffuse", 0);
      t$jscomp$623.view(n$jscomp$282.matrix());
      t$jscomp$623.drawMesh(i$jscomp$198[o$jscomp$164], i$jscomp$198[o$jscomp$164].count);
      n$jscomp$282.position.x *= 2;
      n$jscomp$282.position.y *= 2;
      t$jscomp$623.view(n$jscomp$282.matrix());
    }
  };
};
var Debris = function(t$jscomp$625, e$jscomp$429) {
  const n$jscomp$284 = [6, 545, 3, 1, .65, 54, 641, 5, .2, .6, 603, 483, 4, .7, .55, 361, 451, 7, 1.3, .7, 176, 719, 8, .3, .7, 321, 497, 7, .6, .5, 1062, 659, 1, .6, 1, 850, 506, 6, 1, .6, 1432, 474, 4, 1.3, .75, 1406, 653, 8, .5, 1, 1354, 535, 7, .4, .5, 1216, 622, 5, .4, .65, 2064, 527, 2, 1.1, .85, 1831, 580, 3, .5, .7, 1891, 479, 7, .8, .65, 2207, 695, 8, .6, .7, 2418, 524, 6, .9, .65, 790, 551, 1, 1, 1, 2720, 535, 4, .5, .65, 2956, 531, 7, .6, .65, 2730, 572, 3, 1, 1, 2908, 741, 8, .4, 1, 2583, 
  737, 5, .6, 1, 3110, 498, 1, 1, .7, 3137, 634, 8, .5, .7, 3210, 671, 8, .3, .9, 3097, 483, 4, 1.4, 1, 2251, 450, 7, 1.4, 1, 3625, 640, 8, 1, .75, 3457, 635, 3, .5, .9, 3671, 571, 2, .3, .55, 3737, 586, 6, 1, .85, 4110, 535, 1, 1, 1, 4449, 504, 3, .7, .75, 4417, 583, 4, .4, .7, 4179, 609, 3, 1.2, 1, 4711, 667, 5, .2, .6, 4792, 608, 5, .2, .6, 4609, 462, 4, 1.4, 1, 4750, 684, 8, 1, 1, 4961, 433, 7, 1, .7, 5281, 515, 7, .5, .55, 5333, 581, 7, 1.3, 1, 5180, 561, 1, 1, .85, 5783, 573, 3, .3, 1, 5679, 
  597, 3, .5, 1, 5821, 570, 2, 1, 1, 5912, 723, 8, .6, 1, 6348, 454, 6, 1.7, 1, 5976, 426, 7, 1, .65, 6231, 642, 4, .4, 1, 6837, 489, 4, .7, .6, 6877, 578, 1, 1, 1, 7160, 398, 7, 1, .55, 7021, 734, 5, .3, 1, 7091, 503, 3, 1, .9, 7257, 477, 1, .2, .65, 7193, 533, 1, .2, .65, 7297, 529, 1, .2, .8, 7237, 617, 2, .5, .6, 7306, 697, 8, .2, .75, 7563, 612, 8, .3, .65, 7624, 502, 6, .7, .5, 7521, 566, 4, 1, 1, 7645, 556, 6, 1.6, 1, 8212, 622, 5, .6, .7, 8157, 536, 7, 1, 1, 8445, 482, 7, 1, .8, 8598, 650, 
  8, .4, .9, 8749, 482, 1, 1.6, 1, 9024, 657, 2, .7, 1, 9372, 514, 3, .5, .5, 9273, 487, 4, .7, .95, 9467, 563, 6, .5, 1, 9353, 690, 8, .2, 1, 9389, 691, 8, .3, 1, 9761, 547, 3, 1, 1, 9830, 577, 7, 1, 1, 9666, 507, 7, .5, .6, 10376, 596, 1, .5, 1, 10197, 522, 3, .5, .65, 10293, 678, 2, .2, .75, 10265, 703, 5, .3, .8, 10558, 487, 4, 1.4, 1, 10500, 601, 4, 1, 1, 10209, 606, 8, .3, .65, 9984, 437, 7, 1.2, .75, 11071, 596, 1, .3, .65, 11226, 531, 4, .5, .6, 11384, 505, 7, .5, .5, 11225, 528, 6, 1.5, 
  .85, 10958, 613, 1, .7, .85, 11283, 680, 5, .2, .65, 11934, 594, 2, .5, .75, 11582, 397, 7, 1.4, 1, 11845, 654, 8, .3, .8, 12264, 417, 3, 1.4, .9, 12503, 646, 1, .4, .95, 12112, 571, 4, 1, 1, 12595, 438, 7, 1, .7];
  var i$jscomp$199 = t$jscomp$625.createMesh(t$jscomp$625.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    texCoord : 1,
    scale : 1,
    color : 1
  });
  var o$jscomp$165 = n$jscomp$284.length / 5;
  var r$jscomp$129 = ArrayPool.get(6 * o$jscomp$165 * 7);
  var a$jscomp$89 = 0;
  Random.reset(0);
  var s$jscomp$71 = 0;
  for (; s$jscomp$71 < o$jscomp$165; ++s$jscomp$71) {
    var u$jscomp$48 = 2 * config.room.width * (n$jscomp$284[5 * s$jscomp$71] - 6400) / 12800;
    var c$jscomp$36 = 1 - config.room.height - (n$jscomp$284[5 * s$jscomp$71 + 1] - 544) / 128;
    var l$jscomp$33 = n$jscomp$284[5 * s$jscomp$71 + 2] - 1;
    var f$jscomp$20 = 2 * n$jscomp$284[5 * s$jscomp$71 + 3];
    var d$jscomp$20 = n$jscomp$284[5 * s$jscomp$71 + 4];
    var h$jscomp$14 = 0;
    for (; h$jscomp$14 < 6; ++h$jscomp$14) {
      r$jscomp$129[a$jscomp$89++] = Quad.tiles[2 * h$jscomp$14];
      r$jscomp$129[a$jscomp$89++] = -Quad.tiles[2 * h$jscomp$14 + 1];
      r$jscomp$129[a$jscomp$89++] = u$jscomp$48;
      r$jscomp$129[a$jscomp$89++] = c$jscomp$36;
      r$jscomp$129[a$jscomp$89++] = l$jscomp$33;
      r$jscomp$129[a$jscomp$89++] = f$jscomp$20;
      r$jscomp$129[a$jscomp$89++] = d$jscomp$20;
    }
  }
  i$jscomp$199.data(r$jscomp$129);
  this.draw = function() {
    t$jscomp$625.bind(e$jscomp$429.programs.debris);
    t$jscomp$625.bind(e$jscomp$429.textures.debris, "diffuse", 0);
    t$jscomp$625.drawMesh(i$jscomp$199, 6 * o$jscomp$165);
  };
};
var Grid = function(t$jscomp$626, e$jscomp$430) {
  var n$jscomp$285 = [];
  var i$jscomp$200 = -50;
  for (; i$jscomp$200 <= 51; ++i$jscomp$200) {
    n$jscomp$285.push(-50.5, 1 * i$jscomp$200 - .5);
    n$jscomp$285.push(50.5, 1 * i$jscomp$200 - .5);
  }
  i$jscomp$200 = -50;
  for (; i$jscomp$200 <= 51; ++i$jscomp$200) {
    n$jscomp$285.push(1 * i$jscomp$200 - .5, -50.5);
    n$jscomp$285.push(1 * i$jscomp$200 - .5, 50.5);
  }
  n$jscomp$285 = new Float32Array(n$jscomp$285);
  var o$jscomp$166 = t$jscomp$626.createArrays(n$jscomp$285, t$jscomp$626.gl.LINES, {
    position : 2
  });
  this.draw = function() {
    if (void 0 !== e$jscomp$430.programs.grid) {
      t$jscomp$626.bind(e$jscomp$430.programs.grid);
      t$jscomp$626.draw(o$jscomp$166);
    }
  };
};
var Bonuses = function(t$jscomp$627, e$jscomp$431) {
  var n$jscomp$286 = 0;
  var i$jscomp$201 = 0;
  var o$jscomp$167 = t$jscomp$627.createMesh(t$jscomp$627.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    texCoord : 1,
    radius : 1,
    angle : 1,
    start : 1
  });
  this.clear = function() {
    r$jscomp$130 = {};
    n$jscomp$286 = 0;
    i$jscomp$201 = 0;
  };
  this.purge = function(t$jscomp$628) {
    var e$jscomp$432;
    for (e$jscomp$432 in r$jscomp$130) {
      var i$jscomp$202 = r$jscomp$130[e$jscomp$432];
      if (i$jscomp$202.start < 0 && t$jscomp$628 + i$jscomp$202.start >= .5) {
        --n$jscomp$286;
        delete r$jscomp$130[e$jscomp$432];
      }
    }
  };
  this.enroll = function() {
    if (i$jscomp$201 = 0, n$jscomp$286) {
      var t$jscomp$629 = ArrayPool.get(6 * n$jscomp$286 * 8);
      var e$jscomp$433 = 0;
      var a$jscomp$90;
      for (a$jscomp$90 in r$jscomp$130) {
        var s$jscomp$72 = r$jscomp$130[a$jscomp$90];
        var u$jscomp$49 = s$jscomp$72.position.x;
        var c$jscomp$37 = s$jscomp$72.position.y;
        var l$jscomp$34 = a$jscomp$90 % 4 / 4;
        var f$jscomp$21 = l$jscomp$34 + .25;
        var d$jscomp$21 = s$jscomp$72.radius;
        var h$jscomp$15 = s$jscomp$72.angle;
        var p$jscomp$17 = s$jscomp$72.start;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = l$jscomp$34;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = l$jscomp$34;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = f$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = f$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = f$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        t$jscomp$629[e$jscomp$433++] = -1;
        t$jscomp$629[e$jscomp$433++] = 1;
        t$jscomp$629[e$jscomp$433++] = u$jscomp$49;
        t$jscomp$629[e$jscomp$433++] = c$jscomp$37;
        t$jscomp$629[e$jscomp$433++] = l$jscomp$34;
        t$jscomp$629[e$jscomp$433++] = d$jscomp$21;
        t$jscomp$629[e$jscomp$433++] = h$jscomp$15;
        t$jscomp$629[e$jscomp$433++] = p$jscomp$17;
        ++i$jscomp$201;
      }
      o$jscomp$167.data(t$jscomp$629);
    }
  };
  this.show = function(t$jscomp$630, e$jscomp$434, i$jscomp$203, o$jscomp$168) {
    if (void 0 === r$jscomp$130[t$jscomp$630]) {
      r$jscomp$130[t$jscomp$630] = {
        position : {
          x : e$jscomp$434.x,
          y : e$jscomp$434.y
        },
        radius : i$jscomp$203,
        angle : 2 * Math.random() * Math.PI,
        start : o$jscomp$168
      };
      ++n$jscomp$286;
    }
  };
  this.hide = function(t$jscomp$631, e$jscomp$435) {
    if (void 0 !== r$jscomp$130[t$jscomp$631] && r$jscomp$130[t$jscomp$631].start > 0) {
      r$jscomp$130[t$jscomp$631].start = -e$jscomp$435;
    }
  };
  this.draw = function(n$jscomp$287) {
    if (i$jscomp$201) {
      t$jscomp$627.bind(e$jscomp$431.programs.bonus);
      t$jscomp$627.bind(e$jscomp$431.textures.food, "diffuse", 0);
      t$jscomp$627.uniform("time", n$jscomp$287);
      t$jscomp$627.drawMesh(o$jscomp$167, 6 * i$jscomp$201);
    }
  };
  var r$jscomp$130 = {};
};
var Units = function(t$jscomp$632, e$jscomp$436) {
  const n$jscomp$288 = {
    color1 : {
      x : .9,
      y : .9,
      z : .9
    },
    color2 : {
      x : .6,
      y : .6,
      z : .6
    }
  };
  var i$jscomp$204 = 0;
  var o$jscomp$169 = 0;
  var r$jscomp$131 = t$jscomp$632.createMesh(t$jscomp$632.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    texCoord : 1,
    radius : 1,
    angle : 1,
    color1 : 3,
    color2 : 3,
    life : 1,
    poison : 1,
    start : 1
  });
  var a$jscomp$91 = {};
  var s$jscomp$73 = new Queens(t$jscomp$632, e$jscomp$436);
  this.owner = 0;
  this.queen = 0;
  this.clear = function() {
    i$jscomp$204 = 0;
    o$jscomp$169 = 0;
    a$jscomp$91 = {};
    s$jscomp$73.clear();
    this.owner = 0;
    this.queen = 0;
  };
  this.begin = function() {
    var t$jscomp$633;
    for (t$jscomp$633 in a$jscomp$91) {
      a$jscomp$91[t$jscomp$633].alive = false;
    }
  };
  this.commit = function(t$jscomp$634, e$jscomp$437) {
    var n$jscomp$289;
    for (n$jscomp$289 in a$jscomp$91) {
      var i$jscomp$205 = a$jscomp$91[n$jscomp$289];
      if (!i$jscomp$205.alive && i$jscomp$205.start > 0) {
        i$jscomp$205.start = -t$jscomp$634;
        s$jscomp$73.hide(n$jscomp$289);
        e$jscomp$437(n$jscomp$289);
        if (n$jscomp$289 == this.queen) {
          this.queen = 0;
        }
      }
    }
  };
  this.purge = function(t$jscomp$635) {
    var e$jscomp$438;
    for (e$jscomp$438 in a$jscomp$91) {
      var n$jscomp$290 = a$jscomp$91[e$jscomp$438];
      if (n$jscomp$290.start < 0 && t$jscomp$635 + n$jscomp$290.start >= .25) {
        --i$jscomp$204;
        delete a$jscomp$91[e$jscomp$438];
      }
    }
  };
  this.enroll = function(t$jscomp$636) {
    if (o$jscomp$169 = 0, i$jscomp$204) {
      var e$jscomp$439 = ArrayPool.get(6 * i$jscomp$204 * 16);
      var n$jscomp$291 = 0;
      var u$jscomp$50;
      for (u$jscomp$50 in a$jscomp$91) {
        var c$jscomp$38 = a$jscomp$91[u$jscomp$50];
        var l$jscomp$35 = Math.atan2(c$jscomp$38.eye.y, c$jscomp$38.eye.x);
        var f$jscomp$22 = config.units[c$jscomp$38.type].idle;
        var d$jscomp$22 = 0;
        if (c$jscomp$38.state & proto.create_unit.state.bloated) {
          f$jscomp$22 = 13;
        } else {
          if (void 0 !== c$jscomp$38.effect) {
            f$jscomp$22 = config.units[c$jscomp$38.type][c$jscomp$38.effect.name].tiles[c$jscomp$38.effect.tile];
          }
        }
        if (c$jscomp$38.state & proto.create_unit.state.poisoned) {
          d$jscomp$22 = 1;
        }
        var h$jscomp$16 = 0;
        for (; h$jscomp$16 < 6; ++h$jscomp$16) {
          e$jscomp$439[n$jscomp$291++] = Quad.positions[2 * h$jscomp$16];
          e$jscomp$439[n$jscomp$291++] = Quad.positions[2 * h$jscomp$16 + 1];
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.position.x;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.position.y;
          e$jscomp$439[n$jscomp$291++] = f$jscomp$22;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.radius;
          e$jscomp$439[n$jscomp$291++] = l$jscomp$35;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color1.x;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color1.y;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color1.z;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color2.x;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color2.y;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.color2.z;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.life;
          e$jscomp$439[n$jscomp$291++] = d$jscomp$22;
          e$jscomp$439[n$jscomp$291++] = c$jscomp$38.start;
        }
        ++o$jscomp$169;
      }
      r$jscomp$131.data(e$jscomp$439);
      s$jscomp$73.enroll(this.queen, t$jscomp$636);
    }
  };
  this.create = function(t$jscomp$637, e$jscomp$440, o$jscomp$170, r$jscomp$132, u$jscomp$51, c$jscomp$39, l$jscomp$36, f$jscomp$23, d$jscomp$23, h$jscomp$17) {
    return void 0 !== a$jscomp$91[t$jscomp$637] && (--i$jscomp$204, s$jscomp$73.hide(t$jscomp$637), delete a$jscomp$91[t$jscomp$637]), a$jscomp$91[t$jscomp$637] = {
      id : t$jscomp$637,
      owner_id : e$jscomp$440,
      color1 : e$jscomp$440 ? config.colors[e$jscomp$440 % config.colors.length].color1 : n$jscomp$288.color1,
      color2 : e$jscomp$440 ? config.colors[e$jscomp$440 % config.colors.length].color2 : n$jscomp$288.color2,
      type : o$jscomp$170,
      state : r$jscomp$132,
      radius : u$jscomp$51,
      life : c$jscomp$39,
      position : {
        x : l$jscomp$36.x,
        y : l$jscomp$36.y
      },
      velocity : {
        x : f$jscomp$23.x,
        y : f$jscomp$23.y
      },
      eye : {
        x : Math.cos(d$jscomp$23),
        y : Math.sin(d$jscomp$23)
      },
      target : {
        position : {
          x : l$jscomp$36.x,
          y : l$jscomp$36.y
        },
        velocity : {
          x : 15 * f$jscomp$23.x * f$jscomp$23.x * Math.cos(f$jscomp$23.y),
          y : 15 * f$jscomp$23.x * f$jscomp$23.x * Math.sin(f$jscomp$23.y)
        },
        eye : {
          x : Math.cos(d$jscomp$23),
          y : Math.sin(d$jscomp$23)
        },
        radius : u$jscomp$51
      },
      start : h$jscomp$17,
      alive : true
    }, 0 == o$jscomp$170 && s$jscomp$73.show(a$jscomp$91[t$jscomp$637]), ++i$jscomp$204, a$jscomp$91[t$jscomp$637];
  };
  this.modify = function(t$jscomp$638, e$jscomp$441, i$jscomp$206, o$jscomp$171, r$jscomp$133, s$jscomp$74) {
    var u$jscomp$52 = a$jscomp$91[t$jscomp$638];
    if (void 0 !== u$jscomp$52) {
      u$jscomp$52.owner_id = e$jscomp$441;
      u$jscomp$52.type = i$jscomp$206;
      u$jscomp$52.state = o$jscomp$171;
      u$jscomp$52.target.radius = r$jscomp$133;
      u$jscomp$52.life = s$jscomp$74;
      u$jscomp$52.color1 = e$jscomp$441 ? config.colors[e$jscomp$441 % config.colors.length].color1 : n$jscomp$288.color1;
      u$jscomp$52.color2 = e$jscomp$441 ? config.colors[e$jscomp$441 % config.colors.length].color2 : n$jscomp$288.color2;
    }
  };
  this.alter = function(t$jscomp$639, e$jscomp$442, n$jscomp$292) {
    var i$jscomp$207 = a$jscomp$91[t$jscomp$639];
    if (void 0 !== i$jscomp$207) {
      if (void 0 === i$jscomp$207.effect || i$jscomp$207.effect.name != e$jscomp$442) {
        i$jscomp$207.effect = {
          name : e$jscomp$442,
          tile : 0,
          start : n$jscomp$292
        };
      } else {
        i$jscomp$207.effect.tile = (i$jscomp$207.effect.tile + 1) % config.units[i$jscomp$207.type][i$jscomp$207.effect.name].tiles.length;
        i$jscomp$207.effect.start = n$jscomp$292;
      }
    }
  };
  this.move = function(t$jscomp$640, e$jscomp$443, n$jscomp$293, i$jscomp$208, o$jscomp$172) {
    var r$jscomp$134 = a$jscomp$91[t$jscomp$640];
    if (void 0 !== r$jscomp$134) {
      r$jscomp$134.target.position = e$jscomp$443;
      r$jscomp$134.target.velocity.x = 15 * n$jscomp$293.x * n$jscomp$293.x * Math.cos(n$jscomp$293.y);
      r$jscomp$134.target.velocity.y = 15 * n$jscomp$293.x * n$jscomp$293.x * Math.sin(n$jscomp$293.y);
      r$jscomp$134.target.eye.x = Math.cos(i$jscomp$208);
      r$jscomp$134.target.eye.y = Math.sin(i$jscomp$208);
      r$jscomp$134.alive = true;
    }
  };
  this.touch = function(t$jscomp$641) {
    var e$jscomp$444 = a$jscomp$91[t$jscomp$641];
    if (void 0 !== e$jscomp$444) {
      e$jscomp$444.alive = true;
    }
  };
  this.draw = function(n$jscomp$294, a$jscomp$92) {
    if (o$jscomp$169) {
      var u$jscomp$53 = .5 * Math.pow(Math.sin(12 * n$jscomp$294), 8);
      t$jscomp$632.bind(e$jscomp$436.programs.unit);
      t$jscomp$632.bind(e$jscomp$436.textures.units, "units", 0);
      t$jscomp$632.bind(e$jscomp$436.textures.bones, "bones", 1);
      t$jscomp$632.bind(e$jscomp$436.textures.bites, "bites", 2);
      t$jscomp$632.uniform("time", n$jscomp$294);
      t$jscomp$632.uniform("pfactor", u$jscomp$53);
      t$jscomp$632.drawMesh(r$jscomp$131, 6 * i$jscomp$204);
      s$jscomp$73.draw(n$jscomp$294);
    }
  };
  this.update = function(t$jscomp$642, e$jscomp$445, n$jscomp$295) {
    if (e$jscomp$445 > 1) {
      var i$jscomp$209;
      for (i$jscomp$209 in a$jscomp$91) {
        (o$jscomp$173 = a$jscomp$91[i$jscomp$209]).position.x = o$jscomp$173.target.position.x;
        o$jscomp$173.position.y = o$jscomp$173.target.position.y;
        o$jscomp$173.velocity.x = o$jscomp$173.target.velocity.x;
        o$jscomp$173.velocity.y = o$jscomp$173.target.velocity.y;
        o$jscomp$173.eye.x = o$jscomp$173.target.eye.x;
        o$jscomp$173.eye.y = o$jscomp$173.target.eye.y;
        o$jscomp$173.radius = o$jscomp$173.target.radius;
      }
    } else {
      for (i$jscomp$209 in a$jscomp$91) {
        var o$jscomp$173;
        (o$jscomp$173 = a$jscomp$91[i$jscomp$209]).target.position.x += o$jscomp$173.target.velocity.x * e$jscomp$445;
        o$jscomp$173.target.position.y += o$jscomp$173.target.velocity.y * e$jscomp$445;
        o$jscomp$173.position.x = (9 * o$jscomp$173.position.x + o$jscomp$173.target.position.x) / 10;
        o$jscomp$173.position.y = (9 * o$jscomp$173.position.y + o$jscomp$173.target.position.y) / 10;
        o$jscomp$173.velocity.x = (49 * o$jscomp$173.velocity.x + o$jscomp$173.target.velocity.x) / 50;
        o$jscomp$173.velocity.y = (49 * o$jscomp$173.velocity.y + o$jscomp$173.target.velocity.y) / 50;
        o$jscomp$173.eye.x = (49 * o$jscomp$173.eye.x + o$jscomp$173.target.eye.x) / 50;
        o$jscomp$173.eye.y = (49 * o$jscomp$173.eye.y + o$jscomp$173.target.eye.y) / 50;
        o$jscomp$173.radius = (3 * o$jscomp$173.radius + o$jscomp$173.target.radius) / 4;
        if (void 0 !== o$jscomp$173.effect && t$jscomp$642 - o$jscomp$173.effect.start > config.units[o$jscomp$173.type][o$jscomp$173.effect.name].duration) {
          delete o$jscomp$173.effect;
        }
      }
    }
    this.enroll(n$jscomp$295);
  };
  this.apply = function(t$jscomp$643, e$jscomp$446) {
    var n$jscomp$296 = a$jscomp$91[t$jscomp$643];
    if (void 0 !== a$jscomp$91[t$jscomp$643]) {
      e$jscomp$446(n$jscomp$296);
    }
  };
};
var Queens = function(t$jscomp$644, e$jscomp$447) {
  var n$jscomp$297 = 0;
  var i$jscomp$210 = 0;
  var o$jscomp$174 = t$jscomp$644.createMesh(t$jscomp$644.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    angle : 1,
    radius : 1,
    color : 3
  });
  var r$jscomp$135 = {};
  var a$jscomp$93 = .5;
  this.clear = function() {
    n$jscomp$297 = 0;
    i$jscomp$210 = 0;
    r$jscomp$135 = {};
  };
  this.enroll = function(t$jscomp$645, e$jscomp$448) {
    if (i$jscomp$210 = 0, n$jscomp$297) {
      var s$jscomp$75 = ArrayPool.get(6 * n$jscomp$297 * 9);
      var u$jscomp$54 = 0;
      var c$jscomp$40;
      for (c$jscomp$40 in r$jscomp$135) {
        var l$jscomp$37 = r$jscomp$135[c$jscomp$40];
        var f$jscomp$24 = Math.atan2(l$jscomp$37.eye.y, l$jscomp$37.eye.x);
        var d$jscomp$24 = .5;
        if (c$jscomp$40 == t$jscomp$645) {
          d$jscomp$24 = a$jscomp$93 = (9 * a$jscomp$93 + (e$jscomp$448.buttons.left || e$jscomp$448.buttons.right ? 1 : .5)) / 10;
        }
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        s$jscomp$75[u$jscomp$54++] = -1;
        s$jscomp$75[u$jscomp$54++] = 1;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.position.y;
        s$jscomp$75[u$jscomp$54++] = f$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = d$jscomp$24;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.x;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.y;
        s$jscomp$75[u$jscomp$54++] = l$jscomp$37.color2.z;
        ++i$jscomp$210;
      }
      o$jscomp$174.data(s$jscomp$75);
    }
  };
  this.show = function(t$jscomp$646) {
    if (void 0 === r$jscomp$135[t$jscomp$646.id]) {
      r$jscomp$135[t$jscomp$646.id] = t$jscomp$646;
      ++n$jscomp$297;
    }
  };
  this.hide = function(t$jscomp$647) {
    if (void 0 !== r$jscomp$135[t$jscomp$647]) {
      --n$jscomp$297;
      delete r$jscomp$135[t$jscomp$647];
    }
  };
  this.draw = function(r$jscomp$136) {
    if (i$jscomp$210) {
      t$jscomp$644.addition();
      t$jscomp$644.bind(e$jscomp$447.programs.flare);
      t$jscomp$644.uniform("time", r$jscomp$136);
      t$jscomp$644.drawMesh(o$jscomp$174, 6 * n$jscomp$297);
      t$jscomp$644.blending();
    }
  };
};
var Eyes = function(t$jscomp$648, e$jscomp$449) {
  const n$jscomp$298 = [[{
    x : 3 / 128,
    y : -.09375
  }], [{
    x : 55 / 128,
    y : -22 / 128
  }], [{
    x : .40625,
    y : -.125
  }, {
    x : 50 / 128,
    y : .21875
  }], []];
  var i$jscomp$211 = [];
  var o$jscomp$175 = 0;
  var r$jscomp$137 = 0;
  for (; r$jscomp$137 < 1E3; ++r$jscomp$137) {
    i$jscomp$211.push(-1, -1, 0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 0);
  }
  i$jscomp$211 = new Float32Array(i$jscomp$211);
  var a$jscomp$94 = t$jscomp$648.createArrays(i$jscomp$211, t$jscomp$648.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    placement : 2,
    angle : 1,
    radius : 1
  });
  var s$jscomp$76 = {};
  this.clear = function() {
    s$jscomp$76 = {};
    o$jscomp$175 = 0;
  };
  this.enroll = function() {
    var t$jscomp$649 = 2;
    var e$jscomp$450;
    for (e$jscomp$450 in s$jscomp$76) {
      var o$jscomp$176 = s$jscomp$76[e$jscomp$450];
      var r$jscomp$138 = Math.atan2(o$jscomp$176.velocity.y, o$jscomp$176.velocity.x);
      var a$jscomp$95 = n$jscomp$298[o$jscomp$176.type];
      var u$jscomp$55 = 0;
      for (; u$jscomp$55 < a$jscomp$95.length; ++u$jscomp$55) {
        var c$jscomp$41 = a$jscomp$95[u$jscomp$55];
        var l$jscomp$38 = 0;
        for (; l$jscomp$38 < 6; ++l$jscomp$38) {
          i$jscomp$211[t$jscomp$649++] = o$jscomp$176.position.x;
          i$jscomp$211[t$jscomp$649++] = o$jscomp$176.position.y;
          i$jscomp$211[t$jscomp$649++] = c$jscomp$41.x * o$jscomp$176.radius;
          i$jscomp$211[t$jscomp$649++] = c$jscomp$41.y * o$jscomp$176.radius;
          i$jscomp$211[t$jscomp$649++] = r$jscomp$138;
          i$jscomp$211[t$jscomp$649++] = .025;
          t$jscomp$649 = t$jscomp$649 + 2;
        }
      }
    }
  };
  this.show = function(t$jscomp$650) {
    if (void 0 === s$jscomp$76[t$jscomp$650.id]) {
      s$jscomp$76[t$jscomp$650.id] = t$jscomp$650;
      ++o$jscomp$175;
    }
  };
  this.hide = function(t$jscomp$651) {
    if (void 0 !== s$jscomp$76[t$jscomp$651]) {
      --o$jscomp$175;
      delete s$jscomp$76[t$jscomp$651];
    }
  };
  this.draw = function(n$jscomp$299) {
    if (o$jscomp$175) {
      a$jscomp$94.data(i$jscomp$211);
      t$jscomp$648.bind(e$jscomp$449.programs.eye);
      t$jscomp$648.uniform2f("pointer", n$jscomp$299.relative);
      t$jscomp$648.draw(a$jscomp$94, 6 * o$jscomp$175);
    }
  };
};
var Blood = function(t$jscomp$652, e$jscomp$451) {
  var n$jscomp$300 = 0;
  var i$jscomp$212 = 0;
  var o$jscomp$177 = 0;
  var r$jscomp$139 = {};
  var a$jscomp$96 = t$jscomp$652.createMesh(t$jscomp$652.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    texCoord : 1,
    angle : 1,
    radius : 1,
    start : 1
  });
  this.clear = function() {
    n$jscomp$300 = 0;
    i$jscomp$212 = 0;
    o$jscomp$177 = 0;
    r$jscomp$139 = {};
  };
  this.purge = function(t$jscomp$653) {
    var e$jscomp$452;
    for (e$jscomp$452 in r$jscomp$139) {
      if (t$jscomp$653 - r$jscomp$139[e$jscomp$452].start >= 1) {
        --i$jscomp$212;
        delete r$jscomp$139[e$jscomp$452];
      }
    }
  };
  this.enroll = function() {
    if (o$jscomp$177 = 0, i$jscomp$212) {
      var t$jscomp$654 = ArrayPool.get(6 * i$jscomp$212 * 8);
      var e$jscomp$453 = 0;
      var n$jscomp$301;
      for (n$jscomp$301 in r$jscomp$139) {
        var s$jscomp$77 = r$jscomp$139[n$jscomp$301];
        var u$jscomp$56 = s$jscomp$77.position.x;
        var c$jscomp$42 = s$jscomp$77.position.y;
        var l$jscomp$39 = s$jscomp$77.type;
        var f$jscomp$25 = s$jscomp$77.angle;
        var d$jscomp$25 = s$jscomp$77.radius;
        var h$jscomp$18 = s$jscomp$77.start;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        t$jscomp$654[e$jscomp$453++] = -1;
        t$jscomp$654[e$jscomp$453++] = 1;
        t$jscomp$654[e$jscomp$453++] = u$jscomp$56;
        t$jscomp$654[e$jscomp$453++] = c$jscomp$42;
        t$jscomp$654[e$jscomp$453++] = l$jscomp$39;
        t$jscomp$654[e$jscomp$453++] = f$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = d$jscomp$25;
        t$jscomp$654[e$jscomp$453++] = h$jscomp$18;
        ++o$jscomp$177;
      }
      a$jscomp$96.data(t$jscomp$654);
    }
  };
  this.show = function(t$jscomp$655, e$jscomp$454, o$jscomp$178) {
    r$jscomp$139[n$jscomp$300++] = {
      position : {
        x : t$jscomp$655.x,
        y : t$jscomp$655.y
      },
      type : e$jscomp$454,
      angle : 2 * Math.random() * Math.PI,
      radius : .5 * Math.random() + .75,
      start : o$jscomp$178
    };
    ++i$jscomp$212;
  };
  this.draw = function(n$jscomp$302) {
    if (o$jscomp$177) {
      t$jscomp$652.bind(e$jscomp$451.programs.blood);
      t$jscomp$652.bind(e$jscomp$451.textures.blood, "diffuse", 0);
      t$jscomp$652.uniform("time", n$jscomp$302);
      t$jscomp$652.drawMesh(a$jscomp$96, 6 * o$jscomp$177);
    }
  };
};
var Bubbles = function(t$jscomp$656, e$jscomp$455) {
  var n$jscomp$303 = 0;
  var i$jscomp$213 = 0;
  var o$jscomp$179 = 0;
  var r$jscomp$140 = {};
  var a$jscomp$97 = t$jscomp$656.createMesh(t$jscomp$656.gl.TRIANGLES, {
    position : 2,
    offset : 2,
    radius : 1,
    start : 1
  });
  this.clear = function() {
    n$jscomp$303 = 0;
    i$jscomp$213 = 0;
    o$jscomp$179 = 0;
    r$jscomp$140 = {};
  };
  this.purge = function(t$jscomp$657) {
    var e$jscomp$456;
    for (e$jscomp$456 in r$jscomp$140) {
      var n$jscomp$304 = t$jscomp$657 - r$jscomp$140[e$jscomp$456].start;
      if (n$jscomp$304 >= 3 || r$jscomp$140[e$jscomp$456].position.y + n$jscomp$304 / (15 * r$jscomp$140[e$jscomp$456].radius) > config.room.height + 1) {
        --i$jscomp$213;
        delete r$jscomp$140[e$jscomp$456];
      }
    }
  };
  this.enroll = function() {
    if (o$jscomp$179 = 0, i$jscomp$213) {
      var t$jscomp$658 = ArrayPool.get(6 * i$jscomp$213 * 6);
      var e$jscomp$457 = 0;
      var n$jscomp$305;
      for (n$jscomp$305 in r$jscomp$140) {
        var s$jscomp$78 = r$jscomp$140[n$jscomp$305];
        var u$jscomp$57 = s$jscomp$78.position.x;
        var c$jscomp$43 = s$jscomp$78.position.y;
        var l$jscomp$40 = s$jscomp$78.radius;
        var f$jscomp$26 = s$jscomp$78.start;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        t$jscomp$658[e$jscomp$457++] = -1;
        t$jscomp$658[e$jscomp$457++] = 1;
        t$jscomp$658[e$jscomp$457++] = u$jscomp$57;
        t$jscomp$658[e$jscomp$457++] = c$jscomp$43;
        t$jscomp$658[e$jscomp$457++] = l$jscomp$40;
        t$jscomp$658[e$jscomp$457++] = f$jscomp$26;
        ++o$jscomp$179;
      }
      a$jscomp$97.data(t$jscomp$658);
    }
  };
  this.show = function(t$jscomp$659, e$jscomp$458) {
    var o$jscomp$180 = Math.random();
    r$jscomp$140[n$jscomp$303++] = {
      position : {
        x : t$jscomp$659.x,
        y : t$jscomp$659.y
      },
      radius : o$jscomp$180 * o$jscomp$180 * .1 + .02,
      start : e$jscomp$458
    };
    ++i$jscomp$213;
  };
  this.draw = function(n$jscomp$306) {
    if (o$jscomp$179) {
      t$jscomp$656.bind(e$jscomp$455.programs.bubble);
      t$jscomp$656.bind(e$jscomp$455.textures.bubble, "diffuse", 0);
      t$jscomp$656.uniform("time", n$jscomp$306);
      t$jscomp$656.drawMesh(a$jscomp$97, 6 * o$jscomp$179);
    }
  };
};
var Labels = function() {
  var t$jscomp$660 = document.getElementById("canvas");
  var e$jscomp$459 = document.getElementById("labels");
  var n$jscomp$307 = window.devicePixelRatio || 1;
  var i$jscomp$214 = {};
  var o$jscomp$181 = {};
  this.clear = function() {
    var t$jscomp$661;
    for (t$jscomp$661 in o$jscomp$181) {
      e$jscomp$459.removeChild(o$jscomp$181[t$jscomp$661]);
    }
    i$jscomp$214 = {};
    o$jscomp$181 = {};
  };
  this.show = function(t$jscomp$662) {
    if (i$jscomp$214[t$jscomp$662.id] = t$jscomp$662, void 0 === o$jscomp$181[t$jscomp$662.id]) {
      var n$jscomp$308 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      n$jscomp$308.setAttribute("x", -1E3);
      n$jscomp$308.setAttribute("y", -1E3);
      n$jscomp$308.setAttribute("text-anchor", "middle");
      n$jscomp$308.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
      n$jscomp$308.cache = "";
      o$jscomp$181[t$jscomp$662.id] = n$jscomp$308;
      e$jscomp$459.appendChild(n$jscomp$308);
    }
  };
  this.hide = function(t$jscomp$663) {
    if (void 0 !== i$jscomp$214[t$jscomp$663]) {
      delete i$jscomp$214[t$jscomp$663];
    }
    if (void 0 !== o$jscomp$181[t$jscomp$663]) {
      e$jscomp$459.removeChild(o$jscomp$181[t$jscomp$663]);
      delete o$jscomp$181[t$jscomp$663];
    }
  };
  this.draw = function(e$jscomp$460, r$jscomp$141, a$jscomp$98) {
    if (e$jscomp$460.attached()) {
      var s$jscomp$79;
      for (s$jscomp$79 in i$jscomp$214) {
        var u$jscomp$58 = o$jscomp$181[s$jscomp$79];
        if (void 0 !== u$jscomp$58) {
          var c$jscomp$44 = i$jscomp$214[s$jscomp$79];
          var l$jscomp$41 = ((c$jscomp$44.position.x - e$jscomp$460.position.x) / (2 * e$jscomp$460.z * e$jscomp$460.aspect) + .5) * t$jscomp$660.width;
          var f$jscomp$27 = ((e$jscomp$460.position.y - c$jscomp$44.position.y + 1.25 * c$jscomp$44.radius) / (2 * e$jscomp$460.z) + .5) * t$jscomp$660.height;
          var d$jscomp$26 = r$jscomp$141[c$jscomp$44.owner_id];
          u$jscomp$58.setAttribute("x", l$jscomp$41 / n$jscomp$307);
          u$jscomp$58.setAttribute("y", f$jscomp$27 / n$jscomp$307);
          if (u$jscomp$58.cache !== d$jscomp$26) {
            u$jscomp$58.textContent = d$jscomp$26;
            u$jscomp$58.cache = d$jscomp$26;
          }
        }
      }
    }
  };
};
var Minimap = function(t$jscomp$664, e$jscomp$461) {
  var n$jscomp$309 = 0;
  var i$jscomp$215 = [];
  var o$jscomp$182 = -10;
  for (; o$jscomp$182 <= 10; ++o$jscomp$182) {
    i$jscomp$215.push(o$jscomp$182 / 10, -1, o$jscomp$182 / 10, 1);
    i$jscomp$215.push(-1, o$jscomp$182 / 10, 1, o$jscomp$182 / 10);
  }
  i$jscomp$215 = new Float32Array(i$jscomp$215);
  var r$jscomp$142 = [];
  o$jscomp$182 = 0;
  for (; o$jscomp$182 < 250; ++o$jscomp$182) {
    r$jscomp$142.push(0, 0, 0, 0, 0, 1);
  }
  r$jscomp$142 = new Float32Array(r$jscomp$142);
  var a$jscomp$99 = t$jscomp$664.createArrays(new Float32Array([1, 1, 1, -1, -1, 1, -1, -1]), t$jscomp$664.gl.TRIANGLE_STRIP, {
    position : 2
  });
  var s$jscomp$80 = t$jscomp$664.createArrays(i$jscomp$215, t$jscomp$664.gl.LINES, {
    position : 2
  });
  var u$jscomp$59 = t$jscomp$664.createArrays(r$jscomp$142, t$jscomp$664.gl.POINTS, {
    position : 2,
    color : 3,
    size : 1
  });
  this.enroll = function(t$jscomp$665) {
    if (n$jscomp$309 = t$jscomp$665.count) {
      var e$jscomp$462 = 0;
      var i$jscomp$216 = 0;
      for (; i$jscomp$216 < n$jscomp$309; ++i$jscomp$216) {
        if (r$jscomp$142[e$jscomp$462++] = t$jscomp$665.positions[i$jscomp$216].x, r$jscomp$142[e$jscomp$462++] = t$jscomp$665.positions[i$jscomp$216].y, i$jscomp$216 == t$jscomp$665.self) {
          r$jscomp$142[e$jscomp$462++] = 0;
          r$jscomp$142[e$jscomp$462++] = 1;
          r$jscomp$142[e$jscomp$462++] = 0;
          r$jscomp$142[e$jscomp$462++] = 3;
        } else {
          if (i$jscomp$216 < 10) {
            var o$jscomp$183 = 1 - i$jscomp$216 / 10;
            var a$jscomp$100 = 1 - o$jscomp$183;
            r$jscomp$142[e$jscomp$462++] = 1 * o$jscomp$183 + .5 * a$jscomp$100;
            r$jscomp$142[e$jscomp$462++] = 0 * o$jscomp$183 + .5 * a$jscomp$100;
            r$jscomp$142[e$jscomp$462++] = 0 * o$jscomp$183 + .5 * a$jscomp$100;
            r$jscomp$142[e$jscomp$462++] = 2;
          } else {
            r$jscomp$142[e$jscomp$462++] = .5;
            r$jscomp$142[e$jscomp$462++] = .5;
            r$jscomp$142[e$jscomp$462++] = .5;
            r$jscomp$142[e$jscomp$462++] = 1;
          }
        }
      }
      u$jscomp$59.data(r$jscomp$142);
    }
  };
  this.draw = function() {
    t$jscomp$664.bind(e$jscomp$461.programs.minimapscr);
    t$jscomp$664.uniform("aspect", t$jscomp$664.aspect());
    t$jscomp$664.draw(a$jscomp$99, 4);
    t$jscomp$664.bind(e$jscomp$461.programs.minimapgrid);
    t$jscomp$664.uniform("aspect", t$jscomp$664.aspect());
    t$jscomp$664.draw(s$jscomp$80, 84);
    if (n$jscomp$309) {
      t$jscomp$664.bind(e$jscomp$461.programs.minimap);
      t$jscomp$664.uniform("aspect", t$jscomp$664.aspect());
      t$jscomp$664.draw(u$jscomp$59, n$jscomp$309);
    }
  };
  this.clear = function() {
    n$jscomp$309 = 0;
  };
};
