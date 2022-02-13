import React from 'react';
import longLogo from './LongLogo.png'
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img data-cy='logo' className='long-logo' alt='long-logo' src={longLogo} />
        </header>
    )
}

export default Header;