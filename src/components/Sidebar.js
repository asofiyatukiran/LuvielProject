import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${menuOpen ? "active" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>✖</button>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/AskLuviel" onClick={toggleMenu}>Ask Luviel</Link></li>
        <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
