import styled from 'styled-components'

import SeparatorContainer from 'common/components/SeparatorContainer'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { blockShadow } from 'common/styles/shadows'

export const ActivityCardsContainer = styled(SeparatorContainer)`
	background-color: ${white};
	border-radius: ${Borders.Extra};

	${blockShadow}
`
