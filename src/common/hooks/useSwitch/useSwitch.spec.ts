import { renderHook, act } from '@testing-library/react-hooks'

import useSwitch from '.'

describe('Test useSwitch', () => {
	it('should set `isOpen` as true when open is called.', () => {
		const { result } = renderHook(() => useSwitch())
		expect(result.current.isOpen).toBe(false)

		act(() => {
			result.current.open()
		})

		expect(result.current.isOpen).toBe(true)
	})

	it('should set `isOpen` as false when close is called.', () => {
		const { result } = renderHook(() => useSwitch(true))
		expect(result.current.isOpen).toBe(true)

		act(() => {
			result.current.close()
		})

		expect(result.current.isOpen).toBe(false)
	})
})
