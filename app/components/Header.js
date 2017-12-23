import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({auth}) =>
	<nav>
		<div className='nav-wrapper'>
			<Link to='/' className='brand-logo'>React SSR</Link>
			<ul className='right'>
				<li><Link to='/students'>Students</Link></li>
				<li><Link to='/tutors'>Tutors</Link></li>
				<li>{auth
					? <a href='/api/logout'>Logout</a>
					: <a href='/api/auth/google'>Login</a>
				}</li>
			</ul>
		</div>
	</nav>

Header.propTypes = {
	auth: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	])
}

export default connect(({auth}) => ({
	auth
}))(Header)
