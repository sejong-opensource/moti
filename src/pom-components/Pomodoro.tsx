import React from "react";
import PopupSetting from "./PopupSetting";
import { userInfo } from "./user";
const breakTimeMsg = "Break Time! New session starts in :";
const WorkTimeMsg = "I'm Focus in Work";

const Pomodoro = () => {
  let maxWork = userInfo.workTime;
  let maxBreak = userInfo.breakTime;
  const [timer, setTimer] = React.useState(maxWork);
  const [isWork, setIsWork] = React.useState(true);
  const [value, setValue] = React.useState(false);
  const [setPomo, isSetPomo] = React.useState(false);
  const reload = () => {
    isSetPomo(o => !o);
  };

  let interval: NodeJS.Timeout;
  React.useEffect(() => {
    maxWork = userInfo.workTime;
    maxBreak = userInfo.breakTime;
    if (value) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (timer === 0) {
          if (isWork) {
            setIsWork(false);
            setTimer(maxBreak);
          } else {
            setIsWork(true);
            setTimer(maxWork);
          }
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
  }, [timer, value, setPomo]);
  const displayMin =
    Math.floor(timer / 60) < 10 ? `0${Math.floor(timer / 60)}` : `${Math.floor(timer / 60)}`;
  const displaySec =
    Math.floor(timer % 60) < 10 ? `0${Math.floor(timer % 60)}` : `${Math.floor(timer % 60)}`;
  return (
    <>
      <button
        onClick={() => {
          setValue(true);
        }}
      >
        START
      </button>
      <button
        onClick={() => {
          setValue(false);
          clearInterval(interval);
        }}
      >
        STOP
      </button>
      <button
        onClick={() => {
          if (isWork) {
            clearInterval(interval);
            setTimer(maxWork);
          } else {
            clearInterval(interval);
            setTimer(maxBreak);
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
      </div>
    </>
  );
};
export default Pomodoro;
