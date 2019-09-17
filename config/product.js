const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/app',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/app.js'
	},
	module: {
		rules: [{
			test: /\.ts$/,
			include: path.resolve(__dirname, '../src'),
			exclude: /node_modules/,
			use: 'ts-loader',
		}]
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '*']
	},
}