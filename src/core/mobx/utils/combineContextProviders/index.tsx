import React, { Context, ReactNode } from 'react'

import { Store } from 'core/mobx/types'

interface ContextMapper {
	StoreContext: Context<Store>
	value: Store
}

function combineContextProviders(
	contextMapper: Record<string, ContextMapper>,
	children: ReactNode,
) {
	return Object.values(contextMapper).reduce(
		(currentWrapper, { StoreContext, value }) => (
			<StoreContext.Provider value={value}>{currentWrapper}</StoreContext.Provider>
		),
		children,
	)
}

export default combineContextProviders
