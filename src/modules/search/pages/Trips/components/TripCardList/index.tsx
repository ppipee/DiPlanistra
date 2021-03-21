import React from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import LinkToTrip from 'common/components/url/LinkToTrip'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import useDomainTabMobile from 'modules/search/hooks/useDomainTabMobile/index'
import useMountTrips from 'modules/search/hooks/useMountTrips'
import { EMPTY_TRIP } from 'modules/search/pages/Trips/locale'

import TripCard from '../TripCard'

import TripCardListLoading from './loading'

const TripCardList = () => {
	useDomainTabMobile()

	const { isLoading, trips } = useMountTrips()
	const I18n = useI18n()

	if (isLoading) return <TripCardListLoading />

	if (isEmpty(trips)) {
		return (
			<Text as="div" className="margin-top-48" color={gray[500]} textAlign="center" size={fontSizes(24)}>
				{I18n.t(EMPTY_TRIP)}
			</Text>
		)
	}

	return (
		<Gap $type="vertical" $size={spaces(12)}>
			{trips.map((trip) => (
				<LinkToTrip key={`trip-card-${trip.id}`} tripId={trip.id}>
					<TripCard trip={trip} />
				</LinkToTrip>
			))}
		</Gap>
	)
}

export default TripCardList
