import { createContext } from 'react'

import convertRouteStoreMapperToStoreConstructorMapper from '.'

describe('convertRouteStoreMapperToStoreConstructorMapper', () => {
	it('should return object with class only', () => {
		class OuterStore {}
		class InnerStore {}

		const outerContext = createContext<OuterStore>(null)
		const innerContext = createContext<InnerStore>(null)

		const mapper = {
			inner: {
				StoreContext: innerContext,
				class: InnerStore,
			},
			outer: {
				StoreContext: outerContext,
				class: OuterStore,
			},
		}

		const storeConstructorMapper = convertRouteStoreMapperToStoreConstructorMapper(mapper)

		expect(storeConstructorMapper).toEqual({
			inner: InnerStore,
			outer: OuterStore,
		})
	})
})
