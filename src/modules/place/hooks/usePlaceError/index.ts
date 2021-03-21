import { useNearbyPositionStore } from 'modules/place/stores/NearbyPositionStore/context'
import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

export default function usePlaceError() {
	const placeError = usePlaceStore((store) => store.error)
	const nearbyPlaceError = useNearbyPositionStore((store) => store.error)

	return placeError || nearbyPlaceError
}
