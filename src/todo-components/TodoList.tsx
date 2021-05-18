import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1; //자신이 차지할 수 있는 영역을 꽉 채움
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
  <TodoListBlock>
    <TodoItem id={1} text="1번" done={true} />
    <TodoItem id={2} text="2번" done={false} />
    <TodoItem id={3} text="프로젝트" done={true} />
  </TodoListBlock>
  );
}

export default TodoList;