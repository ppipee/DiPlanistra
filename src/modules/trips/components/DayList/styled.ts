import styled from 'styled-components'

import Gap from 'common/components/Gap'
import SeparatorContainer from 'common/components/SeparatorContainer'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { blockShadow } from 'common/styles/shadows'

export const EditorContainer = styled(SeparatorContainer).attrs({
	$spacingTop: spaces(16),
	$spacingBottom: spaces(12),
	$padding: `${spaces(16)} ${spaces(16)} ${spaces(20)}`,
	$paddingMobile: `${spaces(12)} ${spaces(12)} ${spaces(20)}`,
})`
	background-color: ${white};
	border-radius: ${Borders.Extra};

	${blockShadow}
`

export const ViewerContainer = styled(Gap).attrs({
	$type: 'vertical',
	$size: spaces(12),
	$alignCenter: true,
})`
	background-color: transparent;
`
