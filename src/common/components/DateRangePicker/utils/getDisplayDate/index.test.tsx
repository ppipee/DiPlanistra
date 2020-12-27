import * as GetDisplayDateType from '.'

describe('getDisplayDate', () => {
	const getDateTimeFormatSpy = jest.fn()

	jest.doMock('common/utils/datetime/getDateTimeFormat', () => getDateTimeFormatSpy)

	const { default: getDisplayDate } = require('.') as typeof GetDisplayDateType

	it('should return empty string if startDate or endDate is undefined', () => {
		let displayDate = getDisplayDate({ startDate: undefined, endDate: undefined })
		expect(displayDate).toBe('')

		displayDate = getDisplayDate({ startDate: '01-01-2020', endDate: undefined } as any)
		expect(displayDate).toBe('')
	})

	it('should return displayText with description', () => {
		getDateTimeFormatSpy.mockReturnValueOnce('01/01/2020').mockReturnValueOnce('10/01/2020')

		const displayDate = getDisplayDate({ startDate: '01-01-2020', endDate: '10-01-2020' } as any, '7 วันที่ผ่านมา')
		expect(displayDate).toBe('7 วันที่ผ่านมา (01/01/2020-10/01/2020)')
	})

	it('should return displayText without description', () => {
		getDateTimeFormatSpy.mockReturnValueOnce('01/01/2020').mockReturnValueOnce('10/01/2020')

		const displayDate = getDisplayDate({ startDate: '01-01-2020', endDate: '10-01-2020' } as any)
		expect(displayDate).toBe('01/01/2020-10/01/2020')
	})

	it('should display startDate only if startDate equal endDate', () => {
		getDateTimeFormatSpy.mockReturnValueOnce('01/01/2020').mockReturnValueOnce('01/01/2020')

		const displayDate = getDisplayDate({ startDate: 100, endDate: 100 } as any)
		expect(displayDate).toBe('01/01/2020')
	})
})
