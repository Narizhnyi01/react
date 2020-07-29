import {maxLengthCreator, required} from "../../../utils/validators";
import style from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import React from "react";


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form className={style.messages} onSubmit={props.handleSubmit}>

            <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'enter your message'}/>
            <button>send</button>
        </form>
    );

}
export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

