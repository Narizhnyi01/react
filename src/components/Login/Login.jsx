import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import style from "../Common/FormControls/FormControls.module.css"
import './loginStyle.scss'
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import Button from "@material-ui/core/Button";
import {renderCheckbox, renderTextField} from "../Common/FormControls/MaterialUiForm";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import purple from "@material-ui/core/colors/purple";


const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});


const LoginForm = (props) => {
    let captchaField  = createField("Symbols from image", "captcha", [required], Input, {});
    return <form onSubmit={props.handleSubmit}>

        <div className="row_input input_label">
            {/*{createField("Email", "email", [required], Input)}*/}
            <Field color="primary" fullWidth name="email" component={renderTextField} label="Email" validate={required}/>
        </div>
        <div className="row_input">
            {/*{createField("Password", "password", [required], Input, {type: "password"})}*/}
            <Field color="primary" fullWidth type={'password'} name="password" component={renderTextField} label="Password" validate={required}/>

        </div>
        <div className="row_input row_check">
            {/*{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}*/}
            <Field label={'Remember me'} name='rememberMe' component={renderCheckbox} type='checkbox'/>

        </div>


        { props.captchaUrl && <img src={props.captchaUrl} alt=""/>}

        { props.captchaUrl &&  <div className="row_input">{captchaField}</div> }



            <Button type={'submit'} variant="contained" color="primary">
                Login
            </Button>
        { props.error &&  <div className={style.form_summary_error}>{props.error}</div>}


    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={'login_page'}>
        <div className="form_wrap">

            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    </div>

}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login }) (Login);