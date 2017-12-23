const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')

module.exports = {
	...baseConfig,

	target: 'node',

	entry: './server/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [webpackNodeExternals()]
}