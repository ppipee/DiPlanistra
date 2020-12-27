import { Locale } from 'core/locale/types'

import { CalenderDateProps } from 'common/components/Calendar/types'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

const FORMATTER = 'DD/MM/YY'

export default function getDisplayDate(date: CalenderDateProps, description?: string) {
	if (!date.startDate || !date.endDate) return ''

	const startDate = getDateTimeFormat(date.startDate, Locale.th, FORMATTER)
	const endDate = getDateTimeFormat(date.endDate, Locale.th, FORMATTER)

	const displayDate = Number(date.startDate) !== Number(date.endDate) ? `${startDate}-${endDate}` : startDate

	return description ? `${description} (${displayDate})` : displayDate
}
