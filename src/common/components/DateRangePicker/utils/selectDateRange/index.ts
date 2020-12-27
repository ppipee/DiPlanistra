import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import { PickerControlProps } from 'common/components/DateRangePicker/components/DateRangeProvider'
import { navigateDate, navigateMonth } from 'common/utils/datetime/navigateDateTime'

import shiftToValidDateRange from '../shiftToValidDateRange'

export default function selectDateRange(
	{ type, startRange = 0, endRange = 0 }: PickerControlProps,
	isDateSelectable: (date: CalendarCellDate) => boolean,
) {
	let currentDate = new Date()
	currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())

	let startDate: Date | undefined
	let endDate: Date | undefined

	if (type === 'date') {
		startDate = navigateDate(currentDate, startRange)
		endDate = navigateDate(currentDate, endRange)
	}
	if (type === 'month') {
		const defaultStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)

		startDate = navigateMonth(defaultStartDate, startRange)
		endDate = navigateMonth(currentDate, endRange)
	}

	if (startDate && endDate) {
		return shiftToValidDateRange({ type, startDate, endDate }, isDateSelectable)
	}

	return { startDate, endDate }
}
