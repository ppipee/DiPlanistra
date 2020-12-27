import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { NAV_HEIGHT } from 'common/styles/constants'

export const RootContainer = styled(Flex).attrs({
	$direction: 'column',
})`
	margin: auto;
	min-height: 100vh;
	height: 100%;
	max-width: 100%;
	width: 100%;
`

export const MainContainer = styled.div`
	flex: 1;
	margin: auto;
	/* min-height: calc(100vh - ${NAV_HEIGHT}); */
`
