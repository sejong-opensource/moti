import React from 'react';
import styled from 'styled-components';

const TrackerTemplateBlock = styled.div`
  width: 1080px;
  height: 200px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; 

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TrackerTemplate({ children }) {
  return <TrackerTemplateBlock>{children}</TrackerTemplateBlock>;
}

export default TrackerTemplate;