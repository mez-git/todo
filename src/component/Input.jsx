

const Input=({todo,todos,setTodos,setTodo})=> {

const addInput=(e)=>{
setTodo(e.target.value)
}
const handleAdd=(e)=>{
    e.preventDefault()
    setTodos([...todos,{id:Date.now(),title:todo,isDone:false}]);
    setTodo('');

}
console.log("todo",todo)
console.log("todos",todos)
  return (
<div>
    <input 
type="text"
value={todo}
placeholder="type todo"
onChange={addInput}

/>

<button onClick={handleAdd}>Add</button>


</div>


  )
}

export default Input