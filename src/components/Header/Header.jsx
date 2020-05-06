import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import userPhoto from "../../images/icon.png";

const Header = (props) => {


    return (



        <header className={s.header}>

            <img src='https://www.freepnglogos.com/uploads/batman-begins-logo-png-20.png' alt='logo'/>

            <div>


                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                

            </div>
        </header>
    );
}

export default Header;