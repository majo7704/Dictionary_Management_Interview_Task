import { combineReducers } from 'redux'
import dictionaryReducer from './dictionaryReducer'
import colorReducer from './colorReducer'

export default combineReducers({
  dictionary: dictionaryReducer,
  color: colorReducer
})