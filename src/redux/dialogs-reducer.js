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
        {id: 1, message: 'hello', whoSend: 'me'},
        {id: 2, message: 'how are you?', whoSend: 'me'},
        {id: 3, message: 'fine', whoSend: 'you'},
        {id: 4, message: 'yo', whoSend: 'me'},
        {id: 5, message: 'yo', whoSend: 'me'},
        {id: 6, message: 'yo', whoSend: 'me'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newMessage}]
            }



        default:
            return state;
    }

}
export const addMesActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export default dialogsReducer;