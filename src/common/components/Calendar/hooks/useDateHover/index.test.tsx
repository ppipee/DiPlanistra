import { renderHook } from '@testing-library/react-hooks'

import * as useDateHoverType from '.'

describe('useDateHover', () => {
	const useCalendarContextSpy = jest.fn()
	const setDateHoverSpy = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)

	const { default: useDateHover } = require('.') as typeof useDateHoverType

	afterEach(() => {
		jest.resetAllMocks()
	})

	beforeEach(() => {
		useCalendarContextSpy.mockReturnValue({
			setDateHover: setDateHoverSpy,
		})
	})

	it('should set date when mouse hover on cell', () => {
		const { result } = renderHook(() => useDateHover())
		const cellDate = new Date(2020, 5, 10)

		result.current.mouseEnter(cellDate)

		expect(setDateHoverSpy).toBeCalledTimes(1)
		expect(setDateHoverSpy).toBeCalledWith(cellDate)
	})

	it('should not date when mouse hover on null cell', () => {
		const { result } = renderHook(() => useDateHover())

		result.current.mouseEnter(null)

		expect(setDateHoverSpy).not.toBeCalled()
	})

	it('should set undefined when mouse out of cell', () => {
		const { result } = renderHook(() => useDateHover())

		result.current.mouseLeave()

		expect(setDateHoverSpy).toBeCalledTimes(1)
	})
})
