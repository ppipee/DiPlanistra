import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const PHOTO_COVER_HEIGHT = '328px'

export const Container = styled(ResponsiveBlock)`
	border-radius: 0 0 ${Borders.Large} ${Borders.Large};
	padding: ${spaces(12)} ${spaces(16)} ${spaces(8)};

	${media.md`
  	border-radius: 0;
  `}
`

export const CoverPhoto = styled.img`
	display: block;
	width: 100%;
	height: ${PHOTO_COVER_HEIGHT};
	object-fit: cover;

	${media.md`
		height: 100vw;
	`}
`
