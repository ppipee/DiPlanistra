import React from 'react'

import Block from 'common/components/Block'
import ClickableIcon from 'common/components/ClickableIcon'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import CloseIcon from 'common/components/icons/CloseIcon'
import ModalOverlay from 'common/components/modal/ModalOverlay'
import ModalTemplate from 'common/components/modal/ModalTemplate'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import useSwitchPlannerSetting from 'modules/trip/hooks/useSwitchPlannerSetting'

import DayPlannerEditor from '../DayPlannerEditor'
import PlannerInfoEditor from '../PlannerInfoEditor'

import { DayEditorWrapper } from './styled'

const ICON_SIZE = 24

const DesktopPlannerSettingComponent = () => {
	const { closeSetting } = useSwitchPlannerSetting()

	return (
		<>
			<ModalTemplate $width="auto">
				<Block $padding={spaces(16)}>
					<Flex $justifyContent="flex-end">
						<ClickableIcon icon={CloseIcon} size={ICON_SIZE} color={gray[900]} onClick={closeSetting} />
					</Flex>
					<Gap $size={spaces(20)} $alignItems="stretch">
						<PlannerInfoEditor />
						<DayEditorWrapper>
							<DayPlannerEditor />
						</DayEditorWrapper>
					</Gap>
				</Block>
			</ModalTemplate>
			<ModalOverlay isOpen />
		</>
	)
}

export default DesktopPlannerSettingComponent
