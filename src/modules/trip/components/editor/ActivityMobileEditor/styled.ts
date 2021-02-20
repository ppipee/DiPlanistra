import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { svgShadow } from 'common/styles/shadows'

export const EditorContainer = styled(Flex)`
	background-color: white;
`

export const ArrowWrapper = styled.div`
	transform: rotate(180deg);
	${svgShadow}
`
