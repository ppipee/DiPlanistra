import { useMemo } from 'react'

import { HOUR_MS } from 'common/utils/datetime/constants'

import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

export default function useTrips() {
	const planners = usePlannersStore((store) => store.trips)

	const trips = useMemo(
		() => planners?.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()),
		[planners],
	)

	if (!trips || trips.length <= 0) return []

	let lastTripExpireIndex = -1

	for (const trip of trips) {
		lastTripExpireIndex = lastTripExpireIndex + 1

		if (new Date(trip.endDate).getTime() < new Date().getTime() + HOUR_MS * 7) {
			continue
		}

		break
	}

	const sortedTrips = [...trips]
	const expiredTrips = sortedTrips.splice(0, lastTripExpireIndex)

	return [...sortedTrips, ...expiredTrips]
}
