import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import { BackgroundPage } from 'common/components/BackgroundPage'
import BaseContainer from 'common/components/BaseContainer'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import { green, main, white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import PlannerList from 'modules/trip/components/PlannerList'
import TripHeader from 'modules/trip/components/TripHeader'
import ActivityStoreConfig from 'modules/trip/stores/ActivityStore'
import PlannerApiStoreConfig from 'modules/trip/stores/PlannerApiStore'
import { usePlannerApiStore } from 'modules/trip/stores/PlannerApiStore/context'
import PlannerStoreConfig from 'modules/trip/stores/PlannerStore'
import TripStoreConfig from 'modules/trip/stores/TripStore'

const TripPageComponent = () => {
	const { isLoading, isPlannerUpdating } = usePlannerApiStore((store) => ({
		isLoading: store.isLoading || store.isFresh,
		isPlannerUpdating: store.isActionLoading['updatePlanner'],
	}))

	const isModalLoading = isPlannerUpdating

	if (isLoading) return null

	return (
		<>
			<div>
				<BackgroundPage
					$footerColor={white}
					$background={`linear-gradient(180deg, ${main[500]} 11.3%, ${green[500]} 100%);`}
				/>
				<ContentContainer>
					<BaseContainer $padding={`0 ${spaces(32)} ${spaces(64)}`} $paddingMobile={`0 ${spaces(16)} ${spaces(32)}`}>
						<Gap $type="vertical" $size={spaces(32)}>
							<TripHeader />
							<PlannerList />
						</Gap>
					</BaseContainer>
				</ContentContainer>
			</div>
			{isModalLoading && <LoadingModal />}
		</>
	)
}

export default asRoute(TripPageComponent, {
	stores: {
		plannerApiStore: PlannerApiStoreConfig,
		plannerStore: PlannerStoreConfig,
		activityStore: ActivityStoreConfig,
		tripStore: TripStoreConfig,
	},
})
