import React, { ReactNode, useCallback } from 'react'

import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'
import { CalendarDisplayRange, CalenderDateProps } from 'common/components/Calendar/types'
import DateRangeProvider from 'common/components/DateRangePicker/components/DateRangeProvider'

import RangePickerPanel from './components/RangePickerPanel'

type Props = {
	date: CalenderDateProps
	setDate: (date: CalenderDateProps) => void
	dateRangeShown?: CalendarDisplayRange
	children?: ReactNode
	isDateSelectable?: (date: CalendarCellDate) => boolean
	showHeader?: boolean
}

const DateRangePicker = ({ date, setDate, isDateSelectable, dateRangeShown, children, showHeader }: Props) => {
	const onSetDate = useCallback(({ endDate, startDate }: CalenderDateProps = {}) => {
		setDate({ endDate, startDate })
	}, [])

	return (
		<DateRangeProvider
			isDateSelectable={isDateSelectable}
			date={date}
			setDate={onSetDate}
			dateRangeShown={dateRangeShown}
		>
			<RangePickerPanel showHeader={showHeader}>{children}</RangePickerPanel>
		</DateRangeProvider>
	)
}

export default DateRangePicker
