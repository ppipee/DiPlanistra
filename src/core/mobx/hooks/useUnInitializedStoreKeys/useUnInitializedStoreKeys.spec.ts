import { renderHook } from '@testing-library/react-hooks'

import useUnInitializedStoreKeys from '.'

describe('useUnInitializedStoreKeys', () => {
	it('should return only uninitialized keys', () => {
		class MockStore {}
		const { result } = renderHook(() =>
			useUnInitializedStoreKeys(
				{
					initializedStore1: {},
					initializedStore2: {},
				},
				{
					initializedStore1: MockStore,
					initializedStore2: MockStore,
					unInitializedStore3: MockStore,
				},
			),
		)

		expect(result.current).toEqual(['unInitializedStore3'])
	})
})
