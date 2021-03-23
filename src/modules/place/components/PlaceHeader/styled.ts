import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import { black, white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'
import { media } from 'common/styles/utils/viewport'

const PHOTO_COVER_HEIGHT = '408px'

type Props = {
	$imgSrc: string
}

export const CoverPhoto = styled.img`
	display: block;
	width: 100%;
	height: ${PHOTO_COVER_HEIGHT};
	object-fit: cover;

	${media.md`
		height: 100vw;
	`}
`

export const ContainerWrapper = styled.div`
	background-color: ${white};
`

export const Container = styled(ContentContainer)`
	padding: ${spaces(12)} ${spaces(16)} ${spaces(8)};
`

export const Foreground = styled.div`
	width: inherit;
	height: inherit;
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	background: ${getColorWithAlpha(black, 0.3)};
`

export const BlurBackground = styled.div<Props>`
	background-image: url(${({ $imgSrc }) => $imgSrc});
	width: 100%;
	height: ${PHOTO_COVER_HEIGHT};
`
