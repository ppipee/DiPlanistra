import React from 'react'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray, green } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import usePlannerMode from 'modules/trip/hooks/usePlannerMode'
import { ActivityPlan } from 'modules/trip/types/planner'
import { PlannerMode } from 'modules/trip/types/store'

import ActivityTitle from '../ActivityTitle'

type Props = {
	activityPlan: ActivityPlan
}

const ActivityHeader = ({ activityPlan }: Props) => {
	const plannerMode = usePlannerMode()
	const { isDesktop } = useResponsive()
	const { place, hour, duration, distance } = activityPlan

	return (
		<div>
			<Gap $size={spaces(8)} $responsive $justifyContent="space-between">
				<Gap $size={spaces(8)} $wrap="wrap">
					<Text color={gray[700]} whiteSpace="nowrap" size={fontSizes(18)}>{`${hour.from} - ${hour.to}`}</Text>
					{(isDesktop || plannerMode === PlannerMode.Edit) && <ActivityTitle place={place} />}
				</Gap>
				{plannerMode === PlannerMode.View && (distance || duration) && (
					<Gap $size={spaces(4)} $type="grid">
						{distance && <Text color={green[700]}>{distance}</Text>}
						{duration && <Text color={gray[500]}>{`( ${duration} )`}</Text>}
					</Gap>
				)}
			</Gap>
			{!isDesktop && plannerMode !== PlannerMode.Edit && <ActivityTitle place={place} />}
		</div>
	)
}

export default ActivityHeader
