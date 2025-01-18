import React from 'react';
import {
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompletion } from '../store/tasksSlice';
import WeatherWidget from './WeatherWidget';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  console.log(task);

  // color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#f44336'; 
      case 'Medium':
        return '#ff9800'; 
      case 'Low':
        return '#4caf50'; 
      default:
        return '#2196f3'; 
    }
  };

  return (
    <ListItem
      sx={{
        backgroundColor: task.completed ? 'whitesmoke' : '#fff',
        marginBottom: 2,
        borderRadius: 3,
        padding: 1,
        border: '1px solid grey',
        borderLeft: `5px solid ${getPriorityColor(task.priority)}`,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Priority */}
      <Chip
        label={task.priority}
        sx={{
          backgroundColor: getPriorityColor(task.priority),
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: 2,
          marginBottom: { xs: 1, sm: 0 },
          marginRight: { sm: 2 },
        }}
      />

      {/* Task Content */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
        <Checkbox
          checked={task.completed}
          onChange={() => dispatch(toggleCompletion(task))}
        />
        <ListItemText
          primary={task.text}
          sx={{
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        />
      </Box>

       {/* weather */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <WeatherWidget />
        <IconButton
          onClick={() => dispatch(deleteTask(task))}
          sx={{ color: '#f44336' }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TaskItem;
