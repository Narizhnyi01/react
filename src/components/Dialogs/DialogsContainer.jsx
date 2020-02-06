import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMes = () => {
        props.store.dispatch(addMesActionCreator());
    }
    let mesChange = (textMes) => {
        // let textMes = e.target.value;
        props.store.dispatch(updateNewMesTextActionCreator(textMes));
    }

    return (
       <Dialogs updateNewMessage={mesChange} sendMessage={addMes} messagesPage={state}/>
    );
}

export default DialogsContainer;