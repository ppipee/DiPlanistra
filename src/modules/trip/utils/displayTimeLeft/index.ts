import { DAY_MS, HOUR_MS, MINUTE_MS, SEC_MS } from 'common/utils/datetime/constants'

export default function displayTimeLeft(time: number) {
	const hoursMillisecond = time % DAY_MS
	const minuteMillisecond = hoursMillisecond % HOUR_MS
	const secondMillisecond = minuteMillisecond % MINUTE_MS

	const days = Math.floor(time / DAY_MS)
	const hours = Math.floor(hoursMillisecond / HOUR_MS)
	const minutes = Math.floor(minuteMillisecond / MINUTE_MS)
	const secs = Math.floor(secondMillisecond / SEC_MS)

	return { days, hours, minutes, secs }
}
