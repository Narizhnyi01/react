import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const Posts = () => {
	return (
		<div className={s.posts}>
			<div>my posts</div>
			<div>
				<textarea></textarea>
				<button>кнопка</button>
			</div>
			<div className={s.posts}>
				<Post like='12' message='how are you?'/>
				<Post like='25' message='it is my post'/>
				
			</div>
		</div>
	);
}

export default Posts;