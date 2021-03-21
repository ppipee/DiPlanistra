import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'
import { useSearchEventStore } from 'modules/search/stores/SearchEventStore/context'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'
import { useSearchTripStore } from 'modules/search/stores/SearchTripStore/context'

export default function useSearchError() {
	const searchTripError = useSearchTripStore((store) => store?.error)
	const searchEventError = useSearchEventStore((store) => store?.error)
	const searchPlaceError = useSearchPlaceStore((store) => store?.error)
	const favoritePlaceError = useFavoritePlaceStore((store) => store.error)

	return searchPlaceError || favoritePlaceError || searchTripError || searchEventError
}
