import styled, { css } from 'styled-components'

import { PositionProps, ScaleTypes } from './types'

function applyCenter({ $verticalCenter, $horizontalCenter, $center }: PositionProps) {
	if (($verticalCenter && $horizontalCenter) || $center) {
		return css`
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		`
	} else if ($verticalCenter) {
		return css`
			top: 50%;
			transform: translateY(-50%);
		`
	} else if ($horizontalCenter) {
		return css`
			left: 50%;
			transform: translateX(-50%);
		`
	}

	return ''
}

function applyPosition({
	$position,
	$zIndex,
	$top = 'auto',
	$bottom = 'auto',
	$left = 'auto',
	$right = 'auto',
}: PositionProps) {
	return css`
		position: ${$position};
		top: ${$top};
		bottom: ${$bottom};
		left: ${$left};
		right: ${$right};

		${$zIndex &&
		css`
			z-index: ${$zIndex};
		`}
	`
}

function applyScale({ $scale }: PositionProps) {
	if ($scale === ScaleTypes.Full) {
		return css`
			width: 100%;
			top: 0;
			bottom: 0;
		`
	} else if ($scale === ScaleTypes.FullHeight) {
		return css`
			top: 0;
			bottom: 0;
		`
	} else if ($scale === ScaleTypes.FullWidth) {
		return css`
			width: 100%;
		`
	}

	return ''
}

const Position = styled.div`
	${applyPosition}
	${applyCenter}
  ${applyScale}
`

export default Position
