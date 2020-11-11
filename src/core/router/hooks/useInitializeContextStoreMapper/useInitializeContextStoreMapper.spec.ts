import { createContext } from 'react'

import { renderHook } from '@testing-library/react-hooks'

import useInitializeContextStoreMapper from '.'

describe('useInitializeContextStoreMapper', () => {
	it('should return object with context and store as value', () => {
		class OuterStore {}
		class InnerStore {}

		const outerContext = createContext<OuterStore>(null)
		const innerContext = createContext<InnerStore>(null)

		const routeStoreMapper = {
			inner: {
				StoreContext: innerContext,
				class: InnerStore,
			},
			outer: {
				StoreContext: outerContext,
				class: OuterStore,
			},
		}

		const innerStore = new InnerStore()
		const outerStore = new OuterStore()
		const storeMapper = {
			inner: innerStore,
			outer: outerStore,
		}

		const { result } = renderHook(() =>
			useInitializeContextStoreMapper(routeStoreMapper, storeMapper),
		)

		expect(result.current).toEqual({
			inner: {
				value: innerStore,
				StoreContext: innerContext,
			},
			outer: {
				value: outerStore,
				StoreContext: outerContext,
			},
		})
	})
})
