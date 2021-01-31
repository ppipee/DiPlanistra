import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'
import { media } from 'common/styles/utils/viewport'

const HEADER_SIZE = {
	MOBILE: '250px',
	DESKTOP: '420px',
}

const RADIUS_SIZE = {
	MOBILE: '120px',
	DESKTOP: '192px',
}

const LOGO_WIDTH = {
	MOBILE: '220px',
	DESKTOP: '365px',
}

export const HeaderBackground = styled(Flex)`
	background: linear-gradient(to bottom, ${main[500]} 24.41%, ${green[500]} 119.19%);
	width: inherit;
	height: ${HEADER_SIZE.DESKTOP};
	border-bottom-left-radius: ${RADIUS_SIZE.DESKTOP};

	${media.md`
		height: ${HEADER_SIZE.MOBILE};
		border-bottom-left-radius: ${RADIUS_SIZE.MOBILE};
	`}
`

export const Logo = styled.img`
	width: ${LOGO_WIDTH.DESKTOP};

	${media.md`
		width: ${LOGO_WIDTH.MOBILE};
	`}
`
