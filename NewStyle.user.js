// ==UserScript==
// @name        NewStyle
// @namespace   https://github.com/s-haruki/
// @version     0.5
// @description Change Style
// @author      s-haruki
// @match       https://portal.onomichi-u.ac.jp/up/faces/up/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    const metaEl = document.createElement("meta");
    metaEl.name = "viewport";
    metaEl.content = "width=device-width,initial-scale=1";
    document.head.appendChild(metaEl);
    document.querySelectorAll(".informationStyle .title").forEach((child) => {
        if (!child.getElementsByClassName("outputLinkEx").length) {
            const id = child.getElementsByClassName("outputText")[0].id
            document.getElementById(id).parentElement.className = "title empty"
        }
    })
})();
