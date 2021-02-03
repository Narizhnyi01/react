import React from 'react';
import s from './posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControls/FormControls";
import {renderTextField, renderTextFieldMulti} from "../../Common/FormControls/MaterialUiForm";
import Button from "@material-ui/core/Button";




const MyPosts = React.memo(props => {

	let postsElement =
		[...props.posts]
			// .reverse()
			.map( post => <Post like={post.like} key={post.id} message={post.message}/> );

	let newPostElement = React.createRef();

	let addNewPost = (values) => {
		props.onAddPost(values.newPost);

	}

	return (
		<div className={s.posts}>

			<AddPostFormRedux onSubmit={addNewPost}/>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
});
const maxLength10 = maxLengthCreator(10)
const PostSend = (props) =>{
	return (
        <form onSubmit={props.handleSubmit}>
			<Field className={s.text} color="primary" fullWidth name={'newPost'}  component={renderTextFieldMulti} label="Enter your post" validate={required}/>

			<Button className={s.button} type={'submit'} variant="contained" color="primary">
				Send
			</Button>
        </form>
	);
}
const AddPostFormRedux = reduxForm({form: 'dialogAddPostForm'}) (PostSend);

export default MyPosts;