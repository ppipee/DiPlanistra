import { Store } from 'core/mobx/types'

function connectStores(currentStores: Record<string, Store>, parentStores: Record<string, Store>) {
	const mergedStores = { ...parentStores, ...currentStores }

	Object.values(currentStores).forEach(store => {
		if (store.connectStores) {
			store.connectStores(mergedStores)
		}
	})

	return mergedStores
}

export default connectStores
