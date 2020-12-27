import { DAY_MS } from 'common/utils/datetime/constants'

export function navigateMonth(date: Date, range: number) {
	const navigatedMonth = new Date(date)
	navigatedMonth.setMonth(date.getMonth() + range)

	if (navigatedMonth.getDate() < date.getDate()) {
		navigatedMonth.setDate(1 - navigatedMonth.getDate())
	}

	return navigatedMonth
}

export function navigateDate(date: Date, range: number) {
	const dateMS = Number(date) + range * DAY_MS

	return new Date(dateMS)
}
