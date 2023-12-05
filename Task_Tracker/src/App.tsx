
 import { Header } from './components/Header'
 import { PriorityLevel } from './components/PriorityLevel/PriorityLevel';
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
    priority : "High" | "Medium" | "Low";
}

export const App: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([]);

    const [input, setInput] = useState<string>("");

    const [editTodo, setEditTodo] = useState<item | null>(null);

    const [newPriority, setNewPriority] = useState<"High" | "Medium" | "Low">("High")

  

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

   /*Function that handles the delete functionality for each */
   function handleDelete(id: number){
    const taskCopy = [...todos];
    taskCopy.splice(id,1);
    setTodos(taskCopy);
   }


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

    const updateTodo = (text: string, id: string, completed: boolean, priority: "High" | "Medium" | "Low" ) => {
      console.log('Updating Todo:', { text, id, completed, priority });
      const updatedTodo = todos.map((todo) => 
      
        todo.id === id ? {...todo, text, completed, priority} : todo
      )
      setTodos(updatedTodo)
      setEditTodo(null);
    }

    useEffect(() => {
      if (editTodo){
        setInput(editTodo.text)
        setNewPriority(editTodo.priority)
      } else {
        setInput("")
      }
    }, [setInput, editTodo])

    /*Function to submit the task once "save" button is clickec (adds the task) */
    const handleSaveTask = () => {
      if (!editTodo) {
         const newTodo = {id: uuidv4(), text: input, completed: false, priority: newPriority};
        setTodos([...todos, newTodo])
        setInput("")
        setNewPriority("High")
      } else {
        updateTodo(input, editTodo.id, editTodo.completed, newPriority)
      }
       
       
    }

    const handleEditTask = (id : string) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodo(findTodo || null);
    }

    return (
   

    <ThemeProvider theme={theme}>
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
           <div className='main-layout-box1-to-dolist'>
             {todos.map((todo,id) => (
             <div
               key={todo.id}
               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
               className='main-layout-box1-to-dos'>
                <div>
                <Checkbox  color='primary' checked={todo.completed}
                onChange={() => handleToggle(todo.id)}/>
                </div>
                 <div className='main-layout-box1-to-dos-todotext'>{todo.text} 
                 <span className='main-layout-box1-priority'>Priority - {todo.priority}</span>
                 </div>  
                  <button id={id} onClick={() => handleDelete(id)} className='main-layout-box1-delete'>
                  <img src="../src/assets/dustbin.png" alt="dustbin" className='main-layout-box1-dustbin'>
                  </img>
                  </button>
                  <div>
             <IconButton aria-label="edit" size="large" 
             onClick={() => handleEditTask(todo.id)} 
             className='main-layout-box1-edit'
             sx={{color: '#000'}}>
                <EditIcon sx={{fontSize: '1.7rem'}}/>
              </IconButton>
             </div>

             </div>
             
             
             
        
           
             ))}
            </div>
          )}
         </div>
   
         <div className='main-layout-box2'>
          <h2 className='main-layout-box2-text'>Add a task</h2>
             <textarea rows="3" cols="25" required
             type="text" placeholder="Add item" value={input}
             onChange={(e)=> setInput(e.target.value)}
             className='main-layout-box2-inputfield'
             >
             </textarea>
             <PriorityLevel 
             newPriority={newPriority}
             setNewPriority={setNewPriority}/>
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
    </ThemeProvider>
    )
}

export default App

