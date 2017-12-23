import React from 'react'
import App from './App'
import HomePage from './views/Home'
import StudentsList from './views/StudentsList'
import TutorsList from './views/TutorsList'
import NotFound from './views/NotFound'

export default [{
	...App,
	routes: [{
		...HomePage,
		path: '/',
		exact: true
	}, {
		...StudentsList,
		path: '/students'
	}, {
		...TutorsList,
		path: '/tutors'
	},
		NotFound
	]
}]
