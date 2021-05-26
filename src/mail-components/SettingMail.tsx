import React from "react";
import * as user from "./user";

const SettingMail = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const alarmRef = React.useRef(null);
  const [isAlarm, setIsAlarm] = React.useState(false);
  const [alarmList, setAlarmList] = React.useState<string[]>(null);

  const removeAlarm = (id: string) => {
    const newAlarmList = alarmList.filter(alarm => {
      if (String(alarmList.indexOf(alarm)) === id) {
        return false;
      } else {
        return true;
      }
    });
    setAlarmList(newAlarmList);
    user.setAlarmList(newAlarmList);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let email: string, password, host;
    if (emailRef.current && passwordRef.current) {
      if (emailRef.current.value !== "" || passwordRef.current.value !== "") {
        email = emailRef.current.value;
        password = passwordRef.current.value;
        if (email.indexOf("gmail") > 0) {
          host = "imap.gmail.com";
        } else {
          host = "imap.naver.com";
        }
        emailRef.current.value = "";
        passwordRef.current.value = "";
        alert("제출되었습니다.");
        user.setUserInfo(email, password, host);
      } else {
        alert("이메일과 비밀번호를 입력해주세요");
      }
    }
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
            이메일 주소를 입력해주세요 : <input ref={emailRef} />
          </label>
          <label>
            비밀번호를 입력해주세요 : <input type="password" ref={passwordRef} />
          </label>

          <input type="submit" value="계정 등록" />
        </form>
      </div>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            if (alarmRef.current) {
              if (alarmRef.current.value !== "") {
                const newList = alarmList;
                newList.push(alarmRef.current.value);
                user.setAlarmList(newList);
                alarmRef.current.value = "";
              } else {
                alert("발신자 혹은 도메인을 입력해주세요");
              }
            }
            setAlarmList(user.getAlarmList());
            setIsAlarm(o => !o);
          }}
        >
          <label>
            중요한 이메일 발신자 혹은 도메인을 입력해주세요 : <input ref={alarmRef} />
          </label>
          <input type="submit" value="추가" />
          <ul>
            {alarmList
              ? alarmList.map(value => (
                  <li id={String(alarmList.indexOf(value))}>
                    {value}
                    <button onClick={() => removeAlarm(String(alarmList.indexOf(value)))}>
                      삭제
                    </button>
                  </li>
                ))
              : null}
          </ul>
          <button
            onClick={e => {
              e.preventDefault();
              user.removeAlarmList();
              setAlarmList(user.getAlarmList());
            }}
          >
            모두 삭제
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingMail;
