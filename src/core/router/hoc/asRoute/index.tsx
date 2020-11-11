import React, { ComponentType } from 'react'

import combineContextProviders from 'core/mobx/utils/combineContextProviders'
import RouteStoresContext from 'core/router/contexts/RouteStoresContext'
import useInitializeContextStoreMapper from 'core/router/hooks/useInitializeContextStoreMapper'
import useInitializeRouteStores from 'core/router/hooks/useInitializeRouteStores'
import { RouteStoreMapper } from 'core/router/types'
import convertRouteStoreMapperToStoreConstructorMapper from 'core/router/utils/convertRouteStoreMapperToStoreConstructorMapper'

interface RouteConfig {
	stores: RouteStoreMapper
	Loading?: ComponentType<{}>
}

function asRoute<Props>(Component: ComponentType<Props>, { stores: storeMapper, Loading }: RouteConfig) {
	const storeConstructorMapper = convertRouteStoreMapperToStoreConstructorMapper(storeMapper)

	const WrappedRoute = (props: Props) => {
		const { stores, isInitialized } = useInitializeRouteStores(storeConstructorMapper)
		const storeContextValues = useInitializeContextStoreMapper(storeMapper, stores)

		if (!isInitialized) {
			if (Loading) {
				return <Loading />
			}

			return null
		}

		return (
			<RouteStoresContext.Provider value={stores}>
				{combineContextProviders(storeContextValues, <Component {...props} />)}
			</RouteStoresContext.Provider>
		)
	}

	WrappedRoute.storeClasses = storeConstructorMapper

	return WrappedRoute
}

export default asRoute
