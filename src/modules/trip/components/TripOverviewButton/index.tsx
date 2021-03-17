import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { green, main } from 'common/styles/colors'

import useUpdatePlannerState from 'modules/trip/hooks/useUpdatePlannerState'

import { LOCALE_SEE_TRIP } from './locale'

const TripOverviewButton = () => {
	const I18n = useI18n()
	const { moveToTravelState } = useUpdatePlannerState()

	return (
		<Button
			$color={main[500]}
			$secondaryColor={green[500]}
			$size="default"
			$responsive
			$shadow={false}
			onClick={moveToTravelState}
		>
			{I18n.t(LOCALE_SEE_TRIP)}
		</Button>
	)
}

export default TripOverviewButton
