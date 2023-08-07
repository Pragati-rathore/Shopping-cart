import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import icons
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <div className='yes'>
        <div className="brand">
          <h2>OUR Family</h2>
          <h2>LOGO <span>LOGO</span></h2>
        </div>
        <div>
        <h1>Follow Us</h1>
        <div className="social-icons">
            
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        </div>
        
        </div>
        <hr style={{width:"100%"}} />
        
      </div>
      
      <div className="section">
        <p>©2023 Farouk Systems International</p>
      </div>
    </footer>
  );
};

export default Footer;
