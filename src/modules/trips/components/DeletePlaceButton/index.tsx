import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import DeleteIcon from 'common/components/icons/DeleteIcon'
import { red } from 'common/styles/colors'

import { LOCALE_REMOVE } from './locale'
import { Button } from './styled'

const ICON_SIZE = 16

const DeletePlaceButton = () => {
	const I18n = useI18n()

	return (
		<Button $size="small" $color={red[500]} $border="curve" $shadow={false}>
			<DeleteIcon size={ICON_SIZE} />
			<span>{I18n.t(LOCALE_REMOVE)}</span>
		</Button>
	)
}

export default DeletePlaceButton
