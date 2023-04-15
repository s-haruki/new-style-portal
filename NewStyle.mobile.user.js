// ==UserScript==
// @name        NewStyle for mobile safari
// @namespace   https://gist.githubusercontent.com/suyo-haru/
// @version     0.4
// @description Change Style
// @author      suyoharu
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