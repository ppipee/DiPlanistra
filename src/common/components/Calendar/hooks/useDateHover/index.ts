import { useCallback } from 'react'

import { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'

import useCalendarContext from '../useCalendarContext'

export default function useDateHover() {
	const { setDateHover } = useCalendarContext()

	const mouseEnter = useCallback(
		(cellDate: CalendarCellDate) => {
			if (cellDate) {
				setDateHover(cellDate)
			}
		},
		[setDateHover],
	)

	const mouseLeave = useCallback(() => {
		setDateHover()
	}, [])

	return { mouseEnter, mouseLeave }
}
