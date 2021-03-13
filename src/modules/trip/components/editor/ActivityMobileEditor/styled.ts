import styled from 'styled-components'

import Flex from 'common/components/Flex'
import { white } from 'common/styles/colors'
import { svgShadow } from 'common/styles/shadows'

import BaseActivityEditorController from '../ActivityEditorController'

export const BOTTOM_BAR_HEIGHT = '56px'

export const EditorContainer = styled(Flex)`
	background-color: ${white};
	margin-bottom: ${BOTTOM_BAR_HEIGHT};
	overflow: auto;
`

export const ArrowWrapper = styled.div`
	transform: rotate(180deg);
	${svgShadow}
`

export const ActivityEditorController = styled(BaseActivityEditorController)`
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: ${white};
`
