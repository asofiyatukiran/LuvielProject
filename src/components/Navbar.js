import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './Searchbar';
import Sidebar from './Sidebar'; // Import Sidebar

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state
  const [button, setButton] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Menu Button */}
          {button && (
            <Button 
              buttonStyle="btn--menu" 
              onClick={toggleMenu} 
              icon={menuOpen ? 'fas fa-times' : 'fas fa-bars'}
              iconPosition="left"
            >
              Menu
            </Button>
          )}

          {/* Sidebar */}
          <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />

          {/* Search Bar */}
          <SearchBar 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            onSearch={handleSearch} 
          />

          {/* Navbar Logo */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Luviel
          </Link>

          {/* Login & Sign-up Buttons */}
          <div className="button-container">
            {button && <Button className="login-button" to="/login">Login</Button>}
            {button && <Button buttonStyle="btn--signup" buttonSize="btn--large" to="/sign-up">Sign Up</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
