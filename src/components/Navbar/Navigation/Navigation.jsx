import React from 'react';
import style from '../Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.item}><NavLink activeClassName={style.active} to='/profile'>Profile</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to='/dialogs'>Messages</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to='/news'>News</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to='/users'>Users</NavLink></li>

                <li className={style.item}><a href='!#'>Music</a></li>
                <li className={style.item}><a href='!#'>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;