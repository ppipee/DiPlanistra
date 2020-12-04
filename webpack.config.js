const path = require('path')

const LoadablePlugin = require('@loadable/webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')

function generateRequiredPaths(rootPath) {
	const src = path.resolve(rootPath, 'src')
	const build = path.resolve(rootPath, 'build')
	const nodeModules = path.resolve(rootPath, 'node_modules')
	const loadable = path.resolve(build, 'loadable-stats.json')

	return {
		src,
		build,
		nodeModules,
		loadable,
	}
}

const both = (config, { dev }, webpack, pathConfig) => {
	config.resolve.modules = [pathConfig.src, 'node_modules']
	config.plugins.push(new LodashModuleReplacementPlugin({ collections: true, paths: true }))

	config.resolve.extensions = ['.js', '.json', '.jsx', '.ts', '.tsx']

	config.optimization = {
		splitChunks: {
			name: false,
		},
	}

	config.performance = { hints: false }

	config.module.rules[3].options.limit = 1 // Output all images file to url instead of base64 uri

	config.module.rules.push({
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					cacheDirectory: '.babel-cache',
				},
			},
		],
	})

	if (!dev) {
		config.devtool = 'source-map'
	}
}

const client = (config, { target, dev }, webpack, pathConfig) => {
	if (target !== 'web') return

	config.resolve.extensions.push('.client.js')

	const cacheLoader = {
		loader: 'cache-loader',
		options: { cacheIdentifier: `${target} ${dev}` },
	}
	const cssLoader = {
		loader: 'css-loader',
		options: { importLoaders: 2 },
	}

	config.plugins.push(
		new RetryChunkLoadPlugin({
			maxRetries: 5,
		}),
	)

	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	)

	config.plugins.push(
		new LoadablePlugin({
			writeToDisk: true,
		}),
	)

	if (dev) {
		config.plugins.push(new webpack.WatchIgnorePlugin(['./build/public/loadable-stats.json']))

		config.module.rules.push({
			test: /\.css?$/,
			exclude: /node_modules/,
			use: [{ loader: 'style-loader' }, cacheLoader, cssLoader],
		})
	} else {
		config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
		config.plugins.push(new BrotliPlugin({ test: /\.(css|js)$/ }))
		config.profile = true
		config.module.rules.push({
			test: /\.css?$/,
			exclude: /node_modules/,
			use: [MiniCssExtractPlugin.loader, cacheLoader, cssLoader],
		})

		config.output.publicPath = process.env.PUBLIC_PATH || '/'
	}
}

module.exports = (config, env, webpack) => {
	const rootPath = path.resolve(__dirname)
	const pathConfig = generateRequiredPaths(rootPath)

	env.dev = env.dev && process.env.BABEL_ENV !== 'development'

	both(config, env, webpack, pathConfig)
	client(config, env, webpack, pathConfig)

	return config
}
