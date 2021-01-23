import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import BaseContainer from 'common/components/BaseContainer'
import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import PlannerList from 'modules/trips/components/PlannerList'
import TripHeader from 'modules/trips/components/TripHeader'
import ActivityStoreConfig from 'modules/trips/stores/ActivityStore'
import PlannerApiStoreConfig from 'modules/trips/stores/PlannerApiStore'
import PlannerStoreConfig from 'modules/trips/stores/PlannerStore'
import TripStoreConfig from 'modules/trips/stores/TripStore'

import { Background } from './styled'

const TripPageComponent = () => {
	return (
		<Background>
			<ContentContainer>
				<BaseContainer $padding={`0 ${spaces(32)} ${spaces(64)}`} $paddingMobile={`0 ${spaces(16)} ${spaces(32)}`}>
					<Gap $type="vertical" $size={spaces(32)}>
						<TripHeader />
						<PlannerList />
					</Gap>
				</BaseContainer>
			</ContentContainer>
		</Background>
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
