import chunk from 'lodash/chunk'

import { CalendarDisplayStateProps } from 'common/components/Calendar/types'
import { NUMBER_OF_DAY_IN_WEEK } from 'common/utils/datetime/constants'

import getFilledDaysInMonth from '../getFilledDaysInMonth'

export default function generateCalendarTable(displayState: CalendarDisplayStateProps) {
	const days = getFilledDaysInMonth(displayState)

	return chunk(days, NUMBER_OF_DAY_IN_WEEK)
}
