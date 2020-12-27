import styled, { css } from 'styled-components'

import { CALENDAR_COLOR } from 'common/components/Calendar/constants'
import { CalendarCellProps } from 'common/components/Calendar/types'
import { gray, white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

const CELL_SIZE = '32px'

function applySelectedCell({ $selected = false }: CalendarCellProps) {
	if (!$selected) return null

	return css`
		background-color: ${CALENDAR_COLOR.Active};
	`
}

function applyFontColor({ $variant = 'currentMonth', $selected = false, $inBetween }: CalendarCellProps) {
	let color = gray[500]

	if ($variant === 'currentDate') {
		color = CALENDAR_COLOR.Active
	} else if ($variant === 'otherMonth') {
		color = gray[200]
	}

	if ($inBetween) {
		color = gray[700]
	}

	if ($selected) {
		color = white
	}

	return css`
		color: ${color};
	`
}

function applyBetweenCell({ $isFirstCell = false, $isLastCell = false, $inBetween = false }: CalendarCellProps) {
	if (!$inBetween) return null

	return css`
		&::before {
			content: '';
			width: 100%;
			position: absolute;
			height: inherit;
			background-color: ${CALENDAR_COLOR.Between};

			${$isFirstCell &&
			css`
				border-radius: 4px 0 0 4px;
			`}

			${$isLastCell &&
			css`
				border-radius: 0 4px 4px 0;
				width: calc(100% - 8px);
			`};
		}
	`
}

function applyHoverCell({ $selected }: CalendarCellProps) {
	if ($selected) {
		return css`
			cursor: pointer;
		`
	}

	return css`
		cursor: pointer;
		&:hover {
			background-color: ${CALENDAR_COLOR.Hover};
		}
	`
}

function applyDisableEvents({ $isDateSelectable }: CalendarCellProps) {
	if (!$isDateSelectable) {
		return css`
			> div {
				pointer-events: none;
			}
		`
	}
	return ''
}

export const HeaderCell = styled.div``

export const Cell = styled.div<CalendarCellProps>`
	width: inherit;
	height: inherit;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	position: absolute;
	transition: all 0.1s ease-in;

	${applyHoverCell}
	${applySelectedCell}
	${applyFontColor}
`

export const CellWrapper = styled.div`
	width: ${CELL_SIZE};
	height: ${CELL_SIZE};
	position: relative;
	padding: 0 ${spaces(4)};
	box-sizing: content-box;

	${applyBetweenCell};
	${applyDisableEvents};
`
