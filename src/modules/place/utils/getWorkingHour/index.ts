import { isEmpty } from 'lodash'

import { Hour } from 'modules/place/types/place'

export default function getWorkingHour(hours: Hour[]) {
	const dayNumber = new Date().getDay()
	const currentDay = hours[dayNumber]

	if (isEmpty(hours) || dayNumber > hours.length || currentDay === undefined) return null

	return `${currentDay.from} - ${currentDay.to}`
}
