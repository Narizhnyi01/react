import React from 'react';
import style from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return <nav className={style.nav}>
    <ul>
      <li className={style.item}><Link to='/profile'>Profile</Link></li>
      <li className={style.item}><Link to='/dialogs'>Messages</Link></li>
      <li className={style.item}><Link to='/news'>News</Link></li>
      <li className={style.item}><a href='!#'>Music</a></li>
      <li className={style.item}><a href='!#'>Settings</a></li>
    </ul>
  </nav>
}

export default Navigation;