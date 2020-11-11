import styled, { css } from 'styled-components'

import FieldStyles from 'common/components/field/FieldStyle'
import spaces from 'common/styles/mixins/spaces'

import { IconWrapperProps, InputFieldProps } from './types'

export const FIELD_HEIGHT = '40px'

export const InputFieldStyles = styled(FieldStyles)<InputFieldProps>`
	height: ${FIELD_HEIGHT};

	${({ $icon }) => $icon &&
		css`
			padding: ${spaces(8)} ${spaces(40)} ${spaces(8)} ${spaces(12)};
		`}
`

export const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
`

export const IconWrapper = styled.div<IconWrapperProps>`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);

	${({ $clickable = false }) => $clickable &&
		css`
			cursor: pointer;
		`}
`

export const InputWrapper = styled.label<InputFieldProps>`
	position: relative;

	${({ $width }) => $width &&
		css`
			width: ${$width};
		`}
`
