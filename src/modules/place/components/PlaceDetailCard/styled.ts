import styled from 'styled-components'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import { media } from 'common/styles/utils/viewport'

export const CardDetail = styled(Gap)`
	background-color: ${white};
	height: inherit;
	border-radius: 0 0 ${Borders.Extra} ${Borders.Extra};
	font-size: ${fontSizes(14)};
	flex: 1;

	${media.md`
		font-size: ${fontSizes(12)};
	`}
`

export const CardTitle = styled(Text)`
	flex: 1;
	min-width: 0;
`
