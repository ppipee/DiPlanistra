import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { usePlannerApiStore } from 'modules/trips/stores/PlannerApiStore/context'

export default function useDeleteActivity() {
	const deleteActivity = useActivityStore((store) => store.deleteActivity)
	const isLoading = usePlannerApiStore((store) => store.isActionLoading['deleteActivity'])

	return { deleteActivity, isLoading }
}
