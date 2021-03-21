import React, {useRef} from 'react';
import {logIn, signUp} from "../../../action/authAction.js";
import {useDispatch} from "react-redux";
import styles from './Login.module.css'

const Login = () => {
    const login = useRef()
    const password = useRef()
    const dispatch = useDispatch()
    const handlerLogin = (e) => {
        e.preventDefault();
        dispatch(logIn({username: login.current.value, password: password.current.value}))
    }
    const handlerSignUp = (e) => {
        e.preventDefault();
        try {
            if (!login.current.value || !password.current.value) {
                alert('Поля не должны быть пустыми!!!')
            } else {
                dispatch(signUp({username: login.current.value, password: password.current.value}))
            }
        } catch (e) {
            throw new Error(e)
        }

    }
    return (
        <>
            <div className={`${styles.auth_form}`}>
                <input ref={login} className={`${styles.input}`} placeholder="Login" type="text">

                </input>
                <input ref={password} className={`${styles.input}`} placeholder="Password" type="password">

                </input>
                <div className={`${styles.buttons}`}>
                    <div className={`${styles.login_btn}`} onClick={handlerLogin}>LOGIN</div>
                    <div className={`${styles.pass_btn}`} onClick={handlerSignUp}>SIGN UP</div>
                </div>
            </div>
        </>
    );
};

export default Login;