import { LatLng } from 'common/types/wongnai/common'
import { BasicPhoto } from 'common/types/wongnai/image'

export interface City {
	id: number
	name: string
	coordinate: LatLng
	coverPicture: BasicPhoto
	storageViewGroupId: number
}

export enum SearchPlaceParams {
	Domain = 'domain',
	Regions = 'regions',
	Rating = 'rating',
	Distance = 'distance',
	CRegion = 'cregion',
	Categories = 'categories',
}

export type SearchParams = Record<SearchPlaceParams, any>
