import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/pages/Home";
import AskLuviel from "./components/pages/AskLuviel";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const location = useLocation(); // Get current path
  const hideNavbarRoutes = ["/login", "/sign-up"]; // Add paths where navbar should be hidden

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <>
          <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AskLuviel" element={<AskLuviel />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
