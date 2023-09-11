import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import your CSS file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">CHI</div>
      <div className="searchbar">
      <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
      </div>
      <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li  className="dropdown" >Shop
          {/* <ul className="sub-menu">
              <li>Subheading 1</li>
              <li>Subheading 2</li>
              
            </ul> */}
          </li>
          <li>Women</li>
         <Link to="/men"><li>Men</li></Link> 
          <li>Video Gallery</li>
          
          <li>Education</li>
          <li>Coupons & Promos</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
