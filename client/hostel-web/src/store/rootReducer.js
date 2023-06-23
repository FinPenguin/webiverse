import { combineReducers } from 'redux'

import common from './common/reducer'
import student from './student/reducer'

const rootReducer = combineReducers({
  common,
  student
})

export default rootReducer