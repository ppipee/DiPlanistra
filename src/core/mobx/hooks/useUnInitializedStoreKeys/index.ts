import { useMemo } from 'react'

import { without } from 'lodash'

import { StoreConstructorMapper, Store } from 'core/mobx/types'

function useUnInitializedStoreKeys(
	stores: Record<string, Store>,
	storeMapper: StoreConstructorMapper,
) {
	return useMemo(() => {
		const initializedStoreKeys = Object.keys(stores)
		const mapperStoreKeys = Object.keys(storeMapper)
		return without(mapperStoreKeys, ...initializedStoreKeys)
	}, [stores, storeMapper])
}

export default useUnInitializedStoreKeys
