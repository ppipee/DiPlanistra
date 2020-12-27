import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useLocale from 'core/locale/hooks/useLocale'

import { CALENDAR_END_DATE_TITLE, CALENDAR_START_DATE_TITLE } from 'common/components/Calendar/locale'
import BaseDateInput from 'common/components/DateRangePicker/components/BaseDateInput'
import { useDateRangeContext } from 'common/components/DateRangePicker/context'
import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { DateInputWrapper } from './styled'

const FORMATTER = 'DD/MM/YYYY'
const INPUT_WIDTH = '136px'

const RangePickerPanelHeader = () => {
	const I18n = useI18n()
	const locale = useLocale()
	const {
		date: { startDate, endDate },
	} = useDateRangeContext()

	const displayStartDate = startDate ? getDateTimeFormat(startDate, locale, FORMATTER) : ''
	const displayEndDate = endDate ? getDateTimeFormat(endDate, locale, FORMATTER) : ''

	return (
		<Gap $size={spaces(8)}>
			<DateInputWrapper>
				<BaseDateInput value={displayStartDate} label={I18n.t(CALENDAR_START_DATE_TITLE)} $width={INPUT_WIDTH} />
			</DateInputWrapper>
			<DateInputWrapper>
				<BaseDateInput value={displayEndDate} label={I18n.t(CALENDAR_END_DATE_TITLE)} $width={INPUT_WIDTH} />
			</DateInputWrapper>
		</Gap>
	)
}

export default RangePickerPanelHeader
