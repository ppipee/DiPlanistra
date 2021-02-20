import loadable from 'core/loadable'

const CreatePlannerModal = loadable(
	() => import(/* webpackChunkName: 'trips.components.create-planner-modal' */ './component'),
)

export default CreatePlannerModal
