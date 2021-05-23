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
      if (hostRef.current.value === "gmail") {
        host = "imap.gmail.com";
      } else {
        host = "imap.naver.com";
      }
    }
    user.setUserInfo(email, password, host);
  };
  React.useEffect(() => {
    setAlarmList(user.getAlarmList());
  }, [isAlarm]);
  return (
    <div>
      <div>
        <form
          onSubmit={event => {
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
      </div>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            if (alarmRef.current) {
              user.setAlarmList(alarmRef.current.value);
              alarmRef.current.value = "";
            }
            setAlarmList(user.getAlarmList());
            setIsAlarm(o => !o);
          }}
        >
          <label>
            AlarmList : <input ref={alarmRef} />
          </label>
          <ul>{alarmList ? alarmList.map(value => <li>{value}</li>) : null}</ul>
          <button
            onClick={e => {
              e.preventDefault();
              user.removeAlarmList();
              setAlarmList(user.getAlarmList());
            }}
          >
            모두 삭제
          </button>
          <input type="submit" value="등록" />
        </form>
      </div>
    </div>
  );
};

export default SettingMail;
