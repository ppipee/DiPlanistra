import React, { useState, ReactNode, useEffect } from 'react'

import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import { CalendarDisplayRange, CalenderDateProps } from 'common/components/Calendar/types'
import { PICKER_CUSTOM_INDEX } from 'common/components/DateRangePicker/constants'
import DateRangeContext from 'common/components/DateRangePicker/context'

type Props = {
	children: ReactNode
	date: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	isDateSelectable?: (date: CalendarCellDate) => boolean
	dateRangeShown?: CalendarDisplayRange
}

export interface PickerControlProps {
	type: 'date' | 'month'
	startRange?: number
	endRange?: number
}

const DateRangeProvider = ({ children, date, setDate, dateRangeShown, isDateSelectable = () => true }: Props) => {
	const [controllerIndex, selectController] = useState<number | null>(null)

	useEffect(() => {
		if (date.startDate && !date.endDate) {
			selectController(PICKER_CUSTOM_INDEX)
		}
	}, [date])

	return (
		<DateRangeContext.Provider
			value={{
				date,
				setDate,
				controllerIndex,
				selectController,
				isDateSelectable,
				dateRangeShown,
			}}
		>
			{children}
		</DateRangeContext.Provider>
	)
}

export default DateRangeProvider
