import React from 'react'

import { isEmpty } from 'lodash'

import Collapse from 'common/components/animation/Collapse'
import BaseContainer from 'common/components/BaseContainer'
import Gap from 'common/components/Gap'
import useToggle from 'common/hooks/useToggle'
import spaces from 'common/styles/mixins/spaces'

import usePlannerActivities from 'modules/trips/hooks/usePlannerActivities'
import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'
import { PlannerInfo } from 'modules/trips/types/planner'
import { PlannerMode } from 'modules/trips/types/store'

import ActivityCard from '../activity/ActivityCard'
import ActivityEmpty from '../activity/ActivityEmpty'
import AddPlaceButton from '../AddPlaceButton'
import DayHeader from '../DayHeader'

import { ActivityCardsContainer } from './styled'

type Props = {
	planner: PlannerInfo
}

const DayList = ({ planner }: Props) => {
	const { setPlannerDay, plannerDay, mode } = usePlannerStore((store) => ({
		plannerDay: store.plannerDay,
		mode: store.mode,
		setPlannerDay: store.setPlannerDay,
	}))
	const activities = usePlannerActivities(planner.day)

	const { isOpen, toggle } = useToggle()

	const [shouldShowPlanner, setOpen] =
		mode === PlannerMode.Edit ? [plannerDay === planner.day, () => setPlannerDay(planner.day)] : [isOpen, toggle]

	return (
		<Gap $type="vertical" $size={spaces(16)}>
			<DayHeader onClick={setOpen} isOpen={shouldShowPlanner} day={planner.day} title={planner.title} />
			{shouldShowPlanner && (
				<Collapse>
					{!isEmpty(activities) ? (
						<BaseContainer $padding={`0 ${spaces(16)}`} $paddingMobile={`0 ${spaces(8)}`}>
							<ActivityCardsContainer
								$padding={`${spaces(16)} ${spaces(16)} ${spaces(20)}`}
								$paddingMobile={`${spaces(12)} ${spaces(12)} ${spaces(20)}`}
								$spacingTop={spaces(16)}
								$spacingBottom={spaces(12)}
							>
								{activities.map((activity) => (
									<ActivityCard activityPlan={activity} key={activity.id} />
								))}
								<div>
									<AddPlaceButton />
								</div>
							</ActivityCardsContainer>
						</BaseContainer>
					) : (
						<BaseContainer $margin="0" $padding={`0 ${spaces(16)}`} $paddingMobile={`0 ${spaces(8)}`}>
							<ActivityEmpty />
						</BaseContainer>
					)}
				</Collapse>
			)}
		</Gap>
	)
}

export default DayList
