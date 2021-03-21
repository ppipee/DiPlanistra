import React from 'react'

import spaces from 'common/styles/mixins/spaces'

import usePlannerList from 'modules/trip/hooks/usePlannerInfo'

import DayList from '../DayList'

import { PlannersContainer } from './styled'

const PlannerList = () => {
	const planners = usePlannerList()

	return (
		<PlannersContainer $type="vertical" $size={spaces(16)}>
			{planners.map((plannerInfo, index) => (
				<DayList planner={plannerInfo} key={`planner-day-${plannerInfo.day}-${index}`} />
			))}
		</PlannersContainer>
	)
}

export default PlannerList
