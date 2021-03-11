import { StoreConstructorMapper, Store } from 'core/mobx/types'

function initializeStoreFromMapperByKey(storeMapper: StoreConstructorMapper, keys: string[]) {
	return keys.reduce((mappedStores, key) => {
		const StoreClass = storeMapper[key]

		mappedStores[key] = new StoreClass()

		return mappedStores
	}, {} as Record<string, Store>)
}

export default initializeStoreFromMapperByKey
