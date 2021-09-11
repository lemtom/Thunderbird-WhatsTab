const is_release = true;

function debug_msg(message){
  if(is_release){
    return;
  }
  console.debug("Whatstab: " + message);
}

debug_msg("Loading");

function openNewTab(tab_url){
  debug_msg(`Opening tab with url: ${tab_url}`);
  browser.tabs.create({ url: tab_url });
}

if ("browserAction" in browser) {
  debug_msg("Has permision for browserAction");

  browser.browserAction.onClicked.addListener(async () => {
    openNewTab("http://web.whatsapp.com");
  });
} else {
  openNewTab("http://web.whatsapp.com");
}

debug_msg("Loaded");
