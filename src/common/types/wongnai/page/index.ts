export interface PageInformation {
	number: number
	size: number
}

export interface Page<T> {
	pageInformation: PageInformation
	first: number
	last: number
	totalNumberOfPages: number
	totalNumberOfEntities: number
	entities: T[]
}
