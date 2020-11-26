import styled from 'styled-components'

import { media } from 'common/styles/utils/viewport'
import { BreakPoints } from 'common/styles/utils/viewport/screenSizes'

const CONTENT_WIDTH = `${BreakPoints.md}px`
const MEDIUM_CONTENT_WIDTH = `${BreakPoints.sm}px`

const ContentContainer = styled.div`
	display: block;
	max-width: ${CONTENT_WIDTH};
	margin: auto;

	${media.md`
		max-width: ${MEDIUM_CONTENT_WIDTH};
	`};
`

export default ContentContainer
