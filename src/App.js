import './App.scss';
import Textform from './components/Textform.js';
import Navbar from './components/Navbar.js';
import Alert  from './components/Alerts.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    
    setalert({
      msg: message,
      type: type})
setTimeout(() => {
  setalert(null)
}, 1500)
    
  }
  const handleMode = () => {
    if (mode === 'light') {
      setmode('dark');
    showAlert("Dark mode has been enabled", "success");

    } else {
      setmode('light');
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtiles" home="Home" mode={mode} changeMode={handleMode} />
    
      <div className={` bg-${mode} body`}>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
          <Route path="/" element={<Textform mode={mode} showAlert={showAlert} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
