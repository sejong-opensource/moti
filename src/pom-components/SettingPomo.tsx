import React from "react";
import * as user from "./user";

const SettingPomo = () => {
  const workTimeRef = React.useRef<HTMLInputElement>(null);
  const breakTimeRef = React.useRef<HTMLInputElement>(null);
  const longBreakTimeRef = React.useRef<HTMLInputElement>(null);
  const longBreakFrequencyRef = React.useRef<HTMLInputElement>(null);

  const [userInfo, setUserInfo] = React.useState<user.UserInfo>(user.userInfo);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      workTimeRef.current &&
      breakTimeRef.current &&
      longBreakTimeRef.current &&
      longBreakFrequencyRef.current
    ) {
      user.userInfo.workTime = Number(workTimeRef.current.value);
      user.userInfo.breakTime = Number(breakTimeRef.current.value);
      user.userInfo.longBreakTime = Number(longBreakTimeRef.current.value);
      user.userInfo.longBreakFrequency = Number(
        longBreakFrequencyRef.current.value
      );
      setUserInfo(user.userInfo);
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <ul>
          <li>
            <label>
              집중시간 :{" "}
              <input
                ref={workTimeRef}
                defaultValue={String(userInfo.workTime)}
              />
            </label>
          </li>
          <li>
            <label>
              휴식시간 :{" "}
              <input
                ref={breakTimeRef}
                defaultValue={String(userInfo.breakTime)}
              />
            </label>
          </li>

          <li>
            <label>
              긴 휴식시간 :{" "}
              <input
                ref={longBreakTimeRef}
                defaultValue={String(userInfo.longBreakTime)}
              />
            </label>
          </li>
          <li>
            <label>
              몇 번의 집중시간 이후 긴 휴식을 가지시겠습니까? :{" "}
              <input
                ref={longBreakFrequencyRef}
                defaultValue={String(userInfo.longBreakFrequency)}
              />
            </label>
          </li>
          <li>
            <input type="submit" value="적용" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SettingPomo;
