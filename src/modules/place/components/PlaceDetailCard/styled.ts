import styled from 'styled-components'

import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'

export const CardDetail = styled.div`
	background-color: ${white};
	height: fit-content;
	border-radius: 0 0 ${Borders.Extra} ${Borders.Extra};
	width: 100%;
`

export const CardTitle = styled(Text)`
	flex: 1;
	min-width: 0;
`
