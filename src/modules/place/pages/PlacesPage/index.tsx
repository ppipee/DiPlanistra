import loadable from 'core/loadable'

const PlacesPage = loadable(() => import(/* webpackChunkName: 'place.pages.places' */ './component'))

export default PlacesPage
