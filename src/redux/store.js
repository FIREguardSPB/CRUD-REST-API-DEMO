import {createStore, applyMiddleware} from 'redux'
import authReducer from '../redux/reducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)))