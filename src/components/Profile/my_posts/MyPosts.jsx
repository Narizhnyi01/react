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
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default Posts;