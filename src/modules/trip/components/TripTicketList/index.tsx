import React from 'react'

import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import TripTicket from 'modules/trip/components/TripTicket'
import { TRIP_PATH } from 'modules/trip/routes/paths'
import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

import TripTicketListLoading from './loading'

const TripTicketList = () => {
	const { isDesktop } = useResponsive()

	const { trips, isLoading, isFresh } = usePlannersStore((store) => ({
		trips: store.trips,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	if (isFresh || isLoading) {
		return <TripTicketListLoading />
	}

	if (isEmpty(trips)) return null

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(16) : spaces(12)} $alignItems="center">
			{trips.map((trip) => (
				<Link to={`${TRIP_PATH}/${trip.id}`} key={trip.id}>
					<TripTicket trip={trip} />
				</Link>
			))}
		</Gap>
	)
}

export default TripTicketList
