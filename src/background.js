
console.log("Loaded extension");

function blockRequest(details) {
   return {cancel: true};

}

// function updateFilters(urls) {
//    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
//      chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//     chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
//     {urls: ["*://*.youtube.com/*", "*://*.facebook.com/*"]}, ['blocking']);
// }

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
      chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
     chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
     {urls: ["*://*.youtube.com/*", "*://*.facebook.com/*"]}, ['blocking']);
 }

updateFilters();





// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         return {cancel: details.url.indexOf("://www.evil.com/") != -1};
//     },
//     {urls: [ "*://facebook.com/*",
//     "*://youtube.com/*",
//     "*://naver.com/*",
//     "*://youtube.com/"]},
//     ["blocking"]
// );
