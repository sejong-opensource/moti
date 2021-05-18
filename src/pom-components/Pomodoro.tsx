/*global chrome*/
import React from "react";
import PopupSetting from "./PopupSetting";
import { userInfo, setRoutineCount } from "./user";
const breakTimeMsg = "Break Time! New session starts in :";
const WorkTimeMsg = "I'm Focus in Work";

// Todo
// Setting에 따른 Interval 로직 변경
const Pomodoro = () => {
  // let maxWork = userInfo.workTime * 60;
  // let maxBreak = userInfo.breakTime * 60;

  const [timer, setTimer] = React.useState(userInfo.workTime);
  const [isWork, setIsWork] = React.useState(true);
  const [isRun, setIsRun] = React.useState(false);
  const [setPomo, isSetPomo] = React.useState(false);
  const reload = () => {
    isSetPomo((o) => !o);
    setTimer(userInfo.workTime);
  };

  let interval: NodeJS.Timeout;
  const alarm = (msg: string) => {
    chrome.alarms.create(msg, { delayInMinutes: 3 });
  };
  React.useEffect(() => {
    if (isRun) {
      clearInterval(interval);
      interval = setInterval(() => {
        clearInterval(interval);
        if (timer === 0) {
          if (isWork) {
            setIsWork(false);
            setRoutineCount();
            console.log(userInfo.routineCount);
            setTimer(userInfo.breakTime);
            alarm(`수고하셨습니다. ${userInfo.breakTime}동안 휴식시간 입니다`);
          } else {
            setIsWork(true);
            setTimer(userInfo.workTime);
            alert(`이제 ${userInfo.breakTime}동안  집중시간 입니다`);
          }
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
  }, [timer, isRun, setPomo]);
  const displayMin =
    Math.floor(timer / 60) < 10
      ? `0${Math.floor(timer / 60)}`
      : `${Math.floor(timer / 60)}`;
  const displaySec =
    Math.floor(timer % 60) < 10
      ? `0${Math.floor(timer % 60)}`
      : `${Math.floor(timer % 60)}`;
  return (
    <>
      <button
        onClick={() => {
          setIsRun(true);
        }}
      >
        START
      </button>
      <button
        onClick={() => {
          setIsRun(false);
          clearInterval(interval);
        }}
      >
        STOP
      </button>
      <button
        onClick={() => {
          setRoutineCount(0);
          if (isWork) {
            clearInterval(interval);
            setTimer(userInfo.workTime);
          } else {
            clearInterval(interval);
            setTimer(userInfo.breakTime);
          }
        }}
      >
        INITIALIZE
      </button>
      <PopupSetting callback={reload} />
      <div className="pomodoro">
        {isWork && (
          <div className="timer">
            <div className="timerMsg">{WorkTimeMsg}</div>
            {displayMin}:{displaySec}
          </div>
        )}
        {!isWork && (
          <div className="timer">
            <div className="timerMsg">{breakTimeMsg}</div>
            {displayMin}:{displaySec}
          </div>
        )}
        <h4>총 {userInfo.routineCount}회 루틴 진행</h4>
      </div>
    </>
  );
};
export default Pomodoro;
