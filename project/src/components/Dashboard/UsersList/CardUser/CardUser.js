import React from 'react';
import styles from './CardUser.module.css'
const CardUser = ({user}) => {
    return (
        <div className={styles.user_card}>
<div className={styles.row_card}>Имя пользователя: {user.username}</div>
            <div className={styles.row_card}>ID пользователя: {user._id}</div>
            <div className={styles.row_card}>Роль: {user.roles}</div>
        </div>
    );
};

export default CardUser;