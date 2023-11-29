//import { useState } from 'react'
 import { Header } from './components/Header'
 import DateCalendarValue from './components/DateCalendarValue';
import { Checkbox } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
 import React, {useEffect, useState} from "react"
 import IconButton from '@mui/material/IconButton';
 import EditIcon from '@mui/icons-material/Edit';
 import { v4 as uuidv4 } from 'uuid';



interface item {
    id: string;
    text: string;
    completed: boolean;
}

export const App: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([]);

    const [input, setInput] = useState<string>("");

    const [editTodo, setEditTodo] = useState<item | null>(null);

  

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});




    /*Function to cross out/ tick when a user finishes a task */
    const handleToggle = (id: string) => {
      console.log(id)
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        )
       

    }

    const updateTodo = (text: string, id: string, completed: boolean ) => {
      const updatedTodo = todos.map((todo) => 
        todo.id === id ? {...todo, text, completed} : todo
      )
      setTodos(updatedTodo)
      setEditTodo(null);
    }

    useEffect(() => {
      if (editTodo){
        setInput(editTodo.text)
      } else {
        setInput("")
      }
    }, [setInput, editTodo])

    /*Function to submit the task once "save" button is clicked (adds the task) */
    const handleSaveTask = () => {
      if (!editTodo) {
         const newTodo = {id: uuidv4(), text: input, completed: false};
        setTodos([...todos, newTodo])
        setInput("")
      } else {
        updateTodo(input, editTodo.id, editTodo.completed)
      }
       
       
    }

    const handleEditTask = (id : string) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodo(findTodo || null);
    }

    return (
       <div>
        <Header />
        <div className='main-layout'>
         <div className='main-layout-box'>
          <DateCalendarValue/>
         </div>
         <div className='main-layout-box1'>
         <h1 className='main-layout-box1-text'>Tasks</h1>
           {/*Conditional rendering that will render the task once saved and no task added then a message will appear */}
            {todos.length === 0 ? (
             <h1 className='main-layout-box1-text2'>No tasks added yet</h1>
           ) : (
           <ul className='main-layout-box1-to-dolist'>
             {todos.map((todo) => (
              <>
             <li
               key={todo.id}
               onClick={() => handleToggle(todo.id)}
               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
               className='main-layout-box1-to-dos'>
                <Checkbox  color='primary' checked={todo.completed}
                onChange={() => handleToggle(todo.id)}/>
               {todo.text}
             </li>
             
             <div>
             <IconButton aria-label="edit" size="large" onClick={() => handleEditTask(todo.id)}>
                <EditIcon/>
              </IconButton>
</div>
             
    </>         
           
             ))}
            </ul>
          )}
         </div>
   
         <div className='main-layout-box2'>
          <h2 className='main-layout-box2-text'>Add a task</h2>
             <textarea rows={5} cols={10}
             type="text" placeholder="Add item" value={input}
             onChange={(e)=> setInput(e.target.value)}
             className='main-layout-box2-inputfield'
             >
             </textarea>
             <div>
               <button onClick={()=> handleSaveTask()}
               className='main-layout-box2-submitbutton'
               >
                {editTodo ? "OK" : "Add"}
               </button>
             </div>
             
         </div>  
        </div>
    </div>
    )
}

export default App
