import React from 'react';
import s from './posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";




const MyPosts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} key={post.id} message={post.message}/> );

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.onAddPost();
	}
    let onPostChange = () => {
		let textVal = newPostElement.current.value;
		props.updateNewPostText(textVal);
	}
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<AddPostFormRedux />
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}
const PostSend = (props) =>{
	return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name={'newPost'} placeholder={'enter your post'}/>
            <button >Send</button>
        </form>
	);
}
const AddPostFormRedux = reduxForm({form: 'dialogAddPostForm'}) (PostSend);

export default MyPosts;