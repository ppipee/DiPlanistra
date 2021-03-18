import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import { TAB_HEIGHT } from 'common/components/HorizontalTab/constants'
import { FOOTER_HEIGHT, NAV_HEIGHT } from 'common/styles/constants'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const Container = styled(ContentContainer)`
	margin: ${spaces(8)} auto ${spaces(24)};
	display: flex;
	align-items: stretch;
	min-height: calc(100vh - ${NAV_HEIGHT} - ${FOOTER_HEIGHT} - ${TAB_HEIGHT});

	${media.md`
  	padding: ${spaces(8)} 0 ${spaces(16)};
  `}
`

export const ListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: ${spaces(16)};

	${media.md`
		grid-template-columns: 1fr;
		grid-gap: ${spaces(10)};
	`}
`
