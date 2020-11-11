import { renderHook } from '@testing-library/react-hooks'

import * as useInitializeRouteStoresType from '.'

describe('useInitializeRouteStores', () => {
	const useUnInitializedStoreKeysSpy = jest.fn()
	jest.doMock('core/mobx/hooks/useUnInitializedStoreKeys', () => useUnInitializedStoreKeysSpy)

	const initializeStoreFromMapperByKeySpy = jest.fn()
	jest.doMock(
		'core/mobx/utils/initializeStoreFromMapperByKey',
		() => initializeStoreFromMapperByKeySpy,
	)

	const connectStoresSpy = jest.fn()
	jest.doMock('core/mobx/utils/connectStores', () => connectStoresSpy)

	class MockParentStore {}
	const mockRouteStores = {
		parent: new MockParentStore(),
	}
	const setStoresSpy = jest.fn()
	const useRouteStoresStateSpy = jest.fn()
	jest.doMock('core/router/hooks/useRouteStoresState', () => useRouteStoresStateSpy)

	const { default: useInitializeRouteStores } = require('.') as typeof useInitializeRouteStoresType

	beforeEach(() => {
		useRouteStoresStateSpy.mockReturnValue([mockRouteStores, setStoresSpy])
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should return isInitialized as true if uninitialized stores are empty', () => {
		useUnInitializedStoreKeysSpy.mockReturnValue([])

		const { result } = renderHook(() => useInitializeRouteStores({}))

		expect(useUnInitializedStoreKeysSpy).toBeCalledWith(mockRouteStores, {})
		expect(useRouteStoresStateSpy).toBeCalledTimes(1)
		expect(result.current.isInitialized).toBe(true)
	})

	it('should return isInitialized as false if uninitialized stores are not empty', () => {
		useUnInitializedStoreKeysSpy.mockReturnValue(['mockStore'])

		const { result } = renderHook(() => useInitializeRouteStores({}))

		expect(useUnInitializedStoreKeysSpy).toBeCalledWith(mockRouteStores, {})
		expect(useRouteStoresStateSpy).toBeCalledTimes(1)
		expect(result.current.isInitialized).toBe(false)
	})

	it('should return stores from route state', () => {
		const { result } = renderHook(() => useInitializeRouteStores({}))

		expect(result.current.stores).toEqual(mockRouteStores)
	})

	it('should not perform initialize store if store is initialized', () => {
		useUnInitializedStoreKeysSpy.mockReturnValue([])

		renderHook(() => useInitializeRouteStores({}))

		expect(connectStoresSpy).not.toBeCalled()
		expect(initializeStoreFromMapperByKeySpy).not.toBeCalled()
	})

	it('should perform initialize store if store is not initialized', () => {
		class MockStore {}

		useUnInitializedStoreKeysSpy.mockReturnValue(['mockStore'])
		initializeStoreFromMapperByKeySpy.mockReturnValue({
			mockStore: new MockStore(),
		})

		connectStoresSpy.mockReturnValue({
			mockStore: new MockStore(),
			parent: new MockParentStore(),
		})

		renderHook(() =>
			useInitializeRouteStores({
				mockStore: MockStore,
			}),
		)

		expect(initializeStoreFromMapperByKeySpy).toBeCalledWith(
			{
				mockStore: MockStore,
			},
			['mockStore'],
		)
		expect(connectStoresSpy).toBeCalledWith(
			{
				mockStore: new MockStore(),
			},
			{
				parent: new MockParentStore(),
			},
		)
		expect(setStoresSpy).toBeCalledWith({
			mockStore: new MockStore(),
			parent: new MockParentStore(),
		})
	})

	it('should perform initialize store if store is changed', () => {
		class MockStore {}

		useUnInitializedStoreKeysSpy.mockReturnValue([])

		const { rerender } = renderHook(() =>
			useInitializeRouteStores({
				mockStore: MockStore,
			}),
		)

		expect(connectStoresSpy).not.toBeCalled()
		expect(initializeStoreFromMapperByKeySpy).not.toBeCalled()

		useUnInitializedStoreKeysSpy.mockReturnValue(['mockStore'])
		initializeStoreFromMapperByKeySpy.mockReturnValue({
			mockStore: new MockStore(),
		})

		connectStoresSpy.mockReturnValue({
			mockStore: new MockStore(),
			parent: new MockParentStore(),
		})

		rerender()

		expect(initializeStoreFromMapperByKeySpy).toBeCalledWith(
			{
				mockStore: MockStore,
			},
			['mockStore'],
		)
		expect(connectStoresSpy).toBeCalledWith(
			{
				mockStore: new MockStore(),
			},
			{
				parent: new MockParentStore(),
			},
		)
		expect(setStoresSpy).toBeCalledWith({
			mockStore: new MockStore(),
			parent: new MockParentStore(),
		})
	})
})
