"use strict";

const is_release = true;
var ua = "User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0";

var whatsAppWeb = "*://*.whatsapp.com/*";

function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader, {
        urls: [whatsAppWeb]
    },
    ["blocking", "requestHeaders"]
);

function debug_msg(message) {
    if (is_release) {
        return;
    }
    console.debug("Whatstab: " + message);
}

debug_msg("Loading");


function openNewTab(tab_url) {
    debug_msg(`Opening tab with url: ${tab_url}`);
    browser.tabs.create({
        url: tab_url
    });
}


if ("browserAction" in browser) {

    debug_msg("Has permision for browserAction");
    
    browser.browserAction.onClicked.addListener(async () => {
        openNewTab("https://web.whatsapp.com");
    });
} else {
    openNewTab("https://web.whatsapp.com");
}

debug_msg("Loaded");
