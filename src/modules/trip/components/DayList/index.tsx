import React, { ComponentType } from 'react'

import { isEmpty } from 'lodash'

import Collapse from 'common/components/animation/Collapse'
import BaseContainer from 'common/components/BaseContainer'
import Gap from 'common/components/Gap'
import useToggle from 'common/hooks/useToggle'
import spaces from 'common/styles/mixins/spaces'

import { PlannerState } from 'modules/trip/constants'
import usePlannerActivities from 'modules/trip/hooks/usePlannerActivities'
import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'
import { PlannerInfo } from 'modules/trip/types/planner'
import { PlannerMode } from 'modules/trip/types/store'

import ActivityCard from '../activity/ActivityCard'
import ActivityEmpty from '../activity/ActivityEmpty'
import AddPlaceButton from '../AddPlaceButton'
import DayHeader from '../DayHeader'

import { ViewerContainer, EditorContainer } from './styled'

type Props = {
	planner: PlannerInfo
}

const DayList = ({ planner }: Props) => {
	const activities = usePlannerActivities(planner.day)
	const { setPlannerDay, plannerDay, mode, state } = usePlannerStore((store) => ({
		plannerDay: store.plannerDay,
		mode: store.mode,
		setPlannerDay: store.setPlannerDay,
		state: store.planner.state,
	}))

	const { isOpen, toggle } = useToggle()

	const isEditMode = mode === PlannerMode.Edit

	const [shouldShowPlanner, setOpen] = isEditMode
		? [plannerDay === planner.day, () => setPlannerDay(planner.day)]
		: [isOpen, toggle]

	const ActivityCardsContainer = (isEditMode ? EditorContainer : ViewerContainer) as ComponentType

	if (isEmpty(planner.activities) && state === PlannerState.Travel) {
		return null
	}

	return (
		<Gap $type="vertical" $size={spaces(16)}>
			<DayHeader
				isEditMode={isEditMode}
				onClick={setOpen}
				isOpen={shouldShowPlanner}
				day={planner.day}
				title={planner.title}
			/>
			{shouldShowPlanner && (
				<Collapse>
					{!isEmpty(activities) ? (
						<BaseContainer $padding={`0 ${spaces(16)}`} $paddingMobile={`0 ${spaces(8)}`}>
							<ActivityCardsContainer>
								{activities.map((activity) => (
									<ActivityCard isEditMode={isEditMode} activityPlan={activity} key={activity.id} />
								))}
								{isEditMode && (
									<div>
										<AddPlaceButton />
									</div>
								)}
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
