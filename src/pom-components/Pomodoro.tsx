import React from "react";
import "./Pomodoro.css";
const breakTimeMsg = "Break Time! New session starts in :";
const WorkTimeMsg = "I'm Focus in Work";
const maxWork = 5;
const maxBreak = 5;
const Pomodoro = () => {
  const [timer, setTimer] = React.useState(maxWork);
  const [isWork, setIsWork] = React.useState(true);
  const [value, setValue] = React.useState(false);
  let interval: NodeJS.Timeout;
  React.useEffect(() => {
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
  }, [timer, value]);
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
