import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { usePlannerApiStore } from 'modules/trips/stores/PlannerApiStore/context'

export default function useUpdateActivity() {
	const saveActivity = useActivityStore((store) => store.saveActivity)
	const isLoading = usePlannerApiStore((store) => store.isActionLoading['updateActivity'])

	return { saveActivity, isLoading }
}
