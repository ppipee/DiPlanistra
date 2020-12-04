import { LatLng, Region, RegionName, Time } from '../common/index'
import { HotelInformation } from '../hotel'
import { BasicPhoto } from '../image'
import { Page } from '../page'
import { BusinessStatistic } from '../statistic'

export interface Business {
	id: number
	eid?: string
	gid: string
	publicId: string
	url: string
	photosUrl: string
	lat: number
	lng: number
	priceRange: {
		name: string
		value: number
	}
	neighborhoods?: string[]
	contact: Contact
	name: string
	displayName: string
	logo?: BasicPhoto
	categories: Category[]
	defaultPhoto: BasicPhoto
	place?: Place
	placeInformation?: PlaceInformation
	targetViewGroupId: number
	mainPhoto: BasicPhoto
	coverPhoto?: BasicPhoto
	workingHoursStatus?: WorkingHourStatus
	statistic: BusinessStatistic
	hotelInformation?: HotelInformation
	attractionInformation?: AttractionInformation
	photos?: {
		page: Page<BasicPhoto>
		query: {
			url: string
			fullUrl: string
			pathOnly: string
			params: {
				name: string
				value: number | string
			}[]
		}
	}
	hours?: Hour[]
	nearbyPlaces?: Region[]
	rating?: number
	distance?: number
	wifi?: {
		name: string
		value: string
		remark: string
	}
	domain: {
		name: string
		value: number
	}
	trueMoneyWallet?: boolean
	hotelRestaurant?: boolean
	petFriendly?: boolean
	qrCodeAccepted?: boolean
	parkingType?: {
		id: number
		name: string
		remark: string
	}
	creditCardAccepted?: boolean
	goodForGroups?: boolean
	goodForKids?: boolean
	takeReservation?: boolean
	musicVenues?: boolean
}

export interface AttractionInformation {
	caution?: string
	atm?: boolean
	attractionRestaurant?: string
	cellPhoneSignal?: string
	wheelchairAccess?: boolean
	souvenir?: boolean
	toilet?: boolean
	entryFee?: {
		adult: number
		children: number
		feeCondition: string | boolean | null
		currency: string
	}
	workingHoursStatus?: WorkingHourStatus
	workingHours: WorkingHour[]
	hours: Hour[]
}

export interface WorkingHour {
	day: string
	period: string[]
}

export interface WorkingHourStatus {
	open: boolean
	message?: string
	temporaryCloseStartDate?: Time
	temporaryCloseEndDate?: Time
	closingSoon?: boolean
}

export interface Hour {
	day: number
	from: string
	to: string
}

export interface PlaceInformation {
	zone: string[]
	floor?: string[]
}

export interface Place {
	id: number
	url: string
	sponsored?: boolean
	name: string
	coordinate: LatLng
	numberOfBusinesses: number
	numberOfRestaurants: number
	numberOfBeautyBusinesses: number
	numberOfHotels: number
	numberOfAttractions: number
	placeInformation?: PlaceInformation
	information: {
		nid?: string
		tags?: PlaceTag[]
	}
	contact: Contact
	logo?: BasicPhoto
	mainPicture: BasicPhoto
}

interface PlaceTag {
	id: number
	name: string
	iconUrl: string
	entities: RegionName[]
}

interface IdName {
	id: number
	name: string
}

export interface Contact {
	address: {
		street: string
		hint: string
		subDistrict?: IdName
		district?: IdName
		city?: IdName
		streetAddress?: string
	}
	businessno?: string
	homepage?: string
	facebookHomepage?: string
	email?: string
	callablePhoneno?: string
	callablePhoneNumbers?: string[]
	phoneno?: string
	line?: string
	instagram?: string
	twitter?: string
}

export interface Category {
	id: number
	name: string
	internationalName: string
	iconUrl: string
	iconFullUrl: string
	nicePhoto?: BasicPhoto
	domain: {
		name: string
		value: number
	}
	numberOfBusinesses?: number
	categories?: Category[]
}
