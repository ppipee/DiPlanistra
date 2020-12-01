import styled from 'styled-components'

import { BlockShadow } from 'common/components/BlockShadow'
import Text from 'common/components/Text'
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
`

export const CardImage = styled.img`
	border-radius: ${Borders.Extra} ${Borders.Extra} 0 0;
	width: 100%;
	height: ${IMG_HEIGHT};
	object-fit: cover;
`

export const CardDetail = styled.div`
	padding: ${spaces(10)} ${spaces(12)};
	background-color: ${white};
	height: fit-content;
	border-radius: 0 0 ${Borders.Extra} ${Borders.Extra};
`

export const CardTitle = styled(Text)`
	flex: 1;
	min-width: 0;
`