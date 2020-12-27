import React from 'react'
import { useMemo } from 'react'

import CalendarRow from 'common/components/Calendar/components/CalendarRow'
import HeaderCalendarRow from 'common/components/Calendar/HeaderCalendarRow'
import useCalendarContext from 'common/components/Calendar/hooks/useCalendarContext'
import generateCalendarTable from 'common/components/Calendar/utils/generateCalendarTable'
import Gap from 'common/components/Gap'

const ROW_SPACE = '2px'

const CalendarTable = () => {
	const { displayState } = useCalendarContext()
	const table = useMemo(() => generateCalendarTable(displayState), [displayState])

	return (
		<Gap $type="vertical" $size={ROW_SPACE}>
			<HeaderCalendarRow />
			{table.map((row, index) => (
				<CalendarRow key={`calendar-row-${index}`} row={row} />
			))}
		</Gap>
	)
}

export default CalendarTable
