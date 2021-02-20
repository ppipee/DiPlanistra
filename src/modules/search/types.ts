export type DistanceFilterType = 500 | 1000 | 2000 | 3000 | 5000

export interface SearchTripsQueries {
	regions?: string | number
	sortby?: 'view' | 'bookmark'
	search?: string
}
