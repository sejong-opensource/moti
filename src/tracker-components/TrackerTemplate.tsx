import React from 'react';
import styled from 'styled-components';

const TrackerTemplateBlock = styled.div `
  flex:1;
  height: 25vh;
  position: relative;
  background: rgb(32,28,53);
  border-radius: 16px;
  //box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 1rem;
  //margin: 0 auto; 
  display: flex;
  flex-direction: column;
`;

function TrackerTemplate({children}) {
    return <TrackerTemplateBlock>{children}</TrackerTemplateBlock>;
}

export default TrackerTemplate;