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
import { TodoProvider } from './todo-components/TodoContext';

import img from './assets/3.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    padding: 0; 
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${img});
    min-height: 100vh;
   
  }
`;
const Container = styled.div`
 display: flex;
    flex-direction: row;
`

const BlockLeft = styled.div`
  display: flex;
  min-height: 90vh;
  width: 1080px;
  margin-left: 3rem;
  
`

const BlockRight = styled.div`
  display: flex;
  min-height: 20vh;
  width: 1080px;
  flex-direction: column;
`
function App() {
  return (
    <div className="app">
      <TodoProvider>
        <GlobalStyle />
        <Container>
        <BlockLeft>
          <TodoTemplate>
            <TodoHead />
            <TodoList/>
            <TodoCreate/>
          </TodoTemplate>
        </BlockLeft>

        <BlockRight>
          <PomTemplate>
            <Pomodoro />
          </PomTemplate>

          <MailTemplate>
            <Mail />
          </MailTemplate>
        </BlockRight>
        </Container>
      </TodoProvider>

      {/*
      
      <TrackerTemplate></TrackerTemplate>
     */}

    </div>
  );
}

export default App;