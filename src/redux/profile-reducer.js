const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id: 1, message: 'hello', like: '12'},
        {id: 2, message: 'how are you?', like: '17'},
        {id: 2, message: 'how are you?', like: '27'},
        {id: 2, message: 'how are 21?', like: '37'},
        {id: 2, message: 'how are you111?', like: '47'}
    ],
     newPostText: ''
};

const  profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    like: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (textVal) => ({ type: UPDATE_NEW_POST_TEXT, newText: textVal })

export default profileReducer;