import { useEffect } from 'react'

import useQuery from 'core/router/hooks/useQuery'

import { useSearchEventStore } from 'modules/search/stores/SearchEventStore/context'
import { SearchEventQueries } from 'modules/search/types'

export default function useMountEvents() {
	const { regions, latitude, longitude }: SearchEventQueries = useQuery()
	const { isLoading, getEvents, events } = useSearchEventStore((store) => ({
		isLoading: store.isFresh || store.isLoading,
		getEvents: store.getEvents,
		events: store.events,
	}))

	useEffect(() => {
		if (Number(regions) || (Number(latitude) && Number(longitude))) {
			getEvents({
				regions,
				latitude,
				longitude,
			})
		}
	}, [regions, latitude, longitude])

	return { events, isLoading }
}
