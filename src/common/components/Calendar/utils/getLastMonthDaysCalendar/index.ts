import range from 'lodash/range'

import { CalendarDisplayStateProps } from 'common/components/Calendar/types'

export default function getLastMonthDaysCalendar({ year, month }: CalendarDisplayStateProps) {
	const lastMonthEndDate = new Date(year, month, 0)
	const startWeekDate = new Date(year, month, -lastMonthEndDate.getDay())
	const weekWithLastMonthEndDate = range(startWeekDate.getDate(), lastMonthEndDate.getDate() + 1)
	if (weekWithLastMonthEndDate.length < 7) {
		return weekWithLastMonthEndDate
	}
	return []
}
