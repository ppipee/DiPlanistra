import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import { Params } from 'core/router/types'

import Block from 'common/components/Block'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import FavoriteStoreConfig from 'modules/place/stores/FavoriteStore'
import ActivityDesktopEditor from 'modules/trip/components/editor/ActivityDesktopEditor'
import ActivityMobileEditor from 'modules/trip/components/editor/ActivityMobileEditor'
import PlannerBottomBar from 'modules/trip/components/PlannerBottomBar'
import PlannerCover from 'modules/trip/components/PlannerCover'
import PlannerList from 'modules/trip/components/PlannerList'
import DesktopPlannerSettingComponent from 'modules/trip/components/setting/DesktopPlannerSetting/component'
import MobilePlannerSetting from 'modules/trip/components/setting/MobilePlannerSetting'
import TripOverviewButton from 'modules/trip/components/TripOverviewButton'
import useAnalyzePlannerState from 'modules/trip/hooks/useAnalyzePlannerState'
import useDeleteActivity from 'modules/trip/hooks/useDeleteActivity'
import useErrorPlannerPage from 'modules/trip/hooks/useErrorPlannerPage/index'
import useUpdateActivity from 'modules/trip/hooks/useUpdateActivity'
import useUpdatePlannerState from 'modules/trip/hooks/useUpdatePlannerState'
import ActivityStoreConfig from 'modules/trip/stores/ActivityStore'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import PlannerApiStoreConfig from 'modules/trip/stores/PlannerApiStore'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'
import PlannerSettingStoreConfig from 'modules/trip/stores/PlannerSettingStore'
import { usePlannerSettingStore } from 'modules/trip/stores/PlannerSettingStore/context'
import PlannerStoreConfig from 'modules/trip/stores/PlannerStore'

import { MainContainer, SubContainer, ButtonContainer } from './styled'

const PlannerPageComponent = () => {
	useAnalyzePlannerState()

	const { isDesktop } = useResponsive()
	const { plannerId } = useParams<Params>()

	const showActivityEditor = useActivityStore((store) => store.showActivityEditor)
	const isOpenSetting = usePlannerSettingStore((store) => store.isOpenSetting)

	const { isLoading, isFresh, getPlanner } = usePlannerApiStore((store) => ({
		isLoading: store.isLoading,
		isFresh: store.isFresh,
		getPlanner: store.getPlanner,
	}))

	const error = useErrorPlannerPage()

	const { isLoading: isActivityUpdating } = useUpdateActivity()
	const { isLoading: isActivityDeleting } = useDeleteActivity()
	const { isLoading: isStateUpdating } = useUpdatePlannerState()

	const isModalLoading = isActivityUpdating || isActivityDeleting || isStateUpdating

	useEffect(() => {
		getPlanner(plannerId)
	}, [])

	if (error) return <ErrorPage errorMessage={error?.message} />
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
									{showActivityEditor ? (
										<ActivityDesktopEditor />
									) : (
										<Block>
											<ButtonContainer $padding={spaces(8)}>
												<TripOverviewButton />
											</ButtonContainer>
										</Block>
									)}
								</Gap>
							</SubContainer>
						)}
					</Gap>
				</ContentContainer>
			</Gap>
			{!isDesktop && <PlannerBottomBar />}
			{!isDesktop && showActivityEditor && <ActivityMobileEditor />}
			{!isDesktop && isOpenSetting && <MobilePlannerSetting />}
			{isDesktop && isOpenSetting && <DesktopPlannerSettingComponent />}
			{isModalLoading && <LoadingModal />}
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
			favoriteStore: FavoriteStoreConfig,
		},
	}),
)
