import styled, { css } from 'styled-components'

import { gray, white, green, red } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import { shadow } from 'common/styles/shadows'

import { FieldProps } from './types'

const validatingState = ({ variant }: FieldProps) => {
	let borderColor = gray[200]

	if (variant === 'success') {
		borderColor = green[300]
	} else if (variant === 'error') {
		borderColor = red[700]
	}

	return css`
		border: 1px solid ${borderColor};
	`
}

const FieldStyles = styled.input<FieldProps>`
	width: 100%;
	border-radius: 4px;
	padding: ${spaces(8)} ${spaces(12)};
	background-color: ${white};
	color: ${gray[900]};
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
`

export default FieldStyles
