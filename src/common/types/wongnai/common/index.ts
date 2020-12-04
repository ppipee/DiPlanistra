import { BasicPhoto } from '../image'

export interface LocalizeName {
	primary: string
	thai?: string
	english?: string
}

export interface Region {
	id: number
	url: string
	name: string
	welcomeUrl: string
	shortName?: string
	nameOnly: LocalizeName
	type: NameValue<number>
	country?: string
	city?: string
	cityName?: string
	cityUrl?: string
	cityWelcomeUrl?: string
	district?: string
	districtName?: string
	subDistrict?: string
	subDistrictName?: string
	coordinate: LatLng
	numberOfBusinesses: number
	numberOfRestaurants: number
	numberOfBeautyBusinesses: number
	numberOfHotels: number
	numberOfAttractions: number
	knownLocation: number
	featured: boolean
	featuredTarget?: string
	featuredMessage?: string
	iconFeatured?: string
	subRegions?: Region[]
	aliases?: string[]
	coverPicture: BasicPhoto
}

export interface LatLng {
	lat: number
	lng: number
}

export interface RegionName {
	regionName: string
	name: string
	path: string
	url: string
	params: (NameValue<string> | NameValueDescription)[]
	entities: RegionName[]
}

interface NameValueDescription {
	name: string
	value: string
	description: string
}

export interface Time {
	iso: string
	full: string
	timePassed: string
}

export interface NameValue<T> {
	name: string
	value: T
}
