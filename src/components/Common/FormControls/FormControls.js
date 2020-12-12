import React from "react";
import style from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {children}
            { hasError && <span className={'error_input'}>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <>
        <Field name={name} placeholder={placeholder} component={component} validate={validators} {...props}/>
        {text}
    </>
)