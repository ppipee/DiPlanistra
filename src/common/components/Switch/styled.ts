import styled, { css } from 'styled-components'

import { gray, main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'

const BUTTON_WIDTH = '60px'
const BALL_SIZE = '24px'

type SwitchStateProps = {
	$isOpen: boolean
	$haveIcon?: boolean
}

function applyState({ $isOpen: isOpen, $haveIcon: haveIcon }: SwitchStateProps) {
	if (isOpen) {
		return css`
			background-color: ${main[500]};
			transform: translateX(calc(${BUTTON_WIDTH} - ${BALL_SIZE} - ${haveIcon ? '24px' : '0px'} - 8px));
		`
	}
	return css`
		background-color: ${gray[200]};
	`
}

export const Container = styled.div<SwitchStateProps>`
	cursor: pointer;
	box-sizing: border-box;
	width: ${BUTTON_WIDTH};
	background-color: white;
	border-radius: ${Borders.Curve};
	padding: ${spaces(4)};
	position: relative;

	${({ $isOpen }) =>
		$isOpen
			? css`
					color: ${main[500]};
			  `
			: css`
					color: ${gray[200]};
			  `}
`

export const Ball = styled.div`
	width: ${BALL_SIZE};
	height: ${BALL_SIZE};
	border-radius: ${Borders.Circle};
	transition: all 0.2s ease-in-out;

	${applyState}
`
