import React from 'react'

import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { DomainValue } from 'common/constants/business'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { EVENT_PATH } from 'modules/event/routes/path'
import { EventPreview } from 'modules/event/types'
import PlaceCard from 'modules/place/components/PlaceCard'
import useMountFavorite from 'modules/place/hooks/useMountFavorite'
import { FAVORITE_EVENT_EMPTY, FAVORITE_PLACE_EMPTY } from 'modules/place/locale'
import { PLACE_PATH } from 'modules/place/routes/paths'
import EventCard from 'modules/search/pages/Events/components/EventCard'
import { ActivityPlace } from 'modules/trip/types/planner'

import FavoriteCardListLoading from './loading'
import { ListContainer, Container } from './styled'

const FavoriteCardList = () => {
	const I18n = useI18n()
	const { activeTab } = useHorizontalTabContext()
	const domain = activeTab as DomainValue

	const { isFresh, isLoading, favorites } = useMountFavorite(domain)

	if ((isFresh && !favorites) || isLoading) return <FavoriteCardListLoading />

	if (isEmpty(favorites)) {
		return (
			<Container>
				<ResponsiveBlock $padding={spaces(64)}>
					<Flex $alignItems="center" $direction="column" $responsive>
						<Text as="div" margin="auto" color={gray[500]} textAlign="center" size={fontSizes(24)}>
							{I18n.t(domain === DomainValue.EVENT ? FAVORITE_EVENT_EMPTY : FAVORITE_PLACE_EMPTY)}
						</Text>
					</Flex>
				</ResponsiveBlock>
			</Container>
		)
	}

	return (
		<Container>
			<ResponsiveBlock $padding={spaces(24)} $paddingMobile="0">
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
