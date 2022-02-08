import React from 'react';
import './Header.scss';
import logo from './Rancid.png'

const Header = () => {
    return (
        <header>
            {/* <img className='title' alt='logo' src={logo}/> */}
            <h1 className='title'>Rancid Tomatillos</h1>
        </header>
    )
}

export default Header;