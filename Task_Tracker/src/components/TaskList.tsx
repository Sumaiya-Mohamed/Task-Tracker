import React, {useEffect, SetStateAction} from "react";
import { Checkbox } from "@mui/material";

interface todo {
  id: string;
  text: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
  
}

type TaskListProps = {
  todos: todo[];
  handleToggle: (id: string) => void;
  handleDelete: (id: number) => void;
  handleEditTask: (id: string) => void;
  setTodos:  React.Dispatch<SetStateAction<todo[]>>;
};

export const TaskList: React.FC<TaskListProps> =({
  todos,
  handleToggle,
  handleDelete,
  handleEditTask,
 // setTodos
}) => {
   
  
 return (
    <div className="main-layout-box1">
      <h1 className="main-layout-box1-text">Tasks</h1>
      {/*Conditional rendering that will render the task once saved and no task added then a message will appear */}
      {todos.length === 0 ? (
        <h1 className="main-layout-box1-text2">No tasks added yet</h1>
      ) : (
        <div className="main-layout-box1-to-dolist">
          {todos.map((todo, id) => (
            <div
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="main-layout-box1-to-dos"
            >
              <div>
                <Checkbox
                  color="primary"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
              </div>
              <div className="main-layout-box1-to-dos-todotext">
                {todo.text}
                <span className="main-layout-box1-priority">
                  {todo.priority}
                </span>
              </div>
              <div className="main-layout-box1-edit">
                <i className='bx bx-edit'
                onClick={() => handleEditTask(todo.id)}
                ></i>
                </div>
              <div className="main-layout-box1-delete">
                <i className='bx bx-trash main-layout-box1-delete'
                onClick={() => {
                  handleDelete(id);
                }}
                id={id.toString()}></i>
              </div>
              
              
              {/* <button
                onClick={() => {
                  handleDelete(id);
                }}
                id={id.toString()}
                className="main-layout-box1-delete"
              >
                <img
                  src="../src/assets/dustbin.png"
                  alt="dustbin"
                  className="main-layout-box1-dustbin"
                ></img>
              </button>
              <div>
                <IconButton
                  aria-label="edit"
                  size="large"
                  onClick={() => handleEditTask(todo.id)}
                  className="main-layout-box1-edit"
                  sx={{ color: "#000" }}
                >
                  <EditIcon sx={{ fontSize: "1.7rem" }} />
                </IconButton>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
