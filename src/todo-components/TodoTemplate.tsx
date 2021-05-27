import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 33vw;
  position: relative;
  background: rgb(32,28,53);
  border-radius: 16px;
  //box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  //box-shadow: 10px 5px 10px 5px #6c63ff;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;