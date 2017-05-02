import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from '..//business/reducer'
// import rootEpic from '../epics/epics'
// const epicMiddleware = createEpicMiddleware(rootEpic)

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'


// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory)

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(middleware)
)

export default configureStore
