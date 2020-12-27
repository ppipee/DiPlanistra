import React, { useState, ReactNode } from 'react'

import CalendarContext from 'common/components/Calendar/context'
import { CalendarDisplayRange, CalendarDisplayStateProps, CalenderDateProps } from 'common/components/Calendar/types'

import { CalendarCellDate } from '../CalendarCell'

type Props = {
	children: ReactNode
	defaultDate?: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	isDateSelectable?: (date: CalendarCellDate) => boolean
	dateRangeShown?: CalendarDisplayRange
}

const CalendarProvider = ({
	children,
	defaultDate = {},
	setDate,
	dateRangeShown,
	isDateSelectable = () => true,
}: Props) => {
	const targetDate = defaultDate.endDate || defaultDate.startDate || new Date()

	const [displayState, setDisplayState] = useState<CalendarDisplayStateProps>({
		year: targetDate.getFullYear(),
		month: targetDate.getMonth(),
	})

	const [dateHover, setDateHover] = useState<Date | undefined>()

	return (
		<CalendarContext.Provider
			value={{
				date: defaultDate,
				setDate,
				displayState,
				setDisplayState,
				dateHover,
				setDateHover,
				isDateSelectable,
				dateRangeShown,
			}}
		>
			{children}
		</CalendarContext.Provider>
	)
}

export default CalendarProvider
