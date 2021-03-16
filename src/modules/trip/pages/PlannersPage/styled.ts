import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import { media } from 'common/styles/utils/viewport'
import { BreakPoints } from 'common/styles/utils/viewport/screenSizes'

const TAB_WIDTH = '200px'

export const Container = styled(ContentContainer)`
	width: 100%;
	max-width: ${BreakPoints.md}px;
`

export const TabContainer = styled.div`
	width: ${TAB_WIDTH};

	${media.md`
    width:100%;
  `}
`

export const MainContainer = styled.div`
	position: relative;
	flex: 1;

	${media.md`
		display: flex;
		flex-direction: column;
		align-items: center;
	`}
`
