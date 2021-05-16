import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import TodoTemplate from './todo-components/TodoTemplate';
import PomTemplate from './pom-components/PomTemplate';
import MailTemplate from './mail-components/MailTemplate'
import TrackerTemplate from './tracker-components/TrackerTemplate'
import Mail from './mail-components/Mail'
import Pomodoro from './pom-components/Pomodoro'
import TodoHead from './todo-components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #6c63ff;
  }
`;

const Block = styled.div`
  display: flex;
  width: 1080px;
  margin: 0 auto;
  
`
function App() {
  return (
    <div className="app">

      <GlobalStyle />
      <Block>
        <MailTemplate>
          <Mail />
        </MailTemplate>
        <PomTemplate>
          <Pomodoro />
        </PomTemplate>

      </Block>

      <Block>
        <TodoTemplate>
          <TodoHead />
        </TodoTemplate>
      </Block>


      {/*
      
      <TrackerTemplate></TrackerTemplate>
     */}

    </div>
  );
}

export default App;