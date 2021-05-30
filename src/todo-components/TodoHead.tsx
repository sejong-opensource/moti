import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  flex: 1;
  h1 {
    margin: 0;
    font-size: 40px;
    color: rgb(230, 231, 232);
  }
  .day {
    margin-top: 4px;
    color: rgb(230, 231, 232);
    font-size: 25px;
  }
  .tasks-left {
    color: #6c63ff;
    font-size: 18px;
    margin-top: 50px;
    font-weight: bold;
  }
`;
type Todo = {
  id: number;
  text: string;
  done: boolean;
};
function TodoHead() {
  const todos: Array<Todo> = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜

  let day: number = today.getDay(); // 요일
  let week = new Array("일", "월", "화", "수", "목", "금", "토");

  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <div className="day">{week[day]}요일</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
