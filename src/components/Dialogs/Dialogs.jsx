import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>);

    let dialogsElement = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let mesText = React.createRef();

    let addMes = () => {
        props.dispatch(addMesActionCreator());
    }
    let mesChange = () => {
        let textMes = mesText.current.value;
        let newTextMes = updateNewMesTextActionCreator(textMes);
        props.dispatch(newTextMes);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea onChange={ mesChange } ref={mesText} value={props.newDialogText}></textarea>
                <button onClick={ addMes }>send</button>
            </div>
        </div>
    );
}

export default Dialogs;