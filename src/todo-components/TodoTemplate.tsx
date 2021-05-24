import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 480px;
  position: relative;
  background: white;
  opacity: 0.8;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;