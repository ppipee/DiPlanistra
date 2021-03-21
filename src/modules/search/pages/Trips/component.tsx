import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import { ContainerWrapper, Container } from 'modules/place/pages/PlacesPage/styled'
import DomainSelector from 'modules/search/components/DomainSelector'
import DomainTabsMobile from 'modules/search/components/DomainTabsMobile'
import SearchingText from 'modules/search/components/SearchingText'
import TripSortBy from 'modules/search/components/TripSortBy'
import useSearchError from 'modules/search/hooks/useSearchError'
import SearchTripStoreConfig from 'modules/search/stores/SearchTripStore'
import FavoriteTripStoreConfig from 'modules/trip/stores/FavoriteTripStore'

import TripCardList from './components/TripCardList'

const TripsPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { domain } = useQuery()

	const error = useSearchError()

	if (error) return <ErrorPage errorMessage={error?.message} />

	return (
		<Container>
			<DomainTabsMobile domain={domain}>
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
						<TripCardList />
					</ContainerWrapper>
				</Gap>
			</DomainTabsMobile>
		</Container>
	)
}

export default asRoute(TripsPageComponent, {
	stores: {
		searchTripStore: SearchTripStoreConfig,
		favoriteTripStore: FavoriteTripStoreConfig,
	},
})
