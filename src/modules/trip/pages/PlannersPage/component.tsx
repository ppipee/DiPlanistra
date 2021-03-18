import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import StickyContainer from 'common/components/StickyContainer'
import spaces from 'common/styles/mixins/spaces'

import CountDownCover from 'modules/trip/components/CountDownCover'
import CreatePlanner from 'modules/trip/components/CreatePlanner'
import TripTabs from 'modules/trip/components/TripTabs'
import TripTicketList from 'modules/trip/components/TripTicketList'
import { TripCategory } from 'modules/trip/constants'
import FavoriteTripStoreConfig from 'modules/trip/stores/FavoriteTripStore'
import PlannerStoreConfig from 'modules/trip/stores/PlannersStore'
import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

import { MainContainer, Container } from './styled'

const PlannersComponent = () => {
	const { trips } = usePlannersStore((store) => ({
		trips: store.trips,
	}))
	const { trip = TripCategory.MyTrip } = useQuery()

	const isModalLoading = usePlannersStore((store) => store.isActionLoading['createPlanner'])

	return (
		<>
			<div>
				{trips && trips[0] && <CountDownCover trip={trips[0]} />}
				<TripTabs>
					<Container>
						<MainContainer>
							<Gap $type="vertical" $size={spaces(48)}>
								<TripTicketList />
								{trip === TripCategory.MyTrip && (
									<StickyContainer>
										<CreatePlanner />
									</StickyContainer>
								)}
							</Gap>
						</MainContainer>
					</Container>
				</TripTabs>
			</div>
			{isModalLoading && <LoadingModal />}
		</>
	)
}

export default withAuth(
	asRoute(PlannersComponent, {
		stores: {
			plannersStore: PlannerStoreConfig,
			favoriteTripStore: FavoriteTripStoreConfig,
		},
	}),
)
