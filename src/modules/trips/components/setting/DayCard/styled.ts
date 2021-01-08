import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { green, main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'

const DAY_BOX_SIZE = '40px'

export const DayWrapper = styled(Flex)`
	width: ${DAY_BOX_SIZE};
	height: ${DAY_BOX_SIZE};
	border-radius: ${Borders.Circle};
	background: linear-gradient(198.25deg, ${main[500]} 12.76%, ${green[500]} 110.73%);
`

export const ContentContainer = styled(Gap)`
	flex: 1;
`
