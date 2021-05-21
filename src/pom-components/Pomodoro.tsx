import React from "react";
import PopupSetting from "./PopupSetting";
import { userInfo, setRoutineCount } from "./user";
import Toggle from "./Toggle";

const breakTimeMsg = "쉬는시간 입니다.";
const WorkTimeMsg = "집중시간하는 시간입니다.";

// Todo
// Setting에 따른 Interval 로직 변경
const Pomodoro = () => {
  // let maxWork = userInfo.workTime * 60;
  // let maxBreak = userInfo.breakTime * 60;

  const [timer, setTimer] = React.useState(userInfo.workTime);
  const [isWork, setIsWork] = React.useState(true);
  const [isRun, setIsRun] = React.useState(false);
  const [setPomo, isSetPomo] = React.useState(false);
  let interval: NodeJS.Timeout;
  const onClickToggle = (val: boolean) => {
    setIsRun(val);
    if (val === false) {
      clearInterval(interval);
    }
  };
  const reload = () => {
    isSetPomo((o) => !o);
    if (isWork) {
      setTimer(userInfo.workTime);
    } else {
      setTimer(userInfo.breakTime);
    }
    setIsRun((o) => !o);
    clearInterval(interval);
  };
  const alarm = (msg: string) => {
    if (isWork) {
      new Notification("수고하셨습니다!!!", { body: msg });
    } else {
      new Notification("이제 다시 시작해볼까요???", { body: msg });
    }
    // var notification = new Notification('할 일 목록', { body: text, icon: img });
  };
  React.useEffect(() => {
    if (Notification.permission === "granted") {
      if (isRun) {
        clearInterval(interval);
        interval = setInterval(() => {
          clearInterval(interval);
          if (timer === 0) {
            if (isWork) {
              if (!userInfo.autoBreakTime) {
                clearInterval(interval);
                setIsRun(false);
                setTimer(userInfo.workTime);
                clearInterval(interval);
              }
              setIsWork(false);
              setRoutineCount();
              if (userInfo.routineCount % userInfo.longBreakFrequency == 0) {
                setTimer(userInfo.longBreakTime);
              } else {
                setTimer(userInfo.breakTime);
              }
              alarm(
                `수고하셨습니다. ${userInfo.breakTime}분 동안 휴식시간 입니다`
              );
            } else {
              setIsWork(true);
              setTimer(userInfo.workTime);
              alarm(`이제 ${userInfo.breakTime}분 동안  집중시간 입니다`);
            }
          } else {
            setTimer(timer - 1);
          }
        }, 1000);
      }
    } else {
      Notification.requestPermission();
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
      <Toggle onClick={onClickToggle} />
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
        시간 초기화
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
