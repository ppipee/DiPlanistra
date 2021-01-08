import styled, { css } from 'styled-components'

import { gray, main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

const RADIO_SIZE = '16px'
const RADIO_CIRCLE_SIZE = '14px'

export interface RadioProps {
	$checked?: boolean
}

export interface LabelTextProps {
	$color: string
}

export interface LabelProps {
	$align: string
	$disabled?: boolean
}

export const LabelText = styled.span<LabelTextProps>`
	font-size: ${fontSizes(14)};
	margin-left: ${spaces(8)};
	flex: 1;
	min-width: 0;
	color: ${({ $color }) => $color};
	transition: color 0.2s;
`

export const align = ({ $align }: LabelProps) =>
	css`
		align-items: ${$align};
	`
export const disable = ({ $disabled }: LabelProps) =>
	$disabled &&
	css`
		color: ${gray[200]};
	`

export const Label = styled.label`
	display: flex;
	cursor: pointer;
	${align}
	${disable}
`

export const RadioInput = styled.div<RadioProps>`
	position: relative;
	width: ${RADIO_SIZE};
	height: ${RADIO_SIZE};
	box-sizing: border-box;
	border-radius: ${Borders.Circle};
	transition: all 0.2s;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: ${Borders.Circle};
		border: 2px solid ${white};
		background-color: transparent;
		box-sizing: border-box;
		width: ${RADIO_CIRCLE_SIZE};
		height: ${RADIO_CIRCLE_SIZE};
		transition: all 0.1s;
	}

	${({ $checked }) => css`
		border: 1px solid ${$checked ? main[300] : gray[500]};
		background-color: ${$checked ? main[300] : white};

		&:hover {
			background-color: ${$checked ? main[100] : white};
			border: 1px solid ${$checked ? main[100] : main[300]};
		}
	`}
`

export const HiddenRadio = styled.input`
	display: none;
`
