import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const PHOTO_HEIGHT = '360px'

export const CarouselContainer = styled.div`
	position: relative;
`

export const PhotoTitleWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	padding: ${spaces(24)} ${spaces(36)} ${spaces(16)};
	background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 99.48%);

	${media.md`
  	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 99.48%);
    bottom:0;
    top:auto;
	  padding: ${spaces(12)} ${spaces(16)};
  `}
`

export const PhotoWrapper = styled.img`
	object-fit: cover;
	width: 100%;
	height: ${PHOTO_HEIGHT};
	border-radius: ${Borders.Large};

	${media.md`
    width: 100vw;
    height: 100vw;
    border-radius: 0;
  `}
`
