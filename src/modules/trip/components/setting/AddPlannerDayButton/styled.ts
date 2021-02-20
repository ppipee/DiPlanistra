import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { hardShadow, shadow } from 'common/styles/shadows'

const BUTTON_SIZE = '80px'

export const AddPlannerButton = styled(Flex)`
	cursor: pointer;
	border-radius: ${Borders.Circle};
	height: ${BUTTON_SIZE};
	width: ${BUTTON_SIZE};
	background: linear-gradient(225deg, ${main[500]} 0%, ${green[500]} 100%);
	margin: 0 auto;

	&:hover {
		${hardShadow}
	}

	${shadow}
`
