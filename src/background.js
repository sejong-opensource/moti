
const isValidPattern = (urlPattern) => {
   var validPattern = /^(file:\/\/.+)|(https?|ftp|\*):\/\/(\*|\*\.([^\/*]+)|([^\/*]+))\//g;
   console.log(urlPattern.match(validPattern));
   return !!urlPattern.match(validPattern);
   //test  urlPattern.match(validPattern); VS !!urlPattern.match(validPattern)
 }



console.log("back");
function blockRequest(details) {
   return {cancel: true};
}

function upDateFilters(urls) { //=>urls에 통째로 배열넣기
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
     console.log("in blocking function",typeof urls);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls:urls}, ['blocking']);
}

//upDateFilters("*://*.facebook.com/*");
//upDateFilters();


chrome.runtime.onConnect.addListener(function(port) {
   port.onMessage.addListener(function(msg) {
      console.log("print background : " + msg);
        localStorage.setItem("urls",JSON.stringify(msg));
        upDateFilters(msg);
        console.log(JSON.parse(localStorage.getItem("urls")));
        });
})

