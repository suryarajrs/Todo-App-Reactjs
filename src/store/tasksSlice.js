import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      // Save to localStorages
      localStorage.setItem('tasks', JSON.stringify(state)); 
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.text !== action.payload.text);
      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedState)); 
      return updatedState;
    },
    toggleCompletion: (state, action) => {
      const updatedState = state.map((task) =>
        task.text === action.payload.text
          ? { ...task, completed: !task.completed }
          : task
      );
      // Save to localStorage

      localStorage.setItem('tasks', JSON.stringify(updatedState)); 
      return updatedState;
    },
  },
});

export const { addTask, deleteTask, toggleCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;
