import React, {useState, useEffect} from 'react';

import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloadrer/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then( () => {
			setEditMode(false);
		});


        // debugger

    }


    return (
        <div>
            <div className={style.banner_image}>
                {/*<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>*/}
            </div>
            <div className={style.body_post}>
                <div className={style.photo_wrap}>
                    <img
                        src={props.profile.photos.large || 'https://lh3.googleusercontent.com/proxy/Ukde1k4yAp1SNrRVnJjQJBwflhpEnXu_Q3CQZBiKaBC0I62luEEIBII7HYkkWXBTzWlPs88JfYWtJugb_lXkvVWdHgxUFkU0nDIr'}
                        alt=""/>
                    {props.isOwner && <input className={style.file_photo} id="file_photo" type="file" onChange={onMainPhotoSelected}/>}
                    {props.isOwner && <label className={style.label_photo} for="file_photo">Загрузить фото</label>}
                </div>


                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile}
                                                onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}


            </div>
        </div>
    );
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}

        <div>Меня зовут: {profile.fullName}</div>
        <div> Немного обо мне: {profile.aboutMe} </div>
        <div>поиск работы: {profile.lookingForAJobDescription}</div>
        <div>Loking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        {
            profile.lolookingForAJob &&
            <div>Skils: {profile.lookingForAJobDescription}</div>
        }
        <div>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;