import {FETCH_TUTORS} from '../actions'

export default (state =[], action) => {
	switch (action.type) {
		case FETCH_TUTORS:
			return action.payload.data

		default:
			return state
	}
}