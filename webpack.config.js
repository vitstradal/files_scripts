const webpackConfigOld = require('@nextcloud/webpack-vue-config')

module.exports = {
	...webpackConfigOld,
	entry: {
		main: "./src/main.ts",
		workflow: "./src/workflow.ts"
	},
	devtool: "source-map",
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".vue"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
			{ test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{
				test: /\.s?[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
}
