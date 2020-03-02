import React from 'react';
import s from './posts.module.css';
import Post from "./Post/Post";




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
			<div>
				<textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
				<button  onClick={ onAddPost }>Send</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;