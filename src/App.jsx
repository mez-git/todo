import Input from "./component/Input";
import TodoList from "./component/TodoList";
import { useEffect, useState } from "react";
import "./App.css";

const getLocalTodos = () => {
  const savedTodos = localStorage.getItem("todo");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(getLocalTodos());
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Input todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;
