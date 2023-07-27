import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
      <Navbar titleText="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container mt-5 mb-5">
        <Form titleText="Enter the text below" />
      </div>
      <hr />
      <About />
    </>
  );
}

export default App;
