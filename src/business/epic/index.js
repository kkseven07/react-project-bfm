import { combineEpics } from 'redux-observable'
import {routerActions} from 'react-router-redux'
import {createBook,updatePage,genPages} from './epics/api'
import {input} from './epics/form'


const rootEpic = combineEpics(
  input,
  createBook,
  genPages,
  updatePage
)


export default rootEpic


