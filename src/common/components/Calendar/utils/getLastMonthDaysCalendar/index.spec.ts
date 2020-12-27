import getLastMonthDaysCalendar from '.'

describe('getLastMonthDaysCalendar', () => {
	it('should return last month days if end date not on first of week', () => {
		const dates = getLastMonthDaysCalendar({ year: 2020, month: 11 })
		expect(dates).toEqual([29, 30])
	})

	it('should return empty days if end date is on first of week', () => {
		const dates = getLastMonthDaysCalendar({ year: 2020, month: 10 })
		expect(dates).toEqual([])
	})
})
