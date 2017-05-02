
import React, {Component} from 'react'
import {render} from 'react-dom'
import configureStore from './store'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'

import App from '../app/app'

const store = configureStore()
const history = createHistory()


render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
)
