import getNextMonthDaysCalendar from '.'

describe('getNextMonthDaysCalendar', () => {
	it('should return next month days if end date not on end of week', () => {
		const dates = getNextMonthDaysCalendar({ year: 2020, month: 11 })
		expect(dates).toEqual([1, 2])
	})

	it('should return empty days if end date is on end of week', () => {
		const dates = getNextMonthDaysCalendar({ year: 2020, month: 9 })
		expect(dates).toEqual([])
	})
})
