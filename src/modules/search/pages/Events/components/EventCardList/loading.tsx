import React from 'react'

import { range } from 'lodash'

import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import EventCardLoading from '../EventCard/loading'

const EventCardListLoading = () => {
	const { isDesktop } = useResponsive()

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(12) : spaces(4)}>
			{range(6).map((i) => (
				<EventCardLoading key={`event-card-${i}`} />
			))}
		</Gap>
	)
}

export default EventCardListLoading
