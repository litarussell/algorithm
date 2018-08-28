const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/app',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: 'awesome-typescript-loader'
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, '../src'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ["transform-decorators-legacy"]
					}
				}
			},
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '*']
	},
}