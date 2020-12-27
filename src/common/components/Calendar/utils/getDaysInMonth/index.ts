import dayjs from 'dayjs'
import range from 'lodash/range'

import { CalendarDisplayStateProps } from 'common/components/Calendar/types'

export default function getDaysInMonth(displayState: CalendarDisplayStateProps) {
	const { year, month } = displayState
	const endDate = dayjs(`${year}-${month + 1}-01`).daysInMonth()

	return range(1, endDate + 1)
}
