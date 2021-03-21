import {addToken, listUsers} from "../redux/reducer.js"
//авторизация
export const logIn = (payload) => (dispatch) => {
    try {
        fetch('/login', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(token => token[0].length < 50 ? alert(token) : dispatch(addToken(token)))
    } catch (err) {
        alert(err)
    }
}

//получить всех юзеров (только для админов)
export const getUsers = (token) => (dispatch) => {

    fetch('/users', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token[0],
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(res => dispatch(listUsers(res)))
    // .then(result => console.log(result))

}

export const signUp = (payload) => (dispatch) => {
    try {
        fetch('/registration', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(token => token[0].length < 50 ? alert(token) : dispatch(addToken(token)))
    } catch (err) {
        alert(err)
    }
}
