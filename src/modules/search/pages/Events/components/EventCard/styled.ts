import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import { main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { Spaces } from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const IMG_HEIGHT = '280px'
const IMG_MOBILE_HEIGHT = '180px'

export const CardContainer = styled(ResponsiveBlock)`
	display: flex;
	align-items: stretch;
	flex-direction: column;
	height: 100%;
`

export const ImageCover = styled.img`
	height: ${IMG_HEIGHT};
	object-fit: cover;
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;

	${media.md`
  	height: ${IMG_MOBILE_HEIGHT};
    border-radius: 0;
  `}
`

export const CardContent = styled.div`
	padding: ${Spaces[12]} ${Spaces[16]};
	border-radius: 0 0 ${Borders.Large} ${Borders.Large};

	${media.md`
	  padding: ${Spaces[8]} ${Spaces[12]};
    border-radius: 0;
  `}
`

export const CardHeader = styled.div`
	padding: ${Spaces[12]} ${Spaces[16]};
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;
	background-color: ${main[500]};

	${media.md`
	  padding: ${Spaces[8]} ${Spaces[12]};
    border-radius: 0;
  `}
`

export const ImageCoverLoading = styled.div`
	height: ${IMG_HEIGHT};
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;
	display: flex;

	${media.md`
  	height: ${IMG_MOBILE_HEIGHT};
    border-radius: 0;
  `}
`
