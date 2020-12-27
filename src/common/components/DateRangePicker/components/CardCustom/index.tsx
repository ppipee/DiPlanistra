import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import { PICKER_CUSTOM_INDEX } from 'common/components/DateRangePicker/constants'
import { useDateRangeContext } from 'common/components/DateRangePicker/context'
import { CUSTOM_PICKER } from 'common/components/DateRangePicker/locale'

import { CardCustomControl } from './styled'

const CardCustom = () => {
	const { date, controllerIndex } = useDateRangeContext()
	const I18n = useI18n()

	const isActive = !!(date.startDate || date.endDate) && PICKER_CUSTOM_INDEX === controllerIndex

	return (
		<CardCustomControl className="heading4" $isSelected={isActive}>
			{I18n.t(CUSTOM_PICKER)}
		</CardCustomControl>
	)
}

export default CardCustom
