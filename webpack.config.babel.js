import {join} from 'path'

const include = join(__dirname, './');

export default {
	entry: './index.js',
	output: {
		path: join(__dirname, 'dist/umd'),
		libraryTarget: 'umd',
		library: 'combijson',
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', include}
		]
	}
}
