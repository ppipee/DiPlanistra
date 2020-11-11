const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default
const styledComponentsTransformer = createStyledComponentsTransformer()
const { loadableTransformer } = require('loadable-ts-transformer')

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
