import { useCallback, useMemo } from 'react'

import useCalendarContext from 'common/components/Calendar/hooks/useCalendarContext'
import getMonthCounts from 'common/utils/datetime/getMonthCounts'
import { navigateMonth } from 'common/utils/datetime/navigateDateTime'

export default function useNavigate() {
	const { displayState, setDisplayState, dateRangeShown } = useCalendarContext()

	const isNextMonthAvailable = useMemo(() => {
		if (dateRangeShown?.endRange) {
			return getMonthCounts(displayState) < getMonthCounts(dateRangeShown.endRange)
		}
		return true
	}, [displayState, dateRangeShown?.endRange])

	const isPrevMonthAvailable = useMemo(() => {
		if (dateRangeShown?.startRange) {
			return getMonthCounts(displayState) > getMonthCounts(dateRangeShown.startRange)
		}
		return true
	}, [displayState, dateRangeShown?.startRange])

	const setNextMonth = useCallback(() => {
		const { year, month } = displayState
		const nextMonthDate = navigateMonth(new Date(year, month, 1), 1)
		const newDisplayState = { year: nextMonthDate.getFullYear(), month: nextMonthDate.getMonth() }

		setDisplayState(newDisplayState)
	}, [displayState])

	const setPrevMonth = useCallback(() => {
		const { year, month } = displayState
		const prevMonthDate = navigateMonth(new Date(year, month, 1), -1)
		const newDisplayState = { year: prevMonthDate.getFullYear(), month: prevMonthDate.getMonth() }

		setDisplayState(newDisplayState)
	}, [displayState])

	return { setNextMonth, setPrevMonth, isNextMonthAvailable, isPrevMonthAvailable }
}
