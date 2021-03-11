import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const Container = styled(ContentContainer)`
	padding: ${spaces(16)} 0 ${spaces(24)};
	display: flex;
	align-items: stretch;

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
