import React from 'react';
import s from './posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    let dataPost = [
        {id: 1, message: 'hello', like: '12'},
		{id: 2, message: 'how are you?', like: '17'},
		{id: 2, message: 'how are you?', like: '27'},
		{id: 2, message: 'how are 21?', like: '37'},
		{id: 2, message: 'how are you111?', like: '47'}

    ];
    let postsElement = dataPost.map( post => <Post like={post.like} message={post.message}/> );
    
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