import 'dayjs/locale/th'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Locale, LocaleType } from 'core/locale/types'

dayjs.extend(relativeTime)

const DEFAULT_FORMAT = 'D MMM YYYY, HH.MM'

export default function getDateTimeFormat(
	date: dayjs.ConfigType,
	locale: LocaleType = Locale.th,
	format = DEFAULT_FORMAT,
) {
	dayjs.locale(locale)
	return dayjs(date).format(format)
}
