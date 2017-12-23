import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTutors } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

@connect(
	({tutors}) => ({tutors}),
	{fetchTutors}
)
@requireAuth
class TutorsList extends React.Component {
	static propTypes = {
		fetchTutors: PropTypes.func,
		tutors: PropTypes.array
	}

	componentDidMount () {
		this.props.fetchTutors()
	}

	renderTutors = () => this.props.tutors
		.map(tutor => <li key={tutor.id}>{tutor.name}</li>)

	render () {
		return (
			<>
			<h3>Protected list of tutors</h3>
			<ul>{this.renderTutors()}</ul>
			</>
		)
	}
}

export default {
	component: TutorsList,
	loadData: ({dispatch}) => dispatch(fetchTutors())
}
