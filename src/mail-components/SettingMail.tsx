import React from "react";
import * as user from "./user";
import styled from "styled-components";

const SettingStyle = styled.div`
  margin: 1rem;
  font-size: 20px;
  .container {
    display: flex;
  }
  .box {
    margin-bottom: 1rem;
  }
  .topBlock {
    display: flex;
    flex-direction: column;
  }
  label {
    color: #495057;
  }
  input {
    width: 10rem;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    outline: none;
    font-size: 15px;
  }
  #domain{
    width:20rem;
  }
  input[type="submit"] {
    width: 4rem;
    background:#6c63ff;
    color:white;
    font-size: 15px;
    border: none;
  }
  button{
    width: 4rem;
    background:#6c63ff;
    color:white;
    font-size: 15px;
    border: none;
    margin-left: 3rem;
  }
`;

const SettingMail = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const hostRef = React.useRef(null);
  const alarmRef = React.useRef(null);
  const [isAlarm, setIsAlarm] = React.useState(false);
  const [alarmList, setAlarmList] = React.useState<string[]>(null);

  const removeAlarm = (id: string) => {
    const newAlarmList = alarmList.filter((alarm) => {
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
    let email, password, host;
    if (emailRef.current && passwordRef.current && hostRef.current) {
      email = emailRef.current.value;
      password = passwordRef.current.value;
      if (emailRef.current.value.indexof("gmail") > 0) {
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
        <SettingStyle>
        <form
          onSubmit={(event) => {
            onSubmit(event);
          }}>
            <div className="container">
            <div className="topBlock">
          <div className="box">
          <label>
            이메일 주소를 입력해주세요 : <input ref={emailRef} />
          </label>
          </div>
          <div className="box">
          <label>
            비밀번호를 입력해주세요 : <input ref={passwordRef} />
          </label>
          </div>
          
          </div>
          <input type="submit" value="Submit" />
            </div>
          
        </form>
        </SettingStyle>
      </div>
      
      <div>
      <SettingStyle>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (alarmRef.current) {
              const newList = alarmList;
              newList.push(alarmRef.current.value);
              user.setAlarmList(newList);
              alarmRef.current.value = "";
            }
            setAlarmList(user.getAlarmList());
            setIsAlarm((o) => !o);
          }}
        >
          <label>
            중요한 이메일 발신자 혹은 도메인을 입력해주세요 :{" "}
            <input id="domain" ref={alarmRef} />
          </label>
          <input type="submit" value="등록" />
          <ul>
            {alarmList
              ? alarmList.map((value) => (
                  <div id={String(alarmList.indexOf(value))}>
                    {value}
                    <button
                      onClick={() =>
                        removeAlarm(String(alarmList.indexOf(value)))
                      }
                    >
                      삭제
                    </button>
                  </div>
                ))
              : null}
          </ul>
          <button
            onClick={(e) => {
              e.preventDefault();
              user.removeAlarmList();
              setAlarmList(user.getAlarmList());
            }}
          >
            모두 삭제
          </button>
          </form>
          </SettingStyle>
        
        
      </div>
    </div>
  );
};

export default SettingMail;
