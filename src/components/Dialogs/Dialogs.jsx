import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>);

    let dialogsElement = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let newMessageText = props.state.newDialogText;

    let addMes = () => {
        props.dispatch(addMesActionCreator());
    }
    let mesChange = (e) => {
        let textMes = e.target.value;
        props.dispatch(updateNewMesTextActionCreator(textMes));
    }

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