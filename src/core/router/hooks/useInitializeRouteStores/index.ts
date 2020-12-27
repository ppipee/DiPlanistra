import { useEffect } from 'react'

import useMountStores from 'core/mobx/hooks/useMountStores'
import useUnMountStores from 'core/mobx/hooks/useUnMountStores'
import { StoreMapper } from 'core/mobx/types'
import initStores from 'core/mobx/utils/initStores'

function useInitializeRouteStores(stores: StoreMapper) {
	const mountStores = useMountStores(stores)
	const unMountStores = useUnMountStores(stores)

	useEffect(() => {
		initStores(stores)
		mountStores()

		return () => {
			unMountStores()
		}
	}, [])
}

export default useInitializeRouteStores
