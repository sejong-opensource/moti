import React from "react";
// import imaps from "imap-simple";
import { getUserInfo } from "./user";
import PopupSetting from "./PopupSetting";
const Mail = () => {
  const [emailList, setEmailList] = React.useState([""]);
  const getEmailList = emailList.map(email => <li>{email}</li>);
  // const ReceiveMail = async () => {
  //   const searchCriteria = ["UNSEEN"];
  //   const fetchOptions = {
  //     bodies: ["HEADER", "TEXT"],
  //     markSeen: false,
  //   };
  //   const userInfo = getUserInfo();
  //   const config = {
  //     imap: {
  //       user: userInfo.email,
  //       password: userInfo.password,
  //       host: "imap.gmail.com",
  //       port: 993,
  //       tls: true,
  //       authTimeout: 3000,
  //       tlsOptions: {
  //         rejectUnauthorized: false,
  //       },
  //     },
  //   };
  //   const connection = await imaps.connect(config);
  //   await connection.openBox("INBOX");
  //   const results = await connection.search(searchCriteria, fetchOptions);

  //   console.log(results[results.length - 1]);
  //   console.log(results[results.length - 1].parts[1]);
  //   connection.end();
  //   return results;
  // };

  return (
    <div>
      <PopupSetting />
      <button
        onClick={() => {
          setEmailList(["asdf", "asdf", "asdf"]);
        }}
      >
        GET EMAIL
      </button>
      <ul>{getEmailList}</ul>
    </div>
  );
};

export default Mail;
