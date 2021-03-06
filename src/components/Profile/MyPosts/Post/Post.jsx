import React from 'react';
import s from './post.module.css';

const Post = (props) => {
	return (

		<div className={s.item}>
			<img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="ava" />
			<div>
				<div className="text">{props.message}</div>
				<span>like {props.like}</span>
			</div>
		</div>

	);
}

export default Post;