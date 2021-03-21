import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from '../../../action/postsAction'
import styles from './DeletePostForm.module.css'
const DeletePostForm = ({setDeleteFormVisible}) => {
    const dispatch = useDispatch()
    const id = useRef()
    const token = useSelector(store => store.token)
    const deleteHandler = (e) =>{
        e.preventDefault();
        if(!id.current.value){alert("Поле не должно быть пустым")}
        const idPayload = id.current.value
        dispatch(deletePost(idPayload, token))
    }

    return (
        <div className={`${styles.delete_post_form}`}>
            <input ref={id} className={`${styles.id_input}`} placeholder="Paste posts ID" type="text">
            </input>
            <div className={`${styles.submit_btn}`} onClick={deleteHandler}>Удалить</div>
        </div>
    );
};

export default DeletePostForm;