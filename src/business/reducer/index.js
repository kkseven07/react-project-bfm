import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import loading from './loading'
import form from './form'
import book from './book'
import bookId from './currentBookId'
const reducer = combineReducers({
  routing,
  loading,
  form,
  book,
  bookId
})

export default reducer
