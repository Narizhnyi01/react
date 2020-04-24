import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Header = (props) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/7453`)
        .then(response => {

            debugger
        });
    return (



        <header className={s.header}>
            <div>{props.id}</div>
            <img src='https://www.freepnglogos.com/uploads/batman-begins-logo-png-20.png' alt='logo'/>

            <div>


                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}


            </div>
        </header>
    );
}

export default Header;