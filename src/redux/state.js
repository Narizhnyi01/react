let renderEntireTree = () => {
    console.log('state changed');
}
let state = {
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

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export const addMessage = (dialogMessage) => {
    let newMessage = {
        id: 1,
        message: dialogMessage
    };
    state.messagesPage.messages.push(newMessage);
    renderEntireTree(state);
}
export const subscribe = (observer) =>{
    renderEntireTree = observer;
}

export default state;