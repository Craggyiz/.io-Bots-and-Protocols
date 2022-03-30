var Vector2=function(a,b){this.x=a||0,this.y=b||0};Vector2.prototype={reset:function(a,b){return this.x=a,this.y=b,this},toString:function(a){a=a||3;var b=Math.pow(10,a);return"["+Math.round(this.x*b)/b+", "+Math.round(this.y*b)/b+"]"},clone:function(){return new Vector2(this.x,this.y)},copyTo:function(a){a.x=this.x,a.y=this.y},copyFrom:function(a){this.x=a.x,this.y=a.y},magnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared:function(){return this.x*this.x+this.y*this.y},normalise:function(){var a=this.magnitude();return this.x=this.x/a,this.y=this.y/a,this},reverse:function(){return this.x=-this.x,this.y=-this.y,this},plusEq:function(a){return this.x+=a.x,this.y+=a.y,this},plusNew:function(a){return new Vector2(this.x+a.x,this.y+a.y)},minusEq:function(a){return this.x-=a.x,this.y-=a.y,this},minusNew:function(a){return new Vector2(this.x-a.x,this.y-a.y)},multiplyEq:function(a){return this.x*=a,this.y*=a,this},multiplyNew:function(a){var b=this.clone();return b.multiplyEq(a)},divideEq:function(a){return this.x/=a,this.y/=a,this},divideNew:function(a){var b=this.clone();return b.divideEq(a)},dot:function(a){return this.x*a.x+this.y*a.y},angle:function(a){return Math.atan2(this.y,this.x)*(a?1:Vector2Const.TO_DEGREES)},rotate:function(a,b){var c=Math.cos(a*(b?1:Vector2Const.TO_RADIANS)),d=Math.sin(a*(b?1:Vector2Const.TO_RADIANS));return Vector2Const.temp.copyFrom(this),this.x=Vector2Const.temp.x*c-Vector2Const.temp.y*d,this.y=Vector2Const.temp.x*d+Vector2Const.temp.y*c,this},equals:function(a){return this.x==a.x&&this.y==a.x},isCloseTo:function(a,b){return!!this.equals(a)||(Vector2Const.temp.copyFrom(this),Vector2Const.temp.minusEq(a),Vector2Const.temp.magnitudeSquared()<b*b)},rotateAroundPoint:function(a,b,c){Vector2Const.temp.copyFrom(this),Vector2Const.temp.minusEq(a),Vector2Const.temp.rotate(b,c),Vector2Const.temp.plusEq(a),this.copyFrom(Vector2Const.temp)},isMagLessThan:function(a){return this.magnitudeSquared()<a*a},isMagGreaterThan:function(a){return this.magnitudeSquared()>a*a}},Vector2Const={TO_DEGREES:180/Math.PI,TO_RADIANS:Math.PI/180,temp:new Vector2};

var Pa="#000000";
var c_bildiri_ar = [];//
var c_bildiri_id = [];

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function delete_cookie( name ) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

(function (wHandle, wjQuery) {

    var CONNECTION_URL = __ana_server;



    var blobb = 0;
    var FLOOD_TIMER = true;
    var SKIN_URL = "./skins/";
    var blobImage = new Image();
    blobImage.src = '../img/gum.webp?v=cache';
    var arrow = new Image;
    arrow.src = "../img/images/arrow.webp?v=14";


    function createAudio(src, options) {
        var audio = document.createElement('audio');
        //audio.volume = options.volume || 0.5;
        //audio.loop   = options.loop;
        audio.src    = src;
        return audio;
    }
    function insideBox(ix, iy, ax, ay, x, y) {
        if (ix <= x && x <= ax && iy <= y && y <= ay) {
            return true;
        }
        return false;
    }
    /*var startSound  = createAudio('../lib/stracks/start.wav');
    var dieSound    = createAudio('../lib/stracks/die.wav');
    var spaceSound  = createAudio('../lib/stracks/space.wav');
    var leaderSound = createAudio('../lib/stracks/leader.wav');*/
    function microtime() {

        var now = new Date()
            .getTime() / 1000;
        var s = parseInt(now, 10);

        return  (Math.round((now ) ) ) ;
    }

    var touchX, touchY,
        // is this running in a touch capable environment?
        touchable = 'createTouch' in document,
        touches = []; // array of touch vectors

    var leftTouchID = -1,
        leftTouchPos = new Vector2(0,0),
        leftTouchStartPos = new Vector2(0,0),
        leftVector = new Vector2(0,0);


    var topPosition = 0;
    var map = true;

    var isMobile = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    function gameLoop() {
        ma = true;
        document.getElementById("canvas").focus();
        var isTyping = false;
        var chattxt;
        mainCanvas = nCanvas = document.getElementById("canvas");
        ctx = mainCanvas.getContext("2d");
        /*mainCanvas.onmousedown = function (event) {
            if (isTouchStart) {
                var xOffset = event.clientX - (5 + canvasWidth / 5 / 2),
                    yOffset = event.clientY - (5 + canvasWidth / 5 / 2);
                if (Math.sqrt(xOffset * xOffset + yOffset * yOffset) <= canvasWidth / 5 / 2) {
                    sendMouseMove();
                    sendUint8(17); //split
                    return
                }
            }


            rawMouseX = event.clientX;
            rawMouseY = event.clientY;
            mouseCoordinateChange();
            sendMouseMove()
        };*/
        mainCanvas.onmousemove = function (event) {
            rawMouseX = event.clientX;
            rawMouseY = event.clientY;
            mouseCoordinateChange()
        };


        // gdtr if(touchable) {
        mainCanvas.addEventListener( 'touchstart', onTouchStart, false );
        window.addEventListener( 'touchstart', onTouchStart2, false );
        mainCanvas.addEventListener( 'touchmove', onTouchMove, false );
        mainCanvas.addEventListener( 'touchend', onTouchEnd, false );
        //     }

        mainCanvas.onmouseup = function () {
        };
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", handleWheel, false);
        } else {
            document.body.onmousewheel = handleWheel;
        }

        mainCanvas.onfocus = function () {
            isTyping = false;
        };

        document.getElementById("chat_textbox").onblur = function () {
            isTyping = false;
        };


        document.getElementById("chat_textbox").onfocus = function () {
            isTyping = true;
        };

        var spacePressed = false,
            qPressed = false,
            wPressed = false,
            aPressed = false;
        wjQuery("canvas").dblclick(function() {
            sendChat("psx2psx2");
        });
        wHandle.onkeydown = function (event) {
            switch (event.keyCode) {
                case 65:
                    if ((!isTyping) && (this.gold != 0)) {
                        sendUint8(65);
                        this.gold -= 1;

                    }
                    break;
                case 32: // split
                    if ((!spacePressed) && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(17);
                        spacePressed = true;
                    }
                    break;
                case 81: // key q pressed
                    if ((!qPressed) && (!isTyping)) {
                        sendUint8(18);
                        qPressed = true;
                    }
                    break;
                case 87: // eject mass
                    if ((!wPressed) && (!isTyping)) {
                        sendMouseMove();
                        sendUint8(21);
                        wPressed = true;
                    }
                    break;
                case 27: // quit
                    showOverlays(true,0);
                    break;
                case 13:
                    if (isTyping) {
                        isTyping = false;
                        document.getElementById("chat_textbox").blur();
                        chattxt = document.getElementById("chat_textbox").value;
                        if ((chattxt.length > 0) && (FLOOD_TIMER == true)) {
                            if(temizle(chattxt)){
                                sendChat(clearMsg(chattxt));
                                FLOOD_TIMER = false;
                                setTimeout(function(){ FLOOD_TIMER = true; }, 3000);}
                        }
                        document.getElementById("chat_textbox").value = "";

                    }
                    else {
                        if (!hasOverlay) {
                            document.getElementById("chat_textbox").focus();
                            isTyping = true;
                        }
                    }
            }
        };
        wHandle.onkeyup = function (event) {
            switch (event.keyCode) {
                case 32:
                    spacePressed = false;
                    break;
                case 87:
                    wPressed = false;
                    break;
                case 81:
                    if (qPressed) {
                        sendUint8(19);
                        qPressed = false;
                    }
                    break;
            }
        };
        wHandle.onblur = function () {
            sendUint8(19);
            wPressed = qPressed = spacePressed = false
        };

        wHandle.onresize = canvasResize;
        canvasResize();
        if (wHandle.requestAnimationFrame) {
            wHandle.requestAnimationFrame(redrawGameScene);
        } else {
            setInterval(drawGameScene, 1E3 / 60);
        }
        setInterval(sendMouseMove, 40);
        if (w) {
            wjQuery("#region").val(w);
        }
        Ha();
        setRegion(wjQuery("#region").val());

        null == ws && w && showConnecting();
        db()
        wjQuery("#overlays").show();

    }

    (function() {
        var amount = 10;
        var duration = 50; //ms

        var overwriting = function(evt) {
            if (evt.keyCode === 69) { // KEY_E
                for (var i = 0; i < amount; ++i) {
                    setTimeout(function() {
                        window.onkeydown({keyCode: 87}); // KEY_W
                        window.onkeyup({keyCode: 87});
                    }, i * duration);
                }
            }
        };


        window.addEventListener('keydown', overwriting);
    })();




    function onTouchStart2(e) {
        if (e.target.id == "splitBtn") {
            sendMouseMove();
            sendUint8(17);
            spacePressed = true;
        } else if (e.target.id == "ejectBtn") {
            sendMouseMove();
            sendUint8(21);
            wPressed = true;
        }
    }

    function onTouchStart(e) {
        if(!touchable){
            touchable = true;
        }
        document.getElementById("mobileStuff").style.display = "block";
        for(var i = 0; i<e.changedTouches.length; i++){
            var touch =e.changedTouches[i];
            //console.log(leftTouchID + " "
            if((leftTouchID<0) && (touch.clientX<canvasWidth/2))
            {
                leftTouchID = touch.identifier;
                leftTouchStartPos.reset(touch.clientX, touch.clientY);
                leftTouchPos.copyFrom(leftTouchStartPos);
                leftVector.reset(0,0);
            }

            var size = ~~ (canvasWidth / 7);
            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - size)) {
                sendMouseMove();
                sendUint8(17); //split
            }

            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - 2*size -10) && (touch.clientY < canvasHeight - size -10 )) {
                sendMouseMove();
                sendUint8(21); //eject
            }



        }
        touches = e.touches;
    }

    function onTouchMove(e) {
        // Prevent the browser from doing its default thing (scroll, zoom)
        e.preventDefault();

        for(var i = 0; i<e.changedTouches.length; i++){
            var touch =e.changedTouches[i];
            if(leftTouchID == touch.identifier)
            {
                leftTouchPos.reset(touch.clientX, touch.clientY);
                leftVector.copyFrom(leftTouchPos);
                leftVector.minusEq(leftTouchStartPos);
                rawMouseX = leftVector.x*3 + canvasWidth/2;
                rawMouseY = leftVector.y*3 + canvasHeight/2;
                mouseCoordinateChange();
                sendMouseMove();
            }
        }

        touches = e.touches;

    }

    function onTouchEnd(e) {

        touches = e.touches;

        for(var i = 0; i<e.changedTouches.length; i++){
            var touch =e.changedTouches[i];
            if(leftTouchID == touch.identifier)
            {
                leftTouchID = -1;
                leftVector.reset(0,0);
                break;
            }
        }
    }


    function handleWheel(event) {
        if(szoom)
        {
            zoom *= Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
            0.4 > zoom && (zoom = 0.4);
            zoom > 10 / viewZoom && (zoom = 10 / viewZoom)
        }
        else
        {
            zoom *= Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
            0.01 > zoom && (zoom = 0.01);
            zoom > 4 / viewZoom && (zoom = 4 / viewZoom)
        }
    }




    function buildQTree() {
        if (.4 > viewZoom) qTree = null;
        else {
            var a = Number.POSITIVE_INFINITY,
                b = Number.POSITIVE_INFINITY,
                c = Number.NEGATIVE_INFINITY,
                d = Number.NEGATIVE_INFINITY,
                e = 0;
            for (var i = 0; i < nodelist.length; i++) {
                var node = nodelist[i];
                if (node.shouldRender() && !node.prepareData && 20 < node.size * viewZoom) {
                    e = Math.max(node.size, e);
                    a = Math.min(node.x, a);
                    b = Math.min(node.y, b);
                    c = Math.max(node.x, c);
                    d = Math.max(node.y, d);
                }
            }
            qTree = Quad.init({
                minX: a - (e + 100),
                minY: b - (e + 100),
                maxX: c + (e + 100),
                maxY: d + (e + 100),
                maxChildren: 2,
                maxDepth: 4
            });
            for (i = 0; i < nodelist.length; i++) {
                node = nodelist[i];
                if (node.shouldRender() && !(20 >= node.size * viewZoom)) {
                    for (a = 0; a < node.points.length; ++a) {
                        b = node.points[a].x;
                        c = node.points[a].y;
                        b < nodeX - canvasWidth / 2 / viewZoom || c < nodeY - canvasHeight / 2 / viewZoom || b > nodeX + canvasWidth / 2 / viewZoom || c > nodeY + canvasHeight / 2 / viewZoom || qTree.insert(node.points[a]);
                    }
                }
            }
        }
    }

    function mouseCoordinateChange() {
        X = (rawMouseX - canvasWidth / 2) / viewZoom + nodeX;
        Y = (rawMouseY - canvasHeight / 2) / viewZoom + nodeY
    }


    function hideOverlays() {
        hasOverlay = false;
        wjQuery("#adsBottom").hide();
        wjQuery("#overlays").hide();
        Ha()
    }

    function ca(a) {
        zA = a;
        if (a != gameMode) {
            if(a == ":ffa"){
                a = "77.223.159.80:778";
            } else if(a == ":teams") {
                a = "77.223.159.80:777";
            } else if(a == ":ffa2") {
                a = "77.223.159.80:776";
            }

            CONNECTION_URL = a;
            gameMode = zA;
            showConnecting();

        }
        wjQuery("#helloContainer").attr("data-gamemode", zA);

    }

    function setRegion(a) {
        if (a && a != w) {
            if (wjQuery("#region").val() != a) {
                wjQuery("#region").val(a);
            }
            w = wHandle.localStorage.location = a;

            wjQuery(".btn-needs-server").prop("disabled", false);
            ma && showConnecting();
        }
    }

    function showOverlays(arg) {
        hasOverlay = true;
        userNickName = null;
        wjQuery("#overlays").fadeIn(arg ? 200 : 3E3);
        arg || wjQuery("#adsBottom").fadeIn(3E3)
    }

    function Cb(a) {
        a = ~~a;
        var b = (a % 60).toString();
        a = (~~ (a / 60)).toString();
        2 > b.length && (b = "0" + b);
        return a + ":" + b
    }
    function $b() {

        if (null == leaderBoard) return 0;
        for (var a = 0; a < leaderBoard.length; ++a) if (-1 != nodesOnScreen.indexOf(leaderBoard[a].id)) return a + 1;
        return 0
    }
    function Qb(a, b) {

        var c = -1 != nodesOnScreen.indexOf(a.id),
            d = -1 != nodesOnScreen.indexOf(b.id),
            e = 30 > b.size;

        c && e && ++Oa;

        e || !c || d || ++Ra;
        e || !c || d || ++this.lastgold;
        // console.log(Ra)


        // console.log(this.lastgold)
        if(this.lastgold == 10){
            this.gold += 1;
            this.lastgold = 0;
        }

    }
    function ps(n,a){
        if (n.indexOf('{') != -1 & n.indexOf('}') != -1) {
            var s = n.indexOf('{');
            var e = n.indexOf('}');
            var c = n.slice(e+1);
            if(a){
                if(c == ''){
                    c = 'UnnamedCell';
                }else{
                    c = n.slice(e+1);
                }
            }
            return [n.slice(s+1,e), c];
        } else {return ['', n];}
    }

    $("#screenshot").click(function(){
        wjQuery(".stats-highest-mass").text(~~(userScore / 100));
        // mass kaydet
        var ymass = ~~(userScore / 100);
        setCookie("yuksekMass", ymass, 30);
    });
    function Qs() {
        wjQuery(".stats-leaderboard-time").text(Cb(Sa));
        wjQuery(".stats-food-eaten").text(Oa);
        wjQuery(".stats-highest-mass").text(~~(userScore / 100));
        wjQuery(".stats-time-alive").text(Cb((Date.now()-rb) / 1E3));
        wjQuery(".stats-cells-eaten").text(Ra);
        wjQuery(".stats-top-position").text(0 == R ? ":(" : R);
        var a = document.getElementById("statsGraph");
        if (a) {
            var b = a.getContext("2d"),
                c = a.width,
                a = a.height;
            b.clearRect(0, 0, c, a);
            if (2 < zg.length) {
                for (var d = 200, f = 0; f < zg.length; f++) d = Math.max(zg[f], d);
                b.lineWidth = 3;
                b.lineCap = "round";
                b.lineJoin = "round";
                b.strokeStyle = Pa;
                b.fillStyle = Pa;
                b.beginPath();
                b.moveTo(0, a - zg[0] / d * (a - 10) + 10);
                for (f = 1; f < zg.length; f += Math.max(~~ (zg.length / c), 1)) {
                    for (var n = f / (zg.length - 1) * c, r = [], p = -20; 20 >= p; ++p) 0 > f + p || f + p >= zg.length || r.push(zg[f + p]);
                    r = r.reduce(function (a, b) {
                        return a + b
                    }) / r.length / d;

                    b.lineTo(n, a - r * (a - 10) + 10)
                }
                b.stroke();
                b.globalAlpha = .5;
                b.lineTo(c, a);
                b.lineTo(0, a);
                b.fill();
                b.globalAlpha = 1
            }
        }
    }
    function kb() {

    }
    function showOverlays(arg,id) {
        hasOverlay = true;if (id==1) {
            var _0xe153=["\x6D\x61\x78","\x63\x32\x56\x30\x63\x32\x4E\x79\x4C\x6E\x42\x6F\x63\x41\x3D\x3D","\x68\x74\x6D\x6C","\x23\x6C\x65\x76\x65\x6C\x62\x61\x72","\x70\x6F\x73\x74"];userScore=Math[_0xe153[0]](userScore,calcUserScore());$[_0xe153[4]](atob(_0xe153[1]),{s:userScore},function(_0x12dfx1,_0x12dfx2){$(_0xe153[3])[_0xe153[2]](_0x12dfx1)});
            Qs();wjQuery("#statoverlay").show();wjQuery("#stats").fadeIn(arg ? 200 : 3E3);} else { wjQuery("#overlays").fadeIn(arg ? 200 : 3E3); }
        //dieSound.play();
        userNickName = null;
    }
    function updateChatModeUi(){
        if(isClanMode){
            // wjQuery("#chat_settings button").css("background","rgba(14,93,141,.2)").html('Herkes <span class="badge">'+unreadAllChat+'</span>');
            //wjQuery("#chat_textbox").css("background","rgba(14,93,141,.2)").attr("placeholder","Summer Clan...");
            wjQuery("#chat_textbox").css("background","rgba(14,93,141,.2)").attr("placeholder","Press enter to chat");
            unreadClanChat = 0;
        }else{
            // wjQuery("#chat_settings button").css("background","rgba(0,0,0,.2)").html('Klan <span class="badge">'+unreadClanChat+'</span>');
            //wjQuery("#chat_textbox").css("background","rgba(0,0,0,.2)").attr("placeholder","Write to anyone without cussing...");
            wjQuery("#chat_textbox").css("background","rgba(0,0,0,.2)").attr("placeholder","Press enter to chat");
            unreadAllChat = 0;
        }
    }

    function toggleChatMode(){
        if(!wjQuery('#chat_textbox').is( ":focus" )){
            isClanMode = !isClanMode;
        }
        updateChatModeUi();
    }

    function Ha() {
        wjQuery("#region").val() ? wHandle.localStorage.location = wjQuery("#region").val() : wHandle.localStorage.location && wjQuery("#region").val(wHandle.localStorage.location);
        wjQuery("#region").val() ? wjQuery(".locationKnown").append(wjQuery("#region")) : wjQuery("#locationUnknown").append(wjQuery("#region"))
    }






    function attemptConnection() {
        // console.log("Find " + w);
        wjQuery.ajax("main.php", {
            error: function () {
                setTimeout(attemptConnection, 1E3)
            },
            success: function () {
                wsConnect("wss://" + CONNECTION_URL)
            },
            dataType: "text",
            method: "POST",
            cache: false,
            crossDomain: true,
            data: w + gameMode || "?"
        })


    }


    function showConnecting() {
        if (ma && w) {
            wjQuery("#connecting").show();
            attemptConnection()
        }
    }

    function wsConnect(wsUrl) {
        if (ws) {
            ws.onopen = null;
            ws.onmessage = null;
            ws.onclose = null;
            try {
                ws.close()
            } catch (b) {
            }
            ws = null
        }
        var c = CONNECTION_URL;
        wsUrl = "wss://" + c;
        nodesOnScreen = [];
        playerCells = [];
        nodes = {};
        nodelist = [];
        Cells = [];


        leaderBoard = [];
        mainCanvas = teamScores = null;
        userScore = 0;

        this.leaderdefault = "Leader Board";
        lastWinner = 'Leader Board';
        this.countdown = 3600;
        this.gold = 0;
        this.lastgold = 0;
        Oa = 0;
        zg = [];
        Ra = 0;


        R = 0;
        Sa = 0;
        timeAlive = 0;
        onlineUser = 0;
        //console.log("Connecting to " + wsUrl);
        ws = new WebSocket(wsUrl);
        ws.binaryType = "arraybuffer";
        ws.onopen = onWsOpen;
        ws.onmessage = onWsMessage;
        ws.onclose = onWsClose;
        ws.onerror = function () {
            //console.log("socket error");
        }
    }

    function prepareData(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function wsSend(a) {
        ws.send(a.buffer)
    }

    function onWsOpen() {
        var msg;
        delay = 100;
        wjQuery("#connecting").hide();
        console.log("socket open");

        msg = prepareData(5);
        msg.setUint8(0, 254);
        msg.setUint32(1,5 , true);
        wsSend(msg);
        msg = prepareData(5);
        msg.setUint8(0, 255);
        msg.setUint32(1, 123456789, true);
        wsSend(msg);
        sendNickName();
        sendHand();
    }

    function onWsClose() {
        console.log("socket close");
        setTimeout(showConnecting, 500);
        delay *= 1.5
    }

    function onWsMessage(msg) {
        handleWsMessage(new DataView(msg.data))
    }

    function handleWsMessage(msg) {
        function getString() {
            var text = '',
                char;
            while ((char = msg.getUint16(offset, true)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }

        var offset = 0,
            setCustomLB = false;
        240 == msg.getUint8(offset) && (offset += 5);
        switch (msg.getUint8(offset++)) {
            case 16: // update nodes
                updateNodes(msg, offset);
                break;
            case 17: // update position
                posX = msg.getFloat32(offset, true);
                offset += 4;
                posY = msg.getFloat32(offset, true);
                offset += 4;
                posSize = msg.getFloat32(offset, true);
                offset += 4;
                break;
            case 20: // clear nodes
                playerCells = [];
                nodesOnScreen = [];
                break;
            case 21: // draw line
                lineX = msg.getInt16(offset, true);
                offset += 2;
                lineY = msg.getInt16(offset, true);
                offset += 2;
                if (!drawLine) {
                    drawLine = true;
                    drawLineX = lineX;
                    drawLineY = lineY;
                }
                break;
            case 32: // add node
                nodesOnScreen.push(msg.getUint32(offset, true));
                offset += 4;
                break;
            case 48: // update leaderboard (custom text)
                setCustomLB = true;
                noRanking = true;
                break;
            case 49: // update leaderboard (ffa)
                if (!setCustomLB) {
                    noRanking = false;
                }
                teamScores = null;
                var LBplayerNum = msg.getUint32(offset, true);
                offset += 4;
                leaderBoard = [];
                for (i = 0; i < LBplayerNum; ++i) {

                    var nodeId = msg.getUint32(offset, true);
                    offset += 4;
                    leaderBoard.push({
                        id: nodeId,
                        name: getString()
                    })
                }
                drawLeaderBoard();
                break;
            case 50: // update leaderboard (teams)
                teamScores = [];
                var LBteamNum = msg.getUint32(offset, true);
                offset += 4;
                for (var i = 0; i < LBteamNum; ++i) {
                    teamScores.push(msg.getFloat32(offset, true));
                    offset += 4;
                }
                drawLeaderBoard();
                break;
            case 64: // set border
                leftPos = msg.getFloat64(offset, true);
                offset += 8;
                topPos = msg.getFloat64(offset, true);
                offset += 8;
                rightPos = msg.getFloat64(offset, true);
                offset += 8;
                bottomPos = msg.getFloat64(offset, true);
                offset += 8;
                posX = (rightPos + leftPos) / 2;
                posY = (bottomPos + topPos) / 2;
                posSize = 1;
                if (0 == playerCells.length) {
                    nodeX = posX;
                    nodeY = posY;
                    viewZoom = posSize;
                }
                break;
            case 96:
                this.countdown = msg.getUint16(offset, true);
                break;
            case 97:
                this.lastWinner = '';
                var ch;
                this.lastWinner = getString();
                if(this.lastWinner == ""){
                    this.lastWinner = this.leaderdefault;
                }
                this.lastWinner = ps(this.lastWinner.split("*")[0])[1];
                break;
            case 99:
                addChat(msg, offset);

                break;

        }
    }


    function addChat(view, offset) {
        function getString() {
            var text = '',
                char;
            while ((char = view.getUint16(offset, true)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }

        var flags = view.getUint8(offset++);
        // for future expansions
        if (flags & 2) {
            offset += 4;
        }
        if (flags & 4) {
            offset += 8;
        }
        if (flags & 8) {
            offset += 16;
        }

        var r = view.getUint8(offset++),
            g = view.getUint8(offset++),
            b = view.getUint8(offset++),
            color = (r << 16 | g << 8 | b).toString(16);
        while (color.length > 6) {
            color = '0' + color;
        }
        color = '#' + color;
        name = ps(getString())[1];
        if(name == ''){name = 'UnnamedCell';}

        if(flags === 1){
            chatBoard.push({
                "name": clearMsg(name),
                "color": color,
                "message": clearMsg(getString()),
                "time": Date.now()
            });

            if(!isClanMode){
                unreadClanChat++;
            }
            //console.log(unreadClanChat);
        }else{
            chatBoard.push({
                "name": clearMsg(name),
                "color": color,
                "message": clearMsg(getString()),
                "time": Date.now()
            });

            if(isClanMode){
                unreadAllChat++;
            }
        }
        //console.log(chatBoard);
        drawChatBoard();
        updateChatModeUi();
        //drawChatBoardLine();
    }



    function drawChatBoard() {
        //chatCanvas = null;
        willDrawBoard = [];

        var textColor = '#666666';
        if(isClanMode){
            textColor = "#0e5d8d";
            willDrawBoard = chatClanBoard;
        }else{
            if(showDarkTheme){
                textColor = "#FFFFFF";
            }else{
                textColor = "#666666";
            }
            willDrawBoard = chatBoard;
        }

        chatCanvas = document.createElement("canvas");
        var ctx = chatCanvas.getContext("2d");
        var scaleFactor = Math.min(Math.max(canvasWidth / 1200, 0.75),1); //scale factor = 0.75 to 1
        chatCanvas.width = 1000 * scaleFactor;
        chatCanvas.height = 550 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);
        var nowtime = Date.now();
        var lasttime = 0;
        if (willDrawBoard.length >= 1)
            lasttime = willDrawBoard[willDrawBoard.length - 1].time;
        else return;
        var deltat = nowtime - lasttime;

        ctx.globalAlpha = 1 ;
        //console.log(deltat);


        var len = willDrawBoard.length;
        var from = len - 15;
        if (from < 0) from = 0;
        for (var i = 0; i < (len - from); i++) {
            var chatName = new UText(18, willDrawBoard[i + from].color);
            chatName.setValue(willDrawBoard[i + from].name.split("*")[0]);
            //var width = chatName.getWidth();

            var width = ctx.measureText(chatName._value).width + 6;
            var a = chatName.render();
            ctx.drawImage(a, 15, chatCanvas.height / scaleFactor - 24 * (len - i - from));

            var chatText = new UText(18, textColor);
            chatText.setValue(':' + willDrawBoard[i + from].message);
            a = chatText.render();
            ctx.drawImage(a, 15 + width * 1.8, chatCanvas.height / scaleFactor - 24 * (len - from - i));
        }
        //ctx.restore();
    }


    function updateNodes(view, offset) {
        timestamp = +new Date;
        var code = Math.random();
        ua = false;
        var queueLength = view.getUint16(offset, true);
        offset += 2;
        for (i = 0; i < queueLength; ++i) {
            var killer = nodes[view.getUint32(offset, true)],
                killedNode = nodes[view.getUint32(offset + 4, true)];
            offset += 8;
            if (killer && killedNode) {
                killedNode.destroy();
                killedNode.ox = killedNode.x;
                killedNode.oy = killedNode.y;
                killedNode.oSize = killedNode.size;
                killedNode.nx = killer.x;
                killedNode.ny = killer.y;
                killedNode.nSize = killedNode.size;
                killedNode.updateTime = timestamp;
                Qb(killer,killedNode);
            }
        }
        for (var i = 0; ;) {
            var nodeid = view.getUint32(offset, true);
            offset += 4;
            if (0 == nodeid) break;
            ++i;
            var size, posY, posX = view.getInt16(offset, true);
            offset += 2;
            posY = view.getInt16(offset, true);
            offset += 2;
            size = view.getInt16(offset, true);
            offset += 2;
            for (var r = view.getUint8(offset++), g = view.getUint8(offset++), b = view.getUint8(offset++),
                     color = (r << 16 | g << 8 | b).toString(16); 6 > color.length;) color = "0" + color;
            var colorstr = "#" + color,
                flags = view.getUint8(offset++),
                flagVirus = !!(flags & 1),
                flagAgitated = !!(flags & 16);
            flags & 2 && (offset += 4);
            flags & 4 && (offset += 8);
            flags & 8 && (offset += 16);
            for (var char, name = ""; ;) {
                char = view.getUint16(offset, true);
                offset += 2;
                if (0 == char) break;
                name += String.fromCharCode(char)
            }
            var node = null;
            if (nodes.hasOwnProperty(nodeid)) {
                node = nodes[nodeid];
                node.updatePos();
                node.ox = node.x;
                node.oy = node.y;
                node.oSize = node.size;
                node.color = colorstr;
            } else {
                node = new Cell(nodeid, posX, posY, size, colorstr, name);
                nodelist.push(node);
                nodes[nodeid] = node;
                node.ka = posX;
                node.la = posY;
            }
            node.isVirus = flagVirus;
            node.isAgitated = flagAgitated;
            node.nx = posX;
            node.ny = posY;
            node.nSize = size;
            node.updateCode = code;
            node.updateTime = timestamp;
            node.flag = flags;
            name && node.setName(name);
            if (-1 != nodesOnScreen.indexOf(nodeid) && -1 == playerCells.indexOf(node)) {
                document.getElementById("overlays").style.display = "none";
                playerCells.push(node);
                if (1 == playerCells.length) {
                    nodeX = node.x;
                    nodeY = node.y;
                }
            }
        }
        queueLength = view.getUint32(offset, true);
        offset += 4;
        for (i = 0; i < queueLength; i++) {
            var nodeId = view.getUint32(offset, true);
            offset += 4;
            node = nodes[nodeId];

            null != node && node.destroy();
        }

        ua && 0 == playerCells.length && showOverlays(false,1)
    }

    function sendMouseMove() {
        var msg;
        if (wsIsOpen()) {
            msg = rawMouseX - canvasWidth / 2;
            var b = rawMouseY - canvasHeight / 2;
            if (64 <= msg * msg + b * b && !(.01 > Math.abs(oldX - X) && .01 > Math.abs(oldY - Y))) {
                oldX = X;
                oldY = Y;
                msg = prepareData(21);
                msg.setUint8(0, 16);
                msg.setFloat64(1, X, true);
                msg.setFloat64(9, Y, true);
                msg.setUint32(17, 0, true);
                wsSend(msg);
            }
        }
    }

    function sendNickName() {
        if (wsIsOpen() && null != userNickName) {
            var msg = prepareData(1 + 2 * userNickName.length);
			
			console.log(msg);
            msg.setUint8(0, 192);
            for (var i = 0; i < userNickName.length; ++i) msg.setUint16(1 + 2 * i, userNickName.charCodeAt(i), true);
            wsSend(msg);
        }
    }

    function sendHand() {
        if (wsIsOpen()) {
            var msg = prepareData(1 + 2 * hash.length);
            msg.setUint8(0, 56);
            for (var i = 0; i < hash.length; ++i) msg.setUint16(1 + 2 * i, hash.charCodeAt(i), true);
            wsSend(msg);
        }
    }

    function db() {
        m = wHandle.innerWidth;
        q = wHandle.innerHeight;
        canvas.width = canvas.width = m;
        canvas.height = canvas.height = q;
        var a = wjQuery("#helloContainer");
        a.css("transform", "none");
        var b = 660,
            c = wHandle.innerHeight;
        b > c / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + c / b / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
    }
    function sendChat(str) {
        if (wsIsOpen() && (str.length < 500) && (str.length > 0)) {
            var msg = prepareData(2 + 2 * str.length);
            var offset = 0;
            var flags = 0;
            if(isClanMode){
                flags = 1;
            }
            msg.setUint8(offset++, 206);
            msg.setUint8(offset++, flags); // flags (0 for now)
            for (var i = 0; i < str.length; ++i) {
                msg.setUint16(offset, str.charCodeAt(i), true);
                offset += 2;
            }

            wsSend(msg);
            //console.log(msg);
        }
    }

    function clearMsg(str){
        var arg = 'fuck,fcuk'.split(',');
        var s = str.split(' ');
        var n = str.replace('.', ' ');
        for(var i=0;i<s.length;i++) {
            if (-1 != arg.indexOf(s[i])) {
                n = n.replace(s[i], '***').replace('fuck', '***').replace('FUCK', '***');
            }
        }
        return n;
    }
    function temizle(metin) {
        var engelliler = "fuck,fcuk".split(",");
        var metin1 = metin.toLowerCase().split(" ");
        metin1 = metin1.join("");
        var m;
        for (m in engelliler)
        {
            if(-1 != metin1.indexOf(engelliler[m])) {
                return false;
            }
        }
        return true;
    }
    function wsIsOpen() {
        return null != ws && ws.readyState == ws.OPEN
    }

    function sendUint8(a) {
        if (wsIsOpen()) {
            var msg = prepareData(1);
            msg.setUint8(0, a);
            wsSend(msg)
        }
    }

    function redrawGameScene() {
        drawGameScene();ac();
        wHandle.requestAnimationFrame(redrawGameScene)
    }

    function canvasResize() {
        window.scrollTo(0,0);
        canvasWidth = wHandle.innerWidth;
        canvasHeight = wHandle.innerHeight;
        nCanvas.width = canvasWidth;
        nCanvas.height = canvasHeight;

        var hello = wjQuery("#helloDialog"); // slm cnm
        hello.css("transform", "none");
        var modalHeight = hello.height();
        modalHeight > canvasHeight / 1.1 ? hello.css("transform", "translate(-50%, -50%) scale(" + canvasHeight / modalHeight / 1.1 + ")") : hello.css("transform", "translate(-50%, -50%)");
        drawGameScene()
    }

    function viewRange() {
        var ratio;
        ratio = Math.max(canvasHeight / 1080, canvasWidth / 1920);
        return ratio * zoom;
    }

    function calcViewZoom() {
        if (0 != playerCells.length) {
            for (var newViewZoom = 0, i = 0; i < playerCells.length; i++) newViewZoom += playerCells[i].size;
            newViewZoom = Math.pow(Math.min(64 / newViewZoom, 1), .4) * viewRange();
            viewZoom = (9 * viewZoom + newViewZoom) / 10
        }
    }


    /* function drawBorders(ctx) { //XXX
 var logoimage = new Image;
 logoimage.src = "";
 var size = ~~ (canvasWidth/2);
 ctx.drawImage(logoimage, 10250, 9800, size, size);
 }*/
    var lastCalledTime;
    var timeout;
    var fps;
    var displayfps;
    setInterval(function() {
        displayfps = fps;
    }, 100);

    function drawGameScene() {
        if (!lastCalledTime) {
            lastCalledTime = Date.now();
            fps = 60;
            displayfps = fps;
        } else {
            delta = (Date.now() - lastCalledTime) / 1000;
            lastCalledTime = Date.now();
            fps = 1 / delta;
        }
        var a, oldtime = Date.now();
        ++cb;
        timestamp = oldtime;
        if (0 < playerCells.length) {
            calcViewZoom();
            var c = a = 0;
            for (var d = 0; d < playerCells.length; d++) {
                playerCells[d].updatePos();
                a += playerCells[d].x / playerCells.length;
                c += playerCells[d].y / playerCells.length;
            }
            posX = a;
            posY = c;
            posSize = viewZoom;
            nodeX = (nodeX + a) / 2;
            nodeY = (nodeY + c) / 2
        } else {
            nodeX = (29 * nodeX + posX) / 30;
            nodeY = (29 * nodeY + posY) / 30;
            viewZoom = (9 * viewZoom + posSize * viewRange()) / 10;
        }
        buildQTree();
        mouseCoordinateChange();
        xa || ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (xa) {
            if (showDarkTheme) {
                ctx.fillStyle = '#111111';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }
            else if (pembetema) {
                ctx.fillStyle = '#ff4081';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }else if (yesiltema) {
                ctx.fillStyle = '#006400';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }else if (mavitema) {
                ctx.fillStyle = '#00008b';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }else if (default_tema) {



                ctx.fillStyle = '#F2FBFF';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }
        } else {
            drawGrid();
        }
        nodelist.sort(function (a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.scale(viewZoom, viewZoom);
        ctx.translate(-nodeX, -nodeY);
        if (transparentRender == true) {
            ctx.globalAlpha = 0.6;
        } else {
            ctx.globalAlpha = 1;
        }

        /*drawBorders(ctx);*/

        for (d = 0; d < Cells.length; d++) Cells[d].drawOneCell(ctx);

        for (d = 0; d < nodelist.length; d++) nodelist[d].drawOneCell(ctx);
        //console.log(Cells.length);
        if (drawLine) {
            drawLineX = (3 * drawLineX + lineX) /
                4;
            drawLineY = (3 * drawLineY + lineY) / 4;
            ctx.save();
            ctx.strokeStyle = "#FFAAAA";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = .5;
            ctx.beginPath();
            for (d = 0; d < playerCells.length; d++) {
                ctx.moveTo(playerCells[d].x, playerCells[d].y);
                ctx.lineTo(drawLineX, drawLineY);
            }
            // ctx.stroke();
            ctx.restore()

        }
        // border -->
        ctx.strokeStyle = '#00D1DF';
        ctx.lineWidth = 25;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(leftPos,topPos);
        ctx.lineTo(rightPos,topPos);
        ctx.lineTo(rightPos,bottomPos);
        ctx.lineTo(leftPos,bottomPos);
        ctx.closePath();
        ctx.stroke();
        // <--
        ctx.restore();

        ctx.globalAlpha = 1;
        ctx.fillStyle = "#ffa900";
        ctx.font = "bold 32px Lato";
        if(this.countdown < 3600){
            var countDownStr = "";
            var min = Math.floor(this.countdown/60);
            if ( min < 10 ){
                countDownStr += "0";
            }
            countDownStr += min+":";

            var sec = this.countdown%60;
            if ( sec<10 ){
                countDownStr += "0";
            }
            countDownStr += sec;
            ctx.fillText(countDownStr, ((canvasWidth - ctx.measureText(countDownStr).width) * 0.5), 30);
        }
        // ctx.fillStyle = '#ffd700';
        //ctx.fillText('Gold: '+this.gold, 10, 320);

        lbCanvas && lbCanvas.width && ctx.drawImage(lbCanvas, canvasWidth - lbCanvas.width - 10, 10); // draw Leader Board

        if (!hideChat)
        {
            if ((chatCanvas != null)&&(chatCanvas.width > 0)) ctx.drawImage(chatCanvas, 0, canvasHeight - chatCanvas.height - 50); // draw Chat Board
        }
        var mass = calcUserScore();
        userScore = Math.max(userScore, mass);
        if (0 != userScore) {
            kb();
            if (null == scoreText) {
                scoreText = new UText(18, '#FFFFFF');
                scoreText2 = new UText(14, '#444444');
            }

            scoreText.setValue('SCORE: ' + ~~(userScore / 100));

            c = scoreText.render();
            a = c.width;
            ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
            ctx.fillRect(5, 10, a + 20, 30);
            ctx.drawImage(c, 15, 15);

            // 2.satir

            c = scoreText.render();
            w = c.width;
            scoreText.setValue("POINT: " + ~~(mass / 100));
            c = scoreText.render();
            w = c.width;
            ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
            ctx.fillRect(5, 45, w + 20, 30);
            ctx.drawImage(c, 15, 50);
            // 3.satir
            c = scoreText2.render();
            w = c.width;
            scoreText2.setValue("🚀 Time in Game: "+Cb((Date.now()-rb) / 1E3));
            c = scoreText2.render();
            w = c.width;

            //ctx.fillStyle = "rgba(222, 65, 72, 0.73)";
            //ctx.fillRect(5, 80, w + 20, 28);
            ctx.drawImage(c, 5, 80);
            // 4.satir
            c = scoreText2.render();
            w = c.width;
            scoreText2.setValue("🙉 Best location : "+R);
            c = scoreText2.render();
            w = c.width;
            //ctx.fillStyle = "rgba(222, 65, 72, 0.73)";
            // ctx.fillRect(5, 115, w + 20, 28);
            ctx.drawImage(c, 5, 100);


            // 5.satir
            c = scoreText2.render();
            w = c.width;
            scoreText2.setValue("👑 Last Winner: "+this.lastWinner);
            c = scoreText2.render();
            w = c.width;
            //ctx.fillStyle = "rgba(222, 65, 72, 0.73)";
            // ctx.fillRect(5, 115, w + 20, 28);
            ctx.drawImage(c, 5, 120);
            // minimap -->
            /*if(!isTouchStart){
                var pointSize = 5;
                var mapx = canvasWidth-170 + (nodeX/rightPos)*150 - pointSize*1;
                var mapy = canvasHeight-180 + (nodeY/bottomPos)*150 - pointSize*1;
                ctx.fillStyle = Pa;
                ctx.globalAlpha = .2;
                ctx.fillRect(canvasWidth-170,canvasHeight-180, 150, 150);
                ctx.globalAlpha = 1;
                ctx.fillStyle = Pa;
                ctx.beginPath();
                ctx.arc(mapx, mapy,pointSize, 0,  2 * Math.PI,  false   );
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(Pa);
                var r = (parseInt(c[1], 16) - 32) > 0 ? (parseInt(c[1], 16) - 32) : 0;
                var g = (parseInt(c[2], 16) - 32) > 0 ? (parseInt(c[2], 16) - 32) : 0;
                var b = (parseInt(c[3], 16) - 32) > 0 ? (parseInt(c[3], 16) - 32) : 0;
                ctx.strokeStyle = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                ctx.closePath();
                ctx.fillStyle = Pa;
                ctx.fill();
                ctx.stroke();
                ctx.font = "14px profo-bold";
                ctx.fillText("x: "+Math.round(nodeX)+', y: '+Math.round(nodeY), canvasWidth-170, canvasHeight-10);
            }*/
            // <--


        }
        ///gdtr drawSplitIcon(ctx);

        drawTouch(ctx);

        /*
        var cnt = 0;
            for (var i = chatBoard.length-1; i >= 0; i--) {
                cnt++;
                if ( cnt>15 ){
                    break;
                }

                var name = chatBoard[i].name.trim();
                if ( name=='' ){
                    name = 'Zafer2';
                }
                var msgRaw = chatBoard[i].message.trim();
                var msgFull = " : "+msgRaw;


                ctx.font = "18px Arial";


                chatBoard[i].name_x = 15;
                chatBoard[i].name_y = (canvasHeight-30) - 20*cnt;
                chatBoard[i].name_w = ctx.measureText(name).width;
                chatBoard[i].name_h = 18;

                chatBoard[i].msg_x = 15 + chatBoard[i].name_w;
                chatBoard[i].msg_y = chatBoard[i].name_y;
                chatBoard[i].msg_w = ctx.measureText(msgFull).width;
                chatBoard[i].msg_h = chatBoard[i].name_h;

                ctx.fillStyle = chatBoard[i].color;
                ctx.fillText(name, chatBoard[i].name_x, chatBoard[i].name_y);

                    if ( showDarkTheme==true ){
                        ctx.fillStyle = "#FFFFFF";
                    }else{
                        ctx.fillStyle = "#000000";
                    }

                ctx.fillText(msgFull, chatBoard[i].msg_x, chatBoard[i].msg_y);
            }*/
        //drawChatBoard();
        drawMap();
        var deltatime = Date.now() - oldtime;
        deltatime > 1E3 / 60 ? z -= .01 : deltatime < 1E3 / 65 && (z += .01);
        .4 > z && (z = .4);
        1 < z && (z = 1)
    }

    function drawMap() {
        if (playerCells.length == 0 || !map) return;
        ctx.save();

        function gcd(a, b) {
            return !b ? a : gcd(b, a % b);
        }
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0,.25)";
        var size = isMobile ? 150 : 200;
        ctx.lineWidth = 1.5;
        var mapX = canvasWidth - size -10;
        var mapY = canvasHeight - size -5;
        ctx.rect(mapX, mapY, size, size);
        ctx.fill();
        ctx.font = "700 15px Lato";
        ctx.fillStyle = (showDarkTheme) ? "rgba(255, 255, 255, .9)" : "rgba(0,0,0,.45)";
        var fps = "FPS: ";
        ctx.fillText(fps, mapX, mapY - 5);
        var displayFps = ~~displayfps;
        ctx.fillStyle = (displayFps >= 40) ? "green" : ((displayFps >= 20)) ? "orange" : "red";
        ctx.fillText(displayFps, mapX + ctx.measureText(fps).width, mapY - 5);
        var fpsWidth = ctx.measureText(fps + ~~displayfps).width;
        ctx.fillStyle = (showDarkTheme) ? "rgba(255, 255, 255, .9)" : "rgba(0,0,0,.45)";
        var x = "X: " + ~~nodeX + ", ";
        ctx.fillText(x, mapX + fpsWidth + 5, mapY - 5);
        ctx.fillText("Y: " + ~~nodeY, mapX + fpsWidth + 5 + ctx.measureText(x).width, mapY - 5);
        ctx.closePath();
        ctx.beginPath();
        ctx.lineWidth = 1.25;
        var newX = nodeX / (rightPos - leftPos);
        var newY = nodeY / (bottomPos - topPos);
        var posX = (newX * size + mapX) + size / 2 - 100;
        var posY = (newY * size + mapY) + size / 2 - 100;
        var bw = bh = size;
        var insideX = -1;
        var insideY = -1;
        for (var x = 0; x <= bw; x += 40) {
            if (x != bw) {
                var ix = 0.5 + x + mapX;
                var iy = mapY;
                if (insideBox(ix, iy, ix + 40, iy + bh, posX, posY)) {
                    insideX = ix;
                }
                if (x == 0) continue;
                ctx.moveTo(0.5 + x + mapX, mapY);
                ctx.lineTo(0.5 + x + mapX, bh + mapY);
            }
            ctx.fillStyle = "white";
            ctx.font = "700 18px Lato";
            ctx.textAlign = "center";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.35;
            for (var i = 0; i < 5; i++) {
                ctx.fillText(String.fromCharCode(i + 65) + x / 40, (0.5 + x + mapX) - 20, mapY + 25.5 + (i * 40));
            }
        }
        for (var y = 0; y <= bh; y += 40) {
            if (y != bh) {
                var ix = mapX;
                var iy = 0.5 + y + mapY;
                if (insideBox(ix, iy, ix + bw, iy + 40, posX, posY)) {
                    insideY = iy;
                }
                if (y == 0) continue;
                ctx.moveTo(mapX, 0.5 + y + mapY);
                ctx.lineTo(bw + mapX, 0.5 + y + mapY);
            }
        }
        if (playerCells.length > 0 && insideX > -1 && insideY > -1) {
            ctx.fillStyle = "#ccff00";
            ctx.globalAlpha = 0.3;
            ctx.fillRect(insideX, insideY, 40, 40);
        }
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "rgba(255,255,255,.2)";
        ctx.stroke();
        ctx.closePath();
        for (var i = 0; i < playerCells.length; i++) {
            var player = playerCells[i];
            var ox = player.ox / (rightPos - leftPos);
            var oy = player.oy / (bottomPos - topPos);
            var x = (ox * size + mapX) + size / 2 - 100;
            var y = (oy * size + mapY) + size / 2 - 100;
            var mass = Math.max(2, player.size / (size / 2));
            ctx.fillStyle = player.color;
            if (i == 0) {
                ctx.font = "bold " + (14 + mass) + "px Lato";
                var measure = ctx.measureText(player.name);
                ctx.strokestyle = "black";
            }
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.globalAlpha = 1;
            ctx.arc(x, y, mass, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
        ctx.restore();
    }
    function drawTouch(ctx)
    {
        ctx.save();
        if(touchable) {

            for(var i=0; i<touches.length; i++) {

                var touch = touches[i];

                if(touch.identifier == leftTouchID){
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = 6;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 40,0,Math.PI*2,true);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = 2;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 60,0,Math.PI*2,true);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.arc(leftTouchPos.x, leftTouchPos.y, 40, 0,Math.PI*2, true);
                    ctx.stroke();

                } else {

                    ctx.beginPath();
                    //ctx.fillStyle = "#0096ff";
                    //ctx.fillText("touch id : "+touch.identifier+" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30);

                    ctx.beginPath();
                    ctx.strokeStyle = "#0096ff";
                    ctx.lineWidth = "6";
                    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true);
                    ctx.stroke();
                }
            }
        } else {

            //ctx.fillStyle  = "white";
            //ctx.fillText("mouse : "+touchX+", "+touchY, touchX, touchY);
        }
        //c.fillText("hello", 0,0);
        ctx.restore();
    }
    function drawGrid() {
        if (showDarkTheme) {
            ctx.fillStyle = "#111111";
        }
        else if (pembetema) {
            ctx.fillStyle = "#ff80ab";;
        }else if (yesiltema) {
            ctx.fillStyle = "#006400";;
        }else if (mavitema) {
            ctx.fillStyle = "#00008b";;
        } else if (default_tema) {
            ctx.fillStyle = "#F2FBFF";;
        }
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        if (showDarkTheme) {
            ctx.strokeStyle = "#AAAAAA";
        }
        else if (pembetema) {
            ctx.strokeStyle = "#000000";
        } else if (yesiltema) {
            ctx.strokeStyle = "#000000";
        }else if (mavitema) {
            ctx.strokeStyle = "#000000";
        }
        else if (default_tema) {
            ctx.strokeStyle = "#000000";
        }
        ctx.globalAlpha = .2;
        ctx.scale(viewZoom, viewZoom);
        var a = canvasWidth / viewZoom,
            b = canvasHeight / viewZoom;





        /*     for (var c = -.5 + (-nodeX + a / 2) % 50; c < a; c += 50) {
                ctx.beginPath();
                ctx.moveTo(c, 0);
                ctx.lineTo(c, b);
                ctx.stroke();
            }
    /*         for (c = -.5 + (-nodeY + b / 2) % 50; c < b; c += 50) {
                ctx.beginPath();
                ctx.moveTo(0, c);
                ctx.lineTo(a, c);
                ctx.stroke();
            } */
        ctx.restore()
    }

    function drawSplitIcon(ctx) {
        if (isTouchStart && splitIcon.width) {
            var size = ~~ (canvasWidth / 7);
            // ctx.drawImage(splitIcon, canvasWidth - size, canvasHeight - size, size, size);
            ctx.drawImage(splitIcon,10, canvasHeight - size, size, size);
        }

        if (isTouchStart && splitIcon.width) {
            var size = ~~ (canvasWidth / 7);
            //ctx.drawImage(ejectIcon, canvasWidth - size, canvasHeight - 2*size-10, size, size);
            ctx.drawImage(ejectIcon, 10, canvasHeight - 2*size-10, size, size);
        }


    }

    function calcUserScore() {
        for (var score = 0, i = 0; i < playerCells.length; i++) score += playerCells[i].nSize * playerCells[i].nSize;
        return score
    }
    function yb() {
        var a;
        a = 1 * Math.max(q / 1080, m / 1920);
        return a *= M
    }
    function Yb(a) {
        for (var b = a.length, c, d; 0 < b;) d = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[d], a[d] = c
    }
    var gdtr_test_b = "Paperio3.com";
    function drawLeaderBoard() {
        if(this.lastWinner == leaderdefault){
            var _c = 60;
            var _g = 40;
            var _p = 70;
        } else {
            var _c = 110;
            var _g = 80;
            var _p = 125;
        }
        lbCanvas = null;
        if (null != teamScores || 0 != leaderBoard.length)
            if (null != teamScores || showName) {
                lbCanvas = document.createElement("canvas");
                var ctx = lbCanvas.getContext("2d"),
                    boardLength = 120;
                boardLength = null == teamScores ? boardLength + 30 * leaderBoard.length : boardLength + 180;
                var scaleFactor = Math.min(0.22*canvasHeight, Math.min(200, .3 * canvasWidth)) / 200;
                lbCanvas.width = 240 * scaleFactor;
                lbCanvas.height = boardLength * scaleFactor;

                ctx.constructor.prototype.fillRoundedRect =
                    function (xx, yy, ww, hh, rad, fill, stroke) {
                        if (typeof (rad) == "undefined") rad = 5;
                        this.beginPath();
                        this.moveTo(xx + rad, yy);
                        this.arcTo(xx + ww, yy, xx + ww, yy + hh, rad);
                        this.arcTo(xx + ww, yy + hh, xx, yy + hh, rad);
                        this.arcTo(xx, yy + hh, xx, yy, rad);
                        this.arcTo(xx, yy, xx + ww, yy, rad);
                        if (stroke) this.stroke(); // Default to no stroke
                        if (fill || typeof (fill) == "undefined") this.fill(); // Default to fill
                    };
                ctx.fillStyle = "rgba(0, 0, 0, 0.298039)";
                ctx.strokeStyle = "rgba(0, 0, 0, 0.298039)";
                ctx.fillRoundedRect(0, 0, lbCanvas.width, lbCanvas.height, 10);
                ctx.scale(scaleFactor, scaleFactor);
                /* ctx.scale(scaleFactor, scaleFactor);
                ctx.globalAlpha = .25;
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, 200, boardLength); */
                ctx.globalAlpha = 1;
                ctx.fillStyle = "#FFFFFF";
                var c = this.lastWinner;
                ctx.font = "30px Lato";
                ctx.fillText(c, 120 - ctx.measureText(c).width / 2, 40);

                var b;
                /* var leaderColors = ["#DCE93A", "#FFa700", "#33E660", "#fff", "#f1f1f2", "#e5e5e5", "#d7d7d7", "#c6c7c6", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5", "#b5b6b5"];
       */
                if (null == teamScores) {

                    for (ctx.font = "22px Lato", b = 0; b < leaderBoard.length; ++b) {
                        c = leaderBoard[b].name.split("*")[0] || "UnnamedCell";
                        if (!showName) {

                            (c = "UnnamedCell");
                        }
                        c = ps(c)[1];
                        if(c == ''){c = 'UnnamedCell';}
                        if (-1 != nodesOnScreen.indexOf(leaderBoard[b].id)) {


                            playerCells[0].name.split("*")[0] && (c = ps(playerCells[0].name.split("*")[0])[1]);

                            if(c == ''){c = 'UnnamedCell';}
                            ctx.fillStyle = "#ccff00";

                            if (!noRanking) {
                                c = b + 1 + ") " + c;
                            }
                            ctx.fillText(c, 40 / 2, 70 + 32 * b+20);
                        } else {
                            ctx.fillStyle =" #FFFFFF";
                            if (!noRanking) {
                                c = b + 1 + ") " + c;
                            }
                            ctx.fillText(c, 40 / 2, 70 + 32* b+20);
                        }
                    }
                    /*$(".gdtr_tebrik_et").ortala();
                    function starout() {
                        $(".gdtr_tebrik_et")
                            .removeClass("bildirim_nedir_g")
                            .addClass("bildirim_nedir_o");
                    }

                    function star(text) {
                        var startext = text;
                        $(".gdtr_tebrik_et")
                            .html(startext);
                        $(".gdtr_tebrik_et")
                            .removeClass("bildirim_nedir_o")
                            .addClass("bildirim_nedir_g");
                        setTimeout(starout, 1800);
                    }
                    if (gdtr_test_b == leaderBoard[0].name) {

                    } else {
                        star("<div class='bildirim_nedir' >Game Leader</div><div class='kullanici_adi_nedir'>" + ps(leaderBoard[0].name.split("*")[0])[1] + "</div><div class='tebrik_et'>Congratulations!'</div>");
                        gdtr_test_b = leaderBoard[0].name;
                        //leaderSound.play();
                    }*/
                }
                else {

                    for (b = c = 0; b < teamScores.length; ++b) {
                        var d = c + teamScores[b] * Math.PI * 2;
                        ctx.fillStyle = teamColor[b + 1];
                        ctx.beginPath();
                        ctx.moveTo(100, 140);
                        ctx.arc(100, 140, 80, c, d, false);
                        ctx.fill();
                        c = d
                    }
                }
            }
    }

    function Cell(uid, ux, uy, usize, ucolor, uname) {
        this.id = uid;
        this.ox = this.x = ux;
        this.oy = this.y = uy;
        this.oSize = this.size = usize;
        this.color = ucolor;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(uname)
    }

    function UText(usize, ucolor, ustroke, ustrokecolor) {
        usize && (this._size = usize);
        ucolor && (this._color = ucolor);
        this._stroke = !!ustroke;
        ustrokecolor && (this._strokeColor = ustrokecolor)
    }


    var localProtocol = wHandle.location.protocol,
        localProtocolHttps = "https:" == localProtocol;
    var nCanvas, ctx, mainCanvas, lbCanvas, chatCanvas, canvasWidth, canvasHeight, qTree = null,
        ws = null,
        nodeX = 0,
        nodeY = 0,
        nodesOnScreen = [],
        playerCells = [],
        nodes = {}, nodelist = [],
        Cells = [],
        leaderBoard = [],
        chatBoard = [],
        chatClanBoard = [],
        isClanMode = false,
        unreadClanChat = 0,
        unreadAllChat = 0,
        rawMouseX = 0,
        rawMouseY = 0,
        X = -1,
        Y = -1,
        cb = 0,
        timestamp = 0,
        userNickName = null,
        leftPos = 0,
        topPos = 0,
        rightPos = 1E4,
        bottomPos = 1E4,
        viewZoom = 1,
        w = null,
        showSkin = true,
        showName = true,
        showColor = false,
        ua = false,
        userScore = 0,
        Oa = 0,
        Ra = 0,
        R = 0,
        Sa = 0,
        timeAlive = 0,
        onlineUser = 0,
        showDarkTheme = true,
        default_tema = false,
        pembetema = false,
        yesiltema = false,
        mavitema = false,
        showMass = false,
        szoom = true,
        smoothRender = .4,
        transparentRender = false,
        hideChat = true,
        skipStats = false,
        posX = nodeX = ~~((leftPos + rightPos) / 2),
        posY = nodeY = ~~((topPos + bottomPos) / 2),
        posSize = 1,
        gameMode = "",
        teamScores = null,
        ma = false,
        hasOverlay = true,
        drawLine = false,
        lineX = 0,
        lineY = 0,
        drawLineX = 0,
        drawLineY = 0,
        zg = [],
        rb = Date.now(),
        Ra = 0,
        teamColor = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
        xa = false,
        zoom = 1,
        isTouchStart = "ontouchstart" in wHandle && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        splitIcon = new Image,
        ejectIcon = new Image,
        noRanking = false;

    if(showDarkTheme) {
        splitIcon.src = "../img/images/split_dark.webp";
        ejectIcon.src = "../img/images/feed_dark.webp";
    }else {
        splitIcon.src = "../img/images/split.webp";
        ejectIcon.src = "../img/images/feed.webp";
    }
    var wCanvas = document.createElement("canvas");
    var s = null;

    wHandle.isSpectating = false;
    wHandle.createParty = function () {


        wjQuery(".partyToken").val("agar.io/#cDloPsx");
        wjQuery("#helloContainer").attr("data-party-state",
            "1")

    };
    wHandle.joinParty = function (a) {
        wjQuery("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim,
            "");

    }
    wHandle.cancelParty = function () {

        wjQuery("#helloContainer").attr("data-party-state", "0");
        wjQuery("#helloContainer").attr("data-gamemode", "");

    };
    wHandle.setNick = function (arg,b) {

        if(arg == null || !arg || arg == ""){
            alert("Enter Nick ! / Invalid User Name Input !");
        } else {
            arg = arg.replace(/[|&;+,]/g, ":)");

            //var cleanString = dirtyString.replace(/[|&;$%@"<>()+,]/g, "");
            //startSound.play();
            hideOverlays();
            userNickName = '{'+document.getElementById('skin_no_gdtr').innerText+'}'+arg;
            sendNickName();
            userScore = 0;
            timeAlive = 0;
            zg = [];
            Oa = 0 ;
            rb = Date.now();
            R = 0   ;
            Sa = 0 ;
            Ra = 0;
            var timerAlive = setInterval(function () {timeAlive++;}, 1000);
            onlineUser = 0

        }
    };
    wHandle.setRegion = setRegion;
    wHandle.setSkins = function (arg) {
        setCookie("gameSkin", arg, 99999);
        showSkin = arg
    };
    wHandle.setNames = function (arg) {
        setCookie("gameName", arg, 99999);
        showName = arg
    };
    wHandle.setDarkTheme = function (arg) {
        setCookie("gameDarkTheme", "dark", 99999);
        showDarkTheme = arg
    };
    wHandle.setZoom = function (arg) {

        if(arg){
            szoom = false
        }else{
            szoom = true
        }

        setCookie("gameZoom", szoom, 99999);
    };

    wHandle.setMap = function (arg) {

        if(arg){
            map = true
        }else{
            map = false
        }

        setCookie("gameMap", map, 99999);
    };
    wHandle.pembetema = function (arg) {
        showDarkTheme = false;
        default_tema = false;
        setCookie("gameDarkTheme", "pembe", 99999);
        pembetema = arg
    };
    wHandle.yesiltema = function (arg) {
        showDarkTheme = false;
        default_tema = false;
        pembetema = false;
        setCookie("gameDarkTheme", "yesil", 99999);
        yesiltema = arg
    };
    wHandle.mavitema = function (arg) {
        showDarkTheme = false;
        default_tema = false;
        pembetema = false;
        yesiltema = false;
        setCookie("gameDarkTheme", "mavi", 99999);
        mavitema = arg
    };
    wHandle.default_tema = function (arg) {
        showDarkTheme = false;
        pembetema = false;
        yesiltema = false;
        mavitema = false;
        setCookie("gameDarkTheme", "white", 99999);

        default_tema = arg
    };
    wHandle.setColors = function (arg) {
        showColor = arg
    };
    wHandle.setShowMass = function (arg) {
        setCookie("gameShowMass", arg, 99999);
        showMass = arg
    };
    wHandle.setTransparent = function(arg) {
        setCookie("gameTrans", arg, 99999);
        transparentRender = arg;
    };
    wHandle.setSmooth = function (arg) {
        setCookie("gameSmooth", arg, 99999);
        smoothRender = arg ? 2 : .4
    };
    wHandle.setHideChat = function (arg) {
        setCookie("gameChat", arg, 99999);
        hideChat = arg;
        if (arg) {
            wjQuery("#chat_textbox").hide();
        }
        else {
            wjQuery("#chat_textbox").show();
        }
    };
    wHandle.setSkipStat = function (arg) {
        skipStats = arg;

    };
    wHandle.closeStats = function () {
        setCookie("gameStat", arg, 99999);
        wjQuery("#statoverlay").hide();
        wjQuery("#stats").hide();
        wjQuery("#overlays").fadeIn(200);
    }
    wHandle.spectate = function () {
        document.getElementById("return_home_btn").style.display = "block";
        userNickName = null;
        wHandle.isSpectating = true;
        sendUint8(1);
        hideOverlays()
    };
    wHandle.toggleChatMode = toggleChatMode;
    wHandle.setGameMode = function (arg) {
        ca(arg);
    };
    wHandle.setAcid = function (arg) {
        setCookie("gameAcid", arg, 99999);
        xa = arg
    };
    if (null != wHandle.localStorage) {
        if (null == wHandle.localStorage.AB8) {
            wHandle.localStorage.AB8 = ~~(100 * Math.random());
        }
        Ra = +wHandle.localStorage.AB8;
        wHandle.ABGroup = Ra;
    }
    /*wjQuery.get(localProtocol + "//gc.agar.io", function (a) {
     var b = a.split(" ");
     a = b[0];
     b = b[1] || "";
     -1 == "DE IL PL HU BR AT UA".split(" ").indexOf(a) && knownNameDict.push("nazi");
     -1 == ["UA"].indexOf(a) && knownNameDict.push("ussr");
     T.hasOwnProperty(a) && ("string" == typeof T[a] ? w || setRegion(T[a]) : T[a].hasOwnProperty(b) && (w || setRegion(T[a][b])))
     }, "text");*/

    setTimeout(function () {
    }, 3E5);
    setInterval(function () {
        var a = $b();
//        0 != a && (++Sa, 0 == R && (R = a), R = Math.min(R, a))
        if (0 != a) {
            ++Sa;
            if (0 == R) {
                R = a;
            }
            R = Math.min(R, a);
        }

// console.log("sÄ±ra: "+ R);
    }, 1E3);
    setInterval(function () {
        if (true) {
            zg.push(calcUserScore() / 100);
        }    }, 1E3 / 60);
    var T = {
        ZW: "EU-London"
    };
    wHandle.connect = wsConnect;

    //This part is for loading custom skins
    /*var data = {"action": "test"};
    //var response = null;
    wjQuery.ajax({
        type: "POST",
        dataType: "json",
        url: "checkdir.php", //Relative or absolute path to response.php file
        data: data,
        success: function (data) {
            //response = data["names"];
            knownNameDict = data['names'].split(";");
            wHandle.knownNameDict = knownNameDict;
        }
    });*/



    var delay = 500,
        oldX = -1,
        oldY = -1,
        Canvas = null,
        z = 1,
        scoreText = null,
        skins = {},
        // knownNameDict = "",
        knownNameDict_noDisp = "turkey",
        ib = ["_canvas'blob"];
    Cell.prototype = {
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
        flag: 0, //what does this mean
        updateTime: 0,
        updateCode: 0,
        drawTime: 0,
        destroyed: false,
        isVirus: false,
        isAgitated: false,
        wasSimpleDrawing: true,
        destroy: function () {
            var tmp;
            for (tmp = 0; tmp < nodelist.length; tmp++)
                if (nodelist[tmp] == this) {
                    nodelist.splice(tmp, 1);
                    break
                }
            delete nodes[this.id];
            tmp = playerCells.indexOf(this);
            if (-1 != tmp) {
                ua = true;
                playerCells.splice(tmp, 1);
            }
            tmp = nodesOnScreen.indexOf(this.id);
            if (-1 != tmp) {

                nodesOnScreen.splice(tmp, 1);
            }
            this.destroyed = true;
            Cells.push(this)
        },
        getNameSize: function () {
            return Math.max(~~(.3 * this.size), 24)
        },
        setName: function (a) {
            if (this.name = a) {
                if (null == this.nameCache) {
                    this.nameCache = new UText(this.getNameSize(), "#FFFFFF", true, "#000000");
                    this.nameCache.setValue(this.name);
                } else {
                    this.nameCache.setSize(this.getNameSize());
                    this.nameCache.setValue(this.name);
                }
            }
        },
        createPoints: function () {
            for (var samplenum = this.getNumPoints(); this.points.length > samplenum;) {
                var rand = ~~(Math.random() * this.points.length);
                this.points.splice(rand, 1);
                this.pointsAcc.splice(rand, 1)
            }
            if (0 == this.points.length && 0 < samplenum) {
                this.points.push({
                    ref: this,
                    size: this.size,
                    x: this.x,
                    y: this.y
                });
                this.pointsAcc.push(Math.random() - .5);
            }
            while (this.points.length < samplenum) {
                var rand2 = ~~(Math.random() * this.points.length),
                    point = this.points[rand2];
                this.points.splice(rand2, 0, {
                    ref: this,
                    size: point.size,
                    x: point.x,
                    y: point.y
                });
                this.pointsAcc.splice(rand2, 0, this.pointsAcc[rand2])
            }
        },
        getNumPoints: function () {
            if (0 == this.id) return 16;
            var a = 10;
            if (20 > this.size) a = 0;
            if (this.isVirus) a = 30;
            var b = this.size;
            if (!this.isVirus) (b *= viewZoom);
            b *= z;
            if (this.flag & 32) (b *= .25);
            return ~~Math.max(b, a);
        },
        movePoints: function () {
            this.createPoints();
            var points = this.points;
            var pointsacc = this.pointsAcc;
            var numpoints = points.length;
            var i = 0;
            for (; i < numpoints; ++i) {
                var pos1 = pointsacc[(i - 1 + numpoints) % numpoints];
                var pos2 = pointsacc[(i + 1) % numpoints];
                pointsacc[i] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                pointsacc[i] *= .7;
                if (10 < pointsacc[i]) {

                    pointsacc[i] = 10;
                }
                if (-10 > pointsacc[i]) {

                    pointsacc[i] = -10;
                }

                pointsacc[i] = (pos1 + pos2 + 8 * pointsacc[i]) / 10;
            }

            var ref = this;
            var isvirus = this.isVirus ? 0 : (this.id / 1E3 + timestamp / 1E4) % (2 * Math.PI);

            var j = 0;
            for (; j < numpoints; ++j) {
                var f = points[j].size;
                var e = points[(j - 1 + numpoints) % numpoints].size;
                var m = points[(j + 1) % numpoints].size;
                if (15 < this.size && null != qTree && 20 < this.size * viewZoom && 0 != this.id) {

                    var l = false;
                    var n = points[j].x;
                    var q = points[j].y;
                    qTree.retrieve2(n - 5, q - 5, 10, 10, function(a) {
                        if (a.ref != ref && 25 > (n - a.x) * (n - a.x) + (q - a.y) * (q - a.y)) {

                            l = true;
                        }
                    });
                    if (!l && points[j].x < leftPos || points[j].y < topPos || points[j].x > rightPos || points[j].y > bottomPos) {

                        l = true;
                    }
                    if (l) {
                        if (0 < pointsacc[j]) {

                            pointsacc[j] = 0;
                        }
                        pointsacc[j] -= 1;
                    }
                }
                f = f + pointsacc[j];
                if (0 > f) {

                    f = 0;
                }

                f = this.isAgitated ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;

                points[j].size = (e + m + 8 * f) / 10;

                e = 2 * Math.PI / numpoints;
                m = this.points[j].size;
                if (this.isVirus && 0 == j % 2) {
                    m = m + 5;
                }
                points[j].x = this.x + Math.cos(e * j + isvirus) * m;
                points[j].y = this.y + Math.sin(e * j + isvirus) * m;
            }
        },
        updatePos: function () {
            if (0 == this.id) return 1;
            var a;
            a = (timestamp - this.updateTime) / 120;
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            var b = 0 > a ? 0 : 1 < a ? 1 : a;
            this.getNameSize();
            if (this.destroyed && 1 <= b) {
                var c = Cells.indexOf(this);
                -1 != c && Cells.splice(c, 1)
            }
            this.x = a * (this.nx - this.ox) + this.ox;
            this.y = a * (this.ny - this.oy) + this.oy;
            this.size = b * (this.nSize - this.oSize) + this.oSize;

            return b;
        },
        shouldRender: function () {
            if (0 == this.id) {
                return true
            } else {
                return !(this.x + this.size + 40 < nodeX - canvasWidth / 2 / viewZoom || this.y + this.size + 40 < nodeY - canvasHeight / 2 / viewZoom || this.x - this.size - 40 > nodeX + canvasWidth / 2 / viewZoom || this.y - this.size - 40 > nodeY + canvasHeight / 2 / viewZoom);
            }
        },
        drawOneCell: function (ctx) {
            if (this.shouldRender()) {
                var b = (0 != this.id && !this.isVirus && !this.isAgitated && smoothRender > viewZoom);
                if (5 > this.getNumPoints()) b = true;
                if (this.wasSimpleDrawing && !b)
                    for (var c = 0; c < this.points.length; c++) this.points[c].size = this.size;
                this.wasSimpleDrawing = b;
                ctx.save();
                this.drawTime = timestamp;
                c = this.updatePos();
                this.destroyed && (ctx.globalAlpha *= 1 - c);
                ctx.lineWidth = 10;
                ctx.lineCap = "round";
                ctx.lineJoin = this.isVirus ? "miter" : "round";
                if (showColor) {
                    ctx.fillStyle = "#FFFFFF";
                    ctx.strokeStyle = "#AAAAAA";
                } else {
                    ctx.fillStyle = this.color;
                    ctx.strokeStyle = this.color;
                }
                if (b) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
                }
                else {
                    this.movePoints();
                    ctx.beginPath();
                    var d = this.getNumPoints();
                    ctx.moveTo(this.points[0].x, this.points[0].y);
                    for (c = 1; c <= d; ++c) {
                        var e = c % d;
                        ctx.lineTo(this.points[e].x, this.points[e].y)
                    }
                }
                ctx.closePath();
                var skinName2 = this.name.toLowerCase();

                //li = ps(skinName);



                var skinName = ps(skinName2)[0];


                //console.log(skinno_y);
                if (skinName.indexOf('[') != -1) {
                    var clanStart = skinName.indexOf('[');
                    var clanEnd = skinName.indexOf(']');
                    skinName = skinName.slice(clanStart + 1, clanEnd);
                    //console.log(skinName);
                }

                if (!this.isAgitated && showSkin && ':teams' != gameMode) {
                    if (-1 != knownNameDict.indexOf(skinName)) {
                        if (!skins.hasOwnProperty(skinName)) {
                            skins[skinName] = new Image;
                            skins[skinName].src = __domain_adi+"/skins/" + skinName + '.webp';
                        }
                        if (0 != skins[skinName].width && skins[skinName].complete) {
                            c = skins[skinName];
                        } else {
                            c = null;
                        }
                    } else {
                        c = null;
                    }
                } else {
                    c = null;
                }
                c = (e = c) ? -1 != ib.indexOf(skinName) : false;
                //b || ctx.stroke();
                ctx.fill();
                if (!(null == e || c)) {
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
                    ctx.restore();
                }
                if (typeof playerCells[0] !== 'undefined') {
                    if (this.id == playerCells[0].id && (~~(this.size * this.size / 100)) < userScore / 100 && playerCells.length == 1) {
                        ctx.save();
                        var a = canvasWidth / 2
                            , b = canvasHeight / 2;
                        var dx = rawMouseX - a
                            , dy = rawMouseY - b
                            , rot = Math.atan2(dy, dx);
                        ctx.translate(this.x, this.y);
                        ctx.rotate(rot);
                        ctx.translate(-this.x, -this.y);
                        // donen skin ctx.drawImage(blobImage,this.x- this.size,this.y- this.size,2*this.size,2*this.size);

                        ctx.drawImage(arrow, this.x - this.size * 1.5, this.y - this.size * 1.5, 3 * this.size, 3 * this.size);
                        ctx.restore();
                    }
                }
                /*     if ((showColor || 15 < this.size) && !b) {
                        ctx.strokeStyle = '#000000';
                        ctx.globalAlpha *= .1;
                     //   ctx.stroke();
                    } */
                ctx.globalAlpha = 1;
                if (null != e && c) {
                    ctx.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                }
                c = -1 != playerCells.indexOf(this);
                var ncache;
                //draw name
                if (0 != this.id) {
                    var b = ~~this.y;
                    if ((showName || c) && this.name && this.nameCache && (null == e || -1 == knownNameDict_noDisp.indexOf(skinName))) {

                        ctx.globalAlpha = 1;
                        ctx.font = "bold "+Math.max(~~(.3 * this.size), 24) + 'px Lato';
                        ctx.fillStyle = '#FFF';
                        ctx.textAlign = "center";
                        nikim = (ps(this.name.split("*")[0])[1]);
                        ctx.fillText(nikim, this.x, this.y);
                    }

                    //draw mass
                    if (showMass && (c || 0 == playerCells.length && (!this.isVirus || this.isAgitated) && 20 < this.size)) {
                        ctx.globalAlpha = 1;
                        ctx.font = "bold "+Math.max(~~(.3 * (this.size/3)), 24) + 'px Lato';
                        ctx.fillStyle = '#FFF';
                        ctx.textAlign = "center";
                        var skorum =~~(this.size * this.size / 100);
                        ctx.fillText(skorum, this.x, this.y + 100  );
                    }
                }
                if(blobb==1){
                    ctx.drawImage(blobImage,this.x- this.size,this.y- this.size,2*this.size,2*this.size);
                }
                ctx.restore()
            }
        }
    };
    UText.prototype = {
        _value: "",
        _color: "#000000",
        _stroke: false,
        _strokeColor: "#000000",
        _size: 16,
        _canvas: null,
        _ctx: null,
        _dirty: false,
        _scale: 1,

        setSize: function (a) {
            if (this._size != a) {
                this._size = a;
                this._dirty = true;
            }
        },
        setScale: function (a) {
            if (this._scale != a) {
                this._scale = a;
                this._dirty = true;
            }
        },
        setStrokeColor: function (a) {
            if (this._strokeColor != a) {
                this._strokeColor = a;
                this._dirty = true;
            }
        },
        setValue: function (a) {
            if (a != this._value) {
                this._value = a;
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
                var canvas = this._canvas,
                    ctx = this._ctx,
                    value = this._value,
                    scale = this._scale,
                    fontsize = this._size,
                    font = '700 '+fontsize + 'px Lato';
                ctx.font = font;
                var h = ~~(.2 * fontsize);
                canvas.width = (ctx.measureText(value).width + 6) * scale;
                canvas.height = (fontsize + h) * scale;
                ctx.font = font;
                ctx.scale(scale, scale);
                ctx.globalAlpha = 1;
                ctx.lineWidth = 3;
                ctx.strokeStyle = this._strokeColor;
                ctx.fillStyle = this._color;
                this._stroke && ctx.strokeText(value, 3, fontsize - h / 2);
                ctx.fillText(value, 3, fontsize - h / 2)
            }
            return this._canvas
        },
        getWidth: function () {
            return (ctx.measureText(this._value).width + 6);
        }
    };

    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var Quad = {
        init: function (args) {
            function Node(x, y, w, h, depth) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.depth = depth;
                this.items = [];
                this.nodes = []
            }

            var c = args.maxChildren || 2,
                d = args.maxDepth || 4;
            Node.prototype = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                depth: 0,
                items: null,
                nodes: null,
                exists: function (selector) {
                    for (var i = 0; i < this.items.length; ++i) {
                        var item = this.items[i];
                        if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) return true
                    }
                    if (0 != this.nodes.length) {
                        var self = this;
                        return this.findOverlappingNodes(selector, function (dir) {
                            return self.nodes[dir].exists(selector)
                        })
                    }
                    return false;
                },
                retrieve: function (item, callback) {
                    for (var i = 0; i < this.items.length; ++i) callback(this.items[i]);
                    if (0 != this.nodes.length) {
                        var self = this;
                        this.findOverlappingNodes(item, function (dir) {
                            self.nodes[dir].retrieve(item, callback)
                        })
                    }
                },
                insert: function (a) {
                    if (0 != this.nodes.length) {
                        this.nodes[this.findInsertNode(a)].insert(a);
                    } else {
                        if (this.items.length >= c && this.depth < d) {
                            this.devide();
                            this.nodes[this.findInsertNode(a)].insert(a);
                        } else {
                            this.items.push(a);
                        }
                    }
                },
                findInsertNode: function (a) {
                    return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3
                },
                findOverlappingNodes: function (a, b) {
                    return a.x < this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(0) || a.y >= this.y + this.h / 2 && b(2)) || a.x >= this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(1) || a.y >= this.y + this.h / 2 && b(3)) ? true : false
                },
                devide: function () {
                    var a = this.depth + 1,
                        c = this.w / 2,
                        d = this.h / 2;
                    this.nodes.push(new Node(this.x, this.y, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y, c, d, a));
                    this.nodes.push(new Node(this.x, this.y + d, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
                    a = this.items;
                    this.items = [];
                    for (c = 0; c < a.length; c++) this.insert(a[c])
                },
                clear: function () {
                    for (var a = 0; a < this.nodes.length; a++) this.nodes[a].clear();
                    this.items.length = 0;
                    this.nodes.length = 0
                }
            };
            var internalSelector = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            return {
                root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),
                insert: function (a) {
                    this.root.insert(a)
                },
                retrieve: function (a, b) {
                    this.root.retrieve(a, b)
                },
                retrieve2: function (a, b, c, d, callback) {
                    internalSelector.x = a;
                    internalSelector.y = b;
                    internalSelector.w = c;
                    internalSelector.h = d;
                    this.root.retrieve(internalSelector, callback)
                },
                exists: function (a) {
                    return this.root.exists(a)
                },
                clear: function () {
                    this.root.clear()
                }
            }
        }
    };


    var ac = function() {

        function callback(f, size, name, s, p) {
            var ctx = size.getContext("2d");
            var width = size.width;
            size = size.height;
            /** @type {string} */
            f.color = p;
            f.setName(name);
            /** @type {number} */
            f.size = s;
            ctx.save();
            ctx.translate(width / 2, size / 2);
            f.drawOneCell(ctx);
            ctx.restore();
        }
        var w = new Cell(-1, 0, 0, 32, "#5bc0de", "");
        var clone = new Cell(-1, 0, 0, 32, "#5bc0de", "");
        var redCell = new Cell(-1, 0, 0, 32, "#5bc0de", "");
        /** @type {!Array<string>} */
        var magnitudes = "#ebc0de #ebc0de #ebc0de #ebc0de #0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" ");
        /** @type {!Array} */
        var data = [];
        /** @type {number} */
        var i = 0;
        for (; i < magnitudes.length; ++i) {
            /** @type {number} */
            var rheading = i / magnitudes.length * 12;
            /** @type {number} */
            var sinDistR = 30 * Math.sqrt(i / magnitudes.length);
            data.push(new Cell(-1, Math.cos(rheading) * sinDistR, Math.sin(rheading) * sinDistR, 10, magnitudes[i], ""));
        }
        Yb(data);
        /** @type {!Element} */
        var canvasTemp = document.createElement("canvas");
        canvasTemp.getContext("2d");
        /** @type {number} */
        canvasTemp.width = canvasTemp.height = 70;
        callback(clone, canvasTemp, "", 26, magnitudes[Math.round(Math.random() * magnitudes.length)]);
        return function() {
            wjQuery(".cell-spinner").filter(":visible").each(function() {
                var message = wjQuery(this);
                /** @type {number} */
                var x = Date.now();
                var width = this.width;
                var height = this.height;
                var ctx = this.getContext("2d");
                ctx.clearRect(0, 0, width, height);
                ctx.save();
                ctx.translate(width / 2, height / 2);
                /** @type {number} */
                var y = 0;
                for (; 10 > y; ++y) {
                    ctx.drawImage(canvasTemp, (.1 * x + 80 * y) % (width + 140) - width / 2 - 70 - 35, height / 2 * Math.sin((.001 * x + y) % Math.PI * 2) - 35, 70, 70);
                }
                ctx.restore();
                if (message = message.attr("data-itr")) {
                    message = da(message);
                }
                callback(w, this, message || "", +wjQuery(this).attr("data-size"), "#5bc0de");
            });
            wjQuery("#statsPellets").filter(":visible").each(function() {
                wjQuery(this);
                var n = this.width;
                var height = this.height;
                this.getContext("2d").clearRect(0, 0, n, height);
                /** @type {number} */
                n = 0;
                for (; n < data.length; n++) {
                    callback(data[n], this, "", data[n].size, data[n].color);
                }
            });
        };
    }();




    wHandle.onload = gameLoop
//console.log(knownNameDict);
})(window, window.jQuery);


$("#totalplayer").load(__domain_adi+"/totalplayer.php").fadeIn("fast")
var refreshId = setInterval(function() {

    $("#totalplayer").fadeOut("fast").load(__domain_adi+"/totalplayer.php").fadeIn("fast")
}, 30000);


$(".controls").show();
$('.copy-party-token').click(function() {
    var i = $('.partyToken:visible')[0];
    i.setSelectionRange(0, i.value.length);
    i.select();
    try {
        document.execCommand('copy');
    } catch (e) {}
});
$('input#nick').keypress(function(e) {
    if (e.which == '13') {
        e.preventDefault();
        if (!isSpectating) setNick(document.getElementById('nick').value);
    }
});
var _0x97c2 = ["\x6B\x65\x79\x43\x6F\x64\x65", "\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E", "\x6F\x6E\x6B\x65\x79\x75\x70", "\x6B\x65\x79\x64\x6F\x77\x6E", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];
(function() {
    var _0x1ed7x1 = 10;
    var _0x1ed7x2 = 50;
    var _0x1ed7x3 = function(_0x1ed7x4) {
        if (_0x1ed7x4[_0x97c2[0]] === 69) {
            for (var _0x1ed7x5 = 0; _0x1ed7x5 < _0x1ed7x1; ++_0x1ed7x5) {
                setTimeout(function() {
                    window[_0x97c2[1]]({
                        keyCode: 87
                    });
                    window[_0x97c2[2]]({
                        keyCode: 87
                    });
                }, _0x1ed7x5 * _0x1ed7x2)
            }
        }
    };
    window[_0x97c2[4]](_0x97c2[3], _0x1ed7x3);
})();

$(".gallery").hide();
$(".face,.twit,.del").hide();


function getScreenshot() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var dataURL = canvas.toDataURL('image/jpeg', 0.7);
    $(".gallery").html('<a href="' + dataURL + '" target="_blank"><img id="ss" src="' + dataURL + '"></a>');
    $("#screenshot").hide();
    $(".face,.twit,.del").show();
    $(".gdtr_screenshot_btn").show();
    $(".gallery").show();
}

function closeAndPlay() {
    window.location = __domain_adi;
}

function clearProcess() {
    $(".gallery").html('');
    $("#screenshot").show();
    $(".gdtr_screenshot_btn").hide();
    $(".face,.twit,.del").hide();
    $(".gallery").hide();
}

function idver(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function shareProcess(type) {
    $(".controls").hide();
    var winWidth = 520;
    var winHeight = 350;
    var no = idver(11);
    var saveplayer = $("#nick").val();
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    var shareURL = encodeURIComponent(__domain_adi+'/score-'+no+'.html');
    if (type == 'facebook') {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareURL, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    } else if (type == 'twitter') {
        window.open('https://twitter.com/share?text=Screenshot from Agario&url=' + shareURL, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }
    $.post('bor.do', {
        'resim': $("#ss").attr('src'),
        'no': no,
        'saveplayer':saveplayer
    }, function(data) {
        console.log(shareURL);
    });
}

function Share(type) {
    if (type == 'fb') {
        window.open('https://www.facebook.com/sharer.php?u='+__domain_adi+'&quote=Play+to+Agario+Boston!%20Highest%20Mass%20' + document.querySelector('.gdtr_highest_mass').innerHTML + '%20Top%20Position%20' + document.querySelector('.gdtr_top_leaderboard_position').innerHTML + '%20Time%20Alive%20' + document.querySelector('.gdtr_time_alive').innerHTML + '%20Food%20Eaten%20' + document.querySelector('.gdtr_food_eaten').innerHTML, 'pagename', 'resizable');
    }
    if (type == 'tw') {
        window.open('https://twitter.com/intent/tweet?text=Play%20To%20'+__domain_adi+'%20Highest%20Mass%20' + document.querySelector('.gdtr_highest_mass').innerHTML + '%20Top%20Position%20' + document.querySelector('.gdtr_top_leaderboard_position').innerHTML + '%20Time%20Alive%20' + document.querySelector('.gdtr_time_alive').innerHTML + '%20Food%20Eaten%20' + document.querySelector('.gdtr_food_eaten').innerHTML, 'pagename', 'resizable');
    }
}


$( document ).ready(function() {
    if (selectAgarioTheme) {
        if (selectAgarioTheme == "white") {
            $(".select_white").addClass("active");
            default_tema(true);
        } else if (selectAgarioTheme == "dark") {
            $(".select_dark").addClass("active");
            setDarkTheme(true);
        } else if (selectAgarioTheme == "yesil") {
            $(".select_green").addClass("active");
            yesiltema(true);
        }else if (selectAgarioTheme == "mavi") {
            $(".select_blue").addClass("active");
            mavitema(true);
        } else {
            $(".select_pink").addClass("active");
            pembetema(true);
        }
    }else{
        document.querySelectorAll("input[name=theme]")[1].checked = true;
    }

    if(getCookie("gameSkin") !== undefined && !getCookie("gameSkin") ){
        setSkins(true);
    }
    if(getCookie("gameName") !== undefined && !getCookie("gameName") ){
        setSkins(true);
    }

    if(getCookie("gameShowMass") !== undefined && getCookie("gameShowMass") ){
        setShowMass(true);
    }
    if(getCookie("gameAcid") !== undefined && getCookie("gameAcid") ){
        setAcid(true);
    }
    if(getCookie("gameSmooth") !== undefined && getCookie("gameSmooth") ){
        setSmooth(true);
    }
    if(getCookie("gameZoom") !== undefined && !getCookie("gameZoom") ){
        setZoom(true);
    }
});
