import React, { HTMLAttributes, useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { LOCALE_CANCEL, LOCALE_SAVE, LOCALE_ADD } from 'common/locale'
import { main } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import useSetActivityMode from 'modules/trip/hooks/useSetActivityMode'
import useUpdateActivity from 'modules/trip/hooks/useUpdateActivity'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { EditorMode } from 'modules/trip/types/store'

import { ButtonContainer } from './styled'

type Props = HTMLAttributes<HTMLDivElement>

const ActivityEditorController = (props: Props) => {
	const I18n = useI18n()
	const { saveActivity } = useUpdateActivity()
	const { resetActivity, activityMode } = useActivityStore((store) => ({
		resetActivity: store.resetActivityStore,
		activityMode: store.mode,
	}))

	const { setViewerMode } = useSetActivityMode()

	const onSave = useCallback(async () => {
		const success = await saveActivity()

		if (success) {
			setViewerMode()
		}
	}, [])

	return (
		<ButtonContainer {...props}>
			<Gap $size={spaces(8)} $padding={spaces(8)} $responsive>
				<Button $variant="outlined" $color={main[500]} onClick={resetActivity}>
					{I18n.t(LOCALE_CANCEL)}
				</Button>
				<Button $responsive $color={main[500]} onClick={onSave}>
					{I18n.t(activityMode === EditorMode.Create ? LOCALE_ADD : LOCALE_SAVE)}
				</Button>
			</Gap>
		</ButtonContainer>
	)
}

export default ActivityEditorController
