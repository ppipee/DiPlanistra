import dayjs, { UnitType } from 'dayjs'

export default function differentTime(startTime: Date, endTime: Date, unit: UnitType = 'millisecond') {
	const start = dayjs(startTime)
	const end = dayjs(endTime)

	return end.diff(start, unit)
}
