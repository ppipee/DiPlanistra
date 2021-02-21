import React from 'react'

import { isEmpty } from 'lodash'

import asRoute from 'core/router/hoc/asRoute'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import FavoriteEventStoreConfig from 'modules/event/stores/FavoriteEventStore'
import { ContainerWrapper, Container } from 'modules/place/pages/PlacesPage/styled'
import DomainSelector from 'modules/search/components/DomainSelector'
import useMountEvents from 'modules/search/hooks/useMountEvents'
import SearchEventStoreConfig from 'modules/search/stores/SearchEventStore'

import EventCard from './components/EventCard'
import SearchEventText from './components/SearchEventText'

const EventsPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { isLoading, events } = useMountEvents()

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
					<Gap $type="vertical" $size={isDesktop ? spaces(12) : spaces(4)}>
						{!isLoading && !isEmpty(events)
							? events.map((event) => <EventCard key={`event-card-${event.eventId}`} event={event} />)
							: null}
					</Gap>
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
