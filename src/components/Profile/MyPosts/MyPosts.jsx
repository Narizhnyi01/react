import React from 'react';
import s from './posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControls/FormControls";




const MyPosts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} key={post.id} message={post.message}/> );

	let newPostElement = React.createRef();

	let addNewPost = (values) => {
		props.onAddPost(values.newPost);
	}

	return (
		<div className={s.posts}>
			<div>my posts</div>
			<AddPostFormRedux onSubmit={addNewPost}/>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}
const maxLength10 = maxLengthCreator(10)
const PostSend = (props) =>{
	return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPost'} placeholder={'enter your post'} validate={[required, maxLength10]}/>
            <button >Send</button>
        </form>
	);
}
const AddPostFormRedux = reduxForm({form: 'dialogAddPostForm'}) (PostSend);

export default MyPosts;