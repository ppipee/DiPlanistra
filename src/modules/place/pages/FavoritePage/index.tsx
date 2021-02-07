import loadable from 'core/loadable'

const FavoritePlacesPage = loadable(() => import(/* webpackChunkName: 'place.pages.favorite-places' */ './component'))

export default FavoritePlacesPage
