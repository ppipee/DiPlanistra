import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { FOOTER_HEIGHT } from 'common/styles/constants'

export const RootContainer = styled(Flex).attrs({
	$direction: 'column',
})`
	position: relative;
	min-height: 100vh;
	align-items: stretch;
`

export const MainContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: stretch;
	height: calc(100% + ${FOOTER_HEIGHT});

	& > * {
		width: 100%;
	}
`
