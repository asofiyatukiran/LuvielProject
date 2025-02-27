import React, { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Router>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
