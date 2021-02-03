
import React from 'react';
import {createField, Input, Textarea} from "../../Common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import style from "../../Common/FormControls/FormControls.module.css";
import {renderCheckbox, renderTextField, renderTextFieldMulti} from "../../Common/FormControls/MaterialUiForm";
import Button from "@material-ui/core/Button";
import s from "../MyPosts/posts.module.css";
import {required} from "../../../utils/validators";
const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.mb30}>

            <Button type={'submit'} variant="contained" color="primary">
                save
            </Button>
        </div>

        { error &&  <div className={style.form_summary_error}>{error}</div>}

        <div className={s.mb30}>{<Field fullWidth label={'Full name'} name='fullName' component={renderTextField} type='text'/>}</div>
        <div className={s.mb30}>{<Field  label={'Loking for a job'} name='lookingForAJob' component={renderCheckbox} type='checkbox'/>}</div>

        <div className={s.mb30}>{<Field fullWidth label={'Skils'} name='lookingForAJobDescription' component={renderTextField} type='text'/>}</div>

        <div className={s.mb30}>{<Field color="primary" fullWidth name={'aboutMe'}  component={renderTextFieldMulti} label="About me"/>}</div>


        <div ><div className={s.mb30}>Contacts:</div> {Object.keys(profile.contacts).map( key => {
            return <div className={s.mb30} key={key}>

                <Field fullWidth label={key} name={"contacts." + key} component={renderTextField} type='text'/>
            </div>
        })}</div>


    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;