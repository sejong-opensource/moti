import React from "react";
import "./Pomodoro.css";
const breakTimeMsg = "Break Time! New session starts in :";
const maxWork = 1;
const maxBreak = 1;
const Pomodoro = () => {
  const [min, setMin] = React.useState(maxWork);
  const [sec, setSec] = React.useState(0);
  const [displayMsg, setDisplayMsg] = React.useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (sec === 0) {
        if (min !== 0) {
          setSec(59);
          setMin((o) => o - 1);
        } else {
          let min = displayMsg ? maxWork : maxBreak;
          let sec = 0;
          setSec(sec);
          setMin(min);

          setDisplayMsg((o) => !o);
        }
      } else {
        setSec((o) => o - 1);
      }
    }, 1000);
  }, [sec]);

  const displayMin = min < 10 ? `0${min}` : `${min}`;
  const displaySec = sec < 10 ? `0${sec}` : `${sec}`;

  return (
    <div className="pomodoro">
      <div className="message">{displayMsg && <div>{breakTimeMsg}</div>}</div>
      <div className="timer">
        {displayMin}:{displaySec}
      </div>
    </div>
  );
};
export default Pomodoro;
