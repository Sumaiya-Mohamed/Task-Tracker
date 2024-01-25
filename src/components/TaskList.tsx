import React from "react";
import { Checkbox } from "@mui/material";

type todo = {
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
};

export const TaskList: React.FC<TaskListProps> =({
  todos,
  handleToggle,
  handleDelete,
  handleEditTask,
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
                <button className='bx bx-edit'
                onClick={() => handleEditTask(todo.id)}
                ></button>
                </div>
              <div className="main-layout-box1-delete">
                <button className='bx bx-trash main-layout-box1-delete'
                onClick={() => {
                  handleDelete(id);
                }}
                id={id.toString()}></button>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
