import React from 'react'

import { range } from 'lodash'

import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import TripTicketLoading from '../TripTicket/loading'

const TripTicketListLoading = () => {
	const { isDesktop } = useResponsive()

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(16) : spaces(12)} $alignItems="center">
			{range(5).map((i) => (
				<TripTicketLoading key={`trip-ticket-${i}`} />
			))}
		</Gap>
	)
}

export default TripTicketListLoading
