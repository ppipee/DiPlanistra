import loadable from 'core/loadable'

const DesktopPlannerSetting = loadable(
	() => import(/* webpackChunkName: 'trips.components.desktop-planner-setting' */ './component'),
)

export default DesktopPlannerSetting
