import  { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { movies } from './movies'

export const store = createStore( movies , applyMiddleware(thunk))
