import React from 'react';
import {useSelector} from "react-redux";
import CardUser from "./CardUser/CardUser";
import styles from './UsersList.module.css'
const UsersList = () => {
    const users = useSelector(store => store.usersList)
    return (

        <div className={`${styles.users_list}`}>
            LIST USERS INFO
            {users && users.map((user) => <CardUser key={user._id} user={user}/>)}
        </div>
    );
};

export default UsersList;