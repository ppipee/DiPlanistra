import styled from 'styled-components'

import Flex from '../Flex'

type BlockProps = {
	$size: string
}

export const Block = styled(Flex)<BlockProps>`
	height: ${({ $size }) => $size};
	width: ${({ $size }) => $size};
`
