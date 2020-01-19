import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} message={post.message}/> );

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	}
    let onPostChange = () => {
		let textVal = newPostElement.current.value
		let newVar = { type: 'UPDATE-NEW-POST-TEXT', newText: textVal };
		props.dispatch(newVar);
	}
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
				<button  onClick={ addPost }>Send</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;