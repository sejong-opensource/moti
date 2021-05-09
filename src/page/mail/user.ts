const userInfo = {
  email: "",
  password: "",
  host: "",
};

export const getUserInfo = () => {
  return userInfo;
};
export const setUserInfo = (email: string, password: string, host: string) => {
  userInfo.email = email;
  userInfo.password = password;
  userInfo.host = host;
};
