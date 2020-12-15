import React, { ComponentType } from 'react'

import buildStores from 'core/mobx/utils/buildStores'
import combineContextProviders from 'core/mobx/utils/combineContextProviders'
import mapStoreConstructorToStoreContextValues from 'core/mobx/utils/mapStoreConstructorToStoreContextValues'
// import RouteStoresContext from 'core/router/contexts/RouteStoresContext'
import useInitializeRouteStores from 'core/router/hooks/useInitializeRouteStores'
import { RouteStoreMapper } from 'core/router/types'

interface RouteConfig {
	stores: RouteStoreMapper
}

function asRoute<Props>(Component: ComponentType<Props>, { stores: storeMapper }: RouteConfig) {
	const WrappedRoute = (props: Props) => {
		const storeConstructor = buildStores(storeMapper)
		const storeContextValues = mapStoreConstructorToStoreContextValues(storeConstructor, storeMapper)

		useInitializeRouteStores(storeConstructor)

		return <div>{combineContextProviders(storeContextValues, <Component {...props} />)}</div>
	}

	return WrappedRoute
}

export default asRoute
