import {getPost} from "../redux/reducer";


export const getPosts = (token) => (dispatch) => {

    fetch('/api/posts', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token[0],
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(posts => dispatch(getPost(posts)))

}
//create post
export const createPost = (payload, token) => (dispatch) => {
    try {

        fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: new Headers({
                'Authorization': 'Bearer ' + token[0],
                'Content-Type': 'application/json'
            })
        })

            .then(res => res.json())
            .then(dispatch(getOwnPosts(token)))
        // .then(res => console.log(res))
        // .then(token => token.length<50 ? alert(token) : dispatch(addToken(token)))
    } catch (err) {
        alert(err)
    }
}

//delete post by id
export const deletePost = (id, token) => (dispatch) => {
    fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: '',
        headers: new Headers({
            'Authorization': 'Bearer ' + token[0],
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(dispatch(getOwnPosts(token)))
    // .then(posts => dispatch(getPost(posts)))

}
//edit post by id

export const editPost = (id, token, payload) => (dispatch) => {
    console.log(id)
    console.log(payload)
    fetch(`/api/posts/`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: new Headers({
            'Authorization': 'Bearer ' + token[0],
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(dispatch(getOwnPosts(token)))
}
export const getOwnPosts = (token) => (dispatch) => {

    fetch(`/api/posts/user/${token[1]}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token[0],
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(posts => dispatch(getPost(posts)))

}