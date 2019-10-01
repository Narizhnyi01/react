import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {


    
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea></textarea>
				<button>кнопка</button>
			</div>
			<div className={s.posts}>
				{props.post}
			</div>
		</div>
	);
}

export default Posts;