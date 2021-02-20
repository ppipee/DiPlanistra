import loadable from 'core/loadable'

const PlannerPage = loadable(() => import(/* webpackChunkName: 'trips.pages.planner' */ './component'))

export default PlannerPage
