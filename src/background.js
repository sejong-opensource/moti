<<<<<<< HEAD
const setItem = (val)=>{
   localStorage.setItem("url",val);
}
console.log("Loaded extension");
const localurl = localStorage.getItem("url");
console.log(localurl);
 
//let urlPattern = localurl;
// const isValidPattern = (urlPattern) => {
//    var validPattern = /^(file:\/\/.+)|(https?|ftp|\*):\/\/(\*|\*\.([^\/*]+)|([^\/*]+))\//g;
//    console.log(urlPattern.match(validPattern));
//    return !!urlPattern.match(validPattern);
//    //test  urlPattern.match(validPattern); VS !!urlPattern.match(validPattern)
//  }

function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: [urls]}, ['blocking']);
}

updateFilters("*://*.facebook.com/*");
//-----------------------------------------------------------------------------------------------------------------------------
//chrome.storage.sync.set({'A':{"maxtime":50,"curtime":5}},()=>console.log('done'))

// const urls = {
//    'A': {
//       maxtime : 50,
//       curtime : 5
//    },
//    'B' :{
//       maxtime : 50,
//       curtime : 5
//    },
// }

// setInterval(()=>{
//    chrome.webRequest.onBeforeRequest.addListener(function(details) {
//       console.log('onBeforeRequest', details.url);
//       banUrl == url 
//       cnt ++;
//       chrome(set)
//       if(chrome.max == chrome(set)){
//          url -> pattern

//             // updateFilters(["*://*.youtube.com/*"]);
//       }
//     },
//     {
//       urls: ["<all_urls>"]
//     })
// },1000)
// let cnt = 50;
// setInterval(()=>{
//    cnt=cnt+1;
//    chrome.storage.sync.set({'A':{"maxtime":50,"curtime":cnt}},()=>console.log('done'))
//    chrome.storage.sync.get(['A'],(result)=>console.log(result))
// },2000)

// setInterval(()=>{
//    (1) 현재 접속한 url 
//    (2) if(url => urls pattern){
//       timeCnt[2] = timeCnt[2] + 1;
//       if(max =< timeCnt) 
//    }
   
// },1000);
=======

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
>>>>>>> New/add-timetracker-service
