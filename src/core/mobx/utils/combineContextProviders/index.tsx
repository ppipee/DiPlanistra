import React, { ReactNode } from 'react'

import { RouteStoreContextMapper } from 'core/router/types'

function combineContextProviders(contextMapper: RouteStoreContextMapper, children: ReactNode) {
	return Object.values(contextMapper).reduce(
		(currentWrapper, { StoreContext, value }) => (
			<StoreContext.Provider value={value}>{currentWrapper}</StoreContext.Provider>
		),
		children,
	)
}

export default combineContextProviders
