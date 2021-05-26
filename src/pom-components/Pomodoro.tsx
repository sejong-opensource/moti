import React from "react";
import PopupSetting from "./PopupSetting";
import {userInfo, setRoutineCount} from "./user";
import styled from 'styled-components';
import Toggle from "./Toggle";

const breakTimeMsg = "쉬는시간 입니다.";
const WorkTimeMsg = "집중시간하는 시간입니다.";

const ButtonStyle = styled.div `
display:flex;
button{
  flex:1;
  margin: 1rem;
  min-height: 3rem;
}
`
const MsgStyle = styled.div `
.timer{
  font-size: 30px;
}
`
// Todo
const Pomodoro = () => {
    // let maxWork = userInfo.workTime * 60; let maxBreak = userInfo.breakTime * 60;

    const [timer, setTimer] = React.useState(userInfo.workTime);
    const [isWork, setIsWork] = React.useState(true);
    const [isRun, setIsRun] = React.useState(false);
    const [setPomo, isSetPomo] = React.useState(false);
    let interval: NodeJS.Timeout;
    const onClickToggle = (val : boolean) => {
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
            setTimer(userInfo.breakTime);
        }
        setIsRun(o => !o);
        clearInterval(interval);
    };
    const alarm = (msg : string) => {
        if (isWork) {
            new Notification("수고하셨습니다!!!", {body: msg});
        } else {
            new Notification("이제 다시 시작해볼까요???", {body: msg});
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
                            alarm(`수고하셨습니다. ${userInfo.breakTime}분 동안 휴식시간 입니다`);
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
    const displayMin = Math.floor(timer / 60) < 10
        ? `0${Math.floor(timer / 60)}`
        : `${Math.floor(timer / 60)}`;
    const displaySec = Math.floor(timer % 60) < 10
        ? `0${Math.floor(timer % 60)}`
        : `${Math.floor(timer % 60)}`;
    return (
        <> {/* <Toggle onClick={onClickToggle} /> */
        } < ButtonStyle > <button
            onClick={() => {
                setIsRun(o => !o);
                if (isRun === false) {
                    clearInterval(interval);
                }
            }}>
            {
                isRun
                    ? "정지"
                    : "시작"
            }
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
            }}>
            초기화
        </button>
        <PopupSetting callback={reload}/>
    </ButtonStyle>

    
        <div className="pomodoro">
            {
                isWork && (
                    
                      <MsgStyle>
                        <div className="timer">
                        <div className="timerMsg">{WorkTimeMsg}</div>
                        {displayMin}:{displaySec}
                        </div>
                      </MsgStyle>
                )
            }
            {
                !isWork && (
                  <MsgStyle>
                    <div className="timer">
                        <div className="timerMsg">{breakTimeMsg}</div>
                        {displayMin}:{displaySec}
                    </div>
                  </MsgStyle>
                    
                )
            }
            <h3>총 {userInfo.routineCount}회 루틴 진행</h3>
        </div>
</>
    );
};
export default Pomodoro;
