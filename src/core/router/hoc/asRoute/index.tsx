import React, { ComponentType } from 'react'

import buildStores from 'core/mobx/utils/buildStores'
import combineContextProviders from 'core/mobx/utils/combineContextProviders'
import mapStoreConstructorToStoreContextValues from 'core/mobx/utils/mapStoreConstructorToStoreContextValues'
import useInitializeRouteStores from 'core/router/hooks/useInitializeRouteStores'
import { RouteStoreMapper } from 'core/router/types'

interface RouteConfig {
	stores: RouteStoreMapper
}

function asRoute<Props>(Component: ComponentType<Props>, { stores: storeMapper }: RouteConfig) {
	const storeConstructor = buildStores(storeMapper)

	const WrappedRoute = (props: Props) => {
		const isInitialized = useInitializeRouteStores(storeConstructor)
		const storeContextValues = mapStoreConstructorToStoreContextValues(storeConstructor, storeMapper)

		if (!isInitialized) return null

		return <>{combineContextProviders(storeContextValues, <Component {...props} />)}</>
	}

	return WrappedRoute
}

export default asRoute
