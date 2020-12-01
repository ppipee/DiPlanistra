import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import { black } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'
import { media } from 'common/styles/utils/viewport'

const MOBILE_SIZE = '114px'
const DESKTOP_SIZE = '154px'
const DISTANCE_TAG_HEIGHT = '20px'

export const PlaceContainer = styled.div`
	position: relative;
	width: ${DESKTOP_SIZE};

	${media.md`
    width: ${MOBILE_SIZE};
  `}
`

export const PlaceImage = styled.img`
	object-fit: cover;
	width: ${DESKTOP_SIZE};
	height: ${DESKTOP_SIZE};
	border-radius: ${Borders.Large};

	${media.md`
    width: ${MOBILE_SIZE};
    height: ${MOBILE_SIZE};  
  `};
`

export const DistanceWrapper = styled(Flex)`
	border-radius: ${Borders.HalfCircle};
	height: ${DISTANCE_TAG_HEIGHT};
	position: absolute;
	box-sizing: border-box;
	top: 4px;
	right: 4px;
	background-color: ${getColorWithAlpha(black, 0.3)};
`

export const PlaceName = styled(Text)`
	width: inherit;
`
