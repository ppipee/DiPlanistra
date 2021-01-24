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
			padding-left: ${spaces(40)};
		`}

	${({ $suffix, $suffixIcon }) =>
		($suffix || $suffixIcon) &&
		css`
			padding-right: ${spaces(40)};
		`}
`

export const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
`

export const PrefixWrapper = styled.div<ExtendsProps>`
	position: absolute;
	left: 12px;
	right: auto;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;

	${({ $clickable }) =>
		$clickable &&
		css`
			cursor: pointer;
		`}

	& > * {
		display: inline-block;
		margin: auto 0;
	}
`

export const SuffixWrapper = styled(PrefixWrapper)`
	right: 12px;
	left: auto;
`

export const InputWrapper = styled.label<InputFieldProps>`
	position: relative;
	display: flex;
	align-items: center;

	${({ $width }) =>
		$width &&
		css`
			width: ${$width};
		`}
`
