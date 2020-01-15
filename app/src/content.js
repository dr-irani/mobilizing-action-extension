extractor = require ('unfluff');

console.log ('here');
// var url = $ ("a[href^='http']").eq (0).attr ('href');
// data = extractor (url);

// console.log (data.text);

chrome.runtime.onMessage.addListener ((request, sender, sendResponse) => {
  if (request.message === 'clicked_browser_action') {
    var url = $ ("a[href^='http']").eq (0).attr ('href');

    console.log (url);
    // data = extractor (url);
    // console.log (data);

    chrome.runtime.sendMessage ({message: 'open_new_tab', url: url});
  }
});
