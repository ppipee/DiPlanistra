import shiftToValidDateRange from '.'

const TODAY = new Date(2020, 11, 2)
const LAST_MONTH = new Date(2020, 10, 2)

describe('shiftToValidDateRange', () => {
	const isDateSelectable = jest.fn()

	describe('date', () => {
		it('should return defined date if date already valid', () => {
			isDateSelectable.mockReturnValue(true)
			const { startDate, endDate } = shiftToValidDateRange(
				{ type: 'date', startDate: LAST_MONTH, endDate: TODAY },
				isDateSelectable,
			)
			expect(startDate).toEqual(LAST_MONTH)
			expect(endDate).toEqual(TODAY)
		})

		it('should return shifting date until date valid', () => {
			const startDate = new Date(LAST_MONTH)
			const endDate = new Date(TODAY)

			isDateSelectable.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(true)

			const date = shiftToValidDateRange({ type: 'date', startDate, endDate }, isDateSelectable)

			const shiftStartDate = new Date(LAST_MONTH)
			const shiftEndDate = new Date(TODAY)
			shiftStartDate.setDate(shiftStartDate.getDate() - 2)
			shiftEndDate.setDate(shiftEndDate.getDate() - 2)

			expect(date.startDate).toEqual(shiftStartDate)
			expect(date.endDate).toEqual(shiftEndDate)
		})

		it('should return empty object date if exceed bound', () => {
			const startDate = new Date(LAST_MONTH)
			const endDate = new Date(TODAY)

			isDateSelectable.mockReturnValue(false)

			const date = shiftToValidDateRange({ type: 'date', startDate, endDate }, isDateSelectable)

			expect(date.startDate).toBeUndefined()
			expect(date.endDate).toBeUndefined()
		})
	})

	describe('month', () => {
		it('should return defined date if date already valid', () => {
			isDateSelectable.mockReturnValue(true)
			const { startDate, endDate } = shiftToValidDateRange(
				{ type: 'month', startDate: LAST_MONTH, endDate: TODAY },
				isDateSelectable,
			)
			expect(startDate).toEqual(LAST_MONTH)
			expect(endDate).toEqual(TODAY)
		})

		it('should return shifting end date until date valid', () => {
			const startDate = new Date(LAST_MONTH)
			const endDate = new Date(TODAY)
			isDateSelectable.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(true)

			const date = shiftToValidDateRange({ type: 'month', startDate, endDate }, isDateSelectable)

			const shiftedEndDate = new Date(TODAY)
			shiftedEndDate.setDate(shiftedEndDate.getDate() - 2)

			expect(date.startDate).toEqual(startDate)
			expect(date.endDate).toEqual(shiftedEndDate)
		})

		it('should return empty object date endDate exceed startDate', () => {
			const startDate = new Date(2020, 11, 1)
			const endDate = new Date(2020, 11, 3)

			isDateSelectable
				.mockReturnValueOnce(false)
				.mockReturnValueOnce(false)
				.mockReturnValueOnce(false)
				.mockReturnValueOnce(true)

			const date = shiftToValidDateRange({ type: 'month', startDate, endDate }, isDateSelectable)

			expect(date.startDate).toBeUndefined()
			expect(date.endDate).toBeUndefined()
		})

		it('should return empty object date if exceed bound', () => {
			const startDate = new Date(LAST_MONTH)
			const endDate = new Date(TODAY)

			isDateSelectable.mockReturnValue(false)

			const date = shiftToValidDateRange({ type: 'month', startDate, endDate }, isDateSelectable)

			expect(date.startDate).toBeUndefined()
			expect(date.endDate).toBeUndefined()
		})
	})
})
