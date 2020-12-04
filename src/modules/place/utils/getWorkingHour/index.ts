import { Hour } from 'common/types/wongnai/business'

export default function getWorkingHour(hours: Hour[]) {
	const dayNumber = new Date().getDay()

	if (dayNumber > hours.length) return null

	const currentDay = hours[dayNumber]

	return `${currentDay.from} - ${currentDay.to}`
}
