import { useFavoriteStore } from 'modules/place/stores/FavoriteStore/context'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'

export default function useErrorPlannerPage() {
	const errorPlannerApi = usePlannerApiStore((store) => store.error)
	const errorFavorite = useFavoriteStore((store) => store.error)

	return errorPlannerApi || errorFavorite
}
