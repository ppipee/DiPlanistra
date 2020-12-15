import { Store } from 'core/mobx/types'
import { RouteStoreMapper } from 'core/router/types'

export default function buildStores(storeMapper: RouteStoreMapper) {
	const stores = Object.keys(storeMapper).reduce((stores, storeKey) => {
		const StoreClass = storeMapper[storeKey].store

		stores[storeKey] = new StoreClass()

		return stores
	}, {} as Record<string, Store>)

	return stores
}
