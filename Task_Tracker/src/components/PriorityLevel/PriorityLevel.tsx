import React, { SetStateAction } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type PriorityLevelProps = {
   newPriority: "High" | "Medium" | "Low"; 
   setNewPriority: React.Dispatch<SetStateAction<"High" | "Medium" | "Low">>;
 };

export const PriorityLevel: React.FC<PriorityLevelProps> = ({ newPriority, setNewPriority }) =>  {


  const handleChange = (event: SelectChangeEvent) => {
    setNewPriority(event.target.value as "High" | "Medium" | "Low")
    
  };

  
    return (
        <>
        <div className="container">
            <h3 className="container-heading">Priority Level</h3>
            <div className="container-form">
            <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={newPriority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
      </div>
        </div>
        
        </>
    )
}