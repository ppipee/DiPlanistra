export type DistanceFilterType = 500 | 1000 | 2000 | 3000 | 5000

export interface SearchTripsQueries {
	regions?: string | number
	sortby?: 'view' | 'bookmark'
	search?: string
}

export interface SearchEventQueries {
	latitude?: string
	longitude?: string
	regions?: string
	sortby?: 'distance' | 'date'
}
