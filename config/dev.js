const path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/app',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/app.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		inline: true,
		host: 'localhost',
		compress: true,
		port: 8082,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.ts$/, include: path.resolve(__dirname, '../src'),
				use: 'ts-loader',
			},
			// {
			// 	test: /\.js$/, exclude: /node_modules/, include: path.resolve(__dirname, '../src'),
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['env'],
			// 			plugins: ["transform-decorators-legacy"]
			// 		}
			// 	}
			// },
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 	],
			// 	include: path.resolve(__dirname, '../src')
			// },
			// {
			// 	test: /\.less$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'less-loader'
			// 	],
			// 	include: path.resolve(__dirname, '../src')
			// }
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '*']
	},
}