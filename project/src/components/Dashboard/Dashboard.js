import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../action/authAction";
import CrudBlock from "../CrudBlock/CrudBlock";
import {logout} from '../../redux/reducer'
import styles from './Dashboard.module.css'

const Dashboard = ({setUsersListVisible, setTokenVisible, tokenVisible, usersListVisible}) => {
    const token = useSelector(store => store.token)
    const dispatch = useDispatch()
    const tokenWindowHandler = (e) => {
        e.preventDefault()
        setTokenVisible(prev => !prev)

    }
    const logoutHandler = (e) => {
        e.preventDefault()
        setUsersListVisible(usersListVisible = false)
        setTokenVisible(tokenVisible = false)
        dispatch(logout(null))
    }
    const getListsUsersHandler = (e) => {
        e.preventDefault()
        setUsersListVisible(prev => !prev)
        dispatch(getUsers((token)))
    }
    return (
        <>
            <div className={`${styles.dashboard}`}>
                DASHBOARD
                <div className={`${styles.logout}`} onClick={logoutHandler}>LOGOUT</div>
                {token[1] === "admin" ?
                    <div className={`${styles.get_users_btn}`} onClick={getListsUsersHandler}>GET LIST USERS (IT ACCESS
                        ONLY FOR ADMIN)</div> : null}
                <div className={`${styles.block_crud}`}>
                    <div className={`${styles.block_title}`}>CRUD
                        <div className={`${styles.token_vindow_btn}`} onClick={tokenWindowHandler}>Показать текущий
                            токен</div>
                    </div>
                    <CrudBlock/>
                </div>

            </div>
        </>
    );
};

export default Dashboard;