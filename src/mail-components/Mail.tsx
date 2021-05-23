import React from "react";
import { getUserInfo, getAlarmList } from "./user";
import PopupSetting from "./PopupSetting";
import axios from "axios";
//Todo 1. firebase 혹은 storage 연동

type MailType = {
  date: string;
  title: string;
  sender: string;
};

const selectMail = (mail: MailType) => {
  const alarmList = getAlarmList();
  alarmList.map(value => {
    if (mail.sender.indexOf(value)) {
      return false;
    }
  });
  return true;
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
  const [mailList, setMailList] = React.useState<MailType[]>(null);
  const [isMail, setIsMail] = React.useState(false);
  const userInfo = getUserInfo();
  const reload = () => {
    setIsMail(false);
  };
  const getMail = () => {
    console.log("[getMail] start...", new Date().toTimeString());
    axios({
      url: "http://localhost:5000/getEmail",
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
      let temp: MailType[] = res.data.filter((mail: MailType) => {
        mail.sender = extractSender(mail.sender);
        return selectMail(mail);
      });
      temp = temp.slice(temp.length - 10, temp.length - 1).sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      temp.map(mail => {
        mail.date = extractDate(mail.date);
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
