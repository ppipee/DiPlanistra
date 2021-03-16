import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import FavoriteEventStoreConfig from 'modules/event/stores/FavoriteEventStore'
import { ContainerWrapper, Container } from 'modules/place/pages/PlacesPage/styled'
import DomainSelector from 'modules/search/components/DomainSelector'
import SearchEventStoreConfig from 'modules/search/stores/SearchEventStore'

import EventCardList from './components/EventCardList'
import SearchEventText from './components/SearchEventText'

const EventsPageComponent = () => {
	const { isDesktop } = useResponsive()

	return (
		<Container>
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
		</Container>
	)
}

export default asRoute(EventsPageComponent, {
	stores: {
		searchEventStore: SearchEventStoreConfig,
		favoriteEventStore: FavoriteEventStoreConfig,
	},
})
