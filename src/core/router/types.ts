import { Context } from 'react'

// eslint-disable-next-line import/no-cycle
import { StoreConstructor, Store } from 'core/mobx/types'

export interface RouteStore {
	store: StoreConstructor
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

export type Params = Record<string, string>
export type Query = Record<string, string>
