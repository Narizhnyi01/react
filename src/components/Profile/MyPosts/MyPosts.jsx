import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} message={post.message}/> );

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}
    
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>Send</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;