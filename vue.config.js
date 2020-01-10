var webpack = require('webpack')

module.exports = {
	css: {
		loaderOptions: {
			css: {
				sourceMap: process.env.NODE_ENV !== "production" ? true : false
			}
		}
	},

	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		},
		module: {
			rules: [{
				test: /\.md$/,
				use: [{
					loader: 'html-loader'
				}, {
					loader: 'markdown-loader',
					options: {}
				}]
			}]
		},

		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			}),
/* 			new BundleAnalyzerPlugin({
				analyzerMode: 'server',
				analyzerHost: '127.0.0.1',
				analyzerPort: 8889,
				reportFilename: 'report.html',
				defaultSizes: 'parsed',
				openAnalyzer: true,
				generateStatsFile: false,
				statsFilename: 'stats.json',
				statsOptions: null,
				logLevel: 'info'
			}) */
		]

	}
};
