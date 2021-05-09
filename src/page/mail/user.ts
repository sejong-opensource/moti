const userInfo = {
  email: "98gudcks@gmail.com",
  password: "ehlswkd1!!",
  host: "imap.gmail.com",
};

export const getUserInfo = () => {
  return userInfo;
};
export const setUserInfo = (email: string, password: string, host: string) => {
  userInfo.email = email;
  userInfo.password = password;
  userInfo.host = host;
};
