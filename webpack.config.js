const nodeExternals = require("webpack-node-externals");
const path = require("path");
const React = require("react");

module.exports = {
	//target: "node",
	//externals: [nodeExternals()],
	entry: {
		app: "./src/index.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: ['react-hot-loader/webpack', 'babel-loader'],
			},
		],
	},
	devServer : {
		inline: true,
		contentBase: "./dist",
		port: 8100,
		historyApiFallback: true
	}
};
