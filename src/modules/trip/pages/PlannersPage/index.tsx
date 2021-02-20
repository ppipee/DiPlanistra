import loadable from 'core/loadable'

const PlannersPage = loadable(() => import(/* webpackChunkName: 'trips.pages.planners' */ './component'))

export default PlannersPage
