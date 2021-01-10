import loadable from 'core/loadable'

const NearbyMe = loadable(() => import(/* webpackChunkName: 'home.components.nearby-me' */ './components'))

export default NearbyMe
