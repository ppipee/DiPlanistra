import { range } from 'lodash'

import { Hour } from 'modules/place/types/place'

export default function mappingWorkingHours(hours: Hour[]) {
	let currentIndex = 0

	const workingHours = range(7).map((day) => {
		if (hours[currentIndex].day !== day) {
			return null
		}

		currentIndex += 1
		return hours[currentIndex]
	})

	return workingHours
}
