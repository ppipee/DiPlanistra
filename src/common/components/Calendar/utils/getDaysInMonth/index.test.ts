import range from 'lodash/range'

import getDaysInMonth from '.'

describe('getDaysInMonth', () => {
	it('should return days of month correctly', () => {
		expect(getDaysInMonth({ year: 2020, month: 0 })).toEqual(range(1, 32))
		expect(getDaysInMonth({ year: 2020, month: 1 })).toEqual(range(1, 30))
		expect(getDaysInMonth({ year: 2020, month: 8 })).toEqual(range(1, 31))
		expect(getDaysInMonth({ year: 2021, month: 1 })).toEqual(range(1, 29))
	})
})
