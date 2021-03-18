import React from 'react'

import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import TripTicket from 'modules/trip/components/TripTicket'
import { TripCategory } from 'modules/trip/constants'
import useFetchTrip from 'modules/trip/hooks/useFetchTrip'
import { MY_TRIP_EMPTY, SOCIAL_TRIP_EMPTY } from 'modules/trip/locale'
import { TRIP_PATH } from 'modules/trip/routes/paths'

import TripTicketListLoading from './loading'

const TripTicketList = () => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()

	const { activeTab: trip } = useHorizontalTabContext()
	const { trips, isLoading } = useFetchTrip(trip as TripCategory)

	if (isLoading) {
		return <TripTicketListLoading />
	}

	if (isEmpty(trips)) {
		return (
			<Text as="div" className="margin-top-48" color={gray[500]} textAlign="center" size={fontSizes(24)}>
				{I18n.t(trip === TripCategory.SocialTrip ? SOCIAL_TRIP_EMPTY : MY_TRIP_EMPTY)}
			</Text>
		)
	}

	return (
		<Gap $type="vertical" $size={isDesktop ? spaces(16) : spaces(12)} $alignItems="center">
			{trips.map((trip) => (
				<Link to={`${TRIP_PATH}/${trip.id}`} key={trip.id}>
					<TripTicket trip={trip} />
				</Link>
			))}
		</Gap>
	)
}

export default TripTicketList
