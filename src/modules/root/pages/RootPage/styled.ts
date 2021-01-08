import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const RootContainer = styled(Flex).attrs({
	$direction: 'column',
})`
	min-height: 100vh;
	align-items: stretch;
`

export const MainContainer = styled.div`
	flex: 1;
`
