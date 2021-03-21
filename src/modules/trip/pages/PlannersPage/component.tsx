import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import StickyContainer from 'common/components/StickyContainer'
import spaces from 'common/styles/mixins/spaces'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import CountDownCover from 'modules/trip/components/CountDownCover'
import CreatePlanner from 'modules/trip/components/CreatePlanner'
import TripTabs from 'modules/trip/components/TripTabs'
import TripTicketList from 'modules/trip/components/TripTicketList'
import { TripCategory } from 'modules/trip/constants'
import useTrips from 'modules/trip/hooks/useTrips'
import FavoriteTripStoreConfig from 'modules/trip/stores/FavoriteTripStore'
import { useFavoriteTripStore } from 'modules/trip/stores/FavoriteTripStore/context'
import PlannerStoreConfig from 'modules/trip/stores/PlannersStore'
import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

import { MainContainer, Container } from './styled'

const PlannersComponent = () => {
	const errorPlanner = usePlannersStore((store) => store.error)
	const errorFavoriteTrip = useFavoriteTripStore((store) => store.error)
	const trips = useTrips()

	const { trip = TripCategory.MyTrip } = useQuery()

	const isModalLoading = usePlannersStore((store) => store.isActionLoading['createPlanner'])

	if (errorPlanner || errorFavoriteTrip) {
		return <ErrorPage errorMessage={errorPlanner?.message || errorFavoriteTrip?.message} />
	}

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
