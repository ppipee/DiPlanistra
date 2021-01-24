import styled, { css } from 'styled-components'

import { gray, white, green, red } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import { shadow } from 'common/styles/shadows'

import { FieldProps } from './types'

const applyStyle = ({ fieldStyle }: FieldProps) => {
	if (!fieldStyle) return null

	const { $background, $borderColor, $borderRadius, $color } = fieldStyle

	return css`
		${$borderRadius &&
		css`
			border-radius: ${$borderRadius};
		`}

		${$borderColor &&
		css`
			border-color: ${$borderColor};
		`}

		${$background &&
		css`
			background: ${$background};
		`}

		${$color &&
		css`
			color: ${$color};
		`}
	`
}

const validatingState = ({ variant }: FieldProps) => {
	let borderColor = gray[200]

	if (variant === 'success') {
		borderColor = green[300]
	} else if (variant === 'error') {
		borderColor = red[700]
	}

	return css`
		border-color: ${borderColor};
		border-style: solid;
	`
}

const applyBorder = ({ borderVariant = 'outlined' }: FieldProps) => {
	if (borderVariant === 'default') {
		return css`
			border-bottom-width: 1px;
		`
	}

	return css`
		border-width: 1px;
	`
}

const FieldStyles = styled.input<FieldProps>`
	width: 100%;
	border-radius: 4px;
	padding: ${spaces(8)} ${spaces(12)};
	background-color: ${white};
	color: ${gray[900]};
	box-sizing: border-box;
	outline: none;
	transition: all 0.1s linear;

	&::placeholder {
		color: ${gray[500]};
	}
	&:focus {
		border: 1px solid ${gray[900]};
		box-shadow: ${shadow};
	}
	&:disabled {
		color: ${gray[200]};
		background-color: ${gray[50]};
		border-color: ${gray[100]};
	}

	${validatingState}
	${applyBorder}
	${applyStyle}
`

export default FieldStyles
