import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import TodoHead from "../components/TodoHead";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <div>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
      <TodoCreate input={input} onInsert={insert} onChangeInput={changeInput} />
    </div>
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
