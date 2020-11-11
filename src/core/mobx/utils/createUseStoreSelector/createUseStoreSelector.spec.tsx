import React, { createContext } from 'react'

import { renderHook, act } from '@testing-library/react-hooks'
import { observable, action } from 'mobx'

import createUseStoreSelector from '.'
import 'mobx-react-lite/batchingForReactDom'

describe('createUseStoreSelector', () => {
	it('should return value from store by data selector', () => {
		const incrementSpy = jest.fn()
		class MockStore {
			@observable
			value = 1

			@action.bound
			increment() {
				incrementSpy()
				this.value = this.value + 1
			}
		}

		const MockContext = createContext<MockStore>(null)

		const useMockStore = createUseStoreSelector(MockContext)

		const dataSelectorSpy = jest.fn().mockImplementation((mockStore: MockStore) => ({
			value: mockStore.value,
			increment: mockStore.increment,
		}))

		const mockStore = new MockStore()

		const { result, rerender } = renderHook(() => useMockStore(dataSelectorSpy), {
			wrapper: ({ children }: any) => (
				<MockContext.Provider value={mockStore}>{children}</MockContext.Provider>
			),
		})

		expect(result.current.value).toBe(1)

		act(() => result.current.increment())

		rerender()

		expect(result.current.value).toBe(2)
	})
})
