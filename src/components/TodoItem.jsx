// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/features/todosSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      onClick={handleToggle}
      className={`cursor-pointer ${completed ? "line-through" : ""}`}
    >
      {text}
    </li>
  );
};

export default TodoItem;
