import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloadrer/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Input } from '../../Common/FormControls/FormControls';


const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = (e) => {
		if(e.target.files.length){
			// debugger
			props.savePhoto(e.target.files[0])
		}
	}
	return (
	<div>
		<div className={style.banner_image}>
			{/*<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>*/}
		</div>
		<div className={style.body_post}>
			<img src={props.profile.photos.large || 'https://lh3.googleusercontent.com/proxy/Ukde1k4yAp1SNrRVnJjQJBwflhpEnXu_Q3CQZBiKaBC0I62luEEIBII7HYkkWXBTzWlPs88JfYWtJugb_lXkvVWdHgxUFkU0nDIr'} alt=""/>
			{ props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
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