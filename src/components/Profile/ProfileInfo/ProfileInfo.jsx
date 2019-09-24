import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return (
	<div>
		<div className={style.banner_image}>
			<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='image' />
		</div>
		<div className={style.body_post}>
			<div>ava + descr</div>

		</div>
	</div>
	);
}

export default ProfileInfo;