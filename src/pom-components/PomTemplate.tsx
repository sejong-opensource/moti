import React from 'react';
import styled from 'styled-components';
import img from "../assets/purple.jpg"

const PomTemplateBlock = styled.div`
  height: 50vh;
  //background-image: url(${img});
  background: rgb(32,28,53);
  position: relative;
  border-radius: 16px;
  margin-left: 2rem;
  margin: 0 auto; 
  margin-top: 0;
  display: flex;
  flex:1;
  flex-direction: column;
`;

function PomTemplate({ children }) {
  return <PomTemplateBlock>{children}</PomTemplateBlock>;
}

export default PomTemplate;