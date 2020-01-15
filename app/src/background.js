chrome.browserAction.onClicked.addListener (tab => {
  chrome.tabs.query ({active: true, currentWindow: true}, tabs => {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage (activeTab.id, {message: 'clicked_browser_action'});
  });
});

chrome.runtime.onMessage.addListener ((request, sender, sendResponse) => {
  if (request.message === 'open_new_tab') {
    chrome.tabs.create ({url: request.url});
  }
});
