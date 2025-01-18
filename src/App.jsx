import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoHomePage } from './TodoHomePage';
import SignIn from './components/signin/Signin';

const App = () => {



  return (
    <Routes>
      <Route path="/" element={<SignIn  />} />
      <Route path="/home"element={ <TodoHomePage /> }
      />
    </Routes>
  );
};

export default App;
