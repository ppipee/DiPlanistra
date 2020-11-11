import { renderHook, act } from '@testing-library/react-hooks'

import useVariantSwitching from '.'

describe('useVariantSwitching', () => {
	it('should set default for initialVariant', () => {
		const { result } = renderHook(() => useVariantSwitching())

		expect(result.current.variant).toEqual('default')
	})

	it('should use initialVariant from args', () => {
		const { result } = renderHook(() => useVariantSwitching('error'))

		expect(result.current.variant).toEqual('error')
	})

	describe('handleSwitching callback', () => {
		it('should use set as success if passed (true)', () => {
			const { result } = renderHook(() => useVariantSwitching())

			act(() => result.current.handleSwitching(true))
			expect(result.current.variant).toEqual('success')
		})

		it('should use set as error if failed (false)', () => {
			const { result } = renderHook(() => useVariantSwitching())

			act(() => result.current.handleSwitching(false))
			expect(result.current.variant).toEqual('error')
		})

		it('should use set as default if other cases', () => {
			const { result } = renderHook(() => useVariantSwitching())

			act(() => result.current.handleSwitching())
			expect(result.current.variant).toEqual('default')
		})
	})
})
