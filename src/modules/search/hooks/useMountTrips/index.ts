import { useEffect } from 'react'

import useQuery from 'core/router/hooks/useQuery'

import { useSearchTripStore } from 'modules/search/stores/SearchTripStore/context'
import { SearchTripsQueries } from 'modules/search/types'

export default function useMountTrips() {
	const { regions, search, sortby }: SearchTripsQueries = useQuery()
	const { isLoading, getTrips, trips } = useSearchTripStore((store) => ({
		isLoading: store.isFresh || store.isLoading,
		getTrips: store.getTrips,
		trips: store.trips,
	}))

	useEffect(() => {
		getTrips({
			regions,
			search,
			sortby,
		})
	}, [regions, search, sortby])

	return { trips, isLoading }
}
