import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import CountDownCover from 'modules/trips/components/CountDownCover'
import CreatePlanner from 'modules/trips/components/CreatePlanner'
import TripTicket from 'modules/trips/components/TripTicket'
import PlannerStoreConfig from 'modules/trips/stores/PlannerStore'
import TripStoreConfig from 'modules/trips/stores/TripStore'
import { useTripStore } from 'modules/trips/stores/TripStore/context'

import { MainContainer, TabContainer, Container } from './styled'

const TripsPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { trips, isLoading, isFresh } = useTripStore((store) => ({
		trips: store.trips,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	if (isFresh || isLoading) return null

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
			<CountDownCover trip={trips[0]} />
			<Container>
				<Gap $type={isDesktop ? 'horizontal' : 'vertical'} $size={spaces(24)} $responsive>
					<TabContainer>tabs</TabContainer>
					<MainContainer>
						<Gap $type="vertical" $size={spaces(32)}>
							<Gap $type="vertical" $size={isDesktop ? spaces(16) : spaces(12)}>
								{trips.map((trip) => (
									<TripTicket key={trip.id} trip={trip} />
								))}
							</Gap>
							<CreatePlanner />
						</Gap>
					</MainContainer>
				</Gap>
			</Container>
		</Gap>
	)
}

export default asRoute(TripsPageComponent, {
	stores: {
		tripStore: TripStoreConfig,
		plannerStore: PlannerStoreConfig,
	},
})
