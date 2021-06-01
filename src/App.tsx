import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Pomodoro from "./pom-components/Pomodoro";
import PomTemplate from "./pom-components/PomTemplate";
import MailTemplate from "./mail-components/MailTemplate";
import TrackerTemplate from "./tracker-components/TrackerTemplate";
import Mail from "./mail-components/Mail";
import TodoTemplate from "./todo-components/TodoTemplate";
import TodoHead from "./todo-components/TodoHead";
import TodoList from "./todo-components/TodoList";
import TodoCreate from "./todo-components/TodoCreate";
import { TodoProvider } from "./todo-components/TodoContext";
import TimeTracker from "./tracker-components/TimeTracker";
import img from "./assets/3.jpg";
import PhraseTemplate from "./phrase-components/PhraseTemplate"
import Phrase from "./phrase-components/Phrase";
const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    padding: 0; 
    background-repeat: no-repeat;
    background-size: cover;
    background:linear-gradient(to right,rgb(62,58,99),rgb(68,49,90));
    //background-image: url(${img});
    top: 0;
    left: 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const BlockLeft = styled.div`
  display: flex;
  height: 80vh;
`;

const BlockRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1rem;
  height: 80vh;
  .space {
    padding-left: 1rem;
  }
`;
const PomTrackerBlock = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 1rem;
  .block{
    flex:1;
    display: flex;
    flex-direction: column;
  }
`;
function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Container>
        <BlockLeft>
          <TodoProvider>
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
          </TodoProvider>
        </BlockLeft>

        <BlockRight>
          <PomTrackerBlock>
            <PomTemplate>
              <Pomodoro />
            </PomTemplate>
            <div className="space" />
              <div className="block">
                <TrackerTemplate>
                    <TimeTracker />
                </TrackerTemplate>
                <div className="space" />
                <PhraseTemplate>
                  <Phrase />
                </PhraseTemplate>
              </div>
          </PomTrackerBlock>

          <MailTemplate>
            <Mail />
          </MailTemplate>
        </BlockRight>
      </Container>
    </div>
  );
}

export default App;
