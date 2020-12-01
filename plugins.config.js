const { loadableTransformer } = require('loadable-ts-transformer')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = () => [
	{
		name: 'typescript',
		options: {
			useBabel: true,
			tsLoader: {
				getCustomTransformers: () => ({
					before: [styledComponentsTransformer, loadableTransformer],
				}),
			},
			forkTsChecker: {
				tslint: false,
			},
		},
	},
	{
		name: 'bundle-analyzer',
		options: {
			concatenateModules: false,
			analyzerMode: 'static',
			openAnalyzer: false,
			generateStatsFile: true,
		},
	},
]
