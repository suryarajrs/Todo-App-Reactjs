import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ text: task, completed: false, priority }));
      setTask('');
      setPriority('Medium');
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} sx={{padding:2}}>
      <TextField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        label="Task Description"
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleAddTask} disabled={!task}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
