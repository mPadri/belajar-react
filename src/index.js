import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {transactionReducer} from './reducers/TransactionReducers'

if (localStorage.getItem('transaction') === null) {
    localStorage.setItem('transaction', JSON.stringify([]))
}

let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transaction'))
}

let store = createStore(transactionReducer,initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
