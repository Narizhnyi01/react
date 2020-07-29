import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hello', like: '12'},
        {id: 2, message: 'how are you?', like: '17'},
        {id: 2, message: 'how are you?', like: '27'},
        {id: 2, message: 'how are 21?', like: '37'},
        {id: 2, message: 'how are you111?', like: '47'}
    ],
    // newPostText: '',
    profile: null,
    status: 'sss'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPost,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ''
            };


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {

    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {

    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }

        });
    }
}

export default profileReducer;