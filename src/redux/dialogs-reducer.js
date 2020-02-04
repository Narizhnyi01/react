const UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const  dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newDialogText
            };
            state.messages.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_MES_TEXT:
            state.newDialogText = action.newTextMes;
            return state;

        default:
            return state;
    }

}
export const addMesActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMesTextActionCreator = (textMes) => ({ type: UPDATE_NEW_MES_TEXT, newTextMes: textMes })

export default dialogsReducer;