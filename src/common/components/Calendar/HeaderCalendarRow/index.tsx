import React, { memo } from 'react'

import { Cell, CellWrapper } from '../components/CalendarCell/styled'
import { RowContainer } from '../components/CalendarRow/styled'
import { DAYS } from '../constants'

const HeaderCalendarRow = () => {
	return (
		<RowContainer>
			{DAYS.map((day) => (
				<CellWrapper key={`header-${day}`}>
					<Cell className="heading4">{day}</Cell>
				</CellWrapper>
			))}
		</RowContainer>
	)
}

export default memo(HeaderCalendarRow)
