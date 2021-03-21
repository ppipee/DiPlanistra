import { useEffect } from 'react'

import usePassQuery from 'common/hooks/usePassQuery'

import { TripCategory } from 'modules/trip/constants'
import { useFavoriteTripStore } from 'modules/trip/stores/FavoriteTripStore/context'
import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

import useTrips from '../useTrips'

export default function useFetchTrip(trip: TripCategory) {
	const passQuery = usePassQuery()

	const { getTrips, isMyTripsLoading } = usePlannersStore((store) => ({
		getTrips: store.getTrips,
		isMyTripsLoading: store.isLoading || store.isFresh,
	}))
	const trips = useTrips()

	const { getBookmarkTrips, isFavoriteTripsLoading, favoriteTrips } = useFavoriteTripStore((store) => ({
		getBookmarkTrips: store.getBookmarkTrips,
		favoriteTrips: store.favoriteTrips,
		isFavoriteTripsLoading: store.isLoading || store.isFresh,
	}))

	useEffect(() => {
		if (trip === TripCategory.SocialTrip) {
			getBookmarkTrips()
		} else {
			getTrips()
		}

		passQuery({ params: { trip } })
	}, [trip, passQuery])

	if (trip === TripCategory.SocialTrip) {
		return {
			trips: favoriteTrips,
			isLoading: isFavoriteTripsLoading,
		}
	}

	return {
		trips: trips,
		isLoading: isMyTripsLoading,
	}
}
