import React from 'react';
import logo from '../Images/logo.png'

function Footer() {
    return ( <footer className='footerSection'>
      
            <img src={logo} alt="logo of airdnd" />
        
        <div className="footer-rightSection">
            <p>© 2023 Airdnd Inc</p>
        
        </div>
    </footer> );
}

export default Footer;