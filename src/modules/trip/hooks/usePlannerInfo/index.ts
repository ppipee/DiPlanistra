import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

export default function usePlannerList() {
	const planners = usePlannerStore((store) => store.planner?.planners || [])

	return planners.sort((a, b) => a.day - b.day)
}
