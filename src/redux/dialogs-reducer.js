const UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Alona'},
        {id: 4, name: 'July'},
        {id: 5, name: 'Ruslan'}
    ],
    messages: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'fine'},
        {id: 4, message: 'yo'}
    ],
    newDialogText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newDialogText;
            return {
                ...state,
                newDialogText: '',
                messages: [...state.messages, {id: 7, message: newMessage}]
            }

        case UPDATE_NEW_MES_TEXT:
            return {
                ...state,
                newDialogText: action.newTextMes
            }

        default:
            return state;
    }

}
export const addMesActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMesTextActionCreator = (textMes) => ({type: UPDATE_NEW_MES_TEXT, newTextMes: textMes})

export default dialogsReducer;