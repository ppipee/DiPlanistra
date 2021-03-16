import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Skeleton from 'common/components/Skeleton'
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

export const PlaceDetailWrapper = styled(ResponsiveBlock)`
	flex: 1;
`

export const PlaceCoverImageLoading = styled(Skeleton).attrs({ height: IMG_COVER_HEIGHT, width: '100%' })`
	display: block;
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;

	${media.md`
		border-radius: 0;
	`}
`

export const PlaceImageLoading = styled(Skeleton).attrs({
	height: IMG_DEFAULT_SIZE,
	width: IMG_DEFAULT_SIZE,
})`
	display: block;
	object-fit: cover;
	border-radius: ${Borders.Default};
`
