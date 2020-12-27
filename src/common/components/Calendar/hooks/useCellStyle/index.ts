import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import useCalendarContext from 'common/components/Calendar/hooks/useCalendarContext'
import { CalendarCellVariant, CalendarDisplayStateProps } from 'common/components/Calendar/types'
import { NUMBER_OF_DAY_IN_WEEK } from 'common/utils/datetime/constants'

function getVariantStyle(cellDate: Date, { month: displayingMonth }: CalendarDisplayStateProps): CalendarCellVariant {
	let currentDate = new Date()
	currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())

	if (Number(currentDate) === Number(cellDate)) {
		return 'currentDate'
	}
	if (displayingMonth !== cellDate.getMonth()) {
		return 'otherMonth'
	}

	return 'currentMonth'
}

export function getInBetweenStyle(cellDate: Date, startDate?: Date, endDate?: Date, dateHover?: Date) {
	if (!endDate && startDate && dateHover) {
		return Number(startDate) <= Number(cellDate) && Number(cellDate) <= Number(dateHover)
	}

	return Number(cellDate) >= Number(startDate) && Number(cellDate) <= Number(endDate)
}

export function getSelectedCellStyle(cellDate: Date, startDate?: Date, endDate?: Date) {
	return Number(cellDate) === Number(startDate) || Number(cellDate) === Number(endDate)
}

export function isFirstCell(rowIndex: number, cellDate: Date, startDate?: Date) {
	return rowIndex === 0 || Number(startDate) === Number(cellDate)
}

export function isLastCell(rowIndex: number, cellDate: Date, endDate?: Date, dateHover?: Date) {
	return (
		rowIndex === NUMBER_OF_DAY_IN_WEEK - 1 ||
		Number(endDate) === Number(cellDate) ||
		(Number(dateHover) === Number(endDate) && Number(cellDate) === Number(endDate)) ||
		(Number(cellDate) === Number(dateHover) && !endDate)
	)
}

export default function useCellStyle(cellDate: CalendarCellDate, rowIndex: number) {
	const {
		date: { startDate, endDate },
		dateHover,
		displayState,
	} = useCalendarContext()
	const styles = {
		$inBetween: false,
		$selected: false,
		$variant: 'currentMonth' as CalendarCellVariant,
		$isFirstCell: false,
		$isLastCell: false,
	}

	if (!cellDate) return styles

	styles.$selected = getSelectedCellStyle(cellDate, startDate, endDate)
	styles.$inBetween = getInBetweenStyle(cellDate, startDate, endDate, dateHover)
	styles.$variant = getVariantStyle(cellDate, displayState)
	styles.$isFirstCell = isFirstCell(rowIndex, cellDate, startDate)
	styles.$isLastCell = isLastCell(rowIndex, cellDate, endDate, dateHover)

	return styles
}
