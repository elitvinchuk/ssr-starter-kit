const path = require('path')
const baseConfig = require('./webpack.base')

module.exports = {
	...baseConfig,

	entry: './app',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
}
