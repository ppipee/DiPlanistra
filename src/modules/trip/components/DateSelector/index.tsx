import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import DropDownItem from 'common/components/DropDown/components/DropDownItem'

import { DAY } from 'modules/trip/locale'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'
import { EditorMode } from 'modules/trip/types/store'

import { DropDown } from './styled'

const DateSelector = () => {
	const I18n = useI18n()
	const { planners, plannerDay, setPlannerDay } = usePlannerStore((store) => ({
		planners: store.planner.planners,
		plannerDay: store.plannerDay,
		setPlannerDay: store.setPlannerDay as (day: string | number) => void,
	}))
	const editorMode = useActivityStore((store) => store.mode)

	const dayList = planners.map((planner) => ({ day: planner.day, name: planner.title }))
	const dropdownEnable = editorMode === EditorMode.Create

	return (
		<DropDown
			disabled={!dropdownEnable}
			value={plannerDay}
			onChange={setPlannerDay}
			withOutlined={false}
			variant="small"
		>
			{dayList.map(({ day, name }) => (
				<DropDownItem
					key={`day-${day}`}
					value={day}
					name={`${I18n.t(DAY, { day })}${name ? ` - ${name}` : ''}`}
					center
				/>
			))}
		</DropDown>
	)
}

export default DateSelector
