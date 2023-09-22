// src/components/TodoList.js

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/features/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center p-2">
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 text-white py-1 px-2 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
