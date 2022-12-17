import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodosContainer from "./container/TodosContainer";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        {/*<TodoHead />*/}
        {/*<TodoList />*/}
        {/*<TodoCreate />*/}
        <TodosContainer />
      </TodoTemplate>
    </>
  );
}

export default App;
