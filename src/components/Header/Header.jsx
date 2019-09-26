import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.freepnglogos.com/uploads/batman-begins-logo-png-20.png' alt='logo'/>
        </header>
    );
}

export default Header;