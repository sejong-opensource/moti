import React from "react";
import * as user from "./user";
import {MdDelete} from 'react-icons/md';
import styled from "styled-components";
import PhraseTemplate from "../phrase-components/PhraseTemplate";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 20px;
  cursor: pointer;
   color: #6c63ff;
  &:hover {
    color: #6c63ff;
  }
  margin-left: 1rem;
  display: none;
`;

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
    width: 12rem;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    margin-right: 2rem;
  }
  #domain{
    width:20rem;
    margin-top: .5rem;
  }
  input[type="submit"] {
    width: 4.5rem;
    background:#6c63ff;
    color:white;
    font-size: 15px;
    text-align: center;
    border: none;
  }
 
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
  .textList {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    .listBlock {
        display: flex;
        button {
            width: 5.5rem;
            height: fit-content;
            text-align: center;
            background: #6c63ff;
            color: white;
            font-size: 15px;
            border: none;
            cursor: pointer;
            margin-left: 3rem;
        }
        .text{
            
            border-radius: .2rem;
            text-align: center;
            font-size: 20px;
            color: #495057;
          }
    }
  }
  ul{
    list-style-type: square;
    font-size: 15px;
  }
`;

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
        <SettingStyle>
        <form
          onSubmit={event => {
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
            비밀번호를 입력해주세요 : <input type="password" ref={passwordRef} />
          </label>
          <input type="submit" value="계정 등록" />
          </div>
          </div>
          </div>
        </form>
        </SettingStyle>
      </div>
      
      <div>
      <SettingStyle>
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
            중요한 이메일 발신자 혹은 도메인을 입력해주세요 : <input id="domain" ref={alarmRef} />
          </label>
          <input type="submit" value="추가" />
          <div className="textList">
              <div className ="listBlock">
                <div className="text">이메일 발신자, 도메인 목록</div>
                <button
                onClick={e => {
                  e.preventDefault();
                  user.removeAlarmList();
                  setAlarmList(user.getAlarmList());
                }}
              >
                모두 삭제
              </button>
              </div>
            <ul>
              {alarmList
                ? alarmList.map((value) => (
                  <li>
                    <div id={String(alarmList.indexOf(value))}>
                      {value}
                      <Remove onClick={() => removeAlarm(String(alarmList.indexOf(value)))}>
                    <MdDelete style={{verticalAlign:"middle"}}/>
                    </Remove>
                    </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          </form>
          </SettingStyle>
      </div>
    </div>
  );
};

export default SettingMail;
