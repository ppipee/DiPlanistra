import { createContext } from 'react'

import { CalendarCellDate } from '../components/CalendarCell'
import { CalenderDateProps, CalendarDisplayStateProps, CalendarDisplayRange } from '../types'

export interface CalendarContextType {
	date: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	displayState: CalendarDisplayStateProps
	setDisplayState: (state: CalendarDisplayStateProps) => void
	dateHover?: Date
	setDateHover: (date?: Date) => void
	isDateSelectable: (date: CalendarCellDate) => boolean
	dateRangeShown?: CalendarDisplayRange
}

const CalendarContext = createContext<CalendarContextType | null>(null)

export default CalendarContext
