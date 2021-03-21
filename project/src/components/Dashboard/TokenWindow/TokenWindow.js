import React from 'react';
import {useSelector} from "react-redux";
import styles from './TokenWindow.module.css'
const TokenWindow = () => {
    const token = useSelector(store => store.token)
    return (
        <>
        <div className={`${styles.token_window}`}>
           <div className={`${styles.token_text}`}> {token[0]}</div>
        </div>
        </>
    );
};

export default TokenWindow;