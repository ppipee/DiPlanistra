import { Store } from 'core/mobx/types'
import { RouteStoreContextMapper, RouteStoreMapper } from 'core/router/types'

export default function mapStoreConstructorToStoreContextValues(
	storeConstructor: Record<string, Store>,
	storeMapper: RouteStoreMapper,
) {
	return Object.keys(storeMapper).reduce((storeContextValues, storeKey) => {
		storeContextValues[storeKey] = {
			StoreContext: storeMapper[storeKey].StoreContext,
			value: storeConstructor[storeKey],
		}

		return storeContextValues
	}, {} as RouteStoreContextMapper)
}
