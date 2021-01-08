import React, { useCallback, useState } from 'react'

import Gap from 'common/components/Gap'
import CloseIcon from 'common/components/icons/CloseIcon'
import CorrectIcon from 'common/components/icons/CorrectIcon'
import DeleteIcon from 'common/components/icons/DeleteIcon'
import EditIcon from 'common/components/icons/EditIcon'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import { usePlannerSettingStore } from 'modules/trips/stores/PlannerSettingStore/context'

type Props = {
	day: number
	dayTitle: string
	isEditMode?: boolean
	setEditMode: () => void
	setViewMode: () => void
}

const ICON_SIZE = 24

const DayCardController = ({ day, dayTitle, isEditMode, setEditMode, setViewMode }: Props) => {
	const [action, setAction] = useState<() => void>()
	const { updateDay, deleteDay } = usePlannerSettingStore((store) => ({
		updateDay: store.updateDay,
		deleteDay: store.deleteDay,
	}))

	const iconProps = {
		color: gray[700],
		size: ICON_SIZE,
		cursor: 'pointer',
	}

	const onDelete = useCallback(() => {
		setAction(() => deleteDay(day))
		setEditMode()
	}, [day])

	const onEdit = useCallback(() => {
		setAction(() => updateDay(day, dayTitle))
		setEditMode()
	}, [day, dayTitle])

	if (isEditMode) {
		return (
			<Gap $size={spaces(4)}>
				<CorrectIcon {...iconProps} onClick={action} />
				<CloseIcon {...iconProps} onClick={setViewMode} />
			</Gap>
		)
	}

	return (
		<Gap $size={spaces(4)}>
			<EditIcon {...iconProps} onClick={onEdit} />
			<DeleteIcon {...iconProps} onClick={onDelete} />
		</Gap>
	)
}

export default DayCardController
