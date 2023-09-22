// src/components/TodoForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todosSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo({ text, completed: false, id: Date.now() }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
