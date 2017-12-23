import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default (ChildComponent) => {
	const AuthComponent = (props) => props.auth === false
		? <Redirect to='/' />
		: <ChildComponent {...props} />

	return connect(({auth}) => ({auth}))(AuthComponent)
}