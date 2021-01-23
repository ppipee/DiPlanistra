import loadable from 'core/loadable'

const SharingModal = loadable(() => import(/* webpackChunkName: 'trips.components.sharing-modal' */ './component'))

export default SharingModal
