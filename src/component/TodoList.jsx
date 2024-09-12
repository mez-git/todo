import SingleTodo from "./singleTodo";

const TodoList = ({ todo, todos, setTodo, setTodos }) => {
  return (
    <div>
      
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          setTodo={setTodo}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
