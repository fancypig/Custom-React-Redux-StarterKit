import React , { Component } from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers/index'
import App from './containers'
import styles from './style.css'

const store = createStore(allReducers)

render(
    <Provider store={store}>
        <App/>
    </Provider>

    ,document.getElementById("app")
)
