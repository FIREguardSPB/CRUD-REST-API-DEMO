import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editPost} from '../../../action/postsAction'
import styles from './EditPostForm.module.css'

const EditPostForm = ({setEditFormVisible}) => {
    const dispatch = useDispatch()
    const id = useRef()
    const content = useRef()
    const title = useRef()
    const token = useSelector(store => store.token)
    const editPostHandler = (e) => {
        e.preventDefault()
        if (!id.current.value || !title.current.value || !content.current.value) {
            alert("Все поля должны быть заполнены")
        }
        const payload = {
            _id: id.current.value,
            author: token[1],
            title: title.current.value,
            content: content.current.value
        }
        dispatch(editPost(id.current.value, token, payload))
    }

    return (
        <>
            <div className={`${styles.edit_form}`}>
                <input ref={id} className={`${styles.id_input}`} placeholder="Paste posts ID" type="text">
                </input>

                <input ref={title} className={`${styles.title_input}`} placeholder="Title post">

            </input>
                <textarea ref={content} className={`${styles.content_input}`} placeholder="Content post">

            </textarea>
                <div className={`${styles.submit_btn}`} onClick={editPostHandler}>ДОБАВИТЬ ИЗМЕНЕНИЯ</div>
            </div>

        </>
    )
};

export default EditPostForm;