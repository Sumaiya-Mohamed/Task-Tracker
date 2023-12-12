import React, {SetStateAction} from "react";
import { PriorityLevel } from "./PriorityLevel";

interface item {
  id: string;
  text: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
}

type AddTaskProps = {
  input: string,
  setInput: React.Dispatch<SetStateAction<string>>;
  newPriority: "High" | "Medium" | "Low";
  setNewPriority: React.Dispatch<SetStateAction<"High" | "Medium" | "Low">>
  handleSaveTask: () => void;
  editTodo: item | null;
}

export const AddTask: React.FC<AddTaskProps> = ({
  input,
  setInput,
  newPriority,
  setNewPriority,
  handleSaveTask,
  editTodo,
}) => {

  
  return (
    <div className="main-layout-box2">
      <h2 className="main-layout-box2-text">Add a task</h2>
      <textarea
        rows={3}
        cols={25}
        required
        placeholder="Add item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="main-layout-box2-inputfield"
      ></textarea>
      <PriorityLevel
        newPriority={newPriority}
        setNewPriority={setNewPriority}
      />
      <div main-layout-box2-buttoncontainer="true">
        <button
          onClick={() => {
            handleSaveTask();
          }}
          className="main-layout-box2-submitbutton"
        >
          {editTodo ? "OK" : "Add"}
        </button>
      </div>
    </div>
  );
}
