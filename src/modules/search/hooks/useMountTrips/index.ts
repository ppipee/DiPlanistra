import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import useQuery from 'core/router/hooks/useQuery'

import { useSearchTripStore } from 'modules/search/stores/SearchTripStore/context'
import { SearchTripsQueries } from 'modules/search/types'

export default function useMountTrips() {
	const location = useLocation()
	const { regions, search }: SearchTripsQueries = useQuery()
	const { isLoading, getTrips, trips } = useSearchTripStore((store) => ({
		isLoading: store.isFresh || store.isLoading,
		getTrips: store.getTrips,
		trips: store.trips,
	}))

	useEffect(() => {
		getTrips({
			regions,
			search,
		})
	}, [location])

	return { trips, isLoading }
}
