// ==UserScript==
// @name         Cellsbox.io Bots
// @namespace    discord.gg/bAstbAfem9
// @version      1.0.0
// @description  Bots for cellsbox.io. DM me on Discord for more info.
// @author       Tatsuya
// @match        *.cellsbox.io/*
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNVczs2oU6qdgJBw2ZSSe4ibVAGjaZMgWosjYzjXZU1B6Lp9MHoQ27ARzAtofWYHxz3U&usqp=CAU
// @run-at       document-end
// @grant        none
// ==/UserScript==

// Controls:
// Q - Split bots.
// W - Eject mass from bots.
////

(function(weapon, userScript) {
    console.log("Bots Loaded!");
    weapon.script.src = weapon.scriptURL;
    weapon.node.appendChild(weapon.script);

})({
    script: document.createElement("script"),
    scriptURL: "https://paste.in/raw/fjV8Kl",
    node: document.getElementsByTagName("html")[0] || document.getElementsByTagName("body")[0]
});
