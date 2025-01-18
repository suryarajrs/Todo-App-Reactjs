import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const TodoHomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        padding: 3,
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 2, 
          padding: 3,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            color: '#3f51b5',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          Simple To-Do App 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AddTask />
          </Grid>
          <Grid item xs={12} md={6}>
            <TaskList />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body2" color="textSecondary" align="center">
        Created by Surya 💖
        </Typography>
      </Box>
    </Box>
  );
};
