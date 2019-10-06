import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

	let postsElement =
		props.posts.map( post => <Post like={post.like} message={post.message}/> );


    
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea></textarea>
				<button>кнопка</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default Posts;