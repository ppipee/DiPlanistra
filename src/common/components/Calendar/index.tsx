import React, { ReactNode } from 'react'

import { CalendarDisplayRange, CalenderDateProps } from 'common/components/Calendar/types'

import { CalendarCellDate } from './components/CalendarCell'
import CalendarHeader from './components/CalendarHeader'
import CalendarProvider from './components/CalendarProvider'
import CalendarTable from './components/CalendarTable'
import { CalendarContainer } from './styled'

export type Props = {
	defaultDate?: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	isDateSelectable?: (date: CalendarCellDate) => boolean
	dateRangeShown?: CalendarDisplayRange
	children?: ReactNode
}

const Calendar = ({ defaultDate, setDate, isDateSelectable, dateRangeShown, children }: Props) => {
	return (
		<CalendarProvider
			isDateSelectable={isDateSelectable}
			defaultDate={defaultDate}
			setDate={setDate}
			dateRangeShown={dateRangeShown}
		>
			<CalendarContainer>
				<CalendarHeader />
				<CalendarTable />
				{children}
			</CalendarContainer>
		</CalendarProvider>
	)
}

export default Calendar
