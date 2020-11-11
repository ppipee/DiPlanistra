import initializeStoreFromMapperByKey from '.'

describe('initializeStoreFromMapperByKey', () => {
	it('should initialized store from mapper by key', () => {
		class StoreA {}
		class StoreB {}
		class StoreC {}

		const stores = initializeStoreFromMapperByKey(
			{
				a: StoreA,
				b: StoreB,
				c: StoreC,
			},
			['a', 'b'],
		)

		expect(stores).toEqual({
			a: new StoreA(),
			b: new StoreB(),
		})
	})
})
