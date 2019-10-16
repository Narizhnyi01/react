import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let mesText = React.createRef();

    let addMes = () => {
        let textAlertMes = mesText.current.value;
        props.addMessage(textAlertMes);
        mesText.current.value = '';
    }


    let dialogsElement = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={mesText}></textarea>
                <button onClick={addMes}>send</button>
            </div>
        </div>
    );
}

export default Dialogs;