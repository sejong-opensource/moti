import React, { useReducer, createContext, useContext, useRef, Dispatch } from "react";

type State = any;

type SampleDispatch = Dispatch<Action>;
type Action = { type: "CREATE" } | { type: "TOGGLE" } | { type: "REMOVE" };
if (!localStorage.getItem("todos")) {
  localStorage.setItem(
    "todos",
    JSON.stringify([
      {
        id: 1,
        text: "하단의 버튼을 눌러 할일을 등록해보세요!",
        done: false,
      },
    ])
  );
}
const initialTodos = JSON.parse(localStorage.getItem("todos"));

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<State | null>(null);
const TodoNextIdContext = createContext<State | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
