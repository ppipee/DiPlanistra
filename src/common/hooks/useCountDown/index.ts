import { useState } from 'react'

import differentTime from 'common/utils/datetime/differentTime'

const SECOND = 1000

export default function useCountDown(start: Date) {
	const currentTime = new Date()
	const time = differentTime(currentTime, start)
	const [timeLeft, setTime] = useState(time)

	setTimeout(() => {
		if (timeLeft <= 0) return

		setTime(timeLeft - SECOND)
	}, SECOND)

	return timeLeft
}
