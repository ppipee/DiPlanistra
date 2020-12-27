import { useCallback } from 'react'

import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'

import useCalendarContext from '../useCalendarContext'

export default function useSelectDate() {
	const { setDate, date } = useCalendarContext()

	const selectDate = useCallback(
		(cellDate: CalendarCellDate) => {
			if (cellDate) {
				!date.startDate || date.endDate || Number(cellDate) < Number(date.startDate)
					? setDate({
							startDate: cellDate,
					  })
					: setDate({
							...date,
							endDate: cellDate,
					  })
			}
		},
		[date],
	)

	return selectDate
}
