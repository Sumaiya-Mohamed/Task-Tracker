import React, {useState} from "react"


interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const ToDoList: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([]);

    const [input, setInput] = useState<string>("");


    /*Function to  */
    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        )

    }

    /*Function to submit the task once "save" button is clickec (adds the task) */
    const handleSaveTask = () => {
        const newTodo = {id: Date.now(), text: input, completed: false};
        setTodos([...todos, newTodo])
        setInput("")
    }
    return (
        <div className="main">
        <h3>Tasks</h3>
    {/*Conditional rendering that will render the task once saved and no task added then a message will appear */}
        {todos.length === 0 ? (
  <h1>No tasks added</h1>
) : (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        onClick={() => handleToggle(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)}
        
        <h4>Add a task</h4>
        <input type="text" placeholder="add item" value={input}
        onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={()=> handleSaveTask()}>Save</button>
    </div>
    )
}