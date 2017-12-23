import { combineReducers } from 'redux'
import auth from './auth'
import students from './students'
import tutors from './tutors'

export default combineReducers({
	auth,
	students,
	tutors
})