import loadable from 'core/loadable'

const TripsPage = loadable(() => import(/* webpackChunkName: 'search.page.trips' */ './component'))

export default TripsPage
