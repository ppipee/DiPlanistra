import React, { memo } from 'react'

import CalendarCell, { CalendarCellDate } from 'common/components/Calendar/components/CalendarCell'

import { RowContainer } from './styled'

type Props = {
	row: CalendarCellDate[]
}

const CalendarRow = ({ row }: Props) => {
	return (
		<RowContainer>
			{row.map((date, index) => (
				<CalendarCell key={`calendar-cell-${date}-${index}`} date={date} index={index} />
			))}
		</RowContainer>
	)
}

export default memo(CalendarRow)
