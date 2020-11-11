const pluginsConfig = require('./plugins.config')
const webpackConfig = require('./webpack.config')

module.exports = {
	plugins: pluginsConfig(),
	modify: webpackConfig,
}
