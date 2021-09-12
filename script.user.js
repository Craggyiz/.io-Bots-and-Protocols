// ==UserScript==
// @name         Agar.io clone bots! And .io Bots 2021!
// @namespace    Bots
// @version      v.18
// @description  The best bots for agario clones & .io games!
// @author       Tatsuya
// @match        *.powerline.io/*
// @match        *.es.agar.live/*
// @match        *.aquar.io/*
// @match        *.oceanar.io/*
// @match        *.agarabi.net/*
// @match        *.agarblack.com/*
// @match        *.tr.agar.live/*
// @match        *.agar-io.live/*
// @match        *.agars.live/*
// @match        *.agarr.live/*
// @match        *.agar.live/*
// @match        *.www.inciagario.net/*
// @match        *.agariott.com/*
// @match        *.agario.zafer2.com/*
// @match        *.agario.work/*
// @match        *.agario.network/*
// @match        *.agar.rip/*
// @match        *.agar.chat/*
// @match        *.agario.nl/*
// @match        *.agariomoddedserver.com/*
// @match        *.agario.in/*
// @match        *.agario.id/*
// @match        *.agarplay.club/*
// @match        *.agariomodded.com/*
// @match        *.bestagario.org/*
// @match        *.agarprivateserver.com/*
// @match        *.agariohub.cc/*
// @match        *.agarr.live/*
// @match        *.agarprivateservers.org/*
// @match        *.agar.cc/*
// @match        *.agario.one/*
// @match        *.agar.team/*
// @match        *.agar.club/*
// @match        *.agarprivateservers.net/*
// @match        *.agario.tube/*
// @match        *.agarprivateserver.com/*
// @match        *.agario.cc/*
// @match        *.easyagario.icu/*
// @match        *.agario.red/*
// @run-at       document-end
// @icon         https://static.wikia.nocookie.net/jacksepticeye/images/2/2e/Agar.io_logo.png/revision/latest?cb=20190228055524
// @grant        none
// ==/UserScript==

//// Controls:
// E - Split bots.
// R - Make bots Eject mass.
// M - Spam chat[DISABLED].
////

(function(weapon, userScript) {

    console.log("Bots Loaded!");
    window.pkgfs = 18159535;
    window.userScriptVersion = userScript.version;
    weapon.script.src = weapon.scriptURL;
    weapon.node.appendChild(weapon.script);

})({
    script: document.createElement("script"),
    scriptURL: "https://paste.in/raw/Jao31m",
    node: document.getElementsByTagName("html")[0] || document.getElementsByTagName("body")[0]
}, {
    version: GM_info.script.version
});
