import styled, { css } from 'styled-components'

import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import Flex from '../Flex'
import Gap from '../Gap'
import Text from '../Text'

const DROP_DOWN_HEIGHT = '40px'

type DropDownProps = {
	$isOpen: boolean
}

export const DropDownContainer = styled(Gap)<DropDownProps>`
	width: inherit;
	height: ${DROP_DOWN_HEIGHT};
	border: 1px solid ${gray[700]};
	padding: 0 ${spaces(12)};
	box-sizing: border-box;
	border-radius: ${Borders.Normal};

	${({ $isOpen }) =>
		$isOpen &&
		css`
			border-radius: ${Borders.Normal} ${Borders.Normal} 0 0;
		`}
`

export const DropDownWrapper = styled(Flex)`
	position: relative;
	width: 100%;
`

export const DropDownItemContainer = styled(Flex)`
	position: absolute;
	z-index: ${ZIndexes.DropDown};
	top: 40px;
	width: inherit;
	background-color: ${white};
	border: 1px solid ${gray[700]};
	border-top: none;
	box-sizing: border-box;
	border-radius: 0 0 ${Borders.Normal} ${Borders.Normal};
	transition: all 0.2s;

	& > *:not(:last-child) {
		border-bottom: 1px solid ${gray[300]};
	}

	& > :last-child {
		border-radius: 0 0 ${Borders.Normal} ${Borders.Normal};
	}
`

export const DisplayText = styled(Text)`
	flex: 1;
`
