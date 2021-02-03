const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'User'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'Nikname'},
    ],
    messages: [
        {id: 1, message: 'hello', whoSend: 'me'},
        {id: 2, message: 'how are you?', whoSend: 'me'},
        {id: 3, message: 'fine', whoSend: 'you'},
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