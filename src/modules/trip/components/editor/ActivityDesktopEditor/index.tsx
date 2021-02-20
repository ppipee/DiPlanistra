import loadable from 'core/loadable'

const ActivityDesktopEditor = loadable(
	() => import(/* webpackChunkName: 'trips.components.activity-desktop-editor' */ './component'),
)

export default ActivityDesktopEditor
