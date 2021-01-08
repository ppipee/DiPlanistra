import React from 'react'

import Flex from 'common/components/Flex'
import ArrowIcon from 'common/components/icons/ArrowIcon'
import Position from 'common/components/Position'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import useSwitchPlannerSetting from 'modules/trips/hooks/useSwitchPlannerSetting'

import DayPlannerEditor from '../DayPlannerEditor'
import PlannerInfoEditor from '../PlannerInfoEditor'

import { EditorContainer, ArrowWrapper, NavBar, DayWrapper } from './styled'

const ICON_SIZE = 32

const MobilePlannerSettingComponent = () => {
	const { closeSetting } = useSwitchPlannerSetting()

	return (
		<Position $position="fixed" $scale="full" $zIndex={ZIndexes.NormalPriorityModal}>
			<Flex $direction="column" $responsive $alignItems="stretch">
				<NavBar $padding={spaces(12)}>
					<ArrowWrapper>
						<ArrowIcon size={ICON_SIZE} color={white} cursor="pointer" onClick={closeSetting} />
					</ArrowWrapper>
				</NavBar>
				<EditorContainer $size={spaces(12)} $type="vertical" $alignItems="stretch">
					<ResponsiveBlock $padding={`${spaces(12)} ${spaces(16)}`}>
						<PlannerInfoEditor />
					</ResponsiveBlock>
					<DayWrapper $padding={`${spaces(12)} ${spaces(16)}`}>
						<DayPlannerEditor />
					</DayWrapper>
				</EditorContainer>
			</Flex>
		</Position>
	)
}

export default MobilePlannerSettingComponent
