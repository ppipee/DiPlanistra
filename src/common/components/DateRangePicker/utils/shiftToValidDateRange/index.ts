import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import { CalenderDateProps } from 'common/components/Calendar/types'

export type ShiftToValidDateProps = {
	type: 'date' | 'month'
	startDate: Date
	endDate: Date
}

export default function shiftToValidDateRange(
	{ type, startDate, endDate }: ShiftToValidDateProps,
	isDateSelectable: (date: CalendarCellDate) => boolean,
	shiftingBound: number = 42,
): CalenderDateProps {
	if (shiftingBound === 0 || Number(startDate) > Number(endDate)) {
		return {}
	}

	if (isDateSelectable(startDate) && isDateSelectable(endDate)) {
		return { startDate, endDate }
	}

	if (type === 'date') {
		startDate.setDate(startDate.getDate() - 1)
	}
	endDate.setDate(endDate.getDate() - 1)
	return shiftToValidDateRange({ type, startDate, endDate }, isDateSelectable, shiftingBound - 1)
}
