import { Location } from 'history'

import { Params, Query } from 'core/router/types'

export type DefaultMethodStore = {
	onInit?: (stores: StoreMapper) => void
	onMount?: ({
		params,
		query,
	}: {
		params: Record<string, string>
		query: Record<string, string>
	}) => void | Promise<void>
	onUnMount?: () => void
}

export interface MountParams {
	params: Params
	query: Query
	location: Location
}

export type Store = Record<string, any>

export type StoreConstructor = new () => Store

export type StoreMapper = Record<string, Store>
