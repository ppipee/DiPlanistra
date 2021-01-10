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

enum ActionState {
	Update = 'update',
	Delete = 'delete',
	None = '',
}

const DayCardController = ({ day, dayTitle, isEditMode, setEditMode, setViewMode }: Props) => {
	const [state, setState] = useState<ActionState>(ActionState.None)
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
		setState(ActionState.Delete)
		setEditMode()
	}, [])

	const onEdit = useCallback(() => {
		setState(ActionState.Update)
		setEditMode()
	}, [])

	const onAction = useCallback(async () => {
		if (state === ActionState.Delete) {
			await deleteDay(day)
		} else if (state === ActionState.Update) {
			await updateDay(day, dayTitle)
		}

		setViewMode()
		setState(ActionState.None)
	}, [state, day, dayTitle])

	if (isEditMode) {
		return (
			<Gap $size={spaces(4)}>
				<div onClick={onAction}>
					<CorrectIcon {...iconProps} />
				</div>
				<div onClick={setViewMode}>
					<CloseIcon {...iconProps} />
				</div>
			</Gap>
		)
	}

	return (
		<Gap $size={spaces(4)}>
			<div onClick={onEdit}>
				<EditIcon {...iconProps} />
			</div>
			<div onClick={onDelete}>
				<DeleteIcon {...iconProps} onClick={onDelete} />
			</div>
		</Gap>
	)
}

export default DayCardController
