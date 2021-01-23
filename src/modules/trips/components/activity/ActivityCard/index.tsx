import React from 'react'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import { ActivityPlan } from 'modules/trips/types/planner'

import ActivityController from '../ActivityController'
import ActivityHeader from '../ActivityHeader'
import ActivityMemo from '../ActivityMemo'
import ActivityPlace from '../ActivityPlace'

import { CardContainer } from './styled'

type Props = {
	activityPlan: ActivityPlan
	isEditMode: boolean
}

const ActivityCard = ({ activityPlan, isEditMode }: Props) => {
	return (
		<CardContainer $isEditMode={isEditMode}>
			<Gap $type="vertical" $size={spaces(16)}>
				<Gap $type="vertical" $size={spaces(8)} $responsive>
					<ActivityHeader activityPlan={activityPlan} />
					<ActivityPlace place={activityPlan.place} />
					{activityPlan.memo && <ActivityMemo memo={activityPlan.memo} />}
				</Gap>
				<ActivityController activityPlan={activityPlan} />
			</Gap>
		</CardContainer>
	)
}

export default ActivityCard
