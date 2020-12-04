import React, { useCallback, useState } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ClockIcon from 'common/components/icons/ClockIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { black, gray, green, main } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import { Hour } from 'common/types/wongnai/business'

import { DAYS } from 'modules/place/constants'
import { CLOSED_DAY } from 'modules/place/locale'
import mappingWorkingHours from 'modules/place/utils/mappingWorkingHours'

const ICON_SIZE = 64

type Props = {
	hours: Hour[]
}

const PlaceWorkingHour = ({ hours }: Props) => {
	const today = new Date().getDay()
	const [selectedDay, setDay] = useState(today)
	const I18n = useI18n()

	const workingHours = mappingWorkingHours(hours)
	const openingHour = workingHours[selectedDay]
		? `${workingHours[selectedDay].from} - ${workingHours[selectedDay].to}`
		: I18n.t(CLOSED_DAY)

	const getStatusColor = useCallback(
		(workingHour: null | Hour) => {
			if (workingHour === null) {
				return gray[200]
			}
			if (workingHour.day - 1 === today) {
				return green[700]
			}

			return black
		},
		[today],
	)

	return (
		<ResponsiveBlock $padding={spaces(16)}>
			<Flex $justifyContent="center" $alignItems="center">
				<Gap $size={spaces(24)} $alignCenter>
					<ClockIcon size={ICON_SIZE} color={main[500]} secondColor={main[300]} />
					<Gap $type="vertical" $size={spaces(8)} $alignCenter>
						<Text size={fontSizes(16)}>{openingHour}</Text>
						<Text size={fontSizes(12)}>
							<Gap $size={spaces(8)}>
								{workingHours.map((workingHour, day) => (
									<Text
										key={`place-working-hour-${day}`}
										color={getStatusColor(workingHour)}
										onClick={() => setDay(day)}
										weight={day === selectedDay ? 'bold' : 'normal'}
									>
										{DAYS[day]}
									</Text>
								))}
							</Gap>
						</Text>
					</Gap>
				</Gap>
			</Flex>
		</ResponsiveBlock>
	)
}

export default PlaceWorkingHour
