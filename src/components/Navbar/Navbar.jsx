import React from 'react';
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";
import style from "./Navbar.module.css"
const Sidebar = (props) => {
    return (
        <div className={style.wrap_nav}>
            <Navigation/>
            {/*<Friends state={props.state}/>*/}
        </div>

    );
}
export default Sidebar;