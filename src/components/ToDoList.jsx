import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleComplete, deleteTodo, startEditing, updateTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
