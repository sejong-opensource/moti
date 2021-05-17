const userUrls = {
   url:"*://*.facebook.com/*"
  };

  export const getUserInfo = () => {
    return userUrls;
  };
  export const setUserInfo = (url:string) => {
   userUrls.url=url;
  };
  