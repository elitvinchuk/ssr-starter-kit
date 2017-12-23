import React from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ staticContext = {} }) => {
	staticContext.notFound = true

	return <h1>Route not found</h1>
}

NotFound.propTypes = {}

export default {
	component: NotFound
}
