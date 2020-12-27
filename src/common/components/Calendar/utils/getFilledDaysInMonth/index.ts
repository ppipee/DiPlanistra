import { CalendarDisplayStateProps } from 'common/components/Calendar/types'

import getDaysInMonth from '../getDaysInMonth'
import getLastMonthDaysCalendar from '../getLastMonthDaysCalendar'
import getNextMonthDaysCalendar from '../getNextMonthDaysCalendar'

export default function getFilledDaysInMonth(displayState: CalendarDisplayStateProps) {
	const { year, month } = displayState

	const lastMonthDays = getLastMonthDaysCalendar(displayState).map(
		(dateNumber) => new Date(year, month - 1, dateNumber),
	)

	const daysInMonth = getDaysInMonth(displayState).map((dateNumber) => new Date(year, month, dateNumber))

	const nextMonthDays = getNextMonthDaysCalendar(displayState).map(
		(dateNumber) => new Date(year, month + 1, dateNumber),
	)

	return [...lastMonthDays, ...daysInMonth, ...nextMonthDays]
}
