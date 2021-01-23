import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { black, gray, green, red } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { CLOSED_STATUS, OPENED_STATUS } from 'modules/place/locale'
import { ActivityPlan } from 'modules/trips/types/planner'

type Props = {
	activityPlan: ActivityPlan
}

const ActivityHeader = ({ activityPlan }: Props) => {
	const I18n = useI18n()

	const { place, hour } = activityPlan
	const shopStatus = place?.workingHoursStatus && I18n.t(place.workingHoursStatus.open ? OPENED_STATUS : CLOSED_STATUS)

	return (
		<Gap $size={spaces(8)} $responsive $wrap="wrap">
			<Text color={gray[700]} whiteSpace="nowrap" size={fontSizes(18)}>{`${hour.from} - ${hour.to}`}</Text>
			<Text weight="bold">
				<Text color={black} size={fontSizes(18)}>
					{place.name}
				</Text>
				{shopStatus && (
					<Text margin={`0 0 0 ${spaces(8)}`} color={place.workingHoursStatus.open ? green[500] : red[500]}>
						{shopStatus}
					</Text>
				)}
			</Text>
		</Gap>
	)
}

export default ActivityHeader
