import styled from 'styled-components'

import { green } from 'common/styles/colors'
import { blockShadow } from 'common/styles/shadows'

const DEFAULT_HEIGHT = '240px'

type CoverBackgroundProps = {
	$height?: string
	$width?: string
	$shadow?: boolean
}

const CoverBackground = styled.div<CoverBackgroundProps>`
	width: 100%;
	background: linear-gradient(180deg, ${green[700]} 0%, ${green[500]} 166.19%);
	height: ${({ $height }) => $height || DEFAULT_HEIGHT};
	width: ${({ $width }) => $width || '100%'};

	${({ $shadow }) => ($shadow ? blockShadow : '')}
`

export default CoverBackground
