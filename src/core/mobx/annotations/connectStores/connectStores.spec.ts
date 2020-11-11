import connectStores from '.'

describe('connectStores', () => {
	it('should add connectStores method to injected store for binding target store to current store', () => {
		class AnotherStore {}

		@connectStores(['anotherStore'])
		class MockStore {
			anotherStore: AnotherStore
		}

		const mockStore = new MockStore()
		expect(typeof mockStore['connectStores']).toBe('function')

		const anotherStore = new AnotherStore()
		mockStore['connectStores']({
			anotherStore,
		})

		expect(mockStore.anotherStore).toBe(anotherStore)
	})
})
