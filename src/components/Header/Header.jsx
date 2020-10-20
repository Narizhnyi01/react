import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #383735;
  color: #383735;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover{
    background: #383735;
    color: #fff;
  }
`
const Row = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
const Header = (props) => {
    return (
        <header className={s.header}>
            <Row>
            <img src='https://www.freepnglogos.com/uploads/batman-begins-logo-png-20.png' alt='logo'/>
            <div>
                {props.isAuth
                    ? <div>{props.login} - <Button onClick={props.logout}>logout</Button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            </Row>
        </header>
    );
}
export default Header;