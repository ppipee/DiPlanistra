import loadable from 'core/loadable'

const MobilePlannerSetting = loadable(
	() => import(/* webpackChunkName: 'trips.components.mobile-planner-setting' */ './component'),
)

export default MobilePlannerSetting
