import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div id="grad1">
      <Routes> 
        <Route path="" element={<Home />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/layout/:lang/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
