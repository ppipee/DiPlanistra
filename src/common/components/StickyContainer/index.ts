import styled, { css } from 'styled-components'

import { NAV_HEIGHT } from 'common/styles/constants'

const GAP_SIZE = '16px'

type Props = {
	$top?: string
	$bottom?: string
}

const StickyContainer = styled.div<Props>`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: ${({ $top }) => $top || css`calc(${NAV_HEIGHT} + ${GAP_SIZE})`};
	bottom: ${({ $bottom }) => $bottom || GAP_SIZE};
`

export default StickyContainer
