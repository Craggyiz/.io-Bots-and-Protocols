// ==UserScript==
// @name         Xero-Bots | .io & Agar.io Clone Bots
// @namespace    Discord.gg/bAstbAfem9
// @version      1.0.1
// @description  The best open sourced bots for .io & agar.io clone games, an improved version of my original.
// @author       Tatsuya
// @match        *.cellsbox.io/*
// @match        *.oceanar.io/*
// @match        *.aquar.io/*
// @run-at       document-end
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNVczs2oU6qdgJBw2ZSSe4ibVAGjaZMgWosjYzjXZU1B6Lp9MHoQ27ARzAtofWYHxz3U&usqp=CAU
// @grant        none
// ==/UserScript==

// Controls:
// Z - Split
// X - Eject
// C - Chatspam [Disabled]
///////////

(function(weapon, userScript) {
    weapon.script.src = weapon.scriptURL;
    weapon.node.appendChild(weapon.script);

})({
    script: document.createElement("script"),
    scriptURL: "https://paste.in/raw/37HJi9",
    node: document.getElementsByTagName("html")[0] || document.getElementsByTagName("body")[0]
});
