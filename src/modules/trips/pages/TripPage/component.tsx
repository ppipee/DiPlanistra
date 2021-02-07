import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import { BackgroundPage } from 'common/components/BackgroundPage'
import BaseContainer from 'common/components/BaseContainer'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import { main, green } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import PlannerList from 'modules/trips/components/PlannerList'
import TripHeader from 'modules/trips/components/TripHeader'
import ActivityStoreConfig from 'modules/trips/stores/ActivityStore'
import PlannerApiStoreConfig from 'modules/trips/stores/PlannerApiStore'
import PlannerStoreConfig from 'modules/trips/stores/PlannerStore'
import TripStoreConfig from 'modules/trips/stores/TripStore'

const TripPageComponent = () => {
	return (
		<>
			<BackgroundPage $background={`linear-gradient(180deg, ${main[500]} 11.3%, ${green[500]} 100%)`} />
			<ContentContainer>
				<BaseContainer $padding={`0 ${spaces(32)} ${spaces(64)}`} $paddingMobile={`0 ${spaces(16)} ${spaces(32)}`}>
					<Gap $type="vertical" $size={spaces(32)}>
						<TripHeader />
						<PlannerList />
					</Gap>
				</BaseContainer>
			</ContentContainer>
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
