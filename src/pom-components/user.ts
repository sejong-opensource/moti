export type UserInfo = {
  workTime: number;
  breakTime: number;
  routineCount: number;
  longBreakTime: number;
  longBreakFrequency: number;
  autoBreakTime: boolean;
};

export const userInfo: UserInfo = {
  // Pomodoro default setiing
  workTime: 10,
  breakTime: 5,
  routineCount: 0,
  longBreakTime: 10,
  longBreakFrequency: 1,
  autoBreakTime: false,
};

export const setRoutineCount = (value?: number) => {
  if (value === undefined) {
    //increase 1
    userInfo.routineCount += 1;
  } else {
    userInfo.routineCount = value;
  }
};
