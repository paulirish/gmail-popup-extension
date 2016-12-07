'use strict';



var popupWindowConfig = {
  menubar: false,
  location: false,
  resizable: true,
  scrollbars: false,
  status: false
};

chrome.browserAction.onClicked.addListener(buttonClick);

function buttonClick() {
  const features = Object.keys(popupWindowConfig).map(key => `${key}=${popupWindowConfig[key] ? 'yes' : 'no'}`).join(',')
  window.open('https://mail.google.com/', '_gmailpopup', features)
}

chrome.browserAction.setBadgeText({text: 'gmail'});

