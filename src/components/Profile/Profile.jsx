import React from 'react';
import s from './Profile.module.css';
import Posts from './MyPosts/MyPosts';





const Profile = () => {
	return (
	<div>
		<div className={s.banner_image}>
			<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='image' />
		</div>
		<div>
			<div>ava + descr</div>
			<Posts />
		</div>
	</div>
	);
}

export default Profile;