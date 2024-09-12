import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const SingleTodo = ({ todos,todo,setTodo,setTodos }) => {
const handleDone=(id)=>{
setTodos(
    todos.map((todo)=>(
        todo.id===id?{...todo,isDone:!todo.isDone}:todo
    ))
)
}
const handleDelete=(id)=>{
    setTodos(
        todos.filter((todo)=>todo.id!==id)
    )
}


  return (
    <form>
        
        
        {
            todo.isDone?(
                <s>{todo.title}</s>
            ):(
                <span>{todo.title}</span>
            )
        }
      <span
        onClick={() => {
          handleDone(todo.id)
        }}
      >
        <MdDone />
      </span>
      <span onClick={()=>{handleDelete(todo.id)}}>
        <AiFillDelete />
      </span>
    </form>
  );
};

export default SingleTodo;
