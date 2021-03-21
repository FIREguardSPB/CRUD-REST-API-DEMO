const USERS_LIST  = "USERS_LIST"
const ADD_TOKEN = "ADD_TOKEN"
const GET_POSTS = "GET_POSTS"
const LOGOUT = "LOGOUT"


const defaultState = {
    usersList: null,
    token: null,
    posts: null

}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case USERS_LIST:
            return {
                ...state, usersList: action.payload
            }
        case ADD_TOKEN:
            return {
            ...state, token: action.payload
        }
        case GET_POSTS:
            return {
                ...state, posts: action.payload
            }
        case LOGOUT:
            return {
                ...state, token: action.payload, posts: action.payload, usersList: action.payload
            }
        default:
            return state
    }
}

export const addToken = tok => ({type: ADD_TOKEN, payload: tok})
export const getPost = posts => ({type: GET_POSTS, payload: posts})
export const logout = (reset) => ({type: LOGOUT, payload: reset})
export const listUsers = users => ({type: USERS_LIST, payload: users})