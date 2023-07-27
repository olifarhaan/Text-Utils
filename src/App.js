import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from './img/logo.svg';


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
      <Navbar titleText="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} logo={logo} />
      <div className="container mt-5 mb-5">
        <Form titleText="Enter the text below" />
      </div>
      <hr />
      <About />
    </>
  );
}

export default App;
