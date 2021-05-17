import React from 'react';
import styled from 'styled-components';

const PomTemplateBlock = styled.div`
  width: 300px;
  height: 230px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; 

  margin-top: 26px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function PomTemplate({ children }) {
  return <PomTemplateBlock>{children}</PomTemplateBlock>;
}

export default PomTemplate;