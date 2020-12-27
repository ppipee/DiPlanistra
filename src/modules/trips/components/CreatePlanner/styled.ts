import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { green } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { blockShadow, shadow } from 'common/styles/shadows'

const BUTTON_SIZE = '108px'

export const CreatePlannerButton = styled(Flex)`
	cursor: pointer;
	border-radius: ${Borders.Circle};
	height: ${BUTTON_SIZE};
	width: ${BUTTON_SIZE};
	background: linear-gradient(225deg, ${green[700]} 0%, ${green[500]} 100%);
	margin: 0 auto;

	${blockShadow};
	&:hover {
		${shadow}
	}
`
