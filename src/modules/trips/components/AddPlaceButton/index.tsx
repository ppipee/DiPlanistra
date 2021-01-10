import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { main } from 'common/styles/colors'

import useSetActivityMode from 'modules/trips/hooks/useSetActivityMode'

import { ADD_PLACE_TEXT } from './locale'

const AddPlaceButton = () => {
	const I18n = useI18n()
	const { setCreatorMode } = useSetActivityMode()

	return (
		<Button $color={main[300]} onClick={setCreatorMode} $responsive $border="curve">
			<span>{I18n.t(ADD_PLACE_TEXT)}</span>
		</Button>
	)
}

export default AddPlaceButton
