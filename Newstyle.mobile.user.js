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
    let st = document.createElement("link");
    st.rel = "stylesheet";
    st.charset = "utf-8";
    st.href = "https://s-haruki.github.io/new-style-portal/NewStyle.mobile.css";
    document.head.appendChild(st);
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
