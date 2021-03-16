import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'

import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import CountDownCover from 'modules/trip/components/CountDownCover'
import CreatePlanner from 'modules/trip/components/CreatePlanner'
import TripTicketList from 'modules/trip/components/TripTicketList'
import PlannerStoreConfig from 'modules/trip/stores/PlannersStore'
import { usePlannersStore } from 'modules/trip/stores/PlannersStore/context'

import { MainContainer, TabContainer, Container } from './styled'

const PlannersComponent = () => {
	const { isDesktop } = useResponsive()
	const { trips } = usePlannersStore((store) => ({
		trips: store.trips,
	}))
	const isModalLoading = usePlannersStore((store) => store.isActionLoading['createPlanner'])

	return (
		<>
			<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
				{trips && trips[0] && <CountDownCover trip={trips[0]} />}
				<Container>
					<Gap $type={isDesktop ? 'horizontal' : 'vertical'} $size={spaces(24)} $responsive>
						<TabContainer>tabs</TabContainer>
						<MainContainer>
							<Gap $type="vertical" $size={spaces(48)}>
								<TripTicketList />
								<StickyContainer>
									<CreatePlanner />
								</StickyContainer>
							</Gap>
						</MainContainer>
					</Gap>
				</Container>
			</Gap>
			{isModalLoading && <LoadingModal />}
		</>
	)
}

export default withAuth(
	asRoute(PlannersComponent, {
		stores: {
			plannersStore: PlannerStoreConfig,
		},
	}),
)
