import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Text from 'common/components/Text'
import { black, green, red } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { CLOSED_STATUS, OPENED_STATUS } from 'modules/place/locale'
import { ActivityPlace } from 'modules/trip/types/planner'

type Props = {
	place: ActivityPlace
}

const ActivityTitle = ({ place }: Props) => {
	const I18n = useI18n()
	const shopStatus = place?.workingHoursStatus && I18n.t(place.workingHoursStatus.open ? OPENED_STATUS : CLOSED_STATUS)

	return (
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
	)
}

export default ActivityTitle
