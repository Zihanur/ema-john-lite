import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav >
            <img src={logo} alt="logo" srcset="" />
            <ul>
                <li><a href="#">Order</a></li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;