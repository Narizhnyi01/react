import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloadrer/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader />
	}

	return (
	<div>
		<div className={style.banner_image}>
			{/*<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>*/}
		</div>
		<div className={style.body_post}>
			<img src={props.profile.photos.large} alt=""/>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			<div>Меня зовут: {props.profile.fullName}</div>
			<div>Немного обо мне: {props.profile.aboutMe}</div>
			<div>поиск работы: {props.profile.lookingForAJobDescription}</div>
			<div>ava + descr</div>

		</div>
	</div>
	);
}

export default ProfileInfo;