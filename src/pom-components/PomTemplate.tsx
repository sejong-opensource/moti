import React from 'react';
import styled from 'styled-components';

const PomTemplateBlock = styled.div`
  width: 300px;
  height: 230px;

  position: relative;
  border-radius: 16px;

  margin: 0 auto; 

  margin-top: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

function PomTemplate({ children }) {
  return <PomTemplateBlock>{children}</PomTemplateBlock>;
}

export default PomTemplate;