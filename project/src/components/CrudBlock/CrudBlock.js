import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DeletePostForm from "./DeletePostForm/DeletePostForm";
import EditPostForm from "./EditPostForm/EditPostForm";
import ListPosts from "./ListPosts/ListPosts";
import CreatePostForm from './CreatePostForm/CreatePostForm'
import {getOwnPosts} from '../../action/postsAction'
import styles from './CrudBlock.module.css'

const CrudBlock = () => {
    const token = useSelector(store => store.token)
    const dispatch = useDispatch()
    const [listVisible, setListVisible] = useState(false)
    const [createPostFormVisible, setCreatePostFormVisible] = useState(false)
    const [deleteFormVisible, setDeleteFormVisible] = useState(false)
    const [editFormVisible, setEditFormVisible] = useState(false)
    const getPostsHandler = (e) => {
        e.preventDefault();
        dispatch(getOwnPosts(token))
        setListVisible(prev => setListVisible(!prev))
    }


    return (
        <div className={`${styles.crudblock_container}`}>
            <div className={`${styles.get_posts}`} onClick={getPostsHandler}>
                ПОЛУЧИТЬ ПОСТЫ<br/>
                method: 'GET'
                endpoint: /api/posts/:username
            </div>
            {listVisible ? <ListPosts setListVisible={setListVisible}/> : null}
            <div className={`${styles.create_post}`} onClick={(e) => {
                e.preventDefault();
                setCreatePostFormVisible(prev => !prev)
            }}>
                СОЗДАТЬ ПОСТ<br/>
                method: 'POST' endpoint: /api/posts

            </div>
            {createPostFormVisible ? <CreatePostForm setCreatePostFormVisible={setCreatePostFormVisible}/> : null}
            <div className={`${styles.delete_post}`} onClick={(e) => {
                e.preventDefault();
                setDeleteFormVisible(prev => !prev)
            }}>
                УДАЛИТЬ ПОСТ<br/>
                method: 'DELETE' endpoint: /api/posts/:id
            </div>
            {deleteFormVisible ? <DeletePostForm setDeleteFormVisible={setDeleteFormVisible}/> : null}
            <div className={`${styles.edit_post}`} onClick={(e) => {
                e.preventDefault();
                setEditFormVisible(prev => !prev)
            }}>
                ПРАВИТЬ ПОСТ<br/>
                method: "PUT"
                endpoint: /api/posts/:id
            </div>
            {editFormVisible ? <EditPostForm setEditFormVisible={setEditFormVisible}/> : null}

        </div>
    );
};

export default CrudBlock;