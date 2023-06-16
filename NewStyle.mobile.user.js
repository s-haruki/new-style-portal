// ==UserScript==
// @name        NewStyle for mobile safari
// @namespace   https://github.com/s-haruki/
// @version     0.7
// @updateURL   https://s-haruki.github.io/new-style-portal/NewStyle.user.js
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
})();
