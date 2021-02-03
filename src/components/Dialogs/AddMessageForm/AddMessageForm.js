import {maxLengthCreator, required} from "../../../utils/validators";
import style from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import React from "react";
import {renderTextFieldMulti} from "../../Common/FormControls/MaterialUiForm";
import Button from "@material-ui/core/Button";


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form className={style.messages} onSubmit={props.handleSubmit}>

            {/*<Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'enter your message'}/>*/}

            <Field color="primary" fullWidth name={'newMessageBody'}  component={renderTextFieldMulti} label="Enter your message"/>
            <Button type={'submit'} variant="contained" color="primary">
                Send
            </Button>
        </form>
    );

}
export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

