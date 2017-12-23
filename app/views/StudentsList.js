import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchStudents } from 'actions/index'

@connect(
	({students}) => ({students}),
	{fetchStudents}
)
class StudentsList extends React.Component {
	static propTypes = {
		students: PropTypes.array,
		fetchStudents: PropTypes.func
	}

	static defaultProps = {
		students: []
	}
	renderStudents = () =>
		this.props.students.map(student =>
			<li key={student.id}>
				{student.name}
			</li>
		)

	componentDidMount () {
		this.props.fetchStudents()
	}

	render () {
		return (
			<div>
				List of students:
				<ul>{this.renderStudents()}</ul>
			</div>
		)
	}
}

export default {
	component: StudentsList,
	loadData: store => store.dispatch(fetchStudents())
}
