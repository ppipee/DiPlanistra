import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import CoverBackground from 'common/components/CoverBackground'
import spaces from 'common/styles/mixins/spaces'
import { svgShadow } from 'common/styles/shadows'

export const Container = styled(ContentContainer)`
	padding: ${spaces(16)} ${spaces(12)};
	flex: 1;
	display: flex;
`

export const IconWrapper = styled.div`
	${svgShadow}
`

export const ArrowWrapper = styled.div`
	transform: rotate(180deg);
	${svgShadow}
`

export const Background = styled(CoverBackground)`
	display: flex;
`
