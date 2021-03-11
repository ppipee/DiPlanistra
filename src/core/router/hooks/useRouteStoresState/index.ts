import { useContext, useState } from 'react'

import RouteStoresContext from 'core/router/contexts/RouteStoresContext'

function useRouteStoresState() {
	const routeStores = useContext(RouteStoresContext)
	return useState(routeStores)
}

export default useRouteStoresState
