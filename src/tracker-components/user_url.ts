const userUrls = {
  url:"*://*.facebook.com/*",
  maxTime:0,
  curTime:0
 };

 export const getURLInfo = () => {
   return userUrls;
 };
 
 export const setUserInfo = (url:string, maxTime:number, curTime : number ) => {
  userUrls.url=url;
  userUrls.maxTime = maxTime;
  userUrls.curTime = curTime;
 };
 