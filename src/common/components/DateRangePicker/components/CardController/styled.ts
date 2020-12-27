import styled from 'styled-components'

import { CALENDAR_COLOR } from 'common/components/Calendar/constants'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

const CARD_WIDTH = '140px'
const CARD_HEIGHT = '40px'

type CardProps = {
	$isSelected: boolean
	$isDisabled?: boolean
}

export const Card = styled.div<CardProps>`
	width: ${CARD_WIDTH};
	height: ${CARD_HEIGHT};
	padding: ${spaces(8)};
	box-sizing: border-box;
	cursor: pointer;
	border-radius: 4px;
	background-color: ${gray[100]};

	color: ${({ $isSelected }) => ($isSelected ? CALENDAR_COLOR.Active : gray[500])};
`
