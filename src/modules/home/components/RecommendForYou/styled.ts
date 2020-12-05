import styled from 'styled-components'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

export const RecommendContainer = styled(ResponsiveBlock)`
	padding: ${spaces(16)} 0;
`

export const CardsContainer = styled(Gap)`
	overflow-x: auto;
	padding: ${spaces(8)} 0 ${spaces(8)} ${spaces(8)};
`
