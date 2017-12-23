module.exports = {
	devtool: 'cheap-module-eval-source-map', // todo: fix for ssr

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-stage-0',
							'@babel/preset-react',
							['@babel/preset-env', {
								targets: {
									browsers: ['last 2 versions']
								}
							}]
						]
					}
				}
			}
		]
	},

	resolve: {
		modules: [
			'app/',
			'node_modules/'
		]
	}
}