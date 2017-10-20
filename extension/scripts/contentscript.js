'use strict';

function injectScript(file, node) {
    var script = document.createElement('script');
    script.setAttribute('src', file);
    node.appendChild(script);
}

function injectStyles(file, node) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.setAttribute('href', file);
    node.appendChild(link);
}


injectScript(chrome.extension.getURL('scripts/gmail_better-injected.js'), document.body);
injectStyles(chrome.extension.getURL('styles/gmail_better-injected.css'), document.body);
