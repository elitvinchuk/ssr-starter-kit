export const FETCH_STUDENTS = 'fetch_students'

export const fetchStudents = () => async (dispatch, getState, api) => {
	const response = await api.get('/users')

	dispatch({
		type: FETCH_STUDENTS,
		payload: response
	})
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const response = await api.get('/current_user')

	dispatch({
		type: FETCH_CURRENT_USER,
		payload: response
	})
}

export const FETCH_TUTORS = 'fetch_tutors'
export const fetchTutors = () => async (dispatch, getState, api) => {
	const response = await api.get('/admins')

	dispatch({
		type: FETCH_TUTORS,
		payload: response
	})
}
