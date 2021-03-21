import React from 'react';
import {useSelector} from "react-redux";
import styles from '../ListPosts/ListPosts.module.css'
import List from "./List/List";

const ListPosts = () => {
    const posts = useSelector(store => store.posts)
    return (
        <>
            <div className={`${styles.list}`}>
                {!posts ? "ПОСТОВ НЕТ" : <List/>}
            </div>
        </>
    );
};

export default ListPosts;