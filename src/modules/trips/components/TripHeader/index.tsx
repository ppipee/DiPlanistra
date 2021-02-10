import React from 'react'

import useLocale from 'core/locale/hooks/useLocale'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'

import EditTripButton from '../setting/EditTripButton'
import PrivacyButton from '../setting/PrivacyButton'
import SharingButton from '../setting/SharingButton'

import { ControllerContainer } from './styled'

const DATE_FORMAT = 'D MMM YYYY'

const TripHeader = () => {
	const locale = useLocale()

	const planner = usePlannerStore((store) => store.planner)
	const { largeSize, titleSize } = useFontSizeResponsive()

	const startDate = getDateTimeFormat(planner.startDate, locale, DATE_FORMAT)
	const endDate = getDateTimeFormat(planner.endDate, locale, DATE_FORMAT)

	const displayDateRange = `${startDate} - ${endDate}`

	return (
		<Gap $type="vertical" $size={spaces(48)} $alignItems="stretch">
			<ControllerContainer $justifyContent="space-between">
				{planner.isOwner ? <PrivacyButton /> : <span />}
				<Gap $size={spaces(4)}>
					<EditTripButton />
					<SharingButton />
				</Gap>
			</ControllerContainer>
			<Gap $type="vertical" $size={spaces(4)}>
				<Text color={white} size={largeSize}>
					{planner.name}
				</Text>
				<Text color={white} size={titleSize}>
					{displayDateRange}
				</Text>
			</Gap>
		</Gap>
	)
}

export default TripHeader
