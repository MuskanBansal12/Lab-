import { useState } from 'react'
import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import home from "./pages/home"
import login from "./pages/login"
import signup from "./pages/signup"

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/login" element={<login />} />
      <Route path="/signup" element={<signup />} />
    </Routes>
  </Router>

    
  )
}

export default App
