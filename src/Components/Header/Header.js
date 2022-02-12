import React from 'react';
import './Header.scss';
import logo from '../../Assets/RTLogo.png'
// import logo from './Rancid.png'
import longLogo from './LongLogo.png'
// import SearchBar from '..//SearchBar/SearchBar';


const Header = () => {
    return (
        <header className='header'>
            <img className='long-logo' alt='long-logo' src={longLogo} />
            {/* <h1 className='title'>Rancid Tomatillos</h1> */}
            {/* <SearchBar /> */}
        </header>
    )
}

export default Header;