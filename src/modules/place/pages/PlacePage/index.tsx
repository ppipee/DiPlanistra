import loadable from 'core/loadable'

const PlacePage = loadable(() => import(/* webpackChunkName: 'place.pages.place' */ './component'))

export default PlacePage
