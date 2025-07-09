import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contest from './pages/Contest.jsx';
import { Context } from './context/Context';

function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contest' element={<Contest />} />
      </Routes>
    </Router>
  );
}

export default App;
