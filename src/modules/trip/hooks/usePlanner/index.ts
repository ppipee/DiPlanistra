import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

export default function usePlanner() {
	return usePlannerStore((store) => store.planner)
}
