import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'

const IMG_DEFAULT_SIZE = '140px'
const IMG_COVER_HEIGHT = '240px'

type PlaceImgProps = {
	isHighlight?: boolean
}

export const PlaceCardContainer = styled.div`
	width: 100%;
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
`
