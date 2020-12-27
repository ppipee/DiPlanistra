import { renderHook } from '@testing-library/react-hooks'
import timemachine from 'timemachine'

import * as UseCellStyleType from '.'

describe('useCellStyle', () => {
	const MOCK_START_DATE = new Date(2020, 1, 1)
	const MOCK_END_DATE = new Date(2020, 1, 5)

	const useCalendarContext = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContext)

	const { default: useCellStyle } = require('.') as typeof UseCellStyleType

	it('should return default value if cellDate is null', () => {
		useCalendarContext.mockReturnValue({
			date: {},
			displayState: {},
		})
		const { result } = renderHook(() => useCellStyle(null, 0))

		expect(result.current).toEqual({
			$inBetween: false,
			$selected: false,
			$variant: 'currentMonth',
			$isFirstCell: false,
			$isLastCell: false,
		})
	})

	describe('getSelectedCellStyle', () => {
		it('should get the true value of selected props if cellDate equal startDate', () => {
			useCalendarContext.mockReturnValue({
				date: {
					startDate: MOCK_START_DATE,
				},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_START_DATE, 0))
			expect(result.current.$selected).toBe(true)
		})

		it('should get the true value of selected props if cellDate equal endDate', () => {
			useCalendarContext.mockReturnValue({
				date: {
					endDate: MOCK_END_DATE,
				},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 0))
			expect(result.current.$selected).toBe(true)
		})
	})

	describe('getInBetweenStyle', () => {
		it('should get the true value of inBetween props if cellDate is between start date and end date', () => {
			useCalendarContext.mockReturnValue({
				date: {
					startDate: MOCK_START_DATE,
					endDate: MOCK_END_DATE,
				},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 0))
			expect(result.current.$inBetween).toBe(true)
		})

		it('should get the true value of inBetween props if cellDate more than or equal start date but less than or equal dateHover and endDate is undefined', () => {
			useCalendarContext.mockReturnValue({
				date: {
					startDate: MOCK_START_DATE,
				},
				dateHover: MOCK_END_DATE,
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 0))
			expect(result.current.$inBetween).toBe(true)
		})
	})

	describe('isFirstCell', () => {
		it('should get the true value of isFirstCell if rowIndex equal zero', () => {
			useCalendarContext.mockReturnValue({
				date: {},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 0))
			expect(result.current.$isFirstCell).toBe(true)
		})

		it('should get the true value of isFirstCell if startDate equal cellDate', () => {
			useCalendarContext.mockReturnValue({
				date: {
					startDate: MOCK_START_DATE,
				},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_START_DATE, 5))
			expect(result.current.$isFirstCell).toBe(true)
		})
	})

	describe('isLastCell', () => {
		it('should get the true value of isLastCell if rowIndex equal six', () => {
			useCalendarContext.mockReturnValue({
				date: {},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 6))
			expect(result.current.$isLastCell).toBe(true)
		})

		it('should get the true value of isLastCell if endDate equal cellDate', () => {
			useCalendarContext.mockReturnValue({
				date: {
					endDate: MOCK_END_DATE,
				},
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 4))
			expect(result.current.$isLastCell).toBe(true)
		})

		it('should get the true value of isLastCell if dateHover equal endDate and cellDate equal endDate ', () => {
			useCalendarContext.mockReturnValue({
				date: {
					endDate: MOCK_END_DATE,
				},
				dateHover: MOCK_END_DATE,
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_END_DATE, 4))
			expect(result.current.$isLastCell).toBe(true)
		})

		it('should get the true value of isLastCell if dateHover equal cellDate but endDate is undefined', () => {
			useCalendarContext.mockReturnValue({
				date: {
					startDate: MOCK_START_DATE,
				},
				dateHover: MOCK_START_DATE,
				displayState: {},
			})

			const { result } = renderHook(() => useCellStyle(MOCK_START_DATE, 4))
			expect(result.current.$isLastCell).toBe(true)
		})
	})

	describe('getVariantStyle', () => {
		beforeEach(() => {
			timemachine.config({
				dateString: MOCK_START_DATE.toDateString(),
			})
		})

		it('should get the variantStyle as current if the cellDate is current date', () => {
			useCalendarContext.mockReturnValue({
				date: {},
				displayState: { month: MOCK_START_DATE.getMonth(), year: MOCK_START_DATE.getFullYear() },
			})

			const { result } = renderHook(() => useCellStyle(MOCK_START_DATE, 4))
			expect(result.current.$variant).toBe('currentDate')
		})

		it('should get the variantStyle as currentMonth if not current date but in current display month', () => {
			useCalendarContext.mockReturnValue({
				date: {},
				displayState: { month: MOCK_START_DATE.getMonth(), year: MOCK_START_DATE.getFullYear() },
			})
			const cellDate = new Date(MOCK_START_DATE)
			cellDate.setDate(MOCK_START_DATE.getDate() + 1)

			const { result } = renderHook(() => useCellStyle(cellDate, 4))
			expect(result.current.$variant).toBe('currentMonth')
		})

		it('should get the variantStyle as otherMonth if not current and in not current display month', () => {
			useCalendarContext.mockReturnValue({
				date: {},
				displayState: { month: MOCK_START_DATE.getMonth(), year: MOCK_START_DATE.getFullYear() },
			})
			const cellDate = new Date(MOCK_START_DATE)
			cellDate.setMonth(MOCK_START_DATE.getMonth() - 1)

			const { result } = renderHook(() => useCellStyle(cellDate, 4))
			expect(result.current.$variant).toBe('otherMonth')
		})
	})
})
