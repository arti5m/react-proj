import { combineReducers } from 'redux'
import items from './items/itemReducer'

const rootReducer = combineReducers({
  items
})

export default rootReducer
