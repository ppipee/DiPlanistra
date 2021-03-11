import React from 'react'

import { Link } from 'react-router-dom'

import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import { DomainValue } from 'common/constants/business'
import spaces from 'common/styles/mixins/spaces'

import { EVENT_PATH } from 'modules/event/routes/path'
import { EventPreview } from 'modules/event/types'
import PlaceCard from 'modules/place/components/PlaceCard'
import useMountFavorite from 'modules/place/hooks/useMountFavorite'
import { PLACE_PATH } from 'modules/place/routes/paths'
import EventCard from 'modules/search/pages/Events/components/EventCard'
import { ActivityPlace } from 'modules/trip/types/planner'

import { ListContainer, Container } from './styled'

const FavoriteCardList = () => {
	const { activeTab } = useHorizontalTabContext()
	const domain = activeTab as DomainValue

	const { isFresh, isLoading, favorites } = useMountFavorite(domain)

	if ((isFresh && !favorites) || isLoading) return null

	return (
		<Container>
			<ResponsiveBlock $padding={spaces(24)} $paddingMobile={spaces(16)}>
				<ListContainer>
					{domain !== DomainValue.EVENT
						? ((favorites as ActivityPlace[]) || []).map((favoritePlace) => (
								<Link to={`${PLACE_PATH}/${favoritePlace.publicId}`} key={`favorite-place-${favoritePlace.publicId}`}>
									<PlaceCard place={favoritePlace} isHighlight />
								</Link>
						  ))
						: ((favorites as EventPreview[]) || []).map((event) => (
								<Link to={`${EVENT_PATH}/${event.eventId}`} key={`favorite-place-${event.eventId}`}>
									<EventCard event={event} />
								</Link>
						  ))}
				</ListContainer>
			</ResponsiveBlock>
		</Container>
	)
}

export default FavoriteCardList
