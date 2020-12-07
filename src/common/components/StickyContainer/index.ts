import styled from 'styled-components'

import { NAV_HEIGHT } from 'common/styles/constants'

const GAP_SIZE = '16px'

const StickyContainer = styled.div`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: calc(${NAV_HEIGHT} + ${GAP_SIZE});
`

export default StickyContainer
