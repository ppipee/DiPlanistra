import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { black } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

import AddPlannerDayButton from '../AddPlannerDayButton'
import DayCard from '../DayCard'

import { DAY_PLANNER_TITLE } from './locale'

const DayPlannerEditor = () => {
	const I18n = useI18n()
	const planner = usePlannerStore((store) => store.planner)

	return (
		<Gap $type="vertical" $size={spaces(32)} $alignItems="stretch" $responsive>
			<Gap $type="vertical" $size={spaces(12)}>
				<Text size={fontSizes(20)} weight="bold" color={black}>
					{I18n.t(DAY_PLANNER_TITLE)}
				</Text>
				{planner.planners.map((planner) => (
					<DayCard day={planner.day} title={planner.title} key={`day-planner-editor-${planner.day}`} />
				))}
			</Gap>
			<AddPlannerDayButton />
		</Gap>
	)
}

export default DayPlannerEditor
