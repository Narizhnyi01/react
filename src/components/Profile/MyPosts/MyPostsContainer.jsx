import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {reset} from 'redux-form';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        onAddPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
            dispatch(reset('dialogAddPostForm'));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;