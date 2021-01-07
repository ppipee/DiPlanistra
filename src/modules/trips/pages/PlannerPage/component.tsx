import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import BaseContainer from 'common/components/BaseContainer'
import Block from 'common/components/Block'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import ActivityEditor from 'modules/trips/components/ActivityEditor'
import ActivityEditorController from 'modules/trips/components/ActivityEditorController'
import PlannerCover from 'modules/trips/components/PlannerCover'
import PlannerList from 'modules/trips/components/PlannerList'
import TripOverviewButton from 'modules/trips/components/TripOverviewButton'
import ActivityStoreConfig from 'modules/trips/stores/ActivityStore'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import PlannerApiStoreConfig from 'modules/trips/stores/PlannerApiStore'
// import { usePlannerApiStore } from 'modules/trips/stores/PlannerApiStore/context'
import PlannerStoreConfig from 'modules/trips/stores/PlannerStore'

import { MainContainer, SubContainer, ButtonContainer, EditorBlock } from './styled'

const PlannerPageComponent = () => {
	const { isDesktop } = useResponsive()
	const activityIndex = useActivityStore((store) => store.activityIndex)
	// const { isLoading, isFresh } = usePlannerApiStore((store) => ({ isLoading: store.isLoading, isFresh: store.isFresh }))

	// if (isLoading || isFresh) return null
	return (
		<Gap $type="vertical" $size={spaces(24)}>
			<PlannerCover />
			<ContentContainer>
				<Gap $size={spaces(16)} $responsive $alignItems="stretch">
					<MainContainer $padding={`0 ${spaces(32)}`} $paddingMobile={`0 ${spaces(16)}`}>
						<PlannerList />
					</MainContainer>
					{isDesktop && (
						<SubContainer>
							<Gap $size={spaces(16)} $type="vertical" $justifyContent="space-between" $responsive>
								{activityIndex !== -1 && (
									<EditorBlock>
										<BaseContainer $padding={`${spaces(12)} ${spaces(16)}`}>
											<ActivityEditor />
										</BaseContainer>
										<ButtonContainer $padding={spaces(8)}>
											<ActivityEditorController />
										</ButtonContainer>
									</EditorBlock>
								)}
								<Block>
									<ButtonContainer $padding={spaces(8)}>
										<TripOverviewButton />
									</ButtonContainer>
								</Block>
							</Gap>
						</SubContainer>
					)}
				</Gap>
			</ContentContainer>
		</Gap>
	)
}

export default asRoute(PlannerPageComponent, {
	stores: {
		plannerApiStore: PlannerApiStoreConfig,
		plannerStore: PlannerStoreConfig,
		activityStore: ActivityStoreConfig,
	},
})
