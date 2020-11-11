import 'dayjs/locale/th'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { LocaleType } from 'core/locale/types'

dayjs.extend(relativeTime)

const DEFAULT_FORMAT = 'D MMM YYYY'

export default function getDateFormat(date: string | Date, locale: LocaleType = 'en', formatter = DEFAULT_FORMAT) {
	dayjs.locale(locale)

	return dayjs(date).format(formatter)
}
