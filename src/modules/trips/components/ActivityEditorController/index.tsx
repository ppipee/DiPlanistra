import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { LOCALE_CANCEL, LOCALE_SAVE } from 'common/locale'
import { green } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import useUpdateActivity from 'modules/trips/hooks/useUpdateActivity'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'

const ActivityEditorController = () => {
	const { isDesktop } = useResponsive()
	const { saveActivity } = useUpdateActivity()
	const resetActivity = useActivityStore((store) => store.resetActivityStore)

	const I18n = useI18n()

	const buttonColor = isDesktop ? green[500] : green[700]

	return (
		<Gap $size={spaces(8)} $responsive>
			<Button $variant="outlined" $color={buttonColor} onClick={resetActivity}>
				{I18n.t(LOCALE_CANCEL)}
			</Button>
			<Button $responsive $color={buttonColor} $secondaryColor={green[600]} onClick={saveActivity}>
				{I18n.t(LOCALE_SAVE)}
			</Button>
		</Gap>
	)
}

export default ActivityEditorController
