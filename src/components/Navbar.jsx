import React from 'react';
import logo from '../Images/logo.png';

function Navbar() {
    return ( <nav>
        <img src={logo} alt="logo " className='nav--logo'/>
    </nav> );
}

export default Navbar;