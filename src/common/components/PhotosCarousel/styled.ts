import styled from 'styled-components'

import { black } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'
import { media } from 'common/styles/utils/viewport'

import ContentContainer from '../ContentContainer'

const PHOTO_HEIGHT = '480px'

type Props = {
	$imgSrc: string
}

export const CarouselContainer = styled.div`
	position: relative;
`

export const PhotoTitle = styled(ContentContainer)`
	padding: ${spaces(24)} ${spaces(36)} ${spaces(16)};

	${media.md`
		padding: ${spaces(12)} ${spaces(16)};
	`}
`

export const PhotoTitleWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 99.48%);

	${media.md`
  	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 99.48%);
    bottom:0;
    top:auto;
  `}
`

export const PhotoWrapper = styled.img`
	object-fit: cover;
	width: 100%;
	height: ${PHOTO_HEIGHT};

	${media.md`
    width: 100vw;
    height: 100vw;
  `}
`

export const Foreground = styled.div`
	width: inherit;
	height: inherit;
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	background: ${getColorWithAlpha(black, 0.3)};
`

export const BackgroundCover = styled.div<Props>`
	background-image: url(${({ $imgSrc }) => $imgSrc});
	width: 100%;
	height: ${PHOTO_HEIGHT};

	${media.md`
    height: 100vw;
  `}
`
