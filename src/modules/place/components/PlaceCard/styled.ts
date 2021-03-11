import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

const IMG_DEFAULT_SIZE = '140px'
const IMG_COVER_HEIGHT = '240px'

type PlaceImgProps = {
	isHighlight?: boolean
}

export const PlaceCardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const PlaceImage = styled.img<PlaceImgProps>`
	display: block;
	object-fit: cover;
	height: ${IMG_DEFAULT_SIZE};
	width: ${IMG_DEFAULT_SIZE};
	border-radius: ${Borders.Default};
`

export const PlaceCoverImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: ${IMG_COVER_HEIGHT};
	display: block;
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;

	${media.md`
		border-radius: 0;
	`}
`
