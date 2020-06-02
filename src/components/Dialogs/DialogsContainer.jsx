import React from 'react';
import {addMesActionCreator, updateNewMesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(AuthRedirectComponent);

export default DialogsContainer;