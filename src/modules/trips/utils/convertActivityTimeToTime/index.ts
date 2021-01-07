import { isEmpty, isNumber } from 'lodash'

import { ActivityHour } from 'modules/trips/types/planner'

export default function convertActivityHourToTime(activityHour: ActivityHour) {
	let startTime = null
	const [startHour, startMinute] = activityHour.from.split(':')

	if (!isEmpty(activityHour.from) && isNumber(+startHour) && isNumber(+startMinute)) {
		startTime = new Date()
		startTime.setHours(+startHour, +startMinute)
	}

	let endTime = null
	const [endHour, endMinute] = activityHour.to.split(':')

	if (!isEmpty(activityHour.to) && isNumber(+endHour) && isNumber(+endMinute)) {
		endTime = new Date()
		endTime.setHours(+endHour, +endMinute)
	}

	return {
		from: startTime,
		to: endTime,
	}
}
