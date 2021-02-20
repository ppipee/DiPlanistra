import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { hardShadow, shadow } from 'common/styles/shadows'
import { media } from 'common/styles/utils/viewport'

const BUTTON_SIZE = {
	desktop: '108px',
	mobile: '80px',
}

export const CreatePlannerButton = styled(Flex)`
	cursor: pointer;
	border-radius: ${Borders.Circle};
	height: ${BUTTON_SIZE.desktop};
	width: ${BUTTON_SIZE.desktop};
	background: linear-gradient(225deg, ${main[500]} 0%, ${green[500]} 100%);
	margin: 0 auto;

	&:hover {
		${hardShadow}
	}

	${shadow}

	${media.md`
		height: ${BUTTON_SIZE.mobile};
		width: ${BUTTON_SIZE.mobile};
	`}
`
