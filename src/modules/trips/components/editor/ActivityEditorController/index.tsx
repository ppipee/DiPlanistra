import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { LOCALE_CANCEL, LOCALE_SAVE } from 'common/locale'
import { main } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import useSetActivityMode from 'modules/trips/hooks/useSetActivityMode'
import useUpdateActivity from 'modules/trips/hooks/useUpdateActivity'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'

import { ButtonContainer } from './styled'

const ActivityEditorController = () => {
	const I18n = useI18n()
	const { saveActivity } = useUpdateActivity()
	const resetActivity = useActivityStore((store) => store.resetActivityStore)
	const { setViewerMode } = useSetActivityMode()

	const onSave = useCallback(async () => {
		await saveActivity()
		setViewerMode()
	}, [])

	return (
		<ButtonContainer>
			<Gap $size={spaces(8)} $padding={spaces(8)} $responsive>
				<Button $variant="outlined" $color={main[500]} onClick={resetActivity}>
					{I18n.t(LOCALE_CANCEL)}
				</Button>
				<Button $responsive $color={main[500]} onClick={onSave}>
					{I18n.t(LOCALE_SAVE)}
				</Button>
			</Gap>
		</ButtonContainer>
	)
}

export default ActivityEditorController
