import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {
    let state = props.messagesPage;
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);
    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElement}
            </div>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const AddMessageForm = (props) => {
    return (
        <form className={style.messages} onSubmit={props.handleSubmit}>

            <Field component="textarea" name={'newMessageBody'} placeholder={'enter your message'}/>
            <button>send</button>
        </form>
    );

}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;