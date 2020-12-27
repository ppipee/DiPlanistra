import { createContext, useContext } from 'react'

import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import { CalendarDisplayRange, CalenderDateProps } from 'common/components/Calendar/types'

export interface DateRangeContextType {
	date: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	controllerIndex: number | null
	selectController: (state: number | null) => void
	isDateSelectable: (date: CalendarCellDate) => boolean
	dateRangeShown?: CalendarDisplayRange
}

const DateRangeContext = createContext<DateRangeContextType | null>(null)

export const useDateRangeContext = () => useContext(DateRangeContext)!

export default DateRangeContext
