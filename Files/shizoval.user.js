// ==UserScript==
// @name P1x3l Shizoval
// @version 1.0
// @description Just a Tanki Online Cheat :)
// @author P1x3l
// @match https://*.tankionline.com/*
// @require https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js
// @icon https://github.com/P1x3L-EXE/P1x3l-Shizoval/raw/main/heart.png
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/P1x3L-EXE/P1x3l-Shizoval/raw/main/Files/shizoval.min.js',
    nocache: true,
    onload: data => eval(data.responseText)
})
