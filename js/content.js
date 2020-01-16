// import * from 'unfluff' as extractor;
extractor = require ('unfluff');

chrome.runtime.onMessage.addListener ((request, sender, sendResponse) => {
  if (request.message === 'clicked_browser_action') {
    // var firstHref = $ ("a[href^='http']").eq (0).attr ('href');
    const url = $ (location).attr ('href');

    console.log (url);
    data = extractor (url);
    console.log (data.text);

    chrome.runtime.sendMessage ({message: 'open_new_tab', url: url});
  }
});
