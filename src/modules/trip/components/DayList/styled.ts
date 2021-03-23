import styled from 'styled-components'

import Gap from 'common/components/Gap'
import SeparatorContainer from 'common/components/SeparatorContainer'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { blockShadow } from 'common/styles/shadows'

const MAX_EDITOR_WIDTH = '700px'
const MAX_VIEWVER_WIDTH = '650px'

export const EditorContainer = styled(SeparatorContainer).attrs({
	$spacingTop: spaces(16),
	$spacingBottom: spaces(12),
	$padding: `${spaces(16)} ${spaces(16)} ${spaces(20)}`,
	$paddingMobile: `${spaces(12)} ${spaces(12)} ${spaces(20)}`,
})`
	background-color: ${white};
	border-radius: ${Borders.Extra};
	max-width: ${MAX_EDITOR_WIDTH};
	width: 100%;
	margin: 0 auto;

	${blockShadow}
`

export const ViewerContainer = styled(Gap).attrs({
	$type: 'vertical',
	$size: spaces(12),
	$alignCenter: true,
})`
	width: 100%;
	margin: 0 auto;
	max-width: ${MAX_VIEWVER_WIDTH};
	background-color: transparent;
`
