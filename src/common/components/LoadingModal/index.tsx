import loadable from 'core/loadable'

const LoadingModal = loadable(() => import(/* webpackChunkName: 'common.components.loading-modal' */ './component'))

export default LoadingModal
