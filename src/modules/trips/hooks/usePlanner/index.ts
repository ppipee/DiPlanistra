import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'

export default function usePlanner() {
	return usePlannerStore((store) => store.planner)
}
