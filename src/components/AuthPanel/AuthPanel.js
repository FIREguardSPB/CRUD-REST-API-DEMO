import React from 'react';
import Login from "./Login/Login";
import styles from './AuthPanel.module.css'

const AuthPanel = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <div>
                    WELCOME TO CRUD REST API DEMO APP<br/>

                </div>
                <div className={`${styles.auth_panel}`}>AUTH PANEL</div>

                <div className="info">
                    Создайте нового пользователя или зайдите под существующим. Данные для входа с правами
                    администратора: Login - "admin" Password - "12345"
                </div>
                <div className={`${styles.auth__block}`}>
                    <Login className="login"/>
                </div>
            </div>
        </>
    );
};

export default AuthPanel;