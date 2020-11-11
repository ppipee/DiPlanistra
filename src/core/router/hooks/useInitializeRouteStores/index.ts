import { useEffect } from 'react'

import { isEmpty } from 'lodash'

import useUnInitializedStoreKeys from 'core/mobx/hooks/useUnInitializedStoreKeys'
import { StoreConstructorMapper } from 'core/mobx/types'
import connectStores from 'core/mobx/utils/connectStores'
import initializeStoreFromMapperByKey from 'core/mobx/utils/initializeStoreFromMapperByKey'
import useRouteStoresState from 'core/router/hooks/useRouteStoresState'

function useInitializeRouteStores(storeMapper: StoreConstructorMapper) {
	const [stores, setStores] = useRouteStoresState()
	const unInitializedStoreKeys = useUnInitializedStoreKeys(stores, storeMapper)
	const isInitialized = isEmpty(unInitializedStoreKeys)

	useEffect(() => {
		if (!isInitialized) {
			const newInitializedStores = initializeStoreFromMapperByKey(
				storeMapper,
				unInitializedStoreKeys,
			)

			const mergedStores = connectStores(newInitializedStores, stores)

			setStores(mergedStores)
		}
	}, [isInitialized])

	return {
		stores,
		isInitialized,
	}
}

export default useInitializeRouteStores
