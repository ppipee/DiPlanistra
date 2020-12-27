import getFilledDaysInMonth from '.'

describe('getFilledDaysInMonth', () => {
	it('should return filled week in month', () => {
		const dates = getFilledDaysInMonth({ year: 2020, month: 11 })
		expect(dates).toMatchSnapshot()
	})

	it('should return fitted week in month', () => {
		const dates = getFilledDaysInMonth({ year: 2015, month: 1 })
		expect(dates).toMatchSnapshot()
	})
})
