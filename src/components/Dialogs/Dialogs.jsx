import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";
import Redirect from "react-router-dom/es/Redirect";


const Dialogs = (props) => {
    let state = props.messagesPage;

    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let newMessageText = state.newDialogText;

    let addMes = () => {
        props.sendMessage();
    }
    let mesChange = (e) => {
        let textMes = e.target.value;
        props.updateNewMessage(textMes);
    }
    // if (!props.isAuth) return <Redirect to="/login" />
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea onChange={mesChange} value={newMessageText}></textarea>
                <button onClick={addMes}>send</button>
            </div>
        </div>
    );
}

export default Dialogs;