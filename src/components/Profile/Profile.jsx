import React from 'react';

import Posts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {


	return (
	<div>
			<ProfileInfo/>
			<Posts addPost={props.addPost} posts={props.state.posts} />
	</div>
	);
}

export default Profile;