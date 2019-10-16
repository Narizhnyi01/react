import React from 'react';

import Posts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {


	return (
	<div>
			<ProfileInfo/>
			<Posts addPost={props.addPost}
				   posts={props.profilePage.posts}
				   updateNewPostText={props.updateNewPostText}
				   newPostText={props.profilePage.newPostText}/>
	</div>
	);
}

export default Profile;