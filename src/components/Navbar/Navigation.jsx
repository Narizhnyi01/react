import React from 'react';
import style from './Navbar.module.css';

const Navigation = () => {
    return <nav className={style.nav}>
    <ul>
      <li className={style.item}><a href='!#'>Profile</a></li>
      <li className={style.item}><a href='!#'>Messages</a></li>
      <li className={style.item}><a href='!#'>News</a></li>
      <li className={style.item}><a href='!#'>Music</a></li>
      <li className={style.item}><a href='!#'>Settings</a></li>
    </ul>
  </nav>
}

export default Navigation;