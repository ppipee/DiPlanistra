import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const IMG_WIDTH = {
	mobile: '245px',
	desktop: '368px',
}

const IMG_BOTTOM_SPACE = {
	mobile: '88px',
	desktop: '104px',
}

const CONTAINER_WIDTH = '280px'

export const BackgroundWrapper = styled.div`
	background: linear-gradient(191.27deg, ${main[500]} 24.41%, ${green[500]} 119.19%);
`

export const Logo = styled.img`
	width: ${IMG_WIDTH.desktop};
	margin-bottom: ${IMG_BOTTOM_SPACE.desktop};

	${media.md`
		margin-bottom: ${IMG_BOTTOM_SPACE.mobile};
		width: ${IMG_WIDTH.mobile};
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
