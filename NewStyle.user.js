// ==UserScript==
// @name        NewStyle
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

    const styleEl = document.createElement("style");
    styleEl.textContent = `
file-preview {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
`
    document.body.appendChild(styleEl)

    class FilePreviewer extends HTMLElement {
        // Specify observed attributes so that
        // attributeChangedCallback will work
        static get observedAttributes() {
            return ['data', 'onclose'];
        }

        constructor() {
            // Always call super first in constructor
            super();

            const shadow = this.attachShadow({mode: 'open'});

            const style = document.createElement('style');
            style.textContent = `
    div, object {
      width: 100%;
      height: 100%;
    }
    button {
      right: 0;
      position: absolute;
      z-index: 1;
    }
    `
            const button = document.createElement('button');
            button.innerHTML = "閉じる"
            button.addEventListener("click", () => {
                document.getElementsByTagName("file-preview")[0].remove()
            })
            const div = document.createElement('div');
            const obj = document.createElement('object');
            obj.height = "400"
            obj.width = "300"
            obj.type = "application/pdf"
            div.appendChild(obj);
            div.appendChild(button);
            shadow.appendChild(div);
            shadow.appendChild(style);
        }

        connectedCallback() {
            update(this);
        }

        adoptedCallback() {
        }

        attributeChangedCallback(name, oldValue, newValue) {
            update(this);
        }
    }

    function update(elem) {
        const shadow = elem.shadowRoot;
        shadow.querySelector('object').data = elem.getAttribute("data")
        shadow.querySelector('button').onclick = elem.getAttribute("onclose")
        console.log(elem.getAttribute("onclose"));
    }

    customElements.define('file-preview', FilePreviewer);

    const dlTds = document.getElementsByClassName("dlButton")

    for (const dlTd of dlTds) {
        dlTd.children[0].onclick = async function (e) {
            if (!e.target.parentElement.parentElement.getElementsByClassName("fileName")[0].children[0].innerText.endsWith(".pdf")) return cancelSubmitCtrl();
            e.preventDefault()
            const paramJson = {
                "form1:htmlParentFormId": "",
                "form1:htmlDelMark": "",
                "form1:htmlRowKeep": "",
                "com.sun.faces.VIEW": document.getElementById("com.sun.faces.VIEW").value,
                "form1": "form1"}

            paramJson[e.target.id + ".x"] = "0"
            paramJson[e.target.id + ".y"] = "0"

            const param = new URLSearchParams(paramJson)

            const res = await fetch("./pPoa0202A.jsp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: param.toString()
            })

            const resBlob = await res.blob()
            const blob = resBlob.slice(0, resBlob.size, "application/pdf");
            const url = URL.createObjectURL(blob, "_blank")

            const el = document.createElement("file-preview")
            el.setAttribute("data", url);

            document.body.appendChild(el)
        }
    }
})();
