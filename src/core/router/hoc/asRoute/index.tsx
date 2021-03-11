import React, { ComponentType } from 'react'

import buildStoreConstructor from 'core/mobx/utils/buildStoreConstructor'
import combineContextProviders from 'core/mobx/utils/combineContextProviders'
import mapStoreConstructorToStoreContextValues from 'core/mobx/utils/mapStoreConstructorToStoreContextValues'
import RouteStoresContext from 'core/router/contexts/RouteStoresContext'
import useInitializeRouteStores from 'core/router/hooks/useInitializeRouteStores'
import { RouteStoreMapper } from 'core/router/types'

interface RouteConfig {
	stores: RouteStoreMapper
}

function asRoute<Props>(Component: ComponentType<Props>, { stores: storeMapper }: RouteConfig) {
	const storeConstructor = buildStoreConstructor(storeMapper)

	const WrappedRoute = (props: Props) => {
		const { stores, isInitialized } = useInitializeRouteStores(storeConstructor)
		const storeContextValues = mapStoreConstructorToStoreContextValues(stores, storeMapper)

		if (!isInitialized) return null

		return (
			<RouteStoresContext.Provider value={stores}>
				{combineContextProviders(storeContextValues, <Component {...props} />)}
			</RouteStoresContext.Provider>
		)
	}

	return WrappedRoute
}

export default asRoute
