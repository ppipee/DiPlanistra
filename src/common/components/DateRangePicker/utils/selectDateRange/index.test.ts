import timemachine from 'timemachine'

import selectDateRange from '.'

describe('selectDateRange', () => {
	const MOCK_DATE = new Date(2020, 1, 1)
	const isDateSelectableSpy = jest.fn()

	beforeEach(() => {
		isDateSelectableSpy.mockReturnValue(true)
		timemachine.config({
			dateString: MOCK_DATE.toDateString(),
		})
	})

	it('should return date with default range if type is date', () => {
		const { startDate, endDate } = selectDateRange({ type: 'date' }, isDateSelectableSpy)

		expect(startDate).toEqual(new Date(2020, 1, 1))
		expect(endDate).toEqual(new Date(2020, 1, 1))
	})

	it('should return date if type is date', () => {
		const { startDate, endDate } = selectDateRange({ type: 'date', startRange: -10, endRange: -1 }, isDateSelectableSpy)

		expect(startDate).toEqual(new Date(2019, 12, 22))
		expect(endDate).toEqual(new Date(2019, 12, 31))
	})

	it('should return date with default range if type is month', () => {
		const { startDate, endDate } = selectDateRange({ type: 'month' }, isDateSelectableSpy)
		expect(startDate).toEqual(new Date(2020, 1, 1))
		expect(endDate).toEqual(new Date(2020, 1, 1))
	})

	it('should return date with shifting if invalid', () => {
		isDateSelectableSpy.mockImplementation((date: Date) => date.getDate() < 27)
		const { startDate, endDate } = selectDateRange({ type: 'date', startRange: -10, endRange: -1 }, isDateSelectableSpy)

		expect(startDate).toEqual(new Date(2020, 0, 17))
		expect(endDate).toEqual(new Date(2020, 0, 26))
	})
})
