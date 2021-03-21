import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import FavoriteEventStoreConfig from 'modules/event/stores/FavoriteEventStore'
import ErrorPage from 'modules/notFound/pages/ErrorPage'
import { ContainerWrapper, Container } from 'modules/place/pages/PlacesPage/styled'
import DomainSelector from 'modules/search/components/DomainSelector'
import DomainTabsMobile from 'modules/search/components/DomainTabsMobile'
import useSearchError from 'modules/search/hooks/useSearchError/index'
import SearchEventStoreConfig from 'modules/search/stores/SearchEventStore'

import EventCardList from './components/EventCardList'
import SearchEventText from './components/SearchEventText'

const EventsPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { domain } = useQuery()

	const error = useSearchError()

	if (error) return <ErrorPage errorMessage={error?.message} />

	return (
		<Container>
			<DomainTabsMobile domain={domain}>
				<SearchEventText />
				<Gap $size={spaces(16)}>
					{isDesktop && (
						<ContainerWrapper type="filter">
							<StickyContainer>
								<Gap $type="vertical" $size={spaces(12)}>
									<ResponsiveBlock $padding={spaces(12)}>
										<DomainSelector />
									</ResponsiveBlock>
								</Gap>
							</StickyContainer>
						</ContainerWrapper>
					)}
					<ContainerWrapper type="main">
						<EventCardList />
					</ContainerWrapper>
				</Gap>
			</DomainTabsMobile>
		</Container>
	)
}

export default asRoute(EventsPageComponent, {
	stores: {
		searchEventStore: SearchEventStoreConfig,
		favoriteEventStore: FavoriteEventStoreConfig,
	},
})
