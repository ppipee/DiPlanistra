import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import DeleteIcon from 'common/components/icons/DeleteIcon'
import { red } from 'common/styles/colors'

import useDeleteActivity from 'modules/trips/hooks/useDeleteActivity'
import useSetActivityMode from 'modules/trips/hooks/useSetActivityMode'

import { LOCALE_REMOVE } from './locale'
import { Button } from './styled'

const ICON_SIZE = 16

const DeletePlaceButton = () => {
	const I18n = useI18n()
	const { deleteActivity } = useDeleteActivity()
	const { setViewerMode } = useSetActivityMode()

	const onDelete = useCallback(async () => {
		await deleteActivity()
		setViewerMode()
	}, [])

	return (
		<Button $size="small" $color={red[500]} $border="curve" $shadow={false} onClick={onDelete}>
			<DeleteIcon size={ICON_SIZE} />
			<span>{I18n.t(LOCALE_REMOVE)}</span>
		</Button>
	)
}

export default DeletePlaceButton
