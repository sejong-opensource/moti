import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";
import TextAlert from "./TextAlert";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #6c63ff;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #6c63ff;
      color: #6c63ff;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 19px;
  color: rgb(230, 231, 232);
  ${props =>
    props.done &&
    css`
      color: gray;
      text-decoration: line-through;
      white-space: nowrap; //자동줄바꿈처리
    `}
`;
type Todo = {
  id: number;
  text: string;
  done: boolean;
};
function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => {
    dispatch({ type: "REMOVE", id });

    let curTodos: Array<Todo> = JSON.parse(localStorage.getItem("todos"));
    console.log(curTodos);
    curTodos = curTodos.filter(todo => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    localStorage.setItem("todos", JSON.stringify(curTodos));
  };
  const checkDone = () => {
    let curTodos: Array<Todo> = JSON.parse(localStorage.getItem("todos"));
    curTodos = curTodos.filter(todo =>{
      if(todo.done == true){
        alert("dd")
      }
    })
  }
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone/>}
        {/* {alert(<TextAlert done={done} onClick={onToggle}/>)} */}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
