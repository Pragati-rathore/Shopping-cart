

import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
    return (
        <div>
            <header >

                <div className="header">

                    FREE STANDARD SHIPPING FOR ORDERS OVER $100. <span ><a style={{ color: "white", textDecoration: 'underline', }} href="/support/shipping/">LEARN MORE</a></span>
                </div>
                <div className='login'>
                Login/Register
            </div>
            <div>
                <Navbar/>
            </div>

            </header>
            
           
        </div>

    );
};

export default Header;