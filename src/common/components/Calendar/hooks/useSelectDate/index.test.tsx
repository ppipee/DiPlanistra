import { renderHook } from '@testing-library/react-hooks'

import * as useSelectDateType from '.'

describe('useSelectDate', () => {
	let mockDate: Date
	const useCalendarContextSpy = jest.fn()
	const setDateSpy = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)

	const { default: useSelectDate } = require('.') as typeof useSelectDateType

	beforeEach(() => {
		mockDate = new Date(2020, 5, 10)
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should set startDate if date in store is undefined', () => {
		useCalendarContextSpy.mockReturnValue({
			setDate: setDateSpy,
			date: {},
		})

		const { result } = renderHook(() => useSelectDate())

		result.current(mockDate)

		expect(setDateSpy).toBeCalledTimes(1)
		expect(setDateSpy).toBeCalledWith({ startDate: new Date(2020, 5, 10) })
	})

	it('should set startDate if endDate is contain in store', () => {
		useCalendarContextSpy.mockReturnValue({
			setDate: setDateSpy,
			date: {
				startDate: new Date(2020, 5, 1),
				endDate: new Date(2020, 5, 6),
			},
		})

		const { result } = renderHook(() => useSelectDate())

		result.current(mockDate)

		expect(setDateSpy).toBeCalledTimes(1)
		expect(setDateSpy).toBeCalledWith({ startDate: new Date(2020, 5, 10) })
	})

	it('should set startDate if selectedDate less than startDate in store', () => {
		useCalendarContextSpy.mockReturnValue({
			setDate: setDateSpy,
			date: {
				startDate: new Date(2020, 5, 20),
			},
		})

		const { result } = renderHook(() => useSelectDate())

		result.current(mockDate)

		expect(setDateSpy).toBeCalledTimes(1)
		expect(setDateSpy).toBeCalledWith({ startDate: new Date(2020, 5, 10) })
	})

	it('should set endDate correctly', () => {
		useCalendarContextSpy.mockReturnValue({
			setDate: setDateSpy,
			date: {
				startDate: new Date(2020, 5, 5),
			},
		})

		const { result } = renderHook(() => useSelectDate())

		result.current(mockDate)

		expect(setDateSpy).toBeCalledTimes(1)
		expect(setDateSpy).toBeCalledWith({
			startDate: new Date(2020, 5, 5),
			endDate: new Date(2020, 5, 10),
		})
	})
})
