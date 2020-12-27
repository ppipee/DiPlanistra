import { renderHook } from '@testing-library/react-hooks'

import { CalendarDisplayRange } from 'common/components/Calendar/types'

import * as useNavigateType from '.'

describe('useNavigate', () => {
	const dateRangeShown: CalendarDisplayRange = {}
	const useCalendarContextSpy = jest.fn()
	const setDisplayStateSpy = jest.fn()
	const navigateMonthSpy = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)
	jest.doMock('common/utils/datetime/navigateDateTime', () => ({ navigateMonth: navigateMonthSpy }))

	const { default: useNavigate } = require('.') as typeof useNavigateType

	afterEach(() => {
		jest.resetAllMocks()
	})

	beforeEach(() => {
		useCalendarContextSpy.mockReturnValue({
			displayState: {
				year: 2020,
				month: 5,
			},
			setDisplayState: setDisplayStateSpy,
			dateRangeShown,
		})
	})

	it('should perform setNextMonth correctly', () => {
		navigateMonthSpy.mockReturnValue(new Date(2020, 5, 1))

		const { result } = renderHook(() => useNavigate())

		result.current.setNextMonth()

		expect(navigateMonthSpy).toBeCalledTimes(1)
		expect(setDisplayStateSpy).toBeCalledTimes(1)
		expect(setDisplayStateSpy).toBeCalledWith({
			year: 2020,
			month: 5,
		})
	})

	it('should perform setPrevMonth correctly', () => {
		navigateMonthSpy.mockReturnValue(new Date(2020, 4, 1))

		const { result } = renderHook(() => useNavigate())

		result.current.setPrevMonth()

		expect(navigateMonthSpy).toBeCalledTimes(1)
		expect(setDisplayStateSpy).toBeCalledTimes(1)
		expect(setDisplayStateSpy).toBeCalledWith({
			year: 2020,
			month: 4,
		})
	})

	describe('isNextMonthAvailable', () => {
		it('should always be true if no end range', () => {
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isNextMonthAvailable).toBeTruthy()
		})

		it('should return true if contain range and the range is exceed displayState', () => {
			dateRangeShown.endRange = { year: 2021, month: 5 }
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isNextMonthAvailable).toBeTruthy()

			dateRangeShown.endRange = { year: 2020, month: 6 }
			expect(result.current.isNextMonthAvailable).toBeTruthy()
		})

		it('should return false if contain range but the range is not exceed displayState', () => {
			dateRangeShown.endRange = { year: 2019, month: 5 }
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isNextMonthAvailable).toBeFalsy()

			dateRangeShown.endRange = { year: 2020, month: 5 }
			expect(result.current.isNextMonthAvailable).toBeFalsy()
		})
	})

	describe('isPrevMonthAvailable', () => {
		it('should always be true if no start range', () => {
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isPrevMonthAvailable).toBeTruthy()
		})

		it('should return true if contain range and the displayState is more than range', () => {
			dateRangeShown.startRange = { year: 2019, month: 5 }
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isPrevMonthAvailable).toBeTruthy()

			dateRangeShown.startRange = { year: 2020, month: 4 }
			expect(result.current.isPrevMonthAvailable).toBeTruthy()
		})

		it('should return false if contain range but the displayState is not more than range', () => {
			dateRangeShown.startRange = { year: 2021, month: 5 }
			const { result } = renderHook(() => useNavigate())

			expect(result.current.isPrevMonthAvailable).toBeFalsy()

			dateRangeShown.startRange = { year: 2020, month: 6 }
			expect(result.current.isPrevMonthAvailable).toBeFalsy()
		})
	})
})
