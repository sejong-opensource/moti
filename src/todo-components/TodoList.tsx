import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";
import loadash from "lodash";
const TodoListBlock = styled.div`
  flex: 5;
  padding: 1rem 1.5rem;
  padding-bottom: 0.5rem;
  //min-height: 50vh;
  .scroll-box{
    height: 55vh;
    overflow-y: scroll;
    -ms-overflow-style: none; 
  }
  .scroll-box::-webkit-scrollbar{
    display: none;
  }
`;

function TodoList() {
  let todos = useTodoState();

  return (
    <TodoListBlock>
      <div className="scroll-box">
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </div>
    </TodoListBlock>
  );
}

export default TodoList;
