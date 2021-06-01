import React from "react";
import PopupSetting from "./PopupSetting";
import { userInfo, setRoutineCount } from "./user";
import styled from "styled-components";

const breakTimeMsg = "쉬는시간 입니다.";
const WorkTimeMsg = "집중시간 입니다.";
const Container = styled.div `
display: flex;
flex-direction: column;
.timer {
  align-items: center;
}
`

const ButtonStyle = styled.div`
  display: flex;
  padding: 0.3rem;
  button {
    flex: 1;
    margin-top: 1rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    height: 3rem;
    border-radius: 0.3rem;
    border: none;
    background: transparent;
    border: 1px solid #6c63ff;
    color: rgba(255, 255, 255, 0.95);
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.3s;
    &:hover {
      background: #6c63ff;
      color: rgba(255, 255, 255, 0.95);
    }
  }

  margin-bottom: 2rem;
`;

const TimerStyle = styled.div`
  margin: 0 auto;
  width: 260px;
  //margin-top: 1.5rem;
 
  .timerMsg {
    font-size: 30px;
    color: rgb(230, 231, 232);
    //margin-bottom: 1rem;
  }
  .clock {
    font-size: 100px;
    color: #6c63ff;
  }
  h3 {
    align-items: flex-end;
    font-size: 15px;
    color: rgb(230, 231, 232);
  }
  .block {
    display: flex;
    justify-content: space-between;
  }
`;
const Pomodoro = () => {
  // let maxWork = userInfo.workTime * 60; let maxBreak = userInfo.breakTime * 60;

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
    isSetPomo(o => !o);
    if (isWork) {
      setTimer(userInfo.workTime);
    } else {
      if (userInfo.routineCount % userInfo.longBreakFrequency === 0) {
        setTimer(userInfo.longBreakTime);
      } else {
        setTimer(userInfo.breakTime);
      }
    }
    setIsRun(false);
    clearInterval(interval);
  };
  const alarm = (msg: string) => {
    if (isWork) {
      new Notification("수고하셨습니다!!!", { body: msg });
    } else {
      new Notification("이제 다시 시작해볼까요!", { body: msg });
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
                alarm(`수고하셨습니다. ${userInfo.breakTime / 60}분 동안  긴 휴식시간 입니다`);
              } else {
                setTimer(userInfo.breakTime);
                alarm(`수고하셨습니다. ${userInfo.breakTime / 60}분 동안 휴식시간 입니다`);
              }
              // alert(`수고하셨습니다. ${userInfo.breakTime}분 동안 휴식시간 입니다`);
            } else {
              setIsWork(true);
              setTimer(userInfo.workTime);
              alarm(`이제 ${userInfo.breakTime / 60}분 동안  집중시간 입니다`);
              // alert(`이제 ${userInfo.breakTime}분 동안  집중시간 입니다`);
            }
          } else {
            setTimer(timer - 1);
          }
        }, 1000);
      }
    } else if (Notification.permission === "default") {
      // Extension 환경에서 Notification을 지원하지 않는다.
      Notification.requestPermission();
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
              if (userInfo.routineCount % userInfo.longBreakFrequency === 0) {
                setTimer(userInfo.longBreakTime);
                alert(`수고하셨습니다. ${userInfo.breakTime / 60}분 동안  긴 휴식시간 입니다`);
              } else {
                setTimer(userInfo.breakTime);
                alert(`수고하셨습니다. ${userInfo.breakTime / 60}분 동안 휴식시간 입니다`);
              }
              // alarm(`수고하셨습니다. ${userInfo.breakTime}분 동안 휴식시간 입니다`);
            } else {
              setIsWork(true);
              setTimer(userInfo.workTime);
              // alarm(`이제 ${userInfo.breakTime}분 동안  집중시간 입니다`);
              alert(`이제 ${userInfo.breakTime / 60}분 동안  집중시간 입니다`);
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
    Math.floor(timer / 60) < 10 ? `0${Math.floor(timer / 60)}` : `${Math.floor(timer / 60)}`;
  const displaySec =
    Math.floor(timer % 60) < 10 ? `0${Math.floor(timer % 60)}` : `${Math.floor(timer % 60)}`;
  return (
    <>
    <Container>
      {" "}
      {/* <Toggle onClick={onClickToggle} /> */}{" "}
      <ButtonStyle>
        {" "}
        <button
          onClick={() => {
            setIsRun(o => !o);
            if (isRun === false) {
              clearInterval(interval);
            }
          }}
        >
          {" "}
          {isRun ? "정지" : "시작"}{" "}
        </button>
        <button
          onClick={() => {
            setRoutineCount(0);
            setIsWork(true);
            clearInterval(interval);
            setTimer(userInfo.workTime);
            setIsRun(false);
          }}
        >
          초기화
        </button>{" "}
        <PopupSetting callback={reload} />
      </ButtonStyle>
      <TimerStyle className="timer">
        <div className="pomodoro">
          {isWork && (
            <div className="timer">
              <div className="timerMsg">{WorkTimeMsg}</div>

              <div className="clock">
                {displayMin}:{displaySec}
              </div>
            </div>
          )}
          {!isWork && (
            <div className="timer">
              <div className="timerMsg">{breakTimeMsg}</div>
              <div className="clock">
                {displayMin}:{displaySec}
              </div>
            </div>
          )}
          <div className="block">
            <div></div>
            <h3>총 {userInfo.routineCount}회 루틴 진행</h3>
          </div>
        </div>
      </TimerStyle>
    </Container>
    </>
  );
};
export default Pomodoro;
