import { useCallback } from 'react'

import { DomainValue } from 'common/constants/business'
import usePassQuery from 'common/hooks/usePassQuery'

import { EVENTS_ROUTE } from 'modules/event/routes/path'
import { PLACES_ROUTE } from 'modules/place/routes/paths'
import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

export default function useDomain() {
	const passQuery = usePassQuery()

	const passDomain = useCallback(
		(domainValue: string | number) => {
			let targetUrl = PLACES_ROUTE

			if (domainValue === DomainValue.TRIP) {
				targetUrl = TRIPS_ROUTE
			} else if (domainValue === DomainValue.EVENT) {
				targetUrl = EVENTS_ROUTE
			}

			passQuery({ params: { domain: domainValue }, targetUrl, without: ['categories', 'rating', 'distance', 'sortby'] })
		},
		[passQuery],
	)

	return passDomain
}
