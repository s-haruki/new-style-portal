// ==UserScript==
// @name        NewStyle for safari
// @namespace   https://gist.githubusercontent.com/suyo-haru/
// @version     0.4
// @description Change Style
// @author      suyoharu
// @match       https://portal.onomichi-u.ac.jp/up/faces/up/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = "https://raw.githubusercontent.com/s-haruki/new-style-portal/main/NewStyle.user.css";
    linkEl.crossorigin = "anonymous";
    document.head.appendChild(linkEl);
    const metaEl = document.createElement("meta");
    metaEl.name = "viewport";
    metaEl.content = "width=device-width,initial-scale=1";
    document.head.appendChild(metaEl);
    document.querySelectorAll(".informationStyle .title").forEach((child) => {
        if (!child.getElementsByClassName("outputLinkEx").length) {
            const id = child.getElementsByClassName("outputText")[0].id;
            document.getElementById(id).parentElement.className = "title empty";
        }
    });
    window.onload = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    };
})();
