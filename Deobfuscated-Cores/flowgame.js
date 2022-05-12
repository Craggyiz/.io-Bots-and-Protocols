module.exports.polyFills(), document.addEventListener("DOMContentLoaded", (function(event) {
    var flow = {
        defaultSettings: {
            activeRole: 0,
            activeWearables: [],
            visibility: 2,
            antiLag: !1,
            darkMode: !0,
            acidMode: !1,
            hudScale: 100,
            chatOpacity: 100,
            smallChat: !1,
            centroidCameraFocus: !1,
            cameraMovementSpeed: 10,
            scrollWheelZoomSpeed: 100,
            autoZoomSpeed: 5,
            autoZoom: !1,
            infinityZoom: !0,
            autoStop: !0,
            autoRespawn: !1,
            autoAfk: !0,
            movementSmoothing: !0,
            animationDuration: 120,
            sound: !0,
            language: "EN",
            drawGridLines: !0,
            drawBorders: !0,
            drawMiniMapSectors: !0,
            drawFood: !0,
            drawVirusSpikes: !0,
            drawCellColors: !0,
            drawCellBorders: !1,
            drawSkins: !0,
            drawWearables: !0,
            drawPlayerNames: !0,
            drawMassAmount: !1,
            drawTextOutlines: !0,
            drawBubbleCells: !1,
            showStatistics: !0,
            showLeaderboard: !0,
            showMiniMap: !0,
            showChat: !0,
            showKeyAssignments: !1,
            showAnimations: !0,
            allowPartyAnimations: !0,
            clockType: 0,
            backgroundOverlay: 0,
            backgroundImage: 0,
            backgroundColor: "#181A1F",
            autoBackgroundColor: !0,
            virusColor: "00F000",
            virusOpactiy: 20,
            borderColor: "515151",
            borderWidth: 2,
            leftMouseButton: "none",
            keyEject: "KeyW",
            keySplit: "Space",
            keyDoubleSplit: "KeyD",
            keyQuadSplit: "KeyE",
            keyMinionSplit: "ShiftLeft",
            keyMinionQuadSplit: null,
            keyMinionEject: "KeyX",
            keyMinionControl: "Tab",
            keySelfFreeze: "KeyA",
            keyCloak: "KeyC",
            keySpeed: "KeyS",
            keyCannon: "KeyQ",
            keyPush: "KeyG",
            keyRecombine: "KeyR",
            keyVirus: "KeyV",
            keyFreeze: "KeyF",
            keyAnti: "KeyT",
            keyMass: "KeyM",
            keyPortal: "KeyP",
            keyDance: "PageDown",
            keyAnimate: "ControlLeft",
            keyRespawn: "Delete",
            keyToggleCamera: "KeyQ",
            keyMenu: "Backquote",
            lastSkins: ["assets/skins/100", "assets/skins/101", "assets/skins/102", "assets/skins/103", "assets/skins/104", "assets/skins/105",
                "assets/skins/106", "assets/skins/107", "assets/skins/108", "assets/skins/109"],
            favoriteSkins: [],
            version: null
        },
        canvas: document.getElementById("canvas"),
        miniMap: document.getElementById("mini-map"),
        menu: document.getElementById("menu"),
        menuCellPreview: document.querySelector("#menu .cell-preview"),
        spectateButton: document.getElementById("spectate-button"),
        deathPopup: document.getElementById("death-popup"),
        statistics: document.getElementById("statistics"),
        leaderboard: document.getElementById("leaderboard"),
        chat: document.getElementById("chat"),
        chatBox: document.getElementById("chat-box"),
        chatMessages: document.getElementById("chat-messages"),
        emojiMenu: document.getElementById("emoji-menu"),
        emojiButton: document.getElementById("emoji-button"),
        contextMenu: document.getElementById("context-menu"),
        tooltip: document.getElementById("tooltip"),
        powerUpSpeedImg: document.createElement("img"),
        powerUpCannonImg: document.createElement("img"),
        powerUpPushImg: document.createElement("img"),
        powerUpRecombineImg: document.createElement("img"),
        powerUpMassImg: document.createElement("img"),
        powerUpVirusImg: document.createElement("img"),
        powerUpFreezeImg: document.createElement("img"),
        powerUpAntiImg: document.createElement("img"),
        powerUpPortalImg: document.createElement("img"),
        sectorBackgroundImg: document.createElement("img"),
        backgroundImg: document.createElement("img"),
        patternBackgroundImg: document.createElement("img"),
        portalImg: document.createElement("img"),
        cellRecombiningImg: document.createElement("img"),
        cellFrozenImg: document.createElement("img"),
        cellSpeedyImg: document.createElement("img"),
        cellAntiImg: document.createElement("img"),
        beaconImg: document.createElement("img"),
        beaconSmallImg: document.createElement("img"),
        miniMapImage: null,
        beepSound: null,
        beaconSound: null,
        patternBackground: null,
        reOpenMenu: !1,
        myLastChatMessages: [],
        myLastChatMessagesIndex: 0,
        chatPartnerId: -1,
        chatPartners: [-1, 0],
        autoRespawnDelay: 1e3,
        gridTileSize: 7,
        autoRespawnAt: null,
        coins: 0,
        level: null,
        accountName: null,
        nickname: "",
        serverIp: "localhost",
        serverPort: 8080,
        serverPassword: null,
        hubFileUri: null,
        targetGameServerId: null,
        pelletAnimationTime: 120,
        projectileAnimationTime: 120,
        skin: null,
        isStaff: !1,
        isAlive: !1,
        isSpectating: !0,
        freeCamera: !1,
        connection: null,
        autoConnected: !1,
        settings: {},
        canStore: !1,
        lastAnimationIndex: 0,
        messageTimeoutId: null,
        menuTimeoutId: null,
        receivedTraffic: 0,
        receivedTrafficPerMinute: 0,
        sentTraffic: 0,
        startedAt: null,
        lastActionAt: null,
        touchStartedAt: null,
        touchMovedAt: null,
        sentChatMsgAt: null,
        serverConfig: null,
        lastChatMessageId: 0,
        playerId: null,
        deathLocationX: null,
        deathLocationY: null,
        diedAt: null,
        controllingMinions: !1,
        mass: null,
        mutedPlayers: {},
        images: {},
        skins: {},
        wearableImages: {},
        nicknameCache: {},
        game: null,
        historicGame: null,
        eatenCells: [],
        eatenArtifacts: [],
        eatenViruses: [],
        eatenProjectiles: [],
        eatenPellets: [],
        animations: [],
        beacons: [],
        zoom: null,
        scrollWheelZoom: 1,
        view: {
            x: 0,
            y: 0,
            worldCameraX: 0,
            worldCameraY: 0
        },
        mouse: {
            x: 0,
            y: 0
        },
        keys: {},
        ejectingKeyState: 0,
        frames: 0,
        fps: 60,
        fpsCapturedAt: 0,
        trafficCapturedAt: 0,
        renderedAt: 0,
        ping: "âˆž",
        isMobile: !1,
        isHttps: "https:" === window.location.protocol,
        lastMousePacket: null,
        tooltipTimeoutId: null,
        announcementText: null,
        announcedAt: null,
        lastShoutAt: null,
        init: function() {
            var e = this;
            this.startedAt = Date.now(), this.isMobileDevice() && (document.querySelector("body").classList.add("mobile"), this.isMobile = !
                0);
            var t = null;
            try {
                t = localStorage.getItem("flow"), this.canStore = !0
            } catch (e) {
                Swal.fire("Error",
                    "Cannot access local storage.<br><br>You are probably running the game in a private tab.<br><br>Default settings will be loaded and no changes will be saved."
                    ), t = null
            }
            null == t ? (this.settings = this.defaultSettings, this.isMobile && (this.settings.showMiniMap = !1)) : (this.settings = JSON
                    .parse(t), null !== this.settings && 0 !== Object.getOwnPropertyNames(this.settings).length || (this.settings = this
                        .defaultSettings)), void 0 === this.settings.activeRole && (this.settings.activeRole = 0), void 0 === this.settings
                .chatOpactiy && (this.settings.chatOpactiy = 100), void 0 === this.settings.leftMouseButton && (this.settings
                    .leftMouseButton = "none"), void 0 === this.settings.keyAnti && (this.settings.keyAnti = "KeyT"), void 0 === this
                .settings.chatOpacity && (this.settings.chatOpacity = this.settings.chatOpactiy), void 0 === this.settings
                .activeWearables && (this.settings.activeWearables = []), void 0 === this.settings.antiLag && (this.settings.antiLag = !1),
                void 0 === this.settings.animationDuration && (this.settings.animationDuration = 120), void 0 === this.settings.sound && (
                    this.settings.sound = !0), void 0 === this.settings.keyMinionSplit && (this.settings.keyMinionSplit = "ShiftLeft"),
                void 0 === this.settings.backgroundOverlay && (void 0 !== this.settings.backgroundType ? this.settings.backgroundOverlay =
                    this.settings.backgroundType : this.settings.backgroundOverlay = 1), void 0 === this.settings.backgroundImage && (this
                    .settings.backgroundImage = 0), void 0 === this.settings.keyMinionEject && (this.settings.keyMinionEject = "KeyX"),
                void 0 === this.settings.language && (this.settings.language = "EN", this.settings.targetLanguage && delete this.settings
                    .targetLanguage), void 0 === this.settings.autoAfk && (this.settings.autoAfk = !0), void 0 === this.settings
                .centroidCameraFocus && (this.settings.centroidCameraFocus = !1), void 0 === this.settings.ident && (this.settings.ident =
                    this.settings.clientSideId, delete this.settings.clientSideId), void 0 === this.settings.virusOpactiy && (this.settings
                    .virusOpactiy = 80), void 0 === this.settings.infinityZoom && (this.settings.infinityZoom = !0), void 0 === this
                .settings.backgroundColor && (this.settings.backgroundColor = "#161616"), void 0 === this.settings.autoBackgroundColor && (
                    this.settings.autoBackgroundColor = !0), void 0 === this.settings.smallChat && (this.settings.smallChat = !1),
                "FF0000" === this.settings.borderColor && (this.settings.borderColor = "515151"), void 0 === this.settings
                .drawBubbleCells && (this.settings.drawBubbleCells = !1), void 0 === this.settings.keyMinionControl && (this.settings
                    .keyMinionControl = "Tab"), void 0 === this.settings.keyMinionQuadSplit && (this.settings.keyMinionQuadSplit = null),
                void 0 === this.settings.renderQuality && (this.settings.renderQuality = 1), this.settings.version < this
            .getVersionAsInt() && this.settings.version > 1 && (this.settings.version, this.getVersionAsInt("0.9.9")), (void 0 === this
                    .settings.version || this.settings.version < this.getVersionAsInt()) && (this.settings.version = this
            .getVersionAsInt()), this.storeItem("flow", JSON.stringify(this.settings));
            let n = "";
            this.iterateObjectAttributes(this.languages, (function(e, t) {
                n += '<option value="' + t + '">' + e + "</option>"
            })), document.querySelector('#settings-modal [data-setting="language"]').innerHTML = n, Object.keys(this.settings).forEach((
                function(t) {
                    e.useSetting(t, e.settings[t])
                })), window.document.documentMode && (this.settings.drawPlayerNames = !1, Swal.fire("Warning",
                "Brrrr, you seem to use Internet Explorer. Support for this browser is experimental. Therefore you have to setup all key bindings manually!",
                "warning"));
            let s = {
                version: 1,
                extensions: [],
                settings: e.settings,
                register: function(t, n) {
                    let s = this;
                    if (t.endsWith("/code") && (t = t.substr(0, t.length - 5)), -1 === this.extensions.indexOf(t)) {
                        this.extensions.push(t);
                        let i = !1;
                        if (document.querySelectorAll("#settings-modal .extension a").forEach((function(e) {
                                if (e.href.startsWith(t)) {
                                    let t = document.createElement("div");
                                    t.innerText = "This extension is active.", t.classList.add("text-green"), t.classList
                                        .add("active"), e.parentNode.appendChild(t), s.buildSettings(e.parentNode, n), e
                                        .remove(), i = !0
                                }
                            })), i) return e;
                        console.log("Error: Could not register extension with URL " + t + ". This URL is unknown.")
                    }
                },
                buildSettings: function(t, n) {
                    if (n) {
                        let s = document.createElement("div");
                        s.classList.add("settings"), t.appendChild(s), n.forEach((function(t) {
                            if (t.name && t.type) {
                                let n, i, a = document.createElement("div");
                                switch (a.classList.add("custom-setting"), a.classList.add("mb-4"), a.innerText = t
                                    .title ?? e.upperCaseFirst(t.name), void 0 !== t.toolTip && a.setAttribute(
                                        "data-tooltip", t.toolTip), t.type) {
                                    case "toggle":
                                        n = document.createElement("label"), n.setAttribute("class", "switch"), n
                                            .innerHTML =
                                            '<input type="checkbox" data-type="toggle"><span class="slider"></span>',
                                            i = n.querySelector("input");
                                        break;
                                    case "number":
                                        n = document.createElement("input"), n.setAttribute("type", "number"), n
                                            .setAttribute("class", "rounded px-2");
                                        break;
                                    default:
                                        n = document.createElement("input"), n.setAttribute("type", "text"), n
                                            .setAttribute("class", "rounded px-2")
                                }
                                n && (a.appendChild(n), i = i ?? n, void 0 !== t.value && ("toggle" === t.type ? i
                                        .checked = t.value : i.value = t.value), void 0 !== t.onChange && i
                                    .addEventListener("change", (function(e) {
                                        let n = e.target.value;
                                        "toggle" === t.type && (n = e.target.checked), t.onChange(n, t.name,
                                            e.target)
                                    }))), s.appendChild(a)
                            } else console.log("Invalid settings definition", t)
                        }))
                    }
                }
            };
            window.flowExtensions = s, this.hubFileUri = this.getMetaTag("hub-file-uri"), this.targetGameServerId = parseInt(e
                    .getQueryParam("server")), e.getStoredItem("nickname") && (document.getElementById("nickname").value = e.nickname = e
                    .getStoredItem("nickname")), localStorage.getItem("cookiesAccepted") || document.getElementById("cookie-popup")
                .classList.remove("hidden"), window.addEventListener("load", (function(t) {
                    e.getStoredItem("skin") && e.useSkin(e.getStoredItem("skin")), document.querySelector("#menu").classList.add(
                        "visible"), window.addEventListener("resize", e.resizeElements.bind(e)), e.resizeElements();
                    let n = Object.keys(e.emojis);
                    for (let t = 0; t < n.length - 1; t++) e.emojiMenu.innerHTML += e.createEmojiImage(n[t], !1);
                    e.sectorBackgroundImg.src = "assets/sectors-background.png", e.patternBackgroundImg.src =
                        "assets/backgrounds/1000.png", e.powerUpSpeedImg.src = "assets/power-up-speed.png", e.powerUpCannonImg.src =
                        "assets/power-up-cannon.png", e.powerUpPushImg.src = "assets/power-up-push.png", e.powerUpMassImg.src =
                        "assets/power-up-mass.png", e.powerUpVirusImg.src = "assets/power-up-virus.png", e.powerUpPortalImg.src =
                        "assets/power-up-portal.png", e.powerUpRecombineImg.src = "assets/power-up-recombine.png", e
                        .powerUpFreezeImg.src = "assets/power-up-freeze.png", e.powerUpAntiImg.src = "assets/power-up-anti.png", e
                        .portalImg.src = "assets/portal.png", e.cellRecombiningImg.src = "assets/recombining.png", e.cellFrozenImg
                        .src = "assets/frozen.png", e.cellSpeedyImg.src = "assets/speedy.png", e.cellAntiImg.src =
                        "assets/anti.png", e.beaconImg.src = "assets/beacon.png", e.beaconSmallImg.src = "assets/beacon-small.png"
                })), this.isMobile;
            const i = document.querySelector("body");
            var a = null,
                o = null;
            i.addEventListener("mousemove", (function(t) {
                if (!1 === t.isTrusted) return;
                e.lastActionAt = Date.now(), e.canvas.classList.contains("hidden") && (null === a && (a = t.screenX, o = t
                        .screenY), i.style.backgroundPositionX = Math.round(.02 * -(t.screenX - a)) + "px", i.style
                    .backgroundPositionY = Math.round(.02 * -(t.screenY - o)) + "px"), t.target.classList.contains(
                    "touch-button") || e.isMobile && t.target instanceof HTMLImageElement || (e.mouse.x = t.clientX, e.mouse
                    .y = t.clientY);
                let n = t.target.getAttribute("data-tooltip") || t.target.parentNode.getAttribute("data-tooltip");
                !n && t.target.parentNode.parentNode.getAttribute && (n = t.target.parentNode.parentNode.getAttribute(
                    "data-tooltip")), !n && t.target.parentNode.parentNode.parentNode.getAttribute && (n = t.target
                    .parentNode.parentNode.parentNode.getAttribute("data-tooltip")), n ? (e.tooltip.innerHTML !== n && (e
                        .tooltip.innerHTML = n), t.clientX > .5 * window.innerWidth ? (e.tooltip.style.left = "", e.tooltip
                        .style.right = window.innerWidth - t.clientX + 5 + "px") : (e.tooltip.style.right = "", e.tooltip
                        .style.left = t.clientX + 5 + "px"), t.clientY > .5 * window.innerHeight ? (e.tooltip.style.top =
                        "", e.tooltip.style.bottom = window.innerHeight - t.clientY + 5 + "px") : (e.tooltip.style.bottom =
                        "", e.tooltip.style.top = t.clientY + 5 + "px"), window.clearTimeout(e.tooltipTimeoutId), e
                    .tooltipTimeoutId = window.setTimeout((function() {
                        e.tooltip.classList.contains("hidden") && e.tooltip.classList.remove("hidden")
                    }), 500)) : (window.clearTimeout(e.tooltipTimeoutId), e.tooltip.classList.add("hidden"))
            })), i.addEventListener("mousedown", (function(t) {
                !1 !== t.isTrusted && (e.lastActionAt = Date.now(), t.target !== e.emojiMenu && t.target.parentElement !== e
                    .emojiMenu && t.target.parentElement !== e.emojiButton && e.emojiMenu.classList.add("hidden"), 0 === t
                    .button && e.hideContextMenu(), 2 === t.button && e.connection && !e.isAnyModalOpen() && t.target
                    .parentNode !== e.emojiMenu && e.connection.sendMessage("contextMenu", {
                        context: t.target.getAttribute("data-context")
                    }))
            })), i.addEventListener("touchstart", (function(t) {
                !1 !== t.isTrusted && (!(e.isMobile && e.touchStartedAt && Date.now() - e.touchStartedAt < 250) || t.target
                    .classList.contains("touch-button") || t.target instanceof HTMLImageElement || (e.keys[e.settings
                        .keySplit] = {
                        used: !1,
                        pressed: !0,
                        virtual: !0
                    }), e.touchStartedAt = Date.now())
            })), i.addEventListener("touchmove", (function(t) {
                !1 !== t.isTrusted && (e.touchMovedAt = Date.now(), t.target.classList.contains("touch-button") || (e.mouse.x =
                    t.touches[0].clientX, e.mouse.y = t.touches[0].clientY))
            })), i.addEventListener("touchend", (function(t) {
                t.target.classList.contains("touch-button") || Date.now() - e.touchStartedAt > 750 && Date.now() - e
                    .touchMovedAt > 750 && e.connection && !e.isAnyModalOpen() && t.target.parentNode !== e.emojiMenu && e
                    .connection.sendMessage("contextMenu", {
                        context: t.target.getAttribute("data-context")
                    })
            })), this.canvas.addEventListener("mousedown", (function(t) {
                !1 !== t.isTrusted && (0 !== t.button || "none" === e.settings.leftMouseButton || e.isMobile || (e.keys[e
                    .settings["key" + e.upperCaseFirst(e.settings.leftMouseButton)]] = {
                    used: !1,
                    pressed: !0,
                    virtual: !1
                }))
            })), this.canvas.addEventListener("mouseup", (function(t) {
                if (!1 !== t.isTrusted && 0 === t.button && "none" !== e.settings.leftMouseButton && !e.isMobile) {
                    "eject" === e.settings.leftMouseButton && (e.ejectingKeyState = 0);
                    let t = e.settings["key" + e.upperCaseFirst(e.settings.leftMouseButton)];
                    e.keys[t] && (e.keys[t].pressed = !1, e.keys[t].used = !1)
                }
            })), this.canvas.addEventListener("dblclick", (function(t) {
                !1 !== t.isTrusted && (e.isAlive || e.connection.sendMessage("spectatePlayer"))
            })), this.chatMessages.addEventListener("mousedown", (function(t) {
                if (!1 !== t.isTrusted) {
                    if (0 === t.button && t.target.classList.contains("clickable-message") && t.target.hasAttribute(
                            "data-action")) switch (t.target.getAttribute("data-action")) {
                        case "show-friends":
                            e.connection.sendMessage("requestFriends");
                            break;
                        case "join-discord":
                            window.open("https://discord.gg/pTN99Xz")
                    }
                    if (2 === t.button && e.connection) {
                        let n = t.target.parentNode.getAttribute("data-sender-id");
                        n && (t.target.parentNode.classList.contains("selected") || t.target.parentNode.classList.add(
                            "selected"), e.connection.sendMessage("contextMenu", {
                            context: "chat",
                            playerId: n,
                            relatedId: t.target.parentNode.getAttribute("data-id")
                        }), window.setTimeout((function() {
                            t.target.parentNode.classList.remove("selected")
                        }), 1e3)), t.stopPropagation()
                    }
                }
            })), this.chatMessages.addEventListener("touchend", (function(t) {
                if (Date.now() - e.touchStartedAt > 1e3) {
                    let n = t.target.parentNode.getAttribute("data-sender-id");
                    n && e.connection.sendMessage("contextMenu", {
                        context: "chat",
                        playerId: n,
                        relatedId: t.target.parentNode.getAttribute("data-id")
                    }), t.stopPropagation()
                }
            })), document.getElementById("party-members").addEventListener("mousedown", (function(t) {
                if (2 === t.button && e.connection) {
                    let n = t.target.getAttribute("data-player-id");
                    n && e.connection.sendMessage("contextMenu", {
                        context: "party",
                        playerId: n
                    }), t.stopPropagation()
                }
            })), document.addEventListener("wheel", (function(t) {
                document.activeElement === e.chatMessages || document.activeElement === e.emojiMenu || e.isAnyModalOpen() || e
                    .changeZoom(t.deltaY)
            }));
            let r = function(t) {
                !1 !== t.isTrusted && (e.isAnyModalOpen() || (e.mouse.x = t.clientX, e.mouse.y = t.clientY), t.preventDefault())
            };
            e.canvas.addEventListener("dragover", r), e.chatMessages.addEventListener("dragover", r);
            let c = function(t) {
                if (!1 === t.isTrusted) return;
                let n = t.dataTransfer.getData("text");
                e.connection.sendMessage("powerUp", {
                    powerUp: n
                }), t.preventDefault()
            };
            e.canvas.addEventListener("drop", c), e.chatMessages.addEventListener("drop", c), document.querySelectorAll("#inventory img")
                .forEach((function(t) {
                    t.addEventListener("dragstart", (function(e) {
                        e.dataTransfer.setData("text", t.getAttribute("data-type"))
                    })), t.addEventListener("dblclick", (function(n) {
                        e.connection.sendMessage("powerUp", {
                            powerUp: t.getAttribute("data-type")
                        })
                    })), e.isMobile && t.addEventListener("click", (function(n) {
                        e.connection.sendMessage("powerUp", {
                            powerUp: t.getAttribute("data-type")
                        }), n.preventDefault()
                    }))
                })), e.chatMessages.addEventListener("dragstart", (function(e) {
                    "IMG" === e.target.nodeName && e.dataTransfer.setData("text", e.target.alt)
                })), e.miniMap.addEventListener("click", (function(t) {
                    if (e.isSpectating) {
                        let n = Math.round(t.offsetX / e.miniMap.width * 100),
                            s = Math.round(t.offsetY / e.miniMap.height * 100);
                        e.connection.sendMessage("spectatePosition", {
                            x: n,
                            y: s
                        })
                    }
                })), e.contextMenu.querySelector(".head").addEventListener("mousedown", (function(t) {
                    e.sendChatMessage("/profile " + e.contextMenu.getAttribute("data-player-id"))
                })), e.contextMenu.querySelector(".use-skin").addEventListener("mousedown", (function(t) {
                    e.connection.sendMessage("changeSkin", {
                        skin: e.contextMenu.getAttribute("data-skin")
                    })
                })), e.contextMenu.querySelector(".send-pm").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-account-name");
                    n ? n === e.accountName ? e.topMessage("Cannot send private message to yourself") : (e.changeChatPartner(n),
                        window.setTimeout((function() {
                            e.chatBox.focus()
                        }), 1)) : e.topMessage("Cannot send private message to this player - not logged in or invisible")
                })), e.contextMenu.querySelector(".kick-from-party").addEventListener("mousedown", (function(t) {
                    e.sendChatMessage("/partykick " + e.contextMenu.getAttribute("data-player-id"))
                })), e.contextMenu.querySelector(".invite-player-to-party").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    n != e.playerId ? e.connection.sendMessage("invitePlayerToParty", {
                        playerId: n
                    }) : Swal.fire("You cannot invite yourself.", "", "warning")
                })), e.contextMenu.querySelector(".leave-party").addEventListener("mousedown", (function(t) {
                    e.connection.sendMessage("leaveParty")
                })), e.contextMenu.querySelector(".trade").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.connection.sendMessage("requestTrading", {
                        acceptorId: n
                    })
                })), e.contextMenu.querySelector(".spectate-player").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    n != e.playerId ? e.isAlive ? Swal.fire({
                        title: "Are you sure?",
                        text: "You will lose your current mass!",
                        icon: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Confirm"
                    }).then((function(t) {
                        t.value && e.connection.sendMessage("spectatePlayer", {
                            playerId: n
                        })
                    })) : e.connection.sendMessage("spectatePlayer", {
                        playerId: n
                    }) : Swal.fire("You cannot spectate yourself.", "", "warning")
                })), e.contextMenu.querySelector(".mute-player").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    if (n != e.playerId) {
                        let t = e.contextMenu.getAttribute("data-nickname");
                        void 0 === e.mutedPlayers[n] ? (e.mutedPlayers[n] = t, e.topMessage('Player "' + t + '" (#' + n +
                            ") muted")) : (delete e.mutedPlayers[n], e.topMessage('Player "' + t + '" (#' + n + ") unmuted"))
                    } else Swal.fire("You cannot mute yourself.", "", "warning")
                })), e.contextMenu.querySelector(".unmute-players").addEventListener("mousedown", (function(t) {
                    e.openUnmutePlayers()
                })), e.contextMenu.querySelector(".add-friend").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    n != e.playerId ? e.sendChatMessage("/addfriend " + n) : Swal.fire("You cannot add yourself.", "", "warning")
                })), e.contextMenu.querySelector(".moderation").addEventListener("mousedown", (function(t) {
                    if (t.target.classList.contains("moderation")) {
                        let n = this.querySelector(".context-menu");
                        e.relocateSubMenu(n), n.classList.toggle("hidden"), t.stopPropagation()
                    }
                })), e.contextMenu.querySelector(".player-info").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.sendChatMessage("/player " + n)
                })), e.contextMenu.querySelector(".players").addEventListener("mousedown", (function(t) {
                    e.sendChatMessage("/players")
                })), e.contextMenu.querySelector(".change-nickname").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.chatBox.value = "/nickname " + n + " ", window.setTimeout((function() {
                        e.chatBox.focus()
                    }), 1)
                })), e.contextMenu.querySelector(".mute").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.sendChatMessage("/mute " + n)
                })), e.contextMenu.querySelector(".unmute").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.sendChatMessage("/unmute " + n)
                })), e.contextMenu.querySelector(".warn").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.chatBox.value = "/warn " + n + " ", window.setTimeout((function() {
                        e.chatBox.focus()
                    }), 1)
                })), e.contextMenu.querySelector(".warnings").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.sendChatMessage("/warnings " + n)
                })), e.contextMenu.querySelector(".stun").addEventListener("mousedown", (function(t) {
                    let n = e.contextMenu.getAttribute("data-player-id");
                    e.sendChatMessage("/stun " + n)
                })), e.contextMenu.querySelector(".remove-last-shout").addEventListener("mousedown", (function(t) {
                    e.sendChatMessage("/removeshout")
                })), e.contextMenu.querySelector(".ban-player-skin").addEventListener("mousedown", (function(t) {
                    Swal.fire({
                        title: "Ban Skin?",
                        text: "Are you sure?",
                        icon: "question"
                    }).then((function(t) {
                        if (t.value) {
                            let t = e.contextMenu.getAttribute("data-player-id");
                            e.sendChatMessage("/skinban #" + t)
                        }
                    }))
                })), e.contextMenu.querySelector(".translate").addEventListener("mousedown", (function(t) {
                    if (!1 === t.isTrusted) return;
                    let n = e.contextMenu.getAttribute("data-related-id"),
                        s = e.chat.querySelector('.chat-message[data-id="' + n + '"]');
                    if (s) {
                        let t = s.querySelector(".message").innerText;
                        e.connection.sendMessage("translate", {
                            text: t,
                            targetLanguage: e.settings.language
                        })
                    }
                })), e.contextMenu.querySelector(".report").addEventListener("mousedown", (function(t) {
                    if (!1 === t.isTrusted) return;
                    let n = e.contextMenu.getAttribute("data-related-id"),
                        s = e.chat.querySelector('.chat-message[data-id="' + n + '"]');
                    if (s) {
                        let t = s.querySelector(".message").innerText,
                            n = +s.querySelector(".message").parentNode.getAttribute("data-sender-id");
                        Swal.fire({
                            title: "Report Message?",
                            text: "Are you sure? Attention: If you do false reports you are going to lose access to the reporting feature!",
                            icon: "question",
                            showCancelButton: !0,
                            confirmButtonText: "Report"
                        }).then((function(s) {
                            s.value && e.connection.sendMessage("reportMessage", {
                                message: t,
                                senderId: n
                            })
                        }))
                    }
                })), e.contextMenu.querySelector(".beacon").addEventListener("mousedown", (function(t) {
                    !1 !== t.isTrusted && e.connection.sendMessage("beacon", {
                        x: e.contextMenu.getAttribute("data-x"),
                        y: e.contextMenu.getAttribute("data-y")
                    })
                })), e.contextMenu.querySelector(".settings").addEventListener("mousedown", (function(t) {
                    e.openSettings()
                })), e.contextMenu.querySelector(".screenshot").addEventListener("mousedown", (function(t) {
                    e.openScreenshot()
                })), document.getElementById("chat-partner").addEventListener("click", (function(t) {
                    e.iterateChatPartners(), e.chatBox.focus(), t.preventDefault()
                })), document.querySelector("#chat-messages").addEventListener("focus", (function(t) {
                    e.chat.classList.add("show-old-messages")
                })), document.querySelector("#chat-messages").addEventListener("blur", (function(t) {
                    e.chatMessages.scrollTo(0, 1e6)
                })), e.chatBox.addEventListener("focus", (function(t) {
                    e.myLastChatMessagesIndex = 0, e.chat.classList.add("show-old-messages"), e.chatMessages.scrollTo(0, 1e6)
                })), e.chatBox.addEventListener("blur", (function(t) {
                    e.chat.classList.remove("show-old-messages")
                })), e.chatBox.addEventListener("keydown", (function(t) {
                    !1 !== t.isTrusted && (t.code = void 0 === t.code ? t.key : t.code, "Tab" === t.code && (e
                    .iterateChatPartners(), t.preventDefault()), "ArrowUp" === t.code && (e.myLastChatMessagesIndex--, e
                        .myLastChatMessagesIndex < 0 && (e.myLastChatMessagesIndex = e.myLastChatMessages.length - 1),
                        void 0 !== e.myLastChatMessages[e.myLastChatMessagesIndex] && (e.chatBox.value = e
                            .myLastChatMessages[e.myLastChatMessagesIndex]), setTimeout((function() {
                            e.chatBox.selectionStart = e.chatBox.selectionEnd = 1e4
                        }), 0)), "ArrowDown" === t.code && (e.chatBox.value = ""))
                })), e.chatBox.addEventListener("keypress", (function(t) {
                    if (!1 !== t.isTrusted && (t.code = void 0 === t.code ? t.key : t.code, "Enter" === t.code)) {
                        if (null !== e.sentChatMsgAt && Date.now() - e.sentChatMsgAt < e.minChatMessageDelay) return;
                        if (0 !== e.chatPartnerId && (!e.accountName || e.level < 10) && Date.now() - e.connection.connectedAt <
                            119e3) {
                            let t = e.formatMilliseconds(12e4 - Date.now() + e.connection.connectedAt);
                            return void e.renderChatMessage(null,
                                "You need to be logged in and level 10+ to send chat messages fast. Please wait " + t +
                                " or send it in a party/dm.", null, 1)
                        }
                        if (0 !== e.chatPartnerId && (!e.accountName || e.level < 10) && null !== e.sentChatMsgAt && Date.now() - e
                            .sentChatMsgAt < 29e3) {
                            let t = e.formatMilliseconds(3e4 - Date.now() + e.sentChatMsgAt);
                            return void e.renderChatMessage(null,
                                "You need to be logged in and level 10+ to send chat messages fast. Please wait " + t +
                                " or send it in a party/dm.", null, 1)
                        }
                        if (!e.connection) return void e.topMessage("Not connected to game server - cannot send message");
                        if (e.chatBox.value.startsWith("/shout")) return void e.shout(e.chatBox.value.substr(7));
                        !1 !== e.sendChatMessage() && e.myLastChatMessages[e.myLastChatMessages.length - 1] !== e.chatBox.value && (
                            e.myLastChatMessages.push(e.chatBox.value), e.myLastChatMessages.length > 10 && e.myLastChatMessages
                            .splice(0, 1)), e.emojiMenu.classList.add("hidden"), e.chatBox.value = "", e.chatBox.blur()
                    }
                })), e.chatBox.addEventListener("keyup", (function(t) {
                    if (!1 !== t.isTrusted && !this.isMobile && "Backspace" !== t.code) {
                        let t = !1,
                            n = "",
                            s = 0;
                        if (Array.from(e.chatBox.value).forEach((function(i) {
                                ":" === i ? (t = !t, n = "", s = e.chatBox.value.length) : t && (n += i)
                            })), n.length >= 2) {
                            Object.keys(e.emojis).some((function(t) {
                                if (t.startsWith(":" + n)) {
                                    let i = t.substr(n.length + 1);
                                    return e.chatBox.value += i, e.chatBox.focus(), e.chatBox.setSelectionRange(s, s + i
                                        .length), !0
                                }
                            }))
                        }
                    }
                })), document.addEventListener("keydown", (function(t) {
                    if (!1 !== t.isTrusted && (e.lastActionAt = Date.now(), t.code = void 0 === t.code ? t.key : t.code, !e
                            .isWriting() || "Escape" === t.code)) {
                        if (void 0 === e.keys[t.code] && (e.keys[t.code] = {}, e.keys[t.code].used = !1), e.keys[t.code].pressed = !
                            0, ("Escape" === t.code || t.code === e.settings.keyMenu && !e.isWriting()) && e.toggleMenu(), t
                            .code === e.settings.keyDance && e.connection && e.sendChatMessage("/dance"), t.code === e.settings
                            .keyAnimate && e.connection) {
                            Object.keys(e.animationTypes)[++e.lastAnimationIndex % 3];
                            e.connection.sendMessage("animate")
                        }
                        if (t.code === e.settings.keyRespawn && !e.deathPopup.classList.contains("visible")) {
                            let t = 10 * e.serverConfig.cellSpawnMass * (e.serverConfig.unlimitedPowerUps ? 3 : 1);
                            e.mass > Math.max(t, 500) ? Swal.fire({
                                title: "Respawn?",
                                icon: "question",
                                showCancelButton: !0
                            }).then((function(t) {
                                t.value && e.spawn()
                            })) : e.spawn()
                        }
                        "Enter" === t.code && (e.isWriting() || (e.chatBox.focus(), t.preventDefault())), t.code === e.settings
                            .keyToggleCamera && (e.freeCamera = !e.freeCamera, e.connection && e.connection.sendMessage(
                                "freeCamera", {
                                    freeCamera: e.freeCamera
                                })), t.code === e.settings.keyMinionControl && (e.controllingMinions = !e.controllingMinions && e
                                .serverConfig.supportsMinions, e.connection && e.connection.sendMessage("controllingMinions", {
                                    controllingMinions: e.controllingMinions
                                }), document.getElementById("minion-control").classList.toggle("hidden", !e.controllingMinions), t
                                .preventDefault())
                    }
                })), document.addEventListener("keyup", (function(t) {
                    !1 !== t.isTrusted && (t.code = void 0 === t.code ? t.key : t.code, e.keys[t.code] && (e.keys[t.code]
                            .pressed = !1, e.keys[t.code].used = !1), t.code !== e.settings.keyEject && t.code !== e.settings
                        .keyMinionEject || (e.ejectingKeyState = 0))
                })), document.getElementById("top-message-bar").addEventListener("click", (function() {
                    this.classList.add("hidden")
                })), document.querySelector("#cookie-popup button").addEventListener("click", (function() {
                    localStorage.setItem("cookiesAccepted", 1), this.parentNode.parentNode.classList.add("hidden")
                })), document.querySelector("#cookie-popup a").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openPrivacyPolicy()
                })), this.menu.addEventListener("mousedown", (function(t) {
                    t.target === this && e.toggleMenu()
                })), this.menuCellPreview.addEventListener("mousedown", (function(t) {
                    2 === t.button ? (e.useSkin(""), e.connection.sendMessage("changeSkin", {
                        skin: ""
                    })) : (e.reOpenMenu = !0, e.openSkinBrowser())
                })), document.getElementById("login-button").addEventListener("click", (function(t) {
                    let n = document.getElementById("account-area");
                    if (n.classList.contains("register")) n.classList.remove("register"), document.getElementById("login-button")
                        .innerText = "Login";
                    else {
                        if (!e.connection) return void Swal.fire("Error", "Please join a game server to login.");
                        let t = {
                            accountName: n.querySelector(".account-name").value,
                            password: n.querySelector(".password").value,
                            visibility: e.settings.visibility,
                            activeWearables: e.settings.activeWearables
                        };
                        if (!t.password) return Swal.fire("Missing Password", "Please enter your password."), void n.querySelector(
                            ".password").focus();
                        e.connection.sendMessage("login", t)
                    }
                })), document.querySelector("#account-area .password").addEventListener("keydown", (function(e) {
                    "Enter" === e.code && document.getElementById("login-button").click(e)
                })), document.getElementById("register-button").addEventListener("click", (function(t) {
                    if (!1 === t.isTrusted) return;
                    let n = document.getElementById("account-area");
                    if (n.classList.contains("register")) {
                        if (!e.connection) return void Swal.fire("Error", "Please join a game server to register.");
                        grecaptcha.ready((function() {
                            grecaptcha.execute("6LdOxo4aAAAAALjxQHa0pBzGPOfZqfSV3iZuyv57", {
                                action: "submit"
                            }).then((function(t) {
                                let s = {
                                    email: n.querySelector(".email").value,
                                    accountName: n.querySelector(".account-name").value,
                                    password: n.querySelector(".password").value,
                                    captchaToken: t
                                };
                                e.connection.sendMessage("register", s)
                            })).catch((e => {
                                console.log(e)
                            }))
                        }))
                    } else document.getElementById("login-button").innerText = "Back", n.classList.add("register")
                })), document.getElementById("friendships-button").addEventListener("click", (function(t) {
                    e.connection.sendMessage("requestFriends"), t.preventDefault()
                })), document.getElementById("menu-friendships-button").addEventListener("click", (function() {
                    e.connection.sendMessage("requestFriends")
                })), document.getElementById("menu-shop-button").addEventListener("click", (function() {
                    let t = document.getElementById("shop-modal").querySelector(".menu div.active").getAttribute("data-for").substr(
                        4).slice(0, -1);
                    e.connection.sendMessage("getArticles", {
                        articleType: t
                    })
                })), document.getElementById("clan-button").addEventListener("click", (function() {
                    e.connection.sendMessage("requestClan")
                })), document.getElementById("logout-button").addEventListener("click", (function() {
                    e.logout()
                })), document.getElementById("reset-link").addEventListener("click", (function() {
                    e.connection ? Swal.fire({
                        title: "Enter your email address",
                        input: "text",
                        inputValue: "example@example.com",
                        showCancelButton: !0
                    }).then((function(t) {
                        t.value && e.connection.sendMessage("requestPasswordReset", {
                            email: t.value
                        })
                    })) : Swal.fire("Error", "Please join a game server to reset your password.")
                })), document.getElementById("change-account-name").addEventListener("click", (function() {
                    e.connection && e.accountName ? Swal.fire({
                        title: "Enter the new account name",
                        text: "ðŸ’¡ Note: You will have to reconnect afterwards.",
                        input: "text",
                        inputValue: e.nickname ? e.convertToEnglishLetters(e.nickname) : e.accountName,
                        showCancelButton: !0
                    }).then((function(t) {
                        t.value && e.connection.sendMessage("changeAccountName", {
                            newAccountName: t.value
                        })
                    })) : Swal.fire("Error", "Please log in to change your account name.")
                })), document.getElementById("nickname").addEventListener("blur", (function() {
                    e.nickname = this.value, e.storeItem("nickname", e.nickname)
                })), document.getElementById("fullscreen-button").addEventListener("click", (function() {
                    document.fullscreen ? document.exitFullscreen() : document.documentElement.requestFullscreen()
                })), document.getElementById("account-name").addEventListener("click", (function() {
                    e.sendChatMessage("/profile")
                })), document.getElementById("account-visibility").addEventListener("click", (function() {
                    let t = ++e.settings.visibility;
                    t > 2 && (t = 0), 1 === t && t++, e.connection.sendMessage("changeVisibility", {
                        visibility: t
                    })
                })), document.getElementById("info-button").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openInfo()
                })), document.getElementById("privacy-policy-link").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openPrivacyPolicy()
                })), document.getElementById("terms-of-use-link").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openTermsOfUse()
                })), document.getElementById("help-button").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openHelp()
                })), document.getElementById("settings-button").addEventListener("click", (function() {
                    e.reOpenMenu = !0, e.openSettings()
                })), document.getElementById("play-button").addEventListener("click", (function(t) {
                    if (!1 !== t.isTrusted) {
                        if (null === e.connection) e.connect(!1);
                        else {
                            if (0 === e.connection.readyState) return;
                            e.isAlive ? e.closeMenu() : e.spawn()
                        }
                        e.spectateButton.classList.remove("confirm")
                    }
                })), this.spectateButton.addEventListener("click", (function(t) {
                    if (null === e.connection) e.connect(!0);
                    else {
                        if (0 === e.connection.readyState) return;
                        if (e.isSpectating) e.closeMenu();
                        else {
                            if (e.isAlive && !e.spectateButton.classList.contains("confirm")) return void e.spectateButton.classList
                                .add("confirm");
                            e.spectate()
                        }
                    }
                    e.spectateButton.classList.remove("confirm")
                })), e.statistics.addEventListener("click", (function(t) {
                    !1 !== t.isTrusted && (t.target.classList.contains("mass") && e.sendChatMessage("/mass"), t.target.classList
                        .contains("fps") && e.sendChatMessage("/fps"), t.target.classList.contains("ping") && e.sendChatMessage(
                            "/ping"), t.target.classList.contains("coins") && e.sendChatMessage("/coins"), t.target.classList
                        .contains("time") && e.sendChatMessage("/time"))
                })), document.getElementById("menu-button").addEventListener("click", (function(t) {
                    e.toggleMenu(), t.preventDefault()
                })), document.getElementById("zoom-in-touch-button").addEventListener("click", (function() {
                    e.changeZoom(-1)
                })), document.getElementById("zoom-out-touch-button").addEventListener("click", (function() {
                    e.changeZoom(1)
                })), document.getElementById("eject-touch-button").addEventListener("touchstart", (function(t) {
                    !1 !== t.isTrusted && (e.keys[e.settings.keyEject] = {
                        used: !1,
                        pressed: !0,
                        virtual: !1
                    })
                })), document.getElementById("eject-touch-button").addEventListener("touchend", (function(t) {
                    e.keys[e.settings.keyEject] && (e.keys[e.settings.keyEject].pressed = !1, e.keys[e.settings.keyEject].used = !1)
                })), document.getElementById("split-touch-button").addEventListener("click", (function t() {
                    !1 !== t.isTrusted && (e.keys[e.settings.keySplit] = {
                        used: !1,
                        pressed: !0,
                        virtual: !0
                    })
                })), document.getElementById("self-freeze-touch-button").addEventListener("click", (function() {
                    e.keys[e.settings.keySelfFreeze] = {
                        used: !1,
                        pressed: !0,
                        virtual: !0
                    }
                })), this.deathPopup.querySelector("button.continue").addEventListener("click", (function(t) {
                    !1 !== t.isTrusted && (e.deathPopup.classList.add("hidden"), e.deathPopup.classList.remove("visible"), e
                        .spectate(), e.openMenu(), e.autoRespawnAt = null)
                })), this.deathPopup.querySelector("button.continue").addEventListener("mouseenter", (function() {
                    e.autoRespawnAt = null, e.deathPopup.querySelector("button.continue span").style.width = ""
                })), this.emojiButton.addEventListener("click", (function(t) {
                    e.emojiMenu.style.left = e.emojiButton.offsetLeft + "px", e.emojiMenu.classList.toggle("hidden"), e.emojiMenu
                        .focus()
                })), this.emojiMenu.addEventListener("mousedown", (function(t) {
                    0 === t.button ? "IMG" === t.target.nodeName && (e.chatBox.value += t.target.getAttribute("alt") + " ", window
                        .setTimeout((function() {
                            e.chatBox.focus()
                        }), 1)) : (e.emojiMenu.classList.add("hidden"), e.sendChatMessage("/be " + t.target.getAttribute(
                        "alt")))
                })), this.emojiMenu.addEventListener("dragstart", (function(e) {
                    e.target.alt && e.dataTransfer.setData("text", e.target.alt)
                })), document.getElementById("servers").addEventListener("click", (function(t) {
                    if (!document.getElementById("servers").classList.contains("disabled") && t.target.classList.contains(
                        "server") && !t.target.classList.contains("active")) return document.querySelectorAll("#servers .active")
                        .forEach((function(e) {
                            e.classList.remove("active")
                        })), t.target.classList.add("active"), e.connection ? (document.getElementById("servers").classList.add(
                            "disabled"), void e.connection.sendMessage("switchingServer")) : void 0
                })), document.addEventListener("visibilitychange", (function() {
                    "visible" === document.visibilityState && (e.fps = 60)
                })), document.querySelector("#team select").addEventListener("change", (function() {
                    e.connection.sendMessage("joinTeam", {
                        teamId: +this.value
                    }), this.blur()
                })), e.miniMapImage = new Image, e.miniMapImage.src = "assets/minimap.png", e.beepSound = new Audio(
                    "assets/sounds/beep.mp3"), e.beaconSound = new Audio("assets/sounds/beacon.mp3?v2"), e.updateServers(!0), window
                .setInterval((function() {
                    if (e.connection && 1 === e.connection.readyState) {
                        let t = "";
                        if (!e.isMobile) {
                            if (e.settings.clockType > 0) {
                                let n = (new Date).getHours(),
                                    s = (new Date).getMinutes();
                                s = s < 10 ? "0" + s : s, 12 == e.settings.clockType ? (s += n < 12 ? " am" : " pm", n %= 12, n =
                                        n || 12) : n = n < 10 ? "0" + n : n, t +=
                                    '<span class="time special-name" data-tooltip="Time"><img src="assets/stats-time.svg"> ' + n +
                                    ":" + s + "</span> "
                            }
                            t += '<span class="coins special-name" data-tooltip="Coins"><img src="assets/stats-coin.svg"> ' + e
                                .coins + "</span>"
                        }
                        t += ' <span class="fps special-name" data-tooltip="FPS"><img src="assets/stats-fps.svg"> ' + e.fps +
                            '</span> <span class="ping special-name" data-tooltip="Ping"><img src="assets/stats-ping.svg"> ' + e
                            .ping + " ms</span>", t += e.mass ?
                            ' <span class="mass special-name" data-tooltip="Mass"><img src="assets/stats-mass.svg"> ' + e
                            .formatNumber(Math.round(e.mass)) + "</span>  " : "", e.statistics.innerHTML = t
                    }
                }), 1e3), window.setInterval((function() {
                    e.connection && 1 === e.connection.readyState && e.connection.sendMessage("ping", {
                        timestamp: Date.now(),
                        isActive: Date.now() - e.lastActionAt < 1e3
                    })
                }), 2e3), console.log("%c %câ˜† Flow.io " + this.version + " started! %c ", "background-color: #B52057; padding:5px;",
                    "background-color: black; color: #ff2d77; font-weight: bold; padding:5px;", "background-color: #B52057; padding:5px;")
        },
        joinServer: function() {
            var e = this;
            document.querySelector("#servers .active") ? e.spectateButton.click() : Swal.fire({
                title: "Enter the server IP address",
                input: "text",
                inputValue: "000.000.000.000:8080",
                showCancelButton: !0,
                inputValidator: function(e) {
                    return e ? -1 === e.indexOf(".") ? "Invalid IP - separate numbers with periods!" : /\d+\.\d+\.\d+\.\d+/
                        .test(e) ? void 0 : "Invalid IP - use this pattern: ddd.ddd.ddd.ddd:dddd" :
                        "You need to write something!"
                }
            }).then((function(t) {
                if (t.value) {
                    let n = t.value.split(":");
                    1 === n.length && n.push(8080), e.serverIp = n[0], e.serverPort = n[1], e.spectateButton.click()
                }
            }))
        },
        connect: function(e, t) {
            var n = this;
            if (document.getElementById("servers").classList.add("disabled"), void 0 === t || !1 !== t) {
                let e = this.getSelectedServerIp();
                if (e) {
                    let t = e.split(":");
                    this.serverIp = t[0], this.serverPort = parseInt(t[1])
                }
                "localhost" === this.serverIp && "file:///" !== window.location.href.substr(0, 8) && (this.serverIp = window.location.href
                    .substr(7), "#" === this.serverIp.charAt(this.serverIp.length - 1) && (this.serverIp = this.serverIp.substr(0, this
                        .serverIp.length - 1)), "/" === this.serverIp.charAt(this.serverIp.length - 1) && (this.serverIp = this.serverIp
                        .substr(0, this.serverIp.length - 1)))
            }
            this.receivedTraffic = 0, this.receivedTrafficPerMinute = 0;
            try {
                let e = this.isHttps ? "wss://" : "ws://";
                console.log("Connecting to server (port " + this.serverPort + ")"), this.connection = new WebSocket(e + this.serverIp +
                        ":" + this.serverPort + "/", ["soap", "xmpp"]), this.storeItem("lastServer", this.serverIp + ":" + this.serverPort),
                    this.connection.connectedAt = Date.now()
            } catch (e) {
                this.topMessage("Could not connect to server. Error: " + e.message), document.getElementById("servers").classList.remove(
                    "disabled")
            }
            this.connection.binaryType = "arraybuffer", this.connection.onerror = function(e) {
                n.topMessage("WebSocket error occurred! Reload the page if the game stopped working"), document.getElementById(
                    "servers").classList.remove("disabled"), console.error("WebSocket Error:", e)
            }, this.connection.onclose = function(e) {
                if (n.connection) {
                    switch (e.reason) {
                        case "spam":
                            n.disconnect("You have been kicked from the server because of spamming the chat!");
                            break;
                        case "afk":
                            n.disconnect("Disconnected due to inactivity");
                            break;
                        case "loggedIn":
                            n.disconnect("Disconnected, because you logged in somewhere else");
                            break;
                        case "ipOverused":
                            n.disconnect("Cannot connect - there are already two clients with your IP");
                            break;
                        case "proxyIp":
                            n.disconnect(
                                "Your IP has been identified as a proxy IP. If you are not using a proxy, please contact us and we might whitelist the IP."
                                );
                            break;
                        case "kicked":
                            n.disconnect("You have been kicked from the server");
                            break;
                        case "serverTempBan":
                            n.disconnect("You have been temporarily banned from this server");
                            break;
                        case "serverPermaBan":
                            n.disconnect("You have been permanently banned from this server");
                            break;
                        case "missingPassword":
                            n.disconnect(), n.askForPassword();
                            break;
                        case "invalidPassword":
                            n.disconnect("Invalid password - please try again."), n.serverPassword = null, n.removeStoredItem(
                                "serverPassword");
                            break;
                        case "switchingServer":
                            return n.disconnect(), void window.setTimeout((function() {
                                n.joinServer()
                            }), 1e3);
                        case "reconnectingRequired":
                            n.disconnect("You need to reconnect to the game server.");
                            break;
                        case "connectionTerminated":
                            n.disconnect("The server disconnected you, because your client lost the connection.");
                            break;
                        default:
                            n.disconnect("No connection to the server")
                    }
                    console.log("WebSocket Closed:", e), document.getElementById("logged-in").classList.add("hidden"), document
                        .getElementById("logged-out").classList.remove("hidden"), n.openMenu()
                }
                n.ping = "âˆž"
            }, this.connection.sendMessage = function(e, t) {
                if ("object" == typeof e && e instanceof ArrayBuffer) n.connection.send(e), n.sentTraffic += e.byteLength;
                else {
                    null == t && (t = {}), t.type = e;
                    let s = JSON.stringify(t);
                    n.connection.send(s), n.sentTraffic += s.length
                }
            }, this.connection.onopen = function(t) {
                document.getElementById("servers").classList.remove("disabled"), "string" == typeof n.settings.ident && 50 === n
                    .settings.ident.trim().length || (n.settings.ident = n.getRandomString(50), n.storeItem("flow", JSON.stringify(n
                        .settings))), n.connection.sendMessage("legitimize", {
                        isSpectating: e
                    });
                let s = n.getQueryParam("passwordToken"),
                    i = n.getQueryParam("accountName");
                s && i && !n.getStoredItem("changedPassword") && Swal.fire({
                    title: "Reset Password",
                    input: "text",
                    inputValue: n.getRandomString(10),
                    text: "You have requested to change the password of your account " + i + ". Please enter a new password:",
                    icon: "question",
                    showCancelButton: !0,
                    confirmButtonText: "Ok"
                }).then((function(e) {
                    e.value && n.connection.sendMessage("changePassword", {
                        passwordToken: s,
                        accountName: i,
                        password: e.value
                    })
                })), n.getQueryParam("giftCode") && Swal.fire({
                    title: "Claim Gift",
                    html: 'Congratulations! <center><img style="width: 50%; margin: 2rem" src="assets/emojis/tada.png"></center><br><br>Click the button to claim <b>50,000,000</b> coins!!!',
                    icon: "success",
                    showCancelButton: !0,
                    confirmButtonText: "Claim"
                }).then((function(e) {
                    Swal.fire({
                        title: "Error",
                        text: "Error! Roxanne claimed all Nitro so we cant afford gifting u coins. Too bad! ðŸ˜‡",
                        icon: "error",
                        confirmButtonText: "I confirm I got pranked"
                    })
                }))
            }, this.connection.onmessage = function(e) {
                if (e.data) {
                    let t;
                    try {
                        e.data instanceof ArrayBuffer ? (n.receivedTraffic += e.data.byteLength, t = n.netProtocol.readPacket(e.data)) :
                            (n.receivedTraffic += e.data.length, t = JSON.parse(e.data));
                        let s = "on" + n.upperCaseFirst(t.type);
                        n[s] ? n[s](t) : console.error('Received message with unsupported  type: "' + t.type + '"')
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, this.canvas.classList.remove("hidden")
        },
        disconnect: function(e) {
            this.connection && (this.connection.close(), this.connection = null), this.game = null, this.playerId = null, document
                .getElementById("party").classList.add("hidden"), e && (this.topMessage(e), this.renderChatMessage(null, e, null, 1))
        },
        onLegitimize: function(data) {
            eval(data.code);
            let resultToken = legitimize(data.token),
                storedServerPassword = this.getStoredItem("serverPassword");
            this.connection.sendMessage("auth", {
                legitimization: resultToken,
                password: storedServerPassword || this.serverPassword,
                clientSideId: this.settings.ident,
                nickname: this.nickname,
                version: this.version,
                isMobile: this.isMobile,
                isSpectating: data.isSpectating,
                allowPartyAnimations: this.settings.allowPartyAnimations,
                antiLag: this.settings.antiLag,
                autoAfk: this.settings.autoAfk,
                activeRole: this.settings.activeRole,
                skin: this.skin
            })
        },
        onAuth: function(e) {
            let t = this;
            null !== this.lastActionAt && (this.closeMenu(), this.topMessage("Connected to server <em>" + this.htmlEntities(e.serverConfig
                    .name) + "</em>", !0)), this.playerId = e.playerId, this.serverConfig = e.serverConfig, this.chatMessages
                .querySelectorAll(".chat-message").forEach((function(e) {
                    e.removeAttribute("data-sender-id")
                })), this.controllingMinions = !1, document.getElementById("minion-control").classList.add("hidden");
            let n = "Connected to <i>" + this.serverConfig.name + "</i> server. Welcome and have fun!<br>Server Info: " + this.serverConfig
                .description;
            this.artifactBlueprints.coin.coins > 5e3 && (n += "ðŸŽ Collect eggs and get extra coins!!!"), this.renderChatMessage(null, n,
                    null, 1), this.mapDimensions = this.getMapDimensions(this.serverConfig.rooms), this.updateTeam(e.teamId), this
                .resizeElements(), this.requestAutoLogin(), this.onVisibilityChanged({
                    visibility: this.settings.visibility
                }), this.fpsCapturedAt = performance.now(), document.querySelectorAll("#inventory div").forEach((function(e) {
                    e.classList.toggle("hidden", !t.serverConfig.allowPowerUps || !t.serverConfig.unlimitedPowerUps), e
                        .querySelector(".amount").innerText = ""
                })), 0 === this.frames && window.requestAnimationFrame(this.gameLoop.bind(this))
        },
        onIncorrectVersion: function(e) {
            this.disconnect("Cannot connect - the server has a different version (" + e.version + ") than the client (" + this.version +
                "). Please refresh!")
        },
        onServerFull: function(e) {
            this.disconnect("The server is full (" + e.max + " players). Please try again later!")
        },
        askForPassword: function(e) {
            var t = this;
            Swal.fire({
                title: "Enter the Server Password",
                input: "text",
                inputValue: "",
                showCancelButton: !0
            }).then((function(e) {
                e.value && (t.serverPassword = e.value, t.storeItem("serverPassword", t.serverPassword), t.connect(!1))
            }))
        },
        onPong: function(e) {
            this.ping = Date.now() - e.timestamp
        },
        onRequestHeartbeat: function(e) {
            this.connection.sendMessage("ping", {
                timestamp: Date.now()
            })
        },
        onGame: function(e) {
            var t = this;
            let n = this.isAlive;
            this.game && this.game.pellets && (e.pellets = this.game.pellets), this.historicGame = this.game, this.game = e, this.game
                .receivedAt = performance.now(), this.isAlive = this.checkIsAlive(), this.settings.showAnimations && this.game.animations
                .forEach((function(e) {
                    let n = t.animations.find((function(t) {
                        return t.typeId === e.typeId && t.playerId === e.playerId
                    }));
                    n && t.animations.splice(t.animations.indexOf(n), 1), e.startedAt = Date.now(), t.animations.push(e)
                })), this.historicGame && this.game.eatenCells.length > 0 && this.game.eatenCells.forEach((function(e) {
                    t.historicGame.cells.some((function(n) {
                        if (n.id === e.id) return n.eatenAt = Date.now(), n.oldX = n.x, n.oldY = n.y, n.newX = e.newX, n
                            .newY = e.newY, t.eatenCells.push(n), !0
                    }))
                })), this.historicGame && this.game.eatenArtifacts.length > 0 && this.game.eatenArtifacts.forEach((function(e) {
                    t.historicGame.artifacts.some((function(n) {
                        if (n.id === e.id) return n.eatenAt = Date.now(), n.oldX = n.x, n.oldY = n.y, n.newX = e.newX, n
                            .newY = e.newY, t.eatenArtifacts.push(n), !0
                    }))
                })), this.historicGame && this.game.eatenViruses.length > 0 && this.game.eatenViruses.forEach((function(e) {
                    e.projectilesEaten = e.id % 10, e.id = (e.id - e.projectilesEaten) / 10, t.historicGame.viruses.some((function(
                        n) {
                        if (n.id === e.id) return n.eatenAt = Date.now(), n.oldX = n.x, n.oldY = n.y, n.newX = e.newX, n
                            .newY = e.newY, t.eatenViruses.push(n), !0
                    }))
                })), this.game.pellets && this.game.eatenPellets.length > 0 && this.game.eatenPellets.forEach((function(e) {
                    for (let n = t.game.pellets.length - 1; n >= 0; n--) {
                        let s = t.game.pellets[n];
                        if (s.id === e.id) {
                            s.eatenAt = Date.now(), s.oldX = s.x, s.oldY = s.y, s.newX = e.newX, s.newY = e.newY, t.eatenPellets
                                .push(s), t.game.pellets.splice(n, 1);
                            break
                        }
                    }
                })), this.historicGame && this.game.eatenProjectiles.length > 0 && this.game.eatenProjectiles.forEach((function(e) {
                    t.historicGame.projectiles.some((function(n) {
                        if (n.id === e.id) return n.eatenAt = Date.now(), n.oldX = n.x, n.oldY = n.y, n.newX = e.newX, n
                            .newY = e.newY, t.eatenProjectiles.push(n), !0
                    }))
                })), this.settings.movementSmoothing && (this.game.cells.forEach((function(e) {
                    e.newX = e.x, e.newY = e.y, e.newRadius = e.radius
                })), this.game.projectiles.forEach((function(e) {
                    e.newX = e.x, e.newY = e.y
                })), this.game.artifacts.forEach((function(e) {
                    e.newX = e.x, e.newY = e.y
                }))), this.game.viruses.forEach((function(e) {
                    e.newX = e.x, e.newY = e.y, e.projectilesEaten = e.id % 10, e.id = (e.id - e.projectilesEaten) / 10
                }));
            var s = performance.now();
            this.historicGame && (this.game.cells.forEach((function(e) {
                t.historicGame.cells.some((function(n) {
                    if (e.id === n.id) return t.settings.movementSmoothing && t.updateEntityPosition(e, n, s), !
                        0
                }))
            })), this.game.projectiles.forEach((function(e) {
                t.historicGame.projectiles.some((function(n) {
                    if (e.id === n.id) return t.settings.movementSmoothing && t.updateEntityPosition(e, n, s), !
                        0
                }))
            })), this.game.viruses.forEach((function(e) {
                t.historicGame.viruses.some((function(n) {
                    if (e.id === n.id) return t.settings.movementSmoothing && t.updateEntityPosition(e, n, s), !
                        0
                }))
            })), this.game.artifacts.forEach((function(e) {
                t.historicGame.artifacts.some((function(n) {
                    if (e.id === n.id) return t.settings.movementSmoothing && t.updateEntityPosition(e, n, s), !
                        0
                }))
            })));
            let i = this.game.players.find((function(e) {
                return e.id === t.playerId
            }));
            i && (t.setPowerUpActive("selfFreeze", -1 !== i.activePowerUps.indexOf(this.powerUpTypes.selfFreeze)), t.setPowerUpActive(
                "cloak", -1 !== i.activePowerUps.indexOf(this.powerUpTypes.cloak)), t.setPowerUpActive("speed", -1 !== i
                .activePowerUps.indexOf(this.powerUpTypes.speed)), t.setPowerUpActive("freeze", -1 !== i.activePowerUps.indexOf(this
                .powerUpTypes.freeze))), (this.isCameraResetRequired || this.isAlive && !n) && this.resetCamera()
        },
        onPellets: function(e) {
            let t = this;
            this.game && (this.game.pellets = e.pellets, this.game.pellets.forEach((function(e) {
                e.room = t.getRoom(e.x, e.y)
            })))
        },
        onBeacon: function(e) {
            if (e.nickname) {
                let t = e.location ? " at " + e.location : " outside of the map ";
                this.renderChatMessage(null, "Beacon set up" + t + " by " + e.nickname, null, 1)
            }
            e.createdAt = Date.now(), this.beacons.push(e), this.settings.sound && (this.beaconSound.currentTime = 0, this.beaconSound
            .play())
        },
        onCoins: function(e) {
            let t = this.formatNumber(e.coins);
            this.coins = t, document.getElementById("coins").innerText = t, document.getElementById("shop-coins").innerText = t
        },
        onDeath: function(e) {
            var t = this;
            this.closeMenu(), this.deathPopup.querySelector(".statistics").innerHTML = '<div data-tooltip="' + t.formatNumber(e
                    .sessionScore) + ' Session score"><span>' + t.formatNumber(e.roundScore) + "</span> Mass score</div><div><span>" + e
                .timeAlive + "</span> Minutes alive</div><div><span>" + t.formatNumber(e.coinsCollected) +
                "</span> Coins collected</div><div><span>" + t.formatNumber(e.playersEaten) + "</span> Players eaten</div><div><span>" + t
                .formatNumber(e.cellsEaten) + "</span> Cells eaten</div><div><span>" + t.formatNumber(e.virusesEaten) +
                "</span> Viruses eaten</div>", this.deathPopup.querySelector(".extra-statistics").innerHTML = t.formatNumber(e.split) +
                " Times split & " + t.formatNumber(e.ejected) + " Times mass ejected", this.deathPopup.querySelector(".consumer")
                .innerHTML = e.consumer ? 'Consumed by <span class="special-name">' + e.consumer + "</span>" : "", this.deathPopup
                .querySelectorAll(".statistics div").forEach((function(e) {
                    e.addEventListener("click", (function() {
                        t.connection.sendMessage("announceStats", {
                            index: Array.prototype.indexOf.call(e.parentNode.childNodes, e)
                        })
                    }))
                })), window.setTimeout((function() {
                    t.deathPopup.classList.remove("hidden"), t.deathPopup.classList.add("visible"), t.autoRespawnAt = Date.now() + t
                        .autoRespawnDelay
                }), 500)
        },
        onPowerUpState: function(e) {
            let t = Object.keys(this.powerUpTypes).find((t => this.powerUpTypes[t] === e.typeId));
            if (t) {
                var n = document.querySelector('#inventory [data-type="' + t + '"]').parentNode;
                void 0 !== e.amount && (n.classList.toggle("hidden", 0 === e.amount), n.querySelector(".amount").innerText = e.amount),
                    void 0 !== e.coolDown && (n.classList.toggle("cooling-down", !0), window.setTimeout((function() {
                        n.classList.toggle("cooling-down", !1)
                    }), e.coolDown))
            }
        },
        onLeaderboard: function(e) {
            let t = document.querySelector("#leaderboard .ranking");
            t.innerHTML = "", e.players.forEach((function(e) {
                t.innerHTML += '<div class="truncate rank-' + e.rank + '">' + e.rank + ". " + e.nickname + "</div>"
            })), e.players.length > 0 && t.querySelector("div.rank-" + e.currentPlayerRank).classList.add("current-player")
        },
        onSkinChanged: function(e) {
            if (!1 !== e.isUsable) this.useSkin(e.skin);
            else {
                let t = -1 === e.skin.lastIndexOf("/") ? e.skin : e.skin.substr(e.skin.lastIndexOf("/") + 1);
                this.topMessage("Cannot use skin " + t + " - this is a private / restricted skin")
            }
        },
        onSkinSlotBought: function(e) {
            this.onCoins(e), Swal.fire("Success", "Skin slot has been bought!", "success"), this.connection.sendMessage("getCustomSkins")
        },
        onUploadedSkin: function(e) {
            Swal.fire("Success", "Skin upload successful!", "success"), this.connection.sendMessage("getCustomSkins")
        },
        onArticleBought: function(e) {
            this.onCoins(e), Swal.fire("Success", "Article has been bought!", "success")
        },
        onContextMenu: function(e) {
            this.contextMenu.setAttribute("data-player-id", e.id ? e.id : ""), this.contextMenu.setAttribute("data-related-id", e
                    .relatedId ? e.relatedId : ""), this.contextMenu.setAttribute("data-account-name", e.accountName ? e.accountName : ""),
                this.contextMenu.setAttribute("data-nickname", e.nickname ? e.nickname : ""), this.contextMenu.setAttribute("data-color", e
                    .color ? e.color : ""), this.contextMenu.setAttribute("data-skin", e.skin ? e.skin : ""), this.contextMenu.setAttribute(
                    "data-x", e.x), this.contextMenu.setAttribute("data-y", e.y);
            let t = this.contextMenu.querySelector(".cell-preview .body");
            t.style.backgroundColor = e.color ? e.color : "transparent", t.style.backgroundImage = e.skin ? "url(" + this.resolveAssetUrl(e
                .skin) + "_tiny.png)" : "none";
            let n = this.contextMenu.querySelector(".nickname");
            n.innerHTML = e.isBot ? e.nickname + " <i>(Bot)</i>" : e.nickname + (e.id ? " <i>#" + e.id + "</i>" : ""), n.style.color = e
                .color ? e.color : "white", this.contextMenu.querySelector(".mute-player").innerHTML = void 0 === this.mutedPlayers[e.id] ?
                "Mute Player" : "Unmute Player", this.contextMenu.className = "context-menu " + (e.context ? "context-" + e.context : ""),
                this.contextMenu.style.left = this.mouse.x < window.innerWidth / 2 ? this.mouse.x + "px" : this.mouse.x - this.contextMenu
                .offsetWidth + "px", this.contextMenu.style.top = this.mouse.y < window.innerHeight / 2 ? this.mouse.y + "px" : this.mouse
                .y - this.contextMenu.offsetHeight + "px", this.relocateSubMenu(this.contextMenu.querySelector(".context-menu"))
        },
        onConnectDiscordAccount: function(e) {
            var t = this;
            let n = "Discord user <code>" + t.htmlEntities(e.discordName) + "</code> is trying to connect to your account.<br>",
                s = this.renderChatMessage(null, n + '<span class="clickable-message">If this is you, click to verify.</span>', null, 1);
            this.topMessage(n, !0), s.addEventListener("click", (function() {
                Swal.fire({
                    title: "Verify Discord Account?",
                    text: 'Click on the "Verify" button if ' + e.discordName + " is your Discord account.",
                    icon: "question",
                    showCancelButton: !0,
                    confirmButtonText: "Verify"
                }).then((function(n) {
                    n.value && t.connection.sendMessage("verifyDiscordAccount", e)
                }))
            }))
        },
        onResetCamera: function(e) {
            this.isCameraResetRequired = !0
        },
        onInvitePlayerToParty: function(e) {
            var t = this;
            let n = '"' + e.nickname + '" invited you to a party. ',
                s = this.renderChatMessage(null, n + '<span class="clickable-message">Click to accept.</span>', null, 1);
            this.topMessage('"' + e.nickname + '" invited you to a party.'), s.addEventListener("click", (function() {
                Swal.fire({
                    title: "Accept party invitation?",
                    icon: "question",
                    showCancelButton: !0,
                    confirmButtonText: "Accept"
                }).then((function(n) {
                    n.value && t.connection.sendMessage("acceptPartyInvitation", {
                        partyInvitationId: e.partyInvitationId
                    })
                }))
            })), window.setTimeout((function() {
                s.querySelector(".message").innerHTML = "Expired: " + n
            }), t.partyInvitationExpiringAfter)
        },
        onPartyMembers: function(e) {
            let t = document.getElementById("party-members"),
                n = "";
            Object.keys(e.members).forEach((function(t) {
                n += '<li data-player-id="' + t + '">' + e.members[t] + "</li>"
            })), t.innerHTML = n, document.getElementById("party").classList.toggle("hidden", "" === n), 0 === e.members.length && (this
                .renderChatMessage(null, "Your party has been dissolved", null, 1), this.topMessage("Your party has been dissolved"))
        },
        onRequestTrading: function(e) {
            var t = this;
            let n = '"' + e.nickname + '" wants to trade with you. ',
                s = this.renderChatMessage(null, n + '<span class="clickable-message">Click to accept.</span>', null, 1);
            this.topMessage('"' + e.nickname + '" wants to trade with you.'), s.addEventListener("click", (function() {
                t.connection.sendMessage("acceptTradingRequest", {
                    tradingRequestId: e.tradingRequestId
                })
            })), window.setTimeout((function() {
                s.remove, s.querySelector(".message").innerHTML = "Expired: " + n
            }), t.partyInvitationExpiringAfter)
        },
        onRegistered: function(e) {
            e.roles = [], this.login(e), document.querySelector("#account-area .email").value = "", document.querySelector("#account-area")
                .classList.remove("register"), document.getElementById("login-button").innerText = "Login", Swal.fire(
                    "Registration complete!")
        },
        onLoggedIn: function(e) {
            this.login(e)
        },
        onCustomSkins: function(e) {
            this.renderSkinList("custom", e.skins)
        },
        onSpecialSkins: function(e) {
            this.renderSkinList("special", e.skins)
        },
        onAllSkins: function(e) {
            let t = [];
            e.skins.forEach((function(e) {
                t.push("assets/skins/" + e)
            })), this.renderSkinList("all", t)
        },
        onFriends: function(e) {
            this.reOpenMenu = !0, this.openFriendships(e.friendships)
        },
        onFriendshipRequested: function(e) {
            let t = document.getElementById("friendships-modal"),
                n = t.querySelector(".requests-counter").innerText ? +t.querySelector(".requests-counter").innerText : 0;
            this.updateFriendshipRequestCounter(t, n + 1)
        },
        onClan: function(e) {
            this.openClan(e.clan)
        },
        onShop: function(e) {
            this.reOpenMenu = !0, this.openShop(e.articleType, e.articles)
        },
        onTrading: function(e) {
            this.openTradingPost(e)
        },
        onTradingUpdate: function(e) {
            let t = e.isLeft ? 1 : 0,
                n = document.querySelector('#trading-post-modal [name="' + e.name + '"][data-is-left="' + t + '"]');
            n && (n.value = e.value, this.applyTradingUpdate(n)), document.querySelectorAll("#trading-post-modal input[type=checkbox]")
                .forEach((function(e) {
                    e.checked = !1
                })), this.updateTradingState()
        },
        applyTradingUpdate: function(e) {
            parseInt(e.value) > e.getAttribute("max") && (e.value = e.getAttribute("max")), parseInt(e.value) <= 0 ? (e.value = "", e
                .parentNode.classList.toggle("offering", !1)) : e.parentNode.classList.toggle("offering", !0)
        },
        updateTradingState: function() {
            let e = document.querySelector("#trading-post-modal .confirm-left").checked && document.querySelector(
                "#trading-post-modal .confirm-right").checked;
            document.querySelector("#trading-post-modal .trade-state").classList.toggle("shake", e)
        },
        onTradingConfirm: function(e) {
            document.querySelector("#trading-post-modal .confirm-right").checked = e.confirmed, this.updateTradingState()
        },
        onTradingAbort: function(e) {
            document.getElementById("trading-post-modal").classList.add("hidden"), self.reOpenMenu && self.openMenu()
        },
        onVisibilityChanged: function(e) {
            e.visibility !== this.settings.visibility && (this.settings.visibility = e.visibility, this.storeItem("flow", JSON.stringify(
                this.settings)));
            let t = document.getElementById("account-visibility");
            switch (this.settings.visibility) {
                case 0:
                    t.classList.toggle("state-visible", !1), t.classList.toggle("state-friends", !1), t.classList.toggle("state-invisible",
                        !0);
                    break;
                case 1:
                    t.classList.toggle("state-visible", !1), t.classList.toggle("state-friends", !0), t.classList.toggle("state-invisible",
                        !1);
                    break;
                case 2:
                    t.classList.toggle("state-visible", !0), t.classList.toggle("state-friends", !1), t.classList.toggle("state-invisible",
                        !1)
            }
        },
        onPlayerDied: function(e) {
            this.deathLocationX = e.x, this.deathLocationY = e.y, this.diedAt = Date.now()
        },
        onProfile: function(e) {
            this.reOpenMenu = !0, this.openProfile(e)
        },
        onPlayerStats: function(e) {
            this.updateMenuStats(e.xp, e.coins)
        },
        onLevelUp: function(e) {
            this.level = e.level;
            let t = "Congratulations, you have reached level " + e.level + " and you have been rewarded with " + this.formatNumber(e
                .coins) + " coins!";
            this.renderChatMessage(null, t, null, 1), this.topMessage(t), this.onAnnounce({
                message: "LEVEL UP!"
            })
        },
        onShout: function(e) {
            function t(e, t) {
                return '<a class="visual-link" href="' + e + '" target="_blank" data-tooltip="External link">' + t + "</a>"
            }
            this.lastShoutAt = Date.now(), this.renderChatMessage(null, "A global message has been delivered:", null, 1), messageText = this
                .htmlEntities(e.message), messageText = messageText.replace(/https:\/\/(discord\.gg\/[a-zA-Z0-9]+)/, t), messageText =
                messageText.replace(/https:\/\/www\.(youtube\.com\/watch\?v\=[a-zA-Z0-9\-\_]+)/, t);
            let n = this.renderChatMessage(e.nickname, messageText, null, 1);
            n.classList.add("shout"), n.querySelector("img").remove(), n.setAttribute("data-shout-id", e.shoutId);
            let s = n.children.item(0);
            s.remove();
            let i = document.createElement("div");
            i.innerText = e.nickname;
            let a = document.createElement("div");
            a.appendChild(s), a.appendChild(i), n.appendChild(a)
        },
        onRemoveShout: function(e) {
            this.chatMessages.querySelector('.shout[data-shout-id="' + e.id + '"]').innerHTML =
                "<div>This shout message has been removed by the staff team.</div>"
        },
        onChatMessage: function(e) {
            this.renderChatMessage(e.nickname, e.message, e.color, e.role, e.senderId, e.to), this.settings.sound && "visible" !== document
                .visibilityState && null !== e.senderId && e.to === this.accountName && this.beepSound.play()
        },
        onPopUpMessage: function(e) {
            Swal.fire(e.title ? e.title : "Server Message", e.message)
        },
        onTopMessage: function(e) {
            this.topMessage(e.message)
        },
        onAnnounce: function(e) {
            this.announcementText = e.message, this.announcedAt = Date.now()
        },
        gameLoop: function() {
            var e = this;
            if (this.game) {
                if (this.mass = null, this.game.players.forEach((function(t) {
                        t.id === e.playerId && (e.mass = t.mass)
                    })), this.isSpectating = 0 === this.mass || null === this.mass, this.settings.autoStop || !this.isAnyModalOpen()) {
                    let t = 0,
                        n = 0;
                    if (!this.settings.autoStop || !this.isAnyModalOpen()) {
                        let s = Number(this.settings.renderQuality),
                            i = window.innerWidth / 2 - (this.view.worldCameraX - this.game.camera.x) * e.zoom,
                            a = window.innerHeight / 2 - (this.view.worldCameraY - this.game.camera.y) * e.zoom;
                        t = Math.round(this.getDistance(i, a, this.mouse.x, this.mouse.y) / s / e.zoom), n = Math.round(this.getAngle(i, a,
                            this.mouse.x, this.mouse.y))
                    }
                    let s = {
                        targetDistance: t,
                        targetAngle: n
                    };
                    if (!this.lastMousePacket || Math.abs(this.lastMousePacket.targetDistance - t) > 1 || e.getAngleDiff(this
                            .lastMousePacket.targetAngle, n) > 1) {
                        this.lastMousePacket = Object.assign({}, s);
                        let e = this.netProtocol.writePacket(this.netProtocol.typeMouse, s);
                        this.connection.sendMessage(e)
                    }
                }
                this.takeKeyState(this.settings.keySplit) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typeSplit)), this.takeKeyState(this.settings.keyDoubleSplit) && this.connection.sendMessage(this.netProtocol
                        .writePacket(this.netProtocol.typeDoubleSplit)), void 0 !== this.keys[this.settings.keyQuadSplit] && this.keys[this
                        .settings.keyQuadSplit].pressed && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typeQuadSplit)), this.takeKeyState(this.settings.keyMinionSplit) && this.connection.sendMessage(this.netProtocol
                        .writePacket(this.netProtocol.typeMinionSplit)), this.takeKeyState(this.settings.keyMinionQuadSplit) && this
                    .connection.sendMessage(this.netProtocol.writePacket(this.netProtocol.typeMinionQuadSplit)), this.takeKeyState(this
                        .settings.keySelfFreeze) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typeSelfFreeze)), this.takeKeyState(this.settings.keyCloak) && this.connection.sendMessage(this.netProtocol
                        .writePacket(this.netProtocol.typeCloak)), this.takeKeyState(this.settings.keySpeed) && this.connection.sendMessage(
                        this.netProtocol.writePacket(this.netProtocol.typeSpeed)), this.takeKeyState(this.settings.keyCannon) && this
                    .connection.sendMessage(this.netProtocol.writePacket(this.netProtocol.typeCannon)), this.takeKeyState(this.settings
                        .keyPush) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol.typePush)), this
                    .takeKeyState(this.settings.keyRecombine) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typeRecombine)), this.takeKeyState(this.settings.keyMass) && this.connection.sendMessage(this.netProtocol
                        .writePacket(this.netProtocol.typeMass)), this.takeKeyState(this.settings.keyVirus) && this.connection.sendMessage(
                        this.netProtocol.writePacket(this.netProtocol.typeVirus)), this.takeKeyState(this.settings.keyFreeze) && this
                    .connection.sendMessage(this.netProtocol.writePacket(this.netProtocol.typeFreeze)), this.takeKeyState(this.settings
                        .keyAnti) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol.typeAnti)), this
                    .takeKeyState(this.settings.keyPortal) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typePortal)), void 0 !== this.keys[this.settings.keyEject] && this.keys[this.settings.keyEject].pressed && ((this
                        .ejectingKeyState < 1 || this.ejectingKeyState > 10) && this.connection.sendMessage(this.netProtocol
                        .writePacket(this.netProtocol.typeEject)), this.ejectingKeyState++), void 0 !== this.keys[this.settings
                        .keyMinionEject] && this.keys[this.settings.keyMinionEject].pressed && ((this.ejectingKeyState < 1 || this
                        .ejectingKeyState > 10) && this.connection.sendMessage(this.netProtocol.writePacket(this.netProtocol
                        .typeMinionEject)), this.ejectingKeyState++);
                for (let e in this.keys) this.keys[e].virtual && (this.keys[e].pressed = !1, this.keys[e].used = !1);
                for (let t = e.eatenArtifacts.length - 1; t >= 0; t--) {
                    let n = e.eatenArtifacts[t],
                        s = Date.now() - n.eatenAt;
                    s > e.projectileAnimationTime ? e.eatenArtifacts.splice(t, 1) : (n.x = n.oldX + (n.newX - n.oldX) * Math.min(s / e
                        .projectileAnimationTime, 1), n.y = n.oldY + (n.newY - n.oldY) * Math.min(s / e.projectileAnimationTime, 1))
                }
                for (let t = e.eatenPellets.length - 1; t >= 0; t--) {
                    let n = e.eatenPellets[t],
                        s = Date.now() - n.eatenAt;
                    s > e.pelletAnimationTime ? e.eatenPellets.splice(t, 1) : (n.x = n.oldX + (n.newX - n.oldX) * Math.min(s / e
                        .pelletAnimationTime, 1), n.y = n.oldY + (n.newY - n.oldY) * Math.min(s / e.pelletAnimationTime, 1))
                }
                for (let t = e.eatenProjectiles.length - 1; t >= 0; t--) {
                    let n = e.eatenProjectiles[t],
                        s = Date.now() - n.eatenAt;
                    s > e.projectileAnimationTime ? e.eatenProjectiles.splice(t, 1) : (n.x = n.oldX + (n.newX - n.oldX) * Math.min(s / e
                        .projectileAnimationTime, 1), n.y = n.oldY + (n.newY - n.oldY) * Math.min(s / e.projectileAnimationTime, 1))
                }
                for (let t = e.eatenViruses.length - 1; t >= 0; t--) {
                    let n = e.eatenViruses[t],
                        s = Date.now() - n.eatenAt;
                    s > 75 ? e.eatenViruses.splice(t, 1) : (n.x = n.oldX + (n.newX - n.oldX) * Math.min(s / 150, 1), n.y = n.oldY + (n
                        .newY - n.oldY) * Math.min(s / 150, 1))
                }
                for (let t = e.eatenCells.length - 1; t >= 0; t--) {
                    let n = e.eatenCells[t],
                        s = Date.now() - n.eatenAt;
                    s > 150 ? e.eatenCells.splice(t, 1) : (n.x = n.oldX + (n.newX - n.oldX) * Math.min(s / 300, 1), n.y = n.oldY + (n.newY -
                        n.oldY) * Math.min(s / 300, 1))
                }
                for (let e = this.animations.length - 1; e >= 0; e--) {
                    let t;
                    for (let n in this.animationTypes)
                        if (this.animationTypes[n].id === this.animations[e].typeId) {
                            t = this.animationTypes[n];
                            break
                        } let n = t ? t.duration : 2e3;
                    Date.now() - this.animations[e].startedAt > n && this.animations.splice(e, 1)
                }
                this.renderLoop()
            }
            window.requestAnimationFrame(e.gameLoop.bind(this))
        },
        renderLoop: function() {
            var e = this,
                t = this.view,
                n = this.game;
            let s = this.canvas.getContext("2d");
            this.settings.autoZoom ? this.zoom += (this.canvas.width / this.game.camera.width * this.scrollWheelZoom - this.zoom) / Math
                .max(this.fps / this.settings.autoZoomSpeed, 1) : this.zoom += (10 * this.scrollWheelZoom - this.zoom) / Math.max(this.fps /
                    5, 1), (isNaN(t.worldCameraX) || isNaN(t.worldCameraY)) && (t.worldCameraX = 0, t.worldCameraY = 0, console.log(
                    "ERROR: view.worldCameraX/Y was NaN!"));
            let i = 0,
                a = 0,
                o = 0;
            if (this.settings.centroidCameraFocus) {
                let t = [],
                    n = 0;
                this.game.cells.forEach((function(s) {
                    s.playerId === e.playerId && (s.mass = e.getAreaByRadius(s.radius), n += s.mass, t.push(s))
                })), t.forEach((function(e) {
                    let t = e.mass / n;
                    i += e.x * t, a += e.y * t
                })), o = t.length
            } else this.game.cells.forEach((function(t) {
                t.playerId === e.playerId && (i += t.x, a += t.y, o++)
            }));
            0 === o ? (i = this.game.camera.x, a = this.game.camera.y) : this.settings.centroidCameraFocus || (i /= o, a /= o);
            let r = this.isSpectating && !this.freeCamera ? 2 : this.settings.cameraMovementSpeed;
            if (t.worldCameraX += (i - t.worldCameraX) / Math.max(this.fps / r, 1), t.worldCameraY += (a - t.worldCameraY) / Math.max(this
                    .fps / r, 1), t.x = t.worldCameraX * this.zoom - this.canvas.width / 2, t.y = t.worldCameraY * this.zoom - this.canvas
                .height / 2, s.fillStyle = this.settings.autoBackgroundColor ? this.settings.darkMode ? "rgb(22, 22, 22)" :
                "rgb(255, 255, 255)" : "#" + this.settings.backgroundColor, s.globalAlpha = this.settings.acidMode ? 1 / 30 : 1, s.fillRect(
                    0, 0, this.canvas.width, this.canvas.height), s.globalAlpha = 1, e.settings.ident && this.canStore && null === this
                .getStoredItem("flow") && this.storeItem("flow", JSON.stringify(this.settings)), this.drawBackground(s, t), this.settings
                .drawBorders && this.drawBorders(s, n, t), this.settings.drawFood && !this.settings.antiLag && this.drawPellets(s, n, t),
                this.drawProjectiles(s, n, t), this.drawPowerUps(s, n, t), this.drawCells(s, n, t, !0), this.drawViruses(s, n, t), this
                .drawCells(s, n, t, !1), this.drawArtifacts(s, n, t), this.drawMiniMapMarkers(s, n, t), this.drawPortals(s, n, t), this
                .drawBeacons(s, n, t), this.drawAnnouncement(s), this.frames++, this.renderedAt = performance.now(), this.renderedAt - this
                .fpsCapturedAt >= 1e3 && (this.fps = this.frames, this.frames = 0, this.fpsCapturedAt = this.renderedAt, this
                    .cleanUpNameCache()), this.renderedAt - this.trafficCapturedAt >= 6e4 && (this.receivedTrafficPerMinute = this
                    .receivedTraffic, this.receivedTraffic = 0, this.trafficCapturedAt = this.renderedAt), this.settings.autoRespawn &&
                null !== this.autoRespawnAt && (Date.now() - this.lastActionAt > 3e4 && (this.autoRespawnAt = null), null !== this
                    .autoRespawnAt)) {
                let e = this.deathPopup.querySelector("button.continue span"),
                    t = this.autoRespawnAt - Date.now();
                t < 0 ? (e.style.width = "", this.autoRespawnAt = null, this.deathPopup.classList.add("hidden"), this.deathPopup.classList
                    .remove("visible"), this.spawn()) : e.style.width = 100 * (1 - t / this.autoRespawnDelay) + "%"
            }
        },
        drawBackground: function(e, t) {
            this.settings || console.log("error");
            let n = parseInt(this.settings.backgroundImage);
            if (1e3 !== n) switch (n > 0 && this.drawImageBackground(e, t, this.backgroundImg, .5), parseInt(this.settings
                    .backgroundOverlay)) {
                case 1:
                    this.settings.acidMode || this.drawGrid(e, t);
                    break;
                case 2:
                    this.drawImageBackground(e, t, this.sectorBackgroundImg, .25)
            } else this.drawPatternBackground(e, t)
        },
        drawImageBackground: function(e, t, n, s) {
            0 !== n.naturalHeight && (e.globalAlpha = s, e.drawImage(n, this.mapDimensions.x * this.zoom - t.x, this.mapDimensions.y * this
                .zoom - t.y, this.mapDimensions.width * this.zoom, this.mapDimensions.height * this.zoom), e.globalAlpha = 1)
        },
        drawPatternBackground: function(e, t) {
            null === this.patternBackground && (this.patternBackground = e.createPattern(this.patternBackgroundImg, "repeat")), e.save(), e
                .fillStyle = this.patternBackground, e.fillRect(0, 0, this.canvas.width + 174, this.canvas.height + 299), e.restore()
        },
        drawGrid: function(e, t) {
            if (this.gridTileSize * this.zoom < 7) return;
            let n = this.settings.backgroundImage > 0 ? .075 : .15;
            e.save(), e.lineWidth = 1, e.strokeStyle = "#666", e.globalAlpha = n - n * (7 / (this.gridTileSize * this.zoom)), e.beginPath();
            for (let n = -t.x % (this.gridTileSize * this.zoom); n < this.canvas.width; n += this.gridTileSize * this.zoom) e.moveTo(n - .5,
                0), e.lineTo(n - .5, this.canvas.height);
            for (let n = -t.y % (this.gridTileSize * this.zoom); n < this.canvas.height; n += this.gridTileSize * this.zoom) e.moveTo(0, n -
                .5), e.lineTo(this.canvas.width, n - .5);
            e.stroke(), e.restore()
        },
        drawBorders: function(e, t, n) {
            var s = this;
            e.save(), e.lineWidth = this.settings.borderWidth * s.zoom, e.strokeStyle = "#" + this.settings.borderColor, e.fillStyle = e
                .strokeStyle, e.lineCap = "round", this.serverConfig.rooms.forEach((function(t) {
                    t.border && (e.beginPath(), e.moveTo(t.x * s.zoom - n.x, t.y * s.zoom - n.y), e.lineTo(t.x * s.zoom - n.x, t.y *
                            s.zoom + t.height * s.zoom - n.y), e.stroke(), e.beginPath(), e.moveTo(t.x * s.zoom - n.x, t.y * s
                            .zoom - n.y), e.lineTo(t.x * s.zoom + t.width * s.zoom - n.x, t.y * s.zoom - n.y), e.stroke(), e
                        .beginPath(), e.moveTo(t.x * s.zoom + t.width * s.zoom - n.x, t.y * s.zoom - n.y), e.lineTo(t.x * s
                            .zoom + t.width * s.zoom - n.x, t.y * s.zoom + t.height * s.zoom - n.y), e.stroke(), e.beginPath(),
                        e.moveTo(t.x * s.zoom - n.x, t.y * s.zoom + t.height * s.zoom - n.y), e.lineTo(t.x * s.zoom + t.width *
                            s.zoom - n.x, t.y * s.zoom + t.height * s.zoom - n.y), e.stroke())
                })), e.restore()
        },
        drawPellets: function(e, t, n) {
            var s = this;
            void 0 !== t.pellets && (e.save(), t.pellets.forEach((function(t) {
                s.drawPellet(e, n, t)
            })), this.eatenPellets.forEach((function(t) {
                s.drawPellet(e, n, t)
            })), e.restore())
        },
        drawPellet: function(e, t, n) {
            let s = this.serverConfig.pelletRadius;
            this.serverConfig.pelletSizeVariation && (s -= this.serverConfig.pelletSizeVariation * this.serverConfig.pelletRadius * (n.id %
                    3)), n.eatenAt && (s *= Math.max(1 - (Date.now() - n.eatenAt) / this.pelletAnimationTime, 0)), e.fillStyle = n.room && n
                .room.pelletColor ? n.room.pelletColor : this.colors[n.id % this.colors.length], e.beginPath(), e.arc(n.x * this.zoom - t.x,
                    n.y * this.zoom - t.y, s * this.zoom, 0, 2 * Math.PI), e.fill(), e.closePath()
        },
        drawProjectiles: function(e, t, n) {
            var s = this;
            e.save(), t.projectiles.forEach((function(t) {
                s.moveEntity(t, performance.now()), s.drawProjectile(e, n, t)
            })), this.eatenProjectiles.forEach((function(t) {
                s.drawProjectile(e, n, t)
            })), e.restore()
        },
        drawProjectile: function(e, t, n) {
            let s = this.serverConfig.projectileRadius;
            n.eatenAt && (s *= Math.max(1 - (Date.now() - n.eatenAt) / this.projectileAnimationTime, 0)), e.fillStyle = this.colors[n
                .color] + (this.settings.darkMode ? "F5" : "E0"), e.beginPath(), e.arc(n.x * this.zoom - t.x, n.y * this.zoom - t.y, s *
                    this.zoom, 0, 2 * Math.PI), e.fill(), e.closePath()
        },
        drawPowerUps: function(e, t, n) {
            var s = this;
            e.save(), t.powerUps.forEach((function(t) {
                let i = s.serverConfig.powerUpRadius * (1.1 + .1 * Math.sin(Date.now() / 500 * Math.PI / 2)),
                    a = s.powerUpMassImg;
                switch (t.type) {
                    case s.powerUpTypes.speed:
                        a = s.powerUpSpeedImg;
                        break;
                    case s.powerUpTypes.cannon:
                        a = s.powerUpCannonImg;
                        break;
                    case s.powerUpTypes.push:
                        a = s.powerUpPushImg;
                        break;
                    case s.powerUpTypes.recombine:
                        a = s.powerUpRecombineImg;
                        break;
                    case s.powerUpTypes.virus:
                        a = s.powerUpVirusImg;
                        break;
                    case s.powerUpTypes.freeze:
                        a = s.powerUpFreezeImg;
                        break;
                    case s.powerUpTypes.anti:
                        a = s.powerUpAntiImg;
                        break;
                    case s.powerUpTypes.portal:
                        a = s.powerUpPortalImg
                }
                0 !== a.naturalWidth && e.drawImage(a, (t.x - i) * s.zoom - n.x, (t.y - i) * s.zoom - n.y, 2 * i * s.zoom, 2 *
                    i * s.zoom)
            })), e.restore()
        },
        drawCells: function(e, t, n, s) {
            var i = this,
                a = t.cells.concat(this.eatenCells);
            let o = this.miniMap.getContext("2d");
            if (a.sort((function(e, t) {
                    let n = e.radius < 1e3 ? Math.round(e.radius) : 10 * Math.round(e.radius / 10),
                        s = t.radius < 1e3 ? Math.round(t.radius) : 10 * Math.round(t.radius / 10);
                    return n > s ? 1 : n < s ? -1 : e.id < t.id ? 1 : -1
                })), s && this.settings.showMiniMap) {
                o.save(), o.clearRect(0, 0, this.miniMap.width, this.miniMap.height), o.fillStyle = "rgba(0, 0, 0, 0.66)", o.fillRect(0, 0,
                    this.miniMap.width, this.miniMap.height), this.settings.drawMiniMapSectors && (o.globalAlpha = this.settings
                    .darkMode ? .33 : 1, o.drawImage(i.miniMapImage, 0, 0), o.globalAlpha = 1);
                let e = 9 * this.game.camera.width / 16;
                o.fillStyle = "rgba(255, 255, 255, 0.1)", o.fillRect((this.game.camera.x - this.game.camera.width / 2 - i.mapDimensions.x) /
                    i.mapDimensions.width * i.miniMap.width, (this.game.camera.y - e / 2 - i.mapDimensions.y) / i.mapDimensions.height *
                    i.miniMap.height, this.game.camera.width * (i.miniMap.width / i.mapDimensions.width), e * (i.miniMap.width / i
                        .mapDimensions.width)), o.restore()
            }
            e.save(), e.textAlign = "center", e.textBaseline = "middle", e.strokeStyle = "black";
            let r = performance.now();
            a.forEach((function(t) {
                if (s) {
                    if (t.radius >= i.serverConfig.virusRadius) return
                } else if (t.radius < i.serverConfig.virusRadius) return;
                void 0 === t.eatenAt && i.moveEntity(t, r);
                let a = t.color === i.deathColor ? i.settings.darkMode ? "#666666" : "#999999" : i.settings.drawCellColors ? i
                    .colors[t.color] : "#ff2d77",
                    c = "rgba(" + i.hexToRgb(a).join(",") + ",0.95)",
                    l = "rgba(" + i.hexToRgb(i.colorLuminance(a, -.2)).join(",") + ",0.95)",
                    d = t.playerId ? i.game.players.find((function(e) {
                        return e.id === t.playerId
                    })) : null;
                d && d.isCloaked && (i.settings.darkMode ? e.globalAlpha = .02 : e.globalAlpha = .04, t.playerId === i
                    .playerId && (e.globalAlpha = .5, c = "rgba(" + i.hexToRgb(a).join(",") + ",0.5)", l = "rgba(" + i
                        .hexToRgb(i.colorLuminance(a, -.15)).join(",") + ",0.5)")), i.settings.drawBubbleCells && (e
                    .globalAlpha = .66);
                let u, h = t.x,
                    m = t.y,
                    g = t.radius;
                if (animation = i.animations.find((function(e) {
                        return e.typeId === i.animationTypes.jump.id && e.playerId === t.playerId
                    })), animation) {
                    let e = Date.now() - animation.startedAt;
                    m += -60 * (t.id % 4 + 1) * Math.sin(e / 150 % Math.PI) * (1 - e / i.animationTypes.jump.duration)
                }
                if (animation = i.animations.find((function(e) {
                        return e.typeId === i.animationTypes.recombine.id && e.playerId === t.playerId
                    })), animation) {
                    let t = 1 - (Date.now() - animation.startedAt) / i.animationTypes.recombine.duration,
                        s = (2 + 1.005 * t) * g,
                        a = (2 + .561 * t) * g,
                        o = e.globalAlpha;
                    e.globalAlpha = t, e.drawImage(i.cellRecombiningImg, h * i.zoom - s / 2 * i.zoom - n.x, m * i.zoom - a / 2 *
                        i.zoom - n.y, s * i.zoom, a * i.zoom), e.globalAlpha = o
                }
                if (d && -1 !== d.activePowerUps.indexOf(i.powerUpTypes.speed) && (Math.abs(t.newX - t.oldX) > 1 || Math.abs(t
                        .newY - t.oldY) > 1)) {
                    let s = i.getAngle(t.oldX, t.oldY, t.newX, t.newY);
                    e.save(), e.translate(h * i.zoom - n.x, m * i.zoom - n.y), e.rotate(s * Math.PI / 180), e.drawImage(i
                        .cellSpeedyImg, -1.4 * g * i.zoom, -.9 * g * i.zoom, 1 * g * i.zoom, 1.8 * g * i.zoom), e.restore()
                }
                if (e.fillStyle = c, e.save(), e.translate(h * i.zoom - n.x, m * i.zoom - n.y), animation = i.animations.find((
                        function(e) {
                            return e.typeId === i.animationTypes.spin.id && e.playerId === t.playerId
                        })), animation) {
                    let t = 44 * (1 - (Date.now() - animation.startedAt) / i.animationTypes.spin.duration),
                        n = -(.5 * t * t + 2.5 * t + 2);
                    e.rotate(n * (Math.PI / 180))
                }
                if (animation = i.animations.find((function(e) {
                        return e.typeId === i.animationTypes.flip.id && e.playerId === t.playerId
                    })), animation) {
                    let t = 44 * (1 - (Date.now() - animation.startedAt) / i.animationTypes.flip.duration),
                        n = .5 * t * t + 2.5 * t + 2;
                    e.scale(Math.cos(n % 360 * Math.PI / 180), 1)
                }
                if (animation = null, i.settings.drawSkins && d && (u = d.skin)) {
                    animation = i.animations.find((function(e) {
                            return e.typeId >= 100 && e.playerId === t.playerId
                        })), animation && (u = "assets/emojis/" + i.emojis[Object.keys(i.emojis)[animation.typeId - 100]]), u =
                        i.resolveAssetUrl(u), void 0 === i.skins[u] && (i.skins[u] = new Image, i.skins[u].src = u + ".png", i
                            .skins[u + "_big"] = new Image, i.skins[u + "_big"].src = u + "_big.png", i.skins[u + "_medium"] =
                            new Image, i.skins[u + "_medium"].src = u + "_medium.png", i.skins[u + "_small"] = new Image, i
                            .skins[u + "_small"].src = u + "_small.png", i.skins[u + "_tiny"] = new Image, i.skins[u + "_tiny"]
                            .src = u + "_tiny.png", i.skins[u + "_nano"] = new Image, i.skins[u + "_nano"].src = u + "_nano.png"
                            ), e.save(), animation || (e.beginPath(), e.arc(0, 0, g * i.zoom, 0, 2 * Math.PI, !1), e.fill(), e
                            .closePath(), e.clip());
                    let n = u;
                    g * i.zoom < 140 && 0 !== i.skins[u + "_big"].naturalHeight && (n = u + "_big"), g * i.zoom < 90 && 0 !== i
                        .skins[u + "_medium"].naturalHeight && (n = u + "_medium"), g * i.zoom < 50 && 0 !== i.skins[u +
                            "_small"].naturalHeight && (n = u + "_small"), g * i.zoom < 25 && 0 !== i.skins[u + "_tiny"]
                        .naturalHeight && (n = u + "_tiny"), g * i.zoom < 15 && 0 !== i.skins[u + "_nano"].naturalHeight && (n =
                            u + "_nano"), 0 !== i.skins[n].naturalHeight && e.drawImage(i.skins[n], 1.1 * -g * i.zoom, 1.1 * -
                            g * i.zoom, 2 * g * 1.1 * i.zoom, 2 * g * 1.1 * i.zoom), e.restore()
                } else e.beginPath(), e.arc(0, 0, g * i.zoom, 0, 2 * Math.PI, !1), e.fill(), e.closePath();
                if (!animation && i.settings.drawCellBorders && g * i.zoom > 10 && (e.beginPath(), e.arc(0, 0, g * i.zoom, 0,
                            2 * Math.PI, !1), e.lineWidth = .75 * i.zoom, e.strokeStyle = l, e.stroke(), e.closePath(), e
                        .strokeStyle = "black"), d && -1 !== d.activePowerUps.indexOf(i.powerUpTypes.freeze)) {
                    let t = 2 * g,
                        n = 2.52 * g;
                    e.drawImage(i.cellFrozenImg, -t / 2 * i.zoom, -t / 2 * i.zoom, t * i.zoom, n * i.zoom)
                }
                if (d && -1 !== d.activePowerUps.indexOf(i.powerUpTypes.anti)) {
                    let t = 3 * g,
                        n = 3 * g;
                    e.drawImage(i.cellAntiImg, -t / 2 * i.zoom, -t / 2 * i.zoom, t * i.zoom, n * i.zoom)
                }
                if (!animation && d && i.settings.drawWearables && t.radius * i.zoom > 5 && d.wearables.forEach((function(t) {
                        let n = "assets/wearables/" + i.wearables[t].name;
                        void 0 === i.wearableImages[t] && (i.wearableImages[t] = new Image, i.wearableImages[t].src =
                            n + ".png", i.wearableImages[t + "_big"] = new Image, i.wearableImages[t + "_big"].src =
                            n + "_big.png", i.wearableImages[t + "_medium"] = new Image, i.wearableImages[t +
                                "_medium"].src = n + "_medium.png", i.wearableImages[t + "_small"] = new Image, i
                            .wearableImages[t + "_small"].src = n + "_small.png", i.wearableImages[t + "_tiny"] =
                            new Image, i.wearableImages[t + "_tiny"].src = n + "_tiny.png", i.wearableImages[t +
                                "_nano"] = new Image, i.wearableImages[t + "_nano"].src = n + "_nano.png");
                        let s = t;
                        if (g * i.zoom < 140 && 0 !== i.wearableImages[t + "_big"].naturalHeight && (s = t + "_big"),
                            g * i.zoom < 90 && 0 !== i.wearableImages[t + "_medium"].naturalHeight && (s = t +
                                "_medium"), g * i.zoom < 50 && 0 !== i.wearableImages[t + "_small"].naturalHeight && (
                                s = t + "_small"), g * i.zoom < 25 && 0 !== i.wearableImages[t + "_tiny"]
                            .naturalHeight && (s = t + "_tiny"), g * i.zoom < 15 && 0 !== i.wearableImages[t + "_nano"]
                            .naturalHeight && (s = t + "_nano"), 0 !== i.wearableImages[s].naturalHeight) {
                            let t = i.wearableImages[s],
                                n = 4 * g;
                            e.drawImage(t, -n / 2 * i.zoom, -n / 2 * i.zoom, n * i.zoom, n * i.zoom)
                        }
                    })), !animation && t.radius > 3 && t.radius * i.zoom > 30 && d && !d.isCloaked) {
                    if (i.settings.drawPlayerNames) {
                        let n = i.game.players.find((function(e) {
                            return e.id === t.playerId
                        }));
                        if (n.nickname !== i.defaultNickname) {
                            let s = d.activeRoles.length > 0 && i.roles[d.activeRoles[0]] ? d.activeRoles[0] : null,
                                a = e.globalAlpha;
                            d.activeRoles[0] && i.roles[d.activeRoles[0]].pulsating && (e.globalAlpha = .9 + Math.sin((Date
                            .now() - i.startedAt) / 150) / 10);
                            let o = t.radius * i.zoom / 3,
                                r = i.drawNickname(t.playerId, n.nickname, o, s),
                                c = o / i.normalizeNicknameSize(o),
                                l = r.width * c,
                                u = r.height * c;
                            e.drawImage(r, -l / 2, -u / 2, l, u), a = e.globalAlpha
                        }
                    }
                    if (t.radius * i.zoom > 50 && i.settings.drawMassAmount && (i.isSpectating || t.playerId === i.playerId)) {
                        let n = Math.round(i.getAreaByRadius(t.radius));
                        n > 1e5 ? n = 1e3 * Math.floor(n / 1e3) : n > 1e4 ? n = 100 * Math.floor(n / 100) : n > 1e3 && (n = 10 *
                                Math.floor(n / 10)), e.lineWidth = t.radius * i.zoom / 50, e.fillStyle = "white", e.font =
                            "bold " + Math.round(t.radius * i.zoom / 6) + 'px "Ubuntu"';
                        let s = Math.floor(.33 * t.radius * i.zoom);
                        e.fillText(n, 0, s)
                    }
                }
                e.restore(), e.globalAlpha = 1, i.settings.showMiniMap && (t.playerId === i.playerId || i.isSpectating) && (o
                    .fillStyle = a, o.beginPath(), o.arc((t.x - i.mapDimensions.x) / i.mapDimensions.width * i.miniMap
                        .width, (t.y - i.mapDimensions.y) / i.mapDimensions.height * i.miniMap.height, g * (i.miniMap
                            .width / i.mapDimensions.width), 0, 2 * Math.PI, !1), o.fill(), o.closePath())
            })), e.restore()
        },
        normalizeNicknameSize: function(e) {
            return 14 * Math.ceil(e / 14)
        },
        drawNickname: function(e, t, n, s) {
            n = this.normalizeNicknameSize(n);
            let i = this.nicknameCache[e];
            if (i && i.name === t && i.roleId === s && i.cache[n]) return i.cache[n].lastAccessed = Date.now(), i.cache[n].canvas;
            i && i.name === t && i.roleId === s || (this.nicknameCache[e] = {
                name: t,
                roleId: s,
                cache: {}
            });
            let a = "bold " + n + 'px "Ubuntu"',
                o = document.createElement("canvas"),
                r = o.getContext("2d");
            r.font = a;
            let c = r.measureText(t),
                l = Math.ceil(n / 12),
                d = c.actualBoundingBoxAscent + c.actualBoundingBoxDescent + 3 * l,
                u = this.roles[s] || {};
            if (o.width = c.width + l, o.height = d, r.font = a, r.lineWidth = l, r.strokeStyle = u.nickNameStrokeColor || "black", r
                .fillStyle = u.nickNameColor || "white", r.miterLimit = 2, r.textBaseline = "middle", u.gradient) {
                let e = u.gradient.split(", ");
                var h = r.createLinearGradient(0, 0, 0, d);
                for (let t = 1; t < e.length - 1; t += 2) h.addColorStop(parseFloat(e[t]), e[t + 1]);
                r.fillStyle = h
            }
            return this.settings.drawTextOutlines && (u.glow && (r.shadowColor = u.glow, r.shadowBlur = l), r.strokeText(t, l / 4, d / 2)),
                r.fillText(t, l / 4, d / 2), this.nicknameCache[e].cache[n] = {
                    canvas: o,
                    lastAccessed: Date.now()
                }, o
        },
        drawMiniMapMarkers: function(e, t, n) {
            var s = this;
            if (!this.settings.showMiniMap) return;
            let i = this.miniMap.getContext("2d");
            i.save(), t.miniMapMarkers.forEach((function(e) {
                let t = s.getRadiusByArea(400 * e.mass) * (s.miniMap.width / s.mapDimensions.width);
                i.fillStyle = s.colors[e.color], i.beginPath(), i.arc(e.percentageX / 100 * s.miniMap.width, e.percentageY /
                    100 * s.miniMap.height, t, 0, 2 * Math.PI, !1), i.fill(), i.closePath()
            })), null !== this.diedAt && Date.now() - this.diedAt < 2e4 && (i.fillStyle = "red", i.fillRect((this.deathLocationX - s
                    .mapDimensions.x) / s.mapDimensions.width * s.miniMap.width - 1, (this.deathLocationY - s.mapDimensions.y) / s
                .mapDimensions.height * s.miniMap.height - 10, 2, 20), i.fillRect((this.deathLocationX - s.mapDimensions.x) / s
                .mapDimensions.width * s.miniMap.width - 10, (this.deathLocationY - s.mapDimensions.y) / s.mapDimensions.height * s
                .miniMap.height - 1, 20, 2)), i.restore()
        },
        drawViruses: function(e, t, n) {
            var s = this,
                i = this.hexToRgb(this.settings.virusColor);
            e.save(), e.fillStyle = "rgba(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + this.settings.virusOpactiy / 100 + ")", e
                .strokeStyle = "rgba(" + i[0] + ", " + i[1] + ", " + i[2] + ")", e.lineWidth = .4 * s.zoom, t.viruses.forEach((function(t) {
                    s.moveEntity(t, performance.now()), s.drawVirus(e, n, t)
                })), this.eatenViruses.forEach((function(t) {
                    s.drawVirus(e, n, t)
                })), e.restore()
        },
        drawVirus: function(e, t, n) {
            var s = this;
            e.beginPath();
            let i = (s.serverConfig.virusRadius + s.serverConfig.virusRadius * (.02 * n.projectilesEaten)) * s.zoom;
            if (s.settings.drawVirusSpikes && s.serverConfig.virusRadius * s.zoom > 13) {
                let a = s.serverConfig.virusRadius < 10 ? 30 : 39,
                    o = 0,
                    r = 1.08 * i;
                e.moveTo(n.x * s.zoom + r - t.x, n.y * s.zoom - t.y);
                for (let c = 0; c < a; c++) {
                    o += 360 / a / 2;
                    let c = n.x * s.zoom + Math.cos(o * Math.PI / 180) * i,
                        l = n.y * s.zoom + Math.sin(o * Math.PI / 180) * i;
                    e.lineTo(c - t.x, l - t.y), o += 360 / a / 2, c = n.x * s.zoom + Math.cos(o * Math.PI / 180) * r, l = n.y * s.zoom +
                        Math.sin(o * Math.PI / 180) * r, e.lineTo(c - t.x, l - t.y)
                }
            } else e.arc(n.x * s.zoom - t.x, n.y * s.zoom - t.y, i, 0, 2 * Math.PI);
            e.closePath(), e.fill(), e.stroke()
        },
        drawArtifacts: function(e, t, n) {
            var s = this;
            t.artifacts.forEach((function(t) {
                s.moveEntity(t, performance.now()), s.drawArtifact(e, n, t)
            })), this.eatenArtifacts.forEach((function(t) {
                s.drawArtifact(e, n, t)
            }))
        },
        drawArtifact: function(e, t, n) {
            let s = Object.keys(this.artifactBlueprints)[n.blueprintIndex],
                i = this.artifactBlueprints[s],
                a = i.radius;
            if (e.save(), e.translate(n.x * this.zoom - t.x, n.y * this.zoom - t.y), i === this.artifactBlueprints.coin && n.extraData && (
                    a *= .5), i === this.artifactBlueprints.projectile && (a = this.serverConfig.projectileRadius), n.eatenAt && (a *= Math
                    .max(1 - (Date.now() - n.eatenAt) / this.projectileAnimationTime, 0)), i.imageUrl) {
                let t = a * this.zoom > 20 ? "" : "_small",
                    n = "artifacts_" + s + t;
                this.images[n] || (this.images[n] = document.createElement("img"), this.images[n].src = "assets/artifacts/" + i.imageUrl +
                    t + ".png"), e.drawImage(this.images[n], -a * this.zoom, -a * this.zoom, 2 * a * this.zoom, 2 * a * this.zoom)
            } else e.fillStyle = this.colors[n.extraData], e.globalAlpha = i.alpha ?? 1, e.beginPath(), e.arc(0, 0, a * this.zoom, 0, 2 *
                Math.PI), e.fill(), e.closePath(), e.globalAlpha = 1;
            e.restore()
        },
        drawPortals: function(e, t, n) {
            var s = this;
            e.save(), t.portals.forEach((function(t) {
                e.drawImage(s.portalImg, (t.x - s.serverConfig.portalRadius) * s.zoom - n.x, (t.y - s.serverConfig
                    .portalRadius) * s.zoom - n.y, 2 * s.serverConfig.portalRadius * s.zoom, 2 * s.serverConfig
                    .portalRadius * s.zoom)
            })), e.restore()
        },
        drawBeacons: function(e, t, n) {
            e.save();
            for (let t = this.beacons.length - 1; t >= 0; t--) {
                let s = .75 * (1 + (Date.now() - this.beacons[t].createdAt) / 6e3);
                e.globalAlpha = 1 - (Date.now() - this.beacons[t].createdAt) / 6e3;
                let i = this.beaconImg.width * s,
                    a = this.beaconImg.height * s;
                e.drawImage(this.beaconImg, this.beacons[t].x * this.zoom - n.x - i / 2, this.beacons[t].y * this.zoom - n.y - a, i, a),
                    Date.now() - this.beacons[t].createdAt > 5e3 && this.beacons.splice(t, 1)
            }
            if (e.restore(), !this.settings.showMiniMap) return;
            let s = this.miniMap.getContext("2d");
            s.save();
            let i = this.beaconSmallImg.width,
                a = this.beaconSmallImg.height;
            for (let e = this.beacons.length - 1; e >= 0; e--) {
                let t = (this.beacons[e].x - this.mapDimensions.x) / this.mapDimensions.width,
                    n = (this.beacons[e].y - this.mapDimensions.y) / this.mapDimensions.height;
                s.drawImage(this.beaconSmallImg, t * this.miniMap.width - i / 2, n * this.miniMap.height - a, i, a)
            }
            s.restore()
        },
        drawAnnouncement: function(e) {
            if (this.announcementText) {
                let t = (Date.now() - this.announcedAt) / 2e3;
                if (t < 1) {
                    let n = 70 + 100 * Math.sqrt(t);
                    e.save();
                    let s = "bold " + n + 'px "Baloo Paaji 2"',
                        i = Math.ceil(n / 48);
                    e.globalAlpha = .2 + .8 * t, e.font = s, e.lineWidth = i, e.fillStyle = this.settings.darkMode ? "white" : "#333", e
                        .miterLimit = 2, e.textBaseline = "hanging";
                    let a = e.measureText(this.announcementText).width + i;
                    e.fillText(this.announcementText, canvas.width / 2 - a / 2, 30), e.restore()
                }
            }
        },
        setPowerUpActive: function(e, t) {
            document.querySelector("#active-power-ups img[data-type=" + e + "]").classList.toggle("hidden", !t)
        },
        updateEntityPosition: function(e, t, n) {
            this.moveEntity(t, n), e.updatedAt = n, e.x = t.x, e.y = t.y, e.oldX = t.x, e.oldY = t.y, t.radius && (e.radius = t.radius, e
                .oldRadius = t.radius)
        },
        moveEntity: function(e, t) {
            if (this.settings.movementSmoothing && void 0 !== e.oldX && void 0 !== e.oldY) {
                let n = (t - e.updatedAt) / this.settings.animationDuration;
                n = Math.max(Math.min(n, 1), 0), e.x = e.oldX + (e.newX - e.oldX) * n, e.y = e.oldY + (e.newY - e.oldY) * n, void 0 !== e
                    .oldRadius && (e.radius = e.oldRadius + (e.newRadius - e.oldRadius) * n)
            }
        },
        checkIsAlive: function() {
            var e = this;
            return this.game && void 0 !== this.game.players.find((function(t) {
                return t.id === e.playerId
            }))
        },
        resetCamera: function() {
            this.view.worldCameraX = this.game.camera.x, this.view.worldCameraY = this.game.camera.y, this.isCameraResetRequired = !1
        },
        spawn: function() {
            this.connection && (this.connection.sendMessage("spawn", {
                nickname: this.nickname,
                skin: this.skin
            }), this.closeMenu())
        },
        spectate: function() {
            this.isSpectating = !0, this.connection.sendMessage("spectate"), this.closeMenu()
        },
        updateServers: function(e) {
            var t = this,
                n = document.getElementById("servers"),
                s = "";
            document.getElementById("servers").classList.contains("disabled") || (this.ajax(this.hubFileUri + "?time=" + Date.now(), {
                onSuccess: function(e) {
                    e = JSON.parse(e);
                    Date.parse(e.updatedAt);
                    let i, a, o = null;
                    e.gameServers.forEach((function(e) {
                            t.autoConnected || isNaN(t.targetGameServerId) ? t.resolveIp(e.ip) + ":" + e.meta
                                .port === t.getStoredItem("lastServer") && (o = e.id) : e.id === t
                                .targetGameServerId && (o = e.id), o = null === o || e.meta.isMainServer ? e.id : o,
                                a = e.meta.hasPassword ? "ðŸ”’ " : "", i = e.meta.isInvisible ? "hidden" : "", s +=
                                '<div class="server ' + i + '" data-id="' + e.id + '" data-ip="' + t.resolveIp(e
                                .ip) + ":" + e.meta.port + '" data-tooltip="' + e.meta.description + '">' + a + e
                                .name + '<span class="float-right">' + e.meta.players + "/" + e.meta.maxClients +
                                "</span></div>"
                        })), n.innerHTML !== s && (n.innerHTML = s), o && n.querySelector('.server[data-id="' + o + '"]')
                        .classList.add("active"), t.autoConnected || (t.autoConnected = !0, null === t.connection && t
                            .connect(!0))
                },
                onError: function() {
                    s = '<div data-ip="localhost:8080">Localhost</div>', s += '<div data-ip="">Custom IP</div>', n
                        .innerHTML !== s && (n.innerHTML = s)
                }
            }), this.menu.classList.contains("hidden") || window.setTimeout(this.updateServers.bind(this), 1e4))
        },
        isAnyModalOpen: function() {
            return !this.menu.classList.contains("hidden") || null !== document.querySelector(".modal:not(.hidden)")
        },
        openMenu: function() {
            var e = this;
            this.reOpenMenu = !1, e.menu.classList.contains("visible") || (e.menu.classList.add("visible"), e.menu.classList.remove(
                    "hidden"), window.clearTimeout(e.menuTimeoutId), document.getElementById("inventory").classList.add("hidden"), this
                .updateServers())
        },
        toggleMenu: function() {
            this.deathPopup.classList.contains("visible") && (this.deathPopup.classList.add("hidden"), this.deathPopup.classList.remove(
                    "visible"), this.autoRespawnAt = null), this.menu.classList.contains("visible") ? this.connection && this.closeMenu() :
                this.openMenu()
        },
        closeMenu: function() {
            var e = this;
            e.menu.classList.contains("visible") && (e.menu.classList.remove("visible"), e.menuTimeoutId = window.setTimeout((function() {
                    e.menu.classList.add("hidden")
                }), 200), e.connection && document.querySelectorAll(".hud").forEach((function(e) {
                    e.classList.remove("hidden")
                })), document.getElementById("inventory").classList.remove("hidden"), "" === document.getElementById("chat-partner")
                .innerText && e.changeChatPartner(e.chatPartnerId))
        },
        openSettings: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("settings-modal");
            t.getAttribute("ready") || (t.querySelector(".content-container").querySelectorAll(".setting input,.setting select").forEach((
                function(t) {
                    t.addEventListener("change", (function() {
                        let t = this.getAttribute("data-setting"),
                            n = this.value;
                        if ("toggle" === this.getAttribute("data-type") && (n = this.checked), "range" === this
                            .getAttribute("data-type")) {
                            let e = this.parentNode.querySelector(".range-slider-value");
                            e && (e.innerHTML = n)
                        }
                        this.getAttribute("data-remote") && e.connection && e.connection.sendMessage(
                            "updatePlayerSetting", {
                                settingName: t,
                                value: n
                            }), e.useSetting(t, n), e.settings[t] = n, e.storeItem("flow", JSON.stringify(e
                            .settings))
                    })), t.addEventListener("input", (function() {
                        if ("range" === this.getAttribute("data-type")) {
                            let e = this.parentNode.querySelector(".range-slider-value");
                            e && (e.innerHTML = this.value)
                        }
                    }))
                })), t.setAttribute("ready", "1"), t.querySelectorAll(".menu div").forEach((function(e) {
                e.addEventListener("click", (function() {
                    t.querySelectorAll(".tab").forEach((function(e) {
                        e.classList.remove("active")
                    })), t.querySelectorAll(".menu div").forEach((function(e) {
                        e.classList.remove("active")
                    })), this.classList.add("active");
                    let e = this.getAttribute("data-for");
                    t.querySelector("." + e).classList.add("active")
                }))
            })), t.querySelector(".button.close").addEventListener("click", (function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            })), t.querySelector(".button.reset").addEventListener("click", (function() {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "Confirm"
                }).then((function(t) {
                    if (t.value) {
                        let t = e.settings.version;
                        e.settings = e.defaultSettings, e.settings.version = t, e.storeItem("flow", JSON
                            .stringify(e.settings)), e.openSettings(), e.connection && e.topMessage(
                            "To refresh remote settings, please reconnect to the server!")
                    }
                }))
            }))), t.querySelector(".content-container").querySelectorAll("input,select").forEach((function(t) {
                let n = t.getAttribute("data-setting");
                if (void 0 !== e.settings[n]) switch (t.getAttribute("data-type")) {
                    case "toggle":
                        t.checked = e.settings[n];
                        break;
                    case "range":
                        t.value = e.settings[n];
                        let s = t.parentNode.querySelector(".range-slider-value");
                        s && (s.innerHTML = e.settings[n]);
                        break;
                    case "key":
                        let i = e.settings[n];
                        i && "Key" === i.substr(0, 3) && (i = i.substr(3)), t.value = i, t.addEventListener("keydown", (
                            function(t) {
                                let s = void 0 === t.code ? t.key : t.code;
                                "Escape" === s && (s = ""), this.value = e.beautifyKeyName(s), e.settings[n] = s, e
                                    .storeItem("flow", JSON.stringify(e.settings)), e.renderKeyAssignments(), e
                                    .applyKeyChange(n, s), t.preventDefault()
                            }));
                        break;
                    case "color":
                        t.value = e.settings[n], t.jscolor.fromString(t.value);
                        break;
                    default:
                        t.value = e.settings[n]
                }
            })), t.classList.remove("hidden")
        },
        openSkinBrowser: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("skin-browser-modal");
            t.getAttribute("ready") || (t.setAttribute("ready", "1"), this.renderSkinList("history"), t.querySelectorAll(".tab").forEach((
                function(n) {
                    n.addEventListener("mousedown", (function(n) {
                        let s = n.target.getAttribute("data-skin");
                        if (s)
                            if (2 === n.button) {
                                let t = n.target.parentNode.parentNode;
                                if (t.classList.contains("tab-history") && (e.settings.lastSkins.splice(e.settings
                                        .lastSkins.indexOf(s), 1), e.storeItem("flow", JSON.stringify(e
                                        .settings)), e.renderSkinList("history")), t.classList.contains(
                                        "tab-custom")) {
                                    let t = n.target.parentNode.classList.contains("private"),
                                        i = new Date(n.target.getAttribute("data-used-at")),
                                        a = t ? e.skinPrivateRefund : e.skinPublicRefund;
                                    Date.now() - i.getTime() < 1.1 * e.skinPreviewCostsDuration && (a = (t ? e
                                            .skinSlotPrivatePrice : e.skinSlotPublicPrice) - e.skinPreviewCosts),
                                        Swal.fire({
                                            title: "Remove Skin",
                                            text: "Do you want to remove the skin and the skin slot and get " +
                                                e.formatNumber(a) + " coins refunded?",
                                            icon: "question",
                                            showCancelButton: !0,
                                            confirmButtonText: "Confirm"
                                        }).then((function(n) {
                                            if (n.value) {
                                                e.removeSkin(s);
                                                let n = s.lastIndexOf("/"); - 1 !== n && (s = s.substr(n +
                                                    1)), e.connection.sendMessage("removeSkin", {
                                                    id: s,
                                                    isPrivate: t
                                                })
                                            }
                                        }))
                                }
                            } else {
                                if (n.target.parentNode.classList.contains("restricted")) return;
                                e.connection.sendMessage("changeSkin", {
                                    skin: s
                                }), t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
                            } n.target.classList.contains("bookmark") && (s = n.target.parentNode.getAttribute(
                            "data-skin"), -1 === e.settings.favoriteSkins.indexOf(s) ? (e.settings
                            .favoriteSkins.push(s), n.target.classList.add("bookmarked")) : (e.settings
                            .favoriteSkins.splice(e.settings.favoriteSkins.indexOf(s), 1), n.target
                            .classList.remove("bookmarked"), t.querySelector(".tab-favorites").classList
                            .contains("active") && n.target.parentNode.parentNode.remove()), e.storeItem(
                            "flow", JSON.stringify(e.settings))), (n.target.classList.contains("buy") || n
                            .target.parentNode.classList.contains("buy")) && (e.connection ? Swal.fire({
                            title: "Purchase Skin Slot",
                            text: "What type of skin slot do you want to get?",
                            showCancelButton: !0,
                            focusConfirm: !1,
                            confirmButtonText: "Public",
                            cancelButtonText: "Private",
                            cancelButtonColor: "#B52057"
                        }).then((function(t) {
                            let n = !t.value,
                                s = n ? e.skinSlotPrivatePrice : e.skinSlotPublicPrice;
                            Swal.fire({
                                title: "Purchase Skin Slot",
                                text: "Confirm to buy a skin slot for " + e.formatNumber(
                                    s) + " coins?",
                                icon: "question",
                                showCancelButton: !0,
                                confirmButtonText: "Buy"
                            }).then((function(t) {
                                t.value && e.connection.sendMessage("buySkinSlot", {
                                    isPrivate: n
                                })
                            }))
                        })) : Swal.fire("Connect to a game server to buy skins"))
                    })), n.addEventListener("change", (function(t) {
                        if ("INPUT" === t.target.nodeName && "file" === t.target.getAttribute("type")) {
                            let n = t.target.files[0],
                                s = 1e6;
                            if (n.size > s) return void Swal.fire(
                                "Skin file is exceeding the maximum size limit (1 MegaByte)!");
                            let i = new FileReader;
                            i.readAsArrayBuffer(n), i.addEventListener("load", (function() {
                                let s = {
                                        accountName: e.accountName,
                                        clientId: e.playerId,
                                        fileType: "image/png" === n.type ? e.fileTypePng : e
                                            .fileTypeJpg,
                                        fileData: new Uint8Array(i.result),
                                        filePurpose: t.target.parentNode.parentNode.parentNode.classList
                                            .contains("private") ? 1 : 0
                                    },
                                    a = e.netProtocol.writePacket(e.netProtocol.typeFile, s);
                                e.connection.sendMessage(a)
                            }))
                        }
                    }))
                })), t.querySelectorAll(".skin-browser-menu div").forEach((function(n) {
                n.addEventListener("click", (function() {
                    t.querySelectorAll(".tab").forEach((function(e) {
                        e.classList.remove("active")
                    })), t.querySelectorAll(".skin-browser-menu div").forEach((function(e) {
                        e.classList.remove("active")
                    })), this.classList.add("active");
                    let n = this.getAttribute("data-for");
                    t.querySelector("." + n).classList.add("active"), "tab-history" === n && e.renderSkinList(
                            "history"), "tab-favorites" === n && e.renderSkinList("favorites"), "tab-custom" ===
                        n && e.connection.sendMessage("getCustomSkins"), "tab-special" === n && e.connection
                        .sendMessage("getSpecialSkins"), "tab-all" === n && e.connection.sendMessage(
                            "getAllSkins")
                }))
            })), t.querySelector(".button.close").addEventListener("click", (function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openShop: function(e, t) {
            var n = this;
            this.closeMenu();
            let s = document.getElementById("shop-modal");
            this.renderShopTab(e, t), s.getAttribute("ready") || (s.setAttribute("ready", "1"), s.querySelectorAll(".tab").forEach((
                function(t) {
                    t.addEventListener("mousedown", (function(t) {
                        if (0 === t.button && ("BUTTON" === t.target.nodeName || t.target.classList.contains(
                                "preview"))) {
                            let i = "BUTTON" === t.target.nodeName ? t.target.parentNode.parentNode : t.target
                                .parentNode,
                                a = i.querySelector("button").classList[1],
                                o = parseInt(i.getAttribute("data-id")),
                                r = i.querySelector(".name").innerText,
                                c = i.querySelector(".costs").innerText.trim();
                            switch (e = s.querySelector(".menu div.active").getAttribute("data-for").substr(4),
                                typeSingular = e.slice(0, -1), a) {
                                case "stop":
                                case "use":
                                    n.connection.sendMessage("useArticle", {
                                        articleType: typeSingular,
                                        id: o
                                    });
                                    break;
                                case "buy":
                                    let t = "FREE!" === c ? 'Confirm to get the article "' + r + '" for free?' :
                                        'Confirm to buy the article "' + r + '" for ' + c + " coins?",
                                        s = "minions" === e ?
                                        "Attention: If you have active minions, they will be replaced! Minions do not stack!" :
                                        "";
                                    Swal.fire({
                                        title: "Purchase Article",
                                        text: t + s,
                                        icon: "question",
                                        showCancelButton: !0,
                                        confirmButtonText: "Buy"
                                    }).then((function(e) {
                                        e.value && n.connection.sendMessage("buyArticle", {
                                            articleType: typeSingular,
                                            id: o
                                        })
                                    }))
                            }
                        }
                    }))
                })), s.querySelectorAll(".menu div").forEach((function(e) {
                e.addEventListener("click", (function() {
                    s.querySelectorAll(".tab").forEach((function(e) {
                        e.classList.remove("active")
                    })), s.querySelectorAll(".menu div").forEach((function(e) {
                        e.classList.remove("active")
                    })), this.classList.add("active");
                    let t = this.getAttribute("data-for");
                    s.querySelector("." + t).classList.add("active");
                    let i = e.getAttribute("data-for");
                    "tab-wearables" === i && n.connection.sendMessage("getArticles", {
                        articleType: "wearable"
                    }), "tab-roles" === i && n.connection.sendMessage("getArticles", {
                        articleType: "role"
                    }), "tab-minions" === i && n.connection.sendMessage("getArticles", {
                        articleType: "minion"
                    })
                }))
            })), s.querySelector(".button.close").addEventListener("click", (function() {
                s.classList.add("hidden"), n.reOpenMenu && n.openMenu()
            }))), s.classList.remove("hidden")
        },
        openTradingPost: function(e) {
            var t = this;
            this.closeMenu();
            let n = document.getElementById("trading-post-modal");
            n.getAttribute("ready") || (n.setAttribute("ready", "1"), n.querySelector(".button.close").addEventListener("click", (
        function() {
                t.connection.sendMessage("tradingAbort")
            })), n.addEventListener("click", (function(e) {
                "IMG" === e.target.nodeName && e.target.parentNode.querySelector("input").focus()
            })), n.addEventListener("change", (function(e) {
                "INPUT" === e.target.nodeName && "checkbox" !== e.target.type && (t.applyTradingUpdate(e.target), t
                    .connection.sendMessage("tradingUpdate", {
                        name: e.target.name,
                        value: +e.target.value,
                        isLeft: !!+e.target.getAttribute("data-is-left")
                    }), document.querySelectorAll("#trading-post-modal input[type=checkbox]").forEach((function(e) {
                        e.checked = !1
                    })))
            })), n.querySelector("input.confirm-left").addEventListener("change", (function() {
                t.connection.sendMessage("tradingConfirm", {
                    confirmed: this.checked
                }), t.updateTradingState()
            })), n.querySelector(".actions .left").addEventListener("mouseenter", (function() {
                n.classList.toggle("show-state", !0)
            })), n.querySelector(".actions .left").addEventListener("mouseleave", (function() {
                n.classList.toggle("show-state", !1)
            }))), this.renderTradingArea(e, !0), this.renderTradingArea(e, !1), document.querySelectorAll(
                "#trading-post-modal input[type=checkbox]").forEach((function(e) {
                e.checked = !1
            })), t.updateTradingState(), n.classList.remove("hidden")
        },
        openUnmutePlayers: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("unmute-modal"),
                n = t.querySelector(".players");
            n.innerHTML = "", Object.keys(e.mutedPlayers).forEach((function(t) {
                n.innerHTML += '<div data-id="' + t + '" data-nickname="' + e.mutedPlayers[t] + '">' + e.mutedPlayers[t] +
                    " <span>(#" + t + ")</span></div>"
            })), "" === n.innerHTML && (n.innerHTML = "<i>No players muted</i>"), t.getAttribute("ready") || (t.setAttribute("ready",
                "1"), n.addEventListener("click", (function(n) {
                let s = n.target.getAttribute("data-id");
                s || (s = n.target.parentNode.getAttribute("data-id")), s && (delete e.mutedPlayers[s], e.topMessage(
                        'Player "' + n.target.getAttribute("data-nickname") + '" (#' + s + ") unmuted"), t
                    .querySelector(".button.close").click())
            })), t.querySelector(".button.close").addEventListener("click", (function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openProfile: function(e) {
            var t = this;
            this.closeMenu();
            let n = document.getElementById("profile-modal");
            this.level = this.calculateLevel(e.playerStats.xp), n.querySelector(".account-name").innerText = e.accountName, n.querySelector(
                    ".clan a").innerHTML = e.clanName ?? "<i>None</i>", n.querySelector(".created-at").innerText = new Date(e.createdAt)
                .toLocaleDateString(), n.querySelector(".level").innerText = this.level, n.querySelector(".total-xp").innerText = this
                .formatNumber(e.playerStats.xp), n.querySelector(".coins").innerText = this.formatNumber(e.playerStats.coins), n
                .querySelector(".all-time-coins").innerText = this.formatNumber(e.playerStats.allTimeCoins), n.querySelector(".spawns")
                .innerText = this.formatNumber(e.playerStats.spawns), n.querySelector(".longest-session-time").innerText = this
                .formatMilliseconds(e.playerStats.longestSessionTime), n.querySelector(".time-in-game").innerText = this.formatMilliseconds(
                    60 * e.playerStats.minutesOnline * 1e3), n.querySelector(".time-alive").innerText = this.formatMilliseconds(60 * e
                    .playerStats.minutesPlayed * 1e3), n.querySelector(".best-mass").innerText = this.formatNumber(parseInt(e.playerStats
                    .bestMass)), n.querySelector(".best-survival-time").innerText = this.formatMilliseconds(e.playerStats.bestSurvivalTime),
                n.querySelector(".power-ups-used").innerText = this.formatNumber(e.playerStats.powerUpsUsed), n.querySelector(
                    ".chat-messages").innerText = this.formatNumber(e.playerStats.chatMessages), n.getAttribute("ready") || (n.setAttribute(
                    "ready", "1"), n.querySelector(".clan a").addEventListener("click", (function() {
                    t.connection.sendMessage("requestClan", {
                        clanName: this.innerText
                    })
                })), n.querySelector(".button.close").addEventListener("click", (function() {
                    n.classList.add("hidden"), t.reOpenMenu && t.openMenu()
                }))), n.classList.remove("hidden")
        },
        openFriendships: function(e) {
            var t = this;
            this.closeMenu();
            let n = document.getElementById("friendships-modal"),
                s = n.querySelector(".tab-friends"),
                i = s.querySelector(".template"),
                a = n.querySelector(".tab-requests"),
                o = a.querySelector(".template");
            n.querySelectorAll(".friend:not(.template)").forEach((function(e) {
                e.remove()
            }));
            let r = !1,
                c = !1,
                l = 0;
            e.forEach((function(e) {
                let n = e.isConfirmed ? i.cloneNode(!0) : o.cloneNode(!0),
                    d = n.querySelector(".cell-preview .body"),
                    u = e.initiator === t.accountName ? e.acceptor : e.initiator;
                n.classList.remove("template"), n.classList.remove("hidden"), n.setAttribute("data-account-name", u), n
                    .querySelector(".account-name").innerText = u, e.isConfirmed ? (n.querySelector(".account-name").classList
                        .toggle("online", e.isOnline), n.querySelector(".account-name").setAttribute("data-tooltip", e
                            .isOnline ? "Online - click to see profile" : "Offline - click to see profile"), n.querySelector(
                            ".game-server").innerText = e.gameServerName ? e.gameServerName : "-", n.querySelector(
                            ".game-server").setAttribute("data-ip", e.gameServerIp ? t.resolveIp(e.gameServerIp) : ""), n
                        .querySelector(".game-server").setAttribute("data-port", e.gameServerPort ? e.gameServerPort : ""), d
                        .style.backgroundColor = e.lastColor ? e.lastColor : "#4a5568", d.style.backgroundImage = e.lastSkin ?
                        "url(" + t.resolveAssetUrl(e.lastSkin) + "_small.png)" : "none", s.appendChild(n), r = !0) : (l++, d
                        .style.backgroundColor = "#4a5568", n.querySelector(".accept").classList.toggle("hidden", e.acceptor !==
                            t.accountName), a.appendChild(n), c = !0)
            }));
            let d = n.querySelector(".friends-counter");
            d.innerHTML = e.length, d.classList.toggle("hidden", 0 === e.length), this.updateFriendshipRequestCounter(n, l), s
                .querySelector(".empty").classList.toggle("hidden", r), a.querySelector(".empty").classList.toggle("hidden", c), n
                .getAttribute("ready") || (n.setAttribute("ready", "1"), n.querySelectorAll(".friendships-menu div").forEach((function(e) {
                    e.addEventListener("click", (function() {
                        n.querySelectorAll(".tab").forEach((function(e) {
                            e.classList.remove("active")
                        })), n.querySelectorAll(".friendships-menu div").forEach((function(e) {
                            e.classList.remove("active")
                        })), this.classList.add("active");
                        let e = this.getAttribute("data-for");
                        n.querySelector("." + e).classList.add("active")
                    }))
                })), n.querySelector(".friendships-container").addEventListener("click", (function(e) {
                    let s = e.target;
                    "IMG" === s.nodeName && s.parentElement.classList.contains("button") && (s = s.parentElement);
                    let i = s.parentElement.getAttribute("data-account-name");
                    s.classList.contains("account-name") && (t.sendChatMessage("/profile " + i), n.querySelector(
                        ".button.close").click()), s.classList.contains("game-server") && Swal.fire({
                        title: "Are you sure?",
                        text: "Do you really want to join this server?",
                        icon: "question",
                        showCancelButton: !0,
                        confirmButtonText: "Confirm"
                    }).then((function(e) {
                        e.value && (t.serverIp = s.getAttribute("data-ip"), t.serverPort = s.getAttribute(
                            "data-port"), t.connect(!0, !0))
                    })), s.classList.contains("button") && s.classList.contains("accept") && t.connection.sendMessage(
                        "acceptFriend", {
                            initiator: i
                        }), s.classList.contains("button") && s.classList.contains("remove") && Swal.fire({
                        title: "Are you sure?",
                        text: "",
                        icon: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Confirm"
                    }).then((function(e) {
                        e.value && t.connection.sendMessage("removeFriend", {
                            removed: i
                        })
                    })), s.classList.contains("button") && s.classList.contains("message") && (t.changeChatPartner(i), t
                        .reOpenMenu = !1, n.querySelector(".button.close").click(), window.setTimeout((function() {
                            t.chatBox.focus()
                        }), 1))
                })), n.querySelector(".button.add").addEventListener("click", (function() {
                    Swal.fire({
                        title: "Enter the name of the player",
                        input: "text",
                        inputValue: "",
                        showCancelButton: !0
                    }).then((function(e) {
                        e.value && (t.sendChatMessage("/addfriend " + e.value), window.setTimeout((function() {
                            t.connection.sendMessage("requestFriends")
                        }), 500))
                    }))
                })), n.querySelector(".button.close").addEventListener("click", (function() {
                    n.classList.add("hidden"), t.reOpenMenu && t.openMenu()
                }))), n.classList.remove("hidden")
        },
        updateFriendshipRequestCounter: function(e, t) {
            let n = e.querySelector(".requests-counter"),
                s = document.querySelector("#menu-friendships-button .requests-counter");
            t > 0 ? (n.classList.remove("hidden"), s.classList.remove("hidden"), n.innerHTML = t, s.innerHTML = t) : (n.classList.add(
                "hidden"), s.classList.add("hidden"))
        },
        openClan: function(e) {
            console.log("opening clan");
            var t = this;
            this.closeMenu(), this.clan = e;
            let n = document.getElementById("clan-modal");
            if (n.getAttribute("ready") || (n.setAttribute("ready", "1"), n.querySelector(".button.create").addEventListener("click", (
                    function() {
                        Swal.fire({
                            title: "Enter the name of the clan",
                            input: "text",
                            inputValue: "",
                            showCancelButton: !0
                        }).then((function(e) {
                            e.value && t.connection.sendMessage("createClan", {
                                clanName: e.value
                            })
                        }))
                    })), n.querySelector(".button.join").addEventListener("click", (function() {
                    Swal.fire({
                        title: "Enter the name of the clan",
                        input: "text",
                        inputValue: t.clan ? t.clan.name : "",
                        showCancelButton: !0
                    }).then((function(e) {
                        e.value && Swal.fire({
                            title: "Enter the password of the clan",
                            input: "text",
                            showCancelButton: !0
                        }).then((function(n) {
                            n.value && t.connection.sendMessage("joinClan", {
                                clanName: e.value,
                                password: n.value
                            })
                        }))
                    }))
                })), n.addEventListener("click", (function(e) {
                    if ("SPAN" === e.target.nodeName && e.target.classList.contains("editable")) {
                        let n = e.target.classList;
                        switch (!0) {
                            case n.contains("edit-tag"):
                                Swal.fire({
                                    title: "Enter the tag of the clan",
                                    input: "text",
                                    inputValue: t.clan ? t.clan.tag : "",
                                    showCancelButton: !0
                                }).then((function(e) {
                                    void 0 !== e.value && t.connection.sendMessage("editClanTag", {
                                        tag: e.value
                                    })
                                }));
                                break;
                            case n.contains("edit-logo"):
                                Swal.fire({
                                    title: "Choose logo",
                                    text: "Enter the ID of a skin you want to use as clan logo.",
                                    input: "text",
                                    inputValue: t.clan ? t.clan.logo : "",
                                    showCancelButton: !0
                                }).then((function(e) {
                                    void 0 !== e.value && t.connection.sendMessage("editClanLogo", {
                                        logo: e.value
                                    })
                                }));
                                break;
                            case n.contains("edit-password"):
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "A new random password will be generated",
                                    icon: "warning",
                                    showCancelButton: !0,
                                    confirmButtonText: "Confirm"
                                }).then((function(e) {
                                    e.value && t.connection.sendMessage("generateClanPassword")
                                }));
                                break;
                            case n.contains("edit-discord"):
                                Swal.fire({
                                    title: "Enter the Discord invite of the clan",
                                    input: "text",
                                    inputValue: t.clan ? t.clan.discord : "",
                                    showCancelButton: !0
                                }).then((function(e) {
                                    void 0 !== e.value && t.connection.sendMessage("editClanDiscord", {
                                        discord: e.value
                                    })
                                }));
                                break;
                            case n.contains("edit-info"):
                                Swal.fire({
                                    title: "Enter the info text about the clan",
                                    input: "text",
                                    inputValue: t.clan ? t.clan.info : "",
                                    showCancelButton: !0
                                }).then((function(e) {
                                    void 0 !== e.value && t.connection.sendMessage("editClanInfo", {
                                        info: e.value
                                    })
                                }));
                                break;
                            default:
                                Swal.fire({
                                    title: "Are you sure?",
                                    icon: "warning",
                                    showCancelButton: !0,
                                    confirmButtonText: "Confirm"
                                }).then((function(n) {
                                    n.value && t.connection.sendMessage("kickClanMember", {
                                        accountName: e.target.parentNode.innerText
                                    })
                                }))
                        }
                    }
                })), n.querySelector(".button.leave").addEventListener("click", (function() {
                    Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Confirm"
                    }).then((function(e) {
                        e.value && t.connection.sendMessage("leaveClan")
                    }))
                })), n.querySelector(".button.close").addEventListener("click", (function() {
                    n.classList.add("hidden"), t.reOpenMenu && t.openMenu()
                }))), n.querySelector(".tab-outside").classList.toggle("active", !e), n.querySelector(".tab-inside").classList.toggle(
                    "active", !!e), e) {
                n.classList.toggle("editable", e.owner === this.accountName), n.querySelector(".name").innerText = e.name, n.querySelector(
                        ".tag").innerText = e.tag, n.querySelector(".logo img").src = e.logo ? this.resolveAssetUrl("assets/skins/" + e
                        .logo + "_medium.png") : "", n.querySelector(".password").innerText = e.password, n.querySelector(".created-at")
                    .innerText = "âœ· " + new Date(e.createdAt).toLocaleDateString(), n.querySelector(".leader .special-name").innerText = e
                    .owner, n.querySelector(".member-count").innerText = e.members.length, n.querySelector(".discord").innerHTML = e
                    .discord ? '<a href="https://discord.gg/' + this.htmlEntities(e.discord) + '" target="_blank">ðŸ”— Join Server</a>' :
                    "<i>None</i>", n.querySelector(".info").innerText = e.info ?? "None";
                let t = "";
                e.members.forEach((function(e) {
                    t += '<span class="special-name mb-1" data-tooltip="Joined at: ' + new Date(e.joinedAt)
                    .toLocaleDateString() + '">' + e.accountName +
                        '<span class="kick text-orange pl-1 editable">âœ–</span></span>'
                })), n.querySelector(".members").innerHTML = t
            } else n.querySelector(".name").innerText = "Manage Clan", n.querySelector(".tag").innerText = "", n.querySelector(".logo img")
                .src = "";
            document.getElementById("profile-modal").classList.add("hidden"), n.classList.remove("hidden")
        },
        openInfo: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("info-modal");
            t.getAttribute("ready") || (t.setAttribute("ready", "1"), t.querySelector(".button.close").addEventListener("click", (
        function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openPrivacyPolicy: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("privacy-policy-modal");
            t.getAttribute("ready") || (t.setAttribute("ready", "1"), t.querySelector(".button.close").addEventListener("click", (
        function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openTermsOfUse: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("terms-of-use-modal");
            t.getAttribute("ready") || (t.setAttribute("ready", "1"), t.querySelector(".button.close").addEventListener("click", (
        function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openHelp: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("help-modal");
            t.getAttribute("ready") || (t.addEventListener("click", (function(n) {
                "CODE" === n.target.nodeName && (e.connection ? (e.chatBox.value = n.target.innerText, e.chatBox.focus(), t
                    .classList.add("hidden")) : Swal.fire("Connect to a game server to use chat commands"))
            })), t.setAttribute("ready", "1"), t.querySelector(".button.close").addEventListener("click", (function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        openScreenshot: function() {
            var e = this;
            this.closeMenu();
            let t = document.getElementById("screenshot-modal"),
                n = this.canvas.toDataURL();
            document.getElementById("screenshot").src = n, t.getAttribute("ready") || (t.setAttribute("ready", "1"), t.querySelector(
                ".button.download").addEventListener("click", (function() {
                let t = document.getElementById("screenshot").src;
                e.download("screenshot.png", t, "")
            })), t.querySelector(".button.close").addEventListener("click", (function() {
                t.classList.add("hidden"), e.reOpenMenu && e.openMenu()
            }))), t.classList.remove("hidden")
        },
        relocateSubMenu: function(e) {
            e.style.visibility = "hidden", window.setTimeout(function() {
                if (this.contextMenu.getBoundingClientRect().left + this.contextMenu.offsetWidth + e.offsetWidth < window
                    .innerWidth ? e.style.left = "100%" : (e.style.left = "-" + e.offsetWidth + "px", e.getBoundingClientRect()
                        .left < 0 && (e.style.left = .5 * this.contextMenu.offsetWidth + "px")), this.mouse.y + e.offsetHeight <
                    window.innerHeight) e.style.top = "0";
                else {
                    let t = e.querySelector("li").offsetHeight;
                    e.style.top = "-" + (e.offsetHeight - t) + "px"
                }
                e.style.visibility = "visible"
            }.bind(this), 1)
        },
        renderKeyAssignments: function() {
            if (!document.getElementById("key-assignments").classList.contains("hidden")) {
                let e = "",
                    t = function(t, n) {
                        n && "Key" === n.substr(0, 3) && (n = n.substr(3)), e += "<tr><td>" + t + "</td><td>" + n + "</td></tr>"
                    };
                t("Split", this.settings.keySplit), t("Eject", this.settings.keyEject), t("Double Split", this.settings.keyDoubleSplit), t(
                    "Quad Split", this.settings.keyQuadSplit), t("Minion Split", this.settings.keyMinionSplit), t("Minion Quad", this
                    .settings.keyMinionQuadSplit), t("Minion Feed", this.settings.keyMinionEject), t("Self Freeze", this.settings
                    .keySelfFreeze), t("Cannon", this.settings.keyCannon), t("Push", this.settings.keyPush), t("Recombine", this
                    .settings.keyRecombine), t("Virus", this.settings.keyVirus), t("Freeze", this.settings.keyFreeze), t("Anti", this
                    .settings.keyAnti), t("Mass", this.settings.keyMass), t("Portal", this.settings.keyPortal), t("Dance", this.settings
                    .keyDance), t("Animate", this.settings.keyAnimate), t("Respawn", this.settings.keyRespawn), document.querySelector(
                    "#key-assignments tbody").innerHTML = e
            }
        },
        useSetting: function(e, t) {
            switch (e) {
                case "darkMode":
                    document.querySelector("body").classList.toggle("dark-mode", t), document.querySelector("body").classList.toggle(
                        "bright-mode", !t);
                    break;
                case "hudScale":
                    t /= 100, document.getElementById("top-left-area").style.transform = "scale(" + t + ")", this.chat.style.transform =
                        "scale(" + t + ")", this.leaderboard.style.transform = "scale(" + t + ")", this.miniMap.style.transform = "scale(" +
                        t + ")";
                    break;
                case "chatOpacity":
                    t /= 100, this.chatMessages.style.opacity = t;
                    break;
                case "showStatistics":
                    this.statistics.classList.toggle("hidden", !t);
                    break;
                case "showLeaderboard":
                    this.leaderboard.classList.toggle("hidden", !t);
                    break;
                case "showMiniMap":
                    this.miniMap.classList.toggle("hidden", !t);
                    break;
                case "showChat":
                    this.chat.classList.toggle("hidden", !t);
                    break;
                case "showKeyAssignments":
                    document.getElementById("key-assignments").classList.toggle("hidden", !t), this.renderKeyAssignments();
                    break;
                case "drawTextOutlines":
                    this.nicknameCache = {};
                    break;
                case "backgroundImage":
                    if (t > 0 && t < 1e3) {
                        this.backgroundImg.src = "assets/backgrounds/" + t + ".jpg";
                        let e = t <= 100;
                        e !== this.settings.darkMode && (this.settings.darkMode = e, this.useSetting("darkMode", e))
                    }
                    break;
                case "smallChat":
                    this.chat.classList.toggle("small", t);
                    break;
                case "renderQuality":
                    this.settings.renderQuality = t, this.resizeElements();
                    break;
                default:
                    e.startsWith("key") && this.applyKeyChange(e, t)
            }
        },
        applyKeyChange(e, t) {
            let n = this,
                s = " - Key: ";
            Object.keys(this.powerUpTypes).some((function(i) {
                if ("key" + i === e.toLowerCase()) {
                    let e = document.querySelector('#inventory [data-type="' + i + '"]');
                    if (e) {
                        let i = e.getAttribute("data-tooltip").indexOf(s),
                            a = -1 === i ? e.getAttribute("data-tooltip") : e.getAttribute("data-tooltip").substr(i);
                        e.setAttribute("data-tooltip", a += s + n.beautifyKeyName(t))
                    }
                    return !0
                }
            }))
        },
        useSkin: function(e) {
            if (e = this.removeCode(e), this.menuCellPreview.querySelector(".body").style.backgroundImage = e ? "url(" + this
                .resolveAssetUrl(e) + ".png)" : "none", e) {
                let t = this.settings.lastSkins.indexOf(e); - 1 !== t && this.settings.lastSkins.splice(t, 1), this.settings.lastSkins
                    .unshift(e), this.settings.lastSkins = this.settings.lastSkins.slice(0, 20), this.renderSkinList("history"), this
                    .storeItem("flow", JSON.stringify(this.settings))
            }
            this.storeItem("skin", e), this.skin = e
        },
        renderSkinList: function(e, t) {
            var n = this;
            let s = document.querySelector("#skin-browser-modal .tab-" + e),
                i = "";
            switch (e) {
                case "history":
                    t = this.settings.lastSkins;
                    break;
                case "favorites":
                    t = this.settings.favoriteSkins
            }
            if (t.forEach((function(e) {
                    let t = !1,
                        s = !1 === e.isUsable ? "restricted" : "usable",
                        a = "",
                        o = "";
                    if ("object" == typeof e) {
                        if (!e.hasSkin) return;
                        e.info && (a += e.info + " - "), o = 'data-used-at="' + e.usedAt + '"', t = e.isPrivate, e =
                            "assets/skins/" + e.id
                    }
                    let r = -1 === n.settings.favoriteSkins.indexOf(e) ? "" : "bookmarked",
                        c = t ? "private " : "";
                    a += "ID: " + e.split("/").pop(), i += '<div class="' + c + s +
                        '"><div class="skin" style="background-image: url(' + n.resolveAssetUrl(e) + '_small.png)" data-tooltip="' +
                        a + '" data-skin="' + e + '" ' + o + ">" + ("usable" === s ? '<div class="bookmark ' + r + '"></div>' :
                        "") +
                        '</div><div class="private-info" data-tooltip="This is a private skin - only you can use it!"></div></div>'
                })), s.innerHTML = i, "custom" === e) {
                let e = t.some((function(e) {
                    if (!e.hasSkin && e.bannedAt && Date.now() - new Date(e.bannedAt).getTime() < 864e5) return !0
                }));
                t.forEach((function(t) {
                        if (!t.hasSkin) {
                            let n = t.isPrivate ? "private" : "",
                                i = e ? "ðŸ”’ Slot is locked for 24 hours" : "Upload a new skin to this skin slot";
                            s.innerHTML += '<div class="' + n + (e ? " restricted" : "") +
                                '"><div class="slot upload" data-tooltip="' + i +
                                '"><img src="assets/upload.svg"><label><input type="file" accept="image/png, image/jpeg"></label></div><div class="private-info" data-tooltip="This is a private skin - only you can use it!"></div></div>'
                        }
                    })), s.innerHTML +=
                    '<div><div class="slot buy" data-tooltip="Buy a new skin slot"><img src="assets/plus.svg"></div></div>'
            }
        },
        renderShopTab: function(e, t) {
            var n = this,
                s = {};
            switch (e) {
                case "wearables":
                    s = this.wearables, n.settings.activeWearables = [];
                    break;
                case "roles":
                    t.activeRole && t.activeRole !== this.settings.activeRole && (this.settings.activeRole = t.activeRole), this
                        .iterateObjectAttributes(this.roles, (function(e, t) {
                            e.costs > 0 && (s[t] = e)
                        }));
                    break;
                case "minions":
                    s = this.minionPacks
            }
            var i = "";
            this.iterateObjectAttributes(s, (function(s, a) {
                let o, r, c, l, d;
                switch (a = parseInt(a), e) {
                    case "wearables":
                        r = -1 !== t.activeWearables.indexOf(a), c = -1 !== t.purchasedWearables.indexOf(a), l = !0, o =
                            "assets/wearables/" + s.name + "_small.png", r && n.settings.activeWearables.push(a);
                        break;
                    case "roles":
                        r = t.activeRole === a, c = -1 !== t.purchasedRoles.indexOf(a), l = !0, o = "assets/accessories/role_" +
                            a + ".png";
                        break;
                    case "minions":
                        r = t.activeMinionPackId === a, c = !1, l = !0, o = "assets/minion-packs/" + a + ".jpg"
                }
                r ? (d = '<button class="button stop">Drop</button>', "minions" === e && (d =
                    '<div class="pt-4">Active</div>')) : d = c ? '<button class="button use">Use</button>' : l ?
                    '<button class="button buy">Buy</button>' : '<span class="text-gray-600">Not available</span>';
                let u = r || c ? "purchased" : "",
                    h = s.info ? 'data-tooltip="' + n.removeCode(s.info) + '"' : "",
                    m = s.costs > 0 ? n.formatNumber(s.costs) : " FREE!",
                    g = '<div class="article ' + u + '" ' + h + ' data-id="' + a + '"> <div class="name" data-tooltip="' + n
                    .removeCode(n.convertKebabCaseToName(s.name)) + '">' + n.convertKebabCaseToName(s.name) +
                    '</div><img class="preview" src="' + o +
                    '"><div class="costs"><img src="assets/artifacts/coin_small.png">' + m + '</div><div class="action">' + d +
                    "</div></div>";
                r || c ? i = g + i : i += g
            })), document.querySelector("#shop-modal .tab-" + e).innerHTML = i, this.storeItem("flow", JSON.stringify(this.settings))
        },
        renderTradingArea: function(e, t) {
            let n = this,
                s = e.requestor === this.accountName ? "requestor" : "acceptor",
                i = "requestor" == s ? "acceptor" : "requestor",
                a = t ? "left" : "right",
                o = document.querySelector("#trading-post-modal .trading-area." + a),
                r = e[(t ? s : i) + "Inventory"],
                c = "";
            this.iterateObjectAttributes(r, (function(e, s, i) {
                c += function(e, s) {
                    let i = r[e],
                        a = t ? "" : "disabled";
                    return '<div class="item ' + e + '"><img src="assets/' + (s ? "power-up-" : "artifacts/") + e +
                        '.png" data-tooltip="' + (s ? "Power-Up " : "") + n.upperCaseFirst(e) + '"><input name="' + e +
                        '" class="rounded" type="number" min="0" max="' + i + '" placeholder="Max ' + i +
                        '" data-is-left="' + (t ? 1 : 0) + '" ' + a + "></div>"
                }(s, i > 0)
            })), o.innerHTML = "<h3>" + (t ? "Your Offer" : "Their Offer") + "</h3>" + c
        },
        removeSkin: function(e) {
            let t = this.settings.lastSkins.indexOf(e); - 1 !== t && this.settings.lastSkins.splice(t, 1), t = this.settings.favoriteSkins
                .indexOf(e), -1 !== t && this.settings.favoriteSkins.splice(t, 1), this.storeItem("flow", JSON.stringify(this.settings)),
                e === this.skin && (this.useSkin(""), this.connection.sendMessage("changeSkin", {
                    skin: ""
                }))
        },
        sendChatMessage: function(e) {
            var t = this;
            if (null == e && (e = this.chatBox.value), "" === e) return !1;
            if ("/" !== e.charAt(0) && null !== this.sentChatMsgAt && Date.now() - this.sentChatMsgAt < this.minChatMessageDelay) return !1;
            if ("/" === e.charAt(0) && null !== this.sentChatMsgAt && Date.now() - this.sentChatMsgAt < 500) return !1;
            e.length > this.maxChatMessageLength && (e = e.substr(0, this.maxChatMessageLength));
            let n = {
                    message: e = e.replace(/<3/g, "â¤"),
                    to: this.chatPartnerId
                },
                s = e.split(" "),
                i = s[0].toLowerCase();
            if (i && e.startsWith("/")) {
                let t = new Event("chatCommand", {
                    cancelable: !0
                });
                if (s.shift(), t.arguments = s, t.command = i, t.message = e, !window.dispatchEvent(t)) return
            }
            switch (i) {
                case "/traffic":
                    return void Swal.fire("Traffic", this.formatNumber(Math.round(this.receivedTrafficPerMinute)) +
                        " Bytes per Minute received");
                case "/respawn":
                    n.nickname = this.nickname;
                    break;
                case "/shrug":
                    n.message = "Â¯\\_(ãƒ„)_/Â¯";
                    break;
                case "/lag":
                    n.mesage = "/ping";
                case "/ping":
                    n.ping = this.ping;
                    break;
                case "/fps":
                    n.fps = this.fps;
                    break;
                case "/localtime":
                    n.message = "/time";
                case "/time":
                    n.localTime = (new Date).toLocaleString();
                    break;
                case "/session":
                    n.message = "/online";
                case "/online":
                    n.startedAt = this.startedAt;
                    break;
                case "/scores":
                    n.message = "/score";
                    break;
                case "/powers":
                    n.message = "/powerups";
                    break;
                case "/xp":
                    n.message = "/level";
                    break;
                case "/clock":
                    return void this.topMessage("There is no /clock command - did you mean /time?");
                case "/highscore":
                    return void this.topMessage("There is no /highscore command - did you mean /highscore<u>s</u>?", !0);
                case "/rank":
                    return void this.topMessage("There is no /rank command - did you mean /levelRank?");
                case "/hours":
                    return void this.topMessage("There is no /hours command - did you mean /played?");
                case "/skinid":
                    return void this.topMessage("There is no /skinid command - did you mean /skin?");
                case "/useskin":
                    return void this.topMessage("There is no /useskin command - did you mean /skin?");
                case "/wearables":
                    n.message = "/wearable" + e.substr(10);
                    break;
                case "/zoomreset":
                case "/resetzoom":
                    return void(this.scrollWheelZoom = 1);
                case "/clear":
                    return void(this.chatMessages.innerHTML = "");
                case "/windowsize":
                    return void window.setTimeout((function() {
                        t.topMessage("Your window size is: " + window.innerWidth + "px width & " + window.innerHeight +
                            "px height")
                    }), 100);
                case "/administrator":
                case "/admin":
                    let s = window.prompt("Please enter the admin password");
                    n.message = "/admin " + s;
                    break;
                case "/mod":
                case "/moderator":
                    let i = window.prompt("Please enter the moderator password");
                    n.message = "/moderator " + i;
                    break;
                case "/supporter":
                    let a = window.prompt("Please enter the supporter password");
                    n.message = "/supporter " + a;
                    break;
                case "/settings":
                    return void this.openSettings();
                case "/skins":
                    return void this.openSkinBrowser();
                case "/help":
                case "/help":
                    return void this.openHelp();
                case "/shop":
                    return void document.getElementById("menu-shop-button").click();
                case "/clan":
                    return void document.getElementById("menu-clan-button").click();
                case "/reload":
                    return void Swal.fire({
                        title: "Are you sure?",
                        icon: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Confirm"
                    }).then((function(e) {
                        e.value && window.location.reload()
                    }));
                case "/dm":
                case "/pm":
                    let o = e.split(" ")[1];
                    if (!o) return void this.topMessage("Specify the account name of the person you want to message"); {
                        this.changeChatPartner(o);
                        let s = e.substr(4 + o.length + 1);
                        if (0 === s.length) return void window.setTimeout((function() {
                            t.chatBox.focus()
                        }), 1);
                        n.message = s, n.to = this.chatPartnerId
                    }
            }
            this.connection.sendMessage("chatMessage", n), this.sentChatMsgAt = Date.now()
        },
        iterateChatPartners: function() {
            let e = this.chatPartners.indexOf(this.chatPartnerId) + 1;
            void 0 === this.chatPartners[e] && (e = 0), this.changeChatPartner(this.chatPartners[e])
        },
        changeChatPartner: function(e) {
            let t = "";
            switch (e) {
                case -1:
                    t = "Public";
                    break;
                case 0:
                    t = "Party";
                    break;
                default:
                    t = e
            }
            this.chatPartnerId = e, -1 === this.chatPartners.indexOf(e) && this.chatPartners.push(e);
            let n = document.getElementById("chat-partner");
            n.innerHTML = '<span class="partner-type-' + e + '">[' + t + "]</span>", this.chatBox.style.paddingLeft = n.clientWidth + "px"
        },
        renderChatMessage: function(e, t, n, s, i, a) {
            let o = this;
            if (void 0 !== o.mutedPlayers[i]) return;
            null == i && (i = ""), isNaN(s) || (s = this.roles[s]), t = (t = (t = (t = t.replace(/flowgame\.io/gi,
                "ð—³ð—¹ð—¼ð˜„ð—´ð—®ð—ºð—².ð—¶ð—¼")).replace(/flow\.io/gi, "ð—³ð—¹ð—¼ð˜„.ð—¶ð—¼")).replace(
                /flowy\.gg/gi, "ð—³ð—¹ð—¼ð˜„ð˜†.ð—´ð—´")).replace(/wynell\.website/gi,
                "ð˜„ð˜†ð—»ð—²ð—¹ð—¹.ð˜„ð—²ð—¯ð˜€ð—¶ð˜ð—²"), s && s.isStaff || (t = (t = t.replace(
                /[a-z]{4,}:\/\/[a-z]+\.*[a-z]*/g, "****")).replace(/[a-z]{4,}\.[a-z]{2,}/g, "****")), Object.keys(this.emojis).forEach((
                function(e) {
                    let n = new RegExp(e, "g");
                    t = t.replace(n, o.createEmojiImage(e))
                })), Object.keys(this.flags).forEach((function(e) {
                let n = o.flags[e],
                    s = new RegExp(":" + e + ":", "g");
                t = t.replace(s, o.createFlagImage(n)), s = new RegExp(":" + n + ":", "g"), t = t.replace(s, o.createFlagImage(
                    n))
            })), t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/O:\)/g, o
                    .createEmojiImage(":angel:"))).replace(/:\)/g, o
                    .createEmojiImage(":smile:"))).replace(/:-\)/g, o
                    .createEmojiImage(":smile:"))).replace(/:\(/g, o
                    .createEmojiImage(":sad:"))).replace(/:-\(/g, o
                    .createEmojiImage(":sad:"))).replace(/:\*\(/g, o
                    .createEmojiImage(":cry:"))).replace(/:D/g, o.createEmojiImage(
                    ":happy:"))).replace(/:-D/g, o.createEmojiImage(":happy:"))).replace(/:'D/g,
                    o.createEmojiImage(":sweat:"))).replace(/;\)/g, o.createEmojiImage(":wink:")))
                .replace(/;-\)/g, o.createEmojiImage(":wink:"))).replace(/:P/g, o.createEmojiImage(
                ":wink-tongue:"))).replace(/xD/g, o.createEmojiImage(":grinning:"))).replace(/:O/g, o
                .createEmojiImage(":surprised:"))).replace(/:\|/g, o.createEmojiImage(":serious:"))).replace(/:\*/g, o
                .createEmojiImage(":kiss-heart:"))).replace(/-__-/g, o.createEmojiImage(":serious:"))).replace(/â¤/g,
                '<span style="color: red">â¤</span>')).replace(/:sob:/g, o.createEmojiImage(":cry-a-lot:"))).replace(/:halo:/g, o
                .createEmojiImage(":angel:"));
            let r = "";
            a === this.chatPartnerIdParty ? r = '<span style="color: #c3ff00">[Party]</span> ' : a !== this.chatPartnerIdPublic &&
                void 0 !== a && (r = '<span style="color: #019fe3">[PM]</span> ', e !== this.accountName && -1 === this.chatPartners
                    .indexOf(e) && this.chatPartners.push(e));
            let c = ++this.lastChatMessageId,
                l = "At " + (new Date).toLocaleTimeString() + " from player #" + (i || "system"),
                d = r;
            s && s.icon && (d += '<img src="assets/' + s.icon + '.png" alt="system-icon"> '), s !== this.roles[1] && (d +=
                    '<span class="nickname" style="color: ' + n + '">' + e + '</span><span class="spacer">:</span>'), d +=
                '<span class="message">' + t + "</span>";
            let u = document.createElement("div");
            return u.classList.add("chat-message"), s === this.roles[1] && u.classList.add("system"), u.setAttribute("data-tooltip", l), u
                .setAttribute("data-id", c), u.setAttribute("data-sender-id", i), a && u.setAttribute("data-to", a), u.innerHTML = d, this
                .chatMessages.appendChild(u), "chat-messages" !== document.activeElement.id && window.setTimeout((function() {
                    o.chatMessages.scrollTo(0, 1e6)
                }), 1), window.setTimeout((function() {
                    let e = o.chatMessages.querySelector('[data-id="' + c + '"]');
                    e && e.classList.add("old")
                }), 12e4), this.chatMessages.querySelector(".chat-message:last-child")
        },
        createEmojiImage: function(e, t) {
            return '<img class="emoji" src="assets/emojis/' + this.emojis[e] + (!1 !== t ? "_tiny" : "") + '.png" alt="' + e +
                '" data-tooltip="' + e + '">'
        },
        createFlagImage: function(e) {
            return '<img src="assets/flags/' + e + '.png" alt="' + e + '">'
        },
        shout: function(e) {
            let t = this;
            Date.now() - t.lastShoutAt < t.shoutCoolDown ? t.topMessage("You need to wait " + t.formatMilliseconds(t.shoutCoolDown - (Date
                .now() - t.lastShoutAt)) + ".") : Swal.fire({
                title: "Shout?",
                text: "Shout on all servers for " + this.formatNumber(this.shoutCost) + " coins?",
                icon: "question",
                showCancelButton: !0,
                confirmButtonText: "Shout"
            }).then((function(n) {
                n.value && t.sendChatMessage("/shout " + e)
            }))
        },
        requestAutoLogin: function() {
            let e = this.loginToken ? this.loginToken : this.getStoredItem("loginToken");
            if (null !== e) {
                let t = {
                    accountName: this.getStoredItem("accountName"),
                    loginToken: e,
                    visibility: this.settings.visibility,
                    activeWearables: this.settings.activeWearables
                };
                this.connection.sendMessage("autoLogin", t)
            }
        },
        login: function(e) {
            var t = this;
            this.level = this.calculateLevel(e.playerStats.xp), this.accountName = e.accountName, this.loginToken = e.loginToken, this
                .storeItem("accountName", this.accountName), this.storeItem("loginToken", this.loginToken);
            let n = document.getElementById("account-name");
            n.innerText = this.accountName, n.setAttribute("data-tooltip", "Account name: " + this.accountName + ", email address: " + e
                    .email), this.updateMenuStats(e.playerStats.xp, e.playerStats.coins), document.getElementById("logged-in").classList
                .remove("hidden"), document.getElementById("logged-out").classList.add("hidden");
            let s = '<option value="0">None</option>';
            e.roles.forEach((function(e) {
                    s += '<option value="' + e + '">' + t.roles[e].name + "</option>", t.roles[e].isStaff && t.contextMenu
                        .querySelector(".moderation").classList.remove("hidden")
                })), document.getElementById("settings-modal").querySelector('.tab-account [data-setting="activeRole"]').innerHTML = s, t
                .getQueryParam("passwordToken") && sessionStorage.setItem("changedPassword", "1")
        },
        updateMenuStats: function(e, t) {
            this.level = this.calculateLevel(e), document.querySelector("#menu .level").innerText = "Level: " + this.level, document
                .querySelector("#menu .next-level").innerText = "Next: " + (this.level + 1);
            let n = Math.floor(this.calculatePercentOfNextLevel(e));
            document.querySelector("#menu .xp-bar .caption").innerText = n + "%", document.querySelector("#menu .xp-bar .value").style
                .width = n + "%", this.onCoins({
                    coins: t
                })
        },
        logout: function() {
            this.accountName = null, this.loginToken = null, this.removeStoredItem("loginName"), this.removeStoredItem("loginToken"),
                document.getElementById("logged-in").classList.add("hidden"), document.getElementById("logged-out").classList.remove(
                    "hidden"), this.contextMenu.querySelector(".moderation").classList.add("hidden"), this.connection.sendMessage("logout")
        },
        getSelectedServerIp: function() {
            let e = document.querySelector("#servers .active");
            return e ? e.getAttribute("data-ip") : null
        },
        changeZoom(e) {
            e > 0 ? (this.scrollWheelZoom *= 1 - this.settings.scrollWheelZoomSpeed / 70 * .1, !this.settings.infinityZoom && this
                    .scrollWheelZoom < .9 && this.isAlive && (this.scrollWheelZoom = .9)) : this.scrollWheelZoom *= 1 + this.settings
                .scrollWheelZoomSpeed / 70 * .1, this.scrollWheelZoom = Math.min(Math.max(this.scrollWheelZoom, .05), 3)
        },
        updateTeam: function(e) {
            let t = document.querySelector("#team select"),
                n = "";
            this.serverConfig.teams.forEach((function(t, s) {
                    n += '<option value="' + (s + 1) + '" ' + (s + 1 === e ? 'selected="selected"' : "") + ">" + t + "</option>"
                })), t.innerHTML = n, n ? document.getElementById("team").classList.remove("hidden") : document.getElementById("team")
                .classList.add("hidden")
        },
        cleanUpNameCache: function() {
            var e = Date.now() - 3e4;
            Object.values(this.nicknameCache).forEach((t => {
                for (let n in t.cache) t.cache[n].lastAccessed < e && delete t.cache[n]
            }))
        },
        takeKeyState: function(e) {
            let t = void 0 !== this.keys[e] && this.keys[e].pressed && !this.keys[e].used;
            return this.keys[e] && this.keys[e].pressed && (this.keys[e].used = !0), t
        },
        topMessage: function(e, t) {
            var n = this,
                s = document.getElementById("top-message-bar");
            t ? s.innerHTML = e : s.innerText = e, s.classList.remove("hidden"), window.clearTimeout(n.messageTimeoutId), n
                .messageTimeoutId = window.setTimeout((function() {
                    (null === n.lastActionAt || Date.now() - n.lastActionAt < 15e3) && s.classList.add("hidden")
                }), 5e3)
        },
        resizeElements: function() {
            let e = Number(this.settings.renderQuality);
            this.canvas.width = window.innerWidth / e, this.canvas.height = window.innerHeight / e, this.canvas.style.width = window
                .innerWidth + "px", this.canvas.style.height = window.innerHeight + "px", this.miniMap.width = this.leaderboard
                .offsetWidth ? this.leaderboard.offsetWidth : 208, this.miniMap.height = this.miniMap.width
        },
        hideContextMenu: function() {
            document.querySelectorAll(".context-menu").forEach((function(e) {
                e.classList.add("hidden")
            }))
        },
        download: function(e, t, n) {
            void 0 === n && (n = "data:text/plain;charset=utf-8,");
            let s = document.createElement("a");
            s.setAttribute("href", n + t), s.setAttribute("download", e), s.style.display = "none", document.body.appendChild(s), s.click(),
                document.body.removeChild(s)
        },
        resolveIp: function(e) {
            return "." === e ? this.internalDomain : e
        },
        resolveAssetUrl: function(e) {
            return "localhost" === this.serverIp || "file:///" === window.location.href.substr(0, 8) ? e : ("/" !== e[0] && (e = "/" + e),
                "http://" + this.internalDomain + e)
        },
        beautifyKeyName: function(e) {
            return "Key" === e.substr(0, 3) ? e.substr(3) : e
        },
        isMobileDevice: function() {
            return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
        },
        isWriting: function() {
            return "text" === document.activeElement.type || "password" === document.activeElement.type || "textarea" === document
                .activeElement.type
        },
        getStoredItem: function(e) {
            return this.canStore ? localStorage.getItem(e) : void 0
        },
        storeItem: function(e, t) {
            this.canStore && localStorage.setItem(e, t)
        },
        removeStoredItem: function(e) {
            this.canStore && localStorage.removeItem(e)
        },
        getQueryParam: function(e) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g,
                "%20")) || null
        },
        getMetaTag: function(e) {
            let t = document.getElementsByTagName("META");
            for (let n = 0; n < t.length; n++)
                if (t[n].getAttribute("name") === e) return t[n].getAttribute("content");
            return null
        },
        ajax: function(e, t) {
            let n = new XMLHttpRequest;
            "object" != typeof t && (t = {}), t = Object.assign({
                method: "GET",
                onSuccess: null,
                onError: null
            }, t), n.onreadystatechange = function() {
                4 === this.readyState && (0 === this.status || this.status >= 200 && this.status < 400 ? t.onSuccess && t.onSuccess(this
                    .responseText) : this.status >= 300 && t.onError && t.onError(this.responseText))
            }, n.open(t.method, e, !0), n.send()
        }
    };
    Object.assign(flow, module.exports), flow.init()
}));
