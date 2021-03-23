import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const Container = styled(Flex).attrs({
	$alignItems: 'center',
	$justifyContent: 'center',
	$direction: 'column',
})`
	width: 100%;
	height: inherit;
	min-height: 100vh;
`
