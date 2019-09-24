import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
   return <div className={style.dialog}>{props.mes}</div>
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                <DialogItem name="Slava" id="1"/>
                <DialogItem name="Anton" id="2"/>
                <DialogItem name="Alona" id="3"/>
                <DialogItem name="July" id="4"/>
                <DialogItem name="Ruslan" id="5"/>
            </div>
            <div className={style.messages}>
               <Message mes="hello"/>
               <Message mes="how are you?"/>
               <Message mes="fine"/>
               <Message mes="yo"/>
            </div>
        </div>
    );
}

export default Dialogs;