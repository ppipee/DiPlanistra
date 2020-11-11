import React from 'react'

import { renderHook, act } from '@testing-library/react-hooks'

import RouteStoresContext from 'core/router/contexts/RouteStoresContext'

import useRouteStoresState from '.'

describe('useRouteStoresState', () => {
	it('should return state and handler which default as routeStore', () => {
		class MockStore {}

		const stores = {
			mock: new MockStore(),
		}

		const { result } = renderHook(() => useRouteStoresState(), {
			wrapper: ({ children }: any) => (
				<RouteStoresContext.Provider value={stores}>{children}</RouteStoresContext.Provider>
			),
		})

		expect(result.current[0]).toEqual({
			mock: new MockStore(),
		})

		act(() => result.current[1]({}))

		expect(result.current[0]).toEqual({})
	})
})
