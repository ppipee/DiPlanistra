import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { green, main } from 'common/styles/colors'

import { LOCALE_SEE_TRIP } from './locale'

const TripOverviewButton = () => {
	const I18n = useI18n()

	return (
		<Button $color={main[500]} $secondaryColor={green[500]} $size="default" $responsive $shadow={false}>
			{I18n.t(LOCALE_SEE_TRIP)}
		</Button>
	)
}

export default TripOverviewButton
