import React from 'react'

import { isEmpty } from 'lodash'

import asRoute from 'core/router/hoc/asRoute'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import LinkToTrip from 'common/components/url/LinkToTrip'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import { ContainerWrapper, Container } from 'modules/place/pages/PlacesPage/styled'
import DomainSelector from 'modules/search/components/DomainSelector'
import SearchingText from 'modules/search/components/SearchingText'
import TripSortBy from 'modules/search/components/TripSortBy'
import useMountTrips from 'modules/search/hooks/useMountTrips/index'
import SearchTripStoreConfig from 'modules/search/stores/SearchTripStore'
import FavoriteTripStoreConfig from 'modules/trip/stores/FavoriteTripStore'

import TripCard from './components/TripCard'

const TripsPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { isLoading, trips } = useMountTrips()

	return (
		<Container>
			<SearchingText />
			<Gap $size={spaces(16)}>
				{isDesktop && (
					<ContainerWrapper type="filter">
						<StickyContainer>
							<Gap $type="vertical" $size={spaces(12)}>
								<ResponsiveBlock $padding={spaces(12)}>
									<DomainSelector />
								</ResponsiveBlock>
								<ResponsiveBlock $padding={spaces(12)}>
									<TripSortBy />
								</ResponsiveBlock>
							</Gap>
						</StickyContainer>
					</ContainerWrapper>
				)}
				<ContainerWrapper type="main">
					<Gap $type="vertical" $size={spaces(12)}>
						{!isLoading && !isEmpty(trips)
							? trips.map((trip) => (
									<LinkToTrip key={`trip-card-${trip.id}`} tripId={trip.id}>
										<TripCard trip={trip} />
									</LinkToTrip>
							  ))
							: null}
					</Gap>
				</ContainerWrapper>
			</Gap>
		</Container>
	)
}

export default asRoute(TripsPageComponent, {
	stores: {
		searchTripStore: SearchTripStoreConfig,
		favoriteTripStore: FavoriteTripStoreConfig,
	},
})
