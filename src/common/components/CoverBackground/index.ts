import styled, { css } from 'styled-components'

import { green, main } from 'common/styles/colors'
import { blockShadow } from 'common/styles/shadows'
import { media } from 'common/styles/utils/viewport'

const DEFAULT_HEIGHT = {
	desktop: '240px',
	mobile: '150px',
}

type CoverBackgroundProps = {
	$height?: string
	$width?: string
	$shadow?: boolean
}

function applyHeight({ $height }: CoverBackgroundProps) {
	if ($height) {
		return css`
			height: ${$height};
		`
	}

	return css`
		height: ${DEFAULT_HEIGHT.desktop};

		${media.md`
			height: ${DEFAULT_HEIGHT.mobile};
		`}
	`
}

const CoverBackground = styled.div<CoverBackgroundProps>`
	width: 100%;
	background: linear-gradient(180deg, ${main[500]} 0%, ${green[500]} 166.19%);
	width: ${({ $width }) => $width || '100%'};

	${({ $shadow }) => ($shadow ? blockShadow : '')}

	${applyHeight}
`

export default CoverBackground
