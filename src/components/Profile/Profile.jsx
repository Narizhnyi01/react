import React from 'react';
import s from './Profile.module.css';
import Posts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
	<div>
			<ProfileInfo/>
			<Posts />

	</div>
	);
}

export default Profile;