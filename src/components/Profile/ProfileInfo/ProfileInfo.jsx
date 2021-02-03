import React, {useState, useEffect} from 'react';

import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloadrer/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import MiniPreloader from "../../Common/Preloadrer/MiniPreloader";
import Button from "@material-ui/core/Button";
import s from "../MyPosts/posts.module.css";


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
    }
    return (
        <div>
            <div className={style.body_post}>
                <div className={style.photo_wrap}>
                    <img
                        className={s.userPhoto}
                        src={props.profile.photos.large || 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
                        alt=""/>
                    {props.isOwner && <input className={style.file_photo} id="file_photo" type="file" onChange={onMainPhotoSelected}/>}
                    {props.isOwner && <label className={style.label_photo} for="file_photo">Upload photo</label>}
                    {props.isFetching && <div className={style.loading_box}><MiniPreloader/></div>}
                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>

                </div>


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
        {isOwner && <div className={s.mb30}>

            <Button onClick={goToEditMode} variant="contained" color="primary">
                Edit
            </Button>
        </div>}

        <div className={s.mb10}>My name is: {profile.fullName}</div>
        <div className={s.mb10}> About me: {profile.aboutMe} </div>
        <div className={s.mb10}>Job search: {profile.lookingForAJobDescription}</div>
        <div className={s.mb10}>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        {
            profile.lolookingForAJob &&
            <div className={s.mb10}>Skills: {profile.lookingForAJobDescription}</div>
        }
        <div><div className={s.mb10}>Contacts:</div> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;