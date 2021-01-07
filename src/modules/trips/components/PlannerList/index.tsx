import React from 'react'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import usePlannerList from 'modules/trips/hooks/usePlannerInfo'

import DayList from '../DayList'

const PlannerList = () => {
	const planners = usePlannerList()

	return (
		<Gap $type="vertical" $size={spaces(16)}>
			{planners.map((plannerInfo) => (
				<DayList planner={plannerInfo} key={`planner-day-${plannerInfo.day}`} />
			))}
		</Gap>
	)
}

export default PlannerList
