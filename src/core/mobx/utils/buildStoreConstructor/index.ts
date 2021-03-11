import { StoreConstructorMapper } from 'core/mobx/types'
import { RouteStoreMapper } from 'core/router/types'

export default function buildStoreConstructor(storeMapper: RouteStoreMapper) {
	const storeConstructor = Object.keys(storeMapper).reduce((stores, storeKey) => {
		const StoreClass = storeMapper[storeKey].store

		stores[storeKey] = StoreClass

		return stores
	}, {} as StoreConstructorMapper)

	return storeConstructor
}
