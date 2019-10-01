import React from 'react';

import Posts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

let dataPost = [
	{id: 1, message: 'hello', like: '12'},
	{id: 2, message: 'how are you?', like: '17'},
	{id: 2, message: 'how are you?', like: '27'},
	{id: 2, message: 'how are 21?', like: '37'},
	{id: 2, message: 'how are you111?', like: '47'}

];

let postsElement = dataPost.map( post => <Post like={post.like} message={post.message}/> );

const Profile = () => {
	return (
	<div>
			<ProfileInfo/>
			<Posts post={postsElement} />

	</div>
	);
}

export default Profile;