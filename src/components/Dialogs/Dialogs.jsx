import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={style.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Alona'},
        {id: 4, name: 'July'},
        {id: 5, name: 'Ruslan'}
    ];

    let messages = [
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'fine'},
        {id: 4, message: 'yo'}

    ];

    let dialogsElement = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = messages.map( message => <Message message={message.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}

            </div>
        </div>
    );
}

export default Dialogs;