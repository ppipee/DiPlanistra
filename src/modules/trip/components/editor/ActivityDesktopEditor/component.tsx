import React from 'react'

import BaseContainer from 'common/components/BaseContainer'
import spaces from 'common/styles/mixins/spaces'

import ActivityEditor from 'modules/trip/components/editor/ActivityEditor'
import ActivityEditorController from 'modules/trip/components/editor/ActivityEditorController'

import { EditorBlock } from './styled'

const ActivityDesktopEditorComponent = () => {
	return (
		<EditorBlock>
			<BaseContainer $padding={`${spaces(12)} ${spaces(16)}`}>
				<ActivityEditor />
			</BaseContainer>
			<ActivityEditorController />
		</EditorBlock>
	)
}

export default ActivityDesktopEditorComponent
