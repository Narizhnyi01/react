import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import style from "../Common/FormControls/FormControls.module.css"
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        {createField("Email", "email", [required], Input)}
        {createField("password", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

        { props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
        { props.captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {})}

        { props.error &&  <div className={style.form_summary_error}>{props.error}</div>}

            <div><button>Login</button></div>
        
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
    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>

}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login }) (Login);