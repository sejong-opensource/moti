import React from "react";
import * as user from "./user";
import styled from "styled-components";

type Prop = {
  callback: () => void;
  reload: () => void;
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
    height: 2rem;
    background: #6c63ff;
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;
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
      user.userInfo.workTime = Number(workTimeRef.current.value) * 60;
      user.userInfo.breakTime = Number(breakTimeRef.current.value) * 60;
      user.userInfo.longBreakTime = Number(longBreakTimeRef.current.value) * 60;
      user.userInfo.longBreakFrequency = Number(longBreakFrequencyRef.current.value);
      userInfo.autoBreakTime = Boolean(autoBreakTimeRef.current.checked);
      setUserInfo(user.userInfo);

      prop.callback();
      prop.reload();
    }
  };

  return (
    <div>
      <SettingStyle>
        <form
          onSubmit={event => {
            onSubmit(event);
          }}
        >
          <ul>
            <div className="box">
              <label>
                ???????????? : <input ref={workTimeRef} defaultValue={String(userInfo.workTime / 60)} />
                ???
              </label>
            </div>
            <div className="box">
              <label>
                ???????????? :{" "}
                <input ref={breakTimeRef} defaultValue={String(userInfo.breakTime / 60)} />???
              </label>
            </div>
            <div className="box">
              <label>
                ??? ???????????? :{" "}
                <input ref={longBreakTimeRef} defaultValue={String(userInfo.longBreakTime / 60)} />
                ???
              </label>
            </div>
            <div className="box">
              <label>
                ????????? ?????? ?????? ??? ????????? ?????????????????????? :{" "}
                <input
                  ref={longBreakFrequencyRef}
                  defaultValue={String(userInfo.longBreakFrequency)}
                />
                ???
              </label>
            </div>
            <div className="box">
              <label>
                ???????????? ?????? ???????????? ??????????????? ??????????????????? :{" "}
                <input
                  type="checkbox"
                  ref={autoBreakTimeRef}
                  checked={isAuto}
                  onChange={() => {
                    setIsAuto(o => !o);
                  }}
                />
                {isAuto ? "???" : "?????????"}
              </label>
            </div>

            <input type="submit" value="??????" />
          </ul>
        </form>
      </SettingStyle>
    </div>
  );
};

export default SettingPomo;
