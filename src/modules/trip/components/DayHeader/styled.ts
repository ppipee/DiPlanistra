import styled, { css } from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { green, main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { shadow } from 'common/styles/shadows'
import { media } from 'common/styles/utils/viewport'

type HighlightProps = {
	$shouldHighlight: boolean
}

const CONTAINER_HEIGHT = {
	mobile: '64px',
	desktop: '72px',
}

function applyHeaderStyle({ $shouldHighlight: shouldHighlight }: HighlightProps) {
	if (shouldHighlight) {
		return css`
			background-color: transparent;
			color: ${white};
		`
	}

	return css`
		background-color: ${white};
	`
}

function applyCircleStyle({ $shouldHighlight: shouldHighlight }: HighlightProps) {
	if (shouldHighlight) {
		return css`
			background: ${white};
			color: ${main[500]};
		`
	}

	return css`
		background: linear-gradient(198.25deg, ${main[500]} 12.76%, ${green[500]} 110.73%);
		color: ${white};
	`
}

const circleSize = css`
	width: ${CONTAINER_HEIGHT.desktop};
	height: ${CONTAINER_HEIGHT.desktop};

	${media.md`
    width: ${CONTAINER_HEIGHT.mobile};
    height: ${CONTAINER_HEIGHT.mobile};
  `}
`

export const HeaderContainer = styled(Gap)`
	border: 2px solid ${white};
	box-sizing: border-box;
	position: relative;
	width: 100%;
	border-radius: ${Borders.Curve};
	height: ${CONTAINER_HEIGHT.desktop};
	cursor: pointer;
	transition: color 0.1s, background 0.1s;

	${media.md`
    height: ${CONTAINER_HEIGHT.mobile};
  `}

	${shadow}
	${applyHeaderStyle}

	&::before {
		position: relative;
		${circleSize}
		content: '';
		padding-right: ${spaces(12)};
	}
`

export const CircleBlock = styled(Flex)`
	position: absolute;
	top: -2px;
	bottom: -2px;
	left: -2px;
	box-sizing: border-box;
	border: 2px solid ${white};
	border-radius: ${Borders.Circle};
	transition: color 0.1s, background 0.1s;

	${applyCircleStyle}
	${circleSize}
`
