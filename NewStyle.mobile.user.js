// ==UserScript==
// @name        NewStyle for mobile safari
// @namespace   https://github.com/s-haruki/
// @version     0.5
// @updateURL   https://s-haruki.github.io/new-style-portal/NewStyle.mobile.user.js
// @description Change Style
// @author      s-haruki
// @match       https://portal.onomichi-u.ac.jp/up/faces/up/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    
    /* viewport */
    const metaEl = document.createElement("meta");
    metaEl.name = "viewport";
    metaEl.content = "width=device-width,initial-scale=1";
    document.head.appendChild(metaEl);
    
    /* 掲示板の空欄を除去 */
    document.querySelectorAll(".informationStyle .title").forEach((child) => {
        if (!child.getElementsByClassName("outputLinkEx").length) {
            const id = child.getElementsByClassName("outputText")[0].id;
            document.getElementById(id).parentElement.className = "title empty";
        }
    });
    
    /* css読み込み時にスクロールがズレるのを戻す */
    window.onload = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    };
})();
