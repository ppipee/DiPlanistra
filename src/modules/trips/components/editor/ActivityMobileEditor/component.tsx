import React from 'react'

import BaseContainer from 'common/components/BaseContainer'
import CoverBackground from 'common/components/CoverBackground'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ArrowIcon from 'common/components/icons/ArrowIcon'
import Position from 'common/components/Position'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'

import ActivityEditor from '../ActivityEditor'
import ActivityEditorController from '../ActivityEditorController'

import { EditorContainer, ArrowWrapper } from './styled'

const ICON_SIZE = 32

const ActivityMobileEditorComponent = () => {
	const back = useActivityStore((store) => store.resetActivityStore)

	return (
		<Position $position="fixed" $scale="full" $withNav $zIndex={ZIndexes.NormalPriorityModal}>
			<Flex $direction="column" $responsive $alignItems="stretch">
				<CoverBackground>
					<BaseContainer $padding={spaces(12)}>
						<Flex $direction="column" $justifyContent="space-between" $responsive>
							<ArrowWrapper>
								<ArrowIcon size={ICON_SIZE} color={white} cursor="pointer" onClick={back} />
							</ArrowWrapper>
						</Flex>
					</BaseContainer>
				</CoverBackground>
				<EditorContainer $justifyContent="space-between" $direction="column" $grow="1" $alignItems="stretch">
					<Gap $padding={spaces(16)} $size={spaces(12)} $responsive>
						<ActivityEditor />
					</Gap>
					<ActivityEditorController />
				</EditorContainer>
			</Flex>
		</Position>
	)
}

export default ActivityMobileEditorComponent
