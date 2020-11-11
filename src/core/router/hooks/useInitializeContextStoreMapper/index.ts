import { useMemo } from 'react'

import { StoreMapper } from 'core/mobx/types'
import { RouteStoreMapper, RouteStoreContextMapper } from 'core/router/types'

function useInitializeContextStoreMapper(
	routeStoreMapper: RouteStoreMapper,
	storeMapper: StoreMapper,
) {
	return useMemo(
		() =>
			Object.keys(routeStoreMapper).reduce(
				(currentMapper, key) => ({
					...currentMapper,
					[key]: {
						StoreContext: routeStoreMapper[key].StoreContext,
						value: storeMapper[key],
					},
				}),
				{} as RouteStoreContextMapper,
			),
		[routeStoreMapper, storeMapper],
	)
}

export default useInitializeContextStoreMapper
