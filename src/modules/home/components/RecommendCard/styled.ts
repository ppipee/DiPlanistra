import styled from 'styled-components'

import { BlockShadow } from 'common/components/BlockShadow'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'

const CARD_WIDTH = '270px'
const IMG_HEIGHT = '180px'

export const CardContainer = styled(BlockShadow)`
	width: ${CARD_WIDTH};
	border-radius: ${Borders.Extra};
	margin: ${spaces(8)};
	margin-bottom: ${spaces(12)};
	background-color: ${white};
`

export const CardImage = styled.img`
	border-radius: ${Borders.Extra} ${Borders.Extra} 0 0;
	width: 100%;
	height: ${IMG_HEIGHT};
	object-fit: cover;
	display: block;
`

export const CardDetailWrapper = styled.div`
	padding: ${spaces(10)} ${spaces(12)};
`

export const ImageLoading = styled.div`
	width: 100%;
	height: ${IMG_HEIGHT};
	border-radius: ${Borders.Extra} ${Borders.Extra} 0 0;
	display: flex;
	align-items: stretch;

	span {
		width: 100%;
		display: block;
	}
`
