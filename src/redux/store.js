import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage:{
            posts:[
                {id: 1, message: 'hello', like: '12'},
                {id: 2, message: 'how are you?', like: '17'},
                {id: 2, message: 'how are you?', like: '27'},
                {id: 2, message: 'how are 21?', like: '37'},
                {id: 2, message: 'how are you111?', like: '47'}
            ],
            newPostText: ''
        },

        messagesPage:{
            dialogs:[
                {id: 1, name: 'Slava'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Alona'},
                {id: 4, name: 'July'},
                {id: 5, name: 'Ruslan'}
            ],
            messages:[
                {id: 1, message: 'hello'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'fine'},
                {id: 4, message: 'yo'}
            ],
            newDialogText: ''
        },
        navbar:{
            fiends:[

                {link: 'https://golos.ua/images/items/2019-10/05/2Ax0dEeeGDrEodk9/img_top.jpg'},
                {link: 'https://golos.ua/images/items/2019-10/05/2Ax0dEeeGDrEodk9/img_top.jpg'},
                {link: 'https://golos.ua/images/items/2019-10/05/2Ax0dEeeGDrEodk9/img_top.jpg'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navbar = sidebarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);

    }
}





// export default store;
// window.store = store;