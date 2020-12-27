import loadable from 'core/loadable'

const TripsPage = loadable(() => import(/* webpackChunkName: 'trips.pages.trips' */ './component'))

export default TripsPage
