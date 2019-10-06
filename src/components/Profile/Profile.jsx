import React from 'react';

import Posts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {


	return (
	<div>
			<ProfileInfo/>
			<Posts posts={props.posts} />
	</div>
	);
}

export default Profile;