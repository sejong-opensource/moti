import React from "react";
import { getUserInfo, getAlarmList } from "./user";
import PopupSetting from "./PopupSetting";
import axios from "axios";
import styled from "styled-components";
//Todo 1. firebase 혹은 storage 연동

type MailType = {
  date: string;
  title: string;
  sender: string;
};
const Style = styled.div `
.list::-webkit-scrollbar{
    display: none;
  }
`
const ButtonStyle = styled.div`
margin-bottom: .5rem;
  display: flex;
  padding: 0.3rem;
  button {
    margin-top: 1rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    width: 8rem;
    height: 3rem;
    border-radius: 0.3rem;
    border: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.95);
    color: rgba(255, 255, 255, 0.95);
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.95);
      color: black;
    }
  }
`

const ListStyle = styled.div `
  list-style-type: square;
  color: rgb(230, 231, 232);
  font-size: 20px;
  height: 20vh;
  overflow-y:scroll;
  -ms-overflow-style: none; 
`
const selectMail = (mail: MailType) => {
  let result = false;
  const alarmList = getAlarmList();
  console.log(alarmList);
  alarmList.map((value) => {
    console.log("[sender]", mail.sender);
    if (mail.sender.indexOf(value) > 0) {
      console.log("[result]", mail.sender.indexOf(value));
      result = true;
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
    }).then((res) => {
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
      temp.map((mail) => {
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
      <Style>
        <div className="Button">
        <ButtonStyle>
        <PopupSetting callback={reload} />
        <button
          onClick={() => {
            getMail();
          }}
        >
          새로고침
        </button>
        </ButtonStyle>
        </div>
        <ListStyle className="list">
        <ul>
          {mailList
            ? mailList.map((mail) => (
                <li>
                  {mail.title} / {mail.date} / {mail.sender}
                </li>
              ))
            : null}
        </ul>
        </ListStyle>
      </Style>
    </div>
  );
};

export default Mail;
