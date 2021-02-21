import React from 'react'

import { Link } from 'react-router-dom'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'

import Gap from 'common/components/Gap'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import CountDownCover from 'modules/trip/components/CountDownCover'
import CreatePlanner from 'modules/trip/components/CreatePlanner'
import TripTicket from 'modules/trip/components/TripTicket'
import { TRIP_PATH } from 'modules/trip/routes/paths'
import PlannerStoreConfig from 'modules/trip/stores/PlannersStore'
import { usePlannersStoreStore } from 'modules/trip/stores/PlannersStore/context'

import { MainContainer, TabContainer, Container } from './styled'

const PlannersComponent = () => {
	const { isDesktop } = useResponsive()
	const { trips, isLoading, isFresh } = usePlannersStoreStore((store) => ({
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
									<Link to={`${TRIP_PATH}/${trip.id}`} key={trip.id}>
										<TripTicket trip={trip} />
									</Link>
								))}
							</Gap>
							<StickyContainer>
								<CreatePlanner />
							</StickyContainer>
						</Gap>
					</MainContainer>
				</Gap>
			</Container>
		</Gap>
	)
}

export default withAuth(
	asRoute(PlannersComponent, {
		stores: {
			plannersStore: PlannerStoreConfig,
		},
	}),
)