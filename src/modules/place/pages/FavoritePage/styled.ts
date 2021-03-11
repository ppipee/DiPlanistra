import styled from 'styled-components'

import { CONTENT_WIDTH, MEDIUM_CONTENT_WIDTH } from 'common/components/ContentContainer'
import { white } from 'common/styles/colors'
import { media } from 'common/styles/utils/viewport'

import Tabs from 'modules/place/components/FavoriteTabs'

export const FavoriteTabs = styled(Tabs)`
	background-color: ${white};

	& > div {
		max-width: ${CONTENT_WIDTH};
		margin: 0 auto;
		width: 100%;

		${media.md`
		max-width: ${MEDIUM_CONTENT_WIDTH};
	`};
	}
`
