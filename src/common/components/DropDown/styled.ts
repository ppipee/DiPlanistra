import styled, { css } from 'styled-components'

import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import Flex from '../Flex'
import Gap from '../Gap'
import Text from '../Text'

import { DropdownBorderTypes, DropdownVariant, DropdownVariants } from './types'

const DROP_DOWN_HEIGHT: Record<DropdownVariants, string> = {
	small: '32px',
	default: '40px',
}

const MIN_WIDTH = '50px'
const ROW_HEIGHT = '40px'

type DropDownProps = {
	$isOpen: boolean
	$withOutlined?: boolean
	$variant: DropdownVariant
	$border: DropdownBorderTypes
}

type ItemContainerProps = {
	$variant: DropdownVariant
	$maxRow?: number
	$border: 'curve' | 'default'
}

type DropdownWrapperProps = {
	$fitContent?: boolean
}

function applyVariant({ $variant }: DropDownProps) {
	return css`
		height: ${DROP_DOWN_HEIGHT[$variant]};
	`
}

function applyContainerStyles({ $isOpen, $withOutlined, $border }: DropDownProps) {
	let styles = css``

	if ($withOutlined) {
		styles = css`
			${styles}
			padding: 0 ${spaces(12)};
			border-radius: ${$border === 'curve' ? '20px' : Borders.Normal};
			border: 1px solid ${gray[200]};
		`
	} else {
		styles = css`
			${styles}
			padding: 0 ${spaces(4)} 0 ${spaces(8)};
			border-bottom: 1px solid ${gray[200]};
		`
	}

	if ($isOpen) {
		styles = css`
			${styles}
			border-bottom-left-radius:0;
			border-bottom-right-radius: 0;
		`
	}

	return styles
}

export const DropDownContainer = styled(Gap)<DropDownProps>`
	width: inherit;
	box-sizing: border-box;
	cursor: pointer;
	transition: 0.1s border-radius ease;

	${applyVariant}
	${applyContainerStyles}
`

export const DropDownWrapper = styled(Flex)<DropdownWrapperProps>`
	position: relative;
	width: 100%;
	min-width: ${MIN_WIDTH};
`

export const DropDownItemContainer = styled(Flex)<ItemContainerProps>`
	position: absolute;
	z-index: ${ZIndexes.DropDown};
	top: ${({ $variant }) => DROP_DOWN_HEIGHT[$variant]};
	width: inherit;
	background-color: ${white};
	border: 1px solid ${gray[200]};
	border-top: none;
	box-sizing: border-box;
	border-radius: 0 0 ${Borders.Normal} ${Borders.Normal};
	transition: all 0.2s;

	overflow-y: auto;
	${({ $maxRow = 10 }) =>
		css`
			max-height: calc(${$maxRow} * ${ROW_HEIGHT});
		`};

	& > *:not(:last-child) {
		border-bottom: 1px solid ${gray[200]};
	}

	& > :last-child {
		border-radius: 0 0 ${Borders.Normal} ${Borders.Normal};
	}
`

export const DisplayText = styled(Text)`
	flex: 1;
`
