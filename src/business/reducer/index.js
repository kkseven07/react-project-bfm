import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import loading from './loading'
import form from './form'

const reducer = combineReducers({
  routing,
  loading,
  form

})

export default reducer
