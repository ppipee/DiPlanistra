import styled from 'styled-components'

import { NAV_HEIGHT } from 'common/styles/constants'
import { media } from 'common/styles/utils/viewport'

const MAIN_SECTION_WIDTH = '70%'
const SUB_SECTION_WIDTH = '30%'

type ContainerProps = {
	$isMain?: boolean
}

export const Container = styled.div<ContainerProps>`
	position: relative;
	width: ${({ $isMain }) => ($isMain ? MAIN_SECTION_WIDTH : SUB_SECTION_WIDTH)};

	${media.md`
    width:100%;
  `};
`

export const StickyContainer = styled.div`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: ${NAV_HEIGHT};
`
