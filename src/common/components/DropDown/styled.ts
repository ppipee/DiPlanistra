import styled, { css } from 'styled-components'

import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import Flex from '../Flex'
import Gap from '../Gap'
import Text from '../Text'

import { DropdownVariant, DropdownVariants } from './types'

const DROP_DOWN_HEIGHT: Record<DropdownVariants, string> = {
	small: '32px',
	default: '40px',
}

const MIN_WIDTH = '50px'

type DropDownProps = {
	$isOpen: boolean
	$withOutlined?: boolean
	$variant: DropdownVariant
}

type ItemContainerProps = {
	$variant: DropdownVariant
	$maxHeight?: string
}

function applyVariant({ $variant }: DropDownProps) {
	return css`
		height: ${DROP_DOWN_HEIGHT[$variant]};
	`
}

function applyContainerStyles({ $isOpen, $withOutlined }: DropDownProps) {
	let styles = css``

	if ($isOpen) {
		styles = css`
			${styles}
			border-radius: ${Borders.Normal} ${Borders.Normal} 0 0;
		`
	}

	if ($withOutlined) {
		styles = css`
			${styles}
			padding: 0 ${spaces(12)};
			border-radius: ${Borders.Normal};
			border: 1px solid ${gray[200]};
		`
	} else {
		styles = css`
			${styles}
			padding: 0 ${spaces(4)} 0 ${spaces(8)};
			border-bottom: 1px solid ${gray[200]};
		`
	}

	return styles
}

export const DropDownContainer = styled(Gap)<DropDownProps>`
	width: inherit;
	box-sizing: border-box;
	cursor: pointer;

	${applyVariant}
	${applyContainerStyles}
`

export const DropDownWrapper = styled(Flex)`
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
	max-height: ${({ $maxHeight = 'auto' }) => $maxHeight};

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
