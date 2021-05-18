export type UserInfo = {
  workTime: number;
  breakTime: number;
  routineCount: number;
  longBreakTime: number;
  longBreakFrequency: number;
};

export const userInfo: UserInfo = {
  // Pomodoro default setiing
  workTime: 5,
  breakTime: 5,
  routineCount: 0,
  longBreakTime: 10,
  longBreakFrequency: 1,
};

export const setWorkTime = (value: number) => {
  userInfo.workTime = value;
};
export const getWorkTime = (value: number) => {
  userInfo.workTime = value;
};

export const setBreakTime = (value: number) => {
  userInfo.breakTime = value;
};

export const getBreakTime = (value: number) => {
  userInfo.breakTime = value;
};

export const setlongBreakTime = (value: number) => {
  userInfo.longBreakTime = value;
};
export const getlongBreakTime = () => {
  return userInfo.longBreakTime;
};

export const getRoutineCount = () => {
  return userInfo.routineCount;
};
export const setRoutineCount = (value?: number) => {
  if (value === undefined) {
    //increase 1
    userInfo.routineCount += 1;
  } else {
    userInfo.routineCount = value;
  }
};
