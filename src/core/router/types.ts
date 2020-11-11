import { Context } from 'react'

import { StoreConstructor, Store } from 'core/mobx/types'

export interface RouteStore {
	class: StoreConstructor
	StoreContext: Context<any>
}

export type RouteStoreMapper = Record<string, RouteStore>

export interface RouteContextValue {
	StoreContext: Context<Store>
	value: Store
}

export type RouteStoreContextMapper = Record<string, RouteContextValue>

export enum HistoryActionType {
	Push = 'PUSH',
	Pop = 'POP',
	Replace = 'REPLACE',
}
