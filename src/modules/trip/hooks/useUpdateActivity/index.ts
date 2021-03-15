import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'

export default function useUpdateActivity() {
	const saveActivity = useActivityStore((store) => store.saveActivity)
	const isLoading = usePlannerApiStore(
		(store) => store.isActionLoading['updateActivity'] || store.isActionLoading['createActivity'],
	)

	return { saveActivity, isLoading }
}
