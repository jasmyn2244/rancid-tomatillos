import React from 'react';
import longLogo from './LongLogo.png'
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h1>
                <img data-cy='logo' className='long-logo' alt='long-logo' src={longLogo} />
            </h1>
        </header>
    )
}

export default Header;