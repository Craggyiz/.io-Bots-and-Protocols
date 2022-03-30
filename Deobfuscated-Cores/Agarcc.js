"use strict";
var Vector2 = function (z, x) {
    this.x = z || 0;
    this.y = x || 0;
};
Vector2.prototype = {
    reset: function (key, value) {
        return this.x = key, this.y = value, this;
    },
    toString: function (n) {
        n = n || 3;
        var t = Math.pow(10, n);
        return "[" + Math.round(this.x * t) / t + ", " + Math.round(this.y * t) / t + "]";
    },
    clone: function () {
        return new Vector2(this.x, this.y);
    },
    copyTo: function (overwriteServerRole) {
        overwriteServerRole.x = this.x;
        overwriteServerRole.y = this.y;
    },
    copyFrom: function (text) {
        this.x = text.x;
        this.y = text.y;
    },
    magnitude: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    magnitudeSquared: function () {
        return this.x * this.x + this.y * this.y;
    },
    normalise: function () {
        var jaskarn = this.magnitude();
        return this.x = this.x / jaskarn, this.y = this.y / jaskarn, this;
    },
    reverse: function () {
        return this.x = -this.x, this.y = -this.y, this;
    },
    plusEq: function (v) {
        return this.x += v.x, this.y += v.y, this;
    },
    plusNew: function (v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    },
    minusEq: function (v) {
        return this.x -= v.x, this.y -= v.y, this;
    },
    minusNew: function (v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    },
    multiplyEq: function (scalar) {
        return this.x *= scalar, this.y *= scalar, this;
    },
    multiplyNew: function (data) {
        var command_codes = this.clone();
        return command_codes.multiplyEq(data);
    },
    divideEq: function (scalar) {
        return this.x /= scalar, this.y /= scalar, this;
    },
    divideNew: function (data) {
        var command_codes = this.clone();
        return command_codes.divideEq(data);
    },
    dot: function (v0X) {
        return this.x * v0X.x + this.y * v0X.y;
    },
    angle: function (isdegree) {
        return Math.atan2(this.y, this.x) * (isdegree ? 1 : Vector2Const.TO_DEGREES);
    },
    rotate: function (value, oldValue) {
        var cosbeta = Math.cos(value * (oldValue ? 1 : Vector2Const.TO_RADIANS));
        var sinbeta = Math.sin(value * (oldValue ? 1 : Vector2Const.TO_RADIANS));
        return Vector2Const.temp.copyFrom(this), this.x = Vector2Const.temp.x * cosbeta - Vector2Const.temp.y * sinbeta, this.y = Vector2Const.temp.x * sinbeta + Vector2Const.temp.y * cosbeta, this;
    },
    equals: function (opt_equalsFn) {
        return this.x == opt_equalsFn.x && this.y == opt_equalsFn.x;
    },
    isCloseTo: function (threshold, value) {
        return !!this.equals(threshold) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(threshold), Vector2Const.temp.magnitudeSquared() < value * value);
    },
    rotateAroundPoint: function (rot, x, y) {
        Vector2Const.temp.copyFrom(this);
        Vector2Const.temp.minusEq(rot);
        Vector2Const.temp.rotate(x, y);
        Vector2Const.temp.plusEq(rot);
        this.copyFrom(Vector2Const.temp);
    },
    isMagLessThan: function (distance) {
        return this.magnitudeSquared() < distance * distance;
    },
    isMagGreaterThan: function (distance) {
        return this.magnitudeSquared() > distance * distance;
    }
}, Vector2Const = {
    TO_DEGREES: 180 / Math.PI,
    TO_RADIANS: Math.PI / 180,
    temp: new Vector2
};
var Pa = "#000000";
var c_bildiri_ar = [];
var c_bildiri_id = [];
(function (list, floor) {
    function generateSimpleResults(data, $cont) {
        var specialDayCache = document.createElement("audio");
        specialDayCache.src = data;
        return specialDayCache;
    }

    function line(a, x, r, g, b, k) {
        if (a <= b && b <= r && x <= k && k <= g) {
            return true;
        }
        return false;
    }

    function showSelectedInfo() {
        var value = (new Date).getTime() / 1e3;
        var gap_size = parseInt(value, 10);
        return Math.round(value);
    }

    function set() {
        reverseIsSingle = true;
        document.getElementById("canvas").focus();
        var isReplayingSong = false;
        var message;
        opfilter = result = document.getElementById("canvas");
        operators = opfilter.getContext("2d");
        opfilter.onmousemove = function (_ref) {
            width = _ref.clientX;
            h = _ref.clientY;
            _isDefaultThis();
        };
        if (supportTouch) {
            opfilter.addEventListener("touchstart", disable, false);
            opfilter.addEventListener("touchmove", constructor, false);
            opfilter.addEventListener("touchend", range, false);
        }
        opfilter.onmouseup = function () {};
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", onDocumentKeyUp, false);
        } else {
            document.body.onmousewheel = onDocumentKeyUp;
        }
        opfilter.onfocus = function () {
            isReplayingSong = false;
        };
        document.getElementById("chat_textbox").onblur = function () {
            isReplayingSong = false;
        };
        document.getElementById("chat_textbox").onfocus = function () {
            isReplayingSong = true;
        };
        var sumOfFontSizes = false;
        var averageFontSize = false;
        var hasSongChanged = false;
        var imina = false;
        floor("canvas").dblclick(function () {
            dispatch("psx2psx2");
        });
        list.onkeydown = function (canCreateDiscussions) {
            switch (canCreateDiscussions.keyCode) {
            case 65:
                if (!isReplayingSong && this.gold != 0) {
                    refresh(65);
                    this.gold -= 1;
                }
                break;
            case 32:
                if (!sumOfFontSizes && !isReplayingSong) {
                    update();
                    refresh(17);
                    sumOfFontSizes = true;
                }
                break;
            case 81:
                if (!averageFontSize && !isReplayingSong) {
                    refresh(18);
                    averageFontSize = true;
                }
                break;
            case 87:
                if (!hasSongChanged && !isReplayingSong) {
                    update();
                    refresh(21);
                    hasSongChanged = true;
                }
                break;
            case 27:
                createImage(true, 0);
                break;
            case 13:
                if (isReplayingSong) {
                    isReplayingSong = false;
                    document.getElementById("chat_textbox").blur();
                    message = document.getElementById("chat_textbox").value;
                    if (message.length > 0 && hildon == true) {
                        if (jsonConvertible(message)) {
                            dispatch(run(message));
                            hildon = false;
                            setTimeout(function () {
                                hildon = true;
                            }, 3e3);
                        }
                    }
                    document.getElementById("chat_textbox").value = "";
                } else {
                    if (!corraine) {
                        document.getElementById("chat_textbox").focus();
                        isReplayingSong = true;
                    }
                }
            }
        };
        list.onkeyup = function (canCreateDiscussions) {
            switch (canCreateDiscussions.keyCode) {
            case 32:
                sumOfFontSizes = false;
                break;
            case 87:
                hasSongChanged = false;
                break;
            case 81:
                if (averageFontSize) {
                    refresh(19);
                    averageFontSize = false;
                }
                break;
            }
        };
        list.onblur = function () {
            refresh(19);
            hasSongChanged = averageFontSize = sumOfFontSizes = false;
        };
        list.onresize = add;
        add();
        if (list.requestAnimationFrame) {
            list.requestAnimationFrame(data);
        } else {
            setInterval(remove, 16.666666666666668);
        }
        setInterval(update, 40);
        if (existingFilePath) {
            floor("#region").val(existingFilePath);
        }
        render();
        i(floor("#region").val());
        if (null == socket && existingFilePath) {
            resize();
        }
        setCB();
        floor("#overlays").show();
    }

    function disable(data) {
        var id = 0;
        for (; id < data.changedTouches.length; id++) {
            var node = data.changedTouches[id];
            if (disregard_force_lower_case_depth < 0 && node.clientX < height / 2) {
                disregard_force_lower_case_depth = node.identifier;
                parts.reset(node.clientX, node.clientY);
                movieElement.copyFrom(parts);
                size.reset(0, 0);
            }
            var d = ~~(height / 7);
            if (node.clientX > height - d && node.clientY > number - d) {
                update();
                refresh(17);
            }
            if (node.clientX > height - d && node.clientY > number - 2 * d - 10 && node.clientY < number - d - 10) {
                update();
                refresh(21);
            }
        }
        parentNode = data.touches;
    }

    function constructor(data) {
        data.preventDefault();
        var _jsonName = 0;
        for (; _jsonName < data.changedTouches.length; _jsonName++) {
            var argumentArray = data.changedTouches[_jsonName];
            if (disregard_force_lower_case_depth == argumentArray.identifier) {
                movieElement.reset(argumentArray.clientX, argumentArray.clientY);
                size.copyFrom(movieElement);
                size.minusEq(parts);
                width = size.x * 3 + height / 2;
                h = size.y * 3 + number / 2;
                _isDefaultThis();
                update();
            }
        }
        parentNode = data.touches;
    }

    function range(data) {
        parentNode = data.touches;
        var id = 0;
        for (; id < data.changedTouches.length; id++) {
            var node = data.changedTouches[id];
            if (disregard_force_lower_case_depth == node.identifier) {
                disregard_force_lower_case_depth = -1;
                size.reset(0, 0);
                break;
            }
        }
    }

    function onDocumentKeyUp(event) {
        if (cadian) {
            containerWidth = containerWidth * Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
            if (.4 > containerWidth) {
                containerWidth = .4;
            }
            if (containerWidth > 10 / scale) {
                containerWidth = 10 / scale;
            }
        } else {
            containerWidth = containerWidth * Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
            if (.01 > containerWidth) {
                containerWidth = .01;
            }
            if (containerWidth > 4 / scale) {
                containerWidth = 4 / scale;
            }
        }
    }

    function updatePortfolio() {
        if (.4 > scale) {
            u = null;
        } else {
            var a = Number.POSITIVE_INFINITY;
            var minY = Number.POSITIVE_INFINITY;
            var py = Number.NEGATIVE_INFINITY;
            var maxY = Number.NEGATIVE_INFINITY;
            var newDuration = 0;
            var i = 0;
            for (; i < params.length; i++) {
                var p = params[i];
                if (p.shouldRender() && !p.prepareData && 20 < p.size * scale) {
                    newDuration = Math.max(p.size, newDuration);
                    a = Math.min(p.x, a);
                    minY = Math.min(p.y, minY);
                    py = Math.max(p.x, py);
                    maxY = Math.max(p.y, maxY);
                }
            }
            u = pageSignUp.init({
                minX: a - (newDuration + 100),
                minY: minY - (newDuration + 100),
                maxX: py + (newDuration + 100),
                maxY: maxY + (newDuration + 100),
                maxChildren: 2,
                maxDepth: 4
            });
            i = 0;
            for (; i < params.length; i++) {
                p = params[i];
                if (p.shouldRender() && !(20 >= p.size * scale)) {
                    a = 0;
                    for (; a < p.points.length; ++a) {
                        minY = p.points[a].x;
                        py = p.points[a].y;
                        if (!(minY < offset - height / 2 / scale || py < y - number / 2 / scale || minY > offset + height / 2 / scale || py > y + number / 2 / scale)) {
                            u.insert(p.points[a]);
                        }
                    }
                }
            }
        }
    }

    function _isDefaultThis() {
        a2 = (width - height / 2) / scale + offset;
        transformY = (h - number / 2) / scale + y;
    }

    function getSize() {
        corraine = false;
        floor("#adsBottom").hide();
        floor("#overlays").hide();
        render();
    }

    function build(file) {
        zA = file;
        if (file != prototypes) {
            if (file == ":ffa") {
                file = "77.223.159.80:778";
            } else {
                if (file == ":teams") {
                    file = "77.223.159.80:777";
                } else {
                    if (file == ":ffa2") {
                        file = "77.223.159.80:776";
                    }
                }
            }
            name = file;
            prototypes = zA;
            resize();
        }
        floor("#helloContainer").attr("data-gamemode", zA);
    }

    function i(configuredFilePath) {
        if (configuredFilePath && configuredFilePath != existingFilePath) {
            if (floor("#region").val() != configuredFilePath) {
                floor("#region").val(configuredFilePath);
            }
            existingFilePath = list.localStorage.location = configuredFilePath;
            floor(".btn-needs-server").prop("disabled", false);
            if (reverseIsSingle) {
                resize();
            }
        }
    }

    function createImage(data) {
        corraine = true;
        PL$42 = null;
        floor("#overlays").fadeIn(data ? 200 : 3e3);
        if (!data) {
            floor("#adsBottom").fadeIn(3e3);
        }
    }

    function write(c) {
        c = ~~c;
        var name = (c % 60).toString();
        c = (~~(c / 60)).toString();
        if (2 > name.length) {
            name = "0" + name;
        }
        return c + ":" + name;
    }

    function _getCmdArg() {
        if (null == PL$13) {
            return 0;
        }
        var PL$17 = 0;
        for (; PL$17 < PL$13.length; ++PL$17) {
            if (-1 != fns.indexOf(PL$13[PL$17].id)) {
                return PL$17 + 1;
            }
        }
        return 0;
    }

    function search(req, resp) {
        var reverseIsSingle = -1 != fns.indexOf(req.id);
        var canUploadFiles = -1 != fns.indexOf(resp.id);
        var canViewMyFiles = 30 > resp.size;
        if (reverseIsSingle && canViewMyFiles) {
            ++_maskLayerSimulate;
        }
        if (!(canViewMyFiles || !reverseIsSingle || canUploadFiles)) {
            ++newCluster;
        }
        if (!(canViewMyFiles || !reverseIsSingle || canUploadFiles)) {
            ++this.lastgold;
        }
        if (this.lastgold == 10) {
            this.gold += 1;
            this.lastgold = 0;
        }
    }

    function push(name, nesting) {
        if (name.indexOf("{") != -1 & name.indexOf("}") != -1) {
            var PL$36 = name.indexOf("{");
            var value = name.indexOf("}");
            var kaleeyah = name.slice(value + 1);
            if (nesting) {
                if (kaleeyah == "") {
                    kaleeyah = "UnnamedCell";
                } else {
                    kaleeyah = name.slice(value + 1);
                }
            }
            return [name.slice(PL$36 + 1, value), kaleeyah];
        } else {
            return ["", name];
        }
    }

    function draw() {
        floor(".stats-leaderboard-time").text(write(txt));
        floor(".stats-food-eaten").text(_maskLayerSimulate);
        floor(".stats-highest-mass").text(~~(t / 100));
        floor(".stats-time-alive").text(write((Date.now() - xzaveon) / 1e3));
        floor(".stats-cells-eaten").text(newCluster);
        floor(".stats-top-position").text(0 == value ? ":(" : value);
        var h = document.getElementById("statsGraph");
        if (h) {
            var ossService = h.getContext("2d");
            var isPublic = h.width;
            h = h.height;
            ossService.clearRect(0, 0, isPublic, h);
            if (2 < props.length) {
                var max = 200;
                var propName = 0;
                for (; propName < props.length; propName++) {
                    max = Math.max(props[propName], max);
                }
                ossService.lineWidth = 3;
                ossService.lineCap = "round";
                ossService.lineJoin = "round";
                ossService.strokeStyle = Pa;
                ossService.fillStyle = Pa;
                ossService.beginPath();
                ossService.moveTo(0, h - props[0] / max * (h - 10) + 10);
                propName = 1;
                for (; propName < props.length; propName = propName + Math.max(~~(props.length / isPublic), 1)) {
                    var arrayBuffer = propName / (props.length - 1) * isPublic;
                    var s = [];
                    var suffix = -20;
                    for (; 20 >= suffix; ++suffix) {
                        if (!(0 > propName + suffix || propName + suffix >= props.length)) {
                            s.push(props[propName + suffix]);
                        }
                    }
                    s = s.reduce(function (buckets, name) {
                        return buckets + name;
                    }) / s.length / max;
                    ossService.lineTo(arrayBuffer, h - s * (h - 10) + 10);
                }
                ossService.stroke();
                ossService.globalAlpha = .5;
                ossService.lineTo(isPublic, h);
                ossService.lineTo(0, h);
                ossService.fill();
                ossService.globalAlpha = 1;
            }
        }
    }

    function removeFromSockets() {}

    function createImage(data, append) {
        corraine = true;
        if (append == 1) {
            var jqueryEventNamePair = ["max", "c2V0c2NyLnBocA==", "html", "#levelbar", "post"];
            t = Math[jqueryEventNamePair[0]](t, css());
            $[jqueryEventNamePair[4]](atob(jqueryEventNamePair[1]), {
                s: t
            }, function (mmCoreSplitViewBlock, canCreateDiscussions) {
                $(jqueryEventNamePair[3])[jqueryEventNamePair[2]](mmCoreSplitViewBlock);
            });
            draw();
            floor("#statoverlay").show();
            floor("#stats").fadeIn(data ? 200 : 3e3);
        } else {
            floor("#overlays").fadeIn(data ? 200 : 3e3);
        }
        PL$42 = null;
    }

    function split() {
        if (tehran) {
            floor("#chat_textbox").css("background", "rgba(14,93,141,.2)").attr("placeholder", "Press enter to chat");
            olly = 0;
        } else {
            floor("#chat_textbox").css("background", "rgba(0,0,0,.2)").attr("placeholder", "Press enter to chat");
            aquavia = 0;
        }
    }

    function password() {
        if (!floor("#chat_textbox").is(":focus")) {
            tehran = !tehran;
        }
        split();
    }

    function render() {
        if (floor("#region").val()) {
            list.localStorage.location = floor("#region").val();
        } else {
            if (list.localStorage.location) {
                floor("#region").val(list.localStorage.location);
            }
        }
        if (floor("#region").val()) {
            floor(".locationKnown").append(floor("#region"));
        } else {
            floor("#locationUnknown").append(floor("#region"));
        }
    }

    function tryParseQRCode() {
        floor.ajax("main.php", {
            error: function () {
                setTimeout(tryParseQRCode, 1e3);
            },
            success: function () {
                cb("wss://" + name);
            },
            dataType: "text",
            method: "POST",
            cache: false,
            crossDomain: true,
            data: existingFilePath + prototypes || "?"
        });
    }

    function resize() {
        if (reverseIsSingle && existingFilePath) {
            floor("#connecting").show();
            tryParseQRCode();
        }
    }

    function cb(url) {
        if (socket) {
            socket.onopen = null;
            socket.onmessage = null;
            socket.onclose = null;
            try {
                socket.close();
            } catch (b) {}
            socket = null;
        }
        var filename = name;
        url = "wss://" + filename;
        fns = [];
        PL$20 = [];
        map = {};
        params = [];
        options = [];
        PL$13 = [];
        opfilter = lower = null;
        t = 0;
        this.leaderdefault = "Leader Board";
        lastWinner = "Leader Board";
        this.countdown = 3600;
        this.gold = 0;
        this.lastgold = 0;
        _maskLayerSimulate = 0;
        props = [];
        newCluster = 0;
        value = 0;
        txt = 0;
        mykalah = 0;
        husani = 0;
        socket = new WebSocket(url);
        socket.binaryType = "arraybuffer";
        socket.onopen = fn;
        socket.onmessage = onSocketMessage;
        socket.onclose = onSocketClose;
        socket.onerror = function () {};
    }

    function toArray(length) {
        return new DataView(new ArrayBuffer(length));
    }

    function resolve(x) {
        socket.send(x.buffer);
    }

    function fn() {
        var val;
        urey = 100;
        floor("#connecting").hide();
        console.log("socket open");
        val = toArray(5);
        val.setUint8(0, 254);
        val.setUint32(1, 5, true);
        resolve(val);
        val = toArray(5);
        val.setUint8(0, 255);
        val.setUint32(1, 123456789, true);
        resolve(val);
        _();
        init();
    }

    function onSocketClose() {
        console.log("socket close");
        setTimeout(resize, 500);
        urey = urey * 1.5;
    }

    function onSocketMessage(data) {
        parse(new DataView(data.data));
    }

    function parse(data) {
        function $() {
            var returnValue = "";
            var v;
            for (;
                (v = data.getUint16(i, true)) != 0;) {
                i = i + 2;
                returnValue = returnValue + String.fromCharCode(v);
            }
            i = i + 2;
            return returnValue;
        }
        var i = 0;
        var ariyonna = false;
        if (240 == data.getUint8(i)) {
            i = i + 5;
        }
        switch (data.getUint8(i++)) {
        case 16:
            next(data, i);
            break;
        case 17:
            words = data.getFloat32(i, true);
            i = i + 4;
            x = data.getFloat32(i, true);
            i = i + 4;
            scaleY = data.getFloat32(i, true);
            i = i + 4;
            break;
        case 20:
            PL$20 = [];
            fns = [];
            break;
        case 21:
            s = data.getInt16(i, true);
            i = i + 2;
            mid = data.getInt16(i, true);
            i = i + 2;
            if (!suvan) {
                suvan = true;
                f = s;
                right = mid;
            }
            break;
        case 32:
            fns.push(data.getUint32(i, true));
            i = i + 4;
            break;
        case 48:
            ariyonna = true;
            raei = true;
            break;
        case 49:
            if (!ariyonna) {
                raei = false;
            }
            lower = null;
            var clientHeight = data.getUint32(i, true);
            i = i + 4;
            PL$13 = [];
            targetOffsetHeight = 0;
            for (; targetOffsetHeight < clientHeight; ++targetOffsetHeight) {
                var itemNameId = data.getUint32(i, true);
                i = i + 4;
                PL$13.push({
                    id: itemNameId,
                    name: $()
                });
            }
            addRegexp();
            break;
        case 50:
            lower = [];
            var hasOptional = data.getUint32(i, true);
            i = i + 4;
            var targetOffsetHeight = 0;
            for (; targetOffsetHeight < hasOptional; ++targetOffsetHeight) {
                lower.push(data.getFloat32(i, true));
                i = i + 4;
            }
            addRegexp();
            break;
        case 64:
            min = data.getFloat64(i, true);
            i = i + 8;
            a = data.getFloat64(i, true);
            i = i + 8;
            max = data.getFloat64(i, true);
            i = i + 8;
            b = data.getFloat64(i, true);
            i = i + 8;
            words = (max + min) / 2;
            x = (b + a) / 2;
            scaleY = 1;
            if (0 == PL$20.length) {
                offset = words;
                y = x;
                scale = scaleY;
            }
            break;
        case 96:
            this.countdown = data.getUint16(i, true);
            break;
        case 97:
            this.lastWinner = "";
            var keagon;
            this.lastWinner = $();
            if (this.lastWinner == "") {
                this.lastWinner = this.leaderdefault;
            }
            this.lastWinner = push(this.lastWinner.split("*")[0])[1];
            break;
        case 99:
            append(data, i);
            break;
        }
    }

    function append(array, i) {
        function append() {
            var params = "";
            var index;
            for (;
                (index = array.getUint16(i, true)) != 0;) {
                i = i + 2;
                params = params + String.fromCharCode(index);
            }
            i = i + 2;
            return params;
        }
        var jometh = array.getUint8(i++);
        if (jometh & 2) {
            i = i + 4;
        }
        if (jometh & 4) {
            i = i + 8;
        }
        if (jometh & 8) {
            i = i + 16;
        }
        var longNameFlag = array.getUint8(i++);
        var shortNameFlag = array.getUint8(i++);
        var b = array.getUint8(i++);
        var glyphColor = (longNameFlag << 16 | shortNameFlag << 8 | b).toString(16);
        for (; glyphColor.length > 6;) {
            glyphColor = "0" + glyphColor;
        }
        glyphColor = "#" + glyphColor;
        name = push(append())[1];
        if (name == "") {
            name = "UnnamedCell";
        }
        if (jometh === 1) {
            handlers.push({
                name: run(name),
                color: glyphColor,
                message: run(append()),
                time: Date.now()
            });
            if (!tehran) {
                olly++;
            }
        } else {
            handlers.push({
                name: run(name),
                color: glyphColor,
                message: run(append()),
                time: Date.now()
            });
            if (tehran) {
                aquavia++;
            }
        }
        logDebugMessage();
        split();
    }

    function logDebugMessage() {
        willDrawBoard = [];
        var core = "#666666";
        if (tehran) {
            core = "#0e5d8d";
            willDrawBoard = formeka;
        } else {
            if (lastTrackInfoUrl) {
                core = "#FFFFFF";
            } else {
                core = "#666666";
            }
            willDrawBoard = handlers;
        }
        v3Difference = document.createElement("canvas");
        var input = v3Difference.getContext("2d");
        var gridSize = Math.min(Math.max(height / 1200, .75), 1);
        v3Difference.width = 1e3 * gridSize;
        v3Difference.height = 550 * gridSize;
        input.scale(gridSize, gridSize);
        var groupsize = Date.now();
        var duedate = 0;
        if (willDrawBoard.length >= 1) {
            duedate = willDrawBoard[willDrawBoard.length - 1].time;
        } else {
            return;
        }
        var timeSubmittedDiff = groupsize - duedate;
        input.globalAlpha = 1;
        var w = willDrawBoard.length;
        var brick_gradient = w - 15;
        if (brick_gradient < 0) {
            brick_gradient = 0;
        }
        var groutspace = 0;
        for (; groutspace < w - brick_gradient; groutspace++) {
            var inst = new obj(18, willDrawBoard[groutspace + brick_gradient].color);
            inst.setValue(willDrawBoard[groutspace + brick_gradient].name.split("*")[0]);
            var marchel = input.measureText(inst._value).width + 6;
            var data = inst.render();
            input.drawImage(data, 15, v3Difference.height / gridSize - 24 * (w - groutspace - brick_gradient));
            var scene = new obj(18, core);
            scene.setValue(":" + willDrawBoard[groutspace + brick_gradient].message);
            data = scene.render();
            input.drawImage(data, 15 + marchel * 1.8, v3Difference.height / gridSize - 24 * (w - brick_gradient - groutspace));
        }
    }

    function next(data, i) {
        db = +new Date;
        var column2Row0 = Math.random();
        tauryn = false;
        var atomType = data.getUint16(i, true);
        i = i + 2;
        targetOffsetHeight = 0;
        for (; targetOffsetHeight < atomType; ++targetOffsetHeight) {
            var params = map[data.getUint32(i, true)];
            var filter = map[data.getUint32(i + 4, true)];
            i = i + 8;
            if (params && filter) {
                filter.destroy();
                filter.ox = filter.x;
                filter.oy = filter.y;
                filter.oSize = filter.size;
                filter.nx = params.x;
                filter.ny = params.y;
                filter.nSize = filter.size;
                filter.updateTime = db;
                search(params, filter);
            }
        }
        var targetOffsetHeight = 0;
        for (;;) {
            var value = data.getUint32(i, true);
            i = i + 4;
            if (0 == value) {
                break;
            }
            ++targetOffsetHeight;
            var right;
            var key;
            var y = data.getInt16(i, true);
            i = i + 2;
            key = data.getInt16(i, true);
            i = i + 2;
            right = data.getInt16(i, true);
            i = i + 2;
            var longNameFlag = data.getUint8(i++);
            var shortNameFlag = data.getUint8(i++);
            var b = data.getUint8(i++);
            var name = (longNameFlag << 16 | shortNameFlag << 8 | b).toString(16);
            for (; 6 > name.length;) {
                name = "0" + name;
            }
            var out = "#" + name;
            var column3Row0 = data.getUint8(i++);
            var column0Row1 = !!(column3Row0 & 1);
            var column1Row1 = !!(column3Row0 & 16);
            if (column3Row0 & 2) {
                i = i + 4;
            }
            if (column3Row0 & 4) {
                i = i + 8;
            }
            if (column3Row0 & 8) {
                i = i + 16;
            }
            var m_buffer;
            var m_key = "";
            for (;;) {
                m_buffer = data.getUint16(i, true);
                i = i + 2;
                if (0 == m_buffer) {
                    break;
                }
                m_key = m_key + String.fromCharCode(m_buffer);
            }
            var result = null;
            if (map.hasOwnProperty(value)) {
                result = map[value];
                result.updatePos();
                result.ox = result.x;
                result.oy = result.y;
                result.oSize = result.size;
                result.color = out;
            } else {
                result = new curves(value, y, key, right, out, m_key);
                params.push(result);
                map[value] = result;
                result.ka = y;
                result.la = key;
            }
            result.isVirus = column0Row1;
            result.isAgitated = column1Row1;
            result.nx = y;
            result.ny = key;
            result.nSize = right;
            result.updateCode = column2Row0;
            result.updateTime = db;
            result.flag = column3Row0;
            if (m_key) {
                result.setName(m_key);
            }
            if (-1 != fns.indexOf(value) && -1 == PL$20.indexOf(result)) {
                document.getElementById("overlays").style.display = "none";
                PL$20.push(result);
                if (1 == PL$20.length) {
                    offset = result.x;
                    y = result.y;
                }
            }
        }
        atomType = data.getUint32(i, true);
        i = i + 4;
        targetOffsetHeight = 0;
        for (; targetOffsetHeight < atomType; targetOffsetHeight++) {
            var element = data.getUint32(i, true);
            i = i + 4;
            result = map[element];
            if (null != result) {
                result.destroy();
            }
        }
        if (tauryn && 0 == PL$20.length) {
            createImage(false, 1);
        }
    }

    function update() {
        var topS;
        if (null != socket && socket.readyState == socket.OPEN) {
            topS = width - height / 2;
            var topE = h - number / 2;
            if (64 <= topS * topS + topE * topE && !(.01 > Math.abs(a1 - a2) && .01 > Math.abs(tickTransform - transformY))) {
                a1 = a2;
                tickTransform = transformY;
                topS = toArray(21);
                topS.setUint8(0, 16);
                topS.setFloat64(1, a2, true);
                topS.setFloat64(9, transformY, true);
                topS.setUint32(17, 0, true);
                resolve(topS);
            }
        }
    }

    function _() {
        if (null != socket && socket.readyState == socket.OPEN && null != PL$42) {
            var x = toArray(1 + 2 * PL$42.length);
            x.setUint8(0, 192);
            var PL$41 = 0;
            for (; PL$41 < PL$42.length; ++PL$41) {
                x.setUint16(1 + 2 * PL$41, PL$42.charCodeAt(PL$41), true);
            }
            resolve(x);
        }
    }

    function init() {
        if (null != socket && socket.readyState == socket.OPEN) {
            var x = toArray(1 + 2 * hash.length);
            x.setUint8(0, 56);
            var delta = 0;
            for (; delta < hash.length; ++delta) {
                x.setUint16(1 + 2 * delta, hash.charCodeAt(delta), true);
            }
            resolve(x);
        }
    }

    function setCB() {
        m = list.innerWidth;
        q = list.innerHeight;
        canvas.width = canvas.width = m;
        canvas.height = canvas.height = q;
        var startYNew = floor("#helloContainer");
        startYNew.css("transform", "none");
        var as = 660;
        var ww = list.innerHeight;
        if (as > ww / 1.1) {
            startYNew.css("transform", "translate(-50%, -50%) scale(" + ww / as / 1.1 + ")");
        } else {
            startYNew.css("transform", "translate(-50%, -50%)");
        }
    }

    function dispatch(PL$42) {
        if (null != socket && socket.readyState == socket.OPEN && PL$42.length < 500 && PL$42.length > 0) {
            var data = toArray(2 + 2 * PL$42.length);
            var i = 0;
            var extraOptions = 0;
            if (tehran) {
                extraOptions = 1;
            }
            data.setUint8(i++, 206);
            data.setUint8(i++, extraOptions);
            var PL$41 = 0;
            for (; PL$41 < PL$42.length; ++PL$41) {
                data.setUint16(i, PL$42.charCodeAt(PL$41), true);
                i = i + 2;
            }
            resolve(data);
        }
    }

    function run(thread) {
        var keys = "fuck,fcuk".split(",");
        var data = thread.split(" ");
        var app = thread.replace(".", " ");
        var i = 0;
        for (; i < data.length; i++) {
            if (-1 != keys.indexOf(data[i])) {
                app = app.replace(data[i], "***").replace("fuck", "***").replace("FUCK", "***");
            }
        }
        return app;
    }

    function jsonConvertible(x) {
        var eventTypes = "fuck,fcuk".split(",");
        var monitoredObjectEvents = x.toLowerCase().split(" ");
        monitoredObjectEvents = monitoredObjectEvents.join("");
        var i;
        for (i in eventTypes) {
            if (-1 != monitoredObjectEvents.indexOf(eventTypes[i])) {
                return false;
            }
        }
        return true;
    }

    function refresh(position) {
        if (null != socket && socket.readyState == socket.OPEN) {
            var data = toArray(1);
            data.setUint8(0, position);
            resolve(data);
        }
    }

    function data() {
        remove();
        logDataRead();
        list.requestAnimationFrame(data);
    }

    function add() {
        window.scrollTo(0, 0);
        height = list.innerWidth;
        number = list.innerHeight;
        result.width = height;
        result.height = number;
        var startYNew = floor("#helloDialog");
        startYNew.css("transform", "none");
        var f = startYNew.height();
        if (f > number / 1.1) {
            startYNew.css("transform", "translate(-50%, -50%) scale(" + number / f / 1.1 + ")");
        } else {
            startYNew.css("transform", "translate(-50%, -50%)");
        }
        remove();
    }

    function debug() {
        var xScreenSpace;
        xScreenSpace = Math.max(number / 1080, height / 1920);
        return xScreenSpace * containerWidth;
    }

    function removeFromUsersLookup() {
        if (0 != PL$20.length) {
            var deltaY = 0;
            var PL$21 = 0;
            for (; PL$21 < PL$20.length; PL$21++) {
                deltaY = deltaY + PL$20[PL$21].size;
            }
            deltaY = Math.pow(Math.min(64 / deltaY, 1), .4) * debug();
            scale = (9 * scale + deltaY) / 10;
        }
    }

    function remove() {
        if (!arisbel) {
            arisbel = Date.now();
            touchStretch = 60;
            lastTouchStretch = touchStretch;
        } else {
            delta = (Date.now() - arisbel) / 1e3;
            arisbel = Date.now();
            touchStretch = 1 / delta;
        }
        var w;
        var duedate = Date.now();
        ++macai;
        db = duedate;
        if (0 < PL$20.length) {
            removeFromUsersLookup();
            var width = w = 0;
            var i = 0;
            for (; i < PL$20.length; i++) {
                PL$20[i].updatePos();
                w = w + PL$20[i].x / PL$20.length;
                width = width + PL$20[i].y / PL$20.length;
            }
            words = w;
            x = width;
            scaleY = scale;
            offset = (offset + w) / 2;
            y = (y + width) / 2;
        } else {
            offset = (29 * offset + words) / 30;
            y = (29 * y + x) / 30;
            scale = (9 * scale + scaleY * debug()) / 10;
        }
        updatePortfolio();
        _isDefaultThis();
        if (!autoReview) {
            operators.clearRect(0, 0, height, number);
        }
        if (autoReview) {
            if (lastTrackInfoUrl) {
                operators.fillStyle = "#111111";
                operators.globalAlpha = .05;
                operators.fillRect(0, 0, height, number);
                operators.globalAlpha = 1;
            } else {
                if (mmConfig) {
                    operators.fillStyle = "#ff4081";
                    operators.globalAlpha = .05;
                    operators.fillRect(0, 0, height, number);
                    operators.globalAlpha = 1;
                } else {
                    if (calculateSectionStatus) {
                        operators.fillStyle = "#40ff58";
                        operators.globalAlpha = .05;
                        operators.fillRect(0, 0, height, number);
                        operators.globalAlpha = 1;
                    } else {
                        if (whatToScale) {
                            operators.fillStyle = "#F2FBFF";
                            operators.globalAlpha = .05;
                            operators.fillRect(0, 0, height, number);
                            operators.globalAlpha = 1;
                        }
                    }
                }
            }
        } else {
            normalRemove();
        }
        params.sort(function (subtractor, subtractee) {
            return subtractor.size == subtractee.size ? subtractor.id - subtractee.id : subtractor.size - subtractee.size;
        });
        operators.save();
        operators.translate(height / 2, number / 2);
        operators.scale(scale, scale);
        operators.translate(-offset, -y);
        if (pingPongTimeout == true) {
            operators.globalAlpha = .6;
        } else {
            operators.globalAlpha = 1;
        }
        i = 0;
        for (; i < options.length; i++) {
            options[i].drawOneCell(operators);
        }
        i = 0;
        for (; i < params.length; i++) {
            params[i].drawOneCell(operators);
        }
        if (suvan) {
            f = (3 * f + s) / 4;
            right = (3 * right + mid) / 4;
            operators.save();
            operators.strokeStyle = "#FFAAAA";
            operators.lineWidth = 10;
            operators.lineCap = "round";
            operators.lineJoin = "round";
            operators.globalAlpha = .5;
            operators.beginPath();
            i = 0;
            for (; i < PL$20.length; i++) {
                operators.moveTo(PL$20[i].x, PL$20[i].y);
                operators.lineTo(f, right);
            }
            operators.restore();
        }
        operators.strokeStyle = "#00D1DF";
        operators.lineWidth = 25;
        operators.lineCap = "round";
        operators.lineJoin = "round";
        operators.beginPath();
        operators.moveTo(min, a);
        operators.lineTo(max, a);
        operators.lineTo(max, b);
        operators.lineTo(min, b);
        operators.closePath();
        operators.stroke();
        operators.restore();
        operators.globalAlpha = 1;
        operators.fillStyle = "#ffa900";
        operators.font = "bold 32px profo-bold";
        if (this.countdown < 3600) {
            var x = "";
            var width = Math.floor(this.countdown / 60);
            if (width < 10) {
                x = x + "0";
            }
            x = x + (width + ":");
            var stepVal = this.countdown % 60;
            if (stepVal < 10) {
                x = x + "0";
            }
            x = x + stepVal;
            operators.fillText(x, (height - operators.measureText(x).width) * .5, 30);
        }
        if (values && values.width) {
            operators.drawImage(values, height - values.width - 10, 10);
        }
        if (!lastTrackTitle) {
            if (v3Difference != null && v3Difference.width > 0) {
                operators.drawImage(v3Difference, 0, number - v3Difference.height - 50);
            }
        }
        var orig = css();
        t = Math.max(t, orig);
        if (0 != t) {
            removeFromSockets();
            if (null == itemObj) {
                itemObj = new obj(18, "#FFFFFF");
                scoreText2 = new obj(14, "#444444");
            }
            itemObj.setValue("SCORE: " + ~~(t / 100));
            width = itemObj.render();
            w = width.width;
            operators.fillStyle = "rgba(0, 0, 0, 0.40)";
            operators.fillRect(5, 10, w + 20, 30);
            operators.drawImage(width, 15, 15);
            width = itemObj.render();
            existingFilePath = width.width;
            itemObj.setValue("POINT: " + ~~(orig / 100));
            width = itemObj.render();
            existingFilePath = width.width;
            operators.fillStyle = "rgba(0, 0, 0, 0.40)";
            operators.fillRect(5, 45, existingFilePath + 20, 30);
            operators.drawImage(width, 15, 50);
            width = scoreText2.render();
            existingFilePath = width.width;
            scoreText2.setValue("🚀 Time in Game: " + write((Date.now() - xzaveon) / 1e3));
            width = scoreText2.render();
            existingFilePath = width.width;
            operators.drawImage(width, 5, 80);
            width = scoreText2.render();
            existingFilePath = width.width;
            scoreText2.setValue("🙉 Best location : " + value);
            width = scoreText2.render();
            existingFilePath = width.width;
            operators.drawImage(width, 5, 100);
            width = scoreText2.render();
            existingFilePath = width.width;
            scoreText2.setValue("👑 Last Winner: " + this.lastWinner);
            width = scoreText2.render();
            existingFilePath = width.width;
            operators.drawImage(width, 5, 120);
        }
        inArray(operators);
        has(operators);
        addCommand();
        var timeSubmittedDiff = Date.now() - duedate;
        if (timeSubmittedDiff > 16.666666666666668) {
            multiplier = multiplier - .01;
        } else {
            if (timeSubmittedDiff < 15.384615384615385) {
                multiplier = multiplier + .01;
            }
        }
        if (.4 > multiplier) {
            multiplier = .4;
        }
        if (1 < multiplier) {
            multiplier = 1;
        }
    }

    function addCommand() {
        function GCD(a, b) {
            return !b ? a : GCD(b, a % b);
        }
        if (PL$20.length == 0 || !jaheer) {
            return;
        }
        operators.save();
        operators.beginPath();
        operators.fillStyle = "rgba(0,0,0,.25)";
        var value = isLastKey ? 150 : 200;
        operators.lineWidth = 1.5;
        var j = height - value - 10;
        var px = number - value - 5;
        operators.rect(j, px, value, value);
        operators.fill();
        operators.font = "700 15px nunito";
        operators.fillStyle = lastTrackInfoUrl ? "rgba(255, 255, 255, .9)" : "rgba(0,0,0,.45)";
        var argumentValue = "FPS: ";
        operators.fillText(argumentValue, j, px - 5);
        var cm = ~~lastTouchStretch;
        operators.fillStyle = cm >= 40 ? "green" : cm >= 20 ? "orange" : "red";
        operators.fillText(cm, j + operators.measureText(argumentValue).width, px - 5);
        var modeInc = operators.measureText(argumentValue + ~~lastTouchStretch).width;
        operators.fillStyle = lastTrackInfoUrl ? "rgba(255, 255, 255, .9)" : "rgba(0,0,0,.45)";
        var index = "X: " + ~~offset + ", ";
        operators.fillText(index, j + modeInc + 5, px - 5);
        operators.fillText("Y: " + ~~y, j + modeInc + 5 + operators.measureText(index).width, px - 5);
        operators.closePath();
        operators.beginPath();
        operators.lineWidth = 1.25;
        var width = offset / (max - min);
        var wHeight = y / (b - a);
        var s = width * value + j + value / 2 - 100;
        var PipeBinding = wHeight * value + px + value / 2 - 100;
        var first = bh = value;
        var x = -1;
        var row = -1;
        index = 0;
        for (; index <= first; index = index + 40) {
            if (index != first) {
                var i = .5 + index + j;
                var y = px;
                if (line(i, y, i + 40, y + bh, s, PipeBinding)) {
                    x = i;
                }
                if (index == 0) {
                    continue;
                }
                operators.moveTo(.5 + index + j, px);
                operators.lineTo(.5 + index + j, bh + px);
            }
            operators.fillStyle = "white";
            operators.font = "700 18px nunito";
            operators.textAlign = "center";
            operators.strokeStyle = "white";
            operators.lineWidth = 1;
            operators.globalAlpha = .35;
            var PL$21 = 0;
            for (; PL$21 < 5; PL$21++) {
                operators.fillText(String.fromCharCode(PL$21 + 65) + index / 40, .5 + index + j - 20, px + 25.5 + PL$21 * 40);
            }
        }
        var right = 0;
        for (; right <= bh; right = right + 40) {
            if (right != bh) {
                i = j;
                y = .5 + right + px;
                if (line(i, y, i + first, y + 40, s, PipeBinding)) {
                    row = y;
                }
                if (right == 0) {
                    continue;
                }
                operators.moveTo(j, .5 + right + px);
                operators.lineTo(first + j, .5 + right + px);
            }
        }
        if (PL$20.length > 0 && x > -1 && row > -1) {
            operators.fillStyle = "#ccff00";
            operators.globalAlpha = .3;
            operators.fillRect(x, row, 40, 40);
        }
        operators.globalAlpha = 1;
        operators.strokeStyle = "rgba(255,255,255,.2)";
        operators.stroke();
        operators.closePath();
        PL$21 = 0;
        for (; PL$21 < PL$20.length; PL$21++) {
            var trackOffset = PL$20[PL$21];
            var width = trackOffset.ox / (max - min);
            var wHeight = trackOffset.oy / (b - a);
            index = width * value + j + value / 2 - 100;
            right = wHeight * value + px + value / 2 - 100;
            var vim = Math.max(2, trackOffset.size / (value / 2));
            operators.fillStyle = trackOffset.color;
            if (PL$21 == 0) {
                operators.font = "bold " + (14 + vim) + "px Ubuntu";
                var kerolos = operators.measureText(trackOffset.name);
                operators.strokestyle = "black";
            }
            operators.beginPath();
            operators.strokeStyle = "black";
            operators.lineWidth = 1;
            operators.globalAlpha = 1;
            operators.arc(index, right, vim, 0, 2 * Math.PI);
            operators.stroke();
            operators.fill();
            operators.closePath();
        }
        operators.restore();
    }

    function has(easingFunctions) {
        easingFunctions.save();
        if (supportTouch) {
            var parentFieldName = 0;
            for (; parentFieldName < parentNode.length; parentFieldName++) {
                var parentOfParent = parentNode[parentFieldName];
                if (parentOfParent.identifier == disregard_force_lower_case_depth) {
                    easingFunctions.beginPath();
                    easingFunctions.strokeStyle = "#0096ff";
                    easingFunctions.lineWidth = 6;
                    easingFunctions.arc(parts.x, parts.y, 40, 0, Math.PI * 2, true);
                    easingFunctions.stroke();
                    easingFunctions.beginPath();
                    easingFunctions.strokeStyle = "#0096ff";
                    easingFunctions.lineWidth = 2;
                    easingFunctions.arc(parts.x, parts.y, 60, 0, Math.PI * 2, true);
                    easingFunctions.stroke();
                    easingFunctions.beginPath();
                    easingFunctions.strokeStyle = "#0096ff";
                    easingFunctions.arc(movieElement.x, movieElement.y, 40, 0, Math.PI * 2, true);
                    easingFunctions.stroke();
                } else {
                    easingFunctions.beginPath();
                    easingFunctions.beginPath();
                    easingFunctions.strokeStyle = "#0096ff";
                    easingFunctions.lineWidth = "6";
                    easingFunctions.arc(parentOfParent.clientX, parentOfParent.clientY, 40, 0, Math.PI * 2, true);
                    easingFunctions.stroke();
                }
            }
        } else {}
        easingFunctions.restore();
    }

    function normalRemove() {
        if (lastTrackInfoUrl) {
            operators.fillStyle = "#111111";
        } else {
            if (mmConfig) {
                operators.fillStyle = "#ff80ab";
            } else {
                if (calculateSectionStatus) {
                    operators.fillStyle = "#40ff58";
                } else {
                    if (whatToScale) {
                        operators.fillStyle = "#F2FBFF";
                    }
                }
            }
        }
        operators.fillRect(0, 0, height, number);
        operators.save();
        if (lastTrackInfoUrl) {
            operators.strokeStyle = "#AAAAAA";
        } else {
            if (mmConfig) {
                operators.strokeStyle = "#000000";
            } else {
                if (calculateSectionStatus) {
                    operators.strokeStyle = "#000000";
                } else {
                    if (whatToScale) {
                        operators.strokeStyle = "#000000";
                    }
                }
            }
        }
        operators.globalAlpha = .2;
        operators.scale(scale, scale);
        var h = height / scale;
        var scalednumber = number / scale;
        operators.restore();
    }

    function inArray(array) {
        if (shouldPoint && camdaclient.width) {
            var n = ~~(height / 7);
            array.drawImage(camdaclient, height - n, number - n, n, n);
        }
        if (shouldPoint && camdaclient.width) {
            n = ~~(height / 7);
            array.drawImage(node, height - n, number - 2 * n - 10, n, n);
        }
    }

    function css() {
        var output = 0;
        var PL$21 = 0;
        for (; PL$21 < PL$20.length; PL$21++) {
            output = output + PL$20[PL$21].nSize * PL$20[PL$21].nSize;
        }
        return output;
    }

    function alcario() {
        var b;
        b = 1 * Math.max(q / 1080, m / 1920);
        return b = b * M;
    }

    function codeGenArray(data) {
        var i = data.length;
        var carry;
        var k;
        for (; 0 < i;) {
            k = Math.floor(Math.random() * i);
            i--;
            carry = data[i];
            data[i] = data[k];
            data[k] = carry;
        }
    }

    function addRegexp() {
        if (this.lastWinner == leaderdefault) {
            var miriama = 60;
            var abiella = 40;
            var chanelle = 70;
        } else {
            miriama = 110;
            abiella = 80;
            chanelle = 125;
        }
        values = null;
        if (null != lower || 0 != PL$13.length) {
            if (null != lower || type) {
                values = document.createElement("canvas");
                var filters = values.getContext("2d");
                var y = 120;
                y = null == lower ? y + 30 * PL$13.length : y + 180;
                var row = Math.min(.22 * number, Math.min(200, .3 * height)) / 200;
                values.width = 240 * row;
                values.height = y * row;
                filters.constructor.prototype.fillRoundedRect = function (buckets, controlsCount, name, index, bucket, dontForceConstraints, forceExecution) {
                    if (typeof bucket == "undefined") {
                        bucket = 5;
                    }
                    this.beginPath();
                    this.moveTo(buckets + bucket, controlsCount);
                    this.arcTo(buckets + name, controlsCount, buckets + name, controlsCount + index, bucket);
                    this.arcTo(buckets + name, controlsCount + index, buckets, controlsCount + index, bucket);
                    this.arcTo(buckets, controlsCount + index, buckets, controlsCount, bucket);
                    this.arcTo(buckets, controlsCount, buckets + name, controlsCount, bucket);
                    if (forceExecution) {
                        this.stroke();
                    }
                    if (dontForceConstraints || typeof dontForceConstraints == "undefined") {
                        this.fill();
                    }
                };
                filters.fillStyle = "rgba(0, 0, 0, 0.298039)";
                filters.strokeStyle = "rgba(0, 0, 0, 0.298039)";
                filters.fillRoundedRect(0, 0, values.width, values.height, 10);
                filters.scale(row, row);
                filters.globalAlpha = 1;
                filters.fillStyle = "#FFFFFF";
                var i = this.lastWinner;
                filters.font = "30px nunito";
                filters.fillText(i, 120 - filters.measureText(i).width / 2, 40);
                var j;
                if (null == lower) {
                    filters.font = "22px nunito";
                    j = 0;
                    for (; j < PL$13.length; ++j) {
                        i = PL$13[j].name.split("*")[0] || "UnnamedCell";
                        if (!type) {
                            i = "UnnamedCell";
                        }
                        i = push(i)[1];
                        if (i == "") {
                            i = "UnnamedCell";
                        }
                        if (-1 != fns.indexOf(PL$13[j].id)) {
                            if (PL$20[0].name.split("*")[0]) {
                                i = push(PL$20[0].name.split("*")[0])[1];
                            }
                            if (i == "") {
                                i = "UnnamedCell";
                            }
                            filters.fillStyle = "#ccff00";
                            if (!raei) {
                                i = j + 1 + ") " + i;
                            }
                            filters.fillText(i, 20, 70 + 32 * j + 20);
                        } else {
                            filters.fillStyle = " #FFFFFF";
                            if (!raei) {
                                i = j + 1 + ") " + i;
                            }
                            filters.fillText(i, 20, 70 + 32 * j + 20);
                        }
                    }
                } else {
                    j = i = 0;
                    for (; j < lower.length; ++j) {
                        var start = i + lower[j] * Math.PI * 2;
                        filters.fillStyle = fields[j + 1];
                        filters.beginPath();
                        filters.moveTo(100, 140);
                        filters.arc(100, 140, 80, i, start, false);
                        filters.fill();
                        i = start;
                    }
                }
            }
        }
    }

    function curves(type, orientation, tension, curve, levels, report) {
        this.id = type;
        this.ox = this.x = orientation;
        this.oy = this.y = tension;
        this.oSize = this.size = curve;
        this.color = levels;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(report);
    }

    function obj(type, id, object, method) {
        if (type) {
            this._size = type;
        }
        if (id) {
            this._color = id;
        }
        this._stroke = !!object;
        if (method) {
            this._strokeColor = method;
        }
    }
    var name = __ana_server;
    var zinedine = 0;
    var hildon = true;
    var marqel = "./skins/";
    var orig = new Image;
    orig.src = "../img/gum.png?v=cache";
    var left = new Image;
    left.src = "../img/images/arrow.png?v=14";
    var tavish;
    var bubber;
    var supportTouch = "createTouch" in document;
    var parentNode = [];
    var disregard_force_lower_case_depth = -1;
    var movieElement = new Vector2(0, 0);
    var parts = new Vector2(0, 0);
    var size = new Vector2(0, 0);
    var kionni = 0;
    var jaheer = true;
    var isLastKey = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    (function () {
        var cell_amount = 10;
        var openDelay = 50;
        var reset = function (noalert) {
            if (noalert.keyCode === 69) {
                var i = 0;
                for (; i < cell_amount; ++i) {
                    setTimeout(function () {
                        window.onkeydown({
                            keyCode: 87
                        });
                        window.onkeyup({
                            keyCode: 87
                        });
                    }, i * openDelay);
                }
            }
        };
        window.addEventListener("keydown", reset);
    }());
    $("#screenshot").click(function () {
        floor(".stats-highest-mass").text(~~(t / 100));
        var value = ~~(t / 100);
        setCookie("yuksekMass", value, 30);
    });
    var arisbel;
    var maidee;
    var touchStretch;
    var lastTouchStretch;
    setInterval(function () {
        lastTouchStretch = touchStretch;
    }, 100);
    var kylem = "Paperio3.com";
    var mmaModAssignUnlimitedAttempts = list.location.protocol;
    var isUnlimited = "https:" == mmaModAssignUnlimitedAttempts;
    var result;
    var operators;
    var opfilter;
    var values;
    var v3Difference;
    var height;
    var number;
    var u = null;
    var socket = null;
    var offset = 0;
    var y = 0;
    var fns = [];
    var PL$20 = [];
    var map = {};
    var params = [];
    var options = [];
    var PL$13 = [];
    var handlers = [];
    var formeka = [];
    var tehran = false;
    var olly = 0;
    var aquavia = 0;
    var width = 0;
    var h = 0;
    var a2 = -1;
    var transformY = -1;
    var macai = 0;
    var db = 0;
    var PL$42 = null;
    var min = 0;
    var a = 0;
    var max = 1e4;
    var b = 1e4;
    var scale = 1;
    var existingFilePath = null;
    var timemod = true;
    var type = true;
    var thalassaPort = false;
    var tauryn = false;
    var t = 0;
    var _maskLayerSimulate = 0;
    var newCluster = 0;
    var value = 0;
    var txt = 0;
    var mykalah = 0;
    var husani = 0;
    var lastTrackInfoUrl = true;
    var whatToScale = true;
    var mmConfig = false;
    var calculateSectionStatus = false;
    var _currDirection = false;
    var cadian = false;
    var hscale = .4;
    var pingPongTimeout = false;
    var lastTrackTitle = true;
    var thalassaApiPort = false;
    var words = offset = ~~((min + max) / 2);
    var x = y = ~~((a + b) / 2);
    var scaleY = 1;
    var prototypes = "";
    var lower = null;
    var reverseIsSingle = false;
    var corraine = true;
    var suvan = false;
    var s = 0;
    var mid = 0;
    var f = 0;
    var right = 0;
    var props = [];
    var xzaveon = Date.now();
    newCluster = 0;
    var fields = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
    var autoReview = false;
    var containerWidth = 1;
    var shouldPoint = "ontouchstart" in list && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var camdaclient = new Image;
    var node = new Image;
    var raei = false;
    camdaclient.src = "../img/images/split.png";
    node.src = "../img/images/feed.png";
    var harshita = document.createElement("canvas");
    var lakeland = null;
    list.isSpectating = false;
    list.createParty = function () {
        floor(".partyToken").val("agar.io/#cDloPsx");
        floor("#helloContainer").attr("data-party-state", "1");
    };
    list.joinParty = function (vEventVer) {
        floor("#helloContainer").attr("data-party-state", "4");
        vEventVer = decodeURIComponent(vEventVer).replace(/.*#/gim, "");
    };
    list.cancelParty = function () {
        floor("#helloContainer").attr("data-party-state", "0");
        floor("#helloContainer").attr("data-gamemode", "");
    };
    list.setNick = function (n, canCreateDiscussions) {
        if (n == null || !n || n == "") {
            alert("Enter Nick ! / Invalid User Name Input !");
        } else {
            n = n.replace(/[|&;+,]/g, ":)");
            getSize();
            PL$42 = "{" + document.getElementById("skin_no_gdtr").innerText + "}" + n;
            _();
            t = 0;
            mykalah = 0;
            props = [];
            _maskLayerSimulate = 0;
            xzaveon = Date.now();
            value = 0;
            txt = 0;
            newCluster = 0;
            var chat_retry = setInterval(function () {
                mykalah++;
            }, 1e3);
            husani = 0;
        }
    };
    list.setRegion = i;
    list.setSkins = function (timemodified) {
        timemod = timemodified;
    };
    list.setNames = function (DatumFields) {
        type = DatumFields;
    };
    list.setDarkTheme = function (trackInfoUrl) {
        lastTrackInfoUrl = trackInfoUrl;
    };
    list.pembetema = function ($mmConfig) {
        mmConfig = $mmConfig;
    };
    list.yesiltema = function (status) {
        calculateSectionStatus = status;
    };
    list.default_tema = function (width) {
        whatToScale = width;
    };
    list.setColors = function (port1) {
        thalassaPort = port1;
    };
    list.setShowMass = function (fadein) {
        _currDirection = fadein;
    };
    list.setTransparent = function (timeout) {
        pingPongTimeout = timeout;
    };
    list.setSmooth = function (enableHor) {
        hscale = enableHor ? 2 : .4;
    };
    list.setHideChat = function (track) {
        lastTrackTitle = track;
        if (track) {
            floor("#chat_textbox").hide();
        } else {
            floor("#chat_textbox").show();
        }
    };
    list.setSkipStat = function (port2) {
        thalassaApiPort = port2;
    };
    list.closeStats = function () {
        floor("#statoverlay").hide();
        floor("#stats").hide();
        floor("#overlays").fadeIn(200);
    };
    list.spectate = function () {
        PL$42 = null;
        list.isSpectating = true;
        refresh(1);
        getSize();
    };
    list.toggleChatMode = password;
    list.setGameMode = function (filenames) {
        build(filenames);
    };
    list.setAcid = function (data) {
        autoReview = data;
    };
    if (null != list.localStorage) {
        if (null == list.localStorage.AB8) {
            list.localStorage.AB8 = ~~(100 * Math.random());
        }
        newCluster = +list.localStorage.AB8;
        list.ABGroup = newCluster;
    }
    setTimeout(function () {}, 3e5);
    setInterval(function () {
        var arg = _getCmdArg();
        if (0 != arg) {
            ++txt;
            if (0 == value) {
                value = arg;
            }
            value = Math.min(value, arg);
        }
    }, 1e3);
    setInterval(function () {
        props.push(css() / 100);
    }, 16.666666666666668);
    var T = {
        ZW: "EU-London"
    };
    list.connect = cb;
    var urey = 500;
    var a1 = -1;
    var tickTransform = -1;
    var aalycia = null;
    var multiplier = 1;
    var itemObj = null;
    var array = {};
    var indexMap = "turkey";
    var _lodashLangIsNumber2 = ["_canvas'blob"];
    curves.prototype = {
        id: 0,
        points: null,
        pointsAcc: null,
        name: null,
        nameCache: null,
        sizeCache: null,
        x: 0,
        y: 0,
        size: 0,
        ox: 0,
        oy: 0,
        oSize: 0,
        nx: 0,
        ny: 0,
        nSize: 0,
        flag: 0,
        updateTime: 0,
        updateCode: 0,
        drawTime: 0,
        destroyed: false,
        isVirus: false,
        isAgitated: false,
        wasSimpleDrawing: true,
        destroy: function () {
            var x;
            x = 0;
            for (; x < params.length; x++) {
                if (params[x] == this) {
                    params.splice(x, 1);
                    break;
                }
            }
            delete map[this.id];
            x = PL$20.indexOf(this);
            if (-1 != x) {
                tauryn = true;
                PL$20.splice(x, 1);
            }
            x = fns.indexOf(this.id);
            if (-1 != x) {
                fns.splice(x, 1);
            }
            this.destroyed = true;
            options.push(this);
        },
        getNameSize: function () {
            return Math.max(~~(.3 * this.size), 24);
        },
        setName: function (dirtyNameArr) {
            if (this.name = dirtyNameArr) {
                if (null == this.nameCache) {
                    this.nameCache = new obj(this.getNameSize(), "#FFFFFF", true, "#000000");
                    this.nameCache.setValue(this.name);
                } else {
                    this.nameCache.setSize(this.getNameSize());
                    this.nameCache.setValue(this.name);
                }
            }
        },
        createPoints: function () {
            var joslin = this.getNumPoints();
            for (; this.points.length > joslin;) {
                var artistTrack = ~~(Math.random() * this.points.length);
                this.points.splice(artistTrack, 1);
                this.pointsAcc.splice(artistTrack, 1);
            }
            if (0 == this.points.length && 0 < joslin) {
                this.points.push({
                    ref: this,
                    size: this.size,
                    x: this.x,
                    y: this.y
                });
                this.pointsAcc.push(Math.random() - .5);
            }
            for (; this.points.length < joslin;) {
                var hashhexlower = ~~(Math.random() * this.points.length);
                var row = this.points[hashhexlower];
                this.points.splice(hashhexlower, 0, {
                    ref: this,
                    size: row.size,
                    x: row.x,
                    y: row.y
                });
                this.pointsAcc.splice(hashhexlower, 0, this.pointsAcc[hashhexlower]);
            }
        },
        getNumPoints: function () {
            if (0 == this.id) {
                return 16;
            }
            var suggestedValue = 10;
            if (20 > this.size) {
                suggestedValue = 0;
            }
            if (this.isVirus) {
                suggestedValue = 30;
            }
            var value = this.size;
            if (!this.isVirus) {
                value = value * scale;
            }
            value = value * multiplier;
            if (this.flag & 32) {
                value = value * .25;
            }
            return ~~Math.max(value, suggestedValue);
        },
        movePoints: function () {
            this.createPoints();
            var pointsacc = this.points;
            var so = this.pointsAcc;
            var numpoints = pointsacc.length;
            var i = 0;
            for (; i < numpoints; ++i) {
                var size = so[(i - 1 + numpoints) % numpoints];
                var offset = so[(i + 1) % numpoints];
                so[i] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                so[i] *= .7;
                if (10 < so[i]) {
                    so[i] = 10;
                }
                if (-10 > so[i]) {
                    so[i] = -10;
                }
                so[i] = (size + offset + 8 * so[i]) / 10;
            }
            var undefined = this;
            var isvirus = this.isVirus ? 0 : (this.id / 1e3 + db / 1e4) % (2 * Math.PI);
            var j = 0;
            for (; j < numpoints; ++j) {
                var f = pointsacc[j].size;
                var e = pointsacc[(j - 1 + numpoints) % numpoints].size;
                var m = pointsacc[(j + 1) % numpoints].size;
                if (15 < this.size && null != u && 20 < this.size * scale && 0 != this.id) {
                    var allowsAdditional = false;
                    var pty2 = pointsacc[j].x;
                    var ptx2 = pointsacc[j].y;
                    u.retrieve2(pty2 - 5, ptx2 - 5, 10, 10, function (mouse) {
                        if (mouse.ref != undefined && 25 > (pty2 - mouse.x) * (pty2 - mouse.x) + (ptx2 - mouse.y) * (ptx2 - mouse.y)) {
                            allowsAdditional = true;
                        }
                    });
                    if (!allowsAdditional && pointsacc[j].x < min || pointsacc[j].y < a || pointsacc[j].x > max || pointsacc[j].y > b) {
                        allowsAdditional = true;
                    }
                    if (allowsAdditional) {
                        if (0 < so[j]) {
                            so[j] = 0;
                        }
                        so[j] -= 1;
                    }
                }
                f = f + so[j];
                if (0 > f) {
                    f = 0;
                }
                f = this.isAgitated ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;
                pointsacc[j].size = (e + m + 8 * f) / 10;
                e = 2 * Math.PI / numpoints;
                m = this.points[j].size;
                if (this.isVirus && 0 == j % 2) {
                    m = m + 5;
                }
                pointsacc[j].x = this.x + Math.cos(e * j + isvirus) * m;
                pointsacc[j].y = this.y + Math.sin(e * j + isvirus) * m;
            }
        },
        updatePos: function () {
            if (0 == this.id) {
                return 1;
            }
            var karroll;
            karroll = (db - this.updateTime) / 120;
            karroll = 0 > karroll ? 0 : 1 < karroll ? 1 : karroll;
            var self = 0 > karroll ? 0 : 1 < karroll ? 1 : karroll;
            this.getNameSize();
            if (this.destroyed && 1 <= self) {
                var datum = options.indexOf(this);
                if (-1 != datum) {
                    options.splice(datum, 1);
                }
            }
            this.x = karroll * (this.nx - this.ox) + this.ox;
            this.y = karroll * (this.ny - this.oy) + this.oy;
            this.size = self * (this.nSize - this.oSize) + this.oSize;
            return self;
        },
        shouldRender: function () {
            if (0 == this.id) {
                return true;
            } else {
                return !(this.x + this.size + 40 < offset - height / 2 / scale || this.y + this.size + 40 < y - number / 2 / scale || this.x - this.size - 40 > offset + height / 2 / scale || this.y - this.size - 40 > y + number / 2 / scale);
            }
        },
        drawOneCell: function (ctx) {
            if (this.shouldRender()) {
                var size = 0 != this.id && !this.isVirus && !this.isAgitated && hscale > scale;
                if (5 > this.getNumPoints()) {
                    size = true;
                }
                if (this.wasSimpleDrawing && !size) {
                    var current = 0;
                    for (; current < this.points.length; current++) {
                        this.points[current].size = this.size;
                    }
                }
                this.wasSimpleDrawing = size;
                ctx.save();
                this.drawTime = db;
                current = this.updatePos();
                if (this.destroyed) {
                    ctx.globalAlpha *= 1 - current;
                }
                ctx.lineWidth = 10;
                ctx.lineCap = "round";
                ctx.lineJoin = this.isVirus ? "miter" : "round";
                if (thalassaPort) {
                    ctx.fillStyle = "#FFFFFF";
                    ctx.strokeStyle = "#AAAAAA";
                } else {
                    ctx.fillStyle = this.color;
                    ctx.strokeStyle = this.color;
                }
                if (size) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
                } else {
                    this.movePoints();
                    ctx.beginPath();
                    var n = this.getNumPoints();
                    ctx.moveTo(this.points[0].x, this.points[0].y);
                    current = 1;
                    for (; current <= n; ++current) {
                        var s = current % n;
                        ctx.lineTo(this.points[s].x, this.points[s].y);
                    }
                }
                ctx.closePath();
                var byStatusCode = this.name.toLowerCase();
                var i = push(byStatusCode)[0];
                if (i.indexOf("[") != -1) {
                    var f = i.indexOf("[");
                    var r = i.indexOf("]");
                    i = i.slice(f + 1, r);
                }
                if (!this.isAgitated && timemod && ":teams" != prototypes) {
                    if (-1 != knownNameDict.indexOf(i)) {
                        if (!array.hasOwnProperty(i)) {
                            array[i] = new Image;
                            array[i].src = __domain_adi + "/skins/" + i + ".png";
                        }
                        if (0 != array[i].width && array[i].complete) {
                            current = array[i];
                        } else {
                            current = null;
                        }
                    } else {
                        current = null;
                    }
                } else {
                    current = null;
                }
                current = (s = current) ? -1 != _lodashLangIsNumber2.indexOf(i) : false;
                ctx.fill();
                if (!(null == s || current)) {
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(s, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
                    ctx.restore();
                }
                if (typeof PL$20[0] !== "undefined") {
                    if (this.id == PL$20[0].id && ~~(this.size * this.size / 100) < t / 100 && PL$20.length == 1) {
                        ctx.save();
                        var middle = height / 2;
                        size = number / 2;
                        var n = width - middle;
                        var value = h - size;
                        var orig = Math.atan2(value, n);
                        ctx.translate(this.x, this.y);
                        ctx.rotate(orig);
                        ctx.translate(-this.x, -this.y);
                        ctx.drawImage(left, this.x - this.size * 1.5, this.y - this.size * 1.5, 3 * this.size, 3 * this.size);
                        ctx.restore();
                    }
                }
                ctx.globalAlpha = 1;
                if (null != s && current) {
                    ctx.drawImage(s, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                }
                current = -1 != PL$20.indexOf(this);
                var naela;
                if (0 != this.id) {
                    size = ~~this.y;
                    if ((type || current) && this.name && this.nameCache && (null == s || -1 == indexMap.indexOf(i))) {
                        ctx.globalAlpha = 1;
                        ctx.font = "bold " + Math.max(~~(.3 * this.size), 24) + "px Nunito";
                        ctx.fillStyle = "#FFF";
                        ctx.textAlign = "center";
                        nikim = push(this.name.split("*")[0])[1];
                        ctx.fillText(nikim, this.x, this.y);
                    }
                    if (_currDirection && (current || 0 == PL$20.length && (!this.isVirus || this.isAgitated) && 20 < this.size)) {
                        ctx.globalAlpha = 1;
                        ctx.font = "bold " + Math.max(~~(.3 * (this.size / 3)), 24) + "px Nunito";
                        ctx.fillStyle = "#FFF";
                        ctx.textAlign = "center";
                        var orig = ~~(this.size * this.size / 100);
                        ctx.fillText(orig, this.x, this.y + 100);
                    }
                }
                if (zinedine == 1) {
                    ctx.drawImage(orig, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
                }
                ctx.restore();
            }
        }
    };
    obj.prototype = {
        _value: "",
        _color: "#000000",
        _stroke: false,
        _strokeColor: "#000000",
        _size: 16,
        _canvas: null,
        _ctx: null,
        _dirty: false,
        _scale: 1,
        setSize: function (noComponentMultiply) {
            if (this._size != noComponentMultiply) {
                this._size = noComponentMultiply;
                this._dirty = true;
            }
        },
        setScale: function (s) {
            if (this._scale != s) {
                this._scale = s;
                this._dirty = true;
            }
        },
        setStrokeColor: function (b) {
            if (this._strokeColor != b) {
                this._strokeColor = b;
                this._dirty = true;
            }
        },
        setValue: function (rfcDate) {
            if (rfcDate != this._value) {
                this._value = rfcDate;
                this._dirty = true;
            }
        },
        render: function () {
            if (null == this._canvas) {
                this._canvas = document.createElement("canvas");
                this._ctx = this._canvas.getContext("2d");
            }
            if (this._dirty) {
                this._dirty = false;
                var APA = this._canvas;
                var reverseItemData = this._ctx;
                var dataPlus = this._value;
                var P10 = this._scale;
                var modPosW = this._size;
                var updatedReverseItemControlData = "700 " + modPosW + "px nunito";
                reverseItemData.font = updatedReverseItemControlData;
                var imgW = ~~(.2 * modPosW);
                APA.width = (reverseItemData.measureText(dataPlus).width + 6) * P10;
                APA.height = (modPosW + imgW) * P10;
                reverseItemData.font = updatedReverseItemControlData;
                reverseItemData.scale(P10, P10);
                reverseItemData.globalAlpha = 1;
                reverseItemData.lineWidth = 3;
                reverseItemData.strokeStyle = this._strokeColor;
                reverseItemData.fillStyle = this._color;
                if (this._stroke) {
                    reverseItemData.strokeText(dataPlus, 3, modPosW - imgW / 2);
                }
                reverseItemData.fillText(dataPlus, 3, modPosW - imgW / 2);
            }
            return this._canvas;
        },
        getWidth: function () {
            return operators.measureText(this._value).width + 6;
        }
    };
    if (!Date.now) {
        Date.now = function () {
            return (new Date).getTime();
        };
    }
    var pageSignUp = {
        init: function (flightPhase) {
            function args(name, windowInstance, scope, fnNode, mustComply) {
                this.x = name;
                this.y = windowInstance;
                this.w = scope;
                this.h = fnNode;
                this.depth = mustComply;
                this.items = [];
                this.nodes = [];
            }
            var scroll_y1 = flightPhase.maxChildren || 2;
            var scroll_y2 = flightPhase.maxDepth || 4;
            args.prototype = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                depth: 0,
                items: null,
                nodes: null,
                exists: function (datum) {
                    var tagName = 0;
                    for (; tagName < this.items.length; ++tagName) {
                        var matchedNamespace = this.items[tagName];
                        if (matchedNamespace.x >= datum.x && matchedNamespace.y >= datum.y && matchedNamespace.x < datum.x + datum.w && matchedNamespace.y < datum.y + datum.h) {
                            return true;
                        }
                    }
                    if (0 != this.nodes.length) {
                        var indexesByNodeName = this;
                        return this.findOverlappingNodes(datum, function (name) {
                            return indexesByNodeName.nodes[name].exists(datum);
                        });
                    }
                    return false;
                },
                retrieve: function (question_set_id, cb) {
                    var name = 0;
                    for (; name < this.items.length; ++name) {
                        cb(this.items[name]);
                    }
                    if (0 != this.nodes.length) {
                        var indexesByNodeName = this;
                        this.findOverlappingNodes(question_set_id, function (name) {
                            indexesByNodeName.nodes[name].retrieve(question_set_id, cb);
                        });
                    }
                },
                insert: function (datum) {
                    if (0 != this.nodes.length) {
                        this.nodes[this.findInsertNode(datum)].insert(datum);
                    } else {
                        if (this.items.length >= scroll_y1 && this.depth < scroll_y2) {
                            this.devide();
                            this.nodes[this.findInsertNode(datum)].insert(datum);
                        } else {
                            this.items.push(datum);
                        }
                    }
                },
                findInsertNode: function (a) {
                    return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3;
                },
                findOverlappingNodes: function (a, b) {
                    return a.x < this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(0) || a.y >= this.y + this.h / 2 && b(2)) || a.x >= this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(1) || a.y >= this.y + this.h / 2 && b(3)) ? true : false;
                },
                devide: function () {
                    var PL$13 = this.depth + 1;
                    var PL$17 = this.w / 2;
                    var delvon = this.h / 2;
                    this.nodes.push(new args(this.x, this.y, PL$17, delvon, PL$13));
                    this.nodes.push(new args(this.x + PL$17, this.y, PL$17, delvon, PL$13));
                    this.nodes.push(new args(this.x, this.y + delvon, PL$17, delvon, PL$13));
                    this.nodes.push(new args(this.x + PL$17, this.y + delvon, PL$17, delvon, PL$13));
                    PL$13 = this.items;
                    this.items = [];
                    PL$17 = 0;
                    for (; PL$17 < PL$13.length; PL$17++) {
                        this.insert(PL$13[PL$17]);
                    }
                },
                clear: function () {
                    var indexLookupKey = 0;
                    for (; indexLookupKey < this.nodes.length; indexLookupKey++) {
                        this.nodes[indexLookupKey].clear();
                    }
                    this.items.length = 0;
                    this.nodes.length = 0;
                }
            };
            var r = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            return {
                root: new args(flightPhase.minX, flightPhase.minY, flightPhase.maxX - flightPhase.minX, flightPhase.maxY - flightPhase.minY, 0),
                insert: function (datum) {
                    this.root.insert(datum);
                },
                retrieve: function (question_set_id, cb) {
                    this.root.retrieve(question_set_id, cb);
                },
                retrieve2: function (d, b, c, callback, a) {
                    r.x = d;
                    r.y = b;
                    r.w = c;
                    r.h = callback;
                    this.root.retrieve(r, a);
                },
                exists: function (localeName) {
                    return this.root.exists(localeName);
                },
                clear: function () {
                    this.root.clear();
                }
            };
        }
    };
    var logDataRead = function () {
        function $get(dimensions, options, mmCoreSplitViewBlock, $state, $localStorage) {
            var colorFunc = options.getContext("2d");
            var i = options.width;
            options = options.height;
            dimensions.color = $localStorage;
            dimensions.setName(mmCoreSplitViewBlock);
            dimensions.size = $state;
            colorFunc.save();
            colorFunc.translate(i / 2, options / 2);
            dimensions.drawOneCell(colorFunc);
            colorFunc.restore();
        }
        var id = new curves(-1, 0, 0, 32, "#5bc0de", "");
        var options = new curves(-1, 0, 0, 32, "#5bc0de", "");
        var raney = new curves(-1, 0, 0, 32, "#5bc0de", "");
        var PL$13 = "#ebc0de #ebc0de #ebc0de #ebc0de #0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" ");
        var children = [];
        var PL$17 = 0;
        for (; PL$17 < PL$13.length; ++PL$17) {
            var value = PL$17 / PL$13.length * 12;
            var millisPerSecond = 30 * Math.sqrt(PL$17 / PL$13.length);
            children.push(new curves(-1, Math.cos(value) * millisPerSecond, Math.sin(value) * millisPerSecond, 10, PL$13[PL$17], ""));
        }
        codeGenArray(children);
        var n = document.createElement("canvas");
        n.getContext("2d");
        n.width = n.height = 70;
        $get(options, n, "", 26, PL$13[Math.round(Math.random() * PL$13.length)]);
        return function () {
            floor(".cell-spinner").filter(":visible").each(function () {
                var maxHeight = floor(this);
                var pimul4 = Date.now();
                var undefined = this.width;
                var bits = this.height;
                var dv = this.getContext("2d");
                dv.clearRect(0, 0, undefined, bits);
                dv.save();
                dv.translate(undefined / 2, bits / 2);
                var PI = 0;
                for (; 10 > PI; ++PI) {
                    dv.drawImage(n, (.1 * pimul4 + 80 * PI) % (undefined + 140) - undefined / 2 - 70 - 35, bits / 2 * Math.sin((.001 * pimul4 + PI) % Math.PI * 2) - 35, 70, 70);
                }
                dv.restore();
                if (maxHeight = maxHeight.attr("data-itr")) {
                    maxHeight = da(maxHeight);
                }
                $get(id, this, maxHeight || "", +floor(this).attr("data-size"), "#5bc0de");
            });
            floor("#statsPellets").filter(":visible").each(function () {
                floor(this);
                var i = this.width;
                var artistTrack = this.height;
                this.getContext("2d").clearRect(0, 0, i, artistTrack);
                i = 0;
                for (; i < children.length; i++) {
                    $get(children[i], this, "", children[i].size, children[i].color);
                }
            });
        };
    }();
    list.onload = set;
}(window, window.jQuery));
$("#totalplayer").load(__domain_adi + "/totalplayer.php").fadeIn("fast");
var refreshId = setInterval(function () {
    $("#totalplayer").fadeOut("fast").load(__domain_adi + "/totalplayer.php").fadeIn("fast");
}, 3e4);
$(".controls").show();
$(".copy-party-token").click(function () {
    var chrishon = $(".partyToken:visible")[0];
    chrishon.setSelectionRange(0, chrishon.value.length);
    chrishon.select();
    try {
        document.execCommand("copy");
    } catch (e) {}
});
$("input#nick").keypress(function (canCreateDiscussions) {
    if (canCreateDiscussions.which == "13") {
        canCreateDiscussions.preventDefault();
        if (!isSpectating) {
            setNick(document.getElementById("nick").value);
        }
    }
});
var alexaundrea = ["keyCode", "onkeydown", "onkeyup", "keydown", "addEventListener"];
(function () {
    var cell_amount = 10;
    var openDelay = 50;
    var reset = function (noalert) {
        if (noalert[alexaundrea[0]] === 69) {
            var i = 0;
            for (; i < cell_amount; ++i) {
                setTimeout(function () {
                    window[alexaundrea[1]]({
                        keyCode: 87
                    });
                    window[alexaundrea[2]]({
                        keyCode: 87
                    });
                }, i * openDelay);
            }
        }
    };
    window[alexaundrea[4]](alexaundrea[3], reset);
}());
$(".gallery").hide();
$(".face,.twit,.del").hide();

function getScreenshot() {
    var mayko = document.getElementById("canvas");
    var jimella = mayko.getContext("2d");
    var zamora = mayko.toDataURL("image/jpeg", .7);
    $(".gallery").html('<a href="' + zamora + '" target="_blank"><img id="ss" src="' + zamora + '"></a>');
    $("#screenshot").hide();
    $(".face,.twit,.del").show();
    $(".gdtr_screenshot_btn").show();
    $(".gallery").show();
}

function closeAndPlay() {
    window.location = __domain_adi;
}

function clearProcess() {
    $(".gallery").html("");
    $("#screenshot").show();
    $(".gdtr_screenshot_btn").hide();
    $(".face,.twit,.del").hide();
    $(".gallery").hide();
}

function idver(i) {
    var kimella = "";
    var issueKeySplit = "abcdefghijklmnopqrstuvwxyz0123456789";
    var number = issueKeySplit.length;
    var whichFriend = 0;
    for (; whichFriend < i; whichFriend++) {
        kimella = kimella + issueKeySplit.charAt(Math.floor(Math.random() * number));
    }
    return kimella;
}

function shareProcess(canCreateDiscussions) {
    $(".controls").hide();
    var jonael = 520;
    var baba = 350;
    var no = idver(11);
    var jarae = $("#nick").val();
    var renisha = screen.height / 2 - baba / 2;
    var lazhane = screen.width / 2 - jonael / 2;
    var body = encodeURIComponent(__domain_adi + "/score-" + no + ".html");
    if (canCreateDiscussions == "facebook") {
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + body, "sharer", "top=" + renisha + ",left=" + lazhane + ",toolbar=0,status=0,width=" + jonael + ",height=" + baba);
    } else {
        if (canCreateDiscussions == "twitter") {
            window.open("http://twitter.com/share?text=Screenshot from Agario&url=" + body, "sharer", "top=" + renisha + ",left=" + lazhane + ",toolbar=0,status=0,width=" + jonael + ",height=" + baba);
        }
    }
    $.post("bor.do", {
        resim: $("#ss").attr("src"),
        no: no,
        saveplayer: jarae
    }, function (canCreateDiscussions) {
        console.log(body);
    });
};
