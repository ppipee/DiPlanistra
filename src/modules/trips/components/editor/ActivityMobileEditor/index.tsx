import loadable from 'core/loadable'

const ActivityMobileEditor = loadable(
	() => import(/* webpackChunkName: 'trips.components.activity-mobile-editor' */ './component'),
)

export default ActivityMobileEditor
