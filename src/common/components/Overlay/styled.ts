import styled, { css } from 'styled-components'

import { black, white } from 'common/styles/colors'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

interface OverlayWithBackgroundProps {
	$position: string
	$zIndex?: number | 'unset'
	$transparent?: boolean
	$cursor?: boolean
	$lightBackground?: boolean
}

export const OverlayWithBackground = styled.div<OverlayWithBackgroundProps>`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: ${({ $zIndex }) => $zIndex};
	position: ${({ $position }) => $position};
	background: ${({ $lightBackground }) => $lightBackground ? getColorWithAlpha(white, 0.8) : getColorWithAlpha(black, 0.8)};
	${({ $transparent }) => $transparent &&
		css`
			background: transparent;
		`};
	${({ onClick, $cursor }) => onClick &&
		$cursor &&
		css`
			cursor: pointer;
		`};
`
