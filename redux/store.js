import  { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { movies } from './movies'
import { cart } from './cart'

export const store = createStore(
    combineReducers({
        movies,
        cart
    }), 
    applyMiddleware(thunk)
)
