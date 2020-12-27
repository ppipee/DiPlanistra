export interface CalenderDateProps {
	startDate?: Date
	endDate?: Date
}

export interface CalendarDisplayStateProps {
	year: number
	month: number
}

export interface CalendarDisplayRange {
	startRange?: CalendarDisplayStateProps
	endRange?: CalendarDisplayStateProps
}

export interface CalendarCellProps {
	$inBetween?: boolean
	$selected?: boolean
	$variant?: CalendarCellVariant
	$isFirstCell?: boolean
	$isLastCell?: boolean
	$isDateSelectable?: boolean
}

export type CalendarCellVariant = 'currentMonth' | 'otherMonth' | 'currentDate'
