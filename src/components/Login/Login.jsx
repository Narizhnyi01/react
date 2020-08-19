import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import style from "../Common/FormControls/FormControls.module.css"
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="password" name={"password"} placeholder={"password"} component={Input}  validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me
            </div>
        { props.error &&  <div className={style.form_summary_error}>{props.error}</div>}

            <div><button>Login</button></div>
        
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
debugger;
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

let mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login }) (Login);