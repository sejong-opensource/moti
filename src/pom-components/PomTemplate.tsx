import React from 'react';
import styled from 'styled-components';

const PomTemplateBlock = styled.div`
  width: 400px;
  min-height: 50vh;
  background: white;
  position: relative;
  border-radius: 16px;
  opacity: 0.7;

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