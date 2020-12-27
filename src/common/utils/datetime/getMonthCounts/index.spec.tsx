import getMonthCounts from '.'

describe('getMonthCounts', () => {
	it('should calculate months correctly', () => {
		expect(getMonthCounts({ month: 8, year: 2020 })).toEqual(24248)
		expect(getMonthCounts({ month: 7, year: 2020 })).toEqual(24247)
		expect(getMonthCounts({ month: 7, year: 2021 })).toEqual(24259)
	})
})
