import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import loading from './reducers/loading'
import form from './reducers/form'
import book from './reducers/book'
const reducer = combineReducers({
  routing,
  loading,
  form,
  book,
})

export default reducer
