import React from "react";
import * as user from "./user";

type userInfo = {
  workTime: number;
  breakTime: number;
  routineCount: number;
  longBreakTime: number;
};

const SettingPomo = () => {
  const workTimeRef = React.useRef<HTMLInputElement>(null);
  const breakTimeRef = React.useRef<HTMLInputElement>(null);
  const routineCountRef = React.useRef<HTMLInputElement>(null);
  const longBreakTimeRef = React.useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = React.useState<userInfo>(user.userInfo);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      workTimeRef.current &&
      breakTimeRef.current &&
      routineCountRef.current &&
      longBreakTimeRef.current
    ) {
      user.userInfo.workTime = Number(workTimeRef.current.value);
      user.userInfo.breakTime = Number(breakTimeRef.current.value);
      user.userInfo.routineCount = Number(routineCountRef.current.value);
      user.userInfo.longBreakTime = Number(longBreakTimeRef.current.value);
      setUserInfo(user.userInfo);
    }
  };
  return (
    <div>
      <form
        onSubmit={event => {
          onSubmit(event);
        }}
      >
        <label>
          WorkTime : <input ref={workTimeRef} defaultValue={String(userInfo.workTime)} />
        </label>
        <label>
          breakTime : <input ref={breakTimeRef} defaultValue={String(userInfo.breakTime)} />
        </label>
        <label>
          routineCount :{" "}
          <input ref={routineCountRef} defaultValue={String(userInfo.routineCount)} />
        </label>
        <label>
          longBreakTime :{" "}
          <input ref={longBreakTimeRef} defaultValue={String(userInfo.longBreakTime)} />
        </label>
        <input type="submit" value="설정" />
      </form>
    </div>
  );
};

export default SettingPomo;
