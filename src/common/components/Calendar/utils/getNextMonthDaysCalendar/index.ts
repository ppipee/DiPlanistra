import range from 'lodash/range'

import { CalendarDisplayStateProps } from 'common/components/Calendar/types'
import { NUMBER_OF_DAY_IN_WEEK } from 'common/utils/datetime/constants'

export default function getNextMonthDaysCalendar({ year, month }: CalendarDisplayStateProps) {
	const currentMonthEndDate = new Date(year, month + 1, 0)
	const endWeekDate = new Date(year, month + 1, NUMBER_OF_DAY_IN_WEEK - currentMonthEndDate.getDay())
	return range(1, endWeekDate.getDate())
}
