import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import style from "../Common/FormControls/FormControls.module.css"
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    let captchaField  = createField("Symbols from image", "captcha", [required], Input, {});
    return <form onSubmit={props.handleSubmit}>

        <div className="row_input">
            {createField("Email", "email", [required], Input)}
        </div>
        <div className="row_input">
            {createField("Password", "password", [required], Input, {type: "password"})}
        </div>
        <div className="row_input row_check">
            {/*{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}*/}
            <Field id='rem' name='rememberMe' component={Input} type='checkbox'/>
            <label htmlFor="rem">Remember me</label>
        </div>


        { props.captchaUrl && <img src={props.captchaUrl} alt=""/>}

        { props.captchaUrl &&  <div className="row_input">{captchaField}</div> }


            <button className={'btn_login'}>Login</button>
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