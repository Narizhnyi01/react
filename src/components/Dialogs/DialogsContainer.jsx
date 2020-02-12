import React from 'react';
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (textMes) => {
            dispatch(updateNewMesTextActionCreator(textMes));
        },
        sendMessage: () => {
            dispatch(addMesActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);

export default DialogsContainer;