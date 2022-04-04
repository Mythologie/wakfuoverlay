// ==UserScript==
// @name         Wakfu Time
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  C'est l'heure de s'inscrire dans l'histoire.
// @author       Mythologie
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://img1.freepng.fr/20180609/lii/kisspng-dofus-the-brotherhood-of-the-tofu-video-ankama-wak-mini-wakfu-5b1b808e2caaf9.573382561528529038183.jpg
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/Mythologie/wakfuoverlay/main/WakfuOverlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}