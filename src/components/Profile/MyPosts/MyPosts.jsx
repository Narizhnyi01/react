import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} message={post.message}/> );

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}
    let onPostChange = () => {
		let textVal = newPostElement.current.value
		props.updateNewPostText(textVal);
	}
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				<button  onClick={addPost}>Send</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;