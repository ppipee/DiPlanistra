import { PLACE_HIGHLIGHT } from 'common/mocks/placeHighlight'

import getWorkingHour from '.'

describe('getWorkingHour', () => {
	const MOCK_HOURS = PLACE_HIGHLIGHT.hours
	it('should return working hour of current day', () => {
		expect(getWorkingHour(MOCK_HOURS)).toBe('06:00 - 19:00')
	})
})
