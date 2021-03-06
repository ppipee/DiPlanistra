import styled from 'styled-components'

import { media } from 'common/styles/utils/viewport'
import { BreakPoints } from 'common/styles/utils/viewport/screenSizes'

export const CONTENT_WIDTH = `${BreakPoints.lg}px`
export const MEDIUM_CONTENT_WIDTH = `${BreakPoints.sm}px`

const ContentContainer = styled.div`
	display: block;
	max-width: ${CONTENT_WIDTH};
	margin: 0 auto;
	width: 100%;
	box-sizing: border-box;

	${media.md`
		max-width: ${MEDIUM_CONTENT_WIDTH};
	`};
`

export default ContentContainer
