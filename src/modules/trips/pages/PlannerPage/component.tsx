import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import { Params } from 'core/router/types'

import Block from 'common/components/Block'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import ActivityDesktopEditor from 'modules/trips/components/editor/ActivityDesktopEditor'
import ActivityMobileEditor from 'modules/trips/components/editor/ActivityMobileEditor'
import PlannerCover from 'modules/trips/components/PlannerCover'
import PlannerList from 'modules/trips/components/PlannerList'
import DesktopPlannerSettingComponent from 'modules/trips/components/setting/DesktopPlannerSetting/component'
import MobilePlannerSetting from 'modules/trips/components/setting/MobilePlannerSetting'
import TripOverviewButton from 'modules/trips/components/TripOverviewButton'
import ActivityStoreConfig from 'modules/trips/stores/ActivityStore'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import PlannerApiStoreConfig from 'modules/trips/stores/PlannerApiStore'
import { usePlannerApiStore } from 'modules/trips/stores/PlannerApiStore/context'
import PlannerSettingStoreConfig from 'modules/trips/stores/PlannerSettingStore'
import { usePlannerSettingStore } from 'modules/trips/stores/PlannerSettingStore/context'
import PlannerStoreConfig from 'modules/trips/stores/PlannerStore'

import { MainContainer, SubContainer, ButtonContainer } from './styled'

const PlannerPageComponent = () => {
	const { isDesktop } = useResponsive()
	const { plannerId } = useParams<Params>()
	const showActivityEditor = useActivityStore((store) => store.showActivityEditor)
	const isOpenSetting = usePlannerSettingStore((store) => store.isOpenSetting)
	const { isLoading, isFresh, getPlanner } = usePlannerApiStore((store) => ({
		isLoading: store.isLoading,
		isFresh: store.isFresh,
		getPlanner: store.getPlanner,
	}))

	useEffect(() => {
		getPlanner(plannerId)
	}, [])

	if (isLoading || isFresh) return null
	return (
		<>
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
									{showActivityEditor && <ActivityDesktopEditor />}
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
			{!isDesktop && showActivityEditor && <ActivityMobileEditor />}
			{!isDesktop && isOpenSetting && <MobilePlannerSetting />}
			{isDesktop && isOpenSetting && <DesktopPlannerSettingComponent />}
		</>
	)
}

export default withAuth(
	asRoute(PlannerPageComponent, {
		stores: {
			plannerApiStore: PlannerApiStoreConfig,
			plannerStore: PlannerStoreConfig,
			activityStore: ActivityStoreConfig,
			plannerSettingStore: PlannerSettingStoreConfig,
			favoritePlaceStore: FavoritePlaceStoreConfig,
		},
	}),
)
