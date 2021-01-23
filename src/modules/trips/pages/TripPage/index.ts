import loadable from 'core/loadable'

const TripPage = loadable(() => import(/* webpackChunkName: 'trips.pages.trip' */ './component'))

export default TripPage
