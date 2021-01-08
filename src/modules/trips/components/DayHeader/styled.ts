import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import { green, main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { shadow } from 'common/styles/shadows'
import { media } from 'common/styles/utils/viewport'

const CONTAINER_HEIGHT = {
	mobile: '64px',
	desktop: '80px',
}

export const HeaderContainer = styled(Gap)`
	width: 100%;
	background-color: ${white};
	border-radius: ${Borders.Curve};
	height: ${CONTAINER_HEIGHT.desktop};
	cursor: pointer;

	${media.md`
    height: ${CONTAINER_HEIGHT.mobile};
  `}
	${shadow};
`

export const CircleBlock = styled(Flex)`
	box-sizing: border-box;
	border: 2px solid ${white};
	background: linear-gradient(198.25deg, ${main[500]} 12.76%, ${green[500]} 110.73%);
	border-radius: ${Borders.Circle};

	width: ${CONTAINER_HEIGHT.desktop};
	height: ${CONTAINER_HEIGHT.desktop};

	${media.md`
    width: ${CONTAINER_HEIGHT.mobile};
    height: ${CONTAINER_HEIGHT.mobile};
  `}
`
