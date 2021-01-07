import { useEffect, useState } from 'react'

import useMountStores from 'core/mobx/hooks/useMountStores'
import useUnMountStores from 'core/mobx/hooks/useUnMountStores'
import { StoreMapper } from 'core/mobx/types'
import initStores from 'core/mobx/utils/initStores'

function useInitializeRouteStores(stores: StoreMapper) {
	const [isInitialized, setInitialize] = useState(false)
	const mountStores = useMountStores(stores)
	const unMountStores = useUnMountStores(stores)

	const setStore = async () => {
		initStores(stores)
		await mountStores()
	}

	useEffect(() => {
		setStore()
		setInitialize(true)

		return () => {
			unMountStores()
		}
	}, [])

	return isInitialized
}

export default useInitializeRouteStores
