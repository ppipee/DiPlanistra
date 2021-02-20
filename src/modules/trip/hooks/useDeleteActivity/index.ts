import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'

export default function useDeleteActivity() {
	const deleteActivity = useActivityStore((store) => store.deleteActivity)
	const isLoading = usePlannerApiStore((store) => store.isActionLoading['deleteActivity'])

	return { deleteActivity, isLoading }
}
