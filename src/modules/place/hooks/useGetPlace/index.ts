import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Params } from 'core/router/types'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

export default function useGetPlace() {
	const { placeId } = useParams<Params>()

	const { getPlaceReviews, getPlace, place } = usePlaceStore((store) => ({
		getPlaceReviews: store.getPlaceReviews,
		getPlace: store.getPlace,
		place: store.place,
	}))

	useEffect(() => {
		getPlace(placeId)
		getPlaceReviews(placeId)
	}, [placeId])

	return { place }
}
