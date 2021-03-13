import styled from 'styled-components'

import Block from 'common/components/Block'
import { gray } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

const MAX_HEIGHT = '360px'
const MAX_MOBILE = '220px'

export const PlaceListContainer = styled(Block)`
	position: absolute;
	border: 1px solid ${gray[200]};
	border-radius: 0 0 ${Borders.Large} ${Borders.Large};
	left: 0;
	right: 0;

	overflow-y: auto;
	max-height: ${MAX_HEIGHT};

	${media.sm`
		max-height:${MAX_MOBILE};
	`}
`
