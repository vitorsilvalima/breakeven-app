import { AppRegistry } from 'react-native';
import React, { Component } from 'react'
import App from './App';
import { addNavigationHelpers } from 'react-navigation';
import  { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { store } from './redux/store'


class Root extends Component {
    render() {
        return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
}


AppRegistry.registerComponent('rnTmdbApp', () => Root);
