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
import TodoList from './todo-components/TodoList';
import TodoCreate from './todo-components/TodoCreate';
import img from './assets/2.png';

const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    padding: 0; 
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${img});
    min-height: 100%;
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
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
      </Block>


      {/*
      
      <TrackerTemplate></TrackerTemplate>
     */}

    </div>
  );
}

export default App;