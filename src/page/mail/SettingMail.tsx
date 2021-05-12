import React from "react";
import * as user from "./user";

const SettingMail = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const hostRef = React.useRef(null);
  const alarmRef = React.useRef(null);
  const [isAlarm, setIsAlarm] = React.useState(false);
  const [alarmList, setAlarmList] = React.useState<string[]>(null);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let email, password, host;
    if (emailRef.current && passwordRef.current && hostRef.current) {
      email = emailRef.current.value;
      password = passwordRef.current.value;
      host = hostRef.current.value;
    }
    user.setUserInfo(email, password, host);
  };
  React.useEffect(() => {
    setAlarmList(user.getAlarmList());
  }, [isAlarm]);
  return (
    <div>
      <form
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <label>
          Email : <input ref={emailRef} />
        </label>
        <label>
          Password : <input ref={passwordRef} />
        </label>
        <label>
          Host : <input ref={hostRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (alarmRef.current) {
            user.setAlarmList(alarmRef.current.value);
            alarmRef.current.value = "";
          }
          setAlarmList(user.getAlarmList());
          setIsAlarm((o) => !o);
          console.log(alarmList);
        }}
      >
        <label>
          AlarmList : <input ref={alarmRef} />
        </label>
        <ul>{alarmList ? alarmList.map((value) => <li>{value}</li>) : null}</ul>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SettingMail;
