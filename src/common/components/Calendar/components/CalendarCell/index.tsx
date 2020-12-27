import React, { useCallback } from 'react'

import useCalendarContext from 'common/components/Calendar/hooks/useCalendarContext'
import useCellStyle from 'common/components/Calendar/hooks/useCellStyle'
import useDateHover from 'common/components/Calendar/hooks/useDateHover'
import useSelectDate from 'common/components/Calendar/hooks/useSelectDate'

import { Cell, CellWrapper } from './styled'

export type CalendarCellDate = Date | null

type Props = {
	date: CalendarCellDate
	index: number
}

const CalendarCell = ({ date, index }: Props) => {
	const selectDate = useSelectDate()
	const { mouseEnter, mouseLeave } = useDateHover()
	const { isDateSelectable } = useCalendarContext()

	const { $isFirstCell, $isLastCell, ...styles } = useCellStyle(date, index)

	const onSelect = useCallback(() => {
		selectDate(date)
	}, [date, selectDate])

	const onHover = useCallback(() => {
		mouseEnter(date)
	}, [date, mouseEnter])

	return (
		<CellWrapper
			$inBetween={styles.$inBetween}
			$isFirstCell={$isFirstCell}
			$isLastCell={$isLastCell}
			$isDateSelectable={!!date && isDateSelectable(date)}
			onMouseEnter={onHover}
			onMouseLeave={mouseLeave}
		>
			<Cell className="heading4" onClick={onSelect} {...styles}>
				{date?.getDate?.()}
			</Cell>
		</CellWrapper>
	)
}

export default CalendarCell
