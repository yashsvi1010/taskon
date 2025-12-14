import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <form className="todos__single">
        {todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}

        <div>
          <span className="icon">
            <FaRegEdit />
          </span>
          <span className="icon">
            <MdOutlineDeleteOutline />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
