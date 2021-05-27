import React from "react";
import * as user from "./user";
import styled from "styled-components";

type Prop = {
  callback: () => void;
};
const SettingStyle = styled.div`
  font-size: 20px;
  .box {
    margin-bottom: 1rem;
  }
  label {
    color: #495057;
  }
  input {
    width: 2.5rem;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    outline: none;
    font-size: 25px;
  }
  input[type="submit"] {
    width: 3rem;
    background:#6c63ff;
    color:white;
    font-size: 15px;
    border: none;
  }
`;
const SettingPomo = (prop: Prop) => {
  const workTimeRef = React.useRef<HTMLInputElement>(null);
  const breakTimeRef = React.useRef<HTMLInputElement>(null);
  const longBreakTimeRef = React.useRef<HTMLInputElement>(null);
  const longBreakFrequencyRef = React.useRef<HTMLInputElement>(null);
  const autoBreakTimeRef = React.useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = React.useState<user.UserInfo>(user.userInfo);

  const [isAuto, setIsAuto] = React.useState(userInfo.autoBreakTime);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      workTimeRef.current &&
      breakTimeRef.current &&
      longBreakTimeRef.current &&
      longBreakFrequencyRef.current &&
      autoBreakTimeRef.current
    ) {
      user.userInfo.workTime = Number(workTimeRef.current.value);
      user.userInfo.breakTime = Number(breakTimeRef.current.value);
      user.userInfo.longBreakTime = Number(longBreakTimeRef.current.value);
      user.userInfo.longBreakFrequency = Number(longBreakFrequencyRef.current.value);
      userInfo.autoBreakTime = Boolean(autoBreakTimeRef.current.checked);
      console.log(Boolean(autoBreakTimeRef.current.checked));
      setUserInfo(user.userInfo);
    }
  };

  return (
    <div>
      <SettingStyle>
        <form
          onSubmit={event => {
            onSubmit(event);
            prop.callback();
          }}
        >
          <ul>
            <div className="box">
              <label>
                집중시간 : <input ref={workTimeRef} defaultValue={String(userInfo.workTime)} />분
              </label>
            </div>
            <div className="box">
              <label>
                휴식시간 : <input ref={breakTimeRef} defaultValue={String(userInfo.breakTime)} />분
              </label>
            </div>
            <div className="box">
              <label>
                긴 휴식시간 :{" "}
                <input ref={longBreakTimeRef} defaultValue={String(userInfo.longBreakTime)} />분
              </label>
            </div>
            <div className="box">
              <label>
                몇번의 루틴 이후 긴 휴식을 가지시겠습니까? :{" "}
                <input
                  ref={longBreakFrequencyRef}
                  defaultValue={String(userInfo.longBreakFrequency)}
                />
                번
              </label>
            </div>
            <div className="box">
              <label>
                집중시간 이후 자동으로 휴식시간을 가지겠습니까? :{" "}
                <input
                  type="checkbox"
                  ref={autoBreakTimeRef}
                  checked={isAuto}
                  onChange={() => {
                    setIsAuto(o => !o);
                  }}
                />
                {isAuto ? "예" : "아니오"}
              </label>
            </div>

            <input type="submit" value="적용" />
          </ul>
        </form>
      </SettingStyle>
    </div>
  );
};

export default SettingPomo;
