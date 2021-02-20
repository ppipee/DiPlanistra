import React, { useMemo } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import CoverBackground from 'common/components/CoverBackground'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import useCountDown from 'common/hooks/useCountDown'
import { DAY } from 'common/locale'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { PlannerPreview } from 'modules/trip/types/planner'
import displayTimeLeft from 'modules/trip/utils/displayTimeLeft'

import { LOCALE_STARTING_TRIP } from './locale'
import { CoverContainer } from './styled'

const MAX_LENGTH = 2

type Props = {
	trip: PlannerPreview
}

const CountDownCover = ({ trip }: Props) => {
	const { name, startDate } = trip

	const I18n = useI18n()
	const { isDesktop } = useResponsive()
	const timeLeft = useCountDown(startDate)

	const { secs, minutes, hours, days } = displayTimeLeft(timeLeft)

	const displayText = useMemo(() => {
		const daysText = days !== 0 ? I18n.t(DAY, { day: days }) : ''
		const hoursText = String(hours).padStart(MAX_LENGTH, '0')
		const minutesText = String(minutes).padStart(MAX_LENGTH, '0')
		const secondsText = String(secs).padStart(MAX_LENGTH, '0')

		return filterArrayExistingValue([daysText, [hoursText, minutesText, secondsText].join(':')]).join(' ')
	}, [secs, minutes, hours, days])

	const shouldShowCountDown =
		[days, minutes, secs, hours].every((value) => value >= 0) &&
		![days, minutes, secs, hours].every((value) => value <= 0)

	return (
		<CoverBackground $shadow>
			<CoverContainer>
				{shouldShowCountDown && (
					<Gap $type="vertical" $alignCenter $justifyCenter $size={spaces(16)} $responsive>
						<Text color={white} size={isDesktop ? fontSizes(24) : fontSizes(20)}>
							{I18n.t(LOCALE_STARTING_TRIP, { name })}
						</Text>
						<Text color={white} size={isDesktop ? fontSizes(64) : fontSizes(48)}>
							{displayText}
						</Text>
					</Gap>
				)}
			</CoverContainer>
		</CoverBackground>
	)
}

export default CountDownCover
