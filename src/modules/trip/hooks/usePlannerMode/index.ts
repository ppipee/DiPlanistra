import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

export default function usePlannerMode() {
	const mode = usePlannerStore((store) => store.mode)

	return mode
}
