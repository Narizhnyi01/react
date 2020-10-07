
import React from 'react';
import {createField, Input, Textarea} from "../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import style from "../../Common/FormControls/FormControls.module.css";
const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>

        { error &&  <div className={style.form_summary_error}>{error}</div>}

        <div>Меня зовут: {createField("Full name", "fullName", [], Input)}</div>
        <div>Loking for a job: {createField("", "lookingForAJob", [], Input,{type: "checkbox"})}</div>
        <div>Skils: {createField("", "lookingForAJobDescription", [], Textarea)}</div>
        <div>About me: {createField("About me", "aboutMe", [], Textarea)}</div>

        <div>Contacts: {Object.keys(profile.contacts).map( key => {
            return <div key={key}>
                <b>{key}: </b> {createField(key, "contacts." + key, [], Input)}
            </div>
        })}</div>


    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;