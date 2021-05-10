import React from "react";
import { getUserInfo } from "./user";
import PopupSetting from "./PopupSetting";
import axios from "axios";

type email = {
  date: string;
  title: string;
  sender: string;
};
const Mail = () => {
  const [titleList, setTitleList] = React.useState([]);
  const getTitleList = titleList.map(title => <li>{title}</li>);
  const userInfo = getUserInfo();
  let emailList: email[];
  const request = () => {
    axios({
      url: "http://localhost:3002/getEmail",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { email: userInfo.email, password: userInfo.password, host: userInfo.host },
    }).then(res => {
      res.data.map((email: email) => {
        console.log(email.title);
      });
    });
  };
  const getMail = () => {
    request();
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
      <ul>{getTitleList}</ul>
    </div>
  );
};

export default Mail;
