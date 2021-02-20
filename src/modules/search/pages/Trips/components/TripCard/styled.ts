import styled from 'styled-components'

import Text from 'common/components/Text'
import { main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const CardHeader = styled.div`
	background-color: ${main[500]};
	padding: ${spaces(16)};
	color: ${white};
	border-radius: ${Borders.Large} ${Borders.Large} 0 0;

	${media.md`
		border-radius: 0;
	  padding: ${spaces(12)};
  `};
`

export const CardContent = styled.div`
	padding: ${spaces(12)} ${spaces(16)};

	${media.md`
	  padding: ${spaces(8)} ${spaces(12)};
  `};
`

export const FullText = styled(Text)`
	flex: 1;
	min-width: 0;
`
