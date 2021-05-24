export const getAlarmList = () => {
  const current = localStorage.getItem("mailInfo.alarmList");
  let alarmList = [];
  if (current) {
    alarmList = JSON.parse(current);
  }
  return alarmList;
};
export const addAlarmList = (value: string) => {
  const current = localStorage.getItem("mailInfo.alarmList");
  let alarmList = [];
  if (current) {
    alarmList = JSON.parse(current);
  }
  alarmList.push(value);
  localStorage.setItem("mailInfo.alarmList", JSON.stringify(alarmList));
};
export const setAlarmList = (alarmList: string[]) => {
  if (typeof alarmList === typeof "string") {
    localStorage.setItem("mailInfo.alarmList", JSON.stringify([alarmList]));
  } else {
    localStorage.setItem("mailInfo.alarmList", JSON.stringify(alarmList));
  }
};
export const removeAlarmList = () => {
  localStorage.removeItem("mailInfo.alarmList");
};
export const getUserInfo = () => {
  const email = localStorage.getItem("mailInfo.email");
  const password = localStorage.getItem("mailInfo.password");
  const host = localStorage.getItem("mailInfo.host");
  const result = {
    email,
    password,
    host,
  };
  return result;
};
export const setUserInfo = (email: string, password: string, host: string) => {
  localStorage.setItem("mailInfo.email", email);
  localStorage.setItem("mailInfo.password", password);
  localStorage.setItem("mailInfo.host", host);
};
