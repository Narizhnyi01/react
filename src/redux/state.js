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

            ]
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
    addMessage(dialogMessage) {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type == 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type == 'UPDATE-NEW-POST-TEXT'){

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type == 'ADD-MESSAGE'){

            let newMessage = {
                id: 1,
                message: this._state.messagesPage.dialogMessage
            };

            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.messages = '';
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;