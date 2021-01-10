import React from 'react'

import NearByPosition from 'modules/place/components/NearByPosition'
import useNearbyPlace from 'modules/place/hooks/useNearbyPlace'
import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

const NearbyPlace = () => {
	const { nearbyPlace, isLoading, getNearbyPlace } = useNearbyPlace()
	const place = usePlaceStore((store) => store.place)

	return (
		<NearByPosition
			nearbyPlace={nearbyPlace}
			nearby={place.displayName}
			loading={isLoading}
			getPlaces={getNearbyPlace}
		/>
	)
}

export default NearbyPlace
