const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: path.join(__dirname, './build'),
		publicPath: '/',
	    filename: 'bundle.[name].[hash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
	    rules: [
	      	{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        loader: 'babel-loader',
		        query: {
		          presets: ['react', 'env', 'stage-1']
		        }
	       	},
	       	{
		      	test: /\.js$/,
		      	exclude: /node_modules/,
		      	use: ['babel-loader', 'eslint-loader']
		    },
		    {
		        test: /\.css$/,
		        use: ['style-loader', 'css-loader']
		    },
		    {
		       	test: /\.less$/,
			    use: [{
			        loader: 'style-loader'
			      }, {
			        loader: 'css-loader', options: {
			          	sourceMap: true
			        }
			      }, {
			        loader: 'less-loader', options: {
			          	sourceMap: true
			        }
			    }]
		    },
		    {
			  test: /\.(jpg|png)$/,
			  use: {
			    loader: "file-loader",
			    options: {
			      name: "[path][name].[hash].[ext]",
			    },
			  },
			},
	    ]
	 },
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
};