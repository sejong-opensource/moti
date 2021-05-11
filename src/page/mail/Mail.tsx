import React from "react";
import { getUserInfo, getAlarmList } from "./user";
import PopupSetting from "./PopupSetting";
import axios from "axios";
//Todo
// 2.  이메일 필터링 기능 ( 도메인, 발신자)
// 3.  출력

type mail = {
  date: string;
  title: string;
  sender: string;
};
const selectMail = (mail: mail) => {
  const alarmList = getAlarmList();
  let result = true;
  alarmList.map((value) => {
    if (mail.sender.indexOf(value)) {
      result = false;
    }
  });
  return result;
};
const extractSender = (email: string) => {
  const start = email.indexOf("<");
  const end = email.indexOf(">");
  const result = email.slice(start + 1, end);
  return result;
};
const extractDate = (date: string) => {
  const result = new Date(date).toDateString();
  return result;
};
const Mail = () => {
  const userInfo = getUserInfo();
  let emailList: mail[] = [];
  const getMail = () => {
    axios({
      url: "http://localhost:3002/getEmail",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        email: userInfo.email,
        password: userInfo.password,
        host: userInfo.host,
      },
    }).then((res) => {
      emailList = res.data.map((mail: mail) => {
        // console.log(extractSender(email.sender));
        // console.log(extractDate(email.date));
        if (selectMail(mail)) {
          return mail;
        }
      });

      console.log(emailList);
    });
  };
  getMail();
  return (
    <div>
      <PopupSetting />
      <button
        onClick={async () => {
          getMail();
        }}
      >
        GET EMAIL
      </button>
      <ul></ul>
    </div>
  );
};

export default Mail;
