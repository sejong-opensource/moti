import React from "react";
import { setUserInfo, setAlarmList } from "./user";

const SettingMail = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [host, setHost] = React.useState("");
  const [alarmValue, setAlarmValue] = React.useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserInfo(email, password, host);
    console.log(email, password, host);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Email : <input onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password :{" "}
          <input onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Host : <input onChange={(event) => setHost(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <label>
        AlarmList :{" "}
        <input onChange={(event) => setAlarmValue(event.target.value)} />
        <button
          onClick={() => {
            setAlarmList(alarmValue);
          }}
        />
      </label>
    </div>
  );
};

export default SettingMail;
