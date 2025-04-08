import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ToDoItem = ({ todo, toggleComplete, deleteTodo, startEditing, updateTodo }) => {
  const [editText, setEditText] = useState(todo.text);

  return (
    <li>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => updateTodo(todo.id, editText)}>Update</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            {todo.completed && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "green", marginRight: "8px" }}
              />
            )}
            {todo.text}
          </span>
          <button onClick={() => startEditing(todo.id)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
