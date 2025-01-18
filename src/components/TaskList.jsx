import React from 'react';
import { useSelector } from 'react-redux';
import { List, Typography, Paper } from '@mui/material';
import TaskItem from './TaskItems';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Paper sx={{ padding: { xs: 0, sm: 3 }, boxShadow: 'none' }}>
      <Typography variant="h6">Task List</Typography>
      <List sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
