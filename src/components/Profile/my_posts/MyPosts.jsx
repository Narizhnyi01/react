import React from 'react';
import s from './posts.module.css';
import Post from './post/post';

const Posts = () => {
	return (
		<div>
			<div>my posts</div>
			<div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
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