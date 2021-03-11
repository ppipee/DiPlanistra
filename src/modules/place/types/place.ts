import { DomainValue } from 'common/constants/business'
import { NameValue, IdName } from 'common/types/wongnai/common'
import { BasicPhoto } from 'common/types/wongnai/image'

export type FacilitiesProps = Record<PlaceFacility, boolean | null | undefined>

export enum PlaceFacility {
	Wifi = 'wifi',
	Toilet = 'toilet',
	WheelchairAccess = 'wheelchairAccess',
	Souvenir = 'souvenir',
	AttractionRestaurant = 'attractionRestaurant',
	Atm = 'atm',
	ParkingType = 'parkingType',
	PetFriendly = 'petFriendly',
	TrueMoneyWallet = 'trueMoneyWallet',
	CreditCardAccept = 'creditCardAccept',
}

export interface Place extends PlacePreview {
	lat: number
	lng: number
	contact: Contact
	wifi?: {
		name: string
		value: string
		remark: string
	}
	trueMoneyWallet?: boolean
	petFriendly?: boolean
	// qrCodeAccepted?: boolean // phase3
	parkingType?: {
		id: number
		name: string
		remark: string
	}
	creditCardAccepted?: boolean
}

export interface PlacePreview {
	id: string
	publicId: string
	displayName: string
	defaultPhoto: BasicPhoto
	coverPhoto?: BasicPhoto
	rating?: number
	domain: Domain
	distance?: number
	statistic: PlaceStatistic
	priceRange: NameValue<number>
	workingHoursStatus?: WorkingHourStatus
	hours?: Hour[]
	categories: Category[]
	attractionInformation?: AttractionInformation
	isFavorite?: boolean
}

export interface PlaceStatistic {
	rating: number
	numberOfReviews: number
}

export interface Hour {
	day: number
	from: string
	to: string
}

export interface WorkingHourStatus {
	open: boolean
	message?: string
	closingSoon?: boolean
}

export interface Category {
	id: number
	name: string
	numberOfBusinesses?: number
	categories?: Category[]
}

export interface AttractionInformation {
	atm?: boolean
	attractionRestaurant?: string
	wheelchairAccess?: boolean
	souvenir?: boolean
	toilet?: boolean
	entryFee?: {
		adult: number
		children: number
		feeCondition: string | boolean | null
		currency: string
	}
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
	email?: string
	phoneno?: string
	line?: string
	instagram?: string
	twitter?: string
	facebookHomepage?: string
	homepage?: string // phase3
}

export interface Domain {
	name: string
	value: DomainValue
}
