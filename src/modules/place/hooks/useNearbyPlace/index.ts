import { useCallback } from 'react'

import { DomainValue } from 'common/constants/business'

import { useNearbyPositionStore } from 'modules/place/stores/NearbyPositionStore/context'
import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

export default function useNearbyPlace() {
	const { lat, lng } = usePlaceStore((store) => store.place)
	const { nearbyPlace, getNearbyPosition, isLoading } = useNearbyPositionStore((store) => ({
		nearbyPlace: store.nearbyPosition,
		getNearbyPosition: store.getNearbyPosition,
		isLoading: store.isLoading,
	}))

	const getNearbyPlace = useCallback(
		(domain: DomainValue) => {
			getNearbyPosition(domain, lat, lng)
		},
		[lat, lng],
	)

	return { isLoading, getNearbyPlace, nearbyPlace }
}
