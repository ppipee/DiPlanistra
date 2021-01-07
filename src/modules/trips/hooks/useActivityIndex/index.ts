import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'

export default function useActivityIndex(placeId: string) {
	const { planner, plannerDay } = usePlannerStore((store) => ({ planner: store.planner, plannerDay: store.plannerDay }))

	const activityIndex = planner.planners[plannerDay - 1].activities.findIndex(
		(activity) => activity.place.publicId === placeId,
	)

	return activityIndex
}
