import { useEffect, useState } from 'react'

import { isEmpty } from 'lodash'

import useKeysFromUnInitializedStore from 'core/mobx/hooks/useKeysFromUnInitializedStore'
import useMountStores from 'core/mobx/hooks/useMountStores'
import useUnMountStores from 'core/mobx/hooks/useUnMountStores'
import { StoreConstructorMapper } from 'core/mobx/types'
import initializeStoreFromMapperByKey from 'core/mobx/utils/initializeStoreFromMapperByKey'
import initStores from 'core/mobx/utils/initStores'

import useRouteStoresState from '../useRouteStoresState'

function useInitializeRouteStores(storeMapper: StoreConstructorMapper) {
	const [stores, setStores] = useRouteStoresState()
	const [isInitStore, setIsInit] = useState(false)
	const unInitializedStoreKeys = useKeysFromUnInitializedStore(stores, storeMapper)
	const isInitialized = isEmpty(unInitializedStoreKeys)

	const mountStores = useMountStores()
	const unMountStores = useUnMountStores()

	const initStore = async () => {
		initStores(stores)
		await mountStores(stores)
	}

	useEffect(() => {
		if (!isInitialized) {
			const newInitializedStores = initializeStoreFromMapperByKey(storeMapper, unInitializedStoreKeys)
			const mergedStores = { ...stores, ...newInitializedStores }

			setStores(mergedStores)
		}

		if (isInitialized && !isInitStore) {
			initStore()
			setIsInit(true)
		}

		return () => {
			if (isInitialized && isInitStore) {
				unMountStores(stores)
			}
		}
	}, [isInitialized, isInitStore])

	return { isInitialized: isInitStore && isInitialized, stores }
}

export default useInitializeRouteStores
