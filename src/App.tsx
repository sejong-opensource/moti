import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Pomodoro from './pom-components/Pomodoro'
import PomTemplate from './pom-components/PomTemplate';
import MailTemplate from './mail-components/MailTemplate'
import TrackerTemplate from './tracker-components/TrackerTemplate'
import Mail from './mail-components/Mail'
import TodoTemplate from './todo-components/TodoTemplate';
import TodoHead from './todo-components/TodoHead';
import TodoList from './todo-components/TodoList';
import TodoCreate from './todo-components/TodoCreate';
import { TodoProvider } from './todo-components/TodoContext';
import TimeTracker from './tracker-components/TimeTracker'
import img from './assets/3.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    padding: 0; 
    background-repeat: no-repeat;
    background-size: cover;
    background:black;
    //background-image: url(${img});
    top: 0;
    left: 0;
    //margin:0 auto;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const BlockLeft = styled.div`
  display: flex;
  min-height: 90vh;
  margin-left: 3rem;
  
`

const BlockRight = styled.div`
  display: flex;
  min-height: 20vh;
  flex-direction: column;
`
function App() {
  return (
    <div className="app">
      
        <GlobalStyle />
        <Container>
        <BlockLeft>
          <TodoProvider>
          <TodoTemplate>
            <TodoHead />
            <TodoList/>
            <TodoCreate/>
          </TodoTemplate>
          </TodoProvider>
        </BlockLeft>

        <BlockRight>
          <Container>
          <PomTemplate>
            <Pomodoro />
          </PomTemplate>
          <TrackerTemplate>
          <TimeTracker/>
          </TrackerTemplate>
          </Container>
          
          <MailTemplate>
            <Mail />
          </MailTemplate>

          
        </BlockRight>
        </Container>
      

      {/*
      
     
      {/* <TodoTemplate></TodoTemplate> */}
      
     
      
    </div>
  );
}

export default App;