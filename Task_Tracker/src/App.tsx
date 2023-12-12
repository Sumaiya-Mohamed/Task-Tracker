import { Header } from "./components/Header";
import DateCalendarValue from "./components/DateCalendarValue";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {TaskList} from "./components/TaskList";
import {AddTask} from "./components/AddTask";

interface item {
  id: string;
  text: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
}

export const App: React.FC = () => {


  const [todos, setTodos] = useState<item[]>([]);


  const [input, setInput] = useState<string>("");

  const [editTodo, setEditTodo] = useState<item | null>(null);

  const [newPriority, setNewPriority] = useState<"High" | "Medium" | "Low">(
    "High"
  );


  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });


  /*Function that handles the delete functionality for each task*/
  function handleDelete(id: number): void {
    const taskCopy = [...todos];
    taskCopy.splice(id, 1);
    setTodos(taskCopy);
    return;
  }
 
  /*Function to cross out/ tick when a user finishes a task */
  const handleToggle = (id: string): void => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const updateTodo = (
    text: string,
    id: string,
    completed: boolean,
    priority: "High" | "Medium" | "Low"
  ) => {
    console.log("Updating Todo:", { text, id, completed, priority });
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text, completed, priority } : todo
    );
    setTodos(updatedTodo);
    setEditTodo(null);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
      setNewPriority(editTodo.priority);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  /*Function to submit the task once "save" button is clickec (adds the task) */
  const handleSaveTask = () => {
    if (!editTodo) {
      const newTodo = {
        id: uuidv4(),
        text: input,
        completed: false,
        priority: newPriority,
      };
      if (newPriority === "High") {
        // If new task is high priority, move it to the top
        setTodos([newTodo, ...todos]);
      } else {
        setTodos([...todos, newTodo]);
      }
      //setTodos([...todos, newTodo])
      setInput("");
      setNewPriority("High");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed, newPriority);
    }
  };

  const handleEditTask = (id: string): void => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo || null);
    return;
  };

    

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <div className="main-layout">
          <div className="main-layout-box">
            <DateCalendarValue />
          </div>

          <TaskList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEditTask={handleEditTask}
            setTodos={setTodos}
          />

          <AddTask
            input={input}
            setInput={setInput}
            newPriority={newPriority}
            setNewPriority={setNewPriority}
            handleSaveTask={handleSaveTask}
            editTodo={editTodo}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
