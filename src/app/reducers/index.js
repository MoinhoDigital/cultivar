import { combineReducers } from 'redux'
import plants from './plants'
import visibilityFilter from './visibilityFilter'

const plantApp = combineReducers({
  plants,
  visibilityFilter 
})

export default plantApp