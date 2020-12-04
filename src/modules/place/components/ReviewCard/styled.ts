import styled from 'styled-components'

import { BlockShadow } from 'common/components/BlockShadow'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'

const PHOTO_SIZE = '80px'

export const Card = styled(BlockShadow)`
	padding: ${spaces(16)} ${spaces(16)} ${spaces(12)};
	border-radius: ${Borders.Large};
	box-sizing: border-box;
	width: 100%;
	background-color: ${white};
`

export const PreviewPhoto = styled.img`
	border-radius: ${Borders.Large};
	object-fit: cover;
	height: ${PHOTO_SIZE};
	width: ${PHOTO_SIZE};
`
