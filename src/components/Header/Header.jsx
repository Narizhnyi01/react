import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import img from '../../images/logo-react.png'
const Row = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px 20px;
`
const Header = (props) => {
    return (
        <header className={s.header}>
            <Row>
            <img src={img} alt='logo'/>
            <div>
                {props.isAuth
                    ? <div>{props.login} - <Button className={s.button} variant="contained" color="primary" onClick={props.logout}>logout</Button></div>
                    : <NavLink to={'/login'}><Button variant="contained" color="primary">Login</Button></NavLink>}
            </div>
            </Row>
        </header>
    );
}
export default Header;