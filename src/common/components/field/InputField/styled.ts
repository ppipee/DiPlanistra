import styled, { css } from 'styled-components'

import FieldStyles from 'common/components/field/FieldStyle'
import spaces from 'common/styles/mixins/spaces'

import { ExtendsProps, InputFieldProps } from './types'

export const FIELD_HEIGHT = '40px'

export const InputFieldStyles = styled(FieldStyles)<InputFieldProps>`
	height: ${FIELD_HEIGHT};

	${({ $prefix, $prefixIcon }) =>
		($prefix || $prefixIcon) &&
		css`
			padding-right: ${spaces(40)};
		`}

	${({ $suffix, $suffixIcon }) =>
		($suffix || $suffixIcon) &&
		css`
			padding-left: ${spaces(40)};
		`}
`

export const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
`

export const PrefixWrapper = styled.div<ExtendsProps>`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);

	${({ $clickable }) =>
		$clickable &&
		css`
			cursor: pointer;
		`}

	& > * {
		display: block;
		margin: auto;
	}
`

export const SuffixWrapper = styled(PrefixWrapper)`
	left: 12px;
`

export const InputWrapper = styled.label<InputFieldProps>`
	position: relative;

	${({ $width }) =>
		$width &&
		css`
			width: ${$width};
		`}
`
