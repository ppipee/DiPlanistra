import React from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import useMountEvents from 'modules/search/hooks/useMountEvents'
import { EVENT_EMPTY } from 'modules/search/pages/Events/locale'

import EventCard from '../EventCard'

import EventCardListLoading from './loading'

const EventCardList = () => {
	const { isDesktop } = useResponsive()
	const { isLoading, events } = useMountEvents()
	const I18n = useI18n()

	if (isLoading) return <EventCardListLoading />

	if (isEmpty(events)) {
		return (
			<Text as="div" color={gray[500]} textAlign="center">
				{I18n.t(EVENT_EMPTY)}
			</Text>
		)
	}

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(12) : spaces(4)}>
			{events.map((event) => (
				<EventCard key={`event-card-${event.eventId}`} event={event} />
			))}
		</Gap>
	)
}

export default EventCardList
