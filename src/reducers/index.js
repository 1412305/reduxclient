import { combineReducers } from 'redux'
import transactions from './transactions'
import visibilityFilter from './visibilityFilter'
import session from './session'

const blockChain = combineReducers({
  transactions,
  visibilityFilter,
  session
})

export default blockChain