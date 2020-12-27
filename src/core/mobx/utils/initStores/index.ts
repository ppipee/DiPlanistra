import { StoreMapper } from 'core/mobx/types'

export default function initStores(stores: StoreMapper) {
	Object.keys(stores).forEach((storeKey) => {
		const store = stores[storeKey]
		const onInit = store.onInit

		if (onInit) {
			store.onInit(stores)
		}
	})
}
