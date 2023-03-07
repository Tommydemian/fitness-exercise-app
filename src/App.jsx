import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Box } from '@mui/material'

import './App.css'

import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetails'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const queryClient = new QueryClient();
  

  return (
    <BrowserRouter >
    <QueryClientProvider client={queryClient} >
    <div className="App">
      <Box width='400px' sx={{ width: {xl:'1488px'} }} m="auto" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route to="/exercise/:id" element={ <ExerciseDetail/> } />
      </Routes>
      <Footer />
      </Box>
  
    </div>
    </QueryClientProvider> 
    </BrowserRouter >
  )
}

export default App
