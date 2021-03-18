import styled from 'styled-components'

import { CONTENT_WIDTH, MEDIUM_CONTENT_WIDTH } from 'common/components/ContentContainer'
import TabsProvider from 'common/components/HorizontalTab/components/TabsProvider'
import { white } from 'common/styles/colors'
import { Spaces } from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const Tabs = styled(TabsProvider)`
	width: 100%;
	background-color: ${white};
	margin-bottom: ${Spaces[32]};

	${media.md`
	  margin-bottom: ${Spaces[24]};
  `}

	& > div {
		margin: 0 auto;
		max-width: ${CONTENT_WIDTH};
		width: 100%;

		${media.md`
		  max-width: ${MEDIUM_CONTENT_WIDTH};
	  `}
	}
`
