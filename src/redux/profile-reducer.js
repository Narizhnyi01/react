import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {toggleFollowingProgress} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const UPDATING_PHOTO = 'UPDATING_PHOTO';
let initialState = {
    posts: [
        {id: 1, message: 'hello', like: '12'},
        {id: 2, message: 'how are you?', like: '17'},
        {id: 3, message: 'how are you?', like: '27'},
        {id: 4, message: 'how are 21?', like: '37'},
        {id: 5, message: 'how are you111?', like: '47'}
    ],
    // newPostText: '',
    profile: null,
    status: 'status',
    isFetching: false
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
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case UPDATING_PHOTO:
            return {...state, isFetching: action.isFetching}
        case SAVE_PHOTO_SUCCESS: 
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const updatingPhoto = (isFetching) => ({type: UPDATING_PHOTO, isFetching});

export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try{
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch  {
        // alert("update status error")
    }

}
export const savePhoto = (file) => async (dispatch) => {
    dispatch(updatingPhoto(true));
    let response = await profileAPI.savePhoto(file);


    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
    dispatch(updatingPhoto(false));

}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
        dispatch(stopSubmit('editProfile', {
            contacts: {[key]: response.data.messages[0]},
        }));
        dispatch(stopSubmit("edit-profile", {"contacts": {[key]: 'Invalid format url: ' + key} }));
        debugger
        return Promise.reject({_error: response.data.messages[0] })
    }
}

export default profileReducer;