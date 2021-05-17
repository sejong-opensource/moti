import React from "react";
import { getUserInfo, getAlarmList } from "./user";
import PopupSetting from "./PopupSetting";
import axios from "axios";
//Todo 1. firebase 혹은 storage 연동

type mail = {
  date: string;
  title: string;
  sender: string;
};

const selectMail = (mail: mail) => {
  const alarmList = getAlarmList();
  let result = true;
  alarmList.map(value => {
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
  const [mailList, setMailList] = React.useState<mail[]>(null);
  const [isMail, setIsMail] = React.useState(false);
  const userInfo = getUserInfo();
  const reload = () => {
    setIsMail(false);
  };
  const getMail = () => {
    console.log("[getMail] start...", new Date().toTimeString());
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
    }).then(res => {
      let temp = res.data.filter((mail: mail) => {
        mail.sender = extractSender(mail.sender);
        mail.date = extractDate(mail.date);
        return selectMail(mail);
      });
      setMailList(temp);
      console.log("[getMail] end...", new Date().toTimeString());
      setIsMail(true);
    });
  };
  React.useEffect(() => {
    if (!isMail) {
      getMail();
    }
  });
  return (
    <div>
      <PopupSetting callback={reload} />
      <button
        onClick={() => {
          getMail();
        }}
      >
        GET EMAIL
      </button>
      <ul>
        {mailList
          ? mailList.map(mail => (
              <li>
                {mail.title} / {mail.date} / {mail.sender}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Mail;
