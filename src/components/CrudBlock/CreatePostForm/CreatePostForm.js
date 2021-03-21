import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../../action/postsAction";
import styles from './CreatePostForm.module.css'
const CreatePostForm = ({setCreatePostFormVisible}) => {
    const title = useRef()
    const content = useRef()
    const dispatch = useDispatch()
    const token = useSelector(store => store.token)

const createPostHandler = (e) => {
        e.preventDefault()
    if(!title.current.value || !content.current.value){alert('Поля не должны быть пустыми')}
    const payload = {author: token[1], title: title.current.value, content: content.current.value}
    dispatch(createPost(payload, token))
}

    return (

        <div className={`${styles.create_post_form}`}>

            {/*CREATE POST*/}

            <input ref={title} className={`${styles.input_title}`} placeholder="Title post" type="text">

            </input>
            <textarea ref={content} className={`${styles.input_content}`} placeholder="Content post" type="text">

            </textarea>
            <div className={`${styles.submit_btn}`} onClick={createPostHandler}>СОЗДАТЬ</div>
        </div>

    );
};

export default CreatePostForm;