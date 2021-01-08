import React, { useCallback } from 'react'

import AddIcon from 'common/components/icons/AddIcon'
import { white } from 'common/styles/colors'

import { usePlannerSettingStore } from 'modules/trips/stores/PlannerSettingStore/context'

import { AddPlannerButton } from './styled'

const ICON_SIZE = 48

const AddPlannerDayButton = () => {
	const addDay = usePlannerSettingStore((store) => store.addDay)

	const onAddDay = useCallback(async () => {
		await addDay()
	}, [])

	return (
		<AddPlannerButton $alignItems="center" $justifyContent="center" onClick={onAddDay}>
			<AddIcon color={white} size={ICON_SIZE} />
		</AddPlannerButton>
	)
}

export default AddPlannerDayButton
