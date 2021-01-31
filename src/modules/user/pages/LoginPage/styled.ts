import styled from 'styled-components'

import Flex from 'common/components/Flex'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const IMG_WIDTH = {
	MOBILE: '245px',
	DESKTOP: '368px',
}

const IMG_BOTTOM_SPACE = {
	MOBILE: '68px',
	DESKTOP: '104px',
}

const CONTAINER_WIDTH = '280px'

export const Logo = styled.img`
	width: ${IMG_WIDTH.DESKTOP};
	margin-bottom: ${IMG_BOTTOM_SPACE.DESKTOP};

	${media.md`
		margin-bottom: ${IMG_BOTTOM_SPACE.MOBILE};
		width: ${IMG_WIDTH.MOBILE};
	`};
`

export const Container = styled(Flex)`
	width: ${CONTAINER_WIDTH};
	text-align: center;
`

export const SeparatorContainer = styled.div`
	display: flex;
	align-items: center;
	margin: ${spaces(8)} 0 ${spaces(24)};
	position: relative;
`
