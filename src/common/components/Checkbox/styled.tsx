import styled, { css } from 'styled-components'

import { gray, main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

const CHECKBOX_SIZE = '16px'

export interface CheckboxProps {
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

export const CheckboxInput = styled.div<CheckboxProps>`
	position: relative;
	width: ${CHECKBOX_SIZE};
	height: ${CHECKBOX_SIZE};
	box-sizing: border-box;
	border-radius: ${Borders.Default};
	transition: all 0.2s;

	${({ $checked }) => css`
		border: 1px solid ${$checked ? main[300] : gray[500]};
		background-color: ${$checked ? main[300] : white};

		&:hover {
			background-color: ${$checked ? main[100] : white};
			border: 1px solid ${$checked ? main[100] : main[300]};
		}
	`}
`

export const HiddenCheckbox = styled.input`
	display: none;
`
